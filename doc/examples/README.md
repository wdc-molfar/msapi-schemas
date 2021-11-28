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
