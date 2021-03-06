# Програмний модуль @molfar/msapi-schemas | Програма та методика випробувань

## Об'єкт випробувань

Об'єктом випробувань є **програмний модуль @molfar/msapi-schemas – "Програмний модуль для оброблення та валідації специфікацій API мікросервісів та робочих процесів"**, що призначений для оброблення та валідації специфікацій API мікросервісів та робочих процесів з метою подальшого опису систем збору та оброблення даних і компонентів повторюваного використання.

## Мета випробувань

Перевірити надійність функціонування програмного модуля @molfar/msapi-schemas та його окремих функцій. 

## Вимоги до програмного модуля

Програмний модуль **не має призводити до збою (фатального порушення роботи системи)** та повинен задовільнати наступним вимогам:
- повертати помилку валідації для пустої специфікації
- повертати помилку валідації для специфікації з відсутною версією `msapi`
- успішно валідувати специфікацію з коректно заповненими метаданими


## Вимоги до програмної документації

Склад програмної документації, пропонованої на випробуванні:
- [ГОСТ 19.402-78.](https://docs.cntd.ru/document/1200007652) ЕСПД. Опис програми
- [ГОСТ 19.301-79.](https://docs.cntd.ru/document/1200007650) ЕСПД. Програма та методика випробувань. Вимоги до змісту та оформлення
- [ГОСТ 19.401-78.](https://docs.cntd.ru/document/1200007651) ЕСПД. Текст програми. Вимоги до змісту та оформлення

## Засоби і порядок випробувань

Для запуску комплексу тестів використовуються менеджер пакетів для мови програмування JavaScript – `npm (Node Package Manager)`, та команда

```shell
npm test
```

Порядок проведення випробувань:
1. Виконати комплекс тестів **"Тести для перевірки підсхеми "metadata""**, запустивши файл `metadata\metadata.test.js`
2. Виконати комплекс тестів **"Тести для перевірки "**, запустивши файл `utils\schema-validator.test.js`

Для обробки результатів тестування та створення протоколу випробувань в HTML використовується `Jest reporter` версії [2.1.6](https://www.npmjs.com/package/jest-html-reporters/v/2.1.6).

## Методи випробувань

Для проведення випробувань пропонується наступий комплекс тестів **"Тести для перевірки підсхеми "metadata""**, що міститься у файлі `infrastructure\amqp-manager.test.js`, має наступні тестові приклади:
	- Тест перевірки повернення помилки валідації для пустої специфікації
	- Тест перевірки повернення помилки валідації для специфікації з відсутною версією `msapi`
	- Тест перевірки успішної валідації специфікації з коректно заповненими метаданими

## Додаток

Вміст тестових файлів, результати тестування програмного модуля та розширена інформація про тестове покриття, яке в середньому склало ...%, наведено в:

<a href="../testReport/test-report.html" target="blank">Протокол випробувань</a>

<a href="../coverage/lcov-report/index.html" target="blank">Тестове покриття</a>
