<h1 id="vercel-api">Vercel API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.

Base URLs:

* <a href="https://api.vercel.com">https://api.vercel.com</a> - Production API

Email: <a href="mailto:support@vercel.com">Vercel Support</a> 
Web: <a href="https://vercel.com/support">Vercel Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer Default authentication mechanism

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://api.vercel.com/oauth/authorize](https://api.vercel.com/oauth/authorize)
    - Token URL = [https://api.vercel.com/oauth/access_token](https://api.vercel.com/oauth/access_token)

<h1 id="vercel-api-edge-config">edge-config</h1>

## Get Edge Configs

<a id="opIdgetEdgeConfigs"></a>

> Code samples

```bash
curl https://example.com/edge-config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /edge-config`

Returns all Edge Configs.

<h3 id="get-edge-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "creator": "string",
  "domain": "string",
  "id": "string",
  "itemCount": 0,
  "name": "string",
  "recordType": "A",
  "sizeInBytes": 0,
  "ttl": 0,
  "type": "record",
  "value": "string"
}
```

<h3 id="get-edge-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all edge configs.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="get-edge-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number \| null|false|none|none|
|creator|string|false|none|none|
|domain|string|false|none|none|
|id|string|false|none|none|
|itemCount|number|true|none|none|
|name|string|false|none|none|
|recordType|string|false|none|none|
|sizeInBytes|number|true|none|none|
|ttl|number|false|none|none|
|type|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recordType|A|
|recordType|AAAA|
|recordType|ALIAS|
|recordType|CAA|
|recordType|CNAME|
|recordType|MX|
|recordType|SRV|
|recordType|TXT|
|recordType|NS|
|type|record|
|type|record-sys|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Create an Edge Config

<a id="opIdcreateEdgeConfig"></a>

> Code samples

```bash
curl https://example.com/edge-config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": {
      "property1": "string",
      "property2": "string"
    },
    "slug": "string"
  }'
```

`POST /edge-config`

Creates an Edge Config.

> Body parameter

```json
{
  "items": {
    "property1": "string",
    "property2": "string"
  },
  "slug": "string"
}
```

<h3 id="create-an-edge-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» items|body|object|false|none|
|» » **additionalProperties**|body|string \| number \| boolean \| null \| object \| [string \| number \| boolean \| null \| object]|false|none|
|» » » *oneOf*|body|string \| number \| boolean \| null \| object|false|none|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|null|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » *oneOf*|body|[string \| number \| boolean \| null \| object]|false|none|
|» *oneOf*|body|string|false|none|
|» *oneOf*|body|number|false|none|
|» *oneOf*|body|boolean|false|none|
|» *oneOf*|body|null|false|none|
|» *oneOf*|body|object|false|none|
|» slug|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "blocking": true,
  "completedAt": 0,
  "conclusion": "canceled",
  "createdAt": 0,
  "deploymentId": "string",
  "detailsUrl": "string",
  "externalId": "string",
  "id": "string",
  "integrationId": "string",
  "itemCount": 0,
  "name": "string",
  "output": {
    "metrics": {
      "CLS": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "FCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "LCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "TBT": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "virtualExperienceScore": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      }
    }
  },
  "path": "string",
  "rerequestable": true,
  "sizeInBytes": 0,
  "startedAt": 0,
  "status": "registered",
  "updatedAt": 0
}
```

<h3 id="create-an-edge-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="create-an-edge-config-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocking|boolean|false|none|none|
|completedAt|number|false|none|none|
|conclusion|string|false|none|none|
|createdAt|number|false|none|none|
|deploymentId|string|false|none|none|
|detailsUrl|string|false|none|none|
|externalId|string|false|none|none|
|id|string|false|none|none|
|integrationId|string|false|none|none|
|itemCount|number|true|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|» metrics|object|false|none|none|
|» » CLS|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » FCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » LCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » TBT|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » virtualExperienceScore|object|false|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|path|string|false|none|none|
|rerequestable|boolean|false|none|none|
|sizeInBytes|number|true|none|none|
|startedAt|number|false|none|none|
|status|string|false|none|none|
|updatedAt|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|conclusion|canceled|
|conclusion|failed|
|conclusion|neutral|
|conclusion|succeeded|
|conclusion|skipped|
|conclusion|stale|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|status|registered|
|status|running|
|status|completed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get an Edge Config

<a id="opIdgetEdgeConfig"></a>

> Code samples

```bash
curl https://example.com/edge-config/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /edge-config/{edgeConfigId}`

Returns an Edge Config.

<h3 id="get-an-edge-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "creator": "string",
  "domain": "string",
  "id": "string",
  "itemCount": 0,
  "name": "string",
  "recordType": "A",
  "sizeInBytes": 0,
  "ttl": 0,
  "type": "record",
  "value": "string"
}
```

<h3 id="get-an-edge-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The EdgeConfig.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="get-an-edge-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number \| null|false|none|none|
|creator|string|false|none|none|
|domain|string|false|none|none|
|id|string|false|none|none|
|itemCount|number|true|none|none|
|name|string|false|none|none|
|recordType|string|false|none|none|
|sizeInBytes|number|true|none|none|
|ttl|number|false|none|none|
|type|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recordType|A|
|recordType|AAAA|
|recordType|ALIAS|
|recordType|CAA|
|recordType|CNAME|
|recordType|MX|
|recordType|SRV|
|recordType|TXT|
|recordType|NS|
|type|record|
|type|record-sys|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Update an Edge Config

<a id="opIdupdateEdgeConfig"></a>

> Code samples

```bash
curl https://example.com/edge-config/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "slug": "string"
  }'
```

`PUT /edge-config/{edgeConfigId}`

Updates an Edge Config.

> Body parameter

```json
{
  "slug": "string"
}
```

<h3 id="update-an-edge-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» slug|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "blocking": true,
  "completedAt": 0,
  "conclusion": "canceled",
  "createdAt": 0,
  "deploymentId": "string",
  "detailsUrl": "string",
  "externalId": "string",
  "id": "string",
  "integrationId": "string",
  "itemCount": 0,
  "name": "string",
  "output": {
    "metrics": {
      "CLS": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "FCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "LCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "TBT": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "virtualExperienceScore": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      }
    }
  },
  "path": "string",
  "rerequestable": true,
  "sizeInBytes": 0,
  "startedAt": 0,
  "status": "registered",
  "updatedAt": 0
}
```

<h3 id="update-an-edge-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="update-an-edge-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocking|boolean|false|none|none|
|completedAt|number|false|none|none|
|conclusion|string|false|none|none|
|createdAt|number|false|none|none|
|deploymentId|string|false|none|none|
|detailsUrl|string|false|none|none|
|externalId|string|false|none|none|
|id|string|false|none|none|
|integrationId|string|false|none|none|
|itemCount|number|true|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|» metrics|object|false|none|none|
|» » CLS|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » FCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » LCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » TBT|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » virtualExperienceScore|object|false|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|path|string|false|none|none|
|rerequestable|boolean|false|none|none|
|sizeInBytes|number|true|none|none|
|startedAt|number|false|none|none|
|status|string|false|none|none|
|updatedAt|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|conclusion|canceled|
|conclusion|failed|
|conclusion|neutral|
|conclusion|succeeded|
|conclusion|skipped|
|conclusion|stale|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|status|registered|
|status|running|
|status|completed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete an Edge Config

<a id="opIddeleteEdgeConfig"></a>

> Code samples

```bash
curl https://example.com/edge-config/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /edge-config/{edgeConfigId}`

Delete an Edge Config by id.

<h3 id="delete-an-edge-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="delete-an-edge-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get an Edge Config item

<a id="opIdgetEdgeConfigItem"></a>

> Code samples

```bash
curl https://example.com/edge-config/string/item/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /edge-config/{edgeConfigId}/item/{edgeConfigItemKey}`

Returns a specific Edge Config Item.

<h3 id="get-an-edge-config-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|edgeConfigItemKey|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "edgeConfigId": "string",
  "key": "string",
  "updatedAt": 0,
  "value": "string"
}
```

<h3 id="get-an-edge-config-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The EdgeConfig.|[EdgeConfigItem](#schemaedgeconfigitem)|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get Edge Config items

<a id="opIdgetEdgeConfigItems"></a>

> Code samples

```bash
curl https://example.com/edge-config/string/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /edge-config/{edgeConfigId}/items`

Returns all items of an Edge Config.

<h3 id="get-edge-config-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "edgeConfigId": "string",
  "key": "string",
  "updatedAt": 0,
  "value": "string"
}
```

<h3 id="get-edge-config-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The EdgeConfig.|[EdgeConfigItem](#schemaedgeconfigitem)|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Update Edge Config items in batch

<a id="opIdpatchtEdgeConfigItems"></a>

> Code samples

```bash
curl https://example.com/edge-config/string/items \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      {
        "key": "string",
        "operation": "create",
        "value": "string"
      }
    ]
  }'
```

`PATCH /edge-config/{edgeConfigId}/items`

Update multiple Edge Config Items in batch.

> Body parameter

```json
{
  "items": [
    {
      "key": "string",
      "operation": "create",
      "value": "string"
    }
  ]
}
```

<h3 id="update-edge-config-items-in-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» items|body|[object]|true|none|
|» » *oneOf*|body|object|false|none|
|» » key|body|string|true|none|
|» » operation|body|string|true|none|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|string|false|none|
|» » value|body|string \| number \| boolean \| null \| object \| [string \| number \| boolean \| null \| object]|true|none|
|» » » *oneOf*|body|string \| number \| boolean \| null \| object|false|none|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|null|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » *oneOf*|body|[string \| number \| boolean \| null \| object]|false|none|
|» *oneOf*|body|string|false|none|
|» *oneOf*|body|number|false|none|
|» *oneOf*|body|boolean|false|none|
|» *oneOf*|body|null|false|none|
|» *oneOf*|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » key|body|string|true|none|
|» » operation|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="update-edge-config-items-in-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|409|Conflict||None|

<h3 id="update-edge-config-items-in-batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Create an Edge Config token

<a id="opIdcreateEdgeConfigToken"></a>

> Code samples

```bash
curl https://example.com/edge-config/string/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "string"
  }'
```

`POST /edge-config/{edgeConfigId}/token`

Adds a token to an existing Edge Config.

> Body parameter

```json
{
  "label": "string"
}
```

<h3 id="create-an-edge-config-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» label|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "token": "string"
}
```

<h3 id="create-an-edge-config-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="create-an-edge-config-token-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|token|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get Edge Config token meta data

<a id="opIdgetEdgeConfigToken"></a>

> Code samples

```bash
curl https://example.com/edge-config/string/token/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /edge-config/{edgeConfigId}/token/{token}`

Return meta data about an Edge Config token.

<h3 id="get-edge-config-token-meta-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|token|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "edgeConfigId": "string",
  "id": "string",
  "label": "string",
  "token": "string"
}
```

<h3 id="get-edge-config-token-meta-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The EdgeConfig.|[EdgeConfigToken](#schemaedgeconfigtoken)|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get all tokens of an Edge Config

<a id="opIdgetEdgeConfigTokens"></a>

> Code samples

```bash
curl https://example.com/edge-config/string/tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /edge-config/{edgeConfigId}/tokens`

Returns all tokens of an Edge Config.

<h3 id="get-all-tokens-of-an-edge-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "edgeConfigId": "string",
  "id": "string",
  "label": "string",
  "token": "string"
}
```

<h3 id="get-all-tokens-of-an-edge-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The EdgeConfig.|[EdgeConfigToken](#schemaedgeconfigtoken)|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete one or more Edge Config tokens

<a id="opIddeleteEdgeConfigTokens"></a>

> Code samples

```bash
curl https://example.com/edge-config/string/tokens \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tokens": [
      "string"
    ]
  }'
```

`DELETE /edge-config/{edgeConfigId}/tokens`

Deletes one or more tokens of an existing Edge Config.

> Body parameter

```json
{
  "tokens": [
    "string"
  ]
}
```

<h3 id="delete-one-or-more-edge-config-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|edgeConfigId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» tokens|body|[string]|true|none|

<h3 id="delete-one-or-more-edge-config-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-authentication">authentication</h1>

## Login with email

<a id="opIdemailLogin"></a>

> Code samples

```bash
curl https://example.com/registration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "user@mail.com",
    "tokenName": "Your Client App Name"
  }'
```

`POST /registration`

Request a new login for a user to get a token. This will respond with a verification token and send an email to confirm the request. Once confirmed you can use the verification token to get an authentication token.

> Body parameter

```json
{
  "email": "user@mail.com",
  "tokenName": "Your Client App Name"
}
```

<h3 id="login-with-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|The user email.|
|» tokenName|body|string|false|The desired name for the token. It will be displayed on the user account details.|

> Example responses

> 200 Response

```json
{
  "securityCode": "Practical Saola",
  "token": "T1dmvPu36nmyYisXAs7IRzcR"
}
```

<h3 id="login-with-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was successful and an email was sent|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>The provided email is invalid because the owner is blocked|None|

<h3 id="login-with-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityCode|string|true|none|The code the user is going to receive on the email. **Must** be displayed to the user so they can verify the request is the correct.|
|token|string|true|none|The token used to verify the user accepted the login request|

<aside class="success">
This operation does not require authentication
</aside>

## Verify a login request to get an authentication token

<a id="opIdverifyToken"></a>

> Code samples

```bash
curl 'https://example.com/registration/verify?token=string' \
  -H 'Accept: application/json'
```

`GET /registration/verify`

Verify the user accepted the login request and get a authentication token. The user email address and the token received after requesting the login must be added to the URL as a query string with the names `email` and `token`.

<h3 id="verify-a-login-request-to-get-an-authentication-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Email to verify the login.|
|token|query|string|true|The token returned when the login was requested.|
|tokenName|query|string|false|The desired name for the token. It will be displayed on the user account details.|
|ssoUserId|query|string|false|The SAML Profile ID, when connecting a SAML Profile to a Team member for the first time.|

> Example responses

> 200 Response

```json
{
  "email": "amy@example.com",
  "teamId": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  "token": "1ioXyz9Ue4xdCYGROet1dlKd"
}
```

<h3 id="verify-a-login-request-to-get-an-authentication-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The verification was successful.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.<br>The provided token exists but is not yet confirmed|None|
|403|Forbidden|You do not have permission to access this resource.<br>The verification sso token is invalid or not found<br>The verification token is invalid or not found|None|
|404|Not Found||None|

<h3 id="verify-a-login-request-to-get-an-authentication-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the authenticated user.|
|teamId|string|false|none|When completing SAML Single Sign-On authentication, this will be the ID of the Team that was authenticated for.|
|token|string|true|none|The user authentication token that can be used to perform API requests.|

<aside class="success">
This operation does not require authentication
</aside>

## Create an Auth Token

<a id="opIdcreateAuthToken"></a>

> Code samples

```bash
curl https://example.com/v3/user/tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expiresAt": 0,
    "name": "string"
  }'
```

`POST /v3/user/tokens`

Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.

> Body parameter

```json
{
  "expiresAt": 0,
  "name": "string"
}
```

<h3 id="create-an-auth-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» expiresAt|body|number|false|none|
|» name|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» clientId|body|string|false|none|
|» expiresAt|body|number|false|none|
|» installationId|body|string|false|none|
|» name|body|string|true|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|oauth2-token|

> Example responses

> 200 Response

```json
{
  "bearerToken": "uRKJSTt0L4RaSkiMj41QTkxM",
  "token": {
    "activeAt": 1632816536002,
    "createdAt": 1632816536002,
    "expiresAt": 1632816536002,
    "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    "name": "string",
    "origin": "github",
    "scopes": [
      {
        "createdAt": 0,
        "expiresAt": 0,
        "origin": "saml",
        "type": "user"
      }
    ],
    "type": "oauth2-token"
  }
}
```

<h3 id="create-an-auth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="create-an-auth-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bearerToken|string|true|none|The authentication token's actual value. This token is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!|
|token|[AuthToken](#schemaauthtoken)|true|none|Authentication token metadata.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete an authentication token

<a id="opIddeleteAuthToken"></a>

> Code samples

```bash
curl https://example.com/v3/user/tokens/5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/user/tokens/{tokenId}`

Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.

<h3 id="delete-an-authentication-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|The identifier of the token to invalidate. The special value \"current\" may be supplied, which invalidates the token that the HTTP request was authenticated with.|

> Example responses

> 200 Response

```json
{
  "tokenId": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391"
}
```

<h3 id="delete-an-authentication-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authentication token successfully deleted.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Token not found with the requested `tokenId`.|None|

<h3 id="delete-an-authentication-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenId|string|true|none|The unique identifier of the token that was deleted.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List Auth Tokens

<a id="opIdlistAuthTokens"></a>

> Code samples

```bash
curl https://example.com/v5/user/tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v5/user/tokens`

Retrieve a list of the current User's authentication tokens.

> Example responses

> 200 Response

```json
{
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  },
  "testingToken": {
    "activeAt": 1632816536002,
    "createdAt": 1632816536002,
    "expiresAt": 1632816536002,
    "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    "name": "string",
    "origin": "github",
    "scopes": [
      {
        "createdAt": 0,
        "expiresAt": 0,
        "origin": "saml",
        "type": "user"
      }
    ],
    "type": "oauth2-token"
  },
  "tokens": [
    {
      "activeAt": 1632816536002,
      "createdAt": 1632816536002,
      "expiresAt": 1632816536002,
      "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
      "name": "string",
      "origin": "github",
      "scopes": [
        {
          "createdAt": 0,
          "expiresAt": 0,
          "origin": "saml",
          "type": "user"
        }
      ],
      "type": "oauth2-token"
    }
  ]
}
```

<h3 id="list-auth-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request||None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="list-auth-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|
|testingToken|[AuthToken](#schemaauthtoken)|true|none|Authentication token metadata.|
|tokens|[[AuthToken](#schemaauthtoken)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get Auth Token Metadata

<a id="opIdgetAuthToken"></a>

> Code samples

```bash
curl https://example.com/v5/user/tokens/5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v5/user/tokens/{tokenId}`

Retrieve metadata about an authentication token belonging to the currently authenticated User.

<h3 id="get-auth-token-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|The identifier of the token to retrieve. The special value \"current\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.|

> Example responses

> 200 Response

```json
{
  "token": {
    "activeAt": 1632816536002,
    "createdAt": 1632816536002,
    "expiresAt": 1632816536002,
    "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    "name": "string",
    "origin": "github",
    "scopes": [
      {
        "createdAt": 0,
        "expiresAt": 0,
        "origin": "saml",
        "type": "user"
      }
    ],
    "type": "oauth2-token"
  }
}
```

<h3 id="get-auth-token-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Token not found with the requested `tokenId`.|None|

<h3 id="get-auth-token-metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[AuthToken](#schemaauthtoken)|true|none|Authentication token metadata.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-checks">checks</h1>

## Retrieve a list of all checks

<a id="opIdgetAllChecks"></a>

> Code samples

```bash
curl https://example.com/v1/deployments/dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6/checks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/deployments/{deploymentId}/checks`

List all of the checks created for a deployment.

<h3 id="retrieve-a-list-of-all-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The deployment to get all checks for|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "checks": [
    {
      "completedAt": 0,
      "conclusion": "canceled",
      "createdAt": 0,
      "detailsUrl": "string",
      "id": "string",
      "integrationId": "string",
      "name": "string",
      "output": {
        "metrics": {
          "CLS": {
            "previousValue": 0,
            "source": "web-vitals",
            "value": 0
          },
          "FCP": {
            "previousValue": 0,
            "source": "web-vitals",
            "value": 0
          },
          "LCP": {
            "previousValue": 0,
            "source": "web-vitals",
            "value": 0
          },
          "TBT": {
            "previousValue": 0,
            "source": "web-vitals",
            "value": 0
          },
          "virtualExperienceScore": {
            "previousValue": 0,
            "source": "web-vitals",
            "value": 0
          }
        }
      },
      "path": "string",
      "rerequestable": true,
      "startedAt": 0,
      "status": "registered",
      "updatedAt": 0
    }
  ]
}
```

<h3 id="retrieve-a-list-of-all-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The deployment was not found|None|

<h3 id="retrieve-a-list-of-all-checks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[object]|true|none|none|
|» completedAt|number|false|none|none|
|» conclusion|string|false|none|none|
|» createdAt|number|true|none|none|
|» detailsUrl|string|false|none|none|
|» id|string|true|none|none|
|» integrationId|string|true|none|none|
|» name|string|true|none|none|
|» output|object|false|none|none|
|» » metrics|object|false|none|none|
|» » » CLS|object|true|none|none|
|» » » » previousValue|number|false|none|none|
|» » » » source|string|true|none|none|
|» » » » value|number \| null|true|none|none|
|» » » FCP|object|true|none|none|
|» » » » previousValue|number|false|none|none|
|» » » » source|string|true|none|none|
|» » » » value|number \| null|true|none|none|
|» » » LCP|object|true|none|none|
|» » » » previousValue|number|false|none|none|
|» » » » source|string|true|none|none|
|» » » » value|number \| null|true|none|none|
|» » » TBT|object|true|none|none|
|» » » » previousValue|number|false|none|none|
|» » » » source|string|true|none|none|
|» » » » value|number \| null|true|none|none|
|» » » virtualExperienceScore|object|false|none|none|
|» » » » previousValue|number|false|none|none|
|» » » » source|string|true|none|none|
|» » » » value|number \| null|true|none|none|
|» path|string|false|none|none|
|» rerequestable|boolean|true|none|none|
|» startedAt|number|false|none|none|
|» status|string|true|none|none|
|» updatedAt|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» conclusion|canceled|
|» conclusion|failed|
|» conclusion|neutral|
|» conclusion|succeeded|
|» conclusion|skipped|
|» conclusion|stale|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» status|registered|
|» status|running|
|» status|completed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Creates a new Check

<a id="opIdcreateCheck"></a>

> Code samples

```bash
curl https://example.com/v1/deployments/dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6/checks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blocking": true,
    "detailsUrl": "http://example.com",
    "externalId": "1234abc",
    "name": "Performance Check",
    "path": "/",
    "rerequestable": true
  }'
```

`POST /v1/deployments/{deploymentId}/checks`

Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

> Body parameter

```json
{
  "blocking": true,
  "detailsUrl": "http://example.com",
  "externalId": "1234abc",
  "name": "Performance Check",
  "path": "/",
  "rerequestable": true
}
```

<h3 id="creates-a-new-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The deployment to create the check for.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» blocking|body|boolean|true|Whether the check should block a deployment from succeeding|
|» detailsUrl|body|string|false|URL to display for further details|
|» externalId|body|string|false|An identifier that can be used as an external reference|
|» name|body|string|true|The name of the check being created|
|» path|body|string|false|Path of the page that is being checked|
|» rerequestable|body|boolean|false|Whether a user should be able to request for the check to be rerun if it fails|

> Example responses

> 200 Response

```json
{
  "blocking": true,
  "completedAt": 0,
  "conclusion": "canceled",
  "createdAt": 0,
  "deploymentId": "string",
  "detailsUrl": "string",
  "externalId": "string",
  "id": "string",
  "integrationId": "string",
  "name": "string",
  "output": {
    "metrics": {
      "CLS": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "FCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "LCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "TBT": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "virtualExperienceScore": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      }
    }
  },
  "path": "string",
  "rerequestable": true,
  "startedAt": 0,
  "status": "registered",
  "updatedAt": 0
}
```

<h3 id="creates-a-new-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>Cannot create check for finished deployment<br>The provided token is not from an OAuth2 Client|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The deployment was not found|None|

<h3 id="creates-a-new-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocking|boolean|true|none|none|
|completedAt|number|false|none|none|
|conclusion|string|false|none|none|
|createdAt|number|true|none|none|
|deploymentId|string|true|none|none|
|detailsUrl|string|false|none|none|
|externalId|string|false|none|none|
|id|string|true|none|none|
|integrationId|string|true|none|none|
|name|string|true|none|none|
|output|object|false|none|none|
|» metrics|object|false|none|none|
|» » CLS|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » FCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » LCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » TBT|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » virtualExperienceScore|object|false|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|path|string|false|none|none|
|rerequestable|boolean|false|none|none|
|startedAt|number|false|none|none|
|status|string|true|none|none|
|updatedAt|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|conclusion|canceled|
|conclusion|failed|
|conclusion|neutral|
|conclusion|succeeded|
|conclusion|skipped|
|conclusion|stale|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|status|registered|
|status|running|
|status|completed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get a single check

<a id="opIdgetCheck"></a>

> Code samples

```bash
curl https://example.com/v1/deployments/dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6/checks/check_2qn7PZrx89yxY34vEZPD31Y9XVj6 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/deployments/{deploymentId}/checks/{checkId}`

Return a detailed response for a single check.

<h3 id="get-a-single-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The deployment to get the check for.|
|checkId|path|string|true|The check to fetch|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "creator": "string",
  "domain": "string",
  "id": "string",
  "name": "string",
  "recordType": "A",
  "ttl": 0,
  "type": "record",
  "value": "string"
}
```

<h3 id="get-a-single-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.<br>The provided token is not from an OAuth2 Client that created the Check|None|
|404|Not Found|Check was not found<br>The deployment was not found|None|

<h3 id="get-a-single-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number \| null|false|none|none|
|creator|string|true|none|none|
|domain|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|recordType|string|true|none|none|
|ttl|number|false|none|none|
|type|string|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recordType|A|
|recordType|AAAA|
|recordType|ALIAS|
|recordType|CAA|
|recordType|CNAME|
|recordType|MX|
|recordType|SRV|
|recordType|TXT|
|recordType|NS|
|type|record|
|type|record-sys|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Update a check

<a id="opIdupdateCheck"></a>

> Code samples

```bash
curl https://example.com/v1/deployments/dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6/checks/check_2qn7PZrx89yxY34vEZPD31Y9XVj6 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conclusion": "canceled",
    "detailsUrl": "https://example.com/check/run/1234abc",
    "externalId": "1234abc",
    "name": "Performance Check",
    "output": {
      "metrics": {
        "CLS": {
          "previousValue": 2,
          "source": "web-vitals",
          "value": 4
        },
        "FCP": {
          "previousValue": 900,
          "source": "web-vitals",
          "value": 1200
        },
        "LCP": {
          "previousValue": 1000,
          "source": "web-vitals",
          "value": 1200
        },
        "TBT": {
          "previousValue": 3500,
          "source": "web-vitals",
          "value": 3000
        },
        "virtualExperienceScore": {
          "previousValue": 35,
          "source": "web-vitals",
          "value": 30
        }
      }
    },
    "path": "/",
    "status": "running"
  }'
```

`PATCH /v1/deployments/{deploymentId}/checks/{checkId}`

Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

> Body parameter

```json
{
  "conclusion": "canceled",
  "detailsUrl": "https://example.com/check/run/1234abc",
  "externalId": "1234abc",
  "name": "Performance Check",
  "output": {
    "metrics": {
      "CLS": {
        "previousValue": 2,
        "source": "web-vitals",
        "value": 4
      },
      "FCP": {
        "previousValue": 900,
        "source": "web-vitals",
        "value": 1200
      },
      "LCP": {
        "previousValue": 1000,
        "source": "web-vitals",
        "value": 1200
      },
      "TBT": {
        "previousValue": 3500,
        "source": "web-vitals",
        "value": 3000
      },
      "virtualExperienceScore": {
        "previousValue": 35,
        "source": "web-vitals",
        "value": 30
      }
    }
  },
  "path": "/",
  "status": "running"
}
```

<h3 id="update-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The deployment to update the check for.|
|checkId|path|string|true|The check being updated|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» conclusion|body|string|false|The result of the check being run|
|» detailsUrl|body|string|false|A URL a user may visit to see more information about the check|
|» externalId|body|string|false|An identifier that can be used as an external reference|
|» name|body|string|false|The name of the check being created|
|» output|body|object|false|The results of the check Run|
|» » metrics|body|object|false|Metrics about the page|
|» » » CLS|body|object|true|none|
|» » » » previousValue|body|number|false|Previous Cumulative Layout Shift value to display a delta|
|» » » » source|body|string|true|none|
|» » » » value|body|number \| null|true|Cumulative Layout Shift value|
|» » » FCP|body|object|true|none|
|» » » » previousValue|body|number|false|Previous First Contentful Paint value to display a delta|
|» » » » source|body|string|true|none|
|» » » » value|body|number \| null|true|First Contentful Paint value|
|» » » LCP|body|object|true|none|
|» » » » previousValue|body|number|false|Previous Largest Contentful Paint value to display a delta|
|» » » » source|body|string|true|none|
|» » » » value|body|number \| null|true|Largest Contentful Paint value|
|» » » TBT|body|object|true|none|
|» » » » previousValue|body|number|false|Previous Total Blocking Time value to display a delta|
|» » » » source|body|string|true|none|
|» » » » value|body|number \| null|true|Total Blocking Time value|
|» » » virtualExperienceScore|body|object|false|none|
|» » » » previousValue|body|integer|false|A previous Virtual Experience Score value to display a delta, between 0 and 100|
|» » » » source|body|string|true|none|
|» » » » value|body|integer \| null|true|The calculated Virtual Experience Score value, between 0 and 100|
|» path|body|string|false|Path of the page that is being checked|
|» status|body|string|false|The current status of the check|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» conclusion|canceled|
|» conclusion|failed|
|» conclusion|neutral|
|» conclusion|succeeded|
|» conclusion|skipped|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» » » » source|web-vitals|
|» status|running|
|» status|completed|

> Example responses

> 200 Response

```json
{
  "blocking": true,
  "completedAt": 0,
  "conclusion": "canceled",
  "createdAt": 0,
  "deploymentId": "string",
  "detailsUrl": "string",
  "externalId": "string",
  "id": "string",
  "integrationId": "string",
  "name": "string",
  "output": {
    "metrics": {
      "CLS": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "FCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "LCP": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "TBT": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      },
      "virtualExperienceScore": {
        "previousValue": 0,
        "source": "web-vitals",
        "value": 0
      }
    }
  },
  "path": "string",
  "rerequestable": true,
  "startedAt": 0,
  "status": "registered",
  "updatedAt": 0
}
```

<h3 id="update-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>The provided token is not from an OAuth2 Client|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Check was not found<br>The deployment was not found|None|
|413|Payload Too Large|The output provided is too large|None|

<h3 id="update-a-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocking|boolean|true|none|none|
|completedAt|number|false|none|none|
|conclusion|string|false|none|none|
|createdAt|number|true|none|none|
|deploymentId|string|true|none|none|
|detailsUrl|string|false|none|none|
|externalId|string|false|none|none|
|id|string|true|none|none|
|integrationId|string|true|none|none|
|name|string|true|none|none|
|output|object|false|none|none|
|» metrics|object|false|none|none|
|» » CLS|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » FCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » LCP|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » TBT|object|true|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|» » virtualExperienceScore|object|false|none|none|
|» » » previousValue|number|false|none|none|
|» » » source|string|true|none|none|
|» » » value|number \| null|true|none|none|
|path|string|false|none|none|
|rerequestable|boolean|false|none|none|
|startedAt|number|false|none|none|
|status|string|true|none|none|
|updatedAt|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|conclusion|canceled|
|conclusion|failed|
|conclusion|neutral|
|conclusion|succeeded|
|conclusion|skipped|
|conclusion|stale|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|» » » source|web-vitals|
|status|registered|
|status|running|
|status|completed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Rerequest a check

<a id="opIdrerequestCheck"></a>

> Code samples

```bash
curl https://example.com/v1/deployments/dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6/checks/check_2qn7PZrx89yxY34vEZPD31Y9XVj6/rerequest \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/deployments/{deploymentId}/checks/{checkId}/rerequest`

Rerequest a selected check that has failed.

<h3 id="rerequest-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The deployment to rerun the check for.|
|checkId|path|string|true|The check to rerun|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="rerequest-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The deployment was not found<br>Check was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-dns">dns</h1>

## Update an existing DNS record

<a id="opIdupdateRecord"></a>

> Code samples

```bash
curl https://example.com/v1/domains/records/rec_2qn7pzrx89yxy34vezpd31y9 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mxPriority": 0,
    "name": "example-1",
    "srv": {
      "port": 0,
      "priority": 0,
      "target": "example2.com.",
      "weight": 0
    },
    "ttl": "60",
    "type": "A",
    "value": "google.com"
  }'
```

`PATCH /v1/domains/records/{recordId}`

Updates an existing DNS record for a domain name.

> Body parameter

```json
{
  "mxPriority": 0,
  "name": "example-1",
  "srv": {
    "port": 0,
    "priority": 0,
    "target": "example2.com.",
    "weight": 0
  },
  "ttl": "60",
  "type": "A",
  "value": "google.com"
}
```

<h3 id="update-an-existing-dns-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recordId|path|string|true|The id of the DNS record|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» mxPriority|body|integer \| null|false|The MX priority value of the DNS record|
|» name|body|string \| null|false|The name of the DNS record|
|» srv|body|object \| null|false|none|
|» » port|body|integer \| null|true|none|
|» » priority|body|integer \| null|true|none|
|» » target|body|string \| null|true|none|
|» » weight|body|integer \| null|true|none|
|» ttl|body|integer \| null|false|The Time to live (TTL) value of the DNS record|
|» type|body|string \| null|false|The type of the DNS record|
|» value|body|string \| null|false|The value of the DNS record|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|A|
|» type|AAAA|
|» type|ALIAS|
|» type|CAA|
|» type|CNAME|
|» type|MX|
|» type|SRV|
|» type|TXT|
|» type|NS|

> Example responses

> 200 Response

```json
{
  "createdAt": 0,
  "creator": "string",
  "domain": "string",
  "id": "string",
  "name": "string",
  "recordType": "A",
  "ttl": 0,
  "type": "record",
  "value": "string"
}
```

<h3 id="update-an-existing-dns-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|401|Unauthorized||None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|409|Conflict||None|

<h3 id="update-an-existing-dns-record-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number \| null|false|none|none|
|creator|string|true|none|none|
|domain|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|recordType|string|true|none|none|
|ttl|number|false|none|none|
|type|string|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recordType|A|
|recordType|AAAA|
|recordType|ALIAS|
|recordType|CAA|
|recordType|CNAME|
|recordType|MX|
|recordType|SRV|
|recordType|TXT|
|recordType|NS|
|type|record|
|type|record-sys|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Create a DNS record

<a id="opIdcreateRecord"></a>

> Code samples

```bash
curl https://example.com/v2/domains/example.com/records \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "subdomain",
    "ttl": 60,
    "type": "A",
    "value": "192.0.2.42"
  }'
```

`POST /v2/domains/{domain}/records`

Creates a DNS record for a domain.

> Body parameter

```json
{
  "name": "subdomain",
  "ttl": 60,
  "type": "A",
  "value": "192.0.2.42"
}
```

<h3 id="create-a-dns-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|The domain used to create the DNS record.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» type|body|string|true|The type of record, it could be one of the valid DNS records.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `A`.|
|» value|body|string(ipv4)|true|The record value must be a valid IPv4 address.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `AAAA`.|
|» value|body|string(ipv6)|true|An AAAA record pointing to an IPv6 address.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `ALIAS`.|
|» value|body|string|true|An ALIAS virtual record pointing to a hostname resolved to an A record on server side.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `CAA`.|
|» value|body|string|true|A CAA record to specify which Certificate Authorities (CAs) are allowed to issue certificates for the domain.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `CNAME`.|
|» value|body|string|false|A CNAME record mapping to another domain name.|
|» *anyOf*|body|object|false|none|
|» mxPriority|body|number|true|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `MX`.|
|» value|body|string|true|An MX record specifying the mail server responsible for accepting messages on behalf of the domain name.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» srv|body|object|true|none|
|» » port|body|number \| null|true|none|
|» » » *anyOf*|body|number|false|none|
|» » » *anyOf*|body|null|false|none|
|» » priority|body|number \| null|true|none|
|» » » *anyOf*|body|number|false|none|
|» » » *anyOf*|body|null|false|none|
|» » target|body|string|false|none|
|» » weight|body|number \| null|true|none|
|» » » *anyOf*|body|number|false|none|
|» » » *anyOf*|body|null|false|none|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `SRV`.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name or an empty string for the root domain.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `TXT`.|
|» value|body|string|true|A TXT record containing arbitrary text.|
|» *anyOf*|body|object|false|none|
|» name|body|string|true|A subdomain name.|
|» ttl|body|number|false|The TTL value. Must be a number between 60 and 2147483647. Default value is 60.|
|» type|body|string|true|Must be of type `NS`.|
|» value|body|string|false|An NS domain value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|A|
|» type|AAAA|
|» type|ALIAS|
|» type|CAA|
|» type|CNAME|
|» type|MX|
|» type|SRV|
|» type|TXT|
|» type|NS|
|» type|A|
|» type|AAAA|
|» type|ALIAS|
|» type|CAA|
|» type|CNAME|
|» type|MX|
|» type|SRV|
|» type|TXT|
|» type|NS|

> Example responses

> 200 Response

```json
{
  "uid": "string",
  "updated": 0
}
```

<h3 id="create-a-dns-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response showing the uid of the newly created DNS record.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|401|Unauthorized||None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|409|Conflict||None|

<h3 id="create-a-dns-record-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|uid|string|true|none|none|
|updated|number|true|none|none|
|*oneOf*|object|false|none|none|
|uid|string|true|none|The id of the newly created DNS record|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete a DNS record

<a id="opIdremoveRecord"></a>

> Code samples

```bash
curl https://example.com/v2/domains/example.com/records/rec_V0fra8eEgQwEpFhYG2vTzC3K \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/domains/{domain}/records/{recordId}`

Removes an existing DNS record from a domain name.

<h3 id="delete-a-dns-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|none|
|recordId|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-dns-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response by removing the specified DNS record.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|401|Unauthorized||None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List existing DNS records

<a id="opIdgetRecords"></a>

> Code samples

```bash
curl https://example.com/v4/domains/example.com/records \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/domains/{domain}/records`

Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.

<h3 id="list-existing-dns-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|none|
|limit|query|string|false|Maximum number of records to list from a request.|
|since|query|string|false|Get records created after this JavaScript timestamp.|
|until|query|string|false|Get records created before this JavaScript timestamp.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="list-existing-dns-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response retrieving a list of paginated DNS records.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|401|Unauthorized||None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="list-existing-dns-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|object|false|none|none|
|records|[object]|true|none|none|
|» created|number \| null|true|none|none|
|» createdAt|number \| null|true|none|none|
|» creator|string|true|none|none|
|» id|string|true|none|none|
|» mxPriority|number|false|none|none|
|» name|string|true|none|none|
|» priority|number|false|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» updated|number \| null|true|none|none|
|» updatedAt|number \| null|true|none|none|
|» value|string|true|none|none|
|*oneOf*|object|false|none|Successful response retrieving a list of paginated DNS records.|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|
|records|[object]|true|none|none|
|» created|number \| null|true|none|none|
|» createdAt|number \| null|true|none|none|
|» creator|string|true|none|none|
|» id|string|true|none|none|
|» mxPriority|number|false|none|none|
|» name|string|true|none|none|
|» priority|number|false|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» updated|number \| null|true|none|none|
|» updatedAt|number \| null|true|none|none|
|» value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|A|
|» type|AAAA|
|» type|ALIAS|
|» type|CAA|
|» type|CNAME|
|» type|MX|
|» type|SRV|
|» type|TXT|
|» type|NS|
|» type|A|
|» type|AAAA|
|» type|ALIAS|
|» type|CAA|
|» type|CNAME|
|» type|MX|
|» type|SRV|
|» type|TXT|
|» type|NS|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-integrations">integrations</h1>

## Retrieve an integration configuration

<a id="opIdgetConfiguration"></a>

> Code samples

```bash
curl https://example.com/v1/integrations/configuration/icfg_cuwj0AdCdH3BwWT4LPijCC7t \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/integrations/configuration/{id}`

Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.

<h3 id="retrieve-an-integration-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the configuration to check|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "completedAt": 1558531915505,
  "createdAt": 1558531915505,
  "deletedAt": 1558531915505,
  "disabledAt": 1558531915505,
  "id": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
  "integrationId": "oac_xzpVzcUOgcB1nrVlirtKhbWV",
  "oauthConfiguration": false,
  "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "projects": [
    "prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"
  ],
  "removedLogDrainsAt": 0,
  "removedProjectEnvsAt": 0,
  "removedTokensAt": 0,
  "removedWebhooksAt": 0,
  "scopes": [
    "read:project",
    "read-write:log-drain"
  ],
  "scopesQueue": [
    {
      "confirmedAt": 0,
      "note": "string",
      "requestedAt": 0,
      "scopes": {
        "added": [
          "read:integration-configuration"
        ],
        "upgraded": [
          "read:integration-configuration"
        ]
      }
    }
  ],
  "slug": "slack",
  "source": "marketplace",
  "teamId": "team_nLlpyC6RE1qxydlFKbrxDlud",
  "type": "integration-configuration",
  "updatedAt": 1558531915505,
  "userId": "kr1PsOIzqEL5Xg6M4VZcZosf"
}
```

<h3 id="retrieve-an-integration-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The configuration was not found|None|

<h3 id="retrieve-an-integration-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Make all properties in T optional|
|completedAt|number|false|none|A timestamp that tells you when the configuration was installed successfully|
|createdAt|number|true|none|A timestamp that tells you when the configuration was created|
|deletedAt|number \| null|false|none|A timestamp that tells you when the configuration was updated.|
|disabledAt|number|false|none|A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.|
|id|string|true|none|The unique identifier of the configuration|
|integrationId|string|true|none|The unique identifier of the app the configuration was created for|
|oauthConfiguration|boolean|false|none|Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.|
|ownerId|string|true|none|The user or team ID that owns the configuration|
|projects|[string]|false|none|When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.|
|removedLogDrainsAt|number|false|none|none|
|removedProjectEnvsAt|number|false|none|none|
|removedTokensAt|number|false|none|none|
|removedWebhooksAt|number|false|none|none|
|scopes|[string]|true|none|The resources that are allowed to be accessed by the configuration.|
|scopesQueue|[object]|false|none|none|
|» confirmedAt|number|false|none|none|
|» note|string|true|none|none|
|» requestedAt|number|true|none|none|
|» scopes|object|true|none|none|
|» » added|[string]|true|none|none|
|» » upgraded|[string]|true|none|none|
|slug|string|true|none|The slug of the integration the configuration is created for.|
|source|string|false|none|Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.|
|teamId|string \| null|false|none|When the configuration was created for a team, this will show the ID of the team.|
|type|string|true|none|none|
|updatedAt|number|true|none|A timestamp that tells you when the configuration was updated.|
|userId|string|true|none|The ID of the user that created the configuration.|
|*oneOf*|object|false|none|none|
|canConfigureOpenTelemetry|boolean|false|none|none|
|completedAt|number|false|none|A timestamp that tells you when the configuration was installed successfully|
|createdAt|number|true|none|A timestamp that tells you when the configuration was created|
|disabledAt|number|false|none|A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.|
|id|string|true|none|The unique identifier of the configuration|
|integrationId|string|true|none|The unique identifier of the app the configuration was created for|
|oauthConfiguration|boolean|false|none|Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.|
|ownerId|string|true|none|The user or team ID that owns the configuration|
|projectSelection|string|true|none|A string representing the permission for projects. Possible values are `all` or `selected`.|
|projects|[string]|false|none|When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.|
|scopes|[string]|true|none|The resources that are allowed to be accessed by the configuration.|
|slug|string|true|none|The slug of the integration the configuration is created for.|
|source|string|false|none|Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.|
|teamId|string \| null|false|none|When the configuration was created for a team, this will show the ID of the team.|
|updatedAt|number|true|none|A timestamp that tells you when the configuration was updated.|
|userId|string|true|none|The ID of the user that created the configuration.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » added|read:integration-configuration|
|» » added|read-write:integration-configuration|
|» » added|read:deployment|
|» » added|read-write:deployment|
|» » added|read-write:deployment-check|
|» » added|read:project|
|» » added|read-write:project|
|» » added|read-write:project-env-vars|
|» » added|read-write:global-project-env-vars|
|» » added|read:team|
|» » added|read:user|
|» » added|read-write:log-drain|
|» » added|read:domain|
|» » added|read-write:domain|
|» » added|read-write:edge-config|
|» » added|read-write:otel-endpoint|
|» » added|read:monitoring|
|» » upgraded|read:integration-configuration|
|» » upgraded|read-write:integration-configuration|
|» » upgraded|read:deployment|
|» » upgraded|read-write:deployment|
|» » upgraded|read-write:deployment-check|
|» » upgraded|read:project|
|» » upgraded|read-write:project|
|» » upgraded|read-write:project-env-vars|
|» » upgraded|read-write:global-project-env-vars|
|» » upgraded|read:team|
|» » upgraded|read:user|
|» » upgraded|read-write:log-drain|
|» » upgraded|read:domain|
|» » upgraded|read-write:domain|
|» » upgraded|read-write:edge-config|
|» » upgraded|read-write:otel-endpoint|
|» » upgraded|read:monitoring|
|source|marketplace|
|source|deploy-button|
|source|oauth|
|source|external|
|type|integration-configuration|
|projectSelection|selected|
|projectSelection|all|
|source|marketplace|
|source|deploy-button|
|source|oauth|
|source|external|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete an integration configuration

<a id="opIddeleteConfiguration"></a>

> Code samples

```bash
curl https://example.com/v1/integrations/configuration/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/integrations/configuration/{id}`

Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.

<h3 id="delete-an-integration-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="delete-an-integration-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The configuration was successfully removed|None|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The configuration was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get configurations for the authenticated user or team

<a id="opIdgetConfigurations"></a>

> Code samples

```bash
curl 'https://example.com/v1/integrations/configurations?view=account' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/integrations/configurations`

Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.

<h3 id="get-configurations-for-the-authenticated-user-or-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|view|query|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|account|
|view|project|

> Example responses

> 200 Response

```json
[
  {
    "completedAt": 1558531915505,
    "createdAt": 1558531915505,
    "deletedAt": 1558531915505,
    "disabledAt": 1558531915505,
    "id": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
    "integrationId": "oac_xzpVzcUOgcB1nrVlirtKhbWV",
    "oauthConfiguration": false,
    "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
    "projects": [
      "prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"
    ],
    "removedLogDrainsAt": 0,
    "removedProjectEnvsAt": 0,
    "removedTokensAt": 0,
    "removedWebhooksAt": 0,
    "scopes": [
      "read:project",
      "read-write:log-drain"
    ],
    "scopesQueue": [
      {
        "confirmedAt": 0,
        "note": "string",
        "requestedAt": 0,
        "scopes": {
          "added": [
            "read:integration-configuration"
          ],
          "upgraded": [
            "read:integration-configuration"
          ]
        }
      }
    ],
    "slug": "slack",
    "source": "marketplace",
    "teamId": "team_nLlpyC6RE1qxydlFKbrxDlud",
    "type": "integration-configuration",
    "updatedAt": 1558531915505,
    "userId": "kr1PsOIzqEL5Xg6M4VZcZosf"
  }
]
```

<h3 id="get-configurations-for-the-authenticated-user-or-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of configurations for the authenticated user|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="get-configurations-for-the-authenticated-user-or-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|
|» completedAt|number|false|none|A timestamp that tells you when the configuration was installed successfully|
|» createdAt|number|true|none|A timestamp that tells you when the configuration was created|
|» deletedAt|number \| null|false|none|A timestamp that tells you when the configuration was updated.|
|» disabledAt|number|false|none|A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.|
|» id|string|true|none|The unique identifier of the configuration|
|» integrationId|string|true|none|The unique identifier of the app the configuration was created for|
|» oauthConfiguration|boolean|false|none|Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.|
|» ownerId|string|true|none|The user or team ID that owns the configuration|
|» projects|[string]|false|none|When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.|
|» removedLogDrainsAt|number|false|none|none|
|» removedProjectEnvsAt|number|false|none|none|
|» removedTokensAt|number|false|none|none|
|» removedWebhooksAt|number|false|none|none|
|» scopes|[string]|true|none|The resources that are allowed to be accessed by the configuration.|
|» scopesQueue|[object]|false|none|none|
|» » confirmedAt|number|false|none|none|
|» » note|string|true|none|none|
|» » requestedAt|number|true|none|none|
|» » scopes|object|true|none|none|
|» » » added|[string]|true|none|none|
|» » » upgraded|[string]|true|none|none|
|» slug|string|true|none|The slug of the integration the configuration is created for.|
|» source|string|false|none|Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.|
|» teamId|string \| null|false|none|When the configuration was created for a team, this will show the ID of the team.|
|» type|string|true|none|none|
|» updatedAt|number|true|none|A timestamp that tells you when the configuration was updated.|
|» userId|string|true|none|The ID of the user that created the configuration.|
|*oneOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|
|» completedAt|number|false|none|A timestamp that tells you when the configuration was installed successfully|
|» createdAt|number|true|none|A timestamp that tells you when the configuration was created|
|» deletedAt|number \| null|false|none|A timestamp that tells you when the configuration was updated.|
|» disabledAt|number|false|none|A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.|
|» id|string|true|none|The unique identifier of the configuration|
|» integration|object|true|none|none|
|» » assignedBetaLabelAt|number|false|none|none|
|» » category|string|true|none|none|
|» » flags|[string]|false|none|none|
|» » icon|string|true|none|none|
|» » isLegacy|boolean|true|none|none|
|» » name|string|true|none|none|
|» integrationId|string|true|none|The unique identifier of the app the configuration was created for|
|» oauthConfiguration|boolean|false|none|Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.|
|» ownerId|string|true|none|The user or team ID that owns the configuration|
|» projects|[string]|false|none|When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.|
|» removedLogDrainsAt|number|false|none|none|
|» removedProjectEnvsAt|number|false|none|none|
|» removedTokensAt|number|false|none|none|
|» removedWebhooksAt|number|false|none|none|
|» scopes|[string]|true|none|The resources that are allowed to be accessed by the configuration.|
|» scopesQueue|[object]|false|none|none|
|» » confirmedAt|number|false|none|none|
|» » note|string|true|none|none|
|» » requestedAt|number|true|none|none|
|» » scopes|object|true|none|none|
|» » » added|[string]|true|none|none|
|» » » upgraded|[string]|true|none|none|
|» slug|string|true|none|The slug of the integration the configuration is created for.|
|» source|string|false|none|Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.|
|» teamId|string \| null|false|none|When the configuration was created for a team, this will show the ID of the team.|
|» type|string|true|none|none|
|» updatedAt|number|true|none|A timestamp that tells you when the configuration was updated.|
|» userId|string|true|none|The ID of the user that created the configuration.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » added|read:integration-configuration|
|» » » added|read-write:integration-configuration|
|» » » added|read:deployment|
|» » » added|read-write:deployment|
|» » » added|read-write:deployment-check|
|» » » added|read:project|
|» » » added|read-write:project|
|» » » added|read-write:project-env-vars|
|» » » added|read-write:global-project-env-vars|
|» » » added|read:team|
|» » » added|read:user|
|» » » added|read-write:log-drain|
|» » » added|read:domain|
|» » » added|read-write:domain|
|» » » added|read-write:edge-config|
|» » » added|read-write:otel-endpoint|
|» » » added|read:monitoring|
|» » » upgraded|read:integration-configuration|
|» » » upgraded|read-write:integration-configuration|
|» » » upgraded|read:deployment|
|» » » upgraded|read-write:deployment|
|» » » upgraded|read-write:deployment-check|
|» » » upgraded|read:project|
|» » » upgraded|read-write:project|
|» » » upgraded|read-write:project-env-vars|
|» » » upgraded|read-write:global-project-env-vars|
|» » » upgraded|read:team|
|» » » upgraded|read:user|
|» » » upgraded|read-write:log-drain|
|» » » upgraded|read:domain|
|» » » upgraded|read-write:domain|
|» » » upgraded|read-write:edge-config|
|» » » upgraded|read-write:otel-endpoint|
|» » » upgraded|read:monitoring|
|» source|marketplace|
|» source|deploy-button|
|» source|oauth|
|» source|external|
|» type|integration-configuration|
|» » » added|read:integration-configuration|
|» » » added|read-write:integration-configuration|
|» » » added|read:deployment|
|» » » added|read-write:deployment|
|» » » added|read-write:deployment-check|
|» » » added|read:project|
|» » » added|read-write:project|
|» » » added|read-write:project-env-vars|
|» » » added|read-write:global-project-env-vars|
|» » » added|read:team|
|» » » added|read:user|
|» » » added|read-write:log-drain|
|» » » added|read:domain|
|» » » added|read-write:domain|
|» » » added|read-write:edge-config|
|» » » added|read-write:otel-endpoint|
|» » » added|read:monitoring|
|» » » upgraded|read:integration-configuration|
|» » » upgraded|read-write:integration-configuration|
|» » » upgraded|read:deployment|
|» » » upgraded|read-write:deployment|
|» » » upgraded|read-write:deployment-check|
|» » » upgraded|read:project|
|» » » upgraded|read-write:project|
|» » » upgraded|read-write:project-env-vars|
|» » » upgraded|read-write:global-project-env-vars|
|» » » upgraded|read:team|
|» » » upgraded|read:user|
|» » » upgraded|read-write:log-drain|
|» » » upgraded|read:domain|
|» » » upgraded|read-write:domain|
|» » » upgraded|read-write:edge-config|
|» » » upgraded|read-write:otel-endpoint|
|» » » upgraded|read:monitoring|
|» source|marketplace|
|» source|deploy-button|
|» source|oauth|
|» source|external|
|» type|integration-configuration|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List git namespaces by provider

<a id="opIdgitNamespaces"></a>

> Code samples

```bash
curl https://example.com/v1/integrations/git-namespaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/integrations/git-namespaces`

Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.

<h3 id="list-git-namespaces-by-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string|false|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|github|
|provider|gitlab|
|provider|bitbucket|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "ownerType": "string",
    "provider": "string",
    "slug": "string"
  }
]
```

<h3 id="list-git-namespaces-by-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="list-git-namespaces-by-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» name|string|false|none|none|
|» ownerType|string|true|none|none|
|» provider|string|true|none|none|
|» slug|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List git repositories linked to namespace by provider

> Code samples

```bash
curl https://example.com/v1/integrations/search-repo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/integrations/search-repo`

Lists git repositories linked to a namespace `id` for a supported provider. A specific namespace `id` can be obtained via the `git-namespaces`  endpoint. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider or namespace is not provided, it will try to obtain it from the user that authenticated the request.

<h3 id="list-git-repositories-linked-to-namespace-by-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|none|
|namespaceId|query|string \| number \| null|false|none|
|provider|query|string|false|none|
|installationId|query|string|false|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|github|
|provider|gitlab|
|provider|bitbucket|

> Example responses

> 200 Response

```json
{
  "gitAccount": {
    "namespaceId": "string",
    "provider": "github"
  },
  "repos": [
    {
      "defaultBranch": "string",
      "id": "string",
      "name": "string",
      "namespace": "string",
      "ownerType": "team",
      "private": true,
      "slug": "string",
      "updatedAt": 0,
      "url": "string"
    }
  ]
}
```

<h3 id="list-git-repositories-linked-to-namespace-by-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="list-git-repositories-linked-to-namespace-by-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitAccount|object|true|none|none|
|» namespaceId|null|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» provider|string|true|none|none|
|repos|[object]|true|none|none|
|» defaultBranch|string|true|none|none|
|» id|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» name|string|true|none|none|
|» namespace|string|true|none|none|
|» ownerType|string|true|none|none|
|» private|boolean|true|none|none|
|» slug|string|true|none|none|
|» updatedAt|number|true|none|none|
|» url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» provider|github|
|» provider|gitlab|
|» provider|bitbucket|
|» ownerType|team|
|» ownerType|user|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-logdrains">logDrains</h1>

## Deletes the Integration log drain with the provided `id`

<a id="opIddeleteIntegrationLogDrain"></a>

> Code samples

```bash
curl https://example.com/v1/integrations/log-drains/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/integrations/log-drains/{id}`

Deletes the Integration log drain with the provided `id`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.

<h3 id="deletes-the-integration-log-drain-with-the-provided-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the log drain to be deleted|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="deletes-the-integration-log-drain-with-the-provided-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The log drain was successfully deleted|None|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The log drain was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Retrieves a list of Configurable Log Drains

<a id="opIdgetConfigurableLogDrains"></a>

> Code samples

```bash
curl https://example.com/v1/log-drains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/log-drains`

Retrieves a list of Configurable Log Drains. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.

<h3 id="retrieves-a-list-of-configurable-log-drains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|false|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
[
  {
    "branch": "main",
    "configurationId": "string",
    "createdAt": 1567024758130,
    "deliveryFormat": [
      "lambda",
      "build"
    ],
    "environment": "production",
    "headers": {
      "foo": "bar"
    },
    "id": "ld_GflD6EYyo7F4ViYS",
    "ownerId": "team_ZspSRT4ljIEEmMHgoDwKWDei",
    "projectIds": [
      "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"
    ],
    "sources": [
      "lambda",
      "build"
    ],
    "type": [
      "lambda",
      "build"
    ],
    "url": "https://my-log-drain.com"
  }
]
```

<h3 id="retrieves-a-list-of-configurable-log-drains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="retrieves-a-list-of-configurable-log-drains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» branch|string|false|none|The branch to filter logs by|
|» configurationId|string|false|none|The ID of the related integration configuration|
|» createdAt|number|true|none|A number containing the date when the log-drain was created in in milliseconds|
|» deliveryFormat|string|true|none|The log-drain defined delivery format|
|» environment|string|false|none|The environment to filter logs by|
|» headers|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» id|string|true|none|The log-drain id|
|» ownerId|string|true|none|The unique ID of the team the deployment belongs to|
|» projectIds|[string]|false|none|The ID of the projects the deployment is associated with|
|» sources|[string]|false|none|The log-drain defined sources|
|» type|string|true|none|The log-drain defined delivery format|
|» url|string|true|none|A string with the URL of the log-drain|

#### Enumerated Values

|Property|Value|
|---|---|
|» deliveryFormat|json|
|» deliveryFormat|ndjson|
|» deliveryFormat|syslog|
|» environment|preview|
|» environment|production|
|» sources|static|
|» sources|lambda|
|» sources|build|
|» sources|edge|
|» sources|external|
|» type|json|
|» type|ndjson|
|» type|syslog|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Creates a Configurable Log Drain

<a id="opIdcreateConfigurableLogDrain"></a>

> Code samples

```bash
curl https://example.com/v1/log-drains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch": "feature/*",
    "deliveryFormat": "json",
    "environment": "production",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "projectIds": [
      "string"
    ],
    "sources": [
      "static"
    ],
    "url": "http://example.com"
  }'
```

`POST /v1/log-drains`

Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)

> Body parameter

```json
{
  "branch": "feature/*",
  "deliveryFormat": "json",
  "environment": "production",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "projectIds": [
    "string"
  ],
  "sources": [
    "static"
  ],
  "url": "http://example.com"
}
```

<h3 id="creates-a-configurable-log-drain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» branch|body|string|false|The branch regexp of log drain|
|» deliveryFormat|body|string|true|The delivery log format|
|» environment|body|string|false|The environment of log drain|
|» headers|body|object|false|Headers to be sent together with the request|
|» » **additionalProperties**|body|string|false|none|
|» projectIds|body|[string]|false|none|
|» sources|body|[string]|true|none|
|» url|body|string(uri)|true|The log drain url|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» deliveryFormat|json|
|» deliveryFormat|ndjson|
|» environment|preview|
|» environment|production|
|» sources|static|
|» sources|lambda|
|» sources|build|
|» sources|edge|
|» sources|external|

> Example responses

> 200 Response

```json
{
  "branch": "main",
  "configurationId": "string",
  "createdAt": 1567024758130,
  "deliveryFormat": [
    "lambda",
    "build"
  ],
  "environment": "production",
  "headers": {
    "foo": "bar"
  },
  "id": "ld_GflD6EYyo7F4ViYS",
  "ownerId": "team_ZspSRT4ljIEEmMHgoDwKWDei",
  "projectIds": [
    "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"
  ],
  "secret": "string",
  "sources": [
    "lambda",
    "build"
  ],
  "type": [
    "lambda",
    "build"
  ],
  "url": "https://my-log-drain.com"
}
```

<h3 id="creates-a-configurable-log-drain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="creates-a-configurable-log-drain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|false|none|The branch to filter logs by|
|configurationId|string|false|none|The ID of the related integration configuration|
|createdAt|number|true|none|A number containing the date when the log-drain was created in in milliseconds|
|deliveryFormat|string|true|none|The log-drain defined delivery format|
|environment|string|false|none|The environment to filter logs by|
|headers|object|false|none|The key/value pairs that will be sent as headers to the log-drain|
|» **additionalProperties**|string|false|none|none|
|id|string|true|none|The log-drain id|
|ownerId|string|true|none|The unique ID of the team the deployment belongs to|
|projectIds|[string]|false|none|The ID of the projects the deployment is associated with|
|secret|string|false|none|The secret to validate the log-drain payload|
|sources|[string]|false|none|The log-drain defined sources|
|type|string|true|none|The log-drain defined delivery format|
|url|string|true|none|A string with the URL of the log-drain|

#### Enumerated Values

|Property|Value|
|---|---|
|deliveryFormat|json|
|deliveryFormat|ndjson|
|deliveryFormat|syslog|
|environment|preview|
|environment|production|
|sources|static|
|sources|lambda|
|sources|build|
|sources|edge|
|sources|external|
|type|json|
|type|ndjson|
|type|syslog|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Retrieves a Configurable Log Drain

<a id="opIdgetConfigurableLogDrain"></a>

> Code samples

```bash
curl https://example.com/v1/log-drains/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/log-drains/{id}`

Retrieves a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.

<h3 id="retrieves-a-configurable-log-drain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "branch": "main",
  "configurationId": "string",
  "createdAt": 1567024758130,
  "deliveryFormat": [
    "lambda",
    "build"
  ],
  "environment": "production",
  "headers": {
    "foo": "bar"
  },
  "id": "ld_GflD6EYyo7F4ViYS",
  "ownerId": "team_ZspSRT4ljIEEmMHgoDwKWDei",
  "projectIds": [
    "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"
  ],
  "sources": [
    "lambda",
    "build"
  ],
  "type": [
    "lambda",
    "build"
  ],
  "url": "https://my-log-drain.com"
}
```

<h3 id="retrieves-a-configurable-log-drain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="retrieves-a-configurable-log-drain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|false|none|The branch to filter logs by|
|configurationId|string|false|none|The ID of the related integration configuration|
|createdAt|number|true|none|A number containing the date when the log-drain was created in in milliseconds|
|deliveryFormat|string|true|none|The log-drain defined delivery format|
|environment|string|false|none|The environment to filter logs by|
|headers|object|false|none|Construct a type with a set of properties K of type T|
|» **additionalProperties**|string|false|none|none|
|id|string|true|none|The log-drain id|
|ownerId|string|true|none|The unique ID of the team the deployment belongs to|
|projectIds|[string]|false|none|The ID of the projects the deployment is associated with|
|sources|[string]|false|none|The log-drain defined sources|
|type|string|true|none|The log-drain defined delivery format|
|url|string|true|none|A string with the URL of the log-drain|

#### Enumerated Values

|Property|Value|
|---|---|
|deliveryFormat|json|
|deliveryFormat|ndjson|
|deliveryFormat|syslog|
|environment|preview|
|environment|production|
|sources|static|
|sources|lambda|
|sources|build|
|sources|edge|
|sources|external|
|type|json|
|type|ndjson|
|type|syslog|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Deletes a Configurable Log Drain

<a id="opIddeleteConfigurableLogDrain"></a>

> Code samples

```bash
curl https://example.com/v1/log-drains/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/log-drains/{id}`

Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.

<h3 id="deletes-a-configurable-log-drain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="deletes-a-configurable-log-drain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Retrieves a list of Integration log drains

<a id="opIdgetIntegrationLogDrains"></a>

> Code samples

```bash
curl https://example.com/v2/integrations/log-drains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/integrations/log-drains`

Retrieves a list of all Integration log drains that are defined for the authorized account. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.

<h3 id="retrieves-a-list-of-integration-log-drains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
[
  {
    "branch": "feature/*",
    "clientId": "oac_xRhY4LAB7yLhUADD69EvV7ct",
    "configurationId": "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
    "createdAt": 1558531915505,
    "createdFrom": "integration",
    "deliveryFormat": "json",
    "environment": "production",
    "headers": "{\"Authorization\": \"Bearer 123\"}",
    "id": "ld_nBuA7zCID8g4QZ8g",
    "name": "My first log drain",
    "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
    "projectId": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
    "projectIds": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
    "sources": [
      "build",
      "edge"
    ],
    "type": "json",
    "url": "https://example.com/log-drain"
  }
]
```

<h3 id="retrieves-a-list-of-integration-log-drains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of log drains|Inline|
|400|Bad Request||None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="retrieves-a-list-of-integration-log-drains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» branch|string|false|none|The branch regexp of log drain|
|» clientId|string|false|none|The oauth2 client application id that created this log drain|
|» configurationId|string|false|none|The client configuration this log drain was created with|
|» createdAt|number|true|none|A timestamp that tells you when the log drain was created|
|» createdFrom|string|false|none|Whether the log drain was created by an integration or by a user|
|» deliveryFormat|string|false|none|The delivery log format|
|» environment|string|false|none|The environment of log drain|
|» headers|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» id|string|true|none|The unique identifier of the log drain. Always prefixed with `ld_`|
|» name|string|true|none|The name of the log drain|
|» ownerId|string|true|none|The identifier of the team or user whose events will trigger the log drain|
|» projectId|string \| null|false|none|none|
|» projectIds|[string]|false|none|The identifier of the projects this log drain is associated with|
|» sources|[string]|false|none|The sources from which logs are currently being delivered to this log drain.|
|» type|string|true|none|The type of log format|
|» url|string|true|none|The URL to call when logs are generated|

#### Enumerated Values

|Property|Value|
|---|---|
|» createdFrom|self-served|
|» createdFrom|integration|
|» deliveryFormat|json|
|» deliveryFormat|ndjson|
|» deliveryFormat|syslog|
|» environment|production|
|» environment|preview|
|» sources|static|
|» sources|lambda|
|» sources|build|
|» sources|edge|
|» sources|external|
|» type|json|
|» type|ndjson|
|» type|syslog|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Creates a new Integration Log Drain

<a id="opIdcreateLogDrain"></a>

> Code samples

```bash
curl https://example.com/v2/integrations/log-drains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch": "feature/*",
    "deliveryFormat": "json",
    "environment": "production",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "name": "My first log drain",
    "projectIds": [
      "string"
    ],
    "secret": "a1Xsfd325fXcs",
    "sources": [
      "static"
    ],
    "url": "https://example.com/log-drain"
  }'
```

`POST /v2/integrations/log-drains`

Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.

> Body parameter

```json
{
  "branch": "feature/*",
  "deliveryFormat": "json",
  "environment": "production",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first log drain",
  "projectIds": [
    "string"
  ],
  "secret": "a1Xsfd325fXcs",
  "sources": [
    "static"
  ],
  "url": "https://example.com/log-drain"
}
```

<h3 id="creates-a-new-integration-log-drain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» branch|body|string|false|The branch regexp of log drain|
|» deliveryFormat|body|string|false|The delivery log format|
|» environment|body|string|false|The environment of log drain|
|» headers|body|object|false|Headers to be sent together with the request|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|true|The name of the log drain|
|» projectIds|body|[string]|false|none|
|» secret|body|string|false|A secret to sign log drain notification headers so a consumer can verify their authenticity|
|» sources|body|[string]|false|none|
|» url|body|string(uri)|true|The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`, and `syslog+tls:` or `syslog:` when the type is `syslog`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» deliveryFormat|json|
|» deliveryFormat|ndjson|
|» deliveryFormat|syslog|
|» environment|preview|
|» environment|production|
|» sources|static|
|» sources|lambda|
|» sources|build|
|» sources|edge|
|» sources|external|

> Example responses

> 200 Response

```json
{
  "branch": "feature/*",
  "clientId": "oac_xRhY4LAB7yLhUADD69EvV7ct",
  "configurationId": "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
  "createdAt": 1558531915505,
  "createdFrom": "integration",
  "deliveryFormat": "json",
  "environment": "production",
  "headers": "{\"Authorization\": \"Bearer 123\"}",
  "id": "ld_nBuA7zCID8g4QZ8g",
  "name": "My first log drain",
  "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "projectId": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  "projectIds": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  "sources": [
    "build",
    "edge"
  ],
  "type": "json",
  "url": "https://example.com/log-drain"
}
```

<h3 id="creates-a-new-integration-log-drain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The log drain was successfully created|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>The provided token is not from an OAuth2 Client|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="creates-a-new-integration-log-drain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|false|none|The branch regexp of log drain|
|clientId|string|false|none|The oauth2 client application id that created this log drain|
|configurationId|string|false|none|The client configuration this log drain was created with|
|createdAt|number|true|none|A timestamp that tells you when the log drain was created|
|createdFrom|string|false|none|Whether the log drain was created by an integration or by a user|
|deliveryFormat|string|false|none|The delivery log format|
|environment|string|false|none|The environment of log drain|
|headers|object|false|none|Construct a type with a set of properties K of type T|
|» **additionalProperties**|string|false|none|none|
|id|string|true|none|The unique identifier of the log drain. Always prefixed with `ld_`|
|name|string|true|none|The name of the log drain|
|ownerId|string|true|none|The identifier of the team or user whose events will trigger the log drain|
|projectId|string \| null|false|none|none|
|projectIds|[string]|false|none|The identifier of the projects this log drain is associated with|
|sources|[string]|false|none|The sources from which logs are currently being delivered to this log drain.|
|type|string|true|none|The type of log format|
|url|string|true|none|The URL to call when logs are generated|

#### Enumerated Values

|Property|Value|
|---|---|
|createdFrom|self-served|
|createdFrom|integration|
|deliveryFormat|json|
|deliveryFormat|ndjson|
|deliveryFormat|syslog|
|environment|preview|
|environment|production|
|sources|static|
|sources|lambda|
|sources|build|
|sources|edge|
|sources|external|
|type|json|
|type|ndjson|
|type|syslog|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-projects">projects</h1>

## Retrieve the decrypted value of an environment variable of a project by id

<a id="opIdgetProjectEnv"></a>

> Code samples

```bash
curl https://example.com/v1/projects/prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA/env/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{idOrName}/env/{id}`

Retrieve the environment variable for a given project.

<h3 id="retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|id|path|string|true|The unique ID for the environment variable to get the decrypted value.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "configurationId": "string",
  "createdAt": 0,
  "createdBy": "string",
  "decrypted": true,
  "edgeConfigId": "string",
  "edgeConfigTokenId": "string",
  "gitBranch": "string",
  "id": "string",
  "key": "string",
  "target": [
    "production"
  ],
  "type": "secret",
  "updatedAt": 0,
  "updatedBy": "string",
  "value": "string"
}
```

<h3 id="retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The project could not be found|None|

<h3 id="retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|createdBy|string \| null|false|none|none|
|decrypted|boolean|false|none|Whether `value` is decrypted.|
|edgeConfigId|string \| null|false|none|none|
|edgeConfigTokenId|string \| null|false|none|none|
|gitBranch|string|false|none|none|
|id|string|false|none|none|
|key|string|true|none|none|
|target|[string] \| string|false|none|none|
|» *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» *oneOf*|string|false|none|none|
|type|string|true|none|none|
|updatedAt|number|false|none|none|
|updatedBy|string \| null|false|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|type|secret|
|type|system|
|type|encrypted|
|type|plain|
|type|sensitive|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Create one or more environment variables

<a id="opIdcreateProjectEnv"></a>

> Code samples

```bash
curl https://example.com/v10/projects/prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA/env \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gitBranch": "feature-1",
    "key": "API_URL",
    "target": [
      "production",
      "preview"
    ],
    "type": "plain",
    "value": "https://api.vercel.com"
  }'
```

`POST /v10/projects/{idOrName}/env`

Create one ore more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL.

> Body parameter

```json
{
  "gitBranch": "feature-1",
  "key": "API_URL",
  "target": [
    "production",
    "preview"
  ],
  "type": "plain",
  "value": "https://api.vercel.com"
}
```

<h3 id="create-one-or-more-environment-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object \| [object]|false|none|
|» *oneOf*|body|object|false|none|
|» gitBranch|body|string \| null|false|The git branch of the environment variable|
|» key|body|string|true|The name of the environment variable|
|» target|body|[string]|true|The target environment of the environment variable|
|» type|body|string|true|The type of environment variable|
|» value|body|string|true|The value of the environment variable|
|» *oneOf*|body|[object]|false|none|
|» gitBranch|body|string \| null|false|The git branch of the environment variable|
|» key|body|string|true|The name of the environment variable|
|» target|body|[string]|true|The target environment of the environment variable|
|» type|body|string|true|The type of environment variable|
|» value|body|string|true|The value of the environment variable|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen|
|» type|system|
|» type|secret|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen|
|» type|system|
|» type|secret|
|» type|encrypted|
|» type|plain|
|» type|sensitive|

> Example responses

> 200 Response

```json
[
  {
    "configurationId": "string",
    "createdAt": 0,
    "createdBy": "string",
    "decrypted": true,
    "edgeConfigId": "string",
    "edgeConfigTokenId": "string",
    "gitBranch": "string",
    "id": "string",
    "key": "string",
    "target": [
      "production"
    ],
    "type": "secret",
    "updatedAt": 0,
    "updatedBy": "string",
    "value": "string"
  }
]
```

> 201 Response

```json
{
  "created": {
    "configurationId": "string",
    "createdAt": 0,
    "createdBy": "string",
    "decrypted": true,
    "edgeConfigId": "string",
    "edgeConfigTokenId": "string",
    "gitBranch": "string",
    "id": "string",
    "key": "string",
    "system": true,
    "target": [
      "production"
    ],
    "type": "secret",
    "updatedAt": 0,
    "updatedBy": "string",
    "value": "string"
  },
  "failed": [
    {
      "error": {
        "action": "string",
        "code": "string",
        "envVarId": "string",
        "envVarKey": "string",
        "gitBranch": "string",
        "key": "string",
        "link": "string",
        "message": "string",
        "project": "string",
        "target": [
          "production"
        ],
        "value": "string"
      }
    }
  ]
}
```

<h3 id="create-one-or-more-environment-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The environment variable was created successfully|Inline|
|201|Created||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.<br>The environment variable cannot be created because it already exists<br>Additional permissions are required to create production environment variables|None|
|404|Not Found|The project could not be found|None|
|409|Conflict|The project is being transfered and creating an environment variable is not possible|None|

<h3 id="create-one-or-more-environment-variables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|true|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|true|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|true|none|none|
|*oneOf*|object|false|none|none|
|configurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|createdBy|string \| null|false|none|none|
|decrypted|boolean|false|none|Whether `value` is decrypted.|
|edgeConfigId|string \| null|false|none|none|
|edgeConfigTokenId|string \| null|false|none|none|
|gitBranch|string|false|none|none|
|id|string|false|none|none|
|key|string|false|none|none|
|system|boolean|false|none|none|
|target|[string] \| string|false|none|none|
|» *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» *oneOf*|string|false|none|none|
|type|string|false|none|none|
|updatedAt|number|false|none|none|
|updatedBy|string \| null|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|type|secret|
|type|system|
|type|encrypted|
|type|plain|
|type|sensitive|

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|object \| [object]|true|none|none|
|» *oneOf*|object|false|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|false|none|none|
|» system|boolean|false|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|false|none|none|
|» *oneOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|false|none|none|
|» system|boolean|false|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|false|none|none|
|failed|[object]|true|none|none|
|» error|object|true|none|none|
|» » action|string|false|none|none|
|» » code|string|true|none|none|
|» » envVarId|string|false|none|none|
|» » envVarKey|string|false|none|none|
|» » gitBranch|string|false|none|none|
|» » key|string|false|none|none|
|» » link|string|false|none|none|
|» » message|string|true|none|none|
|» » project|string|false|none|none|
|» » target|[string] \| string|false|none|none|
|» » » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » » *oneOf*|string|false|none|none|
|» » value|string \| [string]|false|none|none|
|» » » *oneOf*|string|false|none|none|
|» » » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|» » » *oneOf*|production|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|production|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|production|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Retrieve a list of projects

<a id="opIdgetProjects"></a>

> Code samples

```bash
curl https://example.com/v9/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v9/projects`

Allows to retrieve the list of projects of the authenticated user. The list will be paginated and the provided query parameters allow filtering the returned projects.

<h3 id="retrieve-a-list-of-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string|false|Query only projects updated after the given timestamp|
|gitForkProtection|query|string|false|Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed|
|limit|query|string|false|Limit the number of projects returned|
|search|query|string|false|Search projects by the name field|
|repo|query|string|false|Filter results by repo. Also used for project count|
|repoId|query|string|false|Filter results by Repository ID.|
|repoUrl|query|string|false|Filter results by Repository URL.|
|excludeRepos|query|string|false|Filter results by excluding those projects that belong to a repo|
|edgeConfigId|query|string|false|Filter results by connected Edge Config ID|
|edgeConfigTokenId|query|string|false|Filter results by connected Edge Config Token ID|
|connectConfigurationId|query|string|false|Filter results by linked Connect configuration ID|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|gitForkProtection|1|
|gitForkProtection|0|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  },
  "projects": [
    {
      "accountId": "string",
      "analytics": {
        "canceledAt": 0,
        "disabledAt": 0,
        "enabledAt": 0,
        "id": "string",
        "paidAt": 0,
        "sampleRatePercent": 0,
        "spendLimitInDollars": 0
      },
      "autoExposeSystemEnvs": true,
      "buildCommand": "string",
      "commandForIgnoringBuildStep": "string",
      "connectConfigurationId": "string",
      "createdAt": 0,
      "devCommand": "string",
      "directoryListing": true,
      "enablePreviewFeedback": true,
      "env": [
        {
          "configurationId": "string",
          "createdAt": 0,
          "createdBy": "string",
          "decrypted": true,
          "edgeConfigId": "string",
          "edgeConfigTokenId": "string",
          "gitBranch": "string",
          "id": "string",
          "key": "string",
          "target": [
            "production"
          ],
          "type": "secret",
          "updatedAt": 0,
          "updatedBy": "string",
          "value": "string"
        }
      ],
      "framework": "blitzjs",
      "gitForkProtection": true,
      "hasFloatingAliases": true,
      "id": "string",
      "installCommand": "string",
      "lastRollbackTarget": {
        "fromDeploymentId": "string",
        "jobStatus": "succeeded",
        "requestedAt": 0,
        "toDeploymentId": "string"
      },
      "latestDeployments": [
        {
          "alias": [
            "string"
          ],
          "aliasAssigned": 0,
          "aliasError": {
            "code": "string",
            "message": "string"
          },
          "aliasFinal": "string",
          "automaticAliases": [
            "string"
          ],
          "buildingAt": 0,
          "builds": [
            {
              "dest": "string",
              "src": "string",
              "use": "string"
            }
          ],
          "checksConclusion": "succeeded",
          "checksState": "registered",
          "createdAt": 0,
          "createdIn": "string",
          "creator": {
            "email": "string",
            "githubLogin": "string",
            "gitlabLogin": "string",
            "uid": "string",
            "username": "string"
          },
          "deploymentHostname": "string",
          "forced": true,
          "id": "string",
          "meta": {
            "property1": "string",
            "property2": "string"
          },
          "monorepoManager": "string",
          "name": "string",
          "plan": "hobby",
          "previewCommentsEnabled": false,
          "private": true,
          "readyAt": 0,
          "readyState": "BUILDING",
          "requestedAt": 0,
          "target": "string",
          "teamId": "string",
          "type": "LAMBDAS",
          "url": "string",
          "userId": "string",
          "withCache": true
        }
      ],
      "link": {
        "createdAt": 0,
        "deployHooks": [
          {
            "createdAt": 0,
            "id": "string",
            "name": "string",
            "ref": "string",
            "url": "string"
          }
        ],
        "gitCredentialId": "string",
        "org": "string",
        "productionBranch": "string",
        "repo": "string",
        "repoId": 0,
        "sourceless": true,
        "type": "github",
        "updatedAt": 0
      },
      "live": true,
      "name": "string",
      "nodeVersion": "18.x",
      "outputDirectory": "string",
      "passwordProtection": {
        "deploymentType": "preview"
      },
      "permissions": {
        "Monitoring": [
          "create"
        ],
        "aliasGlobal": [
          "create"
        ],
        "aliasProject": [
          "create"
        ],
        "aliasProtectionBypass": [
          "create"
        ],
        "analytics": [
          "create"
        ],
        "analyticsSampling": [
          "create"
        ],
        "analyticsUsage": [
          "create"
        ],
        "auditLog": [
          "create"
        ],
        "awsBillingIntegration": [
          "create"
        ],
        "billingAddress": [
          "create"
        ],
        "billingInformation": [
          "create"
        ],
        "billingInvoice": [
          "create"
        ],
        "billingInvoiceEmailRecipient": [
          "create"
        ],
        "billingInvoiceLanguage": [
          "create"
        ],
        "billingPlan": [
          "create"
        ],
        "billingPurchaseOrder": [
          "create"
        ],
        "billingTaxId": [
          "create"
        ],
        "cacheArtifact": [
          "create"
        ],
        "cacheArtifactUsageEvent": [
          "create"
        ],
        "concurrentBuilds": [
          "create"
        ],
        "connect": [
          "create"
        ],
        "connectConfiguration": [
          "create"
        ],
        "connectConfigurationLink": [
          "create"
        ],
        "deployment": [
          "create"
        ],
        "deploymentCheck": [
          "create"
        ],
        "deploymentCheckPreview": [
          "create"
        ],
        "deploymentPreview": [
          "create"
        ],
        "deploymentPrivate": [
          "create"
        ],
        "deploymentProductionGit": [
          "create"
        ],
        "deploymentRollback": [
          "create"
        ],
        "domain": [
          "create"
        ],
        "domainAcceptDelegation": [
          "create"
        ],
        "domainAuthCodes": [
          "create"
        ],
        "domainCertificate": [
          "create"
        ],
        "domainCheckConfig": [
          "create"
        ],
        "domainMove": [
          "create"
        ],
        "domainPurchase": [
          "create"
        ],
        "domainRecord": [
          "create"
        ],
        "domainTransferIn": [
          "create"
        ],
        "edgeConfig": [
          "create"
        ],
        "edgeConfigItem": [
          "create"
        ],
        "edgeConfigToken": [
          "create"
        ],
        "endpointVerification": [
          "create"
        ],
        "event": [
          "create"
        ],
        "fileUpload": [
          "create"
        ],
        "gitRepository": [
          "create"
        ],
        "integration": [
          "create"
        ],
        "integrationConfiguration": [
          "create"
        ],
        "integrationConfigurationProjects": [
          "create"
        ],
        "integrationConfigurationTransfer": [
          "create"
        ],
        "integrationVercelConfigurationOverride": [
          "create"
        ],
        "job": [
          "create"
        ],
        "logDrain": [
          "create"
        ],
        "monitoringChart": [
          "create"
        ],
        "monitoringQuery": [
          "create"
        ],
        "notificationDomainConfiguration": [
          "create"
        ],
        "notificationDomainExpire": [
          "create"
        ],
        "notificationDomainMoved": [
          "create"
        ],
        "notificationDomainPurchase": [
          "create"
        ],
        "notificationDomainRenewal": [
          "create"
        ],
        "notificationDomainTransfer": [
          "create"
        ],
        "notificationDomainUnverified": [
          "create"
        ],
        "notificationPaymentFailed": [
          "create"
        ],
        "notificationSpendCap": [
          "create"
        ],
        "notificationUsageAlert": [
          "create"
        ],
        "openTelemetryEndpoint": [
          "create"
        ],
        "passwordProtection": [
          "create"
        ],
        "paymentMethod": [
          "create"
        ],
        "permissions": [
          "create"
        ],
        "previewDeploymentSuffix": [
          "create"
        ],
        "proTrialOnboarding": [
          "create"
        ],
        "project": [
          "create"
        ],
        "projectDeploymentHook": [
          "create"
        ],
        "projectDomain": [
          "create"
        ],
        "projectDomainMove": [
          "create"
        ],
        "projectEnvVars": [
          "create"
        ],
        "projectEnvVarsProduction": [
          "create"
        ],
        "projectEnvVarsUnownedByIntegration": [
          "create"
        ],
        "projectIntegrationConfiguration": [
          "create"
        ],
        "projectLink": [
          "create"
        ],
        "projectMember": [
          "create"
        ],
        "projectProductionBranch": [
          "create"
        ],
        "projectProtectionBypass": [
          "create"
        ],
        "projectTransfer": [
          "create"
        ],
        "rateLimit": [
          "create"
        ],
        "redis": [
          "create"
        ],
        "remoteCaching": [
          "create"
        ],
        "samlConfig": [
          "create"
        ],
        "secret": [
          "create"
        ],
        "sensitiveEnvironmentVariablePolicy": [
          "create"
        ],
        "sharedEnvVars": [
          "create"
        ],
        "sharedEnvVarsProduction": [
          "create"
        ],
        "spendCapConfiguration": [
          "create"
        ],
        "spendCapState": [
          "create"
        ],
        "supportCase": [
          "create"
        ],
        "supportCaseComment": [
          "create"
        ],
        "team": [
          "create"
        ],
        "teamAccessRequest": [
          "create"
        ],
        "teamFellowMembership": [
          "create"
        ],
        "teamInvite": [
          "create"
        ],
        "teamInviteCode": [
          "create"
        ],
        "teamJoin": [
          "create"
        ],
        "teamOwnMembership": [
          "create"
        ],
        "teamOwnMembershipDisconnectSAML": [
          "create"
        ],
        "token": [
          "create"
        ],
        "usage": [
          "create"
        ],
        "user": [
          "create"
        ],
        "userConnection": [
          "create"
        ],
        "webAnalytics": [
          "create"
        ],
        "webhook": [
          "create"
        ],
        "webhook-event": [
          "create"
        ]
      },
      "protectionBypass": {
        "property1": "string",
        "property2": "string"
      },
      "publicSource": true,
      "rootDirectory": "string",
      "serverlessFunctionRegion": "string",
      "skipGitConnectDuringLink": true,
      "sourceFilesOutsideRootDirectory": true,
      "ssoProtection": {
        "deploymentType": "preview"
      },
      "targets": {
        "foo": "bar"
      },
      "transferCompletedAt": 0,
      "transferStartedAt": 0,
      "transferToAccountId": "string",
      "transferredFromAccountId": "string",
      "updatedAt": 0
    }
  ]
}
```

<h3 id="retrieve-a-list-of-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The paginated list of projects|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="retrieve-a-list-of-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|
|projects|[object]|true|none|none|
|» accountId|string|true|none|none|
|» analytics|object|false|none|none|
|» » canceledAt|number \| null|true|none|none|
|» » disabledAt|number|true|none|none|
|» » enabledAt|number|true|none|none|
|» » id|string|true|none|none|
|» » paidAt|number|false|none|none|
|» » sampleRatePercent|number \| null|false|none|none|
|» » spendLimitInDollars|number \| null|false|none|none|
|» autoExposeSystemEnvs|boolean|false|none|none|
|» buildCommand|string \| null|false|none|none|
|» commandForIgnoringBuildStep|string \| null|false|none|none|
|» connectConfigurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» devCommand|string \| null|false|none|none|
|» directoryListing|boolean|true|none|none|
|» enablePreviewFeedback|boolean \| null|false|none|none|
|» env|[object]|false|none|none|
|» » configurationId|string \| null|false|none|none|
|» » createdAt|number|false|none|none|
|» » createdBy|string \| null|false|none|none|
|» » decrypted|boolean|false|none|Whether `value` is decrypted.|
|» » edgeConfigId|string \| null|false|none|none|
|» » edgeConfigTokenId|string \| null|false|none|none|
|» » gitBranch|string|false|none|none|
|» » id|string|false|none|none|
|» » key|string|true|none|none|
|» » target|[string] \| string|false|none|none|
|» » » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » » *oneOf*|string|false|none|none|
|» » type|string|true|none|none|
|» » updatedAt|number|false|none|none|
|» » updatedBy|string \| null|false|none|none|
|» » value|string|true|none|none|
|» framework|string \| null|false|none|none|
|» gitForkProtection|boolean|false|none|none|
|» hasFloatingAliases|boolean|false|none|none|
|» id|string|true|none|none|
|» installCommand|string \| null|false|none|none|
|» lastRollbackTarget|object \| null|false|none|none|
|» » fromDeploymentId|string|true|none|none|
|» » jobStatus|string|true|none|none|
|» » requestedAt|number|true|none|none|
|» » toDeploymentId|string|true|none|none|
|» latestDeployments|[object]|false|none|none|
|» » alias|[string]|false|none|none|
|» » aliasAssigned|null|false|none|none|
|» » » *oneOf*|number|false|none|none|
|» » » *oneOf*|boolean|false|none|none|
|» » aliasError|object \| null|false|none|none|
|» » » code|string|true|none|none|
|» » » message|string|true|none|none|
|» » aliasFinal|string \| null|false|none|none|
|» » automaticAliases|[string]|false|none|none|
|» » buildingAt|number|false|none|none|
|» » builds|[object]|false|none|none|
|» » » dest|string|false|none|none|
|» » » src|string|false|none|none|
|» » » use|string|true|none|none|
|» » checksConclusion|string|false|none|none|
|» » checksState|string|false|none|none|
|» » createdAt|number|true|none|none|
|» » createdIn|string|true|none|none|
|» » creator|object \| null|true|none|none|
|» » » email|string|true|none|none|
|» » » githubLogin|string|false|none|none|
|» » » gitlabLogin|string|false|none|none|
|» » » uid|string|true|none|none|
|» » » username|string|true|none|none|
|» » deploymentHostname|string|true|none|none|
|» » forced|boolean|false|none|none|
|» » id|string|true|none|none|
|» » meta|object|false|none|Construct a type with a set of properties K of type T|
|» » » **additionalProperties**|string|false|none|none|
|» » monorepoManager|string \| null|false|none|none|
|» » name|string|true|none|none|
|» » plan|string|true|none|none|
|» » previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|» » private|boolean|true|none|none|
|» » readyAt|number|false|none|none|
|» » readyState|string|true|none|none|
|» » requestedAt|number|false|none|none|
|» » target|string \| null|false|none|none|
|» » teamId|string \| null|false|none|none|
|» » type|string|true|none|none|
|» » url|string|true|none|none|
|» » userId|string|true|none|none|
|» » withCache|boolean|false|none|none|
|» link|object|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » createdAt|number|false|none|none|
|» » deployHooks|[object]|true|none|none|
|» » » createdAt|number|false|none|none|
|» » » id|string|true|none|none|
|» » » name|string|true|none|none|
|» » » ref|string|true|none|none|
|» » » url|string|true|none|none|
|» » gitCredentialId|string|false|none|none|
|» » org|string|false|none|none|
|» » productionBranch|string|false|none|none|
|» » repo|string|false|none|none|
|» » repoId|number|false|none|none|
|» » sourceless|boolean|false|none|none|
|» » type|string|false|none|none|
|» » updatedAt|number|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » createdAt|number|false|none|none|
|» » deployHooks|[object]|true|none|none|
|» » » createdAt|number|false|none|none|
|» » » id|string|true|none|none|
|» » » name|string|true|none|none|
|» » » ref|string|true|none|none|
|» » » url|string|true|none|none|
|» » gitCredentialId|string|false|none|none|
|» » productionBranch|string|false|none|none|
|» » projectId|string|false|none|none|
|» » projectName|string|false|none|none|
|» » projectNameWithNamespace|string|false|none|none|
|» » projectNamespace|string|false|none|none|
|» » projectUrl|string|false|none|none|
|» » sourceless|boolean|false|none|none|
|» » type|string|false|none|none|
|» » updatedAt|number|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » createdAt|number|false|none|none|
|» » deployHooks|[object]|true|none|none|
|» » » createdAt|number|false|none|none|
|» » » id|string|true|none|none|
|» » » name|string|true|none|none|
|» » » ref|string|true|none|none|
|» » » url|string|true|none|none|
|» » gitCredentialId|string|false|none|none|
|» » name|string|false|none|none|
|» » owner|string|false|none|none|
|» » productionBranch|string|false|none|none|
|» » slug|string|false|none|none|
|» » sourceless|boolean|false|none|none|
|» » type|string|false|none|none|
|» » updatedAt|number|false|none|none|
|» » uuid|string|false|none|none|
|» » workspaceUuid|string|false|none|none|
|» live|boolean|false|none|none|
|» name|string|true|none|none|
|» nodeVersion|string|true|none|none|
|» outputDirectory|string \| null|false|none|none|
|» passwordProtection|object \| null|false|none|none|
|» » deploymentType|string|true|none|none|
|» permissions|object|false|none|none|
|» » Monitoring|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » aliasGlobal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » aliasProject|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » aliasProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » analytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » analyticsSampling|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » analyticsUsage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » auditLog|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » awsBillingIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingAddress|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingInformation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingInvoice|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingInvoiceEmailRecipient|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingInvoiceLanguage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingPlan|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingPurchaseOrder|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » billingTaxId|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » cacheArtifact|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » cacheArtifactUsageEvent|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » concurrentBuilds|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » connect|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » connectConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » connectConfigurationLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » deployment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » deploymentCheck|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » deploymentCheckPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » deploymentPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » deploymentPrivate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » deploymentProductionGit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » deploymentRollback|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainAcceptDelegation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainAuthCodes|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainCertificate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainCheckConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainRecord|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » domainTransferIn|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » edgeConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » edgeConfigItem|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » edgeConfigToken|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » endpointVerification|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » event|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » fileUpload|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » gitRepository|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » integration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » integrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » integrationConfigurationProjects|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » integrationConfigurationTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » integrationVercelConfigurationOverride|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » job|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » logDrain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » monitoringChart|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » monitoringQuery|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationDomainConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationDomainExpire|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationDomainMoved|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationDomainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationDomainRenewal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationDomainTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationDomainUnverified|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationPaymentFailed|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationSpendCap|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » notificationUsageAlert|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » openTelemetryEndpoint|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » passwordProtection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » paymentMethod|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » permissions|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » previewDeploymentSuffix|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » proTrialOnboarding|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » project|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectDeploymentHook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectDomain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectDomainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectEnvVarsUnownedByIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectIntegrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectMember|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectProductionBranch|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » projectTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » rateLimit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » redis|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » remoteCaching|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » samlConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » secret|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » sensitiveEnvironmentVariablePolicy|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » sharedEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » sharedEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » spendCapConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » spendCapState|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » supportCase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » supportCaseComment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » team|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » teamAccessRequest|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » teamFellowMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » teamInvite|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » teamInviteCode|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » teamJoin|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » teamOwnMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » teamOwnMembershipDisconnectSAML|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » token|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » usage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » user|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » userConnection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » webAnalytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » webhook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» » webhook-event|[[ACLAction](#schemaaclaction)]|false|none|none|
|» protectionBypass|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» publicSource|boolean \| null|false|none|none|
|» rootDirectory|string \| null|false|none|none|
|» serverlessFunctionRegion|string \| null|false|none|none|
|» skipGitConnectDuringLink|boolean|false|none|none|
|» sourceFilesOutsideRootDirectory|boolean|false|none|none|
|» ssoProtection|object \| null|false|none|none|
|» » deploymentType|string|true|none|none|
|» targets|object|false|none|An object containing the deployment's metadata|
|» » **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|» transferCompletedAt|number|false|none|none|
|» transferStartedAt|number|false|none|none|
|» transferToAccountId|string|false|none|none|
|» transferredFromAccountId|string|false|none|none|
|» updatedAt|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » *oneOf*|production|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|production|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » » *oneOf*|preview|
|» » » *oneOf*|development|
|» » type|secret|
|» » type|system|
|» » type|encrypted|
|» » type|plain|
|» » type|sensitive|
|» framework|blitzjs|
|» framework|nextjs|
|» framework|gatsby|
|» framework|remix|
|» framework|astro|
|» framework|hexo|
|» framework|eleventy|
|» framework|docusaurus-2|
|» framework|docusaurus|
|» framework|preact|
|» framework|solidstart|
|» framework|dojo|
|» framework|ember|
|» framework|vue|
|» framework|scully|
|» framework|ionic-angular|
|» framework|angular|
|» framework|polymer|
|» framework|svelte|
|» framework|sveltekit|
|» framework|sveltekit-1|
|» framework|ionic-react|
|» framework|create-react-app|
|» framework|gridsome|
|» framework|umijs|
|» framework|sapper|
|» framework|saber|
|» framework|stencil|
|» framework|nuxtjs|
|» framework|redwoodjs|
|» framework|hugo|
|» framework|jekyll|
|» framework|brunch|
|» framework|middleman|
|» framework|zola|
|» framework|hydrogen|
|» framework|vite|
|» framework|vitepress|
|» framework|vuepress|
|» framework|parcel|
|» framework|sanity|
|» » jobStatus|succeeded|
|» » jobStatus|failed|
|» » jobStatus|skipped|
|» » jobStatus|pending|
|» » jobStatus|in-progress|
|» » checksConclusion|succeeded|
|» » checksConclusion|failed|
|» » checksConclusion|skipped|
|» » checksConclusion|canceled|
|» » checksState|registered|
|» » checksState|running|
|» » checksState|completed|
|» » plan|hobby|
|» » plan|enterprise|
|» » plan|pro|
|» » plan|oss|
|» » readyState|BUILDING|
|» » readyState|ERROR|
|» » readyState|INITIALIZING|
|» » readyState|QUEUED|
|» » readyState|READY|
|» » readyState|CANCELED|
|» » type|LAMBDAS|
|» » type|github|
|» » type|gitlab|
|» » type|bitbucket|
|» nodeVersion|18.x|
|» nodeVersion|16.x|
|» nodeVersion|14.x|
|» nodeVersion|12.x|
|» nodeVersion|10.x|
|» » deploymentType|preview|
|» » deploymentType|all|
|» » Monitoring|create|
|» » Monitoring|delete|
|» » Monitoring|read|
|» » Monitoring|update|
|» » Monitoring|list|
|» » Monitoring|count|
|» » aliasGlobal|create|
|» » aliasGlobal|delete|
|» » aliasGlobal|read|
|» » aliasGlobal|update|
|» » aliasGlobal|list|
|» » aliasGlobal|count|
|» » aliasProject|create|
|» » aliasProject|delete|
|» » aliasProject|read|
|» » aliasProject|update|
|» » aliasProject|list|
|» » aliasProject|count|
|» » aliasProtectionBypass|create|
|» » aliasProtectionBypass|delete|
|» » aliasProtectionBypass|read|
|» » aliasProtectionBypass|update|
|» » aliasProtectionBypass|list|
|» » aliasProtectionBypass|count|
|» » analytics|create|
|» » analytics|delete|
|» » analytics|read|
|» » analytics|update|
|» » analytics|list|
|» » analytics|count|
|» » analyticsSampling|create|
|» » analyticsSampling|delete|
|» » analyticsSampling|read|
|» » analyticsSampling|update|
|» » analyticsSampling|list|
|» » analyticsSampling|count|
|» » analyticsUsage|create|
|» » analyticsUsage|delete|
|» » analyticsUsage|read|
|» » analyticsUsage|update|
|» » analyticsUsage|list|
|» » analyticsUsage|count|
|» » auditLog|create|
|» » auditLog|delete|
|» » auditLog|read|
|» » auditLog|update|
|» » auditLog|list|
|» » auditLog|count|
|» » awsBillingIntegration|create|
|» » awsBillingIntegration|delete|
|» » awsBillingIntegration|read|
|» » awsBillingIntegration|update|
|» » awsBillingIntegration|list|
|» » awsBillingIntegration|count|
|» » billingAddress|create|
|» » billingAddress|delete|
|» » billingAddress|read|
|» » billingAddress|update|
|» » billingAddress|list|
|» » billingAddress|count|
|» » billingInformation|create|
|» » billingInformation|delete|
|» » billingInformation|read|
|» » billingInformation|update|
|» » billingInformation|list|
|» » billingInformation|count|
|» » billingInvoice|create|
|» » billingInvoice|delete|
|» » billingInvoice|read|
|» » billingInvoice|update|
|» » billingInvoice|list|
|» » billingInvoice|count|
|» » billingInvoiceEmailRecipient|create|
|» » billingInvoiceEmailRecipient|delete|
|» » billingInvoiceEmailRecipient|read|
|» » billingInvoiceEmailRecipient|update|
|» » billingInvoiceEmailRecipient|list|
|» » billingInvoiceEmailRecipient|count|
|» » billingInvoiceLanguage|create|
|» » billingInvoiceLanguage|delete|
|» » billingInvoiceLanguage|read|
|» » billingInvoiceLanguage|update|
|» » billingInvoiceLanguage|list|
|» » billingInvoiceLanguage|count|
|» » billingPlan|create|
|» » billingPlan|delete|
|» » billingPlan|read|
|» » billingPlan|update|
|» » billingPlan|list|
|» » billingPlan|count|
|» » billingPurchaseOrder|create|
|» » billingPurchaseOrder|delete|
|» » billingPurchaseOrder|read|
|» » billingPurchaseOrder|update|
|» » billingPurchaseOrder|list|
|» » billingPurchaseOrder|count|
|» » billingTaxId|create|
|» » billingTaxId|delete|
|» » billingTaxId|read|
|» » billingTaxId|update|
|» » billingTaxId|list|
|» » billingTaxId|count|
|» » cacheArtifact|create|
|» » cacheArtifact|delete|
|» » cacheArtifact|read|
|» » cacheArtifact|update|
|» » cacheArtifact|list|
|» » cacheArtifact|count|
|» » cacheArtifactUsageEvent|create|
|» » cacheArtifactUsageEvent|delete|
|» » cacheArtifactUsageEvent|read|
|» » cacheArtifactUsageEvent|update|
|» » cacheArtifactUsageEvent|list|
|» » cacheArtifactUsageEvent|count|
|» » concurrentBuilds|create|
|» » concurrentBuilds|delete|
|» » concurrentBuilds|read|
|» » concurrentBuilds|update|
|» » concurrentBuilds|list|
|» » concurrentBuilds|count|
|» » connect|create|
|» » connect|delete|
|» » connect|read|
|» » connect|update|
|» » connect|list|
|» » connect|count|
|» » connectConfiguration|create|
|» » connectConfiguration|delete|
|» » connectConfiguration|read|
|» » connectConfiguration|update|
|» » connectConfiguration|list|
|» » connectConfiguration|count|
|» » connectConfigurationLink|create|
|» » connectConfigurationLink|delete|
|» » connectConfigurationLink|read|
|» » connectConfigurationLink|update|
|» » connectConfigurationLink|list|
|» » connectConfigurationLink|count|
|» » deployment|create|
|» » deployment|delete|
|» » deployment|read|
|» » deployment|update|
|» » deployment|list|
|» » deployment|count|
|» » deploymentCheck|create|
|» » deploymentCheck|delete|
|» » deploymentCheck|read|
|» » deploymentCheck|update|
|» » deploymentCheck|list|
|» » deploymentCheck|count|
|» » deploymentCheckPreview|create|
|» » deploymentCheckPreview|delete|
|» » deploymentCheckPreview|read|
|» » deploymentCheckPreview|update|
|» » deploymentCheckPreview|list|
|» » deploymentCheckPreview|count|
|» » deploymentPreview|create|
|» » deploymentPreview|delete|
|» » deploymentPreview|read|
|» » deploymentPreview|update|
|» » deploymentPreview|list|
|» » deploymentPreview|count|
|» » deploymentPrivate|create|
|» » deploymentPrivate|delete|
|» » deploymentPrivate|read|
|» » deploymentPrivate|update|
|» » deploymentPrivate|list|
|» » deploymentPrivate|count|
|» » deploymentProductionGit|create|
|» » deploymentProductionGit|delete|
|» » deploymentProductionGit|read|
|» » deploymentProductionGit|update|
|» » deploymentProductionGit|list|
|» » deploymentProductionGit|count|
|» » deploymentRollback|create|
|» » deploymentRollback|delete|
|» » deploymentRollback|read|
|» » deploymentRollback|update|
|» » deploymentRollback|list|
|» » deploymentRollback|count|
|» » domain|create|
|» » domain|delete|
|» » domain|read|
|» » domain|update|
|» » domain|list|
|» » domain|count|
|» » domainAcceptDelegation|create|
|» » domainAcceptDelegation|delete|
|» » domainAcceptDelegation|read|
|» » domainAcceptDelegation|update|
|» » domainAcceptDelegation|list|
|» » domainAcceptDelegation|count|
|» » domainAuthCodes|create|
|» » domainAuthCodes|delete|
|» » domainAuthCodes|read|
|» » domainAuthCodes|update|
|» » domainAuthCodes|list|
|» » domainAuthCodes|count|
|» » domainCertificate|create|
|» » domainCertificate|delete|
|» » domainCertificate|read|
|» » domainCertificate|update|
|» » domainCertificate|list|
|» » domainCertificate|count|
|» » domainCheckConfig|create|
|» » domainCheckConfig|delete|
|» » domainCheckConfig|read|
|» » domainCheckConfig|update|
|» » domainCheckConfig|list|
|» » domainCheckConfig|count|
|» » domainMove|create|
|» » domainMove|delete|
|» » domainMove|read|
|» » domainMove|update|
|» » domainMove|list|
|» » domainMove|count|
|» » domainPurchase|create|
|» » domainPurchase|delete|
|» » domainPurchase|read|
|» » domainPurchase|update|
|» » domainPurchase|list|
|» » domainPurchase|count|
|» » domainRecord|create|
|» » domainRecord|delete|
|» » domainRecord|read|
|» » domainRecord|update|
|» » domainRecord|list|
|» » domainRecord|count|
|» » domainTransferIn|create|
|» » domainTransferIn|delete|
|» » domainTransferIn|read|
|» » domainTransferIn|update|
|» » domainTransferIn|list|
|» » domainTransferIn|count|
|» » edgeConfig|create|
|» » edgeConfig|delete|
|» » edgeConfig|read|
|» » edgeConfig|update|
|» » edgeConfig|list|
|» » edgeConfig|count|
|» » edgeConfigItem|create|
|» » edgeConfigItem|delete|
|» » edgeConfigItem|read|
|» » edgeConfigItem|update|
|» » edgeConfigItem|list|
|» » edgeConfigItem|count|
|» » edgeConfigToken|create|
|» » edgeConfigToken|delete|
|» » edgeConfigToken|read|
|» » edgeConfigToken|update|
|» » edgeConfigToken|list|
|» » edgeConfigToken|count|
|» » endpointVerification|create|
|» » endpointVerification|delete|
|» » endpointVerification|read|
|» » endpointVerification|update|
|» » endpointVerification|list|
|» » endpointVerification|count|
|» » event|create|
|» » event|delete|
|» » event|read|
|» » event|update|
|» » event|list|
|» » event|count|
|» » fileUpload|create|
|» » fileUpload|delete|
|» » fileUpload|read|
|» » fileUpload|update|
|» » fileUpload|list|
|» » fileUpload|count|
|» » gitRepository|create|
|» » gitRepository|delete|
|» » gitRepository|read|
|» » gitRepository|update|
|» » gitRepository|list|
|» » gitRepository|count|
|» » integration|create|
|» » integration|delete|
|» » integration|read|
|» » integration|update|
|» » integration|list|
|» » integration|count|
|» » integrationConfiguration|create|
|» » integrationConfiguration|delete|
|» » integrationConfiguration|read|
|» » integrationConfiguration|update|
|» » integrationConfiguration|list|
|» » integrationConfiguration|count|
|» » integrationConfigurationProjects|create|
|» » integrationConfigurationProjects|delete|
|» » integrationConfigurationProjects|read|
|» » integrationConfigurationProjects|update|
|» » integrationConfigurationProjects|list|
|» » integrationConfigurationProjects|count|
|» » integrationConfigurationTransfer|create|
|» » integrationConfigurationTransfer|delete|
|» » integrationConfigurationTransfer|read|
|» » integrationConfigurationTransfer|update|
|» » integrationConfigurationTransfer|list|
|» » integrationConfigurationTransfer|count|
|» » integrationVercelConfigurationOverride|create|
|» » integrationVercelConfigurationOverride|delete|
|» » integrationVercelConfigurationOverride|read|
|» » integrationVercelConfigurationOverride|update|
|» » integrationVercelConfigurationOverride|list|
|» » integrationVercelConfigurationOverride|count|
|» » job|create|
|» » job|delete|
|» » job|read|
|» » job|update|
|» » job|list|
|» » job|count|
|» » logDrain|create|
|» » logDrain|delete|
|» » logDrain|read|
|» » logDrain|update|
|» » logDrain|list|
|» » logDrain|count|
|» » monitoringChart|create|
|» » monitoringChart|delete|
|» » monitoringChart|read|
|» » monitoringChart|update|
|» » monitoringChart|list|
|» » monitoringChart|count|
|» » monitoringQuery|create|
|» » monitoringQuery|delete|
|» » monitoringQuery|read|
|» » monitoringQuery|update|
|» » monitoringQuery|list|
|» » monitoringQuery|count|
|» » notificationDomainConfiguration|create|
|» » notificationDomainConfiguration|delete|
|» » notificationDomainConfiguration|read|
|» » notificationDomainConfiguration|update|
|» » notificationDomainConfiguration|list|
|» » notificationDomainConfiguration|count|
|» » notificationDomainExpire|create|
|» » notificationDomainExpire|delete|
|» » notificationDomainExpire|read|
|» » notificationDomainExpire|update|
|» » notificationDomainExpire|list|
|» » notificationDomainExpire|count|
|» » notificationDomainMoved|create|
|» » notificationDomainMoved|delete|
|» » notificationDomainMoved|read|
|» » notificationDomainMoved|update|
|» » notificationDomainMoved|list|
|» » notificationDomainMoved|count|
|» » notificationDomainPurchase|create|
|» » notificationDomainPurchase|delete|
|» » notificationDomainPurchase|read|
|» » notificationDomainPurchase|update|
|» » notificationDomainPurchase|list|
|» » notificationDomainPurchase|count|
|» » notificationDomainRenewal|create|
|» » notificationDomainRenewal|delete|
|» » notificationDomainRenewal|read|
|» » notificationDomainRenewal|update|
|» » notificationDomainRenewal|list|
|» » notificationDomainRenewal|count|
|» » notificationDomainTransfer|create|
|» » notificationDomainTransfer|delete|
|» » notificationDomainTransfer|read|
|» » notificationDomainTransfer|update|
|» » notificationDomainTransfer|list|
|» » notificationDomainTransfer|count|
|» » notificationDomainUnverified|create|
|» » notificationDomainUnverified|delete|
|» » notificationDomainUnverified|read|
|» » notificationDomainUnverified|update|
|» » notificationDomainUnverified|list|
|» » notificationDomainUnverified|count|
|» » notificationPaymentFailed|create|
|» » notificationPaymentFailed|delete|
|» » notificationPaymentFailed|read|
|» » notificationPaymentFailed|update|
|» » notificationPaymentFailed|list|
|» » notificationPaymentFailed|count|
|» » notificationSpendCap|create|
|» » notificationSpendCap|delete|
|» » notificationSpendCap|read|
|» » notificationSpendCap|update|
|» » notificationSpendCap|list|
|» » notificationSpendCap|count|
|» » notificationUsageAlert|create|
|» » notificationUsageAlert|delete|
|» » notificationUsageAlert|read|
|» » notificationUsageAlert|update|
|» » notificationUsageAlert|list|
|» » notificationUsageAlert|count|
|» » openTelemetryEndpoint|create|
|» » openTelemetryEndpoint|delete|
|» » openTelemetryEndpoint|read|
|» » openTelemetryEndpoint|update|
|» » openTelemetryEndpoint|list|
|» » openTelemetryEndpoint|count|
|» » passwordProtection|create|
|» » passwordProtection|delete|
|» » passwordProtection|read|
|» » passwordProtection|update|
|» » passwordProtection|list|
|» » passwordProtection|count|
|» » paymentMethod|create|
|» » paymentMethod|delete|
|» » paymentMethod|read|
|» » paymentMethod|update|
|» » paymentMethod|list|
|» » paymentMethod|count|
|» » permissions|create|
|» » permissions|delete|
|» » permissions|read|
|» » permissions|update|
|» » permissions|list|
|» » permissions|count|
|» » previewDeploymentSuffix|create|
|» » previewDeploymentSuffix|delete|
|» » previewDeploymentSuffix|read|
|» » previewDeploymentSuffix|update|
|» » previewDeploymentSuffix|list|
|» » previewDeploymentSuffix|count|
|» » proTrialOnboarding|create|
|» » proTrialOnboarding|delete|
|» » proTrialOnboarding|read|
|» » proTrialOnboarding|update|
|» » proTrialOnboarding|list|
|» » proTrialOnboarding|count|
|» » project|create|
|» » project|delete|
|» » project|read|
|» » project|update|
|» » project|list|
|» » project|count|
|» » projectDeploymentHook|create|
|» » projectDeploymentHook|delete|
|» » projectDeploymentHook|read|
|» » projectDeploymentHook|update|
|» » projectDeploymentHook|list|
|» » projectDeploymentHook|count|
|» » projectDomain|create|
|» » projectDomain|delete|
|» » projectDomain|read|
|» » projectDomain|update|
|» » projectDomain|list|
|» » projectDomain|count|
|» » projectDomainMove|create|
|» » projectDomainMove|delete|
|» » projectDomainMove|read|
|» » projectDomainMove|update|
|» » projectDomainMove|list|
|» » projectDomainMove|count|
|» » projectEnvVars|create|
|» » projectEnvVars|delete|
|» » projectEnvVars|read|
|» » projectEnvVars|update|
|» » projectEnvVars|list|
|» » projectEnvVars|count|
|» » projectEnvVarsProduction|create|
|» » projectEnvVarsProduction|delete|
|» » projectEnvVarsProduction|read|
|» » projectEnvVarsProduction|update|
|» » projectEnvVarsProduction|list|
|» » projectEnvVarsProduction|count|
|» » projectEnvVarsUnownedByIntegration|create|
|» » projectEnvVarsUnownedByIntegration|delete|
|» » projectEnvVarsUnownedByIntegration|read|
|» » projectEnvVarsUnownedByIntegration|update|
|» » projectEnvVarsUnownedByIntegration|list|
|» » projectEnvVarsUnownedByIntegration|count|
|» » projectIntegrationConfiguration|create|
|» » projectIntegrationConfiguration|delete|
|» » projectIntegrationConfiguration|read|
|» » projectIntegrationConfiguration|update|
|» » projectIntegrationConfiguration|list|
|» » projectIntegrationConfiguration|count|
|» » projectLink|create|
|» » projectLink|delete|
|» » projectLink|read|
|» » projectLink|update|
|» » projectLink|list|
|» » projectLink|count|
|» » projectMember|create|
|» » projectMember|delete|
|» » projectMember|read|
|» » projectMember|update|
|» » projectMember|list|
|» » projectMember|count|
|» » projectProductionBranch|create|
|» » projectProductionBranch|delete|
|» » projectProductionBranch|read|
|» » projectProductionBranch|update|
|» » projectProductionBranch|list|
|» » projectProductionBranch|count|
|» » projectProtectionBypass|create|
|» » projectProtectionBypass|delete|
|» » projectProtectionBypass|read|
|» » projectProtectionBypass|update|
|» » projectProtectionBypass|list|
|» » projectProtectionBypass|count|
|» » projectTransfer|create|
|» » projectTransfer|delete|
|» » projectTransfer|read|
|» » projectTransfer|update|
|» » projectTransfer|list|
|» » projectTransfer|count|
|» » rateLimit|create|
|» » rateLimit|delete|
|» » rateLimit|read|
|» » rateLimit|update|
|» » rateLimit|list|
|» » rateLimit|count|
|» » redis|create|
|» » redis|delete|
|» » redis|read|
|» » redis|update|
|» » redis|list|
|» » redis|count|
|» » remoteCaching|create|
|» » remoteCaching|delete|
|» » remoteCaching|read|
|» » remoteCaching|update|
|» » remoteCaching|list|
|» » remoteCaching|count|
|» » samlConfig|create|
|» » samlConfig|delete|
|» » samlConfig|read|
|» » samlConfig|update|
|» » samlConfig|list|
|» » samlConfig|count|
|» » secret|create|
|» » secret|delete|
|» » secret|read|
|» » secret|update|
|» » secret|list|
|» » secret|count|
|» » sensitiveEnvironmentVariablePolicy|create|
|» » sensitiveEnvironmentVariablePolicy|delete|
|» » sensitiveEnvironmentVariablePolicy|read|
|» » sensitiveEnvironmentVariablePolicy|update|
|» » sensitiveEnvironmentVariablePolicy|list|
|» » sensitiveEnvironmentVariablePolicy|count|
|» » sharedEnvVars|create|
|» » sharedEnvVars|delete|
|» » sharedEnvVars|read|
|» » sharedEnvVars|update|
|» » sharedEnvVars|list|
|» » sharedEnvVars|count|
|» » sharedEnvVarsProduction|create|
|» » sharedEnvVarsProduction|delete|
|» » sharedEnvVarsProduction|read|
|» » sharedEnvVarsProduction|update|
|» » sharedEnvVarsProduction|list|
|» » sharedEnvVarsProduction|count|
|» » spendCapConfiguration|create|
|» » spendCapConfiguration|delete|
|» » spendCapConfiguration|read|
|» » spendCapConfiguration|update|
|» » spendCapConfiguration|list|
|» » spendCapConfiguration|count|
|» » spendCapState|create|
|» » spendCapState|delete|
|» » spendCapState|read|
|» » spendCapState|update|
|» » spendCapState|list|
|» » spendCapState|count|
|» » supportCase|create|
|» » supportCase|delete|
|» » supportCase|read|
|» » supportCase|update|
|» » supportCase|list|
|» » supportCase|count|
|» » supportCaseComment|create|
|» » supportCaseComment|delete|
|» » supportCaseComment|read|
|» » supportCaseComment|update|
|» » supportCaseComment|list|
|» » supportCaseComment|count|
|» » team|create|
|» » team|delete|
|» » team|read|
|» » team|update|
|» » team|list|
|» » team|count|
|» » teamAccessRequest|create|
|» » teamAccessRequest|delete|
|» » teamAccessRequest|read|
|» » teamAccessRequest|update|
|» » teamAccessRequest|list|
|» » teamAccessRequest|count|
|» » teamFellowMembership|create|
|» » teamFellowMembership|delete|
|» » teamFellowMembership|read|
|» » teamFellowMembership|update|
|» » teamFellowMembership|list|
|» » teamFellowMembership|count|
|» » teamInvite|create|
|» » teamInvite|delete|
|» » teamInvite|read|
|» » teamInvite|update|
|» » teamInvite|list|
|» » teamInvite|count|
|» » teamInviteCode|create|
|» » teamInviteCode|delete|
|» » teamInviteCode|read|
|» » teamInviteCode|update|
|» » teamInviteCode|list|
|» » teamInviteCode|count|
|» » teamJoin|create|
|» » teamJoin|delete|
|» » teamJoin|read|
|» » teamJoin|update|
|» » teamJoin|list|
|» » teamJoin|count|
|» » teamOwnMembership|create|
|» » teamOwnMembership|delete|
|» » teamOwnMembership|read|
|» » teamOwnMembership|update|
|» » teamOwnMembership|list|
|» » teamOwnMembership|count|
|» » teamOwnMembershipDisconnectSAML|create|
|» » teamOwnMembershipDisconnectSAML|delete|
|» » teamOwnMembershipDisconnectSAML|read|
|» » teamOwnMembershipDisconnectSAML|update|
|» » teamOwnMembershipDisconnectSAML|list|
|» » teamOwnMembershipDisconnectSAML|count|
|» » token|create|
|» » token|delete|
|» » token|read|
|» » token|update|
|» » token|list|
|» » token|count|
|» » usage|create|
|» » usage|delete|
|» » usage|read|
|» » usage|update|
|» » usage|list|
|» » usage|count|
|» » user|create|
|» » user|delete|
|» » user|read|
|» » user|update|
|» » user|list|
|» » user|count|
|» » userConnection|create|
|» » userConnection|delete|
|» » userConnection|read|
|» » userConnection|update|
|» » userConnection|list|
|» » userConnection|count|
|» » webAnalytics|create|
|» » webAnalytics|delete|
|» » webAnalytics|read|
|» » webAnalytics|update|
|» » webAnalytics|list|
|» » webAnalytics|count|
|» » webhook|create|
|» » webhook|delete|
|» » webhook|read|
|» » webhook|update|
|» » webhook|list|
|» » webhook|count|
|» » webhook-event|create|
|» » webhook-event|delete|
|» » webhook-event|read|
|» » webhook-event|update|
|» » webhook-event|list|
|» » webhook-event|count|
|» » deploymentType|preview|
|» » deploymentType|all|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Create a new project

<a id="opIdcreateProject"></a>

> Code samples

```bash
curl https://example.com/v9/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buildCommand": "string",
    "commandForIgnoringBuildStep": "string",
    "devCommand": "string",
    "environmentVariables": [
      {
        "gitBranch": "feature-1",
        "key": "string",
        "target": "mport(\"/vercel/path0/utils/env-variable-util/types\").EnvTarget.Productio",
        "type": "system",
        "value": "string"
      }
    ],
    "framework": null,
    "gitRepository": {
      "repo": "string",
      "type": "github"
    },
    "installCommand": "string",
    "name": "a-project-name",
    "outputDirectory": "string",
    "publicSource": true,
    "rootDirectory": "string",
    "serverlessFunctionRegion": "stri",
    "skipGitConnectDuringLink": true
  }'
```

`POST /v9/projects`

Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.

> Body parameter

```json
{
  "buildCommand": "string",
  "commandForIgnoringBuildStep": "string",
  "devCommand": "string",
  "environmentVariables": [
    {
      "gitBranch": "feature-1",
      "key": "string",
      "target": "mport(\"/vercel/path0/utils/env-variable-util/types\").EnvTarget.Productio",
      "type": "system",
      "value": "string"
    }
  ],
  "framework": null,
  "gitRepository": {
    "repo": "string",
    "type": "github"
  },
  "installCommand": "string",
  "name": "a-project-name",
  "outputDirectory": "string",
  "publicSource": true,
  "rootDirectory": "string",
  "serverlessFunctionRegion": "stri",
  "skipGitConnectDuringLink": true
}
```

<h3 id="create-a-new-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» buildCommand|body|string \| null|false|The build command for this project. When `null` is used this value will be automatically detected|
|» commandForIgnoringBuildStep|body|string \| null|false|none|
|» devCommand|body|string \| null|false|The dev command for this project. When `null` is used this value will be automatically detected|
|» environmentVariables|body|[object]|false|Collection of ENV Variables the Project will use|
|» » gitBranch|body|string|false|The git branch of the environment variable|
|» » key|body|string|true|Name of the ENV variable|
|» » target|body|string \| [string]|true|Deployment Target or Targets in which the ENV variable will be used|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|[string]|false|none|
|» » type|body|string|false|Type of the ENV variable|
|» » value|body|string|true|Value for the ENV variable|
|» framework|body|null|false|The framework that is being used for this project. When `null` is used no framework is selected|
|» gitRepository|body|object|false|The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed|
|» » repo|body|string|true|The name of the git repository. For example: \"vercel/next.js\"|
|» » type|body|string|true|The Git Provider of the repository|
|» installCommand|body|string \| null|false|The install command for this project. When `null` is used this value will be automatically detected|
|» name|body|string|true|The desired name for the project|
|» outputDirectory|body|string \| null|false|The output directory of the project. When `null` is used this value will be automatically detected|
|» publicSource|body|boolean \| null|false|Specifies whether the source code and logs of the deployments for this project should be public or not|
|» rootDirectory|body|string \| null|false|The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root|
|» serverlessFunctionRegion|body|string \| null|false|The region to deploy Serverless Functions in this project|
|» skipGitConnectDuringLink|body|boolean|false|**Deprecated.** Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » *oneOf*|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio|
|» » » *oneOf*|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe|
|» » » *oneOf*|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen|
|» » » *oneOf*|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio|
|» » » *oneOf*|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe|
|» » » *oneOf*|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen|
|» » type|system|
|» » type|secret|
|» » type|encrypted|
|» » type|plain|
|» framework|null|
|» framework|blitzjs|
|» framework|nextjs|
|» framework|gatsby|
|» framework|remix|
|» framework|astro|
|» framework|hexo|
|» framework|eleventy|
|» framework|docusaurus-2|
|» framework|docusaurus|
|» framework|preact|
|» framework|solidstart|
|» framework|dojo|
|» framework|ember|
|» framework|vue|
|» framework|scully|
|» framework|ionic-angular|
|» framework|angular|
|» framework|polymer|
|» framework|svelte|
|» framework|sveltekit|
|» framework|sveltekit-1|
|» framework|ionic-react|
|» framework|create-react-app|
|» framework|gridsome|
|» framework|umijs|
|» framework|sapper|
|» framework|saber|
|» framework|stencil|
|» framework|nuxtjs|
|» framework|redwoodjs|
|» framework|hugo|
|» framework|jekyll|
|» framework|brunch|
|» framework|middleman|
|» framework|zola|
|» framework|hydrogen|
|» framework|vite|
|» framework|vitepress|
|» framework|vuepress|
|» framework|parcel|
|» framework|sanity|
|» » type|github|
|» » type|gitlab|
|» » type|bitbucket|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "analytics": {
    "canceledAt": 0,
    "disabledAt": 0,
    "enabledAt": 0,
    "id": "string",
    "paidAt": 0,
    "sampleRatePercent": 0,
    "spendLimitInDollars": 0
  },
  "autoExposeSystemEnvs": true,
  "buildCommand": "string",
  "commandForIgnoringBuildStep": "string",
  "connectConfigurationId": "string",
  "createdAt": 0,
  "devCommand": "string",
  "directoryListing": true,
  "enablePreviewFeedback": true,
  "env": [
    {
      "configurationId": "string",
      "createdAt": 0,
      "createdBy": "string",
      "decrypted": true,
      "edgeConfigId": "string",
      "edgeConfigTokenId": "string",
      "gitBranch": "string",
      "id": "string",
      "key": "string",
      "target": [
        "production"
      ],
      "type": "secret",
      "updatedAt": 0,
      "updatedBy": "string",
      "value": "string"
    }
  ],
  "framework": "blitzjs",
  "gitForkProtection": true,
  "hasFloatingAliases": true,
  "id": "string",
  "installCommand": "string",
  "lastRollbackTarget": {
    "fromDeploymentId": "string",
    "jobStatus": "succeeded",
    "requestedAt": 0,
    "toDeploymentId": "string"
  },
  "latestDeployments": [
    {
      "alias": [
        "string"
      ],
      "aliasAssigned": 0,
      "aliasError": {
        "code": "string",
        "message": "string"
      },
      "aliasFinal": "string",
      "automaticAliases": [
        "string"
      ],
      "buildingAt": 0,
      "builds": [
        {
          "dest": "string",
          "src": "string",
          "use": "string"
        }
      ],
      "checksConclusion": "succeeded",
      "checksState": "registered",
      "createdAt": 0,
      "createdIn": "string",
      "creator": {
        "email": "string",
        "githubLogin": "string",
        "gitlabLogin": "string",
        "uid": "string",
        "username": "string"
      },
      "deploymentHostname": "string",
      "forced": true,
      "id": "string",
      "meta": {
        "property1": "string",
        "property2": "string"
      },
      "monorepoManager": "string",
      "name": "string",
      "plan": "hobby",
      "previewCommentsEnabled": false,
      "private": true,
      "readyAt": 0,
      "readyState": "BUILDING",
      "requestedAt": 0,
      "target": "string",
      "teamId": "string",
      "type": "LAMBDAS",
      "url": "string",
      "userId": "string",
      "withCache": true
    }
  ],
  "link": {
    "createdAt": 0,
    "deployHooks": [
      {
        "createdAt": 0,
        "id": "string",
        "name": "string",
        "ref": "string",
        "url": "string"
      }
    ],
    "gitCredentialId": "string",
    "org": "string",
    "productionBranch": "string",
    "repo": "string",
    "repoId": 0,
    "sourceless": true,
    "type": "github",
    "updatedAt": 0
  },
  "live": true,
  "name": "string",
  "nodeVersion": "18.x",
  "outputDirectory": "string",
  "passwordProtection": {
    "deploymentType": "preview"
  },
  "permissions": {
    "Monitoring": [
      "create"
    ],
    "aliasGlobal": [
      "create"
    ],
    "aliasProject": [
      "create"
    ],
    "aliasProtectionBypass": [
      "create"
    ],
    "analytics": [
      "create"
    ],
    "analyticsSampling": [
      "create"
    ],
    "analyticsUsage": [
      "create"
    ],
    "auditLog": [
      "create"
    ],
    "awsBillingIntegration": [
      "create"
    ],
    "billingAddress": [
      "create"
    ],
    "billingInformation": [
      "create"
    ],
    "billingInvoice": [
      "create"
    ],
    "billingInvoiceEmailRecipient": [
      "create"
    ],
    "billingInvoiceLanguage": [
      "create"
    ],
    "billingPlan": [
      "create"
    ],
    "billingPurchaseOrder": [
      "create"
    ],
    "billingTaxId": [
      "create"
    ],
    "cacheArtifact": [
      "create"
    ],
    "cacheArtifactUsageEvent": [
      "create"
    ],
    "concurrentBuilds": [
      "create"
    ],
    "connect": [
      "create"
    ],
    "connectConfiguration": [
      "create"
    ],
    "connectConfigurationLink": [
      "create"
    ],
    "deployment": [
      "create"
    ],
    "deploymentCheck": [
      "create"
    ],
    "deploymentCheckPreview": [
      "create"
    ],
    "deploymentPreview": [
      "create"
    ],
    "deploymentPrivate": [
      "create"
    ],
    "deploymentProductionGit": [
      "create"
    ],
    "deploymentRollback": [
      "create"
    ],
    "domain": [
      "create"
    ],
    "domainAcceptDelegation": [
      "create"
    ],
    "domainAuthCodes": [
      "create"
    ],
    "domainCertificate": [
      "create"
    ],
    "domainCheckConfig": [
      "create"
    ],
    "domainMove": [
      "create"
    ],
    "domainPurchase": [
      "create"
    ],
    "domainRecord": [
      "create"
    ],
    "domainTransferIn": [
      "create"
    ],
    "edgeConfig": [
      "create"
    ],
    "edgeConfigItem": [
      "create"
    ],
    "edgeConfigToken": [
      "create"
    ],
    "endpointVerification": [
      "create"
    ],
    "event": [
      "create"
    ],
    "fileUpload": [
      "create"
    ],
    "gitRepository": [
      "create"
    ],
    "integration": [
      "create"
    ],
    "integrationConfiguration": [
      "create"
    ],
    "integrationConfigurationProjects": [
      "create"
    ],
    "integrationConfigurationTransfer": [
      "create"
    ],
    "integrationVercelConfigurationOverride": [
      "create"
    ],
    "job": [
      "create"
    ],
    "logDrain": [
      "create"
    ],
    "monitoringChart": [
      "create"
    ],
    "monitoringQuery": [
      "create"
    ],
    "notificationDomainConfiguration": [
      "create"
    ],
    "notificationDomainExpire": [
      "create"
    ],
    "notificationDomainMoved": [
      "create"
    ],
    "notificationDomainPurchase": [
      "create"
    ],
    "notificationDomainRenewal": [
      "create"
    ],
    "notificationDomainTransfer": [
      "create"
    ],
    "notificationDomainUnverified": [
      "create"
    ],
    "notificationPaymentFailed": [
      "create"
    ],
    "notificationSpendCap": [
      "create"
    ],
    "notificationUsageAlert": [
      "create"
    ],
    "openTelemetryEndpoint": [
      "create"
    ],
    "passwordProtection": [
      "create"
    ],
    "paymentMethod": [
      "create"
    ],
    "permissions": [
      "create"
    ],
    "previewDeploymentSuffix": [
      "create"
    ],
    "proTrialOnboarding": [
      "create"
    ],
    "project": [
      "create"
    ],
    "projectDeploymentHook": [
      "create"
    ],
    "projectDomain": [
      "create"
    ],
    "projectDomainMove": [
      "create"
    ],
    "projectEnvVars": [
      "create"
    ],
    "projectEnvVarsProduction": [
      "create"
    ],
    "projectEnvVarsUnownedByIntegration": [
      "create"
    ],
    "projectIntegrationConfiguration": [
      "create"
    ],
    "projectLink": [
      "create"
    ],
    "projectMember": [
      "create"
    ],
    "projectProductionBranch": [
      "create"
    ],
    "projectProtectionBypass": [
      "create"
    ],
    "projectTransfer": [
      "create"
    ],
    "rateLimit": [
      "create"
    ],
    "redis": [
      "create"
    ],
    "remoteCaching": [
      "create"
    ],
    "samlConfig": [
      "create"
    ],
    "secret": [
      "create"
    ],
    "sensitiveEnvironmentVariablePolicy": [
      "create"
    ],
    "sharedEnvVars": [
      "create"
    ],
    "sharedEnvVarsProduction": [
      "create"
    ],
    "spendCapConfiguration": [
      "create"
    ],
    "spendCapState": [
      "create"
    ],
    "supportCase": [
      "create"
    ],
    "supportCaseComment": [
      "create"
    ],
    "team": [
      "create"
    ],
    "teamAccessRequest": [
      "create"
    ],
    "teamFellowMembership": [
      "create"
    ],
    "teamInvite": [
      "create"
    ],
    "teamInviteCode": [
      "create"
    ],
    "teamJoin": [
      "create"
    ],
    "teamOwnMembership": [
      "create"
    ],
    "teamOwnMembershipDisconnectSAML": [
      "create"
    ],
    "token": [
      "create"
    ],
    "usage": [
      "create"
    ],
    "user": [
      "create"
    ],
    "userConnection": [
      "create"
    ],
    "webAnalytics": [
      "create"
    ],
    "webhook": [
      "create"
    ],
    "webhook-event": [
      "create"
    ]
  },
  "protectionBypass": {
    "property1": "string",
    "property2": "string"
  },
  "publicSource": true,
  "rootDirectory": "string",
  "serverlessFunctionRegion": "string",
  "skipGitConnectDuringLink": true,
  "sourceFilesOutsideRootDirectory": true,
  "ssoProtection": {
    "deploymentType": "preview"
  },
  "targets": {
    "foo": "bar"
  },
  "transferCompletedAt": 0,
  "transferStartedAt": 0,
  "transferToAccountId": "string",
  "transferredFromAccountId": "string",
  "updatedAt": 0
}
```

<h3 id="create-a-new-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The project was successfuly created|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>The Bitbucket Webhook for the project link could not be created<br>The Gitlab Webhook for the project link could not be created|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|409|Conflict|A project with the provided name already exists.|None|

<h3 id="create-a-new-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|analytics|object|false|none|none|
|» canceledAt|number \| null|true|none|none|
|» disabledAt|number|true|none|none|
|» enabledAt|number|true|none|none|
|» id|string|true|none|none|
|» paidAt|number|false|none|none|
|» sampleRatePercent|number \| null|false|none|none|
|» spendLimitInDollars|number \| null|false|none|none|
|autoExposeSystemEnvs|boolean|false|none|none|
|buildCommand|string \| null|false|none|none|
|commandForIgnoringBuildStep|string \| null|false|none|none|
|connectConfigurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|devCommand|string \| null|false|none|none|
|directoryListing|boolean|true|none|none|
|enablePreviewFeedback|boolean \| null|false|none|none|
|env|[object]|false|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|true|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|true|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|true|none|none|
|framework|string \| null|false|none|none|
|gitForkProtection|boolean|false|none|none|
|hasFloatingAliases|boolean|false|none|none|
|id|string|true|none|none|
|installCommand|string \| null|false|none|none|
|lastRollbackTarget|object \| null|false|none|none|
|» fromDeploymentId|string|true|none|none|
|» jobStatus|string|true|none|none|
|» requestedAt|number|true|none|none|
|» toDeploymentId|string|true|none|none|
|latestDeployments|[object]|false|none|none|
|» alias|[string]|false|none|none|
|» aliasAssigned|null|false|none|none|
|» » *oneOf*|number|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» aliasError|object \| null|false|none|none|
|» » code|string|true|none|none|
|» » message|string|true|none|none|
|» aliasFinal|string \| null|false|none|none|
|» automaticAliases|[string]|false|none|none|
|» buildingAt|number|false|none|none|
|» builds|[object]|false|none|none|
|» » dest|string|false|none|none|
|» » src|string|false|none|none|
|» » use|string|true|none|none|
|» checksConclusion|string|false|none|none|
|» checksState|string|false|none|none|
|» createdAt|number|true|none|none|
|» createdIn|string|true|none|none|
|» creator|object \| null|true|none|none|
|» » email|string|true|none|none|
|» » githubLogin|string|false|none|none|
|» » gitlabLogin|string|false|none|none|
|» » uid|string|true|none|none|
|» » username|string|true|none|none|
|» deploymentHostname|string|true|none|none|
|» forced|boolean|false|none|none|
|» id|string|true|none|none|
|» meta|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» monorepoManager|string \| null|false|none|none|
|» name|string|true|none|none|
|» plan|string|true|none|none|
|» previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|» private|boolean|true|none|none|
|» readyAt|number|false|none|none|
|» readyState|string|true|none|none|
|» requestedAt|number|false|none|none|
|» target|string \| null|false|none|none|
|» teamId|string \| null|false|none|none|
|» type|string|true|none|none|
|» url|string|true|none|none|
|» userId|string|true|none|none|
|» withCache|boolean|false|none|none|
|link|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» org|string|false|none|none|
|» productionBranch|string|false|none|none|
|» repo|string|false|none|none|
|» repoId|number|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» productionBranch|string|false|none|none|
|» projectId|string|false|none|none|
|» projectName|string|false|none|none|
|» projectNameWithNamespace|string|false|none|none|
|» projectNamespace|string|false|none|none|
|» projectUrl|string|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» name|string|false|none|none|
|» owner|string|false|none|none|
|» productionBranch|string|false|none|none|
|» slug|string|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» uuid|string|false|none|none|
|» workspaceUuid|string|false|none|none|
|live|boolean|false|none|none|
|name|string|true|none|none|
|nodeVersion|string|true|none|none|
|outputDirectory|string \| null|false|none|none|
|passwordProtection|object \| null|false|none|none|
|» deploymentType|string|true|none|none|
|permissions|object|false|none|none|
|» Monitoring|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasGlobal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasProject|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analyticsSampling|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analyticsUsage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» auditLog|[[ACLAction](#schemaaclaction)]|false|none|none|
|» awsBillingIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingAddress|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInformation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoice|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoiceEmailRecipient|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoiceLanguage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingPlan|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingPurchaseOrder|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingTaxId|[[ACLAction](#schemaaclaction)]|false|none|none|
|» cacheArtifact|[[ACLAction](#schemaaclaction)]|false|none|none|
|» cacheArtifactUsageEvent|[[ACLAction](#schemaaclaction)]|false|none|none|
|» concurrentBuilds|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connect|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connectConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connectConfigurationLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deployment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentCheck|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentCheckPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentPrivate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentProductionGit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentRollback|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainAcceptDelegation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainAuthCodes|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainCertificate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainCheckConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainRecord|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainTransferIn|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfigItem|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfigToken|[[ACLAction](#schemaaclaction)]|false|none|none|
|» endpointVerification|[[ACLAction](#schemaaclaction)]|false|none|none|
|» event|[[ACLAction](#schemaaclaction)]|false|none|none|
|» fileUpload|[[ACLAction](#schemaaclaction)]|false|none|none|
|» gitRepository|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfigurationProjects|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfigurationTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationVercelConfigurationOverride|[[ACLAction](#schemaaclaction)]|false|none|none|
|» job|[[ACLAction](#schemaaclaction)]|false|none|none|
|» logDrain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» monitoringChart|[[ACLAction](#schemaaclaction)]|false|none|none|
|» monitoringQuery|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainExpire|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainMoved|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainRenewal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainUnverified|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationPaymentFailed|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationSpendCap|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationUsageAlert|[[ACLAction](#schemaaclaction)]|false|none|none|
|» openTelemetryEndpoint|[[ACLAction](#schemaaclaction)]|false|none|none|
|» passwordProtection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» paymentMethod|[[ACLAction](#schemaaclaction)]|false|none|none|
|» permissions|[[ACLAction](#schemaaclaction)]|false|none|none|
|» previewDeploymentSuffix|[[ACLAction](#schemaaclaction)]|false|none|none|
|» proTrialOnboarding|[[ACLAction](#schemaaclaction)]|false|none|none|
|» project|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDeploymentHook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDomain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDomainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVarsUnownedByIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectIntegrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectMember|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectProductionBranch|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» rateLimit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» redis|[[ACLAction](#schemaaclaction)]|false|none|none|
|» remoteCaching|[[ACLAction](#schemaaclaction)]|false|none|none|
|» samlConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» secret|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sensitiveEnvironmentVariablePolicy|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sharedEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sharedEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» spendCapConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» spendCapState|[[ACLAction](#schemaaclaction)]|false|none|none|
|» supportCase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» supportCaseComment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» team|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamAccessRequest|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamFellowMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamInvite|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamInviteCode|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamJoin|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamOwnMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamOwnMembershipDisconnectSAML|[[ACLAction](#schemaaclaction)]|false|none|none|
|» token|[[ACLAction](#schemaaclaction)]|false|none|none|
|» usage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» user|[[ACLAction](#schemaaclaction)]|false|none|none|
|» userConnection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webAnalytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webhook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webhook-event|[[ACLAction](#schemaaclaction)]|false|none|none|
|protectionBypass|object|false|none|Construct a type with a set of properties K of type T|
|» **additionalProperties**|string|false|none|none|
|publicSource|boolean \| null|false|none|none|
|rootDirectory|string \| null|false|none|none|
|serverlessFunctionRegion|string \| null|false|none|none|
|skipGitConnectDuringLink|boolean|false|none|none|
|sourceFilesOutsideRootDirectory|boolean|false|none|none|
|ssoProtection|object \| null|false|none|none|
|» deploymentType|string|true|none|none|
|targets|object|false|none|An object containing the deployment's metadata|
|» **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|transferCompletedAt|number|false|none|none|
|transferStartedAt|number|false|none|none|
|transferToAccountId|string|false|none|none|
|transferredFromAccountId|string|false|none|none|
|updatedAt|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|framework|blitzjs|
|framework|nextjs|
|framework|gatsby|
|framework|remix|
|framework|astro|
|framework|hexo|
|framework|eleventy|
|framework|docusaurus-2|
|framework|docusaurus|
|framework|preact|
|framework|solidstart|
|framework|dojo|
|framework|ember|
|framework|vue|
|framework|scully|
|framework|ionic-angular|
|framework|angular|
|framework|polymer|
|framework|svelte|
|framework|sveltekit|
|framework|sveltekit-1|
|framework|ionic-react|
|framework|create-react-app|
|framework|gridsome|
|framework|umijs|
|framework|sapper|
|framework|saber|
|framework|stencil|
|framework|nuxtjs|
|framework|redwoodjs|
|framework|hugo|
|framework|jekyll|
|framework|brunch|
|framework|middleman|
|framework|zola|
|framework|hydrogen|
|framework|vite|
|framework|vitepress|
|framework|vuepress|
|framework|parcel|
|framework|sanity|
|» jobStatus|succeeded|
|» jobStatus|failed|
|» jobStatus|skipped|
|» jobStatus|pending|
|» jobStatus|in-progress|
|» checksConclusion|succeeded|
|» checksConclusion|failed|
|» checksConclusion|skipped|
|» checksConclusion|canceled|
|» checksState|registered|
|» checksState|running|
|» checksState|completed|
|» plan|hobby|
|» plan|enterprise|
|» plan|pro|
|» plan|oss|
|» readyState|BUILDING|
|» readyState|ERROR|
|» readyState|INITIALIZING|
|» readyState|QUEUED|
|» readyState|READY|
|» readyState|CANCELED|
|» type|LAMBDAS|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|nodeVersion|18.x|
|nodeVersion|16.x|
|nodeVersion|14.x|
|nodeVersion|12.x|
|nodeVersion|10.x|
|» deploymentType|preview|
|» deploymentType|all|
|» Monitoring|create|
|» Monitoring|delete|
|» Monitoring|read|
|» Monitoring|update|
|» Monitoring|list|
|» Monitoring|count|
|» aliasGlobal|create|
|» aliasGlobal|delete|
|» aliasGlobal|read|
|» aliasGlobal|update|
|» aliasGlobal|list|
|» aliasGlobal|count|
|» aliasProject|create|
|» aliasProject|delete|
|» aliasProject|read|
|» aliasProject|update|
|» aliasProject|list|
|» aliasProject|count|
|» aliasProtectionBypass|create|
|» aliasProtectionBypass|delete|
|» aliasProtectionBypass|read|
|» aliasProtectionBypass|update|
|» aliasProtectionBypass|list|
|» aliasProtectionBypass|count|
|» analytics|create|
|» analytics|delete|
|» analytics|read|
|» analytics|update|
|» analytics|list|
|» analytics|count|
|» analyticsSampling|create|
|» analyticsSampling|delete|
|» analyticsSampling|read|
|» analyticsSampling|update|
|» analyticsSampling|list|
|» analyticsSampling|count|
|» analyticsUsage|create|
|» analyticsUsage|delete|
|» analyticsUsage|read|
|» analyticsUsage|update|
|» analyticsUsage|list|
|» analyticsUsage|count|
|» auditLog|create|
|» auditLog|delete|
|» auditLog|read|
|» auditLog|update|
|» auditLog|list|
|» auditLog|count|
|» awsBillingIntegration|create|
|» awsBillingIntegration|delete|
|» awsBillingIntegration|read|
|» awsBillingIntegration|update|
|» awsBillingIntegration|list|
|» awsBillingIntegration|count|
|» billingAddress|create|
|» billingAddress|delete|
|» billingAddress|read|
|» billingAddress|update|
|» billingAddress|list|
|» billingAddress|count|
|» billingInformation|create|
|» billingInformation|delete|
|» billingInformation|read|
|» billingInformation|update|
|» billingInformation|list|
|» billingInformation|count|
|» billingInvoice|create|
|» billingInvoice|delete|
|» billingInvoice|read|
|» billingInvoice|update|
|» billingInvoice|list|
|» billingInvoice|count|
|» billingInvoiceEmailRecipient|create|
|» billingInvoiceEmailRecipient|delete|
|» billingInvoiceEmailRecipient|read|
|» billingInvoiceEmailRecipient|update|
|» billingInvoiceEmailRecipient|list|
|» billingInvoiceEmailRecipient|count|
|» billingInvoiceLanguage|create|
|» billingInvoiceLanguage|delete|
|» billingInvoiceLanguage|read|
|» billingInvoiceLanguage|update|
|» billingInvoiceLanguage|list|
|» billingInvoiceLanguage|count|
|» billingPlan|create|
|» billingPlan|delete|
|» billingPlan|read|
|» billingPlan|update|
|» billingPlan|list|
|» billingPlan|count|
|» billingPurchaseOrder|create|
|» billingPurchaseOrder|delete|
|» billingPurchaseOrder|read|
|» billingPurchaseOrder|update|
|» billingPurchaseOrder|list|
|» billingPurchaseOrder|count|
|» billingTaxId|create|
|» billingTaxId|delete|
|» billingTaxId|read|
|» billingTaxId|update|
|» billingTaxId|list|
|» billingTaxId|count|
|» cacheArtifact|create|
|» cacheArtifact|delete|
|» cacheArtifact|read|
|» cacheArtifact|update|
|» cacheArtifact|list|
|» cacheArtifact|count|
|» cacheArtifactUsageEvent|create|
|» cacheArtifactUsageEvent|delete|
|» cacheArtifactUsageEvent|read|
|» cacheArtifactUsageEvent|update|
|» cacheArtifactUsageEvent|list|
|» cacheArtifactUsageEvent|count|
|» concurrentBuilds|create|
|» concurrentBuilds|delete|
|» concurrentBuilds|read|
|» concurrentBuilds|update|
|» concurrentBuilds|list|
|» concurrentBuilds|count|
|» connect|create|
|» connect|delete|
|» connect|read|
|» connect|update|
|» connect|list|
|» connect|count|
|» connectConfiguration|create|
|» connectConfiguration|delete|
|» connectConfiguration|read|
|» connectConfiguration|update|
|» connectConfiguration|list|
|» connectConfiguration|count|
|» connectConfigurationLink|create|
|» connectConfigurationLink|delete|
|» connectConfigurationLink|read|
|» connectConfigurationLink|update|
|» connectConfigurationLink|list|
|» connectConfigurationLink|count|
|» deployment|create|
|» deployment|delete|
|» deployment|read|
|» deployment|update|
|» deployment|list|
|» deployment|count|
|» deploymentCheck|create|
|» deploymentCheck|delete|
|» deploymentCheck|read|
|» deploymentCheck|update|
|» deploymentCheck|list|
|» deploymentCheck|count|
|» deploymentCheckPreview|create|
|» deploymentCheckPreview|delete|
|» deploymentCheckPreview|read|
|» deploymentCheckPreview|update|
|» deploymentCheckPreview|list|
|» deploymentCheckPreview|count|
|» deploymentPreview|create|
|» deploymentPreview|delete|
|» deploymentPreview|read|
|» deploymentPreview|update|
|» deploymentPreview|list|
|» deploymentPreview|count|
|» deploymentPrivate|create|
|» deploymentPrivate|delete|
|» deploymentPrivate|read|
|» deploymentPrivate|update|
|» deploymentPrivate|list|
|» deploymentPrivate|count|
|» deploymentProductionGit|create|
|» deploymentProductionGit|delete|
|» deploymentProductionGit|read|
|» deploymentProductionGit|update|
|» deploymentProductionGit|list|
|» deploymentProductionGit|count|
|» deploymentRollback|create|
|» deploymentRollback|delete|
|» deploymentRollback|read|
|» deploymentRollback|update|
|» deploymentRollback|list|
|» deploymentRollback|count|
|» domain|create|
|» domain|delete|
|» domain|read|
|» domain|update|
|» domain|list|
|» domain|count|
|» domainAcceptDelegation|create|
|» domainAcceptDelegation|delete|
|» domainAcceptDelegation|read|
|» domainAcceptDelegation|update|
|» domainAcceptDelegation|list|
|» domainAcceptDelegation|count|
|» domainAuthCodes|create|
|» domainAuthCodes|delete|
|» domainAuthCodes|read|
|» domainAuthCodes|update|
|» domainAuthCodes|list|
|» domainAuthCodes|count|
|» domainCertificate|create|
|» domainCertificate|delete|
|» domainCertificate|read|
|» domainCertificate|update|
|» domainCertificate|list|
|» domainCertificate|count|
|» domainCheckConfig|create|
|» domainCheckConfig|delete|
|» domainCheckConfig|read|
|» domainCheckConfig|update|
|» domainCheckConfig|list|
|» domainCheckConfig|count|
|» domainMove|create|
|» domainMove|delete|
|» domainMove|read|
|» domainMove|update|
|» domainMove|list|
|» domainMove|count|
|» domainPurchase|create|
|» domainPurchase|delete|
|» domainPurchase|read|
|» domainPurchase|update|
|» domainPurchase|list|
|» domainPurchase|count|
|» domainRecord|create|
|» domainRecord|delete|
|» domainRecord|read|
|» domainRecord|update|
|» domainRecord|list|
|» domainRecord|count|
|» domainTransferIn|create|
|» domainTransferIn|delete|
|» domainTransferIn|read|
|» domainTransferIn|update|
|» domainTransferIn|list|
|» domainTransferIn|count|
|» edgeConfig|create|
|» edgeConfig|delete|
|» edgeConfig|read|
|» edgeConfig|update|
|» edgeConfig|list|
|» edgeConfig|count|
|» edgeConfigItem|create|
|» edgeConfigItem|delete|
|» edgeConfigItem|read|
|» edgeConfigItem|update|
|» edgeConfigItem|list|
|» edgeConfigItem|count|
|» edgeConfigToken|create|
|» edgeConfigToken|delete|
|» edgeConfigToken|read|
|» edgeConfigToken|update|
|» edgeConfigToken|list|
|» edgeConfigToken|count|
|» endpointVerification|create|
|» endpointVerification|delete|
|» endpointVerification|read|
|» endpointVerification|update|
|» endpointVerification|list|
|» endpointVerification|count|
|» event|create|
|» event|delete|
|» event|read|
|» event|update|
|» event|list|
|» event|count|
|» fileUpload|create|
|» fileUpload|delete|
|» fileUpload|read|
|» fileUpload|update|
|» fileUpload|list|
|» fileUpload|count|
|» gitRepository|create|
|» gitRepository|delete|
|» gitRepository|read|
|» gitRepository|update|
|» gitRepository|list|
|» gitRepository|count|
|» integration|create|
|» integration|delete|
|» integration|read|
|» integration|update|
|» integration|list|
|» integration|count|
|» integrationConfiguration|create|
|» integrationConfiguration|delete|
|» integrationConfiguration|read|
|» integrationConfiguration|update|
|» integrationConfiguration|list|
|» integrationConfiguration|count|
|» integrationConfigurationProjects|create|
|» integrationConfigurationProjects|delete|
|» integrationConfigurationProjects|read|
|» integrationConfigurationProjects|update|
|» integrationConfigurationProjects|list|
|» integrationConfigurationProjects|count|
|» integrationConfigurationTransfer|create|
|» integrationConfigurationTransfer|delete|
|» integrationConfigurationTransfer|read|
|» integrationConfigurationTransfer|update|
|» integrationConfigurationTransfer|list|
|» integrationConfigurationTransfer|count|
|» integrationVercelConfigurationOverride|create|
|» integrationVercelConfigurationOverride|delete|
|» integrationVercelConfigurationOverride|read|
|» integrationVercelConfigurationOverride|update|
|» integrationVercelConfigurationOverride|list|
|» integrationVercelConfigurationOverride|count|
|» job|create|
|» job|delete|
|» job|read|
|» job|update|
|» job|list|
|» job|count|
|» logDrain|create|
|» logDrain|delete|
|» logDrain|read|
|» logDrain|update|
|» logDrain|list|
|» logDrain|count|
|» monitoringChart|create|
|» monitoringChart|delete|
|» monitoringChart|read|
|» monitoringChart|update|
|» monitoringChart|list|
|» monitoringChart|count|
|» monitoringQuery|create|
|» monitoringQuery|delete|
|» monitoringQuery|read|
|» monitoringQuery|update|
|» monitoringQuery|list|
|» monitoringQuery|count|
|» notificationDomainConfiguration|create|
|» notificationDomainConfiguration|delete|
|» notificationDomainConfiguration|read|
|» notificationDomainConfiguration|update|
|» notificationDomainConfiguration|list|
|» notificationDomainConfiguration|count|
|» notificationDomainExpire|create|
|» notificationDomainExpire|delete|
|» notificationDomainExpire|read|
|» notificationDomainExpire|update|
|» notificationDomainExpire|list|
|» notificationDomainExpire|count|
|» notificationDomainMoved|create|
|» notificationDomainMoved|delete|
|» notificationDomainMoved|read|
|» notificationDomainMoved|update|
|» notificationDomainMoved|list|
|» notificationDomainMoved|count|
|» notificationDomainPurchase|create|
|» notificationDomainPurchase|delete|
|» notificationDomainPurchase|read|
|» notificationDomainPurchase|update|
|» notificationDomainPurchase|list|
|» notificationDomainPurchase|count|
|» notificationDomainRenewal|create|
|» notificationDomainRenewal|delete|
|» notificationDomainRenewal|read|
|» notificationDomainRenewal|update|
|» notificationDomainRenewal|list|
|» notificationDomainRenewal|count|
|» notificationDomainTransfer|create|
|» notificationDomainTransfer|delete|
|» notificationDomainTransfer|read|
|» notificationDomainTransfer|update|
|» notificationDomainTransfer|list|
|» notificationDomainTransfer|count|
|» notificationDomainUnverified|create|
|» notificationDomainUnverified|delete|
|» notificationDomainUnverified|read|
|» notificationDomainUnverified|update|
|» notificationDomainUnverified|list|
|» notificationDomainUnverified|count|
|» notificationPaymentFailed|create|
|» notificationPaymentFailed|delete|
|» notificationPaymentFailed|read|
|» notificationPaymentFailed|update|
|» notificationPaymentFailed|list|
|» notificationPaymentFailed|count|
|» notificationSpendCap|create|
|» notificationSpendCap|delete|
|» notificationSpendCap|read|
|» notificationSpendCap|update|
|» notificationSpendCap|list|
|» notificationSpendCap|count|
|» notificationUsageAlert|create|
|» notificationUsageAlert|delete|
|» notificationUsageAlert|read|
|» notificationUsageAlert|update|
|» notificationUsageAlert|list|
|» notificationUsageAlert|count|
|» openTelemetryEndpoint|create|
|» openTelemetryEndpoint|delete|
|» openTelemetryEndpoint|read|
|» openTelemetryEndpoint|update|
|» openTelemetryEndpoint|list|
|» openTelemetryEndpoint|count|
|» passwordProtection|create|
|» passwordProtection|delete|
|» passwordProtection|read|
|» passwordProtection|update|
|» passwordProtection|list|
|» passwordProtection|count|
|» paymentMethod|create|
|» paymentMethod|delete|
|» paymentMethod|read|
|» paymentMethod|update|
|» paymentMethod|list|
|» paymentMethod|count|
|» permissions|create|
|» permissions|delete|
|» permissions|read|
|» permissions|update|
|» permissions|list|
|» permissions|count|
|» previewDeploymentSuffix|create|
|» previewDeploymentSuffix|delete|
|» previewDeploymentSuffix|read|
|» previewDeploymentSuffix|update|
|» previewDeploymentSuffix|list|
|» previewDeploymentSuffix|count|
|» proTrialOnboarding|create|
|» proTrialOnboarding|delete|
|» proTrialOnboarding|read|
|» proTrialOnboarding|update|
|» proTrialOnboarding|list|
|» proTrialOnboarding|count|
|» project|create|
|» project|delete|
|» project|read|
|» project|update|
|» project|list|
|» project|count|
|» projectDeploymentHook|create|
|» projectDeploymentHook|delete|
|» projectDeploymentHook|read|
|» projectDeploymentHook|update|
|» projectDeploymentHook|list|
|» projectDeploymentHook|count|
|» projectDomain|create|
|» projectDomain|delete|
|» projectDomain|read|
|» projectDomain|update|
|» projectDomain|list|
|» projectDomain|count|
|» projectDomainMove|create|
|» projectDomainMove|delete|
|» projectDomainMove|read|
|» projectDomainMove|update|
|» projectDomainMove|list|
|» projectDomainMove|count|
|» projectEnvVars|create|
|» projectEnvVars|delete|
|» projectEnvVars|read|
|» projectEnvVars|update|
|» projectEnvVars|list|
|» projectEnvVars|count|
|» projectEnvVarsProduction|create|
|» projectEnvVarsProduction|delete|
|» projectEnvVarsProduction|read|
|» projectEnvVarsProduction|update|
|» projectEnvVarsProduction|list|
|» projectEnvVarsProduction|count|
|» projectEnvVarsUnownedByIntegration|create|
|» projectEnvVarsUnownedByIntegration|delete|
|» projectEnvVarsUnownedByIntegration|read|
|» projectEnvVarsUnownedByIntegration|update|
|» projectEnvVarsUnownedByIntegration|list|
|» projectEnvVarsUnownedByIntegration|count|
|» projectIntegrationConfiguration|create|
|» projectIntegrationConfiguration|delete|
|» projectIntegrationConfiguration|read|
|» projectIntegrationConfiguration|update|
|» projectIntegrationConfiguration|list|
|» projectIntegrationConfiguration|count|
|» projectLink|create|
|» projectLink|delete|
|» projectLink|read|
|» projectLink|update|
|» projectLink|list|
|» projectLink|count|
|» projectMember|create|
|» projectMember|delete|
|» projectMember|read|
|» projectMember|update|
|» projectMember|list|
|» projectMember|count|
|» projectProductionBranch|create|
|» projectProductionBranch|delete|
|» projectProductionBranch|read|
|» projectProductionBranch|update|
|» projectProductionBranch|list|
|» projectProductionBranch|count|
|» projectProtectionBypass|create|
|» projectProtectionBypass|delete|
|» projectProtectionBypass|read|
|» projectProtectionBypass|update|
|» projectProtectionBypass|list|
|» projectProtectionBypass|count|
|» projectTransfer|create|
|» projectTransfer|delete|
|» projectTransfer|read|
|» projectTransfer|update|
|» projectTransfer|list|
|» projectTransfer|count|
|» rateLimit|create|
|» rateLimit|delete|
|» rateLimit|read|
|» rateLimit|update|
|» rateLimit|list|
|» rateLimit|count|
|» redis|create|
|» redis|delete|
|» redis|read|
|» redis|update|
|» redis|list|
|» redis|count|
|» remoteCaching|create|
|» remoteCaching|delete|
|» remoteCaching|read|
|» remoteCaching|update|
|» remoteCaching|list|
|» remoteCaching|count|
|» samlConfig|create|
|» samlConfig|delete|
|» samlConfig|read|
|» samlConfig|update|
|» samlConfig|list|
|» samlConfig|count|
|» secret|create|
|» secret|delete|
|» secret|read|
|» secret|update|
|» secret|list|
|» secret|count|
|» sensitiveEnvironmentVariablePolicy|create|
|» sensitiveEnvironmentVariablePolicy|delete|
|» sensitiveEnvironmentVariablePolicy|read|
|» sensitiveEnvironmentVariablePolicy|update|
|» sensitiveEnvironmentVariablePolicy|list|
|» sensitiveEnvironmentVariablePolicy|count|
|» sharedEnvVars|create|
|» sharedEnvVars|delete|
|» sharedEnvVars|read|
|» sharedEnvVars|update|
|» sharedEnvVars|list|
|» sharedEnvVars|count|
|» sharedEnvVarsProduction|create|
|» sharedEnvVarsProduction|delete|
|» sharedEnvVarsProduction|read|
|» sharedEnvVarsProduction|update|
|» sharedEnvVarsProduction|list|
|» sharedEnvVarsProduction|count|
|» spendCapConfiguration|create|
|» spendCapConfiguration|delete|
|» spendCapConfiguration|read|
|» spendCapConfiguration|update|
|» spendCapConfiguration|list|
|» spendCapConfiguration|count|
|» spendCapState|create|
|» spendCapState|delete|
|» spendCapState|read|
|» spendCapState|update|
|» spendCapState|list|
|» spendCapState|count|
|» supportCase|create|
|» supportCase|delete|
|» supportCase|read|
|» supportCase|update|
|» supportCase|list|
|» supportCase|count|
|» supportCaseComment|create|
|» supportCaseComment|delete|
|» supportCaseComment|read|
|» supportCaseComment|update|
|» supportCaseComment|list|
|» supportCaseComment|count|
|» team|create|
|» team|delete|
|» team|read|
|» team|update|
|» team|list|
|» team|count|
|» teamAccessRequest|create|
|» teamAccessRequest|delete|
|» teamAccessRequest|read|
|» teamAccessRequest|update|
|» teamAccessRequest|list|
|» teamAccessRequest|count|
|» teamFellowMembership|create|
|» teamFellowMembership|delete|
|» teamFellowMembership|read|
|» teamFellowMembership|update|
|» teamFellowMembership|list|
|» teamFellowMembership|count|
|» teamInvite|create|
|» teamInvite|delete|
|» teamInvite|read|
|» teamInvite|update|
|» teamInvite|list|
|» teamInvite|count|
|» teamInviteCode|create|
|» teamInviteCode|delete|
|» teamInviteCode|read|
|» teamInviteCode|update|
|» teamInviteCode|list|
|» teamInviteCode|count|
|» teamJoin|create|
|» teamJoin|delete|
|» teamJoin|read|
|» teamJoin|update|
|» teamJoin|list|
|» teamJoin|count|
|» teamOwnMembership|create|
|» teamOwnMembership|delete|
|» teamOwnMembership|read|
|» teamOwnMembership|update|
|» teamOwnMembership|list|
|» teamOwnMembership|count|
|» teamOwnMembershipDisconnectSAML|create|
|» teamOwnMembershipDisconnectSAML|delete|
|» teamOwnMembershipDisconnectSAML|read|
|» teamOwnMembershipDisconnectSAML|update|
|» teamOwnMembershipDisconnectSAML|list|
|» teamOwnMembershipDisconnectSAML|count|
|» token|create|
|» token|delete|
|» token|read|
|» token|update|
|» token|list|
|» token|count|
|» usage|create|
|» usage|delete|
|» usage|read|
|» usage|update|
|» usage|list|
|» usage|count|
|» user|create|
|» user|delete|
|» user|read|
|» user|update|
|» user|list|
|» user|count|
|» userConnection|create|
|» userConnection|delete|
|» userConnection|read|
|» userConnection|update|
|» userConnection|list|
|» userConnection|count|
|» webAnalytics|create|
|» webAnalytics|delete|
|» webAnalytics|read|
|» webAnalytics|update|
|» webAnalytics|list|
|» webAnalytics|count|
|» webhook|create|
|» webhook|delete|
|» webhook|read|
|» webhook|update|
|» webhook|list|
|» webhook|count|
|» webhook-event|create|
|» webhook-event|delete|
|» webhook-event|read|
|» webhook-event|update|
|» webhook-event|list|
|» webhook-event|count|
|» deploymentType|preview|
|» deploymentType|all|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Find a project by id or name

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://example.com/v9/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v9/projects/{idOrName}`

Get the information for a specific project by passing either the project `id` or `name` in the URL.

<h3 id="find-a-project-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string \| boolean|true|The unique project identifier or the project name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "analytics": {
    "canceledAt": 0,
    "disabledAt": 0,
    "enabledAt": 0,
    "id": "string",
    "paidAt": 0,
    "sampleRatePercent": 0,
    "spendLimitInDollars": 0
  },
  "autoExposeSystemEnvs": true,
  "buildCommand": "string",
  "commandForIgnoringBuildStep": "string",
  "connectConfigurationId": "string",
  "createdAt": 0,
  "devCommand": "string",
  "directoryListing": true,
  "enablePreviewFeedback": true,
  "env": [
    {
      "configurationId": "string",
      "createdAt": 0,
      "createdBy": "string",
      "decrypted": true,
      "edgeConfigId": "string",
      "edgeConfigTokenId": "string",
      "gitBranch": "string",
      "id": "string",
      "key": "string",
      "target": [
        "production"
      ],
      "type": "secret",
      "updatedAt": 0,
      "updatedBy": "string",
      "value": "string"
    }
  ],
  "framework": "blitzjs",
  "gitForkProtection": true,
  "hasFloatingAliases": true,
  "id": "string",
  "installCommand": "string",
  "lastRollbackTarget": {
    "fromDeploymentId": "string",
    "jobStatus": "succeeded",
    "requestedAt": 0,
    "toDeploymentId": "string"
  },
  "latestDeployments": [
    {
      "alias": [
        "string"
      ],
      "aliasAssigned": 0,
      "aliasError": {
        "code": "string",
        "message": "string"
      },
      "aliasFinal": "string",
      "automaticAliases": [
        "string"
      ],
      "buildingAt": 0,
      "builds": [
        {
          "dest": "string",
          "src": "string",
          "use": "string"
        }
      ],
      "checksConclusion": "succeeded",
      "checksState": "registered",
      "createdAt": 0,
      "createdIn": "string",
      "creator": {
        "email": "string",
        "githubLogin": "string",
        "gitlabLogin": "string",
        "uid": "string",
        "username": "string"
      },
      "deploymentHostname": "string",
      "forced": true,
      "id": "string",
      "meta": {
        "property1": "string",
        "property2": "string"
      },
      "monorepoManager": "string",
      "name": "string",
      "plan": "hobby",
      "previewCommentsEnabled": false,
      "private": true,
      "readyAt": 0,
      "readyState": "BUILDING",
      "requestedAt": 0,
      "target": "string",
      "teamId": "string",
      "type": "LAMBDAS",
      "url": "string",
      "userId": "string",
      "withCache": true
    }
  ],
  "link": {
    "createdAt": 0,
    "deployHooks": [
      {
        "createdAt": 0,
        "id": "string",
        "name": "string",
        "ref": "string",
        "url": "string"
      }
    ],
    "gitCredentialId": "string",
    "org": "string",
    "productionBranch": "string",
    "repo": "string",
    "repoId": 0,
    "sourceless": true,
    "type": "github",
    "updatedAt": 0
  },
  "live": true,
  "name": "string",
  "nodeVersion": "18.x",
  "outputDirectory": "string",
  "passwordProtection": {
    "deploymentType": "preview"
  },
  "permissions": {
    "Monitoring": [
      "create"
    ],
    "aliasGlobal": [
      "create"
    ],
    "aliasProject": [
      "create"
    ],
    "aliasProtectionBypass": [
      "create"
    ],
    "analytics": [
      "create"
    ],
    "analyticsSampling": [
      "create"
    ],
    "analyticsUsage": [
      "create"
    ],
    "auditLog": [
      "create"
    ],
    "awsBillingIntegration": [
      "create"
    ],
    "billingAddress": [
      "create"
    ],
    "billingInformation": [
      "create"
    ],
    "billingInvoice": [
      "create"
    ],
    "billingInvoiceEmailRecipient": [
      "create"
    ],
    "billingInvoiceLanguage": [
      "create"
    ],
    "billingPlan": [
      "create"
    ],
    "billingPurchaseOrder": [
      "create"
    ],
    "billingTaxId": [
      "create"
    ],
    "cacheArtifact": [
      "create"
    ],
    "cacheArtifactUsageEvent": [
      "create"
    ],
    "concurrentBuilds": [
      "create"
    ],
    "connect": [
      "create"
    ],
    "connectConfiguration": [
      "create"
    ],
    "connectConfigurationLink": [
      "create"
    ],
    "deployment": [
      "create"
    ],
    "deploymentCheck": [
      "create"
    ],
    "deploymentCheckPreview": [
      "create"
    ],
    "deploymentPreview": [
      "create"
    ],
    "deploymentPrivate": [
      "create"
    ],
    "deploymentProductionGit": [
      "create"
    ],
    "deploymentRollback": [
      "create"
    ],
    "domain": [
      "create"
    ],
    "domainAcceptDelegation": [
      "create"
    ],
    "domainAuthCodes": [
      "create"
    ],
    "domainCertificate": [
      "create"
    ],
    "domainCheckConfig": [
      "create"
    ],
    "domainMove": [
      "create"
    ],
    "domainPurchase": [
      "create"
    ],
    "domainRecord": [
      "create"
    ],
    "domainTransferIn": [
      "create"
    ],
    "edgeConfig": [
      "create"
    ],
    "edgeConfigItem": [
      "create"
    ],
    "edgeConfigToken": [
      "create"
    ],
    "endpointVerification": [
      "create"
    ],
    "event": [
      "create"
    ],
    "fileUpload": [
      "create"
    ],
    "gitRepository": [
      "create"
    ],
    "integration": [
      "create"
    ],
    "integrationConfiguration": [
      "create"
    ],
    "integrationConfigurationProjects": [
      "create"
    ],
    "integrationConfigurationTransfer": [
      "create"
    ],
    "integrationVercelConfigurationOverride": [
      "create"
    ],
    "job": [
      "create"
    ],
    "logDrain": [
      "create"
    ],
    "monitoringChart": [
      "create"
    ],
    "monitoringQuery": [
      "create"
    ],
    "notificationDomainConfiguration": [
      "create"
    ],
    "notificationDomainExpire": [
      "create"
    ],
    "notificationDomainMoved": [
      "create"
    ],
    "notificationDomainPurchase": [
      "create"
    ],
    "notificationDomainRenewal": [
      "create"
    ],
    "notificationDomainTransfer": [
      "create"
    ],
    "notificationDomainUnverified": [
      "create"
    ],
    "notificationPaymentFailed": [
      "create"
    ],
    "notificationSpendCap": [
      "create"
    ],
    "notificationUsageAlert": [
      "create"
    ],
    "openTelemetryEndpoint": [
      "create"
    ],
    "passwordProtection": [
      "create"
    ],
    "paymentMethod": [
      "create"
    ],
    "permissions": [
      "create"
    ],
    "previewDeploymentSuffix": [
      "create"
    ],
    "proTrialOnboarding": [
      "create"
    ],
    "project": [
      "create"
    ],
    "projectDeploymentHook": [
      "create"
    ],
    "projectDomain": [
      "create"
    ],
    "projectDomainMove": [
      "create"
    ],
    "projectEnvVars": [
      "create"
    ],
    "projectEnvVarsProduction": [
      "create"
    ],
    "projectEnvVarsUnownedByIntegration": [
      "create"
    ],
    "projectIntegrationConfiguration": [
      "create"
    ],
    "projectLink": [
      "create"
    ],
    "projectMember": [
      "create"
    ],
    "projectProductionBranch": [
      "create"
    ],
    "projectProtectionBypass": [
      "create"
    ],
    "projectTransfer": [
      "create"
    ],
    "rateLimit": [
      "create"
    ],
    "redis": [
      "create"
    ],
    "remoteCaching": [
      "create"
    ],
    "samlConfig": [
      "create"
    ],
    "secret": [
      "create"
    ],
    "sensitiveEnvironmentVariablePolicy": [
      "create"
    ],
    "sharedEnvVars": [
      "create"
    ],
    "sharedEnvVarsProduction": [
      "create"
    ],
    "spendCapConfiguration": [
      "create"
    ],
    "spendCapState": [
      "create"
    ],
    "supportCase": [
      "create"
    ],
    "supportCaseComment": [
      "create"
    ],
    "team": [
      "create"
    ],
    "teamAccessRequest": [
      "create"
    ],
    "teamFellowMembership": [
      "create"
    ],
    "teamInvite": [
      "create"
    ],
    "teamInviteCode": [
      "create"
    ],
    "teamJoin": [
      "create"
    ],
    "teamOwnMembership": [
      "create"
    ],
    "teamOwnMembershipDisconnectSAML": [
      "create"
    ],
    "token": [
      "create"
    ],
    "usage": [
      "create"
    ],
    "user": [
      "create"
    ],
    "userConnection": [
      "create"
    ],
    "webAnalytics": [
      "create"
    ],
    "webhook": [
      "create"
    ],
    "webhook-event": [
      "create"
    ]
  },
  "protectionBypass": {
    "property1": "string",
    "property2": "string"
  },
  "publicSource": true,
  "rootDirectory": "string",
  "serverlessFunctionRegion": "string",
  "skipGitConnectDuringLink": true,
  "sourceFilesOutsideRootDirectory": true,
  "ssoProtection": {
    "deploymentType": "preview"
  },
  "targets": {
    "foo": "bar"
  },
  "transferCompletedAt": 0,
  "transferStartedAt": 0,
  "transferToAccountId": "string",
  "transferredFromAccountId": "string",
  "updatedAt": 0
}
```

<h3 id="find-a-project-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The project information|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The project could not be found|None|

<h3 id="find-a-project-by-id-or-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|analytics|object|false|none|none|
|» canceledAt|number \| null|true|none|none|
|» disabledAt|number|true|none|none|
|» enabledAt|number|true|none|none|
|» id|string|true|none|none|
|» paidAt|number|false|none|none|
|» sampleRatePercent|number \| null|false|none|none|
|» spendLimitInDollars|number \| null|false|none|none|
|autoExposeSystemEnvs|boolean|false|none|none|
|buildCommand|string \| null|false|none|none|
|commandForIgnoringBuildStep|string \| null|false|none|none|
|connectConfigurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|devCommand|string \| null|false|none|none|
|directoryListing|boolean|true|none|none|
|enablePreviewFeedback|boolean \| null|false|none|none|
|env|[object]|false|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|true|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|true|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|true|none|none|
|framework|string \| null|false|none|none|
|gitForkProtection|boolean|false|none|none|
|hasFloatingAliases|boolean|false|none|none|
|id|string|true|none|none|
|installCommand|string \| null|false|none|none|
|lastRollbackTarget|object \| null|false|none|none|
|» fromDeploymentId|string|true|none|none|
|» jobStatus|string|true|none|none|
|» requestedAt|number|true|none|none|
|» toDeploymentId|string|true|none|none|
|latestDeployments|[object]|false|none|none|
|» alias|[string]|false|none|none|
|» aliasAssigned|null|false|none|none|
|» » *oneOf*|number|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» aliasError|object \| null|false|none|none|
|» » code|string|true|none|none|
|» » message|string|true|none|none|
|» aliasFinal|string \| null|false|none|none|
|» automaticAliases|[string]|false|none|none|
|» buildingAt|number|false|none|none|
|» builds|[object]|false|none|none|
|» » dest|string|false|none|none|
|» » src|string|false|none|none|
|» » use|string|true|none|none|
|» checksConclusion|string|false|none|none|
|» checksState|string|false|none|none|
|» createdAt|number|true|none|none|
|» createdIn|string|true|none|none|
|» creator|object \| null|true|none|none|
|» » email|string|true|none|none|
|» » githubLogin|string|false|none|none|
|» » gitlabLogin|string|false|none|none|
|» » uid|string|true|none|none|
|» » username|string|true|none|none|
|» deploymentHostname|string|true|none|none|
|» forced|boolean|false|none|none|
|» id|string|true|none|none|
|» meta|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» monorepoManager|string \| null|false|none|none|
|» name|string|true|none|none|
|» plan|string|true|none|none|
|» previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|» private|boolean|true|none|none|
|» readyAt|number|false|none|none|
|» readyState|string|true|none|none|
|» requestedAt|number|false|none|none|
|» target|string \| null|false|none|none|
|» teamId|string \| null|false|none|none|
|» type|string|true|none|none|
|» url|string|true|none|none|
|» userId|string|true|none|none|
|» withCache|boolean|false|none|none|
|link|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» org|string|false|none|none|
|» productionBranch|string|false|none|none|
|» repo|string|false|none|none|
|» repoId|number|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» productionBranch|string|false|none|none|
|» projectId|string|false|none|none|
|» projectName|string|false|none|none|
|» projectNameWithNamespace|string|false|none|none|
|» projectNamespace|string|false|none|none|
|» projectUrl|string|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» name|string|false|none|none|
|» owner|string|false|none|none|
|» productionBranch|string|false|none|none|
|» slug|string|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» uuid|string|false|none|none|
|» workspaceUuid|string|false|none|none|
|live|boolean|false|none|none|
|name|string|true|none|none|
|nodeVersion|string|true|none|none|
|outputDirectory|string \| null|false|none|none|
|passwordProtection|object \| null|false|none|none|
|» deploymentType|string|true|none|none|
|permissions|object|false|none|none|
|» Monitoring|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasGlobal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasProject|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analyticsSampling|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analyticsUsage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» auditLog|[[ACLAction](#schemaaclaction)]|false|none|none|
|» awsBillingIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingAddress|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInformation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoice|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoiceEmailRecipient|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoiceLanguage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingPlan|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingPurchaseOrder|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingTaxId|[[ACLAction](#schemaaclaction)]|false|none|none|
|» cacheArtifact|[[ACLAction](#schemaaclaction)]|false|none|none|
|» cacheArtifactUsageEvent|[[ACLAction](#schemaaclaction)]|false|none|none|
|» concurrentBuilds|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connect|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connectConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connectConfigurationLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deployment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentCheck|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentCheckPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentPrivate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentProductionGit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentRollback|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainAcceptDelegation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainAuthCodes|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainCertificate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainCheckConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainRecord|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainTransferIn|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfigItem|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfigToken|[[ACLAction](#schemaaclaction)]|false|none|none|
|» endpointVerification|[[ACLAction](#schemaaclaction)]|false|none|none|
|» event|[[ACLAction](#schemaaclaction)]|false|none|none|
|» fileUpload|[[ACLAction](#schemaaclaction)]|false|none|none|
|» gitRepository|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfigurationProjects|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfigurationTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationVercelConfigurationOverride|[[ACLAction](#schemaaclaction)]|false|none|none|
|» job|[[ACLAction](#schemaaclaction)]|false|none|none|
|» logDrain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» monitoringChart|[[ACLAction](#schemaaclaction)]|false|none|none|
|» monitoringQuery|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainExpire|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainMoved|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainRenewal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainUnverified|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationPaymentFailed|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationSpendCap|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationUsageAlert|[[ACLAction](#schemaaclaction)]|false|none|none|
|» openTelemetryEndpoint|[[ACLAction](#schemaaclaction)]|false|none|none|
|» passwordProtection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» paymentMethod|[[ACLAction](#schemaaclaction)]|false|none|none|
|» permissions|[[ACLAction](#schemaaclaction)]|false|none|none|
|» previewDeploymentSuffix|[[ACLAction](#schemaaclaction)]|false|none|none|
|» proTrialOnboarding|[[ACLAction](#schemaaclaction)]|false|none|none|
|» project|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDeploymentHook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDomain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDomainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVarsUnownedByIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectIntegrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectMember|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectProductionBranch|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» rateLimit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» redis|[[ACLAction](#schemaaclaction)]|false|none|none|
|» remoteCaching|[[ACLAction](#schemaaclaction)]|false|none|none|
|» samlConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» secret|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sensitiveEnvironmentVariablePolicy|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sharedEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sharedEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» spendCapConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» spendCapState|[[ACLAction](#schemaaclaction)]|false|none|none|
|» supportCase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» supportCaseComment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» team|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamAccessRequest|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamFellowMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamInvite|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamInviteCode|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamJoin|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamOwnMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamOwnMembershipDisconnectSAML|[[ACLAction](#schemaaclaction)]|false|none|none|
|» token|[[ACLAction](#schemaaclaction)]|false|none|none|
|» usage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» user|[[ACLAction](#schemaaclaction)]|false|none|none|
|» userConnection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webAnalytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webhook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webhook-event|[[ACLAction](#schemaaclaction)]|false|none|none|
|protectionBypass|object|false|none|Construct a type with a set of properties K of type T|
|» **additionalProperties**|string|false|none|none|
|publicSource|boolean \| null|false|none|none|
|rootDirectory|string \| null|false|none|none|
|serverlessFunctionRegion|string \| null|false|none|none|
|skipGitConnectDuringLink|boolean|false|none|none|
|sourceFilesOutsideRootDirectory|boolean|false|none|none|
|ssoProtection|object \| null|false|none|none|
|» deploymentType|string|true|none|none|
|targets|object|false|none|An object containing the deployment's metadata|
|» **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|transferCompletedAt|number|false|none|none|
|transferStartedAt|number|false|none|none|
|transferToAccountId|string|false|none|none|
|transferredFromAccountId|string|false|none|none|
|updatedAt|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|framework|blitzjs|
|framework|nextjs|
|framework|gatsby|
|framework|remix|
|framework|astro|
|framework|hexo|
|framework|eleventy|
|framework|docusaurus-2|
|framework|docusaurus|
|framework|preact|
|framework|solidstart|
|framework|dojo|
|framework|ember|
|framework|vue|
|framework|scully|
|framework|ionic-angular|
|framework|angular|
|framework|polymer|
|framework|svelte|
|framework|sveltekit|
|framework|sveltekit-1|
|framework|ionic-react|
|framework|create-react-app|
|framework|gridsome|
|framework|umijs|
|framework|sapper|
|framework|saber|
|framework|stencil|
|framework|nuxtjs|
|framework|redwoodjs|
|framework|hugo|
|framework|jekyll|
|framework|brunch|
|framework|middleman|
|framework|zola|
|framework|hydrogen|
|framework|vite|
|framework|vitepress|
|framework|vuepress|
|framework|parcel|
|framework|sanity|
|» jobStatus|succeeded|
|» jobStatus|failed|
|» jobStatus|skipped|
|» jobStatus|pending|
|» jobStatus|in-progress|
|» checksConclusion|succeeded|
|» checksConclusion|failed|
|» checksConclusion|skipped|
|» checksConclusion|canceled|
|» checksState|registered|
|» checksState|running|
|» checksState|completed|
|» plan|hobby|
|» plan|enterprise|
|» plan|pro|
|» plan|oss|
|» readyState|BUILDING|
|» readyState|ERROR|
|» readyState|INITIALIZING|
|» readyState|QUEUED|
|» readyState|READY|
|» readyState|CANCELED|
|» type|LAMBDAS|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|nodeVersion|18.x|
|nodeVersion|16.x|
|nodeVersion|14.x|
|nodeVersion|12.x|
|nodeVersion|10.x|
|» deploymentType|preview|
|» deploymentType|all|
|» Monitoring|create|
|» Monitoring|delete|
|» Monitoring|read|
|» Monitoring|update|
|» Monitoring|list|
|» Monitoring|count|
|» aliasGlobal|create|
|» aliasGlobal|delete|
|» aliasGlobal|read|
|» aliasGlobal|update|
|» aliasGlobal|list|
|» aliasGlobal|count|
|» aliasProject|create|
|» aliasProject|delete|
|» aliasProject|read|
|» aliasProject|update|
|» aliasProject|list|
|» aliasProject|count|
|» aliasProtectionBypass|create|
|» aliasProtectionBypass|delete|
|» aliasProtectionBypass|read|
|» aliasProtectionBypass|update|
|» aliasProtectionBypass|list|
|» aliasProtectionBypass|count|
|» analytics|create|
|» analytics|delete|
|» analytics|read|
|» analytics|update|
|» analytics|list|
|» analytics|count|
|» analyticsSampling|create|
|» analyticsSampling|delete|
|» analyticsSampling|read|
|» analyticsSampling|update|
|» analyticsSampling|list|
|» analyticsSampling|count|
|» analyticsUsage|create|
|» analyticsUsage|delete|
|» analyticsUsage|read|
|» analyticsUsage|update|
|» analyticsUsage|list|
|» analyticsUsage|count|
|» auditLog|create|
|» auditLog|delete|
|» auditLog|read|
|» auditLog|update|
|» auditLog|list|
|» auditLog|count|
|» awsBillingIntegration|create|
|» awsBillingIntegration|delete|
|» awsBillingIntegration|read|
|» awsBillingIntegration|update|
|» awsBillingIntegration|list|
|» awsBillingIntegration|count|
|» billingAddress|create|
|» billingAddress|delete|
|» billingAddress|read|
|» billingAddress|update|
|» billingAddress|list|
|» billingAddress|count|
|» billingInformation|create|
|» billingInformation|delete|
|» billingInformation|read|
|» billingInformation|update|
|» billingInformation|list|
|» billingInformation|count|
|» billingInvoice|create|
|» billingInvoice|delete|
|» billingInvoice|read|
|» billingInvoice|update|
|» billingInvoice|list|
|» billingInvoice|count|
|» billingInvoiceEmailRecipient|create|
|» billingInvoiceEmailRecipient|delete|
|» billingInvoiceEmailRecipient|read|
|» billingInvoiceEmailRecipient|update|
|» billingInvoiceEmailRecipient|list|
|» billingInvoiceEmailRecipient|count|
|» billingInvoiceLanguage|create|
|» billingInvoiceLanguage|delete|
|» billingInvoiceLanguage|read|
|» billingInvoiceLanguage|update|
|» billingInvoiceLanguage|list|
|» billingInvoiceLanguage|count|
|» billingPlan|create|
|» billingPlan|delete|
|» billingPlan|read|
|» billingPlan|update|
|» billingPlan|list|
|» billingPlan|count|
|» billingPurchaseOrder|create|
|» billingPurchaseOrder|delete|
|» billingPurchaseOrder|read|
|» billingPurchaseOrder|update|
|» billingPurchaseOrder|list|
|» billingPurchaseOrder|count|
|» billingTaxId|create|
|» billingTaxId|delete|
|» billingTaxId|read|
|» billingTaxId|update|
|» billingTaxId|list|
|» billingTaxId|count|
|» cacheArtifact|create|
|» cacheArtifact|delete|
|» cacheArtifact|read|
|» cacheArtifact|update|
|» cacheArtifact|list|
|» cacheArtifact|count|
|» cacheArtifactUsageEvent|create|
|» cacheArtifactUsageEvent|delete|
|» cacheArtifactUsageEvent|read|
|» cacheArtifactUsageEvent|update|
|» cacheArtifactUsageEvent|list|
|» cacheArtifactUsageEvent|count|
|» concurrentBuilds|create|
|» concurrentBuilds|delete|
|» concurrentBuilds|read|
|» concurrentBuilds|update|
|» concurrentBuilds|list|
|» concurrentBuilds|count|
|» connect|create|
|» connect|delete|
|» connect|read|
|» connect|update|
|» connect|list|
|» connect|count|
|» connectConfiguration|create|
|» connectConfiguration|delete|
|» connectConfiguration|read|
|» connectConfiguration|update|
|» connectConfiguration|list|
|» connectConfiguration|count|
|» connectConfigurationLink|create|
|» connectConfigurationLink|delete|
|» connectConfigurationLink|read|
|» connectConfigurationLink|update|
|» connectConfigurationLink|list|
|» connectConfigurationLink|count|
|» deployment|create|
|» deployment|delete|
|» deployment|read|
|» deployment|update|
|» deployment|list|
|» deployment|count|
|» deploymentCheck|create|
|» deploymentCheck|delete|
|» deploymentCheck|read|
|» deploymentCheck|update|
|» deploymentCheck|list|
|» deploymentCheck|count|
|» deploymentCheckPreview|create|
|» deploymentCheckPreview|delete|
|» deploymentCheckPreview|read|
|» deploymentCheckPreview|update|
|» deploymentCheckPreview|list|
|» deploymentCheckPreview|count|
|» deploymentPreview|create|
|» deploymentPreview|delete|
|» deploymentPreview|read|
|» deploymentPreview|update|
|» deploymentPreview|list|
|» deploymentPreview|count|
|» deploymentPrivate|create|
|» deploymentPrivate|delete|
|» deploymentPrivate|read|
|» deploymentPrivate|update|
|» deploymentPrivate|list|
|» deploymentPrivate|count|
|» deploymentProductionGit|create|
|» deploymentProductionGit|delete|
|» deploymentProductionGit|read|
|» deploymentProductionGit|update|
|» deploymentProductionGit|list|
|» deploymentProductionGit|count|
|» deploymentRollback|create|
|» deploymentRollback|delete|
|» deploymentRollback|read|
|» deploymentRollback|update|
|» deploymentRollback|list|
|» deploymentRollback|count|
|» domain|create|
|» domain|delete|
|» domain|read|
|» domain|update|
|» domain|list|
|» domain|count|
|» domainAcceptDelegation|create|
|» domainAcceptDelegation|delete|
|» domainAcceptDelegation|read|
|» domainAcceptDelegation|update|
|» domainAcceptDelegation|list|
|» domainAcceptDelegation|count|
|» domainAuthCodes|create|
|» domainAuthCodes|delete|
|» domainAuthCodes|read|
|» domainAuthCodes|update|
|» domainAuthCodes|list|
|» domainAuthCodes|count|
|» domainCertificate|create|
|» domainCertificate|delete|
|» domainCertificate|read|
|» domainCertificate|update|
|» domainCertificate|list|
|» domainCertificate|count|
|» domainCheckConfig|create|
|» domainCheckConfig|delete|
|» domainCheckConfig|read|
|» domainCheckConfig|update|
|» domainCheckConfig|list|
|» domainCheckConfig|count|
|» domainMove|create|
|» domainMove|delete|
|» domainMove|read|
|» domainMove|update|
|» domainMove|list|
|» domainMove|count|
|» domainPurchase|create|
|» domainPurchase|delete|
|» domainPurchase|read|
|» domainPurchase|update|
|» domainPurchase|list|
|» domainPurchase|count|
|» domainRecord|create|
|» domainRecord|delete|
|» domainRecord|read|
|» domainRecord|update|
|» domainRecord|list|
|» domainRecord|count|
|» domainTransferIn|create|
|» domainTransferIn|delete|
|» domainTransferIn|read|
|» domainTransferIn|update|
|» domainTransferIn|list|
|» domainTransferIn|count|
|» edgeConfig|create|
|» edgeConfig|delete|
|» edgeConfig|read|
|» edgeConfig|update|
|» edgeConfig|list|
|» edgeConfig|count|
|» edgeConfigItem|create|
|» edgeConfigItem|delete|
|» edgeConfigItem|read|
|» edgeConfigItem|update|
|» edgeConfigItem|list|
|» edgeConfigItem|count|
|» edgeConfigToken|create|
|» edgeConfigToken|delete|
|» edgeConfigToken|read|
|» edgeConfigToken|update|
|» edgeConfigToken|list|
|» edgeConfigToken|count|
|» endpointVerification|create|
|» endpointVerification|delete|
|» endpointVerification|read|
|» endpointVerification|update|
|» endpointVerification|list|
|» endpointVerification|count|
|» event|create|
|» event|delete|
|» event|read|
|» event|update|
|» event|list|
|» event|count|
|» fileUpload|create|
|» fileUpload|delete|
|» fileUpload|read|
|» fileUpload|update|
|» fileUpload|list|
|» fileUpload|count|
|» gitRepository|create|
|» gitRepository|delete|
|» gitRepository|read|
|» gitRepository|update|
|» gitRepository|list|
|» gitRepository|count|
|» integration|create|
|» integration|delete|
|» integration|read|
|» integration|update|
|» integration|list|
|» integration|count|
|» integrationConfiguration|create|
|» integrationConfiguration|delete|
|» integrationConfiguration|read|
|» integrationConfiguration|update|
|» integrationConfiguration|list|
|» integrationConfiguration|count|
|» integrationConfigurationProjects|create|
|» integrationConfigurationProjects|delete|
|» integrationConfigurationProjects|read|
|» integrationConfigurationProjects|update|
|» integrationConfigurationProjects|list|
|» integrationConfigurationProjects|count|
|» integrationConfigurationTransfer|create|
|» integrationConfigurationTransfer|delete|
|» integrationConfigurationTransfer|read|
|» integrationConfigurationTransfer|update|
|» integrationConfigurationTransfer|list|
|» integrationConfigurationTransfer|count|
|» integrationVercelConfigurationOverride|create|
|» integrationVercelConfigurationOverride|delete|
|» integrationVercelConfigurationOverride|read|
|» integrationVercelConfigurationOverride|update|
|» integrationVercelConfigurationOverride|list|
|» integrationVercelConfigurationOverride|count|
|» job|create|
|» job|delete|
|» job|read|
|» job|update|
|» job|list|
|» job|count|
|» logDrain|create|
|» logDrain|delete|
|» logDrain|read|
|» logDrain|update|
|» logDrain|list|
|» logDrain|count|
|» monitoringChart|create|
|» monitoringChart|delete|
|» monitoringChart|read|
|» monitoringChart|update|
|» monitoringChart|list|
|» monitoringChart|count|
|» monitoringQuery|create|
|» monitoringQuery|delete|
|» monitoringQuery|read|
|» monitoringQuery|update|
|» monitoringQuery|list|
|» monitoringQuery|count|
|» notificationDomainConfiguration|create|
|» notificationDomainConfiguration|delete|
|» notificationDomainConfiguration|read|
|» notificationDomainConfiguration|update|
|» notificationDomainConfiguration|list|
|» notificationDomainConfiguration|count|
|» notificationDomainExpire|create|
|» notificationDomainExpire|delete|
|» notificationDomainExpire|read|
|» notificationDomainExpire|update|
|» notificationDomainExpire|list|
|» notificationDomainExpire|count|
|» notificationDomainMoved|create|
|» notificationDomainMoved|delete|
|» notificationDomainMoved|read|
|» notificationDomainMoved|update|
|» notificationDomainMoved|list|
|» notificationDomainMoved|count|
|» notificationDomainPurchase|create|
|» notificationDomainPurchase|delete|
|» notificationDomainPurchase|read|
|» notificationDomainPurchase|update|
|» notificationDomainPurchase|list|
|» notificationDomainPurchase|count|
|» notificationDomainRenewal|create|
|» notificationDomainRenewal|delete|
|» notificationDomainRenewal|read|
|» notificationDomainRenewal|update|
|» notificationDomainRenewal|list|
|» notificationDomainRenewal|count|
|» notificationDomainTransfer|create|
|» notificationDomainTransfer|delete|
|» notificationDomainTransfer|read|
|» notificationDomainTransfer|update|
|» notificationDomainTransfer|list|
|» notificationDomainTransfer|count|
|» notificationDomainUnverified|create|
|» notificationDomainUnverified|delete|
|» notificationDomainUnverified|read|
|» notificationDomainUnverified|update|
|» notificationDomainUnverified|list|
|» notificationDomainUnverified|count|
|» notificationPaymentFailed|create|
|» notificationPaymentFailed|delete|
|» notificationPaymentFailed|read|
|» notificationPaymentFailed|update|
|» notificationPaymentFailed|list|
|» notificationPaymentFailed|count|
|» notificationSpendCap|create|
|» notificationSpendCap|delete|
|» notificationSpendCap|read|
|» notificationSpendCap|update|
|» notificationSpendCap|list|
|» notificationSpendCap|count|
|» notificationUsageAlert|create|
|» notificationUsageAlert|delete|
|» notificationUsageAlert|read|
|» notificationUsageAlert|update|
|» notificationUsageAlert|list|
|» notificationUsageAlert|count|
|» openTelemetryEndpoint|create|
|» openTelemetryEndpoint|delete|
|» openTelemetryEndpoint|read|
|» openTelemetryEndpoint|update|
|» openTelemetryEndpoint|list|
|» openTelemetryEndpoint|count|
|» passwordProtection|create|
|» passwordProtection|delete|
|» passwordProtection|read|
|» passwordProtection|update|
|» passwordProtection|list|
|» passwordProtection|count|
|» paymentMethod|create|
|» paymentMethod|delete|
|» paymentMethod|read|
|» paymentMethod|update|
|» paymentMethod|list|
|» paymentMethod|count|
|» permissions|create|
|» permissions|delete|
|» permissions|read|
|» permissions|update|
|» permissions|list|
|» permissions|count|
|» previewDeploymentSuffix|create|
|» previewDeploymentSuffix|delete|
|» previewDeploymentSuffix|read|
|» previewDeploymentSuffix|update|
|» previewDeploymentSuffix|list|
|» previewDeploymentSuffix|count|
|» proTrialOnboarding|create|
|» proTrialOnboarding|delete|
|» proTrialOnboarding|read|
|» proTrialOnboarding|update|
|» proTrialOnboarding|list|
|» proTrialOnboarding|count|
|» project|create|
|» project|delete|
|» project|read|
|» project|update|
|» project|list|
|» project|count|
|» projectDeploymentHook|create|
|» projectDeploymentHook|delete|
|» projectDeploymentHook|read|
|» projectDeploymentHook|update|
|» projectDeploymentHook|list|
|» projectDeploymentHook|count|
|» projectDomain|create|
|» projectDomain|delete|
|» projectDomain|read|
|» projectDomain|update|
|» projectDomain|list|
|» projectDomain|count|
|» projectDomainMove|create|
|» projectDomainMove|delete|
|» projectDomainMove|read|
|» projectDomainMove|update|
|» projectDomainMove|list|
|» projectDomainMove|count|
|» projectEnvVars|create|
|» projectEnvVars|delete|
|» projectEnvVars|read|
|» projectEnvVars|update|
|» projectEnvVars|list|
|» projectEnvVars|count|
|» projectEnvVarsProduction|create|
|» projectEnvVarsProduction|delete|
|» projectEnvVarsProduction|read|
|» projectEnvVarsProduction|update|
|» projectEnvVarsProduction|list|
|» projectEnvVarsProduction|count|
|» projectEnvVarsUnownedByIntegration|create|
|» projectEnvVarsUnownedByIntegration|delete|
|» projectEnvVarsUnownedByIntegration|read|
|» projectEnvVarsUnownedByIntegration|update|
|» projectEnvVarsUnownedByIntegration|list|
|» projectEnvVarsUnownedByIntegration|count|
|» projectIntegrationConfiguration|create|
|» projectIntegrationConfiguration|delete|
|» projectIntegrationConfiguration|read|
|» projectIntegrationConfiguration|update|
|» projectIntegrationConfiguration|list|
|» projectIntegrationConfiguration|count|
|» projectLink|create|
|» projectLink|delete|
|» projectLink|read|
|» projectLink|update|
|» projectLink|list|
|» projectLink|count|
|» projectMember|create|
|» projectMember|delete|
|» projectMember|read|
|» projectMember|update|
|» projectMember|list|
|» projectMember|count|
|» projectProductionBranch|create|
|» projectProductionBranch|delete|
|» projectProductionBranch|read|
|» projectProductionBranch|update|
|» projectProductionBranch|list|
|» projectProductionBranch|count|
|» projectProtectionBypass|create|
|» projectProtectionBypass|delete|
|» projectProtectionBypass|read|
|» projectProtectionBypass|update|
|» projectProtectionBypass|list|
|» projectProtectionBypass|count|
|» projectTransfer|create|
|» projectTransfer|delete|
|» projectTransfer|read|
|» projectTransfer|update|
|» projectTransfer|list|
|» projectTransfer|count|
|» rateLimit|create|
|» rateLimit|delete|
|» rateLimit|read|
|» rateLimit|update|
|» rateLimit|list|
|» rateLimit|count|
|» redis|create|
|» redis|delete|
|» redis|read|
|» redis|update|
|» redis|list|
|» redis|count|
|» remoteCaching|create|
|» remoteCaching|delete|
|» remoteCaching|read|
|» remoteCaching|update|
|» remoteCaching|list|
|» remoteCaching|count|
|» samlConfig|create|
|» samlConfig|delete|
|» samlConfig|read|
|» samlConfig|update|
|» samlConfig|list|
|» samlConfig|count|
|» secret|create|
|» secret|delete|
|» secret|read|
|» secret|update|
|» secret|list|
|» secret|count|
|» sensitiveEnvironmentVariablePolicy|create|
|» sensitiveEnvironmentVariablePolicy|delete|
|» sensitiveEnvironmentVariablePolicy|read|
|» sensitiveEnvironmentVariablePolicy|update|
|» sensitiveEnvironmentVariablePolicy|list|
|» sensitiveEnvironmentVariablePolicy|count|
|» sharedEnvVars|create|
|» sharedEnvVars|delete|
|» sharedEnvVars|read|
|» sharedEnvVars|update|
|» sharedEnvVars|list|
|» sharedEnvVars|count|
|» sharedEnvVarsProduction|create|
|» sharedEnvVarsProduction|delete|
|» sharedEnvVarsProduction|read|
|» sharedEnvVarsProduction|update|
|» sharedEnvVarsProduction|list|
|» sharedEnvVarsProduction|count|
|» spendCapConfiguration|create|
|» spendCapConfiguration|delete|
|» spendCapConfiguration|read|
|» spendCapConfiguration|update|
|» spendCapConfiguration|list|
|» spendCapConfiguration|count|
|» spendCapState|create|
|» spendCapState|delete|
|» spendCapState|read|
|» spendCapState|update|
|» spendCapState|list|
|» spendCapState|count|
|» supportCase|create|
|» supportCase|delete|
|» supportCase|read|
|» supportCase|update|
|» supportCase|list|
|» supportCase|count|
|» supportCaseComment|create|
|» supportCaseComment|delete|
|» supportCaseComment|read|
|» supportCaseComment|update|
|» supportCaseComment|list|
|» supportCaseComment|count|
|» team|create|
|» team|delete|
|» team|read|
|» team|update|
|» team|list|
|» team|count|
|» teamAccessRequest|create|
|» teamAccessRequest|delete|
|» teamAccessRequest|read|
|» teamAccessRequest|update|
|» teamAccessRequest|list|
|» teamAccessRequest|count|
|» teamFellowMembership|create|
|» teamFellowMembership|delete|
|» teamFellowMembership|read|
|» teamFellowMembership|update|
|» teamFellowMembership|list|
|» teamFellowMembership|count|
|» teamInvite|create|
|» teamInvite|delete|
|» teamInvite|read|
|» teamInvite|update|
|» teamInvite|list|
|» teamInvite|count|
|» teamInviteCode|create|
|» teamInviteCode|delete|
|» teamInviteCode|read|
|» teamInviteCode|update|
|» teamInviteCode|list|
|» teamInviteCode|count|
|» teamJoin|create|
|» teamJoin|delete|
|» teamJoin|read|
|» teamJoin|update|
|» teamJoin|list|
|» teamJoin|count|
|» teamOwnMembership|create|
|» teamOwnMembership|delete|
|» teamOwnMembership|read|
|» teamOwnMembership|update|
|» teamOwnMembership|list|
|» teamOwnMembership|count|
|» teamOwnMembershipDisconnectSAML|create|
|» teamOwnMembershipDisconnectSAML|delete|
|» teamOwnMembershipDisconnectSAML|read|
|» teamOwnMembershipDisconnectSAML|update|
|» teamOwnMembershipDisconnectSAML|list|
|» teamOwnMembershipDisconnectSAML|count|
|» token|create|
|» token|delete|
|» token|read|
|» token|update|
|» token|list|
|» token|count|
|» usage|create|
|» usage|delete|
|» usage|read|
|» usage|update|
|» usage|list|
|» usage|count|
|» user|create|
|» user|delete|
|» user|read|
|» user|update|
|» user|list|
|» user|count|
|» userConnection|create|
|» userConnection|delete|
|» userConnection|read|
|» userConnection|update|
|» userConnection|list|
|» userConnection|count|
|» webAnalytics|create|
|» webAnalytics|delete|
|» webAnalytics|read|
|» webAnalytics|update|
|» webAnalytics|list|
|» webAnalytics|count|
|» webhook|create|
|» webhook|delete|
|» webhook|read|
|» webhook|update|
|» webhook|list|
|» webhook|count|
|» webhook-event|create|
|» webhook-event|delete|
|» webhook-event|read|
|» webhook-event|update|
|» webhook-event|list|
|» webhook-event|count|
|» deploymentType|preview|
|» deploymentType|all|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete a Project

<a id="opIddeleteProject"></a>

> Code samples

```bash
curl https://example.com/v9/projects/prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v9/projects/{idOrName}`

Delete a specific project by passing either the project `id` or `name` in the URL.

<h3 id="delete-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="delete-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The project was successfuly removed|None|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|409|Conflict||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Update an existing project

<a id="opIdupdateProject"></a>

> Code samples

```bash
curl https://example.com/v9/projects/prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoExposeSystemEnvs": true,
    "buildCommand": "string",
    "commandForIgnoringBuildStep": "string",
    "devCommand": "string",
    "directoryListing": true,
    "enablePreviewFeedback": true,
    "framework": null,
    "gitForkProtection": true,
    "installCommand": "string",
    "name": "a-project-name",
    "nodeVersion": "18.x",
    "outputDirectory": "string",
    "passwordProtection": {
      "deploymentType": "all",
      "password": "string"
    },
    "publicSource": true,
    "rootDirectory": "string",
    "serverlessFunctionRegion": "stri",
    "skipGitConnectDuringLink": true,
    "sourceFilesOutsideRootDirectory": true,
    "ssoProtection": {
      "deploymentType": "preview"
    }
  }'
```

`PATCH /v9/projects/{idOrName}`

Update the fields of a project using either its `name` or `id`.

> Body parameter

```json
{
  "autoExposeSystemEnvs": true,
  "buildCommand": "string",
  "commandForIgnoringBuildStep": "string",
  "devCommand": "string",
  "directoryListing": true,
  "enablePreviewFeedback": true,
  "framework": null,
  "gitForkProtection": true,
  "installCommand": "string",
  "name": "a-project-name",
  "nodeVersion": "18.x",
  "outputDirectory": "string",
  "passwordProtection": {
    "deploymentType": "all",
    "password": "string"
  },
  "publicSource": true,
  "rootDirectory": "string",
  "serverlessFunctionRegion": "stri",
  "skipGitConnectDuringLink": true,
  "sourceFilesOutsideRootDirectory": true,
  "ssoProtection": {
    "deploymentType": "preview"
  }
}
```

<h3 id="update-an-existing-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» autoExposeSystemEnvs|body|boolean|false|none|
|» buildCommand|body|string \| null|false|The build command for this project. When `null` is used this value will be automatically detected|
|» commandForIgnoringBuildStep|body|string \| null|false|none|
|» devCommand|body|string \| null|false|The dev command for this project. When `null` is used this value will be automatically detected|
|» directoryListing|body|boolean|false|none|
|» enablePreviewFeedback|body|boolean \| null|false|Opt-in to Preview comments on the project level|
|» framework|body|string \| null|false|The framework that is being used for this project. When `null` is used no framework is selected|
|» gitForkProtection|body|boolean|false|Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed|
|» installCommand|body|string \| null|false|The install command for this project. When `null` is used this value will be automatically detected|
|» name|body|string|false|The desired name for the project|
|» nodeVersion|body|string|false|none|
|» outputDirectory|body|string \| null|false|The output directory of the project. When `null` is used this value will be automatically detected|
|» passwordProtection|body|object \| null|false|Allows to protect project deployments with a password|
|» » deploymentType|body|string|true|Specify if the password will apply to every Deployment Target or just Preview|
|» » password|body|string \| null|false|The password that will be used to protect Project Deployments|
|» publicSource|body|boolean \| null|false|Specifies whether the source code and logs of the deployments for this project should be public or not|
|» rootDirectory|body|string \| null|false|The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root|
|» serverlessFunctionRegion|body|string \| null|false|The region to deploy Serverless Functions in this project|
|» skipGitConnectDuringLink|body|boolean|false|**Deprecated.** Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.|
|» sourceFilesOutsideRootDirectory|body|boolean|false|Indicates if there are source files outside of the root directory|
|» ssoProtection|body|object \| null|false|Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team|
|» » deploymentType|body|string|true|Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» framework|null|
|» framework|blitzjs|
|» framework|nextjs|
|» framework|gatsby|
|» framework|remix|
|» framework|astro|
|» framework|hexo|
|» framework|eleventy|
|» framework|docusaurus-2|
|» framework|docusaurus|
|» framework|preact|
|» framework|solidstart|
|» framework|dojo|
|» framework|ember|
|» framework|vue|
|» framework|scully|
|» framework|ionic-angular|
|» framework|angular|
|» framework|polymer|
|» framework|svelte|
|» framework|sveltekit|
|» framework|sveltekit-1|
|» framework|ionic-react|
|» framework|create-react-app|
|» framework|gridsome|
|» framework|umijs|
|» framework|sapper|
|» framework|saber|
|» framework|stencil|
|» framework|nuxtjs|
|» framework|redwoodjs|
|» framework|hugo|
|» framework|jekyll|
|» framework|brunch|
|» framework|middleman|
|» framework|zola|
|» framework|hydrogen|
|» framework|vite|
|» framework|vitepress|
|» framework|vuepress|
|» framework|parcel|
|» framework|sanity|
|» nodeVersion|18.x|
|» nodeVersion|16.x|
|» nodeVersion|14.x|
|» nodeVersion|12.x|
|» nodeVersion|10.x|
|» » deploymentType|all|
|» » deploymentType|preview|
|» » deploymentType|all|
|» » deploymentType|preview|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "analytics": {
    "canceledAt": 0,
    "disabledAt": 0,
    "enabledAt": 0,
    "id": "string",
    "paidAt": 0,
    "sampleRatePercent": 0,
    "spendLimitInDollars": 0
  },
  "autoExposeSystemEnvs": true,
  "buildCommand": "string",
  "commandForIgnoringBuildStep": "string",
  "connectConfigurationId": "string",
  "createdAt": 0,
  "devCommand": "string",
  "directoryListing": true,
  "enablePreviewFeedback": true,
  "env": [
    {
      "configurationId": "string",
      "createdAt": 0,
      "createdBy": "string",
      "decrypted": true,
      "edgeConfigId": "string",
      "edgeConfigTokenId": "string",
      "gitBranch": "string",
      "id": "string",
      "key": "string",
      "target": [
        "production"
      ],
      "type": "secret",
      "updatedAt": 0,
      "updatedBy": "string",
      "value": "string"
    }
  ],
  "framework": "blitzjs",
  "gitForkProtection": true,
  "hasFloatingAliases": true,
  "id": "string",
  "installCommand": "string",
  "lastRollbackTarget": {
    "fromDeploymentId": "string",
    "jobStatus": "succeeded",
    "requestedAt": 0,
    "toDeploymentId": "string"
  },
  "latestDeployments": [
    {
      "alias": [
        "string"
      ],
      "aliasAssigned": 0,
      "aliasError": {
        "code": "string",
        "message": "string"
      },
      "aliasFinal": "string",
      "automaticAliases": [
        "string"
      ],
      "buildingAt": 0,
      "builds": [
        {
          "dest": "string",
          "src": "string",
          "use": "string"
        }
      ],
      "checksConclusion": "succeeded",
      "checksState": "registered",
      "createdAt": 0,
      "createdIn": "string",
      "creator": {
        "email": "string",
        "githubLogin": "string",
        "gitlabLogin": "string",
        "uid": "string",
        "username": "string"
      },
      "deploymentHostname": "string",
      "forced": true,
      "id": "string",
      "meta": {
        "property1": "string",
        "property2": "string"
      },
      "monorepoManager": "string",
      "name": "string",
      "plan": "hobby",
      "previewCommentsEnabled": false,
      "private": true,
      "readyAt": 0,
      "readyState": "BUILDING",
      "requestedAt": 0,
      "target": "string",
      "teamId": "string",
      "type": "LAMBDAS",
      "url": "string",
      "userId": "string",
      "withCache": true
    }
  ],
  "link": {
    "createdAt": 0,
    "deployHooks": [
      {
        "createdAt": 0,
        "id": "string",
        "name": "string",
        "ref": "string",
        "url": "string"
      }
    ],
    "gitCredentialId": "string",
    "org": "string",
    "productionBranch": "string",
    "repo": "string",
    "repoId": 0,
    "sourceless": true,
    "type": "github",
    "updatedAt": 0
  },
  "live": true,
  "name": "string",
  "nodeVersion": "18.x",
  "outputDirectory": "string",
  "passwordProtection": {
    "deploymentType": "all"
  },
  "permissions": {
    "Monitoring": [
      "create"
    ],
    "aliasGlobal": [
      "create"
    ],
    "aliasProject": [
      "create"
    ],
    "aliasProtectionBypass": [
      "create"
    ],
    "analytics": [
      "create"
    ],
    "analyticsSampling": [
      "create"
    ],
    "analyticsUsage": [
      "create"
    ],
    "auditLog": [
      "create"
    ],
    "awsBillingIntegration": [
      "create"
    ],
    "billingAddress": [
      "create"
    ],
    "billingInformation": [
      "create"
    ],
    "billingInvoice": [
      "create"
    ],
    "billingInvoiceEmailRecipient": [
      "create"
    ],
    "billingInvoiceLanguage": [
      "create"
    ],
    "billingPlan": [
      "create"
    ],
    "billingPurchaseOrder": [
      "create"
    ],
    "billingTaxId": [
      "create"
    ],
    "cacheArtifact": [
      "create"
    ],
    "cacheArtifactUsageEvent": [
      "create"
    ],
    "concurrentBuilds": [
      "create"
    ],
    "connect": [
      "create"
    ],
    "connectConfiguration": [
      "create"
    ],
    "connectConfigurationLink": [
      "create"
    ],
    "deployment": [
      "create"
    ],
    "deploymentCheck": [
      "create"
    ],
    "deploymentCheckPreview": [
      "create"
    ],
    "deploymentPreview": [
      "create"
    ],
    "deploymentPrivate": [
      "create"
    ],
    "deploymentProductionGit": [
      "create"
    ],
    "deploymentRollback": [
      "create"
    ],
    "domain": [
      "create"
    ],
    "domainAcceptDelegation": [
      "create"
    ],
    "domainAuthCodes": [
      "create"
    ],
    "domainCertificate": [
      "create"
    ],
    "domainCheckConfig": [
      "create"
    ],
    "domainMove": [
      "create"
    ],
    "domainPurchase": [
      "create"
    ],
    "domainRecord": [
      "create"
    ],
    "domainTransferIn": [
      "create"
    ],
    "edgeConfig": [
      "create"
    ],
    "edgeConfigItem": [
      "create"
    ],
    "edgeConfigToken": [
      "create"
    ],
    "endpointVerification": [
      "create"
    ],
    "event": [
      "create"
    ],
    "fileUpload": [
      "create"
    ],
    "gitRepository": [
      "create"
    ],
    "integration": [
      "create"
    ],
    "integrationConfiguration": [
      "create"
    ],
    "integrationConfigurationProjects": [
      "create"
    ],
    "integrationConfigurationTransfer": [
      "create"
    ],
    "integrationVercelConfigurationOverride": [
      "create"
    ],
    "job": [
      "create"
    ],
    "logDrain": [
      "create"
    ],
    "monitoringChart": [
      "create"
    ],
    "monitoringQuery": [
      "create"
    ],
    "notificationDomainConfiguration": [
      "create"
    ],
    "notificationDomainExpire": [
      "create"
    ],
    "notificationDomainMoved": [
      "create"
    ],
    "notificationDomainPurchase": [
      "create"
    ],
    "notificationDomainRenewal": [
      "create"
    ],
    "notificationDomainTransfer": [
      "create"
    ],
    "notificationDomainUnverified": [
      "create"
    ],
    "notificationPaymentFailed": [
      "create"
    ],
    "notificationSpendCap": [
      "create"
    ],
    "notificationUsageAlert": [
      "create"
    ],
    "openTelemetryEndpoint": [
      "create"
    ],
    "passwordProtection": [
      "create"
    ],
    "paymentMethod": [
      "create"
    ],
    "permissions": [
      "create"
    ],
    "previewDeploymentSuffix": [
      "create"
    ],
    "proTrialOnboarding": [
      "create"
    ],
    "project": [
      "create"
    ],
    "projectDeploymentHook": [
      "create"
    ],
    "projectDomain": [
      "create"
    ],
    "projectDomainMove": [
      "create"
    ],
    "projectEnvVars": [
      "create"
    ],
    "projectEnvVarsProduction": [
      "create"
    ],
    "projectEnvVarsUnownedByIntegration": [
      "create"
    ],
    "projectIntegrationConfiguration": [
      "create"
    ],
    "projectLink": [
      "create"
    ],
    "projectMember": [
      "create"
    ],
    "projectProductionBranch": [
      "create"
    ],
    "projectProtectionBypass": [
      "create"
    ],
    "projectTransfer": [
      "create"
    ],
    "rateLimit": [
      "create"
    ],
    "redis": [
      "create"
    ],
    "remoteCaching": [
      "create"
    ],
    "samlConfig": [
      "create"
    ],
    "secret": [
      "create"
    ],
    "sensitiveEnvironmentVariablePolicy": [
      "create"
    ],
    "sharedEnvVars": [
      "create"
    ],
    "sharedEnvVarsProduction": [
      "create"
    ],
    "spendCapConfiguration": [
      "create"
    ],
    "spendCapState": [
      "create"
    ],
    "supportCase": [
      "create"
    ],
    "supportCaseComment": [
      "create"
    ],
    "team": [
      "create"
    ],
    "teamAccessRequest": [
      "create"
    ],
    "teamFellowMembership": [
      "create"
    ],
    "teamInvite": [
      "create"
    ],
    "teamInviteCode": [
      "create"
    ],
    "teamJoin": [
      "create"
    ],
    "teamOwnMembership": [
      "create"
    ],
    "teamOwnMembershipDisconnectSAML": [
      "create"
    ],
    "token": [
      "create"
    ],
    "usage": [
      "create"
    ],
    "user": [
      "create"
    ],
    "userConnection": [
      "create"
    ],
    "webAnalytics": [
      "create"
    ],
    "webhook": [
      "create"
    ],
    "webhook-event": [
      "create"
    ]
  },
  "protectionBypass": {
    "property1": "string",
    "property2": "string"
  },
  "publicSource": true,
  "rootDirectory": "string",
  "serverlessFunctionRegion": "string",
  "skipGitConnectDuringLink": true,
  "sourceFilesOutsideRootDirectory": true,
  "ssoProtection": {
    "deploymentType": "all"
  },
  "targets": {
    "foo": "bar"
  },
  "transferCompletedAt": 0,
  "transferStartedAt": 0,
  "transferToAccountId": "string",
  "transferredFromAccountId": "string",
  "updatedAt": 0
}
```

<h3 id="update-an-existing-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The project was succesfuly updated|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>Owner does not have protection add-on<br>Advanced Deployment Protection is not available for the user plan|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The project was not found|None|
|409|Conflict|The provided name for the project is already being used<br>The project is currently being transferred.|None|

<h3 id="update-an-existing-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|analytics|object|false|none|none|
|» canceledAt|number \| null|true|none|none|
|» disabledAt|number|true|none|none|
|» enabledAt|number|true|none|none|
|» id|string|true|none|none|
|» paidAt|number|false|none|none|
|» sampleRatePercent|number \| null|false|none|none|
|» spendLimitInDollars|number \| null|false|none|none|
|autoExposeSystemEnvs|boolean|false|none|none|
|buildCommand|string \| null|false|none|none|
|commandForIgnoringBuildStep|string \| null|false|none|none|
|connectConfigurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|devCommand|string \| null|false|none|none|
|directoryListing|boolean|true|none|none|
|enablePreviewFeedback|boolean \| null|false|none|none|
|env|[object]|false|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|true|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|true|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|true|none|none|
|framework|string \| null|false|none|none|
|gitForkProtection|boolean|false|none|none|
|hasFloatingAliases|boolean|false|none|none|
|id|string|true|none|none|
|installCommand|string \| null|false|none|none|
|lastRollbackTarget|object \| null|false|none|none|
|» fromDeploymentId|string|true|none|none|
|» jobStatus|string|true|none|none|
|» requestedAt|number|true|none|none|
|» toDeploymentId|string|true|none|none|
|latestDeployments|[object]|false|none|none|
|» alias|[string]|false|none|none|
|» aliasAssigned|null|false|none|none|
|» » *oneOf*|number|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» aliasError|object \| null|false|none|none|
|» » code|string|true|none|none|
|» » message|string|true|none|none|
|» aliasFinal|string \| null|false|none|none|
|» automaticAliases|[string]|false|none|none|
|» buildingAt|number|false|none|none|
|» builds|[object]|false|none|none|
|» » dest|string|false|none|none|
|» » src|string|false|none|none|
|» » use|string|true|none|none|
|» checksConclusion|string|false|none|none|
|» checksState|string|false|none|none|
|» createdAt|number|true|none|none|
|» createdIn|string|true|none|none|
|» creator|object \| null|true|none|none|
|» » email|string|true|none|none|
|» » githubLogin|string|false|none|none|
|» » gitlabLogin|string|false|none|none|
|» » uid|string|true|none|none|
|» » username|string|true|none|none|
|» deploymentHostname|string|true|none|none|
|» forced|boolean|false|none|none|
|» id|string|true|none|none|
|» meta|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» monorepoManager|string \| null|false|none|none|
|» name|string|true|none|none|
|» plan|string|true|none|none|
|» previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|» private|boolean|true|none|none|
|» readyAt|number|false|none|none|
|» readyState|string|true|none|none|
|» requestedAt|number|false|none|none|
|» target|string \| null|false|none|none|
|» teamId|string \| null|false|none|none|
|» type|string|true|none|none|
|» url|string|true|none|none|
|» userId|string|true|none|none|
|» withCache|boolean|false|none|none|
|link|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» org|string|false|none|none|
|» productionBranch|string|false|none|none|
|» repo|string|false|none|none|
|» repoId|number|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» productionBranch|string|false|none|none|
|» projectId|string|false|none|none|
|» projectName|string|false|none|none|
|» projectNameWithNamespace|string|false|none|none|
|» projectNamespace|string|false|none|none|
|» projectUrl|string|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» *oneOf*|object|false|none|none|
|» createdAt|number|false|none|none|
|» deployHooks|[object]|true|none|none|
|» » createdAt|number|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » ref|string|true|none|none|
|» » url|string|true|none|none|
|» gitCredentialId|string|false|none|none|
|» name|string|false|none|none|
|» owner|string|false|none|none|
|» productionBranch|string|false|none|none|
|» slug|string|false|none|none|
|» sourceless|boolean|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» uuid|string|false|none|none|
|» workspaceUuid|string|false|none|none|
|live|boolean|false|none|none|
|name|string|true|none|none|
|nodeVersion|string|true|none|none|
|outputDirectory|string \| null|false|none|none|
|passwordProtection|object \| null|false|none|none|
|» deploymentType|string|true|none|none|
|permissions|object|false|none|none|
|» Monitoring|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasGlobal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasProject|[[ACLAction](#schemaaclaction)]|false|none|none|
|» aliasProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analyticsSampling|[[ACLAction](#schemaaclaction)]|false|none|none|
|» analyticsUsage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» auditLog|[[ACLAction](#schemaaclaction)]|false|none|none|
|» awsBillingIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingAddress|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInformation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoice|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoiceEmailRecipient|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingInvoiceLanguage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingPlan|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingPurchaseOrder|[[ACLAction](#schemaaclaction)]|false|none|none|
|» billingTaxId|[[ACLAction](#schemaaclaction)]|false|none|none|
|» cacheArtifact|[[ACLAction](#schemaaclaction)]|false|none|none|
|» cacheArtifactUsageEvent|[[ACLAction](#schemaaclaction)]|false|none|none|
|» concurrentBuilds|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connect|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connectConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» connectConfigurationLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deployment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentCheck|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentCheckPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentPreview|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentPrivate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentProductionGit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» deploymentRollback|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainAcceptDelegation|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainAuthCodes|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainCertificate|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainCheckConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainRecord|[[ACLAction](#schemaaclaction)]|false|none|none|
|» domainTransferIn|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfigItem|[[ACLAction](#schemaaclaction)]|false|none|none|
|» edgeConfigToken|[[ACLAction](#schemaaclaction)]|false|none|none|
|» endpointVerification|[[ACLAction](#schemaaclaction)]|false|none|none|
|» event|[[ACLAction](#schemaaclaction)]|false|none|none|
|» fileUpload|[[ACLAction](#schemaaclaction)]|false|none|none|
|» gitRepository|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfigurationProjects|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationConfigurationTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» integrationVercelConfigurationOverride|[[ACLAction](#schemaaclaction)]|false|none|none|
|» job|[[ACLAction](#schemaaclaction)]|false|none|none|
|» logDrain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» monitoringChart|[[ACLAction](#schemaaclaction)]|false|none|none|
|» monitoringQuery|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainExpire|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainMoved|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainPurchase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainRenewal|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationDomainUnverified|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationPaymentFailed|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationSpendCap|[[ACLAction](#schemaaclaction)]|false|none|none|
|» notificationUsageAlert|[[ACLAction](#schemaaclaction)]|false|none|none|
|» openTelemetryEndpoint|[[ACLAction](#schemaaclaction)]|false|none|none|
|» passwordProtection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» paymentMethod|[[ACLAction](#schemaaclaction)]|false|none|none|
|» permissions|[[ACLAction](#schemaaclaction)]|false|none|none|
|» previewDeploymentSuffix|[[ACLAction](#schemaaclaction)]|false|none|none|
|» proTrialOnboarding|[[ACLAction](#schemaaclaction)]|false|none|none|
|» project|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDeploymentHook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDomain|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectDomainMove|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectEnvVarsUnownedByIntegration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectIntegrationConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectLink|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectMember|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectProductionBranch|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectProtectionBypass|[[ACLAction](#schemaaclaction)]|false|none|none|
|» projectTransfer|[[ACLAction](#schemaaclaction)]|false|none|none|
|» rateLimit|[[ACLAction](#schemaaclaction)]|false|none|none|
|» redis|[[ACLAction](#schemaaclaction)]|false|none|none|
|» remoteCaching|[[ACLAction](#schemaaclaction)]|false|none|none|
|» samlConfig|[[ACLAction](#schemaaclaction)]|false|none|none|
|» secret|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sensitiveEnvironmentVariablePolicy|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sharedEnvVars|[[ACLAction](#schemaaclaction)]|false|none|none|
|» sharedEnvVarsProduction|[[ACLAction](#schemaaclaction)]|false|none|none|
|» spendCapConfiguration|[[ACLAction](#schemaaclaction)]|false|none|none|
|» spendCapState|[[ACLAction](#schemaaclaction)]|false|none|none|
|» supportCase|[[ACLAction](#schemaaclaction)]|false|none|none|
|» supportCaseComment|[[ACLAction](#schemaaclaction)]|false|none|none|
|» team|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamAccessRequest|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamFellowMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamInvite|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamInviteCode|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamJoin|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamOwnMembership|[[ACLAction](#schemaaclaction)]|false|none|none|
|» teamOwnMembershipDisconnectSAML|[[ACLAction](#schemaaclaction)]|false|none|none|
|» token|[[ACLAction](#schemaaclaction)]|false|none|none|
|» usage|[[ACLAction](#schemaaclaction)]|false|none|none|
|» user|[[ACLAction](#schemaaclaction)]|false|none|none|
|» userConnection|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webAnalytics|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webhook|[[ACLAction](#schemaaclaction)]|false|none|none|
|» webhook-event|[[ACLAction](#schemaaclaction)]|false|none|none|
|protectionBypass|object|false|none|Construct a type with a set of properties K of type T|
|» **additionalProperties**|string|false|none|none|
|publicSource|boolean \| null|false|none|none|
|rootDirectory|string \| null|false|none|none|
|serverlessFunctionRegion|string \| null|false|none|none|
|skipGitConnectDuringLink|boolean|false|none|none|
|sourceFilesOutsideRootDirectory|boolean|false|none|none|
|ssoProtection|object \| null|false|none|none|
|» deploymentType|string|true|none|none|
|targets|object|false|none|An object containing the deployment's metadata|
|» **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|transferCompletedAt|number|false|none|none|
|transferStartedAt|number|false|none|none|
|transferToAccountId|string|false|none|none|
|transferredFromAccountId|string|false|none|none|
|updatedAt|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|framework|blitzjs|
|framework|nextjs|
|framework|gatsby|
|framework|remix|
|framework|astro|
|framework|hexo|
|framework|eleventy|
|framework|docusaurus-2|
|framework|docusaurus|
|framework|preact|
|framework|solidstart|
|framework|dojo|
|framework|ember|
|framework|vue|
|framework|scully|
|framework|ionic-angular|
|framework|angular|
|framework|polymer|
|framework|svelte|
|framework|sveltekit|
|framework|sveltekit-1|
|framework|ionic-react|
|framework|create-react-app|
|framework|gridsome|
|framework|umijs|
|framework|sapper|
|framework|saber|
|framework|stencil|
|framework|nuxtjs|
|framework|redwoodjs|
|framework|hugo|
|framework|jekyll|
|framework|brunch|
|framework|middleman|
|framework|zola|
|framework|hydrogen|
|framework|vite|
|framework|vitepress|
|framework|vuepress|
|framework|parcel|
|framework|sanity|
|» jobStatus|succeeded|
|» jobStatus|failed|
|» jobStatus|skipped|
|» jobStatus|pending|
|» jobStatus|in-progress|
|» checksConclusion|succeeded|
|» checksConclusion|failed|
|» checksConclusion|skipped|
|» checksConclusion|canceled|
|» checksState|registered|
|» checksState|running|
|» checksState|completed|
|» plan|hobby|
|» plan|enterprise|
|» plan|pro|
|» plan|oss|
|» readyState|BUILDING|
|» readyState|ERROR|
|» readyState|INITIALIZING|
|» readyState|QUEUED|
|» readyState|READY|
|» readyState|CANCELED|
|» type|LAMBDAS|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|nodeVersion|18.x|
|nodeVersion|16.x|
|nodeVersion|14.x|
|nodeVersion|12.x|
|nodeVersion|10.x|
|» deploymentType|all|
|» deploymentType|preview|
|» Monitoring|create|
|» Monitoring|delete|
|» Monitoring|read|
|» Monitoring|update|
|» Monitoring|list|
|» Monitoring|count|
|» aliasGlobal|create|
|» aliasGlobal|delete|
|» aliasGlobal|read|
|» aliasGlobal|update|
|» aliasGlobal|list|
|» aliasGlobal|count|
|» aliasProject|create|
|» aliasProject|delete|
|» aliasProject|read|
|» aliasProject|update|
|» aliasProject|list|
|» aliasProject|count|
|» aliasProtectionBypass|create|
|» aliasProtectionBypass|delete|
|» aliasProtectionBypass|read|
|» aliasProtectionBypass|update|
|» aliasProtectionBypass|list|
|» aliasProtectionBypass|count|
|» analytics|create|
|» analytics|delete|
|» analytics|read|
|» analytics|update|
|» analytics|list|
|» analytics|count|
|» analyticsSampling|create|
|» analyticsSampling|delete|
|» analyticsSampling|read|
|» analyticsSampling|update|
|» analyticsSampling|list|
|» analyticsSampling|count|
|» analyticsUsage|create|
|» analyticsUsage|delete|
|» analyticsUsage|read|
|» analyticsUsage|update|
|» analyticsUsage|list|
|» analyticsUsage|count|
|» auditLog|create|
|» auditLog|delete|
|» auditLog|read|
|» auditLog|update|
|» auditLog|list|
|» auditLog|count|
|» awsBillingIntegration|create|
|» awsBillingIntegration|delete|
|» awsBillingIntegration|read|
|» awsBillingIntegration|update|
|» awsBillingIntegration|list|
|» awsBillingIntegration|count|
|» billingAddress|create|
|» billingAddress|delete|
|» billingAddress|read|
|» billingAddress|update|
|» billingAddress|list|
|» billingAddress|count|
|» billingInformation|create|
|» billingInformation|delete|
|» billingInformation|read|
|» billingInformation|update|
|» billingInformation|list|
|» billingInformation|count|
|» billingInvoice|create|
|» billingInvoice|delete|
|» billingInvoice|read|
|» billingInvoice|update|
|» billingInvoice|list|
|» billingInvoice|count|
|» billingInvoiceEmailRecipient|create|
|» billingInvoiceEmailRecipient|delete|
|» billingInvoiceEmailRecipient|read|
|» billingInvoiceEmailRecipient|update|
|» billingInvoiceEmailRecipient|list|
|» billingInvoiceEmailRecipient|count|
|» billingInvoiceLanguage|create|
|» billingInvoiceLanguage|delete|
|» billingInvoiceLanguage|read|
|» billingInvoiceLanguage|update|
|» billingInvoiceLanguage|list|
|» billingInvoiceLanguage|count|
|» billingPlan|create|
|» billingPlan|delete|
|» billingPlan|read|
|» billingPlan|update|
|» billingPlan|list|
|» billingPlan|count|
|» billingPurchaseOrder|create|
|» billingPurchaseOrder|delete|
|» billingPurchaseOrder|read|
|» billingPurchaseOrder|update|
|» billingPurchaseOrder|list|
|» billingPurchaseOrder|count|
|» billingTaxId|create|
|» billingTaxId|delete|
|» billingTaxId|read|
|» billingTaxId|update|
|» billingTaxId|list|
|» billingTaxId|count|
|» cacheArtifact|create|
|» cacheArtifact|delete|
|» cacheArtifact|read|
|» cacheArtifact|update|
|» cacheArtifact|list|
|» cacheArtifact|count|
|» cacheArtifactUsageEvent|create|
|» cacheArtifactUsageEvent|delete|
|» cacheArtifactUsageEvent|read|
|» cacheArtifactUsageEvent|update|
|» cacheArtifactUsageEvent|list|
|» cacheArtifactUsageEvent|count|
|» concurrentBuilds|create|
|» concurrentBuilds|delete|
|» concurrentBuilds|read|
|» concurrentBuilds|update|
|» concurrentBuilds|list|
|» concurrentBuilds|count|
|» connect|create|
|» connect|delete|
|» connect|read|
|» connect|update|
|» connect|list|
|» connect|count|
|» connectConfiguration|create|
|» connectConfiguration|delete|
|» connectConfiguration|read|
|» connectConfiguration|update|
|» connectConfiguration|list|
|» connectConfiguration|count|
|» connectConfigurationLink|create|
|» connectConfigurationLink|delete|
|» connectConfigurationLink|read|
|» connectConfigurationLink|update|
|» connectConfigurationLink|list|
|» connectConfigurationLink|count|
|» deployment|create|
|» deployment|delete|
|» deployment|read|
|» deployment|update|
|» deployment|list|
|» deployment|count|
|» deploymentCheck|create|
|» deploymentCheck|delete|
|» deploymentCheck|read|
|» deploymentCheck|update|
|» deploymentCheck|list|
|» deploymentCheck|count|
|» deploymentCheckPreview|create|
|» deploymentCheckPreview|delete|
|» deploymentCheckPreview|read|
|» deploymentCheckPreview|update|
|» deploymentCheckPreview|list|
|» deploymentCheckPreview|count|
|» deploymentPreview|create|
|» deploymentPreview|delete|
|» deploymentPreview|read|
|» deploymentPreview|update|
|» deploymentPreview|list|
|» deploymentPreview|count|
|» deploymentPrivate|create|
|» deploymentPrivate|delete|
|» deploymentPrivate|read|
|» deploymentPrivate|update|
|» deploymentPrivate|list|
|» deploymentPrivate|count|
|» deploymentProductionGit|create|
|» deploymentProductionGit|delete|
|» deploymentProductionGit|read|
|» deploymentProductionGit|update|
|» deploymentProductionGit|list|
|» deploymentProductionGit|count|
|» deploymentRollback|create|
|» deploymentRollback|delete|
|» deploymentRollback|read|
|» deploymentRollback|update|
|» deploymentRollback|list|
|» deploymentRollback|count|
|» domain|create|
|» domain|delete|
|» domain|read|
|» domain|update|
|» domain|list|
|» domain|count|
|» domainAcceptDelegation|create|
|» domainAcceptDelegation|delete|
|» domainAcceptDelegation|read|
|» domainAcceptDelegation|update|
|» domainAcceptDelegation|list|
|» domainAcceptDelegation|count|
|» domainAuthCodes|create|
|» domainAuthCodes|delete|
|» domainAuthCodes|read|
|» domainAuthCodes|update|
|» domainAuthCodes|list|
|» domainAuthCodes|count|
|» domainCertificate|create|
|» domainCertificate|delete|
|» domainCertificate|read|
|» domainCertificate|update|
|» domainCertificate|list|
|» domainCertificate|count|
|» domainCheckConfig|create|
|» domainCheckConfig|delete|
|» domainCheckConfig|read|
|» domainCheckConfig|update|
|» domainCheckConfig|list|
|» domainCheckConfig|count|
|» domainMove|create|
|» domainMove|delete|
|» domainMove|read|
|» domainMove|update|
|» domainMove|list|
|» domainMove|count|
|» domainPurchase|create|
|» domainPurchase|delete|
|» domainPurchase|read|
|» domainPurchase|update|
|» domainPurchase|list|
|» domainPurchase|count|
|» domainRecord|create|
|» domainRecord|delete|
|» domainRecord|read|
|» domainRecord|update|
|» domainRecord|list|
|» domainRecord|count|
|» domainTransferIn|create|
|» domainTransferIn|delete|
|» domainTransferIn|read|
|» domainTransferIn|update|
|» domainTransferIn|list|
|» domainTransferIn|count|
|» edgeConfig|create|
|» edgeConfig|delete|
|» edgeConfig|read|
|» edgeConfig|update|
|» edgeConfig|list|
|» edgeConfig|count|
|» edgeConfigItem|create|
|» edgeConfigItem|delete|
|» edgeConfigItem|read|
|» edgeConfigItem|update|
|» edgeConfigItem|list|
|» edgeConfigItem|count|
|» edgeConfigToken|create|
|» edgeConfigToken|delete|
|» edgeConfigToken|read|
|» edgeConfigToken|update|
|» edgeConfigToken|list|
|» edgeConfigToken|count|
|» endpointVerification|create|
|» endpointVerification|delete|
|» endpointVerification|read|
|» endpointVerification|update|
|» endpointVerification|list|
|» endpointVerification|count|
|» event|create|
|» event|delete|
|» event|read|
|» event|update|
|» event|list|
|» event|count|
|» fileUpload|create|
|» fileUpload|delete|
|» fileUpload|read|
|» fileUpload|update|
|» fileUpload|list|
|» fileUpload|count|
|» gitRepository|create|
|» gitRepository|delete|
|» gitRepository|read|
|» gitRepository|update|
|» gitRepository|list|
|» gitRepository|count|
|» integration|create|
|» integration|delete|
|» integration|read|
|» integration|update|
|» integration|list|
|» integration|count|
|» integrationConfiguration|create|
|» integrationConfiguration|delete|
|» integrationConfiguration|read|
|» integrationConfiguration|update|
|» integrationConfiguration|list|
|» integrationConfiguration|count|
|» integrationConfigurationProjects|create|
|» integrationConfigurationProjects|delete|
|» integrationConfigurationProjects|read|
|» integrationConfigurationProjects|update|
|» integrationConfigurationProjects|list|
|» integrationConfigurationProjects|count|
|» integrationConfigurationTransfer|create|
|» integrationConfigurationTransfer|delete|
|» integrationConfigurationTransfer|read|
|» integrationConfigurationTransfer|update|
|» integrationConfigurationTransfer|list|
|» integrationConfigurationTransfer|count|
|» integrationVercelConfigurationOverride|create|
|» integrationVercelConfigurationOverride|delete|
|» integrationVercelConfigurationOverride|read|
|» integrationVercelConfigurationOverride|update|
|» integrationVercelConfigurationOverride|list|
|» integrationVercelConfigurationOverride|count|
|» job|create|
|» job|delete|
|» job|read|
|» job|update|
|» job|list|
|» job|count|
|» logDrain|create|
|» logDrain|delete|
|» logDrain|read|
|» logDrain|update|
|» logDrain|list|
|» logDrain|count|
|» monitoringChart|create|
|» monitoringChart|delete|
|» monitoringChart|read|
|» monitoringChart|update|
|» monitoringChart|list|
|» monitoringChart|count|
|» monitoringQuery|create|
|» monitoringQuery|delete|
|» monitoringQuery|read|
|» monitoringQuery|update|
|» monitoringQuery|list|
|» monitoringQuery|count|
|» notificationDomainConfiguration|create|
|» notificationDomainConfiguration|delete|
|» notificationDomainConfiguration|read|
|» notificationDomainConfiguration|update|
|» notificationDomainConfiguration|list|
|» notificationDomainConfiguration|count|
|» notificationDomainExpire|create|
|» notificationDomainExpire|delete|
|» notificationDomainExpire|read|
|» notificationDomainExpire|update|
|» notificationDomainExpire|list|
|» notificationDomainExpire|count|
|» notificationDomainMoved|create|
|» notificationDomainMoved|delete|
|» notificationDomainMoved|read|
|» notificationDomainMoved|update|
|» notificationDomainMoved|list|
|» notificationDomainMoved|count|
|» notificationDomainPurchase|create|
|» notificationDomainPurchase|delete|
|» notificationDomainPurchase|read|
|» notificationDomainPurchase|update|
|» notificationDomainPurchase|list|
|» notificationDomainPurchase|count|
|» notificationDomainRenewal|create|
|» notificationDomainRenewal|delete|
|» notificationDomainRenewal|read|
|» notificationDomainRenewal|update|
|» notificationDomainRenewal|list|
|» notificationDomainRenewal|count|
|» notificationDomainTransfer|create|
|» notificationDomainTransfer|delete|
|» notificationDomainTransfer|read|
|» notificationDomainTransfer|update|
|» notificationDomainTransfer|list|
|» notificationDomainTransfer|count|
|» notificationDomainUnverified|create|
|» notificationDomainUnverified|delete|
|» notificationDomainUnverified|read|
|» notificationDomainUnverified|update|
|» notificationDomainUnverified|list|
|» notificationDomainUnverified|count|
|» notificationPaymentFailed|create|
|» notificationPaymentFailed|delete|
|» notificationPaymentFailed|read|
|» notificationPaymentFailed|update|
|» notificationPaymentFailed|list|
|» notificationPaymentFailed|count|
|» notificationSpendCap|create|
|» notificationSpendCap|delete|
|» notificationSpendCap|read|
|» notificationSpendCap|update|
|» notificationSpendCap|list|
|» notificationSpendCap|count|
|» notificationUsageAlert|create|
|» notificationUsageAlert|delete|
|» notificationUsageAlert|read|
|» notificationUsageAlert|update|
|» notificationUsageAlert|list|
|» notificationUsageAlert|count|
|» openTelemetryEndpoint|create|
|» openTelemetryEndpoint|delete|
|» openTelemetryEndpoint|read|
|» openTelemetryEndpoint|update|
|» openTelemetryEndpoint|list|
|» openTelemetryEndpoint|count|
|» passwordProtection|create|
|» passwordProtection|delete|
|» passwordProtection|read|
|» passwordProtection|update|
|» passwordProtection|list|
|» passwordProtection|count|
|» paymentMethod|create|
|» paymentMethod|delete|
|» paymentMethod|read|
|» paymentMethod|update|
|» paymentMethod|list|
|» paymentMethod|count|
|» permissions|create|
|» permissions|delete|
|» permissions|read|
|» permissions|update|
|» permissions|list|
|» permissions|count|
|» previewDeploymentSuffix|create|
|» previewDeploymentSuffix|delete|
|» previewDeploymentSuffix|read|
|» previewDeploymentSuffix|update|
|» previewDeploymentSuffix|list|
|» previewDeploymentSuffix|count|
|» proTrialOnboarding|create|
|» proTrialOnboarding|delete|
|» proTrialOnboarding|read|
|» proTrialOnboarding|update|
|» proTrialOnboarding|list|
|» proTrialOnboarding|count|
|» project|create|
|» project|delete|
|» project|read|
|» project|update|
|» project|list|
|» project|count|
|» projectDeploymentHook|create|
|» projectDeploymentHook|delete|
|» projectDeploymentHook|read|
|» projectDeploymentHook|update|
|» projectDeploymentHook|list|
|» projectDeploymentHook|count|
|» projectDomain|create|
|» projectDomain|delete|
|» projectDomain|read|
|» projectDomain|update|
|» projectDomain|list|
|» projectDomain|count|
|» projectDomainMove|create|
|» projectDomainMove|delete|
|» projectDomainMove|read|
|» projectDomainMove|update|
|» projectDomainMove|list|
|» projectDomainMove|count|
|» projectEnvVars|create|
|» projectEnvVars|delete|
|» projectEnvVars|read|
|» projectEnvVars|update|
|» projectEnvVars|list|
|» projectEnvVars|count|
|» projectEnvVarsProduction|create|
|» projectEnvVarsProduction|delete|
|» projectEnvVarsProduction|read|
|» projectEnvVarsProduction|update|
|» projectEnvVarsProduction|list|
|» projectEnvVarsProduction|count|
|» projectEnvVarsUnownedByIntegration|create|
|» projectEnvVarsUnownedByIntegration|delete|
|» projectEnvVarsUnownedByIntegration|read|
|» projectEnvVarsUnownedByIntegration|update|
|» projectEnvVarsUnownedByIntegration|list|
|» projectEnvVarsUnownedByIntegration|count|
|» projectIntegrationConfiguration|create|
|» projectIntegrationConfiguration|delete|
|» projectIntegrationConfiguration|read|
|» projectIntegrationConfiguration|update|
|» projectIntegrationConfiguration|list|
|» projectIntegrationConfiguration|count|
|» projectLink|create|
|» projectLink|delete|
|» projectLink|read|
|» projectLink|update|
|» projectLink|list|
|» projectLink|count|
|» projectMember|create|
|» projectMember|delete|
|» projectMember|read|
|» projectMember|update|
|» projectMember|list|
|» projectMember|count|
|» projectProductionBranch|create|
|» projectProductionBranch|delete|
|» projectProductionBranch|read|
|» projectProductionBranch|update|
|» projectProductionBranch|list|
|» projectProductionBranch|count|
|» projectProtectionBypass|create|
|» projectProtectionBypass|delete|
|» projectProtectionBypass|read|
|» projectProtectionBypass|update|
|» projectProtectionBypass|list|
|» projectProtectionBypass|count|
|» projectTransfer|create|
|» projectTransfer|delete|
|» projectTransfer|read|
|» projectTransfer|update|
|» projectTransfer|list|
|» projectTransfer|count|
|» rateLimit|create|
|» rateLimit|delete|
|» rateLimit|read|
|» rateLimit|update|
|» rateLimit|list|
|» rateLimit|count|
|» redis|create|
|» redis|delete|
|» redis|read|
|» redis|update|
|» redis|list|
|» redis|count|
|» remoteCaching|create|
|» remoteCaching|delete|
|» remoteCaching|read|
|» remoteCaching|update|
|» remoteCaching|list|
|» remoteCaching|count|
|» samlConfig|create|
|» samlConfig|delete|
|» samlConfig|read|
|» samlConfig|update|
|» samlConfig|list|
|» samlConfig|count|
|» secret|create|
|» secret|delete|
|» secret|read|
|» secret|update|
|» secret|list|
|» secret|count|
|» sensitiveEnvironmentVariablePolicy|create|
|» sensitiveEnvironmentVariablePolicy|delete|
|» sensitiveEnvironmentVariablePolicy|read|
|» sensitiveEnvironmentVariablePolicy|update|
|» sensitiveEnvironmentVariablePolicy|list|
|» sensitiveEnvironmentVariablePolicy|count|
|» sharedEnvVars|create|
|» sharedEnvVars|delete|
|» sharedEnvVars|read|
|» sharedEnvVars|update|
|» sharedEnvVars|list|
|» sharedEnvVars|count|
|» sharedEnvVarsProduction|create|
|» sharedEnvVarsProduction|delete|
|» sharedEnvVarsProduction|read|
|» sharedEnvVarsProduction|update|
|» sharedEnvVarsProduction|list|
|» sharedEnvVarsProduction|count|
|» spendCapConfiguration|create|
|» spendCapConfiguration|delete|
|» spendCapConfiguration|read|
|» spendCapConfiguration|update|
|» spendCapConfiguration|list|
|» spendCapConfiguration|count|
|» spendCapState|create|
|» spendCapState|delete|
|» spendCapState|read|
|» spendCapState|update|
|» spendCapState|list|
|» spendCapState|count|
|» supportCase|create|
|» supportCase|delete|
|» supportCase|read|
|» supportCase|update|
|» supportCase|list|
|» supportCase|count|
|» supportCaseComment|create|
|» supportCaseComment|delete|
|» supportCaseComment|read|
|» supportCaseComment|update|
|» supportCaseComment|list|
|» supportCaseComment|count|
|» team|create|
|» team|delete|
|» team|read|
|» team|update|
|» team|list|
|» team|count|
|» teamAccessRequest|create|
|» teamAccessRequest|delete|
|» teamAccessRequest|read|
|» teamAccessRequest|update|
|» teamAccessRequest|list|
|» teamAccessRequest|count|
|» teamFellowMembership|create|
|» teamFellowMembership|delete|
|» teamFellowMembership|read|
|» teamFellowMembership|update|
|» teamFellowMembership|list|
|» teamFellowMembership|count|
|» teamInvite|create|
|» teamInvite|delete|
|» teamInvite|read|
|» teamInvite|update|
|» teamInvite|list|
|» teamInvite|count|
|» teamInviteCode|create|
|» teamInviteCode|delete|
|» teamInviteCode|read|
|» teamInviteCode|update|
|» teamInviteCode|list|
|» teamInviteCode|count|
|» teamJoin|create|
|» teamJoin|delete|
|» teamJoin|read|
|» teamJoin|update|
|» teamJoin|list|
|» teamJoin|count|
|» teamOwnMembership|create|
|» teamOwnMembership|delete|
|» teamOwnMembership|read|
|» teamOwnMembership|update|
|» teamOwnMembership|list|
|» teamOwnMembership|count|
|» teamOwnMembershipDisconnectSAML|create|
|» teamOwnMembershipDisconnectSAML|delete|
|» teamOwnMembershipDisconnectSAML|read|
|» teamOwnMembershipDisconnectSAML|update|
|» teamOwnMembershipDisconnectSAML|list|
|» teamOwnMembershipDisconnectSAML|count|
|» token|create|
|» token|delete|
|» token|read|
|» token|update|
|» token|list|
|» token|count|
|» usage|create|
|» usage|delete|
|» usage|read|
|» usage|update|
|» usage|list|
|» usage|count|
|» user|create|
|» user|delete|
|» user|read|
|» user|update|
|» user|list|
|» user|count|
|» userConnection|create|
|» userConnection|delete|
|» userConnection|read|
|» userConnection|update|
|» userConnection|list|
|» userConnection|count|
|» webAnalytics|create|
|» webAnalytics|delete|
|» webAnalytics|read|
|» webAnalytics|update|
|» webAnalytics|list|
|» webAnalytics|count|
|» webhook|create|
|» webhook|delete|
|» webhook|read|
|» webhook|update|
|» webhook|list|
|» webhook|count|
|» webhook-event|create|
|» webhook-event|delete|
|» webhook-event|read|
|» webhook-event|update|
|» webhook-event|list|
|» webhook-event|count|
|» deploymentType|all|
|» deploymentType|preview|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Retrieve project domains by project by id or name

<a id="opIdgetProjectDomains"></a>

> Code samples

```bash
curl https://example.com/v9/projects/string/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v9/projects/{idOrName}/domains`

Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.

<h3 id="retrieve-project-domains-by-project-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string \| integer|true|The unique project identifier or the project name|
|production|query|string|false|Filters only production domains when set to `true`.|
|gitBranch|query|string|false|Filters domains based on specific branch.|
|redirects|query|string|false|Excludes redirect project domains when \"false\". Includes redirect project domains when \"true\" (default).|
|redirect|query|string|false|Filters domains based on their redirect target.|
|verified|query|string|false|Filters domains based on their verification status.|
|limit|query|number|false|Maximum number of domains to list from a request (max 100).|
|since|query|number|false|Get domains created after this JavaScript timestamp.|
|until|query|number|false|Get domains created before this JavaScript timestamp.|
|order|query|string|false|Domains sort order by createdAt|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|production|true|
|production|false|
|redirects|true|
|redirects|false|
|verified|true|
|verified|false|
|order|ASC|
|order|DESC|

> Example responses

> 200 Response

```json
{
  "domains": [
    {
      "apexName": "string",
      "createdAt": 0,
      "gitBranch": "string",
      "name": "string",
      "projectId": "string",
      "redirect": "string",
      "redirectStatusCode": 307,
      "updatedAt": 0,
      "verification": [
        {
          "domain": "string",
          "reason": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "verified": true
    }
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

<h3 id="retrieve-project-domains-by-project-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response retrieving a list of domains|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Project not found|None|

<h3 id="retrieve-project-domains-by-project-by-id-or-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[object]|true|none|none|
|» apexName|string|true|none|none|
|» createdAt|number|false|none|none|
|» gitBranch|string \| null|false|none|none|
|» name|string|true|none|none|
|» projectId|string|true|none|none|
|» redirect|string \| null|false|none|none|
|» redirectStatusCode|number \| null|false|none|none|
|» updatedAt|number|false|none|none|
|» verification|[object]|false|none|A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.|
|» » domain|string|true|none|none|
|» » reason|string|true|none|none|
|» » type|string|true|none|none|
|» » value|string|true|none|none|
|» verified|boolean|true|none|`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|

#### Enumerated Values

|Property|Value|
|---|---|
|» redirectStatusCode|307|
|» redirectStatusCode|301|
|» redirectStatusCode|302|
|» redirectStatusCode|308|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Add a domain to a project

<a id="opIdaddProjectDomain"></a>

> Code samples

```bash
curl https://example.com/v9/projects/string/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gitBranch": null,
    "name": "www.example.com",
    "redirect": "foobar.com",
    "redirectStatusCode": 307
  }'
```

`POST /v9/projects/{idOrName}/domains`

Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.

> Body parameter

```json
{
  "gitBranch": null,
  "name": "www.example.com",
  "redirect": "foobar.com",
  "redirectStatusCode": 307
}
```

<h3 id="add-a-domain-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» gitBranch|body|string \| null|false|Git branch to link the project domain|
|» name|body|string|true|The project domain name|
|» redirect|body|string \| null|false|Target destination domain for redirect|
|» redirectStatusCode|body|integer \| null|false|Status code for domain redirect|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» redirectStatusCode|null|
|» redirectStatusCode|301|
|» redirectStatusCode|302|
|» redirectStatusCode|307|
|» redirectStatusCode|308|

> Example responses

> 200 Response

```json
{
  "apexName": "string",
  "createdAt": 0,
  "gitBranch": "string",
  "name": "string",
  "projectId": "string",
  "redirect": "string",
  "redirectStatusCode": 307,
  "updatedAt": 0,
  "verification": [
    {
      "domain": "string",
      "reason": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "verified": true
}
```

<h3 id="add-a-domain-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The domain was successfully added to the project|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>The domain is not valid<br>You can't set both a git branch and a redirect for the domain<br>The domain can not be added because the latest production deployment for the project was not successful<br>The domain redirect is not valid<br>A domain cannot redirect to itself<br>You can not set the production branch as a branch for your domain|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.<br>You don't have access to the domain you are adding|None|
|404|Not Found|Project not found|None|
|409|Conflict|The domain is already assigned to another Vercel project<br>Cannot create project domain since owner already has `domain` on their account<br>Cannot create project domain if the current verified domain<br>The project is currently being transferred|None|

<h3 id="add-a-domain-to-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apexName|string|true|none|none|
|createdAt|number|false|none|none|
|gitBranch|string \| null|false|none|none|
|name|string|true|none|none|
|projectId|string|true|none|none|
|redirect|string \| null|false|none|none|
|redirectStatusCode|number \| null|false|none|none|
|updatedAt|number|false|none|none|
|verification|[object]|false|none|A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.|
|» domain|string|true|none|none|
|» reason|string|true|none|none|
|» type|string|true|none|none|
|» value|string|true|none|none|
|verified|boolean|true|none|`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.|

#### Enumerated Values

|Property|Value|
|---|---|
|redirectStatusCode|307|
|redirectStatusCode|301|
|redirectStatusCode|302|
|redirectStatusCode|308|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get a project domain

<a id="opIdgetProjectDomain"></a>

> Code samples

```bash
curl https://example.com/v9/projects/string/domains/www.example.com \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v9/projects/{idOrName}/domains/{domain}`

Get project domain by project id/name and domain name.

<h3 id="get-a-project-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|domain|path|string|true|The project domain name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "apexName": "string",
  "createdAt": 0,
  "gitBranch": "string",
  "name": "string",
  "projectId": "string",
  "redirect": "string",
  "redirectStatusCode": 307,
  "updatedAt": 0,
  "verification": [
    {
      "domain": "string",
      "reason": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "verified": true
}
```

<h3 id="get-a-project-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Project not found|None|

<h3 id="get-a-project-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apexName|string|true|none|none|
|createdAt|number|false|none|none|
|gitBranch|string \| null|false|none|none|
|name|string|true|none|none|
|projectId|string|true|none|none|
|redirect|string \| null|false|none|none|
|redirectStatusCode|number \| null|false|none|none|
|updatedAt|number|false|none|none|
|verification|[object]|false|none|A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.|
|» domain|string|true|none|none|
|» reason|string|true|none|none|
|» type|string|true|none|none|
|» value|string|true|none|none|
|verified|boolean|true|none|`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.|

#### Enumerated Values

|Property|Value|
|---|---|
|redirectStatusCode|307|
|redirectStatusCode|301|
|redirectStatusCode|302|
|redirectStatusCode|308|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Remove a domain from a project

<a id="opIdremoveProjectDomain"></a>

> Code samples

```bash
curl https://example.com/v9/projects/string/domains/www.example.com \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v9/projects/{idOrName}/domains/{domain}`

Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.

<h3 id="remove-a-domain-from-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|domain|path|string|true|The project domain name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="remove-a-domain-from-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The domain was succesfully removed from the project|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Project not found|None|
|409|Conflict|The project is currently being transferred|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Update a project domain

<a id="opIdupdateProjectDomain"></a>

> Code samples

```bash
curl https://example.com/v9/projects/string/domains/www.example.com \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gitBranch": null,
    "redirect": "foobar.com",
    "redirectStatusCode": 307
  }'
```

`PATCH /v9/projects/{idOrName}/domains/{domain}`

Update a project domain's configuration, including the name, git branch and redirect of the domain.

> Body parameter

```json
{
  "gitBranch": null,
  "redirect": "foobar.com",
  "redirectStatusCode": 307
}
```

<h3 id="update-a-project-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|domain|path|string|true|The project domain name|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» gitBranch|body|string \| null|false|Git branch to link the project domain|
|» redirect|body|string \| null|false|Target destination domain for redirect|
|» redirectStatusCode|body|integer \| null|false|Status code for domain redirect|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» redirectStatusCode|null|
|» redirectStatusCode|301|
|» redirectStatusCode|302|
|» redirectStatusCode|307|
|» redirectStatusCode|308|

> Example responses

> 200 Response

```json
{
  "apexName": "string",
  "createdAt": 0,
  "gitBranch": "string",
  "name": "string",
  "projectId": "string",
  "redirect": "string",
  "redirectStatusCode": 307,
  "updatedAt": 0,
  "verification": [
    {
      "domain": "string",
      "reason": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "verified": true
}
```

<h3 id="update-a-project-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The domain was updated successfuly|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>The domain redirect is not valid|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The project was not found|None|
|409|Conflict|The project is currently being transferred|None|

<h3 id="update-a-project-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apexName|string|true|none|none|
|createdAt|number|false|none|none|
|gitBranch|string \| null|false|none|none|
|name|string|true|none|none|
|projectId|string|true|none|none|
|redirect|string \| null|false|none|none|
|redirectStatusCode|number \| null|false|none|none|
|updatedAt|number|false|none|none|
|verification|[object]|false|none|A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.|
|» domain|string|true|none|none|
|» reason|string|true|none|none|
|» type|string|true|none|none|
|» value|string|true|none|none|
|verified|boolean|true|none|`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.|

#### Enumerated Values

|Property|Value|
|---|---|
|redirectStatusCode|307|
|redirectStatusCode|301|
|redirectStatusCode|302|
|redirectStatusCode|308|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Verify project domain

<a id="opIdverifyProjectDomain"></a>

> Code samples

```bash
curl https://example.com/v9/projects/prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB/domains/example.com/verify \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v9/projects/{idOrName}/domains/{domain}/verify`

Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.

<h3 id="verify-project-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|domain|path|string|true|The domain name you want to verify|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "apexName": "string",
  "createdAt": 0,
  "gitBranch": "string",
  "name": "string",
  "projectId": "string",
  "redirect": "string",
  "redirectStatusCode": 307,
  "updatedAt": 0,
  "verification": [
    {
      "domain": "string",
      "reason": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "verified": true
}
```

<h3 id="verify-project-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The project domain was verified successfully<br>Domain is already verified|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.<br>There is an existing TXT record on the domain verifying it for another project<br>The domain does not have a TXT record that attempts to verify the project domain<br>The TXT record on the domain does not match the expected challenge for the project domain<br>Project domain is not assigned to project<br>Project domain does not exist|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="verify-project-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apexName|string|true|none|none|
|createdAt|number|false|none|none|
|gitBranch|string \| null|false|none|none|
|name|string|true|none|none|
|projectId|string|true|none|none|
|redirect|string \| null|false|none|none|
|redirectStatusCode|number \| null|false|none|none|
|updatedAt|number|false|none|none|
|verification|[object]|false|none|A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.|
|» domain|string|true|none|none|
|» reason|string|true|none|none|
|» type|string|true|none|none|
|» value|string|true|none|none|
|verified|boolean|true|none|`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.|

#### Enumerated Values

|Property|Value|
|---|---|
|redirectStatusCode|307|
|redirectStatusCode|301|
|redirectStatusCode|302|
|redirectStatusCode|308|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Retrieve the environment variables of a project by id or name

<a id="opIdfilterProjectEnvs"></a>

> Code samples

```bash
curl https://example.com/v9/projects/prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA/env \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v9/projects/{idOrName}/env`

Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.

<h3 id="retrieve-the-environment-variables-of-a-project-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|gitBranch|query|string|false|If defined, the git branch of the environment variable to filter the results|
|decrypt|query|string|false|If true, the environment variable value will be decrypted|
|source|query|string|false|The source that is calling the endpoint.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|decrypt|true|
|decrypt|false|

> Example responses

> 200 Response

```json
{
  "configurationId": "string",
  "createdAt": 0,
  "createdBy": "string",
  "decrypted": true,
  "edgeConfigId": "string",
  "edgeConfigTokenId": "string",
  "gitBranch": "string",
  "id": "string",
  "key": "string",
  "system": true,
  "target": [
    "production"
  ],
  "type": "secret",
  "updatedAt": 0,
  "updatedBy": "string",
  "value": "string"
}
```

<h3 id="retrieve-the-environment-variables-of-a-project-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of environment variables for the given project|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The project could not be found|None|

<h3 id="retrieve-the-environment-variables-of-a-project-by-id-or-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|configurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|createdBy|string \| null|false|none|none|
|decrypted|boolean|false|none|Whether `value` is decrypted.|
|edgeConfigId|string \| null|false|none|none|
|edgeConfigTokenId|string \| null|false|none|none|
|gitBranch|string|false|none|none|
|id|string|false|none|none|
|key|string|false|none|none|
|system|boolean|false|none|none|
|target|[string] \| string|false|none|none|
|» *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» *oneOf*|string|false|none|none|
|type|string|false|none|none|
|updatedAt|number|false|none|none|
|updatedBy|string \| null|false|none|none|
|value|string|false|none|none|
|*oneOf*|object|false|none|none|
|envs|[object]|true|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|false|none|none|
|» system|boolean|false|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|false|none|none|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|
|*oneOf*|object|false|none|The list of environment variables for the given project|
|envs|[object]|true|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|false|none|none|
|» system|boolean|false|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|false|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|type|secret|
|type|system|
|type|encrypted|
|type|plain|
|type|sensitive|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Remove an environment variable

<a id="opIdremoveProjectEnv"></a>

> Code samples

```bash
curl https://example.com/v9/projects/prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA/env/XMbOEya1gUUO1ir4 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v9/projects/{idOrName}/env/{id}`

Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.

<h3 id="remove-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|id|path|string|true|The unique environment variable identifier|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
[
  {
    "configurationId": "string",
    "createdAt": 0,
    "createdBy": "string",
    "decrypted": true,
    "edgeConfigId": "string",
    "edgeConfigTokenId": "string",
    "gitBranch": "string",
    "id": "string",
    "key": "string",
    "target": [
      "production"
    ],
    "type": "secret",
    "updatedAt": 0,
    "updatedBy": "string",
    "value": "string"
  }
]
```

<h3 id="remove-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The environment variable was successfully removed|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The environment variable could not be found<br>The project could not be found|None|
|409|Conflict|The project is being transfered and removing an environment variable is not possible|None|

<h3 id="remove-an-environment-variable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|
|» configurationId|string \| null|false|none|none|
|» createdAt|number|false|none|none|
|» createdBy|string \| null|false|none|none|
|» decrypted|boolean|false|none|Whether `value` is decrypted.|
|» edgeConfigId|string \| null|false|none|none|
|» edgeConfigTokenId|string \| null|false|none|none|
|» gitBranch|string|false|none|none|
|» id|string|false|none|none|
|» key|string|true|none|none|
|» target|[string] \| string|false|none|none|
|» » *oneOf*|[string]|false|none|none|
|» » *oneOf*|string|false|none|none|
|» type|string|true|none|none|
|» updatedAt|number|false|none|none|
|» updatedBy|string \| null|false|none|none|
|» value|string|true|none|none|
|*oneOf*|object|false|none|none|
|configurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|createdBy|string \| null|false|none|none|
|decrypted|boolean|false|none|Whether `value` is decrypted.|
|edgeConfigId|string \| null|false|none|none|
|edgeConfigTokenId|string \| null|false|none|none|
|gitBranch|string|false|none|none|
|id|string|false|none|none|
|key|string|true|none|none|
|system|boolean|false|none|none|
|target|[string] \| string|false|none|none|
|» *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» *oneOf*|string|false|none|none|
|type|string|true|none|none|
|updatedAt|number|false|none|none|
|updatedBy|string \| null|false|none|none|
|value|string|true|none|none|
|*oneOf*|object|false|none|none|
|configurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|createdBy|string \| null|false|none|none|
|decrypted|boolean|false|none|Whether `value` is decrypted.|
|edgeConfigId|string \| null|false|none|none|
|edgeConfigTokenId|string \| null|false|none|none|
|gitBranch|string|false|none|none|
|id|string|false|none|none|
|key|string|true|none|none|
|target|[string] \| string|false|none|none|
|» *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» *oneOf*|string|false|none|none|
|type|string|true|none|none|
|updatedAt|number|false|none|none|
|updatedBy|string \| null|false|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|production|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» » *oneOf*|preview|
|» » *oneOf*|development|
|» type|secret|
|» type|system|
|» type|encrypted|
|» type|plain|
|» type|sensitive|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|type|secret|
|type|system|
|type|encrypted|
|type|plain|
|type|sensitive|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|type|secret|
|type|system|
|type|encrypted|
|type|plain|
|type|sensitive|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Edit an environment variable

<a id="opIdeditProjectEnv"></a>

> Code samples

```bash
curl https://example.com/v9/projects/prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA/env/XMbOEya1gUUO1ir4 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gitBranch": "feature-1",
    "key": "GITHUB_APP_ID",
    "target": [
      "preview"
    ],
    "type": "plain",
    "value": "bkWIjbnxcvo78"
  }'
```

`PATCH /v9/projects/{idOrName}/env/{id}`

Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.

> Body parameter

```json
{
  "gitBranch": "feature-1",
  "key": "GITHUB_APP_ID",
  "target": [
    "preview"
  ],
  "type": "plain",
  "value": "bkWIjbnxcvo78"
}
```

<h3 id="edit-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The unique project identifier or the project name|
|id|path|string|true|The unique environment variable identifier|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» gitBranch|body|string \| null|false|The git branch of the environment variable|
|» key|body|string|false|The name of the environment variable|
|» target|body|[string]|false|The target environment of the environment variable|
|» type|body|string|false|The type of environment variable|
|» value|body|string|false|The value of the environment variable|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe|
|» target|mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen|
|» type|system|
|» type|secret|
|» type|encrypted|
|» type|plain|
|» type|sensitive|

> Example responses

> 200 Response

```json
{
  "configurationId": "string",
  "createdAt": 0,
  "createdBy": "string",
  "decrypted": true,
  "edgeConfigId": "string",
  "edgeConfigTokenId": "string",
  "gitBranch": "string",
  "id": "string",
  "key": "string",
  "target": [
    "production"
  ],
  "type": "system",
  "updatedAt": 0,
  "updatedBy": "string",
  "value": "string"
}
```

<h3 id="edit-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The environment variable was successfully edited|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The environment variable could not be found<br>The project could not be found|None|
|409|Conflict|The project is being transfered and removing an environment variable is not possible|None|

<h3 id="edit-an-environment-variable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|string \| null|false|none|none|
|createdAt|number|false|none|none|
|createdBy|string \| null|false|none|none|
|decrypted|boolean|false|none|Whether `value` is decrypted.|
|edgeConfigId|string \| null|false|none|none|
|edgeConfigTokenId|string \| null|false|none|none|
|gitBranch|string|false|none|none|
|id|string|false|none|none|
|key|string|true|none|none|
|target|[string] \| string|false|none|none|
|» *oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» *oneOf*|string|false|none|none|
|type|string|true|none|none|
|updatedAt|number|false|none|none|
|updatedBy|string \| null|false|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|production|
|» *oneOf*|preview|
|» *oneOf*|development|
|» *oneOf*|preview|
|» *oneOf*|development|
|type|system|
|type|encrypted|
|type|plain|
|type|sensitive|
|type|secret|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-teams">teams</h1>

## Create a Team

<a id="opIdcreateTeam"></a>

> Code samples

```bash
curl https://example.com/v1/teams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "A Random Team",
    "slug": "a-random-team"
  }'
```

`POST /v1/teams`

Create a new Team under your account. You need to send a POST request with the desired Team slug, and optionally the Team name.

> Body parameter

```json
{
  "name": "A Random Team",
  "slug": "a-random-team"
}
```

<h3 id="create-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|The desired name for the Team. It will be generated from the provided slug if nothing is provided|
|» slug|body|string|true|The desired slug for the Team|

> Example responses

> 200 Response

```json
{
  "id": "team_nLlpyC6RE1qxqglFKbrMxlud"
}
```

<h3 id="create-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The team was created successfuly|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>The slug is already in use|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="create-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Id of the created team|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete a Team

<a id="opIddeleteTeam"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reasons": [
      {
        "description": "string",
        "slug": "string"
      }
    ]
  }'
```

`DELETE /v1/teams/{teamId}`

Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.

> Body parameter

```json
{
  "reasons": [
    {
      "description": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="delete-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» reasons|body|[object]|false|Optional array of objects that describe the reason why the team is being deleted.|
|» » description|body|string|true|Description of the reason why the team is being deleted.|
|» » slug|body|string|true|Idenitifier slug of the reason why the team is being deleted.|

> Example responses

> 200 Response

```json
{
  "id": "team_LLHUOMOoDlqOp8wPE4kFo9pE"
}
```

<h3 id="delete-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Team was successfuly deleted|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|402|Payment Required||None|
|403|Forbidden|You do not have permission to access this resource.<br>The authenticated user can't access the team|None|
|404|Not Found|The team was not found|None|

<h3 id="delete-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the deleted Team|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete a Team invite code

<a id="opIddeleteTeamInviteCode"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string/invites/2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/teams/{teamId}/invites/{inviteId}`

Delete an active Team invite code.

<h3 id="delete-a-team-invite-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inviteId|path|string|true|The Team invite code ID.|
|teamId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete-a-team-invite-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted Team invite code.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.<br>Invite managed by directory sync<br>Not authorized to access this team.|None|
|404|Not Found|Team invite code not found.<br>No team found.|None|

<h3 id="delete-a-team-invite-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the team.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Invite a user

<a id="opIdinviteUserToTeam"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "john@example.com",
    "role": null,
    "uid": "kr1PsOIzqEL5Xg6M4VZcZosf"
  }'
```

`POST /v1/teams/{teamId}/members`

Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user can be specified with an email or an ID. If both email and ID are provided, ID will take priority.

> Body parameter

```json
{
  "email": "john@example.com",
  "role": null,
  "uid": "kr1PsOIzqEL5Xg6M4VZcZosf"
}
```

<h3 id="invite-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Automatically added|
|body|body|object|false|none|
|» email|body|string(email)|false|The email address of the user to invite|
|» role|body|object|false|none|
|» uid|body|string|false|The id of the user to invite|

> Example responses

> 200 Response

```json
{
  "email": "john@user.co",
  "role": "MEMBER",
  "uid": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "username": "john-doe"
}
```

<h3 id="invite-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The member was successfully added to the team|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>The user is already a team member<br>The user already requested access to the team<br>Hobby teams are not allowed to add seats.<br>The team reached the maximum allowed amount of members|None|
|403|Forbidden|You do not have permission to access this resource.<br>The authenticated user must be a team owner to perform the action|None|
|404|Not Found|The team was not found|None|

<h3 id="invite-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email of the invited user|
|role|string|true|none|The role used for the invitation|
|uid|string|true|none|The ID of the invited user|
|username|string|true|none|The username of the invited user|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Join a team

<a id="opIdjoinTeam"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string/members/teams/join \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inviteCode": "fisdh38aejkeivn34nslfore9vjtn4ls",
    "teamId": "team_3oNwMKqLHqEBh02CTPsrbNbe"
  }'
```

`POST /v1/teams/{teamId}/members/teams/join`

Join a team with a provided invite code or team ID.

> Body parameter

```json
{
  "inviteCode": "fisdh38aejkeivn34nslfore9vjtn4ls",
  "teamId": "team_3oNwMKqLHqEBh02CTPsrbNbe"
}
```

<h3 id="join-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Automatically added|
|body|body|object|false|none|
|» inviteCode|body|string|false|The invite code to join the team.|
|» teamId|body|string|false|The team ID.|

> Example responses

> 200 Response

```json
{
  "from": "email",
  "name": "My Team",
  "slug": "my-team",
  "teamId": "team_LLHUOMOoDlqOp8wPE4kFo9pE"
}
```

<h3 id="join-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully joined a team.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>Reached the max. amount of team members.|None|
|401|Unauthorized||None|
|402|Payment Required||None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Team not found.|None|

<h3 id="join-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|The origin of how the user joined.|
|name|string|true|none|The name of the team the user joined.|
|slug|string|true|none|The slug of the team the user joined.|
|teamId|string|true|none|The ID of the team the user joined.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Remove a Team Member

<a id="opIdremoveTeamMember"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string/members/ndlgr43fadlPyCtREAqxxdyFK \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/teams/{teamId}/members/{uid}`

Remove a Team Member from the Team, or dismiss a user that requested access, or leave a team.

<h3 id="remove-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|path|string|true|The user ID of the member.|
|teamId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="remove-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully removed a member of the team.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.<br>Cannot leave the team as the only owner.|None|
|403|Forbidden|You do not have permission to access this resource.<br>Not authorized to update the team.|None|
|404|Not Found|A user with the specified ID does not exist.<br>No team found.|None|

<h3 id="remove-a-team-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the team.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Update a Team Member

<a id="opIdupdateTeamMember"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string/members/ndfasllgPyCtREAqxxdyFKb \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "confirmed": true,
    "joinedFrom": {
      "ssoUserId": null
    },
    "role": [
      "MEMBER",
      "VIEWER"
    ]
  }'
```

`PATCH /v1/teams/{teamId}/members/{uid}`

Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.

> Body parameter

```json
{
  "confirmed": true,
  "joinedFrom": {
    "ssoUserId": null
  },
  "role": [
    "MEMBER",
    "VIEWER"
  ]
}
```

<h3 id="update-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|path|string|true|The ID of the member.|
|teamId|path|string|true|Automatically added|
|body|body|object|false|none|
|» confirmed|body|boolean|false|Accept a user who requested access to the team.|
|» joinedFrom|body|object|false|none|
|» » ssoUserId|body|null|false|none|
|» role|body|string|false|The role in the team of the member.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» confirmed|true|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="update-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the membership.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>Cannot disconnect SSO from a Team member that does not have a SSO connection.<br>Cannot confirm a member that is already confirmed.<br>Cannot confirm a member that did not request access.|None|
|401|Unauthorized|Team members can only be updated by an owner, or by the authenticated user if they are only disconnecting their SAML connection to the Team.|None|
|402|Payment Required||None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The provided user is not part of this team.<br>A user with the specified ID does not exist.<br>Team not found.|None|

<h3 id="update-a-team-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the team.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Request access to a team

<a id="opIdrequestAccessToTeam"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "joinedFrom": {
      "commitId": "f498d25d8bd654b578716203be73084b31130cd7",
      "gitUserId": 103053343,
      "gitUserLogin": "jane-doe",
      "origin": "github",
      "repoId": "67753070",
      "repoPath": "jane-doe/example"
    }
  }'
```

`POST /v1/teams/{teamId}/request`

Request access to a team as a member. An owner has to approve the request. Only 10 users can request access to a team at the same time.

> Body parameter

```json
{
  "joinedFrom": {
    "commitId": "f498d25d8bd654b578716203be73084b31130cd7",
    "gitUserId": 103053343,
    "gitUserLogin": "jane-doe",
    "origin": "github",
    "repoId": "67753070",
    "repoPath": "jane-doe/example"
  }
}
```

<h3 id="request-access-to-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Automatically added|
|body|body|object|false|none|
|» joinedFrom|body|object|true|none|
|» » commitId|body|string|false|The commit sha if the origin is a git provider.|
|» » gitUserId|body|string \| number|false|The ID of the Git account of the user who requests access.|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|number|false|none|
|» » gitUserLogin|body|string|false|The login name for the Git account of the user who requests access.|
|» » origin|body|string|true|The origin of the request.|
|» » repoId|body|string|false|The ID of the repository for the given Git provider.|
|» » repoPath|body|string|false|The path to the repository for the given Git provider.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » origin|import|
|» » origin|teams|
|» » origin|github|
|» » origin|gitlab|
|» » origin|bitbucket|
|» » origin|feedback|

> Example responses

> 200 Response

```json
{
  "accessRequestedAt": 0,
  "bitbucket": {
    "login": "string"
  },
  "confirmed": true,
  "github": {
    "login": "string"
  },
  "gitlab": {
    "login": "string"
  },
  "joinedFrom": {
    "commitId": "string",
    "dsyncConnectedAt": 0,
    "dsyncUserId": "string",
    "gitUserId": "string",
    "gitUserLogin": "string",
    "idpUserId": "string",
    "origin": "import",
    "repoId": "string",
    "repoPath": "string",
    "ssoConnectedAt": 0,
    "ssoUserId": "string"
  },
  "teamName": "string",
  "teamSlug": "string"
}
```

<h3 id="request-access-to-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfuly requested access to the team.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|401|Unauthorized||None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The team was not found.|None|

<h3 id="request-access-to-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessRequestedAt|number|false|none|none|
|bitbucket|object \| null|true|none|none|
|» login|string|false|none|none|
|confirmed|boolean|false|none|none|
|github|object \| null|true|none|none|
|» login|string|false|none|none|
|gitlab|object \| null|true|none|none|
|» login|string|false|none|none|
|joinedFrom|object|false|none|none|
|» commitId|string|false|none|none|
|» dsyncConnectedAt|number|false|none|none|
|» dsyncUserId|string|false|none|none|
|» gitUserId|string \| number|false|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» gitUserLogin|string|false|none|none|
|» idpUserId|string|false|none|none|
|» origin|string|true|none|none|
|» repoId|string|false|none|none|
|» repoPath|string|false|none|none|
|» ssoConnectedAt|number|false|none|none|
|» ssoUserId|string|false|none|none|
|teamName|string|true|none|none|
|teamSlug|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» origin|import|
|» origin|teams|
|» origin|github|
|» origin|gitlab|
|» origin|bitbucket|
|» origin|feedback|
|» origin|mail|
|» origin|link|
|» origin|saml|
|» origin|dsync|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get access request status

<a id="opIdgetTeamAccessRequest"></a>

> Code samples

```bash
curl https://example.com/v1/teams/string/request/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/teams/{teamId}/request/{userId}`

Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.

<h3 id="get-access-request-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|teamId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "accessRequestedAt": 1588720733602,
  "bitbucket": {
    "login": "string"
  },
  "confirmed": false,
  "github": {
    "login": "string"
  },
  "gitlab": {
    "login": "string"
  },
  "joinedFrom": {
    "commitId": "string",
    "dsyncConnectedAt": 0,
    "dsyncUserId": "string",
    "gitUserId": "string",
    "gitUserLogin": "string",
    "idpUserId": "string",
    "origin": "import",
    "repoId": "string",
    "repoPath": "string",
    "ssoConnectedAt": 0,
    "ssoUserId": "string"
  },
  "teamName": "My Team",
  "teamSlug": "my-team"
}
```

<h3 id="get-access-request-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.<br>User is already a confirmed member of the team and did not request access. Only visible when the authenticated user does have access to the team.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The provided user doesn't have a membership.<br>Team was not found.|None|

<h3 id="get-access-request-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessRequestedAt|number|true|none|Timestamp in milliseconds when the user requested access to the team.|
|bitbucket|object \| null|true|none|Map of the connected Bitbucket account.|
|» login|string|false|none|none|
|confirmed|boolean|true|none|Current status of the membership. Will be `true` if confirmed, if pending it'll be `false`.|
|github|object \| null|true|none|Map of the connected GitHub account.|
|» login|string|false|none|none|
|gitlab|object \| null|true|none|Map of the connected GitLab account.|
|» login|string|false|none|none|
|joinedFrom|object|true|none|A map that describes the origin from where the user joined.|
|» commitId|string|false|none|none|
|» dsyncConnectedAt|number|false|none|none|
|» dsyncUserId|string|false|none|none|
|» gitUserId|string \| number|false|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» gitUserLogin|string|false|none|none|
|» idpUserId|string|false|none|none|
|» origin|string|true|none|none|
|» repoId|string|false|none|none|
|» repoPath|string|false|none|none|
|» ssoConnectedAt|number|false|none|none|
|» ssoUserId|string|false|none|none|
|teamName|string|true|none|The name of the team.|
|teamSlug|string|true|none|The slug of the team.|

#### Enumerated Values

|Property|Value|
|---|---|
|» origin|import|
|» origin|mail|
|» origin|link|
|» origin|teams|
|» origin|github|
|» origin|gitlab|
|» origin|bitbucket|
|» origin|saml|
|» origin|dsync|
|» origin|feedback|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List all teams

<a id="opIdgetTeams"></a>

> Code samples

```bash
curl https://example.com/v2/teams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/teams`

Get a paginated list of all the Teams the authenticated User is a member of.

<h3 id="list-all-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Maximum number of Teams which may be returned.|
|since|query|number|false|Timestamp (in milliseconds) to only include Teams created since then.|
|until|query|number|false|Timestamp (in milliseconds) to only include Teams created until then.|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  },
  "teams": [
    {}
  ]
}
```

<h3 id="list-all-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of teams.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="list-all-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|
|teams|[[Team](#schemateam) \| [TeamLimited](#schemateamlimited)]|true|none|none|
|» *oneOf*|[Team](#schemateam)|false|none|Data representing a Team.|
|» *oneOf*|[TeamLimited](#schemateamlimited)|false|none|A limited form of data representing a Team, due to the authentication token missing privileges to read the full Team data.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get a Team

<a id="opIdgetTeam"></a>

> Code samples

```bash
curl https://example.com/v2/teams/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/teams/{teamId}`

Get information for the Team specified by the `teamId` parameter.

<h3 id="get-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|query|string|false|none|
|teamId|path|string|true|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested team|[Team](#schemateam)|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.<br>Not authorized to access the team.|None|
|404|Not Found|Team was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Update a Team

<a id="opIdpatchTeam"></a>

> Code samples

```bash
curl https://example.com/v2/teams/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "avatar": "string",
    "description": "Our mission is to make cloud computing accessible to everyone",
    "emailDomain": "example.com",
    "enablePreviewFeedback": "on",
    "migrateExistingEnvVariablesToSensitive": false,
    "name": "My Team",
    "previewDeploymentSuffix": "example.dev",
    "regenerateInviteCode": true,
    "remoteCaching": {
      "enabled": true
    },
    "saml": {
      "enforced": true,
      "roles": {
        "property1": "OWNER",
        "property2": "OWNER"
      }
    },
    "sensitiveEnvironmentVariablePolicy": "on",
    "slug": "my-team"
  }'
```

`PATCH /v2/teams/{teamId}`

Update the information of a Team specified by the `teamId` parameter. The request body should contain the information that will be updated on the Team.

> Body parameter

```json
{
  "avatar": "string",
  "description": "Our mission is to make cloud computing accessible to everyone",
  "emailDomain": "example.com",
  "enablePreviewFeedback": "on",
  "migrateExistingEnvVariablesToSensitive": false,
  "name": "My Team",
  "previewDeploymentSuffix": "example.dev",
  "regenerateInviteCode": true,
  "remoteCaching": {
    "enabled": true
  },
  "saml": {
    "enforced": true,
    "roles": {
      "property1": "OWNER",
      "property2": "OWNER"
    }
  },
  "sensitiveEnvironmentVariablePolicy": "on",
  "slug": "my-team"
}
```

<h3 id="update-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» avatar|body|string(regex)|false|The hash value of an uploaded image.|
|» description|body|string|false|A short text that describes the team.|
|» emailDomain|body|string \| null(regex)|false|none|
|» enablePreviewFeedback|body|string|false|Enable preview comments: one of on, off or default.|
|» migrateExistingEnvVariablesToSensitive|body|boolean|false|Runs a task that migrates all existing environment variables to sensitive environment variables.|
|» name|body|string|false|The name of the team.|
|» previewDeploymentSuffix|body|string \| null(hostname)|false|Suffix that will be used for all preview deployments.|
|» regenerateInviteCode|body|boolean|false|Create a new invite code and replace the current one.|
|» remoteCaching|body|object|false|Whether or not remote caching is enabled for the team|
|» » enabled|body|boolean|false|Enable or disable remote caching for the team.|
|» saml|body|object|false|none|
|» » enforced|body|boolean|false|Require that members of the team use SAML Single Sign-On.|
|» » roles|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» sensitiveEnvironmentVariablePolicy|body|string|false|Sensitive environment variable policy: one of on, off or default.|
|» slug|body|string|false|A new slug for the team.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » **additionalProperties**|OWNER|
|» » » **additionalProperties**|MEMBER|
|» » » **additionalProperties**|VIEWER|
|» » » **additionalProperties**|DEVELOPER|
|» » » **additionalProperties**|BILLING|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Team](#schemateam)|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|402|Payment Required||None|
|403|Forbidden|You do not have permission to access this resource.<br>Not authorized to update the team. Must be an OWNER.|None|
|404|Not Found|Team was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List team members

<a id="opIdgetTeamMembers"></a>

> Code samples

```bash
curl https://example.com/v2/teams/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/teams/{teamId}/members`

Get a paginated list of team members for the provided team.

<h3 id="list-team-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Limit how many teams should be returned|
|since|query|number|false|Timestamp in milliseconds to only include members added since then.|
|until|query|number|false|Timestamp in milliseconds to only include members added until then.|
|search|query|string|false|Search team members by their name, username, and email.|
|role|query|string|false|Only return members with the specified team role.|
|excludeProject|query|string|false|Exclude members who belong to the specified project.|
|teamId|path|string|true|Automatically added|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|OWNER|
|role|MEMBER|
|role|DEVELOPER|
|role|VIEWER|

> Example responses

> 200 Response

```json
{
  "emailInviteCodes": [
    {
      "createdAt": 0,
      "email": "string",
      "id": "string",
      "isDSyncUser": true,
      "role": "MEMBER"
    }
  ],
  "members": [
    {
      "accessRequestedAt": 1588820733602,
      "avatar": "123a6c5209bc3778245d011443644c8d27dc2c50",
      "bitbucket": {
        "accountId": "string",
        "email": "string",
        "login": "string",
        "userId": 0
      },
      "confirmed": true,
      "createdAt": 1588720733602,
      "email": "jane.doe@example.com",
      "github": {
        "accountId": "string",
        "email": "string",
        "login": "string",
        "userId": 0
      },
      "gitlab": {
        "accountId": "string",
        "email": "string",
        "login": "string",
        "userId": 0
      },
      "joinedFrom": {
        "commitId": "string",
        "dsyncConnectedAt": 0,
        "dsyncUserId": "string",
        "gitUserId": "string",
        "gitUserLogin": "string",
        "idpUserId": "string",
        "origin": "import",
        "repoId": "string",
        "repoPath": "string",
        "ssoConnectedAt": 0,
        "ssoUserId": "string"
      },
      "name": "Jane Doe",
      "role": "OWNER",
      "uid": "zTuNVUXEAvvnNN3IaqinkyMw",
      "username": "jane-doe"
    }
  ],
  "pagination": {
    "count": 20,
    "hasNext": true,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

<h3 id="list-team-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of members for the team.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|No team was found.|None|

<h3 id="list-team-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailInviteCodes|[object]|false|none|none|
|» createdAt|number|false|none|none|
|» email|string|false|none|none|
|» id|string|true|none|none|
|» isDSyncUser|boolean|true|none|none|
|» role|string|true|none|none|
|members|[object]|true|none|none|
|» accessRequestedAt|number|false|none|Timestamp in milliseconds for when this team member was accepted by an owner.|
|» avatar|string|false|none|ID of the file for the Avatar of this member.|
|» bitbucket|object|false|none|Information about the Bitbucket account of this user.|
|» » accountId|string|false|none|none|
|» » email|string|false|none|none|
|» » login|string|false|none|none|
|» » userId|number|false|none|none|
|» confirmed|boolean|true|none|Boolean that indicates if this member was confirmed by an owner.|
|» createdAt|number|true|none|Timestamp in milliseconds when this member was added.|
|» email|string|true|none|The email of this member.|
|» github|object|false|none|Information about the GitHub account for this user.|
|» » accountId|string|false|none|none|
|» » email|string|false|none|none|
|» » login|string|false|none|none|
|» » userId|number|false|none|none|
|» gitlab|object|false|none|Information about the GitLab account of this user.|
|» » accountId|string|false|none|none|
|» » email|string|false|none|none|
|» » login|string|false|none|none|
|» » userId|number|false|none|none|
|» joinedFrom|object|false|none|Map with information about the members origin if they joined by requesting access.|
|» » commitId|string|false|none|none|
|» » dsyncConnectedAt|number|false|none|none|
|» » dsyncUserId|string|false|none|none|
|» » gitUserId|string \| number|false|none|none|
|» » » *oneOf*|string|false|none|none|
|» » » *oneOf*|number|false|none|none|
|» » gitUserLogin|string|false|none|none|
|» » idpUserId|string|false|none|none|
|» » origin|string|true|none|none|
|» » repoId|string|false|none|none|
|» » repoPath|string|false|none|none|
|» » ssoConnectedAt|number|false|none|none|
|» » ssoUserId|string|false|none|none|
|» name|string|false|none|The name of this user.|
|» role|string|true|none|Role of this user in the team.|
|» uid|string|true|none|The ID of this user.|
|» username|string|true|none|The unique username of this user.|
|pagination|object|true|none|none|
|» count|number|true|none|Amount of items in the current page.|
|» hasNext|boolean|true|none|none|
|» next|number \| null|true|none|Timestamp that must be used to request the next page.|
|» prev|number \| null|true|none|Timestamp that must be used to request the previous page.|

#### Enumerated Values

|Property|Value|
|---|---|
|» role|MEMBER|
|» role|OWNER|
|» role|VIEWER|
|» role|DEVELOPER|
|» role|BILLING|
|» » origin|import|
|» » origin|gitlab|
|» » origin|bitbucket|
|» » origin|github|
|» » origin|mail|
|» » origin|link|
|» » origin|teams|
|» » origin|saml|
|» » origin|dsync|
|» » origin|feedback|
|» role|MEMBER|
|» role|OWNER|
|» role|VIEWER|
|» role|DEVELOPER|
|» role|BILLING|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-user">user</h1>

## Delete User Account

<a id="opIdrequestDelete"></a>

> Code samples

```bash
curl https://example.com/v1/user \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reasons": [
      {
        "description": "string",
        "slug": "string"
      }
    ]
  }'
```

`DELETE /v1/user`

Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.

> Body parameter

```json
{
  "reasons": [
    {
      "description": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="delete-user-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» reasons|body|[object]|false|Optional array of objects that describe the reason why the User account is being deleted.|
|» » description|body|string|true|Description of the reason why the User account is being deleted.|
|» » slug|body|string|true|Idenitifier slug of the reason why the User account is being deleted.|

> Example responses

> 202 Response

```json
{
  "email": "string",
  "id": "string",
  "message": "Verification email sent"
}
```

<h3 id="delete-user-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="delete-user-account-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the User who has initiated deletion.|
|id|string|true|none|Unique identifier of the User who has initiated deletion.|
|message|string|true|none|User deletion progress status.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get the User

<a id="opIdgetAuthUser"></a>

> Code samples

```bash
curl https://example.com/v2/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/user`

Retrieves information related to the currently authenticated User.

> Example responses

> 200 Response

```json
{
  "user": {
    "activeDashboardViews": [
      {
        "scopeId": "string",
        "viewPreference": "cards"
      }
    ],
    "avatar": "22cb30c85ff45ac4c72de8981500006b28114aa1",
    "billing": {
      "addons": [
        "custom-deployment-suffix"
      ],
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "state": "string"
      },
      "cancelation": 0,
      "contract": {
        "end": 0,
        "start": 0
      },
      "controls": {
        "analyticsSampleRateInPercent": 0,
        "analyticsSpendLimitInDollars": 0
      },
      "currency": "usd",
      "email": "string",
      "invoiceItems": {
        "analytics": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "analyticsUsage": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "artifacts": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "bandwidth": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "builds": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "concurrentBuilds": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "customCerts": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "edgeFunctionExecutionUnits": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "edgeMiddlewareInvocations": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "enterprise": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "monitoring": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "monitoringMetric": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "passwordProtection": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "previewDeploymentSuffix": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "pro": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "saml": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "serverlessFunctionExecution": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "sourceImages": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        },
        "ssoProtection": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "teamSeats": {
          "createdAt": 0,
          "disabledAt": 0,
          "frequency": {
            "interval": "month",
            "intervalCount": 1
          },
          "hidden": true,
          "maxQuantity": 0,
          "name": "string",
          "price": 0,
          "quantity": 0
        },
        "webAnalyticsDataPoint": {
          "batch": 0,
          "disabledAt": 0,
          "hidden": true,
          "name": "string",
          "price": 0,
          "threshold": 0
        }
      },
      "invoiceSettings": {
        "footer": "string"
      },
      "language": "string",
      "name": "string",
      "overdue": true,
      "period": {
        "end": 0,
        "start": 0
      },
      "plan": "hobby",
      "platform": "stripe",
      "pricingExperiment": "august-2022",
      "programType": "startup",
      "purchaseOrder": "string",
      "status": "active",
      "subscriptions": [
        {
          "discount": {
            "coupon": {
              "amountOff": 0,
              "duration": "forever",
              "durationInMonths": 0,
              "id": "string",
              "name": "string",
              "percentageOff": 0
            },
            "id": "string"
          },
          "frequency": {
            "interval": "month",
            "intervalCount": 0
          },
          "id": "string",
          "items": [
            {
              "amount": 0,
              "id": "string",
              "priceId": "string",
              "productId": "string",
              "quantity": 0
            }
          ],
          "period": {
            "end": 0,
            "start": 0
          },
          "trial": {
            "end": 0,
            "start": 0
          }
        }
      ],
      "tax": {
        "id": "string",
        "type": "string"
      },
      "trial": {
        "end": 0,
        "start": 0
      }
    },
    "createdAt": 1630748523395,
    "dismissedToasts": [
      {
        "dismissals": [
          {
            "createdAt": 0,
            "scopeId": "string"
          }
        ],
        "name": "string"
      }
    ],
    "email": "me@example.com",
    "hasTrialAvailable": true,
    "id": "AEIIDYVk59zbFF2Sxfyxxmua",
    "importFlowGitNamespace": "string",
    "importFlowGitNamespaceId": "string",
    "importFlowGitProvider": "github",
    "name": "John Doe",
    "preferredScopesAndGitNamespaces": [
      {
        "gitNamespaceId": "string",
        "scopeId": "string"
      }
    ],
    "remoteCaching": {
      "enabled": true
    },
    "resourceConfig": {
      "awsAccountIds": [
        "string"
      ],
      "awsAccountType": "string",
      "cfZoneName": "string",
      "concurrentBuilds": 0,
      "edgeConfigSize": 0,
      "edgeConfigs": 0,
      "nodeType": "string"
    },
    "softBlock": {
      "blockedAt": 0,
      "reason": "FAIR_USE_LIMITS_EXCEEDED"
    },
    "stagingPrefix": "string",
    "username": "jdoe"
  }
}
```

<h3 id="get-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|Inline|
|400|Bad Request||None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="get-the-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[AuthUser](#schemaauthuser) \| [AuthUserLimited](#schemaauthuserlimited)|true|none|none|
|» *oneOf*|[AuthUser](#schemaauthuser)|false|none|Data for the currently authenticated User.|
|» *oneOf*|[AuthUserLimited](#schemaauthuserlimited)|false|none|A limited form of data for the currently authenticated User, due to the authentication token missing privileges to read the full User data.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List User Events

<a id="opIdlistUserEvents"></a>

> Code samples

```bash
curl https://example.com/v3/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/events`

Retrieves a list of "events" generated by the User on Vercel. Events are generated when the User performs a particular action, such as logging in, creating a deployment, and joining a Team (just to name a few). When the `teamId` parameter is supplied, then the events that are returned will be in relation to the Team that was specified.

<h3 id="list-user-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Maximum number of items which may be returned.|
|since|query|string|false|Timestamp to only include items created since then.|
|until|query|string|false|Timestamp to only include items created until then.|
|types|query|string|false|Comma-delimited list of event \"types\" to filter the results by.|
|userId|query|string|false|When retrieving events for a Team, the `userId` parameter may be specified to filter events generated by a specific member of the Team.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "createdAt": 1632859321020,
      "entities": [
        {
          "end": 3,
          "start": 0,
          "type": "author"
        }
      ],
      "id": "uev_bfmMjiMnXfnPbT97dGdpJbCN",
      "text": "You logged in via GitHub",
      "user": {
        "avatar": "string",
        "email": "string",
        "slug": "string",
        "uid": "string",
        "username": "string"
      },
      "userId": "zTuNVUXEAvvnNN3IaqinkyMw"
    }
  ]
}
```

<h3 id="list-user-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="list-user-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[UserEvent](#schemauserevent)]|true|none|Array of events generated by the User.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-webhooks">webhooks</h1>

## Get a list of webhooks

<a id="opIdgetWebhooks"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks`

Get a list of webhooks

<h3 id="get-a-list-of-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|false|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": 1567024758130,
    "events": "deployment.created",
    "id": "account_hook_GflD6EYyo7F4ViYS",
    "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",
    "projectIds": [
      "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"
    ],
    "projectsMetadata": [
      {
        "framework": "blitzjs",
        "id": "string",
        "latestDeployment": "string",
        "name": "string"
      }
    ],
    "updatedAt": 1567024758130,
    "url": "https://my-webhook.com"
  }
]
```

<h3 id="get-a-list-of-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="get-a-list-of-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|
|» createdAt|number|true|none|A number containing the date when the webhook was created in in milliseconds|
|» events|[string]|true|none|The webhooks events|
|» id|string|true|none|The webhook id|
|» ownerId|string|true|none|The unique ID of the team the webhook belongs to|
|» projectIds|[string]|false|none|The ID of the projects the webhook is associated with|
|» projectsMetadata|[object]|true|none|none|
|» » framework|string \| null|false|none|none|
|» » id|string|true|none|none|
|» » latestDeployment|string|false|none|none|
|» » name|string|true|none|none|
|» updatedAt|number|true|none|A number containing the date when the webhook was updated in in milliseconds|
|» url|string|true|none|A string with the URL of the webhook|
|*oneOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|
|» createdAt|number|true|none|A number containing the date when the webhook was created in in milliseconds|
|» events|[string]|true|none|The webhooks events|
|» id|string|true|none|The webhook id|
|» ownerId|string|true|none|The unique ID of the team the webhook belongs to|
|» projectIds|[string]|false|none|The ID of the projects the webhook is associated with|
|» updatedAt|number|true|none|A number containing the date when the webhook was updated in in milliseconds|
|» url|string|true|none|A string with the URL of the webhook|

#### Enumerated Values

|Property|Value|
|---|---|
|» events|domain.created|
|» events|deployment.created|
|» events|deployment.error|
|» events|deployment.canceled|
|» events|deployment.succeeded|
|» events|deployment.ready|
|» events|deployment.check-rerequested|
|» events|integration-configuration.permission-upgraded|
|» events|integration-configuration.removed|
|» events|integration-configuration.scope-change-confirmed|
|» events|project.created|
|» events|project.removed|
|» events|deployment-checks-completed|
|» events|deployment-ready|
|» events|deployment-prepared|
|» events|deployment-error|
|» events|deployment-check-rerequested|
|» events|deployment-canceled|
|» events|project-created|
|» events|project-removed|
|» events|domain-created|
|» events|deployment|
|» events|integration-configuration-permission-updated|
|» events|integration-configuration-removed|
|» events|integration-configuration-scope-change-confirmed|
|» » framework|blitzjs|
|» » framework|nextjs|
|» » framework|gatsby|
|» » framework|remix|
|» » framework|astro|
|» » framework|hexo|
|» » framework|eleventy|
|» » framework|docusaurus-2|
|» » framework|docusaurus|
|» » framework|preact|
|» » framework|solidstart|
|» » framework|dojo|
|» » framework|ember|
|» » framework|vue|
|» » framework|scully|
|» » framework|ionic-angular|
|» » framework|angular|
|» » framework|polymer|
|» » framework|svelte|
|» » framework|sveltekit|
|» » framework|sveltekit-1|
|» » framework|ionic-react|
|» » framework|create-react-app|
|» » framework|gridsome|
|» » framework|umijs|
|» » framework|sapper|
|» » framework|saber|
|» » framework|stencil|
|» » framework|nuxtjs|
|» » framework|redwoodjs|
|» » framework|hugo|
|» » framework|jekyll|
|» » framework|brunch|
|» » framework|middleman|
|» » framework|zola|
|» » framework|hydrogen|
|» » framework|vite|
|» » framework|vitepress|
|» » framework|vuepress|
|» » framework|parcel|
|» » framework|sanity|
|» events|domain.created|
|» events|deployment.created|
|» events|deployment.error|
|» events|deployment.canceled|
|» events|deployment.succeeded|
|» events|deployment.ready|
|» events|deployment.check-rerequested|
|» events|integration-configuration.permission-upgraded|
|» events|integration-configuration.removed|
|» events|integration-configuration.scope-change-confirmed|
|» events|project.created|
|» events|project.removed|
|» events|deployment-checks-completed|
|» events|deployment-ready|
|» events|deployment-prepared|
|» events|deployment-error|
|» events|deployment-check-rerequested|
|» events|deployment-canceled|
|» events|project-created|
|» events|project-removed|
|» events|domain-created|
|» events|deployment|
|» events|integration-configuration-permission-updated|
|» events|integration-configuration-removed|
|» events|integration-configuration-scope-change-confirmed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Creates a webhook

<a id="opIdcreateWebhook"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "events": [
      "mport(\"/vercel/path0/utils/webhooks/webhooks/types\").WebhookName.DomainCreate"
    ],
    "projectIds": [
      "string"
    ],
    "url": "http://example.com"
  }'
```

`POST /v1/webhooks`

Creates a webhook

> Body parameter

```json
{
  "events": [
    "mport(\"/vercel/path0/utils/webhooks/webhooks/types\").WebhookName.DomainCreate"
  ],
  "projectIds": [
    "string"
  ],
  "url": "http://example.com"
}
```

<h3 id="creates-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» events|body|[string]|true|none|
|» projectIds|body|[string]|false|none|
|» url|body|string(uri)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DomainCreate|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCreate|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentErro|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCancele|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentSucceede|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentRead|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCheckRerequeste|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationPermissionUpgrade|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationRemove|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationScopeChangeConfirme|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectCreate|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectRemove|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentChecksComplete|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentRead|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentPrepare|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentErro|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCheckRerequeste|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCancele|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectCreate|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectRemove|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDomainCreate|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymen|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationPermissionUpdate|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationRemove|
|» events|mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationScopeChangeConfirme|

> Example responses

> 200 Response

```json
{
  "createdAt": 1567024758130,
  "events": "deployment.created",
  "id": "account_hook_GflD6EYyo7F4ViYS",
  "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",
  "projectIds": [
    "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"
  ],
  "secret": "string",
  "updatedAt": 1567024758130,
  "url": "https://my-webhook.com"
}
```

<h3 id="creates-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="creates-a-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number|true|none|A number containing the date when the webhook was created in in milliseconds|
|events|[string]|true|none|The webhooks events|
|id|string|true|none|The webhook id|
|ownerId|string|true|none|The unique ID of the team the webhook belongs to|
|projectIds|[string]|false|none|The ID of the projects the webhook is associated with|
|secret|string|true|none|The webhook secret used to sign the payload|
|updatedAt|number|true|none|A number containing the date when the webhook was updated in in milliseconds|
|url|string|true|none|A string with the URL of the webhook|

#### Enumerated Values

|Property|Value|
|---|---|
|events|domain.created|
|events|deployment.created|
|events|deployment.error|
|events|deployment.canceled|
|events|deployment.succeeded|
|events|deployment.ready|
|events|deployment.check-rerequested|
|events|integration-configuration.permission-upgraded|
|events|integration-configuration.removed|
|events|integration-configuration.scope-change-confirmed|
|events|project.created|
|events|project.removed|
|events|deployment-checks-completed|
|events|deployment-ready|
|events|deployment-prepared|
|events|deployment-error|
|events|deployment-check-rerequested|
|events|deployment-canceled|
|events|project-created|
|events|project-removed|
|events|domain-created|
|events|deployment|
|events|integration-configuration-permission-updated|
|events|integration-configuration-removed|
|events|integration-configuration-scope-change-confirmed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get a webhook

<a id="opIdgetWebhook"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks/{id}`

Get a webhook

<h3 id="get-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "createdAt": 1567024758130,
  "events": "deployment.created",
  "id": "account_hook_GflD6EYyo7F4ViYS",
  "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",
  "projectIds": [
    "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"
  ],
  "updatedAt": 1567024758130,
  "url": "https://my-webhook.com"
}
```

<h3 id="get-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="get-a-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number|true|none|A number containing the date when the webhook was created in in milliseconds|
|events|[string]|true|none|The webhooks events|
|id|string|true|none|The webhook id|
|ownerId|string|true|none|The unique ID of the team the webhook belongs to|
|projectIds|[string]|false|none|The ID of the projects the webhook is associated with|
|updatedAt|number|true|none|A number containing the date when the webhook was updated in in milliseconds|
|url|string|true|none|A string with the URL of the webhook|

#### Enumerated Values

|Property|Value|
|---|---|
|events|domain.created|
|events|deployment.created|
|events|deployment.error|
|events|deployment.canceled|
|events|deployment.succeeded|
|events|deployment.ready|
|events|deployment.check-rerequested|
|events|integration-configuration.permission-upgraded|
|events|integration-configuration.removed|
|events|integration-configuration.scope-change-confirmed|
|events|project.created|
|events|project.removed|
|events|deployment-checks-completed|
|events|deployment-ready|
|events|deployment-prepared|
|events|deployment-error|
|events|deployment-check-rerequested|
|events|deployment-canceled|
|events|project-created|
|events|project-removed|
|events|domain-created|
|events|deployment|
|events|integration-configuration-permission-updated|
|events|integration-configuration-removed|
|events|integration-configuration-scope-change-confirmed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Deletes a webhook

<a id="opIddeleteWebhook"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/webhooks/{id}`

Deletes a webhook

<h3 id="deletes-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="deletes-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-deployments">deployments</h1>

## List Deployment Builds

<a id="opIdlistDeploymentBuilds"></a>

> Code samples

```bash
curl https://example.com/v11/deployments/string/builds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v11/deployments/{deploymentId}/builds`

Retrieves the list of builds given their deployment's unique identifier.

<h3 id="list-deployment-builds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The deployment unique identifier|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "builds": [
    {
      "config": {
        "zeroConfig": true
      },
      "copiedFrom": "string",
      "createdAt": 1567071524208,
      "createdIn": "sfo1",
      "deployedAt": 1567071598563,
      "deploymentId": "dpl_BRGyoU2Jzzwx7myBnqv3xjRDD2GnHTwUWyFybnrUvjDD",
      "entrypoint": "api/index.js",
      "fingerprint": null,
      "id": "bld_q5fj68jh7eewfe8",
      "output": [
        {
          "digest": "string",
          "edge": {
            "regions": [
              "string"
            ]
          },
          "lambda": {
            "deployedTo": [
              "string"
            ],
            "functionName": "string",
            "layers": [
              "string"
            ],
            "memorySize": 0,
            "timeout": 0
          },
          "mode": 0,
          "path": "string",
          "size": 0,
          "type": "lambda"
        }
      ],
      "readyState": "READY",
      "readyStateAt": 1567024758130,
      "scheduledAt": 1567024756543,
      "use": "@vercel/node"
    }
  ]
}
```

<h3 id="list-deployment-builds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|Deployment was not found|None|

<h3 id="list-deployment-builds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builds|[object]|true|none|none|
|» config|object|false|none|An object that contains the Build's configuration|
|» » distDir|string|false|none|none|
|» » forceBuildIn|string|false|none|none|
|» » reuseWorkPathFrom|string|false|none|none|
|» » zeroConfig|boolean|false|none|none|
|» copiedFrom|string|false|none|none|
|» createdAt|number|false|none|The time at which the Build was created|
|» createdIn|string|false|none|The region where the Build was first created|
|» deployedAt|number|false|none|The time at which the Build was deployed|
|» deploymentId|string|true|none|The unique identifier of the deployment|
|» entrypoint|string|true|none|The entrypoint of the deployment|
|» fingerprint|string \| null|false|none|If the Build uses the `@vercel/static` Runtime, it contains a hashed string of all outputs|
|» id|string|true|none|The unique identifier of the Build|
|» output|[object]|true|none|A list of outputs for the Build that can be either Serverless Functions or static files|
|» » digest|string|true|none|The SHA1 of the file|
|» » edge|object \| null|false|none|Exists if the output is an edge function.|
|» » » regions|[string]|true|none|The regions where the edge function will be invoked. Only exists if the edge function as a regional edge function, see: https://vercel.com/docs/concepts/edge-network/regions#setting-edge-function-regions|
|» » lambda|object \| null|false|none|If the output is a Serverless Function, an object containing the name, location and memory size of the function|
|» » » deployedTo|[string]|true|none|none|
|» » » functionName|string|true|none|none|
|» » » layers|[string]|false|none|none|
|» » » memorySize|number|false|none|none|
|» » » timeout|number|false|none|none|
|» » mode|number|true|none|The POSIX file permissions|
|» » path|string|true|none|The absolute path of the file or Serverless Function|
|» » size|number|false|none|The size of the file in bytes|
|» » type|string|false|none|The type of the output|
|» readyState|string|true|none|The state of the deployment depending on the process of deploying, or if it is ready or in an error state|
|» readyStateAt|number|false|none|The time at which the Build state was last modified|
|» scheduledAt|number \| null|false|none|The time at which the Build was scheduled to be built|
|» use|string|false|none|The Runtime the Build used to generate the output|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|lambda|
|» » type|file|
|» » type|edge|
|» readyState|BUILDING|
|» readyState|ERROR|
|» readyState|INITIALIZING|
|» readyState|QUEUED|
|» readyState|READY|
|» readyState|CANCELED|
|» readyState|UPLOADING|
|» readyState|DEPLOYING|
|» readyState|ARCHIVED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Cancel a deployment

<a id="opIdcancelDeployment"></a>

> Code samples

```bash
curl https://example.com/v12/deployments/dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd/cancel \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /v12/deployments/{id}/cancel`

This endpoint allows you to cancel a deployment which is currently building, by supplying its `id` in the URL.

<h3 id="cancel-a-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the deployment.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "alias": [],
  "aliasAssigned": true,
  "aliasAssignedAt": 0,
  "aliasError": null,
  "aliasFinal": "string",
  "aliasWarning": {
    "action": "string",
    "code": "string",
    "link": "string",
    "message": "string"
  },
  "automaticAliases": [
    "string"
  ],
  "bootedAt": 0,
  "build": {
    "env": [
      "MY_ENV_VAR"
    ]
  },
  "buildErrorAt": 0,
  "buildingAt": 0,
  "builds": [
    {
      "config": {
        "foo": "bar"
      },
      "src": "string",
      "use": "string"
    }
  ],
  "canceledAt": 0,
  "checksConclusion": "succeeded",
  "checksState": "registered",
  "createdAt": 1540257589405,
  "createdIn": "sfo1",
  "creator": {
    "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",
    "username": "john-doe"
  },
  "env": [
    "MY_SECRET"
  ],
  "errorCode": "string",
  "errorLink": "string",
  "errorMessage": "string",
  "errorStep": "string",
  "functions": {
    "api/test.js": {
      "memory": 3008
    }
  },
  "gitRepo": {
    "defaultBranch": "string",
    "name": "string",
    "namespace": "string",
    "ownerType": "user",
    "path": "string",
    "private": true,
    "projectId": 0,
    "type": "gitlab",
    "url": "string"
  },
  "gitSource": {
    "prId": 0,
    "ref": "string",
    "repoId": "string",
    "sha": "string",
    "type": "github"
  },
  "id": "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  "inspectorUrl": "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",
  "isInConcurrentBuildsQueue": false,
  "lambdas": [
    {
      "createdAt": 0,
      "entrypoint": "string",
      "id": "string",
      "output": [
        {
          "functionName": "string",
          "path": "string"
        }
      ],
      "readyState": "INITIALIZING",
      "readyStateAt": 0
    }
  ],
  "meta": {
    "foo": "bar"
  },
  "monorepoManager": "turbo",
  "name": "my-project",
  "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",
  "plan": "pro",
  "previewCommentsEnabled": false,
  "projectId": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  "public": false,
  "readyState": "READY",
  "regions": [
    "sfo1"
  ],
  "routes": [
    {
      "dest": "https://docs.example.com",
      "src": "/docs"
    }
  ],
  "source": "cli",
  "target": null,
  "team": {
    "id": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    "name": "FSociety",
    "slug": "fsociety"
  },
  "type": "LAMBDAS",
  "url": "my-instant-deployment-3ij3cxz9qr.now.sh",
  "userAliases": [
    "sub1.example.com",
    "sub2.example.com"
  ],
  "version": 2
}
```

<h3 id="cancel-a-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="cancel-a-deployment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|[string]|true|none|A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation|
|aliasAssigned|boolean|true|none|A boolean that will be true when the aliases from the alias property were assigned successfully|
|aliasAssignedAt|null|false|none|none|
|» *oneOf*|number|false|none|none|
|» *oneOf*|boolean|false|none|none|
|aliasError|object \| null|false|none|An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`|
|» code|string|true|none|none|
|» message|string|true|none|none|
|aliasFinal|string \| null|false|none|none|
|aliasWarning|object \| null|false|none|none|
|» action|string|false|none|none|
|» code|string|true|none|none|
|» link|string|false|none|none|
|» message|string|true|none|none|
|automaticAliases|[string]|false|none|none|
|bootedAt|number|true|none|none|
|build|object|true|none|none|
|» env|[string]|true|none|The keys of the environment variables that were assigned during the build phase.|
|buildErrorAt|number|false|none|none|
|buildingAt|number|true|none|none|
|builds|[object]|false|none|none|
|» config|object|false|none|An object containing the deployment's metadata|
|» » **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|» src|string|false|none|none|
|» use|string|true|none|none|
|canceledAt|number|false|none|none|
|checksConclusion|string|false|none|none|
|checksState|string|false|none|none|
|createdAt|number|true|none|A number containing the date when the deployment was created in milliseconds|
|createdIn|string|true|none|The region where the deployment was first created|
|creator|object|true|none|Information about the deployment creator|
|» uid|string|true|none|The ID of the user that created the deployment|
|» username|string|false|none|The username of the user that created the deployment|
|env|[string]|true|none|The keys of the environment variables that were assigned during runtime|
|errorCode|string|false|none|none|
|errorLink|string|false|none|none|
|errorMessage|string \| null|false|none|none|
|errorStep|string|false|none|none|
|functions|object \| null|false|none|An object used to configure your Serverless Functions|
|» **additionalProperties**|object|false|none|An object used to configure your Serverless Functions|
|» » excludeFiles|string|false|none|none|
|» » includeFiles|string|false|none|none|
|» » maxDuration|number|false|none|none|
|» » memory|number|false|none|none|
|» » runtime|string|false|none|none|
|gitRepo|null|false|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» namespace|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» projectId|number|true|none|none|
|» type|string|true|none|none|
|» url|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» org|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» repo|string|true|none|none|
|» repoId|number|true|none|none|
|» repoOwnerId|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» owner|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» repoUuid|string|true|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|true|none|none|
|gitSource|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repo|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» projectId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|false|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» gitUrl|string|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|false|none|none|
|» ref|string|true|none|none|
|» repo|string|false|none|none|
|» repoId|number|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» projectId|number|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|false|none|none|
|» ref|string|true|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|true|none|none|
|» slug|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|true|none|none|
|id|string|true|none|A string holding the unique ID of the deployment|
|inspectorUrl|string \| null|true|none|Vercel URL to inspect the deployment.|
|isInConcurrentBuildsQueue|boolean|true|none|Is the deployment currently queued waiting for a Concurrent Build Slot to be available|
|lambdas|[object]|false|none|none|
|» createdAt|number|false|none|none|
|» entrypoint|string \| null|false|none|none|
|» id|string|true|none|none|
|» output|[object]|true|none|none|
|» » functionName|string|true|none|none|
|» » path|string|true|none|none|
|» readyState|string|false|none|none|
|» readyStateAt|number|false|none|none|
|meta|object|true|none|An object containing the deployment's metadata|
|» **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|monorepoManager|string \| null|false|none|An monorepo manager that was used for the deployment|
|name|string|true|none|The name of the project associated with the deployment at the time that the deployment was created|
|ownerId|string|true|none|The unique ID of the user or team the deployment belongs to|
|plan|string|true|none|The pricing plan the deployment was made under|
|previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|projectId|string|true|none|The ID of the project the deployment is associated with|
|public|boolean|true|none|A boolean representing if the deployment is public or not. By default this is `false`|
|readyState|string|true|none|The state of the deployment depending on the process of deploying, or if it is ready or in an error state|
|regions|[string]|true|none|The regions the deployment exists in|
|routes|[object]|true|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» caseSensitive|boolean|false|none|none|
|» check|boolean|false|none|none|
|» continue|boolean|false|none|none|
|» dest|string|false|none|none|
|» has|[object]|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » value|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » key|string|true|none|none|
|» » type|string|true|none|none|
|» » value|string|false|none|none|
|» headers|object|false|none|none|
|» » **additionalProperties**|string|false|none|none|
|» important|boolean|false|none|none|
|» locale|object|false|none|none|
|» » cookie|string|false|none|none|
|» » redirect|object|false|none|Construct a type with a set of properties K of type T|
|» » » **additionalProperties**|string|false|none|none|
|» methods|[string]|false|none|none|
|» middleware|number|false|none|A middleware index in the `middleware` key under the build result|
|» middlewarePath|string|false|none|A middleware key within the `output` key under the build result. Overrides a `middleware` definition.|
|» middlewareRawSrc|[string]|false|none|The original middleware matchers.|
|» missing|[object]|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » value|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » key|string|true|none|none|
|» » type|string|true|none|none|
|» » value|string|false|none|none|
|» override|boolean|false|none|none|
|» src|string|true|none|none|
|» status|number|false|none|none|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» dest|string|false|none|none|
|» handle|string|true|none|none|
|» src|string|false|none|none|
|» status|number|false|none|none|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» continue|boolean|true|none|none|
|» middleware|number|true|none|none|
|» src|string|true|none|none|
|source|string|false|none|Where was the deployment created from|
|target|string \| null|false|none|If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned|
|team|object|false|none|The team that owns the deployment if any|
|» id|string|true|none|The ID of the team owner|
|» name|string|true|none|The name of the team owner|
|» slug|string|true|none|The slug of the team owner|
|type|string|true|none|none|
|url|string|true|none|A string with the unique URL of the deployment|
|userAliases|[string]|false|none|An array of domains that were provided by the user when creating the Deployment.|
|version|number|true|none|The platform version that was used to create the deployment.|

#### Enumerated Values

|Property|Value|
|---|---|
|checksConclusion|succeeded|
|checksConclusion|failed|
|checksConclusion|skipped|
|checksConclusion|canceled|
|checksState|registered|
|checksState|running|
|checksState|completed|
|» ownerType|user|
|» ownerType|team|
|» type|gitlab|
|» ownerType|user|
|» ownerType|team|
|» type|github|
|» ownerType|user|
|» ownerType|team|
|» type|bitbucket|
|» type|github|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» type|bitbucket|
|» type|custom|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» readyState|INITIALIZING|
|» readyState|BUILDING|
|» readyState|READY|
|» readyState|ERROR|
|plan|hobby|
|plan|enterprise|
|plan|pro|
|plan|oss|
|readyState|INITIALIZING|
|readyState|BUILDING|
|readyState|READY|
|readyState|ERROR|
|readyState|QUEUED|
|readyState|CANCELED|
|» » type|host|
|» » type|header|
|» » type|cookie|
|» » type|query|
|» » type|host|
|» » type|header|
|» » type|cookie|
|» » type|query|
|» handle|filesystem|
|» handle|hit|
|» handle|miss|
|» handle|rewrite|
|» handle|error|
|» handle|resource|
|» middleware|0|
|source|cli|
|source|git|
|source|import|
|source|import/repo|
|source|clone/repo|
|target|staging|
|target|production|
|type|LAMBDAS|
|version|2|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Create a new deployment

<a id="opIdcreateDeployment"></a>

> Code samples

```bash
curl https://example.com/v13/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$schema": [
      "https://openapi.vercel.sh/vercel.json"
    ],
    "alias": [
      "example.vercel.app"
    ],
    "build": {
      "env": {
        "A_SECRET": "@a-secret"
      }
    },
    "buildCommand": "string",
    "builds": [
      {
        "config": {},
        "src": "string",
        "use": "string"
      }
    ],
    "cleanUrls": true,
    "crons": [
      {
        "path": "string",
        "schedule": "string"
      }
    ],
    "deploymentId": "string",
    "devCommand": "string",
    "env": {
      "A_SECRET": "@a-secret"
    },
    "files": [
      {
        "data": "string",
        "encoding": "base64",
        "file": "folder/file.js"
      }
    ],
    "framework": null,
    "functions": {
      "src/pages/**": {
        "maxDuration": 6,
        "memory": 1024
      }
    },
    "git": {
      "deploymentEnabled": {
        "main": false
      }
    },
    "gitMetadata": {
      "commitAuthorName": "kyliau",
      "commitMessage": "add method to measure Interaction to Next Paint (INP) (#36490)",
      "commitRef": "main",
      "commitSha": "dc36199b2234c6586ebe05ec94078a895c707e29",
      "dirty": true,
      "remoteUrl": "https://github.com/vercel/next.js"
    },
    "gitSource": {
      "ref": "string",
      "repoId": 0,
      "sha": "string",
      "type": "github"
    },
    "headers": [
      {
        "has": [
          {
            "type": "host",
            "value": "string"
          }
        ],
        "headers": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "missing": [
          {
            "type": "host",
            "value": "string"
          }
        ],
        "source": "string"
      }
    ],
    "ignoreCommand": "string",
    "installCommand": "string",
    "meta": {
      "foo": "bar"
    },
    "monorepoManager": "string",
    "name": "my-instant-deployment",
    "outputDirectory": "string",
    "project": "my-deployment-project",
    "projectSettings": {
      "buildCommand": "string",
      "commandForIgnoringBuildStep": "string",
      "devCommand": "string",
      "framework": null,
      "installCommand": "string",
      "outputDirectory": "string",
      "rootDirectory": "string",
      "serverlessFunctionRegion": "stri",
      "skipGitConnectDuringLink": true,
      "sourceFilesOutsideRootDirectory": true
    },
    "public": true,
    "redirects": [
      {
        "destination": "string",
        "has": [
          {
            "type": "host",
            "value": "string"
          }
        ],
        "missing": [
          {
            "type": "host",
            "value": "string"
          }
        ],
        "permanent": true,
        "source": "string"
      }
    ],
    "regions": [
      "sfo",
      "bru"
    ],
    "rewrites": [
      {
        "destination": "string",
        "has": [
          {
            "type": "host",
            "value": "string"
          }
        ],
        "missing": [
          {
            "type": "host",
            "value": "string"
          }
        ],
        "source": "string"
      }
    ],
    "routes": [
      {
        "dest": "https://docs.example.com",
        "src": "/docs"
      }
    ],
    "target": "staging",
    "trailingSlash": true,
    "withLatestCommit": true
  }'
```

`POST /v13/deployments`

Create a new deployment with all the required and intended data. If the deployment is not a git deployment, all files must be provided with the request, either referenced or inlined. Additionally, a deployment id can be specified to redeploy a previous deployment.

> Body parameter

```json
{
  "$schema": [
    "https://openapi.vercel.sh/vercel.json"
  ],
  "alias": [
    "example.vercel.app"
  ],
  "build": {
    "env": {
      "A_SECRET": "@a-secret"
    }
  },
  "buildCommand": "string",
  "builds": [
    {
      "config": {},
      "src": "string",
      "use": "string"
    }
  ],
  "cleanUrls": true,
  "crons": [
    {
      "path": "string",
      "schedule": "string"
    }
  ],
  "deploymentId": "string",
  "devCommand": "string",
  "env": {
    "A_SECRET": "@a-secret"
  },
  "files": [
    {
      "data": "string",
      "encoding": "base64",
      "file": "folder/file.js"
    }
  ],
  "framework": null,
  "functions": {
    "src/pages/**": {
      "maxDuration": 6,
      "memory": 1024
    }
  },
  "git": {
    "deploymentEnabled": {
      "main": false
    }
  },
  "gitMetadata": {
    "commitAuthorName": "kyliau",
    "commitMessage": "add method to measure Interaction to Next Paint (INP) (#36490)",
    "commitRef": "main",
    "commitSha": "dc36199b2234c6586ebe05ec94078a895c707e29",
    "dirty": true,
    "remoteUrl": "https://github.com/vercel/next.js"
  },
  "gitSource": {
    "ref": "string",
    "repoId": 0,
    "sha": "string",
    "type": "github"
  },
  "headers": [
    {
      "has": [
        {
          "type": "host",
          "value": "string"
        }
      ],
      "headers": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "missing": [
        {
          "type": "host",
          "value": "string"
        }
      ],
      "source": "string"
    }
  ],
  "ignoreCommand": "string",
  "installCommand": "string",
  "meta": {
    "foo": "bar"
  },
  "monorepoManager": "string",
  "name": "my-instant-deployment",
  "outputDirectory": "string",
  "project": "my-deployment-project",
  "projectSettings": {
    "buildCommand": "string",
    "commandForIgnoringBuildStep": "string",
    "devCommand": "string",
    "framework": null,
    "installCommand": "string",
    "outputDirectory": "string",
    "rootDirectory": "string",
    "serverlessFunctionRegion": "stri",
    "skipGitConnectDuringLink": true,
    "sourceFilesOutsideRootDirectory": true
  },
  "public": true,
  "redirects": [
    {
      "destination": "string",
      "has": [
        {
          "type": "host",
          "value": "string"
        }
      ],
      "missing": [
        {
          "type": "host",
          "value": "string"
        }
      ],
      "permanent": true,
      "source": "string"
    }
  ],
  "regions": [
    "sfo",
    "bru"
  ],
  "rewrites": [
    {
      "destination": "string",
      "has": [
        {
          "type": "host",
          "value": "string"
        }
      ],
      "missing": [
        {
          "type": "host",
          "value": "string"
        }
      ],
      "source": "string"
    }
  ],
  "routes": [
    {
      "dest": "https://docs.example.com",
      "src": "/docs"
    }
  ],
  "target": "staging",
  "trailingSlash": true,
  "withLatestCommit": true
}
```

<h3 id="create-a-new-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceNew|query|string|false|Forces a new deployment even if there is a previous similar deployment|
|skipAutoDetectionConfirmation|query|string|false|Allows to skip framework detection so the API would not fail to ask for confirmation|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» $schema|body|string|false|Ignored. Can be set to get completions, validations and documentation in some editors.|
|» alias|body|[string]|false|Aliases that will get assigned when the deployment is `READY` and the target is `production`. The client needs to make a `GET` request to its API to ensure the assignment|
|» build|body|object|false|**Deprecated.** An object containing another object with information to be passed to the Build Process|
|» » env|body|object|false|**Deprecated.** An object containing the deployment's environment variable names and values to be passed to Builds. Secrets can be referenced by prefixing the value with `@`|
|» » » **additionalProperties**|body|string|false|none|
|» buildCommand|body|string \| null|false|The build command for this project. When `null` is used this value will be automatically detected|
|» builds|body|[object]|false|**Deprecated.** A list of build descriptions whose src references valid source files.|
|» » config|body|object|false|Optionally, an object including arbitrary metadata to be passed to the Builder|
|» » src|body|string|false|A glob expression or pathname. If more than one file is resolved, one build will be created per matched file. It can include `*` and `**`|
|» » use|body|string|true|An npm module to be installed by the build process. It can include a semver compatible version (e.g.: `@org/proj@1`)|
|» cleanUrls|body|boolean|false|When set to `true`, all HTML files and Serverless Functions will have their extension removed. When visiting a path that ends with the extension, a 308 response will redirect the client to the extensionless path.|
|» crons|body|[object]|false|An array of cron jobs that should be created for production Deployments.|
|» » path|body|string|true|none|
|» » schedule|body|string|true|none|
|» deploymentId|body|string|false|An deployment id for an existing deployment to redeploy|
|» devCommand|body|string \| null|false|The dev command for this project. When `null` is used this value will be automatically detected|
|» env|body|object|false|**Deprecated.** An object containing the deployment's environment variable names and values. Secrets can be referenced by prefixing the value with `@`|
|» » **additionalProperties**|body|string|false|none|
|» files|body|[object]|false|A list of objects with the files to be deployed|
|» » *oneOf*|body|object|false|Used in the case you want to inline a file inside the request|
|» » data|body|string|true|The file content, it could be either a `base64` (useful for images, etc.) of the files or the plain content for source code|
|» » encoding|body|string|false|The file content encoding, it could be either a base64 (useful for images, etc.) of the files or the plain text for source code.|
|» » file|body|string|true|The file name including the whole path|
|» » *oneOf*|body|object|false|Used in the case you want to reference a file that was already uploaded|
|» » file|body|string|true|The file path relative to the project root|
|» » sha|body|string|false|The file contents hashed with SHA1, used to check the integrity|
|» » size|body|integer|false|The file size in bytes|
|» framework|body|string \| null|false|The framework that is being used for this project. When `null` is used no framework is selected|
|» functions|body|object|false|An object describing custom options for your Serverless Functions. Each key must be glob pattern that matches the paths of the Serverless Functions you would like to customize (like `api/*.js` or `api/test.js`).|
|» » **additionalProperties**|body|object|false|none|
|» » » excludeFiles|body|string|false|A glob pattern to match files that should be excluded from your Serverless Function. If you’re using a Community Runtime, the behavior might vary.|
|» » » includeFiles|body|string|false|A glob pattern to match files that should be included in your Serverless Function. If you’re using a Community Runtime, the behavior might vary.|
|» » » maxDuration|body|number|false|An integer defining how long your Serverless Function should be allowed to run on every request in seconds (between 1 and the maximum limit of your plan).|
|» » » memory|body|number|false|An integer defining the memory your Serverless Function should be provided with (between 128 and 3008).|
|» » » runtime|body|string|false|The npm package name of a Runtime, including its version|
|» git|body|object|false|none|
|» » deploymentEnabled|body|boolean \| object|false|Specifies the branches that will not trigger an auto-deployment when committing to them. Any non specified branch is `true` by default.|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » **additionalProperties**|body|boolean|false|none|
|» gitMetadata|body|object|false|Populates initial git metadata for different git providers.|
|» » commitAuthorName|body|string|false|The name of the author of the commit|
|» » commitMessage|body|string|false|The commit message|
|» » commitRef|body|string|false|The branch on which the commit was made|
|» » commitSha|body|string|false|The hash of the commit|
|» » dirty|body|boolean|false|Whether or not there have been modifications to the working tree since the latest commit|
|» » remoteUrl|body|string|true|The git repository's remote origin url|
|» gitSource|body|object|false|Defines the Git Repository source to be deployed. This property can not be used in combination with `files`.|
|» » *anyOf*|body|object|false|none|
|» » ref|body|string|true|none|
|» » repoId|body|number \| string|true|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|string|false|none|
|» » sha|body|string|false|none|
|» » type|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » org|body|string|true|none|
|» » ref|body|string|true|none|
|» » repo|body|string|true|none|
|» » sha|body|string|false|none|
|» » type|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » projectId|body|number \| string|true|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|string|false|none|
|» » ref|body|string|true|none|
|» » sha|body|string|false|none|
|» » type|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » ref|body|string|true|none|
|» » repoUuid|body|string|true|none|
|» » sha|body|string|false|none|
|» » type|body|string|true|none|
|» » workspaceUuid|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » owner|body|string|true|none|
|» » ref|body|string|true|none|
|» » sha|body|string|false|none|
|» » slug|body|string|true|none|
|» » type|body|string|true|none|
|» headers|body|[object]|false|A list of header definitions.|
|» » has|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » headers|body|[object]|true|An array of key/value pairs representing each response header.|
|» » » key|body|string|true|none|
|» » » value|body|string|true|none|
|» » missing|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » source|body|string|true|A pattern that matches each incoming pathname (excluding querystring)|
|» ignoreCommand|body|string \| null|false|none|
|» installCommand|body|string \| null|false|The install command for this project. When `null` is used this value will be automatically detected|
|» meta|body|object|false|An object containing the deployment's metadata. Multiple key-value pairs can be attached to a deployment|
|» » **additionalProperties**|body|string|false|none|
|» monorepoManager|body|string \| null|false|The monorepo manager that is being used for this deployment. When `null` is used no monorepo manager is selected|
|» name|body|string|true|A string with the project name used in the deployment URL|
|» outputDirectory|body|string \| null|false|The output directory of the project. When `null` is used this value will be automatically detected|
|» project|body|string|false|The target project identifier in which the deployment will be created. When defined, this parameter overrides name|
|» projectSettings|body|object|false|Project settings that will be applied to the deployment. It is required for the first deployment of a project and will be saved for any following deployments|
|» » buildCommand|body|string \| null|false|The build command for this project. When `null` is used this value will be automatically detected|
|» » commandForIgnoringBuildStep|body|string \| null|false|none|
|» » devCommand|body|string \| null|false|The dev command for this project. When `null` is used this value will be automatically detected|
|» » framework|body|string \| null|false|The framework that is being used for this project. When `null` is used no framework is selected|
|» » installCommand|body|string \| null|false|The install command for this project. When `null` is used this value will be automatically detected|
|» » outputDirectory|body|string \| null|false|The output directory of the project. When `null` is used this value will be automatically detected|
|» » rootDirectory|body|string \| null|false|The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root|
|» » serverlessFunctionRegion|body|string \| null|false|The region to deploy Serverless Functions in this project|
|» » skipGitConnectDuringLink|body|boolean|false|**Deprecated.** Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.|
|» » sourceFilesOutsideRootDirectory|body|boolean|false|Indicates if there are source files outside of the root directory, typically used for monorepos|
|» public|body|boolean|false|Whether a deployment's source and logs are available publicly|
|» redirects|body|[object]|false|A list of redirect definitions.|
|» » destination|body|string|true|A location destination defined as an absolute pathname or external URL.|
|» » has|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » missing|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » permanent|body|boolean|false|A boolean to toggle between permanent and temporary redirect. When `true`, the status code is `308`. When `false` the status code is `307`.|
|» » source|body|string|true|A pattern that matches each incoming pathname (excluding querystring).|
|» regions|body|[string]|false|An array of the regions the deployment's Serverless Functions should be deployed to|
|» rewrites|body|[object]|false|A list of rewrite definitions.|
|» » destination|body|string|true|An absolute pathname to an existing resource or an external URL.|
|» » has|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » missing|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » source|body|string|true|A pattern that matches each incoming pathname (excluding querystring).|
|» routes|body|[object]|false|**Deprecated.** A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» » *anyOf*|body|object|false|none|
|» » caseSensitive|body|boolean|false|none|
|» » check|body|boolean|false|none|
|» » continue|body|boolean|false|none|
|» » dest|body|string|false|none|
|» » has|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » headers|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » important|body|boolean|false|none|
|» » locale|body|object|false|none|
|» » » cookie|body|string|false|none|
|» » » default|body|string|false|none|
|» » » path|body|string|false|none|
|» » » redirect|body|object|false|none|
|» » » » **additionalProperties**|body|string|false|none|
|» » » value|body|string|false|none|
|» » methods|body|[string]|false|none|
|» » middleware|body|number|false|none|
|» » middlewarePath|body|string|false|none|
|» » middlewareRawSrc|body|[string]|false|none|
|» » missing|body|[object]|false|An array of requirements that are needed to match|
|» » » *anyOf*|body|object|false|none|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|true|A regular expression used to match the value. Named groups can be used in the destination|
|» » » *anyOf*|body|object|false|none|
|» » » key|body|string|true|The name of the element contained in the particular type|
|» » » type|body|string|true|The type of request element to check|
|» » » value|body|string|false|A regular expression used to match the value. Named groups can be used in the destination|
|» » override|body|boolean|false|none|
|» » src|body|string|true|none|
|» » status|body|integer|false|none|
|» » user|body|boolean|false|none|
|» » *anyOf*|body|object|false|none|
|» » handle|body|string|true|none|
|» target|body|string|false|Either not defined, `staging`, or `production`. If `staging`, a staging alias in the format `<project>.<team>.now.sh` will be assigned. If `production`, any aliases defined in `alias` will be assigned|
|» trailingSlash|body|boolean|false|When `false`, visiting a path that ends with a forward slash will respond with a `308` status code and redirect to the path without the trailing slash.|
|» withLatestCommit|body|boolean|false|When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|forceNew|0|
|forceNew|1|
|skipAutoDetectionConfirmation|0|
|skipAutoDetectionConfirmation|1|
|» » encoding|base64|
|» » encoding|utf-8|
|» framework|null|
|» framework|blitzjs|
|» framework|nextjs|
|» framework|gatsby|
|» framework|remix|
|» framework|astro|
|» framework|hexo|
|» framework|eleventy|
|» framework|docusaurus-2|
|» framework|docusaurus|
|» framework|preact|
|» framework|solidstart|
|» framework|dojo|
|» framework|ember|
|» framework|vue|
|» framework|scully|
|» framework|ionic-angular|
|» framework|angular|
|» framework|polymer|
|» framework|svelte|
|» framework|sveltekit|
|» framework|sveltekit-1|
|» framework|ionic-react|
|» framework|create-react-app|
|» framework|gridsome|
|» framework|umijs|
|» framework|sapper|
|» framework|saber|
|» framework|stencil|
|» framework|nuxtjs|
|» framework|redwoodjs|
|» framework|hugo|
|» framework|jekyll|
|» framework|brunch|
|» framework|middleman|
|» framework|zola|
|» framework|hydrogen|
|» framework|vite|
|» framework|vitepress|
|» framework|vuepress|
|» framework|parcel|
|» framework|sanity|
|» » type|github|
|» » type|github|
|» » type|gitlab|
|» » type|bitbucket|
|» » type|bitbucket|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » framework|null|
|» » framework|blitzjs|
|» » framework|nextjs|
|» » framework|gatsby|
|» » framework|remix|
|» » framework|astro|
|» » framework|hexo|
|» » framework|eleventy|
|» » framework|docusaurus-2|
|» » framework|docusaurus|
|» » framework|preact|
|» » framework|solidstart|
|» » framework|dojo|
|» » framework|ember|
|» » framework|vue|
|» » framework|scully|
|» » framework|ionic-angular|
|» » framework|angular|
|» » framework|polymer|
|» » framework|svelte|
|» » framework|sveltekit|
|» » framework|sveltekit-1|
|» » framework|ionic-react|
|» » framework|create-react-app|
|» » framework|gridsome|
|» » framework|umijs|
|» » framework|sapper|
|» » framework|saber|
|» » framework|stencil|
|» » framework|nuxtjs|
|» » framework|redwoodjs|
|» » framework|hugo|
|» » framework|jekyll|
|» » framework|brunch|
|» » framework|middleman|
|» » framework|zola|
|» » framework|hydrogen|
|» » framework|vite|
|» » framework|vitepress|
|» » framework|vuepress|
|» » framework|parcel|
|» » framework|sanity|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » » type|host|
|» » » type|header|
|» » » type|cookie|
|» » » type|query|
|» » handle|error|
|» » handle|filesystem|
|» » handle|hit|
|» » handle|miss|
|» » handle|resource|
|» » handle|rewrite|
|» target|staging|
|» target|production|

> Example responses

> 200 Response

```json
{
  "alias": [],
  "aliasAssigned": true,
  "aliasAssignedAt": 0,
  "aliasError": null,
  "aliasFinal": "string",
  "aliasWarning": {
    "action": "string",
    "code": "string",
    "link": "string",
    "message": "string"
  },
  "automaticAliases": [
    "string"
  ],
  "bootedAt": 0,
  "build": {
    "env": [
      "MY_ENV_VAR"
    ]
  },
  "buildErrorAt": 0,
  "buildingAt": 0,
  "builds": [
    {}
  ],
  "canceledAt": 0,
  "checksConclusion": "succeeded",
  "checksState": "registered",
  "createdAt": 1540257589405,
  "createdIn": "sfo1",
  "creator": {
    "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",
    "username": "john-doe"
  },
  "env": [
    "MY_SECRET"
  ],
  "errorCode": "string",
  "errorLink": "string",
  "errorMessage": "string",
  "errorStep": "string",
  "functions": {
    "api/test.js": {
      "memory": 3008
    }
  },
  "gitRepo": {
    "defaultBranch": "string",
    "name": "string",
    "namespace": "string",
    "ownerType": "team",
    "path": "string",
    "private": true,
    "projectId": 0,
    "type": "gitlab",
    "url": "string"
  },
  "gitSource": {
    "prId": 0,
    "ref": "string",
    "repoId": "string",
    "sha": "string",
    "type": "github"
  },
  "id": "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  "inspectorUrl": "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",
  "isInConcurrentBuildsQueue": false,
  "lambdas": [
    {
      "createdAt": 0,
      "entrypoint": "string",
      "id": "string",
      "output": [
        {
          "functionName": "string",
          "path": "string"
        }
      ],
      "readyState": "BUILDING",
      "readyStateAt": 0
    }
  ],
  "meta": {
    "foo": "bar"
  },
  "monorepoManager": "turbo",
  "name": "my-project",
  "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",
  "plan": "pro",
  "previewCommentsEnabled": false,
  "projectId": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  "public": false,
  "readyState": "READY",
  "regions": [
    "sfo1"
  ],
  "routes": [
    {
      "dest": "https://docs.example.com",
      "src": "/docs"
    }
  ],
  "source": "cli",
  "target": null,
  "team": {
    "id": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    "name": "FSociety",
    "slug": "fsociety"
  },
  "type": "LAMBDAS",
  "url": "my-instant-deployment-3ij3cxz9qr.now.sh",
  "userAliases": [
    "sub1.example.com",
    "sub2.example.com"
  ],
  "version": 2
}
```

<h3 id="create-a-new-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The successfully created deployment|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated<br>Deploying to Serverless Functions to multiple regions requires a plan update|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|409|Conflict|The deployment project is being transferred|None|

<h3 id="create-a-new-deployment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|[string]|true|none|A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation|
|aliasAssigned|boolean|true|none|A boolean that will be true when the aliases from the alias property were assigned successfully|
|aliasAssignedAt|null|false|none|none|
|» *oneOf*|number|false|none|none|
|» *oneOf*|boolean|false|none|none|
|aliasError|object \| null|false|none|An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`|
|» code|string|true|none|none|
|» message|string|true|none|none|
|aliasFinal|string \| null|false|none|none|
|aliasWarning|object \| null|false|none|none|
|» action|string|false|none|none|
|» code|string|true|none|none|
|» link|string|false|none|none|
|» message|string|true|none|none|
|automaticAliases|[string]|false|none|none|
|bootedAt|number|true|none|none|
|build|object|true|none|none|
|» env|[string]|true|none|The keys of the environment variables that were assigned during the build phase.|
|buildErrorAt|number|false|none|none|
|buildingAt|number|true|none|none|
|builds|[object]|false|none|none|
|canceledAt|number|false|none|none|
|checksConclusion|string|false|none|none|
|checksState|string|false|none|none|
|createdAt|number|true|none|A number containing the date when the deployment was created in milliseconds|
|createdIn|string|true|none|The region where the deployment was first created|
|creator|object|true|none|Information about the deployment creator|
|» uid|string|true|none|The ID of the user that created the deployment|
|» username|string|false|none|The username of the user that created the deployment|
|env|[string]|true|none|The keys of the environment variables that were assigned during runtime|
|errorCode|string|false|none|none|
|errorLink|string|false|none|none|
|errorMessage|string \| null|false|none|none|
|errorStep|string|false|none|none|
|functions|object \| null|false|none|An object used to configure your Serverless Functions|
|» **additionalProperties**|object|false|none|An object used to configure your Serverless Functions|
|» » excludeFiles|string|false|none|none|
|» » includeFiles|string|false|none|none|
|» » maxDuration|number|false|none|none|
|» » memory|number|false|none|none|
|» » runtime|string|false|none|none|
|gitRepo|null|false|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» namespace|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» projectId|number|true|none|none|
|» type|string|true|none|none|
|» url|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» org|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» repo|string|true|none|none|
|» repoId|number|true|none|none|
|» repoOwnerId|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» owner|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» repoUuid|string|true|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|true|none|none|
|gitSource|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repo|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» projectId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|false|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» gitUrl|string|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|false|none|none|
|» ref|string|true|none|none|
|» repo|string|false|none|none|
|» repoId|number|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» projectId|number|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|false|none|none|
|» ref|string|true|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|true|none|none|
|» slug|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|true|none|none|
|id|string|true|none|A string holding the unique ID of the deployment|
|inspectorUrl|string \| null|true|none|Vercel URL to inspect the deployment.|
|isInConcurrentBuildsQueue|boolean|true|none|Is the deployment currently queued waiting for a Concurrent Build Slot to be available|
|lambdas|[object]|false|none|none|
|» createdAt|number|false|none|none|
|» entrypoint|string \| null|false|none|none|
|» id|string|true|none|none|
|» output|[object]|true|none|none|
|» » functionName|string|true|none|none|
|» » path|string|true|none|none|
|» readyState|string|false|none|none|
|» readyStateAt|number|false|none|none|
|meta|object|true|none|An object containing the deployment's metadata|
|» **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|monorepoManager|string \| null|false|none|An monorepo manager that was used for the deployment|
|name|string|true|none|The name of the project associated with the deployment at the time that the deployment was created|
|ownerId|string|true|none|The unique ID of the user or team the deployment belongs to|
|plan|string|true|none|The pricing plan the deployment was made under|
|previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|projectId|string|true|none|The ID of the project the deployment is associated with|
|public|boolean|true|none|A boolean representing if the deployment is public or not. By default this is `false`|
|readyState|string|true|none|The state of the deployment depending on the process of deploying, or if it is ready or in an error state|
|regions|[string]|true|none|The regions the deployment exists in|
|routes|[object]|true|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» caseSensitive|boolean|false|none|none|
|» check|boolean|false|none|none|
|» continue|boolean|false|none|none|
|» dest|string|false|none|none|
|» has|[object]|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » value|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » key|string|true|none|none|
|» » type|string|true|none|none|
|» » value|string|false|none|none|
|» headers|object|false|none|none|
|» » **additionalProperties**|string|false|none|none|
|» important|boolean|false|none|none|
|» locale|object|false|none|none|
|» » cookie|string|false|none|none|
|» » redirect|object|false|none|Construct a type with a set of properties K of type T|
|» » » **additionalProperties**|string|false|none|none|
|» methods|[string]|false|none|none|
|» middleware|number|false|none|A middleware index in the `middleware` key under the build result|
|» middlewarePath|string|false|none|A middleware key within the `output` key under the build result. Overrides a `middleware` definition.|
|» middlewareRawSrc|[string]|false|none|The original middleware matchers.|
|» missing|[object]|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » value|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » key|string|true|none|none|
|» » type|string|true|none|none|
|» » value|string|false|none|none|
|» override|boolean|false|none|none|
|» src|string|true|none|none|
|» status|number|false|none|none|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» dest|string|false|none|none|
|» handle|string|true|none|none|
|» src|string|false|none|none|
|» status|number|false|none|none|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» continue|boolean|true|none|none|
|» middleware|number|true|none|none|
|» src|string|true|none|none|
|source|string|false|none|Where was the deployment created from|
|target|string \| null|false|none|If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned|
|team|object|false|none|The team that owns the deployment if any|
|» id|string|true|none|The ID of the team owner|
|» name|string|true|none|The name of the team owner|
|» slug|string|true|none|The slug of the team owner|
|type|string|true|none|none|
|url|string|true|none|A string with the unique URL of the deployment|
|userAliases|[string]|false|none|An array of domains that were provided by the user when creating the Deployment.|
|version|number|true|none|The platform version that was used to create the deployment.|

#### Enumerated Values

|Property|Value|
|---|---|
|checksConclusion|succeeded|
|checksConclusion|failed|
|checksConclusion|skipped|
|checksConclusion|canceled|
|checksState|registered|
|checksState|running|
|checksState|completed|
|» ownerType|team|
|» ownerType|user|
|» type|gitlab|
|» ownerType|team|
|» ownerType|user|
|» type|github|
|» ownerType|team|
|» ownerType|user|
|» type|bitbucket|
|» type|github|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» type|bitbucket|
|» type|custom|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» readyState|BUILDING|
|» readyState|ERROR|
|» readyState|INITIALIZING|
|» readyState|READY|
|plan|hobby|
|plan|enterprise|
|plan|pro|
|plan|oss|
|readyState|QUEUED|
|readyState|BUILDING|
|readyState|ERROR|
|readyState|INITIALIZING|
|readyState|READY|
|readyState|CANCELED|
|» » type|host|
|» » type|header|
|» » type|cookie|
|» » type|query|
|» » type|host|
|» » type|header|
|» » type|cookie|
|» » type|query|
|» handle|filesystem|
|» handle|hit|
|» handle|miss|
|» handle|rewrite|
|» handle|error|
|» handle|resource|
|» middleware|0|
|source|cli|
|source|git|
|source|import|
|source|import/repo|
|source|clone/repo|
|target|production|
|target|staging|
|type|LAMBDAS|
|version|2|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get a deployment by ID or URL

<a id="opIdgetDeployment"></a>

> Code samples

```bash
curl https://example.com/v13/deployments/dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v13/deployments/{idOrUrl}`

Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user is an owner of the deployment.

<h3 id="get-a-deployment-by-id-or-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrUrl|path|string|true|The unique identifier or hostname of the deployment.|
|withGitRepoInfo|query|string|false|Whether to add in gitRepo information.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "alias": [],
  "aliasAssigned": true,
  "aliasAssignedAt": 0,
  "aliasError": null,
  "aliasFinal": "string",
  "aliasWarning": {
    "action": "string",
    "code": "string",
    "link": "string",
    "message": "string"
  },
  "automaticAliases": [
    "string"
  ],
  "bootedAt": 0,
  "build": {
    "env": [
      "MY_ENV_VAR"
    ]
  },
  "buildErrorAt": 0,
  "buildingAt": 0,
  "builds": [
    {}
  ],
  "canceledAt": 0,
  "checksConclusion": "succeeded",
  "checksState": "registered",
  "createdAt": 1540257589405,
  "createdIn": "sfo1",
  "creator": {
    "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",
    "username": "john-doe"
  },
  "env": [
    "MY_SECRET"
  ],
  "errorCode": "string",
  "errorLink": "string",
  "errorMessage": "string",
  "errorStep": "string",
  "functions": {
    "api/test.js": {
      "memory": 3008
    }
  },
  "gitRepo": {
    "defaultBranch": "string",
    "name": "string",
    "namespace": "string",
    "ownerType": "team",
    "path": "string",
    "private": true,
    "projectId": 0,
    "type": "gitlab",
    "url": "string"
  },
  "gitSource": {
    "prId": 0,
    "ref": "string",
    "repoId": "string",
    "sha": "string",
    "type": "github"
  },
  "id": "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  "inspectorUrl": "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",
  "isInConcurrentBuildsQueue": false,
  "lambdas": [
    {
      "createdAt": 0,
      "entrypoint": "string",
      "id": "string",
      "output": [
        {
          "functionName": "string",
          "path": "string"
        }
      ],
      "readyState": "BUILDING",
      "readyStateAt": 0
    }
  ],
  "meta": {
    "foo": "bar"
  },
  "monorepoManager": "turbo",
  "name": "my-project",
  "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",
  "plan": "pro",
  "previewCommentsEnabled": false,
  "projectId": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  "public": false,
  "readyState": "READY",
  "regions": [
    "sfo1"
  ],
  "routes": [
    {
      "dest": "https://docs.example.com",
      "src": "/docs"
    }
  ],
  "source": "cli",
  "target": null,
  "team": {
    "id": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    "name": "FSociety",
    "slug": "fsociety"
  },
  "type": "LAMBDAS",
  "url": "my-instant-deployment-3ij3cxz9qr.now.sh",
  "userAliases": [
    "sub1.example.com",
    "sub2.example.com"
  ],
  "version": 2
}
```

<h3 id="get-a-deployment-by-id-or-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The deployment including only public information<br>The deployment including both public and private information|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The deployment was not found|None|

<h3 id="get-a-deployment-by-id-or-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|The deployment including both public and private information|
|alias|[string]|true|none|A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation|
|aliasAssigned|boolean|true|none|A boolean that will be true when the aliases from the alias property were assigned successfully|
|aliasAssignedAt|null|false|none|none|
|» *oneOf*|number|false|none|none|
|» *oneOf*|boolean|false|none|none|
|aliasError|object \| null|false|none|An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`|
|» code|string|true|none|none|
|» message|string|true|none|none|
|aliasFinal|string \| null|false|none|none|
|aliasWarning|object \| null|false|none|none|
|» action|string|false|none|none|
|» code|string|true|none|none|
|» link|string|false|none|none|
|» message|string|true|none|none|
|automaticAliases|[string]|false|none|none|
|bootedAt|number|true|none|none|
|build|object|true|none|none|
|» env|[string]|true|none|The keys of the environment variables that were assigned during the build phase.|
|buildErrorAt|number|false|none|none|
|buildingAt|number|true|none|none|
|builds|[object]|false|none|none|
|canceledAt|number|false|none|none|
|checksConclusion|string|false|none|none|
|checksState|string|false|none|none|
|createdAt|number|true|none|A number containing the date when the deployment was created in milliseconds|
|createdIn|string|true|none|The region where the deployment was first created|
|creator|object|true|none|Information about the deployment creator|
|» uid|string|true|none|The ID of the user that created the deployment|
|» username|string|false|none|The username of the user that created the deployment|
|env|[string]|true|none|The keys of the environment variables that were assigned during runtime|
|errorCode|string|false|none|none|
|errorLink|string|false|none|none|
|errorMessage|string \| null|false|none|none|
|errorStep|string|false|none|none|
|functions|object \| null|false|none|An object used to configure your Serverless Functions|
|» **additionalProperties**|object|false|none|An object used to configure your Serverless Functions|
|» » excludeFiles|string|false|none|none|
|» » includeFiles|string|false|none|none|
|» » maxDuration|number|false|none|none|
|» » memory|number|false|none|none|
|» » runtime|string|false|none|none|
|gitRepo|null|false|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» namespace|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» projectId|number|true|none|none|
|» type|string|true|none|none|
|» url|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» org|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» repo|string|true|none|none|
|» repoId|number|true|none|none|
|» repoOwnerId|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» defaultBranch|string|true|none|none|
|» name|string|true|none|none|
|» owner|string|true|none|none|
|» ownerType|string|true|none|none|
|» path|string|true|none|none|
|» private|boolean|true|none|none|
|» repoUuid|string|true|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|true|none|none|
|gitSource|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repo|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» projectId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|false|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» gitUrl|string|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|false|none|none|
|» ref|string|true|none|none|
|» repo|string|false|none|none|
|» repoId|number|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» projectId|number|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|false|none|none|
|» ref|string|true|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|true|none|none|
|» slug|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|true|none|none|
|id|string|true|none|A string holding the unique ID of the deployment|
|inspectorUrl|string \| null|true|none|Vercel URL to inspect the deployment.|
|isInConcurrentBuildsQueue|boolean|true|none|Is the deployment currently queued waiting for a Concurrent Build Slot to be available|
|lambdas|[object]|false|none|none|
|» createdAt|number|false|none|none|
|» entrypoint|string \| null|false|none|none|
|» id|string|true|none|none|
|» output|[object]|true|none|none|
|» » functionName|string|true|none|none|
|» » path|string|true|none|none|
|» readyState|string|false|none|none|
|» readyStateAt|number|false|none|none|
|meta|object|true|none|An object containing the deployment's metadata|
|» **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|monorepoManager|string \| null|false|none|An monorepo manager that was used for the deployment|
|name|string|true|none|The name of the project associated with the deployment at the time that the deployment was created|
|ownerId|string|true|none|The unique ID of the user or team the deployment belongs to|
|plan|string|true|none|The pricing plan the deployment was made under|
|previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|projectId|string|true|none|The ID of the project the deployment is associated with|
|public|boolean|true|none|A boolean representing if the deployment is public or not. By default this is `false`|
|readyState|string|true|none|The state of the deployment depending on the process of deploying, or if it is ready or in an error state|
|regions|[string]|true|none|The regions the deployment exists in|
|routes|[object]|true|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» caseSensitive|boolean|false|none|none|
|» check|boolean|false|none|none|
|» continue|boolean|false|none|none|
|» dest|string|false|none|none|
|» has|[object]|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » value|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » key|string|true|none|none|
|» » type|string|true|none|none|
|» » value|string|false|none|none|
|» headers|object|false|none|none|
|» » **additionalProperties**|string|false|none|none|
|» important|boolean|false|none|none|
|» locale|object|false|none|none|
|» » cookie|string|false|none|none|
|» » redirect|object|false|none|Construct a type with a set of properties K of type T|
|» » » **additionalProperties**|string|false|none|none|
|» methods|[string]|false|none|none|
|» middleware|number|false|none|A middleware index in the `middleware` key under the build result|
|» middlewarePath|string|false|none|A middleware key within the `output` key under the build result. Overrides a `middleware` definition.|
|» middlewareRawSrc|[string]|false|none|The original middleware matchers.|
|» missing|[object]|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » value|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » key|string|true|none|none|
|» » type|string|true|none|none|
|» » value|string|false|none|none|
|» override|boolean|false|none|none|
|» src|string|true|none|none|
|» status|number|false|none|none|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» dest|string|false|none|none|
|» handle|string|true|none|none|
|» src|string|false|none|none|
|» status|number|false|none|none|
|» *oneOf*|object|false|none|A list of routes objects used to rewrite paths to point towards other internal or external paths|
|» continue|boolean|true|none|none|
|» middleware|number|true|none|none|
|» src|string|true|none|none|
|source|string|false|none|Where was the deployment created from|
|target|string \| null|false|none|If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned|
|team|object|false|none|The team that owns the deployment if any|
|» id|string|true|none|The ID of the team owner|
|» name|string|true|none|The name of the team owner|
|» slug|string|true|none|The slug of the team owner|
|type|string|true|none|none|
|url|string|true|none|A string with the unique URL of the deployment|
|userAliases|[string]|false|none|An array of domains that were provided by the user when creating the Deployment.|
|version|number|true|none|The platform version that was used to create the deployment.|
|*oneOf*|object|false|none|The deployment including only public information|
|alias|[string]|true|none|A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation|
|aliasAssigned|boolean|true|none|A boolean that will be true when the aliases from the alias property were assigned successfully|
|aliasError|object \| null|false|none|An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`|
|» code|string|true|none|none|
|» message|string|true|none|none|
|aliasFinal|string \| null|false|none|none|
|aliasWarning|object \| null|false|none|none|
|» action|string|false|none|none|
|» code|string|true|none|none|
|» link|string|false|none|none|
|» message|string|true|none|none|
|automaticAliases|[string]|false|none|none|
|bootedAt|number|true|none|none|
|buildErrorAt|number|false|none|none|
|buildingAt|number|true|none|none|
|canceledAt|number|false|none|none|
|checksConclusion|string|false|none|none|
|checksState|string|false|none|none|
|createdAt|number|true|none|A number containing the date when the deployment was created in milliseconds|
|creator|object|true|none|Information about the deployment creator|
|» uid|string|true|none|The ID of the user that created the deployment|
|» username|string|false|none|The username of the user that created the deployment|
|errorCode|string|false|none|none|
|errorLink|string|false|none|none|
|errorMessage|string \| null|false|none|none|
|errorStep|string|false|none|none|
|gitSource|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repo|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» projectId|string \| number|true|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|false|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|true|none|none|
|» prId|number \| null|false|none|none|
|» ref|string \| null|false|none|none|
|» sha|string|false|none|none|
|» slug|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» gitUrl|string|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» org|string|false|none|none|
|» ref|string|true|none|none|
|» repo|string|false|none|none|
|» repoId|number|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» projectId|number|true|none|none|
|» ref|string|true|none|none|
|» sha|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» owner|string|false|none|none|
|» ref|string|true|none|none|
|» repoUuid|string|true|none|none|
|» sha|string|true|none|none|
|» slug|string|false|none|none|
|» type|string|true|none|none|
|» workspaceUuid|string|true|none|none|
|id|string|true|none|A string holding the unique ID of the deployment|
|lambdas|[object]|false|none|none|
|» createdAt|number|false|none|none|
|» entrypoint|string \| null|false|none|none|
|» id|string|true|none|none|
|» output|[object]|true|none|none|
|» » functionName|string|true|none|none|
|» » path|string|true|none|none|
|» readyState|string|false|none|none|
|» readyStateAt|number|false|none|none|
|meta|object|true|none|An object containing the deployment's metadata|
|» **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|name|string|true|none|The name of the project associated with the deployment at the time that the deployment was created|
|previewCommentsEnabled|boolean|false|none|Whether or not preview comments are enabled for the deployment|
|public|boolean|true|none|A boolean representing if the deployment is public or not. By default this is `false`|
|readyState|string|true|none|The state of the deployment depending on the process of deploying, or if it is ready or in an error state|
|regions|[string]|true|none|The regions the deployment exists in|
|source|string|false|none|Where was the deployment created from|
|target|string \| null|false|none|If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned|
|team|object|false|none|The team that owns the deployment if any|
|» id|string|true|none|The ID of the team owner|
|» name|string|true|none|The name of the team owner|
|» slug|string|true|none|The slug of the team owner|
|type|string|true|none|none|
|url|string|true|none|A string with the unique URL of the deployment|
|userAliases|[string]|false|none|An array of domains that were provided by the user when creating the Deployment.|
|version|number|true|none|The platform version that was used to create the deployment.|

#### Enumerated Values

|Property|Value|
|---|---|
|checksConclusion|succeeded|
|checksConclusion|failed|
|checksConclusion|skipped|
|checksConclusion|canceled|
|checksState|registered|
|checksState|running|
|checksState|completed|
|» ownerType|team|
|» ownerType|user|
|» type|gitlab|
|» ownerType|team|
|» ownerType|user|
|» type|github|
|» ownerType|team|
|» ownerType|user|
|» type|bitbucket|
|» type|github|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» type|bitbucket|
|» type|custom|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» readyState|BUILDING|
|» readyState|ERROR|
|» readyState|INITIALIZING|
|» readyState|READY|
|plan|hobby|
|plan|enterprise|
|plan|pro|
|plan|oss|
|readyState|QUEUED|
|readyState|BUILDING|
|readyState|ERROR|
|readyState|INITIALIZING|
|readyState|READY|
|readyState|CANCELED|
|» » type|host|
|» » type|header|
|» » type|cookie|
|» » type|query|
|» » type|host|
|» » type|header|
|» » type|cookie|
|» » type|query|
|» handle|filesystem|
|» handle|hit|
|» handle|miss|
|» handle|rewrite|
|» handle|error|
|» handle|resource|
|» middleware|0|
|source|cli|
|source|git|
|source|import|
|source|import/repo|
|source|clone/repo|
|target|production|
|target|staging|
|type|LAMBDAS|
|version|2|
|checksConclusion|succeeded|
|checksConclusion|failed|
|checksConclusion|skipped|
|checksConclusion|canceled|
|checksState|registered|
|checksState|running|
|checksState|completed|
|» type|github|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» type|bitbucket|
|» type|custom|
|» type|github|
|» type|gitlab|
|» type|bitbucket|
|» readyState|BUILDING|
|» readyState|ERROR|
|» readyState|INITIALIZING|
|» readyState|READY|
|readyState|QUEUED|
|readyState|BUILDING|
|readyState|ERROR|
|readyState|INITIALIZING|
|readyState|READY|
|readyState|CANCELED|
|source|cli|
|source|git|
|source|import|
|source|import/repo|
|source|clone/repo|
|target|production|
|target|staging|
|type|LAMBDAS|
|version|2|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Delete a Deployment

<a id="opIddeleteDeployment"></a>

> Code samples

```bash
curl https://example.com/v13/deployments/dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v13/deployments/{id}`

This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.

<h3 id="delete-a-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the deployment to be deleted|
|url|query|string|false|A Deployment or Alias URL. In case it is passed, the ID will be ignored|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "state": "DELETED",
  "uid": "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd"
}
```

<h3 id="delete-a-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The deployment was successfully deleted|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The deployment was not found|None|

<h3 id="delete-a-deployment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|true|none|A constant with the final state of the deployment.|
|uid|string|true|none|The removed deployment ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|DELETED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get deployment events

<a id="opIdgetDeploymentEvents"></a>

> Code samples

```bash
curl https://example.com/v2/deployments/dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/deployments/{idOrUrl}/events`

Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.

<h3 id="get-deployment-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrUrl|path|string|true|The unique identifier or hostname of the deployment.|
|direction|query|string|false|Order of the returned events based on the timestamp.|
|follow|query|number|false|When enabled, this endpoint will return live events as they happen.|
|limit|query|number|false|Maximum number of events to return. Provide `-1` to return all available logs.|
|name|query|string|false|Deployment build ID.|
|since|query|number|false|Timestamp for when build logs should be pulled from.|
|until|query|number|false|Timestamp for when the build logs should be pulled up until.|
|statusCode|query|number \| string|false|HTTP status code range to filter events by.|
|delimiter|query|number|false|none|
|builds|query|number|false|none|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|backward|
|direction|forward|
|follow|0|
|follow|1|
|delimiter|0|
|delimiter|1|
|builds|0|
|builds|1|

> Example responses

> 200 Response

```json
[
  {
    "created": 0,
    "payload": {
      "date": 0,
      "deploymentId": "string",
      "id": "string",
      "serial": "string",
      "text": "string"
    },
    "type": "command"
  }
]
```

<h3 id="get-deployment-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A stream of jsonlines where each line is a deployment log item.<br>Array of deployment logs for the provided query.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The deployment was not found|None|

<h3 id="get-deployment-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» *oneOf*|object|false|none|none|
|» created|number|true|none|none|
|» payload|object|true|none|none|
|» » date|number|true|none|none|
|» » deploymentId|string|true|none|none|
|» » id|string|true|none|none|
|» » serial|string|true|none|none|
|» » text|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» created|number|true|none|none|
|» payload|object|true|none|none|
|» » date|number|true|none|none|
|» » deploymentId|string|true|none|none|
|» » id|string|true|none|none|
|» » info|object|true|none|none|
|» » » entrypoint|string|false|none|none|
|» » » name|string|true|none|none|
|» » » path|string|false|none|none|
|» » » step|string|false|none|none|
|» » » type|string|true|none|none|
|» » serial|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» created|number|true|none|none|
|» payload|object|true|none|none|
|» » date|number|true|none|none|
|» » deploymentId|string|true|none|none|
|» » id|string|true|none|none|
|» » info|object|true|none|none|
|» » » entrypoint|string|false|none|none|
|» » » name|string|true|none|none|
|» » » path|string|false|none|none|
|» » » step|string|false|none|none|
|» » » type|string|true|none|none|
|» » serial|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» created|number|true|none|none|
|» payload|object|true|none|none|
|» » created|number|true|none|none|
|» » date|number|true|none|none|
|» » deploymentId|string|true|none|none|
|» » id|string|true|none|none|
|» » serial|string|true|none|none|
|» » text|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» created|number|true|none|none|
|» payload|object|true|none|none|
|» » date|number|true|none|none|
|» » deploymentId|string|true|none|none|
|» » id|string|true|none|none|
|» » info|object|true|none|none|
|» » » entrypoint|string|false|none|none|
|» » » name|string|true|none|none|
|» » » path|string|false|none|none|
|» » » step|string|false|none|none|
|» » » type|string|true|none|none|
|» » requestId|string|false|none|none|
|» » serial|string|true|none|none|
|» » text|string|false|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» created|number|true|none|none|
|» payload|object|true|none|none|
|» » date|number|true|none|none|
|» » deploymentId|string|true|none|none|
|» » id|string|true|none|none|
|» » info|object|true|none|none|
|» » » entrypoint|string|false|none|none|
|» » » name|string|true|none|none|
|» » » path|string|false|none|none|
|» » » step|string|false|none|none|
|» » » type|string|true|none|none|
|» » requestId|string|false|none|none|
|» » serial|string|true|none|none|
|» » statusCode|number|false|none|none|
|» » text|string|false|none|none|
|» type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|command|
|» type|deployment-state|
|» type|delimiter|
|» type|exit|
|» type|middleware|
|» type|delimiter|
|» type|command|
|» type|stdout|
|» type|stderr|
|» type|exit|
|» type|deployment-state|
|» type|middleware|
|» type|middleware-invocation|
|» type|edge-function-invocation|
|» type|fatal|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Upload Deployment Files

<a id="opIduploadFile"></a>

> Code samples

```bash
curl https://example.com/v2/files \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/files`

Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.

<h3 id="upload-deployment-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Length|header|number|false|The file size in bytes|
|x-vercel-digest|header|string|false|The file SHA1 used to check the integrity|
|x-now-digest|header|string|false|The file SHA1 used to check the integrity|
|x-now-size|header|number|false|The file size as an alternative to `Content-Length`|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "urls": [
    "example-upload.aws.com"
  ]
}
```

<h3 id="upload-deployment-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File already uploaded<br>File successfully uploaded|Inline|
|400|Bad Request|One of the provided values in the headers is invalid<br>Digest is not valid<br>File size is not valid|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="upload-deployment-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|urls|[string]|true|none|Array of URLs where the file was updated|
|*oneOf*|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List deployments

<a id="opIdgetDeployments"></a>

> Code samples

```bash
curl https://example.com/v6/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v6/deployments`

List deployments under the account corresponding to the API token. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.

<h3 id="list-deployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|query|string|false|Name of the deployment.|
|from|query|number|false|Gets the deployment created after this Date timestamp. (default: current time)|
|limit|query|number|false|Maximum number of deployments to list from a request.|
|projectId|query|string|false|Filter deployments from the given `projectId`.|
|target|query|string|false|Filter deployments based on the environment.|
|to|query|number|false|Gets the deployment created before this Date timestamp. (default: current time)|
|users|query|string|false|Filter out deployments based on users who have created the deployment.|
|since|query|number|false|Get Deployments created after this JavaScript timestamp.|
|until|query|number|false|Get Deployments created before this JavaScript timestamp.|
|state|query|string|false|Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)|
|rollbackCandidate|query|boolean|false|Filter deployments based on their rollback candidacy|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|target|production|
|target|preview|

> Example responses

> 200 Response

```json
{
  "deployments": [
    {
      "aliasAssigned": 0,
      "aliasError": {
        "code": "string",
        "message": "string"
      },
      "buildingAt": 1609492210000,
      "checksConclusion": "succeeded",
      "checksState": "registered",
      "created": 1609492210000,
      "createdAt": 1609492210000,
      "creator": {
        "email": "example@example.com",
        "githubLogin": "johndoe",
        "gitlabLogin": "johndoe",
        "uid": "eLrCnEgbKhsHyfbiNR7E8496",
        "username": "johndoe"
      },
      "inspectorUrl": "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",
      "isRollbackCandidate": true,
      "meta": {
        "foo": "bar"
      },
      "name": "docs",
      "ready": 1609492210000,
      "source": "cli",
      "state": "READY",
      "target": "production",
      "type": "LAMBDAS",
      "uid": "dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa",
      "url": "docs-9jaeg38me.vercel.app"
    }
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

<h3 id="list-deployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="list-deployments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|[object]|true|none|none|
|» aliasAssigned|null|false|none|none|
|» » *oneOf*|number|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» aliasError|object \| null|false|none|An error object in case aliasing of the deployment failed.|
|» » code|string|true|none|none|
|» » message|string|true|none|none|
|» buildingAt|number|false|none|Timestamp of when the deployment started building at.|
|» checksConclusion|string|false|none|Conclusion for checks|
|» checksState|string|false|none|State of all registered checks|
|» created|number|true|none|Timestamp of when the deployment got created.|
|» createdAt|number|false|none|Timestamp of when the deployment got created.|
|» creator|object|true|none|Metadata information of the user who created the deployment.|
|» » email|string|false|none|The email address of the user.|
|» » githubLogin|string|false|none|The GitHub login of the user.|
|» » gitlabLogin|string|false|none|The GitLab login of the user.|
|» » uid|string|true|none|The unique identifier of the user.|
|» » username|string|false|none|The username of the user.|
|» inspectorUrl|string \| null|true|none|Vercel URL to inspect the deployment.|
|» isRollbackCandidate|boolean \| null|false|none|Deployment can be used for instant rollback|
|» meta|object|false|none|An object containing the deployment's metadata|
|» » **additionalProperties**|string|false|none|An object containing the deployment's metadata|
|» name|string|true|none|The name of the deployment.|
|» ready|number|false|none|Timestamp of when the deployment got ready.|
|» source|string|false|none|The source of the deployment.|
|» state|string|false|none|In which state is the deployment.|
|» target|string \| null|false|none|On which environment has the deployment been deployed to.|
|» type|string|true|none|The type of the deployment.|
|» uid|string|true|none|The unique identifier of the deployment.|
|» url|string|true|none|The URL of the deployment.|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|

#### Enumerated Values

|Property|Value|
|---|---|
|» checksConclusion|succeeded|
|» checksConclusion|failed|
|» checksConclusion|skipped|
|» checksConclusion|canceled|
|» checksState|registered|
|» checksState|running|
|» checksState|completed|
|» source|cli|
|» source|git|
|» source|import|
|» source|import/repo|
|» source|clone/repo|
|» state|BUILDING|
|» state|ERROR|
|» state|INITIALIZING|
|» state|QUEUED|
|» state|READY|
|» state|CANCELED|
|» target|production|
|» target|staging|
|» type|LAMBDAS|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List Deployment Files

<a id="opIdlistDeploymentFiles"></a>

> Code samples

```bash
curl https://example.com/v6/deployments/string/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v6/deployments/{id}/files`

Allows to retrieve the file structure of a deployment by supplying the deployment unique identifier.

<h3 id="list-deployment-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique deployment identifier|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
[
  {
    "children": [
      {}
    ],
    "contentType": "application/json",
    "mode": 0,
    "name": "my-file.json",
    "symlink": "string",
    "type": "file",
    "uid": "2d4aad419917f15b1146e9e03ddc9bb31747e4d0"
  }
]
```

<h3 id="list-deployment-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieved the file tree successfully|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|File tree not found<br>Deployment not found|None|

<h3 id="list-deployment-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FileTree](#schemafiletree)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get Deployment File Contents

<a id="opIdgetDeploymentFileContents"></a>

> Code samples

```bash
curl https://example.com/v6/deployments/string/files/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v6/deployments/{id}/files/{fileId}`

Allows to retrieve the content of a file by supplying the file identifier and the deployment unique identifier. The response body will contain the raw content of the file.

<h3 id="get-deployment-file-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique deployment identifier|
|fileId|path|string|true|The unique file identifier|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="get-deployment-file-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|File not found<br>Deployment not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-aliases">aliases</h1>

## Delete an Alias

<a id="opIddeleteAlias"></a>

> Code samples

```bash
curl https://example.com/v2/aliases/2WjyKQmM8ZnGcJsPWMrHRHrE \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/aliases/{aliasId}`

Delete an Alias with the specified ID.

<h3 id="delete-an-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasId|path|string|true|The ID or alias that will be removed|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "status": "SUCCESS"
}
```

<h3 id="delete-an-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The alias was successfully removed|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The alias was not found|None|

<h3 id="delete-an-alias-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|SUCCESS|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List Deployment Aliases

<a id="opIdlistDeploymentAliases"></a>

> Code samples

```bash
curl https://example.com/v2/deployments/dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/deployments/{id}/aliases`

Retrieves all Aliases for the Deployment with the given ID. The authenticated User must own the deployment.

<h3 id="list-deployment-aliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the deployment the aliases should be listed for|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "aliases": [
    {
      "alias": "my-alias.vercel.app",
      "created": "2017-04-26T23:00:34.232Z",
      "protectionBypass": {
        "property1": "string",
        "property2": "string"
      },
      "redirect": "string",
      "uid": "2WjyKQmM8ZnGcJsPWMrHRHrE"
    }
  ]
}
```

<h3 id="list-deployment-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of aliases assigned to the deployment|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The deployment was not found|None|

<h3 id="list-deployment-aliases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[object]|true|none|A list of the aliases assigned to the deployment|
|» alias|string|true|none|The alias name, it could be a `.vercel.app` subdomain or a custom domain|
|» created|string(date-time)|true|none|The date when the alias was created|
|» protectionBypass|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» redirect|string \| null|false|none|Target destination domain for redirect when the alias is a redirect|
|» uid|string|true|none|The unique identifier of the alias|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Assign an Alias

<a id="opIdassignAlias"></a>

> Code samples

```bash
curl https://example.com/v2/deployments/dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "my-alias.vercel.app",
    "redirect": null
  }'
```

`POST /v2/deployments/{id}/aliases`

Creates a new alias for the deployment with the given deployment ID. The authenticated user must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.

> Body parameter

```json
{
  "alias": "my-alias.vercel.app",
  "redirect": null
}
```

<h3 id="assign-an-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the deployment the aliases should be listed for|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» alias|body|string|false|The alias we want to assign to the deployment defined in the URL|
|» redirect|body|string \| null|false|The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307|

> Example responses

> 200 Response

```json
{
  "alias": "my-alias.vercel.app",
  "created": "2017-04-26T23:00:34.232Z",
  "oldDeploymentId": "dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa",
  "uid": "2WjyKQmM8ZnGcJsPWMrHRHrE"
}
```

<h3 id="assign-an-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The alias was successfully assigned to the deployment|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.<br>The cert for the provided alias is not ready<br>The deployment is not READY and can not be aliased<br>The supplied alias is invalid|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.<br>If no .vercel.app alias exists then we fail (nothing to mirror)|None|
|404|Not Found|The domain used for the alias was not found<br>The project for the given project can not be found<br>The deployment was not found|None|
|409|Conflict|The provided alias is already assigned to the given deployment|None|

<h3 id="assign-an-alias-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|The assigned alias name|
|created|string(date-time)|true|none|The date when the alias was created|
|oldDeploymentId|string \| null|false|none|The unique identifier of the previously aliased deployment, only received when the alias was used before|
|uid|string|true|none|The unique identifier of the alias|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List aliases

<a id="opIdlistAliases"></a>

> Code samples

```bash
curl https://example.com/v4/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/aliases`

Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.

<h3 id="list-aliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|[string]|false|Get only aliases of the given domain name|
|from|query|number|false|Get only aliases created after the provided timestamp|
|limit|query|number|false|Maximum number of aliases to list from a request|
|projectId|query|string|false|Filter aliases from the given `projectId`|
|since|query|number|false|Get aliases created after this JavaScript timestamp|
|until|query|number|false|Get aliases created before this JavaScript timestamp|
|rollbackDeploymentId|query|string|false|Get aliases that would be rolled back for the given deployment|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "aliases": [
    {
      "alias": "my-alias.vercel.app",
      "created": "2017-04-26T23:00:34.232Z",
      "createdAt": 1540095775941,
      "creator": {
        "email": "john-doe@gmail.com",
        "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",
        "username": "john-doe"
      },
      "deletedAt": 1540095775941,
      "deployment": {
        "id": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
        "meta": {},
        "url": "my-instant-deployment-3ij3cxz9qr.now.sh"
      },
      "deploymentId": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
      "projectId": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
      "protectionBypass": {
        "property1": "string",
        "property2": "string"
      },
      "redirect": "string",
      "redirectStatusCode": 301,
      "uid": "string",
      "updatedAt": 1540095775941
    }
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

<h3 id="list-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The paginated list of aliases|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="list-aliases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[object]|true|none|none|
|» alias|string|true|none|The alias name, it could be a `.vercel.app` subdomain or a custom domain|
|» created|string(date-time)|true|none|The date when the alias was created|
|» createdAt|number|false|none|The date when the alias was created in milliseconds since the UNIX epoch|
|» creator|object|false|none|Information of the user who created the alias|
|» » email|string|true|none|Email of the user who created the alias|
|» » uid|string|true|none|ID of the user who created the alias|
|» » username|string|true|none|Username of the user who created the alias|
|» deletedAt|number|false|none|The date when the alias was deleted in milliseconds since the UNIX epoch|
|» deployment|object|false|none|A map with the deployment ID, URL and metadata|
|» » id|string|true|none|The deployment unique identifier|
|» » meta|string|false|none|The deployment metadata|
|» » url|string|true|none|The deployment unique URL|
|» deploymentId|string \| null|true|none|The deployment ID|
|» projectId|string \| null|true|none|The unique identifier of the project|
|» protectionBypass|object|false|none|Construct a type with a set of properties K of type T|
|» » **additionalProperties**|string|false|none|none|
|» redirect|string \| null|false|none|Target destination domain for redirect when the alias is a redirect|
|» redirectStatusCode|number \| null|false|none|Status code to be used on redirect|
|» uid|string|true|none|The unique identifier of the alias|
|» updatedAt|number|false|none|The date when the alias was updated in milliseconds since the UNIX epoch|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|

#### Enumerated Values

|Property|Value|
|---|---|
|» redirectStatusCode|301|
|» redirectStatusCode|302|
|» redirectStatusCode|307|
|» redirectStatusCode|308|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get an Alias

<a id="opIdgetAlias"></a>

> Code samples

```bash
curl https://example.com/v4/aliases/example.vercel.app \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/aliases/{idOrAlias}`

Retrieves an Alias for the given host name or alias ID.

<h3 id="get-an-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|number|false|Get the alias only if it was created after the provided timestamp|
|idOrAlias|path|string|true|The alias or alias ID to be retrieved|
|projectId|query|string|false|Get the alias only if it is assigned to the provided project ID|
|since|query|number|false|Get the alias only if it was created after this JavaScript timestamp|
|until|query|number|false|Get the alias only if it was created before this JavaScript timestamp|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "alias": "my-alias.vercel.app",
  "created": "2017-04-26T23:00:34.232Z",
  "createdAt": 1540095775941,
  "creator": {
    "email": "john-doe@gmail.com",
    "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",
    "username": "john-doe"
  },
  "deletedAt": 1540095775941,
  "deployment": {
    "id": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
    "meta": {},
    "url": "my-instant-deployment-3ij3cxz9qr.now.sh"
  },
  "deploymentId": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
  "projectId": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  "protectionBypass": {
    "property1": "string",
    "property2": "string"
  },
  "redirect": "string",
  "redirectStatusCode": 301,
  "uid": "string",
  "updatedAt": 1540095775941
}
```

<h3 id="get-an-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The alias information|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found|The alias was not found|None|

<h3 id="get-an-alias-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|The alias name, it could be a `.vercel.app` subdomain or a custom domain|
|created|string(date-time)|true|none|The date when the alias was created|
|createdAt|number|false|none|The date when the alias was created in milliseconds since the UNIX epoch|
|creator|object|false|none|Information of the user who created the alias|
|» email|string|true|none|Email of the user who created the alias|
|» uid|string|true|none|ID of the user who created the alias|
|» username|string|true|none|Username of the user who created the alias|
|deletedAt|number|false|none|The date when the alias was deleted in milliseconds since the UNIX epoch|
|deployment|object|false|none|A map with the deployment ID, URL and metadata|
|» id|string|true|none|The deployment unique identifier|
|» meta|string|false|none|The deployment metadata|
|» url|string|true|none|The deployment unique URL|
|deploymentId|string \| null|true|none|The deployment ID|
|projectId|string \| null|true|none|The unique identifier of the project|
|protectionBypass|object|false|none|Construct a type with a set of properties K of type T|
|» **additionalProperties**|string|false|none|none|
|redirect|string \| null|false|none|Target destination domain for redirect when the alias is a redirect|
|redirectStatusCode|number \| null|false|none|Status code to be used on redirect|
|uid|string|true|none|The unique identifier of the alias|
|updatedAt|number|false|none|The date when the alias was updated in milliseconds since the UNIX epoch|

#### Enumerated Values

|Property|Value|
|---|---|
|redirectStatusCode|301|
|redirectStatusCode|302|
|redirectStatusCode|307|
|redirectStatusCode|308|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-secrets">secrets</h1>

## Delete a secret

<a id="opIddeleteSecret"></a>

> Code samples

```bash
curl https://example.com/v2/secrets/sec_RKc5iV0rV3ZSrFrHiruRno7k \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/secrets/{idOrName}`

This deletes the user's secret defined in the URL.

<h3 id="delete-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The name or the unique identifier to which the secret belongs to.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "created": "2021-02-10T13:11:49.180Z",
  "name": "my-api-key",
  "uid": "sec_XCG7t7AIHuO2SBA8667zNUiM"
}
```

<h3 id="delete-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="delete-a-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|number|true|none|The date when the secret was created.|
|name|string|true|none|The name of the deleted secret.|
|uid|string|true|none|The unique identifier of the deleted secret.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Create a new secret

<a id="opIdcreateSecret"></a>

> Code samples

```bash
curl https://example.com/v2/secrets/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "decryptable": true,
    "name": "my-api-key",
    "projectId": "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
    "value": "some secret value"
  }'
```

`POST /v2/secrets/{name}`

Allows to create a new secret.

> Body parameter

```json
{
  "decryptable": true,
  "name": "my-api-key",
  "projectId": "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
  "value": "some secret value"
}
```

<h3 id="create-a-new-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|name|path|string|true|Automatically added|
|body|body|object|false|none|
|» decryptable|body|boolean|false|Whether the secret value can be decrypted after it has been created.|
|» name|body|string|true|The name of the secret (max 100 characters).|
|» projectId|body|string|false|**Deprecated.** Associate a secret to a project.|
|» value|body|string|true|The value of the new secret.|

> Example responses

> 200 Response

```json
{
  "created": "2021-02-10T13:11:49.180Z",
  "createdAt": 1609492210000,
  "decryptable": true,
  "name": "my-api-key",
  "projectId": "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
  "teamId": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  "uid": "sec_XCG7t7AIHuO2SBA8667zNUiM",
  "userId": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "value": {
    "data": [
      0
    ],
    "type": "Buffer"
  }
}
```

<h3 id="create-a-new-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response showing the created secret.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="create-a-new-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|The date when the secret was created.|
|createdAt|number|false|none|Timestamp for when the secret was created.|
|decryptable|boolean|false|none|Indicates whether the secret value can be decrypted after it has been created.|
|name|string|true|none|The name of the secret.|
|projectId|string|false|none|The unique identifier of the project which the secret belongs to.|
|teamId|string \| null|false|none|The unique identifier of the team the secret was created for.|
|uid|string|true|none|The unique identifier of the secret.|
|userId|string|false|none|The unique identifier of the user who created the secret.|
|value|object|true|none|none|
|» data|[number]|false|none|none|
|» type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|Buffer|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Change secret name

<a id="opIdrenameSecret"></a>

> Code samples

```bash
curl https://example.com/v2/secrets/my-api-key \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "my-api-key"
  }'
```

`PATCH /v2/secrets/{name}`

Enables to edit the name of a user's secret. The name has to be unique to that user's secrets.

> Body parameter

```json
{
  "name": "my-api-key"
}
```

<h3 id="change-secret-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the secret.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» name|body|string|true|The name of the new secret.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "name": "string",
  "oldName": "string",
  "uid": "string"
}
```

<h3 id="change-secret-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="change-secret-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|Enables basic storage and retrieval of dates and times.|
|name|string|true|none|none|
|oldName|string|true|none|none|
|uid|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List secrets

<a id="opIdgetSecrets"></a>

> Code samples

```bash
curl https://example.com/v3/secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/secrets`

Retrieves the active Vercel secrets for the authenticated user. By default it returns 20 secrets. The rest can be retrieved using the pagination options. The body will contain an entry for each secret.

<h3 id="list-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|Filter out secrets based on comma separated secret ids.|
|projectId|query|string|false|Filter out secrets that belong to a project.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  },
  "secrets": [
    {
      "created": "2021-02-10T13:11:49.180Z",
      "createdAt": 1609492210000,
      "decryptable": true,
      "name": "my-api-key",
      "projectId": "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
      "teamId": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
      "uid": "sec_XCG7t7AIHuO2SBA8667zNUiM",
      "userId": "2qDDuGFTWXBLDNnqZfWPDp1A",
      "value": "string"
    }
  ]
}
```

<h3 id="list-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response retrieving a list of secrets.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="list-secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|
|secrets|[object]|true|none|none|
|» created|string(date-time)|true|none|The date when the secret was created.|
|» createdAt|number|false|none|Timestamp for when the secret was created.|
|» decryptable|boolean|false|none|Indicates whether the secret value can be decrypted after it has been created.|
|» name|string|true|none|The name of the secret.|
|» projectId|string|false|none|The unique identifier of the project which the secret belongs to.|
|» teamId|string \| null|false|none|The unique identifier of the team the secret was created for.|
|» uid|string|true|none|The unique identifier of the secret.|
|» userId|string|false|none|The unique identifier of the user who created the secret.|
|» value|string|false|none|The value of the secret.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get a single secret

<a id="opIdgetSecret"></a>

> Code samples

```bash
curl https://example.com/v3/secrets/sec_RKc5iV0rV3ZSrFrHiruRno7k \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/secrets/{idOrName}`

Retrieves the information for a specific secret by passing either the secret id or name in the URL.

<h3 id="get-a-single-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrName|path|string|true|The name or the unique identifier to which the secret belongs to.|
|decrypt|query|string|false|Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|decrypt|true|
|decrypt|false|

> Example responses

> 200 Response

```json
{
  "created": "2021-02-10T13:11:49.180Z",
  "createdAt": 1609492210000,
  "decryptable": true,
  "name": "my-api-key",
  "projectId": "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
  "teamId": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  "uid": "sec_XCG7t7AIHuO2SBA8667zNUiM",
  "userId": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "value": "string"
}
```

<h3 id="get-a-single-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response retrieving a secret.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="get-a-single-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|The date when the secret was created.|
|createdAt|number|false|none|Timestamp for when the secret was created.|
|decryptable|boolean|false|none|Indicates whether the secret value can be decrypted after it has been created.|
|name|string|true|none|The name of the secret.|
|projectId|string|false|none|The unique identifier of the project which the secret belongs to.|
|teamId|string \| null|false|none|The unique identifier of the team the secret was created for.|
|uid|string|true|none|The unique identifier of the secret.|
|userId|string|false|none|The unique identifier of the user who created the secret.|
|value|string|false|none|The value of the secret.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-domains">domains</h1>

## Register or transfer-in a new Domain

<a id="opIdcreateOrTransferDomain"></a>

> Code samples

```bash
curl https://example.com/v4/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "method": "transfer-in",
    "name": "example.com",
    "token": "fdhfr820ad#@FAdlj$$"
  }'
```

`POST /v4/domains`

This endpoint is used for registering a new domain name with Vercel for the authenticating user, and also for initiating a domain transfer request from an external Registrar to Vercel.

> Body parameter

```json
{
  "method": "transfer-in",
  "name": "example.com",
  "token": "fdhfr820ad#@FAdlj$$"
}
```

<h3 id="register-or-transfer-in-a-new-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» method|body|string|false|The domain operation to perform. It can be either `add` or `transfer-in`.|
|» *oneOf*|body|object|false|none|
|» method|body|string|true|The domain operation to perform.|
|» name|body|string|true|The domain name you want to add.|
|» token|body|string|false|The move-in token from Move Requested email.|
|» *oneOf*|body|object|false|none|
|» authCode|body|string|false|The authorization code assigned to the domain.|
|» expectedPrice|body|number|false|The price you expect to be charged for the required 1 year renewal.|
|» method|body|string|true|The domain operation to perform.|
|» name|body|string|true|The domain name you want to add.|
|» *oneOf*|body|object|false|none|
|» cdnEnabled|body|boolean|false|Whether the domain has the Vercel Edge Network enabled or not.|
|» method|body|string|false|The domain operation to perform.|
|» name|body|string|true|The domain name you want to add.|

> Example responses

> 200 Response

```json
{
  "domain": {
    "boughtAt": 1613602938882,
    "createdAt": 1613602938882,
    "creator": {
      "email": "demo@example.com",
      "id": "ZspSRT4ljIEEmMHgoDwKWDei",
      "username": "vercel_user"
    },
    "customNameservers": [
      "ns1.nameserver.net",
      "ns2.nameserver.net"
    ],
    "expiresAt": 1613602938882,
    "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    "intendedNameservers": [
      "ns1.vercel-dns.com",
      "ns2.vercel-dns.com"
    ],
    "name": "example.com",
    "nameservers": [
      "ns1.nameserver.net",
      "ns2.nameserver.net"
    ],
    "orderedAt": 1613602938882,
    "renew": true,
    "serviceType": "zeit.world",
    "transferStartedAt": 1613602938882,
    "transferredAt": 1613602938882,
    "verified": true
  }
}
```

<h3 id="register-or-transfer-in-a-new-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|409|Conflict||None|

<h3 id="register-or-transfer-in-a-new-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|» boughtAt|number \| null|true|none|If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.|
|» createdAt|number|true|none|Timestamp in milliseconds when the domain was created in the registry.|
|» creator|object|true|none|An object containing information of the domain creator, including the user's id, username, and email.|
|» » customerId|string \| null|false|none|none|
|» » email|string|true|none|none|
|» » id|string|true|none|none|
|» » isDomainReseller|boolean|false|none|none|
|» » username|string|true|none|none|
|» customNameservers|[string]|false|none|A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.|
|» expiresAt|number \| null|true|none|Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.|
|» id|string|true|none|The unique identifier of the domain.|
|» intendedNameservers|[string]|true|none|A list of the intended nameservers for the domain to point to Vercel DNS.|
|» name|string|true|none|The domain name.|
|» nameservers|[string]|true|none|A list of the current nameservers of the domain.|
|» orderedAt|number|false|none|Timestamp in milliseconds at which the domain was ordered.|
|» renew|boolean|false|none|Indicates whether the domain is set to automatically renew.|
|» serviceType|string|true|none|The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.|
|» transferStartedAt|number|false|none|If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.|
|» transferredAt|number \| null|false|none|Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.|
|» verified|boolean|true|none|If the domain has the ownership verified.|

#### Enumerated Values

|Property|Value|
|---|---|
|» serviceType|zeit.world|
|» serviceType|external|
|» serviceType|na|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Purchase a domain

<a id="opIdbuyDomain"></a>

> Code samples

```bash
curl https://example.com/v4/domains/buy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expectedPrice": 10,
    "name": "example.com",
    "renew": true
  }'
```

`POST /v4/domains/buy`

Allows to purchase the specified domain.

> Body parameter

```json
{
  "expectedPrice": 10,
  "name": "example.com",
  "renew": true
}
```

<h3 id="purchase-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» expectedPrice|body|number|false|The price you expect to be charged for the purchase.|
|» name|body|string|true|The domain name to purchase.|
|» renew|body|boolean|false|Indicates whether the domain should be automatically renewed.|

> Example responses

> 201 Response

```json
{
  "domain": {
    "created": 0,
    "ns": [
      "string"
    ],
    "pending": true,
    "uid": "string",
    "verified": true
  }
}
```

<h3 id="purchase-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response for purchasing a Domain.|Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|409|Conflict||None|
|429|Too Many Requests||None|

<h3 id="purchase-a-domain-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|» created|number|true|none|none|
|» ns|[string]|true|none|none|
|» pending|boolean|true|none|none|
|» uid|string|true|none|none|
|» verified|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Check the price for a domain

<a id="opIdcheckDomainPrice"></a>

> Code samples

```bash
curl 'https://example.com/v4/domains/price?name=example.com' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/domains/price`

Check the price to purchase a domain and how long a single purchase period is.

<h3 id="check-the-price-for-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the domain for which the price needs to be checked.|
|type|query|string|false|In which status of the domain the price needs to be checked.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|new|
|type|renewal|

> Example responses

> 200 Response

```json
{
  "period": 1,
  "price": 20
}
```

<h3 id="check-the-price-for-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response which returns the price of the domain and the period.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="check-the-price-for-a-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|period|number|true|none|The number of years the domain could be held before paying again.|
|price|number|true|none|The domain price in USD.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Check a Domain Availability

<a id="opIdcheckDomainStatus"></a>

> Code samples

```bash
curl 'https://example.com/v4/domains/status?name=example.com' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/domains/status`

Check if a domain name is available for purchase.

<h3 id="check-a-domain-availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the domain for which we would like to check the status.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "available": true
}
```

<h3 id="check-a-domain-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response checking if a Domain's name is available.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="check-a-domain-availability-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## List all the domains

<a id="opIdgetDomains"></a>

> Code samples

```bash
curl https://example.com/v5/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v5/domains`

Retrieves a list of domains registered for the authenticating user. By default it returns the last 20 domains if no limit is provided.

<h3 id="list-all-the-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Maximum number of domains to list from a request.|
|since|query|number|false|Get domains created after this JavaScript timestamp.|
|until|query|number|false|Get domains created before this JavaScript timestamp.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "domains": [
    {
      "boughtAt": 1613602938882,
      "createdAt": 1613602938882,
      "creator": {
        "email": "demo@example.com",
        "id": "ZspSRT4ljIEEmMHgoDwKWDei",
        "username": "vercel_user"
      },
      "customNameservers": [
        "ns1.nameserver.net",
        "ns2.nameserver.net"
      ],
      "expiresAt": 1613602938882,
      "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
      "intendedNameservers": [
        "ns1.vercel-dns.com",
        "ns2.vercel-dns.com"
      ],
      "name": "example.com",
      "nameservers": [
        "ns1.nameserver.net",
        "ns2.nameserver.net"
      ],
      "orderedAt": 1613602938882,
      "renew": true,
      "serviceType": "zeit.world",
      "transferStartedAt": 1613602938882,
      "transferredAt": 1613602938882,
      "verified": true
    }
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

<h3 id="list-all-the-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response retrieving a list of domains.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|409|Conflict||None|

<h3 id="list-all-the-domains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[object]|true|none|none|
|» boughtAt|number \| null|true|none|If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.|
|» createdAt|number|true|none|Timestamp in milliseconds when the domain was created in the registry.|
|» creator|object|true|none|An object containing information of the domain creator, including the user's id, username, and email.|
|» » customerId|string \| null|false|none|none|
|» » email|string|true|none|none|
|» » id|string|true|none|none|
|» » isDomainReseller|boolean|false|none|none|
|» » username|string|true|none|none|
|» customNameservers|[string]|false|none|A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.|
|» expiresAt|number \| null|true|none|Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.|
|» id|string|true|none|The unique identifier of the domain.|
|» intendedNameservers|[string]|true|none|A list of the intended nameservers for the domain to point to Vercel DNS.|
|» name|string|true|none|The domain name.|
|» nameservers|[string]|true|none|A list of the current nameservers of the domain.|
|» orderedAt|number|false|none|Timestamp in milliseconds at which the domain was ordered.|
|» renew|boolean|false|none|Indicates whether the domain is set to automatically renew.|
|» serviceType|string|true|none|The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.|
|» transferStartedAt|number|false|none|If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.|
|» transferredAt|number \| null|false|none|Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.|
|» verified|boolean|true|none|If the domain has the ownership verified.|
|pagination|[Pagination](#schemapagination)|true|none|This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.|

#### Enumerated Values

|Property|Value|
|---|---|
|» serviceType|zeit.world|
|» serviceType|external|
|» serviceType|na|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get Information for a Single Domain

<a id="opIdgetDomain"></a>

> Code samples

```bash
curl https://example.com/v5/domains/example.com \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v5/domains/{domain}`

Get information for a single domain in an account or team.

<h3 id="get-information-for-a-single-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|The name of the domain.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "domain": {
    "boughtAt": 1613602938882,
    "createdAt": 1613602938882,
    "creator": {
      "email": "demo@example.com",
      "id": "ZspSRT4ljIEEmMHgoDwKWDei",
      "username": "vercel_user"
    },
    "customNameservers": [
      "ns1.nameserver.net",
      "ns2.nameserver.net"
    ],
    "expiresAt": 1613602938882,
    "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    "intendedNameservers": [
      "ns1.vercel-dns.com",
      "ns2.vercel-dns.com"
    ],
    "name": "example.com",
    "nameservers": [
      "ns1.nameserver.net",
      "ns2.nameserver.net"
    ],
    "orderedAt": 1613602938882,
    "renew": true,
    "serviceType": "zeit.world",
    "suffix": true,
    "transferStartedAt": 1613602938882,
    "transferredAt": 1613602938882,
    "verified": true
  }
}
```

<h3 id="get-information-for-a-single-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response retrieving an information for a specific domains.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="get-information-for-a-single-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|» boughtAt|number \| null|true|none|If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.|
|» createdAt|number|true|none|Timestamp in milliseconds when the domain was created in the registry.|
|» creator|object|true|none|An object containing information of the domain creator, including the user's id, username, and email.|
|» » customerId|string \| null|false|none|none|
|» » email|string|true|none|none|
|» » id|string|true|none|none|
|» » isDomainReseller|boolean|false|none|none|
|» » username|string|true|none|none|
|» customNameservers|[string]|false|none|A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.|
|» expiresAt|number \| null|true|none|Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.|
|» id|string|true|none|The unique identifier of the domain.|
|» intendedNameservers|[string]|true|none|A list of the intended nameservers for the domain to point to Vercel DNS.|
|» name|string|true|none|The domain name.|
|» nameservers|[string]|true|none|A list of the current nameservers of the domain.|
|» orderedAt|number|false|none|Timestamp in milliseconds at which the domain was ordered.|
|» renew|boolean|false|none|Indicates whether the domain is set to automatically renew.|
|» serviceType|string|true|none|The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.|
|» suffix|boolean|true|none|none|
|» transferStartedAt|number|false|none|If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.|
|» transferredAt|number \| null|false|none|Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.|
|» verified|boolean|true|none|If the domain has the ownership verified.|

#### Enumerated Values

|Property|Value|
|---|---|
|» serviceType|zeit.world|
|» serviceType|external|
|» serviceType|na|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Remove a domain by name

<a id="opIddeleteDomain"></a>

> Code samples

```bash
curl https://example.com/v6/domains/example.com \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v6/domains/{domain}`

Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.

<h3 id="remove-a-domain-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|The name of the domain.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "uid": "string"
}
```

<h3 id="remove-a-domain-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response removing a domain.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|409|Conflict||None|

<h3 id="remove-a-domain-by-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get a Domain's configuration

<a id="opIdgetDomainConfig"></a>

> Code samples

```bash
curl https://example.com/v6/domains/example.com/config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v6/domains/{domain}/config`

Get a Domain's configuration.

<h3 id="get-a-domains-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|The name of the domain.|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "acceptedChallenges": [
    "dns-01"
  ],
  "configuredBy": "CNAME",
  "misconfigured": true
}
```

<h3 id="get-a-domains-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="get-a-domains-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedChallenges|[string]|false|none|Which challenge types the domain can use for issuing certs.|
|configuredBy|string \| null|false|none|How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `null`: Domain is not resolving to Vercel.|
|misconfigured|boolean|true|none|Whether or not the domain is configured AND we can automatically generate a TLS certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|acceptedChallenges|dns-01|
|acceptedChallenges|http-01|
|configuredBy|CNAME|
|configuredBy|A|
|configuredBy|http|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-certs">certs</h1>

## Upload a cert

<a id="opIduploadCert"></a>

> Code samples

```bash
curl https://example.com/v7/certs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ca": "string",
    "cert": "string",
    "key": "string",
    "skipValidation": true
  }'
```

`PUT /v7/certs`

Upload a cert

> Body parameter

```json
{
  "ca": "string",
  "cert": "string",
  "key": "string",
  "skipValidation": true
}
```

<h3 id="upload-a-cert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» ca|body|string|true|The certificate authority|
|» cert|body|string|true|The certificate|
|» key|body|string|true|The certificate key|
|» skipValidation|body|boolean|false|Skip validation of the certificate|

> Example responses

> 200 Response

```json
{
  "autoRenew": true,
  "cns": [
    "string"
  ],
  "createdAt": 0,
  "expiresAt": 0,
  "id": "string"
}
```

<h3 id="upload-a-cert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|402|Payment Required|This feature is only available for Enterprise customers.<br>This feature is optionally available for advanced use cases. Contact Sales: https://vercel.com/contact/sales|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="upload-a-cert-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRenew|boolean|true|none|none|
|cns|[string]|true|none|none|
|createdAt|number|true|none|none|
|expiresAt|number|true|none|none|
|id|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Issue a new cert

<a id="opIdissueCert"></a>

> Code samples

```bash
curl https://example.com/v7/certs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cns": [
      "string"
    ]
  }'
```

`POST /v7/certs`

Issue a new cert

> Body parameter

```json
{
  "cns": [
    "string"
  ]
}
```

<h3 id="issue-a-new-cert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» cns|body|[string]|false|The common names the cert should be issued for|

> Example responses

> 200 Response

```json
{
  "autoRenew": true,
  "cns": [
    "string"
  ],
  "createdAt": 0,
  "expiresAt": 0,
  "id": "string"
}
```

<h3 id="issue-a-new-cert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|
|429|Too Many Requests||None|
|449|449||None|
|500|Internal Server Error||None|

<h3 id="issue-a-new-cert-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRenew|boolean|true|none|none|
|cns|[string]|true|none|none|
|createdAt|number|true|none|none|
|expiresAt|number|true|none|none|
|id|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get cert by id

<a id="opIdgetCertById"></a>

> Code samples

```bash
curl https://example.com/v7/certs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v7/certs/{id}`

Get cert by id

<h3 id="get-cert-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The cert id|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "autoRenew": true,
  "cns": [
    "string"
  ],
  "createdAt": 0,
  "expiresAt": 0,
  "id": "string"
}
```

<h3 id="get-cert-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<h3 id="get-cert-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRenew|boolean|true|none|none|
|cns|[string]|true|none|none|
|createdAt|number|true|none|none|
|expiresAt|number|true|none|none|
|id|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Remove cert

<a id="opIdremoveCert"></a>

> Code samples

```bash
curl https://example.com/v7/certs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v7/certs/{id}`

Remove cert

<h3 id="remove-cert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The cert id to remove|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="remove-cert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|403|Forbidden|You do not have permission to access this resource.|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

<h1 id="vercel-api-artifacts">artifacts</h1>

## Query information about an artifact

<a id="opIdartifactQuery"></a>

> Code samples

```bash
curl https://example.com/v8/artifacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hashes": [
      "string"
    ]
  }'
```

`POST /v8/artifacts`

Query information about an array of artifacts.

> Body parameter

```json
{
  "hashes": [
    "string"
  ]
}
```

<h3 id="query-information-about-an-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|
|» hashes|body|[string]|true|artifact hashes|

> Example responses

> 200 Response

```json
{
  "property1": {
    "size": 0,
    "tag": "string",
    "taskDurationMs": 0
  },
  "property2": {
    "size": 0,
    "tag": "string",
    "taskDurationMs": 0
  }
}
```

<h3 id="query-information-about-an-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|One of the provided values in the request body is invalid.|None|
|401|Unauthorized|Invalid token<br>The request is missing an authentication token|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.<br>The Remote Caching usage limit has been reached for this account for this billing cycle.<br>Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.<br>You do not have permission to access this resource.|None|

<h3 id="query-information-about-an-artifact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|null|false|none|none|
|» *oneOf*|object|false|none|none|
|» size|number|true|none|none|
|» tag|string|false|none|none|
|» taskDurationMs|number|true|none|none|
|» *oneOf*|object|false|none|none|
|» message|string|true|none|none|
|» name|string|true|none|none|
|» stack|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Record an artifacts cache usage event

<a id="opIdrecordEvents"></a>

> Code samples

```bash
curl https://example.com/v8/artifacts/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "duration": 400,
      "event": "HIT",
      "hash": "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
      "sessionId": "string",
      "source": "LOCAL"
    }
  ]'
```

`POST /v8/artifacts/events`

Records an artifacts cache usage event. The body of this request is an array of cache usage events. The supported event types are `HIT` and `MISS`. The source is either `LOCAL` the cache event was on the users filesystem cache or `REMOTE` if the cache event is for a remote cache. When the event is a `HIT` the request also accepts a number `duration` which is the time taken to generate the artifact in the cache.

> Body parameter

```json
[
  {
    "duration": 400,
    "event": "HIT",
    "hash": "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    "sessionId": "string",
    "source": "LOCAL"
  }
]
```

<h3 id="record-an-artifacts-cache-usage-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-artifact-client-ci|header|string|false|The continuous integration or delivery environment where this artifact is downloaded.|
|x-artifact-client-interactive|header|integer|false|1 if the client is an interactive shell. Otherwise 0|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|[object]|false|none|
|» duration|body|number|false|The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events.|
|» event|body|string|true|One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.|
|» hash|body|string|true|The artifact hash|
|» sessionId|body|string|true|A UUID (universally unique identifer) for the session that generated this event.|
|» source|body|string|true|One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event|HIT|
|» event|MISS|
|» source|LOCAL|
|» source|REMOTE|

<h3 id="record-an-artifacts-cache-usage-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Event recorded.|None|
|400|Bad Request|One of the provided values in the request body is invalid.<br>One of the provided values in the headers is invalid|None|
|401|Unauthorized|Invalid token<br>The request is missing an authentication token|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.<br>The Remote Caching usage limit has been reached for this account for this billing cycle.<br>Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.<br>You do not have permission to access this resource.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Get status of Remote Caching for this principal

<a id="opIdstatus"></a>

> Code samples

```bash
curl https://example.com/v8/artifacts/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v8/artifacts/status`

Check the status of Remote Caching for this principal. Returns a JSON-encoded status indicating if Remote Caching is enabled, disabled, or disabled due to usage limits.

<h3 id="get-status-of-remote-caching-for-this-principal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
{
  "status": "disabled"
}
```

<h3 id="get-status-of-remote-caching-for-this-principal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request||None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|You do not have permission to access this resource.|None|

<h3 id="get-status-of-remote-caching-for-this-principal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|disabled|
|status|enabled|
|status|over_limit|
|status|paused|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Download a cache artifact

<a id="opIddownloadArtifact"></a>

> Code samples

```bash
curl https://example.com/v8/artifacts/12HKQaOmR5t5Uy6vdcQsNIiZgHGB \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v8/artifacts/{hash}`

Downloads a cache artifact indentified by its `hash` specified on the request path. The artifact is downloaded as an octet-stream. The client should verify the content-length header and response body.

<h3 id="download-a-cache-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-artifact-client-ci|header|string|false|The continuous integration or delivery environment where this artifact is downloaded.|
|x-artifact-client-interactive|header|integer|false|1 if the client is an interactive shell. Otherwise 0|
|hash|path|string|true|The artifact hash|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

> Example responses

> 200 Response

```json
null
```

<h3 id="download-a-cache-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The artifact was found and is downloaded as a stream. Content-Length should be verified.|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.<br>One of the provided values in the headers is invalid|None|
|401|Unauthorized|Invalid token<br>The request is missing an authentication token|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.<br>The Remote Caching usage limit has been reached for this account for this billing cycle.<br>Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.<br>You do not have permission to access this resource.|None|
|404|Not Found|The artifact was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Upload a cache artifact

<a id="opIduploadArtifact"></a>

> Code samples

```bash
curl https://example.com/v8/artifacts/12HKQaOmR5t5Uy6vdcQsNIiZgHGB \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Length: 0'
```

`PUT /v8/artifacts/{hash}`

Uploads a cache artifact identified by the `hash` specified on the path. The cache artifact can then be downloaded with the provided `hash`.

> Body parameter

```json
null
```

<h3 id="upload-a-cache-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Length|header|number|true|The artifact size in bytes|
|x-artifact-duration|header|number|false|The time taken to generate the uploaded artifact in milliseconds.|
|x-artifact-client-ci|header|string|false|The continuous integration or delivery environment where this artifact was generated.|
|x-artifact-client-interactive|header|integer|false|1 if the client is an interactive shell. Otherwise 0|
|x-artifact-tag|header|string|false|The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`|
|hash|path|string|true|The artifact hash|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|
|body|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "urls": [
    "https://api.vercel.com/v2/now/artifact/12HKQaOmR5t5Uy6vdcQsNIiZgHGB"
  ]
}
```

<h3 id="upload-a-cache-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|File successfully uploaded|Inline|
|400|Bad Request|One of the provided values in the request query is invalid.<br>One of the provided values in the headers is invalid<br>File size is not valid|None|
|401|Unauthorized|Invalid token<br>The request is missing an authentication token|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.<br>The Remote Caching usage limit has been reached for this account for this billing cycle.<br>Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.<br>You do not have permission to access this resource.|None|

<h3 id="upload-a-cache-artifact-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urls|[string]|true|none|Array of URLs where the artifact was updated|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

## Check if a cache artifact exists

<a id="opIdartifactExists"></a>

> Code samples

```bash
curl https://example.com/v8/artifacts/12HKQaOmR5t5Uy6vdcQsNIiZgHGB \
  -X HEAD \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`HEAD /v8/artifacts/{hash}`

Check that a cache artifact with the given `hash` exists. This request returns response headers only and is equivalent to a `GET` request to this endpoint where the response contains no body.

<h3 id="check-if-a-cache-artifact-exists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|The artifact hash|
|teamId|query|string|false|The Team identifier or slug to perform the request on behalf of.|

<h3 id="check-if-a-cache-artifact-exists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The artifact was found and headers are returned|None|
|400|Bad Request|One of the provided values in the request query is invalid.|None|
|401|Unauthorized|Invalid token<br>The request is missing an authentication token|None|
|402|Payment Required|The account was soft-blocked for an unhandled reason.<br>The account is missing a payment so payment method must be updated|None|
|403|Forbidden|The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.<br>The Remote Caching usage limit has been reached for this account for this billing cycle.<br>Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.<br>You do not have permission to access this resource.|None|
|404|Not Found|The artifact was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerToken
</aside>

# Schemas

<h2 id="tocS_ACLAction">ACLAction</h2>
<!-- backwards compatibility -->
<a id="schemaaclaction"></a>
<a id="schema_ACLAction"></a>
<a id="tocSaclaction"></a>
<a id="tocsaclaction"></a>

```json
"create"
```

Enum containing the actions that can be performed against a resource. Group operations are included.

<h2 id="tocS_AuthToken">AuthToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthtoken"></a>
<a id="schema_AuthToken"></a>
<a id="tocSauthtoken"></a>
<a id="tocsauthtoken"></a>

```json
{
  "activeAt": 1632816536002,
  "createdAt": 1632816536002,
  "expiresAt": 1632816536002,
  "id": "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
  "name": "string",
  "origin": "github",
  "scopes": [
    {
      "createdAt": 0,
      "expiresAt": 0,
      "origin": "saml",
      "type": "user"
    }
  ],
  "type": "oauth2-token"
}
```

Authentication token metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeAt|number|true|none|Timestamp (in milliseconds) of when the token was most recently used.|
|createdAt|number|true|none|Timestamp (in milliseconds) of when the token was created.|
|expiresAt|number|false|none|Timestamp (in milliseconds) of when the token expires.|
|id|string|true|none|The unique identifier of the token.|
|name|string|true|none|The human-readable name of the token.|
|origin|string|false|none|The origin of how the token was created.|
|scopes|[object]|false|none|The access scopes granted to the token.|
|type|string|true|none|The type of the token.|

<h2 id="tocS_AuthUser">AuthUser</h2>
<!-- backwards compatibility -->
<a id="schemaauthuser"></a>
<a id="schema_AuthUser"></a>
<a id="tocSauthuser"></a>
<a id="tocsauthuser"></a>

```json
{
  "activeDashboardViews": [
    {
      "scopeId": "string",
      "viewPreference": "cards"
    }
  ],
  "avatar": "22cb30c85ff45ac4c72de8981500006b28114aa1",
  "billing": {
    "addons": [
      "custom-deployment-suffix"
    ],
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "state": "string"
    },
    "cancelation": 0,
    "contract": {
      "end": 0,
      "start": 0
    },
    "controls": {
      "analyticsSampleRateInPercent": 0,
      "analyticsSpendLimitInDollars": 0
    },
    "currency": "usd",
    "email": "string",
    "invoiceItems": {
      "analytics": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "analyticsUsage": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "artifacts": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "bandwidth": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "builds": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "concurrentBuilds": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "customCerts": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "edgeFunctionExecutionUnits": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "edgeMiddlewareInvocations": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "enterprise": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "monitoring": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "monitoringMetric": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "passwordProtection": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "previewDeploymentSuffix": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "pro": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "saml": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "serverlessFunctionExecution": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "sourceImages": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      },
      "ssoProtection": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "teamSeats": {
        "createdAt": 0,
        "disabledAt": 0,
        "frequency": {
          "interval": "month",
          "intervalCount": 1
        },
        "hidden": true,
        "maxQuantity": 0,
        "name": "string",
        "price": 0,
        "quantity": 0
      },
      "webAnalyticsDataPoint": {
        "batch": 0,
        "disabledAt": 0,
        "hidden": true,
        "name": "string",
        "price": 0,
        "threshold": 0
      }
    },
    "invoiceSettings": {
      "footer": "string"
    },
    "language": "string",
    "name": "string",
    "overdue": true,
    "period": {
      "end": 0,
      "start": 0
    },
    "plan": "hobby",
    "platform": "stripe",
    "pricingExperiment": "august-2022",
    "programType": "startup",
    "purchaseOrder": "string",
    "status": "active",
    "subscriptions": [
      {
        "discount": {
          "coupon": {
            "amountOff": 0,
            "duration": "forever",
            "durationInMonths": 0,
            "id": "string",
            "name": "string",
            "percentageOff": 0
          },
          "id": "string"
        },
        "frequency": {
          "interval": "month",
          "intervalCount": 0
        },
        "id": "string",
        "items": [
          {
            "amount": 0,
            "id": "string",
            "priceId": "string",
            "productId": "string",
            "quantity": 0
          }
        ],
        "period": {
          "end": 0,
          "start": 0
        },
        "trial": {
          "end": 0,
          "start": 0
        }
      }
    ],
    "tax": {
      "id": "string",
      "type": "string"
    },
    "trial": {
      "end": 0,
      "start": 0
    }
  },
  "createdAt": 1630748523395,
  "dismissedToasts": [
    {
      "dismissals": [
        {
          "createdAt": 0,
          "scopeId": "string"
        }
      ],
      "name": "string"
    }
  ],
  "email": "me@example.com",
  "hasTrialAvailable": true,
  "id": "AEIIDYVk59zbFF2Sxfyxxmua",
  "importFlowGitNamespace": "string",
  "importFlowGitNamespaceId": "string",
  "importFlowGitProvider": "github",
  "name": "John Doe",
  "preferredScopesAndGitNamespaces": [
    {
      "gitNamespaceId": "string",
      "scopeId": "string"
    }
  ],
  "remoteCaching": {
    "enabled": true
  },
  "resourceConfig": {
    "awsAccountIds": [
      "string"
    ],
    "awsAccountType": "string",
    "cfZoneName": "string",
    "concurrentBuilds": 0,
    "edgeConfigSize": 0,
    "edgeConfigs": 0,
    "nodeType": "string"
  },
  "softBlock": {
    "blockedAt": 0,
    "reason": "FAIR_USE_LIMITS_EXCEEDED"
  },
  "stagingPrefix": "string",
  "username": "jdoe"
}
```

Data for the currently authenticated User.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDashboardViews|[object]|false|none|set of dashboard view preferences (cards or list) per scopeId|
|avatar|string \| null|true|none|SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.|
|billing|object \| null|true|none|An object containing billing infomation associated with the User account.|
|createdAt|number|true|none|UNIX timestamp (in milliseconds) when the User account was created.|
|dismissedToasts|[object]|false|none|A record of when, under a certain scopeId, a toast was dismissed|
|email|string|true|none|Email address associated with the User account.|
|hasTrialAvailable|boolean|true|none|Whether the user has a trial available for a paid plan subscription.|
|id|string|true|none|The User's unique identifier.|
|importFlowGitNamespace|null|false|none|none|
|importFlowGitNamespaceId|null|false|none|none|
|importFlowGitProvider|string|false|none|none|
|name|string \| null|true|none|Name associated with the User account, or `null` if none has been provided.|
|preferredScopesAndGitNamespaces|[object]|false|none|none|
|remoteCaching|object|false|none|remote caching settings|
|resourceConfig|object|true|none|An object containing infomation related to the amount of platform resources may be allocated to the User account.|
|softBlock|object \| null|true|none|When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why.|
|stagingPrefix|string|true|none|Prefix that will be used in the URL of "Preview" deployments created by the User account.|
|username|string|true|none|Unique username associated with the User account.|

#### Enumerated Values

|Property|Value|
|---|---|
|importFlowGitProvider|github|
|importFlowGitProvider|gitlab|
|importFlowGitProvider|bitbucket|

<h2 id="tocS_AuthUserLimited">AuthUserLimited</h2>
<!-- backwards compatibility -->
<a id="schemaauthuserlimited"></a>
<a id="schema_AuthUserLimited"></a>
<a id="tocSauthuserlimited"></a>
<a id="tocsauthuserlimited"></a>

```json
{
  "avatar": "22cb30c85ff45ac4c72de8981500006b28114aa1",
  "email": "me@example.com",
  "id": "AEIIDYVk59zbFF2Sxfyxxmua",
  "limited": true,
  "name": "John Doe",
  "username": "jdoe"
}
```

A limited form of data for the currently authenticated User, due to the authentication token missing privileges to read the full User data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string \| null|true|none|SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.|
|email|string|true|none|Email address associated with the User account.|
|id|string|true|none|The User's unique identifier.|
|limited|boolean|true|none|Property indicating that this User data contains only limited information, due to the authentication token missing privileges to read the full User data. Re-login with email, GitHub, GitLab or Bitbucket in order to upgrade the authentication token with the necessary privileges.|
|name|string \| null|true|none|Name associated with the User account, or `null` if none has been provided.|
|username|string|true|none|Unique username associated with the User account.|

<h2 id="tocS_EdgeConfigItem">EdgeConfigItem</h2>
<!-- backwards compatibility -->
<a id="schemaedgeconfigitem"></a>
<a id="schema_EdgeConfigItem"></a>
<a id="tocSedgeconfigitem"></a>
<a id="tocsedgeconfigitem"></a>

```json
{
  "createdAt": 0,
  "edgeConfigId": "string",
  "key": "string",
  "updatedAt": 0,
  "value": "string"
}
```

The EdgeConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number|true|none|none|
|edgeConfigId|string|true|none|none|
|key|string|true|none|none|
|updatedAt|number|true|none|none|
|value|[EdgeConfigItemValue](#schemaedgeconfigitemvalue)|true|none|none|

<h2 id="tocS_EdgeConfigItemValue">EdgeConfigItemValue</h2>
<!-- backwards compatibility -->
<a id="schemaedgeconfigitemvalue"></a>
<a id="schema_EdgeConfigItemValue"></a>
<a id="tocSedgeconfigitemvalue"></a>
<a id="tocsedgeconfigitemvalue"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|number|false|none|none|
|*oneOf*|boolean|false|none|none|
|*oneOf*|object|false|none|none|
|*oneOf*|[[EdgeConfigItemValue](#schemaedgeconfigitemvalue)]|false|none|none|

<h2 id="tocS_EdgeConfigToken">EdgeConfigToken</h2>
<!-- backwards compatibility -->
<a id="schemaedgeconfigtoken"></a>
<a id="schema_EdgeConfigToken"></a>
<a id="tocSedgeconfigtoken"></a>
<a id="tocsedgeconfigtoken"></a>

```json
{
  "createdAt": 0,
  "edgeConfigId": "string",
  "id": "string",
  "label": "string",
  "token": "string"
}
```

The EdgeConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number|true|none|none|
|edgeConfigId|string|true|none|none|
|id|string|true|none|This is not the token itself, but rather an id to identify the token by|
|label|string|true|none|none|
|token|string|true|none|none|

<h2 id="tocS_FileTree">FileTree</h2>
<!-- backwards compatibility -->
<a id="schemafiletree"></a>
<a id="schema_FileTree"></a>
<a id="tocSfiletree"></a>
<a id="tocsfiletree"></a>

```json
{
  "children": [
    {
      "children": [
        {}
      ],
      "contentType": "application/json",
      "mode": 0,
      "name": "my-file.json",
      "symlink": "string",
      "type": "file",
      "uid": "2d4aad419917f15b1146e9e03ddc9bb31747e4d0"
    }
  ],
  "contentType": "application/json",
  "mode": 0,
  "name": "my-file.json",
  "symlink": "string",
  "type": "file",
  "uid": "2d4aad419917f15b1146e9e03ddc9bb31747e4d0"
}
```

A deployment file tree entry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[[FileTree](#schemafiletree)]|false|none|The list of children files of the directory (only valid for the `directory` type)|
|contentType|string|false|none|The content-type of the file (only valid for the `file` type)|
|mode|number|true|none|The file "mode" indicating file type and permissions.|
|name|string|true|none|The name of the file tree entry|
|symlink|string|false|none|Not currently used. See `file-list-to-tree.ts`.|
|type|string|true|none|String indicating the type of file tree entry.|
|uid|string|false|none|The unique identifier of the file (only valid for the `file` type)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|directory|
|type|file|
|type|symlink|
|type|lambda|
|type|middleware|
|type|invalid|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "count": 20,
  "next": 1540095775951,
  "prev": 1540095775951
}
```

This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|true|none|Amount of items in the current page.|
|next|number \| null|true|none|Timestamp that must be used to request the next page.|
|prev|number \| null|true|none|Timestamp that must be used to request the previous page.|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{}
```

Data representing a Team.

<h2 id="tocS_TeamLimited">TeamLimited</h2>
<!-- backwards compatibility -->
<a id="schemateamlimited"></a>
<a id="schema_TeamLimited"></a>
<a id="tocSteamlimited"></a>
<a id="tocsteamlimited"></a>

```json
{
  "avatar": "6eb07268bcfadd309905ffb1579354084c24655c",
  "created": "string",
  "createdAt": 1630748523395,
  "id": "team_nllPyCtREAqxxdyFKbbMDlxd",
  "limited": true,
  "membership": {
    "accessRequestedAt": 0,
    "confirmed": true,
    "confirmedAt": 0,
    "created": 0,
    "createdAt": 0,
    "joinedFrom": {
      "commitId": "string",
      "dsyncConnectedAt": 0,
      "dsyncUserId": "string",
      "gitUserId": "string",
      "gitUserLogin": "string",
      "idpUserId": "string",
      "origin": "import",
      "repoId": "string",
      "repoPath": "string",
      "ssoConnectedAt": 0,
      "ssoUserId": "string"
    },
    "role": "MEMBER",
    "teamId": "string",
    "uid": "string"
  },
  "name": "My Team",
  "saml": {
    "connection": {
      "createdAt": 0,
      "creator": "string",
      "domain": "string",
      "id": "string",
      "name": "string",
      "recordType": "A",
      "ttl": 0,
      "type": "record",
      "value": "string"
    },
    "directory": {
      "createdAt": 0,
      "creator": "string",
      "domain": "string",
      "id": "string",
      "name": "string",
      "recordType": "A",
      "ttl": 0,
      "type": "record",
      "value": "string"
    },
    "enforced": true
  },
  "slug": "my-team"
}
```

A limited form of data representing a Team, due to the authentication token missing privileges to read the full Team data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string \| null|true|none|The ID of the file used as avatar for this Team.|
|created|string|true|none|Will remain undocumented. Remove in v3 API.|
|createdAt|number|true|none|UNIX timestamp (in milliseconds) when the Team was created.|
|id|string|true|none|The Team's unique identifier.|
|limited|boolean|true|none|Property indicating that this Team data contains only limited information, due to the authentication token missing privileges to read the full Team data. Re-login with the Team's configured SAML Single Sign-On provider in order to upgrade the authentication token with the necessary privileges.|
|membership|object|true|none|none|
|name|string \| null|true|none|Name associated with the Team account, or `null` if none has been provided.|
|saml|object|false|none|When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced.|
|slug|string|true|none|The Team's slug, which is unique across the Vercel platform.|

<h2 id="tocS_UserEvent">UserEvent</h2>
<!-- backwards compatibility -->
<a id="schemauserevent"></a>
<a id="schema_UserEvent"></a>
<a id="tocSuserevent"></a>
<a id="tocsuserevent"></a>

```json
{
  "createdAt": 1632859321020,
  "entities": [
    {
      "end": 3,
      "start": 0,
      "type": "author"
    }
  ],
  "id": "uev_bfmMjiMnXfnPbT97dGdpJbCN",
  "text": "You logged in via GitHub",
  "user": {
    "avatar": "string",
    "email": "string",
    "slug": "string",
    "uid": "string",
    "username": "string"
  },
  "userId": "zTuNVUXEAvvnNN3IaqinkyMw"
}
```

Array of events generated by the User.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|number|true|none|Timestamp (in milliseconds) of when the event was generated.|
|entities|[object]|true|none|A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links.|
|id|string|true|none|The unique identifier of the Event.|
|text|string|true|none|The human-readable text of the Event.|
|user|object|false|none|Metadata for the User who generated the event.|
|userId|string|true|none|The unique identifier of the User who generated the event.|
