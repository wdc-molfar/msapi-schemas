
const YAML = require("js-yaml")
const consumer = require(`./schemas/json/misc/consumer.schema.json`)
const publisher = require(`./schemas/json/misc/publisher.schema.json`)
const connection = require(`./schemas/json/misc/connection.schema.json`)

const msapi = require(`./schemas/json/msapi.schema.json`)

const connectionStrict = require(`./schemas/json/strict/connection.schema.json`)
const consumeStrict = require(`./schemas/json/strict/consume.schema.json`)
const produceStrict = require(`./schemas/json/strict/produce.schema.json`)
const serviceStrict = require(`./schemas/json/strict/service.schema.json`)
const workflowStrict = require(`./schemas/json/strict/workflow.schema.json`)


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
	},

	"connectionStrict": {
    	json: connectionStrict,
		yaml: YAML.dump(connectionStrict)
	},

	"consumeStrict": {
    	json: consumeStrict,
		yaml: YAML.dump(consumeStrict)
	},

	"produceStrict": {
    	json: produceStrict,
		yaml: YAML.dump(produceStrict)
	},

	"serviceStrict": {
    	json: serviceStrict,
		yaml: YAML.dump(serviceStrict)
	},

	"workflowStrict": {
    	json: workflowStrict,
		yaml: YAML.dump(workflowStrict)
	}


}

module.exports = schemas


