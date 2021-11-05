# Untitled object in undefined Schema

```txt
undefined#/definitions/Info
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [def.schema.json*](json/def.schema.json "open original schema") |

## Info Type

`object` ([Details](def-definitions-info.md))

# Info Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                   |
| :-------------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                         | `string`      | Optional | cannot be null | [Untitled schema](def-definitions-info-properties-id.md "undefined#/definitions/Info/properties/id")                         |
| [title](#title)                   | `string`      | Required | cannot be null | [Untitled schema](def-definitions-info-properties-title.md "undefined#/definitions/Info/properties/title")                   |
| [description](#description)       | `string`      | Optional | cannot be null | [Untitled schema](def-definitions-info-properties-description.md "undefined#/definitions/Info/properties/description")       |
| [termsOfService](#termsofservice) | `string`      | Optional | cannot be null | [Untitled schema](def-definitions-info-properties-termsofservice.md "undefined#/definitions/Info/properties/termsOfService") |
| [contact](#contact)               | `object`      | Optional | cannot be null | [Untitled schema](def-definitions-info-properties-contact.md "undefined#/definitions/Info/properties/contact")               |
| [license](#license)               | `object`      | Optional | cannot be null | [Untitled schema](def-definitions-info-properties-license.md "undefined#/definitions/Info/properties/license")               |
| [version](#version)               | `string`      | Optional | cannot be null | [Untitled schema](def-definitions-info-properties-version.md "undefined#/definitions/Info/properties/version")               |
| `^x-`                             | Not specified | Optional | cannot be null | [Untitled schema](def-definitions-info-patternproperties-x-.md "undefined#/definitions/Info/patternProperties/^x-")          |
| Additional Properties             | Any           | Optional | can be null    |                                                                                                                              |

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-properties-id.md "undefined#/definitions/Info/properties/id")

### id Type

`string`

## title



`title`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-properties-title.md "undefined#/definitions/Info/properties/title")

### title Type

`string`

## description



`description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-properties-description.md "undefined#/definitions/Info/properties/description")

### description Type

`string`

## termsOfService



`termsOfService`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-properties-termsofservice.md "undefined#/definitions/Info/properties/termsOfService")

### termsOfService Type

`string`

### termsOfService Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## contact



`contact`

*   is optional

*   Type: `object` ([Details](def-definitions-info-properties-contact.md))

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-properties-contact.md "undefined#/definitions/Info/properties/contact")

### contact Type

`object` ([Details](def-definitions-info-properties-contact.md))

## license



`license`

*   is optional

*   Type: `object` ([Details](def-definitions-info-properties-license.md))

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-properties-license.md "undefined#/definitions/Info/properties/license")

### license Type

`object` ([Details](def-definitions-info-properties-license.md))

## version



`version`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-properties-version.md "undefined#/definitions/Info/properties/version")

### version Type

`string`

## Pattern: `^x-`



`^x-`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Untitled schema](def-definitions-info-patternproperties-x-.md "undefined#/definitions/Info/patternProperties/^x-")

### ^x- Type

unknown

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
