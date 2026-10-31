<h1 id="remote-settings-prod">Remote Settings PROD v1.22</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://firefox.settings.services.mozilla.com/v1">https://firefox.settings.services.mozilla.com/v1</a>

<h1 id="remote-settings-prod-collection-changeset">Collection-changeset</h1>

## get_collection-changeset

<a id="opIdget_collection-changeset"></a>

> Code samples

```bash
curl 'https://example.com/buckets/string/collections/string/changeset?_expected=string'
```

`GET /buckets/{bid}/collections/{cid}/changeset`

<h3 id="getcollection-changeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_since|query|string|false|none|
|_expected|query|string|true|none|
|_limit|query|integer|false|none|
|bucket|query|string|false|none|
|collection|query|string|false|none|
|bid|path|string|true|none|
|cid|path|string|true|none|

<h3 id="getcollection-changeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|UNDOCUMENTED RESPONSE|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-changess">Changess</h1>

## get_changess

<a id="opIdget_changess"></a>

> Code samples

```bash
curl https://example.com/buckets/monitor/collections/changes/records \
  -H 'Accept: application/json'
```

`GET /buckets/monitor/collections/changes/records`

<h3 id="getchangess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|none|
|_sort|query|[string]|false|none|
|_token|query|string|false|none|
|_since|query|integer|false|none|
|_to|query|integer|false|none|
|_before|query|integer|false|none|
|id|query|string|false|none|
|last_modified|query|integer|false|none|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": []
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getchangess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a list of matching objects.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getchangess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» bucket|string|true|none|none|
|» collection|string|true|none|none|
|» host|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-attachment">Attachment</h1>

## create_attachment

<a id="opIdcreate_attachment"></a>

> Code samples

```bash
curl https://example.com/buckets/string/collections/string/records/string/attachment \
  -X POST
```

`POST /buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment`

<h3 id="createattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket_id|path|string|true|none|
|collection_id|path|string|true|none|
|id|path|string|true|none|

<h3 id="createattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|UNDOCUMENTED RESPONSE|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete_attachment

<a id="opIddelete_attachment"></a>

> Code samples

```bash
curl https://example.com/buckets/string/collections/string/records/string/attachment \
  -X DELETE
```

`DELETE /buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment`

<h3 id="deleteattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket_id|path|string|true|none|
|collection_id|path|string|true|none|
|id|path|string|true|none|

<h3 id="deleteattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|UNDOCUMENTED RESPONSE|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-batch">Batch</h1>

## batch

<a id="opIdbatch"></a>

> Code samples

```bash
curl https://example.com/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "defaults": {
      "body": {
        "property1": null,
        "property2": null
      },
      "headers": {
        "property1": null,
        "property2": null
      },
      "method": "GET",
      "path": "string"
    },
    "requests": [
      {
        "body": {
          "property1": null,
          "property2": null
        },
        "headers": {
          "property1": null,
          "property2": null
        },
        "method": "GET",
        "path": "string"
      }
    ]
  }'
```

`POST /batch`

> Body parameter

```json
{
  "defaults": {
    "body": {
      "property1": null,
      "property2": null
    },
    "headers": {
      "property1": null,
      "property2": null
    },
    "method": "GET",
    "path": "string"
  },
  "requests": [
    {
      "body": {
        "property1": null,
        "property2": null
      },
      "headers": {
        "property1": null,
        "property2": null
      },
      "method": "GET",
      "path": "string"
    }
  ]
}
```

<h3 id="batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» defaults|body|object|false|none|
|» » body|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » headers|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » method|body|string|false|none|
|» » path|body|string|false|none|
|» requests|body|[object]|true|none|
|» » body|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » headers|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » method|body|string|false|none|
|» » path|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » method|GET|
|» » method|HEAD|
|» » method|DELETE|
|» » method|TRACE|
|» » method|POST|
|» » method|PUT|
|» » method|PATCH|
|» » method|GET|
|» » method|HEAD|
|» » method|DELETE|
|» » method|TRACE|
|» » method|POST|
|» » method|PUT|
|» » method|PATCH|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "body": {
        "property1": null,
        "property2": null
      },
      "headers": {
        "property1": null,
        "property2": null
      },
      "path": "string",
      "status": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a list of operation responses.|Inline|
|400|Bad Request|The request was badly formatted.|Inline|
|default|Default|an unknown error occurred.|Inline|

<h3 id="batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[object]|true|none|none|
|» body|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» headers|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» path|string|true|none|none|
|» status|integer|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-utilities">Utilities</h1>

