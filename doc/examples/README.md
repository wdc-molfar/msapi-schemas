# Специфікація опису систем оброблення даних з мікросервісною архітектурою

## Концепція MSAPI-специфікацій

MSAPI-специфікації призначені для опису розподілених інформаційних систем з мікросервісною архітектурою.
Взаємодія програмних модулів (мікросервісів) таких систем здійснюється за допомогою обміну
повідомленнями за протоколом [Advanced Message Queuing Protocol (AMQP)](https://www.amqp.org/).

**Опис робочого процесу** оброблення даних (```workflow```) складається з декларації множини розміщених на обчислювальних вузлах 
системи налаштованих екземплярів сервісів (```service```).
<center> 

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/intro/puml/workflow.puml) 

</center>

**Тип сервісу** ```service``` декларується у відповідності до концепції "чорної скриньки": 
- вхідні налаштування ```config```
- прослуховувач повідомлень ```consume```
- публікувальник повідомлень ```produce```

<center> 

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/intro/puml/service.puml) 

</center>

**Тип прослуховувача** ```consume``` декларує необхідні налаштування обмінника, черги та процесу вибірки повідомлень з використанням брокера повідомлень
RabbitMQ:
- ```amqp``` - налаштування ```url``` для з'єднання з брокером повідомлень
-  ```queue``` - налаштування черги повідомлень, що буде прослуховуватись
-  ```message``` - опис типу повідомлень (JSON Schema), які оброблюються сервісом

**Тип публікувальника** ```produce``` декларує необхідні налаштування обмінника в брокері повідомлень RabbitMQ, в якому сервіс буде здійснювати 
публікування повідомлень:
- ```amqp``` - налаштування ```url``` для з'єднання з брокером повідомлень
-  ```exchange``` - налаштування обмінника повідомлень, що буде використовуватись сервісом для публікування повідомлень
-  ```message``` - опис типу повідомлень (JSON Schema), які надсилаються сервісом

Оскільки сервіси, об'єднані в робочий процес повинні мати спільні налаштування, наприклад, налаштування ```produce``` та ```consume``` для двох 
послідовно з'єднаних сервісів, важливим є забезпечення можливості опису компонентів повторюваного використання (```components```) та способу посилання на такі компоненти.

В MSAPI-специфікаціях можна використовувати наступні **компоненти повторюваного використання**:
- ```settings``` - будь-які налаштування
- ```schemas``` - описи типів (JSON Schema)
- ```exchanges``` - описи налаштувань обмінників повідомлень
- ```queues``` - описи налаштувань черг повідомлень
- ```consumes``` - описи налаштувань прослуховувачів повідомлень
- ```produces``` - описи налаштувань публікувальників повідомлень

