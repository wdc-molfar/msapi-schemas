( async () => {

	const path = require("path")
	const { mkdirs, copySync } = require("fs-extra")
	const fs = require("fs")
	const { deepFilter, processFolderRecursive} = require("./utils")
	
	const SCHEMA_DIR = "./schemas/json"

	const removeProps = file => {
		if(path.extname(file) == ".json") {
			console.log(">>", file)
			let schema = JSON.parse(fs.readFileSync(file).toString())
			let nodes = deepFilter(schema, node => node.subschema)
			nodes.forEach( node => {
				delete node.instance.subschema
			})
			fs.writeFileSync(file, JSON.stringify(schema, null, " "))
			return
		}	
	}

	await processFolderRecursive(SCHEMA_DIR, removeProps)

})()


