<h1 id="server-variables">Server variables v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#serverVariableObject

Base URLs:

* <a href="https://demo.example.com:443/v2">https://demo.example.com:443/v2</a>

* <a href="http://demo.local/v1">http://demo.local/v1</a>

* <a href="https://demo.readme.io:3000/v1">https://demo.readme.io:3000/v1</a>

<h1 id="server-variables-global">Global</h1>

## Global servers + variables

> Code samples

```bash
curl https://example.com/global \
  -X POST
```

`POST /global`

Support and handling of servers and server variables.

📚 OpenAPI specification references:

* [3.0.3 Server Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#serverObject)

* [3.1.0 Server Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#serverObject)

<h3 id="global-servers-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="server-variables-operation">Operation</h1>

## Operation-level servers + variables

> Code samples

```bash
curl https://example.com/operation \
  -X POST
```

`POST /operation`

Support and handling of servers and server variables set at the operation level.

📚 OpenAPI specification references:

* [3.0.3 Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject)

* [3.1.0 Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject)

<h3 id="operation-level-servers-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="server-variables-path">Path</h1>

## Path-common level operation servers

> Code samples

```bash
curl https://example.com/path \
  -X PUT
```

`PUT /path`

Support and handling of servers and server variables set at the path level.

📚 OpenAPI specification references:

* [3.0.3 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathItemObject)

* [3.1.0 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathItemObject)

<h3 id="path-common-level-operation-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Path-common level and operation-level operation servers

> Code samples

```bash
curl https://example.com/combo \
  -X PUT
```

`PUT /combo`

Support and handling of servers and server variables set at the path **and** operation level.

📚 OpenAPI specification references:

* [3.0.3 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathItemObject)

* [3.1.0 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathItemObject)

<h3 id="path-common-level-and-operation-level-operation-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
