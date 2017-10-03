Service description

##### Service Prefix: /salesForce

##### Current Version: /v1

---

## Response Codes

+ **200** -- The request has succeeded.
+ **201** -- The request has been fulfilled and resulted in a new resource being created.
+ **204** -- The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation.
+ **304** -- The server hasn't modified the item.
+ **400** -- The request could not be understood by the server due to malformed syntax.
+ **401** -- The request requires user authentication.
+ **403** -- The server understood the request but refuses to authorize it.
+ **404** -- The server has not found anything matching the Request-URI.
+ **500** -- The server encountered an unexpected condition which prevented it from fulfilling the request.

---

***Example curl request***
```
curl -X GET -H "X-CBTN-DEV-MOCKSTATE: DEFAULT" 'https://qa-api.cbtnuggets.com/playlist/v2/'
```

---

## Diagrams

## Status of Routes
![Not Started](statics/not_started.png) Not started

![In Progress](statics/in_progress.png) In progress (stub with readme requests and responses)

![Done](statics/done.png) Deployed

<a name="routes_menu"></a>
## Routes
---
[Back to Menu](#routes_menu)

<a name="dev_env"></a>
# Setting up a Development Environment

## Pre-requisites

* keys.json
* Node v6.9.1
* Run `npm install` in the node directory
* MongoDB running (Locally or QA environments)

## Add keys.json file to the config directories

* Add the `keys.json` file to the `cbtHack/node/config` directory

## Starting server & hitting endpoints

* Navigate to the `node` directory
* Start the server with `NODE_ENV=qa node app.js`
* Generate a QA access token with `cbt -e qa auth get_token`
* Hit desired endpoint and provide valid access token