Для посилання на компоненти повторюваного використання застосовуються [JSON References](http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03) та 
[JSON Pointers](http://tools.ietf.org/html/rfc6901).

Можна використовувати як локальні посилання (в межах локальної файлової системи), так і віддалені.

Для збереження та спільного доступу до специфікацій можна використовувати сервіс [msapi-registry](https://msapi-registry.herokuapp.com/), що реалізує реєстр MSAPI-специфікацій.  

## Особливості використання специфікацій

**Мінімальний склад специфікації** повинен містити: 
- версію MSAPI, наприклад
```yaml

msapi: "1.0.1"

```
- метадані `metadata`, до яких входять:
    - ідентифікатор – `id`, що використовується у посиланнях
    - назва – `title`
    - опис – `description`, який дозволяє зрозуміти зміст специфікації та що вона описує

***Файл ```01.example-min-spec.yaml```. Базовий приклад*** демонструє мінімальний склад специфікації MSAPI.
```yaml

msapi: 1.0.1

metadata:
    id: 01.example-min-spec
    title: Приклад специфікації MSAPI
    description: Демонструє мінімальний склад специфікації MSAPI 

```

**Cекція налаштувань `settings`** містить всі описи налаштуваннь.

Секція налаштувань може містити будь-які описи, як прості, так і об'єкти.
Загальні налаштування `url`-з'єднання можуть бути подані у вигляді рядка, наприклад
```yaml

amqp_url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

```
а налаштування системи моніторингу стану мікросервісів – у вигляді об'єкта, наприклад
```yaml

health_control:
    exchange_name: ms_health
    interval: 1000 #ms

```

***Файл ```02.example-components.yaml```. Приклад специфікації MSAPI для компонентів повторюваного використання*** демонструє опис налаштувань повторюваного використання.
```yaml

msapi: 1.0.1

metadata:
    id: 02.example-components
    title: Приклад специфікації MSAPI для компонентів повторюваного використання
    description: Демонструє опис налаштувань повторюваного використання

settings:
    amqp_url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
    
    health_control:
        exchange_name: ms_health
        interval: 1000 #ms

```

**Секція JSON-схем `schemas`** може містити описи JSON-схем повторюваного використання: `TASK_MSG_SCHEMA`, `DATA_MSG_SCHEMA`.

***Файл ```03.example-components.yaml```. Приклад специфікації MSAPI для компонентів повторюваного використання*** демонструє опис JSON-схем повторюваного використання.
```yaml

msapi: 1.0.1

metadata:
    id: 03.example-components
    title: Приклад специфікації MSAPI для компонентів повторюваного використання
    description: Демонструє опис JSON-схем повторюваного використання

schemas:
    
    TASK_MSG_SCHEMA:
        type: object
        required:
            - id
            - options
        properties:
            id:
                type: string
            options:
                type: object
        additionalProperties: false
        
    DATA_MSG_SCHEMA:
        type: object
        required:
            - id
            - text
            - meta
        properties:
            id:
                type: string
            text:
                type: string
            meta:
                type: object
        additionalProperties: false

```

**Секція обмінників `exchanges`** може містити описи обмінників даних: `TASK_EXCHANGE`, `SCRAPPED_MSG_EXCHANGE`.

***Файл ```04.example-components.yaml```. Приклад специфікації MSAPI для компонентів повторюваного використання*** демонструє опис обмінників даних повторюваного використання.
```yaml

msapi: 1.0.1

metadata:
    id: 04.example-components
    title: Приклад специфікації MSAPI для компонентів повторюваного використання
    description: Демонструє опис обмінників даних повторюваного використання

exchanges:
    
    TASK_EXCHANGE:
        name: task_exch
        mode: fanout
        options:
            durable: true
    
    SCRAPPED_MSG_EXCHANGE:
        name: scrapper_exch
        mode: fanout

```

**Секція черг `queues`** може містити описи черг повідомлень `TASK_QUEUE`.
Опис черги `TASK_QUEUE` має містити:
- назву черги `name`, наприклад
```yaml

name: task_queue

```
- налаштування `options` для обмінника `exchange`, наприклад
```yaml

options:
    durable: true

``` 
- налаштування `options` черги та процесу вибірки повідомлень, наприклад
```yaml

options:
    noAck: false
    prefetch: 1
    exclusive: true

``` 

***Файл ```05.example-components.yaml```. Приклад специфікації MSAPI для компонентів повторюваного використання*** демонструє опис черг повторюваного використання.
```yaml

msapi: 1.0.1

metadata:
    id: 03.example-components
    title: Приклад специфікації MSAPI для компонентів повторюваного використання
    description: Демонструє опис черг повторюваного використання

queues:
    TASK_QUEUE:
        name: task_queue
        exchange:
            name: task_exch
            mode: fanout
            options:
                durable: true
        options:
            noAck: false
            prefetch: 1
            exclusive: true

```

Доступ до схем та компонентів повторюваного використання здійснюється за допомогою **використання посилань** – `$ref`.
Можна використовувати як локальні посилання (в межах локальної файлової системи), так і віддалені.
Наприклад:
- Локальне посилання (в межах поточної специфікації) – `$ref: "#/settings/amqp_url"`
- Віддалене посилання (в іншій специфікації) – `$ref: "02.example-components/#/settings/amqp_url"`

***Файл ```06.example-use-refs.yaml```. Приклад специфікації MSAPI для компонентів повторюваного використання*** демонструє використання посилань.
```yaml

msapi: 1.0.1

metadata:
    id: 06.example-use-refs
    title: Приклад специфікації MSAPI для компонентів повторюваного використання
    description: Демонструє використання посилань

settings:

    task_exchange_name: task_exch
    
    task_exchange_options:
        durable: true
    
    task_queue_name: task_queue
    
    task_queue_options: 
        noAck: false
        prefetch: 1
        exclusive: true

exchanges:
    
    TASK_EXCHANGE:
        name:
            $ref: "#/settings/task_exchange_name"
        mode: fanout
        options:
            $ref: "#/settings/task_exchange_options"
    
queues:
    
    TASK_QUEUE:
        name: 
            $ref: "#/settings/task_queue_name"
        exchange:
            $ref: "#/exchanges/TASK_EXCHANGE"
        options:
            $ref: "#/settings/task_queue_options"

```

**Опис `TASK_SCHEDULER` публікувальника повідомлень `produces`** має містити:
- налаштування підключення `url` до брокера повідомлень, наприклад
```yaml

amqp:
    url:
        $ref: "02.example-components/#/settings/amqp_url"

```
- опис обмінника `exchange`, в якому будуть публікуватися повідомлення, наприклад
```yaml

exchange:
    $ref: "06.example-use-refs/#/exchanges/TASK_EXCHANGE"

```
- опис схеми повідомлень `message`, які будуть публікуватися цим публікувальником, наприклад
```yaml

message:
    $ref: "03.example-components/#/schemas/TASK_MSG_SCHEMA"

```

***Файл ```07.example-produce.yaml```. Приклад специфікації MSAPI для компонентів повторюваного використання*** демонструє опис публікувальника даних.
```yaml

msapi: 1.0.1

metadata:
    id: 07.example-produce
    title: Приклад специфікації MSAPI для компонентів повторюваного використання
    description: Демонструє опис публікувальника даних

produces:

    TASK_SCHEDULER:
        amqp:
            url:
                $ref: "02.example-components/#/settings/amqp_url"
        exchange:
            $ref: "06.example-use-refs/#/exchanges/TASK_EXCHANGE"
        message:
            $ref: "03.example-components/#/schemas/TASK_MSG_SCHEMA"

```

**Опис `TASK_CONSUME` споживача повідомлень `consumes`** має містити:
- налаштування підключення `url` до брокера повідомлень, наприклад
```yaml

amqp:
    url:
        $ref: "02.example-components/#/settings/amqp_url"

```
- опис черги повідомлень `queue`, наприклад
```yaml

queue:
    $ref: "06.example-use-refs/#/queues/TASK_QUEUE"

```
- опис схеми повідомлень `message`, наприклад
```yaml

message:
    $ref: "03.example-components/#/schemas/TASK_MSG_SCHEMA"

```

***Файл ```08.example-consume.yaml```. Приклад специфікації MSAPI для компонентів повторюваного використання*** демонструє опис споживача даних.
```yaml

msapi: 1.0.1

metadata:
    id: 08.example-consume
    title: Приклад специфікації MSAPI для компонентів повторюваного використання
    description: Демонструє опис споживача даних

consumes:
    TASK_CONSUME:
        amqp:
            url:
                $ref: "02.example-components/#/settings/amqp_url"
        queue:
            $ref: "06.example-use-refs/#/queues/TASK_QUEUE"
        message:
            $ref: "03.example-components/#/schemas/TASK_MSG_SCHEMA"

```

## Використання MSAPI-специфікацій для опису систем збору та оброблення даних

### Базовий приклад

Базовий приклад описує два екземпляри сервісів `producer` та `consumer`, які створюються на основі базових і користувацьких параметрів підключення та використовують спільну чергу `queue` для передачі повідомлень.

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/01.example.puml)

</center>

```yaml
msapi: "1.0.1"

metadata: 
  
    id: 01.use-msapi
  
    title: Базовий приклад специфікації MSAPI
  
    description: >
        Описує два екземпляри сервісів, які використовують спільну чергу для передачі повідомлень

workflow:
    - instance: # producer instance
        produce:
            amqp:
                url: "amqp://yourRabbitMQconnectionURL"
            exchange:
                name: amqp_test_exchange
                mode: fanout
    - instance: # consumer instance
        consume:
            amqp:
                url: "amqp://yourRabbitMQconnectionURL"
            queue:
                name: test
                exchange:
                    name: amqp_test_exchange
                    mode: fanout
                    
```

### Застосування компонентів повторюваного використання

```yaml
msapi: "1.0.1"

metadata: 
  
    id: 02.use-msapi
  
    title: Застосування компонентів повторюваного використання
  
    description: >
        Описує два екземпляри сервісів, які використовують спільну чергу для передачі повідомлень.
        Спільні налаштування описані в секції components

components:
    
    settings:
        amqp:
            url: "amqp://yourRabbitMQconnectionURL"
    
    exchanges:
        TEST:
            name: amqp_test_exchange
            mode: fanout

workflow:

    - instance: # producer instance
        produce:
            amqp:
                $ref: "#/components/settings/amqp"
            exchange:
                $ref: "#/components/exchanges/TEST"
    - instance: # consumer instance
        consume:
            amqp:
                $ref: "#/components/settings/amqp"
            queue:
                name: test
                exchange:
                    $ref: "#/components/exchanges/TEST"

```

### Налаштування сервісів

```yaml
msapi: "1.0.1"

metadata: 
  
    id: 03.use-msapi
  
    title: Базовий приклад
  
    description: >
        Описує два екземпляри сервісів, які використовують спільну чергу для передачі повідомлень.
        Спільні налаштування описані в секції components. Екземпляри конфігуруються за допомогою використання
        config та configuredBy

components:
    
    exchanges:
        TEST:
            name: amqp_test_exchange
            mode: fanout

workflow:

    - instance: # producer instance
      
        config:
            amqp_url: ""
            
        produce:
            amqp:
                url:
                    $ref: "#/workflow/0/instance/config/amqp_url"
            exchange:
                $ref: "#/components/exchanges/TEST"
      
      configuredBy:
            amqp_url: "amqp://yourRabbitMQconnectionURL"
            
    
    - instance: # consumer instance
        
        config:
            amqp_url: ""
        
        consume:
            amqp:
                url:
                    $ref: "#/workflow/1/instance/config/amqp_url"
            queue:
                name: test
                exchange:
                    $ref: "#/components/exchanges/TEST"
      
      configuredBy:
            amqp_url: "amqp://yourRabbitMQconnectionURL"
```
### Прослуховування декількома споживачами однієї черги повідомлень

У випадку, коли одні й ті ж самі повідомлення повинні бути оброблені за допомогою різних алгоритмів, можна організувати 
прослуховування однієї черги повідомлень декількома споживачами. В цьому випадку оброблення повідомлень цими споживачами буде здійснюватися паралельно.

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/04.example.puml)

