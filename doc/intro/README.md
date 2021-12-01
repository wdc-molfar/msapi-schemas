# Програмний модуль @molfar/msapi-schemas | Вступ

**Програмний модуль @molfar/msapi-schemas – "Програмний модуль для оброблення та валідації специфікацій API мікросервісів та робочих процесів"**, який написаний мовою програмування JavaScript, призначений для оброблення та валідації специфікацій API мікросервісів та робочих процесів з метою подальшого опису систем збору та оброблення даних і компонентів повторюваного використання. 

### Зміст
- [Позначення та найменування програмного модуля](#name)
- [Програмне забезпечення, необхідне для функціонування програмного модуля](#software)
- [Функціональне призначення](#function)
- [Опис логічної структури](#structure)
- [Використовувані технічні засоби](#hardware)
- [Виклик та завантаження](#run)

<a name="name"></a>
<h2>Позначення та найменування програмного модуля</h2>

Програмний модуль має позначення **"@molfar/msapi-schemas"**.

Повне найменування програмного модуля – **"Програмний модуль для оброблення та валідації специфікацій API мікросервісів та робочих процесів"**.


<a name="software"></a>
<h2>Програмне забезпечення, необхідне для функціонування програмного модуля</h2>

Для функціонування програмного модуля, написаного мовою програмування JavaScript, необхідне наступне програмне забезпечення та пакети:

- `@rollup/plugin-commonjs` [v17.0.0](https://www.npmjs.com/package/@rollup/plugin-commonjs/v/17.0.0)
- `@rollup/plugin-json` [v4.1.0](https://www.npmjs.com/package/@rollup/plugin-json/v/4.1.0)
- `@rollup/plugin-node-resolve` [v11.0.0](https://www.npmjs.com/package/@rollup/plugin-node-resolve/v/11.0.0)
- `Ajv JSON schema validator` [v8.6.3](https://www.npmjs.com/package/ajv/v/8.6.3)
- `ajv-errors` [v3.0.0](https://www.npmjs.com/package/ajv-errors/v/3.0.0)
- `ajv-formats` [v2.1.1](https://www.npmjs.com/package/ajv-formats/v/2.1.1)
- `deep-extend` [v0.6.0](https://www.npmjs.com/package/deep-extend/v/0.6.0)
- `Docker` [v20.10](https://docs.docker.com/engine/release-notes/#version-2010)
- `esm` [v3.2.25](https://www.npmjs.com/package/esm/v/3.2.25)
- `fs-extra` [v10.0.0](https://www.npmjs.com/package/fs-extra/v/10.0.0)
- `glob` [v7.2.0](https://www.npmjs.com/package/glob/v/7.2.0)
- `jest` [v27.3.1](https://www.npmjs.com/package/jest/v/27.3.1)
- `jest-html-reporters` [v2.1.6](https://www.npmjs.com/package/jest-html-reporters/v/2.1.6)
- `js-yaml` [v4.1.0](https://www.npmjs.com/package/js-yaml/v/4.1.0)
- `json-refs` [v3.0.15](https://www.npmjs.com/package/json-refs/v/3.0.15)
- `jsonschema2mk` [v1.3.4](https://www.npmjs.com/package/jsonschema2mk/v/1.3.4)
- `lodash` [v4.17.21](https://www.npmjs.com/package/lodash/v/4.17.21)
- `prism-themes` [v1.9.0](https://www.npmjs.com/package/prism-themes/v/1.9.0)
- `rollup` [v2.34.1](https://www.npmjs.com/package/rollup/v/2.34.1)
- `rollup-plugin-node-polyfills` [v0.2.1](https://www.npmjs.com/package/rollup-plugin-node-polyfills/v/0.2.1)
- `rollup-plugin-terser` [v7.0.2](https://www.npmjs.com/package/rollup-plugin-terser/v/7.0.2)
- `yaml-ast-parser` [v0.0.43](https://www.npmjs.com/package/yaml-ast-parser/v/0.0.43)

<a name="function"></a>
<h2>Функціональне призначення</h2>

Програмний модуль призначений для оброблення та валідації специфікацій API мікросервісів та робочих процесів.

<a name="structure"></a>
<h2>Опис логічної структури</h2>

Програмний модуль складається з:
- обробника та валідатора специфікацій для `MSAPI`
- обробника та валідатора специфікацій для `Connection`
- обробника та валідатора специфікацій для `Сonsumer`
- обробника та валідатора специфікацій для `Publisher`
- обробника та валідатора специфікацій для `Exchange`
- обробника та валідатора специфікацій для `Queue`

<a name="hardware"></a>
<h2>Використовувані технічні засоби</h2>

Програмний модуль експлуатується на сервері під управлінням `Node.js`. В основі управління всіх сервісів є система оркестрації `Kubernetes`, де всі контейнери працюють з використанням `Docker`.

<a name="run"></a>
<h2>Виклик та завантаження</h2>

Завантаження програмного модуля забезпечується шляхом запуску через планувальник задач – `Task Scheduler`.


MSAPI-специфікації призначені для опису розподілених інформаційних систем з мікросервісною архітектурою.
Взаємодія програмних модулів (мікросервісів) таких систем здійснюється за допомогою обміну
повідомленнями за протоколом [Advanced Message Queuing Protocol (AMQP)](https://www.amqp.org/).

Опис робочого процесу оброблення даних (```workflow```) складається з декларації множини розміщених на обчислювальних вузлах 
системи налаштованих екземплярів сервісів (```service```).

Тип сервісу декларується у відповідності до концепції "чорної скриньки": 
    - вхідні налаштування ```config```
    - прослуховувач повідомлень ```consume```
    - публікувальник повідомлень ```produce```

<center>![uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/wdc-molfar/msapi-schemas/master/doc/intro/puml/service.puml</center>
