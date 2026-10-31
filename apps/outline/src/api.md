<h1 id="outline-api">Outline API v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction

The Outline API is structured in an RPC style. It enables you to
programatically interact with all aspects of Outline’s data – in fact, the
main application is built on exactly the same API.

The API structure is available as an
[openapi specification](https://github.com/outline/openapi) if that’s your
jam – it can be used to generate clients for most programming languages.

# Making requests

Outline’s API follows simple RPC style conventions where each API endpoint is
a `POST` method on `https://app.getoutline.com/api/:method`. Only HTTPS is
supported and all response payloads are JSON.

When making `POST` requests, request parameters are parsed depending on
Content-Type header. To make a call using JSON payload, you must pass
Content-Type: application/json header, here’s an example using CURL:

```
curl https://app.getoutline.com/api/documents.info \
-X 'POST' \
-H 'authorization: Bearer MY_API_KEY' \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-d '{"id": "outline-api-NTpezNwhUP"}'
```

Or, with JavaScript:

```javascript
const response = await fetch("https://app.getoutline.com/api/documents.info", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer MY_API_KEY"
  }
})

const body = await response.json();
const document = body.data;
```

# Authentication

## API key

You can create new API keys under **Settings => API & Apps**. Be
careful when handling your keys as they allow full access to your data,
you should treat them like passwords and they should never be committed to
source control.

### Usage

To authenticate with API, you should supply the API key as a "Bearer" token in the `Authorization` header
(`Authorization: Bearer YOUR_API_KEY`).

API keys can be revoked at any time by the creating user or an administrator of the workspace. If an API
key is revoked, any requests made with that key will return a `401 Unauthenticated` response.

### Format

All API keys always begin with `ol_api_` followed by a random string of 38 letters and numbers.

## OAuth 2.0

OAuth 2.0 is a widely used protocol for authorization and authentication. It allows users
to grant third-party _or_ internal applications access to their resources without sharing
their credentials. To use OAuth 2.0 you need to follow these steps:

1. Register your application under **Settings => Applications**
2. Obtain an access token by exchanging the client credentials for an access token
3. Use the access token to authenticate requests to the API

Some API endpoints allow unauthenticated requests for public resources and
they can be called without authentication.

# Scopes

Scopes are used to limit the access of an API key or application to specific resources. For example,
an application may only need access to read documents, but not write them. Scopes can be global in
the case of `read` and `write` scopes, scoped to a namespace, scoped to an API endpoint, or use
wildcard scopes like `documents.*`. Some examples of scopes that can be used are:

## Global

- `read`: Allows all read actions
- `write`: Allows all read and write actions

## Namespaced

- `documents:read`: Allows all document read actions
- `collections:write`: Allows all collection write actions

## Endpoints

- `documents.info`: Allows only one specific API method
- `documents.*`: Allows all document API methods
- `users.*`: Allows all user API methods

# Errors

All successful API requests will be returned with a 200 or 201 status code
and `ok: true` in the response payload. If there’s an error while making the
request, the appropriate status code is returned with the error message:

```
{
  "ok": false,
  "error": "Not Found"
}
```

# Pagination

Most top-level API resources have support for "list" API methods. For instance,
you can list users, documents, and collections. These list methods share
common parameters, taking both `limit` and `offset`.

Responses will echo these parameters in the root `pagination` key, and also
include a `nextPath` key which can be used as a handy shortcut to fetch the
next page of results. For example:

```
{
  ok: true,
  status: 200,
  data: […],
  pagination: {
    limit: 25,
    offset: 0,
    nextPath: "/api/documents.list?limit=25&offset=25"
  }
}
```

# Rate limits

Like most APIs, Outline has rate limits in place to prevent abuse. Endpoints
that mutate data are more restrictive than read-only endpoints. If you exceed
the rate limit for a given endpoint, you will receive a `429 Too Many Requests`
status code.

The response will include a `Retry-After` header that indicates how many seconds
you should wait before making another request.

# Policies

Most API resources have associated "policies", these objects describe the
current authentications authorized actions related to an individual resource. It
should be noted that the policy "id" is identical to the resource it is
related to, policies themselves do not have unique identifiers.

For most usecases of the API, policies can be safely ignored. Calling
unauthorized methods will result in the appropriate response code – these can
be used in an interface to adjust which elements are visible.

Base URLs:

* <a href="https://app.getoutline.com/api">https://app.getoutline.com/api</a> - Cloud hosted

* <a href="https://example.com/api">https://example.com/api</a> - Self-hosted on your own server

Email: <a href="mailto:hello@getoutline.com">hello@getoutline.com</a> 
License: <a href="https://github.com/outline/openapi/blob/main/LICENSE">BSD-3-Clause</a>

# Authentication

- HTTP Authentication, scheme: bearer

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.getoutline.com/oauth/authorize](https://app.getoutline.com/oauth/authorize)
    - Token URL = [https://app.getoutline.com/oauth/token](https://app.getoutline.com/oauth/token)
    - Refresh URL = [https://app.getoutline.com/oauth/token](https://app.getoutline.com/oauth/token)

|Scope|Scope Description|
|---|---|
|read|Read access|
|write|Write access|

<h1 id="outline-api-accessrequests">AccessRequests</h1>

`AccessRequests` represent a request by a user for access to a document
they do not currently have permission to view. The request can be approved
or dismissed by a user with permission to share the document.


## Create an access request

<a id="opIdaccessRequestsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/accessRequests.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /accessRequests.create`

Request access to a document. The request will be sent to users with permission to share the document for approval or dismissal.

> Body parameter

```json
{
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-an-access-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» documentId|body|string(uuid)|true|Identifier for the document to request access to.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "pending",
    "responderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "responder": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "respondedAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-an-access-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-an-access-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccessRequest](#schemaaccessrequest)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve an access request

<a id="opIdaccessRequestsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/accessRequests.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /accessRequests.info`

Retrieve information about an access request by `id`, or the current user's pending request for a document by `documentId`. At least one of these parameters must be provided.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-an-access-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|false|Unique identifier for the access request.|
|» documentId|body|string(uuid)|false|Identifier for the document to find a pending request for the current user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "pending",
    "responderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "responder": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "respondedAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-an-access-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-an-access-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccessRequest](#schemaaccessrequest)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Approve an access request

<a id="opIdaccessRequestsApprove"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/accessRequests.approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read"
  }'
```

`POST /accessRequests.approve`

Approve a pending access request, granting the requesting user a membership on the document with the specified permission.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read"
}
```

<h3 id="approve-an-access-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the access request.|
|» permission|body|string|false|The permission to grant the requesting user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|
|» permission|admin|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "pending",
    "responderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "responder": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "respondedAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="approve-an-access-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="approve-an-access-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccessRequest](#schemaaccessrequest)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Dismiss an access request

<a id="opIdaccessRequestsDismiss"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/accessRequests.dismiss \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /accessRequests.dismiss`

Dismiss a pending access request without granting the requesting user access to the document.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="dismiss-an-access-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the access request.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "pending",
    "responderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "responder": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "respondedAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="dismiss-an-access-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="dismiss-an-access-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccessRequest](#schemaaccessrequest)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-apikeys">ApiKeys</h1>

`ApiKeys` are personal access tokens that authenticate requests to the
API on behalf of a user. Keys inherit the permissions of the user that
created them and should be treated like passwords.


## Create an API key

<a id="opIdapiKeysCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/apiKeys.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "expiresAt": "1970-01-01T00:00:00Z",
    "scope": [
      "string"
    ]
  }'
```

`POST /apiKeys.create`

Create a new personal API key for the authenticated user. The full key `value` is only returned in this response and cannot be retrieved again, so it should be stored securely.

> Body parameter

```json
{
  "name": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "scope": [
    "string"
  ]
}
```

<h3 id="create-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|A name to identify the API key.|
|» expiresAt|body|string(date-time)|false|An optional date and time when the key should expire.|
|» scope|body|[string]|false|An optional list of scopes to restrict which endpoints the key can access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "scope": [
      "string"
    ],
    "last4": "string",
    "value": "string",
    "expiresAt": "1970-01-01T00:00:00Z",
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-an-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ApiKey](#schemaapikey)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List API keys

<a id="opIdapiKeysList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/apiKeys.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "query": "string"
  }'
```

`POST /apiKeys.list`

List API keys for the authenticated user, or for all users in the workspace when called by an administrator. The secret key `value` is never included in this response.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "query": "string"
}
```

<h3 id="list-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» userId|body|string(uuid)|false|Filter to keys belonging to this user (admin only).|
|» query|body|string|false|Filter to keys whose name matches this search term.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "scope": [
        "string"
      ],
      "last4": "string",
      "value": "string",
      "expiresAt": "1970-01-01T00:00:00Z",
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ApiKey](#schemaapikey)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete an API key

<a id="opIdapiKeysDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/apiKeys.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /apiKeys.delete`

Permanently revoke an API key. Any requests made with the key afterwards will be rejected.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the API key.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-an-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-attachments">Attachments</h1>

`Attachments` represent a file uploaded to cloud storage. They are created
before the upload happens from the client and store all the meta information
such as file type, size, and location.


## Create an attachment

<a id="opIdattachmentsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/attachments.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "image.png",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contentType": "image/png",
    "size": 0
  }'
```

`POST /attachments.create`

Creating an attachment object creates a database record and returns the inputs needed to generate a signed url and upload the file from the client to cloud storage.

> Body parameter

```json
{
  "name": "image.png",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contentType": "image/png",
  "size": 0
}
```

<h3 id="create-an-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|Name of the file attachment.|
|» documentId|body|string(uuid)|false|Identifier for the associated document, if any.|
|» contentType|body|string|true|MIME type of the file attachment.|
|» size|body|integer|true|Size of the file attachment in bytes.|

> Example responses

> 200 Response

```json
{
  "data": {
    "maxUploadSize": 0,
    "mode": "post",
    "uploadUrl": "http://example.com",
    "form": {},
    "url": "http://example.com",
    "headers": {},
    "attachment": {
      "contentType": "image/png",
      "size": "string",
      "name": "string",
      "url": "http://example.com",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-an-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-an-attachment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» maxUploadSize|number|false|none|none|
|» mode|string|false|none|Indicates which presigned upload method the server is configured to use. When `post`, the client should perform a multipart form POST using `uploadUrl` and `form`. When `put`, the client should perform a PUT request to `url` with the supplied `headers`.|
|» uploadUrl|string(uri)|false|none|Present when `mode` is `post`. The endpoint to POST a multipart form upload to.|
|» form|object|false|none|Present when `mode` is `post`. The form fields to include in the multipart upload, including signed credentials.|
|» url|string(uri)|false|none|Present when `mode` is `put`. The presigned URL to PUT the file contents to.|
|» headers|object|false|none|Present when `mode` is `put`. The HTTP headers that must be sent with the PUT request.|
|» attachment|[Attachment](#schemaattachment)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» mode|post|
|» mode|put|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve an attachment

<a id="opIdattachmentsRedirect"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/attachments.redirect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /attachments.redirect`

Load an attachment from where it is stored based on the id. If the attachment is private then a temporary, signed url with embedded credentials is generated on demand.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-an-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the attachment.|

> Example responses

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-an-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirect to the attachment URL|None|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-an-attachment-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete an attachment

<a id="opIdattachmentsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/attachments.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /attachments.delete`

Deleting an attachment is permanent. It will not delete references or links to the attachment that may exist in your documents.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-an-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the attachment.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-an-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-an-attachment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all attachments

<a id="opIdattachmentsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/attachments.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /attachments.list`

List all attachments in the workspace, optionally filtered by the document or user they are associated with.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-attachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» documentId|body|string(uuid)|false|Filter to attachments associated with this document.|
|» userId|body|string(uuid)|false|Filter to attachments uploaded by this user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "contentType": "image/png",
      "size": "string",
      "name": "string",
      "url": "http://example.com",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-attachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-attachments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Attachment](#schemaattachment)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create an attachment from a URL

<a id="opIdattachmentsCreateFromUrl"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/attachments.createFromUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /attachments.createFromUrl`

Fetch a file from a remote URL and store it as an attachment. Unlike `attachments.create`, the server downloads and uploads the file, so the returned attachment is immediately available.

> Body parameter

```json
{
  "url": "http://example.com",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-an-attachment-from-a-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string(uri)|true|The remote URL to fetch the file from.|
|» documentId|body|string(uuid)|false|Identifier for the associated document, if any.|
|» id|body|string(uuid)|false|An optional client-generated identifier for the attachment.|

> Example responses

> 200 Response

```json
{
  "data": {
    "contentType": "image/png",
    "size": "string",
    "name": "string",
    "url": "http://example.com",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-an-attachment-from-a-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-an-attachment-from-a-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Attachment](#schemaattachment)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-auth">Auth</h1>

`Auth` represents the current API Keys authentication details. It can be
used to check that a token is still valid and load the IDs for the current
user and workspace.


## Retrieve auth

<a id="opIdauthInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/auth.info \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /auth.info`

Retrieve authentication details for the current API key

> Example responses

> 200 Response

```json
{
  "data": {
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "team": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "description": "string",
      "avatarUrl": "http://example.com",
      "sharing": true,
      "defaultCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "defaultUserRole": "admin",
      "memberCollectionCreate": true,
      "memberTeamCreate": true,
      "documentEmbeds": true,
      "inviteRequired": true,
      "allowedDomains": [
        "string"
      ],
      "guestSignin": true,
      "subdomain": "string",
      "domain": "string",
      "url": "http://example.com",
      "passkeysEnabled": true,
      "preferences": {},
      "guidanceMCP": "string",
      "plan": {},
      "entitlements": [
        "auditLog"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-auth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Auth](#schemaauth)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve auth config

<a id="opIdauthConfig"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/auth.config \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth.config`

Retrieve authentication options

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "Acme Inc",
    "hostname": "acme-inc.getoutline.com",
    "services": [
      {
        "id": "slack",
        "name": "Slack",
        "authUrl": "https://acme-inc.getoutline.com/auth/slack"
      }
    ]
  }
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-auth-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-auth-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» name|string|false|none|none|
|» hostname|string|false|none|none|
|» services|[object]|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|» » authUrl|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="success">
This operation does not require authentication
</aside>

## Sign out

<a id="opIdauthDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/auth.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /auth.delete`

Sign out the authenticated user. This rotates the user's token secret, immediately invalidating all existing API tokens and sessions for that user.

> Body parameter

```json
{}
```

<h3 id="sign-out-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="sign-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="sign-out-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-collections">Collections</h1>

`Collections` represent grouping of documents in the knowledge base, they
offer a way to structure information in a nested hierarchy and a level
at which read and write permissions can be granted to individual users or
groups of users.


## Retrieve a collection

<a id="opIdcollectionsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /collections.info`

Retrieve the details of a collection by its unique identifier.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the collection.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "hDYep1TPAM",
    "name": "Human Resources",
    "description": "",
    "data": {},
    "sort": {
      "field": "string",
      "direction": "asc"
    },
    "index": "P",
    "color": "#123123",
    "icon": "string",
    "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read",
    "templateManagement": "read",
    "sharing": false,
    "commenting": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z",
    "archivedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "sourceMetadata": {
      "externalId": "string",
      "externalName": "string",
      "createdByName": "string"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collection](#schemacollection)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve a collections document structure

<a id="opIdcollectionsDocuments"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /collections.documents`

Returns the document structure of a collection as a tree of navigation nodes, representing the hierarchy of documents within the collection.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-collections-document-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the collection.|

> Example responses

> 200 Response

```json
{
  "data": []
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-collections-document-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-collections-document-structure-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[NavigationNode](#schemanavigationnode)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all collections

<a id="opIdcollectionsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "filters": [
      {
        "field": "name",
        "operator": "eq",
        "value": null
      }
    ],
    "query": "string",
    "statusFilter": [
      "archived"
    ]
  }'
```

`POST /collections.list`

List all collections that the authenticated user has access to.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "filters": [
    {
      "field": "name",
      "operator": "eq",
      "value": null
    }
  ],
  "query": "string",
  "statusFilter": [
    "archived"
  ]
}
```

<h3 id="list-all-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» filters|body|[[CollectionFilter](#schemacollectionfilter)]|false|Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `query` or `statusFilter` parameters.|
|» query|body|string|false|**Deprecated.** If set, will filter the results by collection name. Deprecated – prefer the `filters` parameter.|
|» statusFilter|body|[[CollectionStatus](#schemacollectionstatus)]|false|**Deprecated.** An optional array of statuses to filter by. Deprecated – prefer the `filters` parameter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|
|» statusFilter|archived|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "url": "string",
      "urlId": "hDYep1TPAM",
      "name": "Human Resources",
      "description": "",
      "data": {},
      "sort": {
        "field": "string",
        "direction": "asc"
      },
      "index": "P",
      "color": "#123123",
      "icon": "string",
      "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "permission": "read",
      "templateManagement": "read",
      "sharing": false,
      "commenting": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "archivedAt": "1970-01-01T00:00:00Z",
      "archivedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "sourceMetadata": {
        "externalId": "string",
        "externalName": "string",
        "createdByName": "string"
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Collection](#schemacollection)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a collection

<a id="opIdcollectionsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Human Resources",
    "description": "HR documentation is confidential and should be handled with care.",
    "data": {},
    "permission": "read",
    "icon": "string",
    "color": "#123123",
    "sharing": false
  }'
```

`POST /collections.create`

Create a new collection with the specified name, description, icon, color, and permission settings. Collections are used to organize documents.

> Body parameter

```json
{
  "name": "Human Resources",
  "description": "HR documentation is confidential and should be handled with care.",
  "data": {},
  "permission": "read",
  "icon": "string",
  "color": "#123123",
  "sharing": false
}
```

<h3 id="create-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|none|
|» description|body|string|false|A brief description of the collection, markdown supported. Only one of `description` or `data` may be provided.|
|» data|body|object|false|The collection description as a rich-text ProseMirror JSON document. Only one of `description` or `data` may be provided.|
|» permission|body|[Permission](#schemapermission)|false|none|
|» icon|body|string|false|A string that represents an icon in the outline-icons package or an emoji|
|» color|body|string|false|A hex color code for the collection icon|
|» sharing|body|boolean|false|Whether public sharing of documents is allowed|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "hDYep1TPAM",
    "name": "Human Resources",
    "description": "",
    "data": {},
    "sort": {
      "field": "string",
      "direction": "asc"
    },
    "index": "P",
    "color": "#123123",
    "icon": "string",
    "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read",
    "templateManagement": "read",
    "sharing": false,
    "commenting": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z",
    "archivedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "sourceMetadata": {
      "externalId": "string",
      "externalName": "string",
      "createdByName": "string"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collection](#schemacollection)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Duplicate a collection

<a id="opIdcollectionsDuplicate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.duplicate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string"
  }'
```

`POST /collections.duplicate`

Duplicate an existing collection along with its published documents. The
original collection's settings – icon, color, permission, sharing, and
sorting – are preserved on the copy. Draft and archived documents are
not duplicated. Document duplication runs asynchronously in the
background, so the copy may initially be returned before all of its
documents have been created.


> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

<h3 id="duplicate-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the collection to duplicate.|
|» name|body|string|false|An optional name for the new collection. If omitted, the original collection's name is reused.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "hDYep1TPAM",
    "name": "Human Resources",
    "description": "",
    "data": {},
    "sort": {
      "field": "string",
      "direction": "asc"
    },
    "index": "P",
    "color": "#123123",
    "icon": "string",
    "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read",
    "templateManagement": "read",
    "sharing": false,
    "commenting": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z",
    "archivedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "sourceMetadata": {
      "externalId": "string",
      "externalName": "string",
      "createdByName": "string"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="duplicate-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="duplicate-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collection](#schemacollection)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a collection

<a id="opIdcollectionsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Human Resources",
    "description": "HR documentation is confidential and should be handled with care.",
    "data": {},
    "permission": "read",
    "icon": "string",
    "color": "#123123",
    "sharing": false,
    "deprecatedReason": "string"
  }'
```

`POST /collections.update`

Update an existing collection's properties such as name, description, icon, color, sharing settings, or permission level.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Human Resources",
  "description": "HR documentation is confidential and should be handled with care.",
  "data": {},
  "permission": "read",
  "icon": "string",
  "color": "#123123",
  "sharing": false,
  "deprecatedReason": "string"
}
```

<h3 id="update-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» name|body|string|false|none|
|» description|body|string|false|A brief description of the collection, markdown supported. Only one of `description` or `data` may be provided.|
|» data|body|object|false|The collection description as a rich-text ProseMirror JSON document. Only one of `description` or `data` may be provided.|
|» permission|body|[Permission](#schemapermission)|false|none|
|» icon|body|string|false|A string that represents an icon in the outline-icons package or an emoji|
|» color|body|string|false|A hex color code for the collection icon|
|» sharing|body|boolean|false|Whether public sharing of documents is allowed|
|» deprecatedReason|body|string \| null|false|The reason the collection was archived. Can only be updated on an archived collection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "hDYep1TPAM",
    "name": "Human Resources",
    "description": "",
    "data": {},
    "sort": {
      "field": "string",
      "direction": "asc"
    },
    "index": "P",
    "color": "#123123",
    "icon": "string",
    "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read",
    "templateManagement": "read",
    "sharing": false,
    "commenting": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z",
    "archivedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "sourceMetadata": {
      "externalId": "string",
      "externalName": "string",
      "createdByName": "string"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collection](#schemacollection)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Add a collection user

<a id="opIdcollectionsAddUser"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.add_user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read"
  }'
```

`POST /collections.add_user`

This method allows you to add a user membership to the specified collection.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read"
}
```

<h3 id="add-a-collection-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Identifier for the collection|
|» userId|body|string(uuid)|true|Identifier for the user to add to the collection|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "memberships": [
      {
        "id": "string",
        "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "index": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="add-a-collection-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="add-a-collection-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|
|» memberships|[[Membership](#schemamembership)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Remove a collection user

<a id="opIdcollectionsRemoveUser"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.remove_user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /collections.remove_user`

This method allows you to remove a user from the specified collection.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="remove-a-collection-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Identifier for the collection|
|» userId|body|string(uuid)|true|Identifier for the user to remove from the collection|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="remove-a-collection-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="remove-a-collection-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all collection memberships

<a id="opIdcollectionsMemberships"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "query": "jenny",
    "permission": "read"
  }'
```

`POST /collections.memberships`

This method allows you to list a collections individual memberships. It's important to note that memberships returned from this endpoint do not include group memberships.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "query": "jenny",
  "permission": "read"
}
```

<h3 id="list-all-collection-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» id|body|string(uuid)|true|Identifier for the collection|
|» query|body|string|false|Filter memberships by user names|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "memberships": [
      {
        "id": "string",
        "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "index": "string"
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-collection-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-collection-memberships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|
|» memberships|[[Membership](#schemamembership)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Add a group to a collection

<a id="opIdcollectionsAddGroup"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.add_group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read"
  }'
```

`POST /collections.add_group`

This method allows you to give all members in a group access to a collection.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read"
}
```

<h3 id="add-a-group-to-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» groupId|body|string(uuid)|true|none|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "collectionGroupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="add-a-group-to-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="add-a-group-to-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» collectionGroupMemberships|[[CollectionGroupMembership](#schemacollectiongroupmembership)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Remove a collection group

<a id="opIdcollectionsRemoveGroup"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.remove_group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /collections.remove_group`

This method allows you to revoke all members in a group access to a collection. Note that members of the group may still retain access through other groups or individual memberships.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="remove-a-collection-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Identifier for the collection|
|» groupId|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="remove-a-collection-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="remove-a-collection-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all collection group members

<a id="opIdcollectionsGroupMemberships"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.group_memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "query": "developers",
    "permission": "read"
  }'
```

`POST /collections.group_memberships`

This method allows you to list a collections group memberships. This is the list of groups that have been given access to the collection.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "query": "developers",
  "permission": "read"
}
```

<h3 id="list-all-collection-group-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» id|body|string(uuid)|true|Identifier for the collection|
|» query|body|string|false|Filter memberships by group names|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "groups": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Engineering",
        "description": "string",
        "icon": "string",
        "color": "string",
        "externalId": "string",
        "disableMentions": true,
        "externalGroup": {},
        "memberCount": 11,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "collectionGroupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-collection-group-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-collection-group-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» groups|[[Group](#schemagroup)]|false|none|none|
|» collectionGroupMemberships|[[CollectionGroupMembership](#schemacollectiongroupmembership)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a collection

<a id="opIdcollectionsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reason": "string"
  }'
```

`POST /collections.delete`

Delete a collection and all of its documents. This action can’t be undone so please be careful.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reason": "string"
}
```

<h3 id="delete-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» reason|body|string \| null|false|An optional reason for deleting the collection. This is stored and returned as `deprecatedReason`.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Export a collection

<a id="opIdcollectionsExport"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "format": "outline-markdown",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /collections.export`

Triggers a bulk export of the collection in markdown format and their attachments. If documents are nested then they will be nested in folders inside the zip file. The endpoint returns a `FileOperation` that can be queried to track the progress of the export and get the url for the final file.

> Body parameter

```json
{
  "format": "outline-markdown",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="export-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» format|body|string|false|none|
|» id|body|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|outline-markdown|
|» format|json|
|» format|html|
|» format|okf|

> Example responses

> 200 Response

```json
{
  "data": {
    "fileOperation": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "export",
      "format": "outline-markdown",
      "name": "string",
      "state": "complete",
      "error": "string",
      "size": "2048",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="export-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="export-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» fileOperation|[FileOperation](#schemafileoperation)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Export all collections

<a id="opIdcollectionsExportAll"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.export_all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "format": "outline-markdown",
    "includeAttachments": true,
    "includePrivate": true
  }'
```

`POST /collections.export_all`

Triggers a bulk export of multiple collections and their documents. The endpoint returns a `FileOperation` that can be queried through the fileOperations endpoint to track the progress of the export and get the url for the final file.

> Body parameter

```json
{
  "format": "outline-markdown",
  "includeAttachments": true,
  "includePrivate": true
}
```

<h3 id="export-all-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» format|body|string|false|none|
|» includeAttachments|body|boolean|false|Whether to include attachments in the export.|
|» includePrivate|body|boolean|false|Whether to include private collections in the export.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|outline-markdown|
|» format|json|
|» format|html|
|» format|okf|

> Example responses

> 200 Response

```json
{
  "data": {
    "fileOperation": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "export",
      "format": "outline-markdown",
      "name": "string",
      "state": "complete",
      "error": "string",
      "size": "2048",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="export-all-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="export-all-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» fileOperation|[FileOperation](#schemafileoperation)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Archive a collection

<a id="opIdcollectionsArchive"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reason": "string"
  }'
```

`POST /collections.archive`

Archiving a collection hides it, and all of the documents within it, from the sidebar and search results. Archived collections can be restored at a later date.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reason": "string"
}
```

<h3 id="archive-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the collection.|
|» reason|body|string \| null|false|An optional reason for archiving the collection. This is stored and returned as `deprecatedReason`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "hDYep1TPAM",
    "name": "Human Resources",
    "description": "",
    "data": {},
    "sort": {
      "field": "string",
      "direction": "asc"
    },
    "index": "P",
    "color": "#123123",
    "icon": "string",
    "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read",
    "templateManagement": "read",
    "sharing": false,
    "commenting": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z",
    "archivedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "sourceMetadata": {
      "externalId": "string",
      "externalName": "string",
      "createdByName": "string"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="archive-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="archive-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collection](#schemacollection)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Restore an archived collection

<a id="opIdcollectionsRestore"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /collections.restore`

Restore a previously archived collection, making it and the documents within it visible in the sidebar and search results once again.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="restore-an-archived-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the collection.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "hDYep1TPAM",
    "name": "Human Resources",
    "description": "",
    "data": {},
    "sort": {
      "field": "string",
      "direction": "asc"
    },
    "index": "P",
    "color": "#123123",
    "icon": "string",
    "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read",
    "templateManagement": "read",
    "sharing": false,
    "commenting": true,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z",
    "archivedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "sourceMetadata": {
      "externalId": "string",
      "externalName": "string",
      "createdByName": "string"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="restore-an-archived-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="restore-an-archived-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collection](#schemacollection)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Move a collection

<a id="opIdcollectionsMove"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string"
  }'
```

`POST /collections.move`

Move a collection to a new position in the sidebar. Collections are ordered using a fractional index; provide the new index to reposition the collection relative to its siblings.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string"
}
```

<h3 id="move-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the collection.|
|» index|body|string|true|The fractional index to move the collection to, used for ordering in the sidebar.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "index": "string"
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="move-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="move-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|data|object|false|none|none|
|» index|string|false|none|The fractional index the collection was moved to.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Import documents into a new collection

<a id="opIdcollectionsImport"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/collections.import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "format": "outline-markdown",
    "permission": "read"
  }'
```

`POST /collections.import`

Import a file that was previously uploaded through `attachments.create` and create a new collection from its contents. The endpoint returns a `FileOperation` that can be queried to track the progress of the import.

> Body parameter

```json
{
  "attachmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "format": "outline-markdown",
  "permission": "read"
}
```

<h3 id="import-documents-into-a-new-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» attachmentId|body|string(uuid)|true|Identifier for the attachment that contains the file to import.|
|» format|body|string|false|The format of the file being imported.|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|outline-markdown|
|» format|json|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "fileOperation": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "export",
      "format": "outline-markdown",
      "name": "string",
      "state": "complete",
      "error": "string",
      "size": "2048",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="import-documents-into-a-new-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="import-documents-into-a-new-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» fileOperation|[FileOperation](#schemafileoperation)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-comments">Comments</h1>

`Comments` represent a comment either on a selection of text in a document
or on the document itself.


## Create a comment

<a id="opIdcommentsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "data": {},
    "text": "Sounds great",
    "anchorText": "string",
    "anchorPrefix": "string",
    "anchorSuffix": "string"
  }'
```

`POST /comments.create`

Add a comment or reply to a document, either `data` or `text` is required. Provide `anchorText` to create an inline comment attached to a specific text range in the document.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "data": {},
  "text": "Sounds great",
  "anchorText": "string",
  "anchorPrefix": "string",
  "anchorSuffix": "string"
}
```

<h3 id="create-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|false|none|
|» documentId|body|string(uuid)|true|none|
|» parentCommentId|body|string(uuid)|false|none|
|» data|body|object|false|The body of the comment.|
|» text|body|string|false|The body of the comment in markdown.|
|» anchorText|body|string|false|Plain text substring to anchor the comment to as an inline comment. The first occurrence in the document's plain text is used unless disambiguated by `anchorPrefix` and/or `anchorSuffix`.|
|» anchorPrefix|body|string|false|Text immediately preceding `anchorText`, used to disambiguate between multiple occurrences. Requires `anchorText`.|
|» anchorSuffix|body|string|false|Text immediately following `anchorText`, used to disambiguate between multiple occurrences. Requires `anchorText`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "data": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedAt": "1970-01-01T00:00:00Z",
    "resolvedAt": "1970-01-01T00:00:00Z",
    "resolvedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "resolvedById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reactions": [
      {}
    ],
    "anchorText": "string"
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comment](#schemacomment)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve a comment

<a id="opIdcommentsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "includeAnchorText": true
  }'
```

`POST /comments.info`

Retrieve a comment

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "includeAnchorText": true
}
```

<h3 id="retrieve-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» includeAnchorText|body|boolean|false|Include the document text that the comment is anchored to, if any, in the response.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "data": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedAt": "1970-01-01T00:00:00Z",
    "resolvedAt": "1970-01-01T00:00:00Z",
    "resolvedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "resolvedById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reactions": [
      {}
    ],
    "anchorText": "string"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comment](#schemacomment)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a comment

<a id="opIdcommentsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "data": {},
    "text": "Sounds great"
  }'
```

`POST /comments.update`

Update a comment, either `data` or `text` is required.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "data": {},
  "text": "Sounds great"
}
```

<h3 id="update-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» data|body|object|false|The body of the comment.|
|» text|body|string|false|The body of the comment in markdown.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "data": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedAt": "1970-01-01T00:00:00Z",
    "resolvedAt": "1970-01-01T00:00:00Z",
    "resolvedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "resolvedById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reactions": [
      {}
    ],
    "anchorText": "string"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comment](#schemacomment)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a comment

<a id="opIdcommentsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /comments.delete`

Deletes a comment. If the comment is a top-level comment, all its children will be deleted as well.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all comments

<a id="opIdcommentsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "includeAnchorText": true
  }'
```

`POST /comments.list`

This method will list all comments matching the given properties.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "includeAnchorText": true
}
```

<h3 id="list-all-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» documentId|body|string(uuid)|false|Filter to a specific document|
|» collectionId|body|string(uuid)|false|Filter to a specific collection|
|» includeAnchorText|body|boolean|false|Include the document text that the comment is anchored to, if any, in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "data": {},
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updatedAt": "1970-01-01T00:00:00Z",
      "resolvedAt": "1970-01-01T00:00:00Z",
      "resolvedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "resolvedById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reactions": [
        {}
      ],
      "anchorText": "string"
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Comment](#schemacomment)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Resolve a comment

<a id="opIdcommentsResolve"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.resolve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /comments.resolve`

Mark a comment thread as resolved. Resolved comments are hidden from the document by default and indicate that the discussion has been dealt with.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="resolve-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the comment.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "data": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedAt": "1970-01-01T00:00:00Z",
    "resolvedAt": "1970-01-01T00:00:00Z",
    "resolvedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "resolvedById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reactions": [
      {}
    ],
    "anchorText": "string"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="resolve-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="resolve-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comment](#schemacomment)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Unresolve a comment

<a id="opIdcommentsUnresolve"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.unresolve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /comments.unresolve`

Mark a previously resolved comment thread as unresolved, making it visible on the document again.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="unresolve-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the comment.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "data": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedAt": "1970-01-01T00:00:00Z",
    "resolvedAt": "1970-01-01T00:00:00Z",
    "resolvedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "resolvedById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reactions": [
      {}
    ],
    "anchorText": "string"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="unresolve-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="unresolve-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comment](#schemacomment)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Add a reaction to a comment

<a id="opIdcommentsAddReaction"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.add_reaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "emoji": "string"
  }'
```

`POST /comments.add_reaction`

Add an emoji reaction to a comment on behalf of the authenticated user.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "emoji": "string"
}
```

<h3 id="add-a-reaction-to-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the comment.|
|» emoji|body|string|true|A native emoji to react with, for example `😄`.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="add-a-reaction-to-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="add-a-reaction-to-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Remove a reaction from a comment

<a id="opIdcommentsRemoveReaction"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/comments.remove_reaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "emoji": "string"
  }'
```

`POST /comments.remove_reaction`

Remove an emoji reaction that the authenticated user previously added to a comment.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "emoji": "string"
}
```

<h3 id="remove-a-reaction-from-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the comment.|
|» emoji|body|string|true|The native emoji reaction to remove, for example `😄`.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="remove-a-reaction-from-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="remove-a-reaction-from-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-dataattributes">DataAttributes</h1>

`DataAttributes` represent custom metadata fields that can be attached to
documents. They allow workspaces to add structured data like status, priority,
or any other custom properties to their documents.


## Retrieve a data attribute

<a id="opIddataAttributesInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/dataAttributes.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /dataAttributes.info`

Retrieve a data attribute by its unique identifier.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-data-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the data attribute.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Status",
    "description": "The current status of the document.",
    "dataType": "string",
    "options": {
      "icon": "string",
      "options": [
        {
          "value": "string",
          "color": "string"
        }
      ]
    },
    "pinned": false,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-data-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-data-attribute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DataAttribute](#schemadataattribute)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all data attributes

<a id="opIddataAttributesList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/dataAttributes.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC"
  }'
```

`POST /dataAttributes.list`

List all data attributes.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC"
}
```

<h3 id="list-all-data-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Status",
      "description": "The current status of the document.",
      "dataType": "string",
      "options": {
        "icon": "string",
        "options": [
          {
            "value": "string",
            "color": "string"
          }
        ]
      },
      "pinned": false,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-data-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-data-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DataAttribute](#schemadataattribute)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a data attribute

<a id="opIddataAttributesCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/dataAttributes.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Status",
    "description": "The current status of the document.",
    "dataType": "string",
    "options": {
      "icon": "string",
      "options": [
        {
          "value": "string",
          "color": "string"
        }
      ]
    },
    "pinned": false
  }'
```

`POST /dataAttributes.create`

Create a new data attribute. Only admins can create data attributes.

> Body parameter

```json
{
  "name": "Status",
  "description": "The current status of the document.",
  "dataType": "string",
  "options": {
    "icon": "string",
    "options": [
      {
        "value": "string",
        "color": "string"
      }
    ]
  },
  "pinned": false
}
```

<h3 id="create-a-data-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|Name of the data attribute.|
|» description|body|string|false|Description of the data attribute.|
|» dataType|body|[DataAttributeDataType](#schemadataattributedatatype)|true|The data type of the attribute value.|
|» options|body|[DataAttributeOptions](#schemadataattributeoptions)|false|Additional options for certain data attribute types.|
|» pinned|body|boolean|false|Whether the data attribute is pinned to the top of document.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataType|string|
|» dataType|number|
|» dataType|boolean|
|» dataType|list|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Status",
    "description": "The current status of the document.",
    "dataType": "string",
    "options": {
      "icon": "string",
      "options": [
        {
          "value": "string",
          "color": "string"
        }
      ]
    },
    "pinned": false,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-data-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-data-attribute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DataAttribute](#schemadataattribute)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a data attribute

<a id="opIddataAttributesUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/dataAttributes.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Status",
    "description": "string",
    "options": {
      "icon": "string",
      "options": [
        {
          "value": "string",
          "color": "string"
        }
      ]
    },
    "pinned": true
  }'
```

`POST /dataAttributes.update`

Update an existing data attribute. Only admins can update data attributes. Note that the dataType cannot be changed after creation.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Status",
  "description": "string",
  "options": {
    "icon": "string",
    "options": [
      {
        "value": "string",
        "color": "string"
      }
    ]
  },
  "pinned": true
}
```

<h3 id="update-a-data-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the data attribute.|
|» name|body|string|true|Name of the data attribute.|
|» description|body|string|false|Description of the data attribute.|
|» options|body|[DataAttributeOptions](#schemadataattributeoptions)|false|Additional options for certain data attribute types.|
|» pinned|body|boolean|false|Whether the data attribute is pinned to the top of document.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Status",
    "description": "The current status of the document.",
    "dataType": "string",
    "options": {
      "icon": "string",
      "options": [
        {
          "value": "string",
          "color": "string"
        }
      ]
    },
    "pinned": false,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-data-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-data-attribute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DataAttribute](#schemadataattribute)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a data attribute

<a id="opIddataAttributesDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/dataAttributes.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /dataAttributes.delete`

Delete a data attribute. Only admins can delete data attributes.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-data-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the data attribute.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-data-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-data-attribute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-documents">Documents</h1>

`Documents` are what everything else revolves around. A document represents
a single page of information and always returns the latest version of the
content. Documents are stored in [Markdown](https://spec.commonmark.org/)
formatting.


## Retrieve a document

<a id="opIddocumentsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "shareId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /documents.info`

Retrieve a document by its `UUID`, `urlId`, or `shareId`. At least one of these parameters must be provided.

> Body parameter

```json
{
  "id": "string",
  "shareId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|false|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» shareId|body|string(uuid)|false|Unique identifier for a document share, a shareId may be used in place of a document UUID|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "fullWidth": true,
    "icon": "🎉",
    "color": "string",
    "text": "…",
    "data": {},
    "url": "string",
    "urlId": "hDYep1TPAM",
    "collaboratorIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tasks": {
      "completed": 0,
      "total": 0
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revision": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "archivedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "deletedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "preferences": {
      "headingPrefix": "none"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve insights for a document

<a id="opIddocumentsInsights"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.insights \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "startDate": "1970-01-01T00:00:00Z",
    "endDate": "1970-01-01T00:00:00Z"
  }'
```

`POST /documents.insights`

Retrieve a chronologically sorted array of activity rollups (views, comments, reactions, revisions, editors) for a document. Recent activity is returned as daily rollups, while older activity is aggregated into weekly rollups. Insights must be enabled on the document. Defaults to the last 30 days when no date range is provided.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startDate": "1970-01-01T00:00:00Z",
  "endDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="retrieve-insights-for-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the document.|
|» startDate|body|string(date-time)|false|Start of the insights window (inclusive). Defaults to 30 days ago.|
|» endDate|body|string(date-time)|false|End of the insights window (inclusive). Defaults to today.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "date": "1970-01-01",
      "period": "day",
      "viewCount": 0,
      "viewerCount": 0,
      "commentCount": 0,
      "reactionCount": 0,
      "revisionCount": 0,
      "editorCount": 0
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-insights-for-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-insights-for-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DocumentInsight](#schemadocumentinsight)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Import a file as a document

<a id="opIddocumentsImport"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.import \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file={}' \
  -F 'collectionId=string' \
  -F 'parentDocumentId=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -F 'publish=true'
```

`POST /documents.import`

This method allows you to create a new document by importing an existing file. By default a document is set to the collection root. If you want to create a nested/child document, you should pass parentDocumentId to set the parent document.

> Body parameter

```yaml
file: {}
collectionId: string
parentDocumentId: "497f6eca-6276-4993-bfeb-53cbbbba6f08"
publish: true
```

<h3 id="import-a-file-as-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|object|true|Plain text, markdown, docx, pdf, csv, tsv, html, mhtml (or mht) web pages, eml email messages, and textbundle/textpack bundles are supported.|
|» collectionId|body|string \| null|false|Identifier for the collection to import into. One of collectionId or parentDocumentId is required. Pass the literal string `personal` to import into the authenticated user's personal collection.|
|» parentDocumentId|body|string(uuid) \| null|false|Identifier for the parent document to import under. One of collectionId or parentDocumentId is required.|
|» publish|body|boolean|false|Whether to publish the imported document|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "fullWidth": true,
    "icon": "🎉",
    "color": "string",
    "text": "…",
    "data": {},
    "url": "string",
    "urlId": "hDYep1TPAM",
    "collaboratorIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tasks": {
      "completed": 0,
      "total": 0
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revision": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "archivedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "deletedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "preferences": {
      "headingPrefix": "none"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="import-a-file-as-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="import-a-file-as-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Export a document.

<a id="opIddocumentsExport"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "paperSize": "string",
    "signedUrls": 0,
    "includeChildDocuments": false
  }'
```

`POST /documents.export`

Export a document in Markdown, HTML, PDF, or TextBundle format. The response format is determined by the Accept header (`text/markdown`, `text/html`, `application/pdf`, or `application/x-textbundle`). Optionally include child documents in the export as a zip file.

> Body parameter

```json
{
  "id": "string",
  "paperSize": "string",
  "signedUrls": 0,
  "includeChildDocuments": false
}
```

<h3 id="export-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» paperSize|body|string|false|Paper size for PDF export (e.g., "A4", "Letter")|
|» signedUrls|body|number|false|How long signed URLs should remain valid for attachment links (in seconds)|
|» includeChildDocuments|body|boolean|false|Whether to include child documents in the export. Using this option will always return a zip file.|

> Example responses

> 200 Response

```json
{
  "data": "string"
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="export-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="export-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|The document content in Markdown formatting|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all documents

<a id="opIddocumentsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "filters": [
      {
        "field": "createdAt",
        "operator": "eq",
        "value": null
      }
    ],
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "backlinkDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "statusFilter": [
      "draft"
    ]
  }'
```

`POST /documents.list`

This method will list all published documents and draft documents belonging to the current user.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "filters": [
    {
      "field": "createdAt",
      "operator": "eq",
      "value": null
    }
  ],
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "backlinkDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "statusFilter": [
    "draft"
  ]
}
```

