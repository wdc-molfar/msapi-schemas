( async () => {

	const readDir = require("glob").sync
	const path = require("path")
	const { mkdirs } = require("fs-extra")
	const fs = require("fs")
	const YAML = require("js-yaml")
	const JsonRefs = require("json-refs")


	const TEMP_DIR = "./schemas/.temp"
	const SCHEMA_DIR = "./schemas/json"
	const YAML_DIR = "./schemas/yaml"


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

	await Promise.all(readDir(`${TEMP_DIR}/*`).map( async file => {
		
		file = path.resolve(file) 
		
		console.log("Resolve > "+path.resolve(`${SCHEMA_DIR}/${path.basename(file)}.schema.json`))
		
		let {resolved, refs} = await JsonRefs.resolveRefs(
			JSON.parse(fs.readFileSync(file).toString()),
			{ location: file }
		)
		
		fs.writeFileSync(path.resolve(`${SCHEMA_DIR}/${path.basename(file)}.schema.json`), JSON.stringify(resolved, null," ") )	
	
	}))

	fs.rmdirSync(TEMP_DIR, {recursive: true})



})()