## server_info

<a id="opIdserver_info"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

> Example responses

> 200 Response

```json
{
  "property1": null,
  "property2": null
}
```

<h3 id="serverinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return information about the running Instance.|Inline|

<h3 id="serverinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get_openapi_spec

<a id="opIdget_openapi_spec"></a>

> Code samples

```bash
curl https://example.com/__api__ \
  -H 'Accept: application/json'
```

`GET /__api__`

> Example responses

> 200 Response

```json
{
  "property1": null,
  "property2": null
}
```

<h3 id="getopenapispec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return an OpenAPI description of the running instance.|Inline|

<h3 id="getopenapispec-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## __heartbeat__

<a id="opId__heartbeat__"></a>

> Code samples

```bash
curl https://example.com/__heartbeat__ \
  -H 'Accept: application/json'
```

`GET /__heartbeat__`

> Example responses

> 200 Response

```json
{
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
{
  "property1": null,
  "property2": null
}
```

<h3 id="heartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server is working properly.|Inline|
|503|Service Unavailable|One or more subsystems failing.|Inline|

<h3 id="heartbeat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## __lbheartbeat__

<a id="opId__lbheartbeat__"></a>

> Code samples

```bash
curl https://example.com/__lbheartbeat__ \
  -H 'Accept: application/json'
```

`GET /__lbheartbeat__`

> Example responses

> 200 Response

```json
{}
```

<h3 id="lbheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if server is reachable.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## __version__

<a id="opId__version__"></a>

> Code samples

```bash
curl https://example.com/__version__ \
  -H 'Accept: application/json'
```

`GET /__version__`

> Example responses

> 200 Response

```json
{
  "property1": null,
  "property2": null
}
```

<h3 id="version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the running Instance version information.|Inline|

<h3 id="version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## contribute

<a id="opIdcontribute"></a>

> Code samples

```bash
curl https://example.com/contribute.json \
  -H 'Accept: application/json'
```

`GET /contribute.json`

> Example responses

> 200 Response

```json
{
  "property1": null,
  "property2": null
}
```

<h3 id="contribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return open source contributing information.|Inline|

<h3 id="contribute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-buckets">Buckets</h1>

## get_buckets

<a id="opIdget_buckets"></a>

> Code samples

```bash
curl https://example.com/buckets \
  -H 'Accept: application/json'
```

`GET /buckets`

<h3 id="getbuckets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|none|
|_sort|query|[string]|false|none|
|_token|query|string|false|none|
|_since|query|integer|false|none|
|_to|query|integer|false|none|
|_before|query|integer|false|none|
|id|query|string|false|none|
|last_modified|query|integer|false|none|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": []
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getbuckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a list of matching objects.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getbuckets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» collection:schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» group:schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» record:schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» **additionalProperties**|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get_bucket

<a id="opIdget_bucket"></a>

> Code samples

```bash
curl https://example.com/buckets/string \
  -H 'Accept: application/json'
```

`GET /buckets/{id}`