</center>

Для цього необхідно скористатись прикладами  `yaml`-конфігураціями, які наведені нижче. З головних деталей: 
- amqp.url однакова у всім consumer(те, що publisher i consumer мають однакову url без додаткових параметрів як роути, і так зрозуміло)
- queue.exchange.name однаоквий для двох consumer
- queue.exchange.mode === fanout для відправки повідомлення з обмінника в усі черги
З додаткового:
- message.id, message.listener, message.timeout

Ініціалізація 1 publisher і 2 consumer, які слухають одну й ту саму чергу, і через параметр listenerId повідомлення розподіляються між ними

***Файл ```listener1.yaml```. Налаштування першого прослуховувача***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: 04.use-msapi.listener1
  
    title: Прослуховувач 1
  
    description: >
        Описує сервіс прослуховування черги повідомлень. Повідомленя типізовані та описані схемою message
        config та configuredBy

service:
    consume:
        amqp:
            url: amqps://RabbitMQconnectionURL
        
        queue:
            name: listen1
            exchange:
                name: broadcast
                mode: fanout
                options:
                    durable: false 
            options:
                noAck: true
                
        message:
            type: object
            required:
                - id
                - listener
                - timeout
            properties:
                id:
                  type: number
                listener:
                  type: number
                timeout:
                  type: number  


