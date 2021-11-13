( async () => {

	const readDir = require("glob").sync
	const path = require("path")
	const { mkdirs } = require("fs-extra")
	const fs = require("fs")
	const YAML = require("js-yaml")
	const JsonRefs = require("json-refs")

	const $RefParser = require("@apidevtools/json-schema-ref-parser");


	const TEMP_DIR = "./schemas/.temp"
	const SCHEMA_DIR = "./schemas/json"
	const YAML_DIR = "./schemas/yaml"


	const deepExtend = (target, source) => {
    if (!(source instanceof Object)) {
        return source;
    }

    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            // let dateValue = (source as any) as Date;
            return new Date(source.getTime());

        case Object:
            if (target === undefined) {
                target = {};
            }
            break;

        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;

        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }

    for (let prop in source) {
        if (!Object.prototype.hasOwnProperty.call(source, prop)) continue;
        target[prop] = deepExtend(target[prop], source[prop]);
    }

    return target;
};



	if(fs.existsSync(SCHEMA_DIR)){
		fs.rmdirSync(SCHEMA_DIR, {recursive: true});
	}
	mkdirs(SCHEMA_DIR)
	
	if(fs.existsSync(TEMP_DIR)){
		fs.rmdirSync(TEMP_DIR, {recursive: true});
	}
	mkdirs(TEMP_DIR)

	readDir(`${YAML_DIR}/*.yaml`).forEach( async yamlFile => {
		
		let jsonSch = YAML.load(fs.readFileSync(yamlFile).toString())
		console.log("Temp > "+path.resolve(`${TEMP_DIR}/${path.basename(yamlFile,".yaml")}`))
		fs.writeFileSync(path.resolve(`${TEMP_DIR}/${path.basename(yamlFile,".yaml")}`), JSON.stringify(jsonSch, null," ") )	
	
	})

	let commonDefinitions = JSON.parse(fs.readFileSync(path.resolve(TEMP_DIR,"./common-definitions")).toString())
	
	await Promise.all(readDir(`${TEMP_DIR}/*`).map( async file => {
		
		file = path.resolve(file) 
		
		console.log("Resolve > "+path.resolve(`${SCHEMA_DIR}/${path.basename(file)}.schema.json`))
		
		let {resolved, refs} = await JsonRefs.resolveRefs(
			deepExtend( JSON.parse(fs.readFileSync(file).toString()), commonDefinitions),
			{ 
				location: file,
				filter: (refDetails, path) => {
					if(/^\#\/definitions\//.test(refDetails.uri)){
						console.log("ignore ", refDetails.uri)
						return false
					}
					return true
				}
			}
		)
		
		fs.writeFileSync(path.resolve(`${SCHEMA_DIR}/${path.basename(file)}.schema.json`), JSON.stringify(resolved, null," ") )	
	
	}))

	fs.rmdirSync(TEMP_DIR, {recursive: true})



})()


