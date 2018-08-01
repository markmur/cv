import { Validator } from 'jsonschema'

const validator = new Validator()

const isString = { type: 'string' }

const schema = {
  type: 'object',
  properties: {
    name: isString,
    tagline: isString,
    email: isString,
    website: isString,
    country: isString,
    date_of_birth: isString,
    education: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: isString,
          location: isString,
          start: isString,
          end: isString
        }
      }
    },
    employment: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: isString,
          company: isString,
          location: isString,
          description: isString,
          start: isString,
          end: isString
        }
      }
    }
  },
  required: ['name']
}

validator.addSchema(schema)

export default data => validator.validate(data, schema)
