( async () => {

	const path = require("path")
	const { mkdirs, copySync } = require("fs-extra")
	const fs = require("fs")
	const YAML = require("js-yaml")
	const JsonRefs = require("json-refs")
	
	const $RefParser = require("@apidevtools/json-schema-ref-parser");


	const TEMP_DIR = "./schemas/.temp"
	const SCHEMA_DIR = "./schemas/json"
	const YAML_DIR = "./schemas/yaml"


	const processFolderRecursive =  (dir, fileCallback) => Promise.all(
		fs.readdirSync(dir).map( async element => {
	        if (fs.lstatSync(path.join(dir, element)).isFile()) {
	            // console.log("Start", element)
	            await fileCallback(path.join(dir, element))
	            // console.log("Done", element)
	        } else {
	            await processFolderRecursive(path.join(dir, element), fileCallback);
	        }
	    })	
	)




	

	const yaml2json = file => {
		if(path.extname(file) != ".yaml") return
		
		let jsonSch = YAML.load(fs.readFileSync(file).toString())
		
		// console.log("Temp > "+path.resolve(`${path.dirname(file)}/${path.basename(file,".yaml")}`))

		fs.writeFileSync(path.resolve(`${path.dirname(file)}/${path.basename(file,".yaml")}`), JSON.stringify(jsonSch, null," ") )	
	
	}

	const removeTempFiles = file => {
		if(path.extname(file) == ".json") return
		
		// console.log("Remove > "+file)
		fs.unlinkSync(file)
	}


	let commonDefinitions = YAML.load(fs.readFileSync(path.resolve(YAML_DIR,"./common-definitions.yaml")).toString())
	// console.log("Read ", path.resolve(YAML_DIR,"./common-definitions.yaml"))


	const resolveSchema = async file => {
		if(path.extname(file) != "") return

		let {resolved, refs} = await JsonRefs.resolveRefs(
			deepExtend( JSON.parse(fs.readFileSync(file).toString()), commonDefinitions),
			{ 
				location: file,
				filter: (refDetails, path) => {
					if(/^\#\/definitions\//.test(refDetails.uri)){
						// console.log("ignore ", refDetails.uri)
						return false
					}
					return true
				}
			}
		)

		console.log("Resolve > "+path.resolve(`${path.dirname(file)}/${path.basename(file)}.schema.json`))
		
		fs.writeFileSync(path.resolve(`${path.dirname(file)}/${path.basename(file)}.schema.json`), JSON.stringify(resolved, null," ") )	
		
	}


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
	// console.log(`Create ${SCHEMA_DIR}`)
	
	if(fs.existsSync(TEMP_DIR)){
		fs.rmdirSync(TEMP_DIR, {recursive: true});
	}
	mkdirs(TEMP_DIR)
	// console.log(`Create ${TEMP_DIR}`)
	
	copySync(YAML_DIR, TEMP_DIR, { overwrite: true })
	// console.log(`Copy ${YAML_DIR} -> ${TEMP_DIR}`)
	
	await processFolderRecursive(TEMP_DIR, yaml2json)
	await processFolderRecursive(TEMP_DIR, resolveSchema)

	copySync(TEMP_DIR, SCHEMA_DIR, { overwrite: true })
	// console.log(`Copy ${TEMP_DIR} -> ${SCHEMA_DIR}`)
	
	await processFolderRecursive(SCHEMA_DIR, removeTempFiles)
	
	// readDir(`${YAML_DIR}/*.yaml`).forEach( async yamlFile => {
		
	// 	let jsonSch = YAML.load(fs.readFileSync(yamlFile).toString())
	// 	console.log("Temp > "+path.resolve(`${TEMP_DIR}/${path.basename(yamlFile,".yaml")}`))
	// 	fs.writeFileSync(path.resolve(`${TEMP_DIR}/${path.basename(yamlFile,".yaml")}`), JSON.stringify(jsonSch, null," ") )	
	
	// })

	// let commonDefinitions = JSON.parse(fs.readFileSync(path.resolve(TEMP_DIR,"./common-definitions")).toString())
	
	// await Promise.all(readDir(`${TEMP_DIR}/*`).map( async file => {
		
	// 	file = path.resolve(file) 
		
	// 	console.log("Resolve > "+path.resolve(`${SCHEMA_DIR}/${path.basename(file)}.schema.json`))
		
	// 	let {resolved, refs} = await JsonRefs.resolveRefs(
	// 		deepExtend( JSON.parse(fs.readFileSync(file).toString()), commonDefinitions),
	// 		{ 
	// 			location: file,
	// 			filter: (refDetails, path) => {
	// 				if(/^\#\/definitions\//.test(refDetails.uri)){
	// 					console.log("ignore ", refDetails.uri)
	// 					return false
	// 				}
	// 				return true
	// 			}
	// 		}
	// 	)
		
	// 	fs.writeFileSync(path.resolve(`${SCHEMA_DIR}/${path.basename(file)}.schema.json`), JSON.stringify(resolved, null," ") )	
	
	// }))

	fs.rmdirSync(TEMP_DIR, {recursive: true})



})()


