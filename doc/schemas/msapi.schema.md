<a name="root"></a>
# MSAPI

Validation schema for MSAPI Specification 1.0.X.


**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**msapi**<br/>(Version)|`string`|Pattern: ^1\\\.0\\\.\\d\(\-\.\+\)?$<br/>|yes|
|[**metadata**](#metadata)|`object`||yes|
|[**components**](#components)|`object`||no|
|[**service**](#service)|`object`||no|
|[**workflow**](#workflow)|`object[]`||no|

**Example**

```json
{
    "metadata": {
        "contact": {},
        "license": {}
    },
    "components": {},
    "service": {},
    "workflow": [
        {}
    ]
}
```

<a name="metadata"></a>
## metadata:

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**id**|`string`||yes|
|**title**|`string`||yes|
|**description**|`string`||no|
|[**contact**](#metadatacontact)|`object`||no|
|[**license**](#metadatalicense)|`object`||yes|
|**repo**|`string`|Format: `"uri-reference"`<br/>|no|

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**|||no|

<a name="root"></a>
#

<a name="metadatacontact"></a>
### metadata\.contact:

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**name**|`string`|||
|**url**|`string`|Format: `"uri-reference"`<br/>||
|**email**|`string`|Format: `"email"`<br/>||

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**||||

<a name="root"></a>
#



**Additional Properties:** not allowed<br/>
<a name="metadatalicense"></a>
### metadata\.license:

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**name**|`string`||yes|
|**url**|`string`|Format: `"uri-reference"`<br/>|no|

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**|||no|

<a name="root"></a>
#



**Additional Properties:** not allowed<br/>


**Additional Properties:** allowed<br/>
**Example**

```json
{
    "contact": {},
    "license": {}
}
```

<a name="components"></a>
## components:

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|[**^exchanges$**](#componentsexchanges)|`object`|||
|[**^queues$**](#componentsqueues)|`object`|||
|[**^schemas$**](#componentsschemas)|`object`|||
|[**^consumes$**](#componentsconsumes)|`object`|||
|[**^produces$**](#componentsproduces)|`object`|||
|[**^settings$**](#componentssettings)|`object`|||

<a name="root"></a>
#

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\./exchange](\./exchange) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<a name="componentsexchanges"></a>
### components\.^exchanges$:

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\./exchange](\./exchange) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 


<a name="componentsqueues"></a>
### components\.^queues$:

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\./queue](\./queue) 


<a name="componentsschemas"></a>
### components\.^schemas$:

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Schema](\#/definitions/Schema) 


<a name="componentsconsumes"></a>
### components\.^consumes$:

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\./consume](\./consume) 


<a name="componentsproduces"></a>
### components\.^produces$:

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\./produce](\./produce) 


<a name="componentssettings"></a>
### components\.^settings$:

**No properties.**


<a name="root"></a>
#

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\./queue](\./queue) 


<a name="root"></a>
#

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Schema](\#/definitions/Schema) 


<a name="root"></a>
#

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\./consume](\./consume) 


<a name="root"></a>
#

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<br>**Option 2 (alternative):** 
Reference to [\./produce](\./produce) 


<a name="root"></a>
#

**No properties.**


**Additional Properties:** not allowed<br/>
<a name="service"></a>
## service:

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|[**^config$**](#serviceconfig)|`object`|||
|**^consume$**||||
|**^produce$**||||

<a name="root"></a>
#

**No properties.**
<a name="serviceconfig"></a>
### service\.^config$:

**No properties.**
<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\.\./components/consume](\.\./components/consume) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Extensible](\#/definitions/Extensible) 
<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\.\./components/produce](\.\./components/produce) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Extensible](\#/definitions/Extensible) 


**Additional Properties:** not allowed<br/>
<a name="workflow"></a>
## workflow\[\]:

**Items**

**Item Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^instance$**|||no|
|**^name$**|`string`||no|
|[**^configuredBy$**](#workflowconfiguredby)|`object`||no|

<a name="root"></a>
#

<br>**Option 1 (alternative):** 
Reference to [\.\./service/index](\.\./service/index) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<a name="workflowconfiguredby"></a>
### workflow\[\]\.^configuredBy$:

**No properties.**
<a name="root"></a>
#

**Type:** `string`<br/>
<a name="root"></a>
#

**No properties.**


**Item Additional Properties:** not allowed<br/>
**Example**

```json
[
    {}
]
```

## Definitions
<a name="root"></a>
# Reference

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\\$ref$**|`string`||no|

<a name="root"></a>
#

**Type:** `string`<br/>


<a name="definitionsversion"></a>
## definitions/Version: Version

**Type:** `string`<br/>
**Pattern:** ^1\\\.0\\\.\\d\(\-\.\+\)?$<br/>
<a name="root"></a>
# Schema

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**title**|`string`|||
|**multipleOf**|`number`|Minimum: `0`<br/>||
|**maximum**|`number`|||
|**exclusiveMaximum**|`boolean`|Default: `false`<br/>||
|**minimum**|`number`|||
|**exclusiveMinimum**|`boolean`|Default: `false`<br/>||
|**maxLength**|`integer`|Minimum: `0`<br/>||
|**minLength**|`integer`|Default: `0`<br/>Minimum: `0`<br/>||
|**pattern**|`string`|Format: `"regex"`<br/>||
|**maxItems**|`integer`|Minimum: `0`<br/>||
|**minItems**|`integer`|Default: `0`<br/>Minimum: `0`<br/>||
|**uniqueItems**|`boolean`|Default: `false`<br/>||
|**maxProperties**|`integer`|Minimum: `0`<br/>||
|**minProperties**|`integer`|Default: `0`<br/>Minimum: `0`<br/>||
|[**required**](#required)|`string[]`|||
|[**enum**](#enum)|`array`|||
|**type**|`string`|Enum: `"array"`, `"boolean"`, `"integer"`, `"number"`, `"object"`, `"string"`<br/>||
|**not**||||
|[**allOf**](#allof)|`array`|||
|[**oneOf**](#oneof)|`array`|||
|[**anyOf**](#anyof)|`array`|||
|**items**||||
|[**properties**](#properties)|`object`|||
|**additionalProperties**||Default: `true`<br/>||
|**description**|`string`|||
|**format**|`string`|||
|**default**||||
|**nullable**|`boolean`|Default: `false`<br/>||
|[**discriminator**](#discriminator)|`object`||yes|
|**readOnly**|`boolean`|Default: `false`<br/>||
|**writeOnly**|`boolean`|Default: `false`<br/>||
|**example**||||
|[**externalDocs**](#externaldocs)|`object`||yes|
|**deprecated**|`boolean`|Default: `false`<br/>||
|[**xml**](#xml)|`object`|||

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**||||

<a name="root"></a>
#

<a name="required"></a>
## required\[\]:

**Items**

**Item Type:** `string`<br/>
**Minimum Items:** 1<br/>
**Unique Items:** yes<br/>
<a name="enum"></a>
## enum\[\]:

**Items**

**Minimum Items:** 1<br/>
**Unique Items:** no<br/>
**No properties.**
<a name="allof"></a>
## allOf\[\]:

**Items**

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Schema](\#/definitions/Schema) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<a name="oneof"></a>
## oneOf\[\]:

**Items**

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Schema](\#/definitions/Schema) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<a name="anyof"></a>
## anyOf\[\]:

**Items**

<br>**Option 1 (alternative):** 
Reference to [\#/definitions/Schema](\#/definitions/Schema) 
<br>**Option 2 (alternative):** 
Reference to [\#/definitions/Reference](\#/definitions/Reference) 
<a name="properties"></a>
## properties:

**Additional Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|

<a name="discriminator"></a>
## discriminator: Discriminator

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**propertyName**|`string`||yes|
|[**mapping**](#discriminatormapping)|`object`||no|

**Example**

```json
{
    "mapping": {}
}
```

<a name="discriminatormapping"></a>
### discriminator\.mapping:

**Additional Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|

<a name="externaldocs"></a>
## externalDocs:

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**description**|`string`||no|
|**url**|`string`|Format: `"uri-reference"`<br/>|yes|

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**|||no|

<a name="root"></a>
#



**Additional Properties:** not allowed<br/>
<a name="xml"></a>
## xml: XML

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**name**|`string`|||
|**namespace**|`string`|Format: `"uri"`<br/>||
|**prefix**|`string`|||
|**attribute**|`boolean`|Default: `false`<br/>||
|**wrapped**|`boolean`|Default: `false`<br/>||

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**||||

<a name="root"></a>
#



**Additional Properties:** not allowed<br/>
**Example**

```json
{
    "attribute": false,
    "wrapped": false
}
```



**Additional Properties:** not allowed<br/>
**Example**

```json
{
    "exclusiveMaximum": false,
    "exclusiveMinimum": false,
    "minLength": 0,
    "minItems": 0,
    "uniqueItems": false,
    "minProperties": 0,
    "properties": {},
    "additionalProperties": true,
    "nullable": false,
    "readOnly": false,
    "writeOnly": false,
    "deprecated": false
}
```

<a name="definitionsexternaldocumentation"></a>
## definitions/ExternalDocumentation:

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**description**|`string`||no|
|**url**|`string`|Format: `"uri-reference"`<br/>|yes|

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**|||no|

<a name="root"></a>
#



**Additional Properties:** not allowed<br/>
<a name="definitionsdiscriminator"></a>
## definitions/Discriminator: Discriminator

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**propertyName**|`string`||yes|
|[**mapping**](#definitionsdiscriminatormapping)|`object`||no|

**Example**

```json
{
    "mapping": {}
}
```

<a name="definitionsdiscriminatormapping"></a>
### definitions/Discriminator\.mapping:

**Additional Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|

<a name="definitionsxml"></a>
## definitions/XML: XML

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**name**|`string`|||
|**namespace**|`string`|Format: `"uri"`<br/>||
|**prefix**|`string`|||
|**attribute**|`boolean`|Default: `false`<br/>||
|**wrapped**|`boolean`|Default: `false`<br/>||

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**||||

<a name="root"></a>
#



**Additional Properties:** not allowed<br/>
**Example**

```json
{
    "attribute": false,
    "wrapped": false
}
```

<a name="root"></a>
# Extensible

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|[**^def$**](#def)<br/>(Reference)|`object`||yes|
|[**^extendedBy**](#extendedby)|`array`||no|

<a name="root"></a>
#

Reference to [\#/definitions/Reference](\#/definitions/Reference) <a name="def"></a>
## ^def$: Reference

**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\\$ref$**|`string`||no|

<a name="root"></a>
#

**Type:** `string`<br/>


<a name="extendedby"></a>
## ^extendedBy\[\]:

**Items**

Reference to [\#/definitions/Reference](\#/definitions/Reference) <a name="root"></a>
#

**Items**

Reference to [\#/definitions/Reference](\#/definitions/Reference) 

**Additional Properties:** not allowed<br/>

