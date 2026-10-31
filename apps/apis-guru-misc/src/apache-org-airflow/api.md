<h1 id="airflow-api-stable">Airflow API (Stable) v2.5.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Overview

To facilitate management, Apache Airflow supports a range of REST API endpoints across its
objects.
This section provides an overview of the API design, methods, and supported use cases.

Most of the endpoints accept `JSON` as input and return `JSON` responses.
This means that you must usually add the following headers to your request:
```
Content-type: application/json
Accept: application/json
```

## Resources

The term `resource` refers to a single type of object in the Airflow metadata. An API is broken up by its
endpoint's corresponding resource.
The name of a resource is typically plural and expressed in camelCase. Example: `dagRuns`.

Resource names are used as part of endpoint URLs, as well as in API parameters and responses.

## CRUD Operations

The platform supports **C**reate, **R**ead, **U**pdate, and **D**elete operations on most resources.
You can review the standards for these operations and their standard parameters below.

Some endpoints have special behavior as exceptions.

### Create

To create a resource, you typically submit an HTTP `POST` request with the resource's required metadata
in the request body.
The response returns a `201 Created` response code upon success with the resource's metadata, including
its internal `id`, in the response body.

### Read

The HTTP `GET` request can be used to read a resource or to list a number of resources.

A resource's `id` can be submitted in the request parameters to read a specific resource.
The response usually returns a `200 OK` response code upon success, with the resource's metadata in
the response body.

If a `GET` request does not include a specific resource `id`, it is treated as a list request.
The response usually returns a `200 OK` response code upon success, with an object containing a list
of resources' metadata in the response body.

When reading resources, some common query parameters are usually available. e.g.:
```
v1/connections?limit=25&offset=25
```

|Query Parameter|Type|Description|
|---------------|----|-----------|
|limit|integer|Maximum number of objects to fetch. Usually 25 by default|
|offset|integer|Offset after which to start returning objects. For use with limit query parameter.|

### Update

Updating a resource requires the resource `id`, and is typically done using an HTTP `PATCH` request,
with the fields to modify in the request body.
The response usually returns a `200 OK` response code upon success, with information about the modified
resource in the response body.

### Delete

Deleting a resource requires the resource `id` and is typically executing via an HTTP `DELETE` request.
The response usually returns a `204 No Content` response code upon success.

## Conventions

- Resource names are plural and expressed in camelCase.
- Names are consistent between URL parameter name and field name.

- Field names are in snake_case.
```json
{
    "name": "string",
    "slots": 0,
    "occupied_slots": 0,
    "used_slots": 0,
    "queued_slots": 0,
    "open_slots": 0
}
```

### Update Mask

Update mask is available as a query parameter in patch endpoints. It is used to notify the
API which fields you want to update. Using `update_mask` makes it easier to update objects
by helping the server know which fields to update in an object instead of updating all fields.
The update request ignores any fields that aren't specified in the field mask, leaving them with
their current values.

Example:
```
  resource = request.get('/resource/my-id').json()
  resource['my_field'] = 'new-value'
  request.patch('/resource/my-id?update_mask=my_field', data=json.dumps(resource))
```

## Versioning and Endpoint Lifecycle

- API versioning is not synchronized to specific releases of the Apache Airflow.
- APIs are designed to be backward compatible.
- Any changes to the API will first go through a deprecation phase.

# Trying the API

