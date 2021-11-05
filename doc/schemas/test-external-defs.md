# Untitled schema Schema

```txt
undefined
```

Validation schema for MSAPI Specification 1.0.X.

| Abstract               | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :--------------------- | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [test-external-defs.schema.json](json/test-external-defs.schema.json "open original schema") |

## Untitled schema Type

unknown

# Untitled schema Definitions

## Definitions group Reference

Reference this group by using

```json
{"$ref":"undefined#/definitions/Reference"}
```

| Property  | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :-------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `^\$ref$` | `string` | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-reference-patternproperties-ref.md "undefined#/definitions/Reference/patternProperties/^\\$ref$") |

### Pattern: `^\$ref$`



`^\$ref$`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-reference-patternproperties-ref.md "undefined#/definitions/Reference/patternProperties/^\\$ref$")

#### ^\\$ref$ Type

`string`

#### ^\\$ref$ Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group Info

Reference this group by using

```json
{"$ref":"undefined#/definitions/Info"}
```

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                  |
| :-------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                         | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-info-properties-id.md "undefined#/definitions/Info/properties/id")                         |
| [title](#title)                   | `string`      | Required | cannot be null | [Untitled schema](test-external-defs-definitions-info-properties-title.md "undefined#/definitions/Info/properties/title")                   |
| [description](#description)       | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-info-properties-description.md "undefined#/definitions/Info/properties/description")       |
| [termsOfService](#termsofservice) | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-info-properties-termsofservice.md "undefined#/definitions/Info/properties/termsOfService") |
| [contact](#contact)               | `object`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-info-properties-contact.md "undefined#/definitions/Info/properties/contact")               |
| [license](#license)               | `object`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-info-properties-license.md "undefined#/definitions/Info/properties/license")               |
| [version](#version)               | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-info-properties-version.md "undefined#/definitions/Info/properties/version")               |
| `^x-`                             | Not specified | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-info-patternproperties-x-.md "undefined#/definitions/Info/patternProperties/^x-")          |
| Additional Properties             | Any           | Optional | can be null    |                                                                                                                                             |

### id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-properties-id.md "undefined#/definitions/Info/properties/id")

#### id Type

`string`

### title



`title`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-properties-title.md "undefined#/definitions/Info/properties/title")

#### title Type

`string`

### description



`description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-properties-description.md "undefined#/definitions/Info/properties/description")

#### description Type

`string`

### termsOfService



`termsOfService`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-properties-termsofservice.md "undefined#/definitions/Info/properties/termsOfService")

#### termsOfService Type

`string`

#### termsOfService Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### contact



`contact`

*   is optional

*   Type: `object` ([Details](test-external-defs-definitions-info-properties-contact.md))

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-properties-contact.md "undefined#/definitions/Info/properties/contact")

#### contact Type

`object` ([Details](test-external-defs-definitions-info-properties-contact.md))

### license



`license`

*   is optional

*   Type: `object` ([Details](test-external-defs-definitions-info-properties-license.md))

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-properties-license.md "undefined#/definitions/Info/properties/license")

#### license Type

`object` ([Details](test-external-defs-definitions-info-properties-license.md))

### version



`version`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-properties-version.md "undefined#/definitions/Info/properties/version")

#### version Type

`string`

### Pattern: `^x-`



`^x-`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-info-patternproperties-x-.md "undefined#/definitions/Info/patternProperties/^x-")

#### ^x- Type

unknown

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group Contact

Reference this group by using

```json
{"$ref":"undefined#/definitions/Contact"}
```

| Property        | Type          | Required | Nullable       | Defined by                                                                                                                               |
| :-------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-contact-properties-name.md "undefined#/definitions/Contact/properties/name")            |
| [url](#url)     | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-contact-properties-url.md "undefined#/definitions/Contact/properties/url")              |
| [email](#email) | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-contact-properties-email.md "undefined#/definitions/Contact/properties/email")          |
| `^x-`           | Not specified | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-contact-patternproperties-x-.md "undefined#/definitions/Contact/patternProperties/^x-") |

### name



`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-contact-properties-name.md "undefined#/definitions/Contact/properties/name")

#### name Type

`string`

### url



`url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-contact-properties-url.md "undefined#/definitions/Contact/properties/url")

#### url Type

`string`

#### url Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### email



`email`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-contact-properties-email.md "undefined#/definitions/Contact/properties/email")

#### email Type

`string`

#### email Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

### Pattern: `^x-`



`^x-`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-contact-patternproperties-x-.md "undefined#/definitions/Contact/patternProperties/^x-")

#### ^x- Type

unknown

## Definitions group License

Reference this group by using

```json
{"$ref":"undefined#/definitions/License"}
```

| Property        | Type          | Required | Nullable       | Defined by                                                                                                                               |
| :-------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1) | `string`      | Required | cannot be null | [Untitled schema](test-external-defs-definitions-license-properties-name.md "undefined#/definitions/License/properties/name")            |
| [url](#url-1)   | `string`      | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-license-properties-url.md "undefined#/definitions/License/properties/url")              |
| `^x-`           | Not specified | Optional | cannot be null | [Untitled schema](test-external-defs-definitions-license-patternproperties-x-.md "undefined#/definitions/License/patternProperties/^x-") |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-license-properties-name.md "undefined#/definitions/License/properties/name")

#### name Type

`string`

### url



`url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-license-properties-url.md "undefined#/definitions/License/properties/url")

#### url Type

`string`

#### url Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### Pattern: `^x-`



`^x-`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Untitled schema](test-external-defs-definitions-license-patternproperties-x-.md "undefined#/definitions/License/patternProperties/^x-")

#### ^x- Type

unknown
