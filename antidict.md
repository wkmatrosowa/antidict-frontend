# Antidict frontend

Для проекта мы используем Create React App, потому что он предлагает
готовую настройку проекта, что существенно ускоряет время для создания
и запуска проекта

## Зависимости

* `react-router-dom` для создания ссылок
* `antd` элементы на странице

## Запуск проекта

```shell script
npm start
```

## Материалы

* [useHistory](https://reactrouter.com/web/api/Hooks/usehistory) – для 
получения объекта, с помощью которого можно переходить между страницами
* [useState](https://ru.reactjs.org/docs/hooks-state.html) – доступ к состоянию React (хук).
* [Деструктуризация](https://learn.javascript.ru/destructuring)
* [Видео про React](https://learn.javascript.ru/screencast/react)
* [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)
* [Спецификация JSONRPC](https://www.jsonrpc.org/specification)

## Решение проблем
> Access to fetch at 'http://localhost:5001/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin

Решение через настройку [прокси](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)