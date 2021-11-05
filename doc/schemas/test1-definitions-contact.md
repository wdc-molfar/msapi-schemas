# Untitled object in undefined Schema

```txt
undefined#/definitions/Contact
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [test1.schema.json*](json/test1.schema.json "open original schema") |

## Contact Type

`object` ([Details](test1-definitions-contact.md))

# Contact Properties

| Property        | Type          | Required | Nullable       | Defined by                                                                                                                  |
| :-------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string`      | Optional | cannot be null | [Untitled schema](test1-definitions-contact-properties-name.md "undefined#/definitions/Contact/properties/name")            |
| [url](#url)     | `string`      | Optional | cannot be null | [Untitled schema](test1-definitions-contact-properties-url.md "undefined#/definitions/Contact/properties/url")              |
| [email](#email) | `string`      | Optional | cannot be null | [Untitled schema](test1-definitions-contact-properties-email.md "undefined#/definitions/Contact/properties/email")          |
| `^x-`           | Not specified | Optional | cannot be null | [Untitled schema](test1-definitions-contact-patternproperties-x-.md "undefined#/definitions/Contact/patternProperties/^x-") |

## name



`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-definitions-contact-properties-name.md "undefined#/definitions/Contact/properties/name")

### name Type

`string`

## url



`url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-definitions-contact-properties-url.md "undefined#/definitions/Contact/properties/url")

### url Type

`string`

### url Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## email



`email`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-definitions-contact-properties-email.md "undefined#/definitions/Contact/properties/email")

### email Type

`string`

### email Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

## Pattern: `^x-`



`^x-`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Untitled schema](test1-definitions-contact-patternproperties-x-.md "undefined#/definitions/Contact/patternProperties/^x-")

### ^x- Type

unknown
