<h1 id="influx-oss-api-service">Influx OSS API Service v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

&lt;!-- ReDoc-Inject: &lt;security-definitions&gt; --&gt;

Base URLs:

* <a href="https://api.apis.guru/api/v2">https://api.apis.guru/api/v2</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="influx-oss-api-service-routes">Routes</h1>

## List all top level routes

<a id="opIdGetRoutes"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

<h3 id="list-all-top-level-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> default Response

```json
{
  "authorizations": "http://example.com",
  "buckets": "http://example.com",
  "dashboards": "http://example.com",
  "external": {
    "statusFeed": "http://example.com"
  },
  "flags": "http://example.com",
  "me": "http://example.com",
  "orgs": "http://example.com",
  "query": {
    "analyze": "http://example.com",
    "ast": "http://example.com",
    "self": "http://example.com",
    "suggestions": "http://example.com"
  },
  "setup": "http://example.com",
  "signin": "http://example.com",
  "signout": "http://example.com",
  "sources": "http://example.com",
  "system": {
    "debug": "http://example.com",
    "health": "http://example.com",
    "metrics": "http://example.com"
  },
  "tasks": "http://example.com",
  "telegrafs": "http://example.com",
  "users": "http://example.com",
  "variables": "http://example.com",
  "write": "http://example.com"
}
```

<h3 id="list-all-top-level-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|All routes|[Routes](#schemaroutes)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-authorizations">Authorizations</h1>

## List all authorizations

<a id="opIdGetAuthorizations"></a>

> Code samples

```bash
curl https://example.com/authorizations \
  -H 'Accept: application/json'
```

`GET /authorizations`

<h3 id="list-all-authorizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|query|string|false|Only show authorizations that belong to a user ID.|
|user|query|string|false|Only show authorizations that belong to a user name.|
|orgID|query|string|false|Only show authorizations that belong to an organization ID.|
|org|query|string|false|Only show authorizations that belong to a organization name.|

> Example responses

> 200 Response

```json
{
  "authorizations": [
    {
      "description": "string",
      "status": "active",
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "links": {
        "self": "/api/v2/authorizations/1",
        "user": "/api/v2/users/12"
      },
      "org": "string",
      "orgID": "string",
      "permissions": [
        {
          "action": "read",
          "resource": {
            "id": "string",
            "name": "string",
            "org": "string",
            "orgID": "string",
            "type": "authorizations"
          }
        }
      ],
      "token": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "user": "string",
      "userID": "string"
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-authorizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of authorizations|[Authorizations](#schemaauthorizations)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an authorization

<a id="opIdPostAuthorizations"></a>

> Code samples

```bash
curl https://example.com/authorizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "status": "active",
    "orgID": "string",
    "permissions": [
      {
        "action": "read",
        "resource": {
          "id": "string",
          "name": "string",
          "org": "string",
          "orgID": "string",
          "type": "authorizations"
        }
      }
    ],
    "userID": "string"
  }'
```

`POST /authorizations`

> Body parameter

```json
{
  "description": "string",
  "status": "active",
  "orgID": "string",
  "permissions": [
    {
      "action": "read",
      "resource": {
        "id": "string",
        "name": "string",
        "org": "string",
        "orgID": "string",
        "type": "authorizations"
      }
    }
  ],
  "userID": "string"
}
```

<h3 id="create-an-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[AuthorizationPostRequest](#schemaauthorizationpostrequest)|true|Authorization to create|
|» description|body|string|false|A description of the token.|
|» status|body|string|false|If inactive the token is inactive and requests using the token will be rejected.|
|» orgID|body|string|true|ID of org that authorization is scoped to.|
|» permissions|body|[[Permission](#schemapermission)]|true|List of permissions for an auth.  An auth must have at least one Permission.|
|» userID|body|string|false|ID of user that authorization is scoped to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "status": "active",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "self": "/api/v2/authorizations/1",
    "user": "/api/v2/users/12"
  },
  "org": "string",
  "orgID": "string",
  "permissions": [
    {
      "action": "read",
      "resource": {
        "id": "string",
        "name": "string",
        "org": "string",
        "orgID": "string",
        "type": "authorizations"
      }
    }
  ],
  "token": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "user": "string",
  "userID": "string"
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-an-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Authorization created|[Authorization](#schemaauthorization)|
|400|Bad Request|Non 2XX error response from server.|[Error](#schemaerror)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an authorization

<a id="opIdGetAuthorizationsID"></a>

> Code samples

```bash
curl https://example.com/authorizations/string \
  -H 'Accept: application/json'
```

`GET /authorizations/{authID}`

<h3 id="retrieve-an-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|authID|path|string|true|The ID of the authorization to get.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "status": "active",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "self": "/api/v2/authorizations/1",
    "user": "/api/v2/users/12"
  },
  "org": "string",
  "orgID": "string",
  "permissions": [
    {
      "action": "read",
      "resource": {
        "id": "string",
        "name": "string",
        "org": "string",
        "orgID": "string",
        "type": "authorizations"
      }
    }
  ],
  "token": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "user": "string",
  "userID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-an-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authorization details|[Authorization](#schemaauthorization)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an authorization

<a id="opIdDeleteAuthorizationsID"></a>

> Code samples

```bash
curl https://example.com/authorizations/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /authorizations/{authID}`

<h3 id="delete-an-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|authID|path|string|true|The ID of the authorization to delete.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-an-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Authorization deleted|None|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an authorization to be active or inactive

<a id="opIdPatchAuthorizationsID"></a>

> Code samples

```bash
curl https://example.com/authorizations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "status": "active"
  }'
```

`PATCH /authorizations/{authID}`

> Body parameter

```json
{
  "description": "string",
  "status": "active"
}
```

<h3 id="update-an-authorization-to-be-active-or-inactive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|authID|path|string|true|The ID of the authorization to update.|
|body|body|[AuthorizationUpdateRequest](#schemaauthorizationupdaterequest)|true|Authorization to update|
|» description|body|string|false|A description of the token.|
|» status|body|string|false|If inactive the token is inactive and requests using the token will be rejected.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "status": "active",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "self": "/api/v2/authorizations/1",
    "user": "/api/v2/users/12"
  },
  "org": "string",
  "orgID": "string",
  "permissions": [
    {
      "action": "read",
      "resource": {
        "id": "string",
        "name": "string",
        "org": "string",
        "orgID": "string",
        "type": "authorizations"
      }
    }
  ],
  "token": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "user": "string",
  "userID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-an-authorization-to-be-active-or-inactive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The active or inactie authorization|[Authorization](#schemaauthorization)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-buckets">Buckets</h1>

## List all buckets

<a id="opIdGetBuckets"></a>

> Code samples

```bash
curl https://example.com/buckets \
  -H 'Accept: application/json'
```

`GET /buckets`

<h3 id="list-all-buckets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|after|query|string|false|The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.<br>|
|org|query|string|false|The name of the organization.|
|orgID|query|string|false|The organization ID.|
|name|query|string|false|Only returns buckets with a specific name.|
|id|query|string|false|Only returns buckets with a specific ID.|

> Example responses

> 200 Response

```json
{
  "buckets": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "labels": "/api/v2/buckets/1/labels",
        "members": "/api/v2/buckets/1/members",
        "org": "/api/v2/orgs/2",
        "owners": "/api/v2/buckets/1/owners",
        "self": "/api/v2/buckets/1",
        "write": "/api/v2/write?org=2&amp;bucket=1"
      },
      "name": "string",
      "orgID": "string",
      "retentionRules": [
        {
          "everySeconds": 86400,
          "shardGroupDurationSeconds": 0,
          "type": "expire"
        }
      ],
      "rp": "string",
      "schemaType": "implicit",
      "type": "user",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-buckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of buckets|[Buckets](#schemabuckets)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a bucket

<a id="opIdPostBuckets"></a>

> Code samples

```bash
curl https://example.com/buckets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "orgID": "string",
    "retentionRules": [
      {
        "everySeconds": 86400,
        "shardGroupDurationSeconds": 0,
        "type": "expire"
      }
    ],
    "rp": "string",
    "schemaType": "implicit"
  }'
```

`POST /buckets`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ],
  "rp": "string",
  "schemaType": "implicit"
}
```

<h3 id="create-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[PostBucketRequest](#schemapostbucketrequest)|true|Bucket to create|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» orgID|body|string|true|none|
|» retentionRules|body|[RetentionRules](#schemaretentionrules)|true|Rules to expire or retain data.  No rules means data never expires.|
|» rp|body|string|false|none|
|» schemaType|body|[SchemaType](#schemaschematype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» schemaType|implicit|
|» schemaType|explicit|

> Example responses

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/buckets/1/labels",
    "members": "/api/v2/buckets/1/members",
    "org": "/api/v2/orgs/2",
    "owners": "/api/v2/buckets/1/owners",
    "self": "/api/v2/buckets/1",
    "write": "/api/v2/write?org=2&amp;bucket=1"
  },
  "name": "string",
  "orgID": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ],
  "rp": "string",
  "schemaType": "implicit",
  "type": "user",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 422 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Bucket created|[Bucket](#schemabucket)|
|422|Unprocessable Entity|Request body failed validation|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a bucket

<a id="opIdGetBucketsID"></a>

> Code samples

```bash
curl https://example.com/buckets/string \
  -H 'Accept: application/json'
```

`GET /buckets/{bucketID}`

<h3 id="retrieve-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/buckets/1/labels",
    "members": "/api/v2/buckets/1/members",
    "org": "/api/v2/orgs/2",
    "owners": "/api/v2/buckets/1/owners",
    "self": "/api/v2/buckets/1",
    "write": "/api/v2/write?org=2&amp;bucket=1"
  },
  "name": "string",
  "orgID": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ],
  "rp": "string",
  "schemaType": "implicit",
  "type": "user",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bucket details|[Bucket](#schemabucket)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a bucket

<a id="opIdDeleteBucketsID"></a>

> Code samples

```bash
curl https://example.com/buckets/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /buckets/{bucketID}`

<h3 id="delete-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The ID of the bucket to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Bucket not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a bucket

<a id="opIdPatchBucketsID"></a>

> Code samples

```bash
curl https://example.com/buckets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "retentionRules": [
      {
        "everySeconds": 86400,
        "shardGroupDurationSeconds": 0,
        "type": "expire"
      }
    ]
  }'
```

`PATCH /buckets/{bucketID}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ]
}
```

<h3 id="update-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|
|body|body|[PatchBucketRequest](#schemapatchbucketrequest)|true|Bucket update to apply|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» retentionRules|body|[PatchRetentionRules](#schemapatchretentionrules)|false|Updates to rules to expire or retain data. No rules means no updates.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/buckets/1/labels",
    "members": "/api/v2/buckets/1/members",
    "org": "/api/v2/orgs/2",
    "owners": "/api/v2/buckets/1/owners",
    "self": "/api/v2/buckets/1",
    "write": "/api/v2/write?org=2&amp;bucket=1"
  },
  "name": "string",
  "orgID": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ],
  "rp": "string",
  "schemaType": "implicit",
  "type": "user",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated bucket|[Bucket](#schemabucket)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a bucket

<a id="opIdGetBucketsIDLabels"></a>

> Code samples

```bash
curl https://example.com/buckets/string/labels \
  -H 'Accept: application/json'
```

`GET /buckets/{bucketID}/labels`

<h3 id="list-all-labels-for-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a bucket|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a bucket

<a id="opIdPostBucketsIDLabels"></a>

> Code samples

```bash
curl https://example.com/buckets/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /buckets/{bucketID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The newly added label|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a bucket

<a id="opIdDeleteBucketsIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/buckets/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /buckets/{bucketID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|
|labelID|path|string|true|The ID of the label to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Bucket not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all users with member privileges for a bucket

<a id="opIdGetBucketsIDMembers"></a>

> Code samples

```bash
curl https://example.com/buckets/string/members \
  -H 'Accept: application/json'
```

`GET /buckets/{bucketID}/members`

<h3 id="list-all-users-with-member-privileges-for-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "member"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-users-with-member-privileges-for-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of bucket members|[ResourceMembers](#schemaresourcemembers)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a member to a bucket

<a id="opIdPostBucketsIDMembers"></a>

> Code samples

```bash
curl https://example.com/buckets/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /buckets/{bucketID}/members`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-a-member-to-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as member|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "member"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-member-to-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Member added to bucket|[ResourceMember](#schemaresourcemember)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a member from a bucket

<a id="opIdDeleteBucketsIDMembersID"></a>

> Code samples

```bash
curl https://example.com/buckets/string/members/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /buckets/{bucketID}/members/{userID}`

<h3 id="remove-a-member-from-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the member to remove.|
|bucketID|path|string|true|The bucket ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-a-member-from-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all owners of a bucket

<a id="opIdGetBucketsIDOwners"></a>

> Code samples

```bash
curl https://example.com/buckets/string/owners \
  -H 'Accept: application/json'
```

`GET /buckets/{bucketID}/owners`

<h3 id="list-all-owners-of-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "owner"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-owners-of-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of bucket owners|[ResourceOwners](#schemaresourceowners)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an owner to a bucket

<a id="opIdPostBucketsIDOwners"></a>

> Code samples

```bash
curl https://example.com/buckets/string/owners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /buckets/{bucketID}/owners`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-an-owner-to-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|bucketID|path|string|true|The bucket ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as owner|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "owner"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-an-owner-to-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Bucket owner added|[ResourceOwner](#schemaresourceowner)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an owner from a bucket

<a id="opIdDeleteBucketsIDOwnersID"></a>

> Code samples

```bash
curl https://example.com/buckets/string/owners/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /buckets/{bucketID}/owners/{userID}`

<h3 id="remove-an-owner-from-a-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the owner to remove.|
|bucketID|path|string|true|The bucket ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-an-owner-from-a-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Owner removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-checks">Checks</h1>

## List all checks

<a id="opIdGetChecks"></a>

> Code samples

```bash
curl 'https://example.com/checks?orgID=string' \
  -H 'Accept: application/json'
```

`GET /checks`

<h3 id="list-all-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|orgID|query|string|true|Only show checks that belong to a specific organization ID.|

> Example responses

> 200 Response

```json
{
  "checks": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "lastRunError": "string",
      "lastRunStatus": "failed",
      "latestCompleted": "1970-01-01T00:00:00Z",
      "links": {
        "labels": "/api/v2/checks/1/labels",
        "members": "/api/v2/checks/1/members",
        "owners": "/api/v2/checks/1/owners",
        "query": "/api/v2/checks/1/query",
        "self": "/api/v2/checks/1"
      },
      "name": "string",
      "orgID": "string",
      "ownerID": "string",
      "query": {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      },
      "status": "active",
      "taskID": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "every": "string",
      "level": "UNKNOWN",
      "offset": "string",
      "reportZero": true,
      "staleTime": "string",
      "statusMessageTemplate": "string",
      "tags": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "timeSince": "string",
      "type": "deadman"
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of checks|[Checks](#schemachecks)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add new check

<a id="opIdCreateCheck"></a>

> Code samples

```bash
curl https://example.com/checks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "name": "string",
    "orgID": "string",
    "query": {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    },
    "status": "active",
    "taskID": "string",
    "every": "string",
    "level": "UNKNOWN",
    "offset": "string",
    "reportZero": true,
    "staleTime": "string",
    "statusMessageTemplate": "string",
    "tags": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "timeSince": "string",
    "type": "deadman"
  }'
```

`POST /checks`

> Body parameter

```json
{
  "description": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "name": "string",
  "orgID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

<h3 id="add-new-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PostCheck](#schemapostcheck)|true|Check to create|
|» *oneOf*|body|[DeadmanCheck](#schemadeadmancheck)|false|none|
|» *oneOf*|body|[ThresholdCheck](#schemathresholdcheck)|false|none|
|» *oneOf*|body|[CustomCheck](#schemacustomcheck)|false|none|

> Example responses

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-new-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Check created|[Check](#schemacheck)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a check

<a id="opIdGetChecksID"></a>

> Code samples

```bash
curl https://example.com/checks/string \
  -H 'Accept: application/json'
```

`GET /checks/{checkID}`

<h3 id="retrieve-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The check requested|[Check](#schemacheck)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a check

<a id="opIdPutChecksID"></a>

> Code samples

```bash
curl https://example.com/checks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "name": "string",
    "orgID": "string",
    "query": {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    },
    "status": "active",
    "taskID": "string",
    "every": "string",
    "level": "UNKNOWN",
    "offset": "string",
    "reportZero": true,
    "staleTime": "string",
    "statusMessageTemplate": "string",
    "tags": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "timeSince": "string",
    "type": "deadman"
  }'
```

`PUT /checks/{checkID}`

> Body parameter

```json
{
  "description": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "name": "string",
  "orgID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

<h3 id="update-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|
|body|body|[Check](#schemacheck)|true|Check update to apply|
|» *oneOf*|body|[DeadmanCheck](#schemadeadmancheck)|false|none|
|» *oneOf*|body|[ThresholdCheck](#schemathresholdcheck)|false|none|
|» *oneOf*|body|[CustomCheck](#schemacustomcheck)|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated check|[Check](#schemacheck)|
|404|Not Found|The check was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a check

<a id="opIdDeleteChecksID"></a>

> Code samples

```bash
curl https://example.com/checks/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /checks/{checkID}`

<h3 id="delete-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|The check was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a check

<a id="opIdPatchChecksID"></a>

> Code samples

```bash
curl https://example.com/checks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "status": "active"
  }'
```

`PATCH /checks/{checkID}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "status": "active"
}
```

<h3 id="update-a-check-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|
|body|body|[CheckPatch](#schemacheckpatch)|true|Check update to apply|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-check-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated check|[Check](#schemacheck)|
|404|Not Found|The check was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a check

<a id="opIdGetChecksIDLabels"></a>

> Code samples

```bash
curl https://example.com/checks/string/labels \
  -H 'Accept: application/json'
```

`GET /checks/{checkID}/labels`

<h3 id="list-all-labels-for-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a check|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a check

<a id="opIdPostChecksIDLabels"></a>

> Code samples

```bash
curl https://example.com/checks/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /checks/{checkID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The label was added to the check|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete label from a check

<a id="opIdDeleteChecksIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/checks/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /checks/{checkID}/labels/{labelID}`

<h3 id="delete-label-from-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|
|labelID|path|string|true|The ID of the label to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-label-from-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Check or label not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a check query

<a id="opIdGetChecksIDQuery"></a>

> Code samples

```bash
curl https://example.com/checks/string/query \
  -H 'Accept: application/json'
```

`GET /checks/{checkID}/query`

<h3 id="retrieve-a-check-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|checkID|path|string|true|The check ID.|

> Example responses

> 200 Response

```json
{
  "flux": "string"
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-check-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The check query requested|[FluxResponse](#schemafluxresponse)|
|400|Bad Request|Invalid request|[Error](#schemaerror)|
|404|Not Found|Check not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-dashboards">Dashboards</h1>

## List all dashboards

<a id="opIdGetDashboards"></a>

> Code samples

```bash
curl https://example.com/dashboards \
  -H 'Accept: application/json'
```

`GET /dashboards`

<h3 id="list-all-dashboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|descending|query|boolean|false|none|
|owner|query|string|false|A user identifier. Returns only dashboards where this user has the `owner` role.|
|sortBy|query|string|false|The column to sort by.|
|id|query|[string]|false|A list of dashboard identifiers. Returns only the listed dashboards. If both `id` and `owner` are specified, only `id` is used.|
|orgID|query|string|false|The identifier of the organization.|
|org|query|string|false|The name of the organization.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|ID|
|sortBy|CreatedAt|
|sortBy|UpdatedAt|

> Example responses

> 200 Response

```json
{
  "dashboards": [
    {
      "description": "string",
      "name": "string",
      "orgID": "string",
      "cells": [
        {
          "h": 0,
          "id": "string",
          "links": {
            "self": "string",
            "view": "string"
          },
          "viewID": "string",
          "w": 0,
          "x": 0,
          "y": 0
        }
      ],
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "cells": "/api/v2/dashboards/1/cells",
        "labels": "/api/v2/dashboards/1/labels",
        "members": "/api/v2/dashboards/1/members",
        "org": "/api/v2/labels/1",
        "owners": "/api/v2/dashboards/1/owners",
        "self": "/api/v2/dashboards/1"
      },
      "meta": {
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-dashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All dashboards|[Dashboards](#schemadashboards)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a dashboard

<a id="opIdPostDashboards"></a>

> Code samples

```bash
curl https://example.com/dashboards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "orgID": "string"
  }'
```

`POST /dashboards`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string"
}
```

<h3 id="create-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[CreateDashboardRequest](#schemacreatedashboardrequest)|true|Dashboard to create|
|» description|body|string|false|The user-facing description of the dashboard.|
|» name|body|string|true|The user-facing name of the dashboard.|
|» orgID|body|string|true|The ID of the organization that owns the dashboard.|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "cells": [
    {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0
    }
  ],
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "cells": "/api/v2/dashboards/1/cells",
    "labels": "/api/v2/dashboards/1/labels",
    "members": "/api/v2/dashboards/1/members",
    "org": "/api/v2/labels/1",
    "owners": "/api/v2/dashboards/1/owners",
    "self": "/api/v2/dashboards/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Added dashboard|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="create-a-dashboard-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Dashboard](#schemadashboard)|false|none|none|
|*oneOf*|[DashboardWithViewProperties](#schemadashboardwithviewproperties)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Dashboard

<a id="opIdGetDashboardsID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string \
  -H 'Accept: application/json'
```

`GET /dashboards/{dashboardID}`

<h3 id="retrieve-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to update.|
|include|query|string|false|Includes the cell view properties in the response if set to `properties`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|properties|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "cells": [
    {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0
    }
  ],
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "cells": "/api/v2/dashboards/1/cells",
    "labels": "/api/v2/dashboards/1/labels",
    "members": "/api/v2/dashboards/1/members",
    "org": "/api/v2/labels/1",
    "owners": "/api/v2/dashboards/1/owners",
    "self": "/api/v2/dashboards/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve a single dashboard|Inline|
|404|Not Found|Dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="retrieve-a-dashboard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Dashboard](#schemadashboard)|false|none|none|
|*oneOf*|[DashboardWithViewProperties](#schemadashboardwithviewproperties)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a dashboard

<a id="opIdDeleteDashboardsID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dashboards/{dashboardID}`

<h3 id="delete-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to update.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a dashboard

<a id="opIdPatchDashboardsID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cells": {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0,
      "name": "string",
      "properties": {
        "axes": {
          "x": {
            "base": "",
            "bounds": [
              "string"
            ],
            "label": "string",
            "prefix": "string",
            "scale": "log",
            "suffix": "string"
          },
          "y": {
            "base": "",
            "bounds": [
              "string"
            ],
            "label": "string",
            "prefix": "string",
            "scale": "log",
            "suffix": "string"
          }
        },
        "colors": [
          {
            "hex": "strings",
            "id": "string",
            "name": "string",
            "type": "min",
            "value": 0
          }
        ],
        "decimalPlaces": {
          "digits": 0,
          "isEnforced": true
        },
        "generateXAxisTicks": [
          "string"
        ],
        "generateYAxisTicks": [
          "string"
        ],
        "hoverDimension": "auto",
        "legendColorizeRows": true,
        "legendHide": true,
        "legendOpacity": 0,
        "legendOrientationThreshold": 0,
        "note": "string",
        "position": "overlaid",
        "prefix": "string",
        "queries": [
          {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          }
        ],
        "shadeBelow": true,
        "shape": "chronograf-v2",
        "showNoteWhenEmpty": true,
        "staticLegend": {
          "colorizeRows": true,
          "heightRatio": 0,
          "hide": true,
          "opacity": 0,
          "orientationThreshold": 0,
          "valueAxis": "string",
          "widthRatio": 0
        },
        "suffix": "string",
        "timeFormat": "string",
        "type": "line-plus-single-stat",
        "xColumn": "string",
        "xTickStart": 0,
        "xTickStep": 0,
        "xTotalTicks": 0,
        "yColumn": "string",
        "yTickStart": 0,
        "yTickStep": 0,
        "yTotalTicks": 0
      }
    },
    "description": "string",
    "name": "string"
  }'
```

`PATCH /dashboards/{dashboardID}`

> Body parameter

```json
{
  "cells": {
    "h": 0,
    "id": "string",
    "links": {
      "self": "string",
      "view": "string"
    },
    "viewID": "string",
    "w": 0,
    "x": 0,
    "y": 0,
    "name": "string",
    "properties": {
      "axes": {
        "x": {
          "base": "",
          "bounds": [
            "string"
          ],
          "label": "string",
          "prefix": "string",
          "scale": "log",
          "suffix": "string"
        },
        "y": {
          "base": "",
          "bounds": [
            "string"
          ],
          "label": "string",
          "prefix": "string",
          "scale": "log",
          "suffix": "string"
        }
      },
      "colors": [
        {
          "hex": "strings",
          "id": "string",
          "name": "string",
          "type": "min",
          "value": 0
        }
      ],
      "decimalPlaces": {
        "digits": 0,
        "isEnforced": true
      },
      "generateXAxisTicks": [
        "string"
      ],
      "generateYAxisTicks": [
        "string"
      ],
      "hoverDimension": "auto",
      "legendColorizeRows": true,
      "legendHide": true,
      "legendOpacity": 0,
      "legendOrientationThreshold": 0,
      "note": "string",
      "position": "overlaid",
      "prefix": "string",
      "queries": [
        {
          "builderConfig": {
            "aggregateWindow": {
              "fillValues": true,
              "period": "string"
            },
            "buckets": [
              "string"
            ],
            "functions": [
              {
                "name": "string"
              }
            ],
            "tags": [
              {
                "aggregateFunctionType": "filter",
                "key": "string",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "editMode": "builder",
          "name": "string",
          "text": "string"
        }
      ],
      "shadeBelow": true,
      "shape": "chronograf-v2",
      "showNoteWhenEmpty": true,
      "staticLegend": {
        "colorizeRows": true,
        "heightRatio": 0,
        "hide": true,
        "opacity": 0,
        "orientationThreshold": 0,
        "valueAxis": "string",
        "widthRatio": 0
      },
      "suffix": "string",
      "timeFormat": "string",
      "type": "line-plus-single-stat",
      "xColumn": "string",
      "xTickStart": 0,
      "xTickStep": 0,
      "xTotalTicks": 0,
      "yColumn": "string",
      "yTickStart": 0,
      "yTickStep": 0,
      "yTotalTicks": 0
    }
  },
  "description": "string",
  "name": "string"
}
```

<h3 id="update-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to update.|
|body|body|object|true|Patching of a dashboard|
|» cells|body|[CellWithViewProperties](#schemacellwithviewproperties)|false|optional, when provided will replace all existing cells with the cells provided|
|» description|body|string|false|optional, when provided will replace the description|
|» name|body|string|false|optional, when provided will replace the name|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "cells": [
    {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0
    }
  ],
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "cells": "/api/v2/dashboards/1/cells",
    "labels": "/api/v2/dashboards/1/labels",
    "members": "/api/v2/dashboards/1/members",
    "org": "/api/v2/labels/1",
    "owners": "/api/v2/dashboards/1/owners",
    "self": "/api/v2/dashboards/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated dashboard|[Dashboard](#schemadashboard)|
|404|Not Found|Dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a dashboard

<a id="opIdGetDashboardsIDLabels"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/labels \
  -H 'Accept: application/json'
```

`GET /dashboards/{dashboardID}/labels`

<h3 id="list-all-labels-for-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a dashboard|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a dashboard

<a id="opIdPostDashboardsIDLabels"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /dashboards/{dashboardID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The label added to the dashboard|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a dashboard

<a id="opIdDeleteDashboardsIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dashboards/{dashboardID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|
|labelID|path|string|true|The ID of the label to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all dashboard members

<a id="opIdGetDashboardsIDMembers"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/members \
  -H 'Accept: application/json'
```

`GET /dashboards/{dashboardID}/members`

<h3 id="list-all-dashboard-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "member"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-dashboard-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of users who have member privileges for a dashboard|[ResourceMembers](#schemaresourcemembers)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a member to a dashboard

<a id="opIdPostDashboardsIDMembers"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /dashboards/{dashboardID}/members`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-a-member-to-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as member|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "member"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-member-to-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Added to dashboard members|[ResourceMember](#schemaresourcemember)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a member from a dashboard

<a id="opIdDeleteDashboardsIDMembersID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/members/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dashboards/{dashboardID}/members/{userID}`

<h3 id="remove-a-member-from-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the member to remove.|
|dashboardID|path|string|true|The dashboard ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-a-member-from-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all dashboard owners

<a id="opIdGetDashboardsIDOwners"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/owners \
  -H 'Accept: application/json'
```

`GET /dashboards/{dashboardID}/owners`

<h3 id="list-all-dashboard-owners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "owner"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-dashboard-owners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of users who have owner privileges for a dashboard|[ResourceOwners](#schemaresourceowners)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an owner to a dashboard

<a id="opIdPostDashboardsIDOwners"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/owners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /dashboards/{dashboardID}/owners`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-an-owner-to-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as owner|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "owner"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-an-owner-to-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Added to dashboard owners|[ResourceOwner](#schemaresourceowner)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an owner from a dashboard

<a id="opIdDeleteDashboardsIDOwnersID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/owners/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dashboards/{dashboardID}/owners/{userID}`

<h3 id="remove-an-owner-from-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the owner to remove.|
|dashboardID|path|string|true|The dashboard ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-an-owner-from-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Owner removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-cells">Cells</h1>

## Replace cells in a dashboard

<a id="opIdPutDashboardsIDCells"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/cells \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0
    }
  ]'
```

`PUT /dashboards/{dashboardID}/cells`

Replaces all cells in a dashboard. This is used primarily to update the positional information of all cells.

> Body parameter

```json
[
  {
    "h": 0,
    "id": "string",
    "links": {
      "self": "string",
      "view": "string"
    },
    "viewID": "string",
    "w": 0,
    "x": 0,
    "y": 0
  }
]
```

<h3 id="replace-cells-in-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to update.|
|body|body|[Cells](#schemacells)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "cells": [
    {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0
    }
  ],
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "cells": "/api/v2/dashboards/1/cells",
    "labels": "/api/v2/dashboards/1/labels",
    "members": "/api/v2/dashboards/1/members",
    "org": "/api/v2/labels/1",
    "owners": "/api/v2/dashboards/1/owners",
    "self": "/api/v2/dashboards/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="replace-cells-in-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Replaced dashboard cells|[Dashboard](#schemadashboard)|
|404|Not Found|Dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a dashboard cell

<a id="opIdPostDashboardsIDCells"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/cells \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "h": 0,
    "name": "string",
    "usingView": "string",
    "w": 0,
    "x": 0,
    "y": 0
  }'
```

`POST /dashboards/{dashboardID}/cells`

> Body parameter

```json
{
  "h": 0,
  "name": "string",
  "usingView": "string",
  "w": 0,
  "x": 0,
  "y": 0
}
```

<h3 id="create-a-dashboard-cell-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to update.|
|body|body|[CreateCell](#schemacreatecell)|true|Cell that will be added|
|» h|body|integer(int32)|false|none|
|» name|body|string|false|none|
|» usingView|body|string|false|Makes a copy of the provided view.|
|» w|body|integer(int32)|false|none|
|» x|body|integer(int32)|false|none|
|» y|body|integer(int32)|false|none|

> Example responses

> 201 Response

```json
{
  "h": 0,
  "id": "string",
  "links": {
    "self": "string",
    "view": "string"
  },
  "viewID": "string",
  "w": 0,
  "x": 0,
  "y": 0
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-dashboard-cell-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Cell successfully added|[Cell](#schemacell)|
|404|Not Found|Dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a dashboard cell

<a id="opIdDeleteDashboardsIDCellsID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/cells/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dashboards/{dashboardID}/cells/{cellID}`

<h3 id="delete-a-dashboard-cell-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to delete.|
|cellID|path|string|true|The ID of the cell to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-dashboard-cell-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Cell successfully deleted|None|
|404|Not Found|Cell or dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the non-positional information related to a cell

<a id="opIdPatchDashboardsIDCellsID"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/cells/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "h": 0,
    "w": 0,
    "x": 0,
    "y": 0
  }'
```

`PATCH /dashboards/{dashboardID}/cells/{cellID}`

Updates the non positional information related to a cell. Updates to a single cell's positional data could cause grid conflicts.

> Body parameter

```json
{
  "h": 0,
  "w": 0,
  "x": 0,
  "y": 0
}
```

<h3 id="update-the-non-positional-information-related-to-a-cell-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to update.|
|cellID|path|string|true|The ID of the cell to update.|
|body|body|[CellUpdate](#schemacellupdate)|true|none|
|» h|body|integer(int32)|false|none|
|» w|body|integer(int32)|false|none|
|» x|body|integer(int32)|false|none|
|» y|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "h": 0,
  "id": "string",
  "links": {
    "self": "string",
    "view": "string"
  },
  "viewID": "string",
  "w": 0,
  "x": 0,
  "y": 0
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-the-non-positional-information-related-to-a-cell-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated dashboard cell|[Cell](#schemacell)|
|404|Not Found|Cell or dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the view for a cell

<a id="opIdGetDashboardsIDCellsIDView"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/cells/string/view \
  -H 'Accept: application/json'
```

`GET /dashboards/{dashboardID}/cells/{cellID}/view`

<h3 id="retrieve-the-view-for-a-cell-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The dashboard ID.|
|cellID|path|string|true|The cell ID.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "links": {
    "self": "string"
  },
  "name": "string",
  "properties": {
    "axes": {
      "x": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "y": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      }
    },
    "colors": [
      {
        "hex": "strings",
        "id": "string",
        "name": "string",
        "type": "min",
        "value": 0
      }
    ],
    "decimalPlaces": {
      "digits": 0,
      "isEnforced": true
    },
    "generateXAxisTicks": [
      "string"
    ],
    "generateYAxisTicks": [
      "string"
    ],
    "hoverDimension": "auto",
    "legendColorizeRows": true,
    "legendHide": true,
    "legendOpacity": 0,
    "legendOrientationThreshold": 0,
    "note": "string",
    "position": "overlaid",
    "prefix": "string",
    "queries": [
      {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      }
    ],
    "shadeBelow": true,
    "shape": "chronograf-v2",
    "showNoteWhenEmpty": true,
    "staticLegend": {
      "colorizeRows": true,
      "heightRatio": 0,
      "hide": true,
      "opacity": 0,
      "orientationThreshold": 0,
      "valueAxis": "string",
      "widthRatio": 0
    },
    "suffix": "string",
    "timeFormat": "string",
    "type": "line-plus-single-stat",
    "xColumn": "string",
    "xTickStart": 0,
    "xTickStep": 0,
    "xTotalTicks": 0,
    "yColumn": "string",
    "yTickStart": 0,
    "yTickStep": 0,
    "yTotalTicks": 0
  }
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-the-view-for-a-cell-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A dashboard cells view|[View](#schemaview)|
|404|Not Found|Cell or dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the view for a cell

<a id="opIdPatchDashboardsIDCellsIDView"></a>

> Code samples

```bash
curl https://example.com/dashboards/string/cells/string/view \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "properties": {
      "axes": {
        "x": {
          "base": "",
          "bounds": [
            "string"
          ],
          "label": "string",
          "prefix": "string",
          "scale": "log",
          "suffix": "string"
        },
        "y": {
          "base": "",
          "bounds": [
            "string"
          ],
          "label": "string",
          "prefix": "string",
          "scale": "log",
          "suffix": "string"
        }
      },
      "colors": [
        {
          "hex": "strings",
          "id": "string",
          "name": "string",
          "type": "min",
          "value": 0
        }
      ],
      "decimalPlaces": {
        "digits": 0,
        "isEnforced": true
      },
      "generateXAxisTicks": [
        "string"
      ],
      "generateYAxisTicks": [
        "string"
      ],
      "hoverDimension": "auto",
      "legendColorizeRows": true,
      "legendHide": true,
      "legendOpacity": 0,
      "legendOrientationThreshold": 0,
      "note": "string",
      "position": "overlaid",
      "prefix": "string",
      "queries": [
        {
          "builderConfig": {
            "aggregateWindow": {
              "fillValues": true,
              "period": "string"
            },
            "buckets": [
              "string"
            ],
            "functions": [
              {
                "name": "string"
              }
            ],
            "tags": [
              {
                "aggregateFunctionType": "filter",
                "key": "string",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "editMode": "builder",
          "name": "string",
          "text": "string"
        }
      ],
      "shadeBelow": true,
      "shape": "chronograf-v2",
      "showNoteWhenEmpty": true,
      "staticLegend": {
        "colorizeRows": true,
        "heightRatio": 0,
        "hide": true,
        "opacity": 0,
        "orientationThreshold": 0,
        "valueAxis": "string",
        "widthRatio": 0
      },
      "suffix": "string",
      "timeFormat": "string",
      "type": "line-plus-single-stat",
      "xColumn": "string",
      "xTickStart": 0,
      "xTickStep": 0,
      "xTotalTicks": 0,
      "yColumn": "string",
      "yTickStart": 0,
      "yTickStep": 0,
      "yTotalTicks": 0
    }
  }'
```

`PATCH /dashboards/{dashboardID}/cells/{cellID}/view`

> Body parameter

```json
{
  "name": "string",
  "properties": {
    "axes": {
      "x": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "y": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      }
    },
    "colors": [
      {
        "hex": "strings",
        "id": "string",
        "name": "string",
        "type": "min",
        "value": 0
      }
    ],
    "decimalPlaces": {
      "digits": 0,
      "isEnforced": true
    },
    "generateXAxisTicks": [
      "string"
    ],
    "generateYAxisTicks": [
      "string"
    ],
    "hoverDimension": "auto",
    "legendColorizeRows": true,
    "legendHide": true,
    "legendOpacity": 0,
    "legendOrientationThreshold": 0,
    "note": "string",
    "position": "overlaid",
    "prefix": "string",
    "queries": [
      {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      }
    ],
    "shadeBelow": true,
    "shape": "chronograf-v2",
    "showNoteWhenEmpty": true,
    "staticLegend": {
      "colorizeRows": true,
      "heightRatio": 0,
      "hide": true,
      "opacity": 0,
      "orientationThreshold": 0,
      "valueAxis": "string",
      "widthRatio": 0
    },
    "suffix": "string",
    "timeFormat": "string",
    "type": "line-plus-single-stat",
    "xColumn": "string",
    "xTickStart": 0,
    "xTickStep": 0,
    "xTotalTicks": 0,
    "yColumn": "string",
    "yTickStart": 0,
    "yTickStep": 0,
    "yTotalTicks": 0
  }
}
```

<h3 id="update-the-view-for-a-cell-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|dashboardID|path|string|true|The ID of the dashboard to update.|
|cellID|path|string|true|The ID of the cell to update.|
|body|body|[View](#schemaview)|true|none|
|» name|body|string|true|none|
|» properties|body|[ViewProperties](#schemaviewproperties)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "links": {
    "self": "string"
  },
  "name": "string",
  "properties": {
    "axes": {
      "x": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "y": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      }
    },
    "colors": [
      {
        "hex": "strings",
        "id": "string",
        "name": "string",
        "type": "min",
        "value": 0
      }
    ],
    "decimalPlaces": {
      "digits": 0,
      "isEnforced": true
    },
    "generateXAxisTicks": [
      "string"
    ],
    "generateYAxisTicks": [
      "string"
    ],
    "hoverDimension": "auto",
    "legendColorizeRows": true,
    "legendHide": true,
    "legendOpacity": 0,
    "legendOrientationThreshold": 0,
    "note": "string",
    "position": "overlaid",
    "prefix": "string",
    "queries": [
      {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      }
    ],
    "shadeBelow": true,
    "shape": "chronograf-v2",
    "showNoteWhenEmpty": true,
    "staticLegend": {
      "colorizeRows": true,
      "heightRatio": 0,
      "hide": true,
      "opacity": 0,
      "orientationThreshold": 0,
      "valueAxis": "string",
      "widthRatio": 0
    },
    "suffix": "string",
    "timeFormat": "string",
    "type": "line-plus-single-stat",
    "xColumn": "string",
    "xTickStart": 0,
    "xTickStep": 0,
    "xTotalTicks": 0,
    "yColumn": "string",
    "yTickStart": 0,
    "yTickStep": 0,
    "yTotalTicks": 0
  }
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-the-view-for-a-cell-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated cell view|[View](#schemaview)|
|404|Not Found|Cell or dashboard not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-dbrps">DBRPs</h1>

## List all database retention policy mappings

<a id="opIdGetDBRPs"></a>

> Code samples

```bash
curl 'https://example.com/dbrps?orgID=string' \
  -H 'Accept: application/json'
```

`GET /dbrps`

<h3 id="list-all-database-retention-policy-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|query|string|true|Specifies the organization ID to filter on|
|id|query|string|false|Specifies the mapping ID to filter on|
|bucketID|query|string|false|Specifies the bucket ID to filter on|
|default|query|boolean|false|Specifies filtering on default|
|db|query|string|false|Specifies the database to filter on|
|rp|query|string|false|Specifies the retention policy to filter on|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "bucketID": "string",
      "database": "string",
      "default": true,
      "id": "string",
      "links": {
        "next": "http://example.com",
        "prev": "http://example.com",
        "self": "http://example.com"
      },
      "org": "string",
      "orgID": "string",
      "retention_policy": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-database-retention-policy-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all database retention policy mappings|[DBRPs](#schemadbrps)|
|400|Bad Request|if any of the parameter passed is invalid|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a database retention policy mapping

<a id="opIdPostDBRP"></a>

> Code samples

```bash
curl https://example.com/dbrps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bucketID": "string",
    "database": "string",
    "default": true,
    "links": {},
    "org": "string",
    "orgID": "string",
    "retention_policy": "string"
  }'
```

`POST /dbrps`

> Body parameter

```json
{
  "bucketID": "string",
  "database": "string",
  "default": true,
  "links": {},
  "org": "string",
  "orgID": "string",
  "retention_policy": "string"
}
```

<h3 id="add-a-database-retention-policy-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[DBRP](#schemadbrp)|true|The database retention policy mapping to add|
|» bucketID|body|string|false|the bucket ID used as target for the translation.|
|» database|body|string|false|InfluxDB v1 database|
|» default|body|boolean|false|Specify if this mapping represents the default retention policy for the database specificed.|
|» links|body|[Links](#schemalinks)|false|none|
|» org|body|string|false|the organization that owns this mapping.|
|» orgID|body|string|false|the organization ID that owns this mapping.|
|» retention_policy|body|string|false|InfluxDB v1 retention policy|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "bucketID": "string",
  "database": "string",
  "default": true,
  "id": "string",
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "org": "string",
  "orgID": "string",
  "retention_policy": "string"
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-database-retention-policy-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Database retention policy mapping created|[DBRP](#schemadbrp)|
|400|Bad Request|if any of the IDs in the mapping is invalid|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a database retention policy mapping

<a id="opIdGetDBRPsID"></a>

> Code samples

```bash
curl 'https://example.com/dbrps/string?orgID=string' \
  -H 'Accept: application/json'
```

`GET /dbrps/{dbrpID}`

<h3 id="retrieve-a-database-retention-policy-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|query|string|true|Specifies the organization ID of the mapping|
|dbrpID|path|string|true|The database retention policy mapping ID|

> Example responses

> 200 Response

```json
{
  "bucketID": "string",
  "database": "string",
  "default": true,
  "id": "string",
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "org": "string",
  "orgID": "string",
  "retention_policy": "string"
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-database-retention-policy-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The database retention policy requested|[DBRP](#schemadbrp)|
|400|Bad Request|if any of the IDs passed is invalid|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a database retention policy

<a id="opIdDeleteDBRPID"></a>

> Code samples

```bash
curl 'https://example.com/dbrps/string?orgID=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dbrps/{dbrpID}`

<h3 id="delete-a-database-retention-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|query|string|true|Specifies the organization ID of the mapping|
|dbrpID|path|string|true|The database retention policy mapping|

> Example responses

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-database-retention-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|400|Bad Request|if any of the IDs passed is invalid|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a database retention policy mapping

<a id="opIdPatchDBRPID"></a>

> Code samples

```bash
curl 'https://example.com/dbrps/string?orgID=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "database": "string",
    "default": true,
    "links": {},
    "retention_policy": "string"
  }'
```

`PATCH /dbrps/{dbrpID}`

> Body parameter

```json
{
  "database": "string",
  "default": true,
  "links": {},
  "retention_policy": "string"
}
```

<h3 id="update-a-database-retention-policy-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|query|string|true|Specifies the organization ID of the mapping|
|dbrpID|path|string|true|The database retention policy mapping.|
|body|body|[DBRPUpdate](#schemadbrpupdate)|true|Database retention policy update to apply|
|» database|body|string|false|InfluxDB v1 database|
|» default|body|boolean|false|none|
|» links|body|[Links](#schemalinks)|false|none|
|» retention_policy|body|string|false|InfluxDB v1 retention policy|

> Example responses

> 200 Response

```json
{
  "bucketID": "string",
  "database": "string",
  "default": true,
  "id": "string",
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "org": "string",
  "orgID": "string",
  "retention_policy": "string"
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-database-retention-policy-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated mapping|[DBRP](#schemadbrp)|
|400|Bad Request|if any of the IDs passed is invalid|[Error](#schemaerror)|
|404|Not Found|The mapping was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-delete">Delete</h1>

## Delete time series data from InfluxDB

<a id="opIdPostDelete"></a>

> Code samples

```bash
curl https://example.com/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "predicate": "tag1=\"value1\" and (tag2=\"value2\" and tag3!=\"value3\")",
    "start": "1970-01-01T00:00:00Z",
    "stop": "1970-01-01T00:00:00Z"
  }'
```

`POST /delete`

> Body parameter

```json
{
  "predicate": "tag1=\"value1\" and (tag2=\"value2\" and tag3!=\"value3\")",
  "start": "1970-01-01T00:00:00Z",
  "stop": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-time-series-data-from-influxdb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|org|query|string|false|Specifies the organization to delete data from.|
|bucket|query|string|false|Specifies the bucket to delete data from.|
|orgID|query|string|false|Specifies the organization ID of the resource.|
|bucketID|query|string|false|Specifies the bucket ID to delete data from.|
|body|body|[DeletePredicateRequest](#schemadeletepredicaterequest)|true|Predicate delete request|
|» predicate|body|string|false|InfluxQL-like delete statement|
|» start|body|string(date-time)|true|RFC3339Nano|
|» stop|body|string(date-time)|true|RFC3339Nano|

> Example responses

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 403 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-time-series-data-from-influxdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|delete has been accepted|None|
|400|Bad Request|Invalid request.|[Error](#schemaerror)|
|403|Forbidden|no token was sent or does not have sufficient permissions.|[Error](#schemaerror)|
|404|Not Found|the bucket or organization is not found.|[Error](#schemaerror)|
|default|Default|internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-templates">Templates</h1>

## List all templates

<a id="opIdGetDocumentsTemplates"></a>

> Code samples

```bash
curl https://example.com/documents/templates \
  -H 'Accept: application/json'
```

`GET /documents/templates`

<h3 id="list-all-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|org|query|string|false|Specifies the name of the organization of the template.|
|orgID|query|string|false|Specifies the organization ID of the template.|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "self": "/api/v2/documents/templates/1"
      },
      "meta": {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "name": "string",
        "templateID": "string",
        "type": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "version": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of template documents|[Documents](#schemadocuments)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a template

<a id="opIdPostDocumentsTemplates"></a>

> Code samples

```bash
curl https://example.com/documents/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": {},
    "labels": [
      "string"
    ],
    "meta": {
      "description": "string",
      "name": "string",
      "templateID": "string",
      "type": "string",
      "version": "string"
    },
    "org": "string",
    "orgID": "string"
  }'
```

`POST /documents/templates`

> Body parameter

```json
{
  "content": {},
  "labels": [
    "string"
  ],
  "meta": {
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "version": "string"
  },
  "org": "string",
  "orgID": "string"
}
```

<h3 id="create-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[DocumentCreate](#schemadocumentcreate)|true|Template that will be created|
|» content|body|object|true|none|
|» labels|body|[string]|false|An array of label IDs to be added as labels to the document.|
|» meta|body|[DocumentMeta](#schemadocumentmeta)|true|none|
|» org|body|string|false|The organization Name. Specify either `orgID` or `org`.|
|» orgID|body|string|false|The organization Name. Specify either `orgID` or `org`.|

> Example responses

> 201 Response

```json
{
  "content": {},
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "self": "/api/v2/documents/templates/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Template created|[Document](#schemadocument)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a template

<a id="opIdGetDocumentsTemplatesID"></a>

> Code samples

```bash
curl https://example.com/documents/templates/string \
  -H 'Accept: application/json'
```

`GET /documents/templates/{templateID}`

<h3 id="retrieve-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|templateID|path|string|true|The template ID.|

> Example responses

> 200 Response

```json
{
  "content": {},
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "self": "/api/v2/documents/templates/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The template requested|[Document](#schemadocument)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a template

<a id="opIdPutDocumentsTemplatesID"></a>

> Code samples

```bash
curl https://example.com/documents/templates/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": {},
    "meta": {
      "description": "string",
      "name": "string",
      "templateID": "string",
      "type": "string",
      "version": "string"
    }
  }'
```

`PUT /documents/templates/{templateID}`

> Body parameter

```json
{
  "content": {},
  "meta": {
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "version": "string"
  }
}
```

<h3 id="update-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|templateID|path|string|true|The template ID.|
|body|body|[DocumentUpdate](#schemadocumentupdate)|true|Template that will be updated|
|» content|body|object|false|none|
|» meta|body|[DocumentMeta](#schemadocumentmeta)|false|none|

> Example responses

> 200 Response

```json
{
  "content": {},
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "self": "/api/v2/documents/templates/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The newly updated template|[Document](#schemadocument)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a template

<a id="opIdDeleteDocumentsTemplatesID"></a>

> Code samples

```bash
curl https://example.com/documents/templates/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /documents/templates/{templateID}`

<h3 id="delete-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|templateID|path|string|true|The template ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a template

<a id="opIdGetDocumentsTemplatesIDLabels"></a>

> Code samples

```bash
curl https://example.com/documents/templates/string/labels \
  -H 'Accept: application/json'
```

`GET /documents/templates/{templateID}/labels`

<h3 id="list-all-labels-for-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|templateID|path|string|true|The template ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a template|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a template

<a id="opIdPostDocumentsTemplatesIDLabels"></a>

> Code samples

```bash
curl https://example.com/documents/templates/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /documents/templates/{templateID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|templateID|path|string|true|The template ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The label added to the template|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a template

<a id="opIdDeleteDocumentsTemplatesIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/documents/templates/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /documents/templates/{templateID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|templateID|path|string|true|The template ID.|
|labelID|path|string|true|The label ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Template not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-users">Users</h1>

## Return the feature flags for the currently authenticated user

<a id="opIdGetFlags"></a>

> Code samples

```bash
curl https://example.com/flags \
  -H 'Accept: application/json'
```

`GET /flags`

<h3 id="return-the-feature-flags-for-the-currently-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="return-the-feature-flags-for-the-currently-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Feature flags for the currently authenticated user|[Flags](#schemaflags)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the currently authenticated user

<a id="opIdGetMe"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json'
```

`GET /me`

<h3 id="retrieve-the-currently-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-the-currently-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The currently authenticated user.|[UserResponse](#schemauserresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a password

<a id="opIdPutMePassword"></a>

> Code samples

```bash
curl https://example.com/me/password \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "password": "string"
  }'
```

`PUT /me/password`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="update-a-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[PasswordResetBody](#schemapasswordresetbody)|true|New password|
|» password|body|string|true|none|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Password successfully updated|None|
|default|Default|Unsuccessful authentication|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## List all users

<a id="opIdGetUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json'
```

`GET /users`

<h3 id="list-all-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|after|query|string|false|The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.<br>|
|name|query|string|false|none|
|id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of users|[Users](#schemausers)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a user

<a id="opIdPostUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "oauthID": "string",
    "status": "active"
  }'
```

`POST /users`

> Body parameter

```json
{
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[User](#schemauser)|true|User to create|
|» name|body|string|true|none|
|» oauthID|body|string|false|none|
|» status|body|string|false|If inactive the user is inactive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User created|[UserResponse](#schemauserresponse)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a user

<a id="opIdGetUsersID"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json'
```

`GET /users/{userID}`

<h3 id="retrieve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The user ID.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User details|[UserResponse](#schemauserresponse)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user

<a id="opIdDeleteUsersID"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /users/{userID}`

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the user to delete.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User deleted|None|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user

<a id="opIdPatchUsersID"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "oauthID": "string",
    "status": "active"
  }'
```

`PATCH /users/{userID}`

> Body parameter

```json
{
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the user to update.|
|body|body|[User](#schemauser)|true|User update to apply|
|» name|body|string|true|none|
|» oauthID|body|string|false|none|
|» status|body|string|false|If inactive the user is inactive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User updated|[UserResponse](#schemauserresponse)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a password

<a id="opIdPostUsersIDPassword"></a>

> Code samples

```bash
curl https://example.com/users/string/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "password": "string"
  }'
```

`POST /users/{userID}/password`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="update-a-password-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The user ID.|
|body|body|[PasswordResetBody](#schemapasswordresetbody)|true|New password|
|» password|body|string|true|none|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-password-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Password successfully updated|None|
|default|Default|Unsuccessful authentication|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="influx-oss-api-service-health">Health</h1>

## Get the health of an instance

<a id="opIdGetHealth"></a>

> Code samples

```bash
curl https://example.com/health \
  -H 'Accept: application/json'
```

`GET /health`

<h3 id="get-the-health-of-an-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 200 Response

```json
{
  "checks": [
    {}
  ],
  "commit": "string",
  "message": "string",
  "name": "string",
  "status": "pass",
  "version": "string"
}
```

> 503 Response

```json
{
  "checks": [
    {}
  ],
  "commit": "string",
  "message": "string",
  "name": "string",
  "status": "pass",
  "version": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="get-the-health-of-an-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The instance is healthy|[HealthCheck](#schemahealthcheck)|
|503|Service Unavailable|The instance is unhealthy|[HealthCheck](#schemahealthcheck)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-labels">Labels</h1>

## List all labels

<a id="opIdGetLabels"></a>

> Code samples

```bash
curl https://example.com/labels \
  -H 'Accept: application/json'
```

`GET /labels`

<h3 id="list-all-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|query|string|false|The organization ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of labels|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a label

<a id="opIdPostLabels"></a>

> Code samples

```bash
curl https://example.com/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  }'
```

`POST /labels`

> Body parameter

```json
{
  "name": "string",
  "orgID": "string",
  "properties": {
    "color": "ffb3b3",
    "description": "this is a description"
  }
}
```

<h3 id="create-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LabelCreateRequest](#schemalabelcreaterequest)|true|Label to create|
|» name|body|string|true|none|
|» orgID|body|string|true|none|
|» properties|body|object|false|Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Added label|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a label

<a id="opIdGetLabelsID"></a>

> Code samples

```bash
curl https://example.com/labels/string \
  -H 'Accept: application/json'
```

`GET /labels/{labelID}`

<h3 id="retrieve-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|labelID|path|string|true|The ID of the label to update.|

> Example responses

> 200 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A label|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label

<a id="opIdDeleteLabelsID"></a>

> Code samples

```bash
curl https://example.com/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /labels/{labelID}`

<h3 id="delete-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|labelID|path|string|true|The ID of the label to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Label not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a label

<a id="opIdPatchLabelsID"></a>

> Code samples

```bash
curl https://example.com/labels/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  }'
```

`PATCH /labels/{labelID}`

> Body parameter

```json
{
  "name": "string",
  "properties": {
    "color": "ffb3b3",
    "description": "this is a description"
  }
}
```

<h3 id="update-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|labelID|path|string|true|The ID of the label to update.|
|body|body|[LabelUpdate](#schemalabelupdate)|true|Label update|
|» name|body|string|false|none|
|» properties|body|object|false|Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated label|[LabelResponse](#schemalabelresponse)|
|404|Not Found|Label not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-notificationendpoints">NotificationEndpoints</h1>

## List all notification endpoints

<a id="opIdGetNotificationEndpoints"></a>

> Code samples

```bash
curl 'https://example.com/notificationEndpoints?orgID=string' \
  -H 'Accept: application/json'
```

`GET /notificationEndpoints`

<h3 id="list-all-notification-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|orgID|query|string|true|Only show notification endpoints that belong to specific organization ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "notificationEndpoints": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "labels": "/api/v2/notificationEndpoints/1/labels",
        "members": "/api/v2/notificationEndpoints/1/members",
        "owners": "/api/v2/notificationEndpoints/1/owners",
        "self": "/api/v2/notificationEndpoints/1"
      },
      "name": "string",
      "orgID": "string",
      "status": "active",
      "type": "slack",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userID": "string",
      "token": "string",
      "url": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-notification-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of notification endpoints|[NotificationEndpoints](#schemanotificationendpoints)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a notification endpoint

<a id="opIdCreateNotificationEndpoint"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "id": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "name": "string",
    "orgID": "string",
    "status": "active",
    "type": "slack",
    "userID": "string",
    "token": "string",
    "url": "string"
  }'
```

`POST /notificationEndpoints`

> Body parameter

```json
{
  "description": "string",
  "id": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

<h3 id="add-a-notification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PostNotificationEndpoint](#schemapostnotificationendpoint)|true|Notification endpoint to create|
|» *oneOf*|body|[SlackNotificationEndpoint](#schemaslacknotificationendpoint)|false|none|
|» *oneOf*|body|[PagerDutyNotificationEndpoint](#schemapagerdutynotificationendpoint)|false|none|
|» *oneOf*|body|[HTTPNotificationEndpoint](#schemahttpnotificationendpoint)|false|none|
|» *oneOf*|body|[TelegramNotificationEndpoint](#schematelegramnotificationendpoint)|false|none|

> Example responses

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-notification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Notification endpoint created|[NotificationEndpoint](#schemanotificationendpoint)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a notification endpoint

<a id="opIdGetNotificationEndpointsID"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints/string \
  -H 'Accept: application/json'
```

`GET /notificationEndpoints/{endpointID}`

<h3 id="retrieve-a-notification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|endpointID|path|string|true|The notification endpoint ID.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-notification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The notification endpoint requested|[NotificationEndpoint](#schemanotificationendpoint)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a notification endpoint

<a id="opIdPutNotificationEndpointsID"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "id": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "name": "string",
    "orgID": "string",
    "status": "active",
    "type": "slack",
    "userID": "string",
    "token": "string",
    "url": "string"
  }'
```

`PUT /notificationEndpoints/{endpointID}`

> Body parameter

```json
{
  "description": "string",
  "id": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

<h3 id="update-a-notification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|endpointID|path|string|true|The notification endpoint ID.|
|body|body|[NotificationEndpoint](#schemanotificationendpoint)|true|A new notification endpoint to replace the existing endpoint with|
|» *oneOf*|body|[SlackNotificationEndpoint](#schemaslacknotificationendpoint)|false|none|
|» *oneOf*|body|[PagerDutyNotificationEndpoint](#schemapagerdutynotificationendpoint)|false|none|
|» *oneOf*|body|[HTTPNotificationEndpoint](#schemahttpnotificationendpoint)|false|none|
|» *oneOf*|body|[TelegramNotificationEndpoint](#schematelegramnotificationendpoint)|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-notification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated notification endpoint|[NotificationEndpoint](#schemanotificationendpoint)|
|404|Not Found|The notification endpoint was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a notification endpoint

<a id="opIdDeleteNotificationEndpointsID"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /notificationEndpoints/{endpointID}`

<h3 id="delete-a-notification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|endpointID|path|string|true|The notification endpoint ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-notification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|The endpoint was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a notification endpoint

<a id="opIdPatchNotificationEndpointsID"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "status": "active"
  }'
```

`PATCH /notificationEndpoints/{endpointID}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "status": "active"
}
```

<h3 id="update-a-notification-endpoint-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|endpointID|path|string|true|The notification endpoint ID.|
|body|body|[NotificationEndpointUpdate](#schemanotificationendpointupdate)|true|Check update to apply|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-notification-endpoint-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated notification endpoint|[NotificationEndpoint](#schemanotificationendpoint)|
|404|Not Found|The notification endpoint was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a notification endpoint

<a id="opIdGetNotificationEndpointsIDLabels"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints/string/labels \
  -H 'Accept: application/json'
```

`GET /notificationEndpoints/{endpointID}/labels`

<h3 id="list-all-labels-for-a-notification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|endpointID|path|string|true|The notification endpoint ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-notification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a notification endpoint|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a notification endpoint

<a id="opIdPostNotificationEndpointIDLabels"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /notificationEndpoints/{endpointID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-notification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|endpointID|path|string|true|The notification endpoint ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-notification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The label was added to the notification endpoint|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a notification endpoint

<a id="opIdDeleteNotificationEndpointsIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/notificationEndpoints/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /notificationEndpoints/{endpointID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-notification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|endpointID|path|string|true|The notification endpoint ID.|
|labelID|path|string|true|The ID of the label to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-notification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Endpoint or label not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-notificationrules">NotificationRules</h1>

## List all notification rules

<a id="opIdGetNotificationRules"></a>

> Code samples

```bash
curl 'https://example.com/notificationRules?orgID=string' \
  -H 'Accept: application/json'
```

`GET /notificationRules`

<h3 id="list-all-notification-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|orgID|query|string|true|Only show notification rules that belong to a specific organization ID.|
|checkID|query|string|false|Only show notifications that belong to the specific check ID.|
|tag|query|string|false|Only return notification rules that "would match" statuses which contain the tag key value pairs provided.|

> Example responses

> 200 Response

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "notificationRules": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "endpointID": "string",
      "every": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "lastRunError": "string",
      "lastRunStatus": "failed",
      "latestCompleted": "1970-01-01T00:00:00Z",
      "limit": 0,
      "limitEvery": 0,
      "links": {
        "labels": "/api/v2/notificationRules/1/labels",
        "members": "/api/v2/notificationRules/1/members",
        "owners": "/api/v2/notificationRules/1/owners",
        "query": "/api/v2/notificationRules/1/query",
        "self": "/api/v2/notificationRules/1"
      },
      "name": "string",
      "offset": "string",
      "orgID": "string",
      "ownerID": "string",
      "runbookLink": "string",
      "sleepUntil": "string",
      "status": "active",
      "statusRules": [
        {
          "count": 0,
          "currentLevel": "UNKNOWN",
          "period": "string",
          "previousLevel": "UNKNOWN"
        }
      ],
      "tagRules": [
        {
          "key": "string",
          "operator": "equal",
          "value": "string"
        }
      ],
      "taskID": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "channel": "string",
      "messageTemplate": "string",
      "type": "slack"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-notification-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of notification rules|[NotificationRules](#schemanotificationrules)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a notification rule

<a id="opIdCreateNotificationRule"></a>

> Code samples

```bash
curl https://example.com/notificationRules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "endpointID": "string",
    "every": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "limit": 0,
    "limitEvery": 0,
    "name": "string",
    "offset": "string",
    "orgID": "string",
    "runbookLink": "string",
    "sleepUntil": "string",
    "status": "active",
    "statusRules": [
      {
        "count": 0,
        "currentLevel": "UNKNOWN",
        "period": "string",
        "previousLevel": "UNKNOWN"
      }
    ],
    "tagRules": [
      {
        "key": "string",
        "operator": "equal",
        "value": "string"
      }
    ],
    "taskID": "string",
    "channel": "string",
    "messageTemplate": "string",
    "type": "slack"
  }'
```

`POST /notificationRules`

> Body parameter

```json
{
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "limit": 0,
  "limitEvery": 0,
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

<h3 id="add-a-notification-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PostNotificationRule](#schemapostnotificationrule)|true|Notification rule to create|
|» *oneOf*|body|[SlackNotificationRule](#schemaslacknotificationrule)|false|none|
|» *oneOf*|body|[SMTPNotificationRule](#schemasmtpnotificationrule)|false|none|
|» *oneOf*|body|[PagerDutyNotificationRule](#schemapagerdutynotificationrule)|false|none|
|» *oneOf*|body|[HTTPNotificationRule](#schemahttpnotificationrule)|false|none|
|» *oneOf*|body|[TelegramNotificationRule](#schematelegramnotificationrule)|false|none|

> Example responses

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-notification-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Notification rule created|[NotificationRule](#schemanotificationrule)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a notification rule

<a id="opIdGetNotificationRulesID"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string \
  -H 'Accept: application/json'
```

`GET /notificationRules/{ruleID}`

<h3 id="retrieve-a-notification-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-notification-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The notification rule requested|[NotificationRule](#schemanotificationrule)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a notification rule

<a id="opIdPutNotificationRulesID"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "endpointID": "string",
    "every": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "limit": 0,
    "limitEvery": 0,
    "name": "string",
    "offset": "string",
    "orgID": "string",
    "runbookLink": "string",
    "sleepUntil": "string",
    "status": "active",
    "statusRules": [
      {
        "count": 0,
        "currentLevel": "UNKNOWN",
        "period": "string",
        "previousLevel": "UNKNOWN"
      }
    ],
    "tagRules": [
      {
        "key": "string",
        "operator": "equal",
        "value": "string"
      }
    ],
    "taskID": "string",
    "channel": "string",
    "messageTemplate": "string",
    "type": "slack"
  }'
```

`PUT /notificationRules/{ruleID}`

> Body parameter

```json
{
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "limit": 0,
  "limitEvery": 0,
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

<h3 id="update-a-notification-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|
|body|body|[NotificationRule](#schemanotificationrule)|true|Notification rule update to apply|
|» *oneOf*|body|[SlackNotificationRule](#schemaslacknotificationrule)|false|none|
|» *oneOf*|body|[SMTPNotificationRule](#schemasmtpnotificationrule)|false|none|
|» *oneOf*|body|[PagerDutyNotificationRule](#schemapagerdutynotificationrule)|false|none|
|» *oneOf*|body|[HTTPNotificationRule](#schemahttpnotificationrule)|false|none|
|» *oneOf*|body|[TelegramNotificationRule](#schematelegramnotificationrule)|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-notification-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated notification rule|[NotificationRule](#schemanotificationrule)|
|404|Not Found|The notification rule was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a notification rule

<a id="opIdDeleteNotificationRulesID"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /notificationRules/{ruleID}`

<h3 id="delete-a-notification-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-notification-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|The check was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a notification rule

<a id="opIdPatchNotificationRulesID"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "status": "active"
  }'
```

`PATCH /notificationRules/{ruleID}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "status": "active"
}
```

<h3 id="update-a-notification-rule-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|
|body|body|[NotificationRuleUpdate](#schemanotificationruleupdate)|true|Notification rule update to apply|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-notification-rule-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated notification rule|[NotificationRule](#schemanotificationrule)|
|404|Not Found|The notification rule was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a notification rule

<a id="opIdGetNotificationRulesIDLabels"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string/labels \
  -H 'Accept: application/json'
```

`GET /notificationRules/{ruleID}/labels`

<h3 id="list-all-labels-for-a-notification-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-notification-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a notification rule|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a notification rule

<a id="opIdPostNotificationRuleIDLabels"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /notificationRules/{ruleID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-notification-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-notification-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The label was added to the notification rule|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete label from a notification rule

<a id="opIdDeleteNotificationRulesIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /notificationRules/{ruleID}/labels/{labelID}`

<h3 id="delete-label-from-a-notification-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|
|labelID|path|string|true|The ID of the label to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-label-from-a-notification-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Rule or label not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-rules">Rules</h1>

## Retrieve a notification rule query

<a id="opIdGetNotificationRulesIDQuery"></a>

> Code samples

```bash
curl https://example.com/notificationRules/string/query \
  -H 'Accept: application/json'
```

`GET /notificationRules/{ruleID}/query`

<h3 id="retrieve-a-notification-rule-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|ruleID|path|string|true|The notification rule ID.|

> Example responses

> 200 Response

```json
{
  "flux": "string"
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-notification-rule-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The notification rule query requested|[FluxResponse](#schemafluxresponse)|
|400|Bad Request|Invalid request|[Error](#schemaerror)|
|404|Not Found|Notification rule not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-organizations">Organizations</h1>

## List all organizations

<a id="opIdGetOrgs"></a>

> Code samples

```bash
curl https://example.com/orgs \
  -H 'Accept: application/json'
```

`GET /orgs`

<h3 id="list-all-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|descending|query|boolean|false|none|
|org|query|string|false|Filter organizations to a specific organization name.|
|orgID|query|string|false|Filter organizations to a specific organization ID.|
|userID|query|string|false|Filter organizations to a specific user ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "orgs": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "links": {
        "buckets": "/api/v2/buckets?org=myorg",
        "dashboards": "/api/v2/dashboards?org=myorg",
        "labels": "/api/v2/orgs/1/labels",
        "members": "/api/v2/orgs/1/members",
        "owners": "/api/v2/orgs/1/owners",
        "secrets": "/api/v2/orgs/1/secrets",
        "self": "/api/v2/orgs/1",
        "tasks": "/api/v2/tasks?org=myorg"
      },
      "name": "string",
      "status": "active",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of organizations|[Organizations](#schemaorganizations)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an organization

<a id="opIdPostOrgs"></a>

> Code samples

```bash
curl https://example.com/orgs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /orgs`

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="create-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[PostOrganizationRequest](#schemapostorganizationrequest)|true|Organization to create|
|» description|body|string|false|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "links": {
    "buckets": "/api/v2/buckets?org=myorg",
    "dashboards": "/api/v2/dashboards?org=myorg",
    "labels": "/api/v2/orgs/1/labels",
    "members": "/api/v2/orgs/1/members",
    "owners": "/api/v2/orgs/1/owners",
    "secrets": "/api/v2/orgs/1/secrets",
    "self": "/api/v2/orgs/1",
    "tasks": "/api/v2/tasks?org=myorg"
  },
  "name": "string",
  "status": "active",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Organization created|[Organization](#schemaorganization)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an organization

<a id="opIdGetOrgsID"></a>

> Code samples

```bash
curl https://example.com/orgs/string \
  -H 'Accept: application/json'
```

`GET /orgs/{orgID}`

<h3 id="retrieve-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The ID of the organization to get.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "links": {
    "buckets": "/api/v2/buckets?org=myorg",
    "dashboards": "/api/v2/dashboards?org=myorg",
    "labels": "/api/v2/orgs/1/labels",
    "members": "/api/v2/orgs/1/members",
    "owners": "/api/v2/orgs/1/owners",
    "secrets": "/api/v2/orgs/1/secrets",
    "self": "/api/v2/orgs/1",
    "tasks": "/api/v2/tasks?org=myorg"
  },
  "name": "string",
  "status": "active",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organization details|[Organization](#schemaorganization)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an organization

<a id="opIdDeleteOrgsID"></a>

> Code samples

```bash
curl https://example.com/orgs/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /orgs/{orgID}`

<h3 id="delete-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The ID of the organization to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Organization not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an organization

<a id="opIdPatchOrgsID"></a>

> Code samples

```bash
curl https://example.com/orgs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`PATCH /orgs/{orgID}`

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="update-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The ID of the organization to get.|
|body|body|[PatchOrganizationRequest](#schemapatchorganizationrequest)|true|Organization update to apply|
|» description|body|string|false|New description to set on the organization|
|» name|body|string|false|New name to set on the organization|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "links": {
    "buckets": "/api/v2/buckets?org=myorg",
    "dashboards": "/api/v2/dashboards?org=myorg",
    "labels": "/api/v2/orgs/1/labels",
    "members": "/api/v2/orgs/1/members",
    "owners": "/api/v2/orgs/1/owners",
    "secrets": "/api/v2/orgs/1/secrets",
    "self": "/api/v2/orgs/1",
    "tasks": "/api/v2/tasks?org=myorg"
  },
  "name": "string",
  "status": "active",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organization updated|[Organization](#schemaorganization)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all members of an organization

<a id="opIdGetOrgsIDMembers"></a>

> Code samples

```bash
curl https://example.com/orgs/string/members \
  -H 'Accept: application/json'
```

`GET /orgs/{orgID}/members`

<h3 id="list-all-members-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The organization ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "member"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-members-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of organization members|[ResourceMembers](#schemaresourcemembers)|
|404|Not Found|Organization not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a member to an organization

<a id="opIdPostOrgsIDMembers"></a>

> Code samples

```bash
curl https://example.com/orgs/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /orgs/{orgID}/members`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-a-member-to-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The organization ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as member|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "member"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-member-to-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Added to organization created|[ResourceMember](#schemaresourcemember)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a member from an organization

<a id="opIdDeleteOrgsIDMembersID"></a>

> Code samples

```bash
curl https://example.com/orgs/string/members/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /orgs/{orgID}/members/{userID}`

<h3 id="remove-a-member-from-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the member to remove.|
|orgID|path|string|true|The organization ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-a-member-from-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all owners of an organization

<a id="opIdGetOrgsIDOwners"></a>

> Code samples

```bash
curl https://example.com/orgs/string/owners \
  -H 'Accept: application/json'
```

`GET /orgs/{orgID}/owners`

<h3 id="list-all-owners-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The organization ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "owner"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-owners-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of organization owners|[ResourceOwners](#schemaresourceowners)|
|404|Not Found|Organization not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an owner to an organization

<a id="opIdPostOrgsIDOwners"></a>

> Code samples

```bash
curl https://example.com/orgs/string/owners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /orgs/{orgID}/owners`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-an-owner-to-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The organization ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as owner|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "owner"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-an-owner-to-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Organization owner added|[ResourceOwner](#schemaresourceowner)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an owner from an organization

<a id="opIdDeleteOrgsIDOwnersID"></a>

> Code samples

```bash
curl https://example.com/orgs/string/owners/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /orgs/{orgID}/owners/{userID}`

<h3 id="remove-an-owner-from-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the owner to remove.|
|orgID|path|string|true|The organization ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-an-owner-from-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Owner removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-secrets">Secrets</h1>

## List all secret keys for an organization

<a id="opIdGetOrgsIDSecrets"></a>

> Code samples

```bash
curl https://example.com/orgs/string/secrets \
  -H 'Accept: application/json'
```

`GET /orgs/{orgID}/secrets`

<h3 id="list-all-secret-keys-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The organization ID.|

> Example responses

> 200 Response

```json
{
  "secrets": [
    "string"
  ],
  "links": {
    "org": "string",
    "self": "string"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-secret-keys-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all secret keys|[SecretKeysResponse](#schemasecretkeysresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update secrets in an organization

<a id="opIdPatchOrgsIDSecrets"></a>

> Code samples

```bash
curl https://example.com/orgs/string/secrets \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "apikey": "abc123xyz"
  }'
```

`PATCH /orgs/{orgID}/secrets`

> Body parameter

```json
{
  "apikey": "abc123xyz"
}
```

<h3 id="update-secrets-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The organization ID.|
|body|body|[Secrets](#schemasecrets)|true|Secret key value pairs to update/add|
|» **additionalProperties**|body|string|false|none|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-secrets-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Keys successfully patched|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete secrets from an organization

<a id="opIdPostOrgsIDSecrets"></a>

> Code samples

```bash
curl https://example.com/orgs/string/secrets/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "secrets": [
      "string"
    ]
  }'
```

`POST /orgs/{orgID}/secrets/delete`

> Body parameter

```json
{
  "secrets": [
    "string"
  ]
}
```

<h3 id="delete-secrets-from-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|path|string|true|The organization ID.|
|body|body|[SecretKeys](#schemasecretkeys)|true|Secret key to delete|
|» secrets|body|[string]|false|none|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-secrets-from-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Keys successfully patched|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-query">Query</h1>

## Query InfluxDB

<a id="opIdPostQuery"></a>

> Code samples

```bash
curl https://example.com/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dialect": {
      "annotations": [
        "group"
      ],
      "commentPrefix": "#",
      "dateTimeFormat": "RFC3339",
      "delimiter": ",",
      "header": true
    },
    "extern": {
      "body": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "imports": [
        {
          "as": {
            "name": "string",
            "type": "string"
          },
          "path": {
            "type": "string",
            "value": "string"
          },
          "type": "string"
        }
      ],
      "name": "string",
      "package": {
        "name": {
          "name": "string",
          "type": "string"
        },
        "type": "string"
      },
      "type": "string"
    },
    "now": "1970-01-01T00:00:00Z",
    "params": {},
    "query": "string",
    "type": "flux"
  }'
```

`POST /query`

> Body parameter

```json
{
  "dialect": {
    "annotations": [
      "group"
    ],
    "commentPrefix": "#",
    "dateTimeFormat": "RFC3339",
    "delimiter": ",",
    "header": true
  },
  "extern": {
    "body": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "imports": [
      {
        "as": {
          "name": "string",
          "type": "string"
        },
        "path": {
          "type": "string",
          "value": "string"
        },
        "type": "string"
      }
    ],
    "name": "string",
    "package": {
      "name": {
        "name": "string",
        "type": "string"
      },
      "type": "string"
    },
    "type": "string"
  },
  "now": "1970-01-01T00:00:00Z",
  "params": {},
  "query": "string",
  "type": "flux"
}
```

<h3 id="query-influxdb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|Accept-Encoding|header|string|false|The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand.|
|Content-Type|header|string|false|none|
|org|query|string|false|Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence.|
|orgID|query|string|false|Specifies the ID of the organization executing the query. If both `orgID` and `org` are specified, `org` takes precedence.|
|body|body|[Query](#schemaquery) \| [InfluxQLQuery](#schemainfluxqlquery)|false|Flux query or specification to execute|
|» *oneOf*|body|[Query](#schemaquery)|false|Query influx using the Flux language|
|» *oneOf*|body|[InfluxQLQuery](#schemainfluxqlquery)|false|Query influx using the InfluxQL language|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|gzip|
|Accept-Encoding|identity|
|Content-Type|application/json|
|Content-Type|application/vnd.flux|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="query-influxdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query results|Inline|
|429|Too Many Requests|Token is temporarily over quota. The Retry-After header describes when to try the read again.|None|
|default|Default|Error processing query|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Encoding|string||The Content-Encoding entity header is used to compress the media-type.  When present, its value indicates which encodings were applied to the entity-body|
|200|Trace-Id|string||The Trace-Id header reports the request's trace ID, if one was generated.|
|429|Retry-After|integer|int32|A non-negative decimal integer indicating the seconds to delay after the response is received.|

<aside class="success">
This operation does not require authentication
</aside>

## Analyze an InfluxQL or Flux query

<a id="opIdPostQueryAnalyze"></a>

> Code samples

```bash
curl https://example.com/query/analyze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dialect": {
      "annotations": [
        "group"
      ],
      "commentPrefix": "#",
      "dateTimeFormat": "RFC3339",
      "delimiter": ",",
      "header": true
    },
    "extern": {
      "body": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "imports": [
        {
          "as": {
            "name": "string",
            "type": "string"
          },
          "path": {
            "type": "string",
            "value": "string"
          },
          "type": "string"
        }
      ],
      "name": "string",
      "package": {
        "name": {
          "name": "string",
          "type": "string"
        },
        "type": "string"
      },
      "type": "string"
    },
    "now": "1970-01-01T00:00:00Z",
    "params": {},
    "query": "string",
    "type": "flux"
  }'
```

`POST /query/analyze`

> Body parameter

```json
{
  "dialect": {
    "annotations": [
      "group"
    ],
    "commentPrefix": "#",
    "dateTimeFormat": "RFC3339",
    "delimiter": ",",
    "header": true
  },
  "extern": {
    "body": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "imports": [
      {
        "as": {
          "name": "string",
          "type": "string"
        },
        "path": {
          "type": "string",
          "value": "string"
        },
        "type": "string"
      }
    ],
    "name": "string",
    "package": {
      "name": {
        "name": "string",
        "type": "string"
      },
      "type": "string"
    },
    "type": "string"
  },
  "now": "1970-01-01T00:00:00Z",
  "params": {},
  "query": "string",
  "type": "flux"
}
```

<h3 id="analyze-an-influxql-or-flux-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|Content-Type|header|string|false|none|
|body|body|[Query](#schemaquery)|false|Flux or InfluxQL query to analyze|
|» dialect|body|[Dialect](#schemadialect)|false|Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions|
|» extern|body|[File](#schemafile)|false|Represents a source from a single file|
|» now|body|string(date-time)|false|Specifies the time that should be reported as "now" in the query. Default is the server's now time.|
|» params|body|object|false|Enumeration of key/value pairs that respresent parameters to be injected into query (can only specify either this field or extern and not both)<br>|
|» query|body|string|true|Query script to execute.|
|» type|body|string|false|The type of query. Must be "flux".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|» type|flux|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "character": 0,
      "column": 0,
      "line": 0,
      "message": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="analyze-an-influxql-or-flux-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query analyze results. Errors will be empty if the query is valid.|[AnalyzeQueryResponse](#schemaanalyzequeryresponse)|
|default|Default|Internal server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Influx-Error|string||Error string describing the problem|
|default|X-Influx-Reference|integer||Reference code unique to the error type|

<aside class="success">
This operation does not require authentication
</aside>

## Generate an Abstract Syntax Tree (AST) from a query

<a id="opIdPostQueryAst"></a>

> Code samples

```bash
curl https://example.com/query/ast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string"
  }'
```

`POST /query/ast`

Analyzes flux query and generates a query specification.

> Body parameter

```json
{
  "query": "string"
}
```

<h3 id="generate-an-abstract-syntax-tree-ast-from-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|Content-Type|header|string|false|none|
|body|body|[LanguageRequest](#schemalanguagerequest)|false|Analyzed Flux query to generate abstract syntax tree.|
|» query|body|string|true|Flux query script to be analyzed|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|

> Example responses

> 200 Response

```json
{
  "ast": {
    "files": [
      {
        "body": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "imports": [
          {
            "as": {
              "name": "string",
              "type": "string"
            },
            "path": {
              "type": "string",
              "value": "string"
            },
            "type": "string"
          }
        ],
        "name": "string",
        "package": {
          "name": {
            "name": "string",
            "type": "string"
          },
          "type": "string"
        },
        "type": "string"
      }
    ],
    "package": "string",
    "path": "string",
    "type": "string"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="generate-an-abstract-syntax-tree-ast-from-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Abstract syntax tree of the flux query.|[ASTResponse](#schemaastresponse)|
|default|Default|Any response other than 200 is an internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve query suggestions

<a id="opIdGetQuerySuggestions"></a>

> Code samples

```bash
curl https://example.com/query/suggestions \
  -H 'Accept: application/json'
```

`GET /query/suggestions`

<h3 id="retrieve-query-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 200 Response

```json
{
  "funcs": [
    {
      "name": "string",
      "params": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-query-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Suggestions for next functions in call chain|[FluxSuggestions](#schemafluxsuggestions)|
|default|Default|Any response other than 200 is an internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve query suggestions for a branching suggestion

<a id="opIdGetQuerySuggestionsName"></a>

> Code samples

```bash
curl https://example.com/query/suggestions/string \
  -H 'Accept: application/json'
```

`GET /query/suggestions/{name}`

<h3 id="retrieve-query-suggestions-for-a-branching-suggestion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|name|path|string|true|The name of the branching suggestion.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-query-suggestions-for-a-branching-suggestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Suggestions for next functions in call chain|[FluxSuggestion](#schemafluxsuggestion)|
|default|Default|Any response other than 200 is an internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-ready">Ready</h1>

## Get the readiness of an instance at startup

<a id="opIdGetReady"></a>

> Code samples

```bash
curl https://example.com/ready \
  -H 'Accept: application/json'
```

`GET /ready`

<h3 id="get-the-readiness-of-an-instance-at-startup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 200 Response

```json
{
  "started": "2019-03-13T10:09:33.891196-04:00",
  "status": "ready",
  "up": "14m45.911966424s"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="get-the-readiness-of-an-instance-at-startup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The instance is ready|[Ready](#schemaready)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-scraper-targets">Scraper Targets</h1>

## List all scraper targets

<a id="opIdGetScrapers"></a>

> Code samples

```bash
curl https://example.com/scrapers \
  -H 'Accept: application/json'
```

`GET /scrapers`

<h3 id="list-all-scraper-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|name|query|string|false|Specifies the name of the scraper target.|
|id|query|[string]|false|List of scraper target IDs to return. If both `id` and `owner` are specified, only `id` is used.|
|orgID|query|string|false|Specifies the organization ID of the scraper target.|
|org|query|string|false|Specifies the organization name of the scraper target.|

> Example responses

> 200 Response

```json
{
  "configurations": [
    {
      "allowInsecure": false,
      "bucketID": "string",
      "name": "string",
      "orgID": "string",
      "type": "prometheus",
      "url": "http://localhost:9090/metrics",
      "bucket": "string",
      "id": "string",
      "links": {
        "bucket": "/api/v2/buckets/1",
        "members": "/api/v2/scrapers/1/members",
        "organization": "/api/v2/orgs/1",
        "owners": "/api/v2/scrapers/1/owners",
        "self": "/api/v2/scrapers/1"
      },
      "org": "string"
    }
  ]
}
```

<h3 id="list-all-scraper-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All scraper targets|[ScraperTargetResponses](#schemascrapertargetresponses)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a scraper target

<a id="opIdPostScrapers"></a>

> Code samples

```bash
curl https://example.com/scrapers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allowInsecure": false,
    "bucketID": "string",
    "name": "string",
    "orgID": "string",
    "type": "prometheus",
    "url": "http://localhost:9090/metrics"
  }'
```

`POST /scrapers`

> Body parameter

```json
{
  "allowInsecure": false,
  "bucketID": "string",
  "name": "string",
  "orgID": "string",
  "type": "prometheus",
  "url": "http://localhost:9090/metrics"
}
```

<h3 id="create-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[ScraperTargetRequest](#schemascrapertargetrequest)|true|Scraper target to create|
|» allowInsecure|body|boolean|false|Skip TLS verification on endpoint.|
|» bucketID|body|string|false|The ID of the bucket to write to.|
|» name|body|string|false|The name of the scraper target.|
|» orgID|body|string|false|The organization ID.|
|» type|body|string|false|The type of the metrics to be parsed.|
|» url|body|string|false|The URL of the metrics endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|prometheus|

> Example responses

> 201 Response

```json
{
  "allowInsecure": false,
  "bucketID": "string",
  "name": "string",
  "orgID": "string",
  "type": "prometheus",
  "url": "http://localhost:9090/metrics",
  "bucket": "string",
  "id": "string",
  "links": {
    "bucket": "/api/v2/buckets/1",
    "members": "/api/v2/scrapers/1/members",
    "organization": "/api/v2/orgs/1",
    "owners": "/api/v2/scrapers/1/owners",
    "self": "/api/v2/scrapers/1"
  },
  "org": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Scraper target created|[ScraperTargetResponse](#schemascrapertargetresponse)|
|default|Default|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a scraper target

<a id="opIdGetScrapersID"></a>

> Code samples

```bash
curl https://example.com/scrapers/string \
  -H 'Accept: application/json'
```

`GET /scrapers/{scraperTargetID}`

<h3 id="retrieve-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The identifier of the scraper target.|

> Example responses

> 200 Response

```json
{
  "allowInsecure": false,
  "bucketID": "string",
  "name": "string",
  "orgID": "string",
  "type": "prometheus",
  "url": "http://localhost:9090/metrics",
  "bucket": "string",
  "id": "string",
  "links": {
    "bucket": "/api/v2/buckets/1",
    "members": "/api/v2/scrapers/1/members",
    "organization": "/api/v2/orgs/1",
    "owners": "/api/v2/scrapers/1/owners",
    "self": "/api/v2/scrapers/1"
  },
  "org": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The scraper target|[ScraperTargetResponse](#schemascrapertargetresponse)|
|default|Default|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a scraper target

<a id="opIdDeleteScrapersID"></a>

> Code samples

```bash
curl https://example.com/scrapers/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /scrapers/{scraperTargetID}`

<h3 id="delete-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The identifier of the scraper target.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Scraper target deleted|None|
|default|Default|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a scraper target

<a id="opIdPatchScrapersID"></a>

> Code samples

```bash
curl https://example.com/scrapers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allowInsecure": false,
    "bucketID": "string",
    "name": "string",
    "orgID": "string",
    "type": "prometheus",
    "url": "http://localhost:9090/metrics"
  }'
```

`PATCH /scrapers/{scraperTargetID}`

> Body parameter

```json
{
  "allowInsecure": false,
  "bucketID": "string",
  "name": "string",
  "orgID": "string",
  "type": "prometheus",
  "url": "http://localhost:9090/metrics"
}
```

<h3 id="update-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The identifier of the scraper target.|
|body|body|[ScraperTargetRequest](#schemascrapertargetrequest)|true|Scraper target update to apply|
|» allowInsecure|body|boolean|false|Skip TLS verification on endpoint.|
|» bucketID|body|string|false|The ID of the bucket to write to.|
|» name|body|string|false|The name of the scraper target.|
|» orgID|body|string|false|The organization ID.|
|» type|body|string|false|The type of the metrics to be parsed.|
|» url|body|string|false|The URL of the metrics endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|prometheus|

> Example responses

> 200 Response

```json
{
  "allowInsecure": false,
  "bucketID": "string",
  "name": "string",
  "orgID": "string",
  "type": "prometheus",
  "url": "http://localhost:9090/metrics",
  "bucket": "string",
  "id": "string",
  "links": {
    "bucket": "/api/v2/buckets/1",
    "members": "/api/v2/scrapers/1/members",
    "organization": "/api/v2/orgs/1",
    "owners": "/api/v2/scrapers/1/owners",
    "self": "/api/v2/scrapers/1"
  },
  "org": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scraper target updated|[ScraperTargetResponse](#schemascrapertargetresponse)|
|default|Default|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a scraper target

<a id="opIdGetScrapersIDLabels"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/labels \
  -H 'Accept: application/json'
```

`GET /scrapers/{scraperTargetID}/labels`

<h3 id="list-all-labels-for-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The scraper target ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of labels for a scraper target.|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a scraper target

<a id="opIdPostScrapersIDLabels"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /scrapers/{scraperTargetID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The scraper target ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The newly added label|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a scraper target

<a id="opIdDeleteScrapersIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /scrapers/{scraperTargetID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The scraper target ID.|
|labelID|path|string|true|The label ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Scraper target not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all users with member privileges for a scraper target

<a id="opIdGetScrapersIDMembers"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/members \
  -H 'Accept: application/json'
```

`GET /scrapers/{scraperTargetID}/members`

<h3 id="list-all-users-with-member-privileges-for-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The scraper target ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "member"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-users-with-member-privileges-for-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of scraper target members|[ResourceMembers](#schemaresourcemembers)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a member to a scraper target

<a id="opIdPostScrapersIDMembers"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /scrapers/{scraperTargetID}/members`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-a-member-to-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The scraper target ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as member|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "member"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-member-to-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Member added to scraper targets|[ResourceMember](#schemaresourcemember)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a member from a scraper target

<a id="opIdDeleteScrapersIDMembersID"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/members/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /scrapers/{scraperTargetID}/members/{userID}`

<h3 id="remove-a-member-from-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of member to remove.|
|scraperTargetID|path|string|true|The scraper target ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-a-member-from-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all owners of a scraper target

<a id="opIdGetScrapersIDOwners"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/owners \
  -H 'Accept: application/json'
```

`GET /scrapers/{scraperTargetID}/owners`

<h3 id="list-all-owners-of-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The scraper target ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "owner"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-owners-of-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of scraper target owners|[ResourceOwners](#schemaresourceowners)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an owner to a scraper target

<a id="opIdPostScrapersIDOwners"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/owners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /scrapers/{scraperTargetID}/owners`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-an-owner-to-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|scraperTargetID|path|string|true|The scraper target ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as owner|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "owner"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-an-owner-to-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Scraper target owner added|[ResourceOwner](#schemaresourceowner)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an owner from a scraper target

<a id="opIdDeleteScrapersIDOwnersID"></a>

> Code samples

```bash
curl https://example.com/scrapers/string/owners/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /scrapers/{scraperTargetID}/owners/{userID}`

<h3 id="remove-an-owner-from-a-scraper-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of owner to remove.|
|scraperTargetID|path|string|true|The scraper target ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-an-owner-from-a-scraper-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Owner removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-setup">Setup</h1>

## Check if database has default user, org, bucket

<a id="opIdGetSetup"></a>

> Code samples

```bash
curl https://example.com/setup \
  -H 'Accept: application/json'
```

`GET /setup`

Returns `true` if no default user, organization, or bucket has been created.

<h3 id="check-if-database-has-default-user-org-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 200 Response

```json
{
  "allowed": true
}
```

<h3 id="check-if-database-has-default-user-org-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|allowed true or false|[IsOnboarding](#schemaisonboarding)|

<aside class="success">
This operation does not require authentication
</aside>

## Set up initial user, org and bucket

<a id="opIdPostSetup"></a>

> Code samples

```bash
curl https://example.com/setup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bucket": "string",
    "org": "string",
    "password": "string",
    "retentionPeriodHrs": 0,
    "retentionPeriodSeconds": 0,
    "token": "string",
    "username": "string"
  }'
```

`POST /setup`

Post an onboarding request to set up initial user, org and bucket.

> Body parameter

```json
{
  "bucket": "string",
  "org": "string",
  "password": "string",
  "retentionPeriodHrs": 0,
  "retentionPeriodSeconds": 0,
  "token": "string",
  "username": "string"
}
```

<h3 id="set-up-initial-user-org-and-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[OnboardingRequest](#schemaonboardingrequest)|true|Source to create|
|» bucket|body|string|true|none|
|» org|body|string|true|none|
|» password|body|string|false|none|
|» retentionPeriodHrs|body|integer|false|**Deprecated.** Retention period *in nanoseconds* for the new bucket. This key's name has been misleading since OSS 2.0 GA, please transition to use `retentionPeriodSeconds`<br>|
|» retentionPeriodSeconds|body|integer(int64)|false|none|
|» token|body|string|false|Authentication token to set on the initial user. If not specified, the server will generate a token.<br>|
|» username|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "auth": {
    "description": "string",
    "status": "active",
    "createdAt": "1970-01-01T00:00:00Z",
    "id": "string",
    "links": {
      "self": "/api/v2/authorizations/1",
      "user": "/api/v2/users/12"
    },
    "org": "string",
    "orgID": "string",
    "permissions": [
      {
        "action": "read",
        "resource": {
          "id": "string",
          "name": "string",
          "org": "string",
          "orgID": "string",
          "type": "authorizations"
        }
      }
    ],
    "token": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "user": "string",
    "userID": "string"
  },
  "bucket": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "labels": [
      {
        "id": "string",
        "name": "string",
        "orgID": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "links": {
      "labels": "/api/v2/buckets/1/labels",
      "members": "/api/v2/buckets/1/members",
      "org": "/api/v2/orgs/2",
      "owners": "/api/v2/buckets/1/owners",
      "self": "/api/v2/buckets/1",
      "write": "/api/v2/write?org=2&amp;bucket=1"
    },
    "name": "string",
    "orgID": "string",
    "retentionRules": [
      {
        "everySeconds": 86400,
        "shardGroupDurationSeconds": 0,
        "type": "expire"
      }
    ],
    "rp": "string",
    "schemaType": "implicit",
    "type": "user",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "org": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "links": {
      "buckets": "/api/v2/buckets?org=myorg",
      "dashboards": "/api/v2/dashboards?org=myorg",
      "labels": "/api/v2/orgs/1/labels",
      "members": "/api/v2/orgs/1/members",
      "owners": "/api/v2/orgs/1/owners",
      "secrets": "/api/v2/orgs/1/secrets",
      "self": "/api/v2/orgs/1",
      "tasks": "/api/v2/tasks?org=myorg"
    },
    "name": "string",
    "status": "active",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "user": {
    "id": "string",
    "links": {
      "self": "/api/v2/users/1"
    },
    "name": "string",
    "oauthID": "string",
    "status": "active"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="set-up-initial-user-org-and-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created default user, bucket, org|[OnboardingResponse](#schemaonboardingresponse)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-default">Default</h1>

## Exchange basic auth credentials for session

<a id="opIdPostSignin"></a>

> Code samples

```bash
curl https://example.com/signin \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /signin`

<h3 id="exchange-basic-auth-credentials-for-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 401 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 403 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="exchange-basic-auth-credentials-for-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully authenticated|None|
|401|Unauthorized|Unauthorized access|[Error](#schemaerror)|
|403|Forbidden|user account is disabled|[Error](#schemaerror)|
|default|Default|Unsuccessful authentication|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Expire the current session

<a id="opIdPostSignout"></a>

> Code samples

```bash
curl https://example.com/signout \
  -X POST \
  -H 'Accept: application/json'
```

`POST /signout`

<h3 id="expire-the-current-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|

> Example responses

> 401 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="expire-the-current-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Session successfully expired|None|
|401|Unauthorized|Unauthorized access|[Error](#schemaerror)|
|default|Default|Unsuccessful session expiry|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-sources">Sources</h1>

## List all sources

<a id="opIdGetSources"></a>

> Code samples

```bash
curl https://example.com/sources \
  -H 'Accept: application/json'
```

`GET /sources`

<h3 id="list-all-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|org|query|string|false|The name of the organization.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "sources": [
    {
      "default": true,
      "defaultRP": "string",
      "id": "string",
      "insecureSkipVerify": true,
      "languages": [
        "flux"
      ],
      "links": {
        "buckets": "string",
        "health": "string",
        "query": "string",
        "self": "string"
      },
      "metaUrl": "http://example.com",
      "name": "string",
      "orgID": "string",
      "password": "string",
      "sharedSecret": "string",
      "telegraf": "string",
      "token": "string",
      "type": "v1",
      "url": "http://example.com",
      "username": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of sources|[Sources](#schemasources)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a source

<a id="opIdPostSources"></a>

> Code samples

```bash
curl https://example.com/sources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "default": true,
    "defaultRP": "string",
    "id": "string",
    "insecureSkipVerify": true,
    "links": {
      "buckets": "string",
      "health": "string",
      "query": "string",
      "self": "string"
    },
    "metaUrl": "http://example.com",
    "name": "string",
    "orgID": "string",
    "password": "string",
    "sharedSecret": "string",
    "telegraf": "string",
    "token": "string",
    "type": "v1",
    "url": "http://example.com",
    "username": "string"
  }'
```

`POST /sources`

> Body parameter

```json
{
  "default": true,
  "defaultRP": "string",
  "id": "string",
  "insecureSkipVerify": true,
  "links": {
    "buckets": "string",
    "health": "string",
    "query": "string",
    "self": "string"
  },
  "metaUrl": "http://example.com",
  "name": "string",
  "orgID": "string",
  "password": "string",
  "sharedSecret": "string",
  "telegraf": "string",
  "token": "string",
  "type": "v1",
  "url": "http://example.com",
  "username": "string"
}
```

<h3 id="create-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[Source](#schemasource)|true|Source to create|
|» default|body|boolean|false|none|
|» defaultRP|body|string|false|none|
|» id|body|string|false|none|
|» insecureSkipVerify|body|boolean|false|none|
|» links|body|object|false|none|
|» » buckets|body|string|false|none|
|» » health|body|string|false|none|
|» » query|body|string|false|none|
|» » self|body|string|false|none|
|» metaUrl|body|string(uri)|false|none|
|» name|body|string|false|none|
|» orgID|body|string|false|none|
|» password|body|string|false|none|
|» sharedSecret|body|string|false|none|
|» telegraf|body|string|false|none|
|» token|body|string|false|none|
|» type|body|string|false|none|
|» url|body|string(uri)|false|none|
|» username|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|v1|
|» type|v2|
|» type|self|

> Example responses

> 201 Response

```json
{
  "default": true,
  "defaultRP": "string",
  "id": "string",
  "insecureSkipVerify": true,
  "languages": [
    "flux"
  ],
  "links": {
    "buckets": "string",
    "health": "string",
    "query": "string",
    "self": "string"
  },
  "metaUrl": "http://example.com",
  "name": "string",
  "orgID": "string",
  "password": "string",
  "sharedSecret": "string",
  "telegraf": "string",
  "token": "string",
  "type": "v1",
  "url": "http://example.com",
  "username": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created Source|[Source](#schemasource)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a source

<a id="opIdGetSourcesID"></a>

> Code samples

```bash
curl https://example.com/sources/string \
  -H 'Accept: application/json'
```

`GET /sources/{sourceID}`

<h3 id="retrieve-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|sourceID|path|string|true|The source ID.|

> Example responses

> 200 Response

```json
{
  "default": true,
  "defaultRP": "string",
  "id": "string",
  "insecureSkipVerify": true,
  "languages": [
    "flux"
  ],
  "links": {
    "buckets": "string",
    "health": "string",
    "query": "string",
    "self": "string"
  },
  "metaUrl": "http://example.com",
  "name": "string",
  "orgID": "string",
  "password": "string",
  "sharedSecret": "string",
  "telegraf": "string",
  "token": "string",
  "type": "v1",
  "url": "http://example.com",
  "username": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A source|[Source](#schemasource)|
|404|Not Found|Source not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a source

<a id="opIdDeleteSourcesID"></a>

> Code samples

```bash
curl https://example.com/sources/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /sources/{sourceID}`

<h3 id="delete-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|sourceID|path|string|true|The source ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|View not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Source

<a id="opIdPatchSourcesID"></a>

> Code samples

```bash
curl https://example.com/sources/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "default": true,
    "defaultRP": "string",
    "id": "string",
    "insecureSkipVerify": true,
    "links": {
      "buckets": "string",
      "health": "string",
      "query": "string",
      "self": "string"
    },
    "metaUrl": "http://example.com",
    "name": "string",
    "orgID": "string",
    "password": "string",
    "sharedSecret": "string",
    "telegraf": "string",
    "token": "string",
    "type": "v1",
    "url": "http://example.com",
    "username": "string"
  }'
```

`PATCH /sources/{sourceID}`

> Body parameter

```json
{
  "default": true,
  "defaultRP": "string",
  "id": "string",
  "insecureSkipVerify": true,
  "links": {
    "buckets": "string",
    "health": "string",
    "query": "string",
    "self": "string"
  },
  "metaUrl": "http://example.com",
  "name": "string",
  "orgID": "string",
  "password": "string",
  "sharedSecret": "string",
  "telegraf": "string",
  "token": "string",
  "type": "v1",
  "url": "http://example.com",
  "username": "string"
}
```

<h3 id="update-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|sourceID|path|string|true|The source ID.|
|body|body|[Source](#schemasource)|true|Source update|
|» default|body|boolean|false|none|
|» defaultRP|body|string|false|none|
|» id|body|string|false|none|
|» insecureSkipVerify|body|boolean|false|none|
|» links|body|object|false|none|
|» » buckets|body|string|false|none|
|» » health|body|string|false|none|
|» » query|body|string|false|none|
|» » self|body|string|false|none|
|» metaUrl|body|string(uri)|false|none|
|» name|body|string|false|none|
|» orgID|body|string|false|none|
|» password|body|string|false|none|
|» sharedSecret|body|string|false|none|
|» telegraf|body|string|false|none|
|» token|body|string|false|none|
|» type|body|string|false|none|
|» url|body|string(uri)|false|none|
|» username|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|v1|
|» type|v2|
|» type|self|

> Example responses

> 200 Response

```json
{
  "default": true,
  "defaultRP": "string",
  "id": "string",
  "insecureSkipVerify": true,
  "languages": [
    "flux"
  ],
  "links": {
    "buckets": "string",
    "health": "string",
    "query": "string",
    "self": "string"
  },
  "metaUrl": "http://example.com",
  "name": "string",
  "orgID": "string",
  "password": "string",
  "sharedSecret": "string",
  "telegraf": "string",
  "token": "string",
  "type": "v1",
  "url": "http://example.com",
  "username": "string"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created Source|[Source](#schemasource)|
|404|Not Found|Source not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get buckets in a source

<a id="opIdGetSourcesIDBuckets"></a>

> Code samples

```bash
curl https://example.com/sources/string/buckets \
  -H 'Accept: application/json'
```

`GET /sources/{sourceID}/buckets`

<h3 id="get-buckets-in-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|sourceID|path|string|true|The source ID.|
|org|query|string|false|The name of the organization.|

> Example responses

> 200 Response

```json
{
  "buckets": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "labels": "/api/v2/buckets/1/labels",
        "members": "/api/v2/buckets/1/members",
        "org": "/api/v2/orgs/2",
        "owners": "/api/v2/buckets/1/owners",
        "self": "/api/v2/buckets/1",
        "write": "/api/v2/write?org=2&amp;bucket=1"
      },
      "name": "string",
      "orgID": "string",
      "retentionRules": [
        {
          "everySeconds": 86400,
          "shardGroupDurationSeconds": 0,
          "type": "expire"
        }
      ],
      "rp": "string",
      "schemaType": "implicit",
      "type": "user",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="get-buckets-in-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A source|[Buckets](#schemabuckets)|
|404|Not Found|Source not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the health of a source

<a id="opIdGetSourcesIDHealth"></a>

> Code samples

```bash
curl https://example.com/sources/string/health \
  -H 'Accept: application/json'
```

`GET /sources/{sourceID}/health`

<h3 id="get-the-health-of-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|sourceID|path|string|true|The source ID.|

> Example responses

> 200 Response

```json
{
  "checks": [
    {}
  ],
  "commit": "string",
  "message": "string",
  "name": "string",
  "status": "pass",
  "version": "string"
}
```

> 503 Response

```json
{
  "checks": [
    {}
  ],
  "commit": "string",
  "message": "string",
  "name": "string",
  "status": "pass",
  "version": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="get-the-health-of-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The source is healthy|[HealthCheck](#schemahealthcheck)|
|503|Service Unavailable|The source is not healthy|[HealthCheck](#schemahealthcheck)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-influxdb-templates">InfluxDB Templates</h1>

## List all installed InfluxDB templates

<a id="opIdListStacks"></a>

> Code samples

```bash
curl 'https://example.com/stacks?orgID=string' \
  -H 'Accept: application/json'
```

`GET /stacks`

<h3 id="list-all-installed-influxdb-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|query|string|true|The organization id of the stacks|
|name|query|string|false|A collection of names to filter the list by.|
|stackID|query|string|false|A collection of stackIDs to filter the list by.|

> Example responses

> 200 Response

```json
{
  "stacks": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "events": [
        {
          "description": "string",
          "eventType": "string",
          "name": "string",
          "resources": [
            {
              "apiVersion": "string",
              "associations": [
                {
                  "kind": "Bucket",
                  "metaName": "string"
                }
              ],
              "kind": "Bucket",
              "links": {
                "self": "string"
              },
              "resourceID": "string",
              "templateMetaName": "string"
            }
          ],
          "sources": [
            "string"
          ],
          "updatedAt": "1970-01-01T00:00:00Z",
          "urls": [
            "string"
          ]
        }
      ],
      "id": "string",
      "orgID": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-installed-influxdb-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Influx stacks found|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="list-all-installed-influxdb-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stacks|[[Stack](#schemastack)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new stack

<a id="opIdCreateStack"></a>

> Code samples

```bash
curl https://example.com/stacks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "orgID": "string",
    "urls": [
      "string"
    ]
  }'
```

`POST /stacks`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "urls": [
    "string"
  ]
}
```

<h3 id="create-a-new-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Stack to create.|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» orgID|body|string|false|none|
|» urls|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "events": [
    {
      "description": "string",
      "eventType": "string",
      "name": "string",
      "resources": [
        {
          "apiVersion": "string",
          "associations": [
            {
              "kind": "Bucket",
              "metaName": "string"
            }
          ],
          "kind": "Bucket",
          "links": {
            "self": "string"
          },
          "resourceID": "string",
          "templateMetaName": "string"
        }
      ],
      "sources": [
        "string"
      ],
      "updatedAt": "1970-01-01T00:00:00Z",
      "urls": [
        "string"
      ]
    }
  ],
  "id": "string",
  "orgID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-new-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|InfluxDB Stack created|[Stack](#schemastack)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a stack

<a id="opIdReadStack"></a>

> Code samples

```bash
curl https://example.com/stacks/string \
  -H 'Accept: application/json'
```

`GET /stacks/{stack_id}`

<h3 id="retrieve-a-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stack_id|path|string|true|Theidentifier of the stack.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "events": [
    {
      "description": "string",
      "eventType": "string",
      "name": "string",
      "resources": [
        {
          "apiVersion": "string",
          "associations": [
            {
              "kind": "Bucket",
              "metaName": "string"
            }
          ],
          "kind": "Bucket",
          "links": {
            "self": "string"
          },
          "resourceID": "string",
          "templateMetaName": "string"
        }
      ],
      "sources": [
        "string"
      ],
      "updatedAt": "1970-01-01T00:00:00Z",
      "urls": [
        "string"
      ]
    }
  ],
  "id": "string",
  "orgID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The InfluxDB stack|[Stack](#schemastack)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a stack and associated resources

<a id="opIdDeleteStack"></a>

> Code samples

```bash
curl 'https://example.com/stacks/string?orgID=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /stacks/{stack_id}`

<h3 id="delete-a-stack-and-associated-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stack_id|path|string|true|Theidentifier of the stack.|
|orgID|query|string|true|The identifier of the organization.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-stack-and-associated-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The stack and its associated resources are deleted|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an InfluxDB Stack

<a id="opIdUpdateStack"></a>

> Code samples

```bash
curl https://example.com/stacks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "additionalResources": [
      {
        "kind": "string",
        "resourceID": "string",
        "templateMetaName": "string"
      }
    ],
    "description": "string",
    "name": "string",
    "templateURLs": [
      "string"
    ]
  }'
```

`PATCH /stacks/{stack_id}`

> Body parameter

```json
{
  "additionalResources": [
    {
      "kind": "string",
      "resourceID": "string",
      "templateMetaName": "string"
    }
  ],
  "description": "string",
  "name": "string",
  "templateURLs": [
    "string"
  ]
}
```

<h3 id="update-an-influxdb-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stack_id|path|string|true|Theidentifier of the stack.|
|body|body|object|true|Influx stack to update.|
|» additionalResources|body|[object]|false|none|
|» » kind|body|string|true|none|
|» » resourceID|body|string|true|none|
|» » templateMetaName|body|string|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» templateURLs|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "events": [
    {
      "description": "string",
      "eventType": "string",
      "name": "string",
      "resources": [
        {
          "apiVersion": "string",
          "associations": [
            {
              "kind": "Bucket",
              "metaName": "string"
            }
          ],
          "kind": "Bucket",
          "links": {
            "self": "string"
          },
          "resourceID": "string",
          "templateMetaName": "string"
        }
      ],
      "sources": [
        "string"
      ],
      "updatedAt": "1970-01-01T00:00:00Z",
      "urls": [
        "string"
      ]
    }
  ],
  "id": "string",
  "orgID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-an-influxdb-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Influx stack updated|[Stack](#schemastack)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Uninstall an InfluxDB Stack

<a id="opIdUninstallStack"></a>

> Code samples

```bash
curl https://example.com/stacks/string/uninstall \
  -X POST \
  -H 'Accept: application/json'
```

`POST /stacks/{stack_id}/uninstall`

<h3 id="uninstall-an-influxdb-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stack_id|path|string|true|The stack id|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "events": [
    {
      "description": "string",
      "eventType": "string",
      "name": "string",
      "resources": [
        {
          "apiVersion": "string",
          "associations": [
            {
              "kind": "Bucket",
              "metaName": "string"
            }
          ],
          "kind": "Bucket",
          "links": {
            "self": "string"
          },
          "resourceID": "string",
          "templateMetaName": "string"
        }
      ],
      "sources": [
        "string"
      ],
      "updatedAt": "1970-01-01T00:00:00Z",
      "urls": [
        "string"
      ]
    }
  ],
  "id": "string",
  "orgID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="uninstall-an-influxdb-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Influx stack uninstalled|[Stack](#schemastack)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Apply or dry-run an InfluxDB Template

<a id="opIdApplyTemplate"></a>

> Code samples

```bash
curl https://example.com/templates/apply \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "actions": [
      {
        "action": "skipKind",
        "properties": {
          "kind": "Bucket"
        }
      }
    ],
    "dryRun": true,
    "envRefs": {
      "property1": "string",
      "property2": "string"
    },
    "orgID": "string",
    "remotes": [
      {
        "contentType": "string",
        "url": "string"
      }
    ],
    "secrets": {
      "property1": "string",
      "property2": "string"
    },
    "stackID": "string",
    "template": {
      "contentType": "string",
      "contents": [
        {
          "apiVersion": "string",
          "kind": "Bucket",
          "meta": {
            "name": "string"
          },
          "spec": {}
        }
      ],
      "sources": [
        "string"
      ]
    },
    "templates": [
      {
        "contentType": "string",
        "contents": [
          {
            "apiVersion": "string",
            "kind": "Bucket",
            "meta": {
              "name": "string"
            },
            "spec": {}
          }
        ],
        "sources": [
          "string"
        ]
      }
    ]
  }'
```

`POST /templates/apply`

> Body parameter

```json
{
  "actions": [
    {
      "action": "skipKind",
      "properties": {
        "kind": "Bucket"
      }
    }
  ],
  "dryRun": true,
  "envRefs": {
    "property1": "string",
    "property2": "string"
  },
  "orgID": "string",
  "remotes": [
    {
      "contentType": "string",
      "url": "string"
    }
  ],
  "secrets": {
    "property1": "string",
    "property2": "string"
  },
  "stackID": "string",
  "template": {
    "contentType": "string",
    "contents": [
      {
        "apiVersion": "string",
        "kind": "Bucket",
        "meta": {
          "name": "string"
        },
        "spec": {}
      }
    ],
    "sources": [
      "string"
    ]
  },
  "templates": [
    {
      "contentType": "string",
      "contents": [
        {
          "apiVersion": "string",
          "kind": "Bucket",
          "meta": {
            "name": "string"
          },
          "spec": {}
        }
      ],
      "sources": [
        "string"
      ]
    }
  ]
}
```

<h3 id="apply-or-dry-run-an-influxdb-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplateApply](#schematemplateapply)|true|none|
|» actions|body|[object]|false|none|
|» » *oneOf*|body|object|false|none|
|» » action|body|string|false|none|
|» » properties|body|object|false|none|
|» » » kind|body|[TemplateKind](#schematemplatekind)|true|none|
|» » *oneOf*|body|object|false|none|
|» » action|body|string|false|none|
|» » properties|body|object|false|none|
|» » » kind|body|[TemplateKind](#schematemplatekind)|true|none|
|» » » resourceTemplateName|body|string|true|none|
|» dryRun|body|boolean|false|none|
|» envRefs|body|object|false|none|
|» » **additionalProperties**|body|string \| integer \| number \| boolean|false|none|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|integer|false|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» orgID|body|string|false|none|
|» remotes|body|[object]|false|none|
|» » contentType|body|string|false|none|
|» » url|body|string|true|none|
|» secrets|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» stackID|body|string|false|none|
|» template|body|object|false|none|
|» » contentType|body|string|false|none|
|» » contents|body|[Template](#schematemplate)|false|none|
|» » sources|body|[string]|false|none|
|» templates|body|[object]|false|none|
|» » contentType|body|string|false|none|
|» » contents|body|[Template](#schematemplate)|false|none|
|» » sources|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » action|skipKind|
|» » » kind|Bucket|
|» » » kind|Check|
|» » » kind|CheckDeadman|
|» » » kind|CheckThreshold|
|» » » kind|Dashboard|
|» » » kind|Label|
|» » » kind|NotificationEndpoint|
|» » » kind|NotificationEndpointHTTP|
|» » » kind|NotificationEndpointPagerDuty|
|» » » kind|NotificationEndpointSlack|
|» » » kind|NotificationRule|
|» » » kind|Task|
|» » » kind|Telegraf|
|» » » kind|Variable|
|» » action|skipResource|
|» » » kind|Bucket|
|» » » kind|Check|
|» » » kind|CheckDeadman|
|» » » kind|CheckThreshold|
|» » » kind|Dashboard|
|» » » kind|Label|
|» » » kind|NotificationEndpoint|
|» » » kind|NotificationEndpointHTTP|
|» » » kind|NotificationEndpointPagerDuty|
|» » » kind|NotificationEndpointSlack|
|» » » kind|NotificationRule|
|» » » kind|Task|
|» » » kind|Telegraf|
|» » » kind|Variable|

> Example responses

> 200 Response

```json
{
  "diff": {
    "buckets": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "description": "string",
          "name": "string",
          "retentionRules": [
            {
              "everySeconds": 86400,
              "shardGroupDurationSeconds": 0,
              "type": "expire"
            }
          ]
        },
        "old": {
          "description": "string",
          "name": "string",
          "retentionRules": [
            {
              "everySeconds": 86400,
              "shardGroupDurationSeconds": 0,
              "type": "expire"
            }
          ]
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "checks": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "lastRunError": "string",
          "lastRunStatus": "failed",
          "latestCompleted": "1970-01-01T00:00:00Z",
          "links": {
            "labels": "/api/v2/checks/1/labels",
            "members": "/api/v2/checks/1/members",
            "owners": "/api/v2/checks/1/owners",
            "query": "/api/v2/checks/1/query",
            "self": "/api/v2/checks/1"
          },
          "name": "string",
          "orgID": "string",
          "ownerID": "string",
          "query": {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          },
          "status": "active",
          "taskID": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "every": "string",
          "level": "UNKNOWN",
          "offset": "string",
          "reportZero": true,
          "staleTime": "string",
          "statusMessageTemplate": "string",
          "tags": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "timeSince": "string",
          "type": "deadman"
        },
        "old": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "lastRunError": "string",
          "lastRunStatus": "failed",
          "latestCompleted": "1970-01-01T00:00:00Z",
          "links": {
            "labels": "/api/v2/checks/1/labels",
            "members": "/api/v2/checks/1/members",
            "owners": "/api/v2/checks/1/owners",
            "query": "/api/v2/checks/1/query",
            "self": "/api/v2/checks/1"
          },
          "name": "string",
          "orgID": "string",
          "ownerID": "string",
          "query": {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          },
          "status": "active",
          "taskID": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "every": "string",
          "level": "UNKNOWN",
          "offset": "string",
          "reportZero": true,
          "staleTime": "string",
          "statusMessageTemplate": "string",
          "tags": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "timeSince": "string",
          "type": "deadman"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "dashboards": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "charts": [
            {
              "height": 0,
              "properties": {
                "axes": {
                  "x": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  },
                  "y": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  }
                },
                "colors": [
                  {
                    "hex": "strings",
                    "id": "string",
                    "name": "string",
                    "type": "min",
                    "value": 0
                  }
                ],
                "decimalPlaces": {
                  "digits": 0,
                  "isEnforced": true
                },
                "generateXAxisTicks": [
                  "string"
                ],
                "generateYAxisTicks": [
                  "string"
                ],
                "hoverDimension": "auto",
                "legendColorizeRows": true,
                "legendHide": true,
                "legendOpacity": 0,
                "legendOrientationThreshold": 0,
                "note": "string",
                "position": "overlaid",
                "prefix": "string",
                "queries": [
                  {
                    "builderConfig": {
                      "aggregateWindow": {
                        "fillValues": true,
                        "period": "string"
                      },
                      "buckets": [
                        "string"
                      ],
                      "functions": [
                        {
                          "name": "string"
                        }
                      ],
                      "tags": [
                        {
                          "aggregateFunctionType": "filter",
                          "key": "string",
                          "values": [
                            "string"
                          ]
                        }
                      ]
                    },
                    "editMode": "builder",
                    "name": "string",
                    "text": "string"
                  }
                ],
                "shadeBelow": true,
                "shape": "chronograf-v2",
                "showNoteWhenEmpty": true,
                "staticLegend": {
                  "colorizeRows": true,
                  "heightRatio": 0,
                  "hide": true,
                  "opacity": 0,
                  "orientationThreshold": 0,
                  "valueAxis": "string",
                  "widthRatio": 0
                },
                "suffix": "string",
                "timeFormat": "string",
                "type": "line-plus-single-stat",
                "xColumn": "string",
                "xTickStart": 0,
                "xTickStep": 0,
                "xTotalTicks": 0,
                "yColumn": "string",
                "yTickStart": 0,
                "yTickStep": 0,
                "yTotalTicks": 0
              },
              "width": 0,
              "xPos": 0,
              "yPos": 0
            }
          ],
          "description": "string",
          "name": "string"
        },
        "old": {
          "charts": [
            {
              "height": 0,
              "properties": {
                "axes": {
                  "x": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  },
                  "y": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  }
                },
                "colors": [
                  {
                    "hex": "strings",
                    "id": "string",
                    "name": "string",
                    "type": "min",
                    "value": 0
                  }
                ],
                "decimalPlaces": {
                  "digits": 0,
                  "isEnforced": true
                },
                "generateXAxisTicks": [
                  "string"
                ],
                "generateYAxisTicks": [
                  "string"
                ],
                "hoverDimension": "auto",
                "legendColorizeRows": true,
                "legendHide": true,
                "legendOpacity": 0,
                "legendOrientationThreshold": 0,
                "note": "string",
                "position": "overlaid",
                "prefix": "string",
                "queries": [
                  {
                    "builderConfig": {
                      "aggregateWindow": {
                        "fillValues": true,
                        "period": "string"
                      },
                      "buckets": [
                        "string"
                      ],
                      "functions": [
                        {
                          "name": "string"
                        }
                      ],
                      "tags": [
                        {
                          "aggregateFunctionType": "filter",
                          "key": "string",
                          "values": [
                            "string"
                          ]
                        }
                      ]
                    },
                    "editMode": "builder",
                    "name": "string",
                    "text": "string"
                  }
                ],
                "shadeBelow": true,
                "shape": "chronograf-v2",
                "showNoteWhenEmpty": true,
                "staticLegend": {
                  "colorizeRows": true,
                  "heightRatio": 0,
                  "hide": true,
                  "opacity": 0,
                  "orientationThreshold": 0,
                  "valueAxis": "string",
                  "widthRatio": 0
                },
                "suffix": "string",
                "timeFormat": "string",
                "type": "line-plus-single-stat",
                "xColumn": "string",
                "xTickStart": 0,
                "xTickStep": 0,
                "xTotalTicks": 0,
                "yColumn": "string",
                "yTickStart": 0,
                "yTickStep": 0,
                "yTotalTicks": 0
              },
              "width": 0,
              "xPos": 0,
              "yPos": 0
            }
          ],
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "labelMappings": [
      {
        "labelID": "string",
        "labelName": "string",
        "labelTemplateMetaName": "string",
        "resourceID": "string",
        "resourceName": "string",
        "resourceTemplateMetaName": "string",
        "resourceType": "string",
        "status": "string"
      }
    ],
    "labels": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "color": "string",
          "description": "string",
          "name": "string"
        },
        "old": {
          "color": "string",
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "notificationEndpoints": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "links": {
            "labels": "/api/v2/notificationEndpoints/1/labels",
            "members": "/api/v2/notificationEndpoints/1/members",
            "owners": "/api/v2/notificationEndpoints/1/owners",
            "self": "/api/v2/notificationEndpoints/1"
          },
          "name": "string",
          "orgID": "string",
          "status": "active",
          "type": "slack",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userID": "string",
          "token": "string",
          "url": "string"
        },
        "old": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "links": {
            "labels": "/api/v2/notificationEndpoints/1/labels",
            "members": "/api/v2/notificationEndpoints/1/members",
            "owners": "/api/v2/notificationEndpoints/1/owners",
            "self": "/api/v2/notificationEndpoints/1"
          },
          "name": "string",
          "orgID": "string",
          "status": "active",
          "type": "slack",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userID": "string",
          "token": "string",
          "url": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "notificationRules": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "description": "string",
          "endpointID": "string",
          "endpointName": "string",
          "endpointType": "string",
          "every": "string",
          "messageTemplate": "string",
          "name": "string",
          "offset": "string",
          "status": "string",
          "statusRules": [
            {
              "currentLevel": "string",
              "previousLevel": "string"
            }
          ],
          "tagRules": [
            {
              "key": "string",
              "operator": "string",
              "value": "string"
            }
          ]
        },
        "old": {
          "description": "string",
          "endpointID": "string",
          "endpointName": "string",
          "endpointType": "string",
          "every": "string",
          "messageTemplate": "string",
          "name": "string",
          "offset": "string",
          "status": "string",
          "statusRules": [
            {
              "currentLevel": "string",
              "previousLevel": "string"
            }
          ],
          "tagRules": [
            {
              "key": "string",
              "operator": "string",
              "value": "string"
            }
          ]
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "tasks": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "cron": "string",
          "description": "string",
          "every": "string",
          "name": "string",
          "offset": "string",
          "query": "string",
          "status": "string"
        },
        "old": {
          "cron": "string",
          "description": "string",
          "every": "string",
          "name": "string",
          "offset": "string",
          "query": "string",
          "status": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "telegrafConfigs": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "config": "string",
          "description": "string",
          "metadata": {
            "buckets": [
              "string"
            ]
          },
          "name": "string",
          "orgID": "string"
        },
        "old": {
          "config": "string",
          "description": "string",
          "metadata": {
            "buckets": [
              "string"
            ]
          },
          "name": "string",
          "orgID": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "variables": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "args": {
            "type": "query",
            "values": {
              "language": "string",
              "query": "string"
            }
          },
          "description": "string",
          "name": "string"
        },
        "old": {
          "args": {
            "type": "query",
            "values": {
              "language": "string",
              "query": "string"
            }
          },
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ]
  },
  "errors": [
    {
      "fields": [
        "string"
      ],
      "indexes": [
        0
      ],
      "kind": "Bucket",
      "reason": "string"
    }
  ],
  "sources": [
    "string"
  ],
  "stackID": "string",
  "summary": {
    "buckets": [
      {
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "retentionPeriod": 0,
        "templateMetaName": "string"
      }
    ],
    "checks": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "labels": [
          {
            "id": "string",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "ffb3b3",
              "description": "this is a description"
            }
          }
        ],
        "lastRunError": "string",
        "lastRunStatus": "failed",
        "latestCompleted": "1970-01-01T00:00:00Z",
        "links": {
          "labels": "/api/v2/checks/1/labels",
          "members": "/api/v2/checks/1/members",
          "owners": "/api/v2/checks/1/owners",
          "query": "/api/v2/checks/1/query",
          "self": "/api/v2/checks/1"
        },
        "name": "string",
        "orgID": "string",
        "ownerID": "string",
        "query": {
          "builderConfig": {
            "aggregateWindow": {
              "fillValues": true,
              "period": "string"
            },
            "buckets": [
              "string"
            ],
            "functions": [
              {
                "name": "string"
              }
            ],
            "tags": [
              {
                "aggregateFunctionType": "filter",
                "key": "string",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "editMode": "builder",
          "name": "string",
          "text": "string"
        },
        "status": "active",
        "taskID": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "every": "string",
        "level": "UNKNOWN",
        "offset": "string",
        "reportZero": true,
        "staleTime": "string",
        "statusMessageTemplate": "string",
        "tags": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "timeSince": "string",
        "type": "deadman",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "dashboards": [
      {
        "charts": [
          {
            "height": 0,
            "properties": {
              "axes": {
                "x": {
                  "base": "",
                  "bounds": [
                    "string"
                  ],
                  "label": "string",
                  "prefix": "string",
                  "scale": "log",
                  "suffix": "string"
                },
                "y": {
                  "base": "",
                  "bounds": [
                    "string"
                  ],
                  "label": "string",
                  "prefix": "string",
                  "scale": "log",
                  "suffix": "string"
                }
              },
              "colors": [
                {
                  "hex": "strings",
                  "id": "string",
                  "name": "string",
                  "type": "min",
                  "value": 0
                }
              ],
              "decimalPlaces": {
                "digits": 0,
                "isEnforced": true
              },
              "generateXAxisTicks": [
                "string"
              ],
              "generateYAxisTicks": [
                "string"
              ],
              "hoverDimension": "auto",
              "legendColorizeRows": true,
              "legendHide": true,
              "legendOpacity": 0,
              "legendOrientationThreshold": 0,
              "note": "string",
              "position": "overlaid",
              "prefix": "string",
              "queries": [
                {
                  "builderConfig": {
                    "aggregateWindow": {
                      "fillValues": true,
                      "period": "string"
                    },
                    "buckets": [
                      "string"
                    ],
                    "functions": [
                      {
                        "name": "string"
                      }
                    ],
                    "tags": [
                      {
                        "aggregateFunctionType": "filter",
                        "key": "string",
                        "values": [
                          "string"
                        ]
                      }
                    ]
                  },
                  "editMode": "builder",
                  "name": "string",
                  "text": "string"
                }
              ],
              "shadeBelow": true,
              "shape": "chronograf-v2",
              "showNoteWhenEmpty": true,
              "staticLegend": {
                "colorizeRows": true,
                "heightRatio": 0,
                "hide": true,
                "opacity": 0,
                "orientationThreshold": 0,
                "valueAxis": "string",
                "widthRatio": 0
              },
              "suffix": "string",
              "timeFormat": "string",
              "type": "line-plus-single-stat",
              "xColumn": "string",
              "xTickStart": 0,
              "xTickStep": 0,
              "xTotalTicks": 0,
              "yColumn": "string",
              "yTickStart": 0,
              "yTickStep": 0,
              "yTotalTicks": 0
            },
            "width": 0,
            "xPos": 0,
            "yPos": 0
          }
        ],
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "templateMetaName": "string"
      }
    ],
    "labelMappings": [
      {
        "labelID": "string",
        "labelName": "string",
        "labelTemplateMetaName": "string",
        "resourceID": "string",
        "resourceName": "string",
        "resourceTemplateMetaName": "string",
        "resourceType": "string",
        "status": "string"
      }
    ],
    "labels": [
      {
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "name": "string",
        "orgID": "string",
        "properties": {
          "color": "string",
          "description": "string"
        },
        "templateMetaName": "string"
      }
    ],
    "missingEnvRefs": [
      "string"
    ],
    "missingSecrets": [
      "string"
    ],
    "notificationEndpoints": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "labels": [
          {
            "id": "string",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "ffb3b3",
              "description": "this is a description"
            }
          }
        ],
        "links": {
          "labels": "/api/v2/notificationEndpoints/1/labels",
          "members": "/api/v2/notificationEndpoints/1/members",
          "owners": "/api/v2/notificationEndpoints/1/owners",
          "self": "/api/v2/notificationEndpoints/1"
        },
        "name": "string",
        "orgID": "string",
        "status": "active",
        "type": "slack",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userID": "string",
        "token": "string",
        "url": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "notificationRules": [
      {
        "description": "string",
        "endpointID": "string",
        "endpointTemplateMetaName": "string",
        "endpointType": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "every": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "messageTemplate": "string",
        "name": "string",
        "offset": "string",
        "status": "string",
        "statusRules": [
          {
            "currentLevel": "string",
            "previousLevel": "string"
          }
        ],
        "tagRules": [
          {
            "key": "string",
            "operator": "string",
            "value": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "tasks": [
      {
        "cron": "string",
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "every": "string",
        "id": "string",
        "kind": "Bucket",
        "name": "string",
        "offset": "string",
        "query": "string",
        "status": "string",
        "templateMetaName": "string"
      }
    ],
    "telegrafConfigs": [
      {
        "config": "string",
        "description": "string",
        "metadata": {
          "buckets": [
            "string"
          ]
        },
        "name": "string",
        "orgID": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "variables": [
      {
        "arguments": {
          "type": "query",
          "values": {
            "language": "string",
            "query": "string"
          }
        },
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "templateMetaName": "string"
      }
    ]
  }
}
```

> 201 Response

```json
{
  "diff": {
    "buckets": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "description": "string",
          "name": "string",
          "retentionRules": [
            {
              "everySeconds": 86400,
              "shardGroupDurationSeconds": 0,
              "type": "expire"
            }
          ]
        },
        "old": {
          "description": "string",
          "name": "string",
          "retentionRules": [
            {
              "everySeconds": 86400,
              "shardGroupDurationSeconds": 0,
              "type": "expire"
            }
          ]
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "checks": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "lastRunError": "string",
          "lastRunStatus": "failed",
          "latestCompleted": "1970-01-01T00:00:00Z",
          "links": {
            "labels": "/api/v2/checks/1/labels",
            "members": "/api/v2/checks/1/members",
            "owners": "/api/v2/checks/1/owners",
            "query": "/api/v2/checks/1/query",
            "self": "/api/v2/checks/1"
          },
          "name": "string",
          "orgID": "string",
          "ownerID": "string",
          "query": {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          },
          "status": "active",
          "taskID": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "every": "string",
          "level": "UNKNOWN",
          "offset": "string",
          "reportZero": true,
          "staleTime": "string",
          "statusMessageTemplate": "string",
          "tags": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "timeSince": "string",
          "type": "deadman"
        },
        "old": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "lastRunError": "string",
          "lastRunStatus": "failed",
          "latestCompleted": "1970-01-01T00:00:00Z",
          "links": {
            "labels": "/api/v2/checks/1/labels",
            "members": "/api/v2/checks/1/members",
            "owners": "/api/v2/checks/1/owners",
            "query": "/api/v2/checks/1/query",
            "self": "/api/v2/checks/1"
          },
          "name": "string",
          "orgID": "string",
          "ownerID": "string",
          "query": {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          },
          "status": "active",
          "taskID": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "every": "string",
          "level": "UNKNOWN",
          "offset": "string",
          "reportZero": true,
          "staleTime": "string",
          "statusMessageTemplate": "string",
          "tags": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "timeSince": "string",
          "type": "deadman"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "dashboards": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "charts": [
            {
              "height": 0,
              "properties": {
                "axes": {
                  "x": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  },
                  "y": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  }
                },
                "colors": [
                  {
                    "hex": "strings",
                    "id": "string",
                    "name": "string",
                    "type": "min",
                    "value": 0
                  }
                ],
                "decimalPlaces": {
                  "digits": 0,
                  "isEnforced": true
                },
                "generateXAxisTicks": [
                  "string"
                ],
                "generateYAxisTicks": [
                  "string"
                ],
                "hoverDimension": "auto",
                "legendColorizeRows": true,
                "legendHide": true,
                "legendOpacity": 0,
                "legendOrientationThreshold": 0,
                "note": "string",
                "position": "overlaid",
                "prefix": "string",
                "queries": [
                  {
                    "builderConfig": {
                      "aggregateWindow": {
                        "fillValues": true,
                        "period": "string"
                      },
                      "buckets": [
                        "string"
                      ],
                      "functions": [
                        {
                          "name": "string"
                        }
                      ],
                      "tags": [
                        {
                          "aggregateFunctionType": "filter",
                          "key": "string",
                          "values": [
                            "string"
                          ]
                        }
                      ]
                    },
                    "editMode": "builder",
                    "name": "string",
                    "text": "string"
                  }
                ],
                "shadeBelow": true,
                "shape": "chronograf-v2",
                "showNoteWhenEmpty": true,
                "staticLegend": {
                  "colorizeRows": true,
                  "heightRatio": 0,
                  "hide": true,
                  "opacity": 0,
                  "orientationThreshold": 0,
                  "valueAxis": "string",
                  "widthRatio": 0
                },
                "suffix": "string",
                "timeFormat": "string",
                "type": "line-plus-single-stat",
                "xColumn": "string",
                "xTickStart": 0,
                "xTickStep": 0,
                "xTotalTicks": 0,
                "yColumn": "string",
                "yTickStart": 0,
                "yTickStep": 0,
                "yTotalTicks": 0
              },
              "width": 0,
              "xPos": 0,
              "yPos": 0
            }
          ],
          "description": "string",
          "name": "string"
        },
        "old": {
          "charts": [
            {
              "height": 0,
              "properties": {
                "axes": {
                  "x": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  },
                  "y": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  }
                },
                "colors": [
                  {
                    "hex": "strings",
                    "id": "string",
                    "name": "string",
                    "type": "min",
                    "value": 0
                  }
                ],
                "decimalPlaces": {
                  "digits": 0,
                  "isEnforced": true
                },
                "generateXAxisTicks": [
                  "string"
                ],
                "generateYAxisTicks": [
                  "string"
                ],
                "hoverDimension": "auto",
                "legendColorizeRows": true,
                "legendHide": true,
                "legendOpacity": 0,
                "legendOrientationThreshold": 0,
                "note": "string",
                "position": "overlaid",
                "prefix": "string",
                "queries": [
                  {
                    "builderConfig": {
                      "aggregateWindow": {
                        "fillValues": true,
                        "period": "string"
                      },
                      "buckets": [
                        "string"
                      ],
                      "functions": [
                        {
                          "name": "string"
                        }
                      ],
                      "tags": [
                        {
                          "aggregateFunctionType": "filter",
                          "key": "string",
                          "values": [
                            "string"
                          ]
                        }
                      ]
                    },
                    "editMode": "builder",
                    "name": "string",
                    "text": "string"
                  }
                ],
                "shadeBelow": true,
                "shape": "chronograf-v2",
                "showNoteWhenEmpty": true,
                "staticLegend": {
                  "colorizeRows": true,
                  "heightRatio": 0,
                  "hide": true,
                  "opacity": 0,
                  "orientationThreshold": 0,
                  "valueAxis": "string",
                  "widthRatio": 0
                },
                "suffix": "string",
                "timeFormat": "string",
                "type": "line-plus-single-stat",
                "xColumn": "string",
                "xTickStart": 0,
                "xTickStep": 0,
                "xTotalTicks": 0,
                "yColumn": "string",
                "yTickStart": 0,
                "yTickStep": 0,
                "yTotalTicks": 0
              },
              "width": 0,
              "xPos": 0,
              "yPos": 0
            }
          ],
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "labelMappings": [
      {
        "labelID": "string",
        "labelName": "string",
        "labelTemplateMetaName": "string",
        "resourceID": "string",
        "resourceName": "string",
        "resourceTemplateMetaName": "string",
        "resourceType": "string",
        "status": "string"
      }
    ],
    "labels": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "color": "string",
          "description": "string",
          "name": "string"
        },
        "old": {
          "color": "string",
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "notificationEndpoints": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "links": {
            "labels": "/api/v2/notificationEndpoints/1/labels",
            "members": "/api/v2/notificationEndpoints/1/members",
            "owners": "/api/v2/notificationEndpoints/1/owners",
            "self": "/api/v2/notificationEndpoints/1"
          },
          "name": "string",
          "orgID": "string",
          "status": "active",
          "type": "slack",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userID": "string",
          "token": "string",
          "url": "string"
        },
        "old": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "links": {
            "labels": "/api/v2/notificationEndpoints/1/labels",
            "members": "/api/v2/notificationEndpoints/1/members",
            "owners": "/api/v2/notificationEndpoints/1/owners",
            "self": "/api/v2/notificationEndpoints/1"
          },
          "name": "string",
          "orgID": "string",
          "status": "active",
          "type": "slack",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userID": "string",
          "token": "string",
          "url": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "notificationRules": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "description": "string",
          "endpointID": "string",
          "endpointName": "string",
          "endpointType": "string",
          "every": "string",
          "messageTemplate": "string",
          "name": "string",
          "offset": "string",
          "status": "string",
          "statusRules": [
            {
              "currentLevel": "string",
              "previousLevel": "string"
            }
          ],
          "tagRules": [
            {
              "key": "string",
              "operator": "string",
              "value": "string"
            }
          ]
        },
        "old": {
          "description": "string",
          "endpointID": "string",
          "endpointName": "string",
          "endpointType": "string",
          "every": "string",
          "messageTemplate": "string",
          "name": "string",
          "offset": "string",
          "status": "string",
          "statusRules": [
            {
              "currentLevel": "string",
              "previousLevel": "string"
            }
          ],
          "tagRules": [
            {
              "key": "string",
              "operator": "string",
              "value": "string"
            }
          ]
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "tasks": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "cron": "string",
          "description": "string",
          "every": "string",
          "name": "string",
          "offset": "string",
          "query": "string",
          "status": "string"
        },
        "old": {
          "cron": "string",
          "description": "string",
          "every": "string",
          "name": "string",
          "offset": "string",
          "query": "string",
          "status": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "telegrafConfigs": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "config": "string",
          "description": "string",
          "metadata": {
            "buckets": [
              "string"
            ]
          },
          "name": "string",
          "orgID": "string"
        },
        "old": {
          "config": "string",
          "description": "string",
          "metadata": {
            "buckets": [
              "string"
            ]
          },
          "name": "string",
          "orgID": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "variables": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "args": {
            "type": "query",
            "values": {
              "language": "string",
              "query": "string"
            }
          },
          "description": "string",
          "name": "string"
        },
        "old": {
          "args": {
            "type": "query",
            "values": {
              "language": "string",
              "query": "string"
            }
          },
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ]
  },
  "errors": [
    {
      "fields": [
        "string"
      ],
      "indexes": [
        0
      ],
      "kind": "Bucket",
      "reason": "string"
    }
  ],
  "sources": [
    "string"
  ],
  "stackID": "string",
  "summary": {
    "buckets": [
      {
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "retentionPeriod": 0,
        "templateMetaName": "string"
      }
    ],
    "checks": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "labels": [
          {
            "id": "string",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "ffb3b3",
              "description": "this is a description"
            }
          }
        ],
        "lastRunError": "string",
        "lastRunStatus": "failed",
        "latestCompleted": "1970-01-01T00:00:00Z",
        "links": {
          "labels": "/api/v2/checks/1/labels",
          "members": "/api/v2/checks/1/members",
          "owners": "/api/v2/checks/1/owners",
          "query": "/api/v2/checks/1/query",
          "self": "/api/v2/checks/1"
        },
        "name": "string",
        "orgID": "string",
        "ownerID": "string",
        "query": {
          "builderConfig": {
            "aggregateWindow": {
              "fillValues": true,
              "period": "string"
            },
            "buckets": [
              "string"
            ],
            "functions": [
              {
                "name": "string"
              }
            ],
            "tags": [
              {
                "aggregateFunctionType": "filter",
                "key": "string",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "editMode": "builder",
          "name": "string",
          "text": "string"
        },
        "status": "active",
        "taskID": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "every": "string",
        "level": "UNKNOWN",
        "offset": "string",
        "reportZero": true,
        "staleTime": "string",
        "statusMessageTemplate": "string",
        "tags": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "timeSince": "string",
        "type": "deadman",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "dashboards": [
      {
        "charts": [
          {
            "height": 0,
            "properties": {
              "axes": {
                "x": {
                  "base": "",
                  "bounds": [
                    "string"
                  ],
                  "label": "string",
                  "prefix": "string",
                  "scale": "log",
                  "suffix": "string"
                },
                "y": {
                  "base": "",
                  "bounds": [
                    "string"
                  ],
                  "label": "string",
                  "prefix": "string",
                  "scale": "log",
                  "suffix": "string"
                }
              },
              "colors": [
                {
                  "hex": "strings",
                  "id": "string",
                  "name": "string",
                  "type": "min",
                  "value": 0
                }
              ],
              "decimalPlaces": {
                "digits": 0,
                "isEnforced": true
              },
              "generateXAxisTicks": [
                "string"
              ],
              "generateYAxisTicks": [
                "string"
              ],
              "hoverDimension": "auto",
              "legendColorizeRows": true,
              "legendHide": true,
              "legendOpacity": 0,
              "legendOrientationThreshold": 0,
              "note": "string",
              "position": "overlaid",
              "prefix": "string",
              "queries": [
                {
                  "builderConfig": {
                    "aggregateWindow": {
                      "fillValues": true,
                      "period": "string"
                    },
                    "buckets": [
                      "string"
                    ],
                    "functions": [
                      {
                        "name": "string"
                      }
                    ],
                    "tags": [
                      {
                        "aggregateFunctionType": "filter",
                        "key": "string",
                        "values": [
                          "string"
                        ]
                      }
                    ]
                  },
                  "editMode": "builder",
                  "name": "string",
                  "text": "string"
                }
              ],
              "shadeBelow": true,
              "shape": "chronograf-v2",
              "showNoteWhenEmpty": true,
              "staticLegend": {
                "colorizeRows": true,
                "heightRatio": 0,
                "hide": true,
                "opacity": 0,
                "orientationThreshold": 0,
                "valueAxis": "string",
                "widthRatio": 0
              },
              "suffix": "string",
              "timeFormat": "string",
              "type": "line-plus-single-stat",
              "xColumn": "string",
              "xTickStart": 0,
              "xTickStep": 0,
              "xTotalTicks": 0,
              "yColumn": "string",
              "yTickStart": 0,
              "yTickStep": 0,
              "yTotalTicks": 0
            },
            "width": 0,
            "xPos": 0,
            "yPos": 0
          }
        ],
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "templateMetaName": "string"
      }
    ],
    "labelMappings": [
      {
        "labelID": "string",
        "labelName": "string",
        "labelTemplateMetaName": "string",
        "resourceID": "string",
        "resourceName": "string",
        "resourceTemplateMetaName": "string",
        "resourceType": "string",
        "status": "string"
      }
    ],
    "labels": [
      {
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "name": "string",
        "orgID": "string",
        "properties": {
          "color": "string",
          "description": "string"
        },
        "templateMetaName": "string"
      }
    ],
    "missingEnvRefs": [
      "string"
    ],
    "missingSecrets": [
      "string"
    ],
    "notificationEndpoints": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "labels": [
          {
            "id": "string",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "ffb3b3",
              "description": "this is a description"
            }
          }
        ],
        "links": {
          "labels": "/api/v2/notificationEndpoints/1/labels",
          "members": "/api/v2/notificationEndpoints/1/members",
          "owners": "/api/v2/notificationEndpoints/1/owners",
          "self": "/api/v2/notificationEndpoints/1"
        },
        "name": "string",
        "orgID": "string",
        "status": "active",
        "type": "slack",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userID": "string",
        "token": "string",
        "url": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "notificationRules": [
      {
        "description": "string",
        "endpointID": "string",
        "endpointTemplateMetaName": "string",
        "endpointType": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "every": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "messageTemplate": "string",
        "name": "string",
        "offset": "string",
        "status": "string",
        "statusRules": [
          {
            "currentLevel": "string",
            "previousLevel": "string"
          }
        ],
        "tagRules": [
          {
            "key": "string",
            "operator": "string",
            "value": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "tasks": [
      {
        "cron": "string",
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "every": "string",
        "id": "string",
        "kind": "Bucket",
        "name": "string",
        "offset": "string",
        "query": "string",
        "status": "string",
        "templateMetaName": "string"
      }
    ],
    "telegrafConfigs": [
      {
        "config": "string",
        "description": "string",
        "metadata": {
          "buckets": [
            "string"
          ]
        },
        "name": "string",
        "orgID": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "variables": [
      {
        "arguments": {
          "type": "query",
          "values": {
            "language": "string",
            "query": "string"
          }
        },
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "templateMetaName": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="apply-or-dry-run-an-influxdb-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Influx package dry-run successful, no new resources created. The provided diff and summary will not have IDs for resources that do not exist at the time of the dry run.<br>|[TemplateSummary](#schematemplatesummary)|
|201|Created|Influx package applied successfully. Newly created resources created available in summary. The diff compares the state of the world before the package is applied with the changes the application will impose. This corresponds to `"dryRun": true`<br>|[TemplateSummary](#schematemplatesummary)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Export a new Influx Template

<a id="opIdExportTemplate"></a>

> Code samples

```bash
curl https://example.com/templates/export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "orgIDs": [
      {
        "orgID": "string",
        "resourceFilters": {
          "byLabel": [
            "string"
          ],
          "byResourceKind": [
            "Bucket"
          ]
        }
      }
    ],
    "resources": {
      "id": "string",
      "kind": "Bucket",
      "name": "string"
    },
    "stackID": "string"
  }'
```

`POST /templates/export`

> Body parameter

```json
{
  "orgIDs": [
    {
      "orgID": "string",
      "resourceFilters": {
        "byLabel": [
          "string"
        ],
        "byResourceKind": [
          "Bucket"
        ]
      }
    }
  ],
  "resources": {
    "id": "string",
    "kind": "Bucket",
    "name": "string"
  },
  "stackID": "string"
}
```

<h3 id="export-a-new-influx-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplateExportByID](#schematemplateexportbyid) \| [TemplateExportByName](#schematemplateexportbyname)|false|Export resources as an InfluxDB template.|
|» *oneOf*|body|[TemplateExportByID](#schematemplateexportbyid)|false|none|
|» *oneOf*|body|[TemplateExportByName](#schematemplateexportbyname)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "apiVersion": "string",
    "kind": "Bucket",
    "meta": {
      "name": "string"
    },
    "spec": {}
  }
]
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="export-a-new-influx-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|InfluxDB template created|[Template](#schematemplate)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-tasks">Tasks</h1>

## List all tasks

<a id="opIdGetTasks"></a>

> Code samples

```bash
curl https://example.com/tasks \
  -H 'Accept: application/json'
```

`GET /tasks`

<h3 id="list-all-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|name|query|string|false|Returns task with a specific name.|
|after|query|string|false|Return tasks after a specified ID.|
|user|query|string|false|Filter tasks to a specific user ID.|
|org|query|string|false|Filter tasks to a specific organization name.|
|orgID|query|string|false|Filter tasks to a specific organization ID.|
|status|query|string|false|Filter tasks by a status--"inactive" or "active".|
|limit|query|integer|false|The number of tasks to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|inactive|

> Example responses

> 200 Response

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "tasks": [
    {
      "authorizationID": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "cron": "string",
      "description": "string",
      "every": "string",
      "flux": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "lastRunError": "string",
      "lastRunStatus": "failed",
      "latestCompleted": "1970-01-01T00:00:00Z",
      "links": {
        "labels": "/api/v2/tasks/1/labels",
        "logs": "/api/v2/tasks/1/logs",
        "members": "/api/v2/tasks/1/members",
        "owners": "/api/v2/tasks/1/owners",
        "runs": "/api/v2/tasks/1/runs",
        "self": "/api/v2/tasks/1"
      },
      "name": "string",
      "offset": "string",
      "org": "string",
      "orgID": "string",
      "status": "active",
      "type": "string",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of tasks|[Tasks](#schematasks)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new task

<a id="opIdPostTasks"></a>

> Code samples

```bash
curl https://example.com/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "flux": "string",
    "org": "string",
    "orgID": "string",
    "status": "active"
  }'
```

`POST /tasks`

> Body parameter

```json
{
  "description": "string",
  "flux": "string",
  "org": "string",
  "orgID": "string",
  "status": "active"
}
```

<h3 id="create-a-new-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[TaskCreateRequest](#schemataskcreaterequest)|true|Task to create|
|» description|body|string|false|An optional description of the task.|
|» flux|body|string|true|The Flux script to run for this task.|
|» org|body|string|false|The name of the organization that owns this Task.|
|» orgID|body|string|false|The ID of the organization that owns this Task.|
|» status|body|[TaskStatusType](#schemataskstatustype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 201 Response

```json
{
  "authorizationID": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "cron": "string",
  "description": "string",
  "every": "string",
  "flux": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/tasks/1/labels",
    "logs": "/api/v2/tasks/1/logs",
    "members": "/api/v2/tasks/1/members",
    "owners": "/api/v2/tasks/1/owners",
    "runs": "/api/v2/tasks/1/runs",
    "self": "/api/v2/tasks/1"
  },
  "name": "string",
  "offset": "string",
  "org": "string",
  "orgID": "string",
  "status": "active",
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-new-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Task created|[Task](#schematask)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a task

<a id="opIdGetTasksID"></a>

> Code samples

```bash
curl https://example.com/tasks/string \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}`

<h3 id="retrieve-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "authorizationID": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "cron": "string",
  "description": "string",
  "every": "string",
  "flux": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/tasks/1/labels",
    "logs": "/api/v2/tasks/1/logs",
    "members": "/api/v2/tasks/1/members",
    "owners": "/api/v2/tasks/1/owners",
    "runs": "/api/v2/tasks/1/runs",
    "self": "/api/v2/tasks/1"
  },
  "name": "string",
  "offset": "string",
  "org": "string",
  "orgID": "string",
  "status": "active",
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task details|[Task](#schematask)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a task

<a id="opIdDeleteTasksID"></a>

> Code samples

```bash
curl https://example.com/tasks/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /tasks/{taskID}`

Deletes a task and all associated records

<h3 id="delete-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The ID of the task to delete.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Task deleted|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a task

<a id="opIdPatchTasksID"></a>

> Code samples

```bash
curl https://example.com/tasks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cron": "string",
    "description": "string",
    "every": "string",
    "flux": "string",
    "name": "string",
    "offset": "string",
    "status": "active"
  }'
```

`PATCH /tasks/{taskID}`

Update a task. This will cancel all queued runs.

> Body parameter

```json
{
  "cron": "string",
  "description": "string",
  "every": "string",
  "flux": "string",
  "name": "string",
  "offset": "string",
  "status": "active"
}
```

<h3 id="update-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|body|body|[TaskUpdateRequest](#schemataskupdaterequest)|true|Task update to apply|
|» cron|body|string|false|Override the 'cron' option in the flux script.|
|» description|body|string|false|An optional description of the task.|
|» every|body|string|false|Override the 'every' option in the flux script.|
|» flux|body|string|false|The Flux script to run for this task.|
|» name|body|string|false|Override the 'name' option in the flux script.|
|» offset|body|string|false|Override the 'offset' option in the flux script.|
|» status|body|[TaskStatusType](#schemataskstatustype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "authorizationID": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "cron": "string",
  "description": "string",
  "every": "string",
  "flux": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/tasks/1/labels",
    "logs": "/api/v2/tasks/1/logs",
    "members": "/api/v2/tasks/1/members",
    "owners": "/api/v2/tasks/1/owners",
    "runs": "/api/v2/tasks/1/runs",
    "self": "/api/v2/tasks/1"
  },
  "name": "string",
  "offset": "string",
  "org": "string",
  "orgID": "string",
  "status": "active",
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task updated|[Task](#schematask)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a task

<a id="opIdGetTasksIDLabels"></a>

> Code samples

```bash
curl https://example.com/tasks/string/labels \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}/labels`

<h3 id="list-all-labels-for-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a task|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a task

<a id="opIdPostTasksIDLabels"></a>

> Code samples

```bash
curl https://example.com/tasks/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /tasks/{taskID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A list of all labels for a task|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a task

<a id="opIdDeleteTasksIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/tasks/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /tasks/{taskID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|labelID|path|string|true|The label ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Task not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve all logs for a task

<a id="opIdGetTasksIDLogs"></a>

> Code samples

```bash
curl https://example.com/tasks/string/logs \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}/logs`

<h3 id="retrieve-all-logs-for-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "message": "Halt and catch fire",
      "runID": "string",
      "time": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-all-logs-for-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All logs for a task|[Logs](#schemalogs)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all task members

<a id="opIdGetTasksIDMembers"></a>

> Code samples

```bash
curl https://example.com/tasks/string/members \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}/members`

<h3 id="list-all-task-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "member"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-task-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of users who have member privileges for a task|[ResourceMembers](#schemaresourcemembers)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a member to a task

<a id="opIdPostTasksIDMembers"></a>

> Code samples

```bash
curl https://example.com/tasks/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /tasks/{taskID}/members`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-a-member-to-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as member|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "member"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-member-to-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Added to task members|[ResourceMember](#schemaresourcemember)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a member from a task

<a id="opIdDeleteTasksIDMembersID"></a>

> Code samples

```bash
curl https://example.com/tasks/string/members/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /tasks/{taskID}/members/{userID}`

<h3 id="remove-a-member-from-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the member to remove.|
|taskID|path|string|true|The task ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-a-member-from-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all owners of a task

<a id="opIdGetTasksIDOwners"></a>

> Code samples

```bash
curl https://example.com/tasks/string/owners \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}/owners`

<h3 id="list-all-owners-of-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "owner"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-owners-of-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of users who have owner privileges for a task|[ResourceOwners](#schemaresourceowners)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an owner to a task

<a id="opIdPostTasksIDOwners"></a>

> Code samples

```bash
curl https://example.com/tasks/string/owners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /tasks/{taskID}/owners`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-an-owner-to-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as owner|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "owner"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-an-owner-to-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Added to task owners|[ResourceOwner](#schemaresourceowner)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an owner from a task

<a id="opIdDeleteTasksIDOwnersID"></a>

> Code samples

```bash
curl https://example.com/tasks/string/owners/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /tasks/{taskID}/owners/{userID}`

<h3 id="remove-an-owner-from-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the owner to remove.|
|taskID|path|string|true|The task ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-an-owner-from-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Owner removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List runs for a task

<a id="opIdGetTasksIDRuns"></a>

> Code samples

```bash
curl https://example.com/tasks/string/runs \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}/runs`

<h3 id="list-runs-for-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The ID of the task to get runs for.|
|after|query|string|false|Returns runs after a specific ID.|
|limit|query|integer|false|The number of runs to return|
|afterTime|query|string(date-time)|false|Filter runs to those scheduled after this time, RFC3339|
|beforeTime|query|string(date-time)|false|Filter runs to those scheduled before this time, RFC3339|

> Example responses

> 200 Response

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "runs": [
    {
      "finishedAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "links": {
        "retry": "/api/v2/tasks/1/runs/1/retry",
        "self": "/api/v2/tasks/1/runs/1",
        "task": "/api/v2/tasks/1"
      },
      "log": [
        {
          "message": "Halt and catch fire",
          "runID": "string",
          "time": "1970-01-01T00:00:00Z"
        }
      ],
      "requestedAt": "1970-01-01T00:00:00Z",
      "scheduledFor": "1970-01-01T00:00:00Z",
      "startedAt": "1970-01-01T00:00:00Z",
      "status": "scheduled",
      "taskID": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-runs-for-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of task runs|[Runs](#schemaruns)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Manually start a task run, overriding the current schedule

<a id="opIdPostTasksIDRuns"></a>

> Code samples

```bash
curl https://example.com/tasks/string/runs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "scheduledFor": "1970-01-01T00:00:00Z"
  }'
```

`POST /tasks/{taskID}/runs`

> Body parameter

```json
{
  "scheduledFor": "1970-01-01T00:00:00Z"
}
```

<h3 id="manually-start-a-task-run-overriding-the-current-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|none|
|body|body|[RunManually](#schemarunmanually)|false|none|
|» scheduledFor|body|string(date-time) \| null|false|Time used for run's "now" option, RFC3339.  Default is the server's now time.|

> Example responses

> 201 Response

```json
{
  "finishedAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "retry": "/api/v2/tasks/1/runs/1/retry",
    "self": "/api/v2/tasks/1/runs/1",
    "task": "/api/v2/tasks/1"
  },
  "log": [
    {
      "message": "Halt and catch fire",
      "runID": "string",
      "time": "1970-01-01T00:00:00Z"
    }
  ],
  "requestedAt": "1970-01-01T00:00:00Z",
  "scheduledFor": "1970-01-01T00:00:00Z",
  "startedAt": "1970-01-01T00:00:00Z",
  "status": "scheduled",
  "taskID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="manually-start-a-task-run-overriding-the-current-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Run scheduled to start|[Run](#schemarun)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a single run for a task

<a id="opIdGetTasksIDRunsID"></a>

> Code samples

```bash
curl https://example.com/tasks/string/runs/string \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}/runs/{runID}`

<h3 id="retrieve-a-single-run-for-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|runID|path|string|true|The run ID.|

> Example responses

> 200 Response

```json
{
  "finishedAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "retry": "/api/v2/tasks/1/runs/1/retry",
    "self": "/api/v2/tasks/1/runs/1",
    "task": "/api/v2/tasks/1"
  },
  "log": [
    {
      "message": "Halt and catch fire",
      "runID": "string",
      "time": "1970-01-01T00:00:00Z"
    }
  ],
  "requestedAt": "1970-01-01T00:00:00Z",
  "scheduledFor": "1970-01-01T00:00:00Z",
  "startedAt": "1970-01-01T00:00:00Z",
  "status": "scheduled",
  "taskID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-single-run-for-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The run record|[Run](#schemarun)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel a running task

<a id="opIdDeleteTasksIDRunsID"></a>

> Code samples

```bash
curl https://example.com/tasks/string/runs/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /tasks/{taskID}/runs/{runID}`

<h3 id="cancel-a-running-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|runID|path|string|true|The run ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="cancel-a-running-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve all logs for a run

<a id="opIdGetTasksIDRunsIDLogs"></a>

> Code samples

```bash
curl https://example.com/tasks/string/runs/string/logs \
  -H 'Accept: application/json'
```

`GET /tasks/{taskID}/runs/{runID}/logs`

<h3 id="retrieve-all-logs-for-a-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|ID of task to get logs for.|
|runID|path|string|true|ID of run to get logs for.|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "message": "Halt and catch fire",
      "runID": "string",
      "time": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-all-logs-for-a-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All logs for a run|[Logs](#schemalogs)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retry a task run

<a id="opIdPostTasksIDRunsIDRetry"></a>

> Code samples

```bash
curl https://example.com/tasks/string/runs/string/retry \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /tasks/{taskID}/runs/{runID}/retry`

> Body parameter

```json
{}
```

<h3 id="retry-a-task-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|taskID|path|string|true|The task ID.|
|runID|path|string|true|The run ID.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "finishedAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "retry": "/api/v2/tasks/1/runs/1/retry",
    "self": "/api/v2/tasks/1/runs/1",
    "task": "/api/v2/tasks/1"
  },
  "log": [
    {
      "message": "Halt and catch fire",
      "runID": "string",
      "time": "1970-01-01T00:00:00Z"
    }
  ],
  "requestedAt": "1970-01-01T00:00:00Z",
  "scheduledFor": "1970-01-01T00:00:00Z",
  "startedAt": "1970-01-01T00:00:00Z",
  "status": "scheduled",
  "taskID": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retry-a-task-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Run that has been queued|[Run](#schemarun)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-telegraf-plugins">Telegraf Plugins</h1>

## List all Telegraf plugins

<a id="opIdGetTelegrafPlugins"></a>

> Code samples

```bash
curl https://example.com/telegraf/plugins \
  -H 'Accept: application/json'
```

`GET /telegraf/plugins`

<h3 id="list-all-telegraf-plugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|type|query|string|false|The type of plugin desired.|

> Example responses

> 200 Response

```json
{
  "os": "string",
  "plugins": [
    {
      "config": "string",
      "description": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "version": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-telegraf-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Telegraf plugins.|[TelegrafPlugins](#schematelegrafplugins)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-telegrafs">Telegrafs</h1>

## List all Telegraf configurations

<a id="opIdGetTelegrafs"></a>

> Code samples

```bash
curl https://example.com/telegrafs \
  -H 'Accept: application/json'
```

`GET /telegrafs`

<h3 id="list-all-telegraf-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|orgID|query|string|false|The organization ID the Telegraf config belongs to.|

> Example responses

> 200 Response

```json
{
  "configurations": [
    {
      "config": "string",
      "description": "string",
      "metadata": {
        "buckets": [
          "string"
        ]
      },
      "name": "string",
      "orgID": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "lables": "/api/v2/telegrafs/1/labels",
        "members": "/api/v2/telegrafs/1/members",
        "owners": "/api/v2/telegrafs/1/owners",
        "self": "/api/v2/telegrafs/1"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-telegraf-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Telegraf configurations|[Telegrafs](#schematelegrafs)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Telegraf configuration

<a id="opIdPostTelegrafs"></a>

> Code samples

```bash
curl https://example.com/telegrafs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": "string",
    "description": "string",
    "metadata": {
      "buckets": [
        "string"
      ]
    },
    "name": "string",
    "orgID": "string"
  }'
```

`POST /telegrafs`

> Body parameter

```json
{
  "config": "string",
  "description": "string",
  "metadata": {
    "buckets": [
      "string"
    ]
  },
  "name": "string",
  "orgID": "string"
}
```

<h3 id="create-a-telegraf-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[TelegrafRequest](#schematelegrafrequest)|true|Telegraf configuration to create|
|» config|body|string|false|none|
|» description|body|string|false|none|
|» metadata|body|object|false|none|
|» » buckets|body|[string]|false|none|
|» name|body|string|false|none|
|» orgID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "config": "string",
  "description": "string",
  "metadata": {
    "buckets": [
      "string"
    ]
  },
  "name": "string",
  "orgID": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "lables": "/api/v2/telegrafs/1/labels",
    "members": "/api/v2/telegrafs/1/members",
    "owners": "/api/v2/telegrafs/1/owners",
    "self": "/api/v2/telegrafs/1"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-telegraf-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Telegraf configuration created|[Telegraf](#schematelegraf)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Telegraf configuration

<a id="opIdGetTelegrafsID"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string \
  -H 'Accept: application/json'
```

`GET /telegrafs/{telegrafID}`

<h3 id="retrieve-a-telegraf-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf configuration ID.|
|Accept|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/toml|
|Accept|application/json|
|Accept|application/octet-stream|

> Example responses

> 200 Response

```json
{
  "config": "string",
  "description": "string",
  "metadata": {
    "buckets": [
      "string"
    ]
  },
  "name": "string",
  "orgID": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "lables": "/api/v2/telegrafs/1/labels",
    "members": "/api/v2/telegrafs/1/members",
    "owners": "/api/v2/telegrafs/1/owners",
    "self": "/api/v2/telegrafs/1"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-telegraf-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Telegraf configuration details|[Telegraf](#schematelegraf)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Telegraf configuration

<a id="opIdPutTelegrafsID"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": "string",
    "description": "string",
    "metadata": {
      "buckets": [
        "string"
      ]
    },
    "name": "string",
    "orgID": "string"
  }'
```

`PUT /telegrafs/{telegrafID}`

> Body parameter

```json
{
  "config": "string",
  "description": "string",
  "metadata": {
    "buckets": [
      "string"
    ]
  },
  "name": "string",
  "orgID": "string"
}
```

<h3 id="update-a-telegraf-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf config ID.|
|body|body|[TelegrafRequest](#schematelegrafrequest)|true|Telegraf configuration update to apply|
|» config|body|string|false|none|
|» description|body|string|false|none|
|» metadata|body|object|false|none|
|» » buckets|body|[string]|false|none|
|» name|body|string|false|none|
|» orgID|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "config": "string",
  "description": "string",
  "metadata": {
    "buckets": [
      "string"
    ]
  },
  "name": "string",
  "orgID": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "lables": "/api/v2/telegrafs/1/labels",
    "members": "/api/v2/telegrafs/1/members",
    "owners": "/api/v2/telegrafs/1/owners",
    "self": "/api/v2/telegrafs/1"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-telegraf-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An updated Telegraf configurations|[Telegraf](#schematelegraf)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Telegraf configuration

<a id="opIdDeleteTelegrafsID"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /telegrafs/{telegrafID}`

<h3 id="delete-a-telegraf-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf configuration ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-telegraf-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a Telegraf config

<a id="opIdGetTelegrafsIDLabels"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/labels \
  -H 'Accept: application/json'
```

`GET /telegrafs/{telegrafID}/labels`

<h3 id="list-all-labels-for-a-telegraf-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf config ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-telegraf-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a Telegraf config|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a Telegraf config

<a id="opIdPostTelegrafsIDLabels"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /telegrafs/{telegrafID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-telegraf-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf config ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-telegraf-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The label added to the Telegraf config|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a Telegraf config

<a id="opIdDeleteTelegrafsIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /telegrafs/{telegrafID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-telegraf-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf config ID.|
|labelID|path|string|true|The label ID.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-telegraf-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Telegraf config not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all users with member privileges for a Telegraf config

<a id="opIdGetTelegrafsIDMembers"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/members \
  -H 'Accept: application/json'
```

`GET /telegrafs/{telegrafID}/members`

<h3 id="list-all-users-with-member-privileges-for-a-telegraf-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf config ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "member"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-users-with-member-privileges-for-a-telegraf-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Telegraf config members|[ResourceMembers](#schemaresourcemembers)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a member to a Telegraf config

<a id="opIdPostTelegrafsIDMembers"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /telegrafs/{telegrafID}/members`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-a-member-to-a-telegraf-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf config ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as member|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "member"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-member-to-a-telegraf-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Member added to Telegraf config|[ResourceMember](#schemaresourcemember)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a member from a Telegraf config

<a id="opIdDeleteTelegrafsIDMembersID"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/members/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /telegrafs/{telegrafID}/members/{userID}`

<h3 id="remove-a-member-from-a-telegraf-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the member to remove.|
|telegrafID|path|string|true|The Telegraf config ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-a-member-from-a-telegraf-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all owners of a Telegraf configuration

<a id="opIdGetTelegrafsIDOwners"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/owners \
  -H 'Accept: application/json'
```

`GET /telegrafs/{telegrafID}/owners`

<h3 id="list-all-owners-of-a-telegraf-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf configuration ID.|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "owner"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-owners-of-a-telegraf-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Telegraf configuration owners as a ResourceOwners list|[ResourceOwners](#schemaresourceowners)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an owner to a Telegraf configuration

<a id="opIdPostTelegrafsIDOwners"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/owners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /telegrafs/{telegrafID}/owners`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="add-an-owner-to-a-telegraf-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|telegrafID|path|string|true|The Telegraf configuration ID.|
|body|body|[AddResourceMemberRequestBody](#schemaaddresourcememberrequestbody)|true|User to add as owner|
|» id|body|string|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "owner"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-an-owner-to-a-telegraf-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Telegraf configuration owner was added. Returns a ResourceOwner that references the User.|[ResourceOwner](#schemaresourceowner)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an owner from a Telegraf config

<a id="opIdDeleteTelegrafsIDOwnersID"></a>

> Code samples

```bash
curl https://example.com/telegrafs/string/owners/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /telegrafs/{telegrafID}/owners/{userID}`

<h3 id="remove-an-owner-from-a-telegraf-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|userID|path|string|true|The ID of the owner to remove.|
|telegrafID|path|string|true|The Telegraf config ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="remove-an-owner-from-a-telegraf-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Owner removed|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-variables">Variables</h1>

## List all variables

<a id="opIdGetVariables"></a>

> Code samples

```bash
curl https://example.com/variables \
  -H 'Accept: application/json'
```

`GET /variables`

<h3 id="list-all-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|org|query|string|false|The name of the organization.|
|orgID|query|string|false|The organization ID.|

> Example responses

> 200 Response

```json
{
  "variables": [
    {
      "arguments": {
        "type": "constant",
        "values": [
          "howdy",
          "hello",
          "hi",
          "yo",
          "oy"
        ]
      },
      "id": "1221432",
      "name": ":ok:",
      "selected": [
        "hello"
      ]
    },
    {
      "arguments": {
        "type": "map",
        "values": {
          "a": "fdjaklfdjkldsfjlkjdsa",
          "b": "dfaksjfkljekfajekdljfas",
          "c": "fdjksajfdkfeawfeea"
        }
      },
      "id": "1221432",
      "name": ":ok:",
      "selected": [
        "c"
      ]
    },
    {
      "arguments": {
        "language": "flux",
        "query": "from(bucket: \"foo\") |&gt; showMeasurements()",
        "type": "query"
      },
      "id": "1221432",
      "name": ":ok:",
      "selected": [
        "host"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of variables for an organization|[Variables](#schemavariables)|
|400|Bad Request|Non 2XX error response from server.|[Error](#schemaerror)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a variable

<a id="opIdPostVariables"></a>

> Code samples

```bash
curl https://example.com/variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "arguments": {
      "type": "query",
      "values": {
        "language": "string",
        "query": "string"
      }
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "name": "string",
    "orgID": "string",
    "selected": [
      "string"
    ],
    "updatedAt": "1970-01-01T00:00:00Z"
  }'
```

`POST /variables`

> Body parameter

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|body|body|[Variable](#schemavariable)|true|Variable to create|
|» arguments|body|[VariableProperties](#schemavariableproperties)|true|none|
|» createdAt|body|string(date-time)|false|none|
|» description|body|string|false|none|
|» labels|body|[Labels](#schemalabels)|false|none|
|» name|body|string|true|none|
|» orgID|body|string|true|none|
|» selected|body|[string]|false|none|
|» updatedAt|body|string(date-time)|false|none|

> Example responses

> 201 Response

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "http://example.com",
    "org": "http://example.com",
    "self": "http://example.com"
  },
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="create-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Variable created|[Variable](#schemavariable)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a variable

<a id="opIdGetVariablesID"></a>

> Code samples

```bash
curl https://example.com/variables/string \
  -H 'Accept: application/json'
```

`GET /variables/{variableID}`

<h3 id="retrieve-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|variableID|path|string|true|The variable ID.|

> Example responses

> 200 Response

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "http://example.com",
    "org": "http://example.com",
    "self": "http://example.com"
  },
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="retrieve-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable found|[Variable](#schemavariable)|
|404|Not Found|Non 2XX error response from server.|[Error](#schemaerror)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Replace a variable

<a id="opIdPutVariablesID"></a>

> Code samples

```bash
curl https://example.com/variables/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "arguments": {
      "type": "query",
      "values": {
        "language": "string",
        "query": "string"
      }
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "name": "string",
    "orgID": "string",
    "selected": [
      "string"
    ],
    "updatedAt": "1970-01-01T00:00:00Z"
  }'
```

`PUT /variables/{variableID}`

> Body parameter

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="replace-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|variableID|path|string|true|The variable ID.|
|body|body|[Variable](#schemavariable)|true|Variable to replace|
|» arguments|body|[VariableProperties](#schemavariableproperties)|true|none|
|» createdAt|body|string(date-time)|false|none|
|» description|body|string|false|none|
|» labels|body|[Labels](#schemalabels)|false|none|
|» name|body|string|true|none|
|» orgID|body|string|true|none|
|» selected|body|[string]|false|none|
|» updatedAt|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "http://example.com",
    "org": "http://example.com",
    "self": "http://example.com"
  },
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="replace-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable updated|[Variable](#schemavariable)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a variable

<a id="opIdDeleteVariablesID"></a>

> Code samples

```bash
curl https://example.com/variables/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /variables/{variableID}`

<h3 id="delete-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|variableID|path|string|true|The variable ID.|

> Example responses

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Variable deleted|None|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a variable

<a id="opIdPatchVariablesID"></a>

> Code samples

```bash
curl https://example.com/variables/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "arguments": {
      "type": "query",
      "values": {
        "language": "string",
        "query": "string"
      }
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "labels": [
      {
        "name": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "name": "string",
    "orgID": "string",
    "selected": [
      "string"
    ],
    "updatedAt": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /variables/{variableID}`

> Body parameter

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "labels": [
    {
      "name": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|variableID|path|string|true|The variable ID.|
|body|body|[Variable](#schemavariable)|true|Variable update to apply|
|» arguments|body|[VariableProperties](#schemavariableproperties)|true|none|
|» createdAt|body|string(date-time)|false|none|
|» description|body|string|false|none|
|» labels|body|[Labels](#schemalabels)|false|none|
|» name|body|string|true|none|
|» orgID|body|string|true|none|
|» selected|body|[string]|false|none|
|» updatedAt|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "http://example.com",
    "org": "http://example.com",
    "self": "http://example.com"
  },
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="update-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable updated|[Variable](#schemavariable)|
|default|Default|Non 2XX error response from server.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all labels for a variable

<a id="opIdGetVariablesIDLabels"></a>

> Code samples

```bash
curl https://example.com/variables/string/labels \
  -H 'Accept: application/json'
```

`GET /variables/{variableID}/labels`

<h3 id="list-all-labels-for-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|variableID|path|string|true|The variable ID.|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="list-all-labels-for-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all labels for a variable|[LabelsResponse](#schemalabelsresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a label to a variable

<a id="opIdPostVariablesIDLabels"></a>

> Code samples

```bash
curl https://example.com/variables/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labelID": "string"
  }'
```

`POST /variables/{variableID}/labels`

> Body parameter

```json
{
  "labelID": "string"
}
```

<h3 id="add-a-label-to-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|variableID|path|string|true|The variable ID.|
|body|body|[LabelMapping](#schemalabelmapping)|true|Label to add|
|» labelID|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="add-a-label-to-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The newly added label|[LabelResponse](#schemalabelresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a label from a variable

<a id="opIdDeleteVariablesIDLabelsID"></a>

> Code samples

```bash
curl https://example.com/variables/string/labels/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /variables/{variableID}/labels/{labelID}`

<h3 id="delete-a-label-from-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|variableID|path|string|true|The variable ID.|
|labelID|path|string|true|The label ID to delete.|

> Example responses

> 404 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="delete-a-label-from-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Delete has been accepted|None|
|404|Not Found|Variable not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="influx-oss-api-service-write">Write</h1>

## Write time series data into InfluxDB

<a id="opIdPostWrite"></a>

> Code samples

```bash
curl 'https://example.com/write?org=string&bucket=string' \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /write`

<h3 id="write-time-series-data-into-influxdb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Zap-Trace-Span|header|string|false|OpenTracing span context|
|Content-Encoding|header|string|false|When present, its value indicates to the database that compression is applied to the line-protocol body.|
|Content-Type|header|string|false|Content-Type is used to indicate the format of the data sent to the server.|
|Content-Length|header|integer|false|Content-Length is an entity header is indicating the size of the entity-body, in bytes, sent to the database. If the length is greater than the database max body configuration option, a 413 response is sent.|
|Accept|header|string|false|Specifies the return content format.|
|org|query|string|true|Specifies the destination organization for writes. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence.|
|orgID|query|string|false|Specifies the ID of the destination organization for writes. If both `orgID` and `org` are specified, `org` takes precedence.|
|bucket|query|string|true|The destination bucket for writes.|
|precision|query|[WritePrecision](#schemawriteprecision)|false|The precision for the unix timestamps within the body line-protocol.|
|body|body|string(byte)|true|Line protocol body|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Encoding|gzip|
|Content-Encoding|identity|
|Content-Type|text/plain|
|Content-Type|text/plain; charset=utf-8|
|Content-Type|application/vnd.influx.arrow|
|Accept|application/json|
|precision|ms|
|precision|s|
|precision|us|
|precision|ns|

> Example responses

> 400 Response

```json
{
  "code": "internal error",
  "err": "string",
  "line": 0,
  "message": "string",
  "op": "string"
}
```

> 401 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 403 Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

> 413 Response

```json
{
  "code": "invalid",
  "maxLength": 0,
  "message": "string"
}
```

> default Response

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

<h3 id="write-time-series-data-into-influxdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Write data is correctly formatted and accepted for writing to the bucket.|None|
|400|Bad Request|Line protocol poorly formed and no points were written.  Response can be used to determine the first malformed line in the body line-protocol. All data in body was rejected and not written.|[LineProtocolError](#schemalineprotocolerror)|
|401|Unauthorized|Token does not have sufficient permissions to write to this organization and bucket or the organization and bucket do not exist.|[Error](#schemaerror)|
|403|Forbidden|No token was sent and they are required.|[Error](#schemaerror)|
|413|Payload Too Large|Write has been rejected because the payload is too large. Error message returns max size supported. All data in body was rejected and not written.|[LineProtocolLengthError](#schemalineprotocollengtherror)|
|429|Too Many Requests|Token is temporarily over quota. The Retry-After header describes when to try the write again.|None|
|503|Service Unavailable|Server is temporarily unavailable to accept writes.  The Retry-After header describes when to try the write again.|None|
|default|Default|Internal server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer|int32|A non-negative decimal integer indicating the seconds to delay after the response is received.|
|503|Retry-After|integer|int32|A non-negative decimal integer indicating the seconds to delay after the response is received.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ASTResponse">ASTResponse</h2>
<!-- backwards compatibility -->
<a id="schemaastresponse"></a>
<a id="schema_ASTResponse"></a>
<a id="tocSastresponse"></a>
<a id="tocsastresponse"></a>

```json
{
  "ast": {
    "files": [
      {
        "body": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "imports": [
          {
            "as": {
              "name": "string",
              "type": "string"
            },
            "path": {
              "type": "string",
              "value": "string"
            },
            "type": "string"
          }
        ],
        "name": "string",
        "package": {
          "name": {
            "name": "string",
            "type": "string"
          },
          "type": "string"
        },
        "type": "string"
      }
    ],
    "package": "string",
    "path": "string",
    "type": "string"
  }
}
```

Contains the AST for the supplied Flux query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ast|[Package](#schemapackage)|false|none|Represents a complete package source tree.|

<h2 id="tocS_AddResourceMemberRequestBody">AddResourceMemberRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaaddresourcememberrequestbody"></a>
<a id="schema_AddResourceMemberRequestBody"></a>
<a id="tocSaddresourcememberrequestbody"></a>
<a id="tocsaddresourcememberrequestbody"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|false|none|none|

<h2 id="tocS_AnalyzeQueryResponse">AnalyzeQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzequeryresponse"></a>
<a id="schema_AnalyzeQueryResponse"></a>
<a id="tocSanalyzequeryresponse"></a>
<a id="tocsanalyzequeryresponse"></a>

```json
{
  "errors": [
    {
      "character": 0,
      "column": 0,
      "line": 0,
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|

<h2 id="tocS_ArrayExpression">ArrayExpression</h2>
<!-- backwards compatibility -->
<a id="schemaarrayexpression"></a>
<a id="schema_ArrayExpression"></a>
<a id="tocSarrayexpression"></a>
<a id="tocsarrayexpression"></a>

```json
{
  "elements": [
    {}
  ],
  "type": "string"
}
```

Used to create and directly specify the elements of an array object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[Expression](#schemaexpression)]|false|none|Elements of the array|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Authorization">Authorization</h2>
<!-- backwards compatibility -->
<a id="schemaauthorization"></a>
<a id="schema_Authorization"></a>
<a id="tocSauthorization"></a>
<a id="tocsauthorization"></a>

```json
{
  "description": "string",
  "status": "active",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "self": "/api/v2/authorizations/1",
    "user": "/api/v2/users/12"
  },
  "org": "string",
  "orgID": "string",
  "permissions": [
    {
      "action": "read",
      "resource": {
        "id": "string",
        "name": "string",
        "org": "string",
        "orgID": "string",
        "type": "authorizations"
      }
    }
  ],
  "token": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "user": "string",
  "userID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the token.|
|status|string|false|none|If inactive the token is inactive and requests using the token will be rejected.|
|createdAt|string(date-time)|false|read-only|none|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|org|string|false|read-only|Name of the org token is scoped to.|
|orgID|string|true|none|ID of org that authorization is scoped to.|
|permissions|[[Permission](#schemapermission)]|true|none|List of permissions for an auth.  An auth must have at least one Permission.|
|token|string|false|read-only|Passed via the Authorization Header and Token Authentication type.|
|updatedAt|string(date-time)|false|read-only|none|
|user|string|false|read-only|Name of user that created and owns the token.|
|userID|string|false|read-only|ID of user that created and owns the token.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_AuthorizationPostRequest">AuthorizationPostRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationpostrequest"></a>
<a id="schema_AuthorizationPostRequest"></a>
<a id="tocSauthorizationpostrequest"></a>
<a id="tocsauthorizationpostrequest"></a>

```json
{
  "description": "string",
  "status": "active",
  "orgID": "string",
  "permissions": [
    {
      "action": "read",
      "resource": {
        "id": "string",
        "name": "string",
        "org": "string",
        "orgID": "string",
        "type": "authorizations"
      }
    }
  ],
  "userID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the token.|
|status|string|false|none|If inactive the token is inactive and requests using the token will be rejected.|
|orgID|string|true|none|ID of org that authorization is scoped to.|
|permissions|[[Permission](#schemapermission)]|true|none|List of permissions for an auth.  An auth must have at least one Permission.|
|userID|string|false|none|ID of user that authorization is scoped to.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_AuthorizationUpdateRequest">AuthorizationUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationupdaterequest"></a>
<a id="schema_AuthorizationUpdateRequest"></a>
<a id="tocSauthorizationupdaterequest"></a>
<a id="tocsauthorizationupdaterequest"></a>

```json
{
  "description": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the token.|
|status|string|false|none|If inactive the token is inactive and requests using the token will be rejected.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_Authorizations">Authorizations</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizations"></a>
<a id="schema_Authorizations"></a>
<a id="tocSauthorizations"></a>
<a id="tocsauthorizations"></a>

```json
{
  "authorizations": [
    {
      "description": "string",
      "status": "active",
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "links": {
        "self": "/api/v2/authorizations/1",
        "user": "/api/v2/users/12"
      },
      "org": "string",
      "orgID": "string",
      "permissions": [
        {
          "action": "read",
          "resource": {
            "id": "string",
            "name": "string",
            "org": "string",
            "orgID": "string",
            "type": "authorizations"
          }
        }
      ],
      "token": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "user": "string",
      "userID": "string"
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizations|[[Authorization](#schemaauthorization)]|false|none|none|
|links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_Axes">Axes</h2>
<!-- backwards compatibility -->
<a id="schemaaxes"></a>
<a id="schema_Axes"></a>
<a id="tocSaxes"></a>
<a id="tocsaxes"></a>

```json
{
  "x": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  },
  "y": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  }
}
```

The viewport for a View's visualizations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|[Axis](#schemaaxis)|true|none|The description of a particular axis for a visualization.|
|y|[Axis](#schemaaxis)|true|none|The description of a particular axis for a visualization.|

<h2 id="tocS_Axis">Axis</h2>
<!-- backwards compatibility -->
<a id="schemaaxis"></a>
<a id="schema_Axis"></a>
<a id="tocSaxis"></a>
<a id="tocsaxis"></a>

```json
{
  "base": "",
  "bounds": [
    "string"
  ],
  "label": "string",
  "prefix": "string",
  "scale": "log",
  "suffix": "string"
}
```

The description of a particular axis for a visualization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|string|false|none|Base represents the radix for formatting axis values.|
|bounds|[string]|false|none|The extents of an axis in the form [lower, upper]. Clients determine whether bounds are to be inclusive or exclusive of their limits|
|label|string|false|none|Label is a description of this Axis|
|prefix|string|false|none|Prefix represents a label prefix for formatting axis values.|
|scale|[AxisScale](#schemaaxisscale)|false|none|Scale is the axis formatting scale. Supported: "log", "linear"|
|suffix|string|false|none|Suffix represents a label suffix for formatting axis values.|

#### Enumerated Values

|Property|Value|
|---|---|
|base|""|
|base|2|
|base|10|
|scale|log|
|scale|linear|

<h2 id="tocS_AxisScale">AxisScale</h2>
<!-- backwards compatibility -->
<a id="schemaaxisscale"></a>
<a id="schema_AxisScale"></a>
<a id="tocSaxisscale"></a>
<a id="tocsaxisscale"></a>

```json
"log"
```

Scale is the axis formatting scale. Supported: "log", "linear"

<h2 id="tocS_BadStatement">BadStatement</h2>
<!-- backwards compatibility -->
<a id="schemabadstatement"></a>
<a id="schema_BadStatement"></a>
<a id="tocSbadstatement"></a>
<a id="tocsbadstatement"></a>

```json
{
  "text": "string",
  "type": "string"
}
```

A placeholder for statements for which no correct statement nodes can be created

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|Raw source text|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_BandViewProperties">BandViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemabandviewproperties"></a>
<a id="schema_BandViewProperties"></a>
<a id="tocSbandviewproperties"></a>
<a id="tocsbandviewproperties"></a>

```json
{
  "axes": {
    "x": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    },
    "y": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    }
  },
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "generateXAxisTicks": [
    "string"
  ],
  "generateYAxisTicks": [
    "string"
  ],
  "geom": "line",
  "hoverDimension": "auto",
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "lowerColumn": "string",
  "mainColumn": "string",
  "note": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "staticLegend": {
    "colorizeRows": true,
    "heightRatio": 0,
    "hide": true,
    "opacity": 0,
    "orientationThreshold": 0,
    "valueAxis": "string",
    "widthRatio": 0
  },
  "timeFormat": "string",
  "type": "band",
  "upperColumn": "string",
  "xColumn": "string",
  "xTickStart": 0,
  "xTickStep": 0,
  "xTotalTicks": 0,
  "yColumn": "string",
  "yTickStart": 0,
  "yTickStep": 0,
  "yTotalTicks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axes|[Axes](#schemaaxes)|true|none|The viewport for a View's visualizations|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|generateXAxisTicks|[string]|false|none|none|
|generateYAxisTicks|[string]|false|none|none|
|geom|[XYGeom](#schemaxygeom)|true|none|none|
|hoverDimension|string|false|none|none|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|lowerColumn|string|false|none|none|
|mainColumn|string|false|none|none|
|note|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|staticLegend|[StaticLegend](#schemastaticlegend)|false|none|StaticLegend represents the options specific to the static legend|
|timeFormat|string|false|none|none|
|type|string|true|none|none|
|upperColumn|string|false|none|none|
|xColumn|string|false|none|none|
|xTickStart|number(float)|false|none|none|
|xTickStep|number(float)|false|none|none|
|xTotalTicks|integer|false|none|none|
|yColumn|string|false|none|none|
|yTickStart|number(float)|false|none|none|
|yTickStep|number(float)|false|none|none|
|yTotalTicks|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|geom|line|
|geom|step|
|geom|stacked|
|geom|bar|
|geom|monotoneX|
|hoverDimension|auto|
|hoverDimension|x|
|hoverDimension|y|
|hoverDimension|xy|
|shape|chronograf-v2|
|type|band|

<h2 id="tocS_BinaryExpression">BinaryExpression</h2>
<!-- backwards compatibility -->
<a id="schemabinaryexpression"></a>
<a id="schema_BinaryExpression"></a>
<a id="tocSbinaryexpression"></a>
<a id="tocsbinaryexpression"></a>

```json
{
  "left": {},
  "operator": "string",
  "right": {},
  "type": "string"
}
```

uses binary operators to act on two operands in an expression

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|left|[Expression](#schemaexpression)|false|none|none|
|operator|string|false|none|none|
|right|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "body": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "type": "string"
}
```

A set of statements

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[[Statement](#schemastatement)]|false|none|Block body|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_BooleanLiteral">BooleanLiteral</h2>
<!-- backwards compatibility -->
<a id="schemabooleanliteral"></a>
<a id="schema_BooleanLiteral"></a>
<a id="tocSbooleanliteral"></a>
<a id="tocsbooleanliteral"></a>

```json
{
  "type": "string",
  "value": true
}
```

Represents boolean values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|boolean|false|none|none|

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/buckets/1/labels",
    "members": "/api/v2/buckets/1/members",
    "org": "/api/v2/orgs/2",
    "owners": "/api/v2/buckets/1/owners",
    "self": "/api/v2/buckets/1",
    "write": "/api/v2/write?org=2&amp;bucket=1"
  },
  "name": "string",
  "orgID": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ],
  "rp": "string",
  "schemaType": "implicit",
  "type": "user",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|none|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|false|none|none|
|retentionRules|[RetentionRules](#schemaretentionrules)|true|none|Rules to expire or retain data.  No rules means data never expires.|
|rp|string|false|none|none|
|schemaType|[SchemaType](#schemaschematype)|false|none|none|
|type|string|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|schemaType|implicit|
|schemaType|explicit|
|type|user|
|type|system|

<h2 id="tocS_Buckets">Buckets</h2>
<!-- backwards compatibility -->
<a id="schemabuckets"></a>
<a id="schema_Buckets"></a>
<a id="tocSbuckets"></a>
<a id="tocsbuckets"></a>

```json
{
  "buckets": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "labels": "/api/v2/buckets/1/labels",
        "members": "/api/v2/buckets/1/members",
        "org": "/api/v2/orgs/2",
        "owners": "/api/v2/buckets/1/owners",
        "self": "/api/v2/buckets/1",
        "write": "/api/v2/write?org=2&amp;bucket=1"
      },
      "name": "string",
      "orgID": "string",
      "retentionRules": [
        {
          "everySeconds": 86400,
          "shardGroupDurationSeconds": 0,
          "type": "expire"
        }
      ],
      "rp": "string",
      "schemaType": "implicit",
      "type": "user",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|[[Bucket](#schemabucket)]|false|none|none|
|links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_BuilderAggregateFunctionType">BuilderAggregateFunctionType</h2>
<!-- backwards compatibility -->
<a id="schemabuilderaggregatefunctiontype"></a>
<a id="schema_BuilderAggregateFunctionType"></a>
<a id="tocSbuilderaggregatefunctiontype"></a>
<a id="tocsbuilderaggregatefunctiontype"></a>

```json
"filter"
```

<h2 id="tocS_BuilderConfig">BuilderConfig</h2>
<!-- backwards compatibility -->
<a id="schemabuilderconfig"></a>
<a id="schema_BuilderConfig"></a>
<a id="tocSbuilderconfig"></a>
<a id="tocsbuilderconfig"></a>

```json
{
  "aggregateWindow": {
    "fillValues": true,
    "period": "string"
  },
  "buckets": [
    "string"
  ],
  "functions": [
    {
      "name": "string"
    }
  ],
  "tags": [
    {
      "aggregateFunctionType": "filter",
      "key": "string",
      "values": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateWindow|object|false|none|none|
|buckets|[string]|false|none|none|
|functions|[[BuilderFunctionsType](#schemabuilderfunctionstype)]|false|none|none|
|tags|[[BuilderTagsType](#schemabuildertagstype)]|false|none|none|

<h2 id="tocS_BuilderFunctionsType">BuilderFunctionsType</h2>
<!-- backwards compatibility -->
<a id="schemabuilderfunctionstype"></a>
<a id="schema_BuilderFunctionsType"></a>
<a id="tocSbuilderfunctionstype"></a>
<a id="tocsbuilderfunctionstype"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_BuilderTagsType">BuilderTagsType</h2>
<!-- backwards compatibility -->
<a id="schemabuildertagstype"></a>
<a id="schema_BuilderTagsType"></a>
<a id="tocSbuildertagstype"></a>
<a id="tocsbuildertagstype"></a>

```json
{
  "aggregateFunctionType": "filter",
  "key": "string",
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateFunctionType|[BuilderAggregateFunctionType](#schemabuilderaggregatefunctiontype)|false|none|none|
|key|string|false|none|none|
|values|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregateFunctionType|filter|
|aggregateFunctionType|group|

<h2 id="tocS_BuiltinStatement">BuiltinStatement</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinstatement"></a>
<a id="schema_BuiltinStatement"></a>
<a id="tocSbuiltinstatement"></a>
<a id="tocsbuiltinstatement"></a>

```json
{
  "id": {
    "name": "string",
    "type": "string"
  },
  "type": "string"
}
```

Declares a builtin identifier and its type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Identifier](#schemaidentifier)|false|none|A valid Flux identifier|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_CallExpression">CallExpression</h2>
<!-- backwards compatibility -->
<a id="schemacallexpression"></a>
<a id="schema_CallExpression"></a>
<a id="tocScallexpression"></a>
<a id="tocscallexpression"></a>

```json
{
  "arguments": [
    {}
  ],
  "callee": {},
  "type": "string"
}
```

Represents a function call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|[[Expression](#schemaexpression)]|false|none|Function arguments|
|callee|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Cell">Cell</h2>
<!-- backwards compatibility -->
<a id="schemacell"></a>
<a id="schema_Cell"></a>
<a id="tocScell"></a>
<a id="tocscell"></a>

```json
{
  "h": 0,
  "id": "string",
  "links": {
    "self": "string",
    "view": "string"
  },
  "viewID": "string",
  "w": 0,
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|h|integer(int32)|false|none|none|
|id|string|false|none|none|
|links|object|false|none|none|
|viewID|string|false|none|The reference to a view from the views API.|
|w|integer(int32)|false|none|none|
|x|integer(int32)|false|none|none|
|y|integer(int32)|false|none|none|

<h2 id="tocS_CellUpdate">CellUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacellupdate"></a>
<a id="schema_CellUpdate"></a>
<a id="tocScellupdate"></a>
<a id="tocscellupdate"></a>

```json
{
  "h": 0,
  "w": 0,
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|h|integer(int32)|false|none|none|
|w|integer(int32)|false|none|none|
|x|integer(int32)|false|none|none|
|y|integer(int32)|false|none|none|

<h2 id="tocS_CellWithViewProperties">CellWithViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemacellwithviewproperties"></a>
<a id="schema_CellWithViewProperties"></a>
<a id="tocScellwithviewproperties"></a>
<a id="tocscellwithviewproperties"></a>

```json
{
  "h": 0,
  "id": "string",
  "links": {
    "self": "string",
    "view": "string"
  },
  "viewID": "string",
  "w": 0,
  "x": 0,
  "y": 0,
  "name": "string",
  "properties": {
    "axes": {
      "x": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "y": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      }
    },
    "colors": [
      {
        "hex": "strings",
        "id": "string",
        "name": "string",
        "type": "min",
        "value": 0
      }
    ],
    "decimalPlaces": {
      "digits": 0,
      "isEnforced": true
    },
    "generateXAxisTicks": [
      "string"
    ],
    "generateYAxisTicks": [
      "string"
    ],
    "hoverDimension": "auto",
    "legendColorizeRows": true,
    "legendHide": true,
    "legendOpacity": 0,
    "legendOrientationThreshold": 0,
    "note": "string",
    "position": "overlaid",
    "prefix": "string",
    "queries": [
      {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      }
    ],
    "shadeBelow": true,
    "shape": "chronograf-v2",
    "showNoteWhenEmpty": true,
    "staticLegend": {
      "colorizeRows": true,
      "heightRatio": 0,
      "hide": true,
      "opacity": 0,
      "orientationThreshold": 0,
      "valueAxis": "string",
      "widthRatio": 0
    },
    "suffix": "string",
    "timeFormat": "string",
    "type": "line-plus-single-stat",
    "xColumn": "string",
    "xTickStart": 0,
    "xTickStep": 0,
    "xTotalTicks": 0,
    "yColumn": "string",
    "yTickStart": 0,
    "yTickStep": 0,
    "yTotalTicks": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|h|integer(int32)|false|none|none|
|id|string|false|none|none|
|links|object|false|none|none|
|viewID|string|false|none|The reference to a view from the views API.|
|w|integer(int32)|false|none|none|
|x|integer(int32)|false|none|none|
|y|integer(int32)|false|none|none|
|name|string|false|none|none|
|properties|[ViewProperties](#schemaviewproperties)|false|none|none|

<h2 id="tocS_Cells">Cells</h2>
<!-- backwards compatibility -->
<a id="schemacells"></a>
<a id="schema_Cells"></a>
<a id="tocScells"></a>
<a id="tocscells"></a>

```json
[
  {
    "h": 0,
    "id": "string",
    "links": {
      "self": "string",
      "view": "string"
    },
    "viewID": "string",
    "w": 0,
    "x": 0,
    "y": 0
  }
]
```

<h2 id="tocS_CellsWithViewProperties">CellsWithViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemacellswithviewproperties"></a>
<a id="schema_CellsWithViewProperties"></a>
<a id="tocScellswithviewproperties"></a>
<a id="tocscellswithviewproperties"></a>

```json
[
  {
    "h": 0,
    "id": "string",
    "links": {
      "self": "string",
      "view": "string"
    },
    "viewID": "string",
    "w": 0,
    "x": 0,
    "y": 0,
    "name": "string",
    "properties": {
      "axes": {
        "x": {
          "base": "",
          "bounds": [
            "string"
          ],
          "label": "string",
          "prefix": "string",
          "scale": "log",
          "suffix": "string"
        },
        "y": {
          "base": "",
          "bounds": [
            "string"
          ],
          "label": "string",
          "prefix": "string",
          "scale": "log",
          "suffix": "string"
        }
      },
      "colors": [
        {
          "hex": "strings",
          "id": "string",
          "name": "string",
          "type": "min",
          "value": 0
        }
      ],
      "decimalPlaces": {
        "digits": 0,
        "isEnforced": true
      },
      "generateXAxisTicks": [
        "string"
      ],
      "generateYAxisTicks": [
        "string"
      ],
      "hoverDimension": "auto",
      "legendColorizeRows": true,
      "legendHide": true,
      "legendOpacity": 0,
      "legendOrientationThreshold": 0,
      "note": "string",
      "position": "overlaid",
      "prefix": "string",
      "queries": [
        {
          "builderConfig": {
            "aggregateWindow": {
              "fillValues": true,
              "period": "string"
            },
            "buckets": [
              "string"
            ],
            "functions": [
              {
                "name": "string"
              }
            ],
            "tags": [
              {
                "aggregateFunctionType": "filter",
                "key": "string",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "editMode": "builder",
          "name": "string",
          "text": "string"
        }
      ],
      "shadeBelow": true,
      "shape": "chronograf-v2",
      "showNoteWhenEmpty": true,
      "staticLegend": {
        "colorizeRows": true,
        "heightRatio": 0,
        "hide": true,
        "opacity": 0,
        "orientationThreshold": 0,
        "valueAxis": "string",
        "widthRatio": 0
      },
      "suffix": "string",
      "timeFormat": "string",
      "type": "line-plus-single-stat",
      "xColumn": "string",
      "xTickStart": 0,
      "xTickStep": 0,
      "xTotalTicks": 0,
      "yColumn": "string",
      "yTickStart": 0,
      "yTickStep": 0,
      "yTotalTicks": 0
    }
  }
]
```

<h2 id="tocS_Check">Check</h2>
<!-- backwards compatibility -->
<a id="schemacheck"></a>
<a id="schema_Check"></a>
<a id="tocScheck"></a>
<a id="tocscheck"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DeadmanCheck](#schemadeadmancheck)|false|none|none|
|*oneOf*|[ThresholdCheck](#schemathresholdcheck)|false|none|none|
|*oneOf*|[CustomCheck](#schemacustomcheck)|false|none|none|

<h2 id="tocS_CheckBase">CheckBase</h2>
<!-- backwards compatibility -->
<a id="schemacheckbase"></a>
<a id="schema_CheckBase"></a>
<a id="tocScheckbase"></a>
<a id="tocscheckbase"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the check.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|true|none|The ID of the organization that owns this check.|
|ownerID|string|false|read-only|The ID of creator used to create this check.|
|query|[DashboardQuery](#schemadashboardquery)|true|none|none|
|status|[TaskStatusType](#schemataskstatustype)|false|none|none|
|taskID|string|false|none|The ID of the task associated with this check.|
|updatedAt|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|

<h2 id="tocS_CheckDiscriminator">CheckDiscriminator</h2>
<!-- backwards compatibility -->
<a id="schemacheckdiscriminator"></a>
<a id="schema_CheckDiscriminator"></a>
<a id="tocScheckdiscriminator"></a>
<a id="tocscheckdiscriminator"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DeadmanCheck](#schemadeadmancheck)|false|none|none|
|*oneOf*|[ThresholdCheck](#schemathresholdcheck)|false|none|none|
|*oneOf*|[CustomCheck](#schemacustomcheck)|false|none|none|

<h2 id="tocS_CheckPatch">CheckPatch</h2>
<!-- backwards compatibility -->
<a id="schemacheckpatch"></a>
<a id="schema_CheckPatch"></a>
<a id="tocScheckpatch"></a>
<a id="tocscheckpatch"></a>

```json
{
  "description": "string",
  "name": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_CheckStatusLevel">CheckStatusLevel</h2>
<!-- backwards compatibility -->
<a id="schemacheckstatuslevel"></a>
<a id="schema_CheckStatusLevel"></a>
<a id="tocScheckstatuslevel"></a>
<a id="tocscheckstatuslevel"></a>

```json
"UNKNOWN"
```

The state to record if check matches a criteria.

<h2 id="tocS_CheckViewProperties">CheckViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemacheckviewproperties"></a>
<a id="schema_CheckViewProperties"></a>
<a id="tocScheckviewproperties"></a>
<a id="tocscheckviewproperties"></a>

```json
{
  "check": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "labels": [
      {
        "id": "string",
        "name": "string",
        "orgID": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "lastRunError": "string",
    "lastRunStatus": "failed",
    "latestCompleted": "1970-01-01T00:00:00Z",
    "links": {
      "labels": "/api/v2/checks/1/labels",
      "members": "/api/v2/checks/1/members",
      "owners": "/api/v2/checks/1/owners",
      "query": "/api/v2/checks/1/query",
      "self": "/api/v2/checks/1"
    },
    "name": "string",
    "orgID": "string",
    "ownerID": "string",
    "query": {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    },
    "status": "active",
    "taskID": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "every": "string",
    "level": "UNKNOWN",
    "offset": "string",
    "reportZero": true,
    "staleTime": "string",
    "statusMessageTemplate": "string",
    "tags": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "timeSince": "string",
    "type": "deadman"
  },
  "checkID": "string",
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "type": "check"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check|[Check](#schemacheck)|false|none|none|
|checkID|string|true|none|none|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|check|

<h2 id="tocS_Checks">Checks</h2>
<!-- backwards compatibility -->
<a id="schemachecks"></a>
<a id="schema_Checks"></a>
<a id="tocSchecks"></a>
<a id="tocschecks"></a>

```json
{
  "checks": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "lastRunError": "string",
      "lastRunStatus": "failed",
      "latestCompleted": "1970-01-01T00:00:00Z",
      "links": {
        "labels": "/api/v2/checks/1/labels",
        "members": "/api/v2/checks/1/members",
        "owners": "/api/v2/checks/1/owners",
        "query": "/api/v2/checks/1/query",
        "self": "/api/v2/checks/1"
      },
      "name": "string",
      "orgID": "string",
      "ownerID": "string",
      "query": {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      },
      "status": "active",
      "taskID": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "every": "string",
      "level": "UNKNOWN",
      "offset": "string",
      "reportZero": true,
      "staleTime": "string",
      "statusMessageTemplate": "string",
      "tags": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "timeSince": "string",
      "type": "deadman"
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[Check](#schemacheck)]|false|none|none|
|links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_ConditionalExpression">ConditionalExpression</h2>
<!-- backwards compatibility -->
<a id="schemaconditionalexpression"></a>
<a id="schema_ConditionalExpression"></a>
<a id="tocSconditionalexpression"></a>
<a id="tocsconditionalexpression"></a>

```json
{
  "alternate": {},
  "consequent": {},
  "test": {},
  "type": "string"
}
```

Selects one of two expressions, `Alternate` or `Consequent`, depending on a third boolean expression, `Test`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate|[Expression](#schemaexpression)|false|none|none|
|consequent|[Expression](#schemaexpression)|false|none|none|
|test|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_ConstantVariableProperties">ConstantVariableProperties</h2>
<!-- backwards compatibility -->
<a id="schemaconstantvariableproperties"></a>
<a id="schema_ConstantVariableProperties"></a>
<a id="tocSconstantvariableproperties"></a>
<a id="tocsconstantvariableproperties"></a>

```json
{
  "type": "constant",
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|values|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|constant|

<h2 id="tocS_CreateCell">CreateCell</h2>
<!-- backwards compatibility -->
<a id="schemacreatecell"></a>
<a id="schema_CreateCell"></a>
<a id="tocScreatecell"></a>
<a id="tocscreatecell"></a>

```json
{
  "h": 0,
  "name": "string",
  "usingView": "string",
  "w": 0,
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|h|integer(int32)|false|none|none|
|name|string|false|none|none|
|usingView|string|false|none|Makes a copy of the provided view.|
|w|integer(int32)|false|none|none|
|x|integer(int32)|false|none|none|
|y|integer(int32)|false|none|none|

<h2 id="tocS_CreateDashboardRequest">CreateDashboardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedashboardrequest"></a>
<a id="schema_CreateDashboardRequest"></a>
<a id="tocScreatedashboardrequest"></a>
<a id="tocscreatedashboardrequest"></a>

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The user-facing description of the dashboard.|
|name|string|true|none|The user-facing name of the dashboard.|
|orgID|string|true|none|The ID of the organization that owns the dashboard.|

<h2 id="tocS_CustomCheck">CustomCheck</h2>
<!-- backwards compatibility -->
<a id="schemacustomcheck"></a>
<a id="schema_CustomCheck"></a>
<a id="tocScustomcheck"></a>
<a id="tocscustomcheck"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "type": "custom"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the check.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|true|none|The ID of the organization that owns this check.|
|ownerID|string|false|read-only|The ID of creator used to create this check.|
|query|[DashboardQuery](#schemadashboardquery)|true|none|none|
|status|[TaskStatusType](#schemataskstatustype)|false|none|none|
|taskID|string|false|none|The ID of the task associated with this check.|
|updatedAt|string(date-time)|false|read-only|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|type|custom|

<h2 id="tocS_DBRP">DBRP</h2>
<!-- backwards compatibility -->
<a id="schemadbrp"></a>
<a id="schema_DBRP"></a>
<a id="tocSdbrp"></a>
<a id="tocsdbrp"></a>

```json
{
  "bucketID": "string",
  "database": "string",
  "default": true,
  "id": "string",
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "org": "string",
  "orgID": "string",
  "retention_policy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketID|string|false|none|the bucket ID used as target for the translation.|
|database|string|false|none|InfluxDB v1 database|
|default|boolean|false|none|Specify if this mapping represents the default retention policy for the database specificed.|
|id|string|false|read-only|the mapping identifier|
|links|[Links](#schemalinks)|false|none|none|
|org|string|false|none|the organization that owns this mapping.|
|orgID|string|false|none|the organization ID that owns this mapping.|
|retention_policy|string|false|none|InfluxDB v1 retention policy|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|

<h2 id="tocS_DBRPUpdate">DBRPUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadbrpupdate"></a>
<a id="schema_DBRPUpdate"></a>
<a id="tocSdbrpupdate"></a>
<a id="tocsdbrpupdate"></a>

```json
{
  "database": "string",
  "default": true,
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "retention_policy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|false|none|InfluxDB v1 database|
|default|boolean|false|none|none|
|links|[Links](#schemalinks)|false|none|none|
|retention_policy|string|false|none|InfluxDB v1 retention policy|

<h2 id="tocS_DBRPs">DBRPs</h2>
<!-- backwards compatibility -->
<a id="schemadbrps"></a>
<a id="schema_DBRPs"></a>
<a id="tocSdbrps"></a>
<a id="tocsdbrps"></a>

```json
{
  "content": [
    {
      "bucketID": "string",
      "database": "string",
      "default": true,
      "id": "string",
      "links": {
        "next": "http://example.com",
        "prev": "http://example.com",
        "self": "http://example.com"
      },
      "org": "string",
      "orgID": "string",
      "retention_policy": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[DBRP](#schemadbrp)]|false|none|none|

<h2 id="tocS_Dashboard">Dashboard</h2>
<!-- backwards compatibility -->
<a id="schemadashboard"></a>
<a id="schema_Dashboard"></a>
<a id="tocSdashboard"></a>
<a id="tocsdashboard"></a>

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "cells": [
    {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0
    }
  ],
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "cells": "/api/v2/dashboards/1/cells",
    "labels": "/api/v2/dashboards/1/labels",
    "members": "/api/v2/dashboards/1/members",
    "org": "/api/v2/labels/1",
    "owners": "/api/v2/dashboards/1/owners",
    "self": "/api/v2/dashboards/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The user-facing description of the dashboard.|
|name|string|true|none|The user-facing name of the dashboard.|
|orgID|string|true|none|The ID of the organization that owns the dashboard.|
|cells|[Cells](#schemacells)|false|none|none|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_DashboardColor">DashboardColor</h2>
<!-- backwards compatibility -->
<a id="schemadashboardcolor"></a>
<a id="schema_DashboardColor"></a>
<a id="tocSdashboardcolor"></a>
<a id="tocsdashboardcolor"></a>

```json
{
  "hex": "strings",
  "id": "string",
  "name": "string",
  "type": "min",
  "value": 0
}
```

Defines an encoding of data value into color space.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hex|string|true|none|The hex number of the color|
|id|string|true|none|The unique ID of the view color.|
|name|string|true|none|The user-facing name of the hex color.|
|type|string|true|none|Type is how the color is used.|
|value|number(float)|true|none|The data value mapped to this color.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|min|
|type|max|
|type|threshold|
|type|scale|
|type|text|
|type|background|

<h2 id="tocS_DashboardQuery">DashboardQuery</h2>
<!-- backwards compatibility -->
<a id="schemadashboardquery"></a>
<a id="schema_DashboardQuery"></a>
<a id="tocSdashboardquery"></a>
<a id="tocsdashboardquery"></a>

```json
{
  "builderConfig": {
    "aggregateWindow": {
      "fillValues": true,
      "period": "string"
    },
    "buckets": [
      "string"
    ],
    "functions": [
      {
        "name": "string"
      }
    ],
    "tags": [
      {
        "aggregateFunctionType": "filter",
        "key": "string",
        "values": [
          "string"
        ]
      }
    ]
  },
  "editMode": "builder",
  "name": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builderConfig|[BuilderConfig](#schemabuilderconfig)|false|none|none|
|editMode|[QueryEditMode](#schemaqueryeditmode)|false|none|none|
|name|string|false|none|none|
|text|string|false|none|The text of the Flux query.|

#### Enumerated Values

|Property|Value|
|---|---|
|editMode|builder|
|editMode|advanced|

<h2 id="tocS_DashboardWithViewProperties">DashboardWithViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemadashboardwithviewproperties"></a>
<a id="schema_DashboardWithViewProperties"></a>
<a id="tocSdashboardwithviewproperties"></a>
<a id="tocsdashboardwithviewproperties"></a>

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "cells": [
    {
      "h": 0,
      "id": "string",
      "links": {
        "self": "string",
        "view": "string"
      },
      "viewID": "string",
      "w": 0,
      "x": 0,
      "y": 0,
      "name": "string",
      "properties": {
        "axes": {
          "x": {
            "base": "",
            "bounds": [
              "string"
            ],
            "label": "string",
            "prefix": "string",
            "scale": "log",
            "suffix": "string"
          },
          "y": {
            "base": "",
            "bounds": [
              "string"
            ],
            "label": "string",
            "prefix": "string",
            "scale": "log",
            "suffix": "string"
          }
        },
        "colors": [
          {
            "hex": "strings",
            "id": "string",
            "name": "string",
            "type": "min",
            "value": 0
          }
        ],
        "decimalPlaces": {
          "digits": 0,
          "isEnforced": true
        },
        "generateXAxisTicks": [
          "string"
        ],
        "generateYAxisTicks": [
          "string"
        ],
        "hoverDimension": "auto",
        "legendColorizeRows": true,
        "legendHide": true,
        "legendOpacity": 0,
        "legendOrientationThreshold": 0,
        "note": "string",
        "position": "overlaid",
        "prefix": "string",
        "queries": [
          {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          }
        ],
        "shadeBelow": true,
        "shape": "chronograf-v2",
        "showNoteWhenEmpty": true,
        "staticLegend": {
          "colorizeRows": true,
          "heightRatio": 0,
          "hide": true,
          "opacity": 0,
          "orientationThreshold": 0,
          "valueAxis": "string",
          "widthRatio": 0
        },
        "suffix": "string",
        "timeFormat": "string",
        "type": "line-plus-single-stat",
        "xColumn": "string",
        "xTickStart": 0,
        "xTickStep": 0,
        "xTotalTicks": 0,
        "yColumn": "string",
        "yTickStart": 0,
        "yTickStep": 0,
        "yTotalTicks": 0
      }
    }
  ],
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "cells": "/api/v2/dashboards/1/cells",
    "labels": "/api/v2/dashboards/1/labels",
    "members": "/api/v2/dashboards/1/members",
    "org": "/api/v2/labels/1",
    "owners": "/api/v2/dashboards/1/owners",
    "self": "/api/v2/dashboards/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The user-facing description of the dashboard.|
|name|string|true|none|The user-facing name of the dashboard.|
|orgID|string|true|none|The ID of the organization that owns the dashboard.|
|cells|[CellsWithViewProperties](#schemacellswithviewproperties)|false|none|none|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Dashboards">Dashboards</h2>
<!-- backwards compatibility -->
<a id="schemadashboards"></a>
<a id="schema_Dashboards"></a>
<a id="tocSdashboards"></a>
<a id="tocsdashboards"></a>

```json
{
  "dashboards": [
    {
      "description": "string",
      "name": "string",
      "orgID": "string",
      "cells": [
        {
          "h": 0,
          "id": "string",
          "links": {
            "self": "string",
            "view": "string"
          },
          "viewID": "string",
          "w": 0,
          "x": 0,
          "y": 0
        }
      ],
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "cells": "/api/v2/dashboards/1/cells",
        "labels": "/api/v2/dashboards/1/labels",
        "members": "/api/v2/dashboards/1/members",
        "org": "/api/v2/labels/1",
        "owners": "/api/v2/dashboards/1/owners",
        "self": "/api/v2/dashboards/1"
      },
      "meta": {
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboards|[[Dashboard](#schemadashboard)]|false|none|none|
|links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_DateTimeLiteral">DateTimeLiteral</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeliteral"></a>
<a id="schema_DateTimeLiteral"></a>
<a id="tocSdatetimeliteral"></a>
<a id="tocsdatetimeliteral"></a>

```json
{
  "type": "string",
  "value": "1970-01-01T00:00:00Z"
}
```

Represents an instant in time with nanosecond precision using the syntax of golang's RFC3339 Nanosecond variant

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|string(date-time)|false|none|none|

<h2 id="tocS_DeadmanCheck">DeadmanCheck</h2>
<!-- backwards compatibility -->
<a id="schemadeadmancheck"></a>
<a id="schema_DeadmanCheck"></a>
<a id="tocSdeadmancheck"></a>
<a id="tocsdeadmancheck"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the check.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|true|none|The ID of the organization that owns this check.|
|ownerID|string|false|read-only|The ID of creator used to create this check.|
|query|[DashboardQuery](#schemadashboardquery)|true|none|none|
|status|[TaskStatusType](#schemataskstatustype)|false|none|none|
|taskID|string|false|none|The ID of the task associated with this check.|
|updatedAt|string(date-time)|false|read-only|none|
|every|string|false|none|Check repetition interval.|
|level|[CheckStatusLevel](#schemacheckstatuslevel)|false|none|The state to record if check matches a criteria.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|reportZero|boolean|false|none|If only zero values reported since time, trigger an alert|
|staleTime|string|false|none|String duration for time that a series is considered stale and should not trigger deadman.|
|statusMessageTemplate|string|false|none|The template used to generate and write a status message.|
|tags|[object]|false|none|List of tags to write to each status.|
|timeSince|string|false|none|String duration before deadman triggers.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|level|UNKNOWN|
|level|OK|
|level|INFO|
|level|CRIT|
|level|WARN|
|type|deadman|

<h2 id="tocS_DecimalPlaces">DecimalPlaces</h2>
<!-- backwards compatibility -->
<a id="schemadecimalplaces"></a>
<a id="schema_DecimalPlaces"></a>
<a id="tocSdecimalplaces"></a>
<a id="tocsdecimalplaces"></a>

```json
{
  "digits": 0,
  "isEnforced": true
}
```

Indicates whether decimal places should be enforced, and how many digits it should show.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digits|integer(int32)|false|none|The number of digits after decimal to display|
|isEnforced|boolean|false|none|Indicates whether decimal point setting should be enforced|

<h2 id="tocS_DeletePredicateRequest">DeletePredicateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepredicaterequest"></a>
<a id="schema_DeletePredicateRequest"></a>
<a id="tocSdeletepredicaterequest"></a>
<a id="tocsdeletepredicaterequest"></a>

```json
{
  "predicate": "tag1=\"value1\" and (tag2=\"value2\" and tag3!=\"value3\")",
  "start": "1970-01-01T00:00:00Z",
  "stop": "1970-01-01T00:00:00Z"
}
```

The delete predicate request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|predicate|string|false|none|InfluxQL-like delete statement|
|start|string(date-time)|true|none|RFC3339Nano|
|stop|string(date-time)|true|none|RFC3339Nano|

<h2 id="tocS_Dialect">Dialect</h2>
<!-- backwards compatibility -->
<a id="schemadialect"></a>
<a id="schema_Dialect"></a>
<a id="tocSdialect"></a>
<a id="tocsdialect"></a>

```json
{
  "annotations": [
    "group"
  ],
  "commentPrefix": "#",
  "dateTimeFormat": "RFC3339",
  "delimiter": ",",
  "header": true
}
```

Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[string]|false|none|https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#columns|
|commentPrefix|string|false|none|Character prefixed to comment strings|
|dateTimeFormat|string|false|none|Format of timestamps|
|delimiter|string|false|none|Separator between cells; the default is ,|
|header|boolean|false|none|If true, the results will contain a header row|

#### Enumerated Values

|Property|Value|
|---|---|
|annotations|group|
|annotations|datatype|
|annotations|default|
|dateTimeFormat|RFC3339|
|dateTimeFormat|RFC3339Nano|

<h2 id="tocS_DictExpression">DictExpression</h2>
<!-- backwards compatibility -->
<a id="schemadictexpression"></a>
<a id="schema_DictExpression"></a>
<a id="tocSdictexpression"></a>
<a id="tocsdictexpression"></a>

```json
{
  "elements": [
    {
      "key": {},
      "type": "string",
      "val": {}
    }
  ],
  "type": "string"
}
```

Used to create and directly specify the elements of a dictionary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[DictItem](#schemadictitem)]|false|none|Elements of the dictionary|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_DictItem">DictItem</h2>
<!-- backwards compatibility -->
<a id="schemadictitem"></a>
<a id="schema_DictItem"></a>
<a id="tocSdictitem"></a>
<a id="tocsdictitem"></a>

```json
{
  "key": {},
  "type": "string",
  "val": {}
}
```

A key/value pair in a dictionary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|val|[Expression](#schemaexpression)|false|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "content": {},
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "self": "/api/v2/documents/templates/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|none|
|id|string|true|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|meta|[DocumentMeta](#schemadocumentmeta)|true|none|none|

<h2 id="tocS_DocumentCreate">DocumentCreate</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcreate"></a>
<a id="schema_DocumentCreate"></a>
<a id="tocSdocumentcreate"></a>
<a id="tocsdocumentcreate"></a>

```json
{
  "content": {},
  "labels": [
    "string"
  ],
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "version": "string"
  },
  "org": "string",
  "orgID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|none|
|labels|[string]|false|none|An array of label IDs to be added as labels to the document.|
|meta|[DocumentMeta](#schemadocumentmeta)|true|none|none|
|org|string|false|none|The organization Name. Specify either `orgID` or `org`.|
|orgID|string|false|none|The organization Name. Specify either `orgID` or `org`.|

<h2 id="tocS_DocumentListEntry">DocumentListEntry</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlistentry"></a>
<a id="schema_DocumentListEntry"></a>
<a id="tocSdocumentlistentry"></a>
<a id="tocsdocumentlistentry"></a>

```json
{
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "self": "/api/v2/documents/templates/1"
  },
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|meta|[DocumentMeta](#schemadocumentmeta)|true|none|none|

<h2 id="tocS_DocumentMeta">DocumentMeta</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmeta"></a>
<a id="schema_DocumentMeta"></a>
<a id="tocSdocumentmeta"></a>
<a id="tocsdocumentmeta"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "name": "string",
  "templateID": "string",
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|none|
|name|string|true|none|none|
|templateID|string|false|none|none|
|type|string|false|none|none|
|updatedAt|string(date-time)|false|read-only|none|
|version|string|true|none|none|

<h2 id="tocS_DocumentUpdate">DocumentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadocumentupdate"></a>
<a id="schema_DocumentUpdate"></a>
<a id="tocSdocumentupdate"></a>
<a id="tocsdocumentupdate"></a>

```json
{
  "content": {},
  "meta": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "name": "string",
    "templateID": "string",
    "type": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|false|none|none|
|meta|[DocumentMeta](#schemadocumentmeta)|false|none|none|

<h2 id="tocS_Documents">Documents</h2>
<!-- backwards compatibility -->
<a id="schemadocuments"></a>
<a id="schema_Documents"></a>
<a id="tocSdocuments"></a>
<a id="tocsdocuments"></a>

```json
{
  "documents": [
    {
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "self": "/api/v2/documents/templates/1"
      },
      "meta": {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "name": "string",
        "templateID": "string",
        "type": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "version": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[DocumentListEntry](#schemadocumentlistentry)]|false|none|none|

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
{
  "magnitude": 0,
  "type": "string",
  "unit": "string"
}
```

A pair consisting of length of time and the unit of time measured. It is the atomic unit from which all duration literals are composed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magnitude|integer|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|unit|string|false|none|none|

<h2 id="tocS_DurationLiteral">DurationLiteral</h2>
<!-- backwards compatibility -->
<a id="schemadurationliteral"></a>
<a id="schema_DurationLiteral"></a>
<a id="tocSdurationliteral"></a>
<a id="tocsdurationliteral"></a>

```json
{
  "type": "string",
  "values": [
    {
      "magnitude": 0,
      "type": "string",
      "unit": "string"
    }
  ]
}
```

Represents the elapsed time between two instants as an int64 nanosecond count with syntax of golang's time.Duration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|values|[[Duration](#schemaduration)]|false|none|Duration values|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "internal error",
  "err": "string",
  "message": "string",
  "op": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|read-only|code is the machine-readable error code.|
|err|string|false|read-only|err is a stack of errors that occurred during processing of the request. Useful for debugging.|
|message|string|true|read-only|message is a human-readable message.|
|op|string|false|read-only|op describes the logical code operation during error. Useful for debugging.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|internal error|
|code|not found|
|code|conflict|
|code|invalid|
|code|unprocessable entity|
|code|empty value|
|code|unavailable|
|code|forbidden|
|code|too many requests|
|code|unauthorized|
|code|method not allowed|
|code|request too large|
|code|unsupported media type|

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
{
  "elements": [
    {}
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ArrayExpression](#schemaarrayexpression)|false|none|Used to create and directly specify the elements of an array object|
|*oneOf*|[DictExpression](#schemadictexpression)|false|none|Used to create and directly specify the elements of a dictionary|
|*oneOf*|[FunctionExpression](#schemafunctionexpression)|false|none|Function expression|
|*oneOf*|[BinaryExpression](#schemabinaryexpression)|false|none|uses binary operators to act on two operands in an expression|
|*oneOf*|[CallExpression](#schemacallexpression)|false|none|Represents a function call|
|*oneOf*|[ConditionalExpression](#schemaconditionalexpression)|false|none|Selects one of two expressions, `Alternate` or `Consequent`, depending on a third boolean expression, `Test`|
|*oneOf*|[LogicalExpression](#schemalogicalexpression)|false|none|Represents the rule conditions that collectively evaluate to either true or false|
|*oneOf*|[MemberExpression](#schemamemberexpression)|false|none|Represents accessing a property of an object|
|*oneOf*|[IndexExpression](#schemaindexexpression)|false|none|Represents indexing into an array|
|*oneOf*|[ObjectExpression](#schemaobjectexpression)|false|none|Allows the declaration of an anonymous object within a declaration|
|*oneOf*|[ParenExpression](#schemaparenexpression)|false|none|Represents an expression wrapped in parenthesis|
|*oneOf*|[PipeExpression](#schemapipeexpression)|false|none|Call expression with pipe argument|
|*oneOf*|[UnaryExpression](#schemaunaryexpression)|false|none|Uses operators to act on a single operand in an expression|
|*oneOf*|[BooleanLiteral](#schemabooleanliteral)|false|none|Represents boolean values|
|*oneOf*|[DateTimeLiteral](#schemadatetimeliteral)|false|none|Represents an instant in time with nanosecond precision using the syntax of golang's RFC3339 Nanosecond variant|
|*oneOf*|[DurationLiteral](#schemadurationliteral)|false|none|Represents the elapsed time between two instants as an int64 nanosecond count with syntax of golang's time.Duration|
|*oneOf*|[FloatLiteral](#schemafloatliteral)|false|none|Represents floating point numbers according to the double representations defined by the IEEE-754-1985|
|*oneOf*|[IntegerLiteral](#schemaintegerliteral)|false|none|Represents integer numbers|
|*oneOf*|[PipeLiteral](#schemapipeliteral)|false|none|Represents a specialized literal value, indicating the left hand value of a pipe expression|
|*oneOf*|[RegexpLiteral](#schemaregexpliteral)|false|none|Expressions begin and end with `/` and are regular expressions with syntax accepted by RE2|
|*oneOf*|[StringLiteral](#schemastringliteral)|false|none|Expressions begin and end with double quote marks|
|*oneOf*|[UnsignedIntegerLiteral](#schemaunsignedintegerliteral)|false|none|Represents integer numbers|
|*oneOf*|[Identifier](#schemaidentifier)|false|none|A valid Flux identifier|

<h2 id="tocS_ExpressionStatement">ExpressionStatement</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionstatement"></a>
<a id="schema_ExpressionStatement"></a>
<a id="tocSexpressionstatement"></a>
<a id="tocsexpressionstatement"></a>

```json
{
  "expression": {},
  "type": "string"
}
```

May consist of an expression that does not return a value and is executed solely for its side-effects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "alias": "string",
  "args": [
    {
      "alias": "string",
      "args": [
        {}
      ],
      "type": "func",
      "value": "string"
    }
  ],
  "type": "func",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|Alias overrides the field name in the returned response.  Applies only if type is `func`|
|args|[[Field](#schemafield)]|false|none|Args are the arguments to the function|
|type|string|false|none|`type` describes the field type. `func` is a function. `field` is a field reference.|
|value|string|false|none|value is the value of the field.  Meaning of the value is implied by the `type` key|

#### Enumerated Values

|Property|Value|
|---|---|
|type|func|
|type|field|
|type|integer|
|type|number|
|type|regex|
|type|wildcard|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "body": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "imports": [
    {
      "as": {
        "name": "string",
        "type": "string"
      },
      "path": {
        "type": "string",
        "value": "string"
      },
      "type": "string"
    }
  ],
  "name": "string",
  "package": {
    "name": {
      "name": "string",
      "type": "string"
    },
    "type": "string"
  },
  "type": "string"
}
```

Represents a source from a single file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[[Statement](#schemastatement)]|false|none|List of Flux statements|
|imports|[[ImportDeclaration](#schemaimportdeclaration)]|false|none|A list of package imports|
|name|string|false|none|The name of the file.|
|package|[PackageClause](#schemapackageclause)|false|none|Defines a package identifier|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Flags">Flags</h2>
<!-- backwards compatibility -->
<a id="schemaflags"></a>
<a id="schema_Flags"></a>
<a id="tocSflags"></a>
<a id="tocsflags"></a>

```json
{}
```

<h2 id="tocS_FloatLiteral">FloatLiteral</h2>
<!-- backwards compatibility -->
<a id="schemafloatliteral"></a>
<a id="schema_FloatLiteral"></a>
<a id="tocSfloatliteral"></a>
<a id="tocsfloatliteral"></a>

```json
{
  "type": "string",
  "value": 0
}
```

Represents floating point numbers according to the double representations defined by the IEEE-754-1985

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|number|false|none|none|

<h2 id="tocS_FluxResponse">FluxResponse</h2>
<!-- backwards compatibility -->
<a id="schemafluxresponse"></a>
<a id="schema_FluxResponse"></a>
<a id="tocSfluxresponse"></a>
<a id="tocsfluxresponse"></a>

```json
{
  "flux": "string"
}
```

Rendered flux that backs the check or notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flux|string|false|none|none|

<h2 id="tocS_FluxSuggestion">FluxSuggestion</h2>
<!-- backwards compatibility -->
<a id="schemafluxsuggestion"></a>
<a id="schema_FluxSuggestion"></a>
<a id="tocSfluxsuggestion"></a>
<a id="tocsfluxsuggestion"></a>

```json
{
  "name": "string",
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|params|object|false|none|none|

<h2 id="tocS_FluxSuggestions">FluxSuggestions</h2>
<!-- backwards compatibility -->
<a id="schemafluxsuggestions"></a>
<a id="schema_FluxSuggestions"></a>
<a id="tocSfluxsuggestions"></a>
<a id="tocsfluxsuggestions"></a>

```json
{
  "funcs": [
    {
      "name": "string",
      "params": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|funcs|[[FluxSuggestion](#schemafluxsuggestion)]|false|none|none|

<h2 id="tocS_FunctionExpression">FunctionExpression</h2>
<!-- backwards compatibility -->
<a id="schemafunctionexpression"></a>
<a id="schema_FunctionExpression"></a>
<a id="tocSfunctionexpression"></a>
<a id="tocsfunctionexpression"></a>

```json
{
  "body": {},
  "params": [
    {
      "key": {
        "name": "string",
        "type": "string"
      },
      "type": "string",
      "value": {}
    }
  ],
  "type": "string"
}
```

Function expression

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[Node](#schemanode)|false|none|none|
|params|[[Property](#schemaproperty)]|false|none|Function parameters|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_GaugeViewProperties">GaugeViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemagaugeviewproperties"></a>
<a id="schema_GaugeViewProperties"></a>
<a id="tocSgaugeviewproperties"></a>
<a id="tocsgaugeviewproperties"></a>

```json
{
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "decimalPlaces": {
    "digits": 0,
    "isEnforced": true
  },
  "note": "string",
  "prefix": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "suffix": "string",
  "tickPrefix": "string",
  "tickSuffix": "string",
  "type": "gauge"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|decimalPlaces|[DecimalPlaces](#schemadecimalplaces)|true|none|Indicates whether decimal places should be enforced, and how many digits it should show.|
|note|string|true|none|none|
|prefix|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|suffix|string|true|none|none|
|tickPrefix|string|true|none|none|
|tickSuffix|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|gauge|

<h2 id="tocS_GeoCircleViewLayer">GeoCircleViewLayer</h2>
<!-- backwards compatibility -->
<a id="schemageocircleviewlayer"></a>
<a id="schema_GeoCircleViewLayer"></a>
<a id="tocSgeocircleviewlayer"></a>
<a id="tocsgeocircleviewlayer"></a>

```json
{
  "type": "heatmap",
  "colorDimension": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  },
  "colorField": "string",
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "interpolateColors": true,
  "radius": 0,
  "radiusDimension": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  },
  "radiusField": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|colorDimension|[Axis](#schemaaxis)|true|none|The description of a particular axis for a visualization.|
|colorField|string|true|none|Circle color field|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|interpolateColors|boolean|false|none|Interpolate circle color based on displayed value|
|radius|integer|false|none|Maximum radius size in pixels|
|radiusDimension|[Axis](#schemaaxis)|true|none|The description of a particular axis for a visualization.|
|radiusField|string|true|none|Radius field|

#### Enumerated Values

|Property|Value|
|---|---|
|type|heatmap|
|type|circleMap|
|type|pointMap|
|type|trackMap|

<h2 id="tocS_GeoHeatMapViewLayer">GeoHeatMapViewLayer</h2>
<!-- backwards compatibility -->
<a id="schemageoheatmapviewlayer"></a>
<a id="schema_GeoHeatMapViewLayer"></a>
<a id="tocSgeoheatmapviewlayer"></a>
<a id="tocsgeoheatmapviewlayer"></a>

```json
{
  "type": "heatmap",
  "blur": 0,
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "intensityDimension": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  },
  "intensityField": "string",
  "radius": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|blur|integer|true|none|Blur for heatmap points|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|intensityDimension|[Axis](#schemaaxis)|true|none|The description of a particular axis for a visualization.|
|intensityField|string|true|none|Intensity field|
|radius|integer|true|none|Radius size in pixels|

#### Enumerated Values

|Property|Value|
|---|---|
|type|heatmap|
|type|circleMap|
|type|pointMap|
|type|trackMap|

<h2 id="tocS_GeoPointMapViewLayer">GeoPointMapViewLayer</h2>
<!-- backwards compatibility -->
<a id="schemageopointmapviewlayer"></a>
<a id="schema_GeoPointMapViewLayer"></a>
<a id="tocSgeopointmapviewlayer"></a>
<a id="tocsgeopointmapviewlayer"></a>

```json
{
  "type": "heatmap",
  "colorDimension": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  },
  "colorField": "string",
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "isClustered": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|colorDimension|[Axis](#schemaaxis)|true|none|The description of a particular axis for a visualization.|
|colorField|string|true|none|Marker color field|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|isClustered|boolean|false|none|Cluster close markers together|

#### Enumerated Values

|Property|Value|
|---|---|
|type|heatmap|
|type|circleMap|
|type|pointMap|
|type|trackMap|

<h2 id="tocS_GeoTrackMapViewLayer">GeoTrackMapViewLayer</h2>
<!-- backwards compatibility -->
<a id="schemageotrackmapviewlayer"></a>
<a id="schema_GeoTrackMapViewLayer"></a>
<a id="tocSgeotrackmapviewlayer"></a>
<a id="tocsgeotrackmapviewlayer"></a>

```json
{
  "type": "heatmap",
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "randomColors": true,
  "speed": 0,
  "trackWidth": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|colors|[[DashboardColor](#schemadashboardcolor)]|false|none|Colors define color encoding of data into a visualization|
|randomColors|boolean|true|none|Assign different colors to different tracks|
|speed|integer|true|none|Speed of the track animation|
|trackWidth|integer|true|none|Width of the track|

#### Enumerated Values

|Property|Value|
|---|---|
|type|heatmap|
|type|circleMap|
|type|pointMap|
|type|trackMap|

<h2 id="tocS_GeoViewLayer">GeoViewLayer</h2>
<!-- backwards compatibility -->
<a id="schemageoviewlayer"></a>
<a id="schema_GeoViewLayer"></a>
<a id="tocSgeoviewlayer"></a>
<a id="tocsgeoviewlayer"></a>

```json
{
  "type": "heatmap",
  "colorDimension": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  },
  "colorField": "string",
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "interpolateColors": true,
  "radius": 0,
  "radiusDimension": {
    "base": "",
    "bounds": [
      "string"
    ],
    "label": "string",
    "prefix": "string",
    "scale": "log",
    "suffix": "string"
  },
  "radiusField": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[GeoCircleViewLayer](#schemageocircleviewlayer)|false|none|none|
|*oneOf*|[GeoHeatMapViewLayer](#schemageoheatmapviewlayer)|false|none|none|
|*oneOf*|[GeoPointMapViewLayer](#schemageopointmapviewlayer)|false|none|none|
|*oneOf*|[GeoTrackMapViewLayer](#schemageotrackmapviewlayer)|false|none|none|

<h2 id="tocS_GeoViewLayerProperties">GeoViewLayerProperties</h2>
<!-- backwards compatibility -->
<a id="schemageoviewlayerproperties"></a>
<a id="schema_GeoViewLayerProperties"></a>
<a id="tocSgeoviewlayerproperties"></a>
<a id="tocsgeoviewlayerproperties"></a>

```json
{
  "type": "heatmap"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|heatmap|
|type|circleMap|
|type|pointMap|
|type|trackMap|

<h2 id="tocS_GeoViewProperties">GeoViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemageoviewproperties"></a>
<a id="schema_GeoViewProperties"></a>
<a id="tocSgeoviewproperties"></a>
<a id="tocsgeoviewproperties"></a>

```json
{
  "allowPanAndZoom": true,
  "center": {
    "lat": 0,
    "lon": 0
  },
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "detectCoordinateFields": true,
  "layers": [
    {
      "type": "heatmap",
      "colorDimension": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "colorField": "string",
      "colors": [
        {
          "hex": "strings",
          "id": "string",
          "name": "string",
          "type": "min",
          "value": 0
        }
      ],
      "interpolateColors": true,
      "radius": 0,
      "radiusDimension": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "radiusField": "string"
    }
  ],
  "mapStyle": "string",
  "note": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "type": "geo",
  "zoom": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowPanAndZoom|boolean|true|none|If true, map zoom and pan controls are enabled on the dashboard view|
|center|object|true|none|Coordinates of the center of the map|
|colors|[[DashboardColor](#schemadashboardcolor)]|false|none|Colors define color encoding of data into a visualization|
|detectCoordinateFields|boolean|true|none|If true, search results get automatically regroupped so that lon,lat and value are treated as columns|
|layers|[[GeoViewLayer](#schemageoviewlayer)]|true|none|List of individual layers shown in the map|
|mapStyle|string|false|none|Define map type - regular, satellite etc.|
|note|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|type|string|true|none|none|
|zoom|number(double)|true|none|Zoom level used for initial display of the map|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|geo|

<h2 id="tocS_GreaterThreshold">GreaterThreshold</h2>
<!-- backwards compatibility -->
<a id="schemagreaterthreshold"></a>
<a id="schema_GreaterThreshold"></a>
<a id="tocSgreaterthreshold"></a>
<a id="tocsgreaterthreshold"></a>

```json
{
  "allValues": true,
  "level": "UNKNOWN",
  "type": "greater",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allValues|boolean|false|none|If true, only alert if all values meet threshold.|
|level|[CheckStatusLevel](#schemacheckstatuslevel)|false|none|The state to record if check matches a criteria.|
|type|string|true|none|none|
|value|number(float)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|UNKNOWN|
|level|OK|
|level|INFO|
|level|CRIT|
|level|WARN|
|type|greater|

<h2 id="tocS_HTTPNotificationEndpoint">HTTPNotificationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemahttpnotificationendpoint"></a>
<a id="schema_HTTPNotificationEndpoint"></a>
<a id="tocShttpnotificationendpoint"></a>
<a id="tocshttpnotificationendpoint"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "authMethod": "none",
  "contentTemplate": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "method": "POST",
  "password": "string",
  "token": "string",
  "url": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification endpoint.|
|id|string|false|none|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|false|none|none|
|status|string|false|none|The status of the endpoint.|
|type|[NotificationEndpointType](#schemanotificationendpointtype)|true|none|none|
|updatedAt|string(date-time)|false|read-only|none|
|userID|string|false|none|none|
|authMethod|string|true|none|none|
|contentTemplate|string|false|none|none|
|headers|object|false|none|Customized headers.|
|method|string|true|none|none|
|password|string|false|none|none|
|token|string|false|none|none|
|url|string|true|none|none|
|username|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|slack|
|type|pagerduty|
|type|http|
|type|telegram|
|authMethod|none|
|authMethod|basic|
|authMethod|bearer|
|method|POST|
|method|GET|
|method|PUT|

<h2 id="tocS_HTTPNotificationRule">HTTPNotificationRule</h2>
<!-- backwards compatibility -->
<a id="schemahttpnotificationrule"></a>
<a id="schema_HTTPNotificationRule"></a>
<a id="tocShttpnotificationrule"></a>
<a id="tocshttpnotificationrule"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "type": "http",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification rule.|
|endpointID|string|true|none|none|
|every|string|false|none|The notification repetition interval.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|limit|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty.|
|limitEvery|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty.|
|links|object|false|read-only|none|
|name|string|true|none|Human-readable name describing the notification rule.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|orgID|string|true|none|The ID of the organization that owns this notification rule.|
|ownerID|string|false|read-only|The ID of creator used to create this notification rule.|
|runbookLink|string|false|none|none|
|sleepUntil|string|false|none|none|
|status|[TaskStatusType](#schemataskstatustype)|true|none|none|
|statusRules|[[StatusRule](#schemastatusrule)]|true|none|List of status rules the notification rule attempts to match.|
|tagRules|[[TagRule](#schematagrule)]|false|none|List of tag rules the notification rule attempts to match.|
|taskID|string|false|none|The ID of the task associated with this notification rule.|
|updatedAt|string(date-time)|false|read-only|none|
|type|string|true|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|type|http|

<h2 id="tocS_HTTPNotificationRuleBase">HTTPNotificationRuleBase</h2>
<!-- backwards compatibility -->
<a id="schemahttpnotificationrulebase"></a>
<a id="schema_HTTPNotificationRuleBase"></a>
<a id="tocShttpnotificationrulebase"></a>
<a id="tocshttpnotificationrulebase"></a>

```json
{
  "type": "http",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|http|

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "checks": [
    {
      "checks": [
        {}
      ],
      "commit": "string",
      "message": "string",
      "name": "string",
      "status": "pass",
      "version": "string"
    }
  ],
  "commit": "string",
  "message": "string",
  "name": "string",
  "status": "pass",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[HealthCheck](#schemahealthcheck)]|false|none|none|
|commit|string|false|none|none|
|message|string|false|none|none|
|name|string|true|none|none|
|status|string|true|none|none|
|version|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pass|
|status|fail|

<h2 id="tocS_HeatmapViewProperties">HeatmapViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemaheatmapviewproperties"></a>
<a id="schema_HeatmapViewProperties"></a>
<a id="tocSheatmapviewproperties"></a>
<a id="tocsheatmapviewproperties"></a>

```json
{
  "binSize": 0,
  "colors": [
    "string"
  ],
  "generateXAxisTicks": [
    "string"
  ],
  "generateYAxisTicks": [
    "string"
  ],
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "note": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "timeFormat": "string",
  "type": "heatmap",
  "xAxisLabel": "string",
  "xColumn": "string",
  "xDomain": [
    0
  ],
  "xPrefix": "string",
  "xSuffix": "string",
  "xTickStart": 0,
  "xTickStep": 0,
  "xTotalTicks": 0,
  "yAxisLabel": "string",
  "yColumn": "string",
  "yDomain": [
    0
  ],
  "yPrefix": "string",
  "ySuffix": "string",
  "yTickStart": 0,
  "yTickStep": 0,
  "yTotalTicks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binSize|number|true|none|none|
|colors|[string]|true|none|Colors define color encoding of data into a visualization|
|generateXAxisTicks|[string]|false|none|none|
|generateYAxisTicks|[string]|false|none|none|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|note|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|timeFormat|string|false|none|none|
|type|string|true|none|none|
|xAxisLabel|string|true|none|none|
|xColumn|string|true|none|none|
|xDomain|[number]|true|none|none|
|xPrefix|string|true|none|none|
|xSuffix|string|true|none|none|
|xTickStart|number(float)|false|none|none|
|xTickStep|number(float)|false|none|none|
|xTotalTicks|integer|false|none|none|
|yAxisLabel|string|true|none|none|
|yColumn|string|true|none|none|
|yDomain|[number]|true|none|none|
|yPrefix|string|true|none|none|
|ySuffix|string|true|none|none|
|yTickStart|number(float)|false|none|none|
|yTickStep|number(float)|false|none|none|
|yTotalTicks|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|heatmap|

<h2 id="tocS_HistogramViewProperties">HistogramViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemahistogramviewproperties"></a>
<a id="schema_HistogramViewProperties"></a>
<a id="tocShistogramviewproperties"></a>
<a id="tocshistogramviewproperties"></a>

```json
{
  "binCount": 0,
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "fillColumns": [
    "string"
  ],
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "note": "string",
  "position": "overlaid",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "type": "histogram",
  "xAxisLabel": "string",
  "xColumn": "string",
  "xDomain": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binCount|integer|true|none|none|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|fillColumns|[string]|true|none|none|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|note|string|true|none|none|
|position|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|type|string|true|none|none|
|xAxisLabel|string|true|none|none|
|xColumn|string|true|none|none|
|xDomain|[number(float)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|position|overlaid|
|position|stacked|
|shape|chronograf-v2|
|type|histogram|

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
{
  "name": "string",
  "type": "string"
}
```

A valid Flux identifier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_ImportDeclaration">ImportDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemaimportdeclaration"></a>
<a id="schema_ImportDeclaration"></a>
<a id="tocSimportdeclaration"></a>
<a id="tocsimportdeclaration"></a>

```json
{
  "as": {
    "name": "string",
    "type": "string"
  },
  "path": {
    "type": "string",
    "value": "string"
  },
  "type": "string"
}
```

Declares a package import

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as|[Identifier](#schemaidentifier)|false|none|A valid Flux identifier|
|path|[StringLiteral](#schemastringliteral)|false|none|Expressions begin and end with double quote marks|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_IndexExpression">IndexExpression</h2>
<!-- backwards compatibility -->
<a id="schemaindexexpression"></a>
<a id="schema_IndexExpression"></a>
<a id="tocSindexexpression"></a>
<a id="tocsindexexpression"></a>

```json
{
  "array": {},
  "index": {},
  "type": "string"
}
```

Represents indexing into an array

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|array|[Expression](#schemaexpression)|false|none|none|
|index|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_InfluxQLQuery">InfluxQLQuery</h2>
<!-- backwards compatibility -->
<a id="schemainfluxqlquery"></a>
<a id="schema_InfluxQLQuery"></a>
<a id="tocSinfluxqlquery"></a>
<a id="tocsinfluxqlquery"></a>

```json
{
  "bucket": "string",
  "query": "string",
  "type": "influxql"
}
```

Query influx using the InfluxQL language

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Bucket is to be used instead of the database and retention policy specified in the InfluxQL query.|
|query|string|true|none|InfluxQL query execute.|
|type|string|false|none|The type of query. Must be "influxql".|

#### Enumerated Values

|Property|Value|
|---|---|
|type|influxql|

<h2 id="tocS_IntegerLiteral">IntegerLiteral</h2>
<!-- backwards compatibility -->
<a id="schemaintegerliteral"></a>
<a id="schema_IntegerLiteral"></a>
<a id="tocSintegerliteral"></a>
<a id="tocsintegerliteral"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

Represents integer numbers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|string|false|none|none|

<h2 id="tocS_IsOnboarding">IsOnboarding</h2>
<!-- backwards compatibility -->
<a id="schemaisonboarding"></a>
<a id="schema_IsOnboarding"></a>
<a id="tocSisonboarding"></a>
<a id="tocsisonboarding"></a>

```json
{
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|True means that the influxdb instance has NOT had initial setup; false means that the database has been setup.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "id": "string",
  "name": "string",
  "orgID": "string",
  "properties": {
    "color": "ffb3b3",
    "description": "this is a description"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|none|
|name|string|false|none|none|
|orgID|string|false|read-only|none|
|properties|object|false|none|Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.|

<h2 id="tocS_LabelCreateRequest">LabelCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabelcreaterequest"></a>
<a id="schema_LabelCreateRequest"></a>
<a id="tocSlabelcreaterequest"></a>
<a id="tocslabelcreaterequest"></a>

```json
{
  "name": "string",
  "orgID": "string",
  "properties": {
    "color": "ffb3b3",
    "description": "this is a description"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|orgID|string|true|none|none|
|properties|object|false|none|Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.|

<h2 id="tocS_LabelMapping">LabelMapping</h2>
<!-- backwards compatibility -->
<a id="schemalabelmapping"></a>
<a id="schema_LabelMapping"></a>
<a id="tocSlabelmapping"></a>
<a id="tocslabelmapping"></a>

```json
{
  "labelID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelID|string|false|none|none|

<h2 id="tocS_LabelResponse">LabelResponse</h2>
<!-- backwards compatibility -->
<a id="schemalabelresponse"></a>
<a id="schema_LabelResponse"></a>
<a id="tocSlabelresponse"></a>
<a id="tocslabelresponse"></a>

```json
{
  "label": {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  },
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|[Label](#schemalabel)|false|none|none|
|links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_LabelUpdate">LabelUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalabelupdate"></a>
<a id="schema_LabelUpdate"></a>
<a id="tocSlabelupdate"></a>
<a id="tocslabelupdate"></a>

```json
{
  "name": "string",
  "properties": {
    "color": "ffb3b3",
    "description": "this is a description"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|properties|object|false|none|Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.|

<h2 id="tocS_Labels">Labels</h2>
<!-- backwards compatibility -->
<a id="schemalabels"></a>
<a id="schema_Labels"></a>
<a id="tocSlabels"></a>
<a id="tocslabels"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "orgID": "string",
    "properties": {
      "color": "ffb3b3",
      "description": "this is a description"
    }
  }
]
```

<h2 id="tocS_LabelsResponse">LabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalabelsresponse"></a>
<a id="schema_LabelsResponse"></a>
<a id="tocSlabelsresponse"></a>
<a id="tocslabelsresponse"></a>

```json
{
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[Labels](#schemalabels)|false|none|none|
|links|[Links](#schemalinks)|false|none|none|

<h2 id="tocS_LanguageRequest">LanguageRequest</h2>
<!-- backwards compatibility -->
<a id="schemalanguagerequest"></a>
<a id="schema_LanguageRequest"></a>
<a id="tocSlanguagerequest"></a>
<a id="tocslanguagerequest"></a>

```json
{
  "query": "string"
}
```

Flux query to be analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Flux query script to be analyzed|

<h2 id="tocS_LesserThreshold">LesserThreshold</h2>
<!-- backwards compatibility -->
<a id="schemalesserthreshold"></a>
<a id="schema_LesserThreshold"></a>
<a id="tocSlesserthreshold"></a>
<a id="tocslesserthreshold"></a>

```json
{
  "allValues": true,
  "level": "UNKNOWN",
  "type": "lesser",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allValues|boolean|false|none|If true, only alert if all values meet threshold.|
|level|[CheckStatusLevel](#schemacheckstatuslevel)|false|none|The state to record if check matches a criteria.|
|type|string|true|none|none|
|value|number(float)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|UNKNOWN|
|level|OK|
|level|INFO|
|level|CRIT|
|level|WARN|
|type|lesser|

<h2 id="tocS_LinePlusSingleStatProperties">LinePlusSingleStatProperties</h2>
<!-- backwards compatibility -->
<a id="schemalineplussinglestatproperties"></a>
<a id="schema_LinePlusSingleStatProperties"></a>
<a id="tocSlineplussinglestatproperties"></a>
<a id="tocslineplussinglestatproperties"></a>

```json
{
  "axes": {
    "x": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    },
    "y": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    }
  },
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "decimalPlaces": {
    "digits": 0,
    "isEnforced": true
  },
  "generateXAxisTicks": [
    "string"
  ],
  "generateYAxisTicks": [
    "string"
  ],
  "hoverDimension": "auto",
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "note": "string",
  "position": "overlaid",
  "prefix": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shadeBelow": true,
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "staticLegend": {
    "colorizeRows": true,
    "heightRatio": 0,
    "hide": true,
    "opacity": 0,
    "orientationThreshold": 0,
    "valueAxis": "string",
    "widthRatio": 0
  },
  "suffix": "string",
  "timeFormat": "string",
  "type": "line-plus-single-stat",
  "xColumn": "string",
  "xTickStart": 0,
  "xTickStep": 0,
  "xTotalTicks": 0,
  "yColumn": "string",
  "yTickStart": 0,
  "yTickStep": 0,
  "yTotalTicks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axes|[Axes](#schemaaxes)|true|none|The viewport for a View's visualizations|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|decimalPlaces|[DecimalPlaces](#schemadecimalplaces)|true|none|Indicates whether decimal places should be enforced, and how many digits it should show.|
|generateXAxisTicks|[string]|false|none|none|
|generateYAxisTicks|[string]|false|none|none|
|hoverDimension|string|false|none|none|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|note|string|true|none|none|
|position|string|true|none|none|
|prefix|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shadeBelow|boolean|false|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|staticLegend|[StaticLegend](#schemastaticlegend)|false|none|StaticLegend represents the options specific to the static legend|
|suffix|string|true|none|none|
|timeFormat|string|false|none|none|
|type|string|true|none|none|
|xColumn|string|false|none|none|
|xTickStart|number(float)|false|none|none|
|xTickStep|number(float)|false|none|none|
|xTotalTicks|integer|false|none|none|
|yColumn|string|false|none|none|
|yTickStart|number(float)|false|none|none|
|yTickStep|number(float)|false|none|none|
|yTotalTicks|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|hoverDimension|auto|
|hoverDimension|x|
|hoverDimension|y|
|hoverDimension|xy|
|position|overlaid|
|position|stacked|
|shape|chronograf-v2|
|type|line-plus-single-stat|

<h2 id="tocS_LineProtocolError">LineProtocolError</h2>
<!-- backwards compatibility -->
<a id="schemalineprotocolerror"></a>
<a id="schema_LineProtocolError"></a>
<a id="tocSlineprotocolerror"></a>
<a id="tocslineprotocolerror"></a>

```json
{
  "code": "internal error",
  "err": "string",
  "line": 0,
  "message": "string",
  "op": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|read-only|Code is the machine-readable error code.|
|err|string|true|read-only|Err is a stack of errors that occurred during processing of the request. Useful for debugging.|
|line|integer(int32)|false|read-only|First line within sent body containing malformed data|
|message|string|true|read-only|Message is a human-readable message.|
|op|string|true|read-only|Op describes the logical code operation during error. Useful for debugging.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|internal error|
|code|not found|
|code|conflict|
|code|invalid|
|code|empty value|
|code|unavailable|

<h2 id="tocS_LineProtocolLengthError">LineProtocolLengthError</h2>
<!-- backwards compatibility -->
<a id="schemalineprotocollengtherror"></a>
<a id="schema_LineProtocolLengthError"></a>
<a id="tocSlineprotocollengtherror"></a>
<a id="tocslineprotocollengtherror"></a>

```json
{
  "code": "invalid",
  "maxLength": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|read-only|Code is the machine-readable error code.|
|maxLength|integer(int32)|true|read-only|Max length in bytes for a body of line-protocol.|
|message|string|true|read-only|Message is a human-readable message.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|invalid|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
"http://example.com"
```

URI of resource.

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "next": "http://example.com",
  "prev": "http://example.com",
  "self": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[Link](#schemalink)|false|read-only|URI of resource.|
|prev|[Link](#schemalink)|false|read-only|URI of resource.|
|self|[Link](#schemalink)|true|read-only|URI of resource.|

<h2 id="tocS_LogEvent">LogEvent</h2>
<!-- backwards compatibility -->
<a id="schemalogevent"></a>
<a id="schema_LogEvent"></a>
<a id="tocSlogevent"></a>
<a id="tocslogevent"></a>

```json
{
  "message": "Halt and catch fire",
  "runID": "string",
  "time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|read-only|A description of the event that occurred.|
|runID|string|false|read-only|the ID of the task that logged|
|time|string(date-time)|false|read-only|Time event occurred, RFC3339Nano.|

<h2 id="tocS_LogicalExpression">LogicalExpression</h2>
<!-- backwards compatibility -->
<a id="schemalogicalexpression"></a>
<a id="schema_LogicalExpression"></a>
<a id="tocSlogicalexpression"></a>
<a id="tocslogicalexpression"></a>

```json
{
  "left": {},
  "operator": "string",
  "right": {},
  "type": "string"
}
```

Represents the rule conditions that collectively evaluate to either true or false

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|left|[Expression](#schemaexpression)|false|none|none|
|operator|string|false|none|none|
|right|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Logs">Logs</h2>
<!-- backwards compatibility -->
<a id="schemalogs"></a>
<a id="schema_Logs"></a>
<a id="tocSlogs"></a>
<a id="tocslogs"></a>

```json
{
  "events": [
    {
      "message": "Halt and catch fire",
      "runID": "string",
      "time": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[LogEvent](#schemalogevent)]|false|read-only|none|

<h2 id="tocS_MapVariableProperties">MapVariableProperties</h2>
<!-- backwards compatibility -->
<a id="schemamapvariableproperties"></a>
<a id="schema_MapVariableProperties"></a>
<a id="tocSmapvariableproperties"></a>
<a id="tocsmapvariableproperties"></a>

```json
{
  "type": "map",
  "values": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|values|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|map|

<h2 id="tocS_MarkdownViewProperties">MarkdownViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemamarkdownviewproperties"></a>
<a id="schema_MarkdownViewProperties"></a>
<a id="tocSmarkdownviewproperties"></a>
<a id="tocsmarkdownviewproperties"></a>

```json
{
  "note": "string",
  "shape": "chronograf-v2",
  "type": "markdown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|true|none|none|
|shape|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|markdown|

<h2 id="tocS_MemberAssignment">MemberAssignment</h2>
<!-- backwards compatibility -->
<a id="schemamemberassignment"></a>
<a id="schema_MemberAssignment"></a>
<a id="tocSmemberassignment"></a>
<a id="tocsmemberassignment"></a>

```json
{
  "init": {},
  "member": {
    "object": {},
    "property": {
      "name": "string",
      "type": "string"
    },
    "type": "string"
  },
  "type": "string"
}
```

Object property assignment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|init|[Expression](#schemaexpression)|false|none|none|
|member|[MemberExpression](#schemamemberexpression)|false|none|Represents accessing a property of an object|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_MemberExpression">MemberExpression</h2>
<!-- backwards compatibility -->
<a id="schemamemberexpression"></a>
<a id="schema_MemberExpression"></a>
<a id="tocSmemberexpression"></a>
<a id="tocsmemberexpression"></a>

```json
{
  "object": {},
  "property": {
    "name": "string",
    "type": "string"
  },
  "type": "string"
}
```

Represents accessing a property of an object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|[Expression](#schemaexpression)|false|none|none|
|property|[PropertyKey](#schemapropertykey)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_MosaicViewProperties">MosaicViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemamosaicviewproperties"></a>
<a id="schema_MosaicViewProperties"></a>
<a id="tocSmosaicviewproperties"></a>
<a id="tocsmosaicviewproperties"></a>

```json
{
  "colors": [
    "string"
  ],
  "fillColumns": [
    "string"
  ],
  "generateXAxisTicks": [
    "string"
  ],
  "hoverDimension": "auto",
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "note": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "timeFormat": "string",
  "type": "mosaic",
  "xAxisLabel": "string",
  "xColumn": "string",
  "xDomain": [
    0
  ],
  "xPrefix": "string",
  "xSuffix": "string",
  "xTickStart": 0,
  "xTickStep": 0,
  "xTotalTicks": 0,
  "yAxisLabel": "string",
  "yDomain": [
    0
  ],
  "yLabelColumnSeparator": "string",
  "yLabelColumns": [
    "string"
  ],
  "yPrefix": "string",
  "ySeriesColumns": [
    "string"
  ],
  "ySuffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[string]|true|none|Colors define color encoding of data into a visualization|
|fillColumns|[string]|true|none|none|
|generateXAxisTicks|[string]|false|none|none|
|hoverDimension|string|false|none|none|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|note|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|timeFormat|string|false|none|none|
|type|string|true|none|none|
|xAxisLabel|string|true|none|none|
|xColumn|string|true|none|none|
|xDomain|[number]|true|none|none|
|xPrefix|string|true|none|none|
|xSuffix|string|true|none|none|
|xTickStart|number(float)|false|none|none|
|xTickStep|number(float)|false|none|none|
|xTotalTicks|integer|false|none|none|
|yAxisLabel|string|true|none|none|
|yDomain|[number]|true|none|none|
|yLabelColumnSeparator|string|false|none|none|
|yLabelColumns|[string]|false|none|none|
|yPrefix|string|true|none|none|
|ySeriesColumns|[string]|true|none|none|
|ySuffix|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|hoverDimension|auto|
|hoverDimension|x|
|hoverDimension|y|
|hoverDimension|xy|
|shape|chronograf-v2|
|type|mosaic|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Expression](#schemaexpression)|false|none|none|
|*oneOf*|[Block](#schemablock)|false|none|A set of statements|

<h2 id="tocS_NodeType">NodeType</h2>
<!-- backwards compatibility -->
<a id="schemanodetype"></a>
<a id="schema_NodeType"></a>
<a id="tocSnodetype"></a>
<a id="tocsnodetype"></a>

```json
"string"
```

Type of AST node

<h2 id="tocS_NotificationEndpoint">NotificationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemanotificationendpoint"></a>
<a id="schema_NotificationEndpoint"></a>
<a id="tocSnotificationendpoint"></a>
<a id="tocsnotificationendpoint"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SlackNotificationEndpoint](#schemaslacknotificationendpoint)|false|none|none|
|*oneOf*|[PagerDutyNotificationEndpoint](#schemapagerdutynotificationendpoint)|false|none|none|
|*oneOf*|[HTTPNotificationEndpoint](#schemahttpnotificationendpoint)|false|none|none|
|*oneOf*|[TelegramNotificationEndpoint](#schematelegramnotificationendpoint)|false|none|none|

<h2 id="tocS_NotificationEndpointBase">NotificationEndpointBase</h2>
<!-- backwards compatibility -->
<a id="schemanotificationendpointbase"></a>
<a id="schema_NotificationEndpointBase"></a>
<a id="tocSnotificationendpointbase"></a>
<a id="tocsnotificationendpointbase"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification endpoint.|
|id|string|false|none|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|false|none|none|
|status|string|false|none|The status of the endpoint.|
|type|[NotificationEndpointType](#schemanotificationendpointtype)|true|none|none|
|updatedAt|string(date-time)|false|read-only|none|
|userID|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|slack|
|type|pagerduty|
|type|http|
|type|telegram|

<h2 id="tocS_NotificationEndpointDiscriminator">NotificationEndpointDiscriminator</h2>
<!-- backwards compatibility -->
<a id="schemanotificationendpointdiscriminator"></a>
<a id="schema_NotificationEndpointDiscriminator"></a>
<a id="tocSnotificationendpointdiscriminator"></a>
<a id="tocsnotificationendpointdiscriminator"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SlackNotificationEndpoint](#schemaslacknotificationendpoint)|false|none|none|
|*oneOf*|[PagerDutyNotificationEndpoint](#schemapagerdutynotificationendpoint)|false|none|none|
|*oneOf*|[HTTPNotificationEndpoint](#schemahttpnotificationendpoint)|false|none|none|
|*oneOf*|[TelegramNotificationEndpoint](#schematelegramnotificationendpoint)|false|none|none|

<h2 id="tocS_NotificationEndpointType">NotificationEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationendpointtype"></a>
<a id="schema_NotificationEndpointType"></a>
<a id="tocSnotificationendpointtype"></a>
<a id="tocsnotificationendpointtype"></a>

```json
"slack"
```

<h2 id="tocS_NotificationEndpointUpdate">NotificationEndpointUpdate</h2>
<!-- backwards compatibility -->
<a id="schemanotificationendpointupdate"></a>
<a id="schema_NotificationEndpointUpdate"></a>
<a id="tocSnotificationendpointupdate"></a>
<a id="tocsnotificationendpointupdate"></a>

```json
{
  "description": "string",
  "name": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_NotificationEndpoints">NotificationEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemanotificationendpoints"></a>
<a id="schema_NotificationEndpoints"></a>
<a id="tocSnotificationendpoints"></a>
<a id="tocsnotificationendpoints"></a>

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "notificationEndpoints": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "labels": "/api/v2/notificationEndpoints/1/labels",
        "members": "/api/v2/notificationEndpoints/1/members",
        "owners": "/api/v2/notificationEndpoints/1/owners",
        "self": "/api/v2/notificationEndpoints/1"
      },
      "name": "string",
      "orgID": "string",
      "status": "active",
      "type": "slack",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userID": "string",
      "token": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|false|none|none|
|notificationEndpoints|[[NotificationEndpoint](#schemanotificationendpoint)]|false|none|none|

<h2 id="tocS_NotificationRule">NotificationRule</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrule"></a>
<a id="schema_NotificationRule"></a>
<a id="tocSnotificationrule"></a>
<a id="tocsnotificationrule"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SlackNotificationRule](#schemaslacknotificationrule)|false|none|none|
|*oneOf*|[SMTPNotificationRule](#schemasmtpnotificationrule)|false|none|none|
|*oneOf*|[PagerDutyNotificationRule](#schemapagerdutynotificationrule)|false|none|none|
|*oneOf*|[HTTPNotificationRule](#schemahttpnotificationrule)|false|none|none|
|*oneOf*|[TelegramNotificationRule](#schematelegramnotificationrule)|false|none|none|

<h2 id="tocS_NotificationRuleBase">NotificationRuleBase</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulebase"></a>
<a id="schema_NotificationRuleBase"></a>
<a id="tocSnotificationrulebase"></a>
<a id="tocsnotificationrulebase"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification rule.|
|endpointID|string|true|none|none|
|every|string|false|none|The notification repetition interval.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|limit|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty.|
|limitEvery|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty.|
|links|object|false|read-only|none|
|name|string|true|none|Human-readable name describing the notification rule.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|orgID|string|true|none|The ID of the organization that owns this notification rule.|
|ownerID|string|false|read-only|The ID of creator used to create this notification rule.|
|runbookLink|string|false|none|none|
|sleepUntil|string|false|none|none|
|status|[TaskStatusType](#schemataskstatustype)|true|none|none|
|statusRules|[[StatusRule](#schemastatusrule)]|true|none|List of status rules the notification rule attempts to match.|
|tagRules|[[TagRule](#schematagrule)]|false|none|List of tag rules the notification rule attempts to match.|
|taskID|string|false|none|The ID of the task associated with this notification rule.|
|updatedAt|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|

<h2 id="tocS_NotificationRuleDiscriminator">NotificationRuleDiscriminator</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulediscriminator"></a>
<a id="schema_NotificationRuleDiscriminator"></a>
<a id="tocSnotificationrulediscriminator"></a>
<a id="tocsnotificationrulediscriminator"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SlackNotificationRule](#schemaslacknotificationrule)|false|none|none|
|*oneOf*|[SMTPNotificationRule](#schemasmtpnotificationrule)|false|none|none|
|*oneOf*|[PagerDutyNotificationRule](#schemapagerdutynotificationrule)|false|none|none|
|*oneOf*|[HTTPNotificationRule](#schemahttpnotificationrule)|false|none|none|
|*oneOf*|[TelegramNotificationRule](#schematelegramnotificationrule)|false|none|none|

<h2 id="tocS_NotificationRuleUpdate">NotificationRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemanotificationruleupdate"></a>
<a id="schema_NotificationRuleUpdate"></a>
<a id="tocSnotificationruleupdate"></a>
<a id="tocsnotificationruleupdate"></a>

```json
{
  "description": "string",
  "name": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_NotificationRules">NotificationRules</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrules"></a>
<a id="schema_NotificationRules"></a>
<a id="tocSnotificationrules"></a>
<a id="tocsnotificationrules"></a>

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "notificationRules": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "endpointID": "string",
      "every": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "lastRunError": "string",
      "lastRunStatus": "failed",
      "latestCompleted": "1970-01-01T00:00:00Z",
      "limit": 0,
      "limitEvery": 0,
      "links": {
        "labels": "/api/v2/notificationRules/1/labels",
        "members": "/api/v2/notificationRules/1/members",
        "owners": "/api/v2/notificationRules/1/owners",
        "query": "/api/v2/notificationRules/1/query",
        "self": "/api/v2/notificationRules/1"
      },
      "name": "string",
      "offset": "string",
      "orgID": "string",
      "ownerID": "string",
      "runbookLink": "string",
      "sleepUntil": "string",
      "status": "active",
      "statusRules": [
        {
          "count": 0,
          "currentLevel": "UNKNOWN",
          "period": "string",
          "previousLevel": "UNKNOWN"
        }
      ],
      "tagRules": [
        {
          "key": "string",
          "operator": "equal",
          "value": "string"
        }
      ],
      "taskID": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "channel": "string",
      "messageTemplate": "string",
      "type": "slack"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|false|none|none|
|notificationRules|[[NotificationRule](#schemanotificationrule)]|false|none|none|

<h2 id="tocS_ObjectExpression">ObjectExpression</h2>
<!-- backwards compatibility -->
<a id="schemaobjectexpression"></a>
<a id="schema_ObjectExpression"></a>
<a id="tocSobjectexpression"></a>
<a id="tocsobjectexpression"></a>

```json
{
  "properties": [
    {
      "key": {
        "name": "string",
        "type": "string"
      },
      "type": "string",
      "value": {}
    }
  ],
  "type": "string"
}
```

Allows the declaration of an anonymous object within a declaration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[[Property](#schemaproperty)]|false|none|Object properties|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_OnboardingRequest">OnboardingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaonboardingrequest"></a>
<a id="schema_OnboardingRequest"></a>
<a id="tocSonboardingrequest"></a>
<a id="tocsonboardingrequest"></a>

```json
{
  "bucket": "string",
  "org": "string",
  "password": "string",
  "retentionPeriodHrs": 0,
  "retentionPeriodSeconds": 0,
  "token": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|true|none|none|
|org|string|true|none|none|
|password|string|false|none|none|
|retentionPeriodHrs|integer|false|none|**Deprecated.** Retention period *in nanoseconds* for the new bucket. This key's name has been misleading since OSS 2.0 GA, please transition to use `retentionPeriodSeconds`<br>|
|retentionPeriodSeconds|integer(int64)|false|none|none|
|token|string|false|none|Authentication token to set on the initial user. If not specified, the server will generate a token.<br>|
|username|string|true|none|none|

<h2 id="tocS_OnboardingResponse">OnboardingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaonboardingresponse"></a>
<a id="schema_OnboardingResponse"></a>
<a id="tocSonboardingresponse"></a>
<a id="tocsonboardingresponse"></a>

```json
{
  "auth": {
    "description": "string",
    "status": "active",
    "createdAt": "1970-01-01T00:00:00Z",
    "id": "string",
    "links": {
      "self": "/api/v2/authorizations/1",
      "user": "/api/v2/users/12"
    },
    "org": "string",
    "orgID": "string",
    "permissions": [
      {
        "action": "read",
        "resource": {
          "id": "string",
          "name": "string",
          "org": "string",
          "orgID": "string",
          "type": "authorizations"
        }
      }
    ],
    "token": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "user": "string",
    "userID": "string"
  },
  "bucket": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "labels": [
      {
        "id": "string",
        "name": "string",
        "orgID": "string",
        "properties": {
          "color": "ffb3b3",
          "description": "this is a description"
        }
      }
    ],
    "links": {
      "labels": "/api/v2/buckets/1/labels",
      "members": "/api/v2/buckets/1/members",
      "org": "/api/v2/orgs/2",
      "owners": "/api/v2/buckets/1/owners",
      "self": "/api/v2/buckets/1",
      "write": "/api/v2/write?org=2&amp;bucket=1"
    },
    "name": "string",
    "orgID": "string",
    "retentionRules": [
      {
        "everySeconds": 86400,
        "shardGroupDurationSeconds": 0,
        "type": "expire"
      }
    ],
    "rp": "string",
    "schemaType": "implicit",
    "type": "user",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "org": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "links": {
      "buckets": "/api/v2/buckets?org=myorg",
      "dashboards": "/api/v2/dashboards?org=myorg",
      "labels": "/api/v2/orgs/1/labels",
      "members": "/api/v2/orgs/1/members",
      "owners": "/api/v2/orgs/1/owners",
      "secrets": "/api/v2/orgs/1/secrets",
      "self": "/api/v2/orgs/1",
      "tasks": "/api/v2/tasks?org=myorg"
    },
    "name": "string",
    "status": "active",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "user": {
    "id": "string",
    "links": {
      "self": "/api/v2/users/1"
    },
    "name": "string",
    "oauthID": "string",
    "status": "active"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth|[Authorization](#schemaauthorization)|false|none|none|
|bucket|[Bucket](#schemabucket)|false|none|none|
|org|[Organization](#schemaorganization)|false|none|none|
|user|[UserResponse](#schemauserresponse)|false|none|none|

<h2 id="tocS_OptionStatement">OptionStatement</h2>
<!-- backwards compatibility -->
<a id="schemaoptionstatement"></a>
<a id="schema_OptionStatement"></a>
<a id="tocSoptionstatement"></a>
<a id="tocsoptionstatement"></a>

```json
{
  "assignment": {
    "id": {
      "name": "string",
      "type": "string"
    },
    "init": {},
    "type": "string"
  },
  "type": "string"
}
```

A single variable declaration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignment|[VariableAssignment](#schemavariableassignment) \| [MemberAssignment](#schemamemberassignment)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "links": {
    "buckets": "/api/v2/buckets?org=myorg",
    "dashboards": "/api/v2/dashboards?org=myorg",
    "labels": "/api/v2/orgs/1/labels",
    "members": "/api/v2/orgs/1/members",
    "owners": "/api/v2/orgs/1/owners",
    "secrets": "/api/v2/orgs/1/secrets",
    "self": "/api/v2/orgs/1",
    "tasks": "/api/v2/tasks?org=myorg"
  },
  "name": "string",
  "status": "active",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|none|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|status|string|false|none|If inactive the organization is inactive.|
|updatedAt|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_Organizations">Organizations</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations"></a>
<a id="schema_Organizations"></a>
<a id="tocSorganizations"></a>
<a id="tocsorganizations"></a>

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "orgs": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "links": {
        "buckets": "/api/v2/buckets?org=myorg",
        "dashboards": "/api/v2/dashboards?org=myorg",
        "labels": "/api/v2/orgs/1/labels",
        "members": "/api/v2/orgs/1/members",
        "owners": "/api/v2/orgs/1/owners",
        "secrets": "/api/v2/orgs/1/secrets",
        "self": "/api/v2/orgs/1",
        "tasks": "/api/v2/tasks?org=myorg"
      },
      "name": "string",
      "status": "active",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|false|none|none|
|orgs|[[Organization](#schemaorganization)]|false|none|none|

<h2 id="tocS_Package">Package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "files": [
    {
      "body": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "imports": [
        {
          "as": {
            "name": "string",
            "type": "string"
          },
          "path": {
            "type": "string",
            "value": "string"
          },
          "type": "string"
        }
      ],
      "name": "string",
      "package": {
        "name": {
          "name": "string",
          "type": "string"
        },
        "type": "string"
      },
      "type": "string"
    }
  ],
  "package": "string",
  "path": "string",
  "type": "string"
}
```

Represents a complete package source tree.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[File](#schemafile)]|false|none|Package files|
|package|string|false|none|Package name|
|path|string|false|none|Package import path|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_PackageClause">PackageClause</h2>
<!-- backwards compatibility -->
<a id="schemapackageclause"></a>
<a id="schema_PackageClause"></a>
<a id="tocSpackageclause"></a>
<a id="tocspackageclause"></a>

```json
{
  "name": {
    "name": "string",
    "type": "string"
  },
  "type": "string"
}
```

Defines a package identifier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Identifier](#schemaidentifier)|false|none|A valid Flux identifier|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_PagerDutyNotificationEndpoint">PagerDutyNotificationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutynotificationendpoint"></a>
<a id="schema_PagerDutyNotificationEndpoint"></a>
<a id="tocSpagerdutynotificationendpoint"></a>
<a id="tocspagerdutynotificationendpoint"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "clientURL": "string",
  "routingKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification endpoint.|
|id|string|false|none|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|false|none|none|
|status|string|false|none|The status of the endpoint.|
|type|[NotificationEndpointType](#schemanotificationendpointtype)|true|none|none|
|updatedAt|string(date-time)|false|read-only|none|
|userID|string|false|none|none|
|clientURL|string|false|none|none|
|routingKey|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|slack|
|type|pagerduty|
|type|http|
|type|telegram|

<h2 id="tocS_PagerDutyNotificationRule">PagerDutyNotificationRule</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutynotificationrule"></a>
<a id="schema_PagerDutyNotificationRule"></a>
<a id="tocSpagerdutynotificationrule"></a>
<a id="tocspagerdutynotificationrule"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "messageTemplate": "string",
  "type": "pagerduty"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification rule.|
|endpointID|string|true|none|none|
|every|string|false|none|The notification repetition interval.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|limit|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty.|
|limitEvery|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty.|
|links|object|false|read-only|none|
|name|string|true|none|Human-readable name describing the notification rule.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|orgID|string|true|none|The ID of the organization that owns this notification rule.|
|ownerID|string|false|read-only|The ID of creator used to create this notification rule.|
|runbookLink|string|false|none|none|
|sleepUntil|string|false|none|none|
|status|[TaskStatusType](#schemataskstatustype)|true|none|none|
|statusRules|[[StatusRule](#schemastatusrule)]|true|none|List of status rules the notification rule attempts to match.|
|tagRules|[[TagRule](#schematagrule)]|false|none|List of tag rules the notification rule attempts to match.|
|taskID|string|false|none|The ID of the task associated with this notification rule.|
|updatedAt|string(date-time)|false|read-only|none|
|messageTemplate|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|type|pagerduty|

<h2 id="tocS_PagerDutyNotificationRuleBase">PagerDutyNotificationRuleBase</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutynotificationrulebase"></a>
<a id="schema_PagerDutyNotificationRuleBase"></a>
<a id="tocSpagerdutynotificationrulebase"></a>
<a id="tocspagerdutynotificationrulebase"></a>

```json
{
  "messageTemplate": "string",
  "type": "pagerduty"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageTemplate|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pagerduty|

<h2 id="tocS_ParenExpression">ParenExpression</h2>
<!-- backwards compatibility -->
<a id="schemaparenexpression"></a>
<a id="schema_ParenExpression"></a>
<a id="tocSparenexpression"></a>
<a id="tocsparenexpression"></a>

```json
{
  "expression": {},
  "type": "string"
}
```

Represents an expression wrapped in parenthesis

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_PasswordResetBody">PasswordResetBody</h2>
<!-- backwards compatibility -->
<a id="schemapasswordresetbody"></a>
<a id="schema_PasswordResetBody"></a>
<a id="tocSpasswordresetbody"></a>
<a id="tocspasswordresetbody"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|

<h2 id="tocS_PatchBucketRequest">PatchBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchbucketrequest"></a>
<a id="schema_PatchBucketRequest"></a>
<a id="tocSpatchbucketrequest"></a>
<a id="tocspatchbucketrequest"></a>

```json
{
  "description": "string",
  "name": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ]
}
```

Updates to an existing bucket resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|false|none|none|
|retentionRules|[PatchRetentionRules](#schemapatchretentionrules)|false|none|Updates to rules to expire or retain data. No rules means no updates.|

<h2 id="tocS_PatchOrganizationRequest">PatchOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchorganizationrequest"></a>
<a id="schema_PatchOrganizationRequest"></a>
<a id="tocSpatchorganizationrequest"></a>
<a id="tocspatchorganizationrequest"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|New description to set on the organization|
|name|string|false|none|New name to set on the organization|

<h2 id="tocS_PatchRetentionRule">PatchRetentionRule</h2>
<!-- backwards compatibility -->
<a id="schemapatchretentionrule"></a>
<a id="schema_PatchRetentionRule"></a>
<a id="tocSpatchretentionrule"></a>
<a id="tocspatchretentionrule"></a>

```json
{
  "everySeconds": 86400,
  "shardGroupDurationSeconds": 0,
  "type": "expire"
}
```

Updates to a rule to expire or retain data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|everySeconds|integer(int64)|false|none|Duration in seconds for how long data will be kept in the database. 0 means infinite.|
|shardGroupDurationSeconds|integer(int64)|false|none|Shard duration measured in seconds.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|expire|

<h2 id="tocS_PatchRetentionRules">PatchRetentionRules</h2>
<!-- backwards compatibility -->
<a id="schemapatchretentionrules"></a>
<a id="schema_PatchRetentionRules"></a>
<a id="tocSpatchretentionrules"></a>
<a id="tocspatchretentionrules"></a>

```json
[
  {
    "everySeconds": 86400,
    "shardGroupDurationSeconds": 0,
    "type": "expire"
  }
]
```

Updates to rules to expire or retain data. No rules means no updates.

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "action": "read",
  "resource": {
    "id": "string",
    "name": "string",
    "org": "string",
    "orgID": "string",
    "type": "authorizations"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|resource|[Resource](#schemaresource)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|read|
|action|write|

<h2 id="tocS_PipeExpression">PipeExpression</h2>
<!-- backwards compatibility -->
<a id="schemapipeexpression"></a>
<a id="schema_PipeExpression"></a>
<a id="tocSpipeexpression"></a>
<a id="tocspipeexpression"></a>

```json
{
  "argument": {},
  "call": {
    "arguments": [
      {}
    ],
    "callee": {},
    "type": "string"
  },
  "type": "string"
}
```

Call expression with pipe argument

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|[Expression](#schemaexpression)|false|none|none|
|call|[CallExpression](#schemacallexpression)|false|none|Represents a function call|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_PipeLiteral">PipeLiteral</h2>
<!-- backwards compatibility -->
<a id="schemapipeliteral"></a>
<a id="schema_PipeLiteral"></a>
<a id="tocSpipeliteral"></a>
<a id="tocspipeliteral"></a>

```json
{
  "type": "string"
}
```

Represents a specialized literal value, indicating the left hand value of a pipe expression

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_PostBucketRequest">PostBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostbucketrequest"></a>
<a id="schema_PostBucketRequest"></a>
<a id="tocSpostbucketrequest"></a>
<a id="tocspostbucketrequest"></a>

```json
{
  "description": "string",
  "name": "string",
  "orgID": "string",
  "retentionRules": [
    {
      "everySeconds": 86400,
      "shardGroupDurationSeconds": 0,
      "type": "expire"
    }
  ],
  "rp": "string",
  "schemaType": "implicit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|true|none|none|
|orgID|string|true|none|none|
|retentionRules|[RetentionRules](#schemaretentionrules)|true|none|Rules to expire or retain data.  No rules means data never expires.|
|rp|string|false|none|none|
|schemaType|[SchemaType](#schemaschematype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|schemaType|implicit|
|schemaType|explicit|

<h2 id="tocS_PostCheck">PostCheck</h2>
<!-- backwards compatibility -->
<a id="schemapostcheck"></a>
<a id="schema_PostCheck"></a>
<a id="tocSpostcheck"></a>
<a id="tocspostcheck"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "level": "UNKNOWN",
  "offset": "string",
  "reportZero": true,
  "staleTime": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "timeSince": "string",
  "type": "deadman"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DeadmanCheck](#schemadeadmancheck)|false|none|none|
|*oneOf*|[ThresholdCheck](#schemathresholdcheck)|false|none|none|
|*oneOf*|[CustomCheck](#schemacustomcheck)|false|none|none|

<h2 id="tocS_PostNotificationEndpoint">PostNotificationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemapostnotificationendpoint"></a>
<a id="schema_PostNotificationEndpoint"></a>
<a id="tocSpostnotificationendpoint"></a>
<a id="tocspostnotificationendpoint"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SlackNotificationEndpoint](#schemaslacknotificationendpoint)|false|none|none|
|*oneOf*|[PagerDutyNotificationEndpoint](#schemapagerdutynotificationendpoint)|false|none|none|
|*oneOf*|[HTTPNotificationEndpoint](#schemahttpnotificationendpoint)|false|none|none|
|*oneOf*|[TelegramNotificationEndpoint](#schematelegramnotificationendpoint)|false|none|none|

<h2 id="tocS_PostNotificationRule">PostNotificationRule</h2>
<!-- backwards compatibility -->
<a id="schemapostnotificationrule"></a>
<a id="schema_PostNotificationRule"></a>
<a id="tocSpostnotificationrule"></a>
<a id="tocspostnotificationrule"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SlackNotificationRule](#schemaslacknotificationrule)|false|none|none|
|*oneOf*|[SMTPNotificationRule](#schemasmtpnotificationrule)|false|none|none|
|*oneOf*|[PagerDutyNotificationRule](#schemapagerdutynotificationrule)|false|none|none|
|*oneOf*|[HTTPNotificationRule](#schemahttpnotificationrule)|false|none|none|
|*oneOf*|[TelegramNotificationRule](#schematelegramnotificationrule)|false|none|none|

<h2 id="tocS_PostOrganizationRequest">PostOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostorganizationrequest"></a>
<a id="schema_PostOrganizationRequest"></a>
<a id="tocSpostorganizationrequest"></a>
<a id="tocspostorganizationrequest"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
{
  "key": {
    "name": "string",
    "type": "string"
  },
  "type": "string",
  "value": {}
}
```

The value associated with a key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[PropertyKey](#schemapropertykey)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|[Expression](#schemaexpression)|false|none|none|

<h2 id="tocS_PropertyKey">PropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemapropertykey"></a>
<a id="schema_PropertyKey"></a>
<a id="tocSpropertykey"></a>
<a id="tocspropertykey"></a>

```json
{
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Identifier](#schemaidentifier)|false|none|A valid Flux identifier|
|*oneOf*|[StringLiteral](#schemastringliteral)|false|none|Expressions begin and end with double quote marks|

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "dialect": {
    "annotations": [
      "group"
    ],
    "commentPrefix": "#",
    "dateTimeFormat": "RFC3339",
    "delimiter": ",",
    "header": true
  },
  "extern": {
    "body": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "imports": [
      {
        "as": {
          "name": "string",
          "type": "string"
        },
        "path": {
          "type": "string",
          "value": "string"
        },
        "type": "string"
      }
    ],
    "name": "string",
    "package": {
      "name": {
        "name": "string",
        "type": "string"
      },
      "type": "string"
    },
    "type": "string"
  },
  "now": "1970-01-01T00:00:00Z",
  "params": {},
  "query": "string",
  "type": "flux"
}
```

Query influx using the Flux language

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialect|[Dialect](#schemadialect)|false|none|Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions|
|extern|[File](#schemafile)|false|none|Represents a source from a single file|
|now|string(date-time)|false|none|Specifies the time that should be reported as "now" in the query. Default is the server's now time.|
|params|object|false|none|Enumeration of key/value pairs that respresent parameters to be injected into query (can only specify either this field or extern and not both)<br>|
|query|string|true|none|Query script to execute.|
|type|string|false|none|The type of query. Must be "flux".|

#### Enumerated Values

|Property|Value|
|---|---|
|type|flux|

<h2 id="tocS_QueryEditMode">QueryEditMode</h2>
<!-- backwards compatibility -->
<a id="schemaqueryeditmode"></a>
<a id="schema_QueryEditMode"></a>
<a id="tocSqueryeditmode"></a>
<a id="tocsqueryeditmode"></a>

```json
"builder"
```

<h2 id="tocS_QueryVariableProperties">QueryVariableProperties</h2>
<!-- backwards compatibility -->
<a id="schemaqueryvariableproperties"></a>
<a id="schema_QueryVariableProperties"></a>
<a id="tocSqueryvariableproperties"></a>
<a id="tocsqueryvariableproperties"></a>

```json
{
  "type": "query",
  "values": {
    "language": "string",
    "query": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|values|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|query|

<h2 id="tocS_RangeThreshold">RangeThreshold</h2>
<!-- backwards compatibility -->
<a id="schemarangethreshold"></a>
<a id="schema_RangeThreshold"></a>
<a id="tocSrangethreshold"></a>
<a id="tocsrangethreshold"></a>

```json
{
  "allValues": true,
  "level": "UNKNOWN",
  "max": 0,
  "min": 0,
  "type": "range",
  "within": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allValues|boolean|false|none|If true, only alert if all values meet threshold.|
|level|[CheckStatusLevel](#schemacheckstatuslevel)|false|none|The state to record if check matches a criteria.|
|max|number(float)|true|none|none|
|min|number(float)|true|none|none|
|type|string|true|none|none|
|within|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|UNKNOWN|
|level|OK|
|level|INFO|
|level|CRIT|
|level|WARN|
|type|range|

<h2 id="tocS_Ready">Ready</h2>
<!-- backwards compatibility -->
<a id="schemaready"></a>
<a id="schema_Ready"></a>
<a id="tocSready"></a>
<a id="tocsready"></a>

```json
{
  "started": "2019-03-13T10:09:33.891196-04:00",
  "status": "ready",
  "up": "14m45.911966424s"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|started|string(date-time)|false|none|none|
|status|string|false|none|none|
|up|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ready|

<h2 id="tocS_RegexpLiteral">RegexpLiteral</h2>
<!-- backwards compatibility -->
<a id="schemaregexpliteral"></a>
<a id="schema_RegexpLiteral"></a>
<a id="tocSregexpliteral"></a>
<a id="tocsregexpliteral"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

Expressions begin and end with `/` and are regular expressions with syntax accepted by RE2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|string|false|none|none|

<h2 id="tocS_RenamableField">RenamableField</h2>
<!-- backwards compatibility -->
<a id="schemarenamablefield"></a>
<a id="schema_RenamableField"></a>
<a id="tocSrenamablefield"></a>
<a id="tocsrenamablefield"></a>

```json
{
  "displayName": "string",
  "internalName": "string",
  "visible": true
}
```

Describes a field that can be renamed and made visible or invisible.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The name that a field is renamed to by the user.|
|internalName|string|false|read-only|The calculated name of a field.|
|visible|boolean|false|none|Indicates whether this field should be visible on the table.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "id": "string",
  "name": "string",
  "org": "string",
  "orgID": "string",
  "type": "authorizations"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|If ID is set that is a permission for a specific resource. if it is not set it is a permission for all resources of that resource type.|
|name|string \| null|false|none|Optional name of the resource if the resource has a name field.|
|org|string \| null|false|none|Optional name of the organization of the organization with orgID.|
|orgID|string \| null|false|none|If orgID is set that is a permission for all resources owned my that org. if it is not set it is a permission for all resources of that resource type.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|authorizations|
|type|buckets|
|type|dashboards|
|type|orgs|
|type|sources|
|type|tasks|
|type|telegrafs|
|type|users|
|type|variables|
|type|scrapers|
|type|secrets|
|type|labels|
|type|views|
|type|documents|
|type|notificationRules|
|type|notificationEndpoints|
|type|checks|
|type|dbrp|
|type|notebooks|

<h2 id="tocS_ResourceMember">ResourceMember</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemember"></a>
<a id="schema_ResourceMember"></a>
<a id="tocSresourcemember"></a>
<a id="tocsresourcemember"></a>

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "member"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|oauthID|string|false|none|none|
|status|string|false|none|If inactive the user is inactive.|
|role|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|role|member|

<h2 id="tocS_ResourceMembers">ResourceMembers</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemembers"></a>
<a id="schema_ResourceMembers"></a>
<a id="tocSresourcemembers"></a>
<a id="tocsresourcemembers"></a>

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "member"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|none|
|users|[[ResourceMember](#schemaresourcemember)]|false|none|none|

<h2 id="tocS_ResourceOwner">ResourceOwner</h2>
<!-- backwards compatibility -->
<a id="schemaresourceowner"></a>
<a id="schema_ResourceOwner"></a>
<a id="tocSresourceowner"></a>
<a id="tocsresourceowner"></a>

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active",
  "role": "owner"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|oauthID|string|false|none|none|
|status|string|false|none|If inactive the user is inactive.|
|role|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|role|owner|

<h2 id="tocS_ResourceOwners">ResourceOwners</h2>
<!-- backwards compatibility -->
<a id="schemaresourceowners"></a>
<a id="schema_ResourceOwners"></a>
<a id="tocSresourceowners"></a>
<a id="tocsresourceowners"></a>

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active",
      "role": "owner"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|none|
|users|[[ResourceOwner](#schemaresourceowner)]|false|none|none|

<h2 id="tocS_RetentionRule">RetentionRule</h2>
<!-- backwards compatibility -->
<a id="schemaretentionrule"></a>
<a id="schema_RetentionRule"></a>
<a id="tocSretentionrule"></a>
<a id="tocsretentionrule"></a>

```json
{
  "everySeconds": 86400,
  "shardGroupDurationSeconds": 0,
  "type": "expire"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|everySeconds|integer(int64)|true|none|Duration in seconds for how long data will be kept in the database. 0 means infinite.|
|shardGroupDurationSeconds|integer(int64)|false|none|Shard duration measured in seconds.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|expire|

<h2 id="tocS_RetentionRules">RetentionRules</h2>
<!-- backwards compatibility -->
<a id="schemaretentionrules"></a>
<a id="schema_RetentionRules"></a>
<a id="tocSretentionrules"></a>
<a id="tocsretentionrules"></a>

```json
[
  {
    "everySeconds": 86400,
    "shardGroupDurationSeconds": 0,
    "type": "expire"
  }
]
```

Rules to expire or retain data.  No rules means data never expires.

<h2 id="tocS_ReturnStatement">ReturnStatement</h2>
<!-- backwards compatibility -->
<a id="schemareturnstatement"></a>
<a id="schema_ReturnStatement"></a>
<a id="tocSreturnstatement"></a>
<a id="tocsreturnstatement"></a>

```json
{
  "argument": {},
  "type": "string"
}
```

Defines an expression to return

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Routes">Routes</h2>
<!-- backwards compatibility -->
<a id="schemaroutes"></a>
<a id="schema_Routes"></a>
<a id="tocSroutes"></a>
<a id="tocsroutes"></a>

```json
{
  "authorizations": "http://example.com",
  "buckets": "http://example.com",
  "dashboards": "http://example.com",
  "external": {
    "statusFeed": "http://example.com"
  },
  "flags": "http://example.com",
  "me": "http://example.com",
  "orgs": "http://example.com",
  "query": {
    "analyze": "http://example.com",
    "ast": "http://example.com",
    "self": "http://example.com",
    "suggestions": "http://example.com"
  },
  "setup": "http://example.com",
  "signin": "http://example.com",
  "signout": "http://example.com",
  "sources": "http://example.com",
  "system": {
    "debug": "http://example.com",
    "health": "http://example.com",
    "metrics": "http://example.com"
  },
  "tasks": "http://example.com",
  "telegrafs": "http://example.com",
  "users": "http://example.com",
  "variables": "http://example.com",
  "write": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizations|string(uri)|false|none|none|
|buckets|string(uri)|false|none|none|
|dashboards|string(uri)|false|none|none|
|external|object|false|none|none|
|flags|string(uri)|false|none|none|
|me|string(uri)|false|none|none|
|orgs|string(uri)|false|none|none|
|query|object|false|none|none|
|setup|string(uri)|false|none|none|
|signin|string(uri)|false|none|none|
|signout|string(uri)|false|none|none|
|sources|string(uri)|false|none|none|
|system|object|false|none|none|
|tasks|string(uri)|false|none|none|
|telegrafs|string(uri)|false|none|none|
|users|string(uri)|false|none|none|
|variables|string(uri)|false|none|none|
|write|string(uri)|false|none|none|

<h2 id="tocS_RuleStatusLevel">RuleStatusLevel</h2>
<!-- backwards compatibility -->
<a id="schemarulestatuslevel"></a>
<a id="schema_RuleStatusLevel"></a>
<a id="tocSrulestatuslevel"></a>
<a id="tocsrulestatuslevel"></a>

```json
"UNKNOWN"
```

The state to record if check matches a criteria.

<h2 id="tocS_Run">Run</h2>
<!-- backwards compatibility -->
<a id="schemarun"></a>
<a id="schema_Run"></a>
<a id="tocSrun"></a>
<a id="tocsrun"></a>

```json
{
  "finishedAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "links": {
    "retry": "/api/v2/tasks/1/runs/1/retry",
    "self": "/api/v2/tasks/1/runs/1",
    "task": "/api/v2/tasks/1"
  },
  "log": [
    {
      "message": "Halt and catch fire",
      "runID": "string",
      "time": "1970-01-01T00:00:00Z"
    }
  ],
  "requestedAt": "1970-01-01T00:00:00Z",
  "scheduledFor": "1970-01-01T00:00:00Z",
  "startedAt": "1970-01-01T00:00:00Z",
  "status": "scheduled",
  "taskID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finishedAt|string(date-time)|false|read-only|Time run finished executing, RFC3339Nano.|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|log|[[LogEvent](#schemalogevent)]|false|read-only|An array of logs associated with the run.|
|requestedAt|string(date-time)|false|read-only|Time run was manually requested, RFC3339Nano.|
|scheduledFor|string(date-time)|false|none|Time used for run's "now" option, RFC3339.|
|startedAt|string(date-time)|false|read-only|Time run started executing, RFC3339Nano.|
|status|string|false|read-only|none|
|taskID|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|scheduled|
|status|started|
|status|failed|
|status|success|
|status|canceled|

<h2 id="tocS_RunManually">RunManually</h2>
<!-- backwards compatibility -->
<a id="schemarunmanually"></a>
<a id="schema_RunManually"></a>
<a id="tocSrunmanually"></a>
<a id="tocsrunmanually"></a>

```json
{
  "scheduledFor": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledFor|string(date-time) \| null|false|none|Time used for run's "now" option, RFC3339.  Default is the server's now time.|

<h2 id="tocS_Runs">Runs</h2>
<!-- backwards compatibility -->
<a id="schemaruns"></a>
<a id="schema_Runs"></a>
<a id="tocSruns"></a>
<a id="tocsruns"></a>

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "runs": [
    {
      "finishedAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "links": {
        "retry": "/api/v2/tasks/1/runs/1/retry",
        "self": "/api/v2/tasks/1/runs/1",
        "task": "/api/v2/tasks/1"
      },
      "log": [
        {
          "message": "Halt and catch fire",
          "runID": "string",
          "time": "1970-01-01T00:00:00Z"
        }
      ],
      "requestedAt": "1970-01-01T00:00:00Z",
      "scheduledFor": "1970-01-01T00:00:00Z",
      "startedAt": "1970-01-01T00:00:00Z",
      "status": "scheduled",
      "taskID": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|false|none|none|
|runs|[[Run](#schemarun)]|false|none|none|

<h2 id="tocS_SMTPNotificationRule">SMTPNotificationRule</h2>
<!-- backwards compatibility -->
<a id="schemasmtpnotificationrule"></a>
<a id="schema_SMTPNotificationRule"></a>
<a id="tocSsmtpnotificationrule"></a>
<a id="tocssmtpnotificationrule"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "bodyTemplate": "string",
  "subjectTemplate": "string",
  "to": "string",
  "type": "smtp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification rule.|
|endpointID|string|true|none|none|
|every|string|false|none|The notification repetition interval.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|limit|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty.|
|limitEvery|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty.|
|links|object|false|read-only|none|
|name|string|true|none|Human-readable name describing the notification rule.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|orgID|string|true|none|The ID of the organization that owns this notification rule.|
|ownerID|string|false|read-only|The ID of creator used to create this notification rule.|
|runbookLink|string|false|none|none|
|sleepUntil|string|false|none|none|
|status|[TaskStatusType](#schemataskstatustype)|true|none|none|
|statusRules|[[StatusRule](#schemastatusrule)]|true|none|List of status rules the notification rule attempts to match.|
|tagRules|[[TagRule](#schematagrule)]|false|none|List of tag rules the notification rule attempts to match.|
|taskID|string|false|none|The ID of the task associated with this notification rule.|
|updatedAt|string(date-time)|false|read-only|none|
|bodyTemplate|string|false|none|none|
|subjectTemplate|string|true|none|none|
|to|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|type|smtp|

<h2 id="tocS_SMTPNotificationRuleBase">SMTPNotificationRuleBase</h2>
<!-- backwards compatibility -->
<a id="schemasmtpnotificationrulebase"></a>
<a id="schema_SMTPNotificationRuleBase"></a>
<a id="tocSsmtpnotificationrulebase"></a>
<a id="tocssmtpnotificationrulebase"></a>

```json
{
  "bodyTemplate": "string",
  "subjectTemplate": "string",
  "to": "string",
  "type": "smtp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyTemplate|string|false|none|none|
|subjectTemplate|string|true|none|none|
|to|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|smtp|

<h2 id="tocS_ScatterViewProperties">ScatterViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemascatterviewproperties"></a>
<a id="schema_ScatterViewProperties"></a>
<a id="tocSscatterviewproperties"></a>
<a id="tocsscatterviewproperties"></a>

```json
{
  "colors": [
    "string"
  ],
  "fillColumns": [
    "string"
  ],
  "generateXAxisTicks": [
    "string"
  ],
  "generateYAxisTicks": [
    "string"
  ],
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "note": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "symbolColumns": [
    "string"
  ],
  "timeFormat": "string",
  "type": "scatter",
  "xAxisLabel": "string",
  "xColumn": "string",
  "xDomain": [
    0
  ],
  "xPrefix": "string",
  "xSuffix": "string",
  "xTickStart": 0,
  "xTickStep": 0,
  "xTotalTicks": 0,
  "yAxisLabel": "string",
  "yColumn": "string",
  "yDomain": [
    0
  ],
  "yPrefix": "string",
  "ySuffix": "string",
  "yTickStart": 0,
  "yTickStep": 0,
  "yTotalTicks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[string]|true|none|Colors define color encoding of data into a visualization|
|fillColumns|[string]|true|none|none|
|generateXAxisTicks|[string]|false|none|none|
|generateYAxisTicks|[string]|false|none|none|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|note|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|symbolColumns|[string]|true|none|none|
|timeFormat|string|false|none|none|
|type|string|true|none|none|
|xAxisLabel|string|true|none|none|
|xColumn|string|true|none|none|
|xDomain|[number]|true|none|none|
|xPrefix|string|true|none|none|
|xSuffix|string|true|none|none|
|xTickStart|number(float)|false|none|none|
|xTickStep|number(float)|false|none|none|
|xTotalTicks|integer|false|none|none|
|yAxisLabel|string|true|none|none|
|yColumn|string|true|none|none|
|yDomain|[number]|true|none|none|
|yPrefix|string|true|none|none|
|ySuffix|string|true|none|none|
|yTickStart|number(float)|false|none|none|
|yTickStep|number(float)|false|none|none|
|yTotalTicks|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|scatter|

<h2 id="tocS_SchemaType">SchemaType</h2>
<!-- backwards compatibility -->
<a id="schemaschematype"></a>
<a id="schema_SchemaType"></a>
<a id="tocSschematype"></a>
<a id="tocsschematype"></a>

```json
"implicit"
```

<h2 id="tocS_ScraperTargetRequest">ScraperTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemascrapertargetrequest"></a>
<a id="schema_ScraperTargetRequest"></a>
<a id="tocSscrapertargetrequest"></a>
<a id="tocsscrapertargetrequest"></a>

```json
{
  "allowInsecure": false,
  "bucketID": "string",
  "name": "string",
  "orgID": "string",
  "type": "prometheus",
  "url": "http://localhost:9090/metrics"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowInsecure|boolean|false|none|Skip TLS verification on endpoint.|
|bucketID|string|false|none|The ID of the bucket to write to.|
|name|string|false|none|The name of the scraper target.|
|orgID|string|false|none|The organization ID.|
|type|string|false|none|The type of the metrics to be parsed.|
|url|string|false|none|The URL of the metrics endpoint.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|prometheus|

<h2 id="tocS_ScraperTargetResponse">ScraperTargetResponse</h2>
<!-- backwards compatibility -->
<a id="schemascrapertargetresponse"></a>
<a id="schema_ScraperTargetResponse"></a>
<a id="tocSscrapertargetresponse"></a>
<a id="tocsscrapertargetresponse"></a>

```json
{
  "allowInsecure": false,
  "bucketID": "string",
  "name": "string",
  "orgID": "string",
  "type": "prometheus",
  "url": "http://localhost:9090/metrics",
  "bucket": "string",
  "id": "string",
  "links": {
    "bucket": "/api/v2/buckets/1",
    "members": "/api/v2/scrapers/1/members",
    "organization": "/api/v2/orgs/1",
    "owners": "/api/v2/scrapers/1/owners",
    "self": "/api/v2/scrapers/1"
  },
  "org": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowInsecure|boolean|false|none|Skip TLS verification on endpoint.|
|bucketID|string|false|none|The ID of the bucket to write to.|
|name|string|false|none|The name of the scraper target.|
|orgID|string|false|none|The organization ID.|
|type|string|false|none|The type of the metrics to be parsed.|
|url|string|false|none|The URL of the metrics endpoint.|
|bucket|string|false|none|The bucket name.|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|org|string|false|none|The name of the organization.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|prometheus|

<h2 id="tocS_ScraperTargetResponses">ScraperTargetResponses</h2>
<!-- backwards compatibility -->
<a id="schemascrapertargetresponses"></a>
<a id="schema_ScraperTargetResponses"></a>
<a id="tocSscrapertargetresponses"></a>
<a id="tocsscrapertargetresponses"></a>

```json
{
  "configurations": [
    {
      "allowInsecure": false,
      "bucketID": "string",
      "name": "string",
      "orgID": "string",
      "type": "prometheus",
      "url": "http://localhost:9090/metrics",
      "bucket": "string",
      "id": "string",
      "links": {
        "bucket": "/api/v2/buckets/1",
        "members": "/api/v2/scrapers/1/members",
        "organization": "/api/v2/orgs/1",
        "owners": "/api/v2/scrapers/1/owners",
        "self": "/api/v2/scrapers/1"
      },
      "org": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|[[ScraperTargetResponse](#schemascrapertargetresponse)]|false|none|none|

<h2 id="tocS_SecretKeys">SecretKeys</h2>
<!-- backwards compatibility -->
<a id="schemasecretkeys"></a>
<a id="schema_SecretKeys"></a>
<a id="tocSsecretkeys"></a>
<a id="tocssecretkeys"></a>

```json
{
  "secrets": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secrets|[string]|false|none|none|

<h2 id="tocS_SecretKeysResponse">SecretKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemasecretkeysresponse"></a>
<a id="schema_SecretKeysResponse"></a>
<a id="tocSsecretkeysresponse"></a>
<a id="tocssecretkeysresponse"></a>

```json
{
  "secrets": [
    "string"
  ],
  "links": {
    "org": "string",
    "self": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secrets|[string]|false|none|none|
|links|object|false|read-only|none|

<h2 id="tocS_Secrets">Secrets</h2>
<!-- backwards compatibility -->
<a id="schemasecrets"></a>
<a id="schema_Secrets"></a>
<a id="tocSsecrets"></a>
<a id="tocssecrets"></a>

```json
{
  "apikey": "abc123xyz"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_SingleStatViewProperties">SingleStatViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemasinglestatviewproperties"></a>
<a id="schema_SingleStatViewProperties"></a>
<a id="tocSsinglestatviewproperties"></a>
<a id="tocssinglestatviewproperties"></a>

```json
{
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "decimalPlaces": {
    "digits": 0,
    "isEnforced": true
  },
  "note": "string",
  "prefix": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "staticLegend": {
    "colorizeRows": true,
    "heightRatio": 0,
    "hide": true,
    "opacity": 0,
    "orientationThreshold": 0,
    "valueAxis": "string",
    "widthRatio": 0
  },
  "suffix": "string",
  "tickPrefix": "string",
  "tickSuffix": "string",
  "type": "single-stat"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|decimalPlaces|[DecimalPlaces](#schemadecimalplaces)|true|none|Indicates whether decimal places should be enforced, and how many digits it should show.|
|note|string|true|none|none|
|prefix|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|staticLegend|[StaticLegend](#schemastaticlegend)|false|none|StaticLegend represents the options specific to the static legend|
|suffix|string|true|none|none|
|tickPrefix|string|true|none|none|
|tickSuffix|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|single-stat|

<h2 id="tocS_SlackNotificationEndpoint">SlackNotificationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaslacknotificationendpoint"></a>
<a id="schema_SlackNotificationEndpoint"></a>
<a id="tocSslacknotificationendpoint"></a>
<a id="tocsslacknotificationendpoint"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "token": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification endpoint.|
|id|string|false|none|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|false|none|none|
|status|string|false|none|The status of the endpoint.|
|type|[NotificationEndpointType](#schemanotificationendpointtype)|true|none|none|
|updatedAt|string(date-time)|false|read-only|none|
|userID|string|false|none|none|
|token|string|false|none|Specifies the API token string. Specify either `URL` or `Token`.|
|url|string|false|none|Specifies the URL of the Slack endpoint. Specify either `URL` or `Token`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|slack|
|type|pagerduty|
|type|http|
|type|telegram|

<h2 id="tocS_SlackNotificationRule">SlackNotificationRule</h2>
<!-- backwards compatibility -->
<a id="schemaslacknotificationrule"></a>
<a id="schema_SlackNotificationRule"></a>
<a id="tocSslacknotificationrule"></a>
<a id="tocsslacknotificationrule"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification rule.|
|endpointID|string|true|none|none|
|every|string|false|none|The notification repetition interval.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|limit|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty.|
|limitEvery|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty.|
|links|object|false|read-only|none|
|name|string|true|none|Human-readable name describing the notification rule.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|orgID|string|true|none|The ID of the organization that owns this notification rule.|
|ownerID|string|false|read-only|The ID of creator used to create this notification rule.|
|runbookLink|string|false|none|none|
|sleepUntil|string|false|none|none|
|status|[TaskStatusType](#schemataskstatustype)|true|none|none|
|statusRules|[[StatusRule](#schemastatusrule)]|true|none|List of status rules the notification rule attempts to match.|
|tagRules|[[TagRule](#schematagrule)]|false|none|List of tag rules the notification rule attempts to match.|
|taskID|string|false|none|The ID of the task associated with this notification rule.|
|updatedAt|string(date-time)|false|read-only|none|
|channel|string|false|none|none|
|messageTemplate|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|type|slack|

<h2 id="tocS_SlackNotificationRuleBase">SlackNotificationRuleBase</h2>
<!-- backwards compatibility -->
<a id="schemaslacknotificationrulebase"></a>
<a id="schema_SlackNotificationRuleBase"></a>
<a id="tocSslacknotificationrulebase"></a>
<a id="tocsslacknotificationrulebase"></a>

```json
{
  "channel": "string",
  "messageTemplate": "string",
  "type": "slack"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|none|
|messageTemplate|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|slack|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "default": true,
  "defaultRP": "string",
  "id": "string",
  "insecureSkipVerify": true,
  "languages": [
    "flux"
  ],
  "links": {
    "buckets": "string",
    "health": "string",
    "query": "string",
    "self": "string"
  },
  "metaUrl": "http://example.com",
  "name": "string",
  "orgID": "string",
  "password": "string",
  "sharedSecret": "string",
  "telegraf": "string",
  "token": "string",
  "type": "v1",
  "url": "http://example.com",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|none|
|defaultRP|string|false|none|none|
|id|string|false|none|none|
|insecureSkipVerify|boolean|false|none|none|
|languages|[string]|false|read-only|none|
|links|object|false|none|none|
|metaUrl|string(uri)|false|none|none|
|name|string|false|none|none|
|orgID|string|false|none|none|
|password|string|false|none|none|
|sharedSecret|string|false|none|none|
|telegraf|string|false|none|none|
|token|string|false|none|none|
|type|string|false|none|none|
|url|string(uri)|false|none|none|
|username|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|languages|flux|
|languages|influxql|
|type|v1|
|type|v2|
|type|self|

<h2 id="tocS_Sources">Sources</h2>
<!-- backwards compatibility -->
<a id="schemasources"></a>
<a id="schema_Sources"></a>
<a id="tocSsources"></a>
<a id="tocssources"></a>

```json
{
  "links": {
    "self": "http://example.com"
  },
  "sources": [
    {
      "default": true,
      "defaultRP": "string",
      "id": "string",
      "insecureSkipVerify": true,
      "languages": [
        "flux"
      ],
      "links": {
        "buckets": "string",
        "health": "string",
        "query": "string",
        "self": "string"
      },
      "metaUrl": "http://example.com",
      "name": "string",
      "orgID": "string",
      "password": "string",
      "sharedSecret": "string",
      "telegraf": "string",
      "token": "string",
      "type": "v1",
      "url": "http://example.com",
      "username": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|none|
|sources|[[Source](#schemasource)]|false|none|none|

<h2 id="tocS_Stack">Stack</h2>
<!-- backwards compatibility -->
<a id="schemastack"></a>
<a id="schema_Stack"></a>
<a id="tocSstack"></a>
<a id="tocsstack"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "events": [
    {
      "description": "string",
      "eventType": "string",
      "name": "string",
      "resources": [
        {
          "apiVersion": "string",
          "associations": [
            {
              "kind": "Bucket",
              "metaName": "string"
            }
          ],
          "kind": "Bucket",
          "links": {
            "self": "string"
          },
          "resourceID": "string",
          "templateMetaName": "string"
        }
      ],
      "sources": [
        "string"
      ],
      "updatedAt": "1970-01-01T00:00:00Z",
      "urls": [
        "string"
      ]
    }
  ],
  "id": "string",
  "orgID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|events|[object]|false|none|none|
|id|string|false|none|none|
|orgID|string|false|none|none|

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
{
  "text": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BadStatement](#schemabadstatement)|false|none|A placeholder for statements for which no correct statement nodes can be created|
|*oneOf*|[VariableAssignment](#schemavariableassignment)|false|none|Represents the declaration of a variable|
|*oneOf*|[MemberAssignment](#schemamemberassignment)|false|none|Object property assignment|
|*oneOf*|[ExpressionStatement](#schemaexpressionstatement)|false|none|May consist of an expression that does not return a value and is executed solely for its side-effects|
|*oneOf*|[ReturnStatement](#schemareturnstatement)|false|none|Defines an expression to return|
|*oneOf*|[OptionStatement](#schemaoptionstatement)|false|none|A single variable declaration|
|*oneOf*|[BuiltinStatement](#schemabuiltinstatement)|false|none|Declares a builtin identifier and its type|
|*oneOf*|[TestStatement](#schemateststatement)|false|none|Declares a Flux test case|

<h2 id="tocS_StaticLegend">StaticLegend</h2>
<!-- backwards compatibility -->
<a id="schemastaticlegend"></a>
<a id="schema_StaticLegend"></a>
<a id="tocSstaticlegend"></a>
<a id="tocsstaticlegend"></a>

```json
{
  "colorizeRows": true,
  "heightRatio": 0,
  "hide": true,
  "opacity": 0,
  "orientationThreshold": 0,
  "valueAxis": "string",
  "widthRatio": 0
}
```

StaticLegend represents the options specific to the static legend

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorizeRows|boolean|false|none|none|
|heightRatio|number(float)|false|none|none|
|hide|boolean|false|none|none|
|opacity|number(float)|false|none|none|
|orientationThreshold|integer|false|none|none|
|valueAxis|string|false|none|none|
|widthRatio|number(float)|false|none|none|

<h2 id="tocS_StatusRule">StatusRule</h2>
<!-- backwards compatibility -->
<a id="schemastatusrule"></a>
<a id="schema_StatusRule"></a>
<a id="tocSstatusrule"></a>
<a id="tocsstatusrule"></a>

```json
{
  "count": 0,
  "currentLevel": "UNKNOWN",
  "period": "string",
  "previousLevel": "UNKNOWN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|currentLevel|[RuleStatusLevel](#schemarulestatuslevel)|false|none|The state to record if check matches a criteria.|
|period|string|false|none|none|
|previousLevel|[RuleStatusLevel](#schemarulestatuslevel)|false|none|The state to record if check matches a criteria.|

#### Enumerated Values

|Property|Value|
|---|---|
|currentLevel|UNKNOWN|
|currentLevel|OK|
|currentLevel|INFO|
|currentLevel|CRIT|
|currentLevel|WARN|
|currentLevel|ANY|
|previousLevel|UNKNOWN|
|previousLevel|OK|
|previousLevel|INFO|
|previousLevel|CRIT|
|previousLevel|WARN|
|previousLevel|ANY|

<h2 id="tocS_StringLiteral">StringLiteral</h2>
<!-- backwards compatibility -->
<a id="schemastringliteral"></a>
<a id="schema_StringLiteral"></a>
<a id="tocSstringliteral"></a>
<a id="tocsstringliteral"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

Expressions begin and end with double quote marks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|string|false|none|none|

<h2 id="tocS_TableViewProperties">TableViewProperties</h2>
<!-- backwards compatibility -->
<a id="schematableviewproperties"></a>
<a id="schema_TableViewProperties"></a>
<a id="tocStableviewproperties"></a>
<a id="tocstableviewproperties"></a>

```json
{
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "decimalPlaces": {
    "digits": 0,
    "isEnforced": true
  },
  "fieldOptions": [
    {
      "displayName": "string",
      "internalName": "string",
      "visible": true
    }
  ],
  "note": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "tableOptions": {
    "fixFirstColumn": true,
    "sortBy": {
      "displayName": "string",
      "internalName": "string",
      "visible": true
    },
    "verticalTimeAxis": true,
    "wrapping": "truncate"
  },
  "timeFormat": "string",
  "type": "table"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|decimalPlaces|[DecimalPlaces](#schemadecimalplaces)|true|none|Indicates whether decimal places should be enforced, and how many digits it should show.|
|fieldOptions|[[RenamableField](#schemarenamablefield)]|true|none|fieldOptions represent the fields retrieved by the query with customization options|
|note|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|tableOptions|object|true|none|none|
|timeFormat|string|true|none|timeFormat describes the display format for time values according to moment.js date formatting|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shape|chronograf-v2|
|type|table|

<h2 id="tocS_TagRule">TagRule</h2>
<!-- backwards compatibility -->
<a id="schematagrule"></a>
<a id="schema_TagRule"></a>
<a id="tocStagrule"></a>
<a id="tocstagrule"></a>

```json
{
  "key": "string",
  "operator": "equal",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|operator|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|equal|
|operator|notequal|
|operator|equalregex|
|operator|notequalregex|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "authorizationID": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "cron": "string",
  "description": "string",
  "every": "string",
  "flux": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/tasks/1/labels",
    "logs": "/api/v2/tasks/1/logs",
    "members": "/api/v2/tasks/1/members",
    "owners": "/api/v2/tasks/1/owners",
    "runs": "/api/v2/tasks/1/runs",
    "self": "/api/v2/tasks/1"
  },
  "name": "string",
  "offset": "string",
  "org": "string",
  "orgID": "string",
  "status": "active",
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationID|string|false|none|The ID of the authorization used when this task communicates with the query engine.|
|createdAt|string(date-time)|false|read-only|none|
|cron|string|false|none|A task repetition schedule in the form '* * * * * *'; parsed from Flux.|
|description|string|false|none|An optional description of the task.|
|every|string|false|none|A simple task repetition schedule; parsed from Flux.|
|flux|string|true|none|The Flux script to run for this task.|
|id|string|true|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|links|object|false|read-only|none|
|name|string|true|none|The name of the task.|
|offset|string|false|none|Duration to delay after the schedule, before executing the task; parsed from flux, if set to zero it will remove this option and use 0 as the default.|
|org|string|false|none|The name of the organization that owns this Task.|
|orgID|string|true|none|The ID of the organization that owns this Task.|
|status|[TaskStatusType](#schemataskstatustype)|false|none|none|
|type|string|false|none|The type of task, this can be used for filtering tasks on list actions.|
|updatedAt|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|

<h2 id="tocS_TaskCreateRequest">TaskCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemataskcreaterequest"></a>
<a id="schema_TaskCreateRequest"></a>
<a id="tocStaskcreaterequest"></a>
<a id="tocstaskcreaterequest"></a>

```json
{
  "description": "string",
  "flux": "string",
  "org": "string",
  "orgID": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional description of the task.|
|flux|string|true|none|The Flux script to run for this task.|
|org|string|false|none|The name of the organization that owns this Task.|
|orgID|string|false|none|The ID of the organization that owns this Task.|
|status|[TaskStatusType](#schemataskstatustype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_TaskStatusType">TaskStatusType</h2>
<!-- backwards compatibility -->
<a id="schemataskstatustype"></a>
<a id="schema_TaskStatusType"></a>
<a id="tocStaskstatustype"></a>
<a id="tocstaskstatustype"></a>

```json
"active"
```

<h2 id="tocS_TaskUpdateRequest">TaskUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemataskupdaterequest"></a>
<a id="schema_TaskUpdateRequest"></a>
<a id="tocStaskupdaterequest"></a>
<a id="tocstaskupdaterequest"></a>

```json
{
  "cron": "string",
  "description": "string",
  "every": "string",
  "flux": "string",
  "name": "string",
  "offset": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron|string|false|none|Override the 'cron' option in the flux script.|
|description|string|false|none|An optional description of the task.|
|every|string|false|none|Override the 'every' option in the flux script.|
|flux|string|false|none|The Flux script to run for this task.|
|name|string|false|none|Override the 'name' option in the flux script.|
|offset|string|false|none|Override the 'offset' option in the flux script.|
|status|[TaskStatusType](#schemataskstatustype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_Tasks">Tasks</h2>
<!-- backwards compatibility -->
<a id="schematasks"></a>
<a id="schema_Tasks"></a>
<a id="tocStasks"></a>
<a id="tocstasks"></a>

```json
{
  "links": {
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "tasks": [
    {
      "authorizationID": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "cron": "string",
      "description": "string",
      "every": "string",
      "flux": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "lastRunError": "string",
      "lastRunStatus": "failed",
      "latestCompleted": "1970-01-01T00:00:00Z",
      "links": {
        "labels": "/api/v2/tasks/1/labels",
        "logs": "/api/v2/tasks/1/logs",
        "members": "/api/v2/tasks/1/members",
        "owners": "/api/v2/tasks/1/owners",
        "runs": "/api/v2/tasks/1/runs",
        "self": "/api/v2/tasks/1"
      },
      "name": "string",
      "offset": "string",
      "org": "string",
      "orgID": "string",
      "status": "active",
      "type": "string",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[Links](#schemalinks)|false|none|none|
|tasks|[[Task](#schematask)]|false|none|none|

<h2 id="tocS_Telegraf">Telegraf</h2>
<!-- backwards compatibility -->
<a id="schematelegraf"></a>
<a id="schema_Telegraf"></a>
<a id="tocStelegraf"></a>
<a id="tocstelegraf"></a>

```json
{
  "config": "string",
  "description": "string",
  "metadata": {
    "buckets": [
      "string"
    ]
  },
  "name": "string",
  "orgID": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "lables": "/api/v2/telegrafs/1/labels",
    "members": "/api/v2/telegrafs/1/members",
    "owners": "/api/v2/telegrafs/1/owners",
    "self": "/api/v2/telegrafs/1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|none|
|description|string|false|none|none|
|metadata|object|false|none|none|
|name|string|false|none|none|
|orgID|string|false|none|none|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|

<h2 id="tocS_TelegrafPlugin">TelegrafPlugin</h2>
<!-- backwards compatibility -->
<a id="schematelegrafplugin"></a>
<a id="schema_TelegrafPlugin"></a>
<a id="tocStelegrafplugin"></a>
<a id="tocstelegrafplugin"></a>

```json
{
  "config": "string",
  "description": "string",
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|none|
|description|string|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_TelegrafPlugins">TelegrafPlugins</h2>
<!-- backwards compatibility -->
<a id="schematelegrafplugins"></a>
<a id="schema_TelegrafPlugins"></a>
<a id="tocStelegrafplugins"></a>
<a id="tocstelegrafplugins"></a>

```json
{
  "os": "string",
  "plugins": [
    {
      "config": "string",
      "description": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|os|string|false|none|none|
|plugins|[[TelegrafPlugin](#schematelegrafplugin)]|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_TelegrafRequest">TelegrafRequest</h2>
<!-- backwards compatibility -->
<a id="schematelegrafrequest"></a>
<a id="schema_TelegrafRequest"></a>
<a id="tocStelegrafrequest"></a>
<a id="tocstelegrafrequest"></a>

```json
{
  "config": "string",
  "description": "string",
  "metadata": {
    "buckets": [
      "string"
    ]
  },
  "name": "string",
  "orgID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|none|
|description|string|false|none|none|
|metadata|object|false|none|none|
|name|string|false|none|none|
|orgID|string|false|none|none|

<h2 id="tocS_Telegrafs">Telegrafs</h2>
<!-- backwards compatibility -->
<a id="schematelegrafs"></a>
<a id="schema_Telegrafs"></a>
<a id="tocStelegrafs"></a>
<a id="tocstelegrafs"></a>

```json
{
  "configurations": [
    {
      "config": "string",
      "description": "string",
      "metadata": {
        "buckets": [
          "string"
        ]
      },
      "name": "string",
      "orgID": "string",
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string",
          "orgID": "string",
          "properties": {
            "color": "ffb3b3",
            "description": "this is a description"
          }
        }
      ],
      "links": {
        "lables": "/api/v2/telegrafs/1/labels",
        "members": "/api/v2/telegrafs/1/members",
        "owners": "/api/v2/telegrafs/1/owners",
        "self": "/api/v2/telegrafs/1"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|[[Telegraf](#schematelegraf)]|false|none|none|

<h2 id="tocS_TelegramNotificationEndpoint">TelegramNotificationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schematelegramnotificationendpoint"></a>
<a id="schema_TelegramNotificationEndpoint"></a>
<a id="tocStelegramnotificationendpoint"></a>
<a id="tocstelegramnotificationendpoint"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "/api/v2/notificationEndpoints/1/labels",
    "members": "/api/v2/notificationEndpoints/1/members",
    "owners": "/api/v2/notificationEndpoints/1/owners",
    "self": "/api/v2/notificationEndpoints/1"
  },
  "name": "string",
  "orgID": "string",
  "status": "active",
  "type": "slack",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userID": "string",
  "channel": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification endpoint.|
|id|string|false|none|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|false|none|none|
|status|string|false|none|The status of the endpoint.|
|type|[NotificationEndpointType](#schemanotificationendpointtype)|true|none|none|
|updatedAt|string(date-time)|false|read-only|none|
|userID|string|false|none|none|
|channel|string|true|none|ID of the telegram channel, a chat_id in https://core.telegram.org/bots/api#sendmessage .|
|token|string|true|none|Specifies the Telegram bot token. See https://core.telegram.org/bots#creating-a-new-bot .|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|slack|
|type|pagerduty|
|type|http|
|type|telegram|

<h2 id="tocS_TelegramNotificationRule">TelegramNotificationRule</h2>
<!-- backwards compatibility -->
<a id="schematelegramnotificationrule"></a>
<a id="schema_TelegramNotificationRule"></a>
<a id="tocStelegramnotificationrule"></a>
<a id="tocstelegramnotificationrule"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "endpointID": "string",
  "every": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "limit": 0,
  "limitEvery": 0,
  "links": {
    "labels": "/api/v2/notificationRules/1/labels",
    "members": "/api/v2/notificationRules/1/members",
    "owners": "/api/v2/notificationRules/1/owners",
    "query": "/api/v2/notificationRules/1/query",
    "self": "/api/v2/notificationRules/1"
  },
  "name": "string",
  "offset": "string",
  "orgID": "string",
  "ownerID": "string",
  "runbookLink": "string",
  "sleepUntil": "string",
  "status": "active",
  "statusRules": [
    {
      "count": 0,
      "currentLevel": "UNKNOWN",
      "period": "string",
      "previousLevel": "UNKNOWN"
    }
  ],
  "tagRules": [
    {
      "key": "string",
      "operator": "equal",
      "value": "string"
    }
  ],
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "disableWebPagePreview": true,
  "messageTemplate": "string",
  "parseMode": "MarkdownV2",
  "type": "telegram"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the notification rule.|
|endpointID|string|true|none|none|
|every|string|false|none|The notification repetition interval.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|limit|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty.|
|limitEvery|integer|false|none|Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty.|
|links|object|false|read-only|none|
|name|string|true|none|Human-readable name describing the notification rule.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|orgID|string|true|none|The ID of the organization that owns this notification rule.|
|ownerID|string|false|read-only|The ID of creator used to create this notification rule.|
|runbookLink|string|false|none|none|
|sleepUntil|string|false|none|none|
|status|[TaskStatusType](#schemataskstatustype)|true|none|none|
|statusRules|[[StatusRule](#schemastatusrule)]|true|none|List of status rules the notification rule attempts to match.|
|tagRules|[[TagRule](#schematagrule)]|false|none|List of tag rules the notification rule attempts to match.|
|taskID|string|false|none|The ID of the task associated with this notification rule.|
|updatedAt|string(date-time)|false|read-only|none|
|disableWebPagePreview|boolean|false|none|Disables preview of web links in the sent messages when "true". Defaults to "false" .|
|messageTemplate|string|true|none|The message template as a flux interpolated string.|
|parseMode|string|false|none|Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to "MarkdownV2" .|
|type|string|true|none|The discriminator between other types of notification rules is "telegram".|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|parseMode|MarkdownV2|
|parseMode|HTML|
|parseMode|Markdown|
|type|telegram|

<h2 id="tocS_TelegramNotificationRuleBase">TelegramNotificationRuleBase</h2>
<!-- backwards compatibility -->
<a id="schematelegramnotificationrulebase"></a>
<a id="schema_TelegramNotificationRuleBase"></a>
<a id="tocStelegramnotificationrulebase"></a>
<a id="tocstelegramnotificationrulebase"></a>

```json
{
  "disableWebPagePreview": true,
  "messageTemplate": "string",
  "parseMode": "MarkdownV2",
  "type": "telegram"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableWebPagePreview|boolean|false|none|Disables preview of web links in the sent messages when "true". Defaults to "false" .|
|messageTemplate|string|true|none|The message template as a flux interpolated string.|
|parseMode|string|false|none|Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to "MarkdownV2" .|
|type|string|true|none|The discriminator between other types of notification rules is "telegram".|

#### Enumerated Values

|Property|Value|
|---|---|
|parseMode|MarkdownV2|
|parseMode|HTML|
|parseMode|Markdown|
|type|telegram|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
[
  {
    "apiVersion": "string",
    "kind": "Bucket",
    "meta": {
      "name": "string"
    },
    "spec": {}
  }
]
```

<h2 id="tocS_TemplateApply">TemplateApply</h2>
<!-- backwards compatibility -->
<a id="schematemplateapply"></a>
<a id="schema_TemplateApply"></a>
<a id="tocStemplateapply"></a>
<a id="tocstemplateapply"></a>

```json
{
  "actions": [
    {
      "action": "skipKind",
      "properties": {
        "kind": "Bucket"
      }
    }
  ],
  "dryRun": true,
  "envRefs": {
    "property1": "string",
    "property2": "string"
  },
  "orgID": "string",
  "remotes": [
    {
      "contentType": "string",
      "url": "string"
    }
  ],
  "secrets": {
    "property1": "string",
    "property2": "string"
  },
  "stackID": "string",
  "template": {
    "contentType": "string",
    "contents": [
      {
        "apiVersion": "string",
        "kind": "Bucket",
        "meta": {
          "name": "string"
        },
        "spec": {}
      }
    ],
    "sources": [
      "string"
    ]
  },
  "templates": [
    {
      "contentType": "string",
      "contents": [
        {
          "apiVersion": "string",
          "kind": "Bucket",
          "meta": {
            "name": "string"
          },
          "spec": {}
        }
      ],
      "sources": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|false|none|none|
|dryRun|boolean|false|none|none|
|envRefs|object|false|none|none|
|orgID|string|false|none|none|
|remotes|[object]|false|none|none|
|secrets|object|false|none|none|
|stackID|string|false|none|none|
|template|object|false|none|none|
|templates|[object]|false|none|none|

<h2 id="tocS_TemplateChart">TemplateChart</h2>
<!-- backwards compatibility -->
<a id="schematemplatechart"></a>
<a id="schema_TemplateChart"></a>
<a id="tocStemplatechart"></a>
<a id="tocstemplatechart"></a>

```json
{
  "height": 0,
  "properties": {
    "axes": {
      "x": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "y": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      }
    },
    "colors": [
      {
        "hex": "strings",
        "id": "string",
        "name": "string",
        "type": "min",
        "value": 0
      }
    ],
    "decimalPlaces": {
      "digits": 0,
      "isEnforced": true
    },
    "generateXAxisTicks": [
      "string"
    ],
    "generateYAxisTicks": [
      "string"
    ],
    "hoverDimension": "auto",
    "legendColorizeRows": true,
    "legendHide": true,
    "legendOpacity": 0,
    "legendOrientationThreshold": 0,
    "note": "string",
    "position": "overlaid",
    "prefix": "string",
    "queries": [
      {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      }
    ],
    "shadeBelow": true,
    "shape": "chronograf-v2",
    "showNoteWhenEmpty": true,
    "staticLegend": {
      "colorizeRows": true,
      "heightRatio": 0,
      "hide": true,
      "opacity": 0,
      "orientationThreshold": 0,
      "valueAxis": "string",
      "widthRatio": 0
    },
    "suffix": "string",
    "timeFormat": "string",
    "type": "line-plus-single-stat",
    "xColumn": "string",
    "xTickStart": 0,
    "xTickStep": 0,
    "xTotalTicks": 0,
    "yColumn": "string",
    "yTickStart": 0,
    "yTickStep": 0,
    "yTotalTicks": 0
  },
  "width": 0,
  "xPos": 0,
  "yPos": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|false|none|none|
|properties|[ViewProperties](#schemaviewproperties)|false|none|none|
|width|integer|false|none|none|
|xPos|integer|false|none|none|
|yPos|integer|false|none|none|

<h2 id="tocS_TemplateEnvReferences">TemplateEnvReferences</h2>
<!-- backwards compatibility -->
<a id="schematemplateenvreferences"></a>
<a id="schema_TemplateEnvReferences"></a>
<a id="tocStemplateenvreferences"></a>
<a id="tocstemplateenvreferences"></a>

```json
[
  {
    "defaultValue": "string",
    "envRefKey": "string",
    "resourceField": "string",
    "value": "string"
  }
]
```

<h2 id="tocS_TemplateExportByID">TemplateExportByID</h2>
<!-- backwards compatibility -->
<a id="schematemplateexportbyid"></a>
<a id="schema_TemplateExportByID"></a>
<a id="tocStemplateexportbyid"></a>
<a id="tocstemplateexportbyid"></a>

```json
{
  "orgIDs": [
    {
      "orgID": "string",
      "resourceFilters": {
        "byLabel": [
          "string"
        ],
        "byResourceKind": [
          "Bucket"
        ]
      }
    }
  ],
  "resources": {
    "id": "string",
    "kind": "Bucket",
    "name": "string"
  },
  "stackID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orgIDs|[object]|false|none|none|
|resources|object|false|none|none|
|stackID|string|false|none|none|

<h2 id="tocS_TemplateExportByName">TemplateExportByName</h2>
<!-- backwards compatibility -->
<a id="schematemplateexportbyname"></a>
<a id="schema_TemplateExportByName"></a>
<a id="tocStemplateexportbyname"></a>
<a id="tocstemplateexportbyname"></a>

```json
{
  "orgIDs": [
    {
      "orgID": "string",
      "resourceFilters": {
        "byLabel": [
          "string"
        ],
        "byResourceKind": [
          "Bucket"
        ]
      }
    }
  ],
  "resources": {
    "kind": "Bucket",
    "name": "string"
  },
  "stackID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orgIDs|[object]|false|none|none|
|resources|object|false|none|none|
|stackID|string|false|none|none|

<h2 id="tocS_TemplateKind">TemplateKind</h2>
<!-- backwards compatibility -->
<a id="schematemplatekind"></a>
<a id="schema_TemplateKind"></a>
<a id="tocStemplatekind"></a>
<a id="tocstemplatekind"></a>

```json
"Bucket"
```

<h2 id="tocS_TemplateSummary">TemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schematemplatesummary"></a>
<a id="schema_TemplateSummary"></a>
<a id="tocStemplatesummary"></a>
<a id="tocstemplatesummary"></a>

```json
{
  "diff": {
    "buckets": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "description": "string",
          "name": "string",
          "retentionRules": [
            {
              "everySeconds": 86400,
              "shardGroupDurationSeconds": 0,
              "type": "expire"
            }
          ]
        },
        "old": {
          "description": "string",
          "name": "string",
          "retentionRules": [
            {
              "everySeconds": 86400,
              "shardGroupDurationSeconds": 0,
              "type": "expire"
            }
          ]
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "checks": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "lastRunError": "string",
          "lastRunStatus": "failed",
          "latestCompleted": "1970-01-01T00:00:00Z",
          "links": {
            "labels": "/api/v2/checks/1/labels",
            "members": "/api/v2/checks/1/members",
            "owners": "/api/v2/checks/1/owners",
            "query": "/api/v2/checks/1/query",
            "self": "/api/v2/checks/1"
          },
          "name": "string",
          "orgID": "string",
          "ownerID": "string",
          "query": {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          },
          "status": "active",
          "taskID": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "every": "string",
          "level": "UNKNOWN",
          "offset": "string",
          "reportZero": true,
          "staleTime": "string",
          "statusMessageTemplate": "string",
          "tags": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "timeSince": "string",
          "type": "deadman"
        },
        "old": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "lastRunError": "string",
          "lastRunStatus": "failed",
          "latestCompleted": "1970-01-01T00:00:00Z",
          "links": {
            "labels": "/api/v2/checks/1/labels",
            "members": "/api/v2/checks/1/members",
            "owners": "/api/v2/checks/1/owners",
            "query": "/api/v2/checks/1/query",
            "self": "/api/v2/checks/1"
          },
          "name": "string",
          "orgID": "string",
          "ownerID": "string",
          "query": {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          },
          "status": "active",
          "taskID": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "every": "string",
          "level": "UNKNOWN",
          "offset": "string",
          "reportZero": true,
          "staleTime": "string",
          "statusMessageTemplate": "string",
          "tags": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "timeSince": "string",
          "type": "deadman"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "dashboards": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "charts": [
            {
              "height": 0,
              "properties": {
                "axes": {
                  "x": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  },
                  "y": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  }
                },
                "colors": [
                  {
                    "hex": "strings",
                    "id": "string",
                    "name": "string",
                    "type": "min",
                    "value": 0
                  }
                ],
                "decimalPlaces": {
                  "digits": 0,
                  "isEnforced": true
                },
                "generateXAxisTicks": [
                  "string"
                ],
                "generateYAxisTicks": [
                  "string"
                ],
                "hoverDimension": "auto",
                "legendColorizeRows": true,
                "legendHide": true,
                "legendOpacity": 0,
                "legendOrientationThreshold": 0,
                "note": "string",
                "position": "overlaid",
                "prefix": "string",
                "queries": [
                  {
                    "builderConfig": {
                      "aggregateWindow": {
                        "fillValues": true,
                        "period": "string"
                      },
                      "buckets": [
                        "string"
                      ],
                      "functions": [
                        {
                          "name": "string"
                        }
                      ],
                      "tags": [
                        {
                          "aggregateFunctionType": "filter",
                          "key": "string",
                          "values": [
                            "string"
                          ]
                        }
                      ]
                    },
                    "editMode": "builder",
                    "name": "string",
                    "text": "string"
                  }
                ],
                "shadeBelow": true,
                "shape": "chronograf-v2",
                "showNoteWhenEmpty": true,
                "staticLegend": {
                  "colorizeRows": true,
                  "heightRatio": 0,
                  "hide": true,
                  "opacity": 0,
                  "orientationThreshold": 0,
                  "valueAxis": "string",
                  "widthRatio": 0
                },
                "suffix": "string",
                "timeFormat": "string",
                "type": "line-plus-single-stat",
                "xColumn": "string",
                "xTickStart": 0,
                "xTickStep": 0,
                "xTotalTicks": 0,
                "yColumn": "string",
                "yTickStart": 0,
                "yTickStep": 0,
                "yTotalTicks": 0
              },
              "width": 0,
              "xPos": 0,
              "yPos": 0
            }
          ],
          "description": "string",
          "name": "string"
        },
        "old": {
          "charts": [
            {
              "height": 0,
              "properties": {
                "axes": {
                  "x": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  },
                  "y": {
                    "base": "",
                    "bounds": [
                      "string"
                    ],
                    "label": "string",
                    "prefix": "string",
                    "scale": "log",
                    "suffix": "string"
                  }
                },
                "colors": [
                  {
                    "hex": "strings",
                    "id": "string",
                    "name": "string",
                    "type": "min",
                    "value": 0
                  }
                ],
                "decimalPlaces": {
                  "digits": 0,
                  "isEnforced": true
                },
                "generateXAxisTicks": [
                  "string"
                ],
                "generateYAxisTicks": [
                  "string"
                ],
                "hoverDimension": "auto",
                "legendColorizeRows": true,
                "legendHide": true,
                "legendOpacity": 0,
                "legendOrientationThreshold": 0,
                "note": "string",
                "position": "overlaid",
                "prefix": "string",
                "queries": [
                  {
                    "builderConfig": {
                      "aggregateWindow": {
                        "fillValues": true,
                        "period": "string"
                      },
                      "buckets": [
                        "string"
                      ],
                      "functions": [
                        {
                          "name": "string"
                        }
                      ],
                      "tags": [
                        {
                          "aggregateFunctionType": "filter",
                          "key": "string",
                          "values": [
                            "string"
                          ]
                        }
                      ]
                    },
                    "editMode": "builder",
                    "name": "string",
                    "text": "string"
                  }
                ],
                "shadeBelow": true,
                "shape": "chronograf-v2",
                "showNoteWhenEmpty": true,
                "staticLegend": {
                  "colorizeRows": true,
                  "heightRatio": 0,
                  "hide": true,
                  "opacity": 0,
                  "orientationThreshold": 0,
                  "valueAxis": "string",
                  "widthRatio": 0
                },
                "suffix": "string",
                "timeFormat": "string",
                "type": "line-plus-single-stat",
                "xColumn": "string",
                "xTickStart": 0,
                "xTickStep": 0,
                "xTotalTicks": 0,
                "yColumn": "string",
                "yTickStart": 0,
                "yTickStep": 0,
                "yTotalTicks": 0
              },
              "width": 0,
              "xPos": 0,
              "yPos": 0
            }
          ],
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "labelMappings": [
      {
        "labelID": "string",
        "labelName": "string",
        "labelTemplateMetaName": "string",
        "resourceID": "string",
        "resourceName": "string",
        "resourceTemplateMetaName": "string",
        "resourceType": "string",
        "status": "string"
      }
    ],
    "labels": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "color": "string",
          "description": "string",
          "name": "string"
        },
        "old": {
          "color": "string",
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "notificationEndpoints": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "links": {
            "labels": "/api/v2/notificationEndpoints/1/labels",
            "members": "/api/v2/notificationEndpoints/1/members",
            "owners": "/api/v2/notificationEndpoints/1/owners",
            "self": "/api/v2/notificationEndpoints/1"
          },
          "name": "string",
          "orgID": "string",
          "status": "active",
          "type": "slack",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userID": "string",
          "token": "string",
          "url": "string"
        },
        "old": {
          "createdAt": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string",
              "orgID": "string",
              "properties": {
                "color": "ffb3b3",
                "description": "this is a description"
              }
            }
          ],
          "links": {
            "labels": "/api/v2/notificationEndpoints/1/labels",
            "members": "/api/v2/notificationEndpoints/1/members",
            "owners": "/api/v2/notificationEndpoints/1/owners",
            "self": "/api/v2/notificationEndpoints/1"
          },
          "name": "string",
          "orgID": "string",
          "status": "active",
          "type": "slack",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userID": "string",
          "token": "string",
          "url": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "notificationRules": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "description": "string",
          "endpointID": "string",
          "endpointName": "string",
          "endpointType": "string",
          "every": "string",
          "messageTemplate": "string",
          "name": "string",
          "offset": "string",
          "status": "string",
          "statusRules": [
            {
              "currentLevel": "string",
              "previousLevel": "string"
            }
          ],
          "tagRules": [
            {
              "key": "string",
              "operator": "string",
              "value": "string"
            }
          ]
        },
        "old": {
          "description": "string",
          "endpointID": "string",
          "endpointName": "string",
          "endpointType": "string",
          "every": "string",
          "messageTemplate": "string",
          "name": "string",
          "offset": "string",
          "status": "string",
          "statusRules": [
            {
              "currentLevel": "string",
              "previousLevel": "string"
            }
          ],
          "tagRules": [
            {
              "key": "string",
              "operator": "string",
              "value": "string"
            }
          ]
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "tasks": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "cron": "string",
          "description": "string",
          "every": "string",
          "name": "string",
          "offset": "string",
          "query": "string",
          "status": "string"
        },
        "old": {
          "cron": "string",
          "description": "string",
          "every": "string",
          "name": "string",
          "offset": "string",
          "query": "string",
          "status": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "telegrafConfigs": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "config": "string",
          "description": "string",
          "metadata": {
            "buckets": [
              "string"
            ]
          },
          "name": "string",
          "orgID": "string"
        },
        "old": {
          "config": "string",
          "description": "string",
          "metadata": {
            "buckets": [
              "string"
            ]
          },
          "name": "string",
          "orgID": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ],
    "variables": [
      {
        "id": "string",
        "kind": "Bucket",
        "new": {
          "args": {
            "type": "query",
            "values": {
              "language": "string",
              "query": "string"
            }
          },
          "description": "string",
          "name": "string"
        },
        "old": {
          "args": {
            "type": "query",
            "values": {
              "language": "string",
              "query": "string"
            }
          },
          "description": "string",
          "name": "string"
        },
        "stateStatus": "string",
        "templateMetaName": "string"
      }
    ]
  },
  "errors": [
    {
      "fields": [
        "string"
      ],
      "indexes": [
        0
      ],
      "kind": "Bucket",
      "reason": "string"
    }
  ],
  "sources": [
    "string"
  ],
  "stackID": "string",
  "summary": {
    "buckets": [
      {
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "retentionPeriod": 0,
        "templateMetaName": "string"
      }
    ],
    "checks": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "labels": [
          {
            "id": "string",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "ffb3b3",
              "description": "this is a description"
            }
          }
        ],
        "lastRunError": "string",
        "lastRunStatus": "failed",
        "latestCompleted": "1970-01-01T00:00:00Z",
        "links": {
          "labels": "/api/v2/checks/1/labels",
          "members": "/api/v2/checks/1/members",
          "owners": "/api/v2/checks/1/owners",
          "query": "/api/v2/checks/1/query",
          "self": "/api/v2/checks/1"
        },
        "name": "string",
        "orgID": "string",
        "ownerID": "string",
        "query": {
          "builderConfig": {
            "aggregateWindow": {
              "fillValues": true,
              "period": "string"
            },
            "buckets": [
              "string"
            ],
            "functions": [
              {
                "name": "string"
              }
            ],
            "tags": [
              {
                "aggregateFunctionType": "filter",
                "key": "string",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "editMode": "builder",
          "name": "string",
          "text": "string"
        },
        "status": "active",
        "taskID": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "every": "string",
        "level": "UNKNOWN",
        "offset": "string",
        "reportZero": true,
        "staleTime": "string",
        "statusMessageTemplate": "string",
        "tags": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "timeSince": "string",
        "type": "deadman",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "dashboards": [
      {
        "charts": [
          {
            "height": 0,
            "properties": {
              "axes": {
                "x": {
                  "base": "",
                  "bounds": [
                    "string"
                  ],
                  "label": "string",
                  "prefix": "string",
                  "scale": "log",
                  "suffix": "string"
                },
                "y": {
                  "base": "",
                  "bounds": [
                    "string"
                  ],
                  "label": "string",
                  "prefix": "string",
                  "scale": "log",
                  "suffix": "string"
                }
              },
              "colors": [
                {
                  "hex": "strings",
                  "id": "string",
                  "name": "string",
                  "type": "min",
                  "value": 0
                }
              ],
              "decimalPlaces": {
                "digits": 0,
                "isEnforced": true
              },
              "generateXAxisTicks": [
                "string"
              ],
              "generateYAxisTicks": [
                "string"
              ],
              "hoverDimension": "auto",
              "legendColorizeRows": true,
              "legendHide": true,
              "legendOpacity": 0,
              "legendOrientationThreshold": 0,
              "note": "string",
              "position": "overlaid",
              "prefix": "string",
              "queries": [
                {
                  "builderConfig": {
                    "aggregateWindow": {
                      "fillValues": true,
                      "period": "string"
                    },
                    "buckets": [
                      "string"
                    ],
                    "functions": [
                      {
                        "name": "string"
                      }
                    ],
                    "tags": [
                      {
                        "aggregateFunctionType": "filter",
                        "key": "string",
                        "values": [
                          "string"
                        ]
                      }
                    ]
                  },
                  "editMode": "builder",
                  "name": "string",
                  "text": "string"
                }
              ],
              "shadeBelow": true,
              "shape": "chronograf-v2",
              "showNoteWhenEmpty": true,
              "staticLegend": {
                "colorizeRows": true,
                "heightRatio": 0,
                "hide": true,
                "opacity": 0,
                "orientationThreshold": 0,
                "valueAxis": "string",
                "widthRatio": 0
              },
              "suffix": "string",
              "timeFormat": "string",
              "type": "line-plus-single-stat",
              "xColumn": "string",
              "xTickStart": 0,
              "xTickStep": 0,
              "xTotalTicks": 0,
              "yColumn": "string",
              "yTickStart": 0,
              "yTickStep": 0,
              "yTotalTicks": 0
            },
            "width": 0,
            "xPos": 0,
            "yPos": 0
          }
        ],
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "templateMetaName": "string"
      }
    ],
    "labelMappings": [
      {
        "labelID": "string",
        "labelName": "string",
        "labelTemplateMetaName": "string",
        "resourceID": "string",
        "resourceName": "string",
        "resourceTemplateMetaName": "string",
        "resourceType": "string",
        "status": "string"
      }
    ],
    "labels": [
      {
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "name": "string",
        "orgID": "string",
        "properties": {
          "color": "string",
          "description": "string"
        },
        "templateMetaName": "string"
      }
    ],
    "missingEnvRefs": [
      "string"
    ],
    "missingSecrets": [
      "string"
    ],
    "notificationEndpoints": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "labels": [
          {
            "id": "string",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "ffb3b3",
              "description": "this is a description"
            }
          }
        ],
        "links": {
          "labels": "/api/v2/notificationEndpoints/1/labels",
          "members": "/api/v2/notificationEndpoints/1/members",
          "owners": "/api/v2/notificationEndpoints/1/owners",
          "self": "/api/v2/notificationEndpoints/1"
        },
        "name": "string",
        "orgID": "string",
        "status": "active",
        "type": "slack",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userID": "string",
        "token": "string",
        "url": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "notificationRules": [
      {
        "description": "string",
        "endpointID": "string",
        "endpointTemplateMetaName": "string",
        "endpointType": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "every": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "messageTemplate": "string",
        "name": "string",
        "offset": "string",
        "status": "string",
        "statusRules": [
          {
            "currentLevel": "string",
            "previousLevel": "string"
          }
        ],
        "tagRules": [
          {
            "key": "string",
            "operator": "string",
            "value": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "tasks": [
      {
        "cron": "string",
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "every": "string",
        "id": "string",
        "kind": "Bucket",
        "name": "string",
        "offset": "string",
        "query": "string",
        "status": "string",
        "templateMetaName": "string"
      }
    ],
    "telegrafConfigs": [
      {
        "config": "string",
        "description": "string",
        "metadata": {
          "buckets": [
            "string"
          ]
        },
        "name": "string",
        "orgID": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "templateMetaName": "string"
      }
    ],
    "variables": [
      {
        "arguments": {
          "type": "query",
          "values": {
            "language": "string",
            "query": "string"
          }
        },
        "description": "string",
        "envReferences": [
          {
            "defaultValue": "string",
            "envRefKey": "string",
            "resourceField": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "kind": "Bucket",
        "labelAssociations": [
          {
            "envReferences": [
              {
                "defaultValue": "string",
                "envRefKey": "string",
                "resourceField": "string",
                "value": "string"
              }
            ],
            "id": "string",
            "kind": "Bucket",
            "name": "string",
            "orgID": "string",
            "properties": {
              "color": "string",
              "description": "string"
            },
            "templateMetaName": "string"
          }
        ],
        "name": "string",
        "orgID": "string",
        "templateMetaName": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diff|object|false|none|none|
|errors|[object]|false|none|none|
|sources|[string]|false|none|none|
|stackID|string|false|none|none|
|summary|object|false|none|none|

<h2 id="tocS_TemplateSummaryLabel">TemplateSummaryLabel</h2>
<!-- backwards compatibility -->
<a id="schematemplatesummarylabel"></a>
<a id="schema_TemplateSummaryLabel"></a>
<a id="tocStemplatesummarylabel"></a>
<a id="tocstemplatesummarylabel"></a>

```json
{
  "envReferences": [
    {
      "defaultValue": "string",
      "envRefKey": "string",
      "resourceField": "string",
      "value": "string"
    }
  ],
  "id": "string",
  "kind": "Bucket",
  "name": "string",
  "orgID": "string",
  "properties": {
    "color": "string",
    "description": "string"
  },
  "templateMetaName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|envReferences|[TemplateEnvReferences](#schematemplateenvreferences)|false|none|none|
|id|string|false|none|none|
|kind|[TemplateKind](#schematemplatekind)|false|none|none|
|name|string|false|none|none|
|orgID|string|false|none|none|
|properties|object|false|none|none|
|templateMetaName|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|Bucket|
|kind|Check|
|kind|CheckDeadman|
|kind|CheckThreshold|
|kind|Dashboard|
|kind|Label|
|kind|NotificationEndpoint|
|kind|NotificationEndpointHTTP|
|kind|NotificationEndpointPagerDuty|
|kind|NotificationEndpointSlack|
|kind|NotificationRule|
|kind|Task|
|kind|Telegraf|
|kind|Variable|

<h2 id="tocS_TestStatement">TestStatement</h2>
<!-- backwards compatibility -->
<a id="schemateststatement"></a>
<a id="schema_TestStatement"></a>
<a id="tocSteststatement"></a>
<a id="tocsteststatement"></a>

```json
{
  "assignment": {
    "id": {
      "name": "string",
      "type": "string"
    },
    "init": {},
    "type": "string"
  },
  "type": "string"
}
```

Declares a Flux test case

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignment|[VariableAssignment](#schemavariableassignment)|false|none|Represents the declaration of a variable|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_Threshold">Threshold</h2>
<!-- backwards compatibility -->
<a id="schemathreshold"></a>
<a id="schema_Threshold"></a>
<a id="tocSthreshold"></a>
<a id="tocsthreshold"></a>

```json
{
  "allValues": true,
  "level": "UNKNOWN",
  "type": "greater",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[GreaterThreshold](#schemagreaterthreshold)|false|none|none|
|*oneOf*|[LesserThreshold](#schemalesserthreshold)|false|none|none|
|*oneOf*|[RangeThreshold](#schemarangethreshold)|false|none|none|

<h2 id="tocS_ThresholdBase">ThresholdBase</h2>
<!-- backwards compatibility -->
<a id="schemathresholdbase"></a>
<a id="schema_ThresholdBase"></a>
<a id="tocSthresholdbase"></a>
<a id="tocsthresholdbase"></a>

```json
{
  "allValues": true,
  "level": "UNKNOWN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allValues|boolean|false|none|If true, only alert if all values meet threshold.|
|level|[CheckStatusLevel](#schemacheckstatuslevel)|false|none|The state to record if check matches a criteria.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|UNKNOWN|
|level|OK|
|level|INFO|
|level|CRIT|
|level|WARN|

<h2 id="tocS_ThresholdCheck">ThresholdCheck</h2>
<!-- backwards compatibility -->
<a id="schemathresholdcheck"></a>
<a id="schema_ThresholdCheck"></a>
<a id="tocSthresholdcheck"></a>
<a id="tocsthresholdcheck"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "lastRunError": "string",
  "lastRunStatus": "failed",
  "latestCompleted": "1970-01-01T00:00:00Z",
  "links": {
    "labels": "/api/v2/checks/1/labels",
    "members": "/api/v2/checks/1/members",
    "owners": "/api/v2/checks/1/owners",
    "query": "/api/v2/checks/1/query",
    "self": "/api/v2/checks/1"
  },
  "name": "string",
  "orgID": "string",
  "ownerID": "string",
  "query": {
    "builderConfig": {
      "aggregateWindow": {
        "fillValues": true,
        "period": "string"
      },
      "buckets": [
        "string"
      ],
      "functions": [
        {
          "name": "string"
        }
      ],
      "tags": [
        {
          "aggregateFunctionType": "filter",
          "key": "string",
          "values": [
            "string"
          ]
        }
      ]
    },
    "editMode": "builder",
    "name": "string",
    "text": "string"
  },
  "status": "active",
  "taskID": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "every": "string",
  "offset": "string",
  "statusMessageTemplate": "string",
  "tags": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "thresholds": [
    {
      "allValues": true,
      "level": "UNKNOWN",
      "type": "greater",
      "value": 0
    }
  ],
  "type": "threshold"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|description|string|false|none|An optional description of the check.|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|lastRunError|string|false|read-only|none|
|lastRunStatus|string|false|read-only|none|
|latestCompleted|string(date-time)|false|read-only|Timestamp of latest scheduled, completed run, RFC3339.|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|true|none|The ID of the organization that owns this check.|
|ownerID|string|false|read-only|The ID of creator used to create this check.|
|query|[DashboardQuery](#schemadashboardquery)|true|none|none|
|status|[TaskStatusType](#schemataskstatustype)|false|none|none|
|taskID|string|false|none|The ID of the task associated with this check.|
|updatedAt|string(date-time)|false|read-only|none|
|every|string|false|none|Check repetition interval.|
|offset|string|false|none|Duration to delay after the schedule, before executing check.|
|statusMessageTemplate|string|false|none|The template used to generate and write a status message.|
|tags|[object]|false|none|List of tags to write to each status.|
|thresholds|[[Threshold](#schemathreshold)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lastRunStatus|failed|
|lastRunStatus|success|
|lastRunStatus|canceled|
|status|active|
|status|inactive|
|type|threshold|

<h2 id="tocS_UnaryExpression">UnaryExpression</h2>
<!-- backwards compatibility -->
<a id="schemaunaryexpression"></a>
<a id="schema_UnaryExpression"></a>
<a id="tocSunaryexpression"></a>
<a id="tocsunaryexpression"></a>

```json
{
  "argument": {},
  "operator": "string",
  "type": "string"
}
```

Uses operators to act on a single operand in an expression

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|[Expression](#schemaexpression)|false|none|none|
|operator|string|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_UnsignedIntegerLiteral">UnsignedIntegerLiteral</h2>
<!-- backwards compatibility -->
<a id="schemaunsignedintegerliteral"></a>
<a id="schema_UnsignedIntegerLiteral"></a>
<a id="tocSunsignedintegerliteral"></a>
<a id="tocsunsignedintegerliteral"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

Represents integer numbers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|
|value|string|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "string",
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|none|
|name|string|true|none|none|
|oauthID|string|false|none|none|
|status|string|false|none|If inactive the user is inactive.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "id": "string",
  "links": {
    "self": "/api/v2/users/1"
  },
  "name": "string",
  "oauthID": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|oauthID|string|false|none|none|
|status|string|false|none|If inactive the user is inactive.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "links": {
    "self": "http://example.com"
  },
  "users": [
    {
      "id": "string",
      "links": {
        "self": "/api/v2/users/1"
      },
      "name": "string",
      "oauthID": "string",
      "status": "active"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|none|
|users|[[UserResponse](#schemauserresponse)]|false|none|none|

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "arguments": {
    "type": "query",
    "values": {
      "language": "string",
      "query": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string",
      "orgID": "string",
      "properties": {
        "color": "ffb3b3",
        "description": "this is a description"
      }
    }
  ],
  "links": {
    "labels": "http://example.com",
    "org": "http://example.com",
    "self": "http://example.com"
  },
  "name": "string",
  "orgID": "string",
  "selected": [
    "string"
  ],
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|[VariableProperties](#schemavariableproperties)|true|none|none|
|createdAt|string(date-time)|false|none|none|
|description|string|false|none|none|
|id|string|false|read-only|none|
|labels|[Labels](#schemalabels)|false|none|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|orgID|string|true|none|none|
|selected|[string]|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_VariableAssignment">VariableAssignment</h2>
<!-- backwards compatibility -->
<a id="schemavariableassignment"></a>
<a id="schema_VariableAssignment"></a>
<a id="tocSvariableassignment"></a>
<a id="tocsvariableassignment"></a>

```json
{
  "id": {
    "name": "string",
    "type": "string"
  },
  "init": {},
  "type": "string"
}
```

Represents the declaration of a variable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Identifier](#schemaidentifier)|false|none|A valid Flux identifier|
|init|[Expression](#schemaexpression)|false|none|none|
|type|[NodeType](#schemanodetype)|false|none|Type of AST node|

<h2 id="tocS_VariableProperties">VariableProperties</h2>
<!-- backwards compatibility -->
<a id="schemavariableproperties"></a>
<a id="schema_VariableProperties"></a>
<a id="tocSvariableproperties"></a>
<a id="tocsvariableproperties"></a>

```json
{
  "type": "query",
  "values": {
    "language": "string",
    "query": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[QueryVariableProperties](#schemaqueryvariableproperties)|false|none|none|
|*oneOf*|[ConstantVariableProperties](#schemaconstantvariableproperties)|false|none|none|
|*oneOf*|[MapVariableProperties](#schemamapvariableproperties)|false|none|none|

<h2 id="tocS_Variables">Variables</h2>
<!-- backwards compatibility -->
<a id="schemavariables"></a>
<a id="schema_Variables"></a>
<a id="tocSvariables"></a>
<a id="tocsvariables"></a>

```json
{
  "variables": [
    {
      "arguments": {
        "type": "constant",
        "values": [
          "howdy",
          "hello",
          "hi",
          "yo",
          "oy"
        ]
      },
      "id": "1221432",
      "name": ":ok:",
      "selected": [
        "hello"
      ]
    },
    {
      "arguments": {
        "type": "map",
        "values": {
          "a": "fdjaklfdjkldsfjlkjdsa",
          "b": "dfaksjfkljekfajekdljfas",
          "c": "fdjksajfdkfeawfeea"
        }
      },
      "id": "1221432",
      "name": ":ok:",
      "selected": [
        "c"
      ]
    },
    {
      "arguments": {
        "language": "flux",
        "query": "from(bucket: \"foo\") |&gt; showMeasurements()",
        "type": "query"
      },
      "id": "1221432",
      "name": ":ok:",
      "selected": [
        "host"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variables|[[Variable](#schemavariable)]|false|none|none|

<h2 id="tocS_View">View</h2>
<!-- backwards compatibility -->
<a id="schemaview"></a>
<a id="schema_View"></a>
<a id="tocSview"></a>
<a id="tocsview"></a>

```json
{
  "id": "string",
  "links": {
    "self": "string"
  },
  "name": "string",
  "properties": {
    "axes": {
      "x": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      },
      "y": {
        "base": "",
        "bounds": [
          "string"
        ],
        "label": "string",
        "prefix": "string",
        "scale": "log",
        "suffix": "string"
      }
    },
    "colors": [
      {
        "hex": "strings",
        "id": "string",
        "name": "string",
        "type": "min",
        "value": 0
      }
    ],
    "decimalPlaces": {
      "digits": 0,
      "isEnforced": true
    },
    "generateXAxisTicks": [
      "string"
    ],
    "generateYAxisTicks": [
      "string"
    ],
    "hoverDimension": "auto",
    "legendColorizeRows": true,
    "legendHide": true,
    "legendOpacity": 0,
    "legendOrientationThreshold": 0,
    "note": "string",
    "position": "overlaid",
    "prefix": "string",
    "queries": [
      {
        "builderConfig": {
          "aggregateWindow": {
            "fillValues": true,
            "period": "string"
          },
          "buckets": [
            "string"
          ],
          "functions": [
            {
              "name": "string"
            }
          ],
          "tags": [
            {
              "aggregateFunctionType": "filter",
              "key": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "editMode": "builder",
        "name": "string",
        "text": "string"
      }
    ],
    "shadeBelow": true,
    "shape": "chronograf-v2",
    "showNoteWhenEmpty": true,
    "staticLegend": {
      "colorizeRows": true,
      "heightRatio": 0,
      "hide": true,
      "opacity": 0,
      "orientationThreshold": 0,
      "valueAxis": "string",
      "widthRatio": 0
    },
    "suffix": "string",
    "timeFormat": "string",
    "type": "line-plus-single-stat",
    "xColumn": "string",
    "xTickStart": 0,
    "xTickStep": 0,
    "xTotalTicks": 0,
    "yColumn": "string",
    "yTickStart": 0,
    "yTickStep": 0,
    "yTotalTicks": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|none|
|links|object|false|read-only|none|
|name|string|true|none|none|
|properties|[ViewProperties](#schemaviewproperties)|true|none|none|

<h2 id="tocS_ViewProperties">ViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemaviewproperties"></a>
<a id="schema_ViewProperties"></a>
<a id="tocSviewproperties"></a>
<a id="tocsviewproperties"></a>

```json
{
  "axes": {
    "x": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    },
    "y": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    }
  },
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "decimalPlaces": {
    "digits": 0,
    "isEnforced": true
  },
  "generateXAxisTicks": [
    "string"
  ],
  "generateYAxisTicks": [
    "string"
  ],
  "hoverDimension": "auto",
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "note": "string",
  "position": "overlaid",
  "prefix": "string",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shadeBelow": true,
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "staticLegend": {
    "colorizeRows": true,
    "heightRatio": 0,
    "hide": true,
    "opacity": 0,
    "orientationThreshold": 0,
    "valueAxis": "string",
    "widthRatio": 0
  },
  "suffix": "string",
  "timeFormat": "string",
  "type": "line-plus-single-stat",
  "xColumn": "string",
  "xTickStart": 0,
  "xTickStep": 0,
  "xTotalTicks": 0,
  "yColumn": "string",
  "yTickStart": 0,
  "yTickStep": 0,
  "yTotalTicks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LinePlusSingleStatProperties](#schemalineplussinglestatproperties)|false|none|none|
|*oneOf*|[XYViewProperties](#schemaxyviewproperties)|false|none|none|
|*oneOf*|[SingleStatViewProperties](#schemasinglestatviewproperties)|false|none|none|
|*oneOf*|[HistogramViewProperties](#schemahistogramviewproperties)|false|none|none|
|*oneOf*|[GaugeViewProperties](#schemagaugeviewproperties)|false|none|none|
|*oneOf*|[TableViewProperties](#schematableviewproperties)|false|none|none|
|*oneOf*|[MarkdownViewProperties](#schemamarkdownviewproperties)|false|none|none|
|*oneOf*|[CheckViewProperties](#schemacheckviewproperties)|false|none|none|
|*oneOf*|[ScatterViewProperties](#schemascatterviewproperties)|false|none|none|
|*oneOf*|[HeatmapViewProperties](#schemaheatmapviewproperties)|false|none|none|
|*oneOf*|[MosaicViewProperties](#schemamosaicviewproperties)|false|none|none|
|*oneOf*|[BandViewProperties](#schemabandviewproperties)|false|none|none|
|*oneOf*|[GeoViewProperties](#schemageoviewproperties)|false|none|none|

<h2 id="tocS_Views">Views</h2>
<!-- backwards compatibility -->
<a id="schemaviews"></a>
<a id="schema_Views"></a>
<a id="tocSviews"></a>
<a id="tocsviews"></a>

```json
{
  "links": {
    "self": "string"
  },
  "views": [
    {
      "id": "string",
      "links": {
        "self": "string"
      },
      "name": "string",
      "properties": {
        "axes": {
          "x": {
            "base": "",
            "bounds": [
              "string"
            ],
            "label": "string",
            "prefix": "string",
            "scale": "log",
            "suffix": "string"
          },
          "y": {
            "base": "",
            "bounds": [
              "string"
            ],
            "label": "string",
            "prefix": "string",
            "scale": "log",
            "suffix": "string"
          }
        },
        "colors": [
          {
            "hex": "strings",
            "id": "string",
            "name": "string",
            "type": "min",
            "value": 0
          }
        ],
        "decimalPlaces": {
          "digits": 0,
          "isEnforced": true
        },
        "generateXAxisTicks": [
          "string"
        ],
        "generateYAxisTicks": [
          "string"
        ],
        "hoverDimension": "auto",
        "legendColorizeRows": true,
        "legendHide": true,
        "legendOpacity": 0,
        "legendOrientationThreshold": 0,
        "note": "string",
        "position": "overlaid",
        "prefix": "string",
        "queries": [
          {
            "builderConfig": {
              "aggregateWindow": {
                "fillValues": true,
                "period": "string"
              },
              "buckets": [
                "string"
              ],
              "functions": [
                {
                  "name": "string"
                }
              ],
              "tags": [
                {
                  "aggregateFunctionType": "filter",
                  "key": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "editMode": "builder",
            "name": "string",
            "text": "string"
          }
        ],
        "shadeBelow": true,
        "shape": "chronograf-v2",
        "showNoteWhenEmpty": true,
        "staticLegend": {
          "colorizeRows": true,
          "heightRatio": 0,
          "hide": true,
          "opacity": 0,
          "orientationThreshold": 0,
          "valueAxis": "string",
          "widthRatio": 0
        },
        "suffix": "string",
        "timeFormat": "string",
        "type": "line-plus-single-stat",
        "xColumn": "string",
        "xTickStart": 0,
        "xTickStep": 0,
        "xTotalTicks": 0,
        "yColumn": "string",
        "yTickStart": 0,
        "yTickStep": 0,
        "yTotalTicks": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|none|
|views|[[View](#schemaview)]|false|none|none|

<h2 id="tocS_WritePrecision">WritePrecision</h2>
<!-- backwards compatibility -->
<a id="schemawriteprecision"></a>
<a id="schema_WritePrecision"></a>
<a id="tocSwriteprecision"></a>
<a id="tocswriteprecision"></a>

```json
"ms"
```

<h2 id="tocS_XYGeom">XYGeom</h2>
<!-- backwards compatibility -->
<a id="schemaxygeom"></a>
<a id="schema_XYGeom"></a>
<a id="tocSxygeom"></a>
<a id="tocsxygeom"></a>

```json
"line"
```

<h2 id="tocS_XYViewProperties">XYViewProperties</h2>
<!-- backwards compatibility -->
<a id="schemaxyviewproperties"></a>
<a id="schema_XYViewProperties"></a>
<a id="tocSxyviewproperties"></a>
<a id="tocsxyviewproperties"></a>

```json
{
  "axes": {
    "x": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    },
    "y": {
      "base": "",
      "bounds": [
        "string"
      ],
      "label": "string",
      "prefix": "string",
      "scale": "log",
      "suffix": "string"
    }
  },
  "colors": [
    {
      "hex": "strings",
      "id": "string",
      "name": "string",
      "type": "min",
      "value": 0
    }
  ],
  "generateXAxisTicks": [
    "string"
  ],
  "generateYAxisTicks": [
    "string"
  ],
  "geom": "line",
  "hoverDimension": "auto",
  "legendColorizeRows": true,
  "legendHide": true,
  "legendOpacity": 0,
  "legendOrientationThreshold": 0,
  "note": "string",
  "position": "overlaid",
  "queries": [
    {
      "builderConfig": {
        "aggregateWindow": {
          "fillValues": true,
          "period": "string"
        },
        "buckets": [
          "string"
        ],
        "functions": [
          {
            "name": "string"
          }
        ],
        "tags": [
          {
            "aggregateFunctionType": "filter",
            "key": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "editMode": "builder",
      "name": "string",
      "text": "string"
    }
  ],
  "shadeBelow": true,
  "shape": "chronograf-v2",
  "showNoteWhenEmpty": true,
  "staticLegend": {
    "colorizeRows": true,
    "heightRatio": 0,
    "hide": true,
    "opacity": 0,
    "orientationThreshold": 0,
    "valueAxis": "string",
    "widthRatio": 0
  },
  "timeFormat": "string",
  "type": "xy",
  "xColumn": "string",
  "xTickStart": 0,
  "xTickStep": 0,
  "xTotalTicks": 0,
  "yColumn": "string",
  "yTickStart": 0,
  "yTickStep": 0,
  "yTotalTicks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axes|[Axes](#schemaaxes)|true|none|The viewport for a View's visualizations|
|colors|[[DashboardColor](#schemadashboardcolor)]|true|none|Colors define color encoding of data into a visualization|
|generateXAxisTicks|[string]|false|none|none|
|generateYAxisTicks|[string]|false|none|none|
|geom|[XYGeom](#schemaxygeom)|true|none|none|
|hoverDimension|string|false|none|none|
|legendColorizeRows|boolean|false|none|none|
|legendHide|boolean|false|none|none|
|legendOpacity|number(float)|false|none|none|
|legendOrientationThreshold|integer|false|none|none|
|note|string|true|none|none|
|position|string|true|none|none|
|queries|[[DashboardQuery](#schemadashboardquery)]|true|none|none|
|shadeBelow|boolean|false|none|none|
|shape|string|true|none|none|
|showNoteWhenEmpty|boolean|true|none|If true, will display note when empty|
|staticLegend|[StaticLegend](#schemastaticlegend)|false|none|StaticLegend represents the options specific to the static legend|
|timeFormat|string|false|none|none|
|type|string|true|none|none|
|xColumn|string|false|none|none|
|xTickStart|number(float)|false|none|none|
|xTickStep|number(float)|false|none|none|
|xTotalTicks|integer|false|none|none|
|yColumn|string|false|none|none|
|yTickStart|number(float)|false|none|none|
|yTickStep|number(float)|false|none|none|
|yTotalTicks|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|geom|line|
|geom|step|
|geom|stacked|
|geom|bar|
|geom|monotoneX|
|hoverDimension|auto|
|hoverDimension|x|
|hoverDimension|y|
|hoverDimension|xy|
|position|overlaid|
|position|stacked|
|shape|chronograf-v2|
|type|xy|