```

***Файл ```listener2.yaml```. Налаштування другого прослуховувача***

```yaml
msapi: "1.0.1"

metadata: 
  
    id: 04.use-msapi.listener2
  
    title: Прослуховувач 2
  
    description: >
        Описує сервіс прослуховування черги повідомлень. Повідомленя типізовані та описані схемою message
        config та configuredBy

service:
    consume:
        amqp:
            url: amqps://RabbitMQconnectionURL
        
        queue:
            name: listen2
            exchange:
                name: broadcast
                mode: fanout
                options:
                    durable: false 
            options:
                noAck: true
                
        message:
            type: object
            required:
                - id
                - listener
                - timeout
            properties:
                id:
                  type: number
                listener:
                  type: number
                timeout:
                  type: number  


```

***Файл ```producer.yaml```. Налаштування публікувальника***

```yaml
msapi: "1.0.1"

metadata: 
  
    id: 04.use-msapi.producer
  
    title: Публікувальник 1
  
    description: >
        Описує сервіс публікувальника повідомлень. Повідомленя типізовані та описані схемою message

service:

    produce:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        exchange:
            name: broadcast
            mode: fanout
            options:
                durable: false
                
        message:
            type: object
            required:
                - id
                - listener
                - timeout
            properties:
                id:
                  type: number
                listener:
                  type: number
                timeout:
                  type: number  

          

```

***Файл ```workflow.yaml```. Налаштування робочого процесу***

```yaml
msapi: "1.0.1"

metadata: 
  
    id: 04.use-msapi.publisher
  
    title: Публікувальник 1
  
    description: >
        Описує робочий процес для прослуховування декількома 
        споживачами однієї черги повідомлень

workflow:
    - instance:
        $ref: "./producer/#/service"
    - instance:
        $ref: "./listener1/#/service"
    - instance:
        $ref: "./listener2/#/service"    
```

### Організація черги завдань

При необхідності організації паралельного однотипного оброблення повідомлень декількома обробниками, можна організувати розбір завдань декількома споживачами з спільної черги завдань. На відміну від попереднього випадку, якщо вибірка повідомлення підтверджена одним з споживачів, інші споживачі вже не отримують це повідомлення. 

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/05.example.puml)

</center>

***Файл ```scheduler.yaml```. Налаштування планувальника завдань***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: task_queue.scheduler
  
    title: Планувальник завдань
  
    description: >
        Описує сервіс публікувальника повідомлень. Повідомленя типізовані

service:

    produce:
        amqp:
            url: amqps://yourRabbitMQConnectionUrl
        
        exchange:
            name: test_task
            mode: direct
                
        message:
            type: object
            required:
                - id
                - timeout
            properties:
                id:
                  type: number
                timeout:
                  type: number

```

***Файл ```worker.yaml```. Налаштування працівника***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: task_queue.worker
  
    title: Споживач
  
    description: >
        Описує сервіс споживання черги повідомлень. Повідомленя типізовані
    
service:
    consume:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        queue:
            name: test_task
            exchange:
                name: test_task
                mode: direct
            options:
                prefetch: 1
                noAck: false
                
        message:
            type: object
            required:
                - id
                - timeout
            properties:
                id:
                  type: number
                timeout:
                  type: number

```

***Файл ```workflow.yaml```. Налаштування робочого процесу***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: task_queue.workflow
  
    title: task_queue.workflow
  
    description: >
        Описує робочий процес для організації черги повідомлень, та оброблення
        повідомлень декількома споживачами

workflow:
    - instance:
        $ref: "./task_queue.scheduler/#/service"
    - instance:
        $ref: "./task_queue.worker/#/service"
    - instance:
        $ref: "./task_queue.worker/#/service"

```


### Об'єднання потоків повідомлень

У випадку необхідності злиття потоків повідомлень для оброблення в одному обробнику використовується спільний обмінник повідомлень для декількох публікувальників.

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/06.example.puml)

</center>

Для цього необхідно скористатись прикладами `yaml`-конфігураціями, які наведені нижче. З головних деталей: 
- amqp.url, exchange.name, exchange.mode є однаковими 


***Файл ```producer.yaml```. Налаштування публікувальника***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_2producers.producer
  
    title: Публікувальник
  
    description: >
        Описує сервіс публікування повідомлень. Повідомленя типізовані

