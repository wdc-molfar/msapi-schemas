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
  
    id: 01.use-msapi
  
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
