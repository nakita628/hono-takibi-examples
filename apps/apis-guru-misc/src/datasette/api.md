<h1 id="datasette-api">Datasette API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Execute SQL queries against a Datasette database and return the results as JSON

Base URLs:

* <a href="http://datasette.local">http://datasette.local</a>

* <a href="https://datasette.io">https://datasette.io</a>

<h1 id="datasette-api-default">Default</h1>

## Execute a SQLite SQL query against the content database

<a id="opIdquery"></a>

> Code samples

```bash
curl 'https://example.com/content.json?sql=string&_shape=array' \
  -H 'Accept: application/json'
```

`GET /content.json`

Accepts SQLite SQL query, returns JSON. Does not allow PRAGMA statements.

<h3 id="execute-a-sqlite-sql-query-against-the-content-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sql|query|string|true|The SQL query to be executed|
|_shape|query|string|true|The shape of the response data. Must be "array"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_shape|array|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="execute-a-sqlite-sql-query-against-the-content-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful SQL results|Inline|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal server error|None|

<h3 id="execute-a-sqlite-sql-query-against-the-content-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
