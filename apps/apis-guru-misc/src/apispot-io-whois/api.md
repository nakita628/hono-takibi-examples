<h1 id="bulk-whois-api">Bulk WHOIS API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Domain API (WHOIS, Check, Batch)

Base URLs:

* <a href="http://localhost:5000">http://localhost:5000</a>

* <a href="https://apispot.io/api">https://apispot.io/api</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-KEY**, in: header. API Key can be found on your 'Account' page upon login.

<h1 id="bulk-whois-api-default">Default</h1>

## getBatches

<a id="opIdgetBatches"></a>

> Code samples

```bash
curl https://example.com/batch \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /batch`

Get your batches

> Example responses

> 200 Response

```json
{
  "batches": [
    {
      "completed": true,
      "count": 0,
      "created_at": "string",
      "id": "string",
      "operation": "string",
      "results": [
        null
      ],
      "status": "string"
    }
  ]
}
```

<h3 id="getbatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArrayOfBatch](#schemaarrayofbatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## createBatch

<a id="opIdcreateBatch"></a>

> Code samples

```bash
curl https://example.com/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "domains": [
      "foo.com",
      "foo.net",
      "foo.io"
    ],
    "operation": "whois",
    "options": {
      "format": "raw"
    }
  }'
```

`POST /batch`

Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.

> Body parameter

```json
{
  "domains": [
    "foo.com",
    "foo.net",
    "foo.io"
  ],
  "operation": "whois",
  "options": {
    "format": "raw"
  }
}
```

<h3 id="createbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» domains|body|[string]|true|none|
|» operation|body|string|true|none|
|» options|body|object|false|none|
|» » format|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operation|whois|
|» operation|check|
|» » format|raw|
|» » format|formatted|
|» » format|json|

> Example responses

> 200 Response

```json
{
  "completed": true,
  "count": 0,
  "created_at": "string",
  "id": "string",
  "operation": "string",
  "results": [
    null
  ],
  "status": "string"
}
```

<h3 id="createbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Batch](#schemabatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## getBatch

<a id="opIdgetBatch"></a>

> Code samples

```bash
curl https://example.com/batch/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /batch/{id}`

Get batch

<h3 id="getbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Batch ID|

> Example responses

> 200 Response

```json
{
  "completed": true,
  "count": 0,
  "created_at": "string",
  "id": "string",
  "operation": "string",
  "results": [
    null
  ],
  "status": "string"
}
```

<h3 id="getbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Batch](#schemabatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## deleteBatch

<a id="opIddeleteBatch"></a>

> Code samples

```bash
curl https://example.com/batch/string \
  -X DELETE \
  -H "X-API-KEY: ${API_KEY}"
```

`DELETE /batch/{id}`

Delete batch

<h3 id="deletebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Batch ID|

<h3 id="deletebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## queryDb

<a id="opIdqueryDb"></a>

> Code samples

```bash
curl 'https://example.com/db?query=string' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /db`

Query domain database

<h3 id="querydb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Query (contact name, dns, domain etc)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="querydb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## checkDomain

<a id="opIdcheckDomain"></a>

> Code samples

```bash
curl https://example.com/domains/string/check \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /domains/{domain}/check`

Check domain availability

<h3 id="checkdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Domain|

> Example responses

> 200 Response

```json
{
  "isAvailable": true
}
```

<h3 id="checkdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="checkdomain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isAvailable|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## domainRank

<a id="opIddomainRank"></a>

> Code samples

```bash
curl https://example.com/domains/string/rank \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /domains/{domain}/rank`

Check domain rank (authority).

<h3 id="domainrank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Domain|

> Example responses

> 200 Response

```json
{
  "rank": 0
}
```

<h3 id="domainrank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="domainrank-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rank|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## whois

<a id="opIdwhois"></a>

> Code samples

```bash
curl https://example.com/domains/string/whois \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /domains/{domain}/whois`

WHOIS query for a domain

<h3 id="whois-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Domain|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|raw|
|format|formatted|
|format|json|

<h3 id="whois-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_ArrayOfBatch">ArrayOfBatch</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofbatch"></a>
<a id="schema_ArrayOfBatch"></a>
<a id="tocSarrayofbatch"></a>
<a id="tocsarrayofbatch"></a>

```json
{
  "batches": [
    {
      "completed": true,
      "count": 0,
      "created_at": "string",
      "id": "string",
      "operation": "string",
      "results": [
        null
      ],
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batches|[[Batch](#schemabatch)]|false|none|none|

<h2 id="tocS_Batch">Batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "completed": true,
  "count": 0,
  "created_at": "string",
  "id": "string",
  "operation": "string",
  "results": [
    null
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|boolean|false|none|none|
|count|integer|false|none|none|
|created_at|string|false|none|none|
|id|string|false|none|none|
|operation|string|false|none|none|
|results|[object]|false|none|none|
|status|string|false|none|none|