service:

    produce:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        exchange:
            name: concentrator
            mode: fanout
                
        message:
            type: object
            required:
                - id
                - producer
                - timeout
            properties:
                id:
                  type: number
                producer:
                  type: number
                timeout:
                  type: number  
          
```

***Файл ```listener.yaml```. Налаштування прослуховувача***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_2producers.listener
  
    title: Прослуховувач
  
    description: >
        Описує сервіс споживання черги повідомлень. Повідомленя типізовані
    
service:
    consume:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        queue:
            name: concentrator
            
            exchange:
                name: concentrator
                mode: fanout
        
            options:
                noAck: true
                
        message:
            type: object
            required:
                - id
                - producer
                - timeout
            properties:
                id:
                  type: number
                producer:
                  type: number
                timeout:
                  type: number  

```

***Файл ```workflow.yaml```. Налаштування робочого процесу***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_2producers.workflow
  
    title: Робочий процес для організації єдиної черги повідомлень
  
    description: >
        Описує робочий процес для організації єдиної черги повідомлень від двох публікувальників, та оброблення повідомлень споживачем

workflow:
    - instance:
        $ref: "./example_2producers.producer/#/service"
    - instance:
        $ref: "./example_2producers.producer/#/service"
    - instance:
        $ref: "./example_2producers.listener/#/service"

```

### Послідовний робочий процес оброблення повідомлень

Організація послідовного робочого процесу оброблення повідомлень пов'язана з використанням в екземплярах мікросервісів публікувальників та споживачів повідомлень. Мікросервіси-джерела, наприклад ```initiator```, мають публікувальника;
проміжні обробники (```worker1```) - як публікувальника, так і споживача, стоки повідомлень (```worker2```)- тільки споживача.

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/07.example.puml)

</center>

Для цього необхідно скористатись прикладами `yaml`-конфігураціями, які наведені нижче.

***Файл ```initiator.yaml```***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_chain.producer
  
    title: Публікувальник-ініціатор
  
    description: >
        Описує сервіс ініціювання публікування повідомлень. Повідомленя типізовані

service:

    produce:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        exchange:
            name: initiator
            mode: fanout
                
        message:
            type: object
            required:
                - id
                - producer
                - timeout
            properties:
                id:
                  type: number
                producer:
                  type: number
                timeout:
                  type: number

```

***Файл ```worker1.yaml```. Налаштування першого працівника***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_chain.worker1
  
    title: Працівник1
  
    description: >
        Описує сервіс споживання черги повідомлень від ініціатора та публікування повідомлень. Повідомленя типізовані
    
service:
    consume:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        queue:
            name: initiator
            exchange:
                name: initiator
                mode: direct
            options:
                prefetch: 1
                noAck: false
                
        message:
            type: object
            required:
                - id
                - timeout
            properties:
                id:
                  type: number
                timeout:
                  type: number
    
    produce:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        exchange:
            name: producer
            mode: fanout
                
        message:
            type: object
            required:
                - id
                - producer
                - timeout
            properties:
                id:
                  type: number
                producer:
                  type: number
                timeout:
                  type: number

```

***Файл ```worker2.yaml```. Налаштування другого працівника***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_chain.worker2
  
    title: Працівник2
  
    description: >
        Описує сервіс споживання черги повідомлень. Повідомленя типізовані
    
service:
    consume:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        queue:
            name: producer
            exchange:
                name: producer
                mode: direct
            options:
                prefetch: 1
                noAck: false
                
        message:
            type: object
            required:
                - id
                - timeout
            properties:
                id:
                  type: number
                timeout:
                  type: number

```

***Файл ```workflow.yaml```. Налаштування робочого процесу***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_chain.workflow
  
    title: Послідовний робочий процес оброблення повідомлень
  
    description: >
        Описує послідовний робочий процес оброблення повідомлень, де є:
        публікувальник-ініціатор, що публікує повідомлення; 
        працівник1, який обробляє та публікує повідомлення; 
        та працівник2, що оброблює повідомлення

workflow:
    - instance:
        $ref: "./example_chain.producer/#/service"
    - instance:
        $ref: "./example_chain.worker1/#/service"
    - instance:
        $ref: "./example_chain.worker2/#/service"

