# Специфікація опису систем оброблення даних з мікросервісною архітектурою

## Особливості специфікацій

TODO

## Використання MSAPI-специфікацій для опису систем збору та оброблення даних

### Базовий приклад

Створюються екземпляри ```publisher``` і ```consumer``` на основі базових і користувацьких параметрів підключення.

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/01.example.puml)

</center>

Базовий приклад специфікації MSAPI демонструє мінімальний склад специфікації MSAPI. Він описує два екземпляри сервісів `publisher` та `consumer`, які використовують спільну чергу `queue` для передачі повідомлень.

Секція налаштувань може містити будь-які описи (прості і об'єкти). Доступ до них здійснюється за доповогою посилань `$ref`
Наприклад:
- Локальне посилання (в межах поточної специфікації) – `$ref: "#/settings/amqp_url"`
- Зовнішнє посилання (в іншій специфікації) – `$ref: "02.example-components/#/settings/amqp_url"`


```yaml
msapi: "1.0.1"

metadata: 
  
    id: 01.example-min-spec
  
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

Для цього необхідно скористатись прикладами yaml конфігів, які наведені нижче. З головних деталей: 
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

При необхідності організації паралельного однотипного оброблення повідомлень декількома обробниками, можна організувати
розбір завдань декількома споживачами з спільної черги завдань. На відміну від попереднього випадку, якщо вибірка повідомлення підтверджена одним з споживачів, інші споживачі вже не отримують це повідомлення. 

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/05.example.puml)

</center>

Для цього необхідно скористатись прикладами yaml конфігів, які наведені нижче. З головних деталей, які додались в порівнянні з попереднім прикладом: 
- queue.options.prefetch - якщо в обміннику є повідомлення, то consumer(в даному випадку worker за 1 раз "забере" вказане число повідомлень)
- queue.options.noAck - consumer може автоматично "давати знати", що повідомлення доставлено, а можна це зробити мануально, викликавши метод .ack(), але пр цьому вказавши noAck: false.

Ініціалізація одного publisher і 2 consumer, які слухають одну й ту саму чергу як і в попередньому прикладі. Але, різниця полягає в тому, що в yaml конфігу задано noAck: false. Це означає, що потрібно викликати .ack(). Якщо цього не зробити, слухач "зупиниться" на цьому повідомленні, як і реалізовано: за час 4 сек, другий воркер опрацює всі повідомлення в черзі, а перший воркер буде 'вісіти' на першому повідомленні

***Файл ```scheduler.yaml```. Налаштування планувальника завдань***


```yaml

# Scheduler AMQP settings
amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

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

# Worker AMQP settings
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

### Об'єднання потоків повідомлень

У випадку необхідності злиття потоків повідомлень для оброблення в одному обробнику використовується спільний обмінник повідомлень для декількох публікувальників.


<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/06.example.puml)

</center>

Для цього необхідно скористатись прикладами yaml конфігів, які наведені нижче. З головних деталей: 
- amqp.url, exchange.name, exchange.mode є однаковим
- валідація повідомлень представлена: message.id, message.producer, message.timeout  

***Файл ```listener.yaml```. Налаштування прослуховувача***

```yaml


amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

queue:
    name: dataflow
    
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

***Файл ```producer.yaml```. Налаштування публікувальника***

```yaml


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

### Послідовний робочий процес оброблення повідомлень

Організація послідовного робочого процесу оброблення повідомлень пов'язана з використанням в екземплярах мікросервісів
публікувальників та споживачів повідомлень. Мікросервіси-джерела, наприклад ```initiator```, мають публікувальника;
проміжні обробники (```worker1```) - як публікувальника, так і споживача, стоки повідомлень (```worker2```)- тільки споживача.

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/07.example.puml)

</center>

Для цього необхідно скористатись прикладами yaml конфігів, які наведені нижче. З головних деталей: 
- ```initiator-listener.yaml and initiator.yaml```: queue.exchange.name === exchange.name('initiator'), queue.exchange.mode === exchange.mode
- ```initiator-listener.yaml```: queue.options.noAck: true(manual підтвердження доставки)
- ```producer-listener.yaml and producer.yaml```: queue.exchange.name === exchange.name('producer'), queue.exchange.mode === exchange.mode
- ```producer-listener.yaml```: queue.options.noAck: true(manual підтвердження доставки)
- валідація повідомлень представлена(як і в минулих прикладах): message.id, message.producer, message.timeout  

Initiator пара надсилає і отримує повідомлення, і під час останнього тригерить publisher з інших пари, який запускає вже свій процес з надсилання і отрмування повідомлення відповідно cunsumer. Queue та exchange для кожної пари різний.

***Файл ```initiator-listener.yaml```***

```yaml

amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

queue:
    name: initiator
    
    exchange:
        name: initiator
        mode: fanout

    options:
        noAck: true        
      

```

***Файл ```initiator.yaml```***

```yaml

amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

exchange:
    name: initiator
    mode: fanout

```

***Файл ```producer-listener.yaml```***

```yaml

amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

queue:
    name: producer
    
    exchange:
        name: producer
        mode: fanout

    options:
        noAck: true

```

***Файл ```producer.yaml```***

```yaml

amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

exchange:
    name: producer
    mode: fanout

```

### Часткове оброблення повідомлень та композиция результатів

Використовуючи схему взаємодії для прослуховування декількома споживачами однієї черги повідомлень та 
схему взаємодії для об'єднання потоків повідомлень, можна організувати паралельне часткове оброблення
повідомлень з наступною композицією їх результатів. 

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/08.example.puml)

</center>

Для цього необхідно скористатись прикладами yaml конфігів, які наведені нижче.

***Файл ```initiator.yaml```***

```yaml

amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

exchange:
    name: messages
    mode: fanout

```

***Файл ```partial-listener.yaml```***

```yaml

amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

queue:
    name: messages
    
    exchange:
        name: messages
        mode: fanout

    options:
        noAck: true
    
```

***Файл ```partial-producer.yaml```***

```yaml

amqp:
    url: amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg

exchange:
    name: composer_input
    mode: fanout

```