<h3 id="getbucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "collection:schema": {
      "property1": null,
      "property2": null
    },
    "group:schema": {
      "property1": null,
      "property2": null
    },
    "record:schema": {
      "property1": null,
      "property2": null
    },
    "property1": null,
    "property2": null
  },
  "permissions": {
    "collection:create": [
      "string"
    ],
    "group:create": [
      "string"
    ],
    "read": [
      "string"
    ],
    "write": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the target object.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|404|Not Found|The object does not exist or was deleted.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getbucket-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» collection:schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» group:schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» record:schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|permissions|object|false|none|none|
|» collection:create|[string]|false|none|none|
|» group:create|[string]|false|none|none|
|» read|[string]|false|none|none|
|» write|[string]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-collections">Collections</h1>

## get_collections

<a id="opIdget_collections"></a>

> Code samples

```bash
curl https://example.com/buckets/string/collections \
  -H 'Accept: application/json'
```

`GET /buckets/{bucket_id}/collections`

<h3 id="getcollections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|none|
|_sort|query|[string]|false|none|
|_token|query|string|false|none|
|_since|query|integer|false|none|
|_to|query|integer|false|none|
|_before|query|integer|false|none|
|id|query|string|false|none|
|last_modified|query|integer|false|none|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|
|bucket_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": []
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getcollections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a list of matching objects.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getcollections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» cache_expires|integer|false|none|none|
|» schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» **additionalProperties**|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get_collection

<a id="opIdget_collection"></a>

> Code samples

```bash
curl https://example.com/buckets/string/collections/string \
  -H 'Accept: application/json'
```

`GET /buckets/{bucket_id}/collections/{id}`

<h3 id="getcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|
|bucket_id|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "cache_expires": 0,
    "schema": {
      "property1": null,
      "property2": null
    },
    "property1": null,
    "property2": null
  },
  "permissions": {
    "read": [
      "string"
    ],
    "record:create": [
      "string"
    ],
    "write": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the target object.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|404|Not Found|The object does not exist or was deleted.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getcollection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» cache_expires|integer|false|none|none|
|» schema|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|permissions|object|false|none|none|
|» read|[string]|false|none|none|
|» record:create|[string]|false|none|none|
|» write|[string]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-groups">Groups</h1>

## get_groups

<a id="opIdget_groups"></a>

> Code samples

```bash
curl https://example.com/buckets/string/groups \
  -H 'Accept: application/json'
```

`GET /buckets/{bucket_id}/groups`

<h3 id="getgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|none|
|_sort|query|[string]|false|none|
|_token|query|string|false|none|
|_since|query|integer|false|none|
|_to|query|integer|false|none|
|_before|query|integer|false|none|
|id|query|string|false|none|
|last_modified|query|integer|false|none|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|
|bucket_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": []
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a list of matching objects.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getgroups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» members|[string]|false|none|none|
|» **additionalProperties**|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get_group

<a id="opIdget_group"></a>

> Code samples

```bash
curl https://example.com/buckets/string/groups/string \
  -H 'Accept: application/json'
```

`GET /buckets/{bucket_id}/groups/{id}`

<h3 id="getgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|
|bucket_id|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "members": [],
    "property1": null,
    "property2": null
  },
  "permissions": {
    "read": [
      "string"
    ],
    "write": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the target object.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|404|Not Found|The object does not exist or was deleted.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getgroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» members|[string]|false|none|none|
|» **additionalProperties**|object|false|none|none|
|permissions|object|false|none|none|
|» read|[string]|false|none|none|
|» write|[string]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="remote-settings-prod-records">Records</h1>

## get_records

<a id="opIdget_records"></a>

> Code samples

```bash
curl https://example.com/buckets/string/collections/string/records \
  -H 'Accept: application/json'
```

`GET /buckets/{bucket_id}/collections/{collection_id}/records`

<h3 id="getrecords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|none|
|_sort|query|[string]|false|none|
|_token|query|string|false|none|
|_since|query|integer|false|none|
|_to|query|integer|false|none|
|_before|query|integer|false|none|
|id|query|string|false|none|
|last_modified|query|integer|false|none|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|
|bucket_id|path|string|true|none|
|collection_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": []
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a list of matching objects.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getrecords-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» **additionalProperties**|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get_record

<a id="opIdget_record"></a>

> Code samples

```bash
curl https://example.com/buckets/string/collections/string/records/string \
  -H 'Accept: application/json'
```

`GET /buckets/{bucket_id}/collections/{collection_id}/records/{id}`

<h3 id="getrecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_fields|query|[string]|false|none|
|If-Match|header|string|false|none|
|If-None-Match|header|string|false|none|
|bucket_id|path|string|true|none|
|collection_id|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "permissions": {
    "read": [
      "string"
    ],
    "write": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": null,
  "errno": 0,
  "error": "string",
  "info": "string",
  "message": "string"
}
```

<h3 id="getrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the target object.|Inline|
|304|Not Modified|Reponse has not changed since value in If-None-Match header|None|
|400|Bad Request|The request is invalid.|Inline|
|401|Unauthorized|The request is missing authentication headers.|Inline|
|403|Forbidden|The user is not allowed to perform the operation, or the resource is not accessible.|Inline|
|404|Not Found|The object does not exist or was deleted.|Inline|
|406|Not Acceptable|The client doesn't accept supported responses Content-Type.|Inline|
|412|Precondition Failed|Object was changed or deleted since value in `If-Match` header.|Inline|
|default|Default|Unexpected error.|Inline|

<h3 id="getrecord-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|permissions|object|false|none|none|
|» read|[string]|false|none|none|
|» write|[string]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|details|object|false|none|none|
|errno|integer|true|none|none|
|error|string|true|none|none|
|info|string|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Etag|string||none|
|200|Last-Modified|string||none|
|304|Etag|string||none|
|304|Last-Modified|string||none|

<aside class="success">
This operation does not require authentication
</aside>
