# Використання MSAPI-специфікацій для опису систем збору та оброблення даних

## Базовий приклад

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/01.example.puml)

</center>

```yaml
msapi: "1.0.1"

metadata: 
  
    id: 01.use-msapi
  
    title: Базовий приклад
  
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
## Застосування компонентів повторюваного використання

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

## Налаштування сервісів

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
## Прослуховування декількома споживачами однієї черги повідомлень

У випадку, коли одні й ті ж свмі повідомлення повинні бути оброблені за допомогою різних алгоритмів, можна організувати 
прослуховування однієї черги повідомлень декількома споживачами. В цьому випадку оброблення повідомлень цими споживачами буде здійснюватися паралельно.

<center>

![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/examples/puml/04.example.puml)

</center>


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

## Організація черги завдань

При необхідності організації паралельного однотипного оброблення повідомлень декількома обробниками, можна організувати
розбір завдань декількома споживачами з спільної черги завдань. На відміну від попереднього випадку, якщо вибірка повідомлення підтверджена одним з споживачів, інші споживачі вже не отримують це повідомлення. 

