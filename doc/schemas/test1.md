# Untitled object in undefined Schema

```txt
undefined
```

Validation schema for MSAPI Specification 1.0.X.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [test1.schema.json](json/test1.schema.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](test1.md))

# Untitled object in undefined Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                       |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------- |
| [msapi](#msapi)       | `string` | Required | cannot be null | [Untitled schema](test1-properties-msapi.md "undefined#/properties/msapi")       |
| [metadata](#metadata) | `object` | Required | cannot be null | [Untitled schema](test1-properties-metadata.md "undefined#/properties/metadata") |

## msapi



`msapi`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](test1-properties-msapi.md "undefined#/properties/msapi")

### msapi Type

`string`

### msapi Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^1\.0\.\d(-.+)?$
```

[try pattern](https://regexr.com/?expression=%5E1%5C.0%5C.%5Cd\(-.%2B\)%3F%24 "try regular expression with regexr.com")

## metadata



`metadata`

*   is required

*   Type: `object` ([Details](test1-properties-metadata.md))

*   cannot be null

*   defined in: [Untitled schema](test1-properties-metadata.md "undefined#/properties/metadata")

### metadata Type

`object` ([Details](test1-properties-metadata.md))
