# Untitled object in undefined Schema

```txt
undefined#/properties/metadata
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [test1.schema.json*](json/test1.schema.json "open original schema") |

## metadata Type

`object` ([Details](test1-properties-metadata.md))

# metadata Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                           |
| :-------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                         | `string`      | Optional | cannot be null | [Untitled schema](test1-properties-metadata-properties-id.md "undefined#/properties/metadata/properties/id")                         |
| [title](#title)                   | `string`      | Required | cannot be null | [Untitled schema](test1-properties-metadata-properties-title.md "undefined#/properties/metadata/properties/title")                   |
| [description](#description)       | `string`      | Optional | cannot be null | [Untitled schema](test1-properties-metadata-properties-description.md "undefined#/properties/metadata/properties/description")       |
| [termsOfService](#termsofservice) | `string`      | Optional | cannot be null | [Untitled schema](test1-properties-metadata-properties-termsofservice.md "undefined#/properties/metadata/properties/termsOfService") |
| [contact](#contact)               | `object`      | Optional | cannot be null | [Untitled schema](test1-properties-metadata-properties-contact.md "undefined#/properties/metadata/properties/contact")               |
| [license](#license)               | `object`      | Optional | cannot be null | [Untitled schema](test1-properties-metadata-properties-license.md "undefined#/properties/metadata/properties/license")               |
| [version](#version)               | `string`      | Optional | cannot be null | [Untitled schema](test1-properties-metadata-properties-version.md "undefined#/properties/metadata/properties/version")               |
| `^x-`                             | Not specified | Optional | cannot be null | [Untitled schema](test1-properties-metadata-patternproperties-x-.md "undefined#/properties/metadata/patternProperties/^x-")          |
| Additional Properties             | Any           | Optional | can be null    |                                                                                                                                      |

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-properties-id.md "undefined#/properties/metadata/properties/id")

### id Type

`string`

## title



`title`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-properties-title.md "undefined#/properties/metadata/properties/title")

### title Type

`string`

## description



`description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-properties-description.md "undefined#/properties/metadata/properties/description")

### description Type

`string`

## termsOfService



`termsOfService`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-properties-termsofservice.md "undefined#/properties/metadata/properties/termsOfService")

### termsOfService Type

`string`

### termsOfService Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## contact



`contact`

*   is optional

*   Type: `object` ([Details](test1-properties-metadata-properties-contact.md))

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-properties-contact.md "undefined#/properties/metadata/properties/contact")

### contact Type

`object` ([Details](test1-properties-metadata-properties-contact.md))

## license



`license`

*   is optional

*   Type: `object` ([Details](test1-properties-metadata-properties-license.md))

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-properties-license.md "undefined#/properties/metadata/properties/license")

### license Type

`object` ([Details](test1-properties-metadata-properties-license.md))

## version



`version`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-properties-version.md "undefined#/properties/metadata/properties/version")

### version Type

`string`

## Pattern: `^x-`



`^x-`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata-patternproperties-x-.md "undefined#/properties/metadata/patternProperties/^x-")

### ^x- Type

unknown

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
