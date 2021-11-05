
const readDir = require("glob").sync
const path = require("path")
const { mkdirs } = require("fs-extra")
const fs = require("fs")
const YAML = require("js-yaml")

if(!fs.existsSync("./schemas/json")){
	mkdirs("./schemas/json")
}

readDir("./schemas/yaml/*.yaml").forEach( yamlFile => {
	let jsonSch = YAML.load(fs.readFileSync(yamlFile).toString())
	console.log("PREPARE > Write "+path.resolve(`./schemas/json/${path.basename(yamlFile,".yaml")}.schema.json`))
	fs.writeFileSync(path.resolve(`./schemas/json/${path.basename(yamlFile,".yaml")}.schema.json`), JSON.stringify(jsonSch, null," ") )	
})
