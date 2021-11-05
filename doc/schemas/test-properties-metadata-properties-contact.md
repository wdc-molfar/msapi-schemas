# Untitled object in undefined Schema

```txt
undefined#/properties/metadata/properties/contact
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [test.schema.json*](json/test.schema.json "open original schema") |

## contact Type

`object` ([Details](test-properties-metadata-properties-contact.md))

# contact Properties

| Property        | Type          | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string`      | Optional | cannot be null | [Untitled schema](test-properties-metadata-properties-contact-properties-name.md "undefined#/properties/metadata/properties/contact/properties/name")            |
| [url](#url)     | `string`      | Optional | cannot be null | [Untitled schema](test-properties-metadata-properties-contact-properties-url.md "undefined#/properties/metadata/properties/contact/properties/url")              |
| [email](#email) | `string`      | Optional | cannot be null | [Untitled schema](test-properties-metadata-properties-contact-properties-email.md "undefined#/properties/metadata/properties/contact/properties/email")          |
| `^x-`           | Not specified | Optional | cannot be null | [Untitled schema](test-properties-metadata-properties-contact-patternproperties-x-.md "undefined#/properties/metadata/properties/contact/patternProperties/^x-") |

## name



`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-properties-metadata-properties-contact-properties-name.md "undefined#/properties/metadata/properties/contact/properties/name")

### name Type

`string`

## url



`url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-properties-metadata-properties-contact-properties-url.md "undefined#/properties/metadata/properties/contact/properties/url")

### url Type

`string`

### url Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## email



`email`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test-properties-metadata-properties-contact-properties-email.md "undefined#/properties/metadata/properties/contact/properties/email")

### email Type

`string`

### email Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

## Pattern: `^x-`



`^x-`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Untitled schema](test-properties-metadata-properties-contact-patternproperties-x-.md "undefined#/properties/metadata/properties/contact/patternProperties/^x-")

### ^x- Type

unknown
