
const YAML = require("js-yaml")

const schemas = [
	"consumer",
	"publisher"
]

let res = {}

schemas.forEach( sch => {
	
	const json = require(`./schemas/json/${sch}.schema.json`)
	const yaml = YAML.dump(json)
	
	res[sch] = { yaml, json }

})

module.exports = res