<h3 id="list-all-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» filters|body|[[DocumentFilter](#schemadocumentfilter)]|false|Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `collectionId`, `userId`, `parentDocumentId` or `statusFilter` parameters.|
|» collectionId|body|string(uuid)|false|**Deprecated.** Optionally filter to a specific collection. Deprecated – prefer the `filters` parameter.|
|» userId|body|string(uuid)|false|**Deprecated.** Optionally filter to documents created by a specific user. Deprecated – prefer the `filters` parameter.|
|» backlinkDocumentId|body|string(uuid)|false|none|
|» parentDocumentId|body|string(uuid)|false|**Deprecated.** Optionally filter to child documents of a specific parent. Deprecated – prefer the `filters` parameter.|
|» statusFilter|body|[string]|false|**Deprecated.** Document statuses to include in results. Deprecated – prefer the `filters` parameter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|
|» statusFilter|draft|
|» statusFilter|archived|
|» statusFilter|published|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "Welcome to Acme Inc",
      "fullWidth": true,
      "icon": "🎉",
      "color": "string",
      "text": "…",
      "data": {},
      "url": "string",
      "urlId": "hDYep1TPAM",
      "collaboratorIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tasks": {
        "completed": 0,
        "total": 0
      },
      "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revision": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "dataAttributes": [
        {
          "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": "In Progress",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "archivedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "deletedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "preferences": {
        "headingPrefix": "none"
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve a document's child structure

<a id="opIddocumentsDocuments"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string"
  }'
```

`POST /documents.documents`

This method returns the nested document structure (tree) for the children of the specified document.

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="retrieve-a-documents-child-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "string",
    "url": "string",
    "children": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-documents-child-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-documents-child-structure-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[NavigationNode](#schemanavigationnode)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all draft documents

<a id="opIddocumentsDrafts"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.drafts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateFilter": "month"
  }'
```

`POST /documents.drafts`

This method will list all draft documents belonging to the current user.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateFilter": "month"
}
```

<h3 id="list-all-draft-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» collectionId|body|string(uuid)|false|A collection to search within|
|» dateFilter|body|string|false|Any documents that have not been updated within the specified period will be filtered out|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|
|» dateFilter|day|
|» dateFilter|week|
|» dateFilter|month|
|» dateFilter|year|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "Welcome to Acme Inc",
      "fullWidth": true,
      "icon": "🎉",
      "color": "string",
      "text": "…",
      "data": {},
      "url": "string",
      "urlId": "hDYep1TPAM",
      "collaboratorIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tasks": {
        "completed": 0,
        "total": 0
      },
      "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revision": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "dataAttributes": [
        {
          "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": "In Progress",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "archivedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "deletedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "preferences": {
        "headingPrefix": "none"
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-draft-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-draft-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all recently viewed documents

<a id="opIddocumentsViewed"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.viewed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC"
  }'
```

`POST /documents.viewed`

This method will list all documents recently viewed by the current user.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC"
}
```

<h3 id="list-all-recently-viewed-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|The field to sort by. Note that sorting is by a column of the view record, not the document itself.|
|» direction|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sort|updatedAt|
|» sort|createdAt|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "Welcome to Acme Inc",
      "fullWidth": true,
      "icon": "🎉",
      "color": "string",
      "text": "…",
      "data": {},
      "url": "string",
      "urlId": "hDYep1TPAM",
      "collaboratorIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tasks": {
        "completed": 0,
        "total": 0
      },
      "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revision": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "dataAttributes": [
        {
          "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": "In Progress",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "archivedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "deletedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "preferences": {
        "headingPrefix": "none"
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-recently-viewed-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-recently-viewed-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Query documents with natural language

<a id="opIddocumentsAnswerQuestion"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.answerQuestion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "What is our holiday policy?",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "statusFilter": "draft",
    "dateFilter": "day"
  }'
```

`POST /documents.answerQuestion`

This method allows asking direct questions of your documents – where possible an answer will be provided. Search results will be restricted to those accessible by the current access token. Note that "AI answers" must be enabled for the workspace.

> Body parameter

```json
{
  "query": "What is our holiday policy?",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "statusFilter": "draft",
  "dateFilter": "day"
}
```

