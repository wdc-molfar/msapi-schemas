
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

const consumeSnippet = require(`./snippets/json/consume.json`)
const produceSnippet = require(`./snippets/json/produce.json`)


const schemas = {

	"consumer": {
		json: consumeStrict,
		yaml: YAML.dump(consumeStrict),
		default: {
			json: consumeSnippet,
			yaml: YAML.dump(consumeSnippet)
		},
		snippet: {
			json: consumeSnippet,
			yaml: YAML.dump(consumeSnippet)
		}
	},

	"publisher": {
		json: produceStrict,
		yaml: YAML.dump(produceStrict),
		default: {
			json: produceSnippet,
			yaml: YAML.dump(produceSnippet)
		},
		snippet: {
			json: produceSnippet,
			yaml: YAML.dump(produceSnippet)
		}	
	},

    "connection": {
    	json: connectionStrict,
		yaml: YAML.dump(connectionStrict)
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
		yaml: YAML.dump(consumeStrict),
		default: {
			json: consumeSnippet,
			yaml: YAML.dump(consumeSnippet)
		},
		snippet: {
			json: consumeSnippet,
			yaml: YAML.dump(consumeSnippet)
		}
	},

	"produceStrict": {
    	json: produceStrict,
		yaml: YAML.dump(produceStrict),
		default: {
			json: produceSnippet,
			yaml: YAML.dump(produceSnippet)
		},
		snippet: {
			json: produceSnippet,
			yaml: YAML.dump(produceSnippet)
		}
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


