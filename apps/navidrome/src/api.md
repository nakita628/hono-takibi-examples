<h1 id="navidrome-api">Navidrome API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Navidrome API v1. Spec-first, additive within v1. Clients discover implemented
capability modules through `GET /server` and never sniff versions.

Enums are open: new values may be added to any enum within v1. Clients must
accept values they do not recognise instead of failing.

Every operation declares `x-stability-level`: `alpha` operations may change or
disappear without notice, `beta` and `stable` operations only change additively.
A level is only ever raised, never lowered.

`HEAD` is accepted wherever `GET` is. A `405` response lists the allowed methods
in its `Allow` header.

Base URLs:

* <a href="https://raw.githubusercontent.com/api/v1">https://raw.githubusercontent.com/api/v1</a>

License: <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</a>

# Authentication

- HTTP Authentication, scheme: bearer Short-lived access token minted from a device grant. Not yet applied to any operation.

<h1 id="navidrome-api-server">server</h1>

Server discovery and the published OpenAPI document.

## Describe the server

<a id="opIdgetServerInfo"></a>

> Code samples

```bash
curl http://localhost:4533/api/v1/server \
  -H 'Accept: application/json'
```

`GET /server`

Returns the public server description. No authentication required.
Authenticated requests will additionally receive the implemented capability modules
once authentication is available.


> Example responses

> 200 Response

```json
{
  "name": "string",
  "serverVersion": "string",
  "specVersion": "string",
  "setupRequired": true,
  "loginMethods": [
    "password"
  ]
}
```

> 500 Response

```json
{
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "code": "validation",
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ]
}
```

<h3 id="describe-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server description.|[ServerInfo](#schemaserverinfo)|
|500|Internal Server Error|Unexpected server failure. Details are in the server log.|[Problem](#schemaproblem)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the OpenAPI document (JSON)

<a id="opIdgetOpenAPISpecJSON"></a>

> Code samples

```bash
curl http://localhost:4533/api/v1/openapi.json \
  -H 'Accept: application/json'
```

`GET /openapi.json`

The bundled OpenAPI document of the running server version. Supports ETag revalidation.

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-the-openapi-document-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The OpenAPI document.|Inline|
|304|Not Modified|Not modified.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Entity tag for `If-None-Match` revalidation.|
|304|ETag|string||Entity tag for `If-None-Match` revalidation.|

<aside class="success">
This operation does not require authentication
</aside>

## Get the OpenAPI document (YAML)

<a id="opIdgetOpenAPISpecYAML"></a>

> Code samples

```bash
curl http://localhost:4533/api/v1/openapi.yaml
```

`GET /openapi.yaml`

The bundled OpenAPI document of the running server version. Supports ETag revalidation.

<h3 id="get-the-openapi-document-yaml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The OpenAPI document.|Inline|
|304|Not Modified|Not modified.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Entity tag for `If-None-Match` revalidation.|
|304|ETag|string||Entity tag for `If-None-Match` revalidation.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ServerInfo">ServerInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserverinfo"></a>
<a id="schema_ServerInfo"></a>
<a id="tocSserverinfo"></a>
<a id="tocsserverinfo"></a>

```json
{
  "name": "string",
  "serverVersion": "string",
  "specVersion": "string",
  "setupRequired": true,
  "loginMethods": [
    "password"
  ]
}
```

Public server description. Everything an add-server screen needs before login.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Human-readable server product name.|
|serverVersion|string|true|none|Version of the running server build.|
|specVersion|string|true|none|Version of the OpenAPI document this server implements.|
|setupRequired|boolean|true|none|True until the first admin user has been created.|
|loginMethods|[string]|true|none|Login methods this server accepts. New methods may be added; clients ignore values they do not recognise.|

#### Enumerated Values

|Property|Value|
|---|---|
|loginMethods|password|

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "code": "validation",
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ]
}
```

RFC 9457 problem details, returned for every 4xx and 5xx response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|URI reference identifying the problem type. Omitted while the problem carries no semantics<br>beyond its HTTP status code, which RFC 9457 defines as `about:blank`. Problems with their<br>own semantics get their own URI; switch on `code` instead.<br>|
|title|string|true|none|Short human-readable summary, the same for all occurrences of this problem type.|
|status|integer|true|none|HTTP status code of this response.|
|detail|string|false|none|Human-readable explanation specific to this occurrence. Omitted for internal errors.|
|code|string|true|none|Machine-readable error code, and the value clients switch on. New codes may be added.|
|errors|[[ValidationError](#schemavalidationerror)]|false|none|Per-field failures. Present only when `code` is `validation`.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|validation|
|code|unauthorized|
|code|forbidden|
|code|not_found|
|code|method_not_allowed|
|code|unavailable|
|code|internal|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "field": "string",
  "message": "string"
}
```

One field-level validation failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Name of the offending query parameter, path parameter, or body field (dotted for nested).|
|message|string|true|none|Why the value was rejected.|