```

### Часткове оброблення повідомлень та композиція результатів

Використовуючи схему взаємодії для прослуховування декількома споживачами однієї черги повідомлень та 
схему взаємодії для об'єднання потоків повідомлень, можна організувати паралельне часткове оброблення
повідомлень з наступною композицією їх результатів. 

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/08.example.puml)

</center>

Для цього необхідно скористатись прикладами `yaml`-конфігураціями, які наведені нижче.

***Файл ```initiator.yaml```***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_partial_queue.producer
  
    title: Публікувальник-ініціатор
  
    description: >
        Описує сервіс ініціювання публікування повідомлень. Повідомленя типізовані

service:

    produce:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        exchange:
            name: messages
            mode: fanout
                
        message:
            type: object
            required:
                - id
                - producer
                - timeout
            properties:
                id:
                  type: number
                producer:
                  type: number
                timeout:
                  type: number

```

***Файл ```partial_ner.yaml```. Налаштування обробника partial_ner***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_partial_queue.partial_ner
  
    title: Обробник partial_ner
  
    description: >
        Описує сервіс споживання черги повідомлень від ініціатора та публікування повідомлень. Повідомленя типізовані
    
service:
    consume:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        queue:
            name: partial_ner
            exchange:
                name: messages
                mode: direct
            options:
                prefetch: 1
                noAck: false
                
        message:
            type: object
            required:
                - id
                - timeout
            properties:
                id:
                  type: number
                timeout:
                  type: number
    
    produce:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        exchange:
            name: composer_input
            mode: fanout
                
        message:
            type: object
            required:
                - id
                - producer
                - timeout
            properties:
                id:
                  type: number
                producer:
                  type: number
                timeout:
                  type: number

```

***Файл ```partial_sa.yaml```. Налаштування обробника partial_sa***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_partial_queue.partial_sa
  
    title: Обробник partial_sa
  
    description: >
        Описує сервіс споживання черги повідомлень від ініціатора та публікування повідомлень. Повідомленя типізовані
    
service:
    consume:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        queue:
            name: partial_sa
            exchange:
                name: messages
                mode: direct
            options:
                prefetch: 1
                noAck: false
                
        message:
            type: object
            required:
                - id
                - timeout
            properties:
                id:
                  type: number
                timeout:
                  type: number
    
    produce:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        exchange:
            name: composer_input
            mode: fanout
                
        message:
            type: object
            required:
                - id
                - producer
                - timeout
            properties:
                id:
                  type: number
                producer:
                  type: number
                timeout:
                  type: number

```

***Файл ```composer.yaml```. Налаштування композитора результатів***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_partial_queue.composer
  
    title: Композитор
  
    description: >
        Описує сервіс композиції результатів, що отримані від двох паралельних часткових обробників
    
service:
    consume:
        amqp:
            url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg
        
        queue:
            name: composer_input
            exchange:
                name: composer_input
                mode: direct
            options:
                prefetch: 1
                noAck: false
                
        message:
            type: object
            required:
                - id
                - timeout
            properties:
                id:
                  type: number
                timeout:
                  type: number

```

***Файл ```workflow.yaml```. Налаштування робочого процесу***

```yaml

msapi: "1.0.1"

metadata: 
  
    id: example_partial_queue.workflow
  
    title: Послідовний робочий процес оброблення повідомлень
  
    description: >
        Описує послідовний робочий процес оброблення повідомлень з паралельним частковим обробленням 
        повідомлень та композицією результатів, де є:
        публікувальник-ініціатор, що публікує повідомлення; 
        обробник partial_ner, який обробляє та публікує повідомлення; 
        обробник partial_sa, який обробляє та публікує повідомлення;
        та композитор, що оброблює та створює композицію результатів, що отримані від двох паралельних 
        часткових обробників повідомлень – partial_ner та partial_sa

workflow:
    - instance:
        $ref: "./example_partial_queue.producer/#/service"
    - instance:
        $ref: "./example_partial_queue.partial_ner/#/service"
    - instance:
        $ref: "./example_partial_queue.partial_sa/#/service"
    - instance:
        $ref: "./example_partial_queue.composer/#/service"

```
