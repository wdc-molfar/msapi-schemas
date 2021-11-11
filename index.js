
const YAML = require("js-yaml")
const consumer = require(`./schemas/json/consumer.schema.json`)
const publisher = require(`./schemas/json/publisher.schema.json`)
const connection = require(`./schemas/json/connection.schema.json`)
const msapi = require(`./schemas/json/msapi.schema.json`)

const schemas = {
	"consumer": {
		json: consumer,
		yaml: YAML.dump(consumer)
	},
	"publisher": {
		json: publisher,
		yaml: YAML.dump(publisher)
	},
    "connection": {
    	json: connection,
		yaml: YAML.dump(connection)
	},
	"msapi": {
    	json: msapi,
		yaml: YAML.dump(msapi)
	}
}

module.exports = schemas


