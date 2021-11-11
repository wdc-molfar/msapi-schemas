const Validator = require("../utils/schema-validator")
const msapiSchema = require("../../index").msapi.json
const fs = require("fs")
const path = require("path")

const v = new Validator(msapiSchema)


describe('Тести для перевірки підсхеми "metadata"', () => {
   
    test('Повинен повернути помилку валідації для пустої специфікації', () => {
			let result = v.validate(fs.readFileSync(path.resolve(__dirname, "invalid/empty.yaml")).toString())            
            expect(result).toEqual(false)
        });

    test('Повинен повернути помилку валідації для специфікації з відсутною версією msapi', () => {
			let result = v.validate(fs.readFileSync(path.resolve(__dirname, "invalid/without-msapi-version.yaml")).toString())
            expect(result).toEqual(false)
        });
    
    test('Повинен успішно валідувати специфікацію з коректно заповненими метаданими', () => {
			let result = v.validate(fs.readFileSync(path.resolve(__dirname, "valid/metadata.yaml")).toString())
            expect(result).toEqual(true)
        });
    
    
});