You can use a third party client, such as [curl](https://curl.haxx.se/), [HTTPie](https://httpie.org/),
[Postman](https://www.postman.com/) or [the Insomnia rest client](https://insomnia.rest/) to test
the Apache Airflow API.

Note that you will need to pass credentials data.

For e.g., here is how to pause a DAG with [curl](https://curl.haxx.se/), when basic authorization is used:
```bash
curl -X PATCH 'https://example.com/api/v1/dags/{dag_id}?update_mask=is_paused' \
-H 'Content-Type: application/json' \
--user "username:password" \
-d '{
    "is_paused": true
}'
```

Using a graphical tool such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/),
it is possible to import the API specifications directly:

1. Download the API specification by clicking the **Download** button at top of this document
2. Import the JSON specification in the graphical tool of your choice.
  - In *Postman*, you can click the **import** button at the top
  - With *Insomnia*, you can just drag-and-drop the file on the UI

Note that with *Postman*, you can also generate code snippets by selecting a request and clicking on
the **Code** button.

## Enabling CORS

[Cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
is a browser security feature that restricts HTTP requests that are
initiated from scripts running in the browser.

For details on enabling/configuring CORS, see
[Enabling CORS](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).

# Authentication

To be able to meet the requirements of many organizations, Airflow supports many authentication methods,
and it is even possible to add your own method.

If you want to check which auth backend is currently set, you can use
`airflow config get-value api auth_backends` command as in the example below.
```bash
$ airflow config get-value api auth_backends
airflow.api.auth.backend.basic_auth
```
The default is to deny all requests.

For details on configuring the authentication, see
[API Authorization](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).

# Errors

We follow the error response format proposed in [RFC 7807](https://tools.ietf.org/html/rfc7807)
also known as Problem Details for HTTP APIs. As with our normal API responses,
your client must be prepared to gracefully handle additional members of the response.

## Unauthenticated

This indicates that the request has not been applied because it lacks valid authentication
credentials for the target resource. Please check that you have valid credentials.

## PermissionDenied

This response means that the server understood the request but refuses to authorize
it because it lacks sufficient rights to the resource. It happens when you do not have the
necessary permission to execute the action you performed. You need to get the appropriate
permissions in other to resolve this error.

## BadRequest

This response means that the server cannot or will not process the request due to something
that is perceived to be a client error (e.g., malformed request syntax, invalid request message
framing, or deceptive request routing). To resolve this, please ensure that your syntax is correct.

## NotFound

This client error response indicates that the server cannot find the requested resource.

## MethodNotAllowed

Indicates that the request method is known by the server but is not supported by the target resource.

## NotAcceptable

The target resource does not have a current representation that would be acceptable to the user
agent, according to the proactive negotiation header fields received in the request, and the
server is unwilling to supply a default representation.

## AlreadyExists

The request could not be completed due to a conflict with the current state of the target
resource, e.g. the resource it tries to create already exists.

## Unknown

This means that the server encountered an unexpected condition that prevented it from
fulfilling the request.

Base URLs:

* <a href="https://api.apis.guru/api/v1">https://api.apis.guru/api/v1</a> - Apache Airflow Stable API.

* <a href="https://apache.local">https://apache.local</a>

Email: <a href="mailto:dev@airflow.apache.org">Apache Software Foundation</a> 
Web: <a href="https://airflow.apache.org">Apache Software Foundation</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://airflow.apache.org/docs/apache-airflow/stable/">External documentation</a>

# Authentication

- HTTP Authentication, scheme: basic

- OpenID Connect authentication.

    - OpenID Connect URL = [https://accounts.google.com/.well-known/openid-configuration](https://accounts.google.com/.well-known/openid-configuration)

- HTTP Authentication, scheme: negotiate

<h1 id="airflow-api-stable-config">Config</h1>

## Get current configuration

<a id="opIdget_config"></a>

> Code samples

```bash
curl https://example.com/config \
  -H 'Accept: application/json'
```

`GET /config`

> Example responses

> 200 Response

```json
{
  "sections": [
    {
      "name": "core",
      "options": [
        {
          "key": "dags_folder",
          "value": "/home/user/my-dags-folder"
        }
      ]
    },
    {
      "name": "smtp",
      "options": [
        {
          "key": "smtp_host",
          "value": "localhost"
        },
        {
          "key": "smtp_mail_from",
          "value": "airflow@example.com"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-current-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Config](#schemaconfig)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-connection">Connection</h1>

## List connections

<a id="opIdget_connections"></a>

> Code samples

```bash
curl https://example.com/connections \
  -H 'Accept: application/json'
```

`GET /connections`

<h3 id="list-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "conn_type": "string",
      "connection_id": "string",
      "description": "string",
      "host": "string",
      "login": "string",
      "port": 0,
      "schema": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ConnectionCollection](#schemaconnectioncollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a connection

<a id="opIdpost_connection"></a>

> Code samples

```bash
curl https://example.com/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "conn_type": "string",
    "connection_id": "string",
    "description": "string",
    "host": "string",
    "login": "string",
    "port": 0,
    "schema": "string",
    "extra": "string",
    "password": "password"
  }'
```

`POST /connections`

> Body parameter

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string",
  "extra": "string",
  "password": "password"
}
```

<h3 id="create-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Connection](#schemaconnection)|true|none|
|» conn_type|body|string|false|The connection type.|
|» connection_id|body|string|false|The connection ID.|
|» description|body|string \| null|false|The description of the connection.|
|» host|body|string \| null|false|Host of the connection.|
|» login|body|string \| null|false|Login of the connection.|
|» port|body|integer \| null|false|Port of the connection.|
|» schema|body|string \| null|false|Schema of the connection.|
|» extra|body|string \| null|false|Other values that cannot be put into another field, e.g. RSA keys.|
|» password|body|string(password)|false|Password of the connection.|

> Example responses

> 200 Response

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string",
  "extra": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Connection](#schemaconnection)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Test a connection

<a id="opIdtest_connection"></a>

> Code samples

```bash
curl https://example.com/connections/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "conn_type": "string",
    "connection_id": "string",
    "description": "string",
    "host": "string",
    "login": "string",
    "port": 0,
    "schema": "string",
    "extra": "string",
    "password": "password"
  }'
```

`POST /connections/test`

Test a connection.

*New in version 2.2.0*


> Body parameter

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string",
  "extra": "string",
  "password": "password"
}
```

<h3 id="test-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Connection](#schemaconnection)|true|none|
|» conn_type|body|string|false|The connection type.|
|» connection_id|body|string|false|The connection ID.|
|» description|body|string \| null|false|The description of the connection.|
|» host|body|string \| null|false|Host of the connection.|
|» login|body|string \| null|false|Login of the connection.|
|» port|body|integer \| null|false|Port of the connection.|
|» schema|body|string \| null|false|Schema of the connection.|
|» extra|body|string \| null|false|Other values that cannot be put into another field, e.g. RSA keys.|
|» password|body|string(password)|false|Password of the connection.|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "status": true
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="test-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ConnectionTest](#schemaconnectiontest)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a connection

<a id="opIdget_connection"></a>

> Code samples

```bash
curl https://example.com/connections/string \
  -H 'Accept: application/json'
```

`GET /connections/{connection_id}`

<h3 id="get-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_id|path|string|true|The connection ID.|

> Example responses

> 200 Response

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string",
  "extra": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Connection](#schemaconnection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a connection

<a id="opIddelete_connection"></a>

> Code samples

```bash
curl https://example.com/connections/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /connections/{connection_id}`

<h3 id="delete-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_id|path|string|true|The connection ID.|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a connection

<a id="opIdpatch_connection"></a>

> Code samples

```bash
curl https://example.com/connections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "conn_type": "string",
    "connection_id": "string",
    "description": "string",
    "host": "string",
    "login": "string",
    "port": 0,
    "schema": "string",
    "extra": "string",
    "password": "password"
  }'
```

`PATCH /connections/{connection_id}`

> Body parameter

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string",
  "extra": "string",
  "password": "password"
}
```

<h3 id="update-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|update_mask|query|[string]|false|The fields to update on the resource. If absent or empty, all modifiable fields are updated.<br>A comma-separated list of fully qualified names of fields.<br>|
|connection_id|path|string|true|The connection ID.|
|body|body|[Connection](#schemaconnection)|true|none|
|» conn_type|body|string|false|The connection type.|
|» connection_id|body|string|false|The connection ID.|
|» description|body|string \| null|false|The description of the connection.|
|» host|body|string \| null|false|Host of the connection.|
|» login|body|string \| null|false|Login of the connection.|
|» port|body|integer \| null|false|Port of the connection.|
|» schema|body|string \| null|false|Schema of the connection.|
|» extra|body|string \| null|false|Other values that cannot be put into another field, e.g. RSA keys.|
|» password|body|string(password)|false|Password of the connection.|

> Example responses

> 200 Response

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string",
  "extra": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Connection](#schemaconnection)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-dag">DAG</h1>

## Get a source code

<a id="opIdget_dag_source"></a>

> Code samples

```bash
curl https://example.com/dagSources/string \
  -H 'Accept: application/json'
```

`GET /dagSources/{file_token}`

Get a source code using file token.


<h3 id="get-a-source-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_token|path|string|true|The key containing the encrypted path to the file. Encryption and decryption take place only on<br>the server. This prevents the client from reading an non-DAG file. This also ensures API<br>extensibility, because the format of encrypted data may change.<br>|

> Example responses

> 200 Response

```json
{
  "content": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-source-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|
|406|Not Acceptable|A specified Accept header is not allowed.|[Error](#schemaerror)|

<h3 id="get-a-source-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List DAGs

<a id="opIdget_dags"></a>

> Code samples

```bash
curl https://example.com/dags \
  -H 'Accept: application/json'
```

`GET /dags`

List DAGs in the database.
`dag_id_pattern` can be set to match dags of a specific pattern


<h3 id="list-dags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|
|tags|query|[string]|false|List of tags to filter results.<br><br>*New in version 2.2.0*<br>|
|only_active|query|boolean|false|Only filter active DAGs.<br><br>*New in version 2.1.1*<br>|
|dag_id_pattern|query|string|false|If set, only return DAGs with dag_ids matching this pattern.<br>|

> Example responses

> 200 Response

```json
{
  "dags": [
    {
      "dag_id": "string",
      "default_view": "string",
      "description": "string",
      "file_token": "string",
      "fileloc": "string",
      "has_import_errors": true,
      "has_task_concurrency_limits": true,
      "is_active": true,
      "is_paused": true,
      "is_subdag": true,
      "last_expired": "1970-01-01T00:00:00Z",
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_pickled": "1970-01-01T00:00:00Z",
      "max_active_runs": 0,
      "max_active_tasks": 0,
      "next_dagrun": "1970-01-01T00:00:00Z",
      "next_dagrun_create_after": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
      "owners": [
        "string"
      ],
      "pickle_id": "string",
      "root_dag_id": "string",
      "schedule_interval": {
        "__type": "string",
        "days": 0,
        "microseconds": 0,
        "seconds": 0
      },
      "scheduler_lock": true,
      "tags": [
        {
          "name": "string"
        }
      ],
      "timetable_description": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-dags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGCollection](#schemadagcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update DAGs

<a id="opIdpatch_dags"></a>

> Code samples

```bash
curl 'https://example.com/dags?dag_id_pattern=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "is_paused": true
  }'
```

`PATCH /dags`

Update DAGs of a given dag_id_pattern using UpdateMask.
This endpoint allows specifying `~` as the dag_id_pattern to update all DAGs.
*New in version 2.3.0*


> Body parameter

```json
{
  "is_paused": true
}
```

<h3 id="update-dags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|tags|query|[string]|false|List of tags to filter results.<br><br>*New in version 2.2.0*<br>|
|update_mask|query|[string]|false|The fields to update on the resource. If absent or empty, all modifiable fields are updated.<br>A comma-separated list of fully qualified names of fields.<br>|
|only_active|query|boolean|false|Only filter active DAGs.<br><br>*New in version 2.1.1*<br>|
|dag_id_pattern|query|string|true|If set, only update DAGs with dag_ids matching this pattern.<br>|
|body|body|[DAG](#schemadag)|true|none|
|» is_paused|body|boolean \| null|false|Whether the DAG is paused.|

> Example responses

> 200 Response

```json
{
  "dags": [
    {
      "dag_id": "string",
      "default_view": "string",
      "description": "string",
      "file_token": "string",
      "fileloc": "string",
      "has_import_errors": true,
      "has_task_concurrency_limits": true,
      "is_active": true,
      "is_paused": true,
      "is_subdag": true,
      "last_expired": "1970-01-01T00:00:00Z",
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_pickled": "1970-01-01T00:00:00Z",
      "max_active_runs": 0,
      "max_active_tasks": 0,
      "next_dagrun": "1970-01-01T00:00:00Z",
      "next_dagrun_create_after": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
      "owners": [
        "string"
      ],
      "pickle_id": "string",
      "root_dag_id": "string",
      "schedule_interval": {
        "__type": "string",
        "days": 0,
        "microseconds": 0,
        "seconds": 0
      },
      "scheduler_lock": true,
      "tags": [
        {
          "name": "string"
        }
      ],
      "timetable_description": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-dags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGCollection](#schemadagcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get basic information about a DAG

<a id="opIdget_dag"></a>

> Code samples

```bash
curl https://example.com/dags/string \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}`

Presents only information available in database (DAGModel).
If you need detailed information, consider using GET /dags/{dag_id}/details.


<h3 id="get-basic-information-about-a-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "default_view": "string",
  "description": "string",
  "file_token": "string",
  "fileloc": "string",
  "has_import_errors": true,
  "has_task_concurrency_limits": true,
  "is_active": true,
  "is_paused": true,
  "is_subdag": true,
  "last_expired": "1970-01-01T00:00:00Z",
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_pickled": "1970-01-01T00:00:00Z",
  "max_active_runs": 0,
  "max_active_tasks": 0,
  "next_dagrun": "1970-01-01T00:00:00Z",
  "next_dagrun_create_after": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "owners": [
    "string"
  ],
  "pickle_id": "string",
  "root_dag_id": "string",
  "schedule_interval": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "scheduler_lock": true,
  "tags": [
    {
      "name": "string"
    }
  ],
  "timetable_description": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-basic-information-about-a-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAG](#schemadag)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a DAG

<a id="opIddelete_dag"></a>

> Code samples

```bash
curl https://example.com/dags/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dags/{dag_id}`

Deletes all metadata related to the DAG, including finished DAG Runs and Tasks.
Logs are not deleted. This action cannot be undone.

*New in version 2.2.0*


<h3 id="delete-a-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|
|409|Conflict|An existing resource conflicts with the request.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a DAG

<a id="opIdpatch_dag"></a>

> Code samples

```bash
curl https://example.com/dags/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "is_paused": true
  }'
```

`PATCH /dags/{dag_id}`

> Body parameter

```json
{
  "is_paused": true
}
```

<h3 id="update-a-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|update_mask|query|[string]|false|The fields to update on the resource. If absent or empty, all modifiable fields are updated.<br>A comma-separated list of fully qualified names of fields.<br>|
|dag_id|path|string|true|The DAG ID.|
|body|body|[DAG](#schemadag)|true|none|
|» is_paused|body|boolean \| null|false|Whether the DAG is paused.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "default_view": "string",
  "description": "string",
  "file_token": "string",
  "fileloc": "string",
  "has_import_errors": true,
  "has_task_concurrency_limits": true,
  "is_active": true,
  "is_paused": true,
  "is_subdag": true,
  "last_expired": "1970-01-01T00:00:00Z",
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_pickled": "1970-01-01T00:00:00Z",
  "max_active_runs": 0,
  "max_active_tasks": 0,
  "next_dagrun": "1970-01-01T00:00:00Z",
  "next_dagrun_create_after": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "owners": [
    "string"
  ],
  "pickle_id": "string",
  "root_dag_id": "string",
  "schedule_interval": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "scheduler_lock": true,
  "tags": [
    {
      "name": "string"
    }
  ],
  "timetable_description": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAG](#schemadag)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Clear a set of task instances

<a id="opIdpost_clear_task_instances"></a>

> Code samples

```bash
curl https://example.com/dags/string/clearTaskInstances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dag_run_id": "string",
    "dry_run": true,
    "end_date": "string",
    "include_downstream": false,
    "include_future": false,
    "include_parentdag": true,
    "include_past": false,
    "include_subdags": true,
    "include_upstream": false,
    "only_failed": true,
    "only_running": false,
    "reset_dag_runs": true,
    "start_date": "string",
    "task_ids": [
      "string"
    ]
  }'
```

`POST /dags/{dag_id}/clearTaskInstances`

Clears a set of task instances associated with the DAG for a specified date range.


> Body parameter

```json
{
  "dag_run_id": "string",
  "dry_run": true,
  "end_date": "string",
  "include_downstream": false,
  "include_future": false,
  "include_parentdag": true,
  "include_past": false,
  "include_subdags": true,
  "include_upstream": false,
  "only_failed": true,
  "only_running": false,
  "reset_dag_runs": true,
  "start_date": "string",
  "task_ids": [
    "string"
  ]
}
```

<h3 id="clear-a-set-of-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|body|body|[ClearTaskInstances](#schemacleartaskinstances)|true|Parameters of action|
|» dag_run_id|body|string \| null|false|The DagRun ID for this task instance|
|» dry_run|body|boolean|false|If set, don't actually run this operation. The response will contain a list of task instances<br>planned to be cleaned, but not modified in any way.<br>|
|» end_date|body|string(datetime)|false|The maximum execution date to clear.|
|» include_downstream|body|boolean|false|If set to true, downstream tasks are also affected.|
|» include_future|body|boolean|false|If set to True, also tasks from future DAG Runs are affected.|
|» include_parentdag|body|boolean|false|Clear tasks in the parent dag of the subdag.|
|» include_past|body|boolean|false|If set to True, also tasks from past DAG Runs are affected.|
|» include_subdags|body|boolean|false|Clear tasks in subdags and clear external tasks indicated by ExternalTaskMarker.|
|» include_upstream|body|boolean|false|If set to true, upstream tasks are also affected.|
|» only_failed|body|boolean|false|Only clear failed tasks.|
|» only_running|body|boolean|false|Only clear running tasks.|
|» reset_dag_runs|body|boolean|false|Set state of DAG runs to RUNNING.|
|» start_date|body|string(datetime)|false|The minimum execution date to clear.|
|» task_ids|body|[string]|false|A list of task ids to clear.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "dag_id": "string",
      "dag_run_id": "string",
      "execution_date": "string",
      "task_id": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="clear-a-set-of-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstanceReferenceCollection](#schemataskinstancereferencecollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a simplified representation of DAG

<a id="opIdget_dag_details"></a>

> Code samples

```bash
curl https://example.com/dags/string/details \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/details`

The response contains many DAG attributes, so the response can be large. If possible, consider using GET /dags/{dag_id}.


<h3 id="get-a-simplified-representation-of-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "default_view": "string",
  "description": "string",
  "file_token": "string",
  "fileloc": "string",
  "has_import_errors": true,
  "has_task_concurrency_limits": true,
  "is_active": true,
  "is_paused": true,
  "is_subdag": true,
  "last_expired": "1970-01-01T00:00:00Z",
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_pickled": "1970-01-01T00:00:00Z",
  "max_active_runs": 0,
  "max_active_tasks": 0,
  "next_dagrun": "1970-01-01T00:00:00Z",
  "next_dagrun_create_after": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "owners": [
    "string"
  ],
  "pickle_id": "string",
  "root_dag_id": "string",
  "schedule_interval": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "scheduler_lock": true,
  "tags": [
    {
      "name": "string"
    }
  ],
  "timetable_description": "string",
  "catchup": true,
  "concurrency": 0,
  "dag_run_timeout": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "doc_md": "string",
  "end_date": "1970-01-01T00:00:00Z",
  "is_paused_upon_creation": true,
  "last_parsed": "1970-01-01T00:00:00Z",
  "orientation": "string",
  "params": {},
  "render_template_as_native_obj": true,
  "start_date": "1970-01-01T00:00:00Z",
  "template_search_path": [
    "string"
  ],
  "timezone": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-simplified-representation-of-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGDetail](#schemadagdetail)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get tasks for DAG

<a id="opIdget_tasks"></a>

> Code samples

```bash
curl https://example.com/dags/string/tasks \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/tasks`

<h3 id="get-tasks-for-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "tasks": [
    {
      "class_ref": {
        "class_name": "string",
        "module_path": "string"
      },
      "depends_on_past": true,
      "downstream_task_ids": [
        "string"
      ],
      "end_date": "1970-01-01T00:00:00Z",
      "execution_timeout": {
        "__type": "string",
        "days": 0,
        "microseconds": 0,
        "seconds": 0
      },
      "extra_links": [
        {
          "class_ref": {
            "class_name": "string",
            "module_path": "string"
          }
        }
      ],
      "is_mapped": true,
      "owner": "string",
      "pool": "string",
      "pool_slots": 0,
      "priority_weight": 0,
      "queue": "string",
      "retries": 0,
      "retry_delay": {
        "__type": "string",
        "days": 0,
        "microseconds": 0,
        "seconds": 0
      },
      "retry_exponential_backoff": true,
      "start_date": "1970-01-01T00:00:00Z",
      "sub_dag": {
        "dag_id": "string",
        "default_view": "string",
        "description": "string",
        "file_token": "string",
        "fileloc": "string",
        "has_import_errors": true,
        "has_task_concurrency_limits": true,
        "is_active": true,
        "is_paused": true,
        "is_subdag": true,
        "last_expired": "1970-01-01T00:00:00Z",
        "last_parsed_time": "1970-01-01T00:00:00Z",
        "last_pickled": "1970-01-01T00:00:00Z",
        "max_active_runs": 0,
        "max_active_tasks": 0,
        "next_dagrun": "1970-01-01T00:00:00Z",
        "next_dagrun_create_after": "1970-01-01T00:00:00Z",
        "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
        "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
        "owners": [
          "string"
        ],
        "pickle_id": "string",
        "root_dag_id": "string",
        "schedule_interval": {
          "__type": "string",
          "days": 0,
          "microseconds": 0,
          "seconds": 0
        },
        "scheduler_lock": true,
        "tags": [
          {
            "name": "string"
          }
        ],
        "timetable_description": "string"
      },
      "task_id": "string",
      "template_fields": [
        "string"
      ],
      "trigger_rule": "all_success",
      "ui_color": "string",
      "ui_fgcolor": "string",
      "wait_for_downstream": true,
      "weight_rule": "downstream"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-tasks-for-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskCollection](#schemataskcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get simplified representation of a task

<a id="opIdget_task"></a>

> Code samples

```bash
curl https://example.com/dags/string/tasks/string \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/tasks/{task_id}`

<h3 id="get-simplified-representation-of-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|task_id|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "class_ref": {
    "class_name": "string",
    "module_path": "string"
  },
  "depends_on_past": true,
  "downstream_task_ids": [
    "string"
  ],
  "end_date": "1970-01-01T00:00:00Z",
  "execution_timeout": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "extra_links": [
    {
      "class_ref": {
        "class_name": "string",
        "module_path": "string"
      }
    }
  ],
  "is_mapped": true,
  "owner": "string",
  "pool": "string",
  "pool_slots": 0,
  "priority_weight": 0,
  "queue": "string",
  "retries": 0,
  "retry_delay": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "retry_exponential_backoff": true,
  "start_date": "1970-01-01T00:00:00Z",
  "sub_dag": {
    "dag_id": "string",
    "default_view": "string",
    "description": "string",
    "file_token": "string",
    "fileloc": "string",
    "has_import_errors": true,
    "has_task_concurrency_limits": true,
    "is_active": true,
    "is_paused": true,
    "is_subdag": true,
    "last_expired": "1970-01-01T00:00:00Z",
    "last_parsed_time": "1970-01-01T00:00:00Z",
    "last_pickled": "1970-01-01T00:00:00Z",
    "max_active_runs": 0,
    "max_active_tasks": 0,
    "next_dagrun": "1970-01-01T00:00:00Z",
    "next_dagrun_create_after": "1970-01-01T00:00:00Z",
    "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
    "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
    "owners": [
      "string"
    ],
    "pickle_id": "string",
    "root_dag_id": "string",
    "schedule_interval": {
      "__type": "string",
      "days": 0,
      "microseconds": 0,
      "seconds": 0
    },
    "scheduler_lock": true,
    "tags": [
      {
        "name": "string"
      }
    ],
    "timetable_description": "string"
  },
  "task_id": "string",
  "template_fields": [
    "string"
  ],
  "trigger_rule": "all_success",
  "ui_color": "string",
  "ui_fgcolor": "string",
  "wait_for_downstream": true,
  "weight_rule": "downstream"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-simplified-representation-of-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Task](#schematask)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Set a state of task instances

<a id="opIdpost_set_task_instances_state"></a>

> Code samples

```bash
curl https://example.com/dags/string/updateTaskInstancesState \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dag_run_id": "string",
    "dry_run": true,
    "execution_date": "string",
    "include_downstream": true,
    "include_future": true,
    "include_past": true,
    "include_upstream": true,
    "new_state": "success",
    "task_id": "string"
  }'
```

`POST /dags/{dag_id}/updateTaskInstancesState`

Updates the state for multiple task instances simultaneously.


> Body parameter

```json
{
  "dag_run_id": "string",
  "dry_run": true,
  "execution_date": "string",
  "include_downstream": true,
  "include_future": true,
  "include_past": true,
  "include_upstream": true,
  "new_state": "success",
  "task_id": "string"
}
```

<h3 id="set-a-state-of-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|body|body|[UpdateTaskInstancesState](#schemaupdatetaskinstancesstate)|true|Parameters of action|
|» dag_run_id|body|string|false|The task instance's DAG run ID. Either set this or execution_date but not both.<br><br>*New in version 2.3.0*<br>|
|» dry_run|body|boolean|false|If set, don't actually run this operation. The response will contain a list of task instances<br>planned to be affected, but won't be modified in any way.<br>|
|» execution_date|body|string(datetime)|false|The execution date. Either set this or dag_run_id but not both.|
|» include_downstream|body|boolean|false|If set to true, downstream tasks are also affected.|
|» include_future|body|boolean|false|If set to True, also tasks from future DAG Runs are affected.|
|» include_past|body|boolean|false|If set to True, also tasks from past DAG Runs are affected.|
|» include_upstream|body|boolean|false|If set to true, upstream tasks are also affected.|
|» new_state|body|string|false|Expected new state.|
|» task_id|body|string|false|The task ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» new_state|success|
|» new_state|failed|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "dag_id": "string",
      "dag_run_id": "string",
      "execution_date": "string",
      "task_id": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="set-a-state-of-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstanceReferenceCollection](#schemataskinstancereferencecollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-dagrun">DAGRun</h1>

## List DAG runs

<a id="opIdget_dag_runs"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns`

This endpoint allows specifying `~` as the dag_id to retrieve DAG runs for all DAGs.


<h3 id="list-dag-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|execution_date_gte|query|string(date-time)|false|Returns objects greater or equal to the specified date.<br><br>This can be combined with execution_date_lte parameter to receive only the selected period.<br>|
|execution_date_lte|query|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with execution_date_gte parameter to receive only the selected period.<br>|
|start_date_gte|query|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|start_date_lte|query|string(date-time)|false|Returns objects less or equal the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|end_date_gte|query|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|end_date_lte|query|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|state|query|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|
|dag_id|path|string|true|The DAG ID.|

> Example responses

> 200 Response

```json
{
  "dag_runs": [
    {
      "conf": {},
      "dag_id": "string",
      "dag_run_id": "string",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "data_interval_start": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "execution_date": "1970-01-01T00:00:00Z",
      "external_trigger": true,
      "last_scheduling_decision": "1970-01-01T00:00:00Z",
      "logical_date": "1970-01-01T00:00:00Z",
      "note": "string",
      "run_type": "backfill",
      "start_date": "1970-01-01T00:00:00Z",
      "state": "queued"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-dag-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of DAG runs.|[DAGRunCollection](#schemadagruncollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger a new DAG run

<a id="opIdpost_dag_run"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "conf": {},
    "dag_run_id": "string",
    "execution_date": "1970-01-01T00:00:00Z",
    "logical_date": "1970-01-01T00:00:00Z",
    "note": "string"
  }'
```

`POST /dags/{dag_id}/dagRuns`

> Body parameter

```json
{
  "conf": {},
  "dag_run_id": "string",
  "execution_date": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "note": "string"
}
```

<h3 id="trigger-a-new-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|body|body|[DAGRun](#schemadagrun)|true|none|
|» conf|body|object|false|JSON object describing additional configuration parameters.<br><br>The value of this field can be set only when creating the object. If you try to modify the<br>field of an existing object, the request fails with an BAD_REQUEST error.<br>|
|» dag_run_id|body|string \| null|false|Run ID.<br><br>The value of this field can be set only when creating the object. If you try to modify the<br>field of an existing object, the request fails with an BAD_REQUEST error.<br><br>If not provided, a value will be generated based on execution_date.<br><br>If the specified dag_run_id is in use, the creation request fails with an ALREADY_EXISTS error.<br><br>This together with DAG_ID are a unique key.<br>|
|» execution_date|body|string(date-time) \| null|false|**Deprecated.** The execution date. This is the same as logical_date, kept for backwards compatibility.<br>If both this field and logical_date are provided but with different values, the request<br>will fail with an BAD_REQUEST error.<br><br>*Changed in version 2.2.0*&#58; Field becomes nullable.<br><br>*Deprecated since version 2.2.0*&#58; Use 'logical_date' instead.<br>|
|» logical_date|body|string(date-time) \| null|false|The logical date (previously called execution date). This is the time or interval covered by<br>this DAG run, according to the DAG definition.<br><br>The value of this field can be set only when creating the object. If you try to modify the<br>field of an existing object, the request fails with an BAD_REQUEST error.<br><br>This together with DAG_ID are a unique key.<br><br>*New in version 2.2.0*<br>|
|» note|body|string \| null|false|Contains manually entered notes by the user about the DagRun.<br><br>*New in version 2.5.0*<br>|

> Example responses

> 200 Response

```json
{
  "conf": {},
  "dag_id": "string",
  "dag_run_id": "string",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "execution_date": "1970-01-01T00:00:00Z",
  "external_trigger": true,
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "note": "string",
  "run_type": "backfill",
  "start_date": "1970-01-01T00:00:00Z",
  "state": "queued"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="trigger-a-new-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGRun](#schemadagrun)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|
|409|Conflict|An existing resource conflicts with the request.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a DAG run

<a id="opIdget_dag_run"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}`

<h3 id="get-a-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|

> Example responses

> 200 Response

```json
{
  "conf": {},
  "dag_id": "string",
  "dag_run_id": "string",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "execution_date": "1970-01-01T00:00:00Z",
  "external_trigger": true,
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "note": "string",
  "run_type": "backfill",
  "start_date": "1970-01-01T00:00:00Z",
  "state": "queued"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGRun](#schemadagrun)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a DAG run

<a id="opIddelete_dag_run"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dags/{dag_id}/dagRuns/{dag_run_id}`

<h3 id="delete-a-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Modify a DAG run

<a id="opIdupdate_dag_run_state"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "state": "success"
  }'
```

`PATCH /dags/{dag_id}/dagRuns/{dag_run_id}`

Modify a DAG run.

*New in version 2.2.0*


> Body parameter

```json
{
  "state": "success"
}
```

<h3 id="modify-a-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|body|body|[UpdateDagRunState](#schemaupdatedagrunstate)|true|none|
|» state|body|string|false|The state to set this DagRun|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|success|
|» state|failed|
|» state|queued|

> Example responses

> 200 Response

```json
{
  "conf": {},
  "dag_id": "string",
  "dag_run_id": "string",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "execution_date": "1970-01-01T00:00:00Z",
  "external_trigger": true,
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "note": "string",
  "run_type": "backfill",
  "start_date": "1970-01-01T00:00:00Z",
  "state": "queued"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="modify-a-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGRun](#schemadagrun)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Clear a DAG run

<a id="opIdclear_dag_run"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/clear \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dry_run": true
  }'
```

`POST /dags/{dag_id}/dagRuns/{dag_run_id}/clear`

Clear a DAG run.

*New in version 2.4.0*


> Body parameter

```json
{
  "dry_run": true
}
```

<h3 id="clear-a-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|body|body|[ClearDagRun](#schemacleardagrun)|true|none|
|» dry_run|body|boolean|false|If set, don't actually run this operation. The response will contain a list of task instances<br>planned to be cleaned, but not modified in any way.<br>|

> Example responses

> 200 Response

```json
{
  "conf": {},
  "dag_id": "string",
  "dag_run_id": "string",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "execution_date": "1970-01-01T00:00:00Z",
  "external_trigger": true,
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "note": "string",
  "run_type": "backfill",
  "start_date": "1970-01-01T00:00:00Z",
  "state": "queued"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="clear-a-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGRun](#schemadagrun)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the DagRun note.

<a id="opIdset_dag_run_note"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/setNote \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "note": "string"
  }'
```

`PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/setNote`

Update the manual user note of a DagRun.

*New in version 2.5.0*


> Body parameter

```json
{
  "note": "string"
}
```

<h3 id="update-the-dagrun-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|body|body|[SetDagRunNote](#schemasetdagrunnote)|true|Parameters of set DagRun note.|
|» note|body|string|false|Custom notes left by users for this Dag Run.|

> Example responses

> 200 Response

```json
{
  "conf": {},
  "dag_id": "string",
  "dag_run_id": "string",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "execution_date": "1970-01-01T00:00:00Z",
  "external_trigger": true,
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "note": "string",
  "run_type": "backfill",
  "start_date": "1970-01-01T00:00:00Z",
  "state": "queued"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-the-dagrun-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGRun](#schemadagrun)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get dataset events for a DAG run

<a id="opIdget_upstream_dataset_events"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/upstreamDatasetEvents \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/upstreamDatasetEvents`

Get datasets for a dag run.

*New in version 2.4.0*


<h3 id="get-dataset-events-for-a-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|

> Example responses

> 200 Response

```json
{
  "dataset_events": [
    {
      "created_dagruns": [
        {
          "dag_id": "string",
          "data_interval_end": "1970-01-01T00:00:00Z",
          "data_interval_start": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "logical_date": "1970-01-01T00:00:00Z",
          "run_id": "string",
          "start_date": "1970-01-01T00:00:00Z",
          "state": "queued"
        }
      ],
      "dataset_id": 0,
      "dataset_uri": "string",
      "extra": {},
      "source_dag_id": "string",
      "source_map_index": 0,
      "source_run_id": "string",
      "source_task_id": "string",
      "timestamp": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-dataset-events-for-a-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DatasetEventCollection](#schemadataseteventcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List DAG runs (batch)

<a id="opIdget_dag_runs_batch"></a>

> Code samples

```bash
curl https://example.com/dags/~/dagRuns/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dag_ids": [
      "string"
    ],
    "end_date_gte": "1970-01-01T00:00:00Z",
    "end_date_lte": "1970-01-01T00:00:00Z",
    "execution_date_gte": "1970-01-01T00:00:00Z",
    "execution_date_lte": "1970-01-01T00:00:00Z",
    "order_by": "string",
    "page_limit": 100,
    "page_offset": 0,
    "start_date_gte": "1970-01-01T00:00:00Z",
    "start_date_lte": "1970-01-01T00:00:00Z",
    "states": [
      "string"
    ]
  }'
```

`POST /dags/~/dagRuns/list`

This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limit.


> Body parameter

```json
{
  "dag_ids": [
    "string"
  ],
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "execution_date_gte": "1970-01-01T00:00:00Z",
  "execution_date_lte": "1970-01-01T00:00:00Z",
  "order_by": "string",
  "page_limit": 100,
  "page_offset": 0,
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "states": [
    "string"
  ]
}
```

<h3 id="list-dag-runs-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListDagRunsForm](#schemalistdagrunsform)|true|none|
|» dag_ids|body|[string]|false|Return objects with specific DAG IDs.<br>The value can be repeated to retrieve multiple matching values (OR condition).|
|» end_date_gte|body|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with end_date_lte parameter to receive only the selected period.<br>|
|» end_date_lte|body|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with end_date_gte parameter to receive only the selected period.<br>|
|» execution_date_gte|body|string(date-time)|false|Returns objects greater or equal to the specified date.<br><br>This can be combined with execution_date_lte key to receive only the selected period.<br>|
|» execution_date_lte|body|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with execution_date_gte key to receive only the selected period.<br>|
|» order_by|body|string|false|The name of the field to order the results by. Prefix a field name<br>with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|
|» page_limit|body|integer|false|The numbers of items to return.|
|» page_offset|body|integer|false|The number of items to skip before starting to collect the result set.|
|» start_date_gte|body|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte key to receive only the selected period.<br>|
|» start_date_lte|body|string(date-time)|false|Returns objects less or equal the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period<br>|
|» states|body|[string]|false|Return objects with specific states.<br>The value can be repeated to retrieve multiple matching values (OR condition).|

> Example responses

> 200 Response

```json
{
  "dag_runs": [
    {
      "conf": {},
      "dag_id": "string",
      "dag_run_id": "string",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "data_interval_start": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "execution_date": "1970-01-01T00:00:00Z",
      "external_trigger": true,
      "last_scheduling_decision": "1970-01-01T00:00:00Z",
      "logical_date": "1970-01-01T00:00:00Z",
      "note": "string",
      "run_type": "backfill",
      "start_date": "1970-01-01T00:00:00Z",
      "state": "queued"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-dag-runs-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DAGRunCollection](#schemadagruncollection)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-eventlog">EventLog</h1>

## List log entries

<a id="opIdget_event_logs"></a>

> Code samples

```bash
curl https://example.com/eventLogs \
  -H 'Accept: application/json'
```

`GET /eventLogs`

List log entries from event log.

<h3 id="list-log-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "event_logs": [
    {
      "dag_id": "string",
      "event": "string",
      "event_log_id": 0,
      "execution_date": "1970-01-01T00:00:00Z",
      "extra": "string",
      "owner": "string",
      "task_id": "string",
      "when": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-log-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[EventLogCollection](#schemaeventlogcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a log entry

<a id="opIdget_event_log"></a>

> Code samples

```bash
curl https://example.com/eventLogs/0 \
  -H 'Accept: application/json'
```

`GET /eventLogs/{event_log_id}`

<h3 id="get-a-log-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_log_id|path|integer|true|The event log ID.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "event": "string",
  "event_log_id": 0,
  "execution_date": "1970-01-01T00:00:00Z",
  "extra": "string",
  "owner": "string",
  "task_id": "string",
  "when": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-log-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[EventLog](#schemaeventlog)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-importerror">ImportError</h1>

## List import errors

<a id="opIdget_import_errors"></a>

> Code samples

```bash
curl https://example.com/importErrors \
  -H 'Accept: application/json'
```

`GET /importErrors`

<h3 id="list-import-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "import_errors": [
    {
      "filename": "string",
      "import_error_id": 0,
      "stack_trace": "string",
      "timestamp": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-import-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ImportErrorCollection](#schemaimporterrorcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an import error

<a id="opIdget_import_error"></a>

> Code samples

```bash
curl https://example.com/importErrors/0 \
  -H 'Accept: application/json'
```

`GET /importErrors/{import_error_id}`

<h3 id="get-an-import-error-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|import_error_id|path|integer|true|The import error ID.|

> Example responses

> 200 Response

```json
{
  "filename": "string",
  "import_error_id": 0,
  "stack_trace": "string",
  "timestamp": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-an-import-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ImportError](#schemaimporterror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-monitoring">Monitoring</h1>

## Get instance status

<a id="opIdget_health"></a>

> Code samples

```bash
curl https://example.com/health \
  -H 'Accept: application/json'
```

`GET /health`

Get the status of Airflow's metadatabase and scheduler. It includes info about
metadatabase and last heartbeat of scheduler.


> Example responses

> 200 Response

```json
{
  "metadatabase": {
    "status": "healthy"
  },
  "scheduler": {
    "latest_scheduler_heartbeat": "string",
    "status": "healthy"
  }
}
```

<h3 id="get-instance-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[HealthInfo](#schemahealthinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get version information

<a id="opIdget_version"></a>

> Code samples

```bash
curl https://example.com/version \
  -H 'Accept: application/json'
```

`GET /version`

> Example responses

> 200 Response

```json
{
  "git_version": "string",
  "version": "string"
}
```

<h3 id="get-version-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[VersionInfo](#schemaversioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-pool">Pool</h1>

## List pools

<a id="opIdget_pools"></a>

> Code samples

```bash
curl https://example.com/pools \
  -H 'Accept: application/json'
```

`GET /pools`

<h3 id="list-pools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "pools": [
    {
      "description": "string",
      "name": "string",
      "occupied_slots": 0,
      "open_slots": 0,
      "queued_slots": 0,
      "slots": 0,
      "used_slots": 0
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of pools.|[PoolCollection](#schemapoolcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a pool

<a id="opIdpost_pool"></a>

> Code samples

```bash
curl https://example.com/pools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "slots": 0
  }'
```

`POST /pools`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slots": 0
}
```

<h3 id="create-a-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pool](#schemapool)|true|none|
|» description|body|string \| null|false|The description of the pool.<br><br>*New in version 2.3.0*<br>|
|» name|body|string|false|The name of pool.|
|» slots|body|integer|false|The maximum number of slots that can be assigned to tasks. One job may occupy one or more slots.<br>|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string",
  "occupied_slots": 0,
  "open_slots": 0,
  "queued_slots": 0,
  "slots": 0,
  "used_slots": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-a-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Pool](#schemapool)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a pool

<a id="opIdget_pool"></a>

> Code samples

```bash
curl https://example.com/pools/string \
  -H 'Accept: application/json'
```

`GET /pools/{pool_name}`

<h3 id="get-a-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_name|path|string|true|The pool name.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string",
  "occupied_slots": 0,
  "open_slots": 0,
  "queued_slots": 0,
  "slots": 0,
  "used_slots": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Pool](#schemapool)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a pool

<a id="opIddelete_pool"></a>

> Code samples

```bash
curl https://example.com/pools/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /pools/{pool_name}`

<h3 id="delete-a-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_name|path|string|true|The pool name.|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a pool

<a id="opIdpatch_pool"></a>

> Code samples

```bash
curl https://example.com/pools/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "slots": 0
  }'
```

`PATCH /pools/{pool_name}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slots": 0
}
```

<h3 id="update-a-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|update_mask|query|[string]|false|The fields to update on the resource. If absent or empty, all modifiable fields are updated.<br>A comma-separated list of fully qualified names of fields.<br>|
|pool_name|path|string|true|The pool name.|
|body|body|[Pool](#schemapool)|true|none|
|» description|body|string \| null|false|The description of the pool.<br><br>*New in version 2.3.0*<br>|
|» name|body|string|false|The name of pool.|
|» slots|body|integer|false|The maximum number of slots that can be assigned to tasks. One job may occupy one or more slots.<br>|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string",
  "occupied_slots": 0,
  "open_slots": 0,
  "queued_slots": 0,
  "slots": 0,
  "used_slots": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Pool](#schemapool)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|
|409|Conflict|An existing resource conflicts with the request.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-provider">Provider</h1>

## List providers

<a id="opIdget_providers"></a>

> Code samples

```bash
curl https://example.com/providers \
  -H 'Accept: application/json'
```

`GET /providers`

Get a list of providers.

*New in version 2.1.0*


> Example responses

> 200 Response

```json
{
  "providers": [
    {
      "description": "string",
      "package_name": "string",
      "version": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of providers.|Inline|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<h3 id="list-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[Provider](#schemaprovider)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-taskinstance">TaskInstance</h1>

## List task instances

<a id="opIdget_task_instances"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances`

This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve DAG runs for all DAGs and DAG runs.


<h3 id="list-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|execution_date_gte|query|string(date-time)|false|Returns objects greater or equal to the specified date.<br><br>This can be combined with execution_date_lte parameter to receive only the selected period.<br>|
|execution_date_lte|query|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with execution_date_gte parameter to receive only the selected period.<br>|
|start_date_gte|query|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|start_date_lte|query|string(date-time)|false|Returns objects less or equal the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|end_date_gte|query|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|end_date_lte|query|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|duration_gte|query|number|false|Returns objects greater than or equal to the specified values.<br><br>This can be combined with duration_lte parameter to receive only the selected period.<br>|
|duration_lte|query|number|false|Returns objects less than or equal to the specified values.<br><br>This can be combined with duration_gte parameter to receive only the selected range.<br>|
|state|query|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|pool|query|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|queue|query|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "dag_id": "string",
      "dag_run_id": "string",
      "duration": 0,
      "end_date": "string",
      "execution_date": "string",
      "executor_config": "string",
      "hostname": "string",
      "map_index": 0,
      "max_tries": 0,
      "note": "string",
      "operator": "string",
      "pid": 0,
      "pool": "string",
      "pool_slots": 0,
      "priority_weight": 0,
      "queue": "string",
      "queued_when": "string",
      "rendered_fields": {},
      "sla_miss": {
        "dag_id": "string",
        "description": "string",
        "email_sent": true,
        "execution_date": "string",
        "notification_sent": true,
        "task_id": "string",
        "timestamp": "string"
      },
      "start_date": "string",
      "state": "success",
      "task_id": "string",
      "trigger": {
        "classpath": "string",
        "created_date": "string",
        "id": 0,
        "kwargs": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "dag_id": "string",
        "end_date": "string",
        "executor_class": "string",
        "hostname": "string",
        "id": 0,
        "job_type": "string",
        "latest_heartbeat": "string",
        "start_date": "string",
        "state": "string",
        "unixname": "string"
      },
      "try_number": 0,
      "unixname": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstanceCollection](#schemataskinstancecollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a task instance

<a id="opIdget_task_instance"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`

<h3 id="get-a-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "duration": 0,
  "end_date": "string",
  "execution_date": "string",
  "executor_config": "string",
  "hostname": "string",
  "map_index": 0,
  "max_tries": 0,
  "note": "string",
  "operator": "string",
  "pid": 0,
  "pool": "string",
  "pool_slots": 0,
  "priority_weight": 0,
  "queue": "string",
  "queued_when": "string",
  "rendered_fields": {},
  "sla_miss": {
    "dag_id": "string",
    "description": "string",
    "email_sent": true,
    "execution_date": "string",
    "notification_sent": true,
    "task_id": "string",
    "timestamp": "string"
  },
  "start_date": "string",
  "state": "success",
  "task_id": "string",
  "trigger": {
    "classpath": "string",
    "created_date": "string",
    "id": 0,
    "kwargs": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "dag_id": "string",
    "end_date": "string",
    "executor_class": "string",
    "hostname": "string",
    "id": 0,
    "job_type": "string",
    "latest_heartbeat": "string",
    "start_date": "string",
    "state": "string",
    "unixname": "string"
  },
  "try_number": 0,
  "unixname": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstance](#schemataskinstance)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the state of a task instance

<a id="opIdpatch_task_instance"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dry_run": false,
    "new_state": "success"
  }'
```

`PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`

Updates the state for single task instance.
*New in version 2.5.0*


> Body parameter

```json
{
  "dry_run": false,
  "new_state": "success"
}
```

<h3 id="updates-the-state-of-a-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|
|body|body|[UpdateTaskInstance](#schemaupdatetaskinstance)|true|Parameters of action|
|» dry_run|body|boolean|false|If set, don't actually run this operation. The response will contain the task instance<br>planned to be affected, but won't be modified in any way.<br>|
|» new_state|body|string|false|Expected new state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» new_state|success|
|» new_state|failed|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "execution_date": "string",
  "task_id": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="updates-the-state-of-a-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstanceReference](#schemataskinstancereference)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List extra links

<a id="opIdget_extra_links"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/links \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/links`

List extra links for task instance.


<h3 id="list-extra-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "extra_links": [
    {
      "class_ref": {
        "class_name": "string",
        "module_path": "string"
      },
      "href": "string",
      "name": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-extra-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ExtraLinkCollection](#schemaextralinkcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List mapped task instances

<a id="opIdget_mapped_task_instances"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/listMapped \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/listMapped`

Get details of all mapped task instances.

*New in version 2.3.0*


<h3 id="list-mapped-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|execution_date_gte|query|string(date-time)|false|Returns objects greater or equal to the specified date.<br><br>This can be combined with execution_date_lte parameter to receive only the selected period.<br>|
|execution_date_lte|query|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with execution_date_gte parameter to receive only the selected period.<br>|
|start_date_gte|query|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|start_date_lte|query|string(date-time)|false|Returns objects less or equal the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|end_date_gte|query|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|end_date_lte|query|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|duration_gte|query|number|false|Returns objects greater than or equal to the specified values.<br><br>This can be combined with duration_lte parameter to receive only the selected period.<br>|
|duration_lte|query|number|false|Returns objects less than or equal to the specified values.<br><br>This can be combined with duration_gte parameter to receive only the selected range.<br>|
|state|query|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|pool|query|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|queue|query|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "dag_id": "string",
      "dag_run_id": "string",
      "duration": 0,
      "end_date": "string",
      "execution_date": "string",
      "executor_config": "string",
      "hostname": "string",
      "map_index": 0,
      "max_tries": 0,
      "note": "string",
      "operator": "string",
      "pid": 0,
      "pool": "string",
      "pool_slots": 0,
      "priority_weight": 0,
      "queue": "string",
      "queued_when": "string",
      "rendered_fields": {},
      "sla_miss": {
        "dag_id": "string",
        "description": "string",
        "email_sent": true,
        "execution_date": "string",
        "notification_sent": true,
        "task_id": "string",
        "timestamp": "string"
      },
      "start_date": "string",
      "state": "success",
      "task_id": "string",
      "trigger": {
        "classpath": "string",
        "created_date": "string",
        "id": 0,
        "kwargs": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "dag_id": "string",
        "end_date": "string",
        "executor_class": "string",
        "hostname": "string",
        "id": 0,
        "job_type": "string",
        "latest_heartbeat": "string",
        "start_date": "string",
        "state": "string",
        "unixname": "string"
      },
      "try_number": 0,
      "unixname": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-mapped-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstanceCollection](#schemataskinstancecollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get logs

<a id="opIdget_log"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/logs/0 \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{task_try_number}`

Get logs for a specific task instance and its try number.

<h3 id="get-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|
|task_try_number|path|integer|true|The task try number.|
|full_content|query|boolean|false|A full content will be returned.<br>By default, only the first fragment will be returned.<br>|
|map_index|query|integer|false|Filter on map index for mapped task.|
|token|query|string|false|A token that allows you to continue fetching logs.<br>If passed, it will specify the location from which the download should be continued.<br>|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "continuation_token": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<h3 id="get-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|continuation_token|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update the TaskInstance note.

<a id="opIdset_task_instance_note"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/setNote \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "note": "string"
  }'
```

`PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/setNote`

Update the manual user note of a non-mapped Task Instance.

*New in version 2.5.0*


> Body parameter

```json
{
  "note": "string"
}
```

<h3 id="update-the-taskinstance-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|
|body|body|[SetTaskInstanceNote](#schemasettaskinstancenote)|true|Parameters of set Task Instance note.|
|» note|body|string|true|The custom note to set for this Task Instance.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "duration": 0,
  "end_date": "string",
  "execution_date": "string",
  "executor_config": "string",
  "hostname": "string",
  "map_index": 0,
  "max_tries": 0,
  "note": "string",
  "operator": "string",
  "pid": 0,
  "pool": "string",
  "pool_slots": 0,
  "priority_weight": 0,
  "queue": "string",
  "queued_when": "string",
  "rendered_fields": {},
  "sla_miss": {
    "dag_id": "string",
    "description": "string",
    "email_sent": true,
    "execution_date": "string",
    "notification_sent": true,
    "task_id": "string",
    "timestamp": "string"
  },
  "start_date": "string",
  "state": "success",
  "task_id": "string",
  "trigger": {
    "classpath": "string",
    "created_date": "string",
    "id": 0,
    "kwargs": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "dag_id": "string",
    "end_date": "string",
    "executor_class": "string",
    "hostname": "string",
    "id": 0,
    "job_type": "string",
    "latest_heartbeat": "string",
    "start_date": "string",
    "state": "string",
    "unixname": "string"
  },
  "try_number": 0,
  "unixname": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-the-taskinstance-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstance](#schemataskinstance)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a mapped task instance

<a id="opIdget_mapped_task_instance"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/0 \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}`

Get details of a mapped task instance.

*New in version 2.3.0*


<h3 id="get-a-mapped-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|
|map_index|path|integer|true|The map index.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "duration": 0,
  "end_date": "string",
  "execution_date": "string",
  "executor_config": "string",
  "hostname": "string",
  "map_index": 0,
  "max_tries": 0,
  "note": "string",
  "operator": "string",
  "pid": 0,
  "pool": "string",
  "pool_slots": 0,
  "priority_weight": 0,
  "queue": "string",
  "queued_when": "string",
  "rendered_fields": {},
  "sla_miss": {
    "dag_id": "string",
    "description": "string",
    "email_sent": true,
    "execution_date": "string",
    "notification_sent": true,
    "task_id": "string",
    "timestamp": "string"
  },
  "start_date": "string",
  "state": "success",
  "task_id": "string",
  "trigger": {
    "classpath": "string",
    "created_date": "string",
    "id": 0,
    "kwargs": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "dag_id": "string",
    "end_date": "string",
    "executor_class": "string",
    "hostname": "string",
    "id": 0,
    "job_type": "string",
    "latest_heartbeat": "string",
    "start_date": "string",
    "state": "string",
    "unixname": "string"
  },
  "try_number": 0,
  "unixname": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-mapped-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstance](#schemataskinstance)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the state of a mapped task instance

<a id="opIdpatch_mapped_task_instance"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dry_run": false,
    "new_state": "success"
  }'
```

`PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}`

Updates the state for single mapped task instance.
*New in version 2.5.0*


> Body parameter

```json
{
  "dry_run": false,
  "new_state": "success"
}
```

<h3 id="updates-the-state-of-a-mapped-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|
|map_index|path|integer|true|The map index.|
|body|body|[UpdateTaskInstance](#schemaupdatetaskinstance)|false|Parameters of action|
|» dry_run|body|boolean|false|If set, don't actually run this operation. The response will contain the task instance<br>planned to be affected, but won't be modified in any way.<br>|
|» new_state|body|string|false|Expected new state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» new_state|success|
|» new_state|failed|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "execution_date": "string",
  "task_id": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="updates-the-state-of-a-mapped-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstanceReference](#schemataskinstancereference)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the TaskInstance note.

<a id="opIdset_mapped_task_instance_note"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/0/setNote \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "note": "string"
  }'
```

`PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/setNote`

Update the manual user note of a mapped Task Instance.

*New in version 2.5.0*


> Body parameter

```json
{
  "note": "string"
}
```

<h3 id="update-the-taskinstance-note-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|
|map_index|path|integer|true|The map index.|
|body|body|[SetTaskInstanceNote](#schemasettaskinstancenote)|true|Parameters of set Task Instance note.|
|» note|body|string|true|The custom note to set for this Task Instance.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "duration": 0,
  "end_date": "string",
  "execution_date": "string",
  "executor_config": "string",
  "hostname": "string",
  "map_index": 0,
  "max_tries": 0,
  "note": "string",
  "operator": "string",
  "pid": 0,
  "pool": "string",
  "pool_slots": 0,
  "priority_weight": 0,
  "queue": "string",
  "queued_when": "string",
  "rendered_fields": {},
  "sla_miss": {
    "dag_id": "string",
    "description": "string",
    "email_sent": true,
    "execution_date": "string",
    "notification_sent": true,
    "task_id": "string",
    "timestamp": "string"
  },
  "start_date": "string",
  "state": "success",
  "task_id": "string",
  "trigger": {
    "classpath": "string",
    "created_date": "string",
    "id": 0,
    "kwargs": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "dag_id": "string",
    "end_date": "string",
    "executor_class": "string",
    "hostname": "string",
    "id": 0,
    "job_type": "string",
    "latest_heartbeat": "string",
    "start_date": "string",
    "state": "string",
    "unixname": "string"
  },
  "try_number": 0,
  "unixname": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-the-taskinstance-note-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstance](#schemataskinstance)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List task instances (batch)

<a id="opIdget_task_instances_batch"></a>

> Code samples

```bash
curl https://example.com/dags/~/dagRuns/~/taskInstances/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dag_ids": [
      "string"
    ],
    "duration_gte": 0,
    "duration_lte": 0,
    "end_date_gte": "1970-01-01T00:00:00Z",
    "end_date_lte": "1970-01-01T00:00:00Z",
    "execution_date_gte": "1970-01-01T00:00:00Z",
    "execution_date_lte": "1970-01-01T00:00:00Z",
    "pool": [
      "string"
    ],
    "queue": [
      "string"
    ],
    "start_date_gte": "1970-01-01T00:00:00Z",
    "start_date_lte": "1970-01-01T00:00:00Z",
    "state": [
      "success"
    ]
  }'
```

`POST /dags/~/dagRuns/~/taskInstances/list`

List task instances from all DAGs and DAG runs.
This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limits.


> Body parameter

```json
{
  "dag_ids": [
    "string"
  ],
  "duration_gte": 0,
  "duration_lte": 0,
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "execution_date_gte": "1970-01-01T00:00:00Z",
  "execution_date_lte": "1970-01-01T00:00:00Z",
  "pool": [
    "string"
  ],
  "queue": [
    "string"
  ],
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "state": [
    "success"
  ]
}
```

<h3 id="list-task-instances-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListTaskInstanceForm](#schemalisttaskinstanceform)|true|none|
|» dag_ids|body|[string]|false|Return objects with specific DAG IDs.<br>The value can be repeated to retrieve multiple matching values (OR condition).|
|» duration_gte|body|number|false|Returns objects greater than or equal to the specified values.<br><br>This can be combined with duration_lte parameter to receive only the selected period.<br>|
|» duration_lte|body|number|false|Returns objects less than or equal to the specified values.<br><br>This can be combined with duration_gte parameter to receive only the selected range.<br>|
|» end_date_gte|body|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|» end_date_lte|body|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|» execution_date_gte|body|string(date-time)|false|Returns objects greater or equal to the specified date.<br><br>This can be combined with execution_date_lte parameter to receive only the selected period.<br>|
|» execution_date_lte|body|string(date-time)|false|Returns objects less than or equal to the specified date.<br><br>This can be combined with execution_date_gte parameter to receive only the selected period.<br>|
|» pool|body|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|» queue|body|[string]|false|The value can be repeated to retrieve multiple matching values (OR condition).|
|» start_date_gte|body|string(date-time)|false|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|» start_date_lte|body|string(date-time)|false|Returns objects less or equal the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|» state|body|[[TaskState](#schemataskstate)]|false|The value can be repeated to retrieve multiple matching values (OR condition).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|success|
|» state|running|
|» state|failed|
|» state|upstream_failed|
|» state|skipped|
|» state|up_for_retry|
|» state|up_for_reschedule|
|» state|queued|
|» state|none|
|» state|scheduled|
|» state|deferred|
|» state|removed|
|» state|restarting|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "dag_id": "string",
      "dag_run_id": "string",
      "duration": 0,
      "end_date": "string",
      "execution_date": "string",
      "executor_config": "string",
      "hostname": "string",
      "map_index": 0,
      "max_tries": 0,
      "note": "string",
      "operator": "string",
      "pid": 0,
      "pool": "string",
      "pool_slots": 0,
      "priority_weight": 0,
      "queue": "string",
      "queued_when": "string",
      "rendered_fields": {},
      "sla_miss": {
        "dag_id": "string",
        "description": "string",
        "email_sent": true,
        "execution_date": "string",
        "notification_sent": true,
        "task_id": "string",
        "timestamp": "string"
      },
      "start_date": "string",
      "state": "success",
      "task_id": "string",
      "trigger": {
        "classpath": "string",
        "created_date": "string",
        "id": 0,
        "kwargs": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "dag_id": "string",
        "end_date": "string",
        "executor_class": "string",
        "hostname": "string",
        "id": 0,
        "job_type": "string",
        "latest_heartbeat": "string",
        "start_date": "string",
        "state": "string",
        "unixname": "string"
      },
      "try_number": 0,
      "unixname": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-task-instances-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[TaskInstanceCollection](#schemataskinstancecollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-variable">Variable</h1>

## List variables

<a id="opIdget_variables"></a>

> Code samples

```bash
curl https://example.com/variables \
  -H 'Accept: application/json'
```

`GET /variables`

The collection does not contain data. To get data, you must get a single entity.

<h3 id="list-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "variables": [
    {
      "description": "string",
      "key": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[VariableCollection](#schemavariablecollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a variable

<a id="opIdpost_variables"></a>

> Code samples

```bash
curl https://example.com/variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "key": "string",
    "value": "string"
  }'
```

`POST /variables`

> Body parameter

```json
{
  "description": "string",
  "key": "string",
  "value": "string"
}
```

<h3 id="create-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Variable](#schemavariable)|true|none|
|» description|body|string \| null|false|The description of the variable.<br><br>*New in version 2.4.0*<br>|
|» key|body|string|false|none|
|» value|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "key": "string",
  "value": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Variable](#schemavariable)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a variable

<a id="opIdget_variable"></a>

> Code samples

```bash
curl https://example.com/variables/string \
  -H 'Accept: application/json'
```

`GET /variables/{variable_key}`

Get a variable by key.

<h3 id="get-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable_key|path|string(path)|true|The variable Key.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "key": "string",
  "value": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Variable](#schemavariable)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a variable

<a id="opIddelete_variable"></a>

> Code samples

```bash
curl https://example.com/variables/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /variables/{variable_key}`

<h3 id="delete-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable_key|path|string(path)|true|The variable Key.|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a variable

<a id="opIdpatch_variable"></a>

> Code samples

```bash
curl https://example.com/variables/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "key": "string",
    "value": "string"
  }'
```

`PATCH /variables/{variable_key}`

Update a variable by key.

> Body parameter

```json
{
  "description": "string",
  "key": "string",
  "value": "string"
}
```

<h3 id="update-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|update_mask|query|[string]|false|The fields to update on the resource. If absent or empty, all modifiable fields are updated.<br>A comma-separated list of fully qualified names of fields.<br>|
|variable_key|path|string(path)|true|The variable Key.|
|body|body|[Variable](#schemavariable)|true|none|
|» description|body|string \| null|false|The description of the variable.<br><br>*New in version 2.4.0*<br>|
|» key|body|string|false|none|
|» value|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "key": "string",
  "value": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Variable](#schemavariable)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-xcom">XCom</h1>

## List XCom entries

<a id="opIdget_xcom_entries"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/xcomEntries \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries`

This endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCOM entries for for all DAGs, DAG runs and task instances. XCom values won't be returned as they can be large. Use this endpoint to get a list of XCom entries and then fetch individual entry to get value.

<h3 id="list-xcom-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "xcom_entries": [
    {
      "dag_id": "string",
      "execution_date": "string",
      "key": "string",
      "task_id": "string",
      "timestamp": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-xcom-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[XComCollection](#schemaxcomcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an XCom entry

<a id="opIdget_xcom_entry"></a>

> Code samples

```bash
curl https://example.com/dags/string/dagRuns/string/taskInstances/string/xcomEntries/string \
  -H 'Accept: application/json'
```

`GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}`

<h3 id="get-an-xcom-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deserialize|query|boolean|false|Whether to deserialize an XCom value when using a custom XCom backend.<br><br>The XCom API endpoint calls `orm_deserialize_value` by default since an XCom may contain value<br>that is potentially expensive to deserialize in the web server. Setting this to true overrides<br>the consideration, and calls `deserialize_value` instead.<br><br>This parameter is not meaningful when using the default XCom backend.<br><br>*New in version 2.4.0*<br>|
|dag_id|path|string|true|The DAG ID.|
|dag_run_id|path|string|true|The DAG run ID.|
|task_id|path|string|true|The task ID.|
|xcom_key|path|string|true|The XCom key.|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "execution_date": "string",
  "key": "string",
  "task_id": "string",
  "timestamp": "string",
  "value": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-an-xcom-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[XCom](#schemaxcom)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-plugin">Plugin</h1>

## Get a list of loaded plugins

<a id="opIdget_plugins"></a>

> Code samples

```bash
curl https://example.com/plugins \
  -H 'Accept: application/json'
```

`GET /plugins`

Get a list of loaded plugins.

*New in version 2.1.0*


<h3 id="get-a-list-of-loaded-plugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|

> Example responses

> 200 Response

```json
{
  "plugins": [
    {
      "appbuilder_menu_items": [
        {}
      ],
      "appbuilder_views": [
        {}
      ],
      "executors": [
        "string"
      ],
      "flask_blueprints": [
        {}
      ],
      "global_operator_extra_links": [
        {}
      ],
      "hooks": [
        "string"
      ],
      "macros": [
        {}
      ],
      "name": "string",
      "operator_extra_links": [
        {}
      ],
      "source": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-list-of-loaded-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PluginCollection](#schemaplugincollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-role">Role</h1>

## List roles

<a id="opIdget_roles"></a>

> Code samples

```bash
curl https://example.com/roles \
  -H 'Accept: application/json'
```

`GET /roles`

Get a list of roles.

*New in version 2.1.0*


<h3 id="list-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "actions": [
        {
          "action": {
            "name": "string"
          },
          "resource": {
            "name": "string"
          }
        }
      ],
      "name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[RoleCollection](#schemarolecollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a role

<a id="opIdpost_role"></a>

> Code samples

```bash
curl https://example.com/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "actions": [
      {
        "action": {
          "name": "string"
        },
        "resource": {
          "name": "string"
        }
      }
    ],
    "name": "string"
  }'
```

`POST /roles`

Create a new role.

*New in version 2.1.0*


> Body parameter

```json
{
  "actions": [
    {
      "action": {
        "name": "string"
      },
      "resource": {
        "name": "string"
      }
    }
  ],
  "name": "string"
}
```

<h3 id="create-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Role](#schemarole)|true|none|
|» actions|body|[[ActionResource](#schemaactionresource)]|false|none|
|» name|body|string|false|The name of the role<br><br>*Changed in version 2.3.0*&#58; A minimum character length requirement ('minLength') is added.<br>|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action": {
        "name": "string"
      },
      "resource": {
        "name": "string"
      }
    }
  ],
  "name": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Role](#schemarole)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a role

<a id="opIdget_role"></a>

> Code samples

```bash
curl https://example.com/roles/string \
  -H 'Accept: application/json'
```

`GET /roles/{role_name}`

Get a role.

*New in version 2.1.0*


<h3 id="get-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_name|path|string|true|The role name|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action": {
        "name": "string"
      },
      "resource": {
        "name": "string"
      }
    }
  ],
  "name": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Role](#schemarole)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a role

<a id="opIddelete_role"></a>

> Code samples

```bash
curl https://example.com/roles/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /roles/{role_name}`

Delete a role.

*New in version 2.1.0*


<h3 id="delete-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_name|path|string|true|The role name|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a role

<a id="opIdpatch_role"></a>

> Code samples

```bash
curl https://example.com/roles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "actions": [
      {
        "action": {
          "name": "string"
        },
        "resource": {
          "name": "string"
        }
      }
    ],
    "name": "string"
  }'
```

`PATCH /roles/{role_name}`

Update a role.

*New in version 2.1.0*


> Body parameter

```json
{
  "actions": [
    {
      "action": {
        "name": "string"
      },
      "resource": {
        "name": "string"
      }
    }
  ],
  "name": "string"
}
```

<h3 id="update-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|update_mask|query|[string]|false|The fields to update on the resource. If absent or empty, all modifiable fields are updated.<br>A comma-separated list of fully qualified names of fields.<br>|
|role_name|path|string|true|The role name|
|body|body|[Role](#schemarole)|true|none|
|» actions|body|[[ActionResource](#schemaactionresource)]|false|none|
|» name|body|string|false|The name of the role<br><br>*Changed in version 2.3.0*&#58; A minimum character length requirement ('minLength') is added.<br>|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action": {
        "name": "string"
      },
      "resource": {
        "name": "string"
      }
    }
  ],
  "name": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Role](#schemarole)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-permission">Permission</h1>

## List permissions

<a id="opIdget_permissions"></a>

> Code samples

```bash
curl https://example.com/permissions \
  -H 'Accept: application/json'
```

`GET /permissions`

Get a list of permissions.

*New in version 2.1.0*


<h3 id="list-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ActionCollection](#schemaactioncollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-user">User</h1>

## List users

<a id="opIdget_users"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json'
```

`GET /users`

Get a list of users.

*New in version 2.1.0*


<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "active": true,
      "changed_on": "string",
      "created_on": "string",
      "email": "string",
      "failed_login_count": 0,
      "first_name": "string",
      "last_login": "string",
      "last_name": "string",
      "login_count": 0,
      "roles": [
        {
          "name": "string"
        }
      ],
      "username": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[UserCollection](#schemausercollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a user

<a id="opIdpost_user"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "roles": [
      {
        "name": "string"
      }
    ],
    "username": "string",
    "password": "string"
  }'
```

`POST /users`

Create a new user with unique username and email.

*New in version 2.2.0*


> Body parameter

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "roles": [
    {
      "name": "string"
    }
  ],
  "username": "string",
  "password": "string"
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|true|none|
|» email|body|string|false|The user's email.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|
|» first_name|body|string|false|The user's first name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|» last_name|body|string|false|The user's last name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|» roles|body|[object \| null]|false|User roles.<br><br>*Changed in version 2.2.0*&#58; Field is no longer read-only.<br>|
|» » name|body|string|false|none|
|» username|body|string|false|The username.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|
|» password|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "changed_on": "string",
  "created_on": "string",
  "email": "string",
  "failed_login_count": 0,
  "first_name": "string",
  "last_login": "string",
  "last_name": "string",
  "login_count": 0,
  "roles": [
    {
      "name": "string"
    }
  ],
  "username": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[User](#schemauser)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|409|Conflict|An existing resource conflicts with the request.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user

<a id="opIdget_user"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json'
```

`GET /users/{username}`

Get a user with a specific username.

*New in version 2.1.0*


<h3 id="get-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username of the user.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "active": true,
  "changed_on": "string",
  "created_on": "string",
  "email": "string",
  "failed_login_count": 0,
  "first_name": "string",
  "last_login": "string",
  "last_name": "string",
  "login_count": 0,
  "roles": [
    {
      "name": "string"
    }
  ],
  "username": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[UserCollectionItem](#schemausercollectionitem)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user

<a id="opIddelete_user"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{username}`

Delete a user with a specific username.

*New in version 2.2.0*


<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username of the user.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success.|None|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user

<a id="opIdpatch_user"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "roles": [
      {
        "name": "string"
      }
    ],
    "username": "string",
    "password": "string"
  }'
```

`PATCH /users/{username}`

Update fields for a user.

*New in version 2.2.0*


> Body parameter

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "roles": [
    {
      "name": "string"
    }
  ],
  "username": "string",
  "password": "string"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|update_mask|query|[string]|false|The fields to update on the resource. If absent or empty, all modifiable fields are updated.<br>A comma-separated list of fully qualified names of fields.<br>|
|username|path|string|true|The username of the user.<br><br>*New in version 2.1.0*<br>|
|body|body|[User](#schemauser)|true|none|
|» email|body|string|false|The user's email.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|
|» first_name|body|string|false|The user's first name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|» last_name|body|string|false|The user's last name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|» roles|body|[object \| null]|false|User roles.<br><br>*Changed in version 2.2.0*&#58; Field is no longer read-only.<br>|
|» » name|body|string|false|none|
|» username|body|string|false|The username.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|
|» password|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action": {
        "name": "string"
      },
      "resource": {
        "name": "string"
      }
    }
  ],
  "name": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Role](#schemarole)|
|400|Bad Request|Client specified an invalid argument.|[Error](#schemaerror)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-dagwarning">DagWarning</h1>

## List dag warnings

<a id="opIdget_dag_warnings"></a>

> Code samples

```bash
curl https://example.com/dagWarnings \
  -H 'Accept: application/json'
```

`GET /dagWarnings`

<h3 id="list-dag-warnings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|query|string|false|If set, only return DAG warnings with this dag_id.|
|warning_type|query|string|false|If set, only return DAG warnings with this type.|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|

> Example responses

> 200 Response

```json
{
  "import_errors": [
    {
      "dag_id": "string",
      "message": "string",
      "timestamp": "string",
      "warning_type": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-dag-warnings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DagWarningCollection](#schemadagwarningcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-stable-dataset">Dataset</h1>

## List datasets

<a id="opIdget_datasets"></a>

> Code samples

```bash
curl https://example.com/datasets \
  -H 'Accept: application/json'
```

`GET /datasets`

<h3 id="list-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|
|uri_pattern|query|string|false|If set, only return datasets with uris matching this pattern.<br>|

> Example responses

> 200 Response

```json
{
  "datasets": [
    {
      "consuming_dags": [
        {
          "created_at": "string",
          "dag_id": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "extra": {},
      "id": 0,
      "producing_tasks": [
        {
          "created_at": "string",
          "dag_id": "string",
          "task_id": "string",
          "updated_at": "string"
        }
      ],
      "updated_at": "string",
      "uri": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DatasetCollection](#schemadatasetcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get dataset events

<a id="opIdget_dataset_events"></a>

> Code samples

```bash
curl https://example.com/datasets/events \
  -H 'Accept: application/json'
```

`GET /datasets/events`

Get dataset events

<h3 id="get-dataset-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|order_by|query|string|false|The name of the field to order the results by.<br>Prefix a field name with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|
|dataset_id|query|integer|false|The Dataset ID that updated the dataset.|
|source_dag_id|query|string|false|The DAG ID that updated the dataset.|
|source_task_id|query|string|false|The task ID that updated the dataset.|
|source_run_id|query|string|false|The DAG run ID that updated the dataset.|
|source_map_index|query|integer|false|The map index that updated the dataset.|

> Example responses

> 200 Response

```json
{
  "dataset_events": [
    {
      "created_dagruns": [
        {
          "dag_id": "string",
          "data_interval_end": "1970-01-01T00:00:00Z",
          "data_interval_start": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "logical_date": "1970-01-01T00:00:00Z",
          "run_id": "string",
          "start_date": "1970-01-01T00:00:00Z",
          "state": "queued"
        }
      ],
      "dataset_id": 0,
      "dataset_uri": "string",
      "extra": {},
      "source_dag_id": "string",
      "source_map_index": 0,
      "source_run_id": "string",
      "source_task_id": "string",
      "timestamp": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-dataset-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[DatasetEventCollection](#schemadataseteventcollection)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a dataset

<a id="opIdget_dataset"></a>

> Code samples

```bash
curl https://example.com/datasets/string \
  -H 'Accept: application/json'
```

`GET /datasets/{uri}`

Get a dataset by uri.

<h3 id="get-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uri|path|string(path)|true|The encoded Dataset URI|

> Example responses

> 200 Response

```json
{
  "consuming_dags": [
    {
      "created_at": "string",
      "dag_id": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "extra": {},
  "id": 0,
  "producing_tasks": [
    {
      "created_at": "string",
      "dag_id": "string",
      "task_id": "string",
      "updated_at": "string"
    }
  ],
  "updated_at": "string",
  "uri": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Dataset](#schemadataset)|
|401|Unauthorized|Request not authenticated due to missing, invalid, authentication info.|[Error](#schemaerror)|
|403|Forbidden|Client does not have sufficient permission.|[Error](#schemaerror)|
|404|Not Found|A specified resource is not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "name": "string"
}
```

An action Item.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the permission "action"|

<h2 id="tocS_ActionCollection">ActionCollection</h2>
<!-- backwards compatibility -->
<a id="schemaactioncollection"></a>
<a id="schema_ActionCollection"></a>
<a id="tocSactioncollection"></a>
<a id="tocsactioncollection"></a>

```json
{
  "actions": [
    {
      "name": "string"
    }
  ],
  "total_entries": 0
}
```

A collection of actions.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_ActionResource">ActionResource</h2>
<!-- backwards compatibility -->
<a id="schemaactionresource"></a>
<a id="schema_ActionResource"></a>
<a id="tocSactionresource"></a>
<a id="tocsactionresource"></a>

```json
{
  "action": {
    "name": "string"
  },
  "resource": {
    "name": "string"
  }
}
```

The Action-Resource item.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[Action](#schemaaction)|false|none|The permission action|
|resource|[Resource](#schemaresource)|false|none|The permission resource|

<h2 id="tocS_BasicDAGRun">BasicDAGRun</h2>
<!-- backwards compatibility -->
<a id="schemabasicdagrun"></a>
<a id="schema_BasicDAGRun"></a>
<a id="tocSbasicdagrun"></a>
<a id="tocsbasicdagrun"></a>

```json
{
  "dag_id": "string",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "run_id": "string",
  "start_date": "1970-01-01T00:00:00Z",
  "state": "queued"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|read-only|none|
|data_interval_end|string(date-time) \| null|false|read-only|none|
|data_interval_start|string(date-time) \| null|false|read-only|none|
|end_date|string(date-time) \| null|false|read-only|none|
|logical_date|string(date-time)|false|none|The logical date (previously called execution date). This is the time or interval covered by<br>this DAG run, according to the DAG definition.<br><br>The value of this field can be set only when creating the object. If you try to modify the<br>field of an existing object, the request fails with an BAD_REQUEST error.<br><br>This together with DAG_ID are a unique key.<br><br>*New in version 2.2.0*<br>|
|run_id|string|false|none|Run ID.<br>|
|start_date|string(date-time) \| null|false|read-only|The start time. The time when DAG run was actually created.<br><br>*Changed in version 2.1.3*&#58; Field becomes nullable.<br>|
|state|[DagState](#schemadagstate)|false|none|DAG State.<br><br>*Changed in version 2.1.3*&#58; 'queued' is added as a possible value.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|state|queued|
|state|running|
|state|success|
|state|failed|

<h2 id="tocS_ClassReference">ClassReference</h2>
<!-- backwards compatibility -->
<a id="schemaclassreference"></a>
<a id="schema_ClassReference"></a>
<a id="tocSclassreference"></a>
<a id="tocsclassreference"></a>

```json
{
  "class_name": "string",
  "module_path": "string"
}
```

Class reference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class_name|string|false|read-only|none|
|module_path|string|false|read-only|none|

<h2 id="tocS_ClearDagRun">ClearDagRun</h2>
<!-- backwards compatibility -->
<a id="schemacleardagrun"></a>
<a id="schema_ClearDagRun"></a>
<a id="tocScleardagrun"></a>
<a id="tocscleardagrun"></a>

```json
{
  "dry_run": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dry_run|boolean|false|none|If set, don't actually run this operation. The response will contain a list of task instances<br>planned to be cleaned, but not modified in any way.<br>|

<h2 id="tocS_ClearTaskInstances">ClearTaskInstances</h2>
<!-- backwards compatibility -->
<a id="schemacleartaskinstances"></a>
<a id="schema_ClearTaskInstances"></a>
<a id="tocScleartaskinstances"></a>
<a id="tocscleartaskinstances"></a>

```json
{
  "dag_run_id": "string",
  "dry_run": true,
  "end_date": "string",
  "include_downstream": false,
  "include_future": false,
  "include_parentdag": true,
  "include_past": false,
  "include_subdags": true,
  "include_upstream": false,
  "only_failed": true,
  "only_running": false,
  "reset_dag_runs": true,
  "start_date": "string",
  "task_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_run_id|string \| null|false|none|The DagRun ID for this task instance|
|dry_run|boolean|false|none|If set, don't actually run this operation. The response will contain a list of task instances<br>planned to be cleaned, but not modified in any way.<br>|
|end_date|string(datetime)|false|none|The maximum execution date to clear.|
|include_downstream|boolean|false|none|If set to true, downstream tasks are also affected.|
|include_future|boolean|false|none|If set to True, also tasks from future DAG Runs are affected.|
|include_parentdag|boolean|false|none|Clear tasks in the parent dag of the subdag.|
|include_past|boolean|false|none|If set to True, also tasks from past DAG Runs are affected.|
|include_subdags|boolean|false|none|Clear tasks in subdags and clear external tasks indicated by ExternalTaskMarker.|
|include_upstream|boolean|false|none|If set to true, upstream tasks are also affected.|
|only_failed|boolean|false|none|Only clear failed tasks.|
|only_running|boolean|false|none|Only clear running tasks.|
|reset_dag_runs|boolean|false|none|Set state of DAG runs to RUNNING.|
|start_date|string(datetime)|false|none|The minimum execution date to clear.|
|task_ids|[string]|false|none|A list of task ids to clear.<br><br>*New in version 2.1.0*<br>|

<h2 id="tocS_CollectionInfo">CollectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemacollectioninfo"></a>
<a id="schema_CollectionInfo"></a>
<a id="tocScollectioninfo"></a>
<a id="tocscollectioninfo"></a>

```json
{
  "total_entries": 0
}
```

Metadata about collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
"string"
```

Color in hexadecimal notation.

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "sections": [
    {
      "name": "string",
      "options": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

The configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sections|[[ConfigSection](#schemaconfigsection)]|false|none|none|

<h2 id="tocS_ConfigOption">ConfigOption</h2>
<!-- backwards compatibility -->
<a id="schemaconfigoption"></a>
<a id="schema_ConfigOption"></a>
<a id="tocSconfigoption"></a>
<a id="tocsconfigoption"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

The option of configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|read-only|none|
|value|string|false|read-only|none|

<h2 id="tocS_ConfigSection">ConfigSection</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsection"></a>
<a id="schema_ConfigSection"></a>
<a id="tocSconfigsection"></a>
<a id="tocsconfigsection"></a>

```json
{
  "name": "string",
  "options": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

The section of configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|none|
|options|[[ConfigOption](#schemaconfigoption)]|false|none|none|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string",
  "extra": "string",
  "password": "password"
}
```

Full representation of the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conn_type|string|false|none|The connection type.|
|connection_id|string|false|none|The connection ID.|
|description|string \| null|false|none|The description of the connection.|
|host|string \| null|false|none|Host of the connection.|
|login|string \| null|false|none|Login of the connection.|
|port|integer \| null|false|none|Port of the connection.|
|schema|string \| null|false|none|Schema of the connection.|
|extra|string \| null|false|none|Other values that cannot be put into another field, e.g. RSA keys.|
|password|string(password)|false|write-only|Password of the connection.|

<h2 id="tocS_ConnectionCollection">ConnectionCollection</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioncollection"></a>
<a id="schema_ConnectionCollection"></a>
<a id="tocSconnectioncollection"></a>
<a id="tocsconnectioncollection"></a>

```json
{
  "connections": [
    {
      "conn_type": "string",
      "connection_id": "string",
      "description": "string",
      "host": "string",
      "login": "string",
      "port": 0,
      "schema": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of connections.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[ConnectionCollectionItem](#schemaconnectioncollectionitem)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_ConnectionCollectionItem">ConnectionCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioncollectionitem"></a>
<a id="schema_ConnectionCollectionItem"></a>
<a id="tocSconnectioncollectionitem"></a>
<a id="tocsconnectioncollectionitem"></a>

```json
{
  "conn_type": "string",
  "connection_id": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "port": 0,
  "schema": "string"
}
```

Connection collection item.
The password and extra fields are only available when retrieving a single object due to the sensitivity of this data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conn_type|string|false|none|The connection type.|
|connection_id|string|false|none|The connection ID.|
|description|string \| null|false|none|The description of the connection.|
|host|string \| null|false|none|Host of the connection.|
|login|string \| null|false|none|Login of the connection.|
|port|integer \| null|false|none|Port of the connection.|
|schema|string \| null|false|none|Schema of the connection.|

<h2 id="tocS_ConnectionTest">ConnectionTest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontest"></a>
<a id="schema_ConnectionTest"></a>
<a id="tocSconnectiontest"></a>
<a id="tocsconnectiontest"></a>

```json
{
  "message": "string",
  "status": true
}
```

Connection test results.

*New in version 2.2.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The success or failure message of the request.|
|status|boolean|false|none|The status of the request.|

<h2 id="tocS_CronExpression">CronExpression</h2>
<!-- backwards compatibility -->
<a id="schemacronexpression"></a>
<a id="schema_CronExpression"></a>
<a id="tocScronexpression"></a>
<a id="tocscronexpression"></a>

```json
{
  "__type": "string",
  "value": "string"
}
```

Cron expression

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__type|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_DAG">DAG</h2>
<!-- backwards compatibility -->
<a id="schemadag"></a>
<a id="schema_DAG"></a>
<a id="tocSdag"></a>
<a id="tocsdag"></a>

```json
{
  "dag_id": "string",
  "default_view": "string",
  "description": "string",
  "file_token": "string",
  "fileloc": "string",
  "has_import_errors": true,
  "has_task_concurrency_limits": true,
  "is_active": true,
  "is_paused": true,
  "is_subdag": true,
  "last_expired": "1970-01-01T00:00:00Z",
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_pickled": "1970-01-01T00:00:00Z",
  "max_active_runs": 0,
  "max_active_tasks": 0,
  "next_dagrun": "1970-01-01T00:00:00Z",
  "next_dagrun_create_after": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "owners": [
    "string"
  ],
  "pickle_id": "string",
  "root_dag_id": "string",
  "schedule_interval": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "scheduler_lock": true,
  "tags": [
    {
      "name": "string"
    }
  ],
  "timetable_description": "string"
}
```

DAG

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|read-only|The ID of the DAG.|
|default_view|string \| null|false|read-only|Default view of the DAG inside the webserver<br><br>*New in version 2.3.0*<br>|
|description|string \| null|false|read-only|User-provided DAG description, which can consist of several sentences or paragraphs that describe DAG contents.<br>|
|file_token|string|false|read-only|The key containing the encrypted path to the file. Encryption and decryption take place only on the server. This prevents the client from reading an non-DAG file. This also ensures API extensibility, because the format of encrypted data may change.<br>|
|fileloc|string|false|read-only|The absolute path to the file.|
|has_import_errors|boolean \| null|false|read-only|Whether the DAG has import errors<br><br>*New in version 2.3.0*<br>|
|has_task_concurrency_limits|boolean \| null|false|read-only|Whether the DAG has task concurrency limits<br><br>*New in version 2.3.0*<br>|
|is_active|boolean \| null|false|read-only|Whether the DAG is currently seen by the scheduler(s).<br><br>*New in version 2.1.1*<br><br>*Changed in version 2.2.0*&#58; Field is read-only.<br>|
|is_paused|boolean \| null|false|none|Whether the DAG is paused.|
|is_subdag|boolean|false|read-only|Whether the DAG is SubDAG.|
|last_expired|string(date-time) \| null|false|read-only|Time when the DAG last received a refresh signal<br>(e.g. the DAG's "refresh" button was clicked in the web UI)<br><br>*New in version 2.3.0*<br>|
|last_parsed_time|string(date-time) \| null|false|read-only|The last time the DAG was parsed.<br><br>*New in version 2.3.0*<br>|
|last_pickled|string(date-time) \| null|false|read-only|The last time the DAG was pickled.<br><br>*New in version 2.3.0*<br>|
|max_active_runs|integer \| null|false|read-only|Maximum number of active DAG runs for the DAG<br><br>*New in version 2.3.0*<br>|
|max_active_tasks|integer \| null|false|read-only|Maximum number of active tasks that can be run on the DAG<br><br>*New in version 2.3.0*<br>|
|next_dagrun|string(date-time) \| null|false|read-only|The logical date of the next dag run.<br><br>*New in version 2.3.0*<br>|
|next_dagrun_create_after|string(date-time) \| null|false|read-only|Earliest time at which this ``next_dagrun`` can be created.<br><br>*New in version 2.3.0*<br>|
|next_dagrun_data_interval_end|string(date-time) \| null|false|read-only|The end of the interval of the next dag run.<br><br>*New in version 2.3.0*<br>|
|next_dagrun_data_interval_start|string(date-time) \| null|false|read-only|The start of the interval of the next dag run.<br><br>*New in version 2.3.0*<br>|
|owners|[string]|false|read-only|none|
|pickle_id|string \| null|false|read-only|Foreign key to the latest pickle_id<br><br>*New in version 2.3.0*<br>|
|root_dag_id|string \| null|false|read-only|If the DAG is SubDAG then it is the top level DAG identifier. Otherwise, null.|
|schedule_interval|[ScheduleInterval](#schemascheduleinterval)|false|read-only|Schedule interval. Defines how often DAG runs, this object gets added to your latest task instance's<br>execution_date to figure out the next schedule.<br>|
|scheduler_lock|boolean \| null|false|read-only|Whether (one of) the scheduler is scheduling this DAG at the moment<br><br>*New in version 2.3.0*<br>|
|tags|[[Tag](#schematag)]|false|read-only|List of tags.|
|timetable_description|string \| null|false|read-only|Timetable/Schedule Interval description.<br><br>*New in version 2.3.0*<br>|

<h2 id="tocS_DAGCollection">DAGCollection</h2>
<!-- backwards compatibility -->
<a id="schemadagcollection"></a>
<a id="schema_DAGCollection"></a>
<a id="tocSdagcollection"></a>
<a id="tocsdagcollection"></a>

```json
{
  "dags": [
    {
      "dag_id": "string",
      "default_view": "string",
      "description": "string",
      "file_token": "string",
      "fileloc": "string",
      "has_import_errors": true,
      "has_task_concurrency_limits": true,
      "is_active": true,
      "is_paused": true,
      "is_subdag": true,
      "last_expired": "1970-01-01T00:00:00Z",
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_pickled": "1970-01-01T00:00:00Z",
      "max_active_runs": 0,
      "max_active_tasks": 0,
      "next_dagrun": "1970-01-01T00:00:00Z",
      "next_dagrun_create_after": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
      "owners": [
        "string"
      ],
      "pickle_id": "string",
      "root_dag_id": "string",
      "schedule_interval": {
        "__type": "string",
        "days": 0,
        "microseconds": 0,
        "seconds": 0
      },
      "scheduler_lock": true,
      "tags": [
        {
          "name": "string"
        }
      ],
      "timetable_description": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of DAGs.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dags|[[DAG](#schemadag)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_DAGDetail">DAGDetail</h2>
<!-- backwards compatibility -->
<a id="schemadagdetail"></a>
<a id="schema_DAGDetail"></a>
<a id="tocSdagdetail"></a>
<a id="tocsdagdetail"></a>

```json
{
  "dag_id": "string",
  "default_view": "string",
  "description": "string",
  "file_token": "string",
  "fileloc": "string",
  "has_import_errors": true,
  "has_task_concurrency_limits": true,
  "is_active": true,
  "is_paused": true,
  "is_subdag": true,
  "last_expired": "1970-01-01T00:00:00Z",
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_pickled": "1970-01-01T00:00:00Z",
  "max_active_runs": 0,
  "max_active_tasks": 0,
  "next_dagrun": "1970-01-01T00:00:00Z",
  "next_dagrun_create_after": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "owners": [
    "string"
  ],
  "pickle_id": "string",
  "root_dag_id": "string",
  "schedule_interval": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "scheduler_lock": true,
  "tags": [
    {
      "name": "string"
    }
  ],
  "timetable_description": "string",
  "catchup": true,
  "concurrency": 0,
  "dag_run_timeout": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "doc_md": "string",
  "end_date": "1970-01-01T00:00:00Z",
  "is_paused_upon_creation": true,
  "last_parsed": "1970-01-01T00:00:00Z",
  "orientation": "string",
  "params": {},
  "render_template_as_native_obj": true,
  "start_date": "1970-01-01T00:00:00Z",
  "template_search_path": [
    "string"
  ],
  "timezone": "string"
}
```

DAG details.

For details see:
[airflow.models.DAG](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/index.html#airflow.models.DAG)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|read-only|The ID of the DAG.|
|default_view|string \| null|false|read-only|Default view of the DAG inside the webserver<br><br>*New in version 2.3.0*<br>|
|description|string \| null|false|read-only|User-provided DAG description, which can consist of several sentences or paragraphs that describe DAG contents.<br>|
|file_token|string|false|read-only|The key containing the encrypted path to the file. Encryption and decryption take place only on the server. This prevents the client from reading an non-DAG file. This also ensures API extensibility, because the format of encrypted data may change.<br>|
|fileloc|string|false|read-only|The absolute path to the file.|
|has_import_errors|boolean \| null|false|read-only|Whether the DAG has import errors<br><br>*New in version 2.3.0*<br>|
|has_task_concurrency_limits|boolean \| null|false|read-only|Whether the DAG has task concurrency limits<br><br>*New in version 2.3.0*<br>|
|is_active|boolean \| null|false|read-only|Whether the DAG is currently seen by the scheduler(s).<br><br>*New in version 2.1.1*<br><br>*Changed in version 2.2.0*&#58; Field is read-only.<br>|
|is_paused|boolean \| null|false|none|Whether the DAG is paused.|
|is_subdag|boolean|false|read-only|Whether the DAG is SubDAG.|
|last_expired|string(date-time) \| null|false|read-only|Time when the DAG last received a refresh signal<br>(e.g. the DAG's "refresh" button was clicked in the web UI)<br><br>*New in version 2.3.0*<br>|
|last_parsed_time|string(date-time) \| null|false|read-only|The last time the DAG was parsed.<br><br>*New in version 2.3.0*<br>|
|last_pickled|string(date-time) \| null|false|read-only|The last time the DAG was pickled.<br><br>*New in version 2.3.0*<br>|
|max_active_runs|integer \| null|false|read-only|Maximum number of active DAG runs for the DAG<br><br>*New in version 2.3.0*<br>|
|max_active_tasks|integer \| null|false|read-only|Maximum number of active tasks that can be run on the DAG<br><br>*New in version 2.3.0*<br>|
|next_dagrun|string(date-time) \| null|false|read-only|The logical date of the next dag run.<br><br>*New in version 2.3.0*<br>|
|next_dagrun_create_after|string(date-time) \| null|false|read-only|Earliest time at which this ``next_dagrun`` can be created.<br><br>*New in version 2.3.0*<br>|
|next_dagrun_data_interval_end|string(date-time) \| null|false|read-only|The end of the interval of the next dag run.<br><br>*New in version 2.3.0*<br>|
|next_dagrun_data_interval_start|string(date-time) \| null|false|read-only|The start of the interval of the next dag run.<br><br>*New in version 2.3.0*<br>|
|owners|[string]|false|read-only|none|
|pickle_id|string \| null|false|read-only|Foreign key to the latest pickle_id<br><br>*New in version 2.3.0*<br>|
|root_dag_id|string \| null|false|read-only|If the DAG is SubDAG then it is the top level DAG identifier. Otherwise, null.|
|schedule_interval|[ScheduleInterval](#schemascheduleinterval)|false|read-only|Schedule interval. Defines how often DAG runs, this object gets added to your latest task instance's<br>execution_date to figure out the next schedule.<br>|
|scheduler_lock|boolean \| null|false|read-only|Whether (one of) the scheduler is scheduling this DAG at the moment<br><br>*New in version 2.3.0*<br>|
|tags|[[Tag](#schematag)]|false|read-only|List of tags.|
|timetable_description|string \| null|false|read-only|Timetable/Schedule Interval description.<br><br>*New in version 2.3.0*<br>|
|catchup|boolean|false|read-only|none|
|concurrency|number|false|read-only|none|
|dag_run_timeout|[TimeDelta](#schematimedelta)|false|none|Time delta|
|default_view|string|false|read-only|none|
|doc_md|string \| null|false|read-only|none|
|end_date|string(date-time) \| null|false|read-only|The DAG's end date.<br><br>*New in version 2.3.0*.<br>|
|is_paused_upon_creation|boolean \| null|false|read-only|Whether the DAG is paused upon creation.<br><br>*New in version 2.3.0*<br>|
|last_parsed|string(date-time) \| null|false|read-only|The last time the DAG was parsed.<br><br>*New in version 2.3.0*<br>|
|orientation|string|false|read-only|none|
|params|object|false|read-only|User-specified DAG params.<br><br>*New in version 2.0.1*<br>|
|render_template_as_native_obj|boolean \| null|false|read-only|Whether to render templates as native Python objects.<br><br>*New in version 2.3.0*<br>|
|start_date|string(date-time) \| null|false|read-only|The DAG's start date.<br><br>*Changed in version 2.0.1*&#58; Field becomes nullable.<br>|
|template_search_path|[string]|false|none|The template search path.<br><br>*New in version 2.3.0*<br>|
|timezone|[Timezone](#schematimezone)|false|none|none|

<h2 id="tocS_DAGRun">DAGRun</h2>
<!-- backwards compatibility -->
<a id="schemadagrun"></a>
<a id="schema_DAGRun"></a>
<a id="tocSdagrun"></a>
<a id="tocsdagrun"></a>

```json
{
  "conf": {},
  "dag_id": "string",
  "dag_run_id": "string",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "execution_date": "1970-01-01T00:00:00Z",
  "external_trigger": true,
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "note": "string",
  "run_type": "backfill",
  "start_date": "1970-01-01T00:00:00Z",
  "state": "queued"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conf|object|false|none|JSON object describing additional configuration parameters.<br><br>The value of this field can be set only when creating the object. If you try to modify the<br>field of an existing object, the request fails with an BAD_REQUEST error.<br>|
|dag_id|string|false|read-only|none|
|dag_run_id|string \| null|false|none|Run ID.<br><br>The value of this field can be set only when creating the object. If you try to modify the<br>field of an existing object, the request fails with an BAD_REQUEST error.<br><br>If not provided, a value will be generated based on execution_date.<br><br>If the specified dag_run_id is in use, the creation request fails with an ALREADY_EXISTS error.<br><br>This together with DAG_ID are a unique key.<br>|
|data_interval_end|string(date-time) \| null|false|read-only|none|
|data_interval_start|string(date-time) \| null|false|read-only|none|
|end_date|string(date-time) \| null|false|read-only|none|
|execution_date|string(date-time) \| null|false|none|**Deprecated.** The execution date. This is the same as logical_date, kept for backwards compatibility.<br>If both this field and logical_date are provided but with different values, the request<br>will fail with an BAD_REQUEST error.<br><br>*Changed in version 2.2.0*&#58; Field becomes nullable.<br><br>*Deprecated since version 2.2.0*&#58; Use 'logical_date' instead.<br>|
|external_trigger|boolean|false|read-only|none|
|last_scheduling_decision|string(date-time) \| null|false|read-only|none|
|logical_date|string(date-time) \| null|false|none|The logical date (previously called execution date). This is the time or interval covered by<br>this DAG run, according to the DAG definition.<br><br>The value of this field can be set only when creating the object. If you try to modify the<br>field of an existing object, the request fails with an BAD_REQUEST error.<br><br>This together with DAG_ID are a unique key.<br><br>*New in version 2.2.0*<br>|
|note|string \| null|false|none|Contains manually entered notes by the user about the DagRun.<br><br>*New in version 2.5.0*<br>|
|run_type|string|false|read-only|none|
|start_date|string(date-time) \| null|false|read-only|The start time. The time when DAG run was actually created.<br><br>*Changed in version 2.1.3*&#58; Field becomes nullable.<br>|
|state|[DagState](#schemadagstate)|false|none|DAG State.<br><br>*Changed in version 2.1.3*&#58; 'queued' is added as a possible value.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|run_type|backfill|
|run_type|manual|
|run_type|scheduled|
|run_type|dataset_triggered|
|state|queued|
|state|running|
|state|success|
|state|failed|

<h2 id="tocS_DAGRunCollection">DAGRunCollection</h2>
<!-- backwards compatibility -->
<a id="schemadagruncollection"></a>
<a id="schema_DAGRunCollection"></a>
<a id="tocSdagruncollection"></a>
<a id="tocsdagruncollection"></a>

```json
{
  "dag_runs": [
    {
      "conf": {},
      "dag_id": "string",
      "dag_run_id": "string",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "data_interval_start": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "execution_date": "1970-01-01T00:00:00Z",
      "external_trigger": true,
      "last_scheduling_decision": "1970-01-01T00:00:00Z",
      "logical_date": "1970-01-01T00:00:00Z",
      "note": "string",
      "run_type": "backfill",
      "start_date": "1970-01-01T00:00:00Z",
      "state": "queued"
    }
  ],
  "total_entries": 0
}
```

Collection of DAG runs.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_runs|[[DAGRun](#schemadagrun)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_DagScheduleDatasetReference">DagScheduleDatasetReference</h2>
<!-- backwards compatibility -->
<a id="schemadagscheduledatasetreference"></a>
<a id="schema_DagScheduleDatasetReference"></a>
<a id="tocSdagscheduledatasetreference"></a>
<a id="tocsdagscheduledatasetreference"></a>

```json
{
  "created_at": "string",
  "dag_id": "string",
  "updated_at": "string"
}
```

A datasets reference to a downstream DAG.

*New in version 2.4.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|The dataset reference creation time|
|dag_id|string \| null|false|none|The DAG ID that depends on the dataset.|
|updated_at|string|false|none|The dataset reference update time|

<h2 id="tocS_DagState">DagState</h2>
<!-- backwards compatibility -->
<a id="schemadagstate"></a>
<a id="schema_DagState"></a>
<a id="tocSdagstate"></a>
<a id="tocsdagstate"></a>

```json
"queued"
```

DAG State.

*Changed in version 2.1.3*&#58; 'queued' is added as a possible value.

<h2 id="tocS_DagWarning">DagWarning</h2>
<!-- backwards compatibility -->
<a id="schemadagwarning"></a>
<a id="schema_DagWarning"></a>
<a id="tocSdagwarning"></a>
<a id="tocsdagwarning"></a>

```json
{
  "dag_id": "string",
  "message": "string",
  "timestamp": "string",
  "warning_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|read-only|The dag_id.|
|message|string|false|read-only|The message for the dag warning.|
|timestamp|string(datetime)|false|read-only|The time when this warning was logged.|
|warning_type|string|false|read-only|The warning type for the dag warning.|

<h2 id="tocS_DagWarningCollection">DagWarningCollection</h2>
<!-- backwards compatibility -->
<a id="schemadagwarningcollection"></a>
<a id="schema_DagWarningCollection"></a>
<a id="tocSdagwarningcollection"></a>
<a id="tocsdagwarningcollection"></a>

```json
{
  "import_errors": [
    {
      "dag_id": "string",
      "message": "string",
      "timestamp": "string",
      "warning_type": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of DAG warnings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|import_errors|[[DagWarning](#schemadagwarning)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "consuming_dags": [
    {
      "created_at": "string",
      "dag_id": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "extra": {},
  "id": 0,
  "producing_tasks": [
    {
      "created_at": "string",
      "dag_id": "string",
      "task_id": "string",
      "updated_at": "string"
    }
  ],
  "updated_at": "string",
  "uri": "string"
}
```

A dataset item.

*New in version 2.4.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_dags|[[DagScheduleDatasetReference](#schemadagscheduledatasetreference)]|false|none|none|
|created_at|string|false|none|The dataset creation time|
|extra|object \| null|false|none|The dataset extra|
|id|integer|false|none|The dataset id|
|producing_tasks|[[TaskOutletDatasetReference](#schemataskoutletdatasetreference)]|false|none|none|
|updated_at|string|false|none|The dataset update time|
|uri|string|false|none|The dataset uri|

<h2 id="tocS_DatasetCollection">DatasetCollection</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcollection"></a>
<a id="schema_DatasetCollection"></a>
<a id="tocSdatasetcollection"></a>
<a id="tocsdatasetcollection"></a>

```json
{
  "datasets": [
    {
      "consuming_dags": [
        {
          "created_at": "string",
          "dag_id": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "extra": {},
      "id": 0,
      "producing_tasks": [
        {
          "created_at": "string",
          "dag_id": "string",
          "task_id": "string",
          "updated_at": "string"
        }
      ],
      "updated_at": "string",
      "uri": "string"
    }
  ],
  "total_entries": 0
}
```

A collection of datasets.

*New in version 2.4.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[[Dataset](#schemadataset)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_DatasetEvent">DatasetEvent</h2>
<!-- backwards compatibility -->
<a id="schemadatasetevent"></a>
<a id="schema_DatasetEvent"></a>
<a id="tocSdatasetevent"></a>
<a id="tocsdatasetevent"></a>

```json
{
  "created_dagruns": [
    {
      "dag_id": "string",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "data_interval_start": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "logical_date": "1970-01-01T00:00:00Z",
      "run_id": "string",
      "start_date": "1970-01-01T00:00:00Z",
      "state": "queued"
    }
  ],
  "dataset_id": 0,
  "dataset_uri": "string",
  "extra": {},
  "source_dag_id": "string",
  "source_map_index": 0,
  "source_run_id": "string",
  "source_task_id": "string",
  "timestamp": "string"
}
```

A dataset event.

*New in version 2.4.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_dagruns|[[BasicDAGRun](#schemabasicdagrun)]|false|none|none|
|dataset_id|integer|false|none|The dataset id|
|dataset_uri|string|false|none|The URI of the dataset|
|extra|object \| null|false|none|The dataset event extra|
|source_dag_id|string \| null|false|none|The DAG ID that updated the dataset.|
|source_map_index|integer \| null|false|none|The task map index that updated the dataset.|
|source_run_id|string \| null|false|none|The DAG run ID that updated the dataset.|
|source_task_id|string \| null|false|none|The task ID that updated the dataset.|
|timestamp|string|false|none|The dataset event creation time|

<h2 id="tocS_DatasetEventCollection">DatasetEventCollection</h2>
<!-- backwards compatibility -->
<a id="schemadataseteventcollection"></a>
<a id="schema_DatasetEventCollection"></a>
<a id="tocSdataseteventcollection"></a>
<a id="tocsdataseteventcollection"></a>

```json
{
  "dataset_events": [
    {
      "created_dagruns": [
        {
          "dag_id": "string",
          "data_interval_end": "1970-01-01T00:00:00Z",
          "data_interval_start": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "logical_date": "1970-01-01T00:00:00Z",
          "run_id": "string",
          "start_date": "1970-01-01T00:00:00Z",
          "state": "queued"
        }
      ],
      "dataset_id": 0,
      "dataset_uri": "string",
      "extra": {},
      "source_dag_id": "string",
      "source_map_index": 0,
      "source_run_id": "string",
      "source_task_id": "string",
      "timestamp": "string"
    }
  ],
  "total_entries": 0
}
```

A collection of dataset events.

*New in version 2.4.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_events|[[DatasetEvent](#schemadatasetevent)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

[RFC7807](https://tools.ietf.org/html/rfc7807) compliant response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific occurrence of the problem. It may or may<br>not yield further information if dereferenced.<br>|
|status|number|true|none|The HTTP status code generated by the API server for this occurrence of the problem.|
|title|string|true|none|A short, human-readable summary of the problem type.|
|type|string|true|none|A URI reference [RFC3986] that identifies the problem type. This specification<br>encourages that, when dereferenced, it provide human-readable documentation for<br>the problem type.<br>|

<h2 id="tocS_EventLog">EventLog</h2>
<!-- backwards compatibility -->
<a id="schemaeventlog"></a>
<a id="schema_EventLog"></a>
<a id="tocSeventlog"></a>
<a id="tocseventlog"></a>

```json
{
  "dag_id": "string",
  "event": "string",
  "event_log_id": 0,
  "execution_date": "1970-01-01T00:00:00Z",
  "extra": "string",
  "owner": "string",
  "task_id": "string",
  "when": "1970-01-01T00:00:00Z"
}
```

Log of user operations via CLI or Web UI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string \| null|false|read-only|The DAG ID|
|event|string|false|read-only|A key describing the type of event.|
|event_log_id|integer|false|read-only|The event log ID|
|execution_date|string(date-time) \| null|false|read-only|When the event was dispatched for an object having execution_date, the value of this field.<br>|
|extra|string \| null|false|read-only|Other information that was not included in the other fields, e.g. the complete CLI command.<br>|
|owner|string|false|read-only|Name of the user who triggered these events a.|
|task_id|string \| null|false|read-only|The DAG ID|
|when|string(date-time)|false|read-only|The time when these events happened.|

<h2 id="tocS_EventLogCollection">EventLogCollection</h2>
<!-- backwards compatibility -->
<a id="schemaeventlogcollection"></a>
<a id="schema_EventLogCollection"></a>
<a id="tocSeventlogcollection"></a>
<a id="tocseventlogcollection"></a>

```json
{
  "event_logs": [
    {
      "dag_id": "string",
      "event": "string",
      "event_log_id": 0,
      "execution_date": "1970-01-01T00:00:00Z",
      "extra": "string",
      "owner": "string",
      "task_id": "string",
      "when": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

Collection of event logs.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_logs|[[EventLog](#schemaeventlog)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_ExtraLink">ExtraLink</h2>
<!-- backwards compatibility -->
<a id="schemaextralink"></a>
<a id="schema_ExtraLink"></a>
<a id="tocSextralink"></a>
<a id="tocsextralink"></a>

```json
{
  "class_ref": {
    "class_name": "string",
    "module_path": "string"
  },
  "href": "string",
  "name": "string"
}
```

Additional links containing additional information about the task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class_ref|[ClassReference](#schemaclassreference)|false|none|Class reference|
|href|string|false|read-only|none|
|name|string|false|read-only|none|

<h2 id="tocS_ExtraLinkCollection">ExtraLinkCollection</h2>
<!-- backwards compatibility -->
<a id="schemaextralinkcollection"></a>
<a id="schema_ExtraLinkCollection"></a>
<a id="tocSextralinkcollection"></a>
<a id="tocsextralinkcollection"></a>

```json
{
  "extra_links": [
    {
      "class_ref": {
        "class_name": "string",
        "module_path": "string"
      },
      "href": "string",
      "name": "string"
    }
  ]
}
```

The collection of extra links.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra_links|[[ExtraLink](#schemaextralink)]|false|none|none|

<h2 id="tocS_HealthInfo">HealthInfo</h2>
<!-- backwards compatibility -->
<a id="schemahealthinfo"></a>
<a id="schema_HealthInfo"></a>
<a id="tocShealthinfo"></a>
<a id="tocshealthinfo"></a>

```json
{
  "metadatabase": {
    "status": "healthy"
  },
  "scheduler": {
    "latest_scheduler_heartbeat": "string",
    "status": "healthy"
  }
}
```

Instance status information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadatabase|[MetadatabaseStatus](#schemametadatabasestatus)|false|none|The status of the metadatabase.|
|scheduler|[SchedulerStatus](#schemaschedulerstatus)|false|none|The status and the latest scheduler heartbeat.|

<h2 id="tocS_HealthStatus">HealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_HealthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
"healthy"
```

Health status

<h2 id="tocS_ImportError">ImportError</h2>
<!-- backwards compatibility -->
<a id="schemaimporterror"></a>
<a id="schema_ImportError"></a>
<a id="tocSimporterror"></a>
<a id="tocsimporterror"></a>

```json
{
  "filename": "string",
  "import_error_id": 0,
  "stack_trace": "string",
  "timestamp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|false|read-only|The filename|
|import_error_id|integer|false|read-only|The import error ID.|
|stack_trace|string|false|read-only|The full stackstrace..|
|timestamp|string(datetime)|false|read-only|The time when this error was created.|

<h2 id="tocS_ImportErrorCollection">ImportErrorCollection</h2>
<!-- backwards compatibility -->
<a id="schemaimporterrorcollection"></a>
<a id="schema_ImportErrorCollection"></a>
<a id="tocSimporterrorcollection"></a>
<a id="tocsimporterrorcollection"></a>

```json
{
  "import_errors": [
    {
      "filename": "string",
      "import_error_id": 0,
      "stack_trace": "string",
      "timestamp": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of import errors.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|import_errors|[[ImportError](#schemaimporterror)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "dag_id": "string",
  "end_date": "string",
  "executor_class": "string",
  "hostname": "string",
  "id": 0,
  "job_type": "string",
  "latest_heartbeat": "string",
  "start_date": "string",
  "state": "string",
  "unixname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string \| null|false|none|none|
|end_date|string(datetime) \| null|false|none|none|
|executor_class|string \| null|false|none|none|
|hostname|string \| null|false|none|none|
|id|integer|false|none|none|
|job_type|string \| null|false|none|none|
|latest_heartbeat|string(datetime) \| null|false|none|none|
|start_date|string(datetime) \| null|false|none|none|
|state|string \| null|false|none|none|
|unixname|string \| null|false|none|none|

<h2 id="tocS_ListDagRunsForm">ListDagRunsForm</h2>
<!-- backwards compatibility -->
<a id="schemalistdagrunsform"></a>
<a id="schema_ListDagRunsForm"></a>
<a id="tocSlistdagrunsform"></a>
<a id="tocslistdagrunsform"></a>

```json
{
  "dag_ids": [
    "string"
  ],
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "execution_date_gte": "1970-01-01T00:00:00Z",
  "execution_date_lte": "1970-01-01T00:00:00Z",
  "order_by": "string",
  "page_limit": 100,
  "page_offset": 0,
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "states": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_ids|[string]|false|none|Return objects with specific DAG IDs.<br>The value can be repeated to retrieve multiple matching values (OR condition).|
|end_date_gte|string(date-time)|false|none|Returns objects greater or equal the specified date.<br><br>This can be combined with end_date_lte parameter to receive only the selected period.<br>|
|end_date_lte|string(date-time)|false|none|Returns objects less than or equal to the specified date.<br><br>This can be combined with end_date_gte parameter to receive only the selected period.<br>|
|execution_date_gte|string(date-time)|false|none|Returns objects greater or equal to the specified date.<br><br>This can be combined with execution_date_lte key to receive only the selected period.<br>|
|execution_date_lte|string(date-time)|false|none|Returns objects less than or equal to the specified date.<br><br>This can be combined with execution_date_gte key to receive only the selected period.<br>|
|order_by|string|false|none|The name of the field to order the results by. Prefix a field name<br>with `-` to reverse the sort order.<br><br>*New in version 2.1.0*<br>|
|page_limit|integer|false|none|The numbers of items to return.|
|page_offset|integer|false|none|The number of items to skip before starting to collect the result set.|
|start_date_gte|string(date-time)|false|none|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte key to receive only the selected period.<br>|
|start_date_lte|string(date-time)|false|none|Returns objects less or equal the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period<br>|
|states|[string]|false|none|Return objects with specific states.<br>The value can be repeated to retrieve multiple matching values (OR condition).|

<h2 id="tocS_ListTaskInstanceForm">ListTaskInstanceForm</h2>
<!-- backwards compatibility -->
<a id="schemalisttaskinstanceform"></a>
<a id="schema_ListTaskInstanceForm"></a>
<a id="tocSlisttaskinstanceform"></a>
<a id="tocslisttaskinstanceform"></a>

```json
{
  "dag_ids": [
    "string"
  ],
  "duration_gte": 0,
  "duration_lte": 0,
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "execution_date_gte": "1970-01-01T00:00:00Z",
  "execution_date_lte": "1970-01-01T00:00:00Z",
  "pool": [
    "string"
  ],
  "queue": [
    "string"
  ],
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "state": [
    "success"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_ids|[string]|false|none|Return objects with specific DAG IDs.<br>The value can be repeated to retrieve multiple matching values (OR condition).|
|duration_gte|number|false|none|Returns objects greater than or equal to the specified values.<br><br>This can be combined with duration_lte parameter to receive only the selected period.<br>|
|duration_lte|number|false|none|Returns objects less than or equal to the specified values.<br><br>This can be combined with duration_gte parameter to receive only the selected range.<br>|
|end_date_gte|string(date-time)|false|none|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|end_date_lte|string(date-time)|false|none|Returns objects less than or equal to the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|execution_date_gte|string(date-time)|false|none|Returns objects greater or equal to the specified date.<br><br>This can be combined with execution_date_lte parameter to receive only the selected period.<br>|
|execution_date_lte|string(date-time)|false|none|Returns objects less than or equal to the specified date.<br><br>This can be combined with execution_date_gte parameter to receive only the selected period.<br>|
|pool|[string]|false|none|The value can be repeated to retrieve multiple matching values (OR condition).|
|queue|[string]|false|none|The value can be repeated to retrieve multiple matching values (OR condition).|
|start_date_gte|string(date-time)|false|none|Returns objects greater or equal the specified date.<br><br>This can be combined with start_date_lte parameter to receive only the selected period.<br>|
|start_date_lte|string(date-time)|false|none|Returns objects less or equal the specified date.<br><br>This can be combined with start_date_gte parameter to receive only the selected period.<br>|
|state|[[TaskState](#schemataskstate)]|false|none|The value can be repeated to retrieve multiple matching values (OR condition).|

#### Enumerated Values

|Property|Value|
|---|---|
|state|success|
|state|running|
|state|failed|
|state|upstream_failed|
|state|skipped|
|state|up_for_retry|
|state|up_for_reschedule|
|state|queued|
|state|none|
|state|scheduled|
|state|deferred|
|state|removed|
|state|restarting|

<h2 id="tocS_MetadatabaseStatus">MetadatabaseStatus</h2>
<!-- backwards compatibility -->
<a id="schemametadatabasestatus"></a>
<a id="schema_MetadatabaseStatus"></a>
<a id="tocSmetadatabasestatus"></a>
<a id="tocsmetadatabasestatus"></a>

```json
{
  "status": "healthy"
}
```

The status of the metadatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[HealthStatus](#schemahealthstatus)|false|none|Health status|

#### Enumerated Values

|Property|Value|
|---|---|
|status|healthy|
|status|unhealthy|

<h2 id="tocS_PluginCollection">PluginCollection</h2>
<!-- backwards compatibility -->
<a id="schemaplugincollection"></a>
<a id="schema_PluginCollection"></a>
<a id="tocSplugincollection"></a>
<a id="tocsplugincollection"></a>

```json
{
  "plugins": [
    {
      "appbuilder_menu_items": [
        {}
      ],
      "appbuilder_views": [
        {}
      ],
      "executors": [
        "string"
      ],
      "flask_blueprints": [
        {}
      ],
      "global_operator_extra_links": [
        {}
      ],
      "hooks": [
        "string"
      ],
      "macros": [
        {}
      ],
      "name": "string",
      "operator_extra_links": [
        {}
      ],
      "source": "string"
    }
  ],
  "total_entries": 0
}
```

A collection of plugin.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plugins|[[PluginCollectionItem](#schemaplugincollectionitem)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_PluginCollectionItem">PluginCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemaplugincollectionitem"></a>
<a id="schema_PluginCollectionItem"></a>
<a id="tocSplugincollectionitem"></a>
<a id="tocsplugincollectionitem"></a>

```json
{
  "appbuilder_menu_items": [
    {}
  ],
  "appbuilder_views": [
    {}
  ],
  "executors": [
    "string"
  ],
  "flask_blueprints": [
    {}
  ],
  "global_operator_extra_links": [
    {}
  ],
  "hooks": [
    "string"
  ],
  "macros": [
    {}
  ],
  "name": "string",
  "operator_extra_links": [
    {}
  ],
  "source": "string"
}
```

A plugin Item.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appbuilder_menu_items|[object \| null]|false|none|The Flask Appbuilder menu items|
|appbuilder_views|[object \| null]|false|none|The appuilder views|
|executors|[string \| null]|false|none|The plugin executors|
|flask_blueprints|[object \| null]|false|none|The flask blueprints|
|global_operator_extra_links|[object \| null]|false|none|The global operator extra links|
|hooks|[string \| null]|false|none|The plugin hooks|
|macros|[object \| null]|false|none|The plugin macros|
|name|string|false|none|The name of the plugin|
|operator_extra_links|[object \| null]|false|none|Operator extra links|
|source|string \| null|false|none|The plugin source|

<h2 id="tocS_Pool">Pool</h2>
<!-- backwards compatibility -->
<a id="schemapool"></a>
<a id="schema_Pool"></a>
<a id="tocSpool"></a>
<a id="tocspool"></a>

```json
{
  "description": "string",
  "name": "string",
  "occupied_slots": 0,
  "open_slots": 0,
  "queued_slots": 0,
  "slots": 0,
  "used_slots": 0
}
```

The pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|The description of the pool.<br><br>*New in version 2.3.0*<br>|
|name|string|false|none|The name of pool.|
|occupied_slots|integer|false|read-only|The number of slots used by running/queued tasks at the moment.|
|open_slots|integer|false|read-only|The number of free slots at the moment.|
|queued_slots|integer|false|read-only|The number of slots used by queued tasks at the moment.|
|slots|integer|false|none|The maximum number of slots that can be assigned to tasks. One job may occupy one or more slots.<br>|
|used_slots|integer|false|read-only|The number of slots used by running tasks at the moment.|

<h2 id="tocS_PoolCollection">PoolCollection</h2>
<!-- backwards compatibility -->
<a id="schemapoolcollection"></a>
<a id="schema_PoolCollection"></a>
<a id="tocSpoolcollection"></a>
<a id="tocspoolcollection"></a>

```json
{
  "pools": [
    {
      "description": "string",
      "name": "string",
      "occupied_slots": 0,
      "open_slots": 0,
      "queued_slots": 0,
      "slots": 0,
      "used_slots": 0
    }
  ],
  "total_entries": 0
}
```

Collection of pools.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pools|[[Pool](#schemapool)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "description": "string",
  "package_name": "string",
  "version": "string"
}
```

The provider

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the provider.|
|package_name|string|false|none|The package name of the provider.|
|version|string|false|none|The version of the provider.|

<h2 id="tocS_ProviderCollection">ProviderCollection</h2>
<!-- backwards compatibility -->
<a id="schemaprovidercollection"></a>
<a id="schema_ProviderCollection"></a>
<a id="tocSprovidercollection"></a>
<a id="tocsprovidercollection"></a>

```json
{
  "providers": [
    {
      "description": "string",
      "package_name": "string",
      "version": "string"
    }
  ]
}
```

Collection of providers.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[Provider](#schemaprovider)]|false|none|none|

<h2 id="tocS_RelativeDelta">RelativeDelta</h2>
<!-- backwards compatibility -->
<a id="schemarelativedelta"></a>
<a id="schema_RelativeDelta"></a>
<a id="tocSrelativedelta"></a>
<a id="tocsrelativedelta"></a>

```json
{
  "__type": "string",
  "day": 0,
  "days": 0,
  "hour": 0,
  "hours": 0,
  "leapdays": 0,
  "microsecond": 0,
  "microseconds": 0,
  "minute": 0,
  "minutes": 0,
  "month": 0,
  "months": 0,
  "second": 0,
  "seconds": 0,
  "year": 0,
  "years": 0
}
```

Relative delta

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__type|string|true|none|none|
|day|integer|true|none|none|
|days|integer|true|none|none|
|hour|integer|true|none|none|
|hours|integer|true|none|none|
|leapdays|integer|true|none|none|
|microsecond|integer|true|none|none|
|microseconds|integer|true|none|none|
|minute|integer|true|none|none|
|minutes|integer|true|none|none|
|month|integer|true|none|none|
|months|integer|true|none|none|
|second|integer|true|none|none|
|seconds|integer|true|none|none|
|year|integer|true|none|none|
|years|integer|true|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "name": "string"
}
```

A resource on which permissions are granted.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the resource|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "actions": [
    {
      "action": {
        "name": "string"
      },
      "resource": {
        "name": "string"
      }
    }
  ],
  "name": "string"
}
```

a role item.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[ActionResource](#schemaactionresource)]|false|none|none|
|name|string|false|none|The name of the role<br><br>*Changed in version 2.3.0*&#58; A minimum character length requirement ('minLength') is added.<br>|

<h2 id="tocS_RoleCollection">RoleCollection</h2>
<!-- backwards compatibility -->
<a id="schemarolecollection"></a>
<a id="schema_RoleCollection"></a>
<a id="tocSrolecollection"></a>
<a id="tocsrolecollection"></a>

```json
{
  "roles": [
    {
      "actions": [
        {
          "action": {
            "name": "string"
          },
          "resource": {
            "name": "string"
          }
        }
      ],
      "name": "string"
    }
  ],
  "total_entries": 0
}
```

A collection of roles.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[Role](#schemarole)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_SLAMiss">SLAMiss</h2>
<!-- backwards compatibility -->
<a id="schemaslamiss"></a>
<a id="schema_SLAMiss"></a>
<a id="tocSslamiss"></a>
<a id="tocsslamiss"></a>

```json
{
  "dag_id": "string",
  "description": "string",
  "email_sent": true,
  "execution_date": "string",
  "notification_sent": true,
  "task_id": "string",
  "timestamp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|none|The DAG ID.|
|description|string \| null|false|none|none|
|email_sent|boolean|false|none|none|
|execution_date|string(datetime)|false|none|none|
|notification_sent|boolean|false|none|none|
|task_id|string|false|read-only|The task ID.|
|timestamp|string(datetime)|false|none|none|

<h2 id="tocS_ScheduleInterval">ScheduleInterval</h2>
<!-- backwards compatibility -->
<a id="schemascheduleinterval"></a>
<a id="schema_ScheduleInterval"></a>
<a id="tocSscheduleinterval"></a>
<a id="tocsscheduleinterval"></a>

```json
{
  "__type": "string",
  "days": 0,
  "microseconds": 0,
  "seconds": 0
}
```

Schedule interval. Defines how often DAG runs, this object gets added to your latest task instance's
execution_date to figure out the next schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[TimeDelta](#schematimedelta)|false|none|Time delta|
|*anyOf*|[RelativeDelta](#schemarelativedelta)|false|none|Relative delta|
|*anyOf*|[CronExpression](#schemacronexpression)|false|none|Cron expression|

<h2 id="tocS_SchedulerStatus">SchedulerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerstatus"></a>
<a id="schema_SchedulerStatus"></a>
<a id="tocSschedulerstatus"></a>
<a id="tocsschedulerstatus"></a>

```json
{
  "latest_scheduler_heartbeat": "string",
  "status": "healthy"
}
```

The status and the latest scheduler heartbeat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latest_scheduler_heartbeat|string(datetime) \| null|false|read-only|The time the scheduler last do a heartbeat.|
|status|[HealthStatus](#schemahealthstatus)|false|none|Health status|

#### Enumerated Values

|Property|Value|
|---|---|
|status|healthy|
|status|unhealthy|

<h2 id="tocS_SetDagRunNote">SetDagRunNote</h2>
<!-- backwards compatibility -->
<a id="schemasetdagrunnote"></a>
<a id="schema_SetDagRunNote"></a>
<a id="tocSsetdagrunnote"></a>
<a id="tocssetdagrunnote"></a>

```json
{
  "note": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|false|none|Custom notes left by users for this Dag Run.|

<h2 id="tocS_SetTaskInstanceNote">SetTaskInstanceNote</h2>
<!-- backwards compatibility -->
<a id="schemasettaskinstancenote"></a>
<a id="schema_SetTaskInstanceNote"></a>
<a id="tocSsettaskinstancenote"></a>
<a id="tocssettaskinstancenote"></a>

```json
{
  "note": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|true|none|The custom note to set for this Task Instance.|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "name": "string"
}
```

Tag

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "class_ref": {
    "class_name": "string",
    "module_path": "string"
  },
  "depends_on_past": true,
  "downstream_task_ids": [
    "string"
  ],
  "end_date": "1970-01-01T00:00:00Z",
  "execution_timeout": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "extra_links": [
    {
      "class_ref": {
        "class_name": "string",
        "module_path": "string"
      }
    }
  ],
  "is_mapped": true,
  "owner": "string",
  "pool": "string",
  "pool_slots": 0,
  "priority_weight": 0,
  "queue": "string",
  "retries": 0,
  "retry_delay": {
    "__type": "string",
    "days": 0,
    "microseconds": 0,
    "seconds": 0
  },
  "retry_exponential_backoff": true,
  "start_date": "1970-01-01T00:00:00Z",
  "sub_dag": {
    "dag_id": "string",
    "default_view": "string",
    "description": "string",
    "file_token": "string",
    "fileloc": "string",
    "has_import_errors": true,
    "has_task_concurrency_limits": true,
    "is_active": true,
    "is_paused": true,
    "is_subdag": true,
    "last_expired": "1970-01-01T00:00:00Z",
    "last_parsed_time": "1970-01-01T00:00:00Z",
    "last_pickled": "1970-01-01T00:00:00Z",
    "max_active_runs": 0,
    "max_active_tasks": 0,
    "next_dagrun": "1970-01-01T00:00:00Z",
    "next_dagrun_create_after": "1970-01-01T00:00:00Z",
    "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
    "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
    "owners": [
      "string"
    ],
    "pickle_id": "string",
    "root_dag_id": "string",
    "schedule_interval": {
      "__type": "string",
      "days": 0,
      "microseconds": 0,
      "seconds": 0
    },
    "scheduler_lock": true,
    "tags": [
      {
        "name": "string"
      }
    ],
    "timetable_description": "string"
  },
  "task_id": "string",
  "template_fields": [
    "string"
  ],
  "trigger_rule": "all_success",
  "ui_color": "string",
  "ui_fgcolor": "string",
  "wait_for_downstream": true,
  "weight_rule": "downstream"
}
```

For details see:
[airflow.models.BaseOperator](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/index.html#airflow.models.BaseOperator)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class_ref|[ClassReference](#schemaclassreference)|false|none|Class reference|
|depends_on_past|boolean|false|read-only|none|
|downstream_task_ids|[string]|false|read-only|none|
|end_date|string(date-time) \| null|false|read-only|none|
|execution_timeout|[TimeDelta](#schematimedelta)|false|none|Time delta|
|extra_links|[object]|false|read-only|none|
|is_mapped|boolean|false|read-only|none|
|owner|string|false|read-only|none|
|pool|string|false|read-only|none|
|pool_slots|number|false|read-only|none|
|priority_weight|number|false|read-only|none|
|queue|string \| null|false|read-only|none|
|retries|number|false|read-only|none|
|retry_delay|[TimeDelta](#schematimedelta)|false|none|Time delta|
|retry_exponential_backoff|boolean|false|read-only|none|
|start_date|string(date-time)|false|read-only|none|
|sub_dag|[DAG](#schemadag)|false|none|DAG|
|task_id|string|false|read-only|none|
|template_fields|[string]|false|read-only|none|
|trigger_rule|[TriggerRule](#schematriggerrule)|false|none|Trigger rule.<br><br>*Changed in version 2.2.0*&#58; 'none_failed_min_one_success' is added as a possible value.<br>|
|ui_color|[Color](#schemacolor)|false|none|Color in hexadecimal notation.|
|ui_fgcolor|[Color](#schemacolor)|false|none|Color in hexadecimal notation.|
|wait_for_downstream|boolean|false|read-only|none|
|weight_rule|[WeightRule](#schemaweightrule)|false|none|Weight rule.|

#### Enumerated Values

|Property|Value|
|---|---|
|trigger_rule|all_success|
|trigger_rule|all_failed|
|trigger_rule|all_done|
|trigger_rule|one_success|
|trigger_rule|one_failed|
|trigger_rule|none_failed|
|trigger_rule|none_skipped|
|trigger_rule|none_failed_or_skipped|
|trigger_rule|none_failed_min_one_success|
|trigger_rule|dummy|
|weight_rule|downstream|
|weight_rule|upstream|
|weight_rule|absolute|

<h2 id="tocS_TaskCollection">TaskCollection</h2>
<!-- backwards compatibility -->
<a id="schemataskcollection"></a>
<a id="schema_TaskCollection"></a>
<a id="tocStaskcollection"></a>
<a id="tocstaskcollection"></a>

```json
{
  "tasks": [
    {
      "class_ref": {
        "class_name": "string",
        "module_path": "string"
      },
      "depends_on_past": true,
      "downstream_task_ids": [
        "string"
      ],
      "end_date": "1970-01-01T00:00:00Z",
      "execution_timeout": {
        "__type": "string",
        "days": 0,
        "microseconds": 0,
        "seconds": 0
      },
      "extra_links": [
        {
          "class_ref": {
            "class_name": "string",
            "module_path": "string"
          }
        }
      ],
      "is_mapped": true,
      "owner": "string",
      "pool": "string",
      "pool_slots": 0,
      "priority_weight": 0,
      "queue": "string",
      "retries": 0,
      "retry_delay": {
        "__type": "string",
        "days": 0,
        "microseconds": 0,
        "seconds": 0
      },
      "retry_exponential_backoff": true,
      "start_date": "1970-01-01T00:00:00Z",
      "sub_dag": {
        "dag_id": "string",
        "default_view": "string",
        "description": "string",
        "file_token": "string",
        "fileloc": "string",
        "has_import_errors": true,
        "has_task_concurrency_limits": true,
        "is_active": true,
        "is_paused": true,
        "is_subdag": true,
        "last_expired": "1970-01-01T00:00:00Z",
        "last_parsed_time": "1970-01-01T00:00:00Z",
        "last_pickled": "1970-01-01T00:00:00Z",
        "max_active_runs": 0,
        "max_active_tasks": 0,
        "next_dagrun": "1970-01-01T00:00:00Z",
        "next_dagrun_create_after": "1970-01-01T00:00:00Z",
        "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
        "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
        "owners": [
          "string"
        ],
        "pickle_id": "string",
        "root_dag_id": "string",
        "schedule_interval": {
          "__type": "string",
          "days": 0,
          "microseconds": 0,
          "seconds": 0
        },
        "scheduler_lock": true,
        "tags": [
          {
            "name": "string"
          }
        ],
        "timetable_description": "string"
      },
      "task_id": "string",
      "template_fields": [
        "string"
      ],
      "trigger_rule": "all_success",
      "ui_color": "string",
      "ui_fgcolor": "string",
      "wait_for_downstream": true,
      "weight_rule": "downstream"
    }
  ]
}
```

Collection of tasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|[[Task](#schematask)]|false|none|none|

<h2 id="tocS_TaskInstance">TaskInstance</h2>
<!-- backwards compatibility -->
<a id="schemataskinstance"></a>
<a id="schema_TaskInstance"></a>
<a id="tocStaskinstance"></a>
<a id="tocstaskinstance"></a>

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "duration": 0,
  "end_date": "string",
  "execution_date": "string",
  "executor_config": "string",
  "hostname": "string",
  "map_index": 0,
  "max_tries": 0,
  "note": "string",
  "operator": "string",
  "pid": 0,
  "pool": "string",
  "pool_slots": 0,
  "priority_weight": 0,
  "queue": "string",
  "queued_when": "string",
  "rendered_fields": {},
  "sla_miss": {
    "dag_id": "string",
    "description": "string",
    "email_sent": true,
    "execution_date": "string",
    "notification_sent": true,
    "task_id": "string",
    "timestamp": "string"
  },
  "start_date": "string",
  "state": "success",
  "task_id": "string",
  "trigger": {
    "classpath": "string",
    "created_date": "string",
    "id": 0,
    "kwargs": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "dag_id": "string",
    "end_date": "string",
    "executor_class": "string",
    "hostname": "string",
    "id": 0,
    "job_type": "string",
    "latest_heartbeat": "string",
    "start_date": "string",
    "state": "string",
    "unixname": "string"
  },
  "try_number": 0,
  "unixname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|none|none|
|dag_run_id|string|false|none|The DagRun ID for this task instance<br><br>*New in version 2.3.0*<br>|
|duration|number \| null|false|none|none|
|end_date|string(datetime) \| null|false|none|none|
|execution_date|string(datetime)|false|none|none|
|executor_config|string|false|none|none|
|hostname|string|false|none|none|
|map_index|integer|false|none|none|
|max_tries|integer|false|none|none|
|note|string \| null|false|none|Contains manually entered notes by the user about the TaskInstance.<br><br>*New in version 2.5.0*<br>|
|operator|string \| null|false|none|*Changed in version 2.1.1*&#58; Field becomes nullable.<br>|
|pid|integer \| null|false|none|none|
|pool|string|false|none|none|
|pool_slots|integer|false|none|none|
|priority_weight|integer \| null|false|none|none|
|queue|string \| null|false|none|none|
|queued_when|string \| null|false|none|none|
|rendered_fields|object|false|none|JSON object describing rendered fields.<br><br>*New in version 2.3.0*<br>|
|sla_miss|[SLAMiss](#schemaslamiss)|false|none|none|
|start_date|string(datetime) \| null|false|none|none|
|state|[TaskState](#schemataskstate)|false|none|Task state.<br><br>*Changed in version 2.0.2*&#58; 'removed' is added as a possible value.<br><br>*Changed in version 2.2.0*&#58; 'deferred' is added as a possible value.<br><br>*Changed in version 2.4.0*&#58; 'sensing' state has been removed.<br>*Changed in version 2.4.2*&#58; 'restarting' is added as a possible value<br>|
|task_id|string|false|none|none|
|trigger|[Trigger](#schematrigger)|false|none|none|
|triggerer_job|[Job](#schemajob)|false|none|none|
|try_number|integer|false|none|none|
|unixname|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|success|
|state|running|
|state|failed|
|state|upstream_failed|
|state|skipped|
|state|up_for_retry|
|state|up_for_reschedule|
|state|queued|
|state|none|
|state|scheduled|
|state|deferred|
|state|removed|
|state|restarting|

<h2 id="tocS_TaskInstanceCollection">TaskInstanceCollection</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancecollection"></a>
<a id="schema_TaskInstanceCollection"></a>
<a id="tocStaskinstancecollection"></a>
<a id="tocstaskinstancecollection"></a>

```json
{
  "task_instances": [
    {
      "dag_id": "string",
      "dag_run_id": "string",
      "duration": 0,
      "end_date": "string",
      "execution_date": "string",
      "executor_config": "string",
      "hostname": "string",
      "map_index": 0,
      "max_tries": 0,
      "note": "string",
      "operator": "string",
      "pid": 0,
      "pool": "string",
      "pool_slots": 0,
      "priority_weight": 0,
      "queue": "string",
      "queued_when": "string",
      "rendered_fields": {},
      "sla_miss": {
        "dag_id": "string",
        "description": "string",
        "email_sent": true,
        "execution_date": "string",
        "notification_sent": true,
        "task_id": "string",
        "timestamp": "string"
      },
      "start_date": "string",
      "state": "success",
      "task_id": "string",
      "trigger": {
        "classpath": "string",
        "created_date": "string",
        "id": 0,
        "kwargs": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "dag_id": "string",
        "end_date": "string",
        "executor_class": "string",
        "hostname": "string",
        "id": 0,
        "job_type": "string",
        "latest_heartbeat": "string",
        "start_date": "string",
        "state": "string",
        "unixname": "string"
      },
      "try_number": 0,
      "unixname": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of task instances.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_instances|[[TaskInstance](#schemataskinstance)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_TaskInstanceReference">TaskInstanceReference</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancereference"></a>
<a id="schema_TaskInstanceReference"></a>
<a id="tocStaskinstancereference"></a>
<a id="tocstaskinstancereference"></a>

```json
{
  "dag_id": "string",
  "dag_run_id": "string",
  "execution_date": "string",
  "task_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|read-only|The DAG ID.|
|dag_run_id|string|false|read-only|The DAG run ID.|
|execution_date|string(datetime)|false|read-only|none|
|task_id|string|false|read-only|The task ID.|

<h2 id="tocS_TaskInstanceReferenceCollection">TaskInstanceReferenceCollection</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancereferencecollection"></a>
<a id="schema_TaskInstanceReferenceCollection"></a>
<a id="tocStaskinstancereferencecollection"></a>
<a id="tocstaskinstancereferencecollection"></a>

```json
{
  "task_instances": [
    {
      "dag_id": "string",
      "dag_run_id": "string",
      "execution_date": "string",
      "task_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_instances|[[TaskInstanceReference](#schemataskinstancereference)]|false|none|none|

<h2 id="tocS_TaskOutletDatasetReference">TaskOutletDatasetReference</h2>
<!-- backwards compatibility -->
<a id="schemataskoutletdatasetreference"></a>
<a id="schema_TaskOutletDatasetReference"></a>
<a id="tocStaskoutletdatasetreference"></a>
<a id="tocstaskoutletdatasetreference"></a>

```json
{
  "created_at": "string",
  "dag_id": "string",
  "task_id": "string",
  "updated_at": "string"
}
```

A datasets reference to an upstream task.

*New in version 2.4.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|The dataset creation time|
|dag_id|string \| null|false|none|The DAG ID that updates the dataset.|
|task_id|string \| null|false|none|The task ID that updates the dataset.|
|updated_at|string|false|none|The dataset update time|

<h2 id="tocS_TaskState">TaskState</h2>
<!-- backwards compatibility -->
<a id="schemataskstate"></a>
<a id="schema_TaskState"></a>
<a id="tocStaskstate"></a>
<a id="tocstaskstate"></a>

```json
"success"
```

Task state.

*Changed in version 2.0.2*&#58; 'removed' is added as a possible value.

*Changed in version 2.2.0*&#58; 'deferred' is added as a possible value.

*Changed in version 2.4.0*&#58; 'sensing' state has been removed.
*Changed in version 2.4.2*&#58; 'restarting' is added as a possible value

<h2 id="tocS_TimeDelta">TimeDelta</h2>
<!-- backwards compatibility -->
<a id="schematimedelta"></a>
<a id="schema_TimeDelta"></a>
<a id="tocStimedelta"></a>
<a id="tocstimedelta"></a>

```json
{
  "__type": "string",
  "days": 0,
  "microseconds": 0,
  "seconds": 0
}
```

Time delta

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__type|string|true|none|none|
|days|integer|true|none|none|
|microseconds|integer|true|none|none|
|seconds|integer|true|none|none|

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_Trigger">Trigger</h2>
<!-- backwards compatibility -->
<a id="schematrigger"></a>
<a id="schema_Trigger"></a>
<a id="tocStrigger"></a>
<a id="tocstrigger"></a>

```json
{
  "classpath": "string",
  "created_date": "string",
  "id": 0,
  "kwargs": "string",
  "triggerer_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classpath|string|false|none|none|
|created_date|string(datetime)|false|none|none|
|id|integer|false|none|none|
|kwargs|string|false|none|none|
|triggerer_id|integer \| null|false|none|none|

<h2 id="tocS_TriggerRule">TriggerRule</h2>
<!-- backwards compatibility -->
<a id="schematriggerrule"></a>
<a id="schema_TriggerRule"></a>
<a id="tocStriggerrule"></a>
<a id="tocstriggerrule"></a>

```json
"all_success"
```

Trigger rule.

*Changed in version 2.2.0*&#58; 'none_failed_min_one_success' is added as a possible value.

<h2 id="tocS_UpdateDagRunState">UpdateDagRunState</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedagrunstate"></a>
<a id="schema_UpdateDagRunState"></a>
<a id="tocSupdatedagrunstate"></a>
<a id="tocsupdatedagrunstate"></a>

```json
{
  "state": "success"
}
```

Modify the state of a DAG run.

*New in version 2.2.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|The state to set this DagRun|

#### Enumerated Values

|Property|Value|
|---|---|
|state|success|
|state|failed|
|state|queued|

<h2 id="tocS_UpdateTaskInstance">UpdateTaskInstance</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskinstance"></a>
<a id="schema_UpdateTaskInstance"></a>
<a id="tocSupdatetaskinstance"></a>
<a id="tocsupdatetaskinstance"></a>

```json
{
  "dry_run": false,
  "new_state": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dry_run|boolean|false|none|If set, don't actually run this operation. The response will contain the task instance<br>planned to be affected, but won't be modified in any way.<br>|
|new_state|string|false|none|Expected new state.|

#### Enumerated Values

|Property|Value|
|---|---|
|new_state|success|
|new_state|failed|

<h2 id="tocS_UpdateTaskInstancesState">UpdateTaskInstancesState</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskinstancesstate"></a>
<a id="schema_UpdateTaskInstancesState"></a>
<a id="tocSupdatetaskinstancesstate"></a>
<a id="tocsupdatetaskinstancesstate"></a>

```json
{
  "dag_run_id": "string",
  "dry_run": true,
  "execution_date": "string",
  "include_downstream": true,
  "include_future": true,
  "include_past": true,
  "include_upstream": true,
  "new_state": "success",
  "task_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_run_id|string|false|none|The task instance's DAG run ID. Either set this or execution_date but not both.<br><br>*New in version 2.3.0*<br>|
|dry_run|boolean|false|none|If set, don't actually run this operation. The response will contain a list of task instances<br>planned to be affected, but won't be modified in any way.<br>|
|execution_date|string(datetime)|false|none|The execution date. Either set this or dag_run_id but not both.|
|include_downstream|boolean|false|none|If set to true, downstream tasks are also affected.|
|include_future|boolean|false|none|If set to True, also tasks from future DAG Runs are affected.|
|include_past|boolean|false|none|If set to True, also tasks from past DAG Runs are affected.|
|include_upstream|boolean|false|none|If set to true, upstream tasks are also affected.|
|new_state|string|false|none|Expected new state.|
|task_id|string|false|none|The task ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|new_state|success|
|new_state|failed|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "active": true,
  "changed_on": "string",
  "created_on": "string",
  "email": "string",
  "failed_login_count": 0,
  "first_name": "string",
  "last_login": "string",
  "last_name": "string",
  "login_count": 0,
  "roles": [
    {
      "name": "string"
    }
  ],
  "username": "string",
  "password": "string"
}
```

A user object with sensitive data.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|read-only|Whether the user is active|
|changed_on|string(datetime) \| null|false|read-only|The date user was changed|
|created_on|string(datetime) \| null|false|read-only|The date user was created|
|email|string|false|none|The user's email.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|
|failed_login_count|integer \| null|false|read-only|The number of times the login failed|
|first_name|string|false|none|The user's first name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|last_login|string(datetime) \| null|false|read-only|The last user login|
|last_name|string|false|none|The user's last name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|login_count|integer \| null|false|read-only|The login count|
|roles|[object \| null]|false|none|User roles.<br><br>*Changed in version 2.2.0*&#58; Field is no longer read-only.<br>|
|username|string|false|none|The username.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|
|password|string|false|write-only|none|

<h2 id="tocS_UserCollection">UserCollection</h2>
<!-- backwards compatibility -->
<a id="schemausercollection"></a>
<a id="schema_UserCollection"></a>
<a id="tocSusercollection"></a>
<a id="tocsusercollection"></a>

```json
{
  "users": [
    {
      "active": true,
      "changed_on": "string",
      "created_on": "string",
      "email": "string",
      "failed_login_count": 0,
      "first_name": "string",
      "last_login": "string",
      "last_name": "string",
      "login_count": 0,
      "roles": [
        {
          "name": "string"
        }
      ],
      "username": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of users.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[[UserCollectionItem](#schemausercollectionitem)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_UserCollectionItem">UserCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemausercollectionitem"></a>
<a id="schema_UserCollectionItem"></a>
<a id="tocSusercollectionitem"></a>
<a id="tocsusercollectionitem"></a>

```json
{
  "active": true,
  "changed_on": "string",
  "created_on": "string",
  "email": "string",
  "failed_login_count": 0,
  "first_name": "string",
  "last_login": "string",
  "last_name": "string",
  "login_count": 0,
  "roles": [
    {
      "name": "string"
    }
  ],
  "username": "string"
}
```

A user object.

*New in version 2.1.0*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|read-only|Whether the user is active|
|changed_on|string(datetime) \| null|false|read-only|The date user was changed|
|created_on|string(datetime) \| null|false|read-only|The date user was created|
|email|string|false|none|The user's email.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|
|failed_login_count|integer \| null|false|read-only|The number of times the login failed|
|first_name|string|false|none|The user's first name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|last_login|string(datetime) \| null|false|read-only|The last user login|
|last_name|string|false|none|The user's last name.<br><br>*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.<br>|
|login_count|integer \| null|false|read-only|The login count|
|roles|[object \| null]|false|none|User roles.<br><br>*Changed in version 2.2.0*&#58; Field is no longer read-only.<br>|
|username|string|false|none|The username.<br><br>*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.<br>|

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "description": "string",
  "key": "string",
  "value": "string"
}
```

Full representation of Variable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|The description of the variable.<br><br>*New in version 2.4.0*<br>|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_VariableCollection">VariableCollection</h2>
<!-- backwards compatibility -->
<a id="schemavariablecollection"></a>
<a id="schema_VariableCollection"></a>
<a id="tocSvariablecollection"></a>
<a id="tocsvariablecollection"></a>

```json
{
  "variables": [
    {
      "description": "string",
      "key": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of variables.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variables|[[VariableCollectionItem](#schemavariablecollectionitem)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_VariableCollectionItem">VariableCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemavariablecollectionitem"></a>
<a id="schema_VariableCollectionItem"></a>
<a id="tocSvariablecollectionitem"></a>
<a id="tocsvariablecollectionitem"></a>

```json
{
  "description": "string",
  "key": "string"
}
```

XCom entry collection item.
The value field are only available when retrieving a single object due to the sensitivity of this data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|The description of the variable.<br><br>*New in version 2.4.0*<br>|
|key|string|false|none|none|

<h2 id="tocS_VersionInfo">VersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaversioninfo"></a>
<a id="schema_VersionInfo"></a>
<a id="tocSversioninfo"></a>
<a id="tocsversioninfo"></a>

```json
{
  "git_version": "string",
  "version": "string"
}
```

Version information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|git_version|string \| null|false|none|The git version (including git commit hash)|
|version|string|false|none|The version of Airflow|

<h2 id="tocS_WeightRule">WeightRule</h2>
<!-- backwards compatibility -->
<a id="schemaweightrule"></a>
<a id="schema_WeightRule"></a>
<a id="tocSweightrule"></a>
<a id="tocsweightrule"></a>

```json
"downstream"
```

Weight rule.

<h2 id="tocS_XCom">XCom</h2>
<!-- backwards compatibility -->
<a id="schemaxcom"></a>
<a id="schema_XCom"></a>
<a id="tocSxcom"></a>
<a id="tocsxcom"></a>

```json
{
  "dag_id": "string",
  "execution_date": "string",
  "key": "string",
  "task_id": "string",
  "timestamp": "string",
  "value": "string"
}
```

Full representations of XCom entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|none|none|
|execution_date|string(datetime)|false|none|none|
|key|string|false|none|none|
|task_id|string|false|none|none|
|timestamp|string(datetime)|false|none|none|
|value|string|false|none|The value|

<h2 id="tocS_XComCollection">XComCollection</h2>
<!-- backwards compatibility -->
<a id="schemaxcomcollection"></a>
<a id="schema_XComCollection"></a>
<a id="tocSxcomcollection"></a>
<a id="tocsxcomcollection"></a>

```json
{
  "xcom_entries": [
    {
      "dag_id": "string",
      "execution_date": "string",
      "key": "string",
      "task_id": "string",
      "timestamp": "string"
    }
  ],
  "total_entries": 0
}
```

Collection of XCom entries.

*Changed in version 2.1.0*&#58; 'total_entries' field is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xcom_entries|[[XComCollectionItem](#schemaxcomcollectionitem)]|false|none|none|
|total_entries|integer|false|none|Count of objects in the current result set.|

<h2 id="tocS_XComCollectionItem">XComCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemaxcomcollectionitem"></a>
<a id="schema_XComCollectionItem"></a>
<a id="tocSxcomcollectionitem"></a>
<a id="tocsxcomcollectionitem"></a>

```json
{
  "dag_id": "string",
  "execution_date": "string",
  "key": "string",
  "task_id": "string",
  "timestamp": "string"
}
```

XCom entry collection item.

The value field is only available when reading a single object due to the size of the value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|false|none|none|
|execution_date|string(datetime)|false|none|none|
|key|string|false|none|none|
|task_id|string|false|none|none|
|timestamp|string(datetime)|false|none|none|