<h3 id="query-documents-with-natural-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» query|body|string|false|none|
|» userId|body|string(uuid)|false|Any documents that have not been edited by the user identifier will be filtered out|
|» collectionId|body|string(uuid)|false|A collection to search within|
|» documentId|body|string(uuid)|false|A document to search within|
|» statusFilter|body|string|false|Any documents that are not in the specified status will be filtered out|
|» dateFilter|body|string|false|Any documents that have not been updated within the specified period will be filtered out|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statusFilter|draft|
|» statusFilter|archived|
|» statusFilter|published|
|» dateFilter|day|
|» dateFilter|week|
|» dateFilter|month|
|» dateFilter|year|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "Welcome to Acme Inc",
      "fullWidth": true,
      "icon": "🎉",
      "color": "string",
      "text": "…",
      "data": {},
      "url": "string",
      "urlId": "hDYep1TPAM",
      "collaboratorIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tasks": {
        "completed": 0,
        "total": 0
      },
      "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revision": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "dataAttributes": [
        {
          "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": "In Progress",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "archivedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "deletedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "preferences": {
        "headingPrefix": "none"
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "search": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "query": "What is our hiring policy?",
    "answer": "Our hiring policy can be summarized as…",
    "source": "app",
    "createdAt": "1970-01-01T00:00:00Z"
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="query-documents-with-natural-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="query-documents-with-natural-language-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|search|[SearchResult](#schemasearchresult)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Search document titles

<a id="opIddocumentsSearchTitles"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.search_titles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "query": "string",
    "filters": [
      {
        "field": "createdAt",
        "operator": "eq",
        "value": null
      }
    ],
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "statusFilter": [
      "draft"
    ],
    "dateFilter": "day",
    "shareId": "string",
    "sort": "relevance",
    "direction": "ASC"
  }'
```

`POST /documents.search_titles`

This method allows you to search document titles with keywords. Unlike documents.search, this only searches titles and returns faster results.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "query": "string",
  "filters": [
    {
      "field": "createdAt",
      "operator": "eq",
      "value": null
    }
  ],
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "statusFilter": [
    "draft"
  ],
  "dateFilter": "day",
  "shareId": "string",
  "sort": "relevance",
  "direction": "ASC"
}
```

<h3 id="search-document-titles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» query|body|string|true|Search query to match against document titles|
|» filters|body|[[DocumentFilter](#schemadocumentfilter)]|false|Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `collectionId`, `userId`, `documentId`, `dateFilter` or `statusFilter` parameters.|
|» collectionId|body|string(uuid)|false|**Deprecated.** Filter to a specific collection. Deprecated – prefer the `filters` parameter.|
|» userId|body|string(uuid)|false|**Deprecated.** Filter results based on user. Deprecated – prefer the `filters` parameter.|
|» documentId|body|string(uuid)|false|**Deprecated.** Filter results based on content within a document and its children. Deprecated – prefer the `filters` parameter.|
|» statusFilter|body|[string]|false|**Deprecated.** Document statuses to include in results. Deprecated – prefer the `filters` parameter.|
|» dateFilter|body|string|false|**Deprecated.** Any documents that have not been updated within the specified period will be filtered out. Deprecated – prefer the `filters` parameter with a date field and an ISO 8601 duration value.|
|» shareId|body|string|false|Filter results for the collection or document referenced by the shareId|
|» sort|body|string|false|Specifies the attributes by which search results will be sorted|
|» direction|body|string|false|Specifies the sort order with respect to sort field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statusFilter|draft|
|» statusFilter|archived|
|» statusFilter|published|
|» dateFilter|day|
|» dateFilter|week|
|» dateFilter|month|
|» dateFilter|year|
|» sort|relevance|
|» sort|createdAt|
|» sort|updatedAt|
|» sort|title|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "Welcome to Acme Inc",
      "fullWidth": true,
      "icon": "🎉",
      "color": "string",
      "text": "…",
      "data": {},
      "url": "string",
      "urlId": "hDYep1TPAM",
      "collaboratorIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tasks": {
        "completed": 0,
        "total": 0
      },
      "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revision": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "dataAttributes": [
        {
          "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": "In Progress",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "archivedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "deletedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "preferences": {
        "headingPrefix": "none"
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="search-document-titles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="search-document-titles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Search all documents

<a id="opIddocumentsSearch"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "query": "hiring",
    "filters": [
      {
        "field": "createdAt",
        "operator": "eq",
        "value": null
      }
    ],
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "statusFilter": [
      "draft"
    ],
    "dateFilter": "month",
    "shareId": "string",
    "snippetMinWords": 20,
    "snippetMaxWords": 30,
    "sort": "relevance",
    "direction": "ASC"
  }'
```

`POST /documents.search`

This methods allows you to search your workspace's documents with keywords. Note that search results will be restricted to those accessible by the current access token.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "query": "hiring",
  "filters": [
    {
      "field": "createdAt",
      "operator": "eq",
      "value": null
    }
  ],
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "statusFilter": [
    "draft"
  ],
  "dateFilter": "month",
  "shareId": "string",
  "snippetMinWords": 20,
  "snippetMaxWords": 30,
  "sort": "relevance",
  "direction": "ASC"
}
```

<h3 id="search-all-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» query|body|string|false|none|
|» filters|body|[[DocumentFilter](#schemadocumentfilter)]|false|Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `collectionId`, `userId`, `documentId`, `dateFilter` or `statusFilter` parameters.|
|» userId|body|string(uuid)|false|**Deprecated.** Any documents that have not been edited by the user identifier will be filtered out. Deprecated – prefer the `filters` parameter.|
|» collectionId|body|string(uuid)|false|**Deprecated.** A collection to search within. Deprecated – prefer the `filters` parameter.|
|» documentId|body|string(uuid)|false|**Deprecated.** A document to search within. Deprecated – prefer the `filters` parameter.|
|» statusFilter|body|[string]|false|**Deprecated.** Document statuses to include in results. Deprecated – prefer the `filters` parameter.|
|» dateFilter|body|string|false|**Deprecated.** Any documents that have not been updated within the specified period will be filtered out. Deprecated – prefer the `filters` parameter with a date field and an ISO 8601 duration value.|
|» shareId|body|string|false|Filter results to the collection or document referenced by the shareId|
|» snippetMinWords|body|number|false|Minimum number of words to show in search result snippets|
|» snippetMaxWords|body|number|false|Maximum number of words to show in search result snippets|
|» sort|body|string|false|Specifies the attributes by which search results will be sorted|
|» direction|body|string|false|Specifies the sort order with respect to sort field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statusFilter|draft|
|» statusFilter|archived|
|» statusFilter|published|
|» dateFilter|day|
|» dateFilter|week|
|» dateFilter|month|
|» dateFilter|year|
|» sort|relevance|
|» sort|createdAt|
|» sort|updatedAt|
|» sort|title|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "context": "At Acme Inc our hiring practices are inclusive",
      "ranking": 1.1844109,
      "document": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "title": "Welcome to Acme Inc",
        "fullWidth": true,
        "icon": "🎉",
        "color": "string",
        "text": "…",
        "data": {},
        "url": "string",
        "urlId": "hDYep1TPAM",
        "collaboratorIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "tasks": {
          "completed": 0,
          "total": 0
        },
        "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "revision": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "updatedAt": "1970-01-01T00:00:00Z",
        "updatedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "dataAttributes": [
          {
            "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "value": "In Progress",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "archivedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "deletedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "deprecatedReason": "string",
        "preferences": {
          "headingPrefix": "none"
        }
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="search-all-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="search-all-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» context|string|false|none|A short snippet of context from the document that includes the search query.|
|» ranking|number(float)|false|none|The ranking used to order search results based on relevance.|
|» document|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a document

<a id="opIddocumentsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "text": "string",
    "icon": "string",
    "color": "string",
    "collectionId": "string",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "publish": true,
    "fullWidth": true,
    "preferences": {
      "headingPrefix": "none"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress"
      }
    ]
  }'
```

`POST /documents.create`

This method allows you to create or publish a new document. By default a document is set to the collection root. If you want to create a nested/child document, you should pass parentDocumentId to set the parent document.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "title": "Welcome to Acme Inc",
  "text": "string",
  "icon": "string",
  "color": "string",
  "collectionId": "string",
  "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "publish": true,
  "fullWidth": true,
  "preferences": {
    "headingPrefix": "none"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "dataAttributes": [
    {
      "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": "In Progress"
    }
  ]
}
```

<h3 id="create-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|false|Optional identifier for the document|
|» title|body|string|false|none|
|» text|body|string|false|The body of the document in markdown|
|» icon|body|string|false|Icon displayed alongside the document title|
|» color|body|string \| null|false|Color for the document icon (hex format)|
|» collectionId|body|string \| null|false|Identifier for the collection. Required to publish unless parentDocumentId is provided. Pass the literal string `personal` to create the document in the authenticated user's personal collection.|
|» parentDocumentId|body|string(uuid) \| null|false|Identifier for the parent document. Required to publish unless collectionId is provided|
|» templateId|body|string(uuid)|false|none|
|» publish|body|boolean|false|Whether this document should be immediately published and made visible to other workspace members.|
|» fullWidth|body|boolean|false|Whether the document should be displayed in full width|
|» preferences|body|object \| null|false|Document-level display preferences. Only the fields supplied are updated; existing values for other preferences are preserved. Pass `null` to clear all preferences.|
|» » headingPrefix|body|string|false|Numbering style applied to the document's headings when rendered.|
|» createdAt|body|string(date-time)|false|Optionally set the created date in the past|
|» dataAttributes|body|[object]|false|Data attributes to be included on the document.|
|» » dataAttributeId|body|string(uuid)|true|Unique identifier for the data attribute.|
|» » value|body|string \| boolean \| number|true|The value of the data attribute. Can be a string, boolean, or number depending on the data attribute type.|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » headingPrefix|none|
|» » headingPrefix|numeric|
|» » headingPrefix|alphanumeric|
|» » headingPrefix|outline|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "fullWidth": true,
    "icon": "🎉",
    "color": "string",
    "text": "…",
    "data": {},
    "url": "string",
    "urlId": "hDYep1TPAM",
    "collaboratorIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tasks": {
      "completed": 0,
      "total": 0
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revision": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "archivedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "deletedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "preferences": {
      "headingPrefix": "none"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a document

<a id="opIddocumentsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "title": "string",
    "text": "string",
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "preferences": {
      "headingPrefix": "none"
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "insightsEnabled": true,
    "editMode": "append",
    "findText": "string",
    "publish": true,
    "lastRevision": 0,
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress"
      }
    ],
    "deprecatedReason": "string"
  }'
```

`POST /documents.update`

This method allows you to modify an already created document

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "title": "string",
  "text": "string",
  "icon": "string",
  "color": "string",
  "fullWidth": true,
  "preferences": {
    "headingPrefix": "none"
  },
  "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "insightsEnabled": true,
  "editMode": "append",
  "findText": "string",
  "publish": true,
  "lastRevision": 0,
  "dataAttributes": [
    {
      "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": "In Progress"
    }
  ],
  "deprecatedReason": "string"
}
```

<h3 id="update-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» title|body|string|false|The title of the document.|
|» text|body|string|false|The body of the document in markdown.|
|» icon|body|string \| null|false|Icon displayed alongside the document title|
|» color|body|string \| null|false|Color for the document icon (hex format)|
|» fullWidth|body|boolean|false|Whether the document should be displayed in full width|
|» preferences|body|object \| null|false|Document-level display preferences. Only the fields supplied are updated; existing values for other preferences are preserved. Pass `null` to clear all preferences.|
|» » headingPrefix|body|string|false|Numbering style applied to the document's headings when rendered.|
|» templateId|body|string(uuid) \| null|false|Identifier for the template this document is based on|
|» collectionId|body|string(uuid) \| null|false|Identifier for the collection to move the document to|
|» insightsEnabled|body|boolean|false|Whether insights should be visible on the document|
|» editMode|body|[TextEditMode](#schematexteditmode)|false|The editing mode for text updates to a document. When set to `patch`, the `findText` parameter is required and the existing occurrence of `findText` will be replaced with the value of `text`.|
|» findText|body|string|false|The text to find within the document when using `patch` editMode. This text will be replaced with the value of `text`. Required when `editMode` is `patch`.|
|» publish|body|boolean|false|Whether this document should be published and made visible to other workspace members, if a draft|
|» lastRevision|body|integer|false|If set, the update is rejected with a 409 response when the document's current revision number does not match this value. Use this for optimistic concurrency control to avoid overwriting changes made since the client last loaded the document.|
|» dataAttributes|body|[object]|false|Data attributes to be updated. Attributes not included will be removed from the document.|
|» » dataAttributeId|body|string(uuid)|true|Unique identifier for the data attribute.|
|» » value|body|string \| boolean \| number|true|The value of the data attribute. Can be a string, boolean, or number depending on the data attribute type.|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|number|false|none|
|» deprecatedReason|body|string \| null|false|The reason the document was archived or deleted. Can only be updated on an archived or deleted document.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » headingPrefix|none|
|» » headingPrefix|numeric|
|» » headingPrefix|alphanumeric|
|» » headingPrefix|outline|
|» editMode|append|
|» editMode|prepend|
|» editMode|replace|
|» editMode|patch|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "fullWidth": true,
    "icon": "🎉",
    "color": "string",
    "text": "…",
    "data": {},
    "url": "string",
    "urlId": "hDYep1TPAM",
    "collaboratorIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tasks": {
      "completed": 0,
      "total": 0
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revision": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "archivedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "deletedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "preferences": {
      "headingPrefix": "none"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|409|Conflict|The provided `lastRevision` did not match the document's current revision, indicating a conflicting update.|None|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a template from a document

<a id="opIddocumentsTemplatize"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.templatize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "publish": true
  }'
```

`POST /documents.templatize`

This method allows you to create a new template using an existing document as the basis

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "publish": true
}
```

<h3 id="create-a-template-from-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» collectionId|body|string(uuid) \| null|false|Identifier for the collection where the template should be created|
|» publish|body|boolean|true|Whether the new template should be published|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "string",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deletedAt": "1970-01-01T00:00:00Z",
    "publishedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-template-from-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-template-from-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Unpublish a document

<a id="opIddocumentsUnpublish"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.unpublish \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "detach": false
  }'
```

`POST /documents.unpublish`

Unpublishing a document moves it back to a draft status and out of the collection.

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "detach": false
}
```

<h3 id="unpublish-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» detach|body|boolean|false|Whether to detach the document from the collection|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "fullWidth": true,
    "icon": "🎉",
    "color": "string",
    "text": "…",
    "data": {},
    "url": "string",
    "urlId": "hDYep1TPAM",
    "collaboratorIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tasks": {
      "completed": 0,
      "total": 0
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revision": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "archivedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "deletedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "preferences": {
      "headingPrefix": "none"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="unpublish-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="unpublish-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Move a document

<a id="opIddocumentsMove"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": 0
  }'
```

`POST /documents.move`

Move a document to a new location or collection. If no parent document is provided, the document will be moved to the collection root.

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0
}
```

<h3 id="move-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» collectionId|body|string(uuid)|false|none|
|» parentDocumentId|body|string(uuid)|false|none|
|» index|body|number|false|The position index in the collection structure|

> Example responses

> 200 Response

```json
{
  "data": {
    "documents": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "title": "Welcome to Acme Inc",
        "fullWidth": true,
        "icon": "🎉",
        "color": "string",
        "text": "…",
        "data": {},
        "url": "string",
        "urlId": "hDYep1TPAM",
        "collaboratorIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "tasks": {
          "completed": 0,
          "total": 0
        },
        "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "revision": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "updatedAt": "1970-01-01T00:00:00Z",
        "updatedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "dataAttributes": [
          {
            "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "value": "In Progress",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "archivedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "deletedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "deprecatedReason": "string",
        "preferences": {
          "headingPrefix": "none"
        }
      }
    ],
    "collections": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "urlId": "hDYep1TPAM",
        "name": "Human Resources",
        "description": "",
        "data": {},
        "sort": {
          "field": "string",
          "direction": "asc"
        },
        "index": "P",
        "color": "#123123",
        "icon": "string",
        "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "templateManagement": "read",
        "sharing": false,
        "commenting": true,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "archivedAt": "1970-01-01T00:00:00Z",
        "archivedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "deprecatedReason": "string",
        "sourceMetadata": {
          "externalId": "string",
          "externalName": "string",
          "createdByName": "string"
        }
      }
    ]
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="move-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="move-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» documents|[[Document](#schemadocument)]|false|none|none|
|» collections|[[Collection](#schemacollection)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Archive a document

<a id="opIddocumentsArchive"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "reason": "string"
  }'
```

`POST /documents.archive`

Archiving a document allows outdated information to be moved out of sight whilst retaining the ability to optionally search and restore it later.

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "reason": "string"
}
```

<h3 id="archive-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» reason|body|string \| null|false|An optional reason for archiving the document. This is stored and returned as `deprecatedReason`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "fullWidth": true,
    "icon": "🎉",
    "color": "string",
    "text": "…",
    "data": {},
    "url": "string",
    "urlId": "hDYep1TPAM",
    "collaboratorIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tasks": {
      "completed": 0,
      "total": 0
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revision": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "archivedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "deletedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "preferences": {
      "headingPrefix": "none"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="archive-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="archive-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Restore a document

<a id="opIddocumentsRestore"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revisionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /documents.restore`

If a document has been archived or deleted, it can be restored. Optionally a revision can be passed to restore the document to a previous point in time.

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "revisionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="restore-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» collectionId|body|string(uuid)|false|Identifier for the collection to restore the document to.|
|» revisionId|body|string(uuid)|false|Identifier for the revision to restore to.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "Welcome to Acme Inc",
    "fullWidth": true,
    "icon": "🎉",
    "color": "string",
    "text": "…",
    "data": {},
    "url": "string",
    "urlId": "hDYep1TPAM",
    "collaboratorIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tasks": {
      "completed": 0,
      "total": 0
    },
    "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revision": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "dataAttributes": [
      {
        "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": "In Progress",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "archivedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "deletedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deprecatedReason": "string",
    "preferences": {
      "headingPrefix": "none"
    }
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="restore-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="restore-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Document](#schemadocument)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a document

<a id="opIddocumentsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "permanent": false,
    "reason": "string"
  }'
```

`POST /documents.delete`

Deleting a document moves it to the trash. If not restored within 30 days it is permanently deleted.

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "permanent": false,
  "reason": "string"
}
```

<h3 id="delete-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» permanent|body|boolean|false|If set to true the document will be destroyed with no way to recover rather than moved to the trash.|
|» reason|body|string \| null|false|An optional reason for deleting the document. This is stored and returned as `deprecatedReason`.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List document users

<a id="opIddocumentsUsers"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "query": "string",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /documents.users`

All users with access to a document. To list only users with direct membership to the document use `documents.memberships`

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "query": "string",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-document-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» query|body|string|false|If set, will filter the results by user name.|
|» userId|body|string(uuid)|false|If set, will filter the results to a specific user.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-document-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-document-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List document memberships

<a id="opIddocumentsMemberships"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "hDYep1TPAM",
    "query": "string",
    "permission": "read"
  }'
```

`POST /documents.memberships`

Users with direct membership to a document. To list all users with access to a document use `documents.users`.

> Body parameter

```json
{
  "id": "hDYep1TPAM",
  "query": "string",
  "permission": "read"
}
```

<h3 id="list-document-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» query|body|string|false|If set, will filter the results by user name|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "memberships": [
      {
        "id": "string",
        "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "index": "string"
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-document-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-document-memberships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|
|» memberships|[[Membership](#schemamembership)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Add a document user

<a id="opIddocumentsAddUser"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.add_user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read"
  }'
```

`POST /documents.add_user`

This method allows you to add a user membership to the specified document.

> Body parameter

```json
{
  "id": "string",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read"
}
```

<h3 id="add-a-document-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» userId|body|string(uuid)|true|none|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "memberships": [
      {
        "id": "string",
        "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "index": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="add-a-document-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="add-a-document-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|
|» memberships|[[Membership](#schemamembership)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Remove a document user

<a id="opIddocumentsRemoveUser"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.remove_user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /documents.remove_user`

This method allows you to remove a user membership from the specified document.

> Body parameter

```json
{
  "id": "string",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="remove-a-document-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» userId|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="remove-a-document-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="remove-a-document-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all archived documents

<a id="opIddocumentsArchived"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.archived \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /documents.archived`

This method will list all archived documents belonging to the workspace that the current user has access to.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-archived-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» collectionId|body|string(uuid)|false|Optionally filter to a specific collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "Welcome to Acme Inc",
      "fullWidth": true,
      "icon": "🎉",
      "color": "string",
      "text": "…",
      "data": {},
      "url": "string",
      "urlId": "hDYep1TPAM",
      "collaboratorIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tasks": {
        "completed": 0,
        "total": 0
      },
      "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revision": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "dataAttributes": [
        {
          "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": "In Progress",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "archivedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "deletedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "preferences": {
        "headingPrefix": "none"
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-archived-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-archived-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all deleted documents

<a id="opIddocumentsDeleted"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.deleted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "filters": [
      {
        "field": "deletedAt",
        "operator": "eq",
        "value": null
      }
    ]
  }'
```

`POST /documents.deleted`

This method will list all deleted documents belonging to the workspace that the current user has access to.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "filters": [
    {
      "field": "deletedAt",
      "operator": "eq",
      "value": null
    }
  ]
}
```

<h3 id="list-all-deleted-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» filters|body|[[DocumentsDeletedFilter](#schemadocumentsdeletedfilter)]|false|Structured filter expression, evaluated as an AND of top-level entries. Supported fields are `deletedAt` (date) and `deletedById` (uuid, identifier of the user who deleted the document).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "Welcome to Acme Inc",
      "fullWidth": true,
      "icon": "🎉",
      "color": "string",
      "text": "…",
      "data": {},
      "url": "string",
      "urlId": "hDYep1TPAM",
      "collaboratorIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tasks": {
        "completed": 0,
        "total": 0
      },
      "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revision": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "dataAttributes": [
        {
          "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": "In Progress",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "archivedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "deletedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deprecatedReason": "string",
      "preferences": {
        "headingPrefix": "none"
      }
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-deleted-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-deleted-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Duplicate a document

<a id="opIddocumentsDuplicate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.duplicate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "title": "string",
    "recursive": true,
    "publish": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /documents.duplicate`

This method allows you to duplicate an existing document and optionally all of its child documents.

> Body parameter

```json
{
  "id": "string",
  "title": "string",
  "recursive": true,
  "publish": true,
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="duplicate-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» title|body|string|false|New title for the duplicated document|
|» recursive|body|boolean|false|Whether child documents should also be duplicated|
|» publish|body|boolean|false|Whether the new document should be published|
|» collectionId|body|string(uuid)|false|Identifier for the collection the document should be copied to|
|» parentDocumentId|body|string(uuid)|false|Identifier for the parent document the document should be copied to|

> Example responses

> 200 Response

```json
{
  "data": {
    "documents": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "title": "Welcome to Acme Inc",
        "fullWidth": true,
        "icon": "🎉",
        "color": "string",
        "text": "…",
        "data": {},
        "url": "string",
        "urlId": "hDYep1TPAM",
        "collaboratorIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "tasks": {
          "completed": 0,
          "total": 0
        },
        "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "revision": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "updatedAt": "1970-01-01T00:00:00Z",
        "updatedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "dataAttributes": [
          {
            "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "value": "In Progress",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "archivedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "deletedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "deprecatedReason": "string",
        "preferences": {
          "headingPrefix": "none"
        }
      }
    ]
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="duplicate-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="duplicate-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» documents|[[Document](#schemadocument)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Add a group to a document

<a id="opIddocumentsAddGroup"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.add_group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read"
  }'
```

`POST /documents.add_group`

This method allows you to give all members in a group access to a document.

> Body parameter

```json
{
  "id": "string",
  "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read"
}
```

<h3 id="add-a-group-to-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» groupId|body|string(uuid)|true|none|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "groupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="add-a-group-to-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="add-a-group-to-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» groupMemberships|[[CollectionGroupMembership](#schemacollectiongroupmembership)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Remove a group from a document

<a id="opIddocumentsRemoveGroup"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.remove_group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /documents.remove_group`

This method allows you to revoke all members in a group access to a document.

> Body parameter

```json
{
  "id": "string",
  "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="remove-a-group-from-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» groupId|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="remove-a-group-from-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="remove-a-group-from-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List document group memberships

<a id="opIddocumentsGroupMemberships"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.group_memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "id": "string",
    "query": "string",
    "permission": "read"
  }'
```

`POST /documents.group_memberships`

This method allows you to list a document's group memberships.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "id": "string",
  "query": "string",
  "permission": "read"
}
```

<h3 id="list-document-group-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» id|body|string|true|Unique identifier for the document. Either the UUID or the urlId is acceptable.|
|» query|body|string|false|Filter memberships by group names|
|» permission|body|[Permission](#schemapermission)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|read|
|» permission|read_write|

> Example responses

> 200 Response

```json
{
  "data": {
    "groups": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Engineering",
        "description": "string",
        "icon": "string",
        "color": "string",
        "externalId": "string",
        "disableMentions": true,
        "externalGroup": {},
        "memberCount": 11,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "groupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-document-group-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-document-group-memberships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» groups|[[Group](#schemagroup)]|false|none|none|
|» groupMemberships|[[CollectionGroupMembership](#schemacollectiongroupmembership)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Empty trash

<a id="opIddocumentsEmptyTrash"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/documents.empty_trash \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /documents.empty_trash`

Permanently delete all documents in the trash. This action is irreversible. Only available to admin users.

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="empty-trash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="empty-trash-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-events">Events</h1>

`Events` represent an artifact of an action. Whether it is creating a user,
editing a document, changing permissions, or any other action – an event
is created that can be used as an audit trail or activity stream.


## List all events

<a id="opIdeventsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/events.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "name": "string",
    "actorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "auditLog": true
  }'
```

`POST /events.list`

Events are an audit trail of important events that happen in the knowledge base.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "name": "string",
  "actorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auditLog": true
}
```

<h3 id="list-all-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» name|body|string|false|Filter to a specific event, e.g. "collections.create". Event names are in the format "objects.verb"|
|» actorId|body|string(uuid)|false|Filter to events performed by the selected user|
|» documentId|body|string(uuid)|false|Filter to events performed in the selected document|
|» collectionId|body|string(uuid)|false|Filter to events performed in the selected collection|
|» auditLog|body|boolean|false|Whether to return detailed events suitable for an audit log. Without this flag less detailed event types will be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "documents.create",
      "modelId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "actorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "authType": "api",
      "actorIpAddress": "60.169.88.100",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "createdAt": "1970-01-01T00:00:00Z",
      "data": {
        "name": "Equipment list"
      },
      "changes": {},
      "actor": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Event](#schemaevent)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-fileoperations">FileOperations</h1>

`FileOperations` represent background jobs for importing or exporting files.
You can query the file operation to find the state of progress and any
resulting output.


## Retrieve a file operation

<a id="opIdfileOperationsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/fileOperations.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /fileOperations.info`

Retrieve the details and current status of a file operation by its unique identifier. File operations represent long-running import or export tasks.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-file-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the file operation.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "export",
    "format": "outline-markdown",
    "name": "string",
    "state": "complete",
    "error": "string",
    "size": "2048",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-file-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-file-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[FileOperation](#schemafileoperation)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a file operation

<a id="opIdfileOperationsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/fileOperations.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /fileOperations.delete`

Delete a file operation and its associated files. This is useful for cleaning up completed or failed import/export operations.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-file-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the file operation.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-file-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-file-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve the file

<a id="opIdfileOperationsRedirect"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/fileOperations.redirect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /fileOperations.redirect`

Load the resulting file from where it is stored based on the id. A temporary, signed url with embedded credentials is generated on demand.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-the-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the file operation.|

> Example responses

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-the-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-the-file-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all file operations

<a id="opIdfileOperationsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/fileOperations.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "type": "export"
  }'
```

`POST /fileOperations.list`

List all file operations for the current workspace, filtered by type (import or export).

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "type": "export"
}
```

<h3 id="list-all-file-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» type|body|string|true|The type of fileOperation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|
|» type|export|
|» type|import|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "export",
      "format": "outline-markdown",
      "name": "string",
      "state": "complete",
      "error": "string",
      "size": "2048",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-file-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-file-operations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FileOperation](#schemafileoperation)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-groupmemberships">GroupMemberships</h1>

`GroupMemberships` represent the relationship between a group and the
documents and collections it has been given access to.


## List group memberships

<a id="opIdgroupMembershipsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groupMemberships.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /groupMemberships.list`

List the documents that have been shared with groups the authenticated user belongs to, along with the associated group membership records.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-group-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» groupId|body|string(uuid)|false|Filter to memberships for a specific group.|

> Example responses

> 200 Response

```json
{
  "data": {
    "groupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "groups": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Engineering",
        "description": "string",
        "icon": "string",
        "color": "string",
        "externalId": "string",
        "disableMentions": true,
        "externalGroup": {},
        "memberCount": 11,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "documents": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "title": "Welcome to Acme Inc",
        "fullWidth": true,
        "icon": "🎉",
        "color": "string",
        "text": "…",
        "data": {},
        "url": "string",
        "urlId": "hDYep1TPAM",
        "collaboratorIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "tasks": {
          "completed": 0,
          "total": 0
        },
        "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "revision": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "updatedAt": "1970-01-01T00:00:00Z",
        "updatedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "dataAttributes": [
          {
            "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "value": "In Progress",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "archivedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "deletedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "deprecatedReason": "string",
        "preferences": {
          "headingPrefix": "none"
        }
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-group-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-group-memberships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» groupMemberships|[[GroupMembership](#schemagroupmembership)]|false|none|none|
|» groups|[[Group](#schemagroup)]|false|none|none|
|» documents|[[Document](#schemadocument)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-groups">Groups</h1>

`Groups` represent a list of users that logically belong together, for
example there might be groups for each department in your organization.
Groups can be granted access to collections with read or write permissions.


## Retrieve a group

<a id="opIdgroupsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /groups.info`

Retrieve the details of a group by its unique identifier, including its name and member count.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the group.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Engineering",
    "description": "string",
    "icon": "string",
    "color": "string",
    "externalId": "string",
    "disableMentions": true,
    "externalGroup": {},
    "memberCount": 11,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Group](#schemagroup)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all groups

<a id="opIdgroupsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "externalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "query": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /groups.list`

List all groups in the workspace. Groups are used to organize users and manage permissions for collections.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "externalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "query": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» userId|body|string(uuid)|false|Filter to groups including a specific user|
|» externalId|body|string(uuid)|false|Filter to groups matching an external ID|
|» query|body|string(uuid)|false|Filter to groups matching a search query|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": {
    "groups": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Engineering",
        "description": "string",
        "icon": "string",
        "color": "string",
        "externalId": "string",
        "disableMentions": true,
        "externalGroup": {},
        "memberCount": 11,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "groupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» groups|[[Group](#schemagroup)]|false|none|none|
|» groupMemberships|[[GroupMembership](#schemagroupmembership)]|false|none|A preview of memberships in the group, note that this is not all memberships which can be queried from `groups.memberships`.|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a group

<a id="opIdgroupsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Designers",
    "description": "string",
    "icon": "string",
    "color": "string"
  }'
```

`POST /groups.create`

Create a new group with the specified name. Groups can be used to organize users and assign collection permissions to multiple users at once.

> Body parameter

```json
{
  "name": "Designers",
  "description": "string",
  "icon": "string",
  "color": "string"
}
```

<h3 id="create-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|A short description of the group.|
|» icon|body|string \| null|false|An icon or emoji to use as the group icon.|
|» color|body|string \| null|false|The color of the group icon in hex format.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Engineering",
    "description": "string",
    "icon": "string",
    "color": "string",
    "externalId": "string",
    "disableMentions": true,
    "externalGroup": {},
    "memberCount": 11,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Group](#schemagroup)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a group

<a id="opIdgroupsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Designers",
    "icon": "string",
    "color": "string"
  }'
```

`POST /groups.update`

Update an existing group's name. The group is identified by its unique identifier.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Designers",
  "icon": "string",
  "color": "string"
}
```

<h3 id="update-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» name|body|string|true|none|
|» icon|body|string \| null|false|An icon or emoji to use as the group icon.|
|» color|body|string \| null|false|The color of the group icon in hex format.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Engineering",
    "description": "string",
    "icon": "string",
    "color": "string",
    "externalId": "string",
    "disableMentions": true,
    "externalGroup": {},
    "memberCount": 11,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Group](#schemagroup)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a group

<a id="opIdgroupsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /groups.delete`

Deleting a group will cause all of its members to lose access to any collections the group has previously been added to. This action can’t be undone so please be careful.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all group members

<a id="opIdgroupsMemberships"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "id": "a32c2ee6-fbde-4654-841b-0eabdc71b812",
    "query": "jenny"
  }'
```

`POST /groups.memberships`

List and filter all the members in a group.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "id": "a32c2ee6-fbde-4654-841b-0eabdc71b812",
  "query": "jenny"
}
```

<h3 id="list-all-group-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» id|body|string|true|Group id|
|» query|body|string|false|Filter memberships by user names|

> Example responses

> 200 Response

```json
{
  "data": {
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "groupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-group-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-group-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|
|» groupMemberships|[[GroupMembership](#schemagroupmembership)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Add a group member

<a id="opIdgroupsAddUser"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.add_user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "member"
  }'
```

`POST /groups.add_user`

This method allows you to add a user to the specified group.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "member"
}
```

<h3 id="add-a-group-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Identifier for the group|
|» userId|body|string(uuid)|true|Identifier for the user to add to the group|
|» permission|body|string|false|The permission level for the user within the group. When omitted for a new membership this defaults to `member`, and an existing membership's permission is left unchanged.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|member|
|» permission|admin|

> Example responses

> 200 Response

```json
{
  "data": {
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "groups": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Engineering",
        "description": "string",
        "icon": "string",
        "color": "string",
        "externalId": "string",
        "disableMentions": true,
        "externalGroup": {},
        "memberCount": 11,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "groupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="add-a-group-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="add-a-group-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|
|» groups|[[Group](#schemagroup)]|false|none|none|
|» groupMemberships|[[GroupMembership](#schemagroupmembership)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Remove a group member

<a id="opIdgroupsRemoveUser"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.remove_user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /groups.remove_user`

This method allows you to remove a user from the group.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="remove-a-group-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Identifier for the group|
|» userId|body|string(uuid)|true|Identifier for the user to remove from the group|

> Example responses

> 200 Response

```json
{
  "data": {
    "groups": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Engineering",
        "description": "string",
        "icon": "string",
        "color": "string",
        "externalId": "string",
        "disableMentions": true,
        "externalGroup": {},
        "memberCount": 11,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="remove-a-group-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="remove-a-group-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» groups|[[Group](#schemagroup)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a group member

<a id="opIdgroupsUpdateUser"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/groups.update_user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "member"
  }'
```

`POST /groups.update_user`

Update the role of an existing member of a group, for example to promote them to a group admin or demote them back to a regular member.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "member"
}
```

<h3 id="update-a-group-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Identifier for the group|
|» userId|body|string(uuid)|true|Identifier for the user whose membership should be updated|
|» permission|body|string|true|The permission the user should have within the group|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|member|
|» permission|admin|

> Example responses

> 200 Response

```json
{
  "data": {
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "groups": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Engineering",
        "description": "string",
        "icon": "string",
        "color": "string",
        "externalId": "string",
        "disableMentions": true,
        "externalGroup": {},
        "memberCount": 11,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "groupMemberships": [
      {
        "id": "string",
        "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-group-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-group-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|
|» groups|[[Group](#schemagroup)]|false|none|none|
|» groupMemberships|[[GroupMembership](#schemagroupmembership)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-notifications">Notifications</h1>

`Notifications` represent in-app and email notifications generated for a
user in response to events such as mentions, comments, and document
updates.


## List notifications

<a id="opIdnotificationsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/notifications.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "eventType": "string",
    "archived": true
  }'
```

`POST /notifications.list`

List the authenticated user's notifications, most recent first, optionally filtered by event type or archived status.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "eventType": "string",
  "archived": true
}
```

<h3 id="list-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» eventType|body|string|false|Filter to notifications of a specific event type.|
|» archived|body|boolean|false|When true, only archived notifications are returned.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "event": "string",
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "actorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "actor": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "commentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "revisionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "viewedAt": "1970-01-01T00:00:00Z",
      "archivedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Notification](#schemanotification)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a notification

<a id="opIdnotificationsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/notifications.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "viewedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z"
  }'
```

`POST /notifications.update`

Update a single notification, for example to mark it as viewed or archived by setting the relevant timestamp.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "viewedAt": "1970-01-01T00:00:00Z",
  "archivedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the notification.|
|» viewedAt|body|string(date-time) \| null|false|The date and time the notification was viewed, or `null` to mark it unviewed.|
|» archivedAt|body|string(date-time) \| null|false|The date and time the notification was archived, or `null` to unarchive it.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "event": "string",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "actorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "actor": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "commentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "revisionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "viewedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Notification](#schemanotification)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update all notifications

<a id="opIdnotificationsUpdateAll"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/notifications.update_all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "viewedAt": "1970-01-01T00:00:00Z",
    "archivedAt": "1970-01-01T00:00:00Z"
  }'
```

`POST /notifications.update_all`

Update all of the authenticated user's notifications at once, for example to mark them all as viewed or archived.

> Body parameter

```json
{
  "viewedAt": "1970-01-01T00:00:00Z",
  "archivedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-all-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» viewedAt|body|string(date-time) \| null|false|The date and time to mark notifications viewed, or `null` to mark them unviewed.|
|» archivedAt|body|string(date-time) \| null|false|The date and time to archive notifications, or `null` to unarchive them.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-all-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-all-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-oauthauthentications">OAuthAuthentications</h1>

`OAuthAuthentications` represent individual scoped authentications between
Outline and an `OAuthClient`.


## List accessible OAuth authentications

<a id="opIdoauthAuthenticationsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthAuthentications.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25
  }'
```

`POST /oauthAuthentications.list`

List all OAuth authentications for the current user. These represent the third-party applications that the user has authorized to access their account.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25
}
```

<h3 id="list-accessible-oauth-authentications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pagination](#schemapagination)|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "oauthClientId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "oauthClient": {
        "name": "string",
        "description": "string",
        "developerName": "string",
        "developerUrl": "string",
        "avatarUrl": "string",
        "clientId": "string",
        "published": true
      },
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scope": [
        "string"
      ],
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-accessible-oauth-authentications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-accessible-oauth-authentications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OAuthAuthentication](#schemaoauthauthentication)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete an OAuth authentiation

<a id="opIdoauthAuthenticationsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthAuthentications.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "oauthClientId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "scope": [
      "string"
    ]
  }'
```

`POST /oauthAuthentications.delete`

Revoke an OAuth authentication, removing the third-party application's access to the user's account.

> Body parameter

```json
{
  "oauthClientId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scope": [
    "string"
  ]
}
```

<h3 id="delete-an-oauth-authentiation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» oauthClientId|body|string(uuid)|true|none|
|» scope|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-an-oauth-authentiation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-an-oauth-authentiation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-oauthclients">OAuthClients</h1>

`OAuthClients` represent OAuth clients that can be used to authenticate
users with third-party services.


## Retrieve an OAuth client

<a id="opIdoauthClientsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthClients.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "clientId": "2bquf8avrpdv31par42a"
  }'
```

`POST /oauthClients.info`

To retrieve information about an OAuth client you must pass either an `id` or a `clientId`.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "clientId": "2bquf8avrpdv31par42a"
}
```

<h3 id="retrieve-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|false|Unique identifier for the OAuth client.|
|» clientId|body|string|false|Public identifier for the OAuth client. This may also be the URL of a client ID metadata document, in which case the client's details are resolved from that document.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Acme Inc",
    "description": "Integrate Acme Inc's services into Outline.",
    "developerName": "Acme Inc",
    "developerUrl": "https://example.com",
    "avatarUrl": "string",
    "clientId": "2bquf8avrpdv31par42a",
    "clientSecret": "ol_sk_rapdv31...",
    "clientType": "public",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "published": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-an-oauth-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OAuthClient](#schemaoauthclient)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List accessible OAuth clients

<a id="opIdoauthClientsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthClients.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25
  }'
```

`POST /oauthClients.list`

List all OAuth clients that the authenticated user has access to. This includes both clients created by the user and published clients available to the workspace.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25
}
```

<h3 id="list-accessible-oauth-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pagination](#schemapagination)|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Acme Inc",
      "description": "Integrate Acme Inc's services into Outline.",
      "developerName": "Acme Inc",
      "developerUrl": "https://example.com",
      "avatarUrl": "string",
      "clientId": "2bquf8avrpdv31par42a",
      "clientSecret": "ol_sk_rapdv31...",
      "clientType": "public",
      "redirectUris": [
        "https://example.com/callback"
      ],
      "published": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-accessible-oauth-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-accessible-oauth-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OAuthClient](#schemaoauthclient)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create an OAuth client

<a id="opIdoauthClientsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthClients.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My App",
    "description": "Integrate Acme Inc'\''s services into Outline.",
    "developerName": "Acme Inc",
    "developerUrl": "https://example.com",
    "avatarUrl": "string",
    "redirectUris": [
      "https://example.com/callback",
      "com.example.app:/oauth2redirect"
    ],
    "published": true
  }'
```

`POST /oauthClients.create`

Create a new OAuth client application that can be used to authenticate users and access the API on their behalf.

> Body parameter

```json
{
  "name": "My App",
  "description": "Integrate Acme Inc's services into Outline.",
  "developerName": "Acme Inc",
  "developerUrl": "https://example.com",
  "avatarUrl": "string",
  "redirectUris": [
    "https://example.com/callback",
    "com.example.app:/oauth2redirect"
  ],
  "published": true
}
```

<h3 id="create-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|Name of the OAuth client.|
|» description|body|string|false|A short description of this OAuth client.|
|» developerName|body|string|false|The name of the developer who created this OAuth client.|
|» developerUrl|body|string|false|The URL of the developer who created this OAuth client.|
|» avatarUrl|body|string|false|A URL pointing to an image representing the OAuth client.|
|» redirectUris|body|[string]|true|List of redirect URIs for the OAuth client. Each entry must be an absolute URL that includes a scheme, for example `https://example.com/callback`. Private-use URI schemes for native applications are also accepted, for example `com.example.app:/oauth2redirect` (see RFC 8252).|
|» published|body|boolean|false|Whether the OAuth client is available to other workspaces.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Acme Inc",
    "description": "Integrate Acme Inc's services into Outline.",
    "developerName": "Acme Inc",
    "developerUrl": "https://example.com",
    "avatarUrl": "string",
    "clientId": "2bquf8avrpdv31par42a",
    "clientSecret": "ol_sk_rapdv31...",
    "clientType": "public",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "published": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-an-oauth-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OAuthClient](#schemaoauthclient)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update an OAuth client

<a id="opIdoauthClientsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthClients.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "My App",
    "description": "Integrate Acme Inc'\''s services into Outline.",
    "developerName": "Acme Inc",
    "developerUrl": "https://example.com",
    "avatarUrl": "string",
    "redirectUris": [
      "https://example.com/callback",
      "com.example.app:/oauth2redirect"
    ],
    "published": true
  }'
```

`POST /oauthClients.update`

Update an existing OAuth client's properties such as name, description, redirect URIs, or published status.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "My App",
  "description": "Integrate Acme Inc's services into Outline.",
  "developerName": "Acme Inc",
  "developerUrl": "https://example.com",
  "avatarUrl": "string",
  "redirectUris": [
    "https://example.com/callback",
    "com.example.app:/oauth2redirect"
  ],
  "published": true
}
```

<h3 id="update-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the OAuth client.|
|» name|body|string|false|Name of the OAuth client.|
|» description|body|string|false|A short description of this OAuth client.|
|» developerName|body|string|false|The name of the developer who created this OAuth client.|
|» developerUrl|body|string|false|The URL of the developer who created this OAuth client.|
|» avatarUrl|body|string|false|A URL pointing to an image representing the OAuth client.|
|» redirectUris|body|[string]|false|List of redirect URIs for the OAuth client. Each entry must be an absolute URL that includes a scheme, for example `https://example.com/callback`. Private-use URI schemes for native applications are also accepted, for example `com.example.app:/oauth2redirect` (see RFC 8252).|
|» published|body|boolean|false|Whether the OAuth client is available to other workspaces.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Acme Inc",
    "description": "Integrate Acme Inc's services into Outline.",
    "developerName": "Acme Inc",
    "developerUrl": "https://example.com",
    "avatarUrl": "string",
    "clientId": "2bquf8avrpdv31par42a",
    "clientSecret": "ol_sk_rapdv31...",
    "clientType": "public",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "published": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-an-oauth-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OAuthClient](#schemaoauthclient)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Rotate the secret for an OAuth client

<a id="opIdoauthClientsRotateSecret"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthClients.rotate_secret \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /oauthClients.rotate_secret`

Generate a new client secret for an OAuth client. The old secret will be invalidated immediately, so ensure your application is updated to use the new secret.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="rotate-the-secret-for-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the OAuth client.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Acme Inc",
    "description": "Integrate Acme Inc's services into Outline.",
    "developerName": "Acme Inc",
    "developerUrl": "https://example.com",
    "avatarUrl": "string",
    "clientId": "2bquf8avrpdv31par42a",
    "clientSecret": "ol_sk_rapdv31...",
    "clientType": "public",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "published": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="rotate-the-secret-for-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="rotate-the-secret-for-an-oauth-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OAuthClient](#schemaoauthclient)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete an OAuth client

<a id="opIdoauthClientsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/oauthClients.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /oauthClients.delete`

Permanently delete an OAuth client and revoke all associated access tokens. This action cannot be undone.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the OAuth client.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-an-oauth-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-pins">Pins</h1>

`Pins` represent documents that have been pinned to the top of a
collection or to the home screen for quick access by all members of the
workspace.


## Pin a document

<a id="opIdpinsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/pins.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string"
  }'
```

`POST /pins.create`

Pin a document to the top of a collection or to the home screen. Pinned documents are visible to all members of the workspace. Provide a `collectionId` to pin within a collection, or omit it to pin to the home screen.

> Body parameter

```json
{
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string"
}
```

<h3 id="pin-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» documentId|body|string(uuid)|true|Identifier for the document to pin.|
|» collectionId|body|string(uuid) \| null|false|Identifier for the collection to pin the document to. Omit to pin to the home screen.|
|» index|body|string|false|An optional fractional index to control the position of the pin.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="pin-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="pin-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Pin](#schemapin)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve a pin

<a id="opIdpinsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/pins.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /pins.info`

Retrieve the pin for a document, either within a collection or on the home screen.

> Body parameter

```json
{
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-pin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» documentId|body|string(uuid)|true|Identifier for the pinned document.|
|» collectionId|body|string(uuid) \| null|false|Identifier for the collection. Omit to retrieve the home screen pin.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-pin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-pin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Pin](#schemapin)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List pins

<a id="opIdpinsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/pins.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /pins.list`

List the pinned documents for a collection, or for the home screen when no `collectionId` is provided.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-pins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» collectionId|body|string(uuid) \| null|false|The collection to list pins for. Omit to list home screen pins.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "index": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-pins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-pins-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Pin](#schemapin)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a pin

<a id="opIdpinsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/pins.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string"
  }'
```

`POST /pins.update`

Update the position of an existing pin, used to reorder pinned documents.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string"
}
```

<h3 id="update-a-pin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the pin.|
|» index|body|string|true|The fractional index to move the pin to.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-pin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-pin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Pin](#schemapin)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a pin

<a id="opIdpinsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/pins.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /pins.delete`

Remove a pin, un-pinning the document from its collection or the home screen. The document itself is not affected.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-pin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the pin.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-pin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-pin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-reactions">Reactions</h1>

`Reactions` represent emoji reactions that users have added to comments.


## List reactions

<a id="opIdreactionsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/reactions.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "commentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /reactions.list`

List the emoji reactions that have been added to a comment.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "commentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-reactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» commentId|body|string(uuid)|true|Identifier for the comment to list reactions for.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "emoji": "string",
      "commentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-reactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-reactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Reaction](#schemareaction)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-revisions">Revisions</h1>

`Revisions` represent a snapshot of a document at a point in time. They
are used to keep track of editing and collaboration history – a document
can also be restored to a previous revision if necessary.


## Retrieve a revision

<a id="opIdrevisionsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/revisions.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /revisions.info`

A revision is a snapshot of a document at a specific point in time. This endpoint allows you to retrieve a specific version of a document by its unique identifier.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the revision.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "string",
    "name": "string",
    "icon": "string",
    "color": "string",
    "collaborators": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "deletedAt": "1970-01-01T00:00:00Z",
    "sourceMetadata": {
      "authType": "api"
    },
    "data": {},
    "text": "string"
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-revision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[RevisionDetail](#schemarevisiondetail)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all revisions

<a id="opIdrevisionsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/revisions.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /revisions.list`

List all revisions for a specific document. Revisions represent historical snapshots of a document's content and can be used to track changes over time. The `data` and `text` fields are omitted from listed revisions for performance; use `revisions.info` to retrieve the full content of a specific revision.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-revisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» documentId|body|string(uuid)|false|The document ID to retrieve revisions for|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "string",
      "name": "string",
      "icon": "string",
      "color": "string",
      "collaborators": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deletedAt": "1970-01-01T00:00:00Z",
      "sourceMetadata": {
        "authType": "api"
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-revisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-revisions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Revision](#schemarevision)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a revision

<a id="opIdrevisionsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/revisions.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string"
  }'
```

`POST /revisions.update`

Update the details of a revision. Currently only the name of the revision can be changed, which is used to label significant versions of a document.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

<h3 id="update-a-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the revision.|
|» name|body|string \| null|true|The name of the revision, or `null` to remove an existing name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "string",
    "name": "string",
    "icon": "string",
    "color": "string",
    "collaborators": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ],
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "deletedAt": "1970-01-01T00:00:00Z",
    "sourceMetadata": {
      "authType": "api"
    }
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-revision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Revision](#schemarevision)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a revision

<a id="opIdrevisionsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/revisions.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /revisions.delete`

Delete a specific revision of a document. The latest revision of a document cannot be deleted.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the revision.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-revision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Export a revision

<a id="opIdrevisionsExport"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/revisions.export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /revisions.export`

Triggers an export of a single revision to a file. The endpoint returns a `FileOperation` that can be queried to track the progress of the export and get the url for the final file.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="export-a-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the revision.|

> Example responses

> 200 Response

```json
{
  "data": {
    "fileOperation": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "export",
      "format": "outline-markdown",
      "name": "string",
      "state": "complete",
      "error": "string",
      "size": "2048",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="export-a-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="export-a-revision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» fileOperation|[FileOperation](#schemafileoperation)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-shares">Shares</h1>

`Shares` represent authorization to view a document without being a member
of the workspace. Shares are created in order to give access to documents publicly.
Each user that shares a document will have a unique share object.


## Retrieve a share object

<a id="opIdsharesInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/shares.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /shares.info`

Retrieve the details of a share link by its unique identifier or by the associated document ID. Shares allow documents to be accessed publicly or by specific users.

> Body parameter

```json
{
  "id": "string",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-share-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|false|Unique identifier for the share. Either the UUID or the share slug is acceptable.|
|» documentId|body|string(uuid)|false|Unique identifier for a document. One of id or documentId must be provided.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentTitle": "React best practices",
    "documentUrl": "http://example.com",
    "sourceTitle": "string",
    "sourcePath": "string",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "urlId": "string",
    "url": "http://example.com",
    "domain": "string",
    "title": "string",
    "iconUrl": "http://example.com",
    "published": false,
    "includeChildDocuments": true,
    "allowSubscriptions": true,
    "allowIndexing": true,
    "showLastUpdated": true,
    "showTOC": true,
    "views": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "lastAccessedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-share-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-share-object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Share](#schemashare)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all shares

<a id="opIdsharesList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/shares.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "query": "string"
  }'
```

`POST /shares.list`

List all share links in the workspace.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "query": "string"
}
```

<h3 id="list-all-shares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» query|body|string|false|Filter to shared documents matching a search query|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentTitle": "React best practices",
      "documentUrl": "http://example.com",
      "sourceTitle": "string",
      "sourcePath": "string",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "urlId": "string",
      "url": "http://example.com",
      "domain": "string",
      "title": "string",
      "iconUrl": "http://example.com",
      "published": false,
      "includeChildDocuments": true,
      "allowSubscriptions": true,
      "allowIndexing": true,
      "showLastUpdated": true,
      "showTOC": true,
      "views": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "lastAccessedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-shares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-shares-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Share](#schemashare)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a share

<a id="opIdsharesCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/shares.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /shares.create`

Creates a new share link that can be used by to access a document or collection. If you request multiple shares for the same resource with the same API key, the same share object will be returned. By default all shares are unpublished. Exactly one of `documentId` or `collectionId` must be provided.

> Body parameter

```json
{
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» documentId|body|string(uuid)|false|Identifier for the document to share. Mutually exclusive with `collectionId`.|
|» collectionId|body|string(uuid)|false|Identifier for the collection to share. Mutually exclusive with `documentId`.|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentTitle": "React best practices",
    "documentUrl": "http://example.com",
    "sourceTitle": "string",
    "sourcePath": "string",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "urlId": "string",
    "url": "http://example.com",
    "domain": "string",
    "title": "string",
    "iconUrl": "http://example.com",
    "published": false,
    "includeChildDocuments": true,
    "allowSubscriptions": true,
    "allowIndexing": true,
    "showLastUpdated": true,
    "showTOC": true,
    "views": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "lastAccessedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Share](#schemashare)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a share

<a id="opIdsharesUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/shares.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "published": true,
    "title": "string",
    "iconUrl": "http://example.com"
  }'
```

`POST /shares.update`

Allows changing an existing share's published status, which removes authentication and makes it available to anyone with the link.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "published": true,
  "title": "string",
  "iconUrl": "http://example.com"
}
```

<h3 id="update-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» published|body|boolean|true|none|
|» title|body|string \| null|false|Override title displayed on the publicly shared page. If not set the source document or collection title is used.|
|» iconUrl|body|string(uri) \| null|false|URL of an icon to display on the publicly shared page, overriding the workspace branding.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentTitle": "React best practices",
    "documentUrl": "http://example.com",
    "sourceTitle": "string",
    "sourcePath": "string",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "urlId": "string",
    "url": "http://example.com",
    "domain": "string",
    "title": "string",
    "iconUrl": "http://example.com",
    "published": false,
    "includeChildDocuments": true,
    "allowSubscriptions": true,
    "allowIndexing": true,
    "showLastUpdated": true,
    "showTOC": true,
    "views": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "lastAccessedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Share](#schemashare)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Revoke a share

<a id="opIdsharesRevoke"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/shares.revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /shares.revoke`

Makes the share link inactive so that it can no longer be used to access the document.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="revoke-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="revoke-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="revoke-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-stars">Stars</h1>

`Stars` represent a favorited document or collection in the application sidebar.
Each user has their own collection of starred items.


## Create a star

<a id="opIdstarsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/stars.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string"
  }'
```

`POST /stars.create`

Stars a document or collection so it appears in the users sidebar. One of either `documentId` or `collectionId` must be provided.

> Body parameter

```json
{
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string"
}
```

<h3 id="create-a-star-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» documentId|body|string(uuid)|false|none|
|» collectionId|body|string(uuid)|false|none|
|» index|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-star-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-star-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Star](#schemastar)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all stars

<a id="opIdstarsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/stars.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25
  }'
```

`POST /stars.list`

List all starred documents for the authenticated user. Stars allow users to bookmark important documents for quick access in the sidebar.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25
}
```

<h3 id="list-all-stars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pagination](#schemapagination)|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "stars": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "index": "string",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "documents": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "title": "Welcome to Acme Inc",
        "fullWidth": true,
        "icon": "🎉",
        "color": "string",
        "text": "…",
        "data": {},
        "url": "string",
        "urlId": "hDYep1TPAM",
        "collaboratorIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "tasks": {
          "completed": 0,
          "total": 0
        },
        "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "revision": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "updatedAt": "1970-01-01T00:00:00Z",
        "updatedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "dataAttributes": [
          {
            "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "value": "In Progress",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "archivedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "deletedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "deprecatedReason": "string",
        "preferences": {
          "headingPrefix": "none"
        }
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-stars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-stars-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» stars|[[Star](#schemastar)]|false|none|none|
|» documents|[[Document](#schemadocument)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a stars order in the sidebar

<a id="opIdstarsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/stars.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string"
  }'
```

`POST /stars.update`

Update the position of a starred document in the sidebar. The index parameter determines the display order relative to other starred documents.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string"
}
```

<h3 id="update-a-stars-order-in-the-sidebar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|
|» index|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-stars-order-in-the-sidebar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-stars-order-in-the-sidebar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Star](#schemastar)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a star

<a id="opIdstarsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/stars.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /stars.delete`

Remove a star from a document, removing it from the user's starred documents list in the sidebar.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-star-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-star-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-star-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-subscriptions">Subscriptions</h1>

`Subscriptions` represent a user's interest in a document or collection.
Subscribed users receive notifications when the subscribed resource
changes.


## List subscriptions

<a id="opIdsubscriptionsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/subscriptions.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "event": "documents",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /subscriptions.list`

List the authenticated user's subscriptions for a given document or collection.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "event": "documents",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» event|body|string|true|The type of event that is subscribed to.|
|» documentId|body|string(uuid)|false|Filter to subscriptions for this document. Provide exactly one of documentId or collectionId.|
|» collectionId|body|string(uuid)|false|Filter to subscriptions for this collection. Provide exactly one of documentId or collectionId.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event|documents|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "event": "documents",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Subscription](#schemasubscription)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve a subscription

<a id="opIdsubscriptionsInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/subscriptions.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event": "documents",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /subscriptions.info`

Retrieve the authenticated user's subscription for a specific document or collection, if one exists.

> Body parameter

```json
{
  "event": "documents",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» event|body|string|true|The type of event that is subscribed to.|
|» documentId|body|string(uuid)|false|The subscribed document. Provide exactly one of documentId or collectionId.|
|» collectionId|body|string(uuid)|false|The subscribed collection. Provide exactly one of documentId or collectionId.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event|documents|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "event": "documents",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscription](#schemasubscription)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a subscription

<a id="opIdsubscriptionsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/subscriptions.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event": "documents",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /subscriptions.create`

Subscribe the authenticated user to a document or collection so that they receive notifications when it changes. Provide exactly one of `documentId` or `collectionId`.

> Body parameter

```json
{
  "event": "documents",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» event|body|string|true|The type of event to subscribe to.|
|» documentId|body|string(uuid)|false|The document to subscribe to. Provide exactly one of documentId or collectionId.|
|» collectionId|body|string(uuid)|false|The collection to subscribe to. Provide exactly one of documentId or collectionId.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event|documents|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "event": "documents",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscription](#schemasubscription)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a subscription

<a id="opIdsubscriptionsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/subscriptions.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /subscriptions.delete`

Unsubscribe the authenticated user from a document or collection by the subscription's identifier.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the subscription.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-templates">Templates</h1>

`Templates` represent reusable document templates that can be used as a
starting point when creating new documents. Templates can be scoped to a
specific collection or available workspace-wide.


## Create a template

<a id="opIdtemplatesCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/templates.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "publish": true
  }'
```

`POST /templates.create`

Create a new template that can be used as a starting point for new documents. Templates can optionally be scoped to a specific collection.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "title": "string",
  "data": {},
  "icon": "string",
  "color": "string",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "publish": true
}
```

<h3 id="create-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|false|Optionally provide a specific UUID for the template.|
|» title|body|string|false|The title of the template. Required when publishing.|
|» data|body|object|false|The body of the template as a Prosemirror document. Required when publishing.|
|» icon|body|string \| null|false|An emoji to use as the template icon.|
|» color|body|string \| null|false|The color of the template icon in hex format.|
|» collectionId|body|string(uuid)|false|Identifier for the collection to which the template belongs.|
|» publish|body|boolean|false|Whether the template is available to other members. Set to false to create a draft that is only visible to its creator.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "string",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deletedAt": "1970-01-01T00:00:00Z",
    "publishedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all templates

<a id="opIdtemplatesList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/templates.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "query": "string"
  }'
```

`POST /templates.list`

List all templates available to the current user. Optionally filter by collection. Templates not associated with a collection are workspace-wide.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "query": "string"
}
```

<h3 id="list-all-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» collectionId|body|string(uuid)|false|Optionally filter to a specific collection|
|» query|body|string|false|Search query to filter templates by title|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "url": "string",
      "urlId": "string",
      "title": "string",
      "data": {},
      "icon": "string",
      "color": "string",
      "fullWidth": true,
      "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "deletedAt": "1970-01-01T00:00:00Z",
      "publishedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Template](#schematemplate)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve a template

<a id="opIdtemplatesInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/templates.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string"
  }'
```

`POST /templates.info`

Retrieve a template by its unique identifier.

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="retrieve-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the template. Either the UUID or the urlId is acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "string",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deletedAt": "1970-01-01T00:00:00Z",
    "publishedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a template

<a id="opIdtemplatesUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/templates.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "publish": true
  }'
```

`POST /templates.update`

Update an existing template by its unique identifier.

> Body parameter

```json
{
  "id": "string",
  "title": "string",
  "data": {},
  "icon": "string",
  "color": "string",
  "fullWidth": true,
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "publish": true
}
```

<h3 id="update-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the template. Either the UUID or the urlId is acceptable.|
|» title|body|string|false|The title of the template.|
|» data|body|object|false|The body of the template as a Prosemirror document.|
|» icon|body|string \| null|false|An emoji to use as the template icon.|
|» color|body|string \| null|false|The color of the template icon in hex format.|
|» fullWidth|body|boolean|false|Whether the template should be displayed full width.|
|» collectionId|body|string(uuid) \| null|false|Identifier for the collection to which the template belongs. Set to null for a workspace-wide template.|
|» publish|body|boolean|false|Set to true to publish a draft template so it becomes available to other members.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "string",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deletedAt": "1970-01-01T00:00:00Z",
    "publishedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a template

<a id="opIdtemplatesDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/templates.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string"
  }'
```

`POST /templates.delete`

Delete a template by its unique identifier. This will soft-delete the template, it can be restored later.

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="delete-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the template. Either the UUID or the urlId is acceptable.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Restore a template

<a id="opIdtemplatesRestore"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/templates.restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string"
  }'
```

`POST /templates.restore`

Restore a previously deleted template by its unique identifier.

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="restore-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the template. Either the UUID or the urlId is acceptable.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "string",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deletedAt": "1970-01-01T00:00:00Z",
    "publishedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="restore-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="restore-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Duplicate a template

<a id="opIdtemplatesDuplicate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/templates.duplicate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "title": "string",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /templates.duplicate`

Create a copy of an existing template. Optionally override the title and target collection.

> Body parameter

```json
{
  "id": "string",
  "title": "string",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="duplicate-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|Unique identifier for the template to duplicate. Either the UUID or the urlId is acceptable.|
|» title|body|string|false|Override the title of the duplicated template.|
|» collectionId|body|string(uuid) \| null|false|Identifier for the collection to place the duplicated template in. If not provided, uses the original template's collection.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "urlId": "string",
    "title": "string",
    "data": {},
    "icon": "string",
    "color": "string",
    "fullWidth": true,
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "deletedAt": "1970-01-01T00:00:00Z",
    "publishedAt": "1970-01-01T00:00:00Z"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="duplicate-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="duplicate-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-usermemberships">UserMemberships</h1>

`UserMemberships` represent the relationship between a user and the
documents that have been shared directly with them.


## List document memberships

<a id="opIduserMembershipsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/userMemberships.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25
  }'
```

`POST /userMemberships.list`

List the documents that have been shared directly with the authenticated user, along with the associated membership records.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25
}
```

<h3 id="list-document-memberships-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pagination](#schemapagination)|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "memberships": [
      {
        "id": "string",
        "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "permission": "read",
        "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "index": "string"
      }
    ],
    "documents": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "title": "Welcome to Acme Inc",
        "fullWidth": true,
        "icon": "🎉",
        "color": "string",
        "text": "…",
        "data": {},
        "url": "string",
        "urlId": "hDYep1TPAM",
        "collaboratorIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "tasks": {
          "completed": 0,
          "total": 0
        },
        "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "revision": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "createdBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "updatedAt": "1970-01-01T00:00:00Z",
        "updatedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "dataAttributes": [
          {
            "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "value": "In Progress",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "archivedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "deletedBy": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Jane Doe",
          "avatarUrl": "http://example.com",
          "color": "string",
          "email": "user@example.com",
          "role": "admin",
          "isSuspended": true,
          "lastActiveAt": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "deletedAt": "1970-01-01T00:00:00Z",
          "invitedBy": {}
        },
        "deprecatedReason": "string",
        "preferences": {
          "headingPrefix": "none"
        }
      }
    ]
  },
  "pagination": {
    "offset": 0,
    "limit": 25
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-document-memberships-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-document-memberships-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» memberships|[[Membership](#schemamembership)]|false|none|none|
|» documents|[[Document](#schemadocument)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a document membership

<a id="opIduserMembershipsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/userMemberships.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string"
  }'
```

`POST /userMemberships.update`

Update the authenticated user's membership of a shared document, used to reorder documents in the sidebar.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string"
}
```

<h3 id="update-a-document-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the membership.|
|» index|body|string|true|The fractional index to move the document to in the sidebar.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "permission": "read",
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": "string"
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-document-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-document-membership-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Membership](#schemamembership)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-users">Users</h1>

`Users` represent an individual with access to the knowledge base. Users
can be created automatically when signing in with SSO or when a user is
invited via email.


## Invite users

<a id="opIdusersInvite"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "invites": [
      {
        "name": "string",
        "email": "string",
        "role": "admin"
      }
    ],
    "suppressEmail": true
  }'
```

`POST /users.invite`

Send email invitations to one or more users to join the workspace. Invitations include a link to create an account and join the workspace.

> Body parameter

```json
{
  "invites": [
    {
      "name": "string",
      "email": "string",
      "role": "admin"
    }
  ],
  "suppressEmail": true
}
```

<h3 id="invite-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» invites|body|[[Invite](#schemainvite)]|true|none|
|» suppressEmail|body|boolean|false|If true, the invitation emails will not be sent to the invited users. Defaults to false.|

> Example responses

> 200 Response

```json
{
  "data": {
    "sent": [
      {
        "name": "string",
        "email": "string",
        "role": "admin"
      }
    ],
    "users": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    ]
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="invite-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="invite-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» sent|[[Invite](#schemainvite)]|false|none|none|
|» users|[[User](#schemauser)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Retrieve a user

<a id="opIdusersInfo"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /users.info`

Retrieve the details of a user by their unique identifier, including their name, email, avatar, and role within the workspace.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="retrieve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="retrieve-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## List all users

<a id="opIdusersList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "query": "jane",
    "filters": [
      {
        "field": "id",
        "operator": "eq",
        "value": null
      }
    ],
    "emails": [
      "jane.crandall@mail.com",
      "prudence.crandall@mail.com"
    ],
    "filter": "all",
    "role": {}
  }'
```

`POST /users.list`

List and filter all the users in the workspace

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "query": "jane",
  "filters": [
    {
      "field": "id",
      "operator": "eq",
      "value": null
    }
  ],
  "emails": [
    "jane.crandall@mail.com",
    "prudence.crandall@mail.com"
  ],
  "filter": "all",
  "role": {}
}
```

<h3 id="list-all-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» query|body|string|false|none|
|» filters|body|[[UserFilter](#schemauserfilter)]|false|Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `emails`, `role` or `filter` parameters.|
|» emails|body|[string]|false|**Deprecated.** Array of emails. Deprecated – prefer the `filters` parameter with an `email` field and the `in` operator.|
|» filter|body|string|false|**Deprecated.** The status to filter by. Deprecated – prefer the `filters` parameter (for example filter on `suspendedAt` or `lastActiveAt`).|
|» role|body|object|false|**Deprecated.** The role to filter by. Deprecated – prefer the `filters` parameter with a `role` field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|
|» filter|all|
|» filter|invited|
|» filter|active|
|» filter|suspended|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    }
  ],
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a user

<a id="opIdusersUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "language": "string",
    "avatarUrl": "http://example.com",
    "preferences": {
      "sidebarSectionOrder": [
        "starred"
      ]
    }
  }'
```

`POST /users.update`

Update a users name or avatar. If no `id` is passed then the user associated with the authentication will be updated by default.

> Body parameter

```json
{
  "name": "string",
  "language": "string",
  "avatarUrl": "http://example.com",
  "preferences": {
    "sidebarSectionOrder": [
      "starred"
    ]
  }
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|none|
|» language|body|string(BCP47)|false|none|
|» avatarUrl|body|string(uri)|false|none|
|» preferences|body|object|false|User-level preference flags. Only the fields supplied are updated; existing values for other preferences are preserved.|
|» » sidebarSectionOrder|body|[string]|false|The order in which the top-level sections appear in the sidebar of the app UI.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » sidebarSectionOrder|starred|
|» » sidebarSectionOrder|shared|
|» » sidebarSectionOrder|collections|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Change a users role

<a id="opIdusersUpdateRole"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.update_role \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "role": "admin"
  }'
```

`POST /users.update_role`

Change the role of a user, only available to admin authorization.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "role": "admin"
}
```

<h3 id="change-a-users-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the user.|
|» role|body|[UserRole](#schemauserrole)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|admin|
|» role|member|
|» role|viewer|
|» role|guest|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="change-a-users-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="change-a-users-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Suspend a user

<a id="opIdusersSuspend"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.suspend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /users.suspend`

Suspending a user prevents the user from signing in. Users that are suspended are also not counted against billing totals in the hosted version.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="suspend-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="suspend-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="suspend-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Activate a user

<a id="opIdusersActivate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /users.activate`

Activating a previously suspended user allows them to signin again. Users that are activated will cause billing totals to be re-calculated in the hosted version.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="activate-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "policies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "abilities": {
        "read": true,
        "update": true,
        "delete": false
      }
    }
  ]
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="activate-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="activate-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|
|policies|[[Policy](#schemapolicy)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a user

<a id="opIdusersDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /users.delete`

Deleting a user removes the object entirely. In almost every circumstance it is preferable to suspend a user, as a deleted user can be recreated by signing in with SSO again.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the user.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Resend a user invite

<a id="opIdusersResendInvite"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.resendInvite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /users.resendInvite`

Resend the invitation email to a user who has been invited but has not yet signed in. Only applies to users in the invited state.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="resend-a-user-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Identifier for the invited user.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="resend-a-user-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="resend-a-user-invite-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Subscribe to a notification type

<a id="opIdusersNotificationsSubscribe"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.notificationsSubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "eventType": "documents.publish"
  }'
```

`POST /users.notificationsSubscribe`

Enable a specific type of notification for the authenticated user. This controls which events the user receives email and in-app notifications for.

> Body parameter

```json
{
  "eventType": "documents.publish"
}
```

<h3 id="subscribe-to-a-notification-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» eventType|body|string|false|The notification event type to subscribe to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» eventType|documents.publish|
|» eventType|documents.update|
|» eventType|documents.add_user|
|» eventType|collections.add_user|
|» eventType|revisions.create|
|» eventType|collections.create|
|» eventType|comments.create|
|» eventType|comments.resolve|
|» eventType|reactions.create|
|» eventType|documents.mentioned|
|» eventType|comments.mentioned|
|» eventType|documents.group_mentioned|
|» eventType|comments.group_mentioned|
|» eventType|emails.invite_accepted|
|» eventType|emails.onboarding|
|» eventType|emails.features|
|» eventType|emails.export_completed|
|» eventType|access_requests.create|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="subscribe-to-a-notification-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="subscribe-to-a-notification-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Unsubscribe from a notification type

<a id="opIdusersNotificationsUnsubscribe"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/users.notificationsUnsubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "eventType": "documents.publish"
  }'
```

`POST /users.notificationsUnsubscribe`

Disable a specific type of notification for the authenticated user.

> Body parameter

```json
{
  "eventType": "documents.publish"
}
```

<h3 id="unsubscribe-from-a-notification-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» eventType|body|string|false|The notification event type to unsubscribe from.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» eventType|documents.publish|
|» eventType|documents.update|
|» eventType|documents.add_user|
|» eventType|collections.add_user|
|» eventType|revisions.create|
|» eventType|collections.create|
|» eventType|comments.create|
|» eventType|comments.resolve|
|» eventType|reactions.create|
|» eventType|documents.mentioned|
|» eventType|comments.mentioned|
|» eventType|documents.group_mentioned|
|» eventType|comments.group_mentioned|
|» eventType|emails.invite_accepted|
|» eventType|emails.onboarding|
|» eventType|emails.features|
|» eventType|emails.export_completed|
|» eventType|access_requests.create|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="unsubscribe-from-a-notification-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="unsubscribe-from-a-notification-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-views">Views</h1>

`Views` represent a compressed record of an individual users views of a
document. Individual views are not recorded but a first, last and total
is kept per user.


## List all views

<a id="opIdviewsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/views.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "includeSuspended": false
  }'
```

`POST /views.list`

List all users that have viewed a document and the overall view count.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "includeSuspended": false
}
```

<h3 id="list-all-views-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» documentId|body|string(uuid)|true|The document ID to retrieve views for|
|» includeSuspended|body|boolean|false|Whether to include views from suspended users|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "firstViewedAt": "1970-01-01T00:00:00Z",
      "lastViewedAt": "1970-01-01T00:00:00Z",
      "count": 22,
      "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      }
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-views-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-views-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[View](#schemaview)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

<h1 id="outline-api-webhooksubscriptions">WebhookSubscriptions</h1>

`WebhookSubscriptions` represent subscriptions that send HTTP requests to
a configured URL when matching events occur. Only workspace administrators
can manage webhook subscriptions.


## List all webhook subscriptions

<a id="opIdwebhookSubscriptionsList"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/webhookSubscriptions.list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 0,
    "limit": 25,
    "sort": "updatedAt",
    "direction": "DESC",
    "query": "string"
  }'
```

`POST /webhookSubscriptions.list`

List all webhook subscriptions for the workspace. Only workspace administrators can access this endpoint.

> Body parameter

```json
{
  "offset": 0,
  "limit": 25,
  "sort": "updatedAt",
  "direction": "DESC",
  "query": "string"
}
```

<h3 id="list-all-webhook-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» offset|body|number|false|none|
|» limit|body|number|false|none|
|» sort|body|string|false|none|
|» direction|body|string|false|none|
|» query|body|string|false|Search query to filter webhook subscriptions by name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|ASC|
|» direction|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Production webhook",
      "url": "https://example.com/webhooks/outline",
      "secret": "ol_whs_1234567890abcdef",
      "events": [
        "documents.create",
        "documents.update"
      ],
      "enabled": true,
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Jane Doe",
        "avatarUrl": "http://example.com",
        "color": "string",
        "email": "user@example.com",
        "role": "admin",
        "isSuspended": true,
        "lastActiveAt": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": "1970-01-01T00:00:00Z",
        "invitedBy": {}
      },
      "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 25
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="list-all-webhook-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="list-all-webhook-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WebhookSubscription](#schemawebhooksubscription)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Create a webhook subscription

<a id="opIdwebhookSubscriptionsCreate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/webhookSubscriptions.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Production webhook",
    "url": "https://example.com/webhooks/outline",
    "secret": "ol_whs_1234567890abcdef",
    "events": [
      "documents.create",
      "documents.update"
    ]
  }'
```

`POST /webhookSubscriptions.create`

Create a webhook subscription for the workspace. Only workspace administrators can access this endpoint.

> Body parameter

```json
{
  "name": "Production webhook",
  "url": "https://example.com/webhooks/outline",
  "secret": "ol_whs_1234567890abcdef",
  "events": [
    "documents.create",
    "documents.update"
  ]
}
```

<h3 id="create-a-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|A descriptive name for the webhook subscription.|
|» url|body|string(uri)|true|The URL that receives webhook requests. Cloud-hosted workspaces require an HTTPS URL.|
|» secret|body|string \| null|false|An optional secret used to sign webhook requests.|
|» events|body|[string]|true|Event names or namespaces that trigger the webhook. Use `*` to subscribe to all events.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Production webhook",
    "url": "https://example.com/webhooks/outline",
    "secret": "ol_whs_1234567890abcdef",
    "events": [
      "documents.create",
      "documents.update"
    ],
    "enabled": true,
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="create-a-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="create-a-webhook-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[WebhookSubscription](#schemawebhooksubscription)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Update a webhook subscription

<a id="opIdwebhookSubscriptionsUpdate"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/webhookSubscriptions.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Production webhook",
    "url": "https://example.com/webhooks/outline",
    "secret": "ol_whs_1234567890abcdef",
    "events": [
      "documents.create",
      "documents.update"
    ]
  }'
```

`POST /webhookSubscriptions.update`

Update an existing webhook subscription. Updating a disabled subscription enables it again. Only workspace administrators can access this endpoint.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Production webhook",
  "url": "https://example.com/webhooks/outline",
  "secret": "ol_whs_1234567890abcdef",
  "events": [
    "documents.create",
    "documents.update"
  ]
}
```

<h3 id="update-a-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the webhook subscription.|
|» name|body|string|true|A descriptive name for the webhook subscription.|
|» url|body|string(uri)|true|The URL that receives webhook requests. Cloud-hosted workspaces require an HTTPS URL.|
|» secret|body|string \| null|false|An optional secret used to sign webhook requests.|
|» events|body|[string]|true|Event names or namespaces that trigger the webhook. Use `*` to subscribe to all events.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Production webhook",
    "url": "https://example.com/webhooks/outline",
    "secret": "ol_whs_1234567890abcdef",
    "events": [
      "documents.create",
      "documents.update"
    ],
    "enabled": true,
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    },
    "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="update-a-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="update-a-webhook-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[WebhookSubscription](#schemawebhooksubscription)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

## Delete a webhook subscription

<a id="opIdwebhookSubscriptionsDelete"></a>

> Code samples

```bash
curl https://app.getoutline.com/api/webhookSubscriptions.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /webhookSubscriptions.delete`

Delete a webhook subscription. Only workspace administrators can access this endpoint.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|true|Unique identifier for the webhook subscription.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 401 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 403 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 404 Response

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

> 429 Response

```json
{
  "ok": false,
  "error": "rate_limit_exceeded",
  "status": 429
}
```

<h3 id="delete-a-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request failed one or more validations.|[Error](#schemaerror)|
|401|Unauthorized|The API key is missing or otherwise invalid.|[Error](#schemaerror)|
|403|Forbidden|The current API key is not authorized to perform this action.|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found.|[Error](#schemaerror)|
|429|Too Many Requests|The request was rate limited.|Inline|

<h3 id="delete-a-webhook-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|status|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds in the future to retry the request, if rate limited.|
|429|RateLimit-Limit|integer||The maximum requests available in the current duration.|
|429|RateLimit-Remaining|integer||How many requests are left in the current duration.|
|429|RateLimit-Reset|string||Timestamp in the future the duration will reset.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, OAuth2 ( Scopes: read write )
</aside>

# Schemas

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"read"
```

<h2 id="tocS_TextEditMode">TextEditMode</h2>
<!-- backwards compatibility -->
<a id="schematexteditmode"></a>
<a id="schema_TextEditMode"></a>
<a id="tocStexteditmode"></a>
<a id="tocstexteditmode"></a>

```json
"append"
```

The editing mode for text updates to a document. When set to `patch`, the `findText` parameter is required and the existing occurrence of `findText` will be replaced with the value of `text`.

<h2 id="tocS_AccessRequest">AccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccessrequest"></a>
<a id="schema_AccessRequest"></a>
<a id="tocSaccessrequest"></a>
<a id="tocsaccessrequest"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "pending",
  "responderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "responder": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "respondedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|documentId|string(uuid)|false|none|Identifier for the document this request is for.|
|userId|string(uuid)|false|none|Identifier for the user that made the request.|
|user|[User](#schemauser)|false|none|none|
|teamId|string(uuid)|false|none|Identifier for the workspace the request belongs to.|
|status|string|false|none|The current status of the access request.|
|responderId|string(uuid) \| null|false|none|Identifier for the user that responded to the request, if any.|
|responder|[User](#schemauser)|false|none|none|
|respondedAt|string(date-time) \| null|false|none|The date and time the request was responded to, if any.|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|
|updatedAt|string(date-time)|false|read-only|The date and time that this object was last changed|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|approved|
|status|dismissed|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "contentType": "image/png",
  "size": "string",
  "name": "string",
  "url": "http://example.com",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|none|
|size|string|false|none|The size of the attachment in bytes. Returned as a string as the value may exceed the safe integer range.|
|name|string|false|none|none|
|url|string(uri)|false|none|none|
|documentId|string(uuid) \| null|false|none|Identifier for the associated document, if any.|
|userId|string(uuid)|false|none|Identifier for the user that created the attachment.|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "offset": 0,
  "limit": 25
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|number|false|none|none|
|limit|number|false|none|none|

<h2 id="tocS_Sorting">Sorting</h2>
<!-- backwards compatibility -->
<a id="schemasorting"></a>
<a id="schema_Sorting"></a>
<a id="tocSsorting"></a>
<a id="tocssorting"></a>

```json
{
  "sort": "updatedAt",
  "direction": "DESC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sort|string|false|none|none|
|direction|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|ASC|
|direction|DESC|

<h2 id="tocS_DocumentFilter">DocumentFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfilter"></a>
<a id="schema_DocumentFilter"></a>
<a id="tocSdocumentfilter"></a>
<a id="tocsdocumentfilter"></a>

```json
{
  "field": "createdAt",
  "operator": "eq",
  "value": null
}
```

A single filter node, either a leaf condition matching a document field or a group combining nested filters with a logical operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|A condition that compares a document field against a value.|
|field|string|true|none|Name of the document field to filter on.|
|operator|string|true|none|Comparison operator to apply. Note that some fields only accept a subset of operators – for example `createdById`, `userId` and `documentId` only support `eq` and `in`.|
|value|object|false|none|Value to compare against. May be a string, number, boolean or array of these depending on the field and operator. Date fields accept an ISO 8601 date or an ISO 8601 duration (relative to now). Omit for `isNull` and `isNotNull`.|
|*oneOf*|object|false|none|A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.|
|operator|string|true|none|none|
|filters|[[DocumentFilter](#schemadocumentfilter)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|createdAt|
|field|updatedAt|
|field|publishedAt|
|field|archivedAt|
|field|title|
|field|templateId|
|field|collectionId|
|field|createdById|
|field|userId|
|field|documentId|
|field|parentDocumentId|
|operator|eq|
|operator|neq|
|operator|lt|
|operator|lte|
|operator|gt|
|operator|gte|
|operator|contains|
|operator|startsWith|
|operator|endsWith|
|operator|containsStrict|
|operator|startsWithStrict|
|operator|endsWithStrict|
|operator|in|
|operator|notIn|
|operator|isNull|
|operator|isNotNull|
|operator|AND|
|operator|OR|

<h2 id="tocS_DocumentsDeletedFilter">DocumentsDeletedFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsdeletedfilter"></a>
<a id="schema_DocumentsDeletedFilter"></a>
<a id="tocSdocumentsdeletedfilter"></a>
<a id="tocsdocumentsdeletedfilter"></a>

```json
{
  "field": "deletedAt",
  "operator": "eq",
  "value": null
}
```

A single filter node for `/documents.deleted`, either a leaf condition matching a supported field or a group combining nested filters with a logical operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|A condition that compares a deleted-document field against a value.|
|field|string|true|none|Name of the field to filter on.|
|operator|string|true|none|Comparison operator to apply. `deletedById` only supports `eq` and `in`.|
|value|object|false|none|Value to compare against. `deletedAt` accepts an ISO 8601 date or an ISO 8601 duration (relative to now); `deletedById` accepts a user UUID (or an array of UUIDs with `in`/`notIn`). Omit for `isNull` and `isNotNull`.|
|*oneOf*|object|false|none|A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.|
|operator|string|true|none|none|
|filters|[[DocumentsDeletedFilter](#schemadocumentsdeletedfilter)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|deletedAt|
|field|deletedById|
|operator|eq|
|operator|neq|
|operator|lt|
|operator|lte|
|operator|gt|
|operator|gte|
|operator|in|
|operator|notIn|
|operator|isNull|
|operator|isNotNull|
|operator|AND|
|operator|OR|

<h2 id="tocS_CollectionFilter">CollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemacollectionfilter"></a>
<a id="schema_CollectionFilter"></a>
<a id="tocScollectionfilter"></a>
<a id="tocscollectionfilter"></a>

```json
{
  "field": "name",
  "operator": "eq",
  "value": null
}
```

A single filter node for `/collections.list`, either a leaf condition matching a collection field or a group combining nested filters with a logical operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|A condition that compares a collection field against a value.|
|field|string|true|none|Name of the collection field to filter on.|
|operator|string|true|none|Comparison operator to apply. Note that some fields only accept a subset of operators – for example `permission` only supports `eq`, `neq`, `in`, `notIn`, `isNull` and `isNotNull`.|
|value|object|false|none|Value to compare against. May be a string, boolean or array of these depending on the field and operator. Date fields accept an ISO 8601 date or an ISO 8601 duration (relative to now). `permission` accepts a `Permission` enum value (or an array with `in`/`notIn`). Omit for `isNull` and `isNotNull`.|
|*oneOf*|object|false|none|A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.|
|operator|string|true|none|none|
|filters|[[CollectionFilter](#schemacollectionfilter)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|name|
|field|createdAt|
|field|updatedAt|
|field|archivedAt|
|field|createdById|
|field|permission|
|operator|eq|
|operator|neq|
|operator|lt|
|operator|lte|
|operator|gt|
|operator|gte|
|operator|contains|
|operator|startsWith|
|operator|endsWith|
|operator|containsStrict|
|operator|startsWithStrict|
|operator|endsWithStrict|
|operator|in|
|operator|notIn|
|operator|isNull|
|operator|isNotNull|
|operator|AND|
|operator|OR|

<h2 id="tocS_UserFilter">UserFilter</h2>
<!-- backwards compatibility -->
<a id="schemauserfilter"></a>
<a id="schema_UserFilter"></a>
<a id="tocSuserfilter"></a>
<a id="tocsuserfilter"></a>

```json
{
  "field": "id",
  "operator": "eq",
  "value": null
}
```

A single filter node for `/users.list`, either a leaf condition matching a user field or a group combining nested filters with a logical operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|A condition that compares a user field against a value.|
|field|string|true|none|Name of the user field to filter on.|
|operator|string|true|none|Comparison operator to apply. Note that some fields only accept a subset of operators – `id` and `role` only support `eq`, `neq`, `in` and `notIn`.|
|value|object|false|none|Value to compare against. May be a string, number, boolean or array of these depending on the field and operator. Date fields accept an ISO 8601 date or an ISO 8601 duration (relative to now). `role` accepts one of the values in `UserRole`. Omit for `isNull` and `isNotNull`.|
|*oneOf*|object|false|none|A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.|
|operator|string|true|none|none|
|filters|[[UserFilter](#schemauserfilter)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|id|
|field|name|
|field|email|
|field|role|
|field|createdAt|
|field|updatedAt|
|field|lastActiveAt|
|field|suspendedAt|
|operator|eq|
|operator|neq|
|operator|lt|
|operator|lte|
|operator|gt|
|operator|gte|
|operator|contains|
|operator|startsWith|
|operator|endsWith|
|operator|containsStrict|
|operator|startsWithStrict|
|operator|endsWithStrict|
|operator|in|
|operator|notIn|
|operator|isNull|
|operator|isNotNull|
|operator|AND|
|operator|OR|

<h2 id="tocS_NavigationNode">NavigationNode</h2>
<!-- backwards compatibility -->
<a id="schemanavigationnode"></a>
<a id="schema_NavigationNode"></a>
<a id="tocSnavigationnode"></a>
<a id="tocsnavigationnode"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "title": "string",
  "url": "string",
  "children": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "title": "string",
      "url": "string",
      "children": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Unique identifier for the document.|
|title|string|false|none|none|
|url|string|false|none|none|
|children|[[NavigationNode](#schemanavigationnode)]|false|none|none|

<h2 id="tocS_Auth">Auth</h2>
<!-- backwards compatibility -->
<a id="schemaauth"></a>
<a id="schema_Auth"></a>
<a id="tocSauth"></a>
<a id="tocsauth"></a>

```json
{
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "team": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "description": "string",
    "avatarUrl": "http://example.com",
    "sharing": true,
    "defaultCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "defaultUserRole": "admin",
    "memberCollectionCreate": true,
    "memberTeamCreate": true,
    "documentEmbeds": true,
    "inviteRequired": true,
    "allowedDomains": [
      "string"
    ],
    "guestSignin": true,
    "subdomain": "string",
    "domain": "string",
    "url": "http://example.com",
    "passkeysEnabled": true,
    "preferences": {},
    "guidanceMCP": "string",
    "plan": {},
    "entitlements": [
      "auditLog"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[User](#schemauser)|false|none|none|
|team|[Team](#schemateam)|false|none|none|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "url": "string",
  "urlId": "hDYep1TPAM",
  "name": "Human Resources",
  "description": "",
  "data": {},
  "sort": {
    "field": "string",
    "direction": "asc"
  },
  "index": "P",
  "color": "#123123",
  "icon": "string",
  "ownerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read",
  "templateManagement": "read",
  "sharing": false,
  "commenting": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z",
  "archivedAt": "1970-01-01T00:00:00Z",
  "archivedBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "deprecatedReason": "string",
  "sourceMetadata": {
    "externalId": "string",
    "externalName": "string",
    "createdByName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|url|string|false|read-only|The relative URL path at which the collection can be accessed.|
|urlId|string|false|read-only|A short unique identifier that can be used to identify the collection instead of the UUID.|
|name|string|false|none|The name of the collection.|
|description|string \| null|false|none|A description of the collection, may contain markdown formatting|
|data|object \| null|false|none|The collection description as rich-text JSON, when available.|
|sort|object|false|none|The sort of documents in the collection. Note that not all API responses respect this and it is left as a frontend concern to implement.|
|index|string \| null|false|none|The position of the collection in the sidebar|
|color|string \| null|false|none|A color representing the collection, this is used to help make collections more identifiable in the UI. It should be in HEX format including the #|
|icon|string \| null|false|none|A string that represents an icon in the outline-icons package or an emoji|
|ownerId|string(uuid) \| null|false|read-only|The identifier of the user who owns this collection when it is a personal collection. This is `null` for regular shared collections.|
|permission|[Permission](#schemapermission)|false|none|none|
|templateManagement|[Permission](#schemapermission)|false|none|none|
|sharing|boolean|false|none|Whether public document sharing is enabled in this collection|
|commenting|boolean \| null|false|none|Whether commenting is enabled in this collection|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|
|updatedAt|string(date-time)|false|read-only|The date and time that this object was last changed|
|deletedAt|string(date-time) \| null|false|read-only|The date and time that this object was deleted|
|archivedAt|string(date-time) \| null|false|read-only|The date and time that this object was archived|
|archivedBy|[User](#schemauser)|false|none|none|
|deprecatedReason|string \| null|false|read-only|The reason the collection was archived or deleted, if one was provided.|
|sourceMetadata|object \| null|false|none|Metadata about the external source this collection was imported from, if any.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|read|
|permission|read_write|
|templateManagement|read|
|templateManagement|read_write|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "data": {},
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentCommentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z",
  "resolvedAt": "1970-01-01T00:00:00Z",
  "resolvedBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "resolvedById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reactions": [
    {}
  ],
  "anchorText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|data|object|false|none|The editor data representing this comment.|
|documentId|string(uuid)|false|none|Identifier for the document this is related to.|
|parentCommentId|string(uuid)|false|none|Identifier for the comment this is a child of, if any.|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|
|createdBy|[User](#schemauser)|false|none|none|
|createdById|string(uuid)|false|read-only|Identifier for the user who created this comment.|
|updatedAt|string(date-time)|false|read-only|The date and time that this object was last changed|
|resolvedAt|string(date-time) \| null|false|read-only|The date and time that this comment was resolved, if it has been.|
|resolvedBy|object|false|none|none|
|resolvedById|string(uuid) \| null|false|read-only|Identifier for the user who resolved this comment, if any.|
|reactions|[object]|false|read-only|List of emoji reactions on this comment.|
|anchorText|string|false|read-only|The document text that the comment is anchored to, only included if includeAnchorText=true.|

<h2 id="tocS_DataAttribute">DataAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadataattribute"></a>
<a id="schema_DataAttribute"></a>
<a id="tocSdataattribute"></a>
<a id="tocsdataattribute"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Status",
  "description": "The current status of the document.",
  "dataType": "string",
  "options": {
    "icon": "string",
    "options": [
      {
        "value": "string",
        "color": "string"
      }
    ]
  },
  "pinned": false,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|name|string|false|none|The name of this data attribute.|
|description|string|false|none|A description of the data attribute.|
|dataType|[DataAttributeDataType](#schemadataattributedatatype)|false|none|The data type of the attribute value.|
|options|[DataAttributeOptions](#schemadataattributeoptions)|false|none|Additional options for certain data attribute types.|
|pinned|boolean|false|none|Whether this data attribute is pinned to the top of documents.|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|
|updatedAt|string(date-time)|false|read-only|The date and time that this object was last changed|
|deletedAt|string(date-time) \| null|false|read-only|The date and time that this object was deleted|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|string|
|dataType|number|
|dataType|boolean|
|dataType|list|

<h2 id="tocS_DataAttributeDataType">DataAttributeDataType</h2>
<!-- backwards compatibility -->
<a id="schemadataattributedatatype"></a>
<a id="schema_DataAttributeDataType"></a>
<a id="tocSdataattributedatatype"></a>
<a id="tocsdataattributedatatype"></a>

```json
"string"
```

The data type of the attribute value.

<h2 id="tocS_DataAttributeOptions">DataAttributeOptions</h2>
<!-- backwards compatibility -->
<a id="schemadataattributeoptions"></a>
<a id="schema_DataAttributeOptions"></a>
<a id="tocSdataattributeoptions"></a>
<a id="tocsdataattributeoptions"></a>

```json
{
  "icon": "string",
  "options": [
    {
      "value": "string",
      "color": "string"
    }
  ]
}
```

Additional options for certain data attribute types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon|string|false|none|An icon representing the data attribute from the outline-icons package.|
|options|[object]|false|none|Valid options for list data type.|

<h2 id="tocS_DocumentDataAttribute">DocumentDataAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdataattribute"></a>
<a id="schema_DocumentDataAttribute"></a>
<a id="tocSdocumentdataattribute"></a>
<a id="tocsdocumentdataattribute"></a>

```json
{
  "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": "In Progress",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataAttributeId|string(uuid)|false|none|Unique identifier for the associated data attribute.|
|value|string \| boolean \| number|false|none|The value of the data attribute for this document.|
|updatedAt|string(date-time)|false|read-only|The date and time that this object attribute was last changed|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentDocumentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "title": "Welcome to Acme Inc",
  "fullWidth": true,
  "icon": "🎉",
  "color": "string",
  "text": "…",
  "data": {},
  "url": "string",
  "urlId": "hDYep1TPAM",
  "collaboratorIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "tasks": {
    "completed": 0,
    "total": 0
  },
  "templateId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "revision": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "updatedBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "publishedAt": "1970-01-01T00:00:00Z",
  "dataAttributes": [
    {
      "dataAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": "In Progress",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "archivedAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z",
  "deletedBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "deprecatedReason": "string",
  "preferences": {
    "headingPrefix": "none"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|collectionId|string(uuid) \| null|false|none|Identifier for the associated collection.|
|parentDocumentId|string(uuid) \| null|false|none|Identifier for the document this is a child of, if any.|
|title|string|false|none|The title of the document.|
|fullWidth|boolean|false|none|Whether this document should be displayed in a full-width view.|
|icon|string \| null|false|none|An emoji or icon associated with the document.|
|color|string \| null|false|none|The color of the document icon in hex format.|
|text|string|false|none|The text content of the document, contains markdown formatting|
|data|object \| null|false|none|The body of the document as a Prosemirror document, returned in place of text when requested.|
|url|string|false|read-only|A URL path to access the document.|
|urlId|string|false|none|A short unique ID that can be used to identify the document as an alternative to the UUID|
|collaboratorIds|[string(uuid)]|false|none|Identifiers of users who have edited the document.|
|tasks|object|false|none|Task completion counts for the document.|
|templateId|string(uuid)|false|none|Unique identifier for the template this document was created from, if any|
|revision|number|false|read-only|A number that is auto incrementing with every revision of the document that is saved|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|
|createdBy|[User](#schemauser)|false|none|none|
|updatedAt|string(date-time)|false|read-only|The date and time that this object was last changed|
|updatedBy|[User](#schemauser)|false|none|none|
|publishedAt|string(date-time) \| null|false|read-only|The date and time that this object was published|
|dataAttributes|[[DocumentDataAttribute](#schemadocumentdataattribute)]|false|none|none|
|archivedAt|string(date-time) \| null|false|read-only|The date and time that this object was archived|
|deletedAt|string(date-time) \| null|false|read-only|The date and time that this object was deleted|
|deletedBy|object \| null|false|none|The user who deleted this document, if any. Only present on deleted documents.|
|deprecatedReason|string \| null|false|read-only|The reason the document was archived or deleted, if one was provided.|
|preferences|object \| null|false|none|Document-level display preferences.|

<h2 id="tocS_DocumentInsight">DocumentInsight</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinsight"></a>
<a id="schema_DocumentInsight"></a>
<a id="tocSdocumentinsight"></a>
<a id="tocsdocumentinsight"></a>

```json
{
  "date": "1970-01-01",
  "period": "day",
  "viewCount": 0,
  "viewerCount": 0,
  "commentCount": 0,
  "reactionCount": 0,
  "revisionCount": 0,
  "editorCount": 0
}
```

A rollup of activity counts for a document over a daily or weekly period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|The UTC day the rollup represents. For weekly rollups this is the first day (Monday) of the week.|
|period|string|false|none|The length of time the rollup covers. Daily rollups are stored for recent activity, older rollups are aggregated into weekly buckets.|
|viewCount|integer|false|none|Total number of document views on this day.|
|viewerCount|integer|false|none|Number of unique viewers on this day.|
|commentCount|integer|false|none|Total comments made on this day.|
|reactionCount|integer|false|none|Total reactions added on this day.|
|revisionCount|integer|false|none|Number of document revisions on this day.|
|editorCount|integer|false|none|Number of unique editors on this day.|

#### Enumerated Values

|Property|Value|
|---|---|
|period|day|
|period|week|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "documents.create",
  "modelId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "actorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "authType": "api",
  "actorIpAddress": "60.169.88.100",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "name": "Equipment list"
  },
  "changes": {},
  "actor": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|name|string|false|read-only|none|
|modelId|string(uuid)|false|read-only|Identifier for the object this event is associated with when it is not one of document, collection, or user.|
|userId|string(uuid)|false|read-only|Identifier for the user associated with the event, if any.|
|actorId|string(uuid)|false|read-only|The user that performed the action.|
|authType|string \| null|false|read-only|The authentication method used to perform the action.|
|actorIpAddress|string|false|read-only|The ip address the action was performed from. This field is only returned when the `auditLog` boolean is true.|
|collectionId|string(uuid)|false|read-only|Identifier for the associated collection, if any|
|documentId|string(uuid)|false|read-only|Identifier for the associated document, if any|
|createdAt|string(date-time)|false|read-only|The date and time that this event was created|
|data|object|false|read-only|Additional unstructured data associated with the event|
|changes|object \| null|false|read-only|The set of changes made by this event. This field is only returned when the `auditLog` boolean is true.|
|actor|[User](#schemauser)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authType|api|
|authType|app|
|authType|mcp|
|authType|oauth|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "ok": false,
  "error": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|error|string|false|none|none|
|message|string|false|none|none|
|status|number|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_FileOperation">FileOperation</h2>
<!-- backwards compatibility -->
<a id="schemafileoperation"></a>
<a id="schema_FileOperation"></a>
<a id="tocSfileoperation"></a>
<a id="tocsfileoperation"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "export",
  "format": "outline-markdown",
  "name": "string",
  "state": "complete",
  "error": "string",
  "size": "2048",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|type|string|false|read-only|The type of file operation.|
|format|string|false|read-only|The file format of the resulting file.|
|name|string|false|read-only|The name of the file operation, derived from the collection name, document title, or file name.|
|state|string|false|read-only|The state of the file operation.|
|error|string \| null|false|read-only|An error message if the file operation failed.|
|size|string|false|read-only|The size of the resulting file in bytes. Returned as a string as the value may exceed the safe integer range.|
|collectionId|string(uuid) \| null|false|read-only|Identifier for the associated collection, if the file operation is scoped to a single collection.|
|documentId|string(uuid) \| null|false|read-only|Identifier for the associated document, if the file operation is scoped to a single document.|
|user|[User](#schemauser)|false|none|none|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|
|updatedAt|string(date-time)|false|read-only|The date and time that this object was last changed|

#### Enumerated Values

|Property|Value|
|---|---|
|type|import|
|type|export|
|state|creating|
|state|uploading|
|state|complete|
|state|error|
|state|expired|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Engineering",
  "description": "string",
  "icon": "string",
  "color": "string",
  "externalId": "string",
  "disableMentions": true,
  "externalGroup": {},
  "memberCount": 11,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|name|string|false|none|The name of this group.|
|description|string \| null|false|none|A short description of this group.|
|icon|string \| null|false|none|An icon or emoji to use as the group icon.|
|color|string \| null|false|none|The color of the group icon in hex format.|
|externalId|string \| null|false|none|An identifier for this group in an external system, if linked.|
|disableMentions|boolean|false|none|Whether mentioning this group is disabled.|
|externalGroup|object \| null|false|none|Details of the linked external group, if any.|
|memberCount|number|false|read-only|The number of users that are members of the group|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|
|updatedAt|string(date-time)|false|read-only|The date and time that this object was last changed|

<h2 id="tocS_OAuthClient">OAuthClient</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclient"></a>
<a id="schema_OAuthClient"></a>
<a id="tocSoauthclient"></a>
<a id="tocsoauthclient"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Acme Inc",
  "description": "Integrate Acme Inc's services into Outline.",
  "developerName": "Acme Inc",
  "developerUrl": "https://example.com",
  "avatarUrl": "string",
  "clientId": "2bquf8avrpdv31par42a",
  "clientSecret": "ol_sk_rapdv31...",
  "clientType": "public",
  "redirectUris": [
    "https://example.com/callback"
  ],
  "published": true,
  "lastActiveAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|name|string|false|none|The name of this OAuth client.|
|description|string \| null|false|none|A short description of this OAuth client.|
|developerName|string \| null|false|none|The name of the developer who created this OAuth client.|
|developerUrl|string \| null|false|none|The URL of the developer who created this OAuth client.|
|avatarUrl|string \| null|false|none|A URL pointing to an image representing the OAuth client.|
|clientId|string|false|read-only|The client ID for the OAuth client.|
|clientSecret|string|false|read-only|The client secret for the OAuth client. Only returned when the request is authenticated with a credential whose scope permits managing OAuth clients.|
|clientType|string|false|read-only|The type of the OAuth client.|
|redirectUris|[string]|false|none|The redirect URIs for the OAuth client.|
|published|boolean|false|none|Whether the OAuth client is available to other workspaces.|
|lastActiveAt|string(date-time) \| null|false|read-only|Date and time when this OAuth client was last used.|
|createdAt|string(date-time)|false|read-only|Date and time when this OAuth client was created|
|updatedAt|string(date-time)|false|read-only|Date and time when this OAuth client was updated|

#### Enumerated Values

|Property|Value|
|---|---|
|clientType|public|
|clientType|confidential|

<h2 id="tocS_OAuthAuthentication">OAuthAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemaoauthauthentication"></a>
<a id="schema_OAuthAuthentication"></a>
<a id="tocSoauthauthentication"></a>
<a id="tocsoauthauthentication"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "oauthClientId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "oauthClient": {
    "name": "string",
    "description": "string",
    "developerName": "string",
    "developerUrl": "string",
    "avatarUrl": "string",
    "clientId": "string",
    "published": true
  },
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scope": [
    "string"
  ],
  "lastActiveAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|oauthClientId|string(uuid)|false|read-only|Identifier for the associated OAuthClient.|
|oauthClient|object|false|read-only|A reduced, public representation of the associated OAuth client.|
|userId|string(uuid)|false|read-only|Identifier for the associated User.|
|scope|[string]|false|none|none|
|lastActiveAt|string(date-time)|false|read-only|Date and time when this authentication was last used|
|createdAt|string(date-time)|false|read-only|Date and time when this authentication was created|

<h2 id="tocS_Revision">Revision</h2>
<!-- backwards compatibility -->
<a id="schemarevision"></a>
<a id="schema_Revision"></a>
<a id="tocSrevision"></a>
<a id="tocsrevision"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "title": "string",
  "name": "string",
  "icon": "string",
  "color": "string",
  "collaborators": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "deletedAt": "1970-01-01T00:00:00Z",
  "sourceMetadata": {
    "authType": "api"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|documentId|string(uuid)|false|read-only|Identifier for the associated document.|
|title|string|false|read-only|Title of the document.|
|name|string \| null|false|read-only|The name of the revision, if any.|
|icon|string \| null|false|read-only|An emoji or icon associated with the revision.|
|color|string \| null|false|read-only|The color of the revision icon in hex format.|
|collaborators|[[User](#schemauser)]|false|none|none|
|createdAt|string(date-time)|false|read-only|Date and time when this revision was created|
|createdBy|[User](#schemauser)|false|none|none|
|createdById|string(uuid)|false|read-only|Identifier for the user who created this revision.|
|deletedAt|string(date-time) \| null|false|read-only|Date and time when this revision was deleted, if applicable.|
|sourceMetadata|object \| null|false|read-only|Metadata about how the revision was created, if any.|

<h2 id="tocS_RevisionDetail">RevisionDetail</h2>
<!-- backwards compatibility -->
<a id="schemarevisiondetail"></a>
<a id="schema_RevisionDetail"></a>
<a id="tocSrevisiondetail"></a>
<a id="tocsrevisiondetail"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "title": "string",
  "name": "string",
  "icon": "string",
  "color": "string",
  "collaborators": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Jane Doe",
      "avatarUrl": "http://example.com",
      "color": "string",
      "email": "user@example.com",
      "role": "admin",
      "isSuspended": true,
      "lastActiveAt": "1970-01-01T00:00:00Z",
      "timezone": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": "1970-01-01T00:00:00Z",
      "invitedBy": {}
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "deletedAt": "1970-01-01T00:00:00Z",
  "sourceMetadata": {
    "authType": "api"
  },
  "data": {},
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|documentId|string(uuid)|false|read-only|Identifier for the associated document.|
|title|string|false|read-only|Title of the document.|
|name|string \| null|false|read-only|The name of the revision, if any.|
|icon|string \| null|false|read-only|An emoji or icon associated with the revision.|
|color|string \| null|false|read-only|The color of the revision icon in hex format.|
|collaborators|[[User](#schemauser)]|false|none|none|
|createdAt|string(date-time)|false|read-only|Date and time when this revision was created|
|createdBy|[User](#schemauser)|false|none|none|
|createdById|string(uuid)|false|read-only|Identifier for the user who created this revision.|
|deletedAt|string(date-time) \| null|false|read-only|Date and time when this revision was deleted, if applicable.|
|sourceMetadata|object \| null|false|read-only|Metadata about how the revision was created, if any.|
|data|object|false|read-only|The body of the revision as a Prosemirror document.|
|text|string|false|read-only|Body of the document, may contain markdown formatting|

<h2 id="tocS_Share">Share</h2>
<!-- backwards compatibility -->
<a id="schemashare"></a>
<a id="schema_Share"></a>
<a id="tocSshare"></a>
<a id="tocsshare"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentTitle": "React best practices",
  "documentUrl": "http://example.com",
  "sourceTitle": "string",
  "sourcePath": "string",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "urlId": "string",
  "url": "http://example.com",
  "domain": "string",
  "title": "string",
  "iconUrl": "http://example.com",
  "published": false,
  "includeChildDocuments": true,
  "allowSubscriptions": true,
  "allowIndexing": true,
  "showLastUpdated": true,
  "showTOC": true,
  "views": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "lastAccessedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|documentTitle|string|false|read-only|Title of the shared document.|
|documentUrl|string(uri)|false|read-only|URL of the original document.|
|sourceTitle|string|false|read-only|Title of the shared document or collection.|
|sourcePath|string|false|read-only|Path of the shared document or collection.|
|documentId|string(uuid) \| null|false|read-only|Identifier of the shared document, if any.|
|collectionId|string(uuid) \| null|false|read-only|Identifier of the shared collection, if any.|
|urlId|string \| null|false|read-only|Short URL identifier for the share, if set.|
|url|string(uri)|false|read-only|URL of the publicly shared document.|
|domain|string \| null|false|none|Custom domain the share is served on, if any.|
|title|string \| null|false|none|Override title displayed on the publicly shared page. If not set the source document or collection title is used.|
|iconUrl|string(uri) \| null|false|none|URL of an icon displayed on the publicly shared page, overriding the workspace branding.|
|published|boolean|false|none|If true the share can be loaded without a user account.|
|includeChildDocuments|boolean|false|none|If to also give permission to view documents nested beneath this one.|
|allowSubscriptions|boolean|false|none|Whether visitors to the public share can subscribe to receive email notifications when the document is updated. Requires SMTP to be configured on the workspace.|
|allowIndexing|boolean|false|none|Whether the shared page may be indexed by search engines.|
|showLastUpdated|boolean|false|none|Whether to show the last-updated time on the shared page.|
|showTOC|boolean|false|none|Whether to show a table of contents on the shared page.|
|views|number|false|read-only|The number of times the shared page has been viewed.|
|createdAt|string(date-time)|false|read-only|Date and time when this share was created|
|createdBy|object \| null|false|read-only|The user that created the share. Only returned to viewers with access to read the share; omitted from responses to unauthenticated viewers of a published share, and when the creating user has been deleted.|
|updatedAt|string(date-time)|false|read-only|Date and time when this share was edited|
|lastAccessedAt|string(date-time) \| null|false|read-only|Date and time when this share was last viewed. Only returned to workspace admins.|

<h2 id="tocS_Star">Star</h2>
<!-- backwards compatibility -->
<a id="schemastar"></a>
<a id="schema_Star"></a>
<a id="tocSstar"></a>
<a id="tocsstar"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|index|string|false|none|Index of the star in the list of stars.|
|documentId|string(uuid) \| null|false|read-only|Unique identifier for the starred document.|
|collectionId|string(uuid) \| null|false|read-only|Unique identifier for the starred collection.|
|createdAt|string(date-time)|false|read-only|Date and time when this star was created|
|updatedAt|string(date-time)|false|read-only|Date and time when this star was last changed|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "avatarUrl": "http://example.com",
  "sharing": true,
  "defaultCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultUserRole": "admin",
  "memberCollectionCreate": true,
  "memberTeamCreate": true,
  "documentEmbeds": true,
  "inviteRequired": true,
  "allowedDomains": [
    "string"
  ],
  "guestSignin": true,
  "subdomain": "string",
  "domain": "string",
  "url": "http://example.com",
  "passkeysEnabled": true,
  "preferences": {},
  "guidanceMCP": "string",
  "plan": {},
  "entitlements": [
    "auditLog"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|name|string|false|none|The name of this workspace, it is usually auto-generated when the first SSO connection is made but can be changed if necessary.|
|description|string \| null|false|none|A short description of this workspace.|
|avatarUrl|string(uri)|false|none|The URL for the image associated with this workspace, it will be displayed in the workspace switcher and in the top left of the knowledge base along with the name.|
|sharing|boolean|false|none|Whether this workspace has share links globally enabled. If this value is false then all sharing UI and APIs are disabled.|
|defaultCollectionId|string(uuid)|false|none|If set then the referenced collection is where users will be redirected to after signing in instead of the Home screen|
|defaultUserRole|[UserRole](#schemauserrole)|false|none|none|
|memberCollectionCreate|boolean|false|none|Whether members are allowed to create new collections. If false then only admins can create collections.|
|memberTeamCreate|boolean|false|none|Whether members are allowed to create new groups. If false then only admins can create groups.|
|documentEmbeds|boolean|false|none|Whether this workspace has embeds in documents globally enabled. It can be disabled to reduce potential data leakage to third parties.|
|inviteRequired|boolean|false|none|Whether an invite is required to join this workspace, if false users may join with a linked SSO provider.|
|allowedDomains|[string]|false|none|none|
|guestSignin|boolean|false|none|Whether this workspace has guest signin enabled. Guests can signin with an email address and are not required to have a Google Workspace/Slack SSO account once invited.|
|subdomain|string|false|none|Represents the subdomain at which this workspace's knowledge base can be accessed.|
|domain|string \| null|false|none|The custom domain configured for this workspace, if any.|
|url|string(uri)|false|read-only|The fully qualified URL at which this workspace's knowledge base can be accessed.|
|passkeysEnabled|boolean|false|none|Whether passkey authentication is enabled for this workspace.|
|preferences|object \| null|false|none|Workspace-level preference flags.|
|guidanceMCP|string \| null|false|none|Guidance text provided to MCP integrations.|
|plan|object|false|read-only|The plan that this workspace is currently on.|
|entitlements|[[PlanFeature](#schemaplanfeature)]|false|read-only|The set of plan-based features that this workspace is entitled to use, derived from its current plan.|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultUserRole|admin|
|defaultUserRole|member|
|defaultUserRole|viewer|
|defaultUserRole|guest|
|entitlements|auditLog|
|entitlements|advancedSecurity|
|entitlements|guests|
|entitlements|groupSync|
|entitlements|premiumIntegrations|
|entitlements|apiKeyManagement|
|entitlements|contentManagement|
|entitlements|aiAnswers|
|entitlements|customDomain|
|entitlements|saml|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Jane Doe",
  "avatarUrl": "http://example.com",
  "color": "string",
  "email": "user@example.com",
  "role": "admin",
  "isSuspended": true,
  "lastActiveAt": "1970-01-01T00:00:00Z",
  "timezone": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z",
  "invitedBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|name|string|false|none|The name of this user, it is migrated from Slack or Google Workspace when the SSO connection is made but can be changed if necessary.|
|avatarUrl|string(uri)|false|none|The URL for the image associated with this user, it will be displayed in the application UI and email notifications.|
|color|string|false|read-only|A color representing the user, used in the UI for avatars without an image.|
|email|string(email)|false|read-only|The email associated with this user, it is migrated from Slack or Google Workspace when the SSO connection is made but can be changed if necessary.|
|role|[UserRole](#schemauserrole)|false|none|none|
|isSuspended|boolean|false|read-only|Whether this user has been suspended.|
|lastActiveAt|string(date-time) \| null|false|read-only|The last time this user made an API request, this value is updated at most every 5 minutes.|
|timezone|string \| null|false|none|The timezone this user has registered.|
|createdAt|string(date-time)|false|read-only|The date and time that this user first signed in or was invited as a guest.|
|updatedAt|string(date-time)|false|read-only|The date and time that this user was last updated.|
|deletedAt|string(date-time) \| null|false|read-only|The date and time that this user was deleted, if applicable.|
|invitedBy|object \| null|false|read-only|The user that invited this user, if they were invited. Only included in responses to admin users.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|
|role|viewer|
|role|guest|

<h2 id="tocS_Invite">Invite</h2>
<!-- backwards compatibility -->
<a id="schemainvite"></a>
<a id="schema_Invite"></a>
<a id="tocSinvite"></a>
<a id="tocsinvite"></a>

```json
{
  "name": "string",
  "email": "string",
  "role": "admin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The full name of the user being invited|
|email|string|false|none|The email address to invite|
|role|[UserRole](#schemauserrole)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|
|role|viewer|
|role|guest|

<h2 id="tocS_UserRole">UserRole</h2>
<!-- backwards compatibility -->
<a id="schemauserrole"></a>
<a id="schema_UserRole"></a>
<a id="tocSuserrole"></a>
<a id="tocsuserrole"></a>

```json
"admin"
```

<h2 id="tocS_Plan">Plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
"community"
```

The subscription plan that a workspace is on.

<h2 id="tocS_PlanFeature">PlanFeature</h2>
<!-- backwards compatibility -->
<a id="schemaplanfeature"></a>
<a id="schema_PlanFeature"></a>
<a id="tocSplanfeature"></a>
<a id="tocsplanfeature"></a>

```json
"auditLog"
```

A feature that may be entitled to a workspace based on its plan.

<h2 id="tocS_CollectionStatus">CollectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemacollectionstatus"></a>
<a id="schema_CollectionStatus"></a>
<a id="tocScollectionstatus"></a>
<a id="tocscollectionstatus"></a>

```json
"archived"
```

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "id": "string",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read",
  "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|Unique identifier for the object.|
|userId|string(uuid)|false|read-only|Identifier for the associated user.|
|documentId|string(uuid) \| null|false|read-only|Identifier for the associated document, if any.|
|collectionId|string(uuid) \| null|false|read-only|Identifier for the associated collection, if any.|
|permission|[Permission](#schemapermission)|false|none|none|
|createdById|string(uuid)|false|read-only|Identifier for the user who created this membership.|
|sourceId|string(uuid) \| null|false|read-only|Identifier for the membership this one was inherited from, if any.|
|index|string \| null|false|none|The position of the collection in the user's sidebar.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|read|
|permission|read_write|

<h2 id="tocS_SearchResult">SearchResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchresult"></a>
<a id="schema_SearchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "query": "What is our hiring policy?",
  "answer": "Our hiring policy can be summarized as…",
  "source": "app",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|none|
|query|string|false|read-only|The user-provided search query|
|answer|string|false|read-only|An answer to the query, if possible|
|source|string|false|read-only|The source of the query|
|createdAt|string(date-time)|false|read-only|The date and time that this object was created|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|app|
|source|mcp|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "abilities": {
    "read": true,
    "update": true,
    "delete": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object this policy references.|
|abilities|object|false|none|The abilities that are allowed by this policy, if an array is returned then the individual ID's in the array represent the memberships that grant the ability.|

<h2 id="tocS_Ability">Ability</h2>
<!-- backwards compatibility -->
<a id="schemaability"></a>
<a id="schema_Ability"></a>
<a id="tocSability"></a>
<a id="tocsability"></a>

```json
true
```

A single permission granted by a policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[string]|false|none|none|
|*oneOf*|boolean|false|none|none|

<h2 id="tocS_GroupMembership">GroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembership"></a>
<a id="schema_GroupMembership"></a>
<a id="tocSgroupmembership"></a>
<a id="tocsgroupmembership"></a>

```json
{
  "id": "string",
  "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read",
  "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|Unique identifier for the object.|
|groupId|string(uuid)|false|read-only|Identifier for the associated group.|
|documentId|string(uuid) \| null|false|read-only|Identifier for the associated document, if any.|
|collectionId|string(uuid) \| null|false|read-only|Identifier for the associated collection, if any.|
|permission|[Permission](#schemapermission)|false|none|none|
|createdById|string(uuid) \| null|false|read-only|Identifier for the user who created this membership.|
|createdBy|[User](#schemauser)|false|none|none|
|createdAt|string(date-time)|false|read-only|The date and time that this membership was created.|
|sourceId|string(uuid) \| null|false|read-only|Identifier for the membership this one was inherited from, if any.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|read|
|permission|read_write|

<h2 id="tocS_CollectionGroupMembership">CollectionGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemacollectiongroupmembership"></a>
<a id="schema_CollectionGroupMembership"></a>
<a id="tocScollectiongroupmembership"></a>
<a id="tocscollectiongroupmembership"></a>

```json
{
  "id": "string",
  "groupId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "permission": "read",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|Unique identifier for the object.|
|groupId|string(uuid)|false|read-only|Identifier for the associated group.|
|documentId|string(uuid) \| null|false|read-only|Identifier for the associated document, if any.|
|collectionId|string(uuid) \| null|false|read-only|Identifier for the associated collection, if any.|
|permission|[Permission](#schemapermission)|false|none|none|
|sourceId|string(uuid) \| null|false|read-only|Identifier for the membership this one was inherited from, if any.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|read|
|permission|read_write|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "url": "string",
  "urlId": "string",
  "title": "string",
  "data": {},
  "icon": "string",
  "color": "string",
  "fullWidth": true,
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "updatedBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "deletedAt": "1970-01-01T00:00:00Z",
  "publishedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|url|string|false|read-only|A URL path to access the template.|
|urlId|string|false|read-only|A short unique identifier for the template used in URLs.|
|title|string|false|none|The title of the template.|
|data|object|false|none|The body of the template as a Prosemirror document.|
|icon|string \| null|false|none|An emoji to use as the template icon.|
|color|string \| null|false|none|The color of the template icon in hex format.|
|fullWidth|boolean|false|none|Whether the template should be displayed full width.|
|collectionId|string(uuid) \| null|false|none|Identifier for the associated collection, if any.|
|createdAt|string(date-time)|false|read-only|The date and time that the template was created.|
|createdBy|[User](#schemauser)|false|none|none|
|updatedAt|string(date-time)|false|read-only|The date and time that the template was last changed.|
|updatedBy|[User](#schemauser)|false|none|none|
|deletedAt|string(date-time) \| null|false|read-only|The date and time that the template was deleted.|
|publishedAt|string(date-time) \| null|false|read-only|The date and time that the template was published.|

<h2 id="tocS_WebhookSubscription">WebhookSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksubscription"></a>
<a id="schema_WebhookSubscription"></a>
<a id="tocSwebhooksubscription"></a>
<a id="tocswebhooksubscription"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Production webhook",
  "url": "https://example.com/webhooks/outline",
  "secret": "ol_whs_1234567890abcdef",
  "events": [
    "documents.create",
    "documents.update"
  ],
  "enabled": true,
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "createdById": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the webhook subscription.|
|name|string|false|none|The descriptive name of the webhook subscription.|
|url|string(uri)|false|none|The URL that receives webhook requests.|
|secret|string \| null|false|none|The optional secret used to sign webhook requests.|
|events|[string]|false|none|Event names or namespaces that trigger the webhook. `*` subscribes to all events.|
|enabled|boolean|false|read-only|Whether the webhook subscription is enabled.|
|createdBy|object|false|read-only|The user who created the webhook subscription, if available.|
|createdById|string(uuid)|false|read-only|Identifier for the user who created the webhook subscription.|
|createdAt|string(date-time)|false|read-only|The date and time that the webhook subscription was created.|
|updatedAt|string(date-time)|false|read-only|The date and time that the webhook subscription was last changed.|

<h2 id="tocS_View">View</h2>
<!-- backwards compatibility -->
<a id="schemaview"></a>
<a id="schema_View"></a>
<a id="tocSview"></a>
<a id="tocsview"></a>

```json
{
  "id": "string",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstViewedAt": "1970-01-01T00:00:00Z",
  "lastViewedAt": "1970-01-01T00:00:00Z",
  "count": 22,
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|Unique identifier for the object.|
|documentId|string(uuid)|false|read-only|Identifier for the associated document.|
|firstViewedAt|string(date-time)|false|read-only|When the document was first viewed by the user|
|lastViewedAt|string(date-time)|false|read-only|When the document was last viewed by the user|
|count|number|false|read-only|The number of times the user has viewed the document.|
|userId|string(uuid)|false|read-only|Identifier of the user who viewed the document.|
|user|[User](#schemauser)|false|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "scope": [
    "string"
  ],
  "last4": "string",
  "value": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "lastActiveAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|name|string|false|none|A user provided name for the API key.|
|scope|[string]|false|none|An optional list of scopes that restrict which endpoints the key can access. When `null` the key has access to all endpoints available to the user.|
|last4|string|false|read-only|The last four characters of the key, used to help identify it.|
|value|string|false|read-only|The full secret value of the key. Only returned once, in the response to `apiKeys.create`.|
|expiresAt|string(date-time) \| null|false|none|Date and time when this key expires, if ever.|
|lastActiveAt|string(date-time) \| null|false|read-only|Date and time when this key was last used.|
|createdAt|string(date-time)|false|read-only|Date and time when this key was created.|
|updatedAt|string(date-time)|false|read-only|Date and time when this key was last updated.|

<h2 id="tocS_Pin">Pin</h2>
<!-- backwards compatibility -->
<a id="schemapin"></a>
<a id="schema_Pin"></a>
<a id="tocSpin"></a>
<a id="tocspin"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|documentId|string(uuid)|false|none|Identifier for the pinned document.|
|collectionId|string(uuid) \| null|false|none|Identifier for the collection the document is pinned to. When `null` the document is pinned to the home screen.|
|index|string|false|none|The position of the pin, used for ordering.|
|createdAt|string(date-time)|false|read-only|Date and time when this pin was created.|
|updatedAt|string(date-time)|false|read-only|Date and time when this pin was last updated.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "event": "documents",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|userId|string(uuid)|false|read-only|Identifier for the subscribed user.|
|documentId|string(uuid) \| null|false|none|Identifier for the subscribed document, if any.|
|collectionId|string(uuid) \| null|false|none|Identifier for the subscribed collection, if any.|
|event|string|false|none|The type of event that is subscribed to.|
|createdAt|string(date-time)|false|read-only|Date and time when this subscription was created.|
|updatedAt|string(date-time)|false|read-only|Date and time when this subscription was last updated.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "event": "string",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "actorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "actor": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Jane Doe",
    "avatarUrl": "http://example.com",
    "color": "string",
    "email": "user@example.com",
    "role": "admin",
    "isSuspended": true,
    "lastActiveAt": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "invitedBy": {}
  },
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "commentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "revisionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "viewedAt": "1970-01-01T00:00:00Z",
  "archivedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|event|string|false|none|The type of event that triggered the notification.|
|userId|string(uuid)|false|read-only|Identifier for the user the notification belongs to.|
|actorId|string(uuid) \| null|false|none|Identifier for the user that triggered the notification, if any.|
|actor|[User](#schemauser)|false|none|none|
|documentId|string(uuid) \| null|false|none|Identifier for the associated document, if any.|
|collectionId|string(uuid) \| null|false|none|Identifier for the associated collection, if any.|
|commentId|string(uuid) \| null|false|none|Identifier for the associated comment, if any.|
|revisionId|string(uuid) \| null|false|none|Identifier for the associated revision, if any.|
|viewedAt|string(date-time) \| null|false|none|Date and time the notification was marked as viewed, if it has been.|
|archivedAt|string(date-time) \| null|false|none|Date and time the notification was archived, if it has been.|
|createdAt|string(date-time)|false|read-only|Date and time when this notification was created.|

<h2 id="tocS_Reaction">Reaction</h2>
<!-- backwards compatibility -->
<a id="schemareaction"></a>
<a id="schema_Reaction"></a>
<a id="tocSreaction"></a>
<a id="tocsreaction"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "emoji": "string",
  "commentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the object.|
|emoji|string|false|none|The native emoji that was reacted with.|
|commentId|string(uuid)|false|read-only|Identifier for the comment this reaction belongs to.|
|userId|string(uuid)|false|read-only|Identifier for the user that added the reaction.|
|createdAt|string(date-time)|false|read-only|Date and time when this reaction was created.|
|updatedAt|string(date-time)|false|read-only|Date and time when this reaction was last updated.|
