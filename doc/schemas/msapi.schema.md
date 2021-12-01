# msapi(MSAPI)

**Description**: 


Схема перевірки MSAPI-специфікації 1.0.X.


**Properties**(5)

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**msapi**|`string`|Pattern: ^1\\\.0\\\.\\d\(\-\.\+\)?$<br/>|yes|
|**metadata**|`object`|Subschema: [msapi\.metadata](#msapimetadata)<br/>|yes|
|**components**|`object`|Підсхема components.Компоненти повторюваного використання<br/>Subschema: [Підсхема components](#msapicomponents)<br/>|no|
|**service**|`object`|Підсхема &quot;service&quot;.Налаштування мікросервісу<br/>Subschema: [Підсхема "service"](#msapiservice)<br/>|no|
|**workflow**|`object[]`|Підсхема &quot;workflow&quot;.Налаштування робочого процесу<br/>Subschema: [Підсхема "workflow"](#msapiworkflow)<br/>|no|


## msapi(Версія MSAPI-специфікації)


**Description**: 
Наразі підтримується версія 1.0.1

Reference to [\#/definitions/Version](\#/definitions/Version)  








## metadata ()

**Description**: Reference [msapi.metadata](#msapimetadata)


## components (Підсхема components)

**Description**: 
Компоненти повторюваного використання

Reference [msapi.components](#msapicomponents)


## service (Підсхема &quot;service&quot;)

**Description**: 
Налаштування мікросервісу

Reference [msapi.service](#msapiservice)


## workflow\[\] (Підсхема &quot;workflow&quot;)

**Description**: 
Налаштування робочого процесу

Reference [msapi.workflow](#msapiworkflow)






 







# msapi.metadata

**Description**: 

**Additional Properties:** allowed<br/>
**Properties**(6)

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**id**|`string`||yes|
|**title**|`string`||yes|
|**description**|`string`||no|
|**contact**|`object`||no|
|**license**|`object`||yes|
|**repo**|`string`|Format: `"uri-reference"`<br/>|no|


## id


**Description**: 
**Type:** `string`<br/>
 







## title


**Description**: 
**Type:** `string`<br/>
 







## description


**Description**: 
**Type:** `string`<br/>
 







## contact


**Description**: **Additional Properties:** not allowed<br/>
**Properties**(3)

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**name**|`string`|||
|**url**|`string`|Format: `"uri-reference"`<br/>||
|**email**|`string`|Format: `"email"`<br/>||


### contact\.name


**Description**: 
**Type:** `string`<br/>
 







### contact\.url


**Description**: 
**Type:** `string`<br/>
**Format:** `"uri-reference"`<br/>
 







### contact\.email


**Description**: 
**Type:** `string`<br/>
**Format:** `"email"`<br/>
 











**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**||||

### contact\.^x\-


**Description**:  










 







## license


**Description**: **Additional Properties:** not allowed<br/>
**Properties**(2)

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**name**|`string`||yes|
|**url**|`string`|Format: `"uri-reference"`<br/>|no|


### license\.name


**Description**: 
**Type:** `string`<br/>
 







### license\.url


**Description**: 
**Type:** `string`<br/>
**Format:** `"uri-reference"`<br/>
 











**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**|||no|

### license\.^x\-


**Description**:  










 







## repo


**Description**: 
**Type:** `string`<br/>
**Format:** `"uri-reference"`<br/>
 











**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^x\-**|||no|

## ^x\-


**Description**:  










 







# msapi.components(Підсхема components)

**Description**: 


Компоненти повторюваного використання

**Additional Properties:** not allowed<br/>



**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^exchanges$**|`object`|exchanges.Налаштування обмінників<br/>||
|**^queues$**|`object`|||
|**^schemas$**|`object`|||
|**^consumes$**|`object`|||
|**^produces$**|`object`|||
|**^settings$**|`object`|||

## ^exchanges$(exchanges)


**Description**: 
Налаштування обмінників




**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||Будь-який ідентифікатор.Опис обмінника<br/>||

#### ^exchanges$\.^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$(Будь-який ідентифікатор)


**Description**: 
Опис обмінника

 



- **Option 1 (alternative):**    
    **Description**: Посилання на налаштування обмінника
    
    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    **Description**: 
    Налаштування обміника
    
    Reference [msapi.components.exchange](#msapicomponentsexchange)
    







 







## ^queues$


**Description**: 


**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

#### ^queues$\.^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$


**Description**:  



- **Option 1 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    **Description**: Reference [msapi.components.queue](#msapicomponentsqueue)
    







 







## ^schemas$


**Description**: 


**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

#### ^schemas$\.^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$


**Description**:  



- **Option 1 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    Reference to [\#/definitions/Schema](\#/definitions/Schema)  
    
    
    
    
    
    
    







 







## ^consumes$


**Description**: 


**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

#### ^consumes$\.^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$


**Description**:  



- **Option 1 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    **Additional Properties:** not allowed<br/>
    
    
    
    **Properties (Pattern)**
    
    |Name|Type|Description|Required|
    |----|----|-----------|--------|
    |**^amqp**|`object`|Subschema: [msapi\.components\.connection](#msapicomponentsconnection)<br/>|yes|
    |**^queue$**||||
    |**^message$**||||
    
    ## Option 2: ^amqp ()
    
    **Description**: Reference [msapi.components.connection](#msapicomponentsconnection)
    
    ## Option 2: ^queue$
    
    
    **Description**:  
    
    
    
    - **Option 1 (alternative):**    
        **Description**: Reference [msapi.components.queue](#msapicomponentsqueue)
        
    - **Option 2 (alternative):**    
        Reference to [\#/definitions/Reference](\#/definitions/Reference)  
        
        
        
        
        
        
        
    
    
    
    
    ## Option 2: ^message$
    
    
    **Description**:  
    
    
    
    - **Option 1 (alternative):**    
        Reference to [\#/definitions/Schema](\#/definitions/Schema)  
        
        
        
        
        
        
        
    - **Option 2 (alternative):**    
        Reference to [\#/definitions/Reference](\#/definitions/Reference)  
        
        
        
        
        
        
        
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    







 







## ^produces$


**Description**: 


**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$**||||

#### ^produces$\.^\[a\-zA\-Z0\-9\\\.\\\-\_\]\+$


**Description**:  



- **Option 1 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    **Description**: Reference [msapi.components.produce](#msapicomponentsproduce)
    







 







## ^settings$


**Description**: 



 







**No properties.**



 







# msapi.components.exchange(Підсхема &quot;exchange&quot;)

**Description**: 


Налаштування обміника

**Additional Properties:** not allowed<br/>



**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^name$**|`string`|name.Ім'я обміника<br/>||
|**^mode$**||mode.Тип обміника<br/>Default: `"fanout"`<br/>Enum: `"fanout"`, `"direct"`, `"topic"`<br/>||
|**^options$**|`object`|Підсхема &quot;exchange-options&quot;.Налаштування обміника<br/>Subschema: [Підсхема "exchange\-options"](#msapicomponentsexchangeexchangeoptions)<br/>||

## ^name$(name)


**Description**: 
Ім'я обміника


**Type:** `string`<br/>
 







## ^mode$(mode)


**Description**: 
Тип обміника

**Enum:** `"fanout"`, `"direct"`, `"topic"`<br/>
 







## ^options$ (Підсхема &quot;exchange-options&quot;)

**Description**: 
Налаштування обміника

Reference [msapi.components.exchange.exchange-options](#msapicomponentsexchangeexchangeoptions)




 







# msapi.components.exchange.exchange-options(Підсхема &quot;exchange-options&quot;)

**Description**: 


Налаштування обміника




**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^durable$**|`boolean`|durable.Налаштування обмінника. Якщо встановлено значення ```true``` обмінник переживе перезапуск брокера<br/><br/>Default: `true`<br/>||
|**^autoDelete$**|`boolean`|autoDelete.Налаштування обмінника. Якщо встановлено значення ```true```, обмінник буде знищено, коли  кількість прив’язок, для яких він є джерелом, знизиться до нуля<br/><br/>Default: `false`<br/>||
|**^persistent$**|`boolean`|persistent.Налаштування обмінника. Якщо встановлено значення ```true```, повідомлення переживе перезапуск брокера за умови, що воно знаходиться в черзі, яка також витримує перезапуски. Відповідає і перевизначає властивість ```deliveryMode```<br/><br/>Default: `true`<br/>||

## ^durable$(durable)


**Description**: 
Налаштування обмінника. Якщо встановлено значення ```true``` обмінник переживе перезапуск брокера



**Type:** `boolean`<br/>
 







## ^autoDelete$(autoDelete)


**Description**: 
Налаштування обмінника. Якщо встановлено значення ```true```, обмінник буде знищено, коли  кількість прив’язок, для яких він є джерелом, знизиться до нуля



**Type:** `boolean`<br/>
 







## ^persistent$(persistent)


**Description**: 
Налаштування обмінника. Якщо встановлено значення ```true```, повідомлення переживе перезапуск брокера за умови, що воно знаходиться в черзі, яка також витримує перезапуски. Відповідає і перевизначає властивість ```deliveryMode```



**Type:** `boolean`<br/>
 










 







# msapi.components.queue

**Description**: 

**Additional Properties:** not allowed<br/>



**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^name$**|`string`|||
|**^exchange$**||||
|**^options$**|`object`|Subschema: [msapi\.components\.queue\.queue\-options](#msapicomponentsqueuequeueoptions)<br/>||

## ^name$


**Description**: 
**Type:** `string`<br/>
 







## ^exchange$


**Description**:  



- **Option 1 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    **Description**: 
    Налаштування обміника
    
    Reference [msapi.components.exchange](#msapicomponentsexchange)
    




## ^options$ ()

**Description**: Reference [msapi.components.queue.queue-options](#msapicomponentsqueuequeueoptions)




 







# msapi.components.queue.queue-options

**Description**: 




**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^noAck$**|`boolean`|Default: `false`<br/>||
|**^exclusive$**|`boolean`|Default: `false`<br/>||
|**^durable$**|`boolean`|Default: `true`<br/>||
|**^autoDelete$**|`boolean`|Default: `false`<br/>||
|**^prefetch$**|`number`|Default: `1`<br/>||

## ^noAck$


**Description**: 
**Type:** `boolean`<br/>
 







## ^exclusive$


**Description**: 
**Type:** `boolean`<br/>
 







## ^durable$


**Description**: 
**Type:** `boolean`<br/>
 







## ^autoDelete$


**Description**: 
**Type:** `boolean`<br/>
 







## ^prefetch$


**Description**: 
**Type:** `number`<br/>
 










 







# msapi.components.connection

**Description**: 




**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^url$**|`string`|Format: `"uri-reference"`<br/>|no|

## ^url$


**Description**: 
**Type:** `string`<br/>
**Format:** `"uri-reference"`<br/>
 










 







# msapi.components.produce

**Description**: 

**Additional Properties:** not allowed<br/>



**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^amqp**|`object`|Subschema: [msapi\.components\.connection](#msapicomponentsconnection)<br/>|yes|
|**^exchange$**||||
|**^message$**||||

## ^amqp ()

**Description**: Reference [msapi.components.connection](#msapicomponentsconnection)

## ^exchange$


**Description**:  



- **Option 1 (alternative):**    
    **Description**: 
    Налаштування обміника
    
    Reference [msapi.components.exchange](#msapicomponentsexchange)
    
- **Option 2 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    




## ^message$


**Description**:  



- **Option 1 (alternative):**    
    Reference to [\#/definitions/Schema](\#/definitions/Schema)  
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    







 







# msapi.service(Підсхема &quot;service&quot;)

**Description**: 


Налаштування мікросервісу

**Additional Properties:** not allowed<br/>



**Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^config$**|`object`|config.Дані для налаштування мікросервісу<br/>||
|**^consume$**||consume.Налаштування для споживача інформації<br/>||
|**^produce$**||produce.Налаштування для виробника інформації<br/>||

## ^config$(config)


**Description**: 
Дані для налаштування мікросервісу






 







**No properties.**
## ^consume$(consume)


**Description**: 
Налаштування для споживача інформації

 



- **Option 1 (alternative):**    
    **Additional Properties:** not allowed<br/>
    
    
    
    **Properties (Pattern)**
    
    |Name|Type|Description|Required|
    |----|----|-----------|--------|
    |**^amqp**|`object`|Subschema: [msapi\.components\.connection](#msapicomponentsconnection)<br/>|yes|
    |**^queue$**||||
    |**^message$**||||
    
    ## Option 1: ^amqp ()
    
    **Description**: Reference [msapi.components.connection](#msapicomponentsconnection)
    
    ## Option 1: ^queue$
    
    
    **Description**:  
    
    
    
    - **Option 1 (alternative):**    
        **Description**: Reference [msapi.components.queue](#msapicomponentsqueue)
        
    - **Option 2 (alternative):**    
        Reference to [\#/definitions/Reference](\#/definitions/Reference)  
        
        
        
        
        
        
        
    
    
    
    
    ## Option 1: ^message$
    
    
    **Description**:  
    
    
    
    - **Option 1 (alternative):**    
        Reference to [\#/definitions/Schema](\#/definitions/Schema)  
        
        
        
        
        
        
        
    - **Option 2 (alternative):**    
        Reference to [\#/definitions/Reference](\#/definitions/Reference)  
        
        
        
        
        
        
        
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
- **Option 2 (alternative):**    
    Reference to [\#/definitions/Extensible](\#/definitions/Extensible)  
    
    
    
    
    
    
    




## ^produce$(produce)


**Description**: 
Налаштування для виробника інформації

 



- **Option 1 (alternative):**    
    **Description**: Reference [msapi.components.produce](#msapicomponentsproduce)
    
- **Option 2 (alternative):**    
    Reference to [\#/definitions/Extensible](\#/definitions/Extensible)  
    
    
    
    
    
    
    







 







# msapi.workflow(Підсхема &quot;workflow&quot;)

**Description**: 


Налаштування робочого процесу

**Items**

**Item Additional Properties:** not allowed<br/>



**Item Properties (Pattern)**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**^instance$**||instance.Налаштування екземпляру<br/>|no|
|**^name$**|`string`|name.Назва екземпляру<br/>|no|
|**^configuredBy$**|`object`|configuredBy.Налаштовано<br/>|no|

### item\.^instance$(instance)


**Description**: 
Налаштування екземпляру

 



- **Option 1 (alternative):**    
    **Description**: 
    Налаштування мікросервісу
    
    Reference [msapi.service](#msapiservice)
    
- **Option 2 (alternative):**    
    Reference to [\#/definitions/Reference](\#/definitions/Reference)  
    
    
    
    
    
    
    




### item\.^name$(name)


**Description**: 
Назва екземпляру


**Type:** `string`<br/>
 







### item\.^configuredBy$(configuredBy)


**Description**: 
Налаштовано





 







**No properties.**



 







 








