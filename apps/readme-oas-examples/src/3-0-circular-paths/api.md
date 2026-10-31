<h1 id="api-definition-with-a-circular-path-refs">API definition with a circular path $refs v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://httpbin.org/anything">https://httpbin.org/anything</a>

<h1 id="api-definition-with-a-circular-path-refs-default">Default</h1>

## get/anything

> Code samples

```bash
curl https://example.com/anything \
  -H 'Accept: application/json'
```

`GET /anything`

> Example responses

> 200 Response

```json
{
  "dateTime": "1970-01-01T00:00:00Z",
  "offsetAfter": {
    "id": "string",
    "rules": {}
  },
  "offsetBefore": {
    "id": "string",
    "rules": {}
  }
}
```

<h3 id="getanything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getanything-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTime|string(date-time)|false|none|none|
|offsetAfter|[offset](#schemaoffset)|false|none|none|
|offsetBefore|[offset](#schemaoffset)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## put/anything

> Code samples

```bash
curl https://example.com/anything \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /anything`

This operation is different because it has a circular ref array as a parameter and in its response, but not its request body.

<h3 id="putanything-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|content|header|[[SalesLine](#schemasalesline)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "stock": {}
  }
]
```

> 201 Response

```json
{
  "stock": {}
}
```

<h3 id="putanything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|OK|[SalesLine](#schemasalesline)|

<h3 id="putanything-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SalesLine](#schemasalesline)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/anything

> Code samples

```bash
curl https://example.com/anything \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "circular": {
      "id": "string",
      "rules": {}
    }
  }'
```

`POST /anything`

> Body parameter

```json
{
  "circular": {
    "id": "string",
    "rules": {}
  }
}
```

<h3 id="postanything-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» circular|body|[offset](#schemaoffset)|false|none|

<h3 id="postanything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_dateTime">dateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_dateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_offset">offset</h2>
<!-- backwards compatibility -->
<a id="schemaoffset"></a>
<a id="schema_offset"></a>
<a id="tocSoffset"></a>
<a id="tocsoffset"></a>

```json
{
  "id": "string",
  "rules": {
    "transitions": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|rules|[rules](#schemarules)|false|none|none|

<h2 id="tocS_offsetTransition">offsetTransition</h2>
<!-- backwards compatibility -->
<a id="schemaoffsettransition"></a>
<a id="schema_offsetTransition"></a>
<a id="tocSoffsettransition"></a>
<a id="tocsoffsettransition"></a>

```json
{
  "dateTime": "1970-01-01T00:00:00Z",
  "offsetAfter": {
    "id": "string",
    "rules": {}
  },
  "offsetBefore": {
    "id": "string",
    "rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTime|string(date-time)|false|none|none|
|offsetAfter|[offset](#schemaoffset)|false|none|none|
|offsetBefore|[offset](#schemaoffset)|false|none|none|

<h2 id="tocS_rules">rules</h2>
<!-- backwards compatibility -->
<a id="schemarules"></a>
<a id="schema_rules"></a>
<a id="tocSrules"></a>
<a id="tocsrules"></a>

```json
{
  "transitions": [
    {
      "dateTime": "1970-01-01T00:00:00Z",
      "offsetAfter": {},
      "offsetBefore": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transitions|[[offsetTransition](#schemaoffsettransition)]|false|none|none|

<h2 id="tocS_SalesLine">SalesLine</h2>
<!-- backwards compatibility -->
<a id="schemasalesline"></a>
<a id="schema_SalesLine"></a>
<a id="tocSsalesline"></a>
<a id="tocssalesline"></a>

```json
{
  "stock": {
    "test_param": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stock|[ProductStock](#schemaproductstock)|false|none|none|

<h2 id="tocS_ProductStock">ProductStock</h2>
<!-- backwards compatibility -->
<a id="schemaproductstock"></a>
<a id="schema_ProductStock"></a>
<a id="tocSproductstock"></a>
<a id="tocsproductstock"></a>

```json
{
  "test_param": [
    {
      "stock": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|test_param|[[SalesLine](#schemasalesline)]|false|none|none|
