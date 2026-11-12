<h1 id="firezone-api">Firezone API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A REST API for configuring your Firezone account.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="firezone-api-groups">Groups</h1>

## List Groups

<a id="opIdPortalAPI.GroupController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups`

<h3 id="list-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Groups returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Groups with this exact name|
|directory_id|query|string|false|Filter to Groups synced from this Directory. Pass an empty string to filter to unsynced (native) Groups only.|
|entity_type|query|string|false|Filter to Groups of this entity type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "string",
      "entity_type": "group",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "idp_id": "string",
      "inserted_at": "2024-01-15T10:30:00Z",
      "name": "Engineering",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "static",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group Response|[GroupListResponse](#schemagrouplistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create Group

<a id="opIdPortalAPI.GroupController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "group": {
      "name": "Engineering"
    }
  }'
```

`POST /groups`

> Body parameter

```json
{
  "group": {
    "name": "Engineering"
  }
}
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GroupCreateRequest](#schemagroupcreaterequest)|true|Group Attributes|
|» group|body|object|true|none|
|» » name|body|string|true|Group Name|

> Example responses

> 201 Response

```json
{
  "data": {
    "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "string",
    "entity_type": "group",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "string",
    "inserted_at": "2024-01-15T10:30:00Z",
    "name": "Engineering",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "static",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Group Response|[GroupResponse](#schemagroupresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Group

<a id="opIdPortalAPI.GroupController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{id}`

<h3 id="show-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Group ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "string",
    "entity_type": "group",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "string",
    "inserted_at": "2024-01-15T10:30:00Z",
    "name": "Engineering",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "static",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group Response|[GroupResponse](#schemagroupresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Group

<a id="opIdPortalAPI.GroupController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "group": {
      "name": "Engineering"
    }
  }'
```

`PUT /groups/{id}`

> Body parameter

```json
{
  "group": {
    "name": "Engineering"
  }
}
```

<h3 id="update-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Group ID|
|body|body|[GroupUpdateRequest](#schemagroupupdaterequest)|true|Group Attributes|
|» group|body|object|true|none|
|» » name|body|string|false|Group Name|

> Example responses

> 200 Response

```json
{
  "data": {
    "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "string",
    "entity_type": "group",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "string",
    "inserted_at": "2024-01-15T10:30:00Z",
    "name": "Engineering",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "static",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group Response|[GroupResponse](#schemagroupresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Group

<a id="opIdPortalAPI.GroupController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /groups/{id}`

Deletes a Group and its memberships.

Policies that grant the Group are kept, but their `group_id` becomes null and they grant no access. A Policy for a synced Group is linked again automatically if the Group reappears on a later directory sync. The built-in Everyone Group cannot be deleted.


<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Group ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "string",
    "entity_type": "group",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "string",
    "inserted_at": "2024-01-15T10:30:00Z",
    "name": "Engineering",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "static",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group Response|[GroupResponse](#schemagroupresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Group

<a id="opIdPortalAPI.GroupController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups/00000000-0000-0000-0000-000000000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "group": {
      "name": "Engineering"
    }
  }'
```

`PATCH /groups/{id}`

> Body parameter

```json
{
  "group": {
    "name": "Engineering"
  }
}
```

<h3 id="update-a-group-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Group ID|
|body|body|[GroupUpdateRequest](#schemagroupupdaterequest)|true|Group Attributes|
|» group|body|object|true|none|
|» » name|body|string|false|Group Name|

> Example responses

> 200 Response

```json
{
  "data": {
    "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "string",
    "entity_type": "group",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "string",
    "inserted_at": "2024-01-15T10:30:00Z",
    "name": "Engineering",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "static",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-group-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group Response|[GroupResponse](#schemagroupresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-external-identities">External Identities</h1>

## List External Identities for an Actor

<a id="opIdPortalAPI.ExternalIdentityController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/string/external_identities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actors/{actor_id}/external_identities`

<h3 id="list-external-identities-for-an-actor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|
|limit|query|integer|false|Limit External Identities returned|
|page_cursor|query|string|false|Next/Prev page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "actor_id": "cdfa97e6-cca1-41db-8fc7-864daedb46df",
      "directory_id": "9f8e7d6c-5b4a-3c2b-1a0e-9f8e7d6c5b4a",
      "email": "john.doe@example.com",
      "family_name": "Doe",
      "firezone_avatar_url": "https://avatars.firezone.dev/u/2551705710219359.png",
      "given_name": "John",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "idp_id": "2551705710219359",
      "inserted_at": "2025-01-01T00:00:00Z",
      "issuer": "https://accounts.google.com",
      "middle_name": "string",
      "name": "John Doe",
      "nickname": "string",
      "picture": "https://example.com/avatar.jpg",
      "preferred_username": "jdoe",
      "profile": "string",
      "synced_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-external-identities-for-an-actor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ExternalIdentity List Response|[ExternalIdentityListResponse](#schemaexternalidentitylistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show External Identity

<a id="opIdPortalAPI.ExternalIdentityController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000/external_identities/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actors/{actor_id}/external_identities/{id}`

<h3 id="show-external-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|
|id|path|string|true|External Identity ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "actor_id": "cdfa97e6-cca1-41db-8fc7-864daedb46df",
    "directory_id": "9f8e7d6c-5b4a-3c2b-1a0e-9f8e7d6c5b4a",
    "email": "john.doe@example.com",
    "family_name": "Doe",
    "firezone_avatar_url": "https://avatars.firezone.dev/u/2551705710219359.png",
    "given_name": "John",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "2551705710219359",
    "inserted_at": "2025-01-01T00:00:00Z",
    "issuer": "https://accounts.google.com",
    "middle_name": "string",
    "name": "John Doe",
    "nickname": "string",
    "picture": "https://example.com/avatar.jpg",
    "preferred_username": "jdoe",
    "profile": "string",
    "synced_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-external-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ExternalIdentity Response|[ExternalIdentityResponse](#schemaexternalidentityresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete an External Identity

<a id="opIdPortalAPI.ExternalIdentityController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000/external_identities/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /actors/{actor_id}/external_identities/{id}`

Deletes an External Identity. Identities of admins can only be deleted in the portal.

<h3 id="delete-an-external-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|
|id|path|string|true|External Identity ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "actor_id": "cdfa97e6-cca1-41db-8fc7-864daedb46df",
    "directory_id": "9f8e7d6c-5b4a-3c2b-1a0e-9f8e7d6c5b4a",
    "email": "john.doe@example.com",
    "family_name": "Doe",
    "firezone_avatar_url": "https://avatars.firezone.dev/u/2551705710219359.png",
    "given_name": "John",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "2551705710219359",
    "inserted_at": "2025-01-01T00:00:00Z",
    "issuer": "https://accounts.google.com",
    "middle_name": "string",
    "name": "John Doe",
    "nickname": "string",
    "picture": "https://example.com/avatar.jpg",
    "preferred_username": "jdoe",
    "profile": "string",
    "synced_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-an-external-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ExternalIdentity Response|[ExternalIdentityResponse](#schemaexternalidentityresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-clients">Clients</h1>

## Show Client

<a id="opIdPortalAPI.ClientController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/clients/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /clients/{id}`

<h3 id="show-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Client ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
    "created_at": "2025-01-01T00:00:00Z",
    "device_serial": "GCCFX0DBQ6L5",
    "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "firebase_installation_id": "string",
    "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
    "hostname": "johns-macbook.example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "identifier_for_vendor": "string",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_attested_at": "2025-01-01T00:00:00Z",
    "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
    "last_attested_device_serial": "GCCFX0DBQ6L5",
    "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "203.0.113.10",
    "last_seen_remote_ip_location_city": "New York",
    "last_seen_remote_ip_location_lat": 40.7128,
    "last_seen_remote_ip_location_lon": -74.006,
    "last_seen_remote_ip_location_region": "US",
    "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "John's Macbook Air",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "slug": "johns-macbook-air",
    "updated_at": "2025-01-01T00:00:00Z",
    "verified_at": "2025-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Response|[ClientResponse](#schemaclientresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update Client

<a id="opIdPortalAPI.ClientController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/clients/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client": {
      "name": "John'\''s Macbook Air",
      "slug": "johns-macbook-air"
    }
  }'
```

`PUT /clients/{id}`

> Body parameter

```json
{
  "client": {
    "name": "John's Macbook Air",
    "slug": "johns-macbook-air"
  }
}
```

<h3 id="update-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Client ID|
|body|body|[ClientPutRequest](#schemaclientputrequest)|true|Client Attributes|
|» client|body|[ClientPut](#schemaclientput)|true|Put schema for updating a single Client|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
    "created_at": "2025-01-01T00:00:00Z",
    "device_serial": "GCCFX0DBQ6L5",
    "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "firebase_installation_id": "string",
    "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
    "hostname": "johns-macbook.example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "identifier_for_vendor": "string",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_attested_at": "2025-01-01T00:00:00Z",
    "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
    "last_attested_device_serial": "GCCFX0DBQ6L5",
    "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "203.0.113.10",
    "last_seen_remote_ip_location_city": "New York",
    "last_seen_remote_ip_location_lat": 40.7128,
    "last_seen_remote_ip_location_lon": -74.006,
    "last_seen_remote_ip_location_region": "US",
    "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "John's Macbook Air",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "slug": "johns-macbook-air",
    "updated_at": "2025-01-01T00:00:00Z",
    "verified_at": "2025-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Response|[ClientResponse](#schemaclientresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Client

<a id="opIdPortalAPI.ClientController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/clients/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /clients/{id}`

<h3 id="delete-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Client ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
    "created_at": "2025-01-01T00:00:00Z",
    "device_serial": "GCCFX0DBQ6L5",
    "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "firebase_installation_id": "string",
    "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
    "hostname": "johns-macbook.example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "identifier_for_vendor": "string",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_attested_at": "2025-01-01T00:00:00Z",
    "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
    "last_attested_device_serial": "GCCFX0DBQ6L5",
    "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "203.0.113.10",
    "last_seen_remote_ip_location_city": "New York",
    "last_seen_remote_ip_location_lat": 40.7128,
    "last_seen_remote_ip_location_lon": -74.006,
    "last_seen_remote_ip_location_region": "US",
    "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "John's Macbook Air",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "slug": "johns-macbook-air",
    "updated_at": "2025-01-01T00:00:00Z",
    "verified_at": "2025-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Response|[ClientResponse](#schemaclientresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update Client

<a id="opIdPortalAPI.ClientController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/clients/00000000-0000-0000-0000-000000000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client": {
      "name": "John'\''s Macbook Air",
      "slug": "johns-macbook-air"
    }
  }'
```

`PATCH /clients/{id}`

> Body parameter

```json
{
  "client": {
    "name": "John's Macbook Air",
    "slug": "johns-macbook-air"
  }
}
```

<h3 id="update-client-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Client ID|
|body|body|[ClientPutRequest](#schemaclientputrequest)|true|Client Attributes|
|» client|body|[ClientPut](#schemaclientput)|true|Put schema for updating a single Client|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
    "created_at": "2025-01-01T00:00:00Z",
    "device_serial": "GCCFX0DBQ6L5",
    "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "firebase_installation_id": "string",
    "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
    "hostname": "johns-macbook.example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "identifier_for_vendor": "string",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_attested_at": "2025-01-01T00:00:00Z",
    "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
    "last_attested_device_serial": "GCCFX0DBQ6L5",
    "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "203.0.113.10",
    "last_seen_remote_ip_location_city": "New York",
    "last_seen_remote_ip_location_lat": 40.7128,
    "last_seen_remote_ip_location_lon": -74.006,
    "last_seen_remote_ip_location_region": "US",
    "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "John's Macbook Air",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "slug": "johns-macbook-air",
    "updated_at": "2025-01-01T00:00:00Z",
    "verified_at": "2025-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-client-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Response|[ClientResponse](#schemaclientresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Verify Client

<a id="opIdPortalAPI.ClientController.verify"></a>

> Code samples

```bash
curl https://api.firezone.dev/clients/00000000-0000-0000-0000-000000000000/verify \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /clients/{id}/verify`

<h3 id="verify-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Client ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
    "created_at": "2025-01-01T00:00:00Z",
    "device_serial": "GCCFX0DBQ6L5",
    "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "firebase_installation_id": "string",
    "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
    "hostname": "johns-macbook.example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "identifier_for_vendor": "string",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_attested_at": "2025-01-01T00:00:00Z",
    "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
    "last_attested_device_serial": "GCCFX0DBQ6L5",
    "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "203.0.113.10",
    "last_seen_remote_ip_location_city": "New York",
    "last_seen_remote_ip_location_lat": 40.7128,
    "last_seen_remote_ip_location_lon": -74.006,
    "last_seen_remote_ip_location_region": "US",
    "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "John's Macbook Air",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "slug": "johns-macbook-air",
    "updated_at": "2025-01-01T00:00:00Z",
    "verified_at": "2025-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="verify-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Response|[ClientResponse](#schemaclientresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Unverify Client

<a id="opIdPortalAPI.ClientController.unverify"></a>

> Code samples

```bash
curl https://api.firezone.dev/clients/00000000-0000-0000-0000-000000000000/unverify \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /clients/{id}/unverify`

<h3 id="unverify-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Client ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
    "created_at": "2025-01-01T00:00:00Z",
    "device_serial": "GCCFX0DBQ6L5",
    "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "firebase_installation_id": "string",
    "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
    "hostname": "johns-macbook.example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "identifier_for_vendor": "string",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_attested_at": "2025-01-01T00:00:00Z",
    "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
    "last_attested_device_serial": "GCCFX0DBQ6L5",
    "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "203.0.113.10",
    "last_seen_remote_ip_location_city": "New York",
    "last_seen_remote_ip_location_lat": 40.7128,
    "last_seen_remote_ip_location_lon": -74.006,
    "last_seen_remote_ip_location_region": "US",
    "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "John's Macbook Air",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "slug": "johns-macbook-air",
    "updated_at": "2025-01-01T00:00:00Z",
    "verified_at": "2025-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="unverify-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Response|[ClientResponse](#schemaclientresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Clients

<a id="opIdPortalAPI.ClientController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /clients`

<h3 id="list-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Clients returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Clients with this exact name|
|firezone_id|query|string|false|Filter to the Client with this exact Firezone ID|
|actor_id|query|string(uuid)|false|Filter to Clients owned by this Actor|
|online|query|boolean|false|Filter to Clients that are connected (`true`) or not connected (`false`) right now|
|last_seen_before|query|string(date-time)|false|Filter to Clients whose latest connection started before this RFC 3339 timestamp.<br>A Client with no recorded `last_seen_at` counts as last seen when it was created.<br>`last_seen_at` is set when a Client connects, so a Client that has stayed<br>connected since before this time also matches; add `online=false` to leave it out.<br>|
|last_seen_after|query|string(date-time)|false|Filter to Clients whose latest connection started at or after this RFC 3339<br>timestamp. A Client with no recorded `last_seen_at` counts as last seen when it<br>was created.<br>|
|client_type|query|string|false|Filter to Clients of this type, read from the user agent of the latest session:<br>`headless` (Linux and Windows headless Clients), `gui` (Linux and Windows GUI<br>Clients), `apple` (macOS and iOS), or `android`. Clients with no recorded user<br>agent match no type.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|client_type|headless|
|client_type|gui|
|client_type|apple|
|client_type|android|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
      "created_at": "2025-01-01T00:00:00Z",
      "device_serial": "GCCFX0DBQ6L5",
      "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
      "firebase_installation_id": "string",
      "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
      "hostname": "johns-macbook.example.com",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "identifier_for_vendor": "string",
      "ipv4": "100.64.0.1",
      "ipv6": "fd00:2021:1111::1",
      "last_attested_at": "2025-01-01T00:00:00Z",
      "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
      "last_attested_device_serial": "GCCFX0DBQ6L5",
      "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
      "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
      "last_seen_at": "2025-01-01T00:00:00Z",
      "last_seen_remote_ip": "203.0.113.10",
      "last_seen_remote_ip_location_city": "New York",
      "last_seen_remote_ip_location_lat": 40.7128,
      "last_seen_remote_ip_location_lon": -74.006,
      "last_seen_remote_ip_location_region": "US",
      "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
      "last_seen_version": "1.5.0",
      "name": "John's Macbook Air",
      "online": true,
      "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
      "slug": "johns-macbook-air",
      "updated_at": "2025-01-01T00:00:00Z",
      "verified_at": "2025-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Response|[ClientsResponse](#schemaclientsresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-gateways">Gateways</h1>

## Show Gateway

<a id="opIdPortalAPI.GatewayController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/gateways/{id}`

<h3 id="show-gateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|id|path|string|true|Gateway ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "198.51.100.10",
    "last_seen_remote_ip_location_city": "San Francisco",
    "last_seen_remote_ip_location_lat": 37.7749,
    "last_seen_remote_ip_location_lon": -122.4194,
    "last_seen_remote_ip_location_region": "US-CA",
    "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "vpc-us-east",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "rotated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-gateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gateway Response|[GatewayResponse](#schemagatewayresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Gateway (rename)

<a id="opIdPortalAPI.GatewayController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gateway": {
      "name": "vpc-us-east"
    }
  }'
```

`PUT /sites/{site_id}/gateways/{id}`

Renames a Gateway. Gateways otherwise self-register their configuration (name, IP addresses) on first connect and can only be renamed, not fully edited, via this endpoint.


> Body parameter

```json
{
  "gateway": {
    "name": "vpc-us-east"
  }
}
```

<h3 id="update-a-gateway-rename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|id|path|string|true|Gateway ID|
|body|body|[GatewayUpdateRequest](#schemagatewayupdaterequest)|true|Gateway attributes|
|» gateway|body|[GatewayUpdate](#schemagatewayupdate)|true|Update schema for a single Gateway|

> Example responses

> 200 Response

```json
{
  "data": {
    "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "198.51.100.10",
    "last_seen_remote_ip_location_city": "San Francisco",
    "last_seen_remote_ip_location_lat": 37.7749,
    "last_seen_remote_ip_location_lon": -122.4194,
    "last_seen_remote_ip_location_region": "US-CA",
    "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "vpc-us-east",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "rotated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-gateway-rename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gateway Response|[GatewayResponse](#schemagatewayresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Gateway

<a id="opIdPortalAPI.GatewayController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/gateways/{id}`

<h3 id="delete-a-gateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|id|path|string|true|Gateway ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "198.51.100.10",
    "last_seen_remote_ip_location_city": "San Francisco",
    "last_seen_remote_ip_location_lat": 37.7749,
    "last_seen_remote_ip_location_lon": -122.4194,
    "last_seen_remote_ip_location_region": "US-CA",
    "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "vpc-us-east",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "rotated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-gateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gateway Response|[GatewayResponse](#schemagatewayresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Gateway (rename)

<a id="opIdPortalAPI.GatewayController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways/00000000-0000-0000-0000-000000000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gateway": {
      "name": "vpc-us-east"
    }
  }'
```

`PATCH /sites/{site_id}/gateways/{id}`

Renames a Gateway. Gateways otherwise self-register their configuration (name, IP addresses) on first connect and can only be renamed, not fully edited, via this endpoint.


> Body parameter

```json
{
  "gateway": {
    "name": "vpc-us-east"
  }
}
```

<h3 id="update-a-gateway-rename-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|id|path|string|true|Gateway ID|
|body|body|[GatewayUpdateRequest](#schemagatewayupdaterequest)|true|Gateway attributes|
|» gateway|body|[GatewayUpdate](#schemagatewayupdate)|true|Update schema for a single Gateway|

> Example responses

> 200 Response

```json
{
  "data": {
    "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "198.51.100.10",
    "last_seen_remote_ip_location_city": "San Francisco",
    "last_seen_remote_ip_location_lat": 37.7749,
    "last_seen_remote_ip_location_lon": -122.4194,
    "last_seen_remote_ip_location_region": "US-CA",
    "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "vpc-us-east",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "rotated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-gateway-rename-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gateway Response|[GatewayResponse](#schemagatewayresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Gateways

<a id="opIdPortalAPI.GatewayController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/gateways`

<h3 id="list-gateways-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|limit|query|integer|false|Limit Gateways returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to the Gateway with this exact name|
|ipv4|query|string|false|Filter to the Gateway with this exact tunnel IPv4 address|
|ipv6|query|string|false|Filter to the Gateway with this exact tunnel IPv6 address|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "ipv4": "100.64.0.1",
      "ipv6": "fd00:2021:1111::1",
      "last_seen_at": "2025-01-01T00:00:00Z",
      "last_seen_remote_ip": "198.51.100.10",
      "last_seen_remote_ip_location_city": "San Francisco",
      "last_seen_remote_ip_location_lat": 37.7749,
      "last_seen_remote_ip_location_lon": -122.4194,
      "last_seen_remote_ip_location_region": "US-CA",
      "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
      "last_seen_version": "1.5.0",
      "name": "vpc-us-east",
      "online": true,
      "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
      "rotated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-gateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gateway Response|[GatewaysResponse](#schemagatewaysresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Provision a Gateway

<a id="opIdPortalAPI.GatewayController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gateway": {
      "name": "vpc-us-east"
    },
    "issue_token": true
  }'
```

`POST /sites/{site_id}/gateways`

Creates a Gateway and mints its single-owner token in one call. The token is returned once here - store it securely. If it's lost, rotate it via `POST /sites/{site_id}/gateways/{gateway_id}/token/rotate` once the Gateway has connected, or delete and re-provision it.

Returning the token requires the `gateway_tokens:write` scope in addition to `gateways:write`. Set `issue_token` to `false` to create the Gateway without a token, which needs only `gateways:write`; mint its token later via `POST /sites/{site_id}/gateways/{gateway_id}/token`.

`name` is optional; a random name is generated when omitted. `ipv4` and `ipv6` are the Gateway's tunnel addresses, allocated from the account's pool when the Gateway row is created - they are always present in this response, before the Gateway has ever connected.


> Body parameter

```json
{
  "gateway": {
    "name": "vpc-us-east"
  },
  "issue_token": true
}
```

<h3 id="provision-a-gateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|body|body|[GatewayCreateRequest](#schemagatewaycreaterequest)|false|Gateway attributes|
|» gateway|body|[GatewayCreate](#schemagatewaycreate)|false|Create schema for a single Gateway|
|» issue_token|body|boolean|false|Whether to mint the Gateway's token and return it in the response. Requires the `gateway_tokens:write` scope when true.<br>|

> Example responses

> 201 Response

```json
{
  "data": {
    "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "198.51.100.10",
    "last_seen_remote_ip_location_city": "San Francisco",
    "last_seen_remote_ip_location_lat": 37.7749,
    "last_seen_remote_ip_location_lon": -122.4194,
    "last_seen_remote_ip_location_region": "US-CA",
    "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "vpc-us-east",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "rotated_at": "1970-01-01T00:00:00Z",
    "token": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="provision-a-gateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provisioned Gateway Response|[GatewayProvisionResponse](#schemagatewayprovisionresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-santa-posture-providers">Santa Posture Providers</h1>

## List Santa posture providers

<a id="opIdPortalAPI.SantaPostureProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/santa_posture_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /santa_posture_providers`

<h3 id="list-santa-posture-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit providers returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "api_url": "http://example.com",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "santa",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-santa-posture-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Santa posture provider response|[SantaPostureProviderListResponse](#schemasantapostureproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show a Santa posture provider

<a id="opIdPortalAPI.SantaPostureProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/santa_posture_providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /santa_posture_providers/{id}`

<h3 id="show-a-santa-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Santa posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "api_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "santa",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-santa-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Santa posture provider response|[SantaPostureProviderResponse](#schemasantapostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Santa posture provider

<a id="opIdPortalAPI.SantaPostureProviderController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/santa_posture_providers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "santa_posture_provider": {
      "is_disabled": false,
      "name": "Santa"
    }
  }'
```

`PUT /santa_posture_providers/{id}`

Renames, enables, or disables a Santa posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Santa provider is left, `santa.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "santa_posture_provider": {
    "is_disabled": false,
    "name": "Santa"
  }
}
```

<h3 id="update-a-santa-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Santa posture provider ID|
|body|body|[SantaPostureProviderUpdateRequest](#schemasantapostureproviderupdaterequest)|true|Santa posture provider attributes|
|» santa_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "api_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "santa",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-santa-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Santa posture provider response|[SantaPostureProviderResponse](#schemasantapostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Santa posture provider

<a id="opIdPortalAPI.SantaPostureProviderController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/santa_posture_providers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /santa_posture_providers/{id}`

Deletes a Santa posture provider and every device synced from it. This
cannot be undone. Policies keep their posture rules. Once no enabled Santa
provider is left, `santa.*` posture rules see every device as not
enrolled. Returns the deleted provider.


<h3 id="delete-a-santa-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Santa posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "api_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "santa",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-santa-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Santa posture provider response|[SantaPostureProviderResponse](#schemasantapostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Santa posture provider

<a id="opIdPortalAPI.SantaPostureProviderController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/santa_posture_providers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "santa_posture_provider": {
      "is_disabled": false,
      "name": "Santa"
    }
  }'
```

`PATCH /santa_posture_providers/{id}`

Renames, enables, or disables a Santa posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Santa provider is left, `santa.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "santa_posture_provider": {
    "is_disabled": false,
    "name": "Santa"
  }
}
```

<h3 id="update-a-santa-posture-provider-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Santa posture provider ID|
|body|body|[SantaPostureProviderUpdateRequest](#schemasantapostureproviderupdaterequest)|true|Santa posture provider attributes|
|» santa_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "api_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "santa",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-santa-posture-provider-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Santa posture provider response|[SantaPostureProviderResponse](#schemasantapostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-github-auth-providers">GitHub Auth Providers</h1>

## Show GitHub Auth Provider

<a id="opIdPortalAPI.GitHubAuthProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/github_auth_providers/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /github_auth_providers/{id}`

<h3 id="show-github-auth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|GitHub Auth Provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "email_verification_method": "proof",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": true,
    "is_disabled": false,
    "issuer": "https://github.com/login/oauth",
    "name": "GitHub",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-github-auth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|GitHub Auth Provider Response|[GitHubAuthProviderResponse](#schemagithubauthproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List GitHub Auth Providers

<a id="opIdPortalAPI.GitHubAuthProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/github_auth_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /github_auth_providers`

<h3 id="list-github-auth-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit GitHub Auth Providers returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to GitHub Auth Providers with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "email_verification_method": "proof",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": true,
      "is_disabled": false,
      "issuer": "https://github.com/login/oauth",
      "name": "GitHub",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-github-auth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|GitHub Auth Provider Response|[GitHubAuthProviderListResponse](#schemagithubauthproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-policies">Policies</h1>

## List Posture Fields

<a id="opIdPortalAPI.PostureFieldController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/posture_fields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posture_fields`

Lists every field a Policy's `postures` expression can test, with its type, operators, and platforms. Filter by `provider` to keep the response small.

One node of a Policy's device posture expression. A node has exactly one
of these shapes:

* `and`: a non-empty list of nodes that must all hold.
* `or`: a non-empty list of nodes of which at least one must hold.
* `not`: a node that must not hold.
* a leaf: a `field`, an `op`, and for most operators a `value`.

A leaf's `field` is `<provider>.<attribute>`, such as
`intune.compliance_state` or `firezone.last_seen_version`. The provider
is one of `firezone` (the connecting device's own record), `intune`,
`iru`, `defender`, `santa`, `sentinelone` or `sophos`. The attribute is
one of that provider's synced device attributes. Every synced provider also has a
boolean `enrolled` that is true when the provider knows the device.

The attribute's type decides which operators apply and what `value`
must be:

* strings: `is`, `is_not`, `is_in`, `is_not_in`, `contains`,
  `does_not_contain`, `starts_with`, `ends_with`, `matches`,
  `does_not_match`. Comparisons ignore case. `is_in` and `is_not_in`
  take a list of strings. `matches` and `does_not_match` take a regular
  expression.
* booleans: `is` with `true` or `false`.
* numbers: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.
* versions: `is`, `is_not`, `gt`, `gte`, `lt`, `lte`, compared segment
  by segment, so `14.4` equals `14.4.0`.
* timestamps: `before` and `after` with an ISO 8601 datetime such as
  `2026-01-01T00:00:00Z`; `within_last` and `not_within_last` with an
  ISO 8601 duration such as `PT24H` or `P30D`. A date-only attribute
  counts as the start of that day in UTC.
* IP addresses: `is_in_cidr` and `is_not_in_cidr` with a list of CIDRs.
  `firezone.ipv4` takes IPv4 CIDRs only and `firezone.ipv6` IPv6 only.
* lists of strings: `contains`, `does_not_contain`, `contains_any_of`,
  `contains_all_of`, `is_empty`, `is_not_empty`.
* JSON attributes: `is_empty`, `is_not_empty`.

The value `@latest` on `firezone.last_seen_version` stands for the newest
Client release for the device's platform.

`enum_string` uses the string operators; `integer` and `float` use the
numeric operators. `string_array` values use a single string for `contains`
and `does_not_contain`, or a non-empty string list for `contains_any_of`
and `contains_all_of`.

Every attribute also accepts `exists` and `does_not_exist`. These and
`is_empty` / `is_not_empty` take no value: omit `value` or set it to null.
Missing attributes fail every operator except `does_not_exist`, including
negative operators such as `is_not`. A missing provider is evaluated as
one empty row. Its synthetic `enrolled` field is false, so `enrolled is
false` can explicitly match an unenrolled device. `not` negates the
result and can also match missing data; use a positive `enrolled is true`
check when enrollment is required.

Leaves that do not apply to the device's platform are removed before
evaluation, including inside `or` and `not`. An expression with no
applicable leaves passes. If the platform is unknown, no leaves are
removed. Each field lists the platforms it applies to.
Provider `os_up_to_date` fields are computed from known OS releases;
they are not raw provider attributes.

When a device matches more than one record of a provider, a leaf holds
when any record satisfies it. Set `rows` to `all` to require every
record. Different leaves may match different provider rows; `and` does
not require one row to satisfy all leaves. `rows` is not allowed for
`firezone`, which always describes exactly one connecting device.

Expressions allow at most 10 nested boolean levels and 100 leaves.
List values contain 1–100 items; strings are at most 1024 bytes and
regular expressions at most 256 bytes. Unknown fields, incompatible
operators, invalid values, and exceeded limits return HTTP 422 with
a path in `validation_errors.postures`.


<h3 id="list-posture-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string|false|Filter to the fields of this provider|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|firezone|
|provider|intune|
|provider|iru|
|provider|defender|
|provider|santa|
|provider|sentinelone|
|provider|sophos|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "field": "intune.compliance_state",
      "operators": [
        "is",
        "is_not",
        "exists",
        "does_not_exist"
      ],
      "platforms": [
        "windows",
        "macos",
        "ios",
        "android"
      ],
      "provider": "intune",
      "rows_supported": true,
      "type": "enum_string"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-posture-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Posture Field Response|[PostureFieldListResponse](#schemaposturefieldlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Policy

<a id="opIdPortalAPI.PolicyController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/policies/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /policies/{id}`

<h3 id="show-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Policy ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy Response|[PolicyResponse](#schemapolicyresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Policy

<a id="opIdPortalAPI.PolicyController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/policies/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "conditions": [
        {
          "operator": "is_in_cidr",
          "property": "remote_ip",
          "values": [
            "10.0.0.0/8"
          ]
        }
      ],
      "description": "Updated description",
      "flow_log_uploads_enabled": true,
      "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "is_disabled": false,
      "postures": {
        "and": [
          {
            "field": "intune.enrolled",
            "op": "is",
            "value": true
          },
          {
            "field": "intune.compliance_state",
            "op": "is",
            "rows": "all",
            "value": "compliant"
          },
          {
            "field": "intune.last_sync_at",
            "op": "within_last",
            "value": "PT24H"
          },
          {
            "or": [
              {
                "field": "firezone.last_seen_version",
                "op": "gte",
                "value": "@latest"
              },
              {
                "not": {
                  "field": "firezone.hostname",
                  "op": "starts_with",
                  "value": "test-"
                }
              }
            ]
          }
        ]
      },
      "require_attestation": true,
      "resource_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }'
```

`PUT /policies/{id}`

Updates a Policy.

A Policy is enabled or disabled through the `is_disabled` field. Disabling a Policy stops it granting access without deleting it.

Set `policy.postures` to replace the entire device posture expression.
Omit it to preserve existing postures. Send `{"policy":{"postures":null}}`
to remove the posture requirement; clearing is allowed even after an
account downgrade. Other policy attributes, including `conditions`, are
unchanged when omitted. Conditions and postures must both hold.

Non-empty `conditions` require the `policy_conditions` entitlement or
return 403. Sending an empty list to remove them is allowed even after
an account downgrade.

Non-null postures require the `device_posture` entitlement (Enterprise)
or return 403. Invalid expressions return 422 with a path in
`validation_errors.postures`. See `PolicyPostureNode` for the expression
grammar, complete field catalog, operator types, platform behavior, and
limits. `GET /posture_fields` lists the same fields as structured data.
Changing postures revokes this policy's active authorizations,
interrupting affected connections until they are reauthorized.


> Body parameter

```json
{
  "policy": {
    "conditions": [
      {
        "operator": "is_in_cidr",
        "property": "remote_ip",
        "values": [
          "10.0.0.0/8"
        ]
      }
    ],
    "description": "Updated description",
    "flow_log_uploads_enabled": true,
    "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": true,
    "resource_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

<h3 id="update-a-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Policy ID|
|body|body|[PolicyUpdateRequest](#schemapolicyupdaterequest)|true|Policy Attributes|
|» policy|body|[PolicyUpdateParams](#schemapolicyupdateparams)|true|Policy attributes accepted when updating a Policy. All fields are optional; omitted fields keep their current value.|

> Example responses

> 200 Response

```json
{
  "data": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy Response|[PolicyResponse](#schemapolicyresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Policy

<a id="opIdPortalAPI.PolicyController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/policies/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /policies/{id}`

<h3 id="delete-a-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Policy ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy Response|[PolicyResponse](#schemapolicyresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Policy

<a id="opIdPortalAPI.PolicyController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/policies/00000000-0000-0000-0000-000000000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "conditions": [
        {
          "operator": "is_in_cidr",
          "property": "remote_ip",
          "values": [
            "10.0.0.0/8"
          ]
        }
      ],
      "description": "Updated description",
      "flow_log_uploads_enabled": true,
      "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "is_disabled": false,
      "postures": {
        "and": [
          {
            "field": "intune.enrolled",
            "op": "is",
            "value": true
          },
          {
            "field": "intune.compliance_state",
            "op": "is",
            "rows": "all",
            "value": "compliant"
          },
          {
            "field": "intune.last_sync_at",
            "op": "within_last",
            "value": "PT24H"
          },
          {
            "or": [
              {
                "field": "firezone.last_seen_version",
                "op": "gte",
                "value": "@latest"
              },
              {
                "not": {
                  "field": "firezone.hostname",
                  "op": "starts_with",
                  "value": "test-"
                }
              }
            ]
          }
        ]
      },
      "require_attestation": true,
      "resource_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }'
```

`PATCH /policies/{id}`

Updates a Policy.

A Policy is enabled or disabled through the `is_disabled` field. Disabling a Policy stops it granting access without deleting it.

Set `policy.postures` to replace the entire device posture expression.
Omit it to preserve existing postures. Send `{"policy":{"postures":null}}`
to remove the posture requirement; clearing is allowed even after an
account downgrade. Other policy attributes, including `conditions`, are
unchanged when omitted. Conditions and postures must both hold.

Non-empty `conditions` require the `policy_conditions` entitlement or
return 403. Sending an empty list to remove them is allowed even after
an account downgrade.

Non-null postures require the `device_posture` entitlement (Enterprise)
or return 403. Invalid expressions return 422 with a path in
`validation_errors.postures`. See `PolicyPostureNode` for the expression
grammar, complete field catalog, operator types, platform behavior, and
limits. `GET /posture_fields` lists the same fields as structured data.
Changing postures revokes this policy's active authorizations,
interrupting affected connections until they are reauthorized.


> Body parameter

```json
{
  "policy": {
    "conditions": [
      {
        "operator": "is_in_cidr",
        "property": "remote_ip",
        "values": [
          "10.0.0.0/8"
        ]
      }
    ],
    "description": "Updated description",
    "flow_log_uploads_enabled": true,
    "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": true,
    "resource_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

<h3 id="update-a-policy-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Policy ID|
|body|body|[PolicyUpdateRequest](#schemapolicyupdaterequest)|true|Policy Attributes|
|» policy|body|[PolicyUpdateParams](#schemapolicyupdateparams)|true|Policy attributes accepted when updating a Policy. All fields are optional; omitted fields keep their current value.|

> Example responses

> 200 Response

```json
{
  "data": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-policy-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy Response|[PolicyResponse](#schemapolicyresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Policies

<a id="opIdPortalAPI.PolicyController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /policies`

<h3 id="list-policies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Policies returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|group_id|query|string|false|Filter to Policies granting this Group|
|resource_id|query|string|false|Filter to Policies granting access to this Resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "conditions": [
        {
          "operator": "is_in",
          "property": "remote_ip_location_region",
          "values": [
            "US",
            "CA"
          ]
        }
      ],
      "description": "Policy to allow something",
      "flow_log_uploads_enabled": true,
      "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "is_disabled": false,
      "postures": {
        "and": [
          {
            "field": "intune.enrolled",
            "op": "is",
            "value": true
          },
          {
            "field": "intune.compliance_state",
            "op": "is",
            "rows": "all",
            "value": "compliant"
          },
          {
            "field": "intune.last_sync_at",
            "op": "within_last",
            "value": "PT24H"
          },
          {
            "or": [
              {
                "field": "firezone.last_seen_version",
                "op": "gte",
                "value": "@latest"
              },
              {
                "not": {
                  "field": "firezone.hostname",
                  "op": "starts_with",
                  "value": "test-"
                }
              }
            ]
          }
        ]
      },
      "require_attestation": false,
      "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy Response|[PolicyListResponse](#schemapolicylistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create Policy

<a id="opIdPortalAPI.PolicyController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "conditions": [
        {
          "operator": "is_in",
          "property": "remote_ip_location_region",
          "values": [
            "US",
            "CA"
          ]
        }
      ],
      "description": "Policy to allow something",
      "flow_log_uploads_enabled": true,
      "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
      "is_disabled": false,
      "postures": {
        "and": [
          {
            "field": "intune.enrolled",
            "op": "is",
            "value": true
          },
          {
            "field": "intune.compliance_state",
            "op": "is",
            "rows": "all",
            "value": "compliant"
          },
          {
            "field": "intune.last_sync_at",
            "op": "within_last",
            "value": "PT24H"
          },
          {
            "or": [
              {
                "field": "firezone.last_seen_version",
                "op": "gte",
                "value": "@latest"
              },
              {
                "not": {
                  "field": "firezone.hostname",
                  "op": "starts_with",
                  "value": "test-"
                }
              }
            ]
          }
        ]
      },
      "require_attestation": false,
      "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
    }
  }'
```

`POST /policies`

Creates a Policy.

A Policy is enabled by default. Pass `is_disabled: true` to create it disabled, so it grants no access until enabled.

Enterprise accounts with the `device_posture` entitlement can include
`policy.postures`, a boolean expression of `and`, `or`, `not`, and typed
provider-field comparisons. Postures and all `policy.conditions` must hold
together. For example:

```json
{"policy": {"group_id": "00000000-0000-0000-0000-000000000001",
  "resource_id": "00000000-0000-0000-0000-000000000002",
  "postures": {"and": [
    {"field": "intune.enrolled", "op": "is", "value": true},
    {"field": "intune.compliance_state", "op": "is", "value": "compliant"}
  ]}}}
```

Non-empty `conditions` without the `policy_conditions` entitlement return
403. Omit `postures` or use null for no posture requirement. Non-null
postures without the entitlement return 403. Invalid expressions return 422 with
details in `validation_errors.postures`. See `PolicyPostureNode` for the
complete field catalog, operator types, platform behavior, and limits.
`GET /posture_fields` lists the same fields as structured data.


> Body parameter

```json
{
  "policy": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

<h3 id="create-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PolicyCreateRequest](#schemapolicycreaterequest)|true|Policy Attributes|
|» policy|body|[PolicyCreateParams](#schemapolicycreateparams)|true|Policy attributes accepted when creating a Policy|

> Example responses

> 201 Response

```json
{
  "data": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Policy Response|[PolicyResponse](#schemapolicyresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-oidc-auth-providers">OIDC Auth Providers</h1>

## List OIDC Auth Providers

<a id="opIdPortalAPI.OIDCAuthProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/oidc_auth_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oidc_auth_providers`

<h3 id="list-oidc-auth-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit OIDC Auth Providers returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to OIDC Auth Providers with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_id": "my-client-id",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "discovery_document_uri": "https://idp.example.com/.well-known/openid-configuration",
      "email_verification_method": "claim",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": false,
      "is_disabled": false,
      "issuer": "https://idp.example.com",
      "name": "OIDC Provider",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-oidc-auth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OIDC Auth Provider Response|[OIDCAuthProviderListResponse](#schemaoidcauthproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show OIDC Auth Provider

<a id="opIdPortalAPI.OIDCAuthProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/oidc_auth_providers/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oidc_auth_providers/{id}`

<h3 id="show-oidc-auth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|OIDC Auth Provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_id": "my-client-id",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "discovery_document_uri": "https://idp.example.com/.well-known/openid-configuration",
    "email_verification_method": "claim",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": false,
    "is_disabled": false,
    "issuer": "https://idp.example.com",
    "name": "OIDC Provider",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-oidc-auth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OIDC Auth Provider Response|[OIDCAuthProviderResponse](#schemaoidcauthproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-gateway-tokens">Gateway Tokens</h1>

## Delete a Gateway Token

<a id="opIdPortalAPI.GatewayTokenController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateway_tokens/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/gateway_tokens/{id}`

<h3 id="delete-a-gateway-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|id|path|string|true|Token ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-gateway-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted Token Response|[DeletedGatewayTokenResponse](#schemadeletedgatewaytokenresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create a Gateway Token

<a id="opIdPortalAPI.GatewayTokenController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateway_tokens \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/gateway_tokens`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated: creates a multi-owner Site token shared by all of a Site's gateways. Prefer creating a single-owner token for a specific gateway via `POST /sites/{site_id}/gateways/{gateway_id}/token`.

<h3 id="create-a-gateway-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "token": "secret-token-here"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-a-gateway-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|New Token Response|[GatewayTokenResponse](#schemagatewaytokenresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete all Gateway Tokens for a Site

<a id="opIdPortalAPI.GatewayTokenController.delete_all"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateway_tokens \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/gateway_tokens`

<h3 id="delete-all-gateway-tokens-for-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "deleted_count": 5
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-all-gateway-tokens-for-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted Tokens Response|[DeletedGatewayTokensResponse](#schemadeletedgatewaytokensresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Rotate a single-owner Gateway Token

<a id="opIdPortalAPI.GatewayTokenController.rotate"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways/00000000-0000-0000-0000-000000000000/token/rotate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/gateways/{gateway_id}/token/rotate`

Mints a replacement token for the gateway. A current token the gateway has connected with keeps working until the gateway first connects with the replacement or 4 hours elapse, whichever comes first; a token no gateway has ever connected with is replaced immediately. Rotating again before the gateway picks up the replacement replaces only the pending token and never invalidates the one in use. Once the replacement is confirmed the previous token is deleted - rolling the gateway's configuration back to it will strand the gateway.

<h3 id="rotate-a-single-owner-gateway-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|gateway_id|path|string|true|Gateway ID|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "token": "secret-token-here"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="rotate-a-single-owner-gateway-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|New Token Response|[GatewayTokenResponse](#schemagatewaytokenresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create a single-owner Gateway Token

<a id="opIdPortalAPI.GatewayTokenController.create_for_gateway"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000/gateways/00000000-0000-0000-0000-000000000000/token \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/gateways/{gateway_id}/token`

Creates a token bound to a single gateway. At most one active token can exist per gateway; if one already exists, this returns 409 Conflict - rotate the token or delete it first instead.

<h3 id="create-a-single-owner-gateway-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|Site ID|
|gateway_id|path|string|true|Gateway ID|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "token": "secret-token-here"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 409 Response

```json
{
  "detail": "The request conflicts with the current state of the resource.",
  "status": 409,
  "title": "Conflict",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-a-single-owner-gateway-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|New Token Response|[GatewayTokenResponse](#schemagatewaytokenresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|409|Conflict|Conflict|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-sentinelone-posture-providers">SentinelOne Posture Providers</h1>

## List SentinelOne posture providers

<a id="opIdPortalAPI.SentinelOnePostureProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/sentinelone_posture_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sentinelone_posture_providers`

<h3 id="list-sentinelone-posture-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit providers returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "management_url": "http://example.com",
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "sentinelone",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-sentinelone-posture-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SentinelOne posture provider response|[SentinelOnePostureProviderListResponse](#schemasentinelonepostureproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show a SentinelOne posture provider

<a id="opIdPortalAPI.SentinelOnePostureProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/sentinelone_posture_providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sentinelone_posture_providers/{id}`

<h3 id="show-a-sentinelone-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|SentinelOne posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "management_url": "http://example.com",
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "sentinelone",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-sentinelone-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SentinelOne posture provider response|[SentinelOnePostureProviderResponse](#schemasentinelonepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a SentinelOne posture provider

<a id="opIdPortalAPI.SentinelOnePostureProviderController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/sentinelone_posture_providers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sentinelone_posture_provider": {
      "is_disabled": false,
      "name": "SentinelOne"
    }
  }'
```

`PUT /sentinelone_posture_providers/{id}`

Renames, enables, or disables a SentinelOne posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled SentinelOne provider is left, `sentinelone.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "sentinelone_posture_provider": {
    "is_disabled": false,
    "name": "SentinelOne"
  }
}
```

<h3 id="update-a-sentinelone-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|SentinelOne posture provider ID|
|body|body|[SentinelOnePostureProviderUpdateRequest](#schemasentinelonepostureproviderupdaterequest)|true|SentinelOne posture provider attributes|
|» sentinelone_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "management_url": "http://example.com",
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "sentinelone",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-sentinelone-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SentinelOne posture provider response|[SentinelOnePostureProviderResponse](#schemasentinelonepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a SentinelOne posture provider

<a id="opIdPortalAPI.SentinelOnePostureProviderController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/sentinelone_posture_providers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sentinelone_posture_providers/{id}`

Deletes a SentinelOne posture provider and every device synced from it. This
cannot be undone. Policies keep their posture rules. Once no enabled SentinelOne
provider is left, `sentinelone.*` posture rules see every device as not
enrolled. Returns the deleted provider.


<h3 id="delete-a-sentinelone-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|SentinelOne posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "management_url": "http://example.com",
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "sentinelone",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-sentinelone-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SentinelOne posture provider response|[SentinelOnePostureProviderResponse](#schemasentinelonepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a SentinelOne posture provider

<a id="opIdPortalAPI.SentinelOnePostureProviderController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/sentinelone_posture_providers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sentinelone_posture_provider": {
      "is_disabled": false,
      "name": "SentinelOne"
    }
  }'
```

`PATCH /sentinelone_posture_providers/{id}`

Renames, enables, or disables a SentinelOne posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled SentinelOne provider is left, `sentinelone.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "sentinelone_posture_provider": {
    "is_disabled": false,
    "name": "SentinelOne"
  }
}
```

<h3 id="update-a-sentinelone-posture-provider-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|SentinelOne posture provider ID|
|body|body|[SentinelOnePostureProviderUpdateRequest](#schemasentinelonepostureproviderupdaterequest)|true|SentinelOne posture provider attributes|
|» sentinelone_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "management_url": "http://example.com",
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "sentinelone",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-sentinelone-posture-provider-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SentinelOne posture provider response|[SentinelOnePostureProviderResponse](#schemasentinelonepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-actors">Actors</h1>

## Show Actor

<a id="opIdPortalAPI.ActorController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actors/{id}`

<h3 id="show-actor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Actor ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "allow_email_otp_sign_in": false,
    "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "john.doe@example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2024-01-01T00:00:00Z",
    "is_disabled": false,
    "last_seen_at": "2024-01-15T10:30:00Z",
    "name": "John Doe",
    "type": "account_admin_user",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-actor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ActorResponse|[ActorResponse](#schemaactorresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update an Actor

<a id="opIdPortalAPI.ActorController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actor": {
      "allow_email_otp_sign_in": false,
      "email": "joe.user@example.com",
      "is_disabled": false,
      "name": "Joe User",
      "type": "account_user"
    }
  }'
```

`PUT /actors/{id}`

Updates an Actor.

**Warning: changing an Actor's email signs them out and unlinks their identity providers.**

If the `email` field is changed to a different address, Firezone will:

- Unlink every identity provider (Google, Okta, Entra, etc.) connected to this Actor.
- End all active sessions for this Actor, both in the admin portal and on
  connected Client devices, no matter how the Actor signed in (identity
  provider, email OTP, or username and password). The user will be signed
  out immediately.

The Actor will need to sign in again through their identity provider, which
re-links it under the new email.

Email comparison ignores case and surrounding whitespace, so changes like
`User@Example.com` → `user@example.com` are not treated as a real change
and will not unlink identities.

**Setting `is_disabled` to `true` immediately revokes all of the Actor's
active Client tokens and portal sessions.** An Actor cannot disable itself.

Admins and API clients can only be changed in the portal, and users can only
be promoted to admin there.


> Body parameter

```json
{
  "actor": {
    "allow_email_otp_sign_in": false,
    "email": "joe.user@example.com",
    "is_disabled": false,
    "name": "Joe User",
    "type": "account_user"
  }
}
```

<h3 id="update-an-actor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Actor ID|
|body|body|[ActorUpdateRequest](#schemaactorupdaterequest)|true|Actor attributes|
|» actor|body|object|true|none|
|» » allow_email_otp_sign_in|body|boolean|false|Allow Email OTP Sign In|
|» » email|body|string \| null|false|Actor Email. Optional for service accounts.|
|» » is_disabled|body|boolean|false|Whether the Actor is disabled. Setting this to `true` immediately revokes the Actor's active Client tokens and portal sessions. An Actor cannot disable itself.|
|» » name|body|string|false|Actor Name|
|» » type|body|string|false|Actor Type. Users can only be promoted to admin in the portal.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|account_user|
|» » type|service_account|

> Example responses

> 200 Response

```json
{
  "data": {
    "allow_email_otp_sign_in": false,
    "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "john.doe@example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2024-01-01T00:00:00Z",
    "is_disabled": false,
    "last_seen_at": "2024-01-15T10:30:00Z",
    "name": "John Doe",
    "type": "account_admin_user",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-an-actor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ActorResponse|[ActorResponse](#schemaactorresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete an Actor

<a id="opIdPortalAPI.ActorController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /actors/{id}`

Deletes an Actor. Admins and API clients can only be deleted in the portal.

<h3 id="delete-an-actor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Actor ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "allow_email_otp_sign_in": false,
    "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "john.doe@example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2024-01-01T00:00:00Z",
    "is_disabled": false,
    "last_seen_at": "2024-01-15T10:30:00Z",
    "name": "John Doe",
    "type": "account_admin_user",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-an-actor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ActorResponse|[ActorResponse](#schemaactorresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update an Actor

<a id="opIdPortalAPI.ActorController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actor": {
      "allow_email_otp_sign_in": false,
      "email": "joe.user@example.com",
      "is_disabled": false,
      "name": "Joe User",
      "type": "account_user"
    }
  }'
```

`PATCH /actors/{id}`

Updates an Actor.

**Warning: changing an Actor's email signs them out and unlinks their identity providers.**

If the `email` field is changed to a different address, Firezone will:

- Unlink every identity provider (Google, Okta, Entra, etc.) connected to this Actor.
- End all active sessions for this Actor, both in the admin portal and on
  connected Client devices, no matter how the Actor signed in (identity
  provider, email OTP, or username and password). The user will be signed
  out immediately.

The Actor will need to sign in again through their identity provider, which
re-links it under the new email.

Email comparison ignores case and surrounding whitespace, so changes like
`User@Example.com` → `user@example.com` are not treated as a real change
and will not unlink identities.

**Setting `is_disabled` to `true` immediately revokes all of the Actor's
active Client tokens and portal sessions.** An Actor cannot disable itself.

Admins and API clients can only be changed in the portal, and users can only
be promoted to admin there.


> Body parameter

```json
{
  "actor": {
    "allow_email_otp_sign_in": false,
    "email": "joe.user@example.com",
    "is_disabled": false,
    "name": "Joe User",
    "type": "account_user"
  }
}
```

<h3 id="update-an-actor-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Actor ID|
|body|body|[ActorUpdateRequest](#schemaactorupdaterequest)|true|Actor attributes|
|» actor|body|object|true|none|
|» » allow_email_otp_sign_in|body|boolean|false|Allow Email OTP Sign In|
|» » email|body|string \| null|false|Actor Email. Optional for service accounts.|
|» » is_disabled|body|boolean|false|Whether the Actor is disabled. Setting this to `true` immediately revokes the Actor's active Client tokens and portal sessions. An Actor cannot disable itself.|
|» » name|body|string|false|Actor Name|
|» » type|body|string|false|Actor Type. Users can only be promoted to admin in the portal.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|account_user|
|» » type|service_account|

> Example responses

> 200 Response

```json
{
  "data": {
    "allow_email_otp_sign_in": false,
    "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "john.doe@example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2024-01-01T00:00:00Z",
    "is_disabled": false,
    "last_seen_at": "2024-01-15T10:30:00Z",
    "name": "John Doe",
    "type": "account_admin_user",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-an-actor-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ActorResponse|[ActorResponse](#schemaactorresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Actors

<a id="opIdPortalAPI.ActorController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actors`

<h3 id="list-actors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Users returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Actors with this exact name|
|email|query|string|false|Filter to Actors with this exact email|
|type|query|string|false|Filter to Actors of this type: account_user, account_admin_user, service_account, or api_client.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "allow_email_otp_sign_in": false,
      "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "john.doe@example.com",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2024-01-01T00:00:00Z",
      "is_disabled": false,
      "last_seen_at": "2024-01-15T10:30:00Z",
      "name": "John Doe",
      "type": "account_admin_user",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-actors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ActorsResponse|[ActorsResponse](#schemaactorsresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create an Actor

<a id="opIdPortalAPI.ActorController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actor": {
      "allow_email_otp_sign_in": false,
      "email": "joe.user@example.com",
      "name": "Joe User",
      "type": "account_user"
    }
  }'
```

`POST /actors`

Creates an Actor. Admins can only be created in the portal.

> Body parameter

```json
{
  "actor": {
    "allow_email_otp_sign_in": false,
    "email": "joe.user@example.com",
    "name": "Joe User",
    "type": "account_user"
  }
}
```

<h3 id="create-an-actor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ActorCreateRequest](#schemaactorcreaterequest)|true|Actor attributes|
|» actor|body|object|true|none|
|» » allow_email_otp_sign_in|body|boolean|false|Allow Email OTP Sign In|
|» » email|body|string \| null|false|Actor Email. Optional for service accounts.|
|» » name|body|string|true|Actor Name|
|» » type|body|string|true|Actor Type. Admins can only be created in the portal.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|account_user|
|» » type|service_account|

> Example responses

> 201 Response

```json
{
  "data": {
    "allow_email_otp_sign_in": false,
    "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "john.doe@example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2024-01-01T00:00:00Z",
    "is_disabled": false,
    "last_seen_at": "2024-01-15T10:30:00Z",
    "name": "John Doe",
    "type": "account_admin_user",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-an-actor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|ActorResponse|[ActorResponse](#schemaactorresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-client-tokens">Client Tokens</h1>

## List Client Tokens for service_account, account_user, or account_admin_user actors

<a id="opIdPortalAPI.ClientTokenController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000/client_tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actors/{actor_id}/client_tokens`

<h3 id="list-client-tokens-for-serviceaccount-accountuser-or-accountadminuser-actors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|
|limit|query|integer|false|Limit Client Tokens returned|
|page_cursor|query|string|false|Next/Prev page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "expires_at": "2025-01-15T12:34:56.789Z",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-15T12:34:56.789Z",
      "updated_at": "2025-01-15T12:34:56.789Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-client-tokens-for-serviceaccount-accountuser-or-accountadminuser-actors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Token List Response|[ClientTokenListResponse](#schemaclienttokenlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create a Client Token for a Service Account

<a id="opIdPortalAPI.ClientTokenController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000/client_tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_token": {
      "expires_at": "2025-01-15T12:34:56.789Z"
    }
  }'
```

`POST /actors/{actor_id}/client_tokens`

> Body parameter

```json
{
  "client_token": {
    "expires_at": "2025-01-15T12:34:56.789Z"
  }
}
```

<h3 id="create-a-client-token-for-a-service-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|
|body|body|[ClientTokenRequest](#schemaclienttokenrequest)|true|Client Token Attributes|
|» client_token|body|[ClientTokenCreate](#schemaclienttokencreate)|true|Client Token attributes|

> Example responses

> 201 Response

```json
{
  "data": {
    "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "expires_at": "2025-01-15T12:34:56.789Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-15T12:34:56.789Z",
    "token": "secret-token-here",
    "updated_at": "2025-01-15T12:34:56.789Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-a-client-token-for-a-service-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Client Token Response|[ClientTokenCreateResponse](#schemaclienttokencreateresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete all Client Tokens for service_account, account_user, or account_admin_user actors

<a id="opIdPortalAPI.ClientTokenController.delete_all"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000/client_tokens \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /actors/{actor_id}/client_tokens`

<h3 id="delete-all-client-tokens-for-serviceaccount-accountuser-or-accountadminuser-actors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "deleted_count": 3
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-all-client-tokens-for-serviceaccount-accountuser-or-accountadminuser-actors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted Client Tokens Response|[DeletedClientTokensResponse](#schemadeletedclienttokensresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show a Client Token for service_account, account_user, or account_admin_user actors

<a id="opIdPortalAPI.ClientTokenController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000/client_tokens/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actors/{actor_id}/client_tokens/{id}`

<h3 id="show-a-client-token-for-serviceaccount-accountuser-or-accountadminuser-actors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|
|id|path|string|true|Client Token ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "expires_at": "2025-01-15T12:34:56.789Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-15T12:34:56.789Z",
    "updated_at": "2025-01-15T12:34:56.789Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-client-token-for-serviceaccount-accountuser-or-accountadminuser-actors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client Token Response|[ClientTokenShowResponse](#schemaclienttokenshowresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Client Token

<a id="opIdPortalAPI.ClientTokenController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/actors/00000000-0000-0000-0000-000000000000/client_tokens/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /actors/{actor_id}/client_tokens/{id}`

<h3 id="delete-a-client-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actor_id|path|string|true|Actor ID|
|id|path|string|true|Client Token ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-client-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted Client Token Response|[DeletedClientTokenResponse](#schemadeletedclienttokenresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-email-otp-auth-providers">Email OTP Auth Providers</h1>

## List Email OTP Auth Providers

<a id="opIdPortalAPI.EmailOTPAuthProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/email_otp_auth_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /email_otp_auth_providers`

<h3 id="list-email-otp-auth-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Email OTP Auth Providers returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Email OTP Auth Providers with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "issuer": "firezone",
      "name": "Email OTP",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-email-otp-auth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Email OTP Auth Provider Response|[EmailOTPAuthProviderListResponse](#schemaemailotpauthproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Email OTP Auth Provider

<a id="opIdPortalAPI.EmailOTPAuthProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/email_otp_auth_providers/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /email_otp_auth_providers/{id}`

<h3 id="show-email-otp-auth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Email OTP Auth Provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "issuer": "firezone",
    "name": "Email OTP",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-email-otp-auth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Email OTP Auth Provider Response|[EmailOTPAuthProviderResponse](#schemaemailotpauthproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-entra-auth-providers">Entra Auth Providers</h1>

## List Entra Auth Providers

<a id="opIdPortalAPI.EntraAuthProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/entra_auth_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /entra_auth_providers`

<h3 id="list-entra-auth-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Entra Auth Providers returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Entra Auth Providers with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "email_claim": "upn",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": false,
      "is_disabled": false,
      "name": "Entra",
      "portal_session_lifetime_secs": 28800,
      "sign_in_tenant_id": "12345678-1234-1234-1234-123456789012",
      "tenant_ids": [
        "12345678-1234-1234-1234-123456789012"
      ],
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-entra-auth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entra Auth Provider Response|[EntraAuthProviderListResponse](#schemaentraauthproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Entra Auth Provider

<a id="opIdPortalAPI.EntraAuthProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/entra_auth_providers/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /entra_auth_providers/{id}`

<h3 id="show-entra-auth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Entra Auth Provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "email_claim": "upn",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": false,
    "is_disabled": false,
    "name": "Entra",
    "portal_session_lifetime_secs": 28800,
    "sign_in_tenant_id": "12345678-1234-1234-1234-123456789012",
    "tenant_ids": [
      "12345678-1234-1234-1234-123456789012"
    ],
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-entra-auth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entra Auth Provider Response|[EntraAuthProviderResponse](#schemaentraauthproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-iru-posture-providers">Iru Posture Providers</h1>

## Show an Iru posture provider

<a id="opIdPortalAPI.IruPostureProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/iru_posture_providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /iru_posture_providers/{id}`

<h3 id="show-an-iru-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Iru posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "region": "us",
    "subdomain": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "iru",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-an-iru-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Iru posture provider response|[IruPostureProviderResponse](#schemairupostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update an Iru posture provider

<a id="opIdPortalAPI.IruPostureProviderController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/iru_posture_providers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "iru_posture_provider": {
      "is_disabled": false,
      "name": "Iru"
    }
  }'
```

`PUT /iru_posture_providers/{id}`

Renames, enables, or disables an Iru posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Iru provider is left, `iru.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "iru_posture_provider": {
    "is_disabled": false,
    "name": "Iru"
  }
}
```

<h3 id="update-an-iru-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Iru posture provider ID|
|body|body|[IruPostureProviderUpdateRequest](#schemairupostureproviderupdaterequest)|true|Iru posture provider attributes|
|» iru_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "region": "us",
    "subdomain": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "iru",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-an-iru-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Iru posture provider response|[IruPostureProviderResponse](#schemairupostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete an Iru posture provider

<a id="opIdPortalAPI.IruPostureProviderController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/iru_posture_providers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /iru_posture_providers/{id}`

Deletes an Iru posture provider and every device synced from it. This
cannot be undone. Policies keep their posture rules. Once no enabled Iru
provider is left, `iru.*` posture rules see every device as not
enrolled. Returns the deleted provider.


<h3 id="delete-an-iru-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Iru posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "region": "us",
    "subdomain": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "iru",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-an-iru-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Iru posture provider response|[IruPostureProviderResponse](#schemairupostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update an Iru posture provider

<a id="opIdPortalAPI.IruPostureProviderController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/iru_posture_providers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "iru_posture_provider": {
      "is_disabled": false,
      "name": "Iru"
    }
  }'
```

`PATCH /iru_posture_providers/{id}`

Renames, enables, or disables an Iru posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Iru provider is left, `iru.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "iru_posture_provider": {
    "is_disabled": false,
    "name": "Iru"
  }
}
```

<h3 id="update-an-iru-posture-provider-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Iru posture provider ID|
|body|body|[IruPostureProviderUpdateRequest](#schemairupostureproviderupdaterequest)|true|Iru posture provider attributes|
|» iru_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "region": "us",
    "subdomain": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "iru",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-an-iru-posture-provider-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Iru posture provider response|[IruPostureProviderResponse](#schemairupostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Iru posture providers

<a id="opIdPortalAPI.IruPostureProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/iru_posture_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /iru_posture_providers`

<h3 id="list-iru-posture-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit providers returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "region": "us",
      "subdomain": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "iru",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-iru-posture-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Iru posture provider response|[IruPostureProviderListResponse](#schemairupostureproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-sites">Sites</h1>

## List Sites

<a id="opIdPortalAPI.SiteController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites`

<h3 id="list-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Sites returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to the Site with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "name": "vpc-us-east"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site Response|[SiteListResponse](#schemasitelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create Site

<a id="opIdPortalAPI.SiteController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "site": {
      "name": "vpc-us-east"
    }
  }'
```

`POST /sites`

> Body parameter

```json
{
  "site": {
    "name": "vpc-us-east"
  }
}
```

<h3 id="create-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SiteCreateRequest](#schemasitecreaterequest)|true|Site Attributes|
|» site|body|object|true|none|
|» » name|body|string|true|Site Name|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "name": "vpc-us-east"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Site Response|[SiteResponse](#schemasiteresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Site

<a id="opIdPortalAPI.SiteController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{id}`

<h3 id="show-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Site ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "name": "vpc-us-east"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site Response|[SiteResponse](#schemasiteresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Site

<a id="opIdPortalAPI.SiteController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "site": {
      "name": "vpc-us-east"
    }
  }'
```

`PUT /sites/{id}`

> Body parameter

```json
{
  "site": {
    "name": "vpc-us-east"
  }
}
```

<h3 id="update-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Site ID|
|body|body|[SiteUpdateRequest](#schemasiteupdaterequest)|true|Site Attributes|
|» site|body|object|true|none|
|» » name|body|string|false|Site Name|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "name": "vpc-us-east"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site Response|[SiteResponse](#schemasiteresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Site

<a id="opIdPortalAPI.SiteController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{id}`

Deletes a Site. Deleting is not blocked when the Site still has Gateways or Resources.

The Site's Gateways, Gateway tokens, and Resources are deleted with it. Every Policy for those Resources is deleted too, and Clients lose access to them right away. The system-managed Internet Site cannot be deleted.


<h3 id="delete-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Site ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "name": "vpc-us-east"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site Response|[SiteResponse](#schemasiteresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Site

<a id="opIdPortalAPI.SiteController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/sites/00000000-0000-0000-0000-000000000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "site": {
      "name": "vpc-us-east"
    }
  }'
```

`PATCH /sites/{id}`

> Body parameter

```json
{
  "site": {
    "name": "vpc-us-east"
  }
}
```

<h3 id="update-a-site-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Site ID|
|body|body|[SiteUpdateRequest](#schemasiteupdaterequest)|true|Site Attributes|
|» site|body|object|true|none|
|» » name|body|string|false|Site Name|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "name": "vpc-us-east"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-site-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site Response|[SiteResponse](#schemasiteresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-google-auth-providers">Google Auth Providers</h1>

## List Google Auth Providers

<a id="opIdPortalAPI.GoogleAuthProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/google_auth_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /google_auth_providers`

<h3 id="list-google-auth-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Google Auth Providers returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Google Auth Providers with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": true,
      "is_disabled": false,
      "issuer": "https://accounts.google.com",
      "name": "Google",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z",
      "workspace_domains": [
        "string"
      ]
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-google-auth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Google Auth Provider Response|[GoogleAuthProviderListResponse](#schemagoogleauthproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Google Auth Provider

<a id="opIdPortalAPI.GoogleAuthProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/google_auth_providers/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /google_auth_providers/{id}`

<h3 id="show-google-auth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Google Auth Provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": true,
    "is_disabled": false,
    "issuer": "https://accounts.google.com",
    "name": "Google",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z",
    "workspace_domains": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-google-auth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Google Auth Provider Response|[GoogleAuthProviderResponse](#schemagoogleauthproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-intune-posture-providers">Intune Posture Providers</h1>

## Show an Intune posture provider

<a id="opIdPortalAPI.IntunePostureProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/intune_posture_providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /intune_posture_providers/{id}`

<h3 id="show-an-intune-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Intune posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "intune",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-an-intune-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Intune posture provider response|[IntunePostureProviderResponse](#schemaintunepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update an Intune posture provider

<a id="opIdPortalAPI.IntunePostureProviderController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/intune_posture_providers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "intune_posture_provider": {
      "is_disabled": false,
      "name": "Microsoft Intune"
    }
  }'
```

`PUT /intune_posture_providers/{id}`

Renames, enables, or disables an Intune posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Intune provider is left, `intune.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "intune_posture_provider": {
    "is_disabled": false,
    "name": "Microsoft Intune"
  }
}
```

<h3 id="update-an-intune-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Intune posture provider ID|
|body|body|[IntunePostureProviderUpdateRequest](#schemaintunepostureproviderupdaterequest)|true|Intune posture provider attributes|
|» intune_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "intune",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-an-intune-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Intune posture provider response|[IntunePostureProviderResponse](#schemaintunepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete an Intune posture provider

<a id="opIdPortalAPI.IntunePostureProviderController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/intune_posture_providers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /intune_posture_providers/{id}`

Deletes an Intune posture provider and every device synced from it. This
cannot be undone. Policies keep their posture rules. Once no enabled Intune
provider is left, `intune.*` posture rules see every device as not
enrolled. Returns the deleted provider.


<h3 id="delete-an-intune-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Intune posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "intune",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-an-intune-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Intune posture provider response|[IntunePostureProviderResponse](#schemaintunepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update an Intune posture provider

<a id="opIdPortalAPI.IntunePostureProviderController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/intune_posture_providers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "intune_posture_provider": {
      "is_disabled": false,
      "name": "Microsoft Intune"
    }
  }'
```

`PATCH /intune_posture_providers/{id}`

Renames, enables, or disables an Intune posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Intune provider is left, `intune.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "intune_posture_provider": {
    "is_disabled": false,
    "name": "Microsoft Intune"
  }
}
```

<h3 id="update-an-intune-posture-provider-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Intune posture provider ID|
|body|body|[IntunePostureProviderUpdateRequest](#schemaintunepostureproviderupdaterequest)|true|Intune posture provider attributes|
|» intune_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "intune",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-an-intune-posture-provider-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Intune posture provider response|[IntunePostureProviderResponse](#schemaintunepostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Intune posture providers

<a id="opIdPortalAPI.IntunePostureProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/intune_posture_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /intune_posture_providers`

<h3 id="list-intune-posture-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit providers returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "tenant_id": "string",
      "type": "intune",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-intune-posture-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Intune posture provider response|[IntunePostureProviderListResponse](#schemaintunepostureproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-x509-auth-providers">X.509 Auth Providers</h1>

## Show X.509 Auth Provider

<a id="opIdPortalAPI.X509AuthProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/x509_auth_provider \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /x509_auth_provider`

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "context": "clients_only",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": true,
    "name": "X.509",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-x509-auth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|X.509 Auth Provider Response|[X509AuthProviderResponse](#schemax509authproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-resources">Resources</h1>

## List Resources

<a id="opIdPortalAPI.ResourceController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /resources`

<h3 id="list-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Resources returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Resources with this exact name|
|type|query|string|false|Filter to Resources of this type: cidr, ip, dns, or device_pool.|
|site_id|query|string|false|Filter to Resources connected to this Site|
|address|query|string|false|Filter to Resources with this exact address|
|ip_stack|query|string|false|Filter to Resources with this exact ip_stack|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "address": "10.0.0.10",
      "address_description": "Production Database",
      "filters": [
        {
          "ports": [
            "5432"
          ],
          "protocol": "tcp"
        }
      ],
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "name": "Prod DB",
      "site_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
      "type": "ip"
    },
    {
      "address": null,
      "address_description": null,
      "device_membership_criteria": {
        "device": {
          "field": "actor_id",
          "op": "eq",
          "value": {
            "subject": "actor_id"
          }
        }
      },
      "filters": [],
      "id": "5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d",
      "name": "My Devices",
      "type": "device_pool"
    }
  ],
  "metadata": {
    "count": 2,
    "limit": 10,
    "next_page": null,
    "prev_page": null
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resource Response|[ResourceListResponse](#schemaresourcelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Create Resource

<a id="opIdPortalAPI.ResourceController.create"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resource": {
      "device_membership_criteria": {
        "actor_group": {
          "field": "id",
          "op": "eq",
          "value": "b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c"
        }
      },
      "name": "Engineering Devices",
      "type": "device_pool"
    }
  }'
```

`POST /resources`

> Body parameter

```json
{
  "resource": {
    "device_membership_criteria": {
      "actor_group": {
        "field": "id",
        "op": "eq",
        "value": "b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c"
      }
    },
    "name": "Engineering Devices",
    "type": "device_pool"
  }
}
```

<h3 id="create-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ResourceCreateRequest](#schemaresourcecreaterequest)|true|Resource Attributes|
|» resource|body|object|true|none|
|» » address|body|string \| null|false|Resource address. Required for `cidr`, `ip` and `dns`. `device_pool` and `internet` Resources ignore it.|
|» » address_description|body|string \| null|false|Resource address description|
|» » device_membership_criteria|body|[DeviceMembershipCriteria](#schemadevicemembershipcriteria)|false|Who a `device_pool` Resource holds. Required for a device pool, absent for every<br>other Resource type.<br><br>The object has exactly one key, naming where the field lives: `device` is the<br>Client row itself, and `actor_group` is a group the Client's owner belongs to.<br>The value is one rule comparing a field against either a literal or an attribute<br>of the Actor asking for access. More sources can be added later without changing<br>the rules already stored.<br><br>The four rules the API accepts, and who each one holds:<br><br>    {"device": {"field": "id", "op": "in", "value": ["<client id>", ...]}}<br>    {"device": {"field": "actor_id", "op": "eq", "value": {"subject": "actor_id"}}}<br>    {"device": {"field": "account_id", "op": "eq", "value": {"subject": "account_id"}}}<br>    {"actor_group": {"field": "id", "op": "eq", "value": "<group id>"}}<br><br>In order: exactly the Clients named, the asking Actor's own Clients, every Client<br>in the Account, and the Clients of every Actor in one Group.<br><br>Editing the list of Clients the first rule names drops the connections to the<br>Clients removed and leaves every other connection through the pool alone.<br><br>Every other change to this field is a breaking update, because any Client can move<br>in or out of the pool: every active connection through the pool is dropped, and<br>Clients reconnect to the members they may still reach.<br><br>Clients older than the device-pool protocol only understand a pool that names its<br>members, so they are sent the first rule and never the other three.<br>|
|» » filters|body|[[ResourceFilter](#schemaresourcefilter)]|false|Traffic filters restricting the protocols and ports the Resource exposes|
|» » ip_stack|body|string \| null|false|IP stack type. Only supported for DNS resources.|
|» » name|body|string|true|Resource name|
|» » site_id|body|string(uuid) \| null|false|Site to connect the Resource to. Required for all types except `device_pool`, which takes none. The Internet Site is reserved for the Internet Resource and cannot be used.|
|» » type|body|string|true|Resource type. `internet` is accepted only in the Internet Site. `device_pool` takes no `site_id` and no `address`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » ip_stack|ipv4_only|
|» » ip_stack|ipv6_only|
|» » ip_stack|dual|
|» » type|cidr|
|» » type|ip|
|» » type|dns|
|» » type|internet|
|» » type|device_pool|

> Example responses

> 201 Response

```json
{
  "data": {
    "address": null,
    "address_description": null,
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [],
    "id": "5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d",
    "name": "My Devices",
    "type": "device_pool"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="create-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Resource Response|[ResourceResponse](#schemaresourceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Resource

<a id="opIdPortalAPI.ResourceController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /resources/{id}`

<h3 id="show-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Resource ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "address": null,
    "address_description": null,
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [],
    "id": "5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d",
    "name": "My Devices",
    "type": "device_pool"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resource Response|[ResourceResponse](#schemaresourceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update Resource

<a id="opIdPortalAPI.ResourceController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resource": {
      "device_membership_criteria": {
        "actor_group": {
          "field": "id",
          "op": "eq",
          "value": "b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c"
        }
      },
      "type": "device_pool"
    }
  }'
```

`PUT /resources/{id}`

> Body parameter

```json
{
  "resource": {
    "device_membership_criteria": {
      "actor_group": {
        "field": "id",
        "op": "eq",
        "value": "b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c"
      }
    },
    "type": "device_pool"
  }
}
```

<h3 id="update-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Resource ID|
|body|body|[ResourceUpdateRequest](#schemaresourceupdaterequest)|true|Resource Attributes|
|» resource|body|object|true|none|
|» » address|body|string \| null|false|Resource address. Required for `cidr`, `ip` and `dns`. `device_pool` and `internet` Resources ignore it.|
|» » address_description|body|string \| null|false|Resource address description|
|» » device_membership_criteria|body|[DeviceMembershipCriteria](#schemadevicemembershipcriteria)|false|Who a `device_pool` Resource holds. Required for a device pool, absent for every<br>other Resource type.<br><br>The object has exactly one key, naming where the field lives: `device` is the<br>Client row itself, and `actor_group` is a group the Client's owner belongs to.<br>The value is one rule comparing a field against either a literal or an attribute<br>of the Actor asking for access. More sources can be added later without changing<br>the rules already stored.<br><br>The four rules the API accepts, and who each one holds:<br><br>    {"device": {"field": "id", "op": "in", "value": ["<client id>", ...]}}<br>    {"device": {"field": "actor_id", "op": "eq", "value": {"subject": "actor_id"}}}<br>    {"device": {"field": "account_id", "op": "eq", "value": {"subject": "account_id"}}}<br>    {"actor_group": {"field": "id", "op": "eq", "value": "<group id>"}}<br><br>In order: exactly the Clients named, the asking Actor's own Clients, every Client<br>in the Account, and the Clients of every Actor in one Group.<br><br>Editing the list of Clients the first rule names drops the connections to the<br>Clients removed and leaves every other connection through the pool alone.<br><br>Every other change to this field is a breaking update, because any Client can move<br>in or out of the pool: every active connection through the pool is dropped, and<br>Clients reconnect to the members they may still reach.<br><br>Clients older than the device-pool protocol only understand a pool that names its<br>members, so they are sent the first rule and never the other three.<br>|
|» » filters|body|[[ResourceFilter](#schemaresourcefilter)]|false|Traffic filters restricting the protocols and ports the Resource exposes|
|» » ip_stack|body|string \| null|false|IP stack type. Only supported for DNS resources.|
|» » name|body|string|false|Resource name|
|» » site_id|body|string(uuid) \| null|false|Site to connect the Resource to. Required for all types except `device_pool`, which takes none. The Internet Site is reserved for the Internet Resource and cannot be used.|
|» » type|body|string|false|Resource type. `internet` is accepted only in the Internet Site. `device_pool` takes no `site_id` and no `address`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » ip_stack|ipv4_only|
|» » ip_stack|ipv6_only|
|» » ip_stack|dual|
|» » type|cidr|
|» » type|ip|
|» » type|dns|
|» » type|internet|
|» » type|device_pool|

> Example responses

> 200 Response

```json
{
  "data": {
    "address": null,
    "address_description": null,
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [],
    "id": "5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d",
    "name": "My Devices",
    "type": "device_pool"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resource Response|[ResourceResponse](#schemaresourceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete Resource

<a id="opIdPortalAPI.ResourceController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources/00000000-0000-0000-0000-000000000000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /resources/{id}`

Deletes a Resource. Deleting is not blocked when Policies still use the Resource.

Every Policy for the Resource is deleted with it, and Clients lose access to the Resource right away. Use `GET /policies?resource_id=...` first to see which Policies will be deleted. The Internet Resource cannot be deleted.


<h3 id="delete-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Resource ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "address": null,
    "address_description": null,
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [],
    "id": "5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d",
    "name": "My Devices",
    "type": "device_pool"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resource Response|[ResourceResponse](#schemaresourceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update Resource

<a id="opIdPortalAPI.ResourceController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources/00000000-0000-0000-0000-000000000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resource": {
      "device_membership_criteria": {
        "actor_group": {
          "field": "id",
          "op": "eq",
          "value": "b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c"
        }
      },
      "type": "device_pool"
    }
  }'
```

`PATCH /resources/{id}`

> Body parameter

```json
{
  "resource": {
    "device_membership_criteria": {
      "actor_group": {
        "field": "id",
        "op": "eq",
        "value": "b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c"
      }
    },
    "type": "device_pool"
  }
}
```

<h3 id="update-resource-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Resource ID|
|body|body|[ResourceUpdateRequest](#schemaresourceupdaterequest)|true|Resource Attributes|
|» resource|body|object|true|none|
|» » address|body|string \| null|false|Resource address. Required for `cidr`, `ip` and `dns`. `device_pool` and `internet` Resources ignore it.|
|» » address_description|body|string \| null|false|Resource address description|
|» » device_membership_criteria|body|[DeviceMembershipCriteria](#schemadevicemembershipcriteria)|false|Who a `device_pool` Resource holds. Required for a device pool, absent for every<br>other Resource type.<br><br>The object has exactly one key, naming where the field lives: `device` is the<br>Client row itself, and `actor_group` is a group the Client's owner belongs to.<br>The value is one rule comparing a field against either a literal or an attribute<br>of the Actor asking for access. More sources can be added later without changing<br>the rules already stored.<br><br>The four rules the API accepts, and who each one holds:<br><br>    {"device": {"field": "id", "op": "in", "value": ["<client id>", ...]}}<br>    {"device": {"field": "actor_id", "op": "eq", "value": {"subject": "actor_id"}}}<br>    {"device": {"field": "account_id", "op": "eq", "value": {"subject": "account_id"}}}<br>    {"actor_group": {"field": "id", "op": "eq", "value": "<group id>"}}<br><br>In order: exactly the Clients named, the asking Actor's own Clients, every Client<br>in the Account, and the Clients of every Actor in one Group.<br><br>Editing the list of Clients the first rule names drops the connections to the<br>Clients removed and leaves every other connection through the pool alone.<br><br>Every other change to this field is a breaking update, because any Client can move<br>in or out of the pool: every active connection through the pool is dropped, and<br>Clients reconnect to the members they may still reach.<br><br>Clients older than the device-pool protocol only understand a pool that names its<br>members, so they are sent the first rule and never the other three.<br>|
|» » filters|body|[[ResourceFilter](#schemaresourcefilter)]|false|Traffic filters restricting the protocols and ports the Resource exposes|
|» » ip_stack|body|string \| null|false|IP stack type. Only supported for DNS resources.|
|» » name|body|string|false|Resource name|
|» » site_id|body|string(uuid) \| null|false|Site to connect the Resource to. Required for all types except `device_pool`, which takes none. The Internet Site is reserved for the Internet Resource and cannot be used.|
|» » type|body|string|false|Resource type. `internet` is accepted only in the Internet Site. `device_pool` takes no `site_id` and no `address`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » ip_stack|ipv4_only|
|» » ip_stack|ipv6_only|
|» » ip_stack|dual|
|» » type|cidr|
|» » type|ip|
|» » type|dns|
|» » type|internet|
|» » type|device_pool|

> Example responses

> 200 Response

```json
{
  "data": {
    "address": null,
    "address_description": null,
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [],
    "id": "5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d",
    "name": "My Devices",
    "type": "device_pool"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-resource-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resource Response|[ResourceResponse](#schemaresourceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-sentinelone-devices">SentinelOne Devices</h1>

## List synced SentinelOne devices

<a id="opIdPortalAPI.SentinelOneDeviceController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/sentinelone_devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sentinelone_devices`

<h3 id="list-synced-sentinelone-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit devices returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "last_logged_in_user_name": "string",
      "sentinelone_id": "string",
      "user_actions_needed": [
        "string"
      ],
      "operational_state": "string",
      "os_name": "string",
      "os_arch": "string",
      "remote_profiling_state": "string",
      "has_containerized_workload": true,
      "firewall_enabled": true,
      "proxy_console": true,
      "model_name": "string",
      "infected": true,
      "proxy_deep_visibility": true,
      "console_migration_status": "string",
      "is_hyper_automate": true,
      "network_quarantine_enabled": true,
      "scan_finished_at": "1970-01-01T00:00:00Z",
      "is_active": true,
      "external_id": "string",
      "last_successful_scan_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "os_username": "string",
      "active_protection": [
        "string"
      ],
      "threat_reboot_required": true,
      "synced_at": "1970-01-01T00:00:00Z",
      "inserted_at": "1970-01-01T00:00:00Z",
      "location_enabled": true,
      "group_id": "string",
      "site_id": "string",
      "storage_name": "string",
      "machine_sid": "string",
      "remote_profiling_state_expires_at": "1970-01-01T00:00:00Z",
      "group_name": "string",
      "allow_remote_shell": true,
      "tags": [
        {}
      ],
      "protected_pods_count": 0,
      "os_type": "string",
      "proxy_pac_file_usage": true,
      "serial_number": "string",
      "ad_computer_member_of": [
        "string"
      ],
      "locations": [
        {}
      ],
      "installer_type": "string",
      "last_active_at": "1970-01-01T00:00:00Z",
      "is_ad_connector": true,
      "ad_user_principal_name": "string",
      "core_count": 0,
      "detection_state": "string",
      "active_threats": 0,
      "is_decommissioned": true,
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cpu_count": 0,
      "group_ip": "string",
      "protected_tasks_count": 0,
      "storage_type": "string",
      "account_name": "string",
      "ranger_status": "string",
      "scan_status": "string",
      "total_memory": 0,
      "encrypted_applications": true,
      "ad_last_user_distinguished_name": "string",
      "missing_permissions": [
        "string"
      ],
      "is_uninstalled": true,
      "computer_name": "string",
      "scan_aborted_at": "1970-01-01T00:00:00Z",
      "in_remote_shell_session": true,
      "first_full_mode_at": "1970-01-01T00:00:00Z",
      "ad_last_user_member_of": [
        "string"
      ],
      "ad_mail": "string",
      "external_ip": "string",
      "is_pending_uninstall": true,
      "sentinelone_account_id": "string",
      "last_ip_to_management": "string",
      "proxy_method": "string",
      "network_status": "string",
      "os_revision": "string",
      "agent_version": "string",
      "registered_at": "1970-01-01T00:00:00Z",
      "is_up_to_date": true,
      "site_name": "string",
      "apps_vulnerability_status": "string",
      "domain": "string",
      "ad_computer_distinguished_name": "string",
      "os_start_time": "1970-01-01T00:00:00Z",
      "mitigation_mode_suspicious": "string",
      "machine_type": "string",
      "uuid": "string",
      "ranger_version": "string",
      "mitigation_mode": "string",
      "operational_state_expires_at": "1970-01-01T00:00:00Z",
      "network_interfaces": [
        {}
      ],
      "full_disk_scan_updated_at": "1970-01-01T00:00:00Z",
      "cloud_providers": {},
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scan_started_at": "1970-01-01T00:00:00Z",
      "protected_containers_count": 0,
      "cpu_id": "string",
      "location_type": "string"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-synced-sentinelone-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SentinelOne device response|[SentinelOneDeviceListResponse](#schemasentinelonedevicelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show a synced SentinelOne device

<a id="opIdPortalAPI.SentinelOneDeviceController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/sentinelone_devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sentinelone_devices/{sentinelone_agent}`

<h3 id="show-a-synced-sentinelone-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sentinelone_agent|path|string|true|Synced SentinelOne agent UUID|

> Example responses

> 200 Response

```json
{
  "data": {
    "last_logged_in_user_name": "string",
    "sentinelone_id": "string",
    "user_actions_needed": [
      "string"
    ],
    "operational_state": "string",
    "os_name": "string",
    "os_arch": "string",
    "remote_profiling_state": "string",
    "has_containerized_workload": true,
    "firewall_enabled": true,
    "proxy_console": true,
    "model_name": "string",
    "infected": true,
    "proxy_deep_visibility": true,
    "console_migration_status": "string",
    "is_hyper_automate": true,
    "network_quarantine_enabled": true,
    "scan_finished_at": "1970-01-01T00:00:00Z",
    "is_active": true,
    "external_id": "string",
    "last_successful_scan_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "os_username": "string",
    "active_protection": [
      "string"
    ],
    "threat_reboot_required": true,
    "synced_at": "1970-01-01T00:00:00Z",
    "inserted_at": "1970-01-01T00:00:00Z",
    "location_enabled": true,
    "group_id": "string",
    "site_id": "string",
    "storage_name": "string",
    "machine_sid": "string",
    "remote_profiling_state_expires_at": "1970-01-01T00:00:00Z",
    "group_name": "string",
    "allow_remote_shell": true,
    "tags": [
      {}
    ],
    "protected_pods_count": 0,
    "os_type": "string",
    "proxy_pac_file_usage": true,
    "serial_number": "string",
    "ad_computer_member_of": [
      "string"
    ],
    "locations": [
      {}
    ],
    "installer_type": "string",
    "last_active_at": "1970-01-01T00:00:00Z",
    "is_ad_connector": true,
    "ad_user_principal_name": "string",
    "core_count": 0,
    "detection_state": "string",
    "active_threats": 0,
    "is_decommissioned": true,
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "cpu_count": 0,
    "group_ip": "string",
    "protected_tasks_count": 0,
    "storage_type": "string",
    "account_name": "string",
    "ranger_status": "string",
    "scan_status": "string",
    "total_memory": 0,
    "encrypted_applications": true,
    "ad_last_user_distinguished_name": "string",
    "missing_permissions": [
      "string"
    ],
    "is_uninstalled": true,
    "computer_name": "string",
    "scan_aborted_at": "1970-01-01T00:00:00Z",
    "in_remote_shell_session": true,
    "first_full_mode_at": "1970-01-01T00:00:00Z",
    "ad_last_user_member_of": [
      "string"
    ],
    "ad_mail": "string",
    "external_ip": "string",
    "is_pending_uninstall": true,
    "sentinelone_account_id": "string",
    "last_ip_to_management": "string",
    "proxy_method": "string",
    "network_status": "string",
    "os_revision": "string",
    "agent_version": "string",
    "registered_at": "1970-01-01T00:00:00Z",
    "is_up_to_date": true,
    "site_name": "string",
    "apps_vulnerability_status": "string",
    "domain": "string",
    "ad_computer_distinguished_name": "string",
    "os_start_time": "1970-01-01T00:00:00Z",
    "mitigation_mode_suspicious": "string",
    "machine_type": "string",
    "uuid": "string",
    "ranger_version": "string",
    "mitigation_mode": "string",
    "operational_state_expires_at": "1970-01-01T00:00:00Z",
    "network_interfaces": [
      {}
    ],
    "full_disk_scan_updated_at": "1970-01-01T00:00:00Z",
    "cloud_providers": {},
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "scan_started_at": "1970-01-01T00:00:00Z",
    "protected_containers_count": 0,
    "cpu_id": "string",
    "location_type": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-synced-sentinelone-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SentinelOne device response|[SentinelOneDeviceResponse](#schemasentinelonedeviceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-okta-auth-providers">Okta Auth Providers</h1>

## List Okta Auth Providers

<a id="opIdPortalAPI.OktaAuthProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/okta_auth_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /okta_auth_providers`

<h3 id="list-okta-auth-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Okta Auth Providers returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Okta Auth Providers with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_id": "0oa1b2c3d4e5EXAMPLE",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": false,
      "is_disabled": false,
      "issuer": "https://example.okta.com",
      "name": "Okta",
      "okta_domain": "example.okta.com",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-okta-auth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Okta Auth Provider Response|[OktaAuthProviderListResponse](#schemaoktaauthproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Okta Auth Provider

<a id="opIdPortalAPI.OktaAuthProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/okta_auth_providers/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /okta_auth_providers/{id}`

<h3 id="show-okta-auth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Okta Auth Provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_id": "0oa1b2c3d4e5EXAMPLE",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": false,
    "is_disabled": false,
    "issuer": "https://example.okta.com",
    "name": "Okta",
    "okta_domain": "example.okta.com",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-okta-auth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Okta Auth Provider Response|[OktaAuthProviderResponse](#schemaoktaauthproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-defender-devices">Defender Devices</h1>

## Show a synced Defender device

<a id="opIdPortalAPI.DefenderDeviceController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/defender_devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /defender_devices/{id}`

<h3 id="show-a-synced-defender-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Synced Defender device ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "last_seen_at": "1970-01-01T00:00:00Z",
    "machine_tags": [
      "string"
    ],
    "managed_by": "string",
    "vm_resource_id": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "os_platform": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "last_ip_address": "string",
    "device_value": "string",
    "inserted_at": "1970-01-01T00:00:00Z",
    "os_architecture": "string",
    "rbac_group_name": "string",
    "exposure_level": "string",
    "defender_id": "string",
    "entra_joined": true,
    "exclusion_reason": "string",
    "vm_id": "string",
    "vm_cloud_provider": "string",
    "os_processor": "string",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entra_device_id": "string",
    "os_build": 0,
    "managed_by_status": "string",
    "is_excluded": true,
    "vm_subscription_id": "string",
    "last_external_ip_address": "string",
    "health_status": "string",
    "risk_score": "string",
    "is_potential_duplication": true,
    "agent_version": "string",
    "rbac_group_id": 0,
    "version": "string",
    "ip_addresses": [
      {}
    ],
    "onboarding_status": "string",
    "computer_dns_name": "string",
    "first_seen_at": "1970-01-01T00:00:00Z",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-synced-defender-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defender device response|[DefenderDeviceResponse](#schemadefenderdeviceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List synced Defender devices

<a id="opIdPortalAPI.DefenderDeviceController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/defender_devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /defender_devices`

<h3 id="list-synced-defender-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit devices returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "last_seen_at": "1970-01-01T00:00:00Z",
      "machine_tags": [
        "string"
      ],
      "managed_by": "string",
      "vm_resource_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "os_platform": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "last_ip_address": "string",
      "device_value": "string",
      "inserted_at": "1970-01-01T00:00:00Z",
      "os_architecture": "string",
      "rbac_group_name": "string",
      "exposure_level": "string",
      "defender_id": "string",
      "entra_joined": true,
      "exclusion_reason": "string",
      "vm_id": "string",
      "vm_cloud_provider": "string",
      "os_processor": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "entra_device_id": "string",
      "os_build": 0,
      "managed_by_status": "string",
      "is_excluded": true,
      "vm_subscription_id": "string",
      "last_external_ip_address": "string",
      "health_status": "string",
      "risk_score": "string",
      "is_potential_duplication": true,
      "agent_version": "string",
      "rbac_group_id": 0,
      "version": "string",
      "ip_addresses": [
        {}
      ],
      "onboarding_status": "string",
      "computer_dns_name": "string",
      "first_seen_at": "1970-01-01T00:00:00Z",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-synced-defender-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defender device response|[DefenderDeviceListResponse](#schemadefenderdevicelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-intune-devices">Intune Devices</h1>

## Show a synced Intune device

<a id="opIdPortalAPI.IntuneDeviceController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/intune_devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /intune_devices/{id}`

<h3 id="show-a-synced-intune-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Synced Intune device ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "device_registration_state": "string",
    "attestation_operating_system_rev_list_info": "string",
    "entra_registered": true,
    "attestation_boot_app_security_version": "string",
    "operating_system": "string",
    "is_supervised": true,
    "notes": "string",
    "free_storage_space_bytes": 0,
    "attestation_issued_at": "1970-01-01T00:00:00Z",
    "config_manager_compliance_policy": true,
    "user_display_name": "string",
    "config_manager_device_configuration": true,
    "config_manager_inventory": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "enrolled_at": "1970-01-01T00:00:00Z",
    "total_storage_space_bytes": 0,
    "attestation_operating_system_kernel_debugging": true,
    "attestation_data_execution_policy_enabled": true,
    "ethernet_mac_address": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "inserted_at": "1970-01-01T00:00:00Z",
    "attestation_health_status_mismatch_info": "string",
    "intune_id": "string",
    "management_certificate_expires_at": "1970-01-01T00:00:00Z",
    "compliance_state": "string",
    "require_user_enrollment_approval": true,
    "attestation_code_integrity_check_version": "string",
    "attestation_pcr0": "string",
    "attestation_boot_revision_list_info": "string",
    "attestation_reset_count": 0,
    "attestation_safe_mode": true,
    "managed_device_owner_type": "string",
    "serial_number": "string",
    "attestation_secure_boot": true,
    "device_category_display_name": "string",
    "attestation_code_integrity_policy": "string",
    "attestation_virtual_secure_mode": true,
    "last_sync_at": "1970-01-01T00:00:00Z",
    "is_encrypted": true,
    "eas_activated": true,
    "manufacturer": "string",
    "eas_activated_at": "1970-01-01T00:00:00Z",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "attestation_early_launch_anti_malware_driver_protection": true,
    "management_agent": "string",
    "attestation_tpm_version": "string",
    "management_state": "string",
    "wifi_mac_address": "string",
    "attestation_code_integrity": true,
    "user_principal_name": "string",
    "entra_device_id": "string",
    "android_security_patch_level": "1970-01-01",
    "attestation_pcr_hash_algorithm": "string",
    "device_enrollment_type": "string",
    "subscriber_carrier": "string",
    "enrollment_profile_name": "string",
    "model": "string",
    "attestation_boot_manager_version": "string",
    "partner_reported_threat_state": "string",
    "config_manager_modern_apps": true,
    "user_id": "string",
    "jail_broken": true,
    "eas_device_id": "string",
    "exchange_last_successful_sync_at": "1970-01-01T00:00:00Z",
    "attestation_bit_locker_enabled": true,
    "attestation_content_version": "string",
    "exchange_access_state": "string",
    "managed_device_name": "string",
    "udid": "string",
    "attestation_secure_boot_config_policy_fingerprint": "string",
    "attestation_identity_key": "string",
    "attestation_boot_manager_security_version": "string",
    "compliance_grace_period_expiration_at": "1970-01-01T00:00:00Z",
    "exchange_access_state_reason": "string",
    "attestation_windows_pe": true,
    "attestation_status": "string",
    "iccid": "string",
    "meid": "string",
    "attestation_supported": true,
    "attestation_test_signing": true,
    "attestation_boot_debugging": true,
    "phone_number": "string",
    "attestation_restart_count": 0,
    "imei": "string",
    "os_version": "string",
    "physical_memory_bytes": 0,
    "config_manager_windows_update_for_business": true,
    "email_address": "string",
    "device_name": "string",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "config_manager_resource_access": true
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-synced-intune-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Intune device response|[IntuneDeviceResponse](#schemaintunedeviceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List synced Intune devices

<a id="opIdPortalAPI.IntuneDeviceController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/intune_devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /intune_devices`

<h3 id="list-synced-intune-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit devices returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "device_registration_state": "string",
      "attestation_operating_system_rev_list_info": "string",
      "entra_registered": true,
      "attestation_boot_app_security_version": "string",
      "operating_system": "string",
      "is_supervised": true,
      "notes": "string",
      "free_storage_space_bytes": 0,
      "attestation_issued_at": "1970-01-01T00:00:00Z",
      "config_manager_compliance_policy": true,
      "user_display_name": "string",
      "config_manager_device_configuration": true,
      "config_manager_inventory": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "enrolled_at": "1970-01-01T00:00:00Z",
      "total_storage_space_bytes": 0,
      "attestation_operating_system_kernel_debugging": true,
      "attestation_data_execution_policy_enabled": true,
      "ethernet_mac_address": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "inserted_at": "1970-01-01T00:00:00Z",
      "attestation_health_status_mismatch_info": "string",
      "intune_id": "string",
      "management_certificate_expires_at": "1970-01-01T00:00:00Z",
      "compliance_state": "string",
      "require_user_enrollment_approval": true,
      "attestation_code_integrity_check_version": "string",
      "attestation_pcr0": "string",
      "attestation_boot_revision_list_info": "string",
      "attestation_reset_count": 0,
      "attestation_safe_mode": true,
      "managed_device_owner_type": "string",
      "serial_number": "string",
      "attestation_secure_boot": true,
      "device_category_display_name": "string",
      "attestation_code_integrity_policy": "string",
      "attestation_virtual_secure_mode": true,
      "last_sync_at": "1970-01-01T00:00:00Z",
      "is_encrypted": true,
      "eas_activated": true,
      "manufacturer": "string",
      "eas_activated_at": "1970-01-01T00:00:00Z",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "attestation_early_launch_anti_malware_driver_protection": true,
      "management_agent": "string",
      "attestation_tpm_version": "string",
      "management_state": "string",
      "wifi_mac_address": "string",
      "attestation_code_integrity": true,
      "user_principal_name": "string",
      "entra_device_id": "string",
      "android_security_patch_level": "1970-01-01",
      "attestation_pcr_hash_algorithm": "string",
      "device_enrollment_type": "string",
      "subscriber_carrier": "string",
      "enrollment_profile_name": "string",
      "model": "string",
      "attestation_boot_manager_version": "string",
      "partner_reported_threat_state": "string",
      "config_manager_modern_apps": true,
      "user_id": "string",
      "jail_broken": true,
      "eas_device_id": "string",
      "exchange_last_successful_sync_at": "1970-01-01T00:00:00Z",
      "attestation_bit_locker_enabled": true,
      "attestation_content_version": "string",
      "exchange_access_state": "string",
      "managed_device_name": "string",
      "udid": "string",
      "attestation_secure_boot_config_policy_fingerprint": "string",
      "attestation_identity_key": "string",
      "attestation_boot_manager_security_version": "string",
      "compliance_grace_period_expiration_at": "1970-01-01T00:00:00Z",
      "exchange_access_state_reason": "string",
      "attestation_windows_pe": true,
      "attestation_status": "string",
      "iccid": "string",
      "meid": "string",
      "attestation_supported": true,
      "attestation_test_signing": true,
      "attestation_boot_debugging": true,
      "phone_number": "string",
      "attestation_restart_count": 0,
      "imei": "string",
      "os_version": "string",
      "physical_memory_bytes": 0,
      "config_manager_windows_update_for_business": true,
      "email_address": "string",
      "device_name": "string",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "config_manager_resource_access": true
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-synced-intune-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Intune device response|[IntuneDeviceListResponse](#schemaintunedevicelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-sophos-posture-providers">Sophos Posture Providers</h1>

## List Sophos posture providers

<a id="opIdPortalAPI.SophosPostureProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/sophos_posture_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sophos_posture_providers`

<h3 id="list-sophos-posture-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit providers returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "client_id": "string",
      "data_region_url": "http://example.com",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "tenant_id": "string",
      "type": "sophos",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-sophos-posture-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sophos posture provider response|[SophosPostureProviderListResponse](#schemasophospostureproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show a Sophos posture provider

<a id="opIdPortalAPI.SophosPostureProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/sophos_posture_providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sophos_posture_providers/{id}`

<h3 id="show-a-sophos-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Sophos posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "client_id": "string",
    "data_region_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "sophos",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-sophos-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sophos posture provider response|[SophosPostureProviderResponse](#schemasophospostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Sophos posture provider

<a id="opIdPortalAPI.SophosPostureProviderController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/sophos_posture_providers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sophos_posture_provider": {
      "is_disabled": false,
      "name": "Sophos XDR"
    }
  }'
```

`PUT /sophos_posture_providers/{id}`

Renames, enables, or disables a Sophos posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Sophos provider is left, `sophos.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "sophos_posture_provider": {
    "is_disabled": false,
    "name": "Sophos XDR"
  }
}
```

<h3 id="update-a-sophos-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Sophos posture provider ID|
|body|body|[SophosPostureProviderUpdateRequest](#schemasophospostureproviderupdaterequest)|true|Sophos posture provider attributes|
|» sophos_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "client_id": "string",
    "data_region_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "sophos",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-sophos-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sophos posture provider response|[SophosPostureProviderResponse](#schemasophospostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Sophos posture provider

<a id="opIdPortalAPI.SophosPostureProviderController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/sophos_posture_providers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sophos_posture_providers/{id}`

Deletes a Sophos posture provider and every device synced from it. This
cannot be undone. Policies keep their posture rules. Once no enabled Sophos
provider is left, `sophos.*` posture rules see every device as not
enrolled. Returns the deleted provider.


<h3 id="delete-a-sophos-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Sophos posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "client_id": "string",
    "data_region_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "sophos",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-sophos-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sophos posture provider response|[SophosPostureProviderResponse](#schemasophospostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Sophos posture provider

<a id="opIdPortalAPI.SophosPostureProviderController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/sophos_posture_providers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sophos_posture_provider": {
      "is_disabled": false,
      "name": "Sophos XDR"
    }
  }'
```

`PATCH /sophos_posture_providers/{id}`

Renames, enables, or disables a Sophos posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Sophos provider is left, `sophos.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "sophos_posture_provider": {
    "is_disabled": false,
    "name": "Sophos XDR"
  }
}
```

<h3 id="update-a-sophos-posture-provider-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Sophos posture provider ID|
|body|body|[SophosPostureProviderUpdateRequest](#schemasophospostureproviderupdaterequest)|true|Sophos posture provider attributes|
|» sophos_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "client_id": "string",
    "data_region_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "sophos",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-sophos-posture-provider-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sophos posture provider response|[SophosPostureProviderResponse](#schemasophospostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-defender-posture-providers">Defender Posture Providers</h1>

## Show a Defender posture provider

<a id="opIdPortalAPI.DefenderPostureProviderController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/defender_posture_providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /defender_posture_providers/{id}`

<h3 id="show-a-defender-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Defender posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "defender",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-defender-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defender posture provider response|[DefenderPostureProviderResponse](#schemadefenderpostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Defender posture provider

<a id="opIdPortalAPI.DefenderPostureProviderController.update"></a>

> Code samples

```bash
curl https://api.firezone.dev/defender_posture_providers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defender_posture_provider": {
      "is_disabled": false,
      "name": "Microsoft Defender for Endpoint"
    }
  }'
```

`PUT /defender_posture_providers/{id}`

Renames, enables, or disables a Defender posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Defender provider is left, `defender.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "defender_posture_provider": {
    "is_disabled": false,
    "name": "Microsoft Defender for Endpoint"
  }
}
```

<h3 id="update-a-defender-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Defender posture provider ID|
|body|body|[DefenderPostureProviderUpdateRequest](#schemadefenderpostureproviderupdaterequest)|true|Defender posture provider attributes|
|» defender_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "defender",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-defender-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defender posture provider response|[DefenderPostureProviderResponse](#schemadefenderpostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Delete a Defender posture provider

<a id="opIdPortalAPI.DefenderPostureProviderController.delete"></a>

> Code samples

```bash
curl https://api.firezone.dev/defender_posture_providers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /defender_posture_providers/{id}`

Deletes a Defender posture provider and every device synced from it. This
cannot be undone. Policies keep their posture rules. Once no enabled Defender
provider is left, `defender.*` posture rules see every device as not
enrolled. Returns the deleted provider.


<h3 id="delete-a-defender-posture-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Defender posture provider ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "defender",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="delete-a-defender-posture-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defender posture provider response|[DefenderPostureProviderResponse](#schemadefenderpostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update a Defender posture provider

<a id="opIdPortalAPI.DefenderPostureProviderController.update (2)"></a>

> Code samples

```bash
curl https://api.firezone.dev/defender_posture_providers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defender_posture_provider": {
      "is_disabled": false,
      "name": "Microsoft Defender for Endpoint"
    }
  }'
```

`PATCH /defender_posture_providers/{id}`

Renames, enables, or disables a Defender posture provider. Connecting a
provider or changing its tenant happens in the web console.

A disabled provider stops syncing, and policies stop trusting its devices.
Once no enabled Defender provider is left, `defender.*` posture rules see every
device as not enrolled. Enabling requires a verified provider, clears any
sync error, and queues a device sync.


> Body parameter

```json
{
  "defender_posture_provider": {
    "is_disabled": false,
    "name": "Microsoft Defender for Endpoint"
  }
}
```

<h3 id="update-a-defender-posture-provider-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Defender posture provider ID|
|body|body|[DefenderPostureProviderUpdateRequest](#schemadefenderpostureproviderupdaterequest)|true|Defender posture provider attributes|
|» defender_posture_provider|body|object|true|none|
|» » is_disabled|body|boolean|false|Whether the provider is disabled. A provider can be enabled only while it is verified.|
|» » name|body|string|false|Name shown to admins, unique across the account's posture providers|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "defender",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-a-defender-posture-provider-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defender posture provider response|[DefenderPostureProviderResponse](#schemadefenderpostureproviderresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Defender posture providers

<a id="opIdPortalAPI.DefenderPostureProviderController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/defender_posture_providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /defender_posture_providers`

<h3 id="list-defender-posture-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit providers returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "tenant_id": "string",
      "type": "defender",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-defender-posture-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defender posture provider response|[DefenderPostureProviderListResponse](#schemadefenderpostureproviderlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-memberships">Memberships</h1>

## List Memberships

<a id="opIdPortalAPI.MembershipController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups/00000000-0000-0000-0000-000000000000/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{group_id}/memberships`

Lists the Actors in a Group.

The built-in Everyone Group has no explicit memberships. For it, this lists every user and admin Actor in the account, which is who the Group grants access to. Service accounts and API clients are never members of the Everyone Group.


<h3 id="list-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string|true|ID|
|limit|query|integer|false|Limit Memberships returned|
|page_cursor|query|string|false|Next/Prev page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "email": "john.doe@example.com",
      "id": "7cb89288-1fb3-433e-a522-2d087e45988d",
      "name": "John Doe",
      "type": "account_user"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Membership Response|[MembershipListResponse](#schemamembershiplistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update Memberships

<a id="opIdPortalAPI.MembershipController.update_put"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups/00000000-0000-0000-0000-000000000000/memberships \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "memberships": [
      {
        "actor_id": "4ddfa557-7dfc-484f-894c-2024ec3fe9f7"
      },
      {
        "actor_id": "89d22f71-939d-442d-b148-897b730adfb4"
      }
    ]
  }'
```

`PUT /groups/{group_id}/memberships`

Replaces the Group's entire membership list with the given Actors.

Any Actor not named in the request is removed from the Group. To add or
remove individual Actors without disturbing the rest, use `PATCH`.

Members that are not changing keep their membership rows, so a replace that
leaves the list untouched is a no-op rather than a full rewrite.

Repeating an Actor in the request body is not an error; the list is
deduplicated. `actor_ids` in the response is sorted, not returned in
request order.


> Body parameter

```json
{
  "memberships": [
    {
      "actor_id": "4ddfa557-7dfc-484f-894c-2024ec3fe9f7"
    },
    {
      "actor_id": "89d22f71-939d-442d-b148-897b730adfb4"
    }
  ]
}
```

<h3 id="update-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string|true|ID|
|body|body|[MembershipPutRequest](#schemamembershipputrequest)|true|Membership Attributes|
|» memberships|body|[object]|true|none|
|» » actor_id|body|string(uuid)|false|Actor ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_ids": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7",
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Membership Response|[MembershipResponse](#schemamembershipresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Update an Membership

<a id="opIdPortalAPI.MembershipController.update_patch"></a>

> Code samples

```bash
curl https://api.firezone.dev/groups/00000000-0000-0000-0000-000000000000/memberships \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "memberships": {
      "add": [
        "4ddfa557-7dfc-484f-894c-2024ec3fe9f7"
      ],
      "remove": [
        "89d22f71-939d-442d-b148-897b730adfb4"
      ]
    }
  }'
```

`PATCH /groups/{group_id}/memberships`

Adds and/or removes individual Actors, leaving every other member of the
Group untouched.

Both operations are idempotent: adding an Actor already in the Group and
removing one that isn't are both no-ops. `remove` is applied before `add`,
so an Actor named in both ends up in the Group. Retrying a request that may
already have been applied is therefore safe.

Repeating an Actor within `add` or `remove` is not an error; both lists are
deduplicated. `actor_ids` in the response is sorted.


> Body parameter

```json
{
  "memberships": {
    "add": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7"
    ],
    "remove": [
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

<h3 id="update-an-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string|true|ID|
|body|body|[MembershipPatchRequest](#schemamembershippatchrequest)|true|Membership Attributes|
|» memberships|body|object|true|none|
|» » add|body|[string(uuid)]|false|Array of Actor IDs|
|» » remove|body|[string(uuid)]|false|Array of Actor IDs|

> Example responses

> 200 Response

```json
{
  "data": {
    "actor_ids": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7",
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="update-an-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Membership Response|[MembershipResponse](#schemamembershipresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-google-directories">Google Directories</h1>

## List Google Directories

<a id="opIdPortalAPI.GoogleDirectoryController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/google_directories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /google_directories`

<h3 id="list-google-directories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Google Directories returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Google Directories with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "disabled_reason": "string",
      "domain": "example.com",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "group_sync_mode": "all",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "impersonation_email": "admin@example.com",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "name": "Google",
      "orgunit_sync_enabled": true,
      "synced_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-google-directories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Google Directory Response|[GoogleDirectoryListResponse](#schemagoogledirectorylistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Google Directory

<a id="opIdPortalAPI.GoogleDirectoryController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/google_directories/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /google_directories/{id}`

<h3 id="show-google-directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Google Directory ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "disabled_reason": "string",
    "domain": "example.com",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "group_sync_mode": "all",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "impersonation_email": "admin@example.com",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "name": "Google",
    "orgunit_sync_enabled": true,
    "synced_at": "2025-01-15T10:30:00Z",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-google-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Google Directory Response|[GoogleDirectoryResponse](#schemagoogledirectoryresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-santa-devices">Santa Devices</h1>

## List synced Santa devices

<a id="opIdPortalAPI.SantaDeviceController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/santa_devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /santa_devices`

<h3 id="list-synced-santa-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit devices returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "configured_client_mode": "string",
      "first_seen_at": "1970-01-01T00:00:00Z",
      "hostname": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "last_preflight_at": "1970-01-01T00:00:00Z",
      "last_preflight_ip": "string",
      "last_seen_client_mode": "string",
      "last_sync_at": "1970-01-01T00:00:00Z",
      "machine_model": "string",
      "os_build": "string",
      "os_type": "string",
      "os_version": "string",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "primary_user": "string",
      "primary_user_groups": [
        "string"
      ],
      "rule_sync_at": "1970-01-01T00:00:00Z",
      "santa_id": "string",
      "santa_version": "string",
      "santanetd_version": "string",
      "serial_number": "string",
      "sip_status": 0,
      "synced_at": "1970-01-01T00:00:00Z",
      "tags": [
        "string"
      ],
      "temporary_admin_mode_ends_at": "1970-01-01T00:00:00Z",
      "temporary_admin_mode_user": "string",
      "temporary_monitor_mode_ends_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-synced-santa-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Santa device response|[SantaDeviceListResponse](#schemasantadevicelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show a synced Santa device

<a id="opIdPortalAPI.SantaDeviceController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/santa_devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /santa_devices/{id}`

<h3 id="show-a-synced-santa-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Synced Santa device ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "configured_client_mode": "string",
    "first_seen_at": "1970-01-01T00:00:00Z",
    "hostname": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "last_preflight_at": "1970-01-01T00:00:00Z",
    "last_preflight_ip": "string",
    "last_seen_client_mode": "string",
    "last_sync_at": "1970-01-01T00:00:00Z",
    "machine_model": "string",
    "os_build": "string",
    "os_type": "string",
    "os_version": "string",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "primary_user": "string",
    "primary_user_groups": [
      "string"
    ],
    "rule_sync_at": "1970-01-01T00:00:00Z",
    "santa_id": "string",
    "santa_version": "string",
    "santanetd_version": "string",
    "serial_number": "string",
    "sip_status": 0,
    "synced_at": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "temporary_admin_mode_ends_at": "1970-01-01T00:00:00Z",
    "temporary_admin_mode_user": "string",
    "temporary_monitor_mode_ends_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-synced-santa-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Santa device response|[SantaDeviceResponse](#schemasantadeviceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-entra-directories">Entra Directories</h1>

## List Entra Directories

<a id="opIdPortalAPI.EntraDirectoryController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/entra_directories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /entra_directories`

<h3 id="list-entra-directories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Entra Directories returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Entra Directories with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "disabled_reason": "string",
      "email_field": "userPrincipalName",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "name": "Entra",
      "sync_all_groups": false,
      "synced_at": "2025-01-15T10:30:00Z",
      "tenant_id": "12345678-1234-1234-1234-123456789012",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-entra-directories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entra Directory Response|[EntraDirectoryListResponse](#schemaentradirectorylistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Show Entra Directory

<a id="opIdPortalAPI.EntraDirectoryController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/entra_directories/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /entra_directories/{id}`

<h3 id="show-entra-directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Entra Directory ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "disabled_reason": "string",
    "email_field": "userPrincipalName",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "name": "Entra",
    "sync_all_groups": false,
    "synced_at": "2025-01-15T10:30:00Z",
    "tenant_id": "12345678-1234-1234-1234-123456789012",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-entra-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entra Directory Response|[EntraDirectoryResponse](#schemaentradirectoryresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-account">Account</h1>

## Show Account

<a id="opIdPortalAPI.AccountController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/account \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account`

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "key": "string",
    "legal_name": "string",
    "limits": {
      "account_admin_users": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "adhoc_service_accounts": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "monthly_active_users": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "service_accounts": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "sites": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "users": {
        "available": 0,
        "total": 0,
        "used": 0
      }
    },
    "name": "string",
    "slug": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AccountResponse|[AccountResponse](#schemaaccountresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-sophos-devices">Sophos Devices</h1>

## Show a synced Sophos device

<a id="opIdPortalAPI.SophosDeviceController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/sophos_devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sophos_devices/{id}`

<h3 id="show-a-synced-sophos-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Synced Sophos endpoint ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "mac_addresses": [
      "string"
    ],
    "os_name": "string",
    "last_seen_at": "1970-01-01T00:00:00Z",
    "tamper_protection_supported": true,
    "last_agent_update_at": "1970-01-01T00:00:00Z",
    "os_minor_version": 0,
    "associated_person_via_login": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "os_platform": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "inserted_at": "1970-01-01T00:00:00Z",
    "ipv6_addresses": [
      "string"
    ],
    "sophos_tenant_id": "string",
    "group_id": "string",
    "group_name": "string",
    "tags": [
      {}
    ],
    "serial_number": "string",
    "isolation_admin_isolated": true,
    "group_hierarchy": [
      {}
    ],
    "health_threats_status": "string",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "encryption_volumes": [
      {}
    ],
    "type": "string",
    "cloud_instance_id": "string",
    "associated_person_id": "string",
    "last_os_update_at": "1970-01-01T00:00:00Z",
    "encryption_overall_status": "string",
    "associated_person_name": "string",
    "health_overall": "string",
    "assigned_products": [
      {}
    ],
    "cloud_provider": "string",
    "packages": {},
    "os_build": 0,
    "os_is_server": true,
    "health_services_status": "string",
    "isolation_status": "string",
    "device_software": {},
    "cloned": true,
    "lockdown_status": "string",
    "ipv4_addresses": [
      "string"
    ],
    "health_service_details": [
      {}
    ],
    "tamper_protection_enabled": true,
    "online": true,
    "sophos_id": "string",
    "isolation_self_isolated": true,
    "os_major_version": 0,
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hostname": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-synced-sophos-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sophos device response|[SophosDeviceResponse](#schemasophosdeviceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List synced Sophos devices

<a id="opIdPortalAPI.SophosDeviceController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/sophos_devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sophos_devices`

<h3 id="list-synced-sophos-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit devices returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mac_addresses": [
        "string"
      ],
      "os_name": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "tamper_protection_supported": true,
      "last_agent_update_at": "1970-01-01T00:00:00Z",
      "os_minor_version": 0,
      "associated_person_via_login": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "os_platform": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "inserted_at": "1970-01-01T00:00:00Z",
      "ipv6_addresses": [
        "string"
      ],
      "sophos_tenant_id": "string",
      "group_id": "string",
      "group_name": "string",
      "tags": [
        {}
      ],
      "serial_number": "string",
      "isolation_admin_isolated": true,
      "group_hierarchy": [
        {}
      ],
      "health_threats_status": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "encryption_volumes": [
        {}
      ],
      "type": "string",
      "cloud_instance_id": "string",
      "associated_person_id": "string",
      "last_os_update_at": "1970-01-01T00:00:00Z",
      "encryption_overall_status": "string",
      "associated_person_name": "string",
      "health_overall": "string",
      "assigned_products": [
        {}
      ],
      "cloud_provider": "string",
      "packages": {},
      "os_build": 0,
      "os_is_server": true,
      "health_services_status": "string",
      "isolation_status": "string",
      "device_software": {},
      "cloned": true,
      "lockdown_status": "string",
      "ipv4_addresses": [
        "string"
      ],
      "health_service_details": [
        {}
      ],
      "tamper_protection_enabled": true,
      "online": true,
      "sophos_id": "string",
      "isolation_self_isolated": true,
      "os_major_version": 0,
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "hostname": "string"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-synced-sophos-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sophos device response|[SophosDeviceListResponse](#schemasophosdevicelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-iru-devices">Iru Devices</h1>

## Show a synced Iru device

<a id="opIdPortalAPI.IruDeviceController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/iru_devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /iru_devices/{id}`

<h3 id="show-a-synced-iru-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Synced Iru device ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "host_name": "string",
    "gatekeeper_trusted_developers": true,
    "secure_boot_level": "string",
    "os_name": "string",
    "filevault_key_rotation_scheduled_at": "1970-01-01T00:00:00Z",
    "firewall_enabled": true,
    "model_name": "string",
    "firewall_logging_option": "string",
    "shared_ipad": true,
    "local_hostname": "string",
    "activation_lock_allowed_while_supervised": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "device_activation_lock_enabled": true,
    "gatekeeper_version": "string",
    "bootstrap_token_escrowed": true,
    "iru_id": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "asset_tag": "string",
    "blueprint_name": "string",
    "inserted_at": "1970-01-01T00:00:00Z",
    "data_roaming": true,
    "is_removed": true,
    "ssv_enabled": true,
    "filevault_key_type": "string",
    "device_capacity_gb": 0,
    "tags": [
      "string"
    ],
    "filevault_key_escrowed": true,
    "apple_silicon": true,
    "serial_number": "string",
    "cellular_technology": "string",
    "blueprint_id": "string",
    "user_manages_kext": true,
    "hotspot": true,
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "mdm_enabled": true,
    "user_email": "string",
    "gatekeeper_opaque_version": "string",
    "external_boot_level": "string",
    "firewall_collected_at": "1970-01-01T00:00:00Z",
    "software_update_requires_bootstrap_token": true,
    "xprotect_version": "string",
    "agent_installed": true,
    "mdm_manages_kext": true,
    "display_os_version": "string",
    "filevault_regeneration_needed": true,
    "is_missing": true,
    "last_enrolled_at": "1970-01-01T00:00:00Z",
    "gatekeeper_enabled": true,
    "firewall_version": "string",
    "first_enrolled_at": "1970-01-01T00:00:00Z",
    "firewall_logging": true,
    "model_identifier": "string",
    "os_build": "string",
    "user_activation_lock_enabled": true,
    "activation_lock_collected_at": "1970-01-01T00:00:00Z",
    "lost_mode_status": "string",
    "startup_settings_collected_at": "1970-01-01T00:00:00Z",
    "platform": "string",
    "filevault_enabled": true,
    "user_is_archived": true,
    "activation_lock_supported": true,
    "supplemental_build_version": "string",
    "sip_enabled": true,
    "firewall_allow_signed_applications": true,
    "model": "string",
    "supplemental_os_version_extra": "string",
    "user_id": "string",
    "bootstrap_token_auth": true,
    "firewall_block_all_incoming": true,
    "last_check_in_at": "1970-01-01T00:00:00Z",
    "firewall_stealth_mode": true,
    "kext_requires_bootstrap_token": true,
    "agent_version": "string",
    "activation_lock_bypass_code_failed": true,
    "inventory_collected_at": "1970-01-01T00:00:00Z",
    "any_signed_os": true,
    "filevault_collected_at": "1970-01-01T00:00:00Z",
    "gatekeeper_collected_at": "1970-01-01T00:00:00Z",
    "firewall_unloading": true,
    "os_version": "string",
    "malware_removal_tool_version": "string",
    "device_family": "string",
    "user_name": "string",
    "device_name": "string",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-a-synced-iru-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Iru device response|[IruDeviceResponse](#schemairudeviceresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List synced Iru devices

<a id="opIdPortalAPI.IruDeviceController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/iru_devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /iru_devices`

<h3 id="list-synced-iru-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit devices returned|
|page_cursor|query|string|false|Next/previous page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "host_name": "string",
      "gatekeeper_trusted_developers": true,
      "secure_boot_level": "string",
      "os_name": "string",
      "filevault_key_rotation_scheduled_at": "1970-01-01T00:00:00Z",
      "firewall_enabled": true,
      "model_name": "string",
      "firewall_logging_option": "string",
      "shared_ipad": true,
      "local_hostname": "string",
      "activation_lock_allowed_while_supervised": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "device_activation_lock_enabled": true,
      "gatekeeper_version": "string",
      "bootstrap_token_escrowed": true,
      "iru_id": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "asset_tag": "string",
      "blueprint_name": "string",
      "inserted_at": "1970-01-01T00:00:00Z",
      "data_roaming": true,
      "is_removed": true,
      "ssv_enabled": true,
      "filevault_key_type": "string",
      "device_capacity_gb": 0,
      "tags": [
        "string"
      ],
      "filevault_key_escrowed": true,
      "apple_silicon": true,
      "serial_number": "string",
      "cellular_technology": "string",
      "blueprint_id": "string",
      "user_manages_kext": true,
      "hotspot": true,
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "mdm_enabled": true,
      "user_email": "string",
      "gatekeeper_opaque_version": "string",
      "external_boot_level": "string",
      "firewall_collected_at": "1970-01-01T00:00:00Z",
      "software_update_requires_bootstrap_token": true,
      "xprotect_version": "string",
      "agent_installed": true,
      "mdm_manages_kext": true,
      "display_os_version": "string",
      "filevault_regeneration_needed": true,
      "is_missing": true,
      "last_enrolled_at": "1970-01-01T00:00:00Z",
      "gatekeeper_enabled": true,
      "firewall_version": "string",
      "first_enrolled_at": "1970-01-01T00:00:00Z",
      "firewall_logging": true,
      "model_identifier": "string",
      "os_build": "string",
      "user_activation_lock_enabled": true,
      "activation_lock_collected_at": "1970-01-01T00:00:00Z",
      "lost_mode_status": "string",
      "startup_settings_collected_at": "1970-01-01T00:00:00Z",
      "platform": "string",
      "filevault_enabled": true,
      "user_is_archived": true,
      "activation_lock_supported": true,
      "supplemental_build_version": "string",
      "sip_enabled": true,
      "firewall_allow_signed_applications": true,
      "model": "string",
      "supplemental_os_version_extra": "string",
      "user_id": "string",
      "bootstrap_token_auth": true,
      "firewall_block_all_incoming": true,
      "last_check_in_at": "1970-01-01T00:00:00Z",
      "firewall_stealth_mode": true,
      "kext_requires_bootstrap_token": true,
      "agent_version": "string",
      "activation_lock_bypass_code_failed": true,
      "inventory_collected_at": "1970-01-01T00:00:00Z",
      "any_signed_os": true,
      "filevault_collected_at": "1970-01-01T00:00:00Z",
      "gatekeeper_collected_at": "1970-01-01T00:00:00Z",
      "firewall_unloading": true,
      "os_version": "string",
      "malware_removal_tool_version": "string",
      "device_family": "string",
      "user_name": "string",
      "device_name": "string",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-synced-iru-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Iru device response|[IruDeviceListResponse](#schemairudevicelistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-pool-members">Pool Members</h1>

## List Pool Members

<a id="opIdPortalAPI.PoolMemberController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources/00000000-0000-0000-0000-000000000000/pool_members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /resources/{resource_id}/pool_members`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated. Read `device_membership_criteria` on the Resource instead, which
also describes the pools that pick their members by a rule.

Lists the Clients a `device_pool` Resource names as its members.

Returns 400 for any other Resource type, and for a device pool whose members are
picked by a rule rather than named.


<h3 id="list-pool-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Resource ID|
|limit|query|integer|false|Limit Pool Members returned|
|page_cursor|query|string|false|Next/Prev page cursor|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "7cb89288-1fb3-433e-a522-2d087e45988d",
      "last_seen_at": "2024-01-15T10:30:00Z",
      "name": "jane-laptop"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-pool-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pool Member Response|[PoolMemberListResponse](#schemapoolmemberlistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Replace Pool Members

<a id="opIdPortalAPI.PoolMemberController.update_put"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources/00000000-0000-0000-0000-000000000000/pool_members \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pool_members": [
      {
        "device_id": "7cb89288-1fb3-433e-a522-2d087e45988d"
      },
      {
        "device_id": "cc9f561a-444d-4083-ab38-0abc6cf2314c"
      }
    ]
  }'
```

`PUT /resources/{resource_id}/pool_members`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated. Write `device_membership_criteria` on the Resource instead.

Replaces the Resource's entire membership list with the given Clients.

Any Client not named in the request is removed from the pool. To add or
remove individual Clients without disturbing the rest, use `PATCH`.

Removing a Client drops its connections through the pool. Every other connection
through the pool is left alone.


> Body parameter

```json
{
  "pool_members": [
    {
      "device_id": "7cb89288-1fb3-433e-a522-2d087e45988d"
    },
    {
      "device_id": "cc9f561a-444d-4083-ab38-0abc6cf2314c"
    }
  ]
}
```

<h3 id="replace-pool-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Resource ID|
|body|body|[PoolMemberPutRequest](#schemapoolmemberputrequest)|true|Pool Member Attributes|
|» pool_members|body|[object]|true|none|
|» » device_id|body|string(uuid)|true|Client ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "device_ids": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7",
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="replace-pool-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pool Member Response|[PoolMemberResponse](#schemapoolmemberresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## Add or Remove Pool Members

<a id="opIdPortalAPI.PoolMemberController.update_patch"></a>

> Code samples

```bash
curl https://api.firezone.dev/resources/00000000-0000-0000-0000-000000000000/pool_members \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pool_members": {
      "add": [
        "7cb89288-1fb3-433e-a522-2d087e45988d"
      ],
      "remove": [
        "cc9f561a-444d-4083-ab38-0abc6cf2314c"
      ]
    }
  }'
```

`PATCH /resources/{resource_id}/pool_members`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated. Write `device_membership_criteria` on the Resource instead.

Adds and/or removes individual Clients, leaving every other member of the
pool untouched.

Both operations are idempotent: adding a Client already in the pool and
removing one that isn't are both no-ops. `remove` is applied before `add`,
so a Client named in both ends up in the pool.

Removing a Client drops its connections through the pool. Every other connection
through the pool is left alone.


> Body parameter

```json
{
  "pool_members": {
    "add": [
      "7cb89288-1fb3-433e-a522-2d087e45988d"
    ],
    "remove": [
      "cc9f561a-444d-4083-ab38-0abc6cf2314c"
    ]
  }
}
```

<h3 id="add-or-remove-pool-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Resource ID|
|body|body|[PoolMemberPatchRequest](#schemapoolmemberpatchrequest)|true|Pool Member Attributes|
|» pool_members|body|object|true|none|
|» » add|body|[string(uuid)]|false|Client IDs to add to the pool|
|» » remove|body|[string(uuid)]|false|Client IDs to remove from the pool|

> Example responses

> 200 Response

```json
{
  "data": {
    "device_ids": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7",
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 422 Response

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="add-or-remove-pool-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pool Member Response|[PoolMemberResponse](#schemapoolmemberresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|422|Unprocessable Entity|Unprocessable Content|[ValidationProblemDetails](#schemavalidationproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-okta-directories">Okta Directories</h1>

## Show Okta Directory

<a id="opIdPortalAPI.OktaDirectoryController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/okta_directories/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /okta_directories/{id}`

<h3 id="show-okta-directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Okta Directory ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_id": "0oa1b2c3d4e5EXAMPLE",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "kid": "kid-2f8a1c9e",
    "name": "Okta",
    "okta_domain": "example.okta.com",
    "synced_at": "2025-01-15T10:30:00Z",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-okta-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Okta Directory Response|[OktaDirectoryResponse](#schemaoktadirectoryresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Okta Directories

<a id="opIdPortalAPI.OktaDirectoryController.index"></a>

> Code samples

```bash
curl https://api.firezone.dev/okta_directories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /okta_directories`

<h3 id="list-okta-directories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit Okta Directories returned|
|page_cursor|query|string|false|Next/Prev page cursor|
|name|query|string|false|Filter to Okta Directories with this exact name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_id": "0oa1b2c3d4e5EXAMPLE",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "kid": "kid-2f8a1c9e",
      "name": "Okta",
      "okta_domain": "example.okta.com",
      "synced_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-okta-directories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Okta Directory Response|[OktaDirectoryListResponse](#schemaoktadirectorylistresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

<h1 id="firezone-api-logs">Logs</h1>

## Show Log

<a id="opIdPortalAPI.LogController.show"></a>

> Code samples

```bash
curl https://api.firezone.dev/logs/c00060db0c2c8eb400000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs/{log_id}`

Fetches a single Log entry by its `log_id`. The entry's type is
determined from the `log_id` itself: its first character identifies
the log stream (`c` change, `5` session, `f` flow, `a` api_request).


<h3 id="show-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|log_id|path|string|true|Identifier of the Log entry. A 24-character lowercase hexadecimal string.|

> Example responses

> 200 Response

```json
{
  "data": {
    "after": {
      "name": "Jane Smith"
    },
    "before": {
      "name": "Jane Doe"
    },
    "log_id": "c00060db0c2c8eb400000000",
    "object": "actors",
    "operation": "update",
    "subject": {
      "actor_email": "admin@example.com",
      "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "actor_name": "Admin User",
      "actor_type": "account_admin_user",
      "attested_at": "1970-01-01T00:00:00Z",
      "attested_cert_fingerprint": "string",
      "attested_cert_issuer": "string",
      "attested_cert_serial": "string",
      "attested_device_serial": "string",
      "attested_device_uuid": "string",
      "attested_mdm_device_id": "string",
      "auth_provider_id": "98776234-1234-5678-9012-345678901234",
      "ip": "1.2.3.4",
      "ip_city": "San Francisco",
      "ip_lat": 37.7749,
      "ip_lon": -122.4194,
      "ip_region": "California",
      "user_agent": "Mozilla/5.0"
    },
    "timestamp": "2026-05-26T12:34:56.789Z",
    "type": "change"
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 404 Response

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="show-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log Response|[LogResponse](#schemalogresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

## List Logs

<a id="opIdPortalAPI.LogController.index"></a>

> Code samples

```bash
curl 'https://api.firezone.dev/logs?type=change' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs`

Retrieves Firezone audit, session, network flow, or REST API request logs
for the authenticated account. Use this to investigate configuration
changes, review session activity, or troubleshoot network access and API
requests. Returns a page of log entries, most recent first.

- `change`: audit entries recording each insert, update, or delete event
  against an account-scoped object, most recent first.
- `session`: one entry per Client, Gateway, or Portal session created,
  most recent first.
- `flow`: one entry per network flow reported by Clients and Gateways,
  most recently started first.
- `api_request`: one entry per authenticated REST API request, most
  recent first.

Select one log stream with the required `type` argument. Narrow results
with `begin` and `end` RFC 3339 timestamps, for example
`2026-05-26T00:00:00Z`. The inclusive window applies to the entry's
`timestamp`, or `flow_start` for flows. Non-UTC offsets are converted
to UTC. The default window is the last 90 days; `begin` must not be
later than `end`.

Results can be further narrowed by `actor_id` (every type) or
`actor_email` (`change`, `session`, and `flow`), which matches the
email recorded when the entry was created. API requests are made by
API clients, which have no email, so `actor_email` is not supported
for `api_request`.

Returns up to `limit` entries (default 50, maximum 100). Pass the
`next_page` cursor from the response's `metadata` as `page_cursor`
to retrieve the next page.


<h3 id="list-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|The log stream to list. One of `change`, `session`, `flow`, or `api_request`.|
|limit|query|integer|false|Maximum number of Logs to return per page, from 1 to 100. Defaults to 50.<br>|
|page_cursor|query|string|false|Next/Prev page cursor returned by a previous request.|
|begin|query|string|false|Inclusive start of the time window. RFC 3339 timestamp; non-UTC<br>offsets are accepted and converted to UTC. Defaults to 90 days<br>before the current time when omitted.<br><br>For `flow` entries the window applies to when the flow started.<br>|
|end|query|string|false|Inclusive end of the time window. RFC 3339 timestamp; non-UTC<br>offsets are accepted and converted to UTC. Defaults to the current<br>time when omitted.<br><br>For `flow` entries the window applies to when the flow started.<br>|
|actor_id|query|string|false|Filter to entries whose actor matches.|
|actor_email|query|string|false|Filter to entries whose actor email matches the email recorded<br>when the entry was created. Supported for `change`, `session`, and<br>`flow` types.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "after": {
        "name": "Jane Smith"
      },
      "before": {
        "name": "Jane Doe"
      },
      "log_id": "c00060db0c2c8eb400000000",
      "object": "actors",
      "operation": "update",
      "subject": null,
      "timestamp": "2026-05-26T12:34:56.789Z",
      "type": "change"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 50,
    "next_page": null,
    "prev_page": null
  }
}
```

> 400 Response

```json
{
  "detail": "The request could not be processed.",
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were missing or invalid.",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action.",
  "status": 403,
  "title": "Forbidden",
  "type": "about:blank"
}
```

> 429 Response

```json
{
  "detail": "Rate limit exceeded. Retry after the time indicated in the Retry-After header.",
  "status": 429,
  "title": "Too Many Requests",
  "type": "about:blank"
}
```

<h3 id="list-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs Response|[LogsResponse](#schemalogsresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorization
</aside>

# Schemas

<h2 id="tocS_EntraDirectoryResponse">EntraDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentradirectoryresponse"></a>
<a id="schema_EntraDirectoryResponse"></a>
<a id="tocSentradirectoryresponse"></a>
<a id="tocsentradirectoryresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "disabled_reason": "string",
    "email_field": "userPrincipalName",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "name": "Entra",
    "sync_all_groups": false,
    "synced_at": "2025-01-15T10:30:00Z",
    "tenant_id": "12345678-1234-1234-1234-123456789012",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single Entra Directory

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EntraDirectory](#schemaentradirectory)|false|none|Entra Directory|

<h2 id="tocS_IruDeviceListResponse">IruDeviceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemairudevicelistresponse"></a>
<a id="schema_IruDeviceListResponse"></a>
<a id="tocSirudevicelistresponse"></a>
<a id="tocsirudevicelistresponse"></a>

```json
{
  "data": [
    {
      "host_name": "string",
      "gatekeeper_trusted_developers": true,
      "secure_boot_level": "string",
      "os_name": "string",
      "filevault_key_rotation_scheduled_at": "1970-01-01T00:00:00Z",
      "firewall_enabled": true,
      "model_name": "string",
      "firewall_logging_option": "string",
      "shared_ipad": true,
      "local_hostname": "string",
      "activation_lock_allowed_while_supervised": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "device_activation_lock_enabled": true,
      "gatekeeper_version": "string",
      "bootstrap_token_escrowed": true,
      "iru_id": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "asset_tag": "string",
      "blueprint_name": "string",
      "inserted_at": "1970-01-01T00:00:00Z",
      "data_roaming": true,
      "is_removed": true,
      "ssv_enabled": true,
      "filevault_key_type": "string",
      "device_capacity_gb": 0,
      "tags": [
        "string"
      ],
      "filevault_key_escrowed": true,
      "apple_silicon": true,
      "serial_number": "string",
      "cellular_technology": "string",
      "blueprint_id": "string",
      "user_manages_kext": true,
      "hotspot": true,
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "mdm_enabled": true,
      "user_email": "string",
      "gatekeeper_opaque_version": "string",
      "external_boot_level": "string",
      "firewall_collected_at": "1970-01-01T00:00:00Z",
      "software_update_requires_bootstrap_token": true,
      "xprotect_version": "string",
      "agent_installed": true,
      "mdm_manages_kext": true,
      "display_os_version": "string",
      "filevault_regeneration_needed": true,
      "is_missing": true,
      "last_enrolled_at": "1970-01-01T00:00:00Z",
      "gatekeeper_enabled": true,
      "firewall_version": "string",
      "first_enrolled_at": "1970-01-01T00:00:00Z",
      "firewall_logging": true,
      "model_identifier": "string",
      "os_build": "string",
      "user_activation_lock_enabled": true,
      "activation_lock_collected_at": "1970-01-01T00:00:00Z",
      "lost_mode_status": "string",
      "startup_settings_collected_at": "1970-01-01T00:00:00Z",
      "platform": "string",
      "filevault_enabled": true,
      "user_is_archived": true,
      "activation_lock_supported": true,
      "supplemental_build_version": "string",
      "sip_enabled": true,
      "firewall_allow_signed_applications": true,
      "model": "string",
      "supplemental_os_version_extra": "string",
      "user_id": "string",
      "bootstrap_token_auth": true,
      "firewall_block_all_incoming": true,
      "last_check_in_at": "1970-01-01T00:00:00Z",
      "firewall_stealth_mode": true,
      "kext_requires_bootstrap_token": true,
      "agent_version": "string",
      "activation_lock_bypass_code_failed": true,
      "inventory_collected_at": "1970-01-01T00:00:00Z",
      "any_signed_os": true,
      "filevault_collected_at": "1970-01-01T00:00:00Z",
      "gatekeeper_collected_at": "1970-01-01T00:00:00Z",
      "firewall_unloading": true,
      "os_version": "string",
      "malware_removal_tool_version": "string",
      "device_family": "string",
      "user_name": "string",
      "device_name": "string",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IruDevice](#schemairudevice)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_ActorResponse">ActorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactorresponse"></a>
<a id="schema_ActorResponse"></a>
<a id="tocSactorresponse"></a>
<a id="tocsactorresponse"></a>

```json
{
  "data": {
    "allow_email_otp_sign_in": false,
    "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "john.doe@example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2024-01-01T00:00:00Z",
    "is_disabled": false,
    "last_seen_at": "2024-01-15T10:30:00Z",
    "name": "John Doe",
    "type": "account_admin_user",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

Response schema for single Actor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Actor](#schemaactor)|false|none|Actor|

<h2 id="tocS_GoogleAuthProviderListResponse">GoogleAuthProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleauthproviderlistresponse"></a>
<a id="schema_GoogleAuthProviderListResponse"></a>
<a id="tocSgoogleauthproviderlistresponse"></a>
<a id="tocsgoogleauthproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": true,
      "is_disabled": false,
      "issuer": "https://accounts.google.com",
      "name": "Google",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z",
      "workspace_domains": [
        "string"
      ]
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Google Auth Providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GoogleAuthProvider](#schemagoogleauthprovider)]|false|none|Google Auth Provider details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_GroupResponse">GroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagroupresponse"></a>
<a id="schema_GroupResponse"></a>
<a id="tocSgroupresponse"></a>
<a id="tocsgroupresponse"></a>

```json
{
  "data": {
    "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "string",
    "entity_type": "group",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "string",
    "inserted_at": "2024-01-15T10:30:00Z",
    "name": "Engineering",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "static",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

Response schema for single Group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Group](#schemagroup)|false|none|Group|

<h2 id="tocS_GoogleDirectoryResponse">GoogleDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogledirectoryresponse"></a>
<a id="schema_GoogleDirectoryResponse"></a>
<a id="tocSgoogledirectoryresponse"></a>
<a id="tocsgoogledirectoryresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "disabled_reason": "string",
    "domain": "example.com",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "group_sync_mode": "all",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "impersonation_email": "admin@example.com",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "name": "Google",
    "orgunit_sync_enabled": true,
    "synced_at": "2025-01-15T10:30:00Z",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single Google Directory

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GoogleDirectory](#schemagoogledirectory)|false|none|Google Directory|

<h2 id="tocS_MembershipPutRequest">MembershipPutRequest</h2>
<!-- backwards compatibility -->
<a id="schemamembershipputrequest"></a>
<a id="schema_MembershipPutRequest"></a>
<a id="tocSmembershipputrequest"></a>
<a id="tocsmembershipputrequest"></a>

```json
{
  "memberships": [
    {
      "actor_id": "4ddfa557-7dfc-484f-894c-2024ec3fe9f7"
    },
    {
      "actor_id": "89d22f71-939d-442d-b148-897b730adfb4"
    }
  ]
}
```

PUT body for updating Memberships

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[object]|true|none|none|

<h2 id="tocS_ipv6 no_value device comparison">ipv6 no_value device comparison</h2>
<!-- backwards compatibility -->
<a id="schemaipv6 no_value device comparison"></a>
<a id="schema_ipv6 no_value device comparison"></a>
<a id="tocSipv6 no_value device comparison"></a>
<a id="tocsipv6 no_value device comparison"></a>

```json
{
  "field": "firezone.ipv6",
  "op": "exists",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|ipv6 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.ipv6|
|op|exists|
|op|does_not_exist|
|value|null|

<h2 id="tocS_IruPostureProvider">IruPostureProvider</h2>
<!-- backwards compatibility -->
<a id="schemairupostureprovider"></a>
<a id="schema_IruPostureProvider"></a>
<a id="tocSirupostureprovider"></a>
<a id="tocsirupostureprovider"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "disabled_reason": "string",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "inserted_at": "1970-01-01T00:00:00Z",
  "is_disabled": true,
  "is_verified": true,
  "name": "string",
  "region": "us",
  "subdomain": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "type": "iru",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Iru (formerly Kandji) posture provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|disabled_reason|string \| null|true|none|none|
|error_message|string \| null|true|none|none|
|errored_at|string(date-time) \| null|true|none|none|
|id|string(uuid)|true|none|none|
|inserted_at|string(date-time)|true|none|none|
|is_disabled|boolean|true|none|none|
|is_verified|boolean|true|none|none|
|name|string|true|none|none|
|region|string|true|none|none|
|subdomain|string|true|none|none|
|synced_at|string(date-time) \| null|true|none|none|
|type|string|true|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|region|us|
|region|eu|
|type|iru|

<h2 id="tocS_ipv4 no_value device comparison">ipv4 no_value device comparison</h2>
<!-- backwards compatibility -->
<a id="schemaipv4 no_value device comparison"></a>
<a id="schema_ipv4 no_value device comparison"></a>
<a id="tocSipv4 no_value device comparison"></a>
<a id="tocsipv4 no_value device comparison"></a>

```json
{
  "field": "firezone.ipv4",
  "op": "exists",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|ipv4 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.ipv4|
|op|exists|
|op|does_not_exist|
|value|null|

<h2 id="tocS_ip list provider comparison">ip list provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaip list provider comparison"></a>
<a id="schema_ip list provider comparison"></a>
<a id="tocSip list provider comparison"></a>
<a id="tocsip list provider comparison"></a>

```json
{
  "field": "defender.last_external_ip_address",
  "op": "is_in_cidr",
  "rows": "any",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|ip field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.last_external_ip_address|
|field|defender.last_ip_address|
|field|santa.last_preflight_ip|
|field|sentinelone.external_ip|
|field|sentinelone.last_ip_to_management|
|op|is_in_cidr|
|op|is_not_in_cidr|
|rows|any|
|rows|all|

<h2 id="tocS_SentinelOneDeviceResponse">SentinelOneDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasentinelonedeviceresponse"></a>
<a id="schema_SentinelOneDeviceResponse"></a>
<a id="tocSsentinelonedeviceresponse"></a>
<a id="tocssentinelonedeviceresponse"></a>

```json
{
  "data": {
    "last_logged_in_user_name": "string",
    "sentinelone_id": "string",
    "user_actions_needed": [
      "string"
    ],
    "operational_state": "string",
    "os_name": "string",
    "os_arch": "string",
    "remote_profiling_state": "string",
    "has_containerized_workload": true,
    "firewall_enabled": true,
    "proxy_console": true,
    "model_name": "string",
    "infected": true,
    "proxy_deep_visibility": true,
    "console_migration_status": "string",
    "is_hyper_automate": true,
    "network_quarantine_enabled": true,
    "scan_finished_at": "1970-01-01T00:00:00Z",
    "is_active": true,
    "external_id": "string",
    "last_successful_scan_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "os_username": "string",
    "active_protection": [
      "string"
    ],
    "threat_reboot_required": true,
    "synced_at": "1970-01-01T00:00:00Z",
    "inserted_at": "1970-01-01T00:00:00Z",
    "location_enabled": true,
    "group_id": "string",
    "site_id": "string",
    "storage_name": "string",
    "machine_sid": "string",
    "remote_profiling_state_expires_at": "1970-01-01T00:00:00Z",
    "group_name": "string",
    "allow_remote_shell": true,
    "tags": [
      {}
    ],
    "protected_pods_count": 0,
    "os_type": "string",
    "proxy_pac_file_usage": true,
    "serial_number": "string",
    "ad_computer_member_of": [
      "string"
    ],
    "locations": [
      {}
    ],
    "installer_type": "string",
    "last_active_at": "1970-01-01T00:00:00Z",
    "is_ad_connector": true,
    "ad_user_principal_name": "string",
    "core_count": 0,
    "detection_state": "string",
    "active_threats": 0,
    "is_decommissioned": true,
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "cpu_count": 0,
    "group_ip": "string",
    "protected_tasks_count": 0,
    "storage_type": "string",
    "account_name": "string",
    "ranger_status": "string",
    "scan_status": "string",
    "total_memory": 0,
    "encrypted_applications": true,
    "ad_last_user_distinguished_name": "string",
    "missing_permissions": [
      "string"
    ],
    "is_uninstalled": true,
    "computer_name": "string",
    "scan_aborted_at": "1970-01-01T00:00:00Z",
    "in_remote_shell_session": true,
    "first_full_mode_at": "1970-01-01T00:00:00Z",
    "ad_last_user_member_of": [
      "string"
    ],
    "ad_mail": "string",
    "external_ip": "string",
    "is_pending_uninstall": true,
    "sentinelone_account_id": "string",
    "last_ip_to_management": "string",
    "proxy_method": "string",
    "network_status": "string",
    "os_revision": "string",
    "agent_version": "string",
    "registered_at": "1970-01-01T00:00:00Z",
    "is_up_to_date": true,
    "site_name": "string",
    "apps_vulnerability_status": "string",
    "domain": "string",
    "ad_computer_distinguished_name": "string",
    "os_start_time": "1970-01-01T00:00:00Z",
    "mitigation_mode_suspicious": "string",
    "machine_type": "string",
    "uuid": "string",
    "ranger_version": "string",
    "mitigation_mode": "string",
    "operational_state_expires_at": "1970-01-01T00:00:00Z",
    "network_interfaces": [
      {}
    ],
    "full_disk_scan_updated_at": "1970-01-01T00:00:00Z",
    "cloud_providers": {},
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "scan_started_at": "1970-01-01T00:00:00Z",
    "protected_containers_count": 0,
    "cpu_id": "string",
    "location_type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SentinelOneDevice](#schemasentinelonedevice)|false|none|Endpoint agent synced from SentinelOne|

<h2 id="tocS_boolean no_value provider comparison">boolean no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaboolean no_value provider comparison"></a>
<a id="schema_boolean no_value provider comparison"></a>
<a id="tocSboolean no_value provider comparison"></a>
<a id="tocsboolean no_value provider comparison"></a>

```json
{
  "field": "defender.enrolled",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|boolean field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.enrolled|
|field|defender.entra_joined|
|field|defender.is_excluded|
|field|defender.is_potential_duplication|
|field|defender.os_up_to_date|
|field|intune.attestation_bit_locker_enabled|
|field|intune.attestation_boot_debugging|
|field|intune.attestation_code_integrity|
|field|intune.attestation_data_execution_policy_enabled|
|field|intune.attestation_early_launch_anti_malware_driver_protection|
|field|intune.attestation_operating_system_kernel_debugging|
|field|intune.attestation_safe_mode|
|field|intune.attestation_secure_boot|
|field|intune.attestation_supported|
|field|intune.attestation_test_signing|
|field|intune.attestation_virtual_secure_mode|
|field|intune.attestation_windows_pe|
|field|intune.config_manager_compliance_policy|
|field|intune.config_manager_device_configuration|
|field|intune.config_manager_inventory|
|field|intune.config_manager_modern_apps|
|field|intune.config_manager_resource_access|
|field|intune.config_manager_windows_update_for_business|
|field|intune.eas_activated|
|field|intune.enrolled|
|field|intune.entra_registered|
|field|intune.is_encrypted|
|field|intune.is_supervised|
|field|intune.jail_broken|
|field|intune.os_up_to_date|
|field|intune.require_user_enrollment_approval|
|field|iru.activation_lock_allowed_while_supervised|
|field|iru.activation_lock_bypass_code_failed|
|field|iru.activation_lock_supported|
|field|iru.agent_installed|
|field|iru.any_signed_os|
|field|iru.apple_silicon|
|field|iru.bootstrap_token_auth|
|field|iru.bootstrap_token_escrowed|
|field|iru.data_roaming|
|field|iru.device_activation_lock_enabled|
|field|iru.enrolled|
|field|iru.filevault_enabled|
|field|iru.filevault_key_escrowed|
|field|iru.filevault_regeneration_needed|
|field|iru.firewall_allow_signed_applications|
|field|iru.firewall_block_all_incoming|
|field|iru.firewall_enabled|
|field|iru.firewall_logging|
|field|iru.firewall_stealth_mode|
|field|iru.firewall_unloading|
|field|iru.gatekeeper_enabled|
|field|iru.gatekeeper_trusted_developers|
|field|iru.hotspot|
|field|iru.is_missing|
|field|iru.is_removed|
|field|iru.kext_requires_bootstrap_token|
|field|iru.mdm_enabled|
|field|iru.mdm_manages_kext|
|field|iru.os_up_to_date|
|field|iru.shared_ipad|
|field|iru.sip_enabled|
|field|iru.software_update_requires_bootstrap_token|
|field|iru.ssv_enabled|
|field|iru.user_activation_lock_enabled|
|field|iru.user_is_archived|
|field|iru.user_manages_kext|
|field|santa.enrolled|
|field|santa.os_up_to_date|
|field|sentinelone.allow_remote_shell|
|field|sentinelone.encrypted_applications|
|field|sentinelone.enrolled|
|field|sentinelone.firewall_enabled|
|field|sentinelone.has_containerized_workload|
|field|sentinelone.in_remote_shell_session|
|field|sentinelone.infected|
|field|sentinelone.is_active|
|field|sentinelone.is_ad_connector|
|field|sentinelone.is_decommissioned|
|field|sentinelone.is_hyper_automate|
|field|sentinelone.is_pending_uninstall|
|field|sentinelone.is_uninstalled|
|field|sentinelone.is_up_to_date|
|field|sentinelone.location_enabled|
|field|sentinelone.network_quarantine_enabled|
|field|sentinelone.os_up_to_date|
|field|sentinelone.proxy_console|
|field|sentinelone.proxy_deep_visibility|
|field|sentinelone.proxy_pac_file_usage|
|field|sentinelone.threat_reboot_required|
|field|sophos.cloned|
|field|sophos.enrolled|
|field|sophos.isolation_admin_isolated|
|field|sophos.isolation_self_isolated|
|field|sophos.online|
|field|sophos.os_is_server|
|field|sophos.os_up_to_date|
|field|sophos.tamper_protection_enabled|
|field|sophos.tamper_protection_supported|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_DeviceMembershipAllDevices">DeviceMembershipAllDevices</h2>
<!-- backwards compatibility -->
<a id="schemadevicemembershipalldevices"></a>
<a id="schema_DeviceMembershipAllDevices"></a>
<a id="tocSdevicemembershipalldevices"></a>
<a id="tocsdevicemembershipalldevices"></a>

```json
{
  "device": {
    "field": "account_id",
    "op": "eq",
    "value": {
      "subject": "account_id"
    }
  }
}
```

Every Client in the Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|object|true|none|none|

<h2 id="tocS_IntuneDeviceListResponse">IntuneDeviceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintunedevicelistresponse"></a>
<a id="schema_IntuneDeviceListResponse"></a>
<a id="tocSintunedevicelistresponse"></a>
<a id="tocsintunedevicelistresponse"></a>

```json
{
  "data": [
    {
      "device_registration_state": "string",
      "attestation_operating_system_rev_list_info": "string",
      "entra_registered": true,
      "attestation_boot_app_security_version": "string",
      "operating_system": "string",
      "is_supervised": true,
      "notes": "string",
      "free_storage_space_bytes": 0,
      "attestation_issued_at": "1970-01-01T00:00:00Z",
      "config_manager_compliance_policy": true,
      "user_display_name": "string",
      "config_manager_device_configuration": true,
      "config_manager_inventory": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "enrolled_at": "1970-01-01T00:00:00Z",
      "total_storage_space_bytes": 0,
      "attestation_operating_system_kernel_debugging": true,
      "attestation_data_execution_policy_enabled": true,
      "ethernet_mac_address": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "inserted_at": "1970-01-01T00:00:00Z",
      "attestation_health_status_mismatch_info": "string",
      "intune_id": "string",
      "management_certificate_expires_at": "1970-01-01T00:00:00Z",
      "compliance_state": "string",
      "require_user_enrollment_approval": true,
      "attestation_code_integrity_check_version": "string",
      "attestation_pcr0": "string",
      "attestation_boot_revision_list_info": "string",
      "attestation_reset_count": 0,
      "attestation_safe_mode": true,
      "managed_device_owner_type": "string",
      "serial_number": "string",
      "attestation_secure_boot": true,
      "device_category_display_name": "string",
      "attestation_code_integrity_policy": "string",
      "attestation_virtual_secure_mode": true,
      "last_sync_at": "1970-01-01T00:00:00Z",
      "is_encrypted": true,
      "eas_activated": true,
      "manufacturer": "string",
      "eas_activated_at": "1970-01-01T00:00:00Z",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "attestation_early_launch_anti_malware_driver_protection": true,
      "management_agent": "string",
      "attestation_tpm_version": "string",
      "management_state": "string",
      "wifi_mac_address": "string",
      "attestation_code_integrity": true,
      "user_principal_name": "string",
      "entra_device_id": "string",
      "android_security_patch_level": "1970-01-01",
      "attestation_pcr_hash_algorithm": "string",
      "device_enrollment_type": "string",
      "subscriber_carrier": "string",
      "enrollment_profile_name": "string",
      "model": "string",
      "attestation_boot_manager_version": "string",
      "partner_reported_threat_state": "string",
      "config_manager_modern_apps": true,
      "user_id": "string",
      "jail_broken": true,
      "eas_device_id": "string",
      "exchange_last_successful_sync_at": "1970-01-01T00:00:00Z",
      "attestation_bit_locker_enabled": true,
      "attestation_content_version": "string",
      "exchange_access_state": "string",
      "managed_device_name": "string",
      "udid": "string",
      "attestation_secure_boot_config_policy_fingerprint": "string",
      "attestation_identity_key": "string",
      "attestation_boot_manager_security_version": "string",
      "compliance_grace_period_expiration_at": "1970-01-01T00:00:00Z",
      "exchange_access_state_reason": "string",
      "attestation_windows_pe": true,
      "attestation_status": "string",
      "iccid": "string",
      "meid": "string",
      "attestation_supported": true,
      "attestation_test_signing": true,
      "attestation_boot_debugging": true,
      "phone_number": "string",
      "attestation_restart_count": 0,
      "imei": "string",
      "os_version": "string",
      "physical_memory_bytes": 0,
      "config_manager_windows_update_for_business": true,
      "email_address": "string",
      "device_name": "string",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "config_manager_resource_access": true
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IntuneDevice](#schemaintunedevice)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_DeviceMembershipActorGroup">DeviceMembershipActorGroup</h2>
<!-- backwards compatibility -->
<a id="schemadevicemembershipactorgroup"></a>
<a id="schema_DeviceMembershipActorGroup"></a>
<a id="tocSdevicemembershipactorgroup"></a>
<a id="tocsdevicemembershipactorgroup"></a>

```json
{
  "actor_group": {
    "field": "id",
    "op": "eq",
    "value": "b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c"
  }
}
```

The Clients of every Actor in one Group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor_group|object|true|none|none|

<h2 id="tocS_PolicyCreateParams">PolicyCreateParams</h2>
<!-- backwards compatibility -->
<a id="schemapolicycreateparams"></a>
<a id="schema_PolicyCreateParams"></a>
<a id="tocSpolicycreateparams"></a>
<a id="tocspolicycreateparams"></a>

```json
{
  "conditions": [
    {
      "operator": "is_in",
      "property": "remote_ip_location_region",
      "values": [
        "US",
        "CA"
      ]
    }
  ],
  "description": "Policy to allow something",
  "flow_log_uploads_enabled": true,
  "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
  "is_disabled": false,
  "postures": {
    "and": [
      {
        "field": "intune.enrolled",
        "op": "is",
        "value": true
      },
      {
        "field": "intune.compliance_state",
        "op": "is",
        "rows": "all",
        "value": "compliant"
      },
      {
        "field": "intune.last_sync_at",
        "op": "within_last",
        "value": "PT24H"
      },
      {
        "or": [
          {
            "field": "firezone.last_seen_version",
            "op": "gte",
            "value": "@latest"
          },
          {
            "not": {
              "field": "firezone.hostname",
              "op": "starts_with",
              "value": "test-"
            }
          }
        ]
      }
    ]
  },
  "require_attestation": false,
  "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
}
```

Policy attributes accepted when creating a Policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[PolicyCondition](#schemapolicycondition)]|false|none|Conditions that must be satisfied for the Policy to grant access|
|description|string \| null|false|none|Policy Description|
|flow_log_uploads_enabled|boolean|false|none|Whether flow logs are reported for connections authorized by this Policy. Defaults to true. Always false for Internet Resource policies.|
|group_id|string(uuid)|true|none|Group ID|
|is_disabled|boolean|false|none|Whether the Policy is disabled. A disabled Policy grants no access but is otherwise retained. Defaults to false.|
|postures|[PolicyPostureNode](#schemapolicyposturenode) \| object \| null|false|none|Device posture expression required in addition to every entry in conditions. Omit or set to null for no posture requirement. A non-null expression requires the account's device_posture entitlement (Enterprise); otherwise returns HTTP 403. See PolicyPostureNode for fields, operators, platform behavior, and limits.|
|require_attestation|boolean|false|none|Whether the Client must present a valid X.509 certificate from one of the account's trust anchors on its current connection. Device posture checks then match only on the identifiers that certificate proves. Defaults to false. Setting it to true returns 422 when the account has no trust anchors.|
|resource_id|string(uuid)|true|none|Resource ID|

<h2 id="tocS_string list provider comparison">string list provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring list provider comparison"></a>
<a id="schema_string list provider comparison"></a>
<a id="tocSstring list provider comparison"></a>
<a id="tocsstring list provider comparison"></a>

```json
{
  "field": "defender.computer_dns_name",
  "op": "is_in",
  "rows": "any",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|is_in|
|op|is_not_in|
|rows|any|
|rows|all|

<h2 id="tocS_SantaDevice">SantaDevice</h2>
<!-- backwards compatibility -->
<a id="schemasantadevice"></a>
<a id="schema_SantaDevice"></a>
<a id="tocSsantadevice"></a>
<a id="tocssantadevice"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "configured_client_mode": "string",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "hostname": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "inserted_at": "1970-01-01T00:00:00Z",
  "last_preflight_at": "1970-01-01T00:00:00Z",
  "last_preflight_ip": "string",
  "last_seen_client_mode": "string",
  "last_sync_at": "1970-01-01T00:00:00Z",
  "machine_model": "string",
  "os_build": "string",
  "os_type": "string",
  "os_version": "string",
  "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "primary_user": "string",
  "primary_user_groups": [
    "string"
  ],
  "rule_sync_at": "1970-01-01T00:00:00Z",
  "santa_id": "string",
  "santa_version": "string",
  "santanetd_version": "string",
  "serial_number": "string",
  "sip_status": 0,
  "synced_at": "1970-01-01T00:00:00Z",
  "tags": [
    "string"
  ],
  "temporary_admin_mode_ends_at": "1970-01-01T00:00:00Z",
  "temporary_admin_mode_user": "string",
  "temporary_monitor_mode_ends_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Santa host synced from North Pole Security Workshop

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|configured_client_mode|string \| null|true|none|none|
|first_seen_at|string(date-time) \| null|true|none|none|
|hostname|string \| null|true|none|none|
|id|string(uuid)|true|none|none|
|inserted_at|string(date-time) \| null|true|none|none|
|last_preflight_at|string(date-time) \| null|true|none|none|
|last_preflight_ip|string \| null|true|none|none|
|last_seen_client_mode|string \| null|true|none|none|
|last_sync_at|string(date-time) \| null|true|none|none|
|machine_model|string \| null|true|none|none|
|os_build|string \| null|true|none|none|
|os_type|string \| null|true|none|none|
|os_version|string \| null|true|none|none|
|posture_provider_id|string(uuid)|true|none|none|
|primary_user|string \| null|true|none|none|
|primary_user_groups|[string]|true|none|none|
|rule_sync_at|string(date-time) \| null|true|none|none|
|santa_id|string|true|none|none|
|santa_version|string \| null|true|none|none|
|santanetd_version|string \| null|true|none|none|
|serial_number|string \| null|true|none|none|
|sip_status|integer \| null|true|none|none|
|synced_at|string(date-time)|true|none|none|
|tags|[string]|true|none|none|
|temporary_admin_mode_ends_at|string(date-time) \| null|true|none|none|
|temporary_admin_mode_user|string \| null|true|none|none|
|temporary_monitor_mode_ends_at|string(date-time) \| null|true|none|none|
|updated_at|string(date-time) \| null|true|none|none|

<h2 id="tocS_IntunePostureProviderListResponse">IntunePostureProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintunepostureproviderlistresponse"></a>
<a id="schema_IntunePostureProviderListResponse"></a>
<a id="tocSintunepostureproviderlistresponse"></a>
<a id="tocsintunepostureproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "tenant_id": "string",
      "type": "intune",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IntunePostureProvider](#schemaintunepostureprovider)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_datetime scalar provider comparison">datetime scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemadatetime scalar provider comparison"></a>
<a id="schema_datetime scalar provider comparison"></a>
<a id="tocSdatetime scalar provider comparison"></a>
<a id="tocsdatetime scalar provider comparison"></a>

```json
{
  "field": "defender.first_seen_at",
  "op": "before",
  "rows": "any",
  "value": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.first_seen_at|
|field|defender.last_seen_at|
|field|intune.android_security_patch_level|
|field|intune.attestation_issued_at|
|field|intune.compliance_grace_period_expiration_at|
|field|intune.eas_activated_at|
|field|intune.enrolled_at|
|field|intune.exchange_last_successful_sync_at|
|field|intune.last_sync_at|
|field|intune.management_certificate_expires_at|
|field|iru.activation_lock_collected_at|
|field|iru.filevault_collected_at|
|field|iru.filevault_key_rotation_scheduled_at|
|field|iru.firewall_collected_at|
|field|iru.first_enrolled_at|
|field|iru.gatekeeper_collected_at|
|field|iru.inventory_collected_at|
|field|iru.last_check_in_at|
|field|iru.last_enrolled_at|
|field|iru.startup_settings_collected_at|
|field|santa.first_seen_at|
|field|santa.last_preflight_at|
|field|santa.last_sync_at|
|field|santa.rule_sync_at|
|field|santa.temporary_admin_mode_ends_at|
|field|santa.temporary_monitor_mode_ends_at|
|field|sentinelone.first_full_mode_at|
|field|sentinelone.full_disk_scan_updated_at|
|field|sentinelone.last_active_at|
|field|sentinelone.last_successful_scan_at|
|field|sentinelone.operational_state_expires_at|
|field|sentinelone.os_start_time|
|field|sentinelone.registered_at|
|field|sentinelone.remote_profiling_state_expires_at|
|field|sentinelone.scan_aborted_at|
|field|sentinelone.scan_finished_at|
|field|sentinelone.scan_started_at|
|field|sophos.last_agent_update_at|
|field|sophos.last_os_update_at|
|field|sophos.last_seen_at|
|op|before|
|op|after|
|rows|any|
|rows|all|

<h2 id="tocS_SantaPostureProvider">SantaPostureProvider</h2>
<!-- backwards compatibility -->
<a id="schemasantapostureprovider"></a>
<a id="schema_SantaPostureProvider"></a>
<a id="tocSsantapostureprovider"></a>
<a id="tocssantapostureprovider"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "api_url": "http://example.com",
  "disabled_reason": "string",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "inserted_at": "1970-01-01T00:00:00Z",
  "is_disabled": true,
  "is_verified": true,
  "name": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "type": "santa",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Santa posture provider backed by North Pole Security Workshop

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|api_url|string(uri)|true|none|none|
|disabled_reason|string \| null|true|none|none|
|error_message|string \| null|true|none|none|
|errored_at|string(date-time) \| null|true|none|none|
|id|string(uuid)|true|none|none|
|inserted_at|string(date-time)|true|none|none|
|is_disabled|boolean|true|none|none|
|is_verified|boolean|true|none|none|
|name|string|true|none|none|
|synced_at|string(date-time) \| null|true|none|none|
|type|string|true|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|santa|

<h2 id="tocS_version scalar provider comparison">version scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaversion scalar provider comparison"></a>
<a id="schema_version scalar provider comparison"></a>
<a id="tocSversion scalar provider comparison"></a>
<a id="tocsversion scalar provider comparison"></a>

```json
{
  "field": "defender.agent_version",
  "op": "is",
  "rows": "any",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Segment-wise version, or @latest for firezone.last_seen_version only|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.agent_version|
|field|intune.attestation_boot_app_security_version|
|field|intune.attestation_boot_manager_security_version|
|field|intune.attestation_boot_manager_version|
|field|intune.attestation_code_integrity_check_version|
|field|intune.attestation_content_version|
|field|intune.attestation_tpm_version|
|field|intune.os_version|
|field|iru.agent_version|
|field|iru.display_os_version|
|field|iru.firewall_version|
|field|iru.gatekeeper_opaque_version|
|field|iru.gatekeeper_version|
|field|iru.malware_removal_tool_version|
|field|iru.os_version|
|field|iru.supplemental_os_version_extra|
|field|iru.xprotect_version|
|field|santa.os_version|
|field|santa.santa_version|
|field|santa.santanetd_version|
|field|sentinelone.agent_version|
|field|sentinelone.os_revision|
|field|sentinelone.ranger_version|
|op|is|
|op|is_not|
|op|gt|
|op|gte|
|op|lt|
|op|lte|
|rows|any|
|rows|all|

<h2 id="tocS_boolean scalar provider comparison">boolean scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaboolean scalar provider comparison"></a>
<a id="schema_boolean scalar provider comparison"></a>
<a id="tocSboolean scalar provider comparison"></a>
<a id="tocsboolean scalar provider comparison"></a>

```json
{
  "field": "defender.enrolled",
  "op": "is",
  "rows": "any",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|boolean field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.enrolled|
|field|defender.entra_joined|
|field|defender.is_excluded|
|field|defender.is_potential_duplication|
|field|defender.os_up_to_date|
|field|intune.attestation_bit_locker_enabled|
|field|intune.attestation_boot_debugging|
|field|intune.attestation_code_integrity|
|field|intune.attestation_data_execution_policy_enabled|
|field|intune.attestation_early_launch_anti_malware_driver_protection|
|field|intune.attestation_operating_system_kernel_debugging|
|field|intune.attestation_safe_mode|
|field|intune.attestation_secure_boot|
|field|intune.attestation_supported|
|field|intune.attestation_test_signing|
|field|intune.attestation_virtual_secure_mode|
|field|intune.attestation_windows_pe|
|field|intune.config_manager_compliance_policy|
|field|intune.config_manager_device_configuration|
|field|intune.config_manager_inventory|
|field|intune.config_manager_modern_apps|
|field|intune.config_manager_resource_access|
|field|intune.config_manager_windows_update_for_business|
|field|intune.eas_activated|
|field|intune.enrolled|
|field|intune.entra_registered|
|field|intune.is_encrypted|
|field|intune.is_supervised|
|field|intune.jail_broken|
|field|intune.os_up_to_date|
|field|intune.require_user_enrollment_approval|
|field|iru.activation_lock_allowed_while_supervised|
|field|iru.activation_lock_bypass_code_failed|
|field|iru.activation_lock_supported|
|field|iru.agent_installed|
|field|iru.any_signed_os|
|field|iru.apple_silicon|
|field|iru.bootstrap_token_auth|
|field|iru.bootstrap_token_escrowed|
|field|iru.data_roaming|
|field|iru.device_activation_lock_enabled|
|field|iru.enrolled|
|field|iru.filevault_enabled|
|field|iru.filevault_key_escrowed|
|field|iru.filevault_regeneration_needed|
|field|iru.firewall_allow_signed_applications|
|field|iru.firewall_block_all_incoming|
|field|iru.firewall_enabled|
|field|iru.firewall_logging|
|field|iru.firewall_stealth_mode|
|field|iru.firewall_unloading|
|field|iru.gatekeeper_enabled|
|field|iru.gatekeeper_trusted_developers|
|field|iru.hotspot|
|field|iru.is_missing|
|field|iru.is_removed|
|field|iru.kext_requires_bootstrap_token|
|field|iru.mdm_enabled|
|field|iru.mdm_manages_kext|
|field|iru.os_up_to_date|
|field|iru.shared_ipad|
|field|iru.sip_enabled|
|field|iru.software_update_requires_bootstrap_token|
|field|iru.ssv_enabled|
|field|iru.user_activation_lock_enabled|
|field|iru.user_is_archived|
|field|iru.user_manages_kext|
|field|santa.enrolled|
|field|santa.os_up_to_date|
|field|sentinelone.allow_remote_shell|
|field|sentinelone.encrypted_applications|
|field|sentinelone.enrolled|
|field|sentinelone.firewall_enabled|
|field|sentinelone.has_containerized_workload|
|field|sentinelone.in_remote_shell_session|
|field|sentinelone.infected|
|field|sentinelone.is_active|
|field|sentinelone.is_ad_connector|
|field|sentinelone.is_decommissioned|
|field|sentinelone.is_hyper_automate|
|field|sentinelone.is_pending_uninstall|
|field|sentinelone.is_uninstalled|
|field|sentinelone.is_up_to_date|
|field|sentinelone.location_enabled|
|field|sentinelone.network_quarantine_enabled|
|field|sentinelone.os_up_to_date|
|field|sentinelone.proxy_console|
|field|sentinelone.proxy_deep_visibility|
|field|sentinelone.proxy_pac_file_usage|
|field|sentinelone.threat_reboot_required|
|field|sophos.cloned|
|field|sophos.enrolled|
|field|sophos.isolation_admin_isolated|
|field|sophos.isolation_self_isolated|
|field|sophos.online|
|field|sophos.os_is_server|
|field|sophos.os_up_to_date|
|field|sophos.tamper_protection_enabled|
|field|sophos.tamper_protection_supported|
|op|is|
|rows|any|
|rows|all|

<h2 id="tocS_string_array scalar provider comparison">string_array scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring_array scalar provider comparison"></a>
<a id="schema_string_array scalar provider comparison"></a>
<a id="tocSstring_array scalar provider comparison"></a>
<a id="tocsstring_array scalar provider comparison"></a>

```json
{
  "field": "defender.machine_tags",
  "op": "contains",
  "rows": "any",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string_array field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.machine_tags|
|field|iru.tags|
|field|santa.primary_user_groups|
|field|santa.tags|
|field|sentinelone.active_protection|
|field|sentinelone.ad_computer_member_of|
|field|sentinelone.ad_last_user_member_of|
|field|sentinelone.missing_permissions|
|field|sentinelone.user_actions_needed|
|field|sophos.ipv4_addresses|
|field|sophos.ipv6_addresses|
|field|sophos.mac_addresses|
|op|contains|
|op|does_not_contain|
|rows|any|
|rows|all|

<h2 id="tocS_OktaAuthProvider">OktaAuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemaoktaauthprovider"></a>
<a id="schema_OktaAuthProvider"></a>
<a id="tocSoktaauthprovider"></a>
<a id="tocsoktaauthprovider"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "client_id": "0oa1b2c3d4e5EXAMPLE",
  "client_session_lifetime_secs": 604800,
  "context": "clients_and_portal",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_default": false,
  "is_disabled": false,
  "issuer": "https://example.okta.com",
  "name": "Okta",
  "okta_domain": "example.okta.com",
  "portal_session_lifetime_secs": 28800,
  "updated_at": "2025-01-15T10:30:00Z"
}
```

Okta Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|client_id|string|true|none|Client ID|
|client_session_lifetime_secs|integer \| null|true|none|Client session lifetime in seconds. Null when the account default applies.|
|context|string|true|none|Context|
|id|string(uuid)|true|none|Provider ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_default|boolean|true|none|Whether provider is default|
|is_disabled|boolean|true|none|Whether provider is disabled|
|issuer|string|true|none|Issuer|
|name|string|true|none|Provider name|
|okta_domain|string|true|none|Okta domain|
|portal_session_lifetime_secs|integer \| null|true|none|Portal session lifetime in seconds. Null when the account default applies.|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|context|clients_and_portal|
|context|clients_only|
|context|portal_only|

<h2 id="tocS_GatewayResponse">GatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemagatewayresponse"></a>
<a id="schema_GatewayResponse"></a>
<a id="tocSgatewayresponse"></a>
<a id="tocsgatewayresponse"></a>

```json
{
  "data": {
    "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "198.51.100.10",
    "last_seen_remote_ip_location_city": "San Francisco",
    "last_seen_remote_ip_location_lat": 37.7749,
    "last_seen_remote_ip_location_lon": -122.4194,
    "last_seen_remote_ip_location_region": "US-CA",
    "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "vpc-us-east",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "rotated_at": "1970-01-01T00:00:00Z"
  }
}
```

Response schema for single Gateway

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Gateway](#schemagateway)|false|none|Gateway|

<h2 id="tocS_ResourceCreateRequest">ResourceCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecreaterequest"></a>
<a id="schema_ResourceCreateRequest"></a>
<a id="tocSresourcecreaterequest"></a>
<a id="tocsresourcecreaterequest"></a>

```json
{
  "resource": {
    "address": "10.0.0.10",
    "address_description": "Production Database",
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [
      {
        "ports": [
          "5432"
        ],
        "protocol": "tcp"
      }
    ],
    "ip_stack": "ipv4_only",
    "name": "Prod DB",
    "site_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "type": "ip"
  }
}
```

POST body for creating a Resource. `site_id` is required for every type except `device_pool`, which needs `device_membership_criteria` instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|true|none|none|

<h2 id="tocS_ClientTokenCreateResponse">ClientTokenCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokencreateresponse"></a>
<a id="schema_ClientTokenCreateResponse"></a>
<a id="tocSclienttokencreateresponse"></a>
<a id="tocsclienttokencreateresponse"></a>

```json
{
  "data": {
    "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "expires_at": "2025-01-15T12:34:56.789Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-15T12:34:56.789Z",
    "token": "secret-token-here",
    "updated_at": "2025-01-15T12:34:56.789Z"
  }
}
```

Response schema for a new Client Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ClientTokenWithSecret](#schemaclienttokenwithsecret)|false|none|Client Token as returned when it is created, including the encoded secret. The secret is shown once and cannot be retrieved later.|

<h2 id="tocS_PostureField">PostureField</h2>
<!-- backwards compatibility -->
<a id="schemaposturefield"></a>
<a id="schema_PostureField"></a>
<a id="tocSposturefield"></a>
<a id="tocsposturefield"></a>

```json
{
  "field": "intune.compliance_state",
  "operators": [
    "is",
    "is_not",
    "exists",
    "does_not_exist"
  ],
  "platforms": [
    "windows",
    "macos",
    "ios",
    "android"
  ],
  "provider": "intune",
  "rows_supported": true,
  "type": "enum_string"
}
```

A field a Policy's `postures` expression can test

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Value for a leaf's `field`, as `<provider>.<attribute>`|
|operators|[string]|true|none|Values for a leaf's `op` that this field accepts|
|platforms|[string]|true|none|Platforms the field applies to. A leaf on this field is skipped for a device on any other platform.|
|provider|string|true|none|Provider the field comes from|
|rows_supported|boolean|true|none|Whether a leaf on this field accepts `rows`. False for `firezone` fields, which describe exactly one connecting device.|
|type|string|true|none|Type of the field, which decides the operators and the value|

#### Enumerated Values

|Property|Value|
|---|---|
|operators|eq|
|operators|ne|
|operators|gt|
|operators|gte|
|operators|lt|
|operators|lte|
|operators|is|
|operators|is_not|
|operators|is_in|
|operators|is_not_in|
|operators|contains|
|operators|does_not_contain|
|operators|starts_with|
|operators|ends_with|
|operators|matches|
|operators|does_not_match|
|operators|is_in_cidr|
|operators|is_not_in_cidr|
|operators|is_empty|
|operators|is_not_empty|
|operators|before|
|operators|after|
|operators|within_last|
|operators|not_within_last|
|operators|contains_any_of|
|operators|contains_all_of|
|operators|exists|
|operators|does_not_exist|
|platforms|windows|
|platforms|macos|
|platforms|linux|
|platforms|ios|
|platforms|android|
|provider|firezone|
|provider|intune|
|provider|iru|
|provider|defender|
|provider|santa|
|provider|sentinelone|
|provider|sophos|
|type|string|
|type|enum_string|
|type|boolean|
|type|integer|
|type|float|
|type|version|
|type|datetime|
|type|ip|
|type|ipv4|
|type|ipv6|
|type|string_array|
|type|json|

<h2 id="tocS_DefenderPostureProvider">DefenderPostureProvider</h2>
<!-- backwards compatibility -->
<a id="schemadefenderpostureprovider"></a>
<a id="schema_DefenderPostureProvider"></a>
<a id="tocSdefenderpostureprovider"></a>
<a id="tocsdefenderpostureprovider"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "disabled_reason": "string",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "inserted_at": "1970-01-01T00:00:00Z",
  "is_disabled": true,
  "is_verified": true,
  "name": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "tenant_id": "string",
  "type": "defender",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Microsoft Defender for Endpoint posture provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|disabled_reason|string \| null|true|none|none|
|error_message|string \| null|true|none|none|
|errored_at|string(date-time) \| null|true|none|none|
|id|string(uuid)|true|none|none|
|inserted_at|string(date-time)|true|none|none|
|is_disabled|boolean|true|none|none|
|is_verified|boolean|true|none|none|
|name|string|true|none|none|
|synced_at|string(date-time) \| null|true|none|none|
|tenant_id|string|true|none|none|
|type|string|true|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|defender|

<h2 id="tocS_GatewayCreateRequest">GatewayCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagatewaycreaterequest"></a>
<a id="schema_GatewayCreateRequest"></a>
<a id="tocSgatewaycreaterequest"></a>
<a id="tocsgatewaycreaterequest"></a>

```json
{
  "gateway": {
    "name": "vpc-us-east"
  },
  "issue_token": true
}
```

Request body for provisioning a Gateway

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gateway|[GatewayCreate](#schemagatewaycreate)|false|none|Create schema for a single Gateway|
|issue_token|boolean|false|none|Whether to mint the Gateway's token and return it in the response. Requires the `gateway_tokens:write` scope when true.<br>|

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
{
  "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "expires_at": "2025-01-15T12:34:56.789Z",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-15T12:34:56.789Z",
  "updated_at": "2025-01-15T12:34:56.789Z"
}
```

Client Token metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor_id|string(uuid)|true|none|Actor ID|
|expires_at|string(date-time)|true|none|Expiration|
|id|string(uuid)|true|none|Client Token ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|updated_at|string(date-time)|true|none|Update timestamp|

<h2 id="tocS_EntraAuthProvider">EntraAuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemaentraauthprovider"></a>
<a id="schema_EntraAuthProvider"></a>
<a id="tocSentraauthprovider"></a>
<a id="tocsentraauthprovider"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "client_session_lifetime_secs": 604800,
  "context": "clients_and_portal",
  "email_claim": "upn",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_default": false,
  "is_disabled": false,
  "name": "Entra",
  "portal_session_lifetime_secs": 28800,
  "sign_in_tenant_id": "12345678-1234-1234-1234-123456789012",
  "tenant_ids": [
    "12345678-1234-1234-1234-123456789012"
  ],
  "updated_at": "2025-01-15T10:30:00Z"
}
```

Entra Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|client_session_lifetime_secs|integer \| null|true|none|Client session lifetime in seconds. Null when the account default applies.|
|context|string|true|none|Context|
|email_claim|string|true|none|OIDC claim to use as email|
|id|string(uuid)|true|none|Provider ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_default|boolean|true|none|Whether provider is default|
|is_disabled|boolean|true|none|Whether provider is disabled|
|name|string|true|none|Provider name|
|portal_session_lifetime_secs|integer \| null|true|none|Portal session lifetime in seconds. Null when the account default applies.|
|sign_in_tenant_id|string(uuid) \| null|true|read-only|Verified tenant ID whose sign-in endpoint users authenticate through, so that B2B guest users of that tenant can sign in. Null when users authenticate through their home tenant.|
|tenant_ids|[string(uuid)]|true|read-only|Verified Entra tenant IDs allowed to authenticate through this provider|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|context|clients_and_portal|
|context|clients_only|
|context|portal_only|
|email_claim|email|
|email_claim|upn|
|email_claim|preferred_username|

<h2 id="tocS_string_array list provider comparison">string_array list provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring_array list provider comparison"></a>
<a id="schema_string_array list provider comparison"></a>
<a id="tocSstring_array list provider comparison"></a>
<a id="tocsstring_array list provider comparison"></a>

```json
{
  "field": "defender.machine_tags",
  "op": "contains_any_of",
  "rows": "any",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string_array field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.machine_tags|
|field|iru.tags|
|field|santa.primary_user_groups|
|field|santa.tags|
|field|sentinelone.active_protection|
|field|sentinelone.ad_computer_member_of|
|field|sentinelone.ad_last_user_member_of|
|field|sentinelone.missing_permissions|
|field|sentinelone.user_actions_needed|
|field|sophos.ipv4_addresses|
|field|sophos.ipv6_addresses|
|field|sophos.mac_addresses|
|op|contains_any_of|
|op|contains_all_of|
|rows|any|
|rows|all|

<h2 id="tocS_string no_value provider comparison">string no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring no_value provider comparison"></a>
<a id="schema_string no_value provider comparison"></a>
<a id="tocSstring no_value provider comparison"></a>
<a id="tocsstring no_value provider comparison"></a>

```json
{
  "field": "defender.computer_dns_name",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_EntraAuthProviderResponse">EntraAuthProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentraauthproviderresponse"></a>
<a id="schema_EntraAuthProviderResponse"></a>
<a id="tocSentraauthproviderresponse"></a>
<a id="tocsentraauthproviderresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "email_claim": "upn",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": false,
    "is_disabled": false,
    "name": "Entra",
    "portal_session_lifetime_secs": 28800,
    "sign_in_tenant_id": "12345678-1234-1234-1234-123456789012",
    "tenant_ids": [
      "12345678-1234-1234-1234-123456789012"
    ],
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single Entra Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EntraAuthProvider](#schemaentraauthprovider)|false|none|Entra Auth Provider|

<h2 id="tocS_ClientTokenRequest">ClientTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokenrequest"></a>
<a id="schema_ClientTokenRequest"></a>
<a id="tocSclienttokenrequest"></a>
<a id="tocsclienttokenrequest"></a>

```json
{
  "client_token": {
    "expires_at": "2025-01-15T12:34:56.789Z"
  }
}
```

POST body for creating a Client Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_token|[ClientTokenCreate](#schemaclienttokencreate)|true|none|Client Token attributes|

<h2 id="tocS_datetime no_value device comparison">datetime no_value device comparison</h2>
<!-- backwards compatibility -->
<a id="schemadatetime no_value device comparison"></a>
<a id="schema_datetime no_value device comparison"></a>
<a id="tocSdatetime no_value device comparison"></a>
<a id="tocsdatetime no_value device comparison"></a>

```json
{
  "field": "firezone.last_attested_at",
  "op": "exists",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.last_attested_at|
|op|exists|
|op|does_not_exist|
|value|null|

<h2 id="tocS_PolicyPostureLeaf">PolicyPostureLeaf</h2>
<!-- backwards compatibility -->
<a id="schemapolicypostureleaf"></a>
<a id="schema_PolicyPostureLeaf"></a>
<a id="tocSpolicypostureleaf"></a>
<a id="tocspolicypostureleaf"></a>

```json
{
  "field": "intune.compliance_state",
  "op": "is",
  "rows": "all",
  "value": "compliant"
}
```

One typed comparison. Each alternative enumerates valid fields, their
operators, and the corresponding value type. All keys are explicit;
unknown keys are rejected. Provider comparisons optionally accept `rows`;
Firezone device comparisons do not.

Value length limits are enforced in bytes by the policy parser, including
each string in a list. The parser additionally checks regex syntax,
versions, CIDR address families, positive durations, and the `@latest`
macro. See PolicyPostureNode for platform and missing-data semantics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|field|string|true|none|boolean field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|boolean field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|boolean|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Positive ISO 8601 duration, such as PT24H or P30D|
|*oneOf*|object|false|none|none|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string(date-time)|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|Positive ISO 8601 duration, such as PT24H or P30D|
|*oneOf*|object|false|none|none|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string(date-time)|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Regular expression; at most 256 bytes|
|*oneOf*|object|false|none|none|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|float field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|float field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|number|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|integer field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|integer field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|integer|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|ip field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|ip field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|ipv4 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|ipv4 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|ipv6 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|ipv6 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|json field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Regular expression; at most 256 bytes|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|Regular expression; at most 256 bytes|
|*oneOf*|object|false|none|none|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|string_array field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|string_array field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|string_array field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|none|
|*oneOf*|object|false|none|none|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Segment-wise version, or @latest for firezone.last_seen_version only|
|*oneOf*|object|false|none|none|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|
|*oneOf*|object|false|none|none|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|Segment-wise version, or @latest for firezone.last_seen_version only|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.enrolled|
|field|defender.entra_joined|
|field|defender.is_excluded|
|field|defender.is_potential_duplication|
|field|defender.os_up_to_date|
|field|intune.attestation_bit_locker_enabled|
|field|intune.attestation_boot_debugging|
|field|intune.attestation_code_integrity|
|field|intune.attestation_data_execution_policy_enabled|
|field|intune.attestation_early_launch_anti_malware_driver_protection|
|field|intune.attestation_operating_system_kernel_debugging|
|field|intune.attestation_safe_mode|
|field|intune.attestation_secure_boot|
|field|intune.attestation_supported|
|field|intune.attestation_test_signing|
|field|intune.attestation_virtual_secure_mode|
|field|intune.attestation_windows_pe|
|field|intune.config_manager_compliance_policy|
|field|intune.config_manager_device_configuration|
|field|intune.config_manager_inventory|
|field|intune.config_manager_modern_apps|
|field|intune.config_manager_resource_access|
|field|intune.config_manager_windows_update_for_business|
|field|intune.eas_activated|
|field|intune.enrolled|
|field|intune.entra_registered|
|field|intune.is_encrypted|
|field|intune.is_supervised|
|field|intune.jail_broken|
|field|intune.os_up_to_date|
|field|intune.require_user_enrollment_approval|
|field|iru.activation_lock_allowed_while_supervised|
|field|iru.activation_lock_bypass_code_failed|
|field|iru.activation_lock_supported|
|field|iru.agent_installed|
|field|iru.any_signed_os|
|field|iru.apple_silicon|
|field|iru.bootstrap_token_auth|
|field|iru.bootstrap_token_escrowed|
|field|iru.data_roaming|
|field|iru.device_activation_lock_enabled|
|field|iru.enrolled|
|field|iru.filevault_enabled|
|field|iru.filevault_key_escrowed|
|field|iru.filevault_regeneration_needed|
|field|iru.firewall_allow_signed_applications|
|field|iru.firewall_block_all_incoming|
|field|iru.firewall_enabled|
|field|iru.firewall_logging|
|field|iru.firewall_stealth_mode|
|field|iru.firewall_unloading|
|field|iru.gatekeeper_enabled|
|field|iru.gatekeeper_trusted_developers|
|field|iru.hotspot|
|field|iru.is_missing|
|field|iru.is_removed|
|field|iru.kext_requires_bootstrap_token|
|field|iru.mdm_enabled|
|field|iru.mdm_manages_kext|
|field|iru.os_up_to_date|
|field|iru.shared_ipad|
|field|iru.sip_enabled|
|field|iru.software_update_requires_bootstrap_token|
|field|iru.ssv_enabled|
|field|iru.user_activation_lock_enabled|
|field|iru.user_is_archived|
|field|iru.user_manages_kext|
|field|santa.enrolled|
|field|santa.os_up_to_date|
|field|sentinelone.allow_remote_shell|
|field|sentinelone.encrypted_applications|
|field|sentinelone.enrolled|
|field|sentinelone.firewall_enabled|
|field|sentinelone.has_containerized_workload|
|field|sentinelone.in_remote_shell_session|
|field|sentinelone.infected|
|field|sentinelone.is_active|
|field|sentinelone.is_ad_connector|
|field|sentinelone.is_decommissioned|
|field|sentinelone.is_hyper_automate|
|field|sentinelone.is_pending_uninstall|
|field|sentinelone.is_uninstalled|
|field|sentinelone.is_up_to_date|
|field|sentinelone.location_enabled|
|field|sentinelone.network_quarantine_enabled|
|field|sentinelone.os_up_to_date|
|field|sentinelone.proxy_console|
|field|sentinelone.proxy_deep_visibility|
|field|sentinelone.proxy_pac_file_usage|
|field|sentinelone.threat_reboot_required|
|field|sophos.cloned|
|field|sophos.enrolled|
|field|sophos.isolation_admin_isolated|
|field|sophos.isolation_self_isolated|
|field|sophos.online|
|field|sophos.os_is_server|
|field|sophos.os_up_to_date|
|field|sophos.tamper_protection_enabled|
|field|sophos.tamper_protection_supported|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.enrolled|
|field|defender.entra_joined|
|field|defender.is_excluded|
|field|defender.is_potential_duplication|
|field|defender.os_up_to_date|
|field|intune.attestation_bit_locker_enabled|
|field|intune.attestation_boot_debugging|
|field|intune.attestation_code_integrity|
|field|intune.attestation_data_execution_policy_enabled|
|field|intune.attestation_early_launch_anti_malware_driver_protection|
|field|intune.attestation_operating_system_kernel_debugging|
|field|intune.attestation_safe_mode|
|field|intune.attestation_secure_boot|
|field|intune.attestation_supported|
|field|intune.attestation_test_signing|
|field|intune.attestation_virtual_secure_mode|
|field|intune.attestation_windows_pe|
|field|intune.config_manager_compliance_policy|
|field|intune.config_manager_device_configuration|
|field|intune.config_manager_inventory|
|field|intune.config_manager_modern_apps|
|field|intune.config_manager_resource_access|
|field|intune.config_manager_windows_update_for_business|
|field|intune.eas_activated|
|field|intune.enrolled|
|field|intune.entra_registered|
|field|intune.is_encrypted|
|field|intune.is_supervised|
|field|intune.jail_broken|
|field|intune.os_up_to_date|
|field|intune.require_user_enrollment_approval|
|field|iru.activation_lock_allowed_while_supervised|
|field|iru.activation_lock_bypass_code_failed|
|field|iru.activation_lock_supported|
|field|iru.agent_installed|
|field|iru.any_signed_os|
|field|iru.apple_silicon|
|field|iru.bootstrap_token_auth|
|field|iru.bootstrap_token_escrowed|
|field|iru.data_roaming|
|field|iru.device_activation_lock_enabled|
|field|iru.enrolled|
|field|iru.filevault_enabled|
|field|iru.filevault_key_escrowed|
|field|iru.filevault_regeneration_needed|
|field|iru.firewall_allow_signed_applications|
|field|iru.firewall_block_all_incoming|
|field|iru.firewall_enabled|
|field|iru.firewall_logging|
|field|iru.firewall_stealth_mode|
|field|iru.firewall_unloading|
|field|iru.gatekeeper_enabled|
|field|iru.gatekeeper_trusted_developers|
|field|iru.hotspot|
|field|iru.is_missing|
|field|iru.is_removed|
|field|iru.kext_requires_bootstrap_token|
|field|iru.mdm_enabled|
|field|iru.mdm_manages_kext|
|field|iru.os_up_to_date|
|field|iru.shared_ipad|
|field|iru.sip_enabled|
|field|iru.software_update_requires_bootstrap_token|
|field|iru.ssv_enabled|
|field|iru.user_activation_lock_enabled|
|field|iru.user_is_archived|
|field|iru.user_manages_kext|
|field|santa.enrolled|
|field|santa.os_up_to_date|
|field|sentinelone.allow_remote_shell|
|field|sentinelone.encrypted_applications|
|field|sentinelone.enrolled|
|field|sentinelone.firewall_enabled|
|field|sentinelone.has_containerized_workload|
|field|sentinelone.in_remote_shell_session|
|field|sentinelone.infected|
|field|sentinelone.is_active|
|field|sentinelone.is_ad_connector|
|field|sentinelone.is_decommissioned|
|field|sentinelone.is_hyper_automate|
|field|sentinelone.is_pending_uninstall|
|field|sentinelone.is_uninstalled|
|field|sentinelone.is_up_to_date|
|field|sentinelone.location_enabled|
|field|sentinelone.network_quarantine_enabled|
|field|sentinelone.os_up_to_date|
|field|sentinelone.proxy_console|
|field|sentinelone.proxy_deep_visibility|
|field|sentinelone.proxy_pac_file_usage|
|field|sentinelone.threat_reboot_required|
|field|sophos.cloned|
|field|sophos.enrolled|
|field|sophos.isolation_admin_isolated|
|field|sophos.isolation_self_isolated|
|field|sophos.online|
|field|sophos.os_is_server|
|field|sophos.os_up_to_date|
|field|sophos.tamper_protection_enabled|
|field|sophos.tamper_protection_supported|
|op|is|
|rows|any|
|rows|all|
|field|defender.first_seen_at|
|field|defender.last_seen_at|
|field|intune.android_security_patch_level|
|field|intune.attestation_issued_at|
|field|intune.compliance_grace_period_expiration_at|
|field|intune.eas_activated_at|
|field|intune.enrolled_at|
|field|intune.exchange_last_successful_sync_at|
|field|intune.last_sync_at|
|field|intune.management_certificate_expires_at|
|field|iru.activation_lock_collected_at|
|field|iru.filevault_collected_at|
|field|iru.filevault_key_rotation_scheduled_at|
|field|iru.firewall_collected_at|
|field|iru.first_enrolled_at|
|field|iru.gatekeeper_collected_at|
|field|iru.inventory_collected_at|
|field|iru.last_check_in_at|
|field|iru.last_enrolled_at|
|field|iru.startup_settings_collected_at|
|field|santa.first_seen_at|
|field|santa.last_preflight_at|
|field|santa.last_sync_at|
|field|santa.rule_sync_at|
|field|santa.temporary_admin_mode_ends_at|
|field|santa.temporary_monitor_mode_ends_at|
|field|sentinelone.first_full_mode_at|
|field|sentinelone.full_disk_scan_updated_at|
|field|sentinelone.last_active_at|
|field|sentinelone.last_successful_scan_at|
|field|sentinelone.operational_state_expires_at|
|field|sentinelone.os_start_time|
|field|sentinelone.registered_at|
|field|sentinelone.remote_profiling_state_expires_at|
|field|sentinelone.scan_aborted_at|
|field|sentinelone.scan_finished_at|
|field|sentinelone.scan_started_at|
|field|sophos.last_agent_update_at|
|field|sophos.last_os_update_at|
|field|sophos.last_seen_at|
|op|within_last|
|op|not_within_last|
|rows|any|
|rows|all|
|field|defender.first_seen_at|
|field|defender.last_seen_at|
|field|intune.android_security_patch_level|
|field|intune.attestation_issued_at|
|field|intune.compliance_grace_period_expiration_at|
|field|intune.eas_activated_at|
|field|intune.enrolled_at|
|field|intune.exchange_last_successful_sync_at|
|field|intune.last_sync_at|
|field|intune.management_certificate_expires_at|
|field|iru.activation_lock_collected_at|
|field|iru.filevault_collected_at|
|field|iru.filevault_key_rotation_scheduled_at|
|field|iru.firewall_collected_at|
|field|iru.first_enrolled_at|
|field|iru.gatekeeper_collected_at|
|field|iru.inventory_collected_at|
|field|iru.last_check_in_at|
|field|iru.last_enrolled_at|
|field|iru.startup_settings_collected_at|
|field|santa.first_seen_at|
|field|santa.last_preflight_at|
|field|santa.last_sync_at|
|field|santa.rule_sync_at|
|field|santa.temporary_admin_mode_ends_at|
|field|santa.temporary_monitor_mode_ends_at|
|field|sentinelone.first_full_mode_at|
|field|sentinelone.full_disk_scan_updated_at|
|field|sentinelone.last_active_at|
|field|sentinelone.last_successful_scan_at|
|field|sentinelone.operational_state_expires_at|
|field|sentinelone.os_start_time|
|field|sentinelone.registered_at|
|field|sentinelone.remote_profiling_state_expires_at|
|field|sentinelone.scan_aborted_at|
|field|sentinelone.scan_finished_at|
|field|sentinelone.scan_started_at|
|field|sophos.last_agent_update_at|
|field|sophos.last_os_update_at|
|field|sophos.last_seen_at|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.first_seen_at|
|field|defender.last_seen_at|
|field|intune.android_security_patch_level|
|field|intune.attestation_issued_at|
|field|intune.compliance_grace_period_expiration_at|
|field|intune.eas_activated_at|
|field|intune.enrolled_at|
|field|intune.exchange_last_successful_sync_at|
|field|intune.last_sync_at|
|field|intune.management_certificate_expires_at|
|field|iru.activation_lock_collected_at|
|field|iru.filevault_collected_at|
|field|iru.filevault_key_rotation_scheduled_at|
|field|iru.firewall_collected_at|
|field|iru.first_enrolled_at|
|field|iru.gatekeeper_collected_at|
|field|iru.inventory_collected_at|
|field|iru.last_check_in_at|
|field|iru.last_enrolled_at|
|field|iru.startup_settings_collected_at|
|field|santa.first_seen_at|
|field|santa.last_preflight_at|
|field|santa.last_sync_at|
|field|santa.rule_sync_at|
|field|santa.temporary_admin_mode_ends_at|
|field|santa.temporary_monitor_mode_ends_at|
|field|sentinelone.first_full_mode_at|
|field|sentinelone.full_disk_scan_updated_at|
|field|sentinelone.last_active_at|
|field|sentinelone.last_successful_scan_at|
|field|sentinelone.operational_state_expires_at|
|field|sentinelone.os_start_time|
|field|sentinelone.registered_at|
|field|sentinelone.remote_profiling_state_expires_at|
|field|sentinelone.scan_aborted_at|
|field|sentinelone.scan_finished_at|
|field|sentinelone.scan_started_at|
|field|sophos.last_agent_update_at|
|field|sophos.last_os_update_at|
|field|sophos.last_seen_at|
|op|before|
|op|after|
|rows|any|
|rows|all|
|field|firezone.last_attested_at|
|op|within_last|
|op|not_within_last|
|field|firezone.last_attested_at|
|op|exists|
|op|does_not_exist|
|value|null|
|field|firezone.last_attested_at|
|op|before|
|op|after|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|is_in|
|op|is_not_in|
|rows|any|
|rows|all|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|matches|
|op|does_not_match|
|rows|any|
|rows|all|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|is|
|op|is_not|
|op|contains|
|op|does_not_contain|
|op|starts_with|
|op|ends_with|
|rows|any|
|rows|all|
|field|iru.device_capacity_gb|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|iru.device_capacity_gb|
|op|eq|
|op|ne|
|op|gt|
|op|gte|
|op|lt|
|op|lte|
|rows|any|
|rows|all|
|field|defender.os_build|
|field|defender.rbac_group_id|
|field|intune.attestation_reset_count|
|field|intune.attestation_restart_count|
|field|intune.free_storage_space_bytes|
|field|intune.physical_memory_bytes|
|field|intune.total_storage_space_bytes|
|field|santa.sip_status|
|field|sentinelone.active_threats|
|field|sentinelone.core_count|
|field|sentinelone.cpu_count|
|field|sentinelone.protected_containers_count|
|field|sentinelone.protected_pods_count|
|field|sentinelone.protected_tasks_count|
|field|sentinelone.total_memory|
|field|sophos.os_build|
|field|sophos.os_major_version|
|field|sophos.os_minor_version|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.os_build|
|field|defender.rbac_group_id|
|field|intune.attestation_reset_count|
|field|intune.attestation_restart_count|
|field|intune.free_storage_space_bytes|
|field|intune.physical_memory_bytes|
|field|intune.total_storage_space_bytes|
|field|santa.sip_status|
|field|sentinelone.active_threats|
|field|sentinelone.core_count|
|field|sentinelone.cpu_count|
|field|sentinelone.protected_containers_count|
|field|sentinelone.protected_pods_count|
|field|sentinelone.protected_tasks_count|
|field|sentinelone.total_memory|
|field|sophos.os_build|
|field|sophos.os_major_version|
|field|sophos.os_minor_version|
|op|eq|
|op|ne|
|op|gt|
|op|gte|
|op|lt|
|op|lte|
|rows|any|
|rows|all|
|field|defender.last_external_ip_address|
|field|defender.last_ip_address|
|field|santa.last_preflight_ip|
|field|sentinelone.external_ip|
|field|sentinelone.last_ip_to_management|
|op|is_in_cidr|
|op|is_not_in_cidr|
|rows|any|
|rows|all|
|field|defender.last_external_ip_address|
|field|defender.last_ip_address|
|field|santa.last_preflight_ip|
|field|sentinelone.external_ip|
|field|sentinelone.last_ip_to_management|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|firezone.ipv4|
|op|is_in_cidr|
|op|is_not_in_cidr|
|field|firezone.ipv4|
|op|exists|
|op|does_not_exist|
|value|null|
|field|firezone.ipv6|
|op|is_in_cidr|
|op|is_not_in_cidr|
|field|firezone.ipv6|
|op|exists|
|op|does_not_exist|
|value|null|
|field|defender.ip_addresses|
|field|sentinelone.cloud_providers|
|field|sentinelone.locations|
|field|sentinelone.network_interfaces|
|field|sentinelone.tags|
|field|sophos.assigned_products|
|field|sophos.device_software|
|field|sophos.encryption_volumes|
|field|sophos.group_hierarchy|
|field|sophos.health_service_details|
|field|sophos.packages|
|field|sophos.tags|
|op|is_empty|
|op|is_not_empty|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|is_in|
|op|is_not_in|
|rows|any|
|rows|all|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|matches|
|op|does_not_match|
|rows|any|
|rows|all|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|is|
|op|is_not|
|op|contains|
|op|does_not_contain|
|op|starts_with|
|op|ends_with|
|rows|any|
|rows|all|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|is_in|
|op|is_not_in|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|exists|
|op|does_not_exist|
|value|null|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|matches|
|op|does_not_match|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|is|
|op|is_not|
|op|contains|
|op|does_not_contain|
|op|starts_with|
|op|ends_with|
|field|defender.machine_tags|
|field|iru.tags|
|field|santa.primary_user_groups|
|field|santa.tags|
|field|sentinelone.active_protection|
|field|sentinelone.ad_computer_member_of|
|field|sentinelone.ad_last_user_member_of|
|field|sentinelone.missing_permissions|
|field|sentinelone.user_actions_needed|
|field|sophos.ipv4_addresses|
|field|sophos.ipv6_addresses|
|field|sophos.mac_addresses|
|op|contains_any_of|
|op|contains_all_of|
|rows|any|
|rows|all|
|field|defender.machine_tags|
|field|iru.tags|
|field|santa.primary_user_groups|
|field|santa.tags|
|field|sentinelone.active_protection|
|field|sentinelone.ad_computer_member_of|
|field|sentinelone.ad_last_user_member_of|
|field|sentinelone.missing_permissions|
|field|sentinelone.user_actions_needed|
|field|sophos.ipv4_addresses|
|field|sophos.ipv6_addresses|
|field|sophos.mac_addresses|
|op|is_empty|
|op|is_not_empty|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.machine_tags|
|field|iru.tags|
|field|santa.primary_user_groups|
|field|santa.tags|
|field|sentinelone.active_protection|
|field|sentinelone.ad_computer_member_of|
|field|sentinelone.ad_last_user_member_of|
|field|sentinelone.missing_permissions|
|field|sentinelone.user_actions_needed|
|field|sophos.ipv4_addresses|
|field|sophos.ipv6_addresses|
|field|sophos.mac_addresses|
|op|contains|
|op|does_not_contain|
|rows|any|
|rows|all|
|field|defender.agent_version|
|field|intune.attestation_boot_app_security_version|
|field|intune.attestation_boot_manager_security_version|
|field|intune.attestation_boot_manager_version|
|field|intune.attestation_code_integrity_check_version|
|field|intune.attestation_content_version|
|field|intune.attestation_tpm_version|
|field|intune.os_version|
|field|iru.agent_version|
|field|iru.display_os_version|
|field|iru.firewall_version|
|field|iru.gatekeeper_opaque_version|
|field|iru.gatekeeper_version|
|field|iru.malware_removal_tool_version|
|field|iru.os_version|
|field|iru.supplemental_os_version_extra|
|field|iru.xprotect_version|
|field|santa.os_version|
|field|santa.santa_version|
|field|santa.santanetd_version|
|field|sentinelone.agent_version|
|field|sentinelone.os_revision|
|field|sentinelone.ranger_version|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|
|field|defender.agent_version|
|field|intune.attestation_boot_app_security_version|
|field|intune.attestation_boot_manager_security_version|
|field|intune.attestation_boot_manager_version|
|field|intune.attestation_code_integrity_check_version|
|field|intune.attestation_content_version|
|field|intune.attestation_tpm_version|
|field|intune.os_version|
|field|iru.agent_version|
|field|iru.display_os_version|
|field|iru.firewall_version|
|field|iru.gatekeeper_opaque_version|
|field|iru.gatekeeper_version|
|field|iru.malware_removal_tool_version|
|field|iru.os_version|
|field|iru.supplemental_os_version_extra|
|field|iru.xprotect_version|
|field|santa.os_version|
|field|santa.santa_version|
|field|santa.santanetd_version|
|field|sentinelone.agent_version|
|field|sentinelone.os_revision|
|field|sentinelone.ranger_version|
|op|is|
|op|is_not|
|op|gt|
|op|gte|
|op|lt|
|op|lte|
|rows|any|
|rows|all|
|field|firezone.last_seen_version|
|op|exists|
|op|does_not_exist|
|value|null|
|field|firezone.last_seen_version|
|op|is|
|op|is_not|
|op|gt|
|op|gte|
|op|lt|
|op|lte|

<h2 id="tocS_ExternalIdentity">ExternalIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaexternalidentity"></a>
<a id="schema_ExternalIdentity"></a>
<a id="tocSexternalidentity"></a>
<a id="tocsexternalidentity"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "actor_id": "cdfa97e6-cca1-41db-8fc7-864daedb46df",
  "directory_id": "9f8e7d6c-5b4a-3c2b-1a0e-9f8e7d6c5b4a",
  "email": "john.doe@example.com",
  "family_name": "Doe",
  "firezone_avatar_url": "https://avatars.firezone.dev/u/2551705710219359.png",
  "given_name": "John",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "idp_id": "2551705710219359",
  "inserted_at": "2025-01-01T00:00:00Z",
  "issuer": "https://accounts.google.com",
  "middle_name": "string",
  "name": "John Doe",
  "nickname": "string",
  "picture": "https://example.com/avatar.jpg",
  "preferred_username": "jdoe",
  "profile": "string",
  "synced_at": "2025-01-15T10:30:00Z"
}
```

External Identity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|actor_id|string(uuid)|true|none|Actor ID|
|directory_id|string(uuid) \| null|true|none|Directory UUID reference|
|email|string|true|none|Email address, falling back to the IdP identifier when unset|
|family_name|string \| null|true|none|Family name|
|firezone_avatar_url|string \| null|true|none|Firezone-hosted avatar URL|
|given_name|string \| null|true|none|Given name|
|id|string(uuid)|true|none|External Identity ID|
|idp_id|string|true|none|IDP-specific identifier for this identity|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|issuer|string|true|none|Identity issuer URL (e.g., 'https://accounts.google.com', 'https://company.okta.com')|
|middle_name|string \| null|true|none|Middle name|
|name|string \| null|true|none|Full name|
|nickname|string \| null|true|none|Nickname|
|picture|string \| null|true|none|Profile picture URL|
|preferred_username|string \| null|true|none|Preferred username|
|profile|string \| null|true|none|Profile URL|
|synced_at|string(date-time) \| null|true|none|Last sync timestamp|

<h2 id="tocS_IruDevice">IruDevice</h2>
<!-- backwards compatibility -->
<a id="schemairudevice"></a>
<a id="schema_IruDevice"></a>
<a id="tocSirudevice"></a>
<a id="tocsirudevice"></a>

```json
{
  "host_name": "string",
  "gatekeeper_trusted_developers": true,
  "secure_boot_level": "string",
  "os_name": "string",
  "filevault_key_rotation_scheduled_at": "1970-01-01T00:00:00Z",
  "firewall_enabled": true,
  "model_name": "string",
  "firewall_logging_option": "string",
  "shared_ipad": true,
  "local_hostname": "string",
  "activation_lock_allowed_while_supervised": true,
  "updated_at": "1970-01-01T00:00:00Z",
  "device_activation_lock_enabled": true,
  "gatekeeper_version": "string",
  "bootstrap_token_escrowed": true,
  "iru_id": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "asset_tag": "string",
  "blueprint_name": "string",
  "inserted_at": "1970-01-01T00:00:00Z",
  "data_roaming": true,
  "is_removed": true,
  "ssv_enabled": true,
  "filevault_key_type": "string",
  "device_capacity_gb": 0,
  "tags": [
    "string"
  ],
  "filevault_key_escrowed": true,
  "apple_silicon": true,
  "serial_number": "string",
  "cellular_technology": "string",
  "blueprint_id": "string",
  "user_manages_kext": true,
  "hotspot": true,
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "mdm_enabled": true,
  "user_email": "string",
  "gatekeeper_opaque_version": "string",
  "external_boot_level": "string",
  "firewall_collected_at": "1970-01-01T00:00:00Z",
  "software_update_requires_bootstrap_token": true,
  "xprotect_version": "string",
  "agent_installed": true,
  "mdm_manages_kext": true,
  "display_os_version": "string",
  "filevault_regeneration_needed": true,
  "is_missing": true,
  "last_enrolled_at": "1970-01-01T00:00:00Z",
  "gatekeeper_enabled": true,
  "firewall_version": "string",
  "first_enrolled_at": "1970-01-01T00:00:00Z",
  "firewall_logging": true,
  "model_identifier": "string",
  "os_build": "string",
  "user_activation_lock_enabled": true,
  "activation_lock_collected_at": "1970-01-01T00:00:00Z",
  "lost_mode_status": "string",
  "startup_settings_collected_at": "1970-01-01T00:00:00Z",
  "platform": "string",
  "filevault_enabled": true,
  "user_is_archived": true,
  "activation_lock_supported": true,
  "supplemental_build_version": "string",
  "sip_enabled": true,
  "firewall_allow_signed_applications": true,
  "model": "string",
  "supplemental_os_version_extra": "string",
  "user_id": "string",
  "bootstrap_token_auth": true,
  "firewall_block_all_incoming": true,
  "last_check_in_at": "1970-01-01T00:00:00Z",
  "firewall_stealth_mode": true,
  "kext_requires_bootstrap_token": true,
  "agent_version": "string",
  "activation_lock_bypass_code_failed": true,
  "inventory_collected_at": "1970-01-01T00:00:00Z",
  "any_signed_os": true,
  "filevault_collected_at": "1970-01-01T00:00:00Z",
  "gatekeeper_collected_at": "1970-01-01T00:00:00Z",
  "firewall_unloading": true,
  "os_version": "string",
  "malware_removal_tool_version": "string",
  "device_family": "string",
  "user_name": "string",
  "device_name": "string",
  "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Device synced from Iru (formerly Kandji)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host_name|string \| null|true|none|none|
|gatekeeper_trusted_developers|boolean \| null|true|none|none|
|secure_boot_level|string \| null|true|none|none|
|os_name|string \| null|true|none|none|
|filevault_key_rotation_scheduled_at|string(date-time) \| null|true|none|none|
|firewall_enabled|boolean \| null|true|none|none|
|model_name|string \| null|true|none|none|
|firewall_logging_option|string \| null|true|none|none|
|shared_ipad|boolean \| null|true|none|none|
|local_hostname|string \| null|true|none|none|
|activation_lock_allowed_while_supervised|boolean \| null|true|none|none|
|updated_at|string(date-time) \| null|true|none|none|
|device_activation_lock_enabled|boolean \| null|true|none|none|
|gatekeeper_version|string \| null|true|none|none|
|bootstrap_token_escrowed|boolean \| null|true|none|none|
|iru_id|string|true|none|none|
|synced_at|string(date-time)|true|none|none|
|asset_tag|string \| null|true|none|none|
|blueprint_name|string \| null|true|none|none|
|inserted_at|string(date-time) \| null|true|none|none|
|data_roaming|boolean \| null|true|none|none|
|is_removed|boolean \| null|true|none|none|
|ssv_enabled|boolean \| null|true|none|none|
|filevault_key_type|string \| null|true|none|none|
|device_capacity_gb|number(float) \| null|true|none|none|
|tags|[string]|true|none|none|
|filevault_key_escrowed|boolean \| null|true|none|none|
|apple_silicon|boolean \| null|true|none|none|
|serial_number|string \| null|true|none|none|
|cellular_technology|string \| null|true|none|none|
|blueprint_id|string \| null|true|none|none|
|user_manages_kext|boolean \| null|true|none|none|
|hotspot|boolean \| null|true|none|none|
|account_id|string(uuid)|true|none|none|
|mdm_enabled|boolean \| null|true|none|none|
|user_email|string \| null|true|none|none|
|gatekeeper_opaque_version|string \| null|true|none|none|
|external_boot_level|string \| null|true|none|none|
|firewall_collected_at|string(date-time) \| null|true|none|none|
|software_update_requires_bootstrap_token|boolean \| null|true|none|none|
|xprotect_version|string \| null|true|none|none|
|agent_installed|boolean \| null|true|none|none|
|mdm_manages_kext|boolean \| null|true|none|none|
|display_os_version|string \| null|true|none|none|
|filevault_regeneration_needed|boolean \| null|true|none|none|
|is_missing|boolean \| null|true|none|none|
|last_enrolled_at|string(date-time) \| null|true|none|none|
|gatekeeper_enabled|boolean \| null|true|none|none|
|firewall_version|string \| null|true|none|none|
|first_enrolled_at|string(date-time) \| null|true|none|none|
|firewall_logging|boolean \| null|true|none|none|
|model_identifier|string \| null|true|none|none|
|os_build|string \| null|true|none|none|
|user_activation_lock_enabled|boolean \| null|true|none|none|
|activation_lock_collected_at|string(date-time) \| null|true|none|none|
|lost_mode_status|string \| null|true|none|none|
|startup_settings_collected_at|string(date-time) \| null|true|none|none|
|platform|string \| null|true|none|none|
|filevault_enabled|boolean \| null|true|none|none|
|user_is_archived|boolean \| null|true|none|none|
|activation_lock_supported|boolean \| null|true|none|none|
|supplemental_build_version|string \| null|true|none|none|
|sip_enabled|boolean \| null|true|none|none|
|firewall_allow_signed_applications|boolean \| null|true|none|none|
|model|string \| null|true|none|none|
|supplemental_os_version_extra|string \| null|true|none|none|
|user_id|string \| null|true|none|none|
|bootstrap_token_auth|boolean \| null|true|none|none|
|firewall_block_all_incoming|boolean \| null|true|none|none|
|last_check_in_at|string(date-time) \| null|true|none|none|
|firewall_stealth_mode|boolean \| null|true|none|none|
|kext_requires_bootstrap_token|boolean \| null|true|none|none|
|agent_version|string \| null|true|none|none|
|activation_lock_bypass_code_failed|boolean \| null|true|none|none|
|inventory_collected_at|string(date-time) \| null|true|none|none|
|any_signed_os|boolean \| null|true|none|none|
|filevault_collected_at|string(date-time) \| null|true|none|none|
|gatekeeper_collected_at|string(date-time) \| null|true|none|none|
|firewall_unloading|boolean \| null|true|none|none|
|os_version|string \| null|true|none|none|
|malware_removal_tool_version|string \| null|true|none|none|
|device_family|string \| null|true|none|none|
|user_name|string \| null|true|none|none|
|device_name|string \| null|true|none|none|
|posture_provider_id|string(uuid)|true|none|none|

<h2 id="tocS_IntuneDeviceResponse">IntuneDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintunedeviceresponse"></a>
<a id="schema_IntuneDeviceResponse"></a>
<a id="tocSintunedeviceresponse"></a>
<a id="tocsintunedeviceresponse"></a>

```json
{
  "data": {
    "device_registration_state": "string",
    "attestation_operating_system_rev_list_info": "string",
    "entra_registered": true,
    "attestation_boot_app_security_version": "string",
    "operating_system": "string",
    "is_supervised": true,
    "notes": "string",
    "free_storage_space_bytes": 0,
    "attestation_issued_at": "1970-01-01T00:00:00Z",
    "config_manager_compliance_policy": true,
    "user_display_name": "string",
    "config_manager_device_configuration": true,
    "config_manager_inventory": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "enrolled_at": "1970-01-01T00:00:00Z",
    "total_storage_space_bytes": 0,
    "attestation_operating_system_kernel_debugging": true,
    "attestation_data_execution_policy_enabled": true,
    "ethernet_mac_address": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "inserted_at": "1970-01-01T00:00:00Z",
    "attestation_health_status_mismatch_info": "string",
    "intune_id": "string",
    "management_certificate_expires_at": "1970-01-01T00:00:00Z",
    "compliance_state": "string",
    "require_user_enrollment_approval": true,
    "attestation_code_integrity_check_version": "string",
    "attestation_pcr0": "string",
    "attestation_boot_revision_list_info": "string",
    "attestation_reset_count": 0,
    "attestation_safe_mode": true,
    "managed_device_owner_type": "string",
    "serial_number": "string",
    "attestation_secure_boot": true,
    "device_category_display_name": "string",
    "attestation_code_integrity_policy": "string",
    "attestation_virtual_secure_mode": true,
    "last_sync_at": "1970-01-01T00:00:00Z",
    "is_encrypted": true,
    "eas_activated": true,
    "manufacturer": "string",
    "eas_activated_at": "1970-01-01T00:00:00Z",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "attestation_early_launch_anti_malware_driver_protection": true,
    "management_agent": "string",
    "attestation_tpm_version": "string",
    "management_state": "string",
    "wifi_mac_address": "string",
    "attestation_code_integrity": true,
    "user_principal_name": "string",
    "entra_device_id": "string",
    "android_security_patch_level": "1970-01-01",
    "attestation_pcr_hash_algorithm": "string",
    "device_enrollment_type": "string",
    "subscriber_carrier": "string",
    "enrollment_profile_name": "string",
    "model": "string",
    "attestation_boot_manager_version": "string",
    "partner_reported_threat_state": "string",
    "config_manager_modern_apps": true,
    "user_id": "string",
    "jail_broken": true,
    "eas_device_id": "string",
    "exchange_last_successful_sync_at": "1970-01-01T00:00:00Z",
    "attestation_bit_locker_enabled": true,
    "attestation_content_version": "string",
    "exchange_access_state": "string",
    "managed_device_name": "string",
    "udid": "string",
    "attestation_secure_boot_config_policy_fingerprint": "string",
    "attestation_identity_key": "string",
    "attestation_boot_manager_security_version": "string",
    "compliance_grace_period_expiration_at": "1970-01-01T00:00:00Z",
    "exchange_access_state_reason": "string",
    "attestation_windows_pe": true,
    "attestation_status": "string",
    "iccid": "string",
    "meid": "string",
    "attestation_supported": true,
    "attestation_test_signing": true,
    "attestation_boot_debugging": true,
    "phone_number": "string",
    "attestation_restart_count": 0,
    "imei": "string",
    "os_version": "string",
    "physical_memory_bytes": 0,
    "config_manager_windows_update_for_business": true,
    "email_address": "string",
    "device_name": "string",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "config_manager_resource_access": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IntuneDevice](#schemaintunedevice)|false|none|Device synced from Microsoft Intune|

<h2 id="tocS_ClientPutRequest">ClientPutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclientputrequest"></a>
<a id="schema_ClientPutRequest"></a>
<a id="tocSclientputrequest"></a>
<a id="tocsclientputrequest"></a>

```json
{
  "client": {
    "name": "John's Macbook Air",
    "slug": "johns-macbook-air"
  }
}
```

PUT body for updating a Client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[ClientPut](#schemaclientput)|true|none|Put schema for updating a single Client|

<h2 id="tocS_OktaDirectoryResponse">OktaDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoktadirectoryresponse"></a>
<a id="schema_OktaDirectoryResponse"></a>
<a id="tocSoktadirectoryresponse"></a>
<a id="tocsoktadirectoryresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_id": "0oa1b2c3d4e5EXAMPLE",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "kid": "kid-2f8a1c9e",
    "name": "Okta",
    "okta_domain": "example.okta.com",
    "synced_at": "2025-01-15T10:30:00Z",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single Okta Directory

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OktaDirectory](#schemaoktadirectory)|false|none|Okta Directory|

<h2 id="tocS_GatewaySessionSubject">GatewaySessionSubject</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysessionsubject"></a>
<a id="schema_GatewaySessionSubject"></a>
<a id="tocSgatewaysessionsubject"></a>
<a id="tocsgatewaysessionsubject"></a>

```json
{
  "gateway_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ip": "string",
  "ip_city": "string",
  "ip_lat": 0,
  "ip_lon": 0,
  "ip_region": "string",
  "token_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_agent": "string"
}
```

Subject of a session created by a Gateway (`context: "gateway"`).

A Gateway authenticates with a token rather than as an actor, so no actor
fields are recorded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gateway_id|string(uuid) \| null|true|none|Identifier of the Gateway the session was established from.|
|ip|string \| null|true|none|IP address the session came from.|
|ip_city|string \| null|true|none|Geo-located city for `ip`, if known.|
|ip_lat|number \| null|true|none|Geo-located latitude for `ip`, if known.|
|ip_lon|number \| null|true|none|Geo-located longitude for `ip`, if known.|
|ip_region|string \| null|true|none|Geo-located region for `ip`, if known.|
|token_id|string(uuid) \| null|true|none|Identifier of the Gateway token the session was established with.|
|user_agent|string \| null|true|none|User agent reported by the Gateway.|

<h2 id="tocS_GatewayTokenResponse">GatewayTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytokenresponse"></a>
<a id="schema_GatewayTokenResponse"></a>
<a id="tocSgatewaytokenresponse"></a>
<a id="tocsgatewaytokenresponse"></a>

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "token": "secret-token-here"
  }
}
```

Response schema for a new Gateway Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GatewayToken](#schemagatewaytoken)|false|none|Gateway Token|

<h2 id="tocS_GatewayUpdateRequest">GatewayUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagatewayupdaterequest"></a>
<a id="schema_GatewayUpdateRequest"></a>
<a id="tocSgatewayupdaterequest"></a>
<a id="tocsgatewayupdaterequest"></a>

```json
{
  "gateway": {
    "name": "vpc-us-east"
  }
}
```

Request body for updating a Gateway

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gateway|[GatewayUpdate](#schemagatewayupdate)|true|none|Update schema for a single Gateway|

<h2 id="tocS_SophosPostureProvider">SophosPostureProvider</h2>
<!-- backwards compatibility -->
<a id="schemasophospostureprovider"></a>
<a id="schema_SophosPostureProvider"></a>
<a id="tocSsophospostureprovider"></a>
<a id="tocssophospostureprovider"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "client_id": "string",
  "data_region_url": "http://example.com",
  "disabled_reason": "string",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "inserted_at": "1970-01-01T00:00:00Z",
  "is_disabled": true,
  "is_verified": true,
  "name": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "tenant_id": "string",
  "type": "sophos",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Sophos XDR posture provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|client_id|string|true|none|none|
|data_region_url|string(uri)|true|none|none|
|disabled_reason|string \| null|true|none|none|
|error_message|string \| null|true|none|none|
|errored_at|string(date-time) \| null|true|none|none|
|id|string(uuid)|true|none|none|
|inserted_at|string(date-time)|true|none|none|
|is_disabled|boolean|true|none|none|
|is_verified|boolean|true|none|none|
|name|string|true|none|none|
|synced_at|string(date-time) \| null|true|none|none|
|tenant_id|string|true|none|none|
|type|string|true|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sophos|

<h2 id="tocS_GroupCreateRequest">GroupCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagroupcreaterequest"></a>
<a id="schema_GroupCreateRequest"></a>
<a id="tocSgroupcreaterequest"></a>
<a id="tocsgroupcreaterequest"></a>

```json
{
  "group": {
    "name": "Engineering"
  }
}
```

POST body for creating a Group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|true|none|none|

<h2 id="tocS_Log">Log</h2>
<!-- backwards compatibility -->
<a id="schemalog"></a>
<a id="schema_Log"></a>
<a id="tocSlog"></a>
<a id="tocslog"></a>

```json
{
  "after": {
    "name": "Jane Smith"
  },
  "before": {
    "name": "Jane Doe"
  },
  "log_id": "c00060db0c2c8eb400000000",
  "object": "actors",
  "operation": "update",
  "subject": {
    "actor_email": "admin@example.com",
    "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "actor_name": "Admin User",
    "actor_type": "account_admin_user",
    "attested_at": "1970-01-01T00:00:00Z",
    "attested_cert_fingerprint": "string",
    "attested_cert_issuer": "string",
    "attested_cert_serial": "string",
    "attested_device_serial": "string",
    "attested_device_uuid": "string",
    "attested_mdm_device_id": "string",
    "auth_provider_id": "98776234-1234-5678-9012-345678901234",
    "ip": "1.2.3.4",
    "ip_city": "San Francisco",
    "ip_lat": 37.7749,
    "ip_lon": -122.4194,
    "ip_region": "California",
    "user_agent": "Mozilla/5.0"
  },
  "timestamp": "2026-05-26T12:34:56.789Z",
  "type": "change"
}
```

A single Log entry. The `type` field identifies the log stream the
entry belongs to, which is also encoded in the first character of its
`log_id` (`c` change, `5` session, `f` flow, `a` api_request).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChangeLog](#schemachangelog)|false|none|A single entry from the account audit log.<br><br>Each entry records one create, update, or delete event against an<br>account-scoped object.<br>|
|*oneOf*|[SessionLog](#schemasessionlog)|false|none|A single Session Log entry, recording one Client, Gateway, or Portal<br>session that was created, along with the auth context it was created<br>with.<br>|
|*oneOf*|[FlowLog](#schemaflowlog)|false|none|A single Flow Log entry, recording one network flow as accounted by one<br>of its two endpoints.<br><br>Both endpoints of a flow report it independently, so a flow yields up to<br>two entries that differ only in `role` and in the counters each side<br>observed. Every other field is oriented from the initiator regardless of<br>which side reported the entry: `inner_src_*` is always the initiator,<br>`inner_dst_*` always the responder, and `tx_*` always counts<br>initiator-to-responder traffic. `outers` records each outer network path<br>in the order it was observed. Comparing the two entries of a flow is how<br>reported traffic is cross-checked.<br>|
|*oneOf*|[APIRequestLog](#schemaapirequestlog)|false|none|A single API Request Log entry, recording one authenticated REST API<br>request.<br>|

<h2 id="tocS_DeletedClientTokenResponse">DeletedClientTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedclienttokenresponse"></a>
<a id="schema_DeletedClientTokenResponse"></a>
<a id="tocSdeletedclienttokenresponse"></a>
<a id="tocsdeletedclienttokenresponse"></a>

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205"
  }
}
```

Response schema for a deleted Client Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_ClientSessionSubject">ClientSessionSubject</h2>
<!-- backwards compatibility -->
<a id="schemaclientsessionsubject"></a>
<a id="schema_ClientSessionSubject"></a>
<a id="tocSclientsessionsubject"></a>
<a id="tocsclientsessionsubject"></a>

```json
{
  "actor_email": "admin@example.com",
  "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "actor_name": "Admin User",
  "actor_type": "account_admin_user",
  "attested_at": "1970-01-01T00:00:00Z",
  "attested_cert_fingerprint": "string",
  "attested_cert_issuer": "string",
  "attested_cert_serial": "string",
  "attested_device_serial": "string",
  "attested_device_uuid": "string",
  "attested_mdm_device_id": "string",
  "auth_provider_id": "98776234-1234-5678-9012-345678901234",
  "device_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ip": "1.2.3.4",
  "ip_city": "San Francisco",
  "ip_lat": 37.7749,
  "ip_lon": -122.4194,
  "ip_region": "California",
  "token_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_agent": "Mozilla/5.0"
}
```

Subject of a session created by a Client (`context: "client"`).

A `Subject` plus the Client and token the session was established with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor_email|string \| null|true|none|Email address of the actor, if any.|
|actor_id|string(uuid)|true|none|Identifier of the actor that initiated the action.|
|actor_name|string|true|none|Display name of the actor.|
|actor_type|string|true|none|Type of the actor.|
|attested_at|string(date-time)|false|none|When the device last attested, snapshotted for this subject. Does not imply the current connection attested. Omitted when absent.|
|attested_cert_fingerprint|string|false|none|Certificate fingerprint from the device's last attestation. Omitted when absent.|
|attested_cert_issuer|string(byte)|false|none|Base64-encoded DER X.509 issuer Name from the device's last attestation. Omitted when absent.|
|attested_cert_serial|string|false|none|Certificate serial from the device's last attestation. Omitted when absent.|
|attested_device_serial|string|false|none|Device serial from the device's last attestation. Omitted when absent.|
|attested_device_uuid|string|false|none|Device UUID from the device's last attestation. Omitted when absent.|
|attested_mdm_device_id|string|false|none|MDM device ID from the device's last attestation. Omitted when absent.|
|auth_provider_id|string(uuid) \| null|true|none|Identifier of the authentication provider that authenticated the actor.|
|device_id|string(uuid) \| null|true|none|Identifier of the Client the session was established from.|
|ip|string \| null|true|none|IP address the action originated from.|
|ip_city|string \| null|true|none|Geo-located city for `ip`, if known.|
|ip_lat|number \| null|true|none|Geo-located latitude for `ip`, if known.|
|ip_lon|number \| null|true|none|Geo-located longitude for `ip`, if known.|
|ip_region|string \| null|true|none|Geo-located region for `ip`, if known.|
|token_id|string(uuid) \| null|true|none|Identifier of the Client token the session was established with.|
|user_agent|string \| null|true|none|User agent of the client that initiated the action.|

#### Enumerated Values

|Property|Value|
|---|---|
|actor_type|account_user|
|actor_type|account_admin_user|
|actor_type|service_account|
|actor_type|api_client|

<h2 id="tocS_SessionLog">SessionLog</h2>
<!-- backwards compatibility -->
<a id="schemasessionlog"></a>
<a id="schema_SessionLog"></a>
<a id="tocSsessionlog"></a>
<a id="tocssessionlog"></a>

```json
{
  "context": "client",
  "log_id": "500060db0c2c8eb400000000",
  "subject": {
    "actor_email": "admin@example.com",
    "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "actor_name": "Admin User",
    "actor_type": "account_admin_user",
    "auth_provider_id": "98776234-1234-5678-9012-345678901234",
    "device_id": "11e7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ip": "189.172.73.1",
    "ip_city": "Mexico City",
    "ip_lat": 19.4326,
    "ip_lon": -99.1332,
    "ip_region": "MX",
    "token_id": "22e7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "user_agent": "Linux/6.5.0 connlib/1.5.1"
  },
  "timestamp": "2026-05-26T12:34:56.789Z",
  "type": "session"
}
```

A single Session Log entry, recording one Client, Gateway, or Portal
session that was created, along with the auth context it was created
with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|string|true|none|The kind of session that was created.|
|log_id|string|true|none|Opaque identifier for the Session Log entry. A 24-character<br>lowercase hexadecimal string starting with `5`.<br>|
|subject|[ClientSessionSubject](#schemaclientsessionsubject) \| [GatewaySessionSubject](#schemagatewaysessionsubject) \| [Subject](#schemasubject)|true|none|Who established the session and from where. The shape depends on<br>`context`:<br><br>- `client`: a `ClientSessionSubject`, the actor plus the Client and<br>  token the session was established with.<br>- `gateway`: a `GatewaySessionSubject`, the Gateway and its token. A<br>  Gateway authenticates as itself, so no actor fields are recorded.<br>- `portal`: a plain `Subject`.<br>|
|timestamp|string(date-time)|true|none|RFC 3339 timestamp identifying when the session was created.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|context|client|
|context|gateway|
|context|portal|
|type|session|

<h2 id="tocS_enum_string scalar provider comparison">enum_string scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaenum_string scalar provider comparison"></a>
<a id="schema_enum_string scalar provider comparison"></a>
<a id="tocSenum_string scalar provider comparison"></a>
<a id="tocsenum_string scalar provider comparison"></a>

```json
{
  "field": "defender.device_value",
  "op": "is",
  "rows": "any",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|is|
|op|is_not|
|op|contains|
|op|does_not_contain|
|op|starts_with|
|op|ends_with|
|rows|any|
|rows|all|

<h2 id="tocS_ChangeLog">ChangeLog</h2>
<!-- backwards compatibility -->
<a id="schemachangelog"></a>
<a id="schema_ChangeLog"></a>
<a id="tocSchangelog"></a>
<a id="tocschangelog"></a>

```json
{
  "after": {
    "name": "Jane Smith"
  },
  "before": {
    "name": "Jane Doe"
  },
  "log_id": "c00060db0c2c8eb400000000",
  "object": "actors",
  "operation": "update",
  "subject": {
    "actor_email": "admin@example.com",
    "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "actor_name": "Admin User",
    "actor_type": "account_admin_user",
    "attested_at": "1970-01-01T00:00:00Z",
    "attested_cert_fingerprint": "string",
    "attested_cert_issuer": "string",
    "attested_cert_serial": "string",
    "attested_device_serial": "string",
    "attested_device_uuid": "string",
    "attested_mdm_device_id": "string",
    "auth_provider_id": "98776234-1234-5678-9012-345678901234",
    "ip": "1.2.3.4",
    "ip_city": "San Francisco",
    "ip_lat": 37.7749,
    "ip_lon": -122.4194,
    "ip_region": "California",
    "user_agent": "Mozilla/5.0"
  },
  "timestamp": "2026-05-26T12:34:56.789Z",
  "type": "change"
}
```

A single entry from the account audit log.

Each entry records one create, update, or delete event against an
account-scoped object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|object \| null|true|none|The state of the object after the change. `null` for `delete`<br>events. Sensitive fields such as tokens, secrets, and password<br>hashes are replaced with the literal string `"[redacted]"`.<br>|
|before|object \| null|true|none|The state of the object before the change. `null` for `insert`<br>events. Sensitive fields such as tokens, secrets, and password<br>hashes are replaced with the literal string `"[redacted]"`.<br>|
|log_id|string|true|none|Opaque identifier for the audit log entry. A 24-character lowercase<br>hexadecimal string starting with `c`, lexicographically sortable<br>within an account and aligned with the order changes were committed.<br>|
|object|string|true|none|The kind of object that was changed.|
|operation|string|true|none|The kind of change that was applied.|
|subject|[Subject](#schemasubject)|true|none|Identifies the actor and request context that initiated an action.<br><br>Used to describe the principal behind an audit log entry, an authorized<br>flow, or any other event surfaced through the API. May be `null` when<br>the action originated outside the context of a Firezone session.<br>|
|timestamp|string(date-time)|true|none|RFC 3339 timestamp identifying when the change was committed.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|insert|
|operation|update|
|operation|delete|
|type|change|

<h2 id="tocS_FlowLogIngestRecord">FlowLogIngestRecord</h2>
<!-- backwards compatibility -->
<a id="schemaflowlogingestrecord"></a>
<a id="schema_FlowLogIngestRecord"></a>
<a id="tocSflowlogingestrecord"></a>
<a id="tocsflowlogingestrecord"></a>

```json
{
  "domain": "string",
  "flow_end": "1970-01-01T00:00:00Z",
  "flow_start": "1970-01-01T00:00:00Z",
  "inner_dst_ip": "string",
  "inner_dst_port": 0,
  "inner_src_ip": "string",
  "inner_src_port": 0,
  "last_packet": "1970-01-01T00:00:00Z",
  "outers": [
    {
      "dst_ip": "string",
      "dst_port": 0,
      "path_activated_at": "1970-01-01T00:00:00Z",
      "src_ip": "string",
      "src_port": 0
    }
  ],
  "protocol": "tcp",
  "rx_bytes": 0,
  "rx_packets": 0,
  "tx_bytes": 0,
  "tx_packets": 0
}
```

One flow-log record reported by connlib. Attribution is supplied by the
request's ingest token rather than by each record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|Domain name for flows to DNS Resources; absent otherwise.|
|flow_end|string(date-time)|false|none|Absent on the open report.|
|flow_start|string(date-time)|true|none|none|
|inner_dst_ip|string|true|none|Tunnel IP of the responder, on both sides' reports.|
|inner_dst_port|integer|true|none|none|
|inner_src_ip|string|true|none|Tunnel IP of the initiator, on both sides' reports.|
|inner_src_port|integer|true|none|none|
|last_packet|string(date-time)|false|none|none|
|outers|[object]|false|none|Ordered outer transport paths accumulated over the flow's lifetime.|
|protocol|string|true|none|none|
|rx_bytes|integer|false|none|none|
|rx_packets|integer|false|none|none|
|tx_bytes|integer|false|none|none|
|tx_packets|integer|false|none|none|
|*oneOf*|object|false|none|An open report may include paths known so far, but omits its end time and counters.|
|*oneOf*|object|false|none|A close report includes outer paths, its end time, and all counters.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|tcp|
|protocol|udp|

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "name": "vpc-us-east"
}
```

Site

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Site ID|
|name|string|true|none|Site Name|

<h2 id="tocS_SiteResponse">SiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemasiteresponse"></a>
<a id="schema_SiteResponse"></a>
<a id="tocSsiteresponse"></a>
<a id="tocssiteresponse"></a>

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "name": "vpc-us-east"
  }
}
```

Response schema for single Site

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Site](#schemasite)|false|none|Site|

<h2 id="tocS_ClientTokenListResponse">ClientTokenListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokenlistresponse"></a>
<a id="schema_ClientTokenListResponse"></a>
<a id="tocSclienttokenlistresponse"></a>
<a id="tocsclienttokenlistresponse"></a>

```json
{
  "data": [
    {
      "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "expires_at": "2025-01-15T12:34:56.789Z",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-15T12:34:56.789Z",
      "updated_at": "2025-01-15T12:34:56.789Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Client Tokens

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ClientToken](#schemaclienttoken)]|false|none|Client Token metadata|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_IntunePostureProviderUpdateRequest">IntunePostureProviderUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaintunepostureproviderupdaterequest"></a>
<a id="schema_IntunePostureProviderUpdateRequest"></a>
<a id="tocSintunepostureproviderupdaterequest"></a>
<a id="tocsintunepostureproviderupdaterequest"></a>

```json
{
  "intune_posture_provider": {
    "is_disabled": false,
    "name": "Microsoft Intune"
  }
}
```

PUT/PATCH body for updating an Intune posture provider. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intune_posture_provider|object|true|none|none|

<h2 id="tocS_IruPostureProviderListResponse">IruPostureProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemairupostureproviderlistresponse"></a>
<a id="schema_IruPostureProviderListResponse"></a>
<a id="tocSirupostureproviderlistresponse"></a>
<a id="tocsirupostureproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "region": "us",
      "subdomain": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "iru",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IruPostureProvider](#schemairupostureprovider)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_enum_string list provider comparison">enum_string list provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaenum_string list provider comparison"></a>
<a id="schema_enum_string list provider comparison"></a>
<a id="tocSenum_string list provider comparison"></a>
<a id="tocsenum_string list provider comparison"></a>

```json
{
  "field": "defender.device_value",
  "op": "is_in",
  "rows": "any",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|is_in|
|op|is_not_in|
|rows|any|
|rows|all|

<h2 id="tocS_GoogleDirectory">GoogleDirectory</h2>
<!-- backwards compatibility -->
<a id="schemagoogledirectory"></a>
<a id="schema_GoogleDirectory"></a>
<a id="tocSgoogledirectory"></a>
<a id="tocsgoogledirectory"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "disabled_reason": "string",
  "domain": "example.com",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "group_sync_mode": "all",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "impersonation_email": "admin@example.com",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_disabled": false,
  "name": "Google",
  "orgunit_sync_enabled": true,
  "synced_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

Google Directory

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|disabled_reason|string \| null|true|none|Reason for disabling|
|domain|string|true|none|Google Workspace domain|
|error_message|string \| null|true|none|Last error message|
|errored_at|string(date-time) \| null|true|none|Last error timestamp|
|group_sync_mode|string|true|none|Group sync mode|
|id|string(uuid)|true|none|Directory ID|
|impersonation_email|string|true|none|Impersonation email|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_disabled|boolean|true|none|Whether directory is disabled|
|name|string|true|none|Directory name|
|orgunit_sync_enabled|boolean|true|none|Whether org unit sync is enabled|
|synced_at|string(date-time) \| null|true|none|Last sync timestamp|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|group_sync_mode|all|
|group_sync_mode|filtered|
|group_sync_mode|disabled|

<h2 id="tocS_IruPostureProviderUpdateRequest">IruPostureProviderUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemairupostureproviderupdaterequest"></a>
<a id="schema_IruPostureProviderUpdateRequest"></a>
<a id="tocSirupostureproviderupdaterequest"></a>
<a id="tocsirupostureproviderupdaterequest"></a>

```json
{
  "iru_posture_provider": {
    "is_disabled": false,
    "name": "Iru"
  }
}
```

PUT/PATCH body for updating an Iru posture provider. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iru_posture_provider|object|true|none|none|

<h2 id="tocS_PolicyResponse">PolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemapolicyresponse"></a>
<a id="schema_PolicyResponse"></a>
<a id="tocSpolicyresponse"></a>
<a id="tocspolicyresponse"></a>

```json
{
  "data": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

Response schema for single Policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Policy](#schemapolicy)|false|none|Policy|

<h2 id="tocS_DeletedClientTokensResponse">DeletedClientTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedclienttokensresponse"></a>
<a id="schema_DeletedClientTokensResponse"></a>
<a id="tocSdeletedclienttokensresponse"></a>
<a id="tocsdeletedclienttokensresponse"></a>

```json
{
  "data": {
    "deleted_count": 3
  }
}
```

Response schema for deleted Client Tokens

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_GroupListResponse">GroupListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrouplistresponse"></a>
<a id="schema_GroupListResponse"></a>
<a id="tocSgrouplistresponse"></a>
<a id="tocsgrouplistresponse"></a>

```json
{
  "data": [
    {
      "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "string",
      "entity_type": "group",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "idp_id": "string",
      "inserted_at": "2024-01-15T10:30:00Z",
      "name": "Engineering",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "static",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Groups

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group](#schemagroup)]|false|none|Group details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_IntunePostureProviderResponse">IntunePostureProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintunepostureproviderresponse"></a>
<a id="schema_IntunePostureProviderResponse"></a>
<a id="tocSintunepostureproviderresponse"></a>
<a id="tocsintunepostureproviderresponse"></a>

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "intune",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IntunePostureProvider](#schemaintunepostureprovider)|false|none|Microsoft Intune posture provider|

<h2 id="tocS_OktaAuthProviderListResponse">OktaAuthProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoktaauthproviderlistresponse"></a>
<a id="schema_OktaAuthProviderListResponse"></a>
<a id="tocSoktaauthproviderlistresponse"></a>
<a id="tocsoktaauthproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_id": "0oa1b2c3d4e5EXAMPLE",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": false,
      "is_disabled": false,
      "issuer": "https://example.okta.com",
      "name": "Okta",
      "okta_domain": "example.okta.com",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Okta Auth Providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OktaAuthProvider](#schemaoktaauthprovider)]|false|none|Okta Auth Provider details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_DeletedGatewayTokenResponse">DeletedGatewayTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedgatewaytokenresponse"></a>
<a id="schema_DeletedGatewayTokenResponse"></a>
<a id="tocSdeletedgatewaytokenresponse"></a>
<a id="tocsdeletedgatewaytokenresponse"></a>

```json
{
  "data": {
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205"
  }
}
```

Response schema for a deleted Gateway Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_version no_value device comparison">version no_value device comparison</h2>
<!-- backwards compatibility -->
<a id="schemaversion no_value device comparison"></a>
<a id="schema_version no_value device comparison"></a>
<a id="tocSversion no_value device comparison"></a>
<a id="tocsversion no_value device comparison"></a>

```json
{
  "field": "firezone.last_seen_version",
  "op": "exists",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.last_seen_version|
|op|exists|
|op|does_not_exist|
|value|null|

<h2 id="tocS_EntraAuthProviderListResponse">EntraAuthProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentraauthproviderlistresponse"></a>
<a id="schema_EntraAuthProviderListResponse"></a>
<a id="tocSentraauthproviderlistresponse"></a>
<a id="tocsentraauthproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "email_claim": "upn",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": false,
      "is_disabled": false,
      "name": "Entra",
      "portal_session_lifetime_secs": 28800,
      "sign_in_tenant_id": "12345678-1234-1234-1234-123456789012",
      "tenant_ids": [
        "12345678-1234-1234-1234-123456789012"
      ],
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Entra Auth Providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EntraAuthProvider](#schemaentraauthprovider)]|false|none|Entra Auth Provider details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "email": "john.doe@example.com",
  "id": "7cb89288-1fb3-433e-a522-2d087e45988d",
  "name": "John Doe",
  "type": "account_user"
}
```

Membership

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|true|none|Actor Email|
|id|string(uuid)|true|none|Actor ID|
|name|string|true|none|Actor Name|
|type|string|true|none|Actor Type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account_admin_user|
|type|account_user|
|type|api_client|
|type|service_account|

<h2 id="tocS_PolicyPostureNode">PolicyPostureNode</h2>
<!-- backwards compatibility -->
<a id="schemapolicyposturenode"></a>
<a id="schema_PolicyPostureNode"></a>
<a id="tocSpolicyposturenode"></a>
<a id="tocspolicyposturenode"></a>

```json
{
  "and": [
    {
      "field": "intune.enrolled",
      "op": "is",
      "value": true
    },
    {
      "field": "intune.compliance_state",
      "op": "is",
      "rows": "all",
      "value": "compliant"
    },
    {
      "field": "intune.last_sync_at",
      "op": "within_last",
      "value": "PT24H"
    },
    {
      "or": [
        {
          "field": "firezone.last_seen_version",
          "op": "gte",
          "value": "@latest"
        },
        {
          "not": {
            "field": "firezone.hostname",
            "op": "starts_with",
            "value": "test-"
          }
        }
      ]
    }
  ]
}
```

One node of a Policy's device posture expression. A node has exactly one
of these shapes:

* `and`: a non-empty list of nodes that must all hold.
* `or`: a non-empty list of nodes of which at least one must hold.
* `not`: a node that must not hold.
* a leaf: a `field`, an `op`, and for most operators a `value`.

A leaf's `field` is `<provider>.<attribute>`, such as
`intune.compliance_state` or `firezone.last_seen_version`. The provider
is one of `firezone` (the connecting device's own record), `intune`,
`iru`, `defender`, `santa`, `sentinelone` or `sophos`. The attribute is
one of that provider's synced device attributes. Every synced provider also has a
boolean `enrolled` that is true when the provider knows the device.

The attribute's type decides which operators apply and what `value`
must be:

* strings: `is`, `is_not`, `is_in`, `is_not_in`, `contains`,
  `does_not_contain`, `starts_with`, `ends_with`, `matches`,
  `does_not_match`. Comparisons ignore case. `is_in` and `is_not_in`
  take a list of strings. `matches` and `does_not_match` take a regular
  expression.
* booleans: `is` with `true` or `false`.
* numbers: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.
* versions: `is`, `is_not`, `gt`, `gte`, `lt`, `lte`, compared segment
  by segment, so `14.4` equals `14.4.0`.
* timestamps: `before` and `after` with an ISO 8601 datetime such as
  `2026-01-01T00:00:00Z`; `within_last` and `not_within_last` with an
  ISO 8601 duration such as `PT24H` or `P30D`. A date-only attribute
  counts as the start of that day in UTC.
* IP addresses: `is_in_cidr` and `is_not_in_cidr` with a list of CIDRs.
  `firezone.ipv4` takes IPv4 CIDRs only and `firezone.ipv6` IPv6 only.
* lists of strings: `contains`, `does_not_contain`, `contains_any_of`,
  `contains_all_of`, `is_empty`, `is_not_empty`.
* JSON attributes: `is_empty`, `is_not_empty`.

The value `@latest` on `firezone.last_seen_version` stands for the newest
Client release for the device's platform.

`enum_string` uses the string operators; `integer` and `float` use the
numeric operators. `string_array` values use a single string for `contains`
and `does_not_contain`, or a non-empty string list for `contains_any_of`
and `contains_all_of`.

Every attribute also accepts `exists` and `does_not_exist`. These and
`is_empty` / `is_not_empty` take no value: omit `value` or set it to null.
Missing attributes fail every operator except `does_not_exist`, including
negative operators such as `is_not`. A missing provider is evaluated as
one empty row. Its synthetic `enrolled` field is false, so `enrolled is
false` can explicitly match an unenrolled device. `not` negates the
result and can also match missing data; use a positive `enrolled is true`
check when enrollment is required.

Leaves that do not apply to the device's platform are removed before
evaluation, including inside `or` and `not`. An expression with no
applicable leaves passes. If the platform is unknown, no leaves are
removed. Each field lists the platforms it applies to.
Provider `os_up_to_date` fields are computed from known OS releases;
they are not raw provider attributes.

When a device matches more than one record of a provider, a leaf holds
when any record satisfies it. Set `rows` to `all` to require every
record. Different leaves may match different provider rows; `and` does
not require one row to satisfy all leaves. `rows` is not allowed for
`firezone`, which always describes exactly one connecting device.

Expressions allow at most 10 nested boolean levels and 100 leaves.
List values contain 1–100 items; strings are at most 1024 bytes and
regular expressions at most 256 bytes. Unknown fields, incompatible
operators, invalid values, and exceeded limits return HTTP 422 with
a path in `validation_errors.postures`.

`GET /posture_fields` lists the same fields as structured data.

Supported fields (generated from the same registry used for validation):

### defender fields

| Field | Type | Platforms |
| --- | --- | --- |
| `defender.agent_version` | version | windows, macos, linux |
| `defender.computer_dns_name` | string | windows, macos, linux |
| `defender.defender_id` | string | windows, macos, linux |
| `defender.device_value` | enum_string | windows, macos, linux |
| `defender.enrolled` | boolean | windows, macos, linux |
| `defender.entra_device_id` | string | windows, macos, linux |
| `defender.entra_joined` | boolean | windows, macos, linux |
| `defender.exclusion_reason` | enum_string | windows, macos, linux |
| `defender.exposure_level` | enum_string | windows, macos, linux |
| `defender.first_seen_at` | datetime | windows, macos, linux |
| `defender.health_status` | enum_string | windows, macos, linux |
| `defender.ip_addresses` | json | windows, macos, linux |
| `defender.is_excluded` | boolean | windows, macos, linux |
| `defender.is_potential_duplication` | boolean | windows, macos, linux |
| `defender.last_external_ip_address` | ip | windows, macos, linux |
| `defender.last_ip_address` | ip | windows, macos, linux |
| `defender.last_seen_at` | datetime | windows, macos, linux |
| `defender.machine_tags` | string_array | windows, macos, linux |
| `defender.managed_by` | enum_string | windows, macos, linux |
| `defender.managed_by_status` | enum_string | windows, macos, linux |
| `defender.onboarding_status` | enum_string | windows, macos, linux |
| `defender.os_architecture` | enum_string | windows, macos, linux |
| `defender.os_build` | integer | windows, macos, linux |
| `defender.os_platform` | enum_string | windows, macos, linux |
| `defender.os_processor` | string | windows, macos, linux |
| `defender.os_up_to_date` | boolean | macos |
| `defender.rbac_group_id` | integer | windows, macos, linux |
| `defender.rbac_group_name` | string | windows, macos, linux |
| `defender.risk_score` | enum_string | windows, macos, linux |
| `defender.version` | string | windows, macos, linux |
| `defender.vm_cloud_provider` | string | windows, macos, linux |
| `defender.vm_id` | string | windows, macos, linux |
| `defender.vm_resource_id` | string | windows, macos, linux |
| `defender.vm_subscription_id` | string | windows, macos, linux |

### firezone fields

| Field | Type | Platforms |
| --- | --- | --- |
| `firezone.device_serial` | string | windows, macos, linux, ios, android |
| `firezone.device_uuid` | string | windows, macos, linux, ios, android |
| `firezone.hostname` | string | windows, macos, linux, ios, android |
| `firezone.identifier_for_vendor` | string | windows, macos, linux, ios, android |
| `firezone.ipv4` | ipv4 | windows, macos, linux, ios, android |
| `firezone.ipv6` | ipv6 | windows, macos, linux, ios, android |
| `firezone.last_attested_at` | datetime | windows, macos, linux, ios, android |
| `firezone.last_attested_cert_fingerprint` | string | windows, macos, linux, ios, android |
| `firezone.last_attested_cert_serial` | string | windows, macos, linux, ios, android |
| `firezone.last_attested_device_serial` | string | windows, macos, linux, ios, android |
| `firezone.last_attested_device_uuid` | string | windows, macos, linux, ios, android |
| `firezone.last_attested_mdm_device_id` | string | windows, macos, linux, ios, android |
| `firezone.last_seen_remote_ip_location_city` | string | windows, macos, linux, ios, android |
| `firezone.last_seen_user_agent` | string | windows, macos, linux, ios, android |
| `firezone.last_seen_version` | version | windows, macos, linux, ios, android |
| `firezone.name` | string | windows, macos, linux, ios, android |

### intune fields

| Field | Type | Platforms |
| --- | --- | --- |
| `intune.android_security_patch_level` | datetime | windows, macos, ios, android |
| `intune.attestation_bit_locker_enabled` | boolean | windows |
| `intune.attestation_boot_app_security_version` | version | windows |
| `intune.attestation_boot_debugging` | boolean | windows |
| `intune.attestation_boot_manager_security_version` | version | windows |
| `intune.attestation_boot_manager_version` | version | windows |
| `intune.attestation_boot_revision_list_info` | string | windows |
| `intune.attestation_code_integrity` | boolean | windows |
| `intune.attestation_code_integrity_check_version` | version | windows |
| `intune.attestation_code_integrity_policy` | string | windows |
| `intune.attestation_content_version` | version | windows |
| `intune.attestation_data_execution_policy_enabled` | boolean | windows |
| `intune.attestation_early_launch_anti_malware_driver_protection` | boolean | windows |
| `intune.attestation_health_status_mismatch_info` | string | windows |
| `intune.attestation_identity_key` | string | windows |
| `intune.attestation_issued_at` | datetime | windows |
| `intune.attestation_operating_system_kernel_debugging` | boolean | windows |
| `intune.attestation_operating_system_rev_list_info` | string | windows |
| `intune.attestation_pcr0` | string | windows |
| `intune.attestation_pcr_hash_algorithm` | string | windows |
| `intune.attestation_reset_count` | integer | windows |
| `intune.attestation_restart_count` | integer | windows |
| `intune.attestation_safe_mode` | boolean | windows |
| `intune.attestation_secure_boot` | boolean | windows |
| `intune.attestation_secure_boot_config_policy_fingerprint` | string | windows |
| `intune.attestation_status` | enum_string | windows |
| `intune.attestation_supported` | boolean | windows |
| `intune.attestation_test_signing` | boolean | windows |
| `intune.attestation_tpm_version` | version | windows |
| `intune.attestation_virtual_secure_mode` | boolean | windows |
| `intune.attestation_windows_pe` | boolean | windows |
| `intune.compliance_grace_period_expiration_at` | datetime | windows, macos, ios, android |
| `intune.compliance_state` | enum_string | windows, macos, ios, android |
| `intune.config_manager_compliance_policy` | boolean | windows, macos, ios, android |
| `intune.config_manager_device_configuration` | boolean | windows, macos, ios, android |
| `intune.config_manager_inventory` | boolean | windows, macos, ios, android |
| `intune.config_manager_modern_apps` | boolean | windows, macos, ios, android |
| `intune.config_manager_resource_access` | boolean | windows, macos, ios, android |
| `intune.config_manager_windows_update_for_business` | boolean | windows, macos, ios, android |
| `intune.device_category_display_name` | string | windows, macos, ios, android |
| `intune.device_enrollment_type` | enum_string | windows, macos, ios, android |
| `intune.device_name` | string | windows, macos, ios, android |
| `intune.device_registration_state` | enum_string | windows, macos, ios, android |
| `intune.eas_activated` | boolean | windows, macos, ios, android |
| `intune.eas_activated_at` | datetime | windows, macos, ios, android |
| `intune.eas_device_id` | string | windows, macos, ios, android |
| `intune.email_address` | string | windows, macos, ios, android |
| `intune.enrolled` | boolean | windows, macos, ios, android |
| `intune.enrolled_at` | datetime | windows, macos, ios, android |
| `intune.enrollment_profile_name` | string | windows, macos, ios, android |
| `intune.entra_device_id` | string | windows, macos, ios, android |
| `intune.entra_registered` | boolean | windows, macos, ios, android |
| `intune.ethernet_mac_address` | string | windows, macos, ios, android |
| `intune.exchange_access_state` | enum_string | windows, macos, ios, android |
| `intune.exchange_access_state_reason` | enum_string | windows, macos, ios, android |
| `intune.exchange_last_successful_sync_at` | datetime | windows, macos, ios, android |
| `intune.free_storage_space_bytes` | integer | windows, macos, ios, android |
| `intune.iccid` | string | windows, macos, ios, android |
| `intune.imei` | string | windows, macos, ios, android |
| `intune.intune_id` | string | windows, macos, ios, android |
| `intune.is_encrypted` | boolean | windows, macos, ios, android |
| `intune.is_supervised` | boolean | macos, ios |
| `intune.jail_broken` | boolean | ios, android |
| `intune.last_sync_at` | datetime | windows, macos, ios, android |
| `intune.managed_device_name` | string | windows, macos, ios, android |
| `intune.managed_device_owner_type` | enum_string | windows, macos, ios, android |
| `intune.management_agent` | enum_string | windows, macos, ios, android |
| `intune.management_certificate_expires_at` | datetime | windows, macos, ios, android |
| `intune.management_state` | enum_string | windows, macos, ios, android |
| `intune.manufacturer` | string | windows, macos, ios, android |
| `intune.meid` | string | windows, macos, ios, android |
| `intune.model` | string | windows, macos, ios, android |
| `intune.notes` | string | windows, macos, ios, android |
| `intune.operating_system` | string | windows, macos, ios, android |
| `intune.os_up_to_date` | boolean | windows, macos, ios, android |
| `intune.os_version` | version | windows, macos, ios, android |
| `intune.partner_reported_threat_state` | enum_string | windows, macos, ios, android |
| `intune.phone_number` | string | windows, macos, ios, android |
| `intune.physical_memory_bytes` | integer | windows, macos, ios, android |
| `intune.require_user_enrollment_approval` | boolean | windows, macos, ios, android |
| `intune.serial_number` | string | windows, macos, ios, android |
| `intune.subscriber_carrier` | string | windows, macos, ios, android |
| `intune.total_storage_space_bytes` | integer | windows, macos, ios, android |
| `intune.udid` | string | windows, macos, ios, android |
| `intune.user_display_name` | string | windows, macos, ios, android |
| `intune.user_id` | string | windows, macos, ios, android |
| `intune.user_principal_name` | string | windows, macos, ios, android |
| `intune.wifi_mac_address` | string | windows, macos, ios, android |

### iru fields

| Field | Type | Platforms |
| --- | --- | --- |
| `iru.activation_lock_allowed_while_supervised` | boolean | macos, ios |
| `iru.activation_lock_bypass_code_failed` | boolean | macos, ios |
| `iru.activation_lock_collected_at` | datetime | macos, ios |
| `iru.activation_lock_supported` | boolean | macos, ios |
| `iru.agent_installed` | boolean | macos, ios |
| `iru.agent_version` | version | macos, ios |
| `iru.any_signed_os` | boolean | macos, ios |
| `iru.apple_silicon` | boolean | macos, ios |
| `iru.asset_tag` | string | macos, ios |
| `iru.blueprint_id` | string | macos, ios |
| `iru.blueprint_name` | string | macos, ios |
| `iru.bootstrap_token_auth` | boolean | macos, ios |
| `iru.bootstrap_token_escrowed` | boolean | macos, ios |
| `iru.cellular_technology` | enum_string | macos, ios |
| `iru.data_roaming` | boolean | macos, ios |
| `iru.device_activation_lock_enabled` | boolean | macos, ios |
| `iru.device_capacity_gb` | float | macos, ios |
| `iru.device_family` | enum_string | macos, ios |
| `iru.device_name` | string | macos, ios |
| `iru.display_os_version` | version | macos, ios |
| `iru.enrolled` | boolean | macos, ios |
| `iru.external_boot_level` | enum_string | macos |
| `iru.filevault_collected_at` | datetime | macos, ios |
| `iru.filevault_enabled` | boolean | macos |
| `iru.filevault_key_escrowed` | boolean | macos, ios |
| `iru.filevault_key_rotation_scheduled_at` | datetime | macos, ios |
| `iru.filevault_key_type` | enum_string | macos |
| `iru.filevault_regeneration_needed` | boolean | macos, ios |
| `iru.firewall_allow_signed_applications` | boolean | macos, ios |
| `iru.firewall_block_all_incoming` | boolean | macos, ios |
| `iru.firewall_collected_at` | datetime | macos, ios |
| `iru.firewall_enabled` | boolean | macos |
| `iru.firewall_logging` | boolean | macos, ios |
| `iru.firewall_logging_option` | enum_string | macos |
| `iru.firewall_stealth_mode` | boolean | macos, ios |
| `iru.firewall_unloading` | boolean | macos, ios |
| `iru.firewall_version` | version | macos |
| `iru.first_enrolled_at` | datetime | macos, ios |
| `iru.gatekeeper_collected_at` | datetime | macos, ios |
| `iru.gatekeeper_enabled` | boolean | macos |
| `iru.gatekeeper_opaque_version` | version | macos |
| `iru.gatekeeper_trusted_developers` | boolean | macos, ios |
| `iru.gatekeeper_version` | version | macos |
| `iru.host_name` | string | macos, ios |
| `iru.hotspot` | boolean | macos, ios |
| `iru.inventory_collected_at` | datetime | macos, ios |
| `iru.iru_id` | string | macos, ios |
| `iru.is_missing` | boolean | macos, ios |
| `iru.is_removed` | boolean | macos, ios |
| `iru.kext_requires_bootstrap_token` | boolean | macos, ios |
| `iru.last_check_in_at` | datetime | macos, ios |
| `iru.last_enrolled_at` | datetime | macos, ios |
| `iru.local_hostname` | string | macos, ios |
| `iru.lost_mode_status` | enum_string | macos, ios |
| `iru.malware_removal_tool_version` | version | macos |
| `iru.mdm_enabled` | boolean | macos, ios |
| `iru.mdm_manages_kext` | boolean | macos, ios |
| `iru.model` | string | macos, ios |
| `iru.model_identifier` | string | macos, ios |
| `iru.model_name` | string | macos, ios |
| `iru.os_build` | string | macos, ios |
| `iru.os_name` | string | macos, ios |
| `iru.os_up_to_date` | boolean | macos, ios |
| `iru.os_version` | version | macos, ios |
| `iru.platform` | enum_string | macos, ios |
| `iru.secure_boot_level` | enum_string | macos |
| `iru.serial_number` | string | macos, ios |
| `iru.shared_ipad` | boolean | macos, ios |
| `iru.sip_enabled` | boolean | macos |
| `iru.software_update_requires_bootstrap_token` | boolean | macos, ios |
| `iru.ssv_enabled` | boolean | macos |
| `iru.startup_settings_collected_at` | datetime | macos, ios |
| `iru.supplemental_build_version` | string | macos, ios |
| `iru.supplemental_os_version_extra` | version | macos, ios |
| `iru.tags` | string_array | macos, ios |
| `iru.user_activation_lock_enabled` | boolean | macos, ios |
| `iru.user_email` | string | macos, ios |
| `iru.user_id` | string | macos, ios |
| `iru.user_is_archived` | boolean | macos, ios |
| `iru.user_manages_kext` | boolean | macos, ios |
| `iru.user_name` | string | macos, ios |
| `iru.xprotect_version` | version | macos |

### santa fields

| Field | Type | Platforms |
| --- | --- | --- |
| `santa.configured_client_mode` | enum_string | macos |
| `santa.enrolled` | boolean | macos |
| `santa.first_seen_at` | datetime | macos |
| `santa.hostname` | string | macos |
| `santa.last_preflight_at` | datetime | macos |
| `santa.last_preflight_ip` | ip | macos |
| `santa.last_seen_client_mode` | enum_string | macos |
| `santa.last_sync_at` | datetime | macos |
| `santa.machine_model` | string | macos |
| `santa.os_build` | string | macos |
| `santa.os_type` | enum_string | macos |
| `santa.os_up_to_date` | boolean | macos |
| `santa.os_version` | version | macos |
| `santa.primary_user` | string | macos |
| `santa.primary_user_groups` | string_array | macos |
| `santa.rule_sync_at` | datetime | macos |
| `santa.santa_id` | string | macos |
| `santa.santa_version` | version | macos |
| `santa.santanetd_version` | version | macos |
| `santa.serial_number` | string | macos |
| `santa.sip_status` | integer | macos |
| `santa.tags` | string_array | macos |
| `santa.temporary_admin_mode_ends_at` | datetime | macos |
| `santa.temporary_admin_mode_user` | string | macos |
| `santa.temporary_monitor_mode_ends_at` | datetime | macos |

### sentinelone fields

| Field | Type | Platforms |
| --- | --- | --- |
| `sentinelone.account_name` | string | windows, macos, linux |
| `sentinelone.active_protection` | string_array | windows, macos, linux |
| `sentinelone.active_threats` | integer | windows, macos, linux |
| `sentinelone.ad_computer_distinguished_name` | string | windows, macos, linux |
| `sentinelone.ad_computer_member_of` | string_array | windows, macos, linux |
| `sentinelone.ad_last_user_distinguished_name` | string | windows, macos, linux |
| `sentinelone.ad_last_user_member_of` | string_array | windows, macos, linux |
| `sentinelone.ad_mail` | string | windows, macos, linux |
| `sentinelone.ad_user_principal_name` | string | windows, macos, linux |
| `sentinelone.agent_version` | version | windows, macos, linux |
| `sentinelone.allow_remote_shell` | boolean | windows, macos, linux |
| `sentinelone.apps_vulnerability_status` | enum_string | windows, macos, linux |
| `sentinelone.cloud_providers` | json | windows, macos, linux |
| `sentinelone.computer_name` | string | windows, macos, linux |
| `sentinelone.console_migration_status` | enum_string | windows, macos, linux |
| `sentinelone.core_count` | integer | windows, macos, linux |
| `sentinelone.cpu_count` | integer | windows, macos, linux |
| `sentinelone.cpu_id` | string | windows, macos, linux |
| `sentinelone.detection_state` | enum_string | windows, macos, linux |
| `sentinelone.domain` | string | windows, macos, linux |
| `sentinelone.encrypted_applications` | boolean | windows, macos, linux |
| `sentinelone.enrolled` | boolean | windows, macos, linux |
| `sentinelone.external_id` | string | windows, macos, linux |
| `sentinelone.external_ip` | ip | windows, macos, linux |
| `sentinelone.firewall_enabled` | boolean | windows, macos, linux |
| `sentinelone.first_full_mode_at` | datetime | windows, macos, linux |
| `sentinelone.full_disk_scan_updated_at` | datetime | windows, macos, linux |
| `sentinelone.group_id` | string | windows, macos, linux |
| `sentinelone.group_ip` | string | windows, macos, linux |
| `sentinelone.group_name` | string | windows, macos, linux |
| `sentinelone.has_containerized_workload` | boolean | windows, macos, linux |
| `sentinelone.in_remote_shell_session` | boolean | windows, macos, linux |
| `sentinelone.infected` | boolean | windows, macos, linux |
| `sentinelone.installer_type` | enum_string | windows, macos, linux |
| `sentinelone.is_active` | boolean | windows, macos, linux |
| `sentinelone.is_ad_connector` | boolean | windows, macos, linux |
| `sentinelone.is_decommissioned` | boolean | windows, macos, linux |
| `sentinelone.is_hyper_automate` | boolean | windows, macos, linux |
| `sentinelone.is_pending_uninstall` | boolean | windows, macos, linux |
| `sentinelone.is_uninstalled` | boolean | windows, macos, linux |
| `sentinelone.is_up_to_date` | boolean | windows, macos, linux |
| `sentinelone.last_active_at` | datetime | windows, macos, linux |
| `sentinelone.last_ip_to_management` | ip | windows, macos, linux |
| `sentinelone.last_logged_in_user_name` | string | windows, macos, linux |
| `sentinelone.last_successful_scan_at` | datetime | windows, macos, linux |
| `sentinelone.location_enabled` | boolean | windows, macos, linux |
| `sentinelone.location_type` | enum_string | windows, macos, linux |
| `sentinelone.locations` | json | windows, macos, linux |
| `sentinelone.machine_sid` | string | windows, macos, linux |
| `sentinelone.machine_type` | enum_string | windows, macos, linux |
| `sentinelone.missing_permissions` | string_array | windows, macos, linux |
| `sentinelone.mitigation_mode` | enum_string | windows, macos, linux |
| `sentinelone.mitigation_mode_suspicious` | enum_string | windows, macos, linux |
| `sentinelone.model_name` | string | windows, macos, linux |
| `sentinelone.network_interfaces` | json | windows, macos, linux |
| `sentinelone.network_quarantine_enabled` | boolean | windows, macos, linux |
| `sentinelone.network_status` | enum_string | windows, macos, linux |
| `sentinelone.operational_state` | enum_string | windows, macos, linux |
| `sentinelone.operational_state_expires_at` | datetime | windows, macos, linux |
| `sentinelone.os_arch` | enum_string | windows, macos, linux |
| `sentinelone.os_name` | string | windows, macos, linux |
| `sentinelone.os_revision` | version | windows, macos, linux |
| `sentinelone.os_start_time` | datetime | windows, macos, linux |
| `sentinelone.os_type` | enum_string | windows, macos, linux |
| `sentinelone.os_up_to_date` | boolean | windows, macos |
| `sentinelone.os_username` | string | windows, macos, linux |
| `sentinelone.protected_containers_count` | integer | windows, macos, linux |
| `sentinelone.protected_pods_count` | integer | windows, macos, linux |
| `sentinelone.protected_tasks_count` | integer | windows, macos, linux |
| `sentinelone.proxy_console` | boolean | windows, macos, linux |
| `sentinelone.proxy_deep_visibility` | boolean | windows, macos, linux |
| `sentinelone.proxy_method` | enum_string | windows, macos, linux |
| `sentinelone.proxy_pac_file_usage` | boolean | windows, macos, linux |
| `sentinelone.ranger_status` | enum_string | windows, macos, linux |
| `sentinelone.ranger_version` | version | windows, macos, linux |
| `sentinelone.registered_at` | datetime | windows, macos, linux |
| `sentinelone.remote_profiling_state` | enum_string | windows, macos, linux |
| `sentinelone.remote_profiling_state_expires_at` | datetime | windows, macos, linux |
| `sentinelone.scan_aborted_at` | datetime | windows, macos, linux |
| `sentinelone.scan_finished_at` | datetime | windows, macos, linux |
| `sentinelone.scan_started_at` | datetime | windows, macos, linux |
| `sentinelone.scan_status` | enum_string | windows, macos, linux |
| `sentinelone.sentinelone_account_id` | string | windows, macos, linux |
| `sentinelone.sentinelone_id` | string | windows, macos, linux |
| `sentinelone.serial_number` | string | windows, macos, linux |
| `sentinelone.site_id` | string | windows, macos, linux |
| `sentinelone.site_name` | string | windows, macos, linux |
| `sentinelone.storage_name` | string | windows, macos, linux |
| `sentinelone.storage_type` | string | windows, macos, linux |
| `sentinelone.tags` | json | windows, macos, linux |
| `sentinelone.threat_reboot_required` | boolean | windows, macos, linux |
| `sentinelone.total_memory` | integer | windows, macos, linux |
| `sentinelone.user_actions_needed` | string_array | windows, macos, linux |
| `sentinelone.uuid` | string | windows, macos, linux |

### sophos fields

| Field | Type | Platforms |
| --- | --- | --- |
| `sophos.assigned_products` | json | windows, macos, linux |
| `sophos.associated_person_id` | string | windows, macos, linux |
| `sophos.associated_person_name` | string | windows, macos, linux |
| `sophos.associated_person_via_login` | string | windows, macos, linux |
| `sophos.cloned` | boolean | windows, macos, linux |
| `sophos.cloud_instance_id` | string | windows, macos, linux |
| `sophos.cloud_provider` | enum_string | windows, macos, linux |
| `sophos.device_software` | json | windows, macos, linux |
| `sophos.encryption_overall_status` | enum_string | windows, macos, linux |
| `sophos.encryption_volumes` | json | windows, macos, linux |
| `sophos.enrolled` | boolean | windows, macos, linux |
| `sophos.group_hierarchy` | json | windows, macos, linux |
| `sophos.group_id` | string | windows, macos, linux |
| `sophos.group_name` | string | windows, macos, linux |
| `sophos.health_overall` | enum_string | windows, macos, linux |
| `sophos.health_service_details` | json | windows, macos, linux |
| `sophos.health_services_status` | enum_string | windows, macos, linux |
| `sophos.health_threats_status` | enum_string | windows, macos, linux |
| `sophos.hostname` | string | windows, macos, linux |
| `sophos.ipv4_addresses` | string_array | windows, macos, linux |
| `sophos.ipv6_addresses` | string_array | windows, macos, linux |
| `sophos.isolation_admin_isolated` | boolean | windows, macos, linux |
| `sophos.isolation_self_isolated` | boolean | windows, macos, linux |
| `sophos.isolation_status` | enum_string | windows, macos, linux |
| `sophos.last_agent_update_at` | datetime | windows, macos, linux |
| `sophos.last_os_update_at` | datetime | windows, macos, linux |
| `sophos.last_seen_at` | datetime | windows, macos, linux |
| `sophos.lockdown_status` | enum_string | windows, macos, linux |
| `sophos.mac_addresses` | string_array | windows, macos, linux |
| `sophos.online` | boolean | windows, macos, linux |
| `sophos.os_build` | integer | windows, macos, linux |
| `sophos.os_is_server` | boolean | windows, macos, linux |
| `sophos.os_major_version` | integer | windows, macos, linux |
| `sophos.os_minor_version` | integer | windows, macos, linux |
| `sophos.os_name` | string | windows, macos, linux |
| `sophos.os_platform` | enum_string | windows, macos, linux |
| `sophos.os_up_to_date` | boolean | macos |
| `sophos.packages` | json | windows, macos, linux |
| `sophos.serial_number` | string | windows, macos, linux |
| `sophos.sophos_id` | string | windows, macos, linux |
| `sophos.tags` | json | windows, macos, linux |
| `sophos.tamper_protection_enabled` | boolean | windows, macos, linux |
| `sophos.tamper_protection_supported` | boolean | windows, macos, linux |
| `sophos.type` | enum_string | windows, macos, linux |

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PolicyPostureAnd](#schemapolicypostureand)|false|none|Every applicable child expression must hold. Contains no other keys.|
|*oneOf*|[PolicyPostureOr](#schemapolicypostureor)|false|none|At least one applicable child expression must hold. Contains no other keys.|
|*oneOf*|[PolicyPostureNot](#schemapolicyposturenot)|false|none|Negates one applicable expression. Contains no other keys.|
|*oneOf*|[PolicyPostureLeaf](#schemapolicypostureleaf)|false|none|One typed comparison. Each alternative enumerates valid fields, their<br>operators, and the corresponding value type. All keys are explicit;<br>unknown keys are rejected. Provider comparisons optionally accept `rows`;<br>Firezone device comparisons do not.<br><br>Value length limits are enforced in bytes by the policy parser, including<br>each string in a list. The parser additionally checks regex syntax,<br>versions, CIDR address families, positive durations, and the `@latest`<br>macro. See PolicyPostureNode for platform and missing-data semantics.<br>|

<h2 id="tocS_OIDCAuthProvider">OIDCAuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemaoidcauthprovider"></a>
<a id="schema_OIDCAuthProvider"></a>
<a id="tocSoidcauthprovider"></a>
<a id="tocsoidcauthprovider"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "client_id": "my-client-id",
  "client_session_lifetime_secs": 604800,
  "context": "clients_and_portal",
  "discovery_document_uri": "https://idp.example.com/.well-known/openid-configuration",
  "email_verification_method": "claim",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_default": false,
  "is_disabled": false,
  "issuer": "https://idp.example.com",
  "name": "OIDC Provider",
  "portal_session_lifetime_secs": 28800,
  "updated_at": "2025-01-15T10:30:00Z"
}
```

OIDC Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|client_id|string|true|none|Client ID|
|client_session_lifetime_secs|integer \| null|true|none|Client session lifetime in seconds. Null when the account default applies.|
|context|string|true|none|Context|
|discovery_document_uri|string|true|none|Discovery document URI|
|email_verification_method|string|true|none|How sign-in verifies the email claim|
|id|string(uuid)|true|none|Provider ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_default|boolean|true|none|Whether provider is default|
|is_disabled|boolean|true|none|Whether provider is disabled|
|issuer|string|true|none|Issuer|
|name|string|true|none|Provider name|
|portal_session_lifetime_secs|integer \| null|true|none|Portal session lifetime in seconds. Null when the account default applies.|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|context|clients_and_portal|
|context|clients_only|
|context|portal_only|
|email_verification_method|none|
|email_verification_method|claim|
|email_verification_method|proof|

<h2 id="tocS_DefenderDeviceListResponse">DefenderDeviceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefenderdevicelistresponse"></a>
<a id="schema_DefenderDeviceListResponse"></a>
<a id="tocSdefenderdevicelistresponse"></a>
<a id="tocsdefenderdevicelistresponse"></a>

```json
{
  "data": [
    {
      "last_seen_at": "1970-01-01T00:00:00Z",
      "machine_tags": [
        "string"
      ],
      "managed_by": "string",
      "vm_resource_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "os_platform": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "last_ip_address": "string",
      "device_value": "string",
      "inserted_at": "1970-01-01T00:00:00Z",
      "os_architecture": "string",
      "rbac_group_name": "string",
      "exposure_level": "string",
      "defender_id": "string",
      "entra_joined": true,
      "exclusion_reason": "string",
      "vm_id": "string",
      "vm_cloud_provider": "string",
      "os_processor": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "entra_device_id": "string",
      "os_build": 0,
      "managed_by_status": "string",
      "is_excluded": true,
      "vm_subscription_id": "string",
      "last_external_ip_address": "string",
      "health_status": "string",
      "risk_score": "string",
      "is_potential_duplication": true,
      "agent_version": "string",
      "rbac_group_id": 0,
      "version": "string",
      "ip_addresses": [
        {}
      ],
      "onboarding_status": "string",
      "computer_dns_name": "string",
      "first_seen_at": "1970-01-01T00:00:00Z",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DefenderDevice](#schemadefenderdevice)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_ExternalIdentityListResponse">ExternalIdentityListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternalidentitylistresponse"></a>
<a id="schema_ExternalIdentityListResponse"></a>
<a id="tocSexternalidentitylistresponse"></a>
<a id="tocsexternalidentitylistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "actor_id": "cdfa97e6-cca1-41db-8fc7-864daedb46df",
      "directory_id": "9f8e7d6c-5b4a-3c2b-1a0e-9f8e7d6c5b4a",
      "email": "john.doe@example.com",
      "family_name": "Doe",
      "firezone_avatar_url": "https://avatars.firezone.dev/u/2551705710219359.png",
      "given_name": "John",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "idp_id": "2551705710219359",
      "inserted_at": "2025-01-01T00:00:00Z",
      "issuer": "https://accounts.google.com",
      "middle_name": "string",
      "name": "John Doe",
      "nickname": "string",
      "picture": "https://example.com/avatar.jpg",
      "preferred_username": "jdoe",
      "profile": "string",
      "synced_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple External Identities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExternalIdentity](#schemaexternalidentity)]|false|none|External Identity details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_ClientPut">ClientPut</h2>
<!-- backwards compatibility -->
<a id="schemaclientput"></a>
<a id="schema_ClientPut"></a>
<a id="tocSclientput"></a>
<a id="tocsclientput"></a>

```json
{
  "name": "John's Macbook Air",
  "slug": "johns-macbook-air"
}
```

Put schema for updating a single Client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Client Name|
|slug|string|false|none|DNS label the Client is reached at under `firezone.network`, unique within the Account. One to 63 lowercase letters, digits or hyphens, starting and ending with a letter or digit. Left as it is when omitted.|

<h2 id="tocS_ClientsResponse">ClientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclientsresponse"></a>
<a id="schema_ClientsResponse"></a>
<a id="tocSclientsresponse"></a>
<a id="tocsclientsresponse"></a>

```json
{
  "data": [
    {
      "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
      "created_at": "2025-01-01T00:00:00Z",
      "device_serial": "GCCFX0DBQ6L5",
      "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
      "firebase_installation_id": "string",
      "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
      "hostname": "johns-macbook.example.com",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "identifier_for_vendor": "string",
      "ipv4": "100.64.0.1",
      "ipv6": "fd00:2021:1111::1",
      "last_attested_at": "2025-01-01T00:00:00Z",
      "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
      "last_attested_device_serial": "GCCFX0DBQ6L5",
      "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
      "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
      "last_seen_at": "2025-01-01T00:00:00Z",
      "last_seen_remote_ip": "203.0.113.10",
      "last_seen_remote_ip_location_city": "New York",
      "last_seen_remote_ip_location_lat": 40.7128,
      "last_seen_remote_ip_location_lon": -74.006,
      "last_seen_remote_ip_location_region": "US",
      "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
      "last_seen_version": "1.5.0",
      "name": "John's Macbook Air",
      "online": true,
      "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
      "slug": "johns-macbook-air",
      "updated_at": "2025-01-01T00:00:00Z",
      "verified_at": "2025-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Clients

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Client](#schemaclient)]|false|none|Clients details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_GoogleDirectoryListResponse">GoogleDirectoryListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogledirectorylistresponse"></a>
<a id="schema_GoogleDirectoryListResponse"></a>
<a id="tocSgoogledirectorylistresponse"></a>
<a id="tocsgoogledirectorylistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "disabled_reason": "string",
      "domain": "example.com",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "group_sync_mode": "all",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "impersonation_email": "admin@example.com",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "name": "Google",
      "orgunit_sync_enabled": true,
      "synced_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Google Directories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GoogleDirectory](#schemagoogledirectory)]|false|none|Google Directory details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_GatewaysResponse">GatewaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysresponse"></a>
<a id="schema_GatewaysResponse"></a>
<a id="tocSgatewaysresponse"></a>
<a id="tocsgatewaysresponse"></a>

```json
{
  "data": [
    {
      "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "ipv4": "100.64.0.1",
      "ipv6": "fd00:2021:1111::1",
      "last_seen_at": "2025-01-01T00:00:00Z",
      "last_seen_remote_ip": "198.51.100.10",
      "last_seen_remote_ip_location_city": "San Francisco",
      "last_seen_remote_ip_location_lat": 37.7749,
      "last_seen_remote_ip_location_lon": -122.4194,
      "last_seen_remote_ip_location_region": "US-CA",
      "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
      "last_seen_version": "1.5.0",
      "name": "vpc-us-east",
      "online": true,
      "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
      "rotated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Gateways

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Gateway](#schemagateway)]|false|none|Gateways details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_PolicyCreateRequest">PolicyCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapolicycreaterequest"></a>
<a id="schema_PolicyCreateRequest"></a>
<a id="tocSpolicycreaterequest"></a>
<a id="tocspolicycreaterequest"></a>

```json
{
  "policy": {
    "conditions": [
      {
        "operator": "is_in",
        "property": "remote_ip_location_region",
        "values": [
          "US",
          "CA"
        ]
      }
    ],
    "description": "Policy to allow something",
    "flow_log_uploads_enabled": true,
    "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": false,
    "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
  }
}
```

POST body for creating a Policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[PolicyCreateParams](#schemapolicycreateparams)|true|none|Policy attributes accepted when creating a Policy|

<h2 id="tocS_ResourceResponse">ResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourceresponse"></a>
<a id="schema_ResourceResponse"></a>
<a id="tocSresourceresponse"></a>
<a id="tocsresourceresponse"></a>

```json
{
  "data": {
    "address": "10.0.0.10",
    "address_description": "Production Database",
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [
      {
        "ports": [
          "5432"
        ],
        "protocol": "tcp"
      }
    ],
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ip_stack": "ipv4_only",
    "name": "Prod DB",
    "site_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "type": "ip"
  }
}
```

Response schema for single Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Resource](#schemaresource)|false|none|Resource|

<h2 id="tocS_version no_value provider comparison">version no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaversion no_value provider comparison"></a>
<a id="schema_version no_value provider comparison"></a>
<a id="tocSversion no_value provider comparison"></a>
<a id="tocsversion no_value provider comparison"></a>

```json
{
  "field": "defender.agent_version",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.agent_version|
|field|intune.attestation_boot_app_security_version|
|field|intune.attestation_boot_manager_security_version|
|field|intune.attestation_boot_manager_version|
|field|intune.attestation_code_integrity_check_version|
|field|intune.attestation_content_version|
|field|intune.attestation_tpm_version|
|field|intune.os_version|
|field|iru.agent_version|
|field|iru.display_os_version|
|field|iru.firewall_version|
|field|iru.gatekeeper_opaque_version|
|field|iru.gatekeeper_version|
|field|iru.malware_removal_tool_version|
|field|iru.os_version|
|field|iru.supplemental_os_version_extra|
|field|iru.xprotect_version|
|field|santa.os_version|
|field|santa.santa_version|
|field|santa.santanetd_version|
|field|sentinelone.agent_version|
|field|sentinelone.os_revision|
|field|sentinelone.ranger_version|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_ExternalIdentityResponse">ExternalIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternalidentityresponse"></a>
<a id="schema_ExternalIdentityResponse"></a>
<a id="tocSexternalidentityresponse"></a>
<a id="tocsexternalidentityresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "actor_id": "cdfa97e6-cca1-41db-8fc7-864daedb46df",
    "directory_id": "9f8e7d6c-5b4a-3c2b-1a0e-9f8e7d6c5b4a",
    "email": "john.doe@example.com",
    "family_name": "Doe",
    "firezone_avatar_url": "https://avatars.firezone.dev/u/2551705710219359.png",
    "given_name": "John",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "idp_id": "2551705710219359",
    "inserted_at": "2025-01-01T00:00:00Z",
    "issuer": "https://accounts.google.com",
    "middle_name": "string",
    "name": "John Doe",
    "nickname": "string",
    "picture": "https://example.com/avatar.jpg",
    "preferred_username": "jdoe",
    "profile": "string",
    "synced_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single External Identity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ExternalIdentity](#schemaexternalidentity)|false|none|External Identity|

<h2 id="tocS_SantaDeviceResponse">SantaDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasantadeviceresponse"></a>
<a id="schema_SantaDeviceResponse"></a>
<a id="tocSsantadeviceresponse"></a>
<a id="tocssantadeviceresponse"></a>

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "configured_client_mode": "string",
    "first_seen_at": "1970-01-01T00:00:00Z",
    "hostname": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "last_preflight_at": "1970-01-01T00:00:00Z",
    "last_preflight_ip": "string",
    "last_seen_client_mode": "string",
    "last_sync_at": "1970-01-01T00:00:00Z",
    "machine_model": "string",
    "os_build": "string",
    "os_type": "string",
    "os_version": "string",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "primary_user": "string",
    "primary_user_groups": [
      "string"
    ],
    "rule_sync_at": "1970-01-01T00:00:00Z",
    "santa_id": "string",
    "santa_version": "string",
    "santanetd_version": "string",
    "serial_number": "string",
    "sip_status": 0,
    "synced_at": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "temporary_admin_mode_ends_at": "1970-01-01T00:00:00Z",
    "temporary_admin_mode_user": "string",
    "temporary_monitor_mode_ends_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SantaDevice](#schemasantadevice)|false|none|Santa host synced from North Pole Security Workshop|

<h2 id="tocS_OktaDirectory">OktaDirectory</h2>
<!-- backwards compatibility -->
<a id="schemaoktadirectory"></a>
<a id="schema_OktaDirectory"></a>
<a id="tocSoktadirectory"></a>
<a id="tocsoktadirectory"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "client_id": "0oa1b2c3d4e5EXAMPLE",
  "disabled_reason": "string",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_disabled": false,
  "kid": "kid-2f8a1c9e",
  "name": "Okta",
  "okta_domain": "example.okta.com",
  "synced_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

Okta Directory

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|client_id|string|true|none|Client ID|
|disabled_reason|string \| null|true|none|Reason for disabling|
|error_message|string \| null|true|none|Last error message|
|errored_at|string(date-time) \| null|true|none|Last error timestamp|
|id|string(uuid)|true|none|Directory ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_disabled|boolean|true|none|Whether directory is disabled|
|kid|string|true|none|Key ID|
|name|string|true|none|Directory name|
|okta_domain|string|true|none|Okta domain|
|synced_at|string(date-time) \| null|true|none|Last sync timestamp|
|updated_at|string(date-time)|true|none|Update timestamp|

<h2 id="tocS_SentinelOnePostureProviderUpdateRequest">SentinelOnePostureProviderUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasentinelonepostureproviderupdaterequest"></a>
<a id="schema_SentinelOnePostureProviderUpdateRequest"></a>
<a id="tocSsentinelonepostureproviderupdaterequest"></a>
<a id="tocssentinelonepostureproviderupdaterequest"></a>

```json
{
  "sentinelone_posture_provider": {
    "is_disabled": false,
    "name": "SentinelOne"
  }
}
```

PUT/PATCH body for updating a SentinelOne posture provider. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentinelone_posture_provider|object|true|none|none|

<h2 id="tocS_GatewayCreate">GatewayCreate</h2>
<!-- backwards compatibility -->
<a id="schemagatewaycreate"></a>
<a id="schema_GatewayCreate"></a>
<a id="tocSgatewaycreate"></a>
<a id="tocsgatewaycreate"></a>

```json
{
  "name": "vpc-us-east"
}
```

Create schema for a single Gateway

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Gateway Name. Randomly generated when omitted.|

<h2 id="tocS_OktaDirectoryListResponse">OktaDirectoryListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoktadirectorylistresponse"></a>
<a id="schema_OktaDirectoryListResponse"></a>
<a id="tocSoktadirectorylistresponse"></a>
<a id="tocsoktadirectorylistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_id": "0oa1b2c3d4e5EXAMPLE",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "kid": "kid-2f8a1c9e",
      "name": "Okta",
      "okta_domain": "example.okta.com",
      "synced_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Okta Directories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OktaDirectory](#schemaoktadirectory)]|false|none|Okta Directory details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_SophosDevice">SophosDevice</h2>
<!-- backwards compatibility -->
<a id="schemasophosdevice"></a>
<a id="schema_SophosDevice"></a>
<a id="tocSsophosdevice"></a>
<a id="tocssophosdevice"></a>

```json
{
  "mac_addresses": [
    "string"
  ],
  "os_name": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "tamper_protection_supported": true,
  "last_agent_update_at": "1970-01-01T00:00:00Z",
  "os_minor_version": 0,
  "associated_person_via_login": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "os_platform": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "inserted_at": "1970-01-01T00:00:00Z",
  "ipv6_addresses": [
    "string"
  ],
  "sophos_tenant_id": "string",
  "group_id": "string",
  "group_name": "string",
  "tags": [
    {}
  ],
  "serial_number": "string",
  "isolation_admin_isolated": true,
  "group_hierarchy": [
    {}
  ],
  "health_threats_status": "string",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "encryption_volumes": [
    {}
  ],
  "type": "string",
  "cloud_instance_id": "string",
  "associated_person_id": "string",
  "last_os_update_at": "1970-01-01T00:00:00Z",
  "encryption_overall_status": "string",
  "associated_person_name": "string",
  "health_overall": "string",
  "assigned_products": [
    {}
  ],
  "cloud_provider": "string",
  "packages": {},
  "os_build": 0,
  "os_is_server": true,
  "health_services_status": "string",
  "isolation_status": "string",
  "device_software": {},
  "cloned": true,
  "lockdown_status": "string",
  "ipv4_addresses": [
    "string"
  ],
  "health_service_details": [
    {}
  ],
  "tamper_protection_enabled": true,
  "online": true,
  "sophos_id": "string",
  "isolation_self_isolated": true,
  "os_major_version": 0,
  "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hostname": "string"
}
```

Endpoint synced from Sophos Central

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mac_addresses|[string]|true|none|none|
|os_name|string \| null|true|none|none|
|last_seen_at|string(date-time) \| null|true|none|none|
|tamper_protection_supported|boolean \| null|true|none|none|
|last_agent_update_at|string(date-time) \| null|true|none|none|
|os_minor_version|integer \| null|true|none|none|
|associated_person_via_login|string \| null|true|none|none|
|updated_at|string(date-time) \| null|true|none|none|
|os_platform|string \| null|true|none|none|
|synced_at|string(date-time)|true|none|none|
|inserted_at|string(date-time) \| null|true|none|none|
|ipv6_addresses|[string]|true|none|none|
|sophos_tenant_id|string \| null|true|none|none|
|group_id|string \| null|true|none|none|
|group_name|string \| null|true|none|none|
|tags|[object]|true|none|none|
|serial_number|string \| null|true|none|none|
|isolation_admin_isolated|boolean \| null|true|none|none|
|group_hierarchy|[object]|true|none|none|
|health_threats_status|string \| null|true|none|none|
|account_id|string(uuid)|true|none|none|
|encryption_volumes|[object]|true|none|none|
|type|string \| null|true|none|none|
|cloud_instance_id|string \| null|true|none|none|
|associated_person_id|string \| null|true|none|none|
|last_os_update_at|string(date-time) \| null|true|none|none|
|encryption_overall_status|string \| null|true|none|none|
|associated_person_name|string \| null|true|none|none|
|health_overall|string \| null|true|none|none|
|assigned_products|[object]|true|none|none|
|cloud_provider|string \| null|true|none|none|
|packages|object \| null|true|none|none|
|os_build|integer \| null|true|none|none|
|os_is_server|boolean \| null|true|none|none|
|health_services_status|string \| null|true|none|none|
|isolation_status|string \| null|true|none|none|
|device_software|object \| null|true|none|none|
|cloned|boolean \| null|true|none|none|
|lockdown_status|string \| null|true|none|none|
|ipv4_addresses|[string]|true|none|none|
|health_service_details|[object]|true|none|none|
|tamper_protection_enabled|boolean \| null|true|none|none|
|online|boolean \| null|true|none|none|
|sophos_id|string|true|none|none|
|isolation_self_isolated|boolean \| null|true|none|none|
|os_major_version|integer \| null|true|none|none|
|posture_provider_id|string(uuid)|true|none|none|
|hostname|string \| null|true|none|none|

<h2 id="tocS_DefenderPostureProviderResponse">DefenderPostureProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefenderpostureproviderresponse"></a>
<a id="schema_DefenderPostureProviderResponse"></a>
<a id="tocSdefenderpostureproviderresponse"></a>
<a id="tocsdefenderpostureproviderresponse"></a>

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "defender",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DefenderPostureProvider](#schemadefenderpostureprovider)|false|none|Microsoft Defender for Endpoint posture provider|

<h2 id="tocS_SentinelOnePostureProviderResponse">SentinelOnePostureProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemasentinelonepostureproviderresponse"></a>
<a id="schema_SentinelOnePostureProviderResponse"></a>
<a id="tocSsentinelonepostureproviderresponse"></a>
<a id="tocssentinelonepostureproviderresponse"></a>

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "management_url": "http://example.com",
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "sentinelone",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SentinelOnePostureProvider](#schemasentinelonepostureprovider)|false|none|SentinelOne posture provider|

<h2 id="tocS_PolicyPostureNot">PolicyPostureNot</h2>
<!-- backwards compatibility -->
<a id="schemapolicyposturenot"></a>
<a id="schema_PolicyPostureNot"></a>
<a id="tocSpolicyposturenot"></a>
<a id="tocspolicyposturenot"></a>

```json
{
  "not": {
    "and": [
      {
        "field": "intune.enrolled",
        "op": "is",
        "value": true
      },
      {
        "field": "intune.compliance_state",
        "op": "is",
        "rows": "all",
        "value": "compliant"
      },
      {
        "field": "intune.last_sync_at",
        "op": "within_last",
        "value": "PT24H"
      },
      {
        "or": [
          {
            "field": "firezone.last_seen_version",
            "op": "gte",
            "value": "@latest"
          },
          {
            "not": {
              "field": "firezone.hostname",
              "op": "starts_with",
              "value": "test-"
            }
          }
        ]
      }
    ]
  }
}
```

Negates one applicable expression. Contains no other keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|not|[PolicyPostureNode](#schemapolicyposturenode)|true|none|One node of a Policy's device posture expression. A node has exactly one<br>of these shapes:<br><br>* `and`: a non-empty list of nodes that must all hold.<br>* `or`: a non-empty list of nodes of which at least one must hold.<br>* `not`: a node that must not hold.<br>* a leaf: a `field`, an `op`, and for most operators a `value`.<br><br>A leaf's `field` is `<provider>.<attribute>`, such as<br>`intune.compliance_state` or `firezone.last_seen_version`. The provider<br>is one of `firezone` (the connecting device's own record), `intune`,<br>`iru`, `defender`, `santa`, `sentinelone` or `sophos`. The attribute is<br>one of that provider's synced device attributes. Every synced provider also has a<br>boolean `enrolled` that is true when the provider knows the device.<br><br>The attribute's type decides which operators apply and what `value`<br>must be:<br><br>* strings: `is`, `is_not`, `is_in`, `is_not_in`, `contains`,<br>  `does_not_contain`, `starts_with`, `ends_with`, `matches`,<br>  `does_not_match`. Comparisons ignore case. `is_in` and `is_not_in`<br>  take a list of strings. `matches` and `does_not_match` take a regular<br>  expression.<br>* booleans: `is` with `true` or `false`.<br>* numbers: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.<br>* versions: `is`, `is_not`, `gt`, `gte`, `lt`, `lte`, compared segment<br>  by segment, so `14.4` equals `14.4.0`.<br>* timestamps: `before` and `after` with an ISO 8601 datetime such as<br>  `2026-01-01T00:00:00Z`; `within_last` and `not_within_last` with an<br>  ISO 8601 duration such as `PT24H` or `P30D`. A date-only attribute<br>  counts as the start of that day in UTC.<br>* IP addresses: `is_in_cidr` and `is_not_in_cidr` with a list of CIDRs.<br>  `firezone.ipv4` takes IPv4 CIDRs only and `firezone.ipv6` IPv6 only.<br>* lists of strings: `contains`, `does_not_contain`, `contains_any_of`,<br>  `contains_all_of`, `is_empty`, `is_not_empty`.<br>* JSON attributes: `is_empty`, `is_not_empty`.<br><br>The value `@latest` on `firezone.last_seen_version` stands for the newest<br>Client release for the device's platform.<br><br>`enum_string` uses the string operators; `integer` and `float` use the<br>numeric operators. `string_array` values use a single string for `contains`<br>and `does_not_contain`, or a non-empty string list for `contains_any_of`<br>and `contains_all_of`.<br><br>Every attribute also accepts `exists` and `does_not_exist`. These and<br>`is_empty` / `is_not_empty` take no value: omit `value` or set it to null.<br>Missing attributes fail every operator except `does_not_exist`, including<br>negative operators such as `is_not`. A missing provider is evaluated as<br>one empty row. Its synthetic `enrolled` field is false, so `enrolled is<br>false` can explicitly match an unenrolled device. `not` negates the<br>result and can also match missing data; use a positive `enrolled is true`<br>check when enrollment is required.<br><br>Leaves that do not apply to the device's platform are removed before<br>evaluation, including inside `or` and `not`. An expression with no<br>applicable leaves passes. If the platform is unknown, no leaves are<br>removed. Each field lists the platforms it applies to.<br>Provider `os_up_to_date` fields are computed from known OS releases;<br>they are not raw provider attributes.<br><br>When a device matches more than one record of a provider, a leaf holds<br>when any record satisfies it. Set `rows` to `all` to require every<br>record. Different leaves may match different provider rows; `and` does<br>not require one row to satisfy all leaves. `rows` is not allowed for<br>`firezone`, which always describes exactly one connecting device.<br><br>Expressions allow at most 10 nested boolean levels and 100 leaves.<br>List values contain 1–100 items; strings are at most 1024 bytes and<br>regular expressions at most 256 bytes. Unknown fields, incompatible<br>operators, invalid values, and exceeded limits return HTTP 422 with<br>a path in `validation_errors.postures`.<br><br>`GET /posture_fields` lists the same fields as structured data.<br><br>Supported fields (generated from the same registry used for validation):<br><br>### defender fields<br><br>\| Field \| Type \| Platforms \|<br>\| --- \| --- \| --- \|<br>\| `defender.agent_version` \| version \| windows, macos, linux \|<br>\| `defender.computer_dns_name` \| string \| windows, macos, linux \|<br>\| `defender.defender_id` \| string \| windows, macos, linux \|<br>\| `defender.device_value` \| enum_string \| windows, macos, linux \|<br>\| `defender.enrolled` \| boolean \| windows, macos, linux \|<br>\| `defender.entra_device_id` \| string \| windows, macos, linux \|<br>\| `defender.entra_joined` \| boolean \| windows, macos, linux \|<br>\| `defender.exclusion_reason` \| enum_string \| windows, macos, linux \|<br>\| `defender.exposure_level` \| enum_string \| windows, macos, linux \|<br>\| `defender.first_seen_at` \| datetime \| windows, macos, linux \|<br>\| `defender.health_status` \| enum_string \| windows, macos, linux \|<br>\| `defender.ip_addresses` \| json \| windows, macos, linux \|<br>\| `defender.is_excluded` \| boolean \| windows, macos, linux \|<br>\| `defender.is_potential_duplication` \| boolean \| windows, macos, linux \|<br>\| `defender.last_external_ip_address` \| ip \| windows, macos, linux \|<br>\| `defender.last_ip_address` \| ip \| windows, macos, linux \|<br>\| `defender.last_seen_at` \| datetime \| windows, macos, linux \|<br>\| `defender.machine_tags` \| string_array \| windows, macos, linux \|<br>\| `defender.managed_by` \| enum_string \| windows, macos, linux \|<br>\| `defender.managed_by_status` \| enum_string \| windows, macos, linux \|<br>\| `defender.onboarding_status` \| enum_string \| windows, macos, linux \|<br>\| `defender.os_architecture` \| enum_string \| windows, macos, linux \|<br>\| `defender.os_build` \| integer \| windows, macos, linux \|<br>\| `defender.os_platform` \| enum_string \| windows, macos, linux \|<br>\| `defender.os_processor` \| string \| windows, macos, linux \|<br>\| `defender.os_up_to_date` \| boolean \| macos \|<br>\| `defender.rbac_group_id` \| integer \| windows, macos, linux \|<br>\| `defender.rbac_group_name` \| string \| windows, macos, linux \|<br>\| `defender.risk_score` \| enum_string \| windows, macos, linux \|<br>\| `defender.version` \| string \| windows, macos, linux \|<br>\| `defender.vm_cloud_provider` \| string \| windows, macos, linux \|<br>\| `defender.vm_id` \| string \| windows, macos, linux \|<br>\| `defender.vm_resource_id` \| string \| windows, macos, linux \|<br>\| `defender.vm_subscription_id` \| string \| windows, macos, linux \|<br><br>### firezone fields<br><br>\| Field \| Type \| Platforms \|<br>\| --- \| --- \| --- \|<br>\| `firezone.device_serial` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.device_uuid` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.hostname` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.identifier_for_vendor` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.ipv4` \| ipv4 \| windows, macos, linux, ios, android \|<br>\| `firezone.ipv6` \| ipv6 \| windows, macos, linux, ios, android \|<br>\| `firezone.last_attested_at` \| datetime \| windows, macos, linux, ios, android \|<br>\| `firezone.last_attested_cert_fingerprint` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.last_attested_cert_serial` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.last_attested_device_serial` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.last_attested_device_uuid` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.last_attested_mdm_device_id` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.last_seen_remote_ip_location_city` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.last_seen_user_agent` \| string \| windows, macos, linux, ios, android \|<br>\| `firezone.last_seen_version` \| version \| windows, macos, linux, ios, android \|<br>\| `firezone.name` \| string \| windows, macos, linux, ios, android \|<br><br>### intune fields<br><br>\| Field \| Type \| Platforms \|<br>\| --- \| --- \| --- \|<br>\| `intune.android_security_patch_level` \| datetime \| windows, macos, ios, android \|<br>\| `intune.attestation_bit_locker_enabled` \| boolean \| windows \|<br>\| `intune.attestation_boot_app_security_version` \| version \| windows \|<br>\| `intune.attestation_boot_debugging` \| boolean \| windows \|<br>\| `intune.attestation_boot_manager_security_version` \| version \| windows \|<br>\| `intune.attestation_boot_manager_version` \| version \| windows \|<br>\| `intune.attestation_boot_revision_list_info` \| string \| windows \|<br>\| `intune.attestation_code_integrity` \| boolean \| windows \|<br>\| `intune.attestation_code_integrity_check_version` \| version \| windows \|<br>\| `intune.attestation_code_integrity_policy` \| string \| windows \|<br>\| `intune.attestation_content_version` \| version \| windows \|<br>\| `intune.attestation_data_execution_policy_enabled` \| boolean \| windows \|<br>\| `intune.attestation_early_launch_anti_malware_driver_protection` \| boolean \| windows \|<br>\| `intune.attestation_health_status_mismatch_info` \| string \| windows \|<br>\| `intune.attestation_identity_key` \| string \| windows \|<br>\| `intune.attestation_issued_at` \| datetime \| windows \|<br>\| `intune.attestation_operating_system_kernel_debugging` \| boolean \| windows \|<br>\| `intune.attestation_operating_system_rev_list_info` \| string \| windows \|<br>\| `intune.attestation_pcr0` \| string \| windows \|<br>\| `intune.attestation_pcr_hash_algorithm` \| string \| windows \|<br>\| `intune.attestation_reset_count` \| integer \| windows \|<br>\| `intune.attestation_restart_count` \| integer \| windows \|<br>\| `intune.attestation_safe_mode` \| boolean \| windows \|<br>\| `intune.attestation_secure_boot` \| boolean \| windows \|<br>\| `intune.attestation_secure_boot_config_policy_fingerprint` \| string \| windows \|<br>\| `intune.attestation_status` \| enum_string \| windows \|<br>\| `intune.attestation_supported` \| boolean \| windows \|<br>\| `intune.attestation_test_signing` \| boolean \| windows \|<br>\| `intune.attestation_tpm_version` \| version \| windows \|<br>\| `intune.attestation_virtual_secure_mode` \| boolean \| windows \|<br>\| `intune.attestation_windows_pe` \| boolean \| windows \|<br>\| `intune.compliance_grace_period_expiration_at` \| datetime \| windows, macos, ios, android \|<br>\| `intune.compliance_state` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.config_manager_compliance_policy` \| boolean \| windows, macos, ios, android \|<br>\| `intune.config_manager_device_configuration` \| boolean \| windows, macos, ios, android \|<br>\| `intune.config_manager_inventory` \| boolean \| windows, macos, ios, android \|<br>\| `intune.config_manager_modern_apps` \| boolean \| windows, macos, ios, android \|<br>\| `intune.config_manager_resource_access` \| boolean \| windows, macos, ios, android \|<br>\| `intune.config_manager_windows_update_for_business` \| boolean \| windows, macos, ios, android \|<br>\| `intune.device_category_display_name` \| string \| windows, macos, ios, android \|<br>\| `intune.device_enrollment_type` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.device_name` \| string \| windows, macos, ios, android \|<br>\| `intune.device_registration_state` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.eas_activated` \| boolean \| windows, macos, ios, android \|<br>\| `intune.eas_activated_at` \| datetime \| windows, macos, ios, android \|<br>\| `intune.eas_device_id` \| string \| windows, macos, ios, android \|<br>\| `intune.email_address` \| string \| windows, macos, ios, android \|<br>\| `intune.enrolled` \| boolean \| windows, macos, ios, android \|<br>\| `intune.enrolled_at` \| datetime \| windows, macos, ios, android \|<br>\| `intune.enrollment_profile_name` \| string \| windows, macos, ios, android \|<br>\| `intune.entra_device_id` \| string \| windows, macos, ios, android \|<br>\| `intune.entra_registered` \| boolean \| windows, macos, ios, android \|<br>\| `intune.ethernet_mac_address` \| string \| windows, macos, ios, android \|<br>\| `intune.exchange_access_state` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.exchange_access_state_reason` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.exchange_last_successful_sync_at` \| datetime \| windows, macos, ios, android \|<br>\| `intune.free_storage_space_bytes` \| integer \| windows, macos, ios, android \|<br>\| `intune.iccid` \| string \| windows, macos, ios, android \|<br>\| `intune.imei` \| string \| windows, macos, ios, android \|<br>\| `intune.intune_id` \| string \| windows, macos, ios, android \|<br>\| `intune.is_encrypted` \| boolean \| windows, macos, ios, android \|<br>\| `intune.is_supervised` \| boolean \| macos, ios \|<br>\| `intune.jail_broken` \| boolean \| ios, android \|<br>\| `intune.last_sync_at` \| datetime \| windows, macos, ios, android \|<br>\| `intune.managed_device_name` \| string \| windows, macos, ios, android \|<br>\| `intune.managed_device_owner_type` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.management_agent` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.management_certificate_expires_at` \| datetime \| windows, macos, ios, android \|<br>\| `intune.management_state` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.manufacturer` \| string \| windows, macos, ios, android \|<br>\| `intune.meid` \| string \| windows, macos, ios, android \|<br>\| `intune.model` \| string \| windows, macos, ios, android \|<br>\| `intune.notes` \| string \| windows, macos, ios, android \|<br>\| `intune.operating_system` \| string \| windows, macos, ios, android \|<br>\| `intune.os_up_to_date` \| boolean \| windows, macos, ios, android \|<br>\| `intune.os_version` \| version \| windows, macos, ios, android \|<br>\| `intune.partner_reported_threat_state` \| enum_string \| windows, macos, ios, android \|<br>\| `intune.phone_number` \| string \| windows, macos, ios, android \|<br>\| `intune.physical_memory_bytes` \| integer \| windows, macos, ios, android \|<br>\| `intune.require_user_enrollment_approval` \| boolean \| windows, macos, ios, android \|<br>\| `intune.serial_number` \| string \| windows, macos, ios, android \|<br>\| `intune.subscriber_carrier` \| string \| windows, macos, ios, android \|<br>\| `intune.total_storage_space_bytes` \| integer \| windows, macos, ios, android \|<br>\| `intune.udid` \| string \| windows, macos, ios, android \|<br>\| `intune.user_display_name` \| string \| windows, macos, ios, android \|<br>\| `intune.user_id` \| string \| windows, macos, ios, android \|<br>\| `intune.user_principal_name` \| string \| windows, macos, ios, android \|<br>\| `intune.wifi_mac_address` \| string \| windows, macos, ios, android \|<br><br>### iru fields<br><br>\| Field \| Type \| Platforms \|<br>\| --- \| --- \| --- \|<br>\| `iru.activation_lock_allowed_while_supervised` \| boolean \| macos, ios \|<br>\| `iru.activation_lock_bypass_code_failed` \| boolean \| macos, ios \|<br>\| `iru.activation_lock_collected_at` \| datetime \| macos, ios \|<br>\| `iru.activation_lock_supported` \| boolean \| macos, ios \|<br>\| `iru.agent_installed` \| boolean \| macos, ios \|<br>\| `iru.agent_version` \| version \| macos, ios \|<br>\| `iru.any_signed_os` \| boolean \| macos, ios \|<br>\| `iru.apple_silicon` \| boolean \| macos, ios \|<br>\| `iru.asset_tag` \| string \| macos, ios \|<br>\| `iru.blueprint_id` \| string \| macos, ios \|<br>\| `iru.blueprint_name` \| string \| macos, ios \|<br>\| `iru.bootstrap_token_auth` \| boolean \| macos, ios \|<br>\| `iru.bootstrap_token_escrowed` \| boolean \| macos, ios \|<br>\| `iru.cellular_technology` \| enum_string \| macos, ios \|<br>\| `iru.data_roaming` \| boolean \| macos, ios \|<br>\| `iru.device_activation_lock_enabled` \| boolean \| macos, ios \|<br>\| `iru.device_capacity_gb` \| float \| macos, ios \|<br>\| `iru.device_family` \| enum_string \| macos, ios \|<br>\| `iru.device_name` \| string \| macos, ios \|<br>\| `iru.display_os_version` \| version \| macos, ios \|<br>\| `iru.enrolled` \| boolean \| macos, ios \|<br>\| `iru.external_boot_level` \| enum_string \| macos \|<br>\| `iru.filevault_collected_at` \| datetime \| macos, ios \|<br>\| `iru.filevault_enabled` \| boolean \| macos \|<br>\| `iru.filevault_key_escrowed` \| boolean \| macos, ios \|<br>\| `iru.filevault_key_rotation_scheduled_at` \| datetime \| macos, ios \|<br>\| `iru.filevault_key_type` \| enum_string \| macos \|<br>\| `iru.filevault_regeneration_needed` \| boolean \| macos, ios \|<br>\| `iru.firewall_allow_signed_applications` \| boolean \| macos, ios \|<br>\| `iru.firewall_block_all_incoming` \| boolean \| macos, ios \|<br>\| `iru.firewall_collected_at` \| datetime \| macos, ios \|<br>\| `iru.firewall_enabled` \| boolean \| macos \|<br>\| `iru.firewall_logging` \| boolean \| macos, ios \|<br>\| `iru.firewall_logging_option` \| enum_string \| macos \|<br>\| `iru.firewall_stealth_mode` \| boolean \| macos, ios \|<br>\| `iru.firewall_unloading` \| boolean \| macos, ios \|<br>\| `iru.firewall_version` \| version \| macos \|<br>\| `iru.first_enrolled_at` \| datetime \| macos, ios \|<br>\| `iru.gatekeeper_collected_at` \| datetime \| macos, ios \|<br>\| `iru.gatekeeper_enabled` \| boolean \| macos \|<br>\| `iru.gatekeeper_opaque_version` \| version \| macos \|<br>\| `iru.gatekeeper_trusted_developers` \| boolean \| macos, ios \|<br>\| `iru.gatekeeper_version` \| version \| macos \|<br>\| `iru.host_name` \| string \| macos, ios \|<br>\| `iru.hotspot` \| boolean \| macos, ios \|<br>\| `iru.inventory_collected_at` \| datetime \| macos, ios \|<br>\| `iru.iru_id` \| string \| macos, ios \|<br>\| `iru.is_missing` \| boolean \| macos, ios \|<br>\| `iru.is_removed` \| boolean \| macos, ios \|<br>\| `iru.kext_requires_bootstrap_token` \| boolean \| macos, ios \|<br>\| `iru.last_check_in_at` \| datetime \| macos, ios \|<br>\| `iru.last_enrolled_at` \| datetime \| macos, ios \|<br>\| `iru.local_hostname` \| string \| macos, ios \|<br>\| `iru.lost_mode_status` \| enum_string \| macos, ios \|<br>\| `iru.malware_removal_tool_version` \| version \| macos \|<br>\| `iru.mdm_enabled` \| boolean \| macos, ios \|<br>\| `iru.mdm_manages_kext` \| boolean \| macos, ios \|<br>\| `iru.model` \| string \| macos, ios \|<br>\| `iru.model_identifier` \| string \| macos, ios \|<br>\| `iru.model_name` \| string \| macos, ios \|<br>\| `iru.os_build` \| string \| macos, ios \|<br>\| `iru.os_name` \| string \| macos, ios \|<br>\| `iru.os_up_to_date` \| boolean \| macos, ios \|<br>\| `iru.os_version` \| version \| macos, ios \|<br>\| `iru.platform` \| enum_string \| macos, ios \|<br>\| `iru.secure_boot_level` \| enum_string \| macos \|<br>\| `iru.serial_number` \| string \| macos, ios \|<br>\| `iru.shared_ipad` \| boolean \| macos, ios \|<br>\| `iru.sip_enabled` \| boolean \| macos \|<br>\| `iru.software_update_requires_bootstrap_token` \| boolean \| macos, ios \|<br>\| `iru.ssv_enabled` \| boolean \| macos \|<br>\| `iru.startup_settings_collected_at` \| datetime \| macos, ios \|<br>\| `iru.supplemental_build_version` \| string \| macos, ios \|<br>\| `iru.supplemental_os_version_extra` \| version \| macos, ios \|<br>\| `iru.tags` \| string_array \| macos, ios \|<br>\| `iru.user_activation_lock_enabled` \| boolean \| macos, ios \|<br>\| `iru.user_email` \| string \| macos, ios \|<br>\| `iru.user_id` \| string \| macos, ios \|<br>\| `iru.user_is_archived` \| boolean \| macos, ios \|<br>\| `iru.user_manages_kext` \| boolean \| macos, ios \|<br>\| `iru.user_name` \| string \| macos, ios \|<br>\| `iru.xprotect_version` \| version \| macos \|<br><br>### santa fields<br><br>\| Field \| Type \| Platforms \|<br>\| --- \| --- \| --- \|<br>\| `santa.configured_client_mode` \| enum_string \| macos \|<br>\| `santa.enrolled` \| boolean \| macos \|<br>\| `santa.first_seen_at` \| datetime \| macos \|<br>\| `santa.hostname` \| string \| macos \|<br>\| `santa.last_preflight_at` \| datetime \| macos \|<br>\| `santa.last_preflight_ip` \| ip \| macos \|<br>\| `santa.last_seen_client_mode` \| enum_string \| macos \|<br>\| `santa.last_sync_at` \| datetime \| macos \|<br>\| `santa.machine_model` \| string \| macos \|<br>\| `santa.os_build` \| string \| macos \|<br>\| `santa.os_type` \| enum_string \| macos \|<br>\| `santa.os_up_to_date` \| boolean \| macos \|<br>\| `santa.os_version` \| version \| macos \|<br>\| `santa.primary_user` \| string \| macos \|<br>\| `santa.primary_user_groups` \| string_array \| macos \|<br>\| `santa.rule_sync_at` \| datetime \| macos \|<br>\| `santa.santa_id` \| string \| macos \|<br>\| `santa.santa_version` \| version \| macos \|<br>\| `santa.santanetd_version` \| version \| macos \|<br>\| `santa.serial_number` \| string \| macos \|<br>\| `santa.sip_status` \| integer \| macos \|<br>\| `santa.tags` \| string_array \| macos \|<br>\| `santa.temporary_admin_mode_ends_at` \| datetime \| macos \|<br>\| `santa.temporary_admin_mode_user` \| string \| macos \|<br>\| `santa.temporary_monitor_mode_ends_at` \| datetime \| macos \|<br><br>### sentinelone fields<br><br>\| Field \| Type \| Platforms \|<br>\| --- \| --- \| --- \|<br>\| `sentinelone.account_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.active_protection` \| string_array \| windows, macos, linux \|<br>\| `sentinelone.active_threats` \| integer \| windows, macos, linux \|<br>\| `sentinelone.ad_computer_distinguished_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.ad_computer_member_of` \| string_array \| windows, macos, linux \|<br>\| `sentinelone.ad_last_user_distinguished_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.ad_last_user_member_of` \| string_array \| windows, macos, linux \|<br>\| `sentinelone.ad_mail` \| string \| windows, macos, linux \|<br>\| `sentinelone.ad_user_principal_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.agent_version` \| version \| windows, macos, linux \|<br>\| `sentinelone.allow_remote_shell` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.apps_vulnerability_status` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.cloud_providers` \| json \| windows, macos, linux \|<br>\| `sentinelone.computer_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.console_migration_status` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.core_count` \| integer \| windows, macos, linux \|<br>\| `sentinelone.cpu_count` \| integer \| windows, macos, linux \|<br>\| `sentinelone.cpu_id` \| string \| windows, macos, linux \|<br>\| `sentinelone.detection_state` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.domain` \| string \| windows, macos, linux \|<br>\| `sentinelone.encrypted_applications` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.enrolled` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.external_id` \| string \| windows, macos, linux \|<br>\| `sentinelone.external_ip` \| ip \| windows, macos, linux \|<br>\| `sentinelone.firewall_enabled` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.first_full_mode_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.full_disk_scan_updated_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.group_id` \| string \| windows, macos, linux \|<br>\| `sentinelone.group_ip` \| string \| windows, macos, linux \|<br>\| `sentinelone.group_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.has_containerized_workload` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.in_remote_shell_session` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.infected` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.installer_type` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.is_active` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.is_ad_connector` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.is_decommissioned` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.is_hyper_automate` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.is_pending_uninstall` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.is_uninstalled` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.is_up_to_date` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.last_active_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.last_ip_to_management` \| ip \| windows, macos, linux \|<br>\| `sentinelone.last_logged_in_user_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.last_successful_scan_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.location_enabled` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.location_type` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.locations` \| json \| windows, macos, linux \|<br>\| `sentinelone.machine_sid` \| string \| windows, macos, linux \|<br>\| `sentinelone.machine_type` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.missing_permissions` \| string_array \| windows, macos, linux \|<br>\| `sentinelone.mitigation_mode` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.mitigation_mode_suspicious` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.model_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.network_interfaces` \| json \| windows, macos, linux \|<br>\| `sentinelone.network_quarantine_enabled` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.network_status` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.operational_state` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.operational_state_expires_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.os_arch` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.os_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.os_revision` \| version \| windows, macos, linux \|<br>\| `sentinelone.os_start_time` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.os_type` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.os_up_to_date` \| boolean \| windows, macos \|<br>\| `sentinelone.os_username` \| string \| windows, macos, linux \|<br>\| `sentinelone.protected_containers_count` \| integer \| windows, macos, linux \|<br>\| `sentinelone.protected_pods_count` \| integer \| windows, macos, linux \|<br>\| `sentinelone.protected_tasks_count` \| integer \| windows, macos, linux \|<br>\| `sentinelone.proxy_console` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.proxy_deep_visibility` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.proxy_method` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.proxy_pac_file_usage` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.ranger_status` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.ranger_version` \| version \| windows, macos, linux \|<br>\| `sentinelone.registered_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.remote_profiling_state` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.remote_profiling_state_expires_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.scan_aborted_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.scan_finished_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.scan_started_at` \| datetime \| windows, macos, linux \|<br>\| `sentinelone.scan_status` \| enum_string \| windows, macos, linux \|<br>\| `sentinelone.sentinelone_account_id` \| string \| windows, macos, linux \|<br>\| `sentinelone.sentinelone_id` \| string \| windows, macos, linux \|<br>\| `sentinelone.serial_number` \| string \| windows, macos, linux \|<br>\| `sentinelone.site_id` \| string \| windows, macos, linux \|<br>\| `sentinelone.site_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.storage_name` \| string \| windows, macos, linux \|<br>\| `sentinelone.storage_type` \| string \| windows, macos, linux \|<br>\| `sentinelone.tags` \| json \| windows, macos, linux \|<br>\| `sentinelone.threat_reboot_required` \| boolean \| windows, macos, linux \|<br>\| `sentinelone.total_memory` \| integer \| windows, macos, linux \|<br>\| `sentinelone.user_actions_needed` \| string_array \| windows, macos, linux \|<br>\| `sentinelone.uuid` \| string \| windows, macos, linux \|<br><br>### sophos fields<br><br>\| Field \| Type \| Platforms \|<br>\| --- \| --- \| --- \|<br>\| `sophos.assigned_products` \| json \| windows, macos, linux \|<br>\| `sophos.associated_person_id` \| string \| windows, macos, linux \|<br>\| `sophos.associated_person_name` \| string \| windows, macos, linux \|<br>\| `sophos.associated_person_via_login` \| string \| windows, macos, linux \|<br>\| `sophos.cloned` \| boolean \| windows, macos, linux \|<br>\| `sophos.cloud_instance_id` \| string \| windows, macos, linux \|<br>\| `sophos.cloud_provider` \| enum_string \| windows, macos, linux \|<br>\| `sophos.device_software` \| json \| windows, macos, linux \|<br>\| `sophos.encryption_overall_status` \| enum_string \| windows, macos, linux \|<br>\| `sophos.encryption_volumes` \| json \| windows, macos, linux \|<br>\| `sophos.enrolled` \| boolean \| windows, macos, linux \|<br>\| `sophos.group_hierarchy` \| json \| windows, macos, linux \|<br>\| `sophos.group_id` \| string \| windows, macos, linux \|<br>\| `sophos.group_name` \| string \| windows, macos, linux \|<br>\| `sophos.health_overall` \| enum_string \| windows, macos, linux \|<br>\| `sophos.health_service_details` \| json \| windows, macos, linux \|<br>\| `sophos.health_services_status` \| enum_string \| windows, macos, linux \|<br>\| `sophos.health_threats_status` \| enum_string \| windows, macos, linux \|<br>\| `sophos.hostname` \| string \| windows, macos, linux \|<br>\| `sophos.ipv4_addresses` \| string_array \| windows, macos, linux \|<br>\| `sophos.ipv6_addresses` \| string_array \| windows, macos, linux \|<br>\| `sophos.isolation_admin_isolated` \| boolean \| windows, macos, linux \|<br>\| `sophos.isolation_self_isolated` \| boolean \| windows, macos, linux \|<br>\| `sophos.isolation_status` \| enum_string \| windows, macos, linux \|<br>\| `sophos.last_agent_update_at` \| datetime \| windows, macos, linux \|<br>\| `sophos.last_os_update_at` \| datetime \| windows, macos, linux \|<br>\| `sophos.last_seen_at` \| datetime \| windows, macos, linux \|<br>\| `sophos.lockdown_status` \| enum_string \| windows, macos, linux \|<br>\| `sophos.mac_addresses` \| string_array \| windows, macos, linux \|<br>\| `sophos.online` \| boolean \| windows, macos, linux \|<br>\| `sophos.os_build` \| integer \| windows, macos, linux \|<br>\| `sophos.os_is_server` \| boolean \| windows, macos, linux \|<br>\| `sophos.os_major_version` \| integer \| windows, macos, linux \|<br>\| `sophos.os_minor_version` \| integer \| windows, macos, linux \|<br>\| `sophos.os_name` \| string \| windows, macos, linux \|<br>\| `sophos.os_platform` \| enum_string \| windows, macos, linux \|<br>\| `sophos.os_up_to_date` \| boolean \| macos \|<br>\| `sophos.packages` \| json \| windows, macos, linux \|<br>\| `sophos.serial_number` \| string \| windows, macos, linux \|<br>\| `sophos.sophos_id` \| string \| windows, macos, linux \|<br>\| `sophos.tags` \| json \| windows, macos, linux \|<br>\| `sophos.tamper_protection_enabled` \| boolean \| windows, macos, linux \|<br>\| `sophos.tamper_protection_supported` \| boolean \| windows, macos, linux \|<br>\| `sophos.type` \| enum_string \| windows, macos, linux \||

<h2 id="tocS_PolicyPostureAnd">PolicyPostureAnd</h2>
<!-- backwards compatibility -->
<a id="schemapolicypostureand"></a>
<a id="schema_PolicyPostureAnd"></a>
<a id="tocSpolicypostureand"></a>
<a id="tocspolicypostureand"></a>

```json
{
  "and": [
    {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

Every applicable child expression must hold. Contains no other keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|and|[[PolicyPostureNode](#schemapolicyposturenode)]|true|none|none|

<h2 id="tocS_PaginationMetadata">PaginationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapaginationmetadata"></a>
<a id="schema_PaginationMetadata"></a>
<a id="tocSpaginationmetadata"></a>
<a id="tocspaginationmetadata"></a>

```json
{
  "count": 1,
  "limit": 10,
  "next_page": "string",
  "prev_page": "string"
}
```

Pagination metadata for paginated responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|Total number of matching records|
|limit|integer|true|none|Page size|
|next_page|string \| null|true|none|Cursor to fetch the next page|
|prev_page|string \| null|true|none|Cursor to fetch the previous page|

<h2 id="tocS_OktaAuthProviderResponse">OktaAuthProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoktaauthproviderresponse"></a>
<a id="schema_OktaAuthProviderResponse"></a>
<a id="tocSoktaauthproviderresponse"></a>
<a id="tocsoktaauthproviderresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_id": "0oa1b2c3d4e5EXAMPLE",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": false,
    "is_disabled": false,
    "issuer": "https://example.okta.com",
    "name": "Okta",
    "okta_domain": "example.okta.com",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single Okta Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OktaAuthProvider](#schemaoktaauthprovider)|false|none|Okta Auth Provider|

<h2 id="tocS_SophosPostureProviderResponse">SophosPostureProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemasophospostureproviderresponse"></a>
<a id="schema_SophosPostureProviderResponse"></a>
<a id="tocSsophospostureproviderresponse"></a>
<a id="tocssophospostureproviderresponse"></a>

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "client_id": "string",
    "data_region_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "tenant_id": "string",
    "type": "sophos",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SophosPostureProvider](#schemasophospostureprovider)|false|none|Sophos XDR posture provider|

<h2 id="tocS_string_array no_value provider comparison">string_array no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring_array no_value provider comparison"></a>
<a id="schema_string_array no_value provider comparison"></a>
<a id="tocSstring_array no_value provider comparison"></a>
<a id="tocsstring_array no_value provider comparison"></a>

```json
{
  "field": "defender.machine_tags",
  "op": "is_empty",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string_array field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.machine_tags|
|field|iru.tags|
|field|santa.primary_user_groups|
|field|santa.tags|
|field|sentinelone.active_protection|
|field|sentinelone.ad_computer_member_of|
|field|sentinelone.ad_last_user_member_of|
|field|sentinelone.missing_permissions|
|field|sentinelone.user_actions_needed|
|field|sophos.ipv4_addresses|
|field|sophos.ipv6_addresses|
|field|sophos.mac_addresses|
|op|is_empty|
|op|is_not_empty|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
{
  "actor_email": "admin@example.com",
  "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "actor_name": "Admin User",
  "actor_type": "account_admin_user",
  "attested_at": "1970-01-01T00:00:00Z",
  "attested_cert_fingerprint": "string",
  "attested_cert_issuer": "string",
  "attested_cert_serial": "string",
  "attested_device_serial": "string",
  "attested_device_uuid": "string",
  "attested_mdm_device_id": "string",
  "auth_provider_id": "98776234-1234-5678-9012-345678901234",
  "ip": "1.2.3.4",
  "ip_city": "San Francisco",
  "ip_lat": 37.7749,
  "ip_lon": -122.4194,
  "ip_region": "California",
  "user_agent": "Mozilla/5.0"
}
```

Identifies the actor and request context that initiated an action.

Used to describe the principal behind an audit log entry, an authorized
flow, or any other event surfaced through the API. May be `null` when
the action originated outside the context of a Firezone session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor_email|string \| null|false|none|Email address of the actor, if any.|
|actor_id|string(uuid)|false|none|Identifier of the actor that initiated the action.|
|actor_name|string|false|none|Display name of the actor.|
|actor_type|string|false|none|Type of the actor.|
|attested_at|string(date-time)|false|none|When the device last attested, snapshotted for this subject. Does not imply the current connection attested. Omitted when absent.|
|attested_cert_fingerprint|string|false|none|Certificate fingerprint from the device's last attestation. Omitted when absent.|
|attested_cert_issuer|string(byte)|false|none|Base64-encoded DER X.509 issuer Name from the device's last attestation. Omitted when absent.|
|attested_cert_serial|string|false|none|Certificate serial from the device's last attestation. Omitted when absent.|
|attested_device_serial|string|false|none|Device serial from the device's last attestation. Omitted when absent.|
|attested_device_uuid|string|false|none|Device UUID from the device's last attestation. Omitted when absent.|
|attested_mdm_device_id|string|false|none|MDM device ID from the device's last attestation. Omitted when absent.|
|auth_provider_id|string(uuid) \| null|false|none|Identifier of the authentication provider that authenticated the actor.|
|ip|string \| null|false|none|IP address the action originated from.|
|ip_city|string \| null|false|none|Geo-located city for `ip`, if known.|
|ip_lat|number \| null|false|none|Geo-located latitude for `ip`, if known.|
|ip_lon|number \| null|false|none|Geo-located longitude for `ip`, if known.|
|ip_region|string \| null|false|none|Geo-located region for `ip`, if known.|
|user_agent|string \| null|false|none|User agent of the client that initiated the action.|

#### Enumerated Values

|Property|Value|
|---|---|
|actor_type|account_user|
|actor_type|account_admin_user|
|actor_type|service_account|
|actor_type|api_client|

<h2 id="tocS_IruPostureProviderResponse">IruPostureProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemairupostureproviderresponse"></a>
<a id="schema_IruPostureProviderResponse"></a>
<a id="tocSirupostureproviderresponse"></a>
<a id="tocsirupostureproviderresponse"></a>

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "region": "us",
    "subdomain": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "iru",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IruPostureProvider](#schemairupostureprovider)|false|none|Iru (formerly Kandji) posture provider|

<h2 id="tocS_GatewayProvisionResponse">GatewayProvisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagatewayprovisionresponse"></a>
<a id="schema_GatewayProvisionResponse"></a>
<a id="tocSgatewayprovisionresponse"></a>
<a id="tocsgatewayprovisionresponse"></a>

```json
{
  "data": {
    "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "198.51.100.10",
    "last_seen_remote_ip_location_city": "San Francisco",
    "last_seen_remote_ip_location_lat": 37.7749,
    "last_seen_remote_ip_location_lon": -122.4194,
    "last_seen_remote_ip_location_region": "US-CA",
    "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "vpc-us-east",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "rotated_at": "1970-01-01T00:00:00Z",
    "token": "string"
  }
}
```

Response schema for a newly provisioned Gateway. Includes the one-time token secret - it is not shown again - unless the request set `issue_token` to false.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_string scalar provider comparison">string scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring scalar provider comparison"></a>
<a id="schema_string scalar provider comparison"></a>
<a id="tocSstring scalar provider comparison"></a>
<a id="tocsstring scalar provider comparison"></a>

```json
{
  "field": "defender.computer_dns_name",
  "op": "is",
  "rows": "any",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|is|
|op|is_not|
|op|contains|
|op|does_not_contain|
|op|starts_with|
|op|ends_with|
|rows|any|
|rows|all|

<h2 id="tocS_X509AuthProvider">X509AuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemax509authprovider"></a>
<a id="schema_X509AuthProvider"></a>
<a id="tocSx509authprovider"></a>
<a id="tocsx509authprovider"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "context": "clients_only",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_disabled": true,
  "name": "X.509",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

X.509 Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|context|string|true|none|Context|
|id|string(uuid)|true|none|Provider ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_disabled|boolean|true|none|Whether provider is disabled|
|name|string|true|none|Provider name|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|context|clients_only|

<h2 id="tocS_ActorsResponse">ActorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactorsresponse"></a>
<a id="schema_ActorsResponse"></a>
<a id="tocSactorsresponse"></a>
<a id="tocsactorsresponse"></a>

```json
{
  "data": [
    {
      "allow_email_otp_sign_in": false,
      "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "john.doe@example.com",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2024-01-01T00:00:00Z",
      "is_disabled": false,
      "last_seen_at": "2024-01-15T10:30:00Z",
      "name": "John Doe",
      "type": "account_admin_user",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Actors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Actor](#schemaactor)]|false|none|Actors details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_GoogleAuthProviderResponse">GoogleAuthProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleauthproviderresponse"></a>
<a id="schema_GoogleAuthProviderResponse"></a>
<a id="tocSgoogleauthproviderresponse"></a>
<a id="tocsgoogleauthproviderresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": true,
    "is_disabled": false,
    "issuer": "https://accounts.google.com",
    "name": "Google",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z",
    "workspace_domains": [
      "string"
    ]
  }
}
```

Response schema for single Google Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GoogleAuthProvider](#schemagoogleauthprovider)|false|none|Google Auth Provider|

<h2 id="tocS_ActorUpdateRequest">ActorUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactorupdaterequest"></a>
<a id="schema_ActorUpdateRequest"></a>
<a id="tocSactorupdaterequest"></a>
<a id="tocsactorupdaterequest"></a>

```json
{
  "actor": {
    "allow_email_otp_sign_in": false,
    "email": "joe.user@example.com",
    "is_disabled": false,
    "name": "Joe User",
    "type": "account_user"
  }
}
```

PATCH/PUT body for updating an Actor. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|object|true|none|none|

<h2 id="tocS_float scalar provider comparison">float scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemafloat scalar provider comparison"></a>
<a id="schema_float scalar provider comparison"></a>
<a id="tocSfloat scalar provider comparison"></a>
<a id="tocsfloat scalar provider comparison"></a>

```json
{
  "field": "iru.device_capacity_gb",
  "op": "eq",
  "rows": "any",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|float field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|iru.device_capacity_gb|
|op|eq|
|op|ne|
|op|gt|
|op|gte|
|op|lt|
|op|lte|
|rows|any|
|rows|all|

<h2 id="tocS_string scalar device comparison">string scalar device comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring scalar device comparison"></a>
<a id="schema_string scalar device comparison"></a>
<a id="tocSstring scalar device comparison"></a>
<a id="tocsstring scalar device comparison"></a>

```json
{
  "field": "firezone.device_serial",
  "op": "is",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|is|
|op|is_not|
|op|contains|
|op|does_not_contain|
|op|starts_with|
|op|ends_with|

<h2 id="tocS_MembershipResponse">MembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershipresponse"></a>
<a id="schema_MembershipResponse"></a>
<a id="tocSmembershipresponse"></a>
<a id="tocsmembershipresponse"></a>

```json
{
  "data": {
    "actor_ids": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7",
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

Response schema for Membership Updates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|Memberships|

<h2 id="tocS_ip no_value provider comparison">ip no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaip no_value provider comparison"></a>
<a id="schema_ip no_value provider comparison"></a>
<a id="tocSip no_value provider comparison"></a>
<a id="tocsip no_value provider comparison"></a>

```json
{
  "field": "defender.last_external_ip_address",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|ip field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.last_external_ip_address|
|field|defender.last_ip_address|
|field|santa.last_preflight_ip|
|field|sentinelone.external_ip|
|field|sentinelone.last_ip_to_management|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_datetime no_value provider comparison">datetime no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemadatetime no_value provider comparison"></a>
<a id="schema_datetime no_value provider comparison"></a>
<a id="tocSdatetime no_value provider comparison"></a>
<a id="tocsdatetime no_value provider comparison"></a>

```json
{
  "field": "defender.first_seen_at",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.first_seen_at|
|field|defender.last_seen_at|
|field|intune.android_security_patch_level|
|field|intune.attestation_issued_at|
|field|intune.compliance_grace_period_expiration_at|
|field|intune.eas_activated_at|
|field|intune.enrolled_at|
|field|intune.exchange_last_successful_sync_at|
|field|intune.last_sync_at|
|field|intune.management_certificate_expires_at|
|field|iru.activation_lock_collected_at|
|field|iru.filevault_collected_at|
|field|iru.filevault_key_rotation_scheduled_at|
|field|iru.firewall_collected_at|
|field|iru.first_enrolled_at|
|field|iru.gatekeeper_collected_at|
|field|iru.inventory_collected_at|
|field|iru.last_check_in_at|
|field|iru.last_enrolled_at|
|field|iru.startup_settings_collected_at|
|field|santa.first_seen_at|
|field|santa.last_preflight_at|
|field|santa.last_sync_at|
|field|santa.rule_sync_at|
|field|santa.temporary_admin_mode_ends_at|
|field|santa.temporary_monitor_mode_ends_at|
|field|sentinelone.first_full_mode_at|
|field|sentinelone.full_disk_scan_updated_at|
|field|sentinelone.last_active_at|
|field|sentinelone.last_successful_scan_at|
|field|sentinelone.operational_state_expires_at|
|field|sentinelone.os_start_time|
|field|sentinelone.registered_at|
|field|sentinelone.remote_profiling_state_expires_at|
|field|sentinelone.scan_aborted_at|
|field|sentinelone.scan_finished_at|
|field|sentinelone.scan_started_at|
|field|sophos.last_agent_update_at|
|field|sophos.last_os_update_at|
|field|sophos.last_seen_at|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_MembershipListResponse">MembershipListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershiplistresponse"></a>
<a id="schema_MembershipListResponse"></a>
<a id="tocSmembershiplistresponse"></a>
<a id="tocsmembershiplistresponse"></a>

```json
{
  "data": [
    {
      "email": "john.doe@example.com",
      "id": "7cb89288-1fb3-433e-a522-2d087e45988d",
      "name": "John Doe",
      "type": "account_user"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for Memberships

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Membership](#schemamembership)]|false|none|Membership details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_Actor">Actor</h2>
<!-- backwards compatibility -->
<a id="schemaactor"></a>
<a id="schema_Actor"></a>
<a id="tocSactor"></a>
<a id="tocsactor"></a>

```json
{
  "allow_email_otp_sign_in": false,
  "created_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "disabled_by_directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "john.doe@example.com",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2024-01-01T00:00:00Z",
  "is_disabled": false,
  "last_seen_at": "2024-01-15T10:30:00Z",
  "name": "John Doe",
  "type": "account_admin_user",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

Actor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_email_otp_sign_in|boolean|true|none|Allow Email OTP Sign In|
|created_by_directory_id|string(uuid) \| null|true|none|Directory ID that created this actor|
|disabled_by_directory_id|string(uuid) \| null|true|read-only|Directory ID that disabled this actor because its user is inactive at the identity provider. The directory re-enables the actor when the user is active again. Null when the actor is enabled or was disabled by an admin.|
|email|string \| null|true|none|Actor Email|
|id|string(uuid)|true|none|Actor ID|
|inserted_at|string(date-time)|true|none|When the actor was created|
|is_disabled|boolean|true|none|Whether the actor is disabled|
|last_seen_at|string(date-time) \| null|true|none|Latest time the Actor was active: a Client of theirs connected, they signed in to the admin portal, or one of their API or OAuth tokens was used. Null when none of these was recorded, and always null in a delete response.|
|name|string|true|none|Actor Name|
|type|string|true|none|Actor Type|
|updated_at|string(date-time)|true|none|When the actor was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account_admin_user|
|type|account_user|
|type|api_client|
|type|service_account|

<h2 id="tocS_DeletedGatewayTokensResponse">DeletedGatewayTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedgatewaytokensresponse"></a>
<a id="schema_DeletedGatewayTokensResponse"></a>
<a id="tocSdeletedgatewaytokensresponse"></a>
<a id="tocsdeletedgatewaytokensresponse"></a>

```json
{
  "data": {
    "deleted_count": 5
  }
}
```

Response schema for deleted Gateway Tokens

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_PolicyUpdateParams">PolicyUpdateParams</h2>
<!-- backwards compatibility -->
<a id="schemapolicyupdateparams"></a>
<a id="schema_PolicyUpdateParams"></a>
<a id="tocSpolicyupdateparams"></a>
<a id="tocspolicyupdateparams"></a>

```json
{
  "conditions": [
    {
      "operator": "is_in_cidr",
      "property": "remote_ip",
      "values": [
        "10.0.0.0/8"
      ]
    }
  ],
  "description": "Updated description",
  "flow_log_uploads_enabled": true,
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_disabled": false,
  "postures": {
    "and": [
      {
        "field": "intune.enrolled",
        "op": "is",
        "value": true
      },
      {
        "field": "intune.compliance_state",
        "op": "is",
        "rows": "all",
        "value": "compliant"
      },
      {
        "field": "intune.last_sync_at",
        "op": "within_last",
        "value": "PT24H"
      },
      {
        "or": [
          {
            "field": "firezone.last_seen_version",
            "op": "gte",
            "value": "@latest"
          },
          {
            "not": {
              "field": "firezone.hostname",
              "op": "starts_with",
              "value": "test-"
            }
          }
        ]
      }
    ]
  },
  "require_attestation": true,
  "resource_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Policy attributes accepted when updating a Policy. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[PolicyCondition](#schemapolicycondition)]|false|none|Conditions that must be satisfied for the Policy to grant access|
|description|string \| null|false|none|Policy Description|
|flow_log_uploads_enabled|boolean|false|none|Whether flow logs are reported for connections authorized by this Policy. Always false for Internet Resource policies.|
|group_id|string(uuid)|false|none|Group ID|
|is_disabled|boolean|false|none|Whether the Policy is disabled. A disabled Policy grants no access but is otherwise retained.|
|postures|[PolicyPostureNode](#schemapolicyposturenode) \| object \| null|false|none|Replaces the entire device posture expression; it is not merged. Omit to preserve existing postures, or set to null to remove them. A non-null expression requires the account's device_posture entitlement (Enterprise); otherwise returns HTTP 403. Clearing postures remains allowed after downgrade. Conditions and postures must both hold. Changing postures revokes this policy's active authorizations and interrupts affected connections until they are reauthorized. See PolicyPostureNode for fields, operators, platform behavior, and limits.|
|require_attestation|boolean|false|none|Whether the Client must present a valid X.509 certificate from one of the account's trust anchors on its current connection. Setting it to true returns 422 when the account has no trust anchors.|
|resource_id|string(uuid)|false|none|Resource ID|

<h2 id="tocS_ClientTokenShowResponse">ClientTokenShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokenshowresponse"></a>
<a id="schema_ClientTokenShowResponse"></a>
<a id="tocSclienttokenshowresponse"></a>
<a id="tocsclienttokenshowresponse"></a>

```json
{
  "data": {
    "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "expires_at": "2025-01-15T12:34:56.789Z",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-15T12:34:56.789Z",
    "updated_at": "2025-01-15T12:34:56.789Z"
  }
}
```

Response schema for Client Token metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ClientToken](#schemaclienttoken)|false|none|Client Token metadata|

<h2 id="tocS_DefenderDevice">DefenderDevice</h2>
<!-- backwards compatibility -->
<a id="schemadefenderdevice"></a>
<a id="schema_DefenderDevice"></a>
<a id="tocSdefenderdevice"></a>
<a id="tocsdefenderdevice"></a>

```json
{
  "last_seen_at": "1970-01-01T00:00:00Z",
  "machine_tags": [
    "string"
  ],
  "managed_by": "string",
  "vm_resource_id": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "os_platform": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "last_ip_address": "string",
  "device_value": "string",
  "inserted_at": "1970-01-01T00:00:00Z",
  "os_architecture": "string",
  "rbac_group_name": "string",
  "exposure_level": "string",
  "defender_id": "string",
  "entra_joined": true,
  "exclusion_reason": "string",
  "vm_id": "string",
  "vm_cloud_provider": "string",
  "os_processor": "string",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "entra_device_id": "string",
  "os_build": 0,
  "managed_by_status": "string",
  "is_excluded": true,
  "vm_subscription_id": "string",
  "last_external_ip_address": "string",
  "health_status": "string",
  "risk_score": "string",
  "is_potential_duplication": true,
  "agent_version": "string",
  "rbac_group_id": 0,
  "version": "string",
  "ip_addresses": [
    {}
  ],
  "onboarding_status": "string",
  "computer_dns_name": "string",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Device synced from Microsoft Defender for Endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_seen_at|string(date-time) \| null|true|none|none|
|machine_tags|[string]|true|none|none|
|managed_by|string \| null|true|none|none|
|vm_resource_id|string \| null|true|none|none|
|updated_at|string(date-time) \| null|true|none|none|
|os_platform|string \| null|true|none|none|
|synced_at|string(date-time)|true|none|none|
|last_ip_address|string \| null|true|none|none|
|device_value|string \| null|true|none|none|
|inserted_at|string(date-time) \| null|true|none|none|
|os_architecture|string \| null|true|none|none|
|rbac_group_name|string \| null|true|none|none|
|exposure_level|string \| null|true|none|none|
|defender_id|string|true|none|none|
|entra_joined|boolean \| null|true|none|none|
|exclusion_reason|string \| null|true|none|none|
|vm_id|string \| null|true|none|none|
|vm_cloud_provider|string \| null|true|none|none|
|os_processor|string \| null|true|none|none|
|account_id|string(uuid)|true|none|none|
|entra_device_id|string \| null|true|none|none|
|os_build|integer \| null|true|none|none|
|managed_by_status|string \| null|true|none|none|
|is_excluded|boolean \| null|true|none|none|
|vm_subscription_id|string \| null|true|none|none|
|last_external_ip_address|string \| null|true|none|none|
|health_status|string \| null|true|none|none|
|risk_score|string \| null|true|none|none|
|is_potential_duplication|boolean \| null|true|none|none|
|agent_version|string \| null|true|none|none|
|rbac_group_id|integer \| null|true|none|none|
|version|string \| null|true|none|none|
|ip_addresses|[object]|true|none|none|
|onboarding_status|string \| null|true|none|none|
|computer_dns_name|string \| null|true|none|none|
|first_seen_at|string(date-time) \| null|true|none|none|
|posture_provider_id|string(uuid)|true|none|none|

<h2 id="tocS_ClientTokenWithSecret">ClientTokenWithSecret</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokenwithsecret"></a>
<a id="schema_ClientTokenWithSecret"></a>
<a id="tocSclienttokenwithsecret"></a>
<a id="tocsclienttokenwithsecret"></a>

```json
{
  "actor_id": "43a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "expires_at": "2025-01-15T12:34:56.789Z",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-15T12:34:56.789Z",
  "token": "secret-token-here",
  "updated_at": "2025-01-15T12:34:56.789Z"
}
```

Client Token as returned when it is created, including the encoded secret. The secret is shown once and cannot be retrieved later.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor_id|string(uuid)|true|none|Actor ID|
|expires_at|string(date-time)|true|none|Expiration|
|id|string(uuid)|true|none|Client Token ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|token|string|true|none|Encoded token secret|
|updated_at|string(date-time)|true|none|Update timestamp|

<h2 id="tocS_SentinelOneDevice">SentinelOneDevice</h2>
<!-- backwards compatibility -->
<a id="schemasentinelonedevice"></a>
<a id="schema_SentinelOneDevice"></a>
<a id="tocSsentinelonedevice"></a>
<a id="tocssentinelonedevice"></a>

```json
{
  "last_logged_in_user_name": "string",
  "sentinelone_id": "string",
  "user_actions_needed": [
    "string"
  ],
  "operational_state": "string",
  "os_name": "string",
  "os_arch": "string",
  "remote_profiling_state": "string",
  "has_containerized_workload": true,
  "firewall_enabled": true,
  "proxy_console": true,
  "model_name": "string",
  "infected": true,
  "proxy_deep_visibility": true,
  "console_migration_status": "string",
  "is_hyper_automate": true,
  "network_quarantine_enabled": true,
  "scan_finished_at": "1970-01-01T00:00:00Z",
  "is_active": true,
  "external_id": "string",
  "last_successful_scan_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "os_username": "string",
  "active_protection": [
    "string"
  ],
  "threat_reboot_required": true,
  "synced_at": "1970-01-01T00:00:00Z",
  "inserted_at": "1970-01-01T00:00:00Z",
  "location_enabled": true,
  "group_id": "string",
  "site_id": "string",
  "storage_name": "string",
  "machine_sid": "string",
  "remote_profiling_state_expires_at": "1970-01-01T00:00:00Z",
  "group_name": "string",
  "allow_remote_shell": true,
  "tags": [
    {}
  ],
  "protected_pods_count": 0,
  "os_type": "string",
  "proxy_pac_file_usage": true,
  "serial_number": "string",
  "ad_computer_member_of": [
    "string"
  ],
  "locations": [
    {}
  ],
  "installer_type": "string",
  "last_active_at": "1970-01-01T00:00:00Z",
  "is_ad_connector": true,
  "ad_user_principal_name": "string",
  "core_count": 0,
  "detection_state": "string",
  "active_threats": 0,
  "is_decommissioned": true,
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cpu_count": 0,
  "group_ip": "string",
  "protected_tasks_count": 0,
  "storage_type": "string",
  "account_name": "string",
  "ranger_status": "string",
  "scan_status": "string",
  "total_memory": 0,
  "encrypted_applications": true,
  "ad_last_user_distinguished_name": "string",
  "missing_permissions": [
    "string"
  ],
  "is_uninstalled": true,
  "computer_name": "string",
  "scan_aborted_at": "1970-01-01T00:00:00Z",
  "in_remote_shell_session": true,
  "first_full_mode_at": "1970-01-01T00:00:00Z",
  "ad_last_user_member_of": [
    "string"
  ],
  "ad_mail": "string",
  "external_ip": "string",
  "is_pending_uninstall": true,
  "sentinelone_account_id": "string",
  "last_ip_to_management": "string",
  "proxy_method": "string",
  "network_status": "string",
  "os_revision": "string",
  "agent_version": "string",
  "registered_at": "1970-01-01T00:00:00Z",
  "is_up_to_date": true,
  "site_name": "string",
  "apps_vulnerability_status": "string",
  "domain": "string",
  "ad_computer_distinguished_name": "string",
  "os_start_time": "1970-01-01T00:00:00Z",
  "mitigation_mode_suspicious": "string",
  "machine_type": "string",
  "uuid": "string",
  "ranger_version": "string",
  "mitigation_mode": "string",
  "operational_state_expires_at": "1970-01-01T00:00:00Z",
  "network_interfaces": [
    {}
  ],
  "full_disk_scan_updated_at": "1970-01-01T00:00:00Z",
  "cloud_providers": {},
  "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scan_started_at": "1970-01-01T00:00:00Z",
  "protected_containers_count": 0,
  "cpu_id": "string",
  "location_type": "string"
}
```

Endpoint agent synced from SentinelOne

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_logged_in_user_name|string \| null|true|none|none|
|sentinelone_id|string \| null|true|none|none|
|user_actions_needed|[string]|true|none|none|
|operational_state|string \| null|true|none|none|
|os_name|string \| null|true|none|none|
|os_arch|string \| null|true|none|none|
|remote_profiling_state|string \| null|true|none|none|
|has_containerized_workload|boolean \| null|true|none|none|
|firewall_enabled|boolean \| null|true|none|none|
|proxy_console|boolean \| null|true|none|none|
|model_name|string \| null|true|none|none|
|infected|boolean \| null|true|none|none|
|proxy_deep_visibility|boolean \| null|true|none|none|
|console_migration_status|string \| null|true|none|none|
|is_hyper_automate|boolean \| null|true|none|none|
|network_quarantine_enabled|boolean \| null|true|none|none|
|scan_finished_at|string(date-time) \| null|true|none|none|
|is_active|boolean \| null|true|none|none|
|external_id|string \| null|true|none|none|
|last_successful_scan_at|string(date-time) \| null|true|none|none|
|updated_at|string(date-time) \| null|true|none|none|
|os_username|string \| null|true|none|none|
|active_protection|[string]|true|none|none|
|threat_reboot_required|boolean \| null|true|none|none|
|synced_at|string(date-time)|true|none|none|
|inserted_at|string(date-time) \| null|true|none|none|
|location_enabled|boolean \| null|true|none|none|
|group_id|string \| null|true|none|none|
|site_id|string \| null|true|none|none|
|storage_name|string \| null|true|none|none|
|machine_sid|string \| null|true|none|none|
|remote_profiling_state_expires_at|string(date-time) \| null|true|none|none|
|group_name|string \| null|true|none|none|
|allow_remote_shell|boolean \| null|true|none|none|
|tags|[object]|true|none|none|
|protected_pods_count|integer \| null|true|none|none|
|os_type|string \| null|true|none|none|
|proxy_pac_file_usage|boolean \| null|true|none|none|
|serial_number|string \| null|true|none|none|
|ad_computer_member_of|[string]|true|none|none|
|locations|[object]|true|none|none|
|installer_type|string \| null|true|none|none|
|last_active_at|string(date-time) \| null|true|none|none|
|is_ad_connector|boolean \| null|true|none|none|
|ad_user_principal_name|string \| null|true|none|none|
|core_count|integer \| null|true|none|none|
|detection_state|string \| null|true|none|none|
|active_threats|integer \| null|true|none|none|
|is_decommissioned|boolean \| null|true|none|none|
|account_id|string(uuid)|true|none|none|
|cpu_count|integer \| null|true|none|none|
|group_ip|string \| null|true|none|none|
|protected_tasks_count|integer \| null|true|none|none|
|storage_type|string \| null|true|none|none|
|account_name|string \| null|true|none|none|
|ranger_status|string \| null|true|none|none|
|scan_status|string \| null|true|none|none|
|total_memory|integer \| null|true|none|none|
|encrypted_applications|boolean \| null|true|none|none|
|ad_last_user_distinguished_name|string \| null|true|none|none|
|missing_permissions|[string]|true|none|none|
|is_uninstalled|boolean \| null|true|none|none|
|computer_name|string \| null|true|none|none|
|scan_aborted_at|string(date-time) \| null|true|none|none|
|in_remote_shell_session|boolean \| null|true|none|none|
|first_full_mode_at|string(date-time) \| null|true|none|none|
|ad_last_user_member_of|[string]|true|none|none|
|ad_mail|string \| null|true|none|none|
|external_ip|string \| null|true|none|none|
|is_pending_uninstall|boolean \| null|true|none|none|
|sentinelone_account_id|string \| null|true|none|none|
|last_ip_to_management|string \| null|true|none|none|
|proxy_method|string \| null|true|none|none|
|network_status|string \| null|true|none|none|
|os_revision|string \| null|true|none|none|
|agent_version|string \| null|true|none|none|
|registered_at|string(date-time) \| null|true|none|none|
|is_up_to_date|boolean \| null|true|none|none|
|site_name|string \| null|true|none|none|
|apps_vulnerability_status|string \| null|true|none|none|
|domain|string \| null|true|none|none|
|ad_computer_distinguished_name|string \| null|true|none|none|
|os_start_time|string(date-time) \| null|true|none|none|
|mitigation_mode_suspicious|string \| null|true|none|none|
|machine_type|string \| null|true|none|none|
|uuid|string|true|none|none|
|ranger_version|string \| null|true|none|none|
|mitigation_mode|string \| null|true|none|none|
|operational_state_expires_at|string(date-time) \| null|true|none|none|
|network_interfaces|[object]|true|none|none|
|full_disk_scan_updated_at|string(date-time) \| null|true|none|none|
|cloud_providers|object \| null|true|none|none|
|posture_provider_id|string(uuid)|true|none|none|
|scan_started_at|string(date-time) \| null|true|none|none|
|protected_containers_count|integer \| null|true|none|none|
|cpu_id|string \| null|true|none|none|
|location_type|string \| null|true|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "address": "10.0.0.10",
  "address_description": "Production Database",
  "device_membership_criteria": {
    "device": {
      "field": "actor_id",
      "op": "eq",
      "value": {
        "subject": "actor_id"
      }
    }
  },
  "filters": [
    {
      "ports": [
        "5432"
      ],
      "protocol": "tcp"
    }
  ],
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "ip_stack": "ipv4_only",
  "name": "Prod DB",
  "site_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
  "type": "ip"
}
```

Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|true|none|Resource address. Null for `device_pool` Resources.|
|address_description|string \| null|true|none|Resource address description|
|device_membership_criteria|[DeviceMembershipCriteria](#schemadevicemembershipcriteria)|false|none|Who a `device_pool` Resource holds. Required for a device pool, absent for every<br>other Resource type.<br><br>The object has exactly one key, naming where the field lives: `device` is the<br>Client row itself, and `actor_group` is a group the Client's owner belongs to.<br>The value is one rule comparing a field against either a literal or an attribute<br>of the Actor asking for access. More sources can be added later without changing<br>the rules already stored.<br><br>The four rules the API accepts, and who each one holds:<br><br>    {"device": {"field": "id", "op": "in", "value": ["<client id>", ...]}}<br>    {"device": {"field": "actor_id", "op": "eq", "value": {"subject": "actor_id"}}}<br>    {"device": {"field": "account_id", "op": "eq", "value": {"subject": "account_id"}}}<br>    {"actor_group": {"field": "id", "op": "eq", "value": "<group id>"}}<br><br>In order: exactly the Clients named, the asking Actor's own Clients, every Client<br>in the Account, and the Clients of every Actor in one Group.<br><br>Editing the list of Clients the first rule names drops the connections to the<br>Clients removed and leaves every other connection through the pool alone.<br><br>Every other change to this field is a breaking update, because any Client can move<br>in or out of the pool: every active connection through the pool is dropped, and<br>Clients reconnect to the members they may still reach.<br><br>Clients older than the device-pool protocol only understand a pool that names its<br>members, so they are sent the first rule and never the other three.<br>|
|filters|[[ResourceFilter](#schemaresourcefilter)]|true|none|Traffic filters restricting the protocols and ports the Resource exposes|
|id|string(uuid)|true|none|Resource ID|
|ip_stack|string|false|none|IP stack type. Only supported for DNS resources.|
|name|string|true|none|Resource name|
|site_id|string(uuid)|false|none|Site to connect the Resource to. Required for all types except device pools.|
|type|string|true|none|Resource type. A `device_pool` has no `address` and no `site_id`; who it holds is `device_membership_criteria`.|

#### Enumerated Values

|Property|Value|
|---|---|
|ip_stack|ipv4_only|
|ip_stack|ipv6_only|
|ip_stack|dual|
|type|cidr|
|type|ip|
|type|dns|
|type|internet|
|type|device_pool|

<h2 id="tocS_datetime scalar device comparison">datetime scalar device comparison</h2>
<!-- backwards compatibility -->
<a id="schemadatetime scalar device comparison"></a>
<a id="schema_datetime scalar device comparison"></a>
<a id="tocSdatetime scalar device comparison"></a>
<a id="tocsdatetime scalar device comparison"></a>

```json
{
  "field": "firezone.last_attested_at",
  "op": "before",
  "value": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.last_attested_at|
|op|before|
|op|after|

<h2 id="tocS_X509AuthProviderResponse">X509AuthProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemax509authproviderresponse"></a>
<a id="schema_X509AuthProviderResponse"></a>
<a id="tocSx509authproviderresponse"></a>
<a id="tocsx509authproviderresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "context": "clients_only",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": true,
    "name": "X.509",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for a single X.509 Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[X509AuthProvider](#schemax509authprovider)|false|none|X.509 Auth Provider|

<h2 id="tocS_ClientTokenCreate">ClientTokenCreate</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokencreate"></a>
<a id="schema_ClientTokenCreate"></a>
<a id="tocSclienttokencreate"></a>
<a id="tocsclienttokencreate"></a>

```json
{
  "expires_at": "2025-01-15T12:34:56.789Z"
}
```

Client Token attributes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|true|none|Expiration|

<h2 id="tocS_DefenderPostureProviderListResponse">DefenderPostureProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefenderpostureproviderlistresponse"></a>
<a id="schema_DefenderPostureProviderListResponse"></a>
<a id="tocSdefenderpostureproviderlistresponse"></a>
<a id="tocsdefenderpostureproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "tenant_id": "string",
      "type": "defender",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DefenderPostureProvider](#schemadefenderpostureprovider)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_DeviceMembershipListedDevices">DeviceMembershipListedDevices</h2>
<!-- backwards compatibility -->
<a id="schemadevicemembershiplisteddevices"></a>
<a id="schema_DeviceMembershipListedDevices"></a>
<a id="tocSdevicemembershiplisteddevices"></a>
<a id="tocsdevicemembershiplisteddevices"></a>

```json
{
  "device": {
    "field": "id",
    "op": "in",
    "value": [
      "7cb89288-1fb3-433e-a522-2d087e45988d",
      "cc9f561a-444d-4083-ab38-0abc6cf2314c"
    ]
  }
}
```

Exactly the Clients named

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|object|true|none|none|

<h2 id="tocS_EntraDirectory">EntraDirectory</h2>
<!-- backwards compatibility -->
<a id="schemaentradirectory"></a>
<a id="schema_EntraDirectory"></a>
<a id="tocSentradirectory"></a>
<a id="tocsentradirectory"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "disabled_reason": "string",
  "email_field": "userPrincipalName",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_disabled": false,
  "name": "Entra",
  "sync_all_groups": false,
  "synced_at": "2025-01-15T10:30:00Z",
  "tenant_id": "12345678-1234-1234-1234-123456789012",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

Entra Directory

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|disabled_reason|string \| null|true|none|Reason for disabling|
|email_field|string|true|none|Graph API user field to use as email|
|error_message|string \| null|true|none|Last error message|
|errored_at|string(date-time) \| null|true|none|Last error timestamp|
|id|string(uuid)|true|none|Directory ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_disabled|boolean|true|none|Whether directory is disabled|
|name|string|true|none|Directory name|
|sync_all_groups|boolean|true|none|Sync all groups|
|synced_at|string(date-time) \| null|true|none|Last sync timestamp|
|tenant_id|string|true|none|Microsoft Entra tenant ID|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|email_field|mail|
|email_field|userPrincipalName|

<h2 id="tocS_LogsResponse">LogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalogsresponse"></a>
<a id="schema_LogsResponse"></a>
<a id="tocSlogsresponse"></a>
<a id="tocslogsresponse"></a>

```json
{
  "data": [
    {
      "after": {
        "name": "Jane Smith"
      },
      "before": {
        "name": "Jane Doe"
      },
      "log_id": "c00060db0c2c8eb400000000",
      "object": "actors",
      "operation": "update",
      "subject": null,
      "timestamp": "2026-05-26T12:34:56.789Z",
      "type": "change"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 50,
    "next_page": null,
    "prev_page": null
  }
}
```

Response schema for a page of Log entries.

Entries are returned most recent first. Each page contains at most 100
entries (50 by default); use the `metadata.next_page` cursor to fetch
the following page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Log](#schemalog)]|false|none|Log entries for the requested window.|
|metadata|object|false|none|Pagination metadata|

<h2 id="tocS_enum_string no_value provider comparison">enum_string no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaenum_string no_value provider comparison"></a>
<a id="schema_enum_string no_value provider comparison"></a>
<a id="tocSenum_string no_value provider comparison"></a>
<a id="tocsenum_string no_value provider comparison"></a>

```json
{
  "field": "defender.device_value",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_SentinelOnePostureProviderListResponse">SentinelOnePostureProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasentinelonepostureproviderlistresponse"></a>
<a id="schema_SentinelOnePostureProviderListResponse"></a>
<a id="tocSsentinelonepostureproviderlistresponse"></a>
<a id="tocssentinelonepostureproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "management_url": "http://example.com",
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "sentinelone",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SentinelOnePostureProvider](#schemasentinelonepostureprovider)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_PoolMemberResponse">PoolMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemapoolmemberresponse"></a>
<a id="schema_PoolMemberResponse"></a>
<a id="tocSpoolmemberresponse"></a>
<a id="tocspoolmemberresponse"></a>

```json
{
  "data": {
    "device_ids": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7",
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

Response schema for Pool Member updates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|Pool members|

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
  "created_at": "2025-01-01T00:00:00Z",
  "device_serial": "GCCFX0DBQ6L5",
  "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
  "firebase_installation_id": "string",
  "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
  "hostname": "johns-macbook.example.com",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "identifier_for_vendor": "string",
  "ipv4": "100.64.0.1",
  "ipv6": "fd00:2021:1111::1",
  "last_attested_at": "2025-01-01T00:00:00Z",
  "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
  "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
  "last_attested_device_serial": "GCCFX0DBQ6L5",
  "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
  "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
  "last_seen_at": "2025-01-01T00:00:00Z",
  "last_seen_remote_ip": "203.0.113.10",
  "last_seen_remote_ip_location_city": "New York",
  "last_seen_remote_ip_location_lat": 40.7128,
  "last_seen_remote_ip_location_lon": -74.006,
  "last_seen_remote_ip_location_region": "US",
  "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
  "last_seen_version": "1.5.0",
  "name": "John's Macbook Air",
  "online": true,
  "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
  "slug": "johns-macbook-air",
  "updated_at": "2025-01-01T00:00:00Z",
  "verified_at": "2025-01-01T00:00:00Z"
}
```

Client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor_id|string(uuid)|true|none|Actor ID|
|created_at|string(date-time)|true|none|Client creation timestamp|
|device_serial|string \| null|true|none|Device manufacturer serial number (unavailable for mobile devices)|
|device_uuid|string \| null|true|none|Device manufacturer UUID (unavailable for mobile devices)|
|firebase_installation_id|string \| null|true|none|Firebase installation ID (Android only)|
|firezone_id|string \| null|true|none|Identifier the Client reports for itself. Null for a Client whose identity comes from an MDM-issued certificate, since a self-reported value could otherwise be used to claim another Client's record.|
|hostname|string \| null|true|none|Client hostname|
|id|string(uuid)|true|none|Client ID|
|identifier_for_vendor|string \| null|true|none|App installation ID (iOS only)|
|ipv4|string|true|none|Tunnel IPv4 Address of Client|
|ipv6|string|true|none|Tunnel IPv6 Address of Client|
|last_attested_at|string(date-time) \| null|true|read-only|When the device last proved possession of an MDM-provisioned client certificate|
|last_attested_cert_fingerprint|string \| null|true|read-only|SHA-256 fingerprint of the client certificate used for device verification|
|last_attested_cert_serial|string \| null|true|read-only|Serial number of the client certificate used for device verification|
|last_attested_device_serial|string \| null|true|read-only|Device serial number attested by an MDM-provisioned client certificate|
|last_attested_device_uuid|string \| null|true|read-only|Device UUID attested by an MDM-provisioned client certificate|
|last_attested_mdm_device_id|string \| null|true|read-only|MDM device ID attested by an MDM-provisioned client certificate|
|last_seen_at|string(date-time) \| null|true|none|When the latest connection started. It is not updated while the Client stays connected, so check `online` too. Every Client has connected at least once, when it was created. Null when the Client has not connected since this field started to be recorded in February 2026.|
|last_seen_remote_ip|string \| null|true|none|Remote IP from the latest session|
|last_seen_remote_ip_location_city|string \| null|true|none|Remote IP city from the latest session|
|last_seen_remote_ip_location_lat|number \| null|true|none|Remote IP latitude from the latest session|
|last_seen_remote_ip_location_lon|number \| null|true|none|Remote IP longitude from the latest session|
|last_seen_remote_ip_location_region|string \| null|true|none|Remote IP region from the latest session|
|last_seen_user_agent|string \| null|true|none|User agent from the latest session|
|last_seen_version|string \| null|true|none|Client version from the latest session|
|name|string|true|none|Client Name|
|online|boolean|true|none|Online status of Client|
|public_key|string \| null|true|none|WireGuard public key from the latest session|
|slug|string \| null|true|none|DNS label the Client is reached at under `firezone.network`, unique within the Account. Null until the Client connects once.|
|updated_at|string(date-time)|true|none|Client update timestamp|
|verified_at|string(date-time) \| null|true|none|Client verification timestamp|

<h2 id="tocS_SantaDeviceListResponse">SantaDeviceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasantadevicelistresponse"></a>
<a id="schema_SantaDeviceListResponse"></a>
<a id="tocSsantadevicelistresponse"></a>
<a id="tocssantadevicelistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "configured_client_mode": "string",
      "first_seen_at": "1970-01-01T00:00:00Z",
      "hostname": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "last_preflight_at": "1970-01-01T00:00:00Z",
      "last_preflight_ip": "string",
      "last_seen_client_mode": "string",
      "last_sync_at": "1970-01-01T00:00:00Z",
      "machine_model": "string",
      "os_build": "string",
      "os_type": "string",
      "os_version": "string",
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "primary_user": "string",
      "primary_user_groups": [
        "string"
      ],
      "rule_sync_at": "1970-01-01T00:00:00Z",
      "santa_id": "string",
      "santa_version": "string",
      "santanetd_version": "string",
      "serial_number": "string",
      "sip_status": 0,
      "synced_at": "1970-01-01T00:00:00Z",
      "tags": [
        "string"
      ],
      "temporary_admin_mode_ends_at": "1970-01-01T00:00:00Z",
      "temporary_admin_mode_user": "string",
      "temporary_monitor_mode_ends_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SantaDevice](#schemasantadevice)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_PolicyPostureOr">PolicyPostureOr</h2>
<!-- backwards compatibility -->
<a id="schemapolicypostureor"></a>
<a id="schema_PolicyPostureOr"></a>
<a id="tocSpolicypostureor"></a>
<a id="tocspolicypostureor"></a>

```json
{
  "or": [
    {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

At least one applicable child expression must hold. Contains no other keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|or|[[PolicyPostureNode](#schemapolicyposturenode)]|true|none|none|

<h2 id="tocS_SophosDeviceResponse">SophosDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasophosdeviceresponse"></a>
<a id="schema_SophosDeviceResponse"></a>
<a id="tocSsophosdeviceresponse"></a>
<a id="tocssophosdeviceresponse"></a>

```json
{
  "data": {
    "mac_addresses": [
      "string"
    ],
    "os_name": "string",
    "last_seen_at": "1970-01-01T00:00:00Z",
    "tamper_protection_supported": true,
    "last_agent_update_at": "1970-01-01T00:00:00Z",
    "os_minor_version": 0,
    "associated_person_via_login": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "os_platform": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "inserted_at": "1970-01-01T00:00:00Z",
    "ipv6_addresses": [
      "string"
    ],
    "sophos_tenant_id": "string",
    "group_id": "string",
    "group_name": "string",
    "tags": [
      {}
    ],
    "serial_number": "string",
    "isolation_admin_isolated": true,
    "group_hierarchy": [
      {}
    ],
    "health_threats_status": "string",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "encryption_volumes": [
      {}
    ],
    "type": "string",
    "cloud_instance_id": "string",
    "associated_person_id": "string",
    "last_os_update_at": "1970-01-01T00:00:00Z",
    "encryption_overall_status": "string",
    "associated_person_name": "string",
    "health_overall": "string",
    "assigned_products": [
      {}
    ],
    "cloud_provider": "string",
    "packages": {},
    "os_build": 0,
    "os_is_server": true,
    "health_services_status": "string",
    "isolation_status": "string",
    "device_software": {},
    "cloned": true,
    "lockdown_status": "string",
    "ipv4_addresses": [
      "string"
    ],
    "health_service_details": [
      {}
    ],
    "tamper_protection_enabled": true,
    "online": true,
    "sophos_id": "string",
    "isolation_self_isolated": true,
    "os_major_version": 0,
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hostname": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SophosDevice](#schemasophosdevice)|false|none|Endpoint synced from Sophos Central|

<h2 id="tocS_SophosPostureProviderListResponse">SophosPostureProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasophospostureproviderlistresponse"></a>
<a id="schema_SophosPostureProviderListResponse"></a>
<a id="tocSsophospostureproviderlistresponse"></a>
<a id="tocssophospostureproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "client_id": "string",
      "data_region_url": "http://example.com",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "tenant_id": "string",
      "type": "sophos",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SophosPostureProvider](#schemasophospostureprovider)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_string regex device comparison">string regex device comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring regex device comparison"></a>
<a id="schema_string regex device comparison"></a>
<a id="tocSstring regex device comparison"></a>
<a id="tocsstring regex device comparison"></a>

```json
{
  "field": "firezone.device_serial",
  "op": "matches",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|Regular expression; at most 256 bytes|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|matches|
|op|does_not_match|

<h2 id="tocS_DefenderDeviceResponse">DefenderDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefenderdeviceresponse"></a>
<a id="schema_DefenderDeviceResponse"></a>
<a id="tocSdefenderdeviceresponse"></a>
<a id="tocsdefenderdeviceresponse"></a>

```json
{
  "data": {
    "last_seen_at": "1970-01-01T00:00:00Z",
    "machine_tags": [
      "string"
    ],
    "managed_by": "string",
    "vm_resource_id": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "os_platform": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "last_ip_address": "string",
    "device_value": "string",
    "inserted_at": "1970-01-01T00:00:00Z",
    "os_architecture": "string",
    "rbac_group_name": "string",
    "exposure_level": "string",
    "defender_id": "string",
    "entra_joined": true,
    "exclusion_reason": "string",
    "vm_id": "string",
    "vm_cloud_provider": "string",
    "os_processor": "string",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entra_device_id": "string",
    "os_build": 0,
    "managed_by_status": "string",
    "is_excluded": true,
    "vm_subscription_id": "string",
    "last_external_ip_address": "string",
    "health_status": "string",
    "risk_score": "string",
    "is_potential_duplication": true,
    "agent_version": "string",
    "rbac_group_id": 0,
    "version": "string",
    "ip_addresses": [
      {}
    ],
    "onboarding_status": "string",
    "computer_dns_name": "string",
    "first_seen_at": "1970-01-01T00:00:00Z",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DefenderDevice](#schemadefenderdevice)|false|none|Device synced from Microsoft Defender for Endpoint|

<h2 id="tocS_EmailOTPAuthProviderResponse">EmailOTPAuthProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemailotpauthproviderresponse"></a>
<a id="schema_EmailOTPAuthProviderResponse"></a>
<a id="tocSemailotpauthproviderresponse"></a>
<a id="tocsemailotpauthproviderresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_disabled": false,
    "issuer": "firezone",
    "name": "Email OTP",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single Email OTP Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EmailOTPAuthProvider](#schemaemailotpauthprovider)|false|none|Email OTP Auth Provider|

<h2 id="tocS_EntraDirectoryListResponse">EntraDirectoryListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentradirectorylistresponse"></a>
<a id="schema_EntraDirectoryListResponse"></a>
<a id="tocSentradirectorylistresponse"></a>
<a id="tocsentradirectorylistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "disabled_reason": "string",
      "email_field": "userPrincipalName",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "name": "Entra",
      "sync_all_groups": false,
      "synced_at": "2025-01-15T10:30:00Z",
      "tenant_id": "12345678-1234-1234-1234-123456789012",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Entra Directories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EntraDirectory](#schemaentradirectory)]|false|none|Entra Directory details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_IntunePostureProvider">IntunePostureProvider</h2>
<!-- backwards compatibility -->
<a id="schemaintunepostureprovider"></a>
<a id="schema_IntunePostureProvider"></a>
<a id="tocSintunepostureprovider"></a>
<a id="tocsintunepostureprovider"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "disabled_reason": "string",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "inserted_at": "1970-01-01T00:00:00Z",
  "is_disabled": true,
  "is_verified": true,
  "name": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "tenant_id": "string",
  "type": "intune",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Microsoft Intune posture provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|disabled_reason|string \| null|true|none|none|
|error_message|string \| null|true|none|none|
|errored_at|string(date-time) \| null|true|none|none|
|id|string(uuid)|true|none|none|
|inserted_at|string(date-time)|true|none|none|
|is_disabled|boolean|true|none|none|
|is_verified|boolean|true|none|none|
|name|string|true|none|none|
|synced_at|string(date-time) \| null|true|none|none|
|tenant_id|string|true|none|none|
|type|string|true|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|intune|

<h2 id="tocS_PolicyUpdateRequest">PolicyUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapolicyupdaterequest"></a>
<a id="schema_PolicyUpdateRequest"></a>
<a id="tocSpolicyupdaterequest"></a>
<a id="tocspolicyupdaterequest"></a>

```json
{
  "policy": {
    "conditions": [
      {
        "operator": "is_in_cidr",
        "property": "remote_ip",
        "values": [
          "10.0.0.0/8"
        ]
      }
    ],
    "description": "Updated description",
    "flow_log_uploads_enabled": true,
    "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "is_disabled": false,
    "postures": {
      "and": [
        {
          "field": "intune.enrolled",
          "op": "is",
          "value": true
        },
        {
          "field": "intune.compliance_state",
          "op": "is",
          "rows": "all",
          "value": "compliant"
        },
        {
          "field": "intune.last_sync_at",
          "op": "within_last",
          "value": "PT24H"
        },
        {
          "or": [
            {
              "field": "firezone.last_seen_version",
              "op": "gte",
              "value": "@latest"
            },
            {
              "not": {
                "field": "firezone.hostname",
                "op": "starts_with",
                "value": "test-"
              }
            }
          ]
        }
      ]
    },
    "require_attestation": true,
    "resource_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

PUT/PATCH body for updating a Policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[PolicyUpdateParams](#schemapolicyupdateparams)|true|none|Policy attributes accepted when updating a Policy. All fields are optional; omitted fields keep their current value.|

<h2 id="tocS_ValidationErrors">ValidationErrors</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrors"></a>
<a id="schema_ValidationErrors"></a>
<a id="tocSvalidationerrors"></a>
<a id="tocsvalidationerrors"></a>

```json
{
  "name": [
    "can't be blank"
  ]
}
```

Map of field name to its errors: a list of messages, or the errors of a nested object or list of objects under the same shape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string] \| [[ValidationErrors](#schemavalidationerrors)] \| [ValidationErrors](#schemavalidationerrors)|false|none|none|

<h2 id="tocS_OIDCAuthProviderListResponse">OIDCAuthProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoidcauthproviderlistresponse"></a>
<a id="schema_OIDCAuthProviderListResponse"></a>
<a id="tocSoidcauthproviderlistresponse"></a>
<a id="tocsoidcauthproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_id": "my-client-id",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "discovery_document_uri": "https://idp.example.com/.well-known/openid-configuration",
      "email_verification_method": "claim",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": false,
      "is_disabled": false,
      "issuer": "https://idp.example.com",
      "name": "OIDC Provider",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple OIDC Auth Providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OIDCAuthProvider](#schemaoidcauthprovider)]|false|none|OIDC Auth Provider details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_Gateway">Gateway</h2>
<!-- backwards compatibility -->
<a id="schemagateway"></a>
<a id="schema_Gateway"></a>
<a id="tocSgateway"></a>
<a id="tocsgateway"></a>

```json
{
  "gateway_token_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "ipv4": "100.64.0.1",
  "ipv6": "fd00:2021:1111::1",
  "last_seen_at": "2025-01-01T00:00:00Z",
  "last_seen_remote_ip": "198.51.100.10",
  "last_seen_remote_ip_location_city": "San Francisco",
  "last_seen_remote_ip_location_lat": 37.7749,
  "last_seen_remote_ip_location_lon": -122.4194,
  "last_seen_remote_ip_location_region": "US-CA",
  "last_seen_user_agent": "Linux/6.1.0 connlib/1.5.0",
  "last_seen_version": "1.5.0",
  "name": "vpc-us-east",
  "online": true,
  "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
  "rotated_at": "1970-01-01T00:00:00Z"
}
```

Gateway

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gateway_token_id|string(uuid) \| null|true|none|ID of the token this Gateway last connected with. Null until the Gateway connects for the first time.|
|id|string(uuid)|true|none|Gateway ID|
|ipv4|string|true|none|Tunnel IPv4 address (see last_seen_remote_ip for the public IP)|
|ipv6|string|true|none|Tunnel IPv6 address (see last_seen_remote_ip for the public IP)|
|last_seen_at|string(date-time) \| null|true|none|Timestamp of the latest connection|
|last_seen_remote_ip|string \| null|true|none|Remote IP from the latest session|
|last_seen_remote_ip_location_city|string \| null|true|none|Remote IP city from the latest session|
|last_seen_remote_ip_location_lat|number \| null|true|none|Remote IP latitude from the latest session|
|last_seen_remote_ip_location_lon|number \| null|true|none|Remote IP longitude from the latest session|
|last_seen_remote_ip_location_region|string \| null|true|none|Remote IP region from the latest session|
|last_seen_user_agent|string \| null|true|none|User agent from the latest session|
|last_seen_version|string \| null|true|none|Gateway version from the latest session|
|name|string|true|none|Gateway Name|
|online|boolean|true|none|Online status of Gateway|
|public_key|string \| null|true|none|WireGuard public key from the latest session|
|rotated_at|string(date-time) \| null|true|none|When the token identified by `gateway_token_id` was rotated out. Null in the normal case. When set, a replacement token has been minted and this one stays valid only until the Gateway connects with the replacement or 4 hours elapse from this timestamp, whichever comes first - so a non-null value means a rotation is pending and the Gateway has not picked it up yet.|

<h2 id="tocS_PoolMemberPutRequest">PoolMemberPutRequest</h2>
<!-- backwards compatibility -->
<a id="schemapoolmemberputrequest"></a>
<a id="schema_PoolMemberPutRequest"></a>
<a id="tocSpoolmemberputrequest"></a>
<a id="tocspoolmemberputrequest"></a>

```json
{
  "pool_members": [
    {
      "device_id": "7cb89288-1fb3-433e-a522-2d087e45988d"
    },
    {
      "device_id": "cc9f561a-444d-4083-ab38-0abc6cf2314c"
    }
  ]
}
```

PUT body replacing the pool's entire membership. Any Client not named
here is removed from the pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool_members|[object]|true|none|none|

<h2 id="tocS_GatewayToken">GatewayToken</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytoken"></a>
<a id="schema_GatewayToken"></a>
<a id="tocSgatewaytoken"></a>
<a id="tocsgatewaytoken"></a>

```json
{
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "token": "secret-token-here"
}
```

Gateway Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Gateway Token ID|
|token|string|true|none|Gateway Token|

<h2 id="tocS_SiteID">SiteID</h2>
<!-- backwards compatibility -->
<a id="schemasiteid"></a>
<a id="schema_SiteID"></a>
<a id="tocSsiteid"></a>
<a id="tocssiteid"></a>

```json
"0642e09d-b3a2-47e4-9cd1-c2195faeeb67"
```

Site to connect the Resource to. Required for all types except `device_pool`, which takes none. The Internet Site is reserved for the Internet Resource and cannot be used.

<h2 id="tocS_string no_value device comparison">string no_value device comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring no_value device comparison"></a>
<a id="schema_string no_value device comparison"></a>
<a id="tocSstring no_value device comparison"></a>
<a id="tocsstring no_value device comparison"></a>

```json
{
  "field": "firezone.device_serial",
  "op": "exists",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|exists|
|op|does_not_exist|
|value|null|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "directory_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "string",
  "entity_type": "group",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "idp_id": "string",
  "inserted_at": "2024-01-15T10:30:00Z",
  "name": "Engineering",
  "synced_at": "1970-01-01T00:00:00Z",
  "type": "static",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

Group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directory_id|string(uuid) \| null|true|none|Directory ID this group belongs to|
|email|string \| null|true|none|Group email address for synced groups|
|entity_type|string|true|none|Entity type|
|id|string(uuid)|true|none|Group ID|
|idp_id|string \| null|true|none|Identity provider ID for synced groups|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|name|string|true|none|Group Name|
|synced_at|string(date-time) \| null|true|none|Last sync timestamp for synced groups|
|type|string|true|read-only|`managed` for the built-in Everyone Group, which includes every user and admin Actor implicitly, has no explicit memberships, and cannot be updated or deleted. `static` for every other Group.|
|updated_at|string(date-time)|true|none|Last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|group|
|entity_type|org_unit|
|type|managed|
|type|static|

<h2 id="tocS_json no_value provider comparison">json no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemajson no_value provider comparison"></a>
<a id="schema_json no_value provider comparison"></a>
<a id="tocSjson no_value provider comparison"></a>
<a id="tocsjson no_value provider comparison"></a>

```json
{
  "field": "defender.ip_addresses",
  "op": "is_empty",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|json field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.ip_addresses|
|field|sentinelone.cloud_providers|
|field|sentinelone.locations|
|field|sentinelone.network_interfaces|
|field|sentinelone.tags|
|field|sophos.assigned_products|
|field|sophos.device_software|
|field|sophos.encryption_volumes|
|field|sophos.group_hierarchy|
|field|sophos.health_service_details|
|field|sophos.packages|
|field|sophos.tags|
|op|is_empty|
|op|is_not_empty|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "detail": "The requested resource could not be found.",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

RFC 9457 (Problem Details for HTTP APIs) error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem.|
|status|integer|true|none|HTTP status code.|
|title|string|true|none|Short, human-readable summary of the problem type (the HTTP status phrase).|
|type|string|true|none|URI identifying the problem type. Always "about:blank" for now.|

<h2 id="tocS_datetime duration device comparison">datetime duration device comparison</h2>
<!-- backwards compatibility -->
<a id="schemadatetime duration device comparison"></a>
<a id="schema_datetime duration device comparison"></a>
<a id="tocSdatetime duration device comparison"></a>
<a id="tocsdatetime duration device comparison"></a>

```json
{
  "field": "firezone.last_attested_at",
  "op": "within_last",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|Positive ISO 8601 duration, such as PT24H or P30D|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.last_attested_at|
|op|within_last|
|op|not_within_last|

<h2 id="tocS_SantaPostureProviderListResponse">SantaPostureProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasantapostureproviderlistresponse"></a>
<a id="schema_SantaPostureProviderListResponse"></a>
<a id="tocSsantapostureproviderlistresponse"></a>
<a id="tocssantapostureproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "api_url": "http://example.com",
      "disabled_reason": "string",
      "error_message": "string",
      "errored_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "inserted_at": "1970-01-01T00:00:00Z",
      "is_disabled": true,
      "is_verified": true,
      "name": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "type": "santa",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SantaPostureProvider](#schemasantapostureprovider)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_ResourceUpdateRequest">ResourceUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresourceupdaterequest"></a>
<a id="schema_ResourceUpdateRequest"></a>
<a id="tocSresourceupdaterequest"></a>
<a id="tocsresourceupdaterequest"></a>

```json
{
  "resource": {
    "address": "10.0.0.10",
    "address_description": "Production Database",
    "device_membership_criteria": {
      "device": {
        "field": "actor_id",
        "op": "eq",
        "value": {
          "subject": "actor_id"
        }
      }
    },
    "filters": [
      {
        "ports": [
          "5432"
        ],
        "protocol": "tcp"
      }
    ],
    "ip_stack": "ipv4_only",
    "name": "Prod DB",
    "site_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
    "type": "ip"
  }
}
```

PATCH/PUT body for updating a Resource. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|true|none|none|

<h2 id="tocS_ResourceFilter">ResourceFilter</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefilter"></a>
<a id="schema_ResourceFilter"></a>
<a id="tocSresourcefilter"></a>
<a id="tocsresourcefilter"></a>

```json
{
  "ports": [
    "80",
    "443",
    "8000 - 9000"
  ],
  "protocol": "tcp"
}
```

Traffic filter restricting the protocols and ports the Resource exposes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ports|[string]|false|none|Port numbers or ranges (e.g. `80` or `8000 - 9000`) the filter allows. Not applicable to `icmp`.|
|protocol|string|true|none|Transport protocol the filter applies to|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|tcp|
|protocol|udp|
|protocol|icmp|

<h2 id="tocS_ActorCreateRequest">ActorCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactorcreaterequest"></a>
<a id="schema_ActorCreateRequest"></a>
<a id="tocSactorcreaterequest"></a>
<a id="tocsactorcreaterequest"></a>

```json
{
  "actor": {
    "allow_email_otp_sign_in": false,
    "email": "joe.user@example.com",
    "name": "Joe User",
    "type": "account_user"
  }
}
```

POST body for creating an Actor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|object|true|none|none|

<h2 id="tocS_ipv4 list device comparison">ipv4 list device comparison</h2>
<!-- backwards compatibility -->
<a id="schemaipv4 list device comparison"></a>
<a id="schema_ipv4 list device comparison"></a>
<a id="tocSipv4 list device comparison"></a>
<a id="tocsipv4 list device comparison"></a>

```json
{
  "field": "firezone.ipv4",
  "op": "is_in_cidr",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|ipv4 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.ipv4|
|op|is_in_cidr|
|op|is_not_in_cidr|

<h2 id="tocS_SantaPostureProviderUpdateRequest">SantaPostureProviderUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasantapostureproviderupdaterequest"></a>
<a id="schema_SantaPostureProviderUpdateRequest"></a>
<a id="tocSsantapostureproviderupdaterequest"></a>
<a id="tocssantapostureproviderupdaterequest"></a>

```json
{
  "santa_posture_provider": {
    "is_disabled": false,
    "name": "Santa"
  }
}
```

PUT/PATCH body for updating a Santa posture provider. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|santa_posture_provider|object|true|none|none|

<h2 id="tocS_GatewayUpdate">GatewayUpdate</h2>
<!-- backwards compatibility -->
<a id="schemagatewayupdate"></a>
<a id="schema_GatewayUpdate"></a>
<a id="tocSgatewayupdate"></a>
<a id="tocsgatewayupdate"></a>

```json
{
  "name": "vpc-us-east"
}
```

Update schema for a single Gateway

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Gateway Name|

<h2 id="tocS_MembershipPatchRequest">MembershipPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemamembershippatchrequest"></a>
<a id="schema_MembershipPatchRequest"></a>
<a id="tocSmembershippatchrequest"></a>
<a id="tocsmembershippatchrequest"></a>

```json
{
  "memberships": {
    "add": [
      "4ddfa557-7dfc-484f-894c-2024ec3fe9f7"
    ],
    "remove": [
      "89d22f71-939d-442d-b148-897b730adfb4"
    ]
  }
}
```

PATCH body for updating Memberships

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|object|true|none|none|

<h2 id="tocS_LogResponse">LogResponse</h2>
<!-- backwards compatibility -->
<a id="schemalogresponse"></a>
<a id="schema_LogResponse"></a>
<a id="tocSlogresponse"></a>
<a id="tocslogresponse"></a>

```json
{
  "data": {
    "after": {
      "name": "Jane Smith"
    },
    "before": {
      "name": "Jane Doe"
    },
    "log_id": "c00060db0c2c8eb400000000",
    "object": "actors",
    "operation": "update",
    "subject": {
      "actor_email": "admin@example.com",
      "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "actor_name": "Admin User",
      "actor_type": "account_admin_user",
      "attested_at": "1970-01-01T00:00:00Z",
      "attested_cert_fingerprint": "string",
      "attested_cert_issuer": "string",
      "attested_cert_serial": "string",
      "attested_device_serial": "string",
      "attested_device_uuid": "string",
      "attested_mdm_device_id": "string",
      "auth_provider_id": "98776234-1234-5678-9012-345678901234",
      "ip": "1.2.3.4",
      "ip_city": "San Francisco",
      "ip_lat": 37.7749,
      "ip_lon": -122.4194,
      "ip_region": "California",
      "user_agent": "Mozilla/5.0"
    },
    "timestamp": "2026-05-26T12:34:56.789Z",
    "type": "change"
  }
}
```

Response schema for a single Log entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Log](#schemalog)|false|none|A single Log entry. The `type` field identifies the log stream the<br>entry belongs to, which is also encoded in the first character of its<br>`log_id` (`c` change, `5` session, `f` flow, `a` api_request).<br>|

<h2 id="tocS_SantaPostureProviderResponse">SantaPostureProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemasantapostureproviderresponse"></a>
<a id="schema_SantaPostureProviderResponse"></a>
<a id="tocSsantapostureproviderresponse"></a>
<a id="tocssantapostureproviderresponse"></a>

```json
{
  "data": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "api_url": "http://example.com",
    "disabled_reason": "string",
    "error_message": "string",
    "errored_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "inserted_at": "1970-01-01T00:00:00Z",
    "is_disabled": true,
    "is_verified": true,
    "name": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "type": "santa",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SantaPostureProvider](#schemasantapostureprovider)|false|none|Santa posture provider backed by North Pole Security Workshop|

<h2 id="tocS_enum_string regex provider comparison">enum_string regex provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemaenum_string regex provider comparison"></a>
<a id="schema_enum_string regex provider comparison"></a>
<a id="tocSenum_string regex provider comparison"></a>
<a id="tocsenum_string regex provider comparison"></a>

```json
{
  "field": "defender.device_value",
  "op": "matches",
  "rows": "any",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|enum_string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Regular expression; at most 256 bytes|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.device_value|
|field|defender.exclusion_reason|
|field|defender.exposure_level|
|field|defender.health_status|
|field|defender.managed_by|
|field|defender.managed_by_status|
|field|defender.onboarding_status|
|field|defender.os_architecture|
|field|defender.os_platform|
|field|defender.risk_score|
|field|intune.attestation_status|
|field|intune.compliance_state|
|field|intune.device_enrollment_type|
|field|intune.device_registration_state|
|field|intune.exchange_access_state|
|field|intune.exchange_access_state_reason|
|field|intune.managed_device_owner_type|
|field|intune.management_agent|
|field|intune.management_state|
|field|intune.partner_reported_threat_state|
|field|iru.cellular_technology|
|field|iru.device_family|
|field|iru.external_boot_level|
|field|iru.filevault_key_type|
|field|iru.firewall_logging_option|
|field|iru.lost_mode_status|
|field|iru.platform|
|field|iru.secure_boot_level|
|field|santa.configured_client_mode|
|field|santa.last_seen_client_mode|
|field|santa.os_type|
|field|sentinelone.apps_vulnerability_status|
|field|sentinelone.console_migration_status|
|field|sentinelone.detection_state|
|field|sentinelone.installer_type|
|field|sentinelone.location_type|
|field|sentinelone.machine_type|
|field|sentinelone.mitigation_mode|
|field|sentinelone.mitigation_mode_suspicious|
|field|sentinelone.network_status|
|field|sentinelone.operational_state|
|field|sentinelone.os_arch|
|field|sentinelone.os_type|
|field|sentinelone.proxy_method|
|field|sentinelone.ranger_status|
|field|sentinelone.remote_profiling_state|
|field|sentinelone.scan_status|
|field|sophos.cloud_provider|
|field|sophos.encryption_overall_status|
|field|sophos.health_overall|
|field|sophos.health_services_status|
|field|sophos.health_threats_status|
|field|sophos.isolation_status|
|field|sophos.lockdown_status|
|field|sophos.os_platform|
|field|sophos.type|
|op|matches|
|op|does_not_match|
|rows|any|
|rows|all|

<h2 id="tocS_ClientResponse">ClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclientresponse"></a>
<a id="schema_ClientResponse"></a>
<a id="tocSclientresponse"></a>
<a id="tocsclientresponse"></a>

```json
{
  "data": {
    "actor_id": "6ecc106b-75c1-48a5-846c-14782180c1ff",
    "created_at": "2025-01-01T00:00:00Z",
    "device_serial": "GCCFX0DBQ6L5",
    "device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "firebase_installation_id": "string",
    "firezone_id": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c",
    "hostname": "johns-macbook.example.com",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "identifier_for_vendor": "string",
    "ipv4": "100.64.0.1",
    "ipv6": "fd00:2021:1111::1",
    "last_attested_at": "2025-01-01T00:00:00Z",
    "last_attested_cert_fingerprint": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "last_attested_cert_serial": "4A:2F:00:8C:11:03:9E:5B",
    "last_attested_device_serial": "GCCFX0DBQ6L5",
    "last_attested_device_uuid": "7A461FF9-0BE2-64A9-A418-539D9A21827B",
    "last_attested_mdm_device_id": "5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3",
    "last_seen_at": "2025-01-01T00:00:00Z",
    "last_seen_remote_ip": "203.0.113.10",
    "last_seen_remote_ip_location_city": "New York",
    "last_seen_remote_ip_location_lat": 40.7128,
    "last_seen_remote_ip_location_lon": -74.006,
    "last_seen_remote_ip_location_region": "US",
    "last_seen_user_agent": "macOS/14.0 apple-client/1.5.0",
    "last_seen_version": "1.5.0",
    "name": "John's Macbook Air",
    "online": true,
    "public_key": "WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=",
    "slug": "johns-macbook-air",
    "updated_at": "2025-01-01T00:00:00Z",
    "verified_at": "2025-01-01T00:00:00Z"
  }
}
```

Response schema for single Client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Client](#schemaclient)|false|none|Client|

<h2 id="tocS_DefenderPostureProviderUpdateRequest">DefenderPostureProviderUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadefenderpostureproviderupdaterequest"></a>
<a id="schema_DefenderPostureProviderUpdateRequest"></a>
<a id="tocSdefenderpostureproviderupdaterequest"></a>
<a id="tocsdefenderpostureproviderupdaterequest"></a>

```json
{
  "defender_posture_provider": {
    "is_disabled": false,
    "name": "Microsoft Defender for Endpoint"
  }
}
```

PUT/PATCH body for updating a Defender posture provider. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defender_posture_provider|object|true|none|none|

<h2 id="tocS_datetime duration provider comparison">datetime duration provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemadatetime duration provider comparison"></a>
<a id="schema_datetime duration provider comparison"></a>
<a id="tocSdatetime duration provider comparison"></a>
<a id="tocsdatetime duration provider comparison"></a>

```json
{
  "field": "defender.first_seen_at",
  "op": "within_last",
  "rows": "any",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|datetime field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Positive ISO 8601 duration, such as PT24H or P30D|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.first_seen_at|
|field|defender.last_seen_at|
|field|intune.android_security_patch_level|
|field|intune.attestation_issued_at|
|field|intune.compliance_grace_period_expiration_at|
|field|intune.eas_activated_at|
|field|intune.enrolled_at|
|field|intune.exchange_last_successful_sync_at|
|field|intune.last_sync_at|
|field|intune.management_certificate_expires_at|
|field|iru.activation_lock_collected_at|
|field|iru.filevault_collected_at|
|field|iru.filevault_key_rotation_scheduled_at|
|field|iru.firewall_collected_at|
|field|iru.first_enrolled_at|
|field|iru.gatekeeper_collected_at|
|field|iru.inventory_collected_at|
|field|iru.last_check_in_at|
|field|iru.last_enrolled_at|
|field|iru.startup_settings_collected_at|
|field|santa.first_seen_at|
|field|santa.last_preflight_at|
|field|santa.last_sync_at|
|field|santa.rule_sync_at|
|field|santa.temporary_admin_mode_ends_at|
|field|santa.temporary_monitor_mode_ends_at|
|field|sentinelone.first_full_mode_at|
|field|sentinelone.full_disk_scan_updated_at|
|field|sentinelone.last_active_at|
|field|sentinelone.last_successful_scan_at|
|field|sentinelone.operational_state_expires_at|
|field|sentinelone.os_start_time|
|field|sentinelone.registered_at|
|field|sentinelone.remote_profiling_state_expires_at|
|field|sentinelone.scan_aborted_at|
|field|sentinelone.scan_finished_at|
|field|sentinelone.scan_started_at|
|field|sophos.last_agent_update_at|
|field|sophos.last_os_update_at|
|field|sophos.last_seen_at|
|op|within_last|
|op|not_within_last|
|rows|any|
|rows|all|

<h2 id="tocS_PoolMember">PoolMember</h2>
<!-- backwards compatibility -->
<a id="schemapoolmember"></a>
<a id="schema_PoolMember"></a>
<a id="tocSpoolmember"></a>
<a id="tocspoolmember"></a>

```json
{
  "id": "7cb89288-1fb3-433e-a522-2d087e45988d",
  "last_seen_at": "2024-01-15T10:30:00Z",
  "name": "jane-laptop"
}
```

A Client a device pool Resource names as a member

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Client ID|
|last_seen_at|string(date-time) \| null|true|none|Last time the Client was seen|
|name|string|true|none|Client Name|

<h2 id="tocS_integer scalar provider comparison">integer scalar provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemainteger scalar provider comparison"></a>
<a id="schema_integer scalar provider comparison"></a>
<a id="tocSinteger scalar provider comparison"></a>
<a id="tocsinteger scalar provider comparison"></a>

```json
{
  "field": "defender.os_build",
  "op": "eq",
  "rows": "any",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|integer field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.os_build|
|field|defender.rbac_group_id|
|field|intune.attestation_reset_count|
|field|intune.attestation_restart_count|
|field|intune.free_storage_space_bytes|
|field|intune.physical_memory_bytes|
|field|intune.total_storage_space_bytes|
|field|santa.sip_status|
|field|sentinelone.active_threats|
|field|sentinelone.core_count|
|field|sentinelone.cpu_count|
|field|sentinelone.protected_containers_count|
|field|sentinelone.protected_pods_count|
|field|sentinelone.protected_tasks_count|
|field|sentinelone.total_memory|
|field|sophos.os_build|
|field|sophos.os_major_version|
|field|sophos.os_minor_version|
|op|eq|
|op|ne|
|op|gt|
|op|gte|
|op|lt|
|op|lte|
|rows|any|
|rows|all|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "conditions": [
    {
      "operator": "is_in",
      "property": "remote_ip_location_region",
      "values": [
        "US",
        "CA"
      ]
    }
  ],
  "description": "Policy to allow something",
  "flow_log_uploads_enabled": true,
  "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "is_disabled": false,
  "postures": {
    "and": [
      {
        "field": "intune.enrolled",
        "op": "is",
        "value": true
      },
      {
        "field": "intune.compliance_state",
        "op": "is",
        "rows": "all",
        "value": "compliant"
      },
      {
        "field": "intune.last_sync_at",
        "op": "within_last",
        "value": "PT24H"
      },
      {
        "or": [
          {
            "field": "firezone.last_seen_version",
            "op": "gte",
            "value": "@latest"
          },
          {
            "not": {
              "field": "firezone.hostname",
              "op": "starts_with",
              "value": "test-"
            }
          }
        ]
      }
    ]
  },
  "require_attestation": false,
  "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
}
```

Policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[PolicyCondition](#schemapolicycondition)]|true|none|Conditions that must be satisfied for the Policy to grant access|
|description|string \| null|true|none|Policy Description|
|flow_log_uploads_enabled|boolean|true|none|Whether flow logs are reported for connections authorized by this Policy|
|group_id|string(uuid) \| null|true|none|Group ID. Null if the Group was deleted during directory sync; it is relinked automatically if the Group reappears on a subsequent sync.|
|id|string(uuid)|true|none|Policy ID|
|is_disabled|boolean|true|none|Whether the Policy is disabled. A disabled Policy grants no access but is otherwise retained.|
|postures|[PolicyPostureNode](#schemapolicyposturenode) \| object \| null|true|none|The stored device posture expression, or null when none is required. The connecting device must satisfy this expression and every entry in conditions. Returned on create, update, show, and list, including after an account downgrade.|
|require_attestation|boolean|true|none|Whether the Client must present a valid X.509 certificate from one of the account's trust anchors|
|resource_id|string(uuid)|true|none|Resource ID|

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "key": "string",
    "legal_name": "string",
    "limits": {
      "account_admin_users": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "adhoc_service_accounts": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "monthly_active_users": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "service_accounts": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "sites": {
        "available": 0,
        "total": 0,
        "used": 0
      },
      "users": {
        "available": 0,
        "total": 0,
        "used": 0
      }
    },
    "name": "string",
    "slug": "string"
  }
}
```

Response schema for Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Account](#schemaaccount)|true|none|Account schema|

<h2 id="tocS_integer no_value provider comparison">integer no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemainteger no_value provider comparison"></a>
<a id="schema_integer no_value provider comparison"></a>
<a id="tocSinteger no_value provider comparison"></a>
<a id="tocsinteger no_value provider comparison"></a>

```json
{
  "field": "defender.os_build",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|integer field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.os_build|
|field|defender.rbac_group_id|
|field|intune.attestation_reset_count|
|field|intune.attestation_restart_count|
|field|intune.free_storage_space_bytes|
|field|intune.physical_memory_bytes|
|field|intune.total_storage_space_bytes|
|field|santa.sip_status|
|field|sentinelone.active_threats|
|field|sentinelone.core_count|
|field|sentinelone.cpu_count|
|field|sentinelone.protected_containers_count|
|field|sentinelone.protected_pods_count|
|field|sentinelone.protected_tasks_count|
|field|sentinelone.total_memory|
|field|sophos.os_build|
|field|sophos.os_major_version|
|field|sophos.os_minor_version|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_EmailOTPAuthProvider">EmailOTPAuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemaemailotpauthprovider"></a>
<a id="schema_EmailOTPAuthProvider"></a>
<a id="tocSemailotpauthprovider"></a>
<a id="tocsemailotpauthprovider"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "client_session_lifetime_secs": 604800,
  "context": "clients_and_portal",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_disabled": false,
  "issuer": "firezone",
  "name": "Email OTP",
  "portal_session_lifetime_secs": 28800,
  "updated_at": "2025-01-15T10:30:00Z"
}
```

Email OTP Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|client_session_lifetime_secs|integer \| null|true|none|Client session lifetime in seconds. Null when the account default applies.|
|context|string|true|none|Context|
|id|string(uuid)|true|none|Provider ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_disabled|boolean|true|none|Whether provider is disabled|
|issuer|string|true|none|Issuer|
|name|string|true|none|Provider name|
|portal_session_lifetime_secs|integer \| null|true|none|Portal session lifetime in seconds. Null when the account default applies.|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|context|clients_and_portal|
|context|clients_only|
|context|portal_only|

<h2 id="tocS_PolicyCondition">PolicyCondition</h2>
<!-- backwards compatibility -->
<a id="schemapolicycondition"></a>
<a id="schema_PolicyCondition"></a>
<a id="tocSpolicycondition"></a>
<a id="tocspolicycondition"></a>

```json
{
  "operator": "is_in",
  "property": "remote_ip_location_region",
  "values": [
    "US",
    "CA"
  ]
}
```

A condition that must be satisfied for the Policy to grant access.

All conditions on a Policy must evaluate to true for access to be
granted. A condition is made up of a `property`, an `operator`, and a
list of `values`. The valid operators and the meaning of `values`
depend on the `property`:

* `remote_ip_location_region` with `is_in` / `is_not_in`: `values` are
  ISO 3166-1 alpha-2 country codes, e.g. `["US", "CA"]`.
* `remote_ip` with `is_in_cidr` / `is_not_in_cidr`: `values` are CIDR
  ranges (IPv4 or IPv6), e.g. `["10.0.0.0/8", "2607:f8b0::/32"]`.
* `auth_provider_id` with `is_in` / `is_not_in`: `values` are
  authentication provider IDs (UUIDs).
* `current_utc_datetime` with `is_in_day_of_week_time_ranges`: each
  value is a `DAY/TIME_RANGES/TIMEZONE` string where `DAY` is one of
  `M T W R F S U` (Monday through Sunday), `TIME_RANGES` is a
  comma-separated list of `HH:MM-HH:MM` ranges, and `TIMEZONE` is an
  IANA timezone name, e.g. `"M/09:00-17:00/America/New_York"`.
* `client_verified` with `is`: `values` is a single-element list
  containing `"true"` or `"false"`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|How the values are compared against the property|
|property|string|true|none|The attribute of the connection being matched against|
|values|[string]|true|none|The values to compare against, interpreted per the property|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|is_in|
|operator|is_not_in|
|operator|is_in_cidr|
|operator|is_not_in_cidr|
|operator|is_in_day_of_week_time_ranges|
|operator|is|
|property|remote_ip_location_region|
|property|remote_ip|
|property|auth_provider_id|
|property|current_utc_datetime|
|property|client_verified|

<h2 id="tocS_DeviceMembershipOwnDevices">DeviceMembershipOwnDevices</h2>
<!-- backwards compatibility -->
<a id="schemadevicemembershipowndevices"></a>
<a id="schema_DeviceMembershipOwnDevices"></a>
<a id="tocSdevicemembershipowndevices"></a>
<a id="tocsdevicemembershipowndevices"></a>

```json
{
  "device": {
    "field": "actor_id",
    "op": "eq",
    "value": {
      "subject": "actor_id"
    }
  }
}
```

The Clients of the Actor asking for access

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|object|true|none|none|

<h2 id="tocS_ValidationProblemDetails">ValidationProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemavalidationproblemdetails"></a>
<a id="schema_ValidationProblemDetails"></a>
<a id="tocSvalidationproblemdetails"></a>
<a id="tocsvalidationproblemdetails"></a>

```json
{
  "detail": "The request body failed validation.",
  "status": 422,
  "title": "Unprocessable Content",
  "type": "about:blank",
  "validation_errors": {
    "name": [
      "can't be blank"
    ]
  }
}
```

RFC 9457 error response for request validation failures. The `validation_errors` member maps each invalid field to a list of human-readable messages. Errors on nested objects and on the items of a list are reported under the same shape, keyed by field name or list index. It is omitted when the failure is not attributable to individual fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|validation_errors|[ValidationErrors](#schemavalidationerrors)|false|none|Map of field name to its errors: a list of messages, or the errors of a nested object or list of objects under the same shape.|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "key": "string",
  "legal_name": "string",
  "limits": {
    "account_admin_users": {
      "available": 0,
      "total": 0,
      "used": 0
    },
    "adhoc_service_accounts": {
      "available": 0,
      "total": 0,
      "used": 0
    },
    "monthly_active_users": {
      "available": 0,
      "total": 0,
      "used": 0
    },
    "service_accounts": {
      "available": 0,
      "total": 0,
      "used": 0
    },
    "sites": {
      "available": 0,
      "total": 0,
      "used": 0
    },
    "users": {
      "available": 0,
      "total": 0,
      "used": 0
    }
  },
  "name": "string",
  "slug": "string"
}
```

Account schema

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Account ID|
|key|string|true|none|6-character account key|
|legal_name|string|true|none|Account legal name|
|limits|[AccountLimits](#schemaaccountlimits)|true|none|Account limits and usage information|
|name|string|true|none|Account name|
|slug|string|true|none|Account slug|

<h2 id="tocS_SophosPostureProviderUpdateRequest">SophosPostureProviderUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasophospostureproviderupdaterequest"></a>
<a id="schema_SophosPostureProviderUpdateRequest"></a>
<a id="tocSsophospostureproviderupdaterequest"></a>
<a id="tocssophospostureproviderupdaterequest"></a>

```json
{
  "sophos_posture_provider": {
    "is_disabled": false,
    "name": "Sophos XDR"
  }
}
```

PUT/PATCH body for updating a Sophos posture provider. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sophos_posture_provider|object|true|none|none|

<h2 id="tocS_DeviceMembershipCriteria">DeviceMembershipCriteria</h2>
<!-- backwards compatibility -->
<a id="schemadevicemembershipcriteria"></a>
<a id="schema_DeviceMembershipCriteria"></a>
<a id="tocSdevicemembershipcriteria"></a>
<a id="tocsdevicemembershipcriteria"></a>

```json
{
  "device": {
    "field": "actor_id",
    "op": "eq",
    "value": {
      "subject": "actor_id"
    }
  }
}
```

Who a `device_pool` Resource holds. Required for a device pool, absent for every
other Resource type.

The object has exactly one key, naming where the field lives: `device` is the
Client row itself, and `actor_group` is a group the Client's owner belongs to.
The value is one rule comparing a field against either a literal or an attribute
of the Actor asking for access. More sources can be added later without changing
the rules already stored.

The four rules the API accepts, and who each one holds:

    {"device": {"field": "id", "op": "in", "value": ["<client id>", ...]}}
    {"device": {"field": "actor_id", "op": "eq", "value": {"subject": "actor_id"}}}
    {"device": {"field": "account_id", "op": "eq", "value": {"subject": "account_id"}}}
    {"actor_group": {"field": "id", "op": "eq", "value": "<group id>"}}

In order: exactly the Clients named, the asking Actor's own Clients, every Client
in the Account, and the Clients of every Actor in one Group.

Editing the list of Clients the first rule names drops the connections to the
Clients removed and leaves every other connection through the pool alone.

Every other change to this field is a breaking update, because any Client can move
in or out of the pool: every active connection through the pool is dropped, and
Clients reconnect to the members they may still reach.

Clients older than the device-pool protocol only understand a pool that names its
members, so they are sent the first rule and never the other three.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Exactly the Clients named|
|device|object|true|none|none|
|*oneOf*|object|false|none|The Clients of the Actor asking for access|
|device|object|true|none|none|
|*oneOf*|object|false|none|Every Client in the Account|
|device|object|true|none|none|
|*oneOf*|object|false|none|The Clients of every Actor in one Group|
|actor_group|object|true|none|none|

<h2 id="tocS_SentinelOneDeviceListResponse">SentinelOneDeviceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasentinelonedevicelistresponse"></a>
<a id="schema_SentinelOneDeviceListResponse"></a>
<a id="tocSsentinelonedevicelistresponse"></a>
<a id="tocssentinelonedevicelistresponse"></a>

```json
{
  "data": [
    {
      "last_logged_in_user_name": "string",
      "sentinelone_id": "string",
      "user_actions_needed": [
        "string"
      ],
      "operational_state": "string",
      "os_name": "string",
      "os_arch": "string",
      "remote_profiling_state": "string",
      "has_containerized_workload": true,
      "firewall_enabled": true,
      "proxy_console": true,
      "model_name": "string",
      "infected": true,
      "proxy_deep_visibility": true,
      "console_migration_status": "string",
      "is_hyper_automate": true,
      "network_quarantine_enabled": true,
      "scan_finished_at": "1970-01-01T00:00:00Z",
      "is_active": true,
      "external_id": "string",
      "last_successful_scan_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "os_username": "string",
      "active_protection": [
        "string"
      ],
      "threat_reboot_required": true,
      "synced_at": "1970-01-01T00:00:00Z",
      "inserted_at": "1970-01-01T00:00:00Z",
      "location_enabled": true,
      "group_id": "string",
      "site_id": "string",
      "storage_name": "string",
      "machine_sid": "string",
      "remote_profiling_state_expires_at": "1970-01-01T00:00:00Z",
      "group_name": "string",
      "allow_remote_shell": true,
      "tags": [
        {}
      ],
      "protected_pods_count": 0,
      "os_type": "string",
      "proxy_pac_file_usage": true,
      "serial_number": "string",
      "ad_computer_member_of": [
        "string"
      ],
      "locations": [
        {}
      ],
      "installer_type": "string",
      "last_active_at": "1970-01-01T00:00:00Z",
      "is_ad_connector": true,
      "ad_user_principal_name": "string",
      "core_count": 0,
      "detection_state": "string",
      "active_threats": 0,
      "is_decommissioned": true,
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cpu_count": 0,
      "group_ip": "string",
      "protected_tasks_count": 0,
      "storage_type": "string",
      "account_name": "string",
      "ranger_status": "string",
      "scan_status": "string",
      "total_memory": 0,
      "encrypted_applications": true,
      "ad_last_user_distinguished_name": "string",
      "missing_permissions": [
        "string"
      ],
      "is_uninstalled": true,
      "computer_name": "string",
      "scan_aborted_at": "1970-01-01T00:00:00Z",
      "in_remote_shell_session": true,
      "first_full_mode_at": "1970-01-01T00:00:00Z",
      "ad_last_user_member_of": [
        "string"
      ],
      "ad_mail": "string",
      "external_ip": "string",
      "is_pending_uninstall": true,
      "sentinelone_account_id": "string",
      "last_ip_to_management": "string",
      "proxy_method": "string",
      "network_status": "string",
      "os_revision": "string",
      "agent_version": "string",
      "registered_at": "1970-01-01T00:00:00Z",
      "is_up_to_date": true,
      "site_name": "string",
      "apps_vulnerability_status": "string",
      "domain": "string",
      "ad_computer_distinguished_name": "string",
      "os_start_time": "1970-01-01T00:00:00Z",
      "mitigation_mode_suspicious": "string",
      "machine_type": "string",
      "uuid": "string",
      "ranger_version": "string",
      "mitigation_mode": "string",
      "operational_state_expires_at": "1970-01-01T00:00:00Z",
      "network_interfaces": [
        {}
      ],
      "full_disk_scan_updated_at": "1970-01-01T00:00:00Z",
      "cloud_providers": {},
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scan_started_at": "1970-01-01T00:00:00Z",
      "protected_containers_count": 0,
      "cpu_id": "string",
      "location_type": "string"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SentinelOneDevice](#schemasentinelonedevice)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_AccountLimits">AccountLimits</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimits"></a>
<a id="schema_AccountLimits"></a>
<a id="tocSaccountlimits"></a>
<a id="tocsaccountlimits"></a>

```json
{
  "account_admin_users": {
    "available": 0,
    "total": 0,
    "used": 0
  },
  "adhoc_service_accounts": {
    "available": 0,
    "total": 0,
    "used": 0
  },
  "monthly_active_users": {
    "available": 0,
    "total": 0,
    "used": 0
  },
  "service_accounts": {
    "available": 0,
    "total": 0,
    "used": 0
  },
  "sites": {
    "available": 0,
    "total": 0,
    "used": 0
  },
  "users": {
    "available": 0,
    "total": 0,
    "used": 0
  }
}
```

Account limits and usage information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_admin_users|[AccountLimit](#schemaaccountlimit)|false|none|Account limit with usage information|
|adhoc_service_accounts|[AccountLimit](#schemaaccountlimit)|false|none|Account limit with usage information|
|monthly_active_users|[AccountLimit](#schemaaccountlimit)|false|none|Account limit with usage information|
|service_accounts|[AccountLimit](#schemaaccountlimit)|false|none|Account limit with usage information|
|sites|[AccountLimit](#schemaaccountlimit)|false|none|Account limit with usage information|
|users|[AccountLimit](#schemaaccountlimit)|false|none|Account limit with usage information|

<h2 id="tocS_GoogleAuthProvider">GoogleAuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemagoogleauthprovider"></a>
<a id="schema_GoogleAuthProvider"></a>
<a id="tocSgoogleauthprovider"></a>
<a id="tocsgoogleauthprovider"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "client_session_lifetime_secs": 604800,
  "context": "clients_and_portal",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_default": true,
  "is_disabled": false,
  "issuer": "https://accounts.google.com",
  "name": "Google",
  "portal_session_lifetime_secs": 28800,
  "updated_at": "2025-01-15T10:30:00Z",
  "workspace_domains": [
    "string"
  ]
}
```

Google Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|client_session_lifetime_secs|integer \| null|true|none|Client session lifetime in seconds. Null when the account default applies.|
|context|string|true|none|Context|
|id|string(uuid)|true|none|Provider ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_default|boolean|true|none|Whether provider is default|
|is_disabled|boolean|true|none|Whether provider is disabled|
|issuer|string|true|none|Issuer|
|name|string|true|none|Provider name|
|portal_session_lifetime_secs|integer \| null|true|none|Portal session lifetime in seconds. Null when the account default applies.|
|updated_at|string(date-time)|true|none|Update timestamp|
|workspace_domains|[string]|true|read-only|Verified Google Workspace domains allowed to sign in. Empty for personal-only providers and existing unrestricted providers.|

#### Enumerated Values

|Property|Value|
|---|---|
|context|clients_and_portal|
|context|clients_only|
|context|portal_only|

<h2 id="tocS_GroupUpdateRequest">GroupUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagroupupdaterequest"></a>
<a id="schema_GroupUpdateRequest"></a>
<a id="tocSgroupupdaterequest"></a>
<a id="tocsgroupupdaterequest"></a>

```json
{
  "group": {
    "name": "Engineering"
  }
}
```

PATCH/PUT body for updating a Group. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|true|none|none|

<h2 id="tocS_GitHubAuthProviderResponse">GitHubAuthProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagithubauthproviderresponse"></a>
<a id="schema_GitHubAuthProviderResponse"></a>
<a id="tocSgithubauthproviderresponse"></a>
<a id="tocsgithubauthproviderresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "email_verification_method": "proof",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": true,
    "is_disabled": false,
    "issuer": "https://github.com/login/oauth",
    "name": "GitHub",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single GitHub Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GitHubAuthProvider](#schemagithubauthprovider)|false|none|GitHub Auth Provider|

<h2 id="tocS_APIRequestLog">APIRequestLog</h2>
<!-- backwards compatibility -->
<a id="schemaapirequestlog"></a>
<a id="schema_APIRequestLog"></a>
<a id="tocSapirequestlog"></a>
<a id="tocsapirequestlog"></a>

```json
{
  "actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "api_token_id": "44e7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "content_length": 0,
  "ip": "189.172.73.1",
  "ip_city": "Mexico City",
  "ip_lat": 19.4326,
  "ip_lon": -99.1332,
  "ip_region": "MX",
  "log_id": "a00060db0c2c8eb400000000",
  "mcp": {},
  "method": "GET",
  "path": "/clients",
  "request_id": "GBKkV1jUWuW2sJoAACkB",
  "timestamp": "2026-05-26T12:34:56.789Z",
  "type": "api_request",
  "user_agent": "curl/8.7.1"
}
```

A single API Request Log entry, recording one authenticated REST API
request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor_id|string(uuid)|true|none|ID of the actor making the API or MCP request.|
|api_token_id|string(uuid)|true|none|ID of the API token or MCP OAuth access token used.|
|content_length|integer \| null|true|none|Value of the Content-Length request header, when present.|
|ip|string|true|none|none|
|ip_city|string \| null|true|none|none|
|ip_lat|number \| null|true|none|none|
|ip_lon|number \| null|true|none|none|
|ip_region|string \| null|true|none|none|
|log_id|string|true|none|Opaque identifier for the API Request Log entry. A 24-character<br>lowercase hexadecimal string starting with `a`.<br>|
|mcp|object \| null|true|none|MCP execution metadata, null for REST requests. tool_name is the<br>requested tool, not proof of execution. outcome is received, rejected,<br>ignored, protocol_response, dispatched, succeeded, or failed. A<br>dispatched outcome without completion has an unknown result. method<br>and path identify the dispatched REST operation; rest_status is its<br>status and http_status is the outer response status. No arguments or<br>response bodies are logged. A succeeded result means the REST handler<br>returned 2xx, not necessarily that it changed data.<br>|
|method|string|true|none|HTTP request method.|
|path|string|true|none|HTTP request path.|
|request_id|string|true|none|Request ID assigned by the server, for correlating with server logs.|
|timestamp|string(date-time)|true|none|RFC 3339 timestamp identifying when the request was received.|
|type|string|true|none|none|
|user_agent|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|api_request|

<h2 id="tocS_PoolMemberListResponse">PoolMemberListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapoolmemberlistresponse"></a>
<a id="schema_PoolMemberListResponse"></a>
<a id="tocSpoolmemberlistresponse"></a>
<a id="tocspoolmemberlistresponse"></a>

```json
{
  "data": [
    {
      "id": "7cb89288-1fb3-433e-a522-2d087e45988d",
      "last_seen_at": "2024-01-15T10:30:00Z",
      "name": "jane-laptop"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for Pool Members

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PoolMember](#schemapoolmember)]|false|none|Pool member details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_SophosDeviceListResponse">SophosDeviceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasophosdevicelistresponse"></a>
<a id="schema_SophosDeviceListResponse"></a>
<a id="tocSsophosdevicelistresponse"></a>
<a id="tocssophosdevicelistresponse"></a>

```json
{
  "data": [
    {
      "mac_addresses": [
        "string"
      ],
      "os_name": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "tamper_protection_supported": true,
      "last_agent_update_at": "1970-01-01T00:00:00Z",
      "os_minor_version": 0,
      "associated_person_via_login": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "os_platform": "string",
      "synced_at": "1970-01-01T00:00:00Z",
      "inserted_at": "1970-01-01T00:00:00Z",
      "ipv6_addresses": [
        "string"
      ],
      "sophos_tenant_id": "string",
      "group_id": "string",
      "group_name": "string",
      "tags": [
        {}
      ],
      "serial_number": "string",
      "isolation_admin_isolated": true,
      "group_hierarchy": [
        {}
      ],
      "health_threats_status": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "encryption_volumes": [
        {}
      ],
      "type": "string",
      "cloud_instance_id": "string",
      "associated_person_id": "string",
      "last_os_update_at": "1970-01-01T00:00:00Z",
      "encryption_overall_status": "string",
      "associated_person_name": "string",
      "health_overall": "string",
      "assigned_products": [
        {}
      ],
      "cloud_provider": "string",
      "packages": {},
      "os_build": 0,
      "os_is_server": true,
      "health_services_status": "string",
      "isolation_status": "string",
      "device_software": {},
      "cloned": true,
      "lockdown_status": "string",
      "ipv4_addresses": [
        "string"
      ],
      "health_service_details": [
        {}
      ],
      "tamper_protection_enabled": true,
      "online": true,
      "sophos_id": "string",
      "isolation_self_isolated": true,
      "os_major_version": 0,
      "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "hostname": "string"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SophosDevice](#schemasophosdevice)]|false|none|none|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_version scalar device comparison">version scalar device comparison</h2>
<!-- backwards compatibility -->
<a id="schemaversion scalar device comparison"></a>
<a id="schema_version scalar device comparison"></a>
<a id="tocSversion scalar device comparison"></a>
<a id="tocsversion scalar device comparison"></a>

```json
{
  "field": "firezone.last_seen_version",
  "op": "is",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|version field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|string|true|none|Segment-wise version, or @latest for firezone.last_seen_version only|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.last_seen_version|
|op|is|
|op|is_not|
|op|gt|
|op|gte|
|op|lt|
|op|lte|

<h2 id="tocS_SiteUpdateRequest">SiteUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasiteupdaterequest"></a>
<a id="schema_SiteUpdateRequest"></a>
<a id="tocSsiteupdaterequest"></a>
<a id="tocssiteupdaterequest"></a>

```json
{
  "site": {
    "name": "vpc-us-east"
  }
}
```

PATCH/PUT body for updating a Site. All fields are optional; omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site|object|true|none|none|

<h2 id="tocS_SentinelOnePostureProvider">SentinelOnePostureProvider</h2>
<!-- backwards compatibility -->
<a id="schemasentinelonepostureprovider"></a>
<a id="schema_SentinelOnePostureProvider"></a>
<a id="tocSsentinelonepostureprovider"></a>
<a id="tocssentinelonepostureprovider"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "disabled_reason": "string",
  "error_message": "string",
  "errored_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "inserted_at": "1970-01-01T00:00:00Z",
  "is_disabled": true,
  "is_verified": true,
  "management_url": "http://example.com",
  "name": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "type": "sentinelone",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

SentinelOne posture provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|disabled_reason|string \| null|true|none|none|
|error_message|string \| null|true|none|none|
|errored_at|string(date-time) \| null|true|none|none|
|id|string(uuid)|true|none|none|
|inserted_at|string(date-time)|true|none|none|
|is_disabled|boolean|true|none|none|
|is_verified|boolean|true|none|none|
|management_url|string(uri)|true|none|none|
|name|string|true|none|none|
|synced_at|string(date-time) \| null|true|none|none|
|type|string|true|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sentinelone|

<h2 id="tocS_PoolMemberPatchRequest">PoolMemberPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemapoolmemberpatchrequest"></a>
<a id="schema_PoolMemberPatchRequest"></a>
<a id="tocSpoolmemberpatchrequest"></a>
<a id="tocspoolmemberpatchrequest"></a>

```json
{
  "pool_members": {
    "add": [
      "7cb89288-1fb3-433e-a522-2d087e45988d"
    ],
    "remove": [
      "cc9f561a-444d-4083-ab38-0abc6cf2314c"
    ]
  }
}
```

PATCH body for adding and removing individual pool members. Both
operations are idempotent, and `remove` is applied before `add`, so a
Client named in both ends up in the pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool_members|object|true|none|none|

<h2 id="tocS_FlowLog">FlowLog</h2>
<!-- backwards compatibility -->
<a id="schemaflowlog"></a>
<a id="schema_FlowLog"></a>
<a id="tocSflowlog"></a>
<a id="tocsflowlog"></a>

```json
{
  "log_id": "f00060db0c2c8eb400000000",
  "initiator_device_id": "11e7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "last_packet": "2026-05-26T12:33:58.000Z",
  "inner_dst_ip": "10.0.0.5",
  "initiator_auth_provider_id": "7b2c1e40-9f3a-4d21-8c5e-1a2b3c4d5e6f",
  "initiator_device_uuid": "0C4A8D24-FA9F-4E56-9B57-40D0D46A245E",
  "flow_end": "2026-05-26T12:34:00.000Z",
  "initiator_device_identifier_for_vendor": "string",
  "policy_authorization_id": "6fa1d58f-0289-42e6-a3ba-7edfa46ee2d5",
  "tx_bytes": 20480,
  "initiator_client_version": "1.5.1",
  "type": "flow",
  "rx_packets": 100,
  "initiator_device_os_name": "macOS",
  "timestamp": "2026-05-26T12:34:56.789Z",
  "role": "responder",
  "tx_packets": 80,
  "inner_dst_port": 443,
  "initiator_device_firebase_installation_id": "string",
  "inner_src_ip": "100.64.0.1",
  "responder_device_id": "9d3a1c40-5f2b-4c8e-9a71-0b6d4e2f8c13",
  "initiator_actor_email": "user@example.com",
  "protocol": "tcp",
  "authorization_expires_at": "2026-05-26T20:29:00.000Z",
  "outers": [
    {
      "dst_ip": "198.51.100.5",
      "dst_port": 51820,
      "src_ip": "203.0.113.10",
      "src_port": 51820
    }
  ],
  "resource_id": "44e7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inner_src_port": 54321,
  "rx_bytes": 102400,
  "authorized_at": "2026-05-26T12:29:00.000Z",
  "flow_start": "2026-05-26T12:30:00.000Z",
  "initiator_device_os_version": "15.5",
  "inner_domain": "gitlab.company.com",
  "initiator_actor_id": "84e7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "initiator_actor_name": "John Doe",
  "resource_address": "gitlab.company.com",
  "initiator_device_serial": "C02ABC123",
  "resource_name": "GitLab",
  "policy_id": "46f997d1-77c8-4936-8655-8f050dffbfa4"
}
```

A single Flow Log entry, recording one network flow as accounted by one
of its two endpoints.

Both endpoints of a flow report it independently, so a flow yields up to
two entries that differ only in `role` and in the counters each side
observed. Every other field is oriented from the initiator regardless of
which side reported the entry: `inner_src_*` is always the initiator,
`inner_dst_*` always the responder, and `tx_*` always counts
initiator-to-responder traffic. `outers` records each outer network path
in the order it was observed. Comparing the two entries of a flow is how
reported traffic is cross-checked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log_id|string|true|none|Opaque identifier for the Flow Log entry. A 24-character lowercase<br>hexadecimal string starting with `f`.<br>|
|initiator_device_id|string(uuid)|true|none|ID of the Client that opened the flow. Always a Client.|
|last_packet|string(date-time) \| null|true|none|When the last packet was seen. Null while the flow is open.|
|inner_dst_ip|string|true|none|Tunnel IP of the responder, on both entries of the flow.|
|initiator_auth_provider_id|string(uuid) \| null|true|none|ID of the Auth Provider the initiating Client authenticated with.<br>|
|initiator_device_uuid|string \| null|true|none|Device UUID reported by the initiating Client.|
|flow_end|string(date-time) \| null|true|none|RFC 3339 timestamp of when the flow ended. Null while the flow is open.|
|initiator_device_identifier_for_vendor|string \| null|true|none|Vendor identifier reported by the initiating Client.|
|policy_authorization_id|string(uuid)|true|none|ID of the Policy Authorization that permitted the flow.|
|tx_bytes|integer \| null|true|none|Bytes sent initiator-to-responder, as counted by the reporting side. Null while the flow is open.|
|initiator_client_version|string \| null|true|none|Firezone Client version reported by the initiating Client.|
|type|string|true|none|none|
|rx_packets|integer \| null|true|none|Packets sent responder-to-initiator, as counted by the reporting side. Null while the flow is open.|
|initiator_device_os_name|string \| null|true|none|Operating system reported by the initiating Client.|
|timestamp|string(date-time)|true|none|RFC 3339 timestamp identifying when the flow was ingested.|
|role|string|true|none|Which of the two endpoints reported this entry: `initiator` means<br>`initiator_device_id` wrote it, `responder` means<br>`responder_device_id` did. Gateways always report `responder`;<br>  Clients report either role.<br>|
|tx_packets|integer \| null|true|none|Packets sent initiator-to-responder, as counted by the reporting side. Null while the flow is open.|
|inner_dst_port|integer|true|none|none|
|initiator_device_firebase_installation_id|string \| null|true|none|Firebase installation ID reported by the initiating Client.|
|inner_src_ip|string|true|none|Tunnel IP of the initiator, on both entries of the flow.|
|responder_device_id|string(uuid)|true|none|ID of the device the flow was opened to: the Gateway serving the<br>Resource, or the receiving Client for device-to-device flows.<br>|
|initiator_actor_email|string \| null|true|none|none|
|protocol|string|true|none|Transport protocol of the flow.|
|authorization_expires_at|string(date-time)|true|none|When the Policy Authorization expires.|
|outers|[object]|true|none|Outer network paths in observation order. Null while the flow is open;<br>the close report replaces it with the complete array. Source IP and<br>port must either both be populated or both be absent/null. The two<br>entries of a flow can disagree whenever NAT or a relay sits between<br>the peers.<br>|
|resource_id|string(uuid)|true|none|ID of the Resource accessed.|
|inner_src_port|integer|true|none|none|
|rx_bytes|integer \| null|true|none|Bytes sent responder-to-initiator, as counted by the reporting side. Null while the flow is open.|
|authorized_at|string(date-time)|true|none|When access to the Resource was authorized.|
|flow_start|string(date-time)|true|none|RFC 3339 timestamp of when the flow began. The `begin`/`end`<br>window matches flows whose [`flow_start`, `flow_end`) range<br>overlaps it.<br>|
|initiator_device_os_version|string \| null|true|none|Operating system version reported by the initiating Client.|
|inner_domain|string \| null|true|none|Domain name for flows to DNS Resources.|
|initiator_actor_id|string(uuid) \| null|true|none|ID of the Actor who opened the flow. This is always the initiating<br>Client's Actor. A Gateway has no Actor, and for device-to-device<br>flows the receiving Client's own Actor is not recorded here.<br>|
|initiator_actor_name|string \| null|true|none|none|
|resource_address|string \| null|true|none|Resource address, when the Resource type has one.|
|initiator_device_serial|string \| null|true|none|Device serial number reported by the initiating Client.|
|resource_name|string|true|none|none|
|policy_id|string(uuid)|true|none|ID of the Policy that permitted the flow.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|flow|
|role|initiator|
|role|responder|
|protocol|tcp|
|protocol|udp|

<h2 id="tocS_SiteListResponse">SiteListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasitelistresponse"></a>
<a id="schema_SiteListResponse"></a>
<a id="tocSsitelistresponse"></a>
<a id="tocssitelistresponse"></a>

```json
{
  "data": [
    {
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "name": "vpc-us-east"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Sites

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Site](#schemasite)]|false|none|Site details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_PolicyListResponse">PolicyListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapolicylistresponse"></a>
<a id="schema_PolicyListResponse"></a>
<a id="tocSpolicylistresponse"></a>
<a id="tocspolicylistresponse"></a>

```json
{
  "data": [
    {
      "conditions": [
        {
          "operator": "is_in",
          "property": "remote_ip_location_region",
          "values": [
            "US",
            "CA"
          ]
        }
      ],
      "description": "Policy to allow something",
      "flow_log_uploads_enabled": true,
      "group_id": "88eae9ce-9179-48c6-8430-770e38dd4775",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "is_disabled": false,
      "postures": {
        "and": [
          {
            "field": "intune.enrolled",
            "op": "is",
            "value": true
          },
          {
            "field": "intune.compliance_state",
            "op": "is",
            "rows": "all",
            "value": "compliant"
          },
          {
            "field": "intune.last_sync_at",
            "op": "within_last",
            "value": "PT24H"
          },
          {
            "or": [
              {
                "field": "firezone.last_seen_version",
                "op": "gte",
                "value": "@latest"
              },
              {
                "not": {
                  "field": "firezone.hostname",
                  "op": "starts_with",
                  "value": "test-"
                }
              }
            ]
          }
        ]
      },
      "require_attestation": false,
      "resource_id": "a9f60587-793c-46ae-8525-597f43ab2fb1"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Policies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Policy](#schemapolicy)]|false|none|Policy details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_EmailOTPAuthProviderListResponse">EmailOTPAuthProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemailotpauthproviderlistresponse"></a>
<a id="schema_EmailOTPAuthProviderListResponse"></a>
<a id="tocSemailotpauthproviderlistresponse"></a>
<a id="tocsemailotpauthproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_disabled": false,
      "issuer": "firezone",
      "name": "Email OTP",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Email OTP Auth Providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EmailOTPAuthProvider](#schemaemailotpauthprovider)]|false|none|Email OTP Auth Provider details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_float no_value provider comparison">float no_value provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemafloat no_value provider comparison"></a>
<a id="schema_float no_value provider comparison"></a>
<a id="tocSfloat no_value provider comparison"></a>
<a id="tocsfloat no_value provider comparison"></a>

```json
{
  "field": "iru.device_capacity_gb",
  "op": "exists",
  "rows": "any",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|float field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|object \| null|false|none|Omit value or use null for this operator|

#### Enumerated Values

|Property|Value|
|---|---|
|field|iru.device_capacity_gb|
|op|exists|
|op|does_not_exist|
|rows|any|
|rows|all|
|value|null|

<h2 id="tocS_SiteCreateRequest">SiteCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasitecreaterequest"></a>
<a id="schema_SiteCreateRequest"></a>
<a id="tocSsitecreaterequest"></a>
<a id="tocssitecreaterequest"></a>

```json
{
  "site": {
    "name": "vpc-us-east"
  }
}
```

POST body for creating a Site

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site|object|true|none|none|

<h2 id="tocS_ResourceListResponse">ResourceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelistresponse"></a>
<a id="schema_ResourceListResponse"></a>
<a id="tocSresourcelistresponse"></a>
<a id="tocsresourcelistresponse"></a>

```json
{
  "data": [
    {
      "address": "10.0.0.10",
      "address_description": "Production Database",
      "device_membership_criteria": {
        "device": {
          "field": "actor_id",
          "op": "eq",
          "value": {
            "subject": "actor_id"
          }
        }
      },
      "filters": [
        {
          "ports": [
            "5432"
          ],
          "protocol": "tcp"
        }
      ],
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "ip_stack": "ipv4_only",
      "name": "Prod DB",
      "site_id": "0642e09d-b3a2-47e4-9cd1-c2195faeeb67",
      "type": "ip"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple Resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Resource](#schemaresource)]|false|none|Resource details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|

<h2 id="tocS_string list device comparison">string list device comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring list device comparison"></a>
<a id="schema_string list device comparison"></a>
<a id="tocSstring list device comparison"></a>
<a id="tocsstring list device comparison"></a>

```json
{
  "field": "firezone.device_serial",
  "op": "is_in",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.device_serial|
|field|firezone.device_uuid|
|field|firezone.hostname|
|field|firezone.identifier_for_vendor|
|field|firezone.last_attested_cert_fingerprint|
|field|firezone.last_attested_cert_serial|
|field|firezone.last_attested_device_serial|
|field|firezone.last_attested_device_uuid|
|field|firezone.last_attested_mdm_device_id|
|field|firezone.last_seen_remote_ip_location_city|
|field|firezone.last_seen_user_agent|
|field|firezone.name|
|op|is_in|
|op|is_not_in|

<h2 id="tocS_GitHubAuthProvider">GitHubAuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemagithubauthprovider"></a>
<a id="schema_GitHubAuthProvider"></a>
<a id="tocSgithubauthprovider"></a>
<a id="tocsgithubauthprovider"></a>

```json
{
  "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
  "client_session_lifetime_secs": 604800,
  "context": "clients_and_portal",
  "email_verification_method": "proof",
  "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
  "inserted_at": "2025-01-01T00:00:00Z",
  "is_default": true,
  "is_disabled": false,
  "issuer": "https://github.com/login/oauth",
  "name": "GitHub",
  "portal_session_lifetime_secs": 28800,
  "updated_at": "2025-01-15T10:30:00Z"
}
```

GitHub Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|Account ID|
|client_session_lifetime_secs|integer \| null|true|none|Client session lifetime in seconds. Null when the account default applies.|
|context|string|true|none|Context|
|email_verification_method|string|true|none|How a GitHub identity is first linked to an existing user by email: proof emails a one-time code first, none links on a GitHub-verified email|
|id|string(uuid)|true|none|Provider ID|
|inserted_at|string(date-time)|true|none|Creation timestamp|
|is_default|boolean|true|none|Whether provider is default|
|is_disabled|boolean|true|none|Whether provider is disabled|
|issuer|string|true|none|Issuer|
|name|string|true|none|Provider name|
|portal_session_lifetime_secs|integer \| null|true|none|Portal session lifetime in seconds. Null when the account default applies.|
|updated_at|string(date-time)|true|none|Update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|context|clients_and_portal|
|context|clients_only|
|context|portal_only|
|email_verification_method|none|
|email_verification_method|proof|

<h2 id="tocS_string regex provider comparison">string regex provider comparison</h2>
<!-- backwards compatibility -->
<a id="schemastring regex provider comparison"></a>
<a id="schema_string regex provider comparison"></a>
<a id="tocSstring regex provider comparison"></a>
<a id="tocsstring regex provider comparison"></a>

```json
{
  "field": "defender.computer_dns_name",
  "op": "matches",
  "rows": "any",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|string field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|rows|string|false|none|Match any or every provider row; applies to this leaf independently|
|value|string|true|none|Regular expression; at most 256 bytes|

#### Enumerated Values

|Property|Value|
|---|---|
|field|defender.computer_dns_name|
|field|defender.defender_id|
|field|defender.entra_device_id|
|field|defender.os_processor|
|field|defender.rbac_group_name|
|field|defender.version|
|field|defender.vm_cloud_provider|
|field|defender.vm_id|
|field|defender.vm_resource_id|
|field|defender.vm_subscription_id|
|field|intune.attestation_boot_revision_list_info|
|field|intune.attestation_code_integrity_policy|
|field|intune.attestation_health_status_mismatch_info|
|field|intune.attestation_identity_key|
|field|intune.attestation_operating_system_rev_list_info|
|field|intune.attestation_pcr0|
|field|intune.attestation_pcr_hash_algorithm|
|field|intune.attestation_secure_boot_config_policy_fingerprint|
|field|intune.device_category_display_name|
|field|intune.device_name|
|field|intune.eas_device_id|
|field|intune.email_address|
|field|intune.enrollment_profile_name|
|field|intune.entra_device_id|
|field|intune.ethernet_mac_address|
|field|intune.iccid|
|field|intune.imei|
|field|intune.intune_id|
|field|intune.managed_device_name|
|field|intune.manufacturer|
|field|intune.meid|
|field|intune.model|
|field|intune.notes|
|field|intune.operating_system|
|field|intune.phone_number|
|field|intune.serial_number|
|field|intune.subscriber_carrier|
|field|intune.udid|
|field|intune.user_display_name|
|field|intune.user_id|
|field|intune.user_principal_name|
|field|intune.wifi_mac_address|
|field|iru.asset_tag|
|field|iru.blueprint_id|
|field|iru.blueprint_name|
|field|iru.device_name|
|field|iru.host_name|
|field|iru.iru_id|
|field|iru.local_hostname|
|field|iru.model|
|field|iru.model_identifier|
|field|iru.model_name|
|field|iru.os_build|
|field|iru.os_name|
|field|iru.serial_number|
|field|iru.supplemental_build_version|
|field|iru.user_email|
|field|iru.user_id|
|field|iru.user_name|
|field|santa.hostname|
|field|santa.machine_model|
|field|santa.os_build|
|field|santa.primary_user|
|field|santa.santa_id|
|field|santa.serial_number|
|field|santa.temporary_admin_mode_user|
|field|sentinelone.account_name|
|field|sentinelone.ad_computer_distinguished_name|
|field|sentinelone.ad_last_user_distinguished_name|
|field|sentinelone.ad_mail|
|field|sentinelone.ad_user_principal_name|
|field|sentinelone.computer_name|
|field|sentinelone.cpu_id|
|field|sentinelone.domain|
|field|sentinelone.external_id|
|field|sentinelone.group_id|
|field|sentinelone.group_ip|
|field|sentinelone.group_name|
|field|sentinelone.last_logged_in_user_name|
|field|sentinelone.machine_sid|
|field|sentinelone.model_name|
|field|sentinelone.os_name|
|field|sentinelone.os_username|
|field|sentinelone.sentinelone_account_id|
|field|sentinelone.sentinelone_id|
|field|sentinelone.serial_number|
|field|sentinelone.site_id|
|field|sentinelone.site_name|
|field|sentinelone.storage_name|
|field|sentinelone.storage_type|
|field|sentinelone.uuid|
|field|sophos.associated_person_id|
|field|sophos.associated_person_name|
|field|sophos.associated_person_via_login|
|field|sophos.cloud_instance_id|
|field|sophos.group_id|
|field|sophos.group_name|
|field|sophos.hostname|
|field|sophos.os_name|
|field|sophos.serial_number|
|field|sophos.sophos_id|
|op|matches|
|op|does_not_match|
|rows|any|
|rows|all|

<h2 id="tocS_IntuneDevice">IntuneDevice</h2>
<!-- backwards compatibility -->
<a id="schemaintunedevice"></a>
<a id="schema_IntuneDevice"></a>
<a id="tocSintunedevice"></a>
<a id="tocsintunedevice"></a>

```json
{
  "device_registration_state": "string",
  "attestation_operating_system_rev_list_info": "string",
  "entra_registered": true,
  "attestation_boot_app_security_version": "string",
  "operating_system": "string",
  "is_supervised": true,
  "notes": "string",
  "free_storage_space_bytes": 0,
  "attestation_issued_at": "1970-01-01T00:00:00Z",
  "config_manager_compliance_policy": true,
  "user_display_name": "string",
  "config_manager_device_configuration": true,
  "config_manager_inventory": true,
  "updated_at": "1970-01-01T00:00:00Z",
  "enrolled_at": "1970-01-01T00:00:00Z",
  "total_storage_space_bytes": 0,
  "attestation_operating_system_kernel_debugging": true,
  "attestation_data_execution_policy_enabled": true,
  "ethernet_mac_address": "string",
  "synced_at": "1970-01-01T00:00:00Z",
  "inserted_at": "1970-01-01T00:00:00Z",
  "attestation_health_status_mismatch_info": "string",
  "intune_id": "string",
  "management_certificate_expires_at": "1970-01-01T00:00:00Z",
  "compliance_state": "string",
  "require_user_enrollment_approval": true,
  "attestation_code_integrity_check_version": "string",
  "attestation_pcr0": "string",
  "attestation_boot_revision_list_info": "string",
  "attestation_reset_count": 0,
  "attestation_safe_mode": true,
  "managed_device_owner_type": "string",
  "serial_number": "string",
  "attestation_secure_boot": true,
  "device_category_display_name": "string",
  "attestation_code_integrity_policy": "string",
  "attestation_virtual_secure_mode": true,
  "last_sync_at": "1970-01-01T00:00:00Z",
  "is_encrypted": true,
  "eas_activated": true,
  "manufacturer": "string",
  "eas_activated_at": "1970-01-01T00:00:00Z",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "attestation_early_launch_anti_malware_driver_protection": true,
  "management_agent": "string",
  "attestation_tpm_version": "string",
  "management_state": "string",
  "wifi_mac_address": "string",
  "attestation_code_integrity": true,
  "user_principal_name": "string",
  "entra_device_id": "string",
  "android_security_patch_level": "1970-01-01",
  "attestation_pcr_hash_algorithm": "string",
  "device_enrollment_type": "string",
  "subscriber_carrier": "string",
  "enrollment_profile_name": "string",
  "model": "string",
  "attestation_boot_manager_version": "string",
  "partner_reported_threat_state": "string",
  "config_manager_modern_apps": true,
  "user_id": "string",
  "jail_broken": true,
  "eas_device_id": "string",
  "exchange_last_successful_sync_at": "1970-01-01T00:00:00Z",
  "attestation_bit_locker_enabled": true,
  "attestation_content_version": "string",
  "exchange_access_state": "string",
  "managed_device_name": "string",
  "udid": "string",
  "attestation_secure_boot_config_policy_fingerprint": "string",
  "attestation_identity_key": "string",
  "attestation_boot_manager_security_version": "string",
  "compliance_grace_period_expiration_at": "1970-01-01T00:00:00Z",
  "exchange_access_state_reason": "string",
  "attestation_windows_pe": true,
  "attestation_status": "string",
  "iccid": "string",
  "meid": "string",
  "attestation_supported": true,
  "attestation_test_signing": true,
  "attestation_boot_debugging": true,
  "phone_number": "string",
  "attestation_restart_count": 0,
  "imei": "string",
  "os_version": "string",
  "physical_memory_bytes": 0,
  "config_manager_windows_update_for_business": true,
  "email_address": "string",
  "device_name": "string",
  "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "config_manager_resource_access": true
}
```

Device synced from Microsoft Intune

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_registration_state|string \| null|true|none|none|
|attestation_operating_system_rev_list_info|string \| null|true|none|none|
|entra_registered|boolean \| null|true|none|none|
|attestation_boot_app_security_version|string \| null|true|none|none|
|operating_system|string \| null|true|none|none|
|is_supervised|boolean \| null|true|none|none|
|notes|string \| null|true|none|none|
|free_storage_space_bytes|integer \| null|true|none|none|
|attestation_issued_at|string(date-time) \| null|true|none|none|
|config_manager_compliance_policy|boolean \| null|true|none|none|
|user_display_name|string \| null|true|none|none|
|config_manager_device_configuration|boolean \| null|true|none|none|
|config_manager_inventory|boolean \| null|true|none|none|
|updated_at|string(date-time) \| null|true|none|none|
|enrolled_at|string(date-time) \| null|true|none|none|
|total_storage_space_bytes|integer \| null|true|none|none|
|attestation_operating_system_kernel_debugging|boolean \| null|true|none|none|
|attestation_data_execution_policy_enabled|boolean \| null|true|none|none|
|ethernet_mac_address|string \| null|true|none|none|
|synced_at|string(date-time)|true|none|none|
|inserted_at|string(date-time) \| null|true|none|none|
|attestation_health_status_mismatch_info|string \| null|true|none|none|
|intune_id|string|true|none|none|
|management_certificate_expires_at|string(date-time) \| null|true|none|none|
|compliance_state|string \| null|true|none|none|
|require_user_enrollment_approval|boolean \| null|true|none|none|
|attestation_code_integrity_check_version|string \| null|true|none|none|
|attestation_pcr0|string \| null|true|none|none|
|attestation_boot_revision_list_info|string \| null|true|none|none|
|attestation_reset_count|integer \| null|true|none|none|
|attestation_safe_mode|boolean \| null|true|none|none|
|managed_device_owner_type|string \| null|true|none|none|
|serial_number|string \| null|true|none|none|
|attestation_secure_boot|boolean \| null|true|none|none|
|device_category_display_name|string \| null|true|none|none|
|attestation_code_integrity_policy|string \| null|true|none|none|
|attestation_virtual_secure_mode|boolean \| null|true|none|none|
|last_sync_at|string(date-time) \| null|true|none|none|
|is_encrypted|boolean \| null|true|none|none|
|eas_activated|boolean \| null|true|none|none|
|manufacturer|string \| null|true|none|none|
|eas_activated_at|string(date-time) \| null|true|none|none|
|account_id|string(uuid)|true|none|none|
|attestation_early_launch_anti_malware_driver_protection|boolean \| null|true|none|none|
|management_agent|string \| null|true|none|none|
|attestation_tpm_version|string \| null|true|none|none|
|management_state|string \| null|true|none|none|
|wifi_mac_address|string \| null|true|none|none|
|attestation_code_integrity|boolean \| null|true|none|none|
|user_principal_name|string \| null|true|none|none|
|entra_device_id|string \| null|true|none|none|
|android_security_patch_level|string(date) \| null|true|none|none|
|attestation_pcr_hash_algorithm|string \| null|true|none|none|
|device_enrollment_type|string \| null|true|none|none|
|subscriber_carrier|string \| null|true|none|none|
|enrollment_profile_name|string \| null|true|none|none|
|model|string \| null|true|none|none|
|attestation_boot_manager_version|string \| null|true|none|none|
|partner_reported_threat_state|string \| null|true|none|none|
|config_manager_modern_apps|boolean \| null|true|none|none|
|user_id|string \| null|true|none|none|
|jail_broken|boolean \| null|true|none|none|
|eas_device_id|string \| null|true|none|none|
|exchange_last_successful_sync_at|string(date-time) \| null|true|none|none|
|attestation_bit_locker_enabled|boolean \| null|true|none|none|
|attestation_content_version|string \| null|true|none|none|
|exchange_access_state|string \| null|true|none|none|
|managed_device_name|string \| null|true|none|none|
|udid|string \| null|true|none|none|
|attestation_secure_boot_config_policy_fingerprint|string \| null|true|none|none|
|attestation_identity_key|string \| null|true|none|none|
|attestation_boot_manager_security_version|string \| null|true|none|none|
|compliance_grace_period_expiration_at|string(date-time) \| null|true|none|none|
|exchange_access_state_reason|string \| null|true|none|none|
|attestation_windows_pe|boolean \| null|true|none|none|
|attestation_status|string \| null|true|none|none|
|iccid|string \| null|true|none|none|
|meid|string \| null|true|none|none|
|attestation_supported|boolean \| null|true|none|none|
|attestation_test_signing|boolean \| null|true|none|none|
|attestation_boot_debugging|boolean \| null|true|none|none|
|phone_number|string \| null|true|none|none|
|attestation_restart_count|integer \| null|true|none|none|
|imei|string \| null|true|none|none|
|os_version|string \| null|true|none|none|
|physical_memory_bytes|integer \| null|true|none|none|
|config_manager_windows_update_for_business|boolean \| null|true|none|none|
|email_address|string \| null|true|none|none|
|device_name|string \| null|true|none|none|
|posture_provider_id|string(uuid)|true|none|none|
|config_manager_resource_access|boolean \| null|true|none|none|

<h2 id="tocS_ipv6 list device comparison">ipv6 list device comparison</h2>
<!-- backwards compatibility -->
<a id="schemaipv6 list device comparison"></a>
<a id="schema_ipv6 list device comparison"></a>
<a id="tocSipv6 list device comparison"></a>
<a id="tocsipv6 list device comparison"></a>

```json
{
  "field": "firezone.ipv6",
  "op": "is_in_cidr",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|ipv6 field; see PolicyPostureNode for platform applicability|
|op|string|true|none|none|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|field|firezone.ipv6|
|op|is_in_cidr|
|op|is_not_in_cidr|

<h2 id="tocS_PostureFieldListResponse">PostureFieldListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaposturefieldlistresponse"></a>
<a id="schema_PostureFieldListResponse"></a>
<a id="tocSposturefieldlistresponse"></a>
<a id="tocsposturefieldlistresponse"></a>

```json
{
  "data": [
    {
      "field": "intune.compliance_state",
      "operators": [
        "is",
        "is_not",
        "exists",
        "does_not_exist"
      ],
      "platforms": [
        "windows",
        "macos",
        "ios",
        "android"
      ],
      "provider": "intune",
      "rows_supported": true,
      "type": "enum_string"
    }
  ]
}
```

Response schema for every Posture Field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PostureField](#schemaposturefield)]|true|none|Posture Fields|

<h2 id="tocS_FlowLogIngestRequest">FlowLogIngestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaflowlogingestrequest"></a>
<a id="schema_FlowLogIngestRequest"></a>
<a id="tocSflowlogingestrequest"></a>
<a id="tocsflowlogingestrequest"></a>

```json
{
  "flow_logs": [
    {
      "domain": "string",
      "flow_end": "1970-01-01T00:00:00Z",
      "flow_start": "1970-01-01T00:00:00Z",
      "inner_dst_ip": "string",
      "inner_dst_port": 0,
      "inner_src_ip": "string",
      "inner_src_port": 0,
      "last_packet": "1970-01-01T00:00:00Z",
      "outers": [
        {
          "dst_ip": "string",
          "dst_port": 0,
          "path_activated_at": "1970-01-01T00:00:00Z",
          "src_ip": "string",
          "src_port": 0
        }
      ],
      "protocol": "tcp",
      "rx_bytes": 0,
      "rx_packets": 0,
      "tx_bytes": 0,
      "tx_packets": 0
    }
  ]
}
```

A batch of flow-log records for one policy authorization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flow_logs|[[FlowLogIngestRecord](#schemaflowlogingestrecord)]|true|none|none|

<h2 id="tocS_AccountLimit">AccountLimit</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimit"></a>
<a id="schema_AccountLimit"></a>
<a id="tocSaccountlimit"></a>
<a id="tocsaccountlimit"></a>

```json
{
  "available": 0,
  "total": 0,
  "used": 0
}
```

Account limit with usage information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|integer|true|none|Remaining available count|
|total|integer|true|none|Total allowed count|
|used|integer|true|none|Current usage count|

<h2 id="tocS_IruDeviceResponse">IruDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemairudeviceresponse"></a>
<a id="schema_IruDeviceResponse"></a>
<a id="tocSirudeviceresponse"></a>
<a id="tocsirudeviceresponse"></a>

```json
{
  "data": {
    "host_name": "string",
    "gatekeeper_trusted_developers": true,
    "secure_boot_level": "string",
    "os_name": "string",
    "filevault_key_rotation_scheduled_at": "1970-01-01T00:00:00Z",
    "firewall_enabled": true,
    "model_name": "string",
    "firewall_logging_option": "string",
    "shared_ipad": true,
    "local_hostname": "string",
    "activation_lock_allowed_while_supervised": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "device_activation_lock_enabled": true,
    "gatekeeper_version": "string",
    "bootstrap_token_escrowed": true,
    "iru_id": "string",
    "synced_at": "1970-01-01T00:00:00Z",
    "asset_tag": "string",
    "blueprint_name": "string",
    "inserted_at": "1970-01-01T00:00:00Z",
    "data_roaming": true,
    "is_removed": true,
    "ssv_enabled": true,
    "filevault_key_type": "string",
    "device_capacity_gb": 0,
    "tags": [
      "string"
    ],
    "filevault_key_escrowed": true,
    "apple_silicon": true,
    "serial_number": "string",
    "cellular_technology": "string",
    "blueprint_id": "string",
    "user_manages_kext": true,
    "hotspot": true,
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "mdm_enabled": true,
    "user_email": "string",
    "gatekeeper_opaque_version": "string",
    "external_boot_level": "string",
    "firewall_collected_at": "1970-01-01T00:00:00Z",
    "software_update_requires_bootstrap_token": true,
    "xprotect_version": "string",
    "agent_installed": true,
    "mdm_manages_kext": true,
    "display_os_version": "string",
    "filevault_regeneration_needed": true,
    "is_missing": true,
    "last_enrolled_at": "1970-01-01T00:00:00Z",
    "gatekeeper_enabled": true,
    "firewall_version": "string",
    "first_enrolled_at": "1970-01-01T00:00:00Z",
    "firewall_logging": true,
    "model_identifier": "string",
    "os_build": "string",
    "user_activation_lock_enabled": true,
    "activation_lock_collected_at": "1970-01-01T00:00:00Z",
    "lost_mode_status": "string",
    "startup_settings_collected_at": "1970-01-01T00:00:00Z",
    "platform": "string",
    "filevault_enabled": true,
    "user_is_archived": true,
    "activation_lock_supported": true,
    "supplemental_build_version": "string",
    "sip_enabled": true,
    "firewall_allow_signed_applications": true,
    "model": "string",
    "supplemental_os_version_extra": "string",
    "user_id": "string",
    "bootstrap_token_auth": true,
    "firewall_block_all_incoming": true,
    "last_check_in_at": "1970-01-01T00:00:00Z",
    "firewall_stealth_mode": true,
    "kext_requires_bootstrap_token": true,
    "agent_version": "string",
    "activation_lock_bypass_code_failed": true,
    "inventory_collected_at": "1970-01-01T00:00:00Z",
    "any_signed_os": true,
    "filevault_collected_at": "1970-01-01T00:00:00Z",
    "gatekeeper_collected_at": "1970-01-01T00:00:00Z",
    "firewall_unloading": true,
    "os_version": "string",
    "malware_removal_tool_version": "string",
    "device_family": "string",
    "user_name": "string",
    "device_name": "string",
    "posture_provider_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IruDevice](#schemairudevice)|false|none|Device synced from Iru (formerly Kandji)|

<h2 id="tocS_OIDCAuthProviderResponse">OIDCAuthProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoidcauthproviderresponse"></a>
<a id="schema_OIDCAuthProviderResponse"></a>
<a id="tocSoidcauthproviderresponse"></a>
<a id="tocsoidcauthproviderresponse"></a>

```json
{
  "data": {
    "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "client_id": "my-client-id",
    "client_session_lifetime_secs": 604800,
    "context": "clients_and_portal",
    "discovery_document_uri": "https://idp.example.com/.well-known/openid-configuration",
    "email_verification_method": "claim",
    "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
    "inserted_at": "2025-01-01T00:00:00Z",
    "is_default": false,
    "is_disabled": false,
    "issuer": "https://idp.example.com",
    "name": "OIDC Provider",
    "portal_session_lifetime_secs": 28800,
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

Response schema for single OIDC Auth Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OIDCAuthProvider](#schemaoidcauthprovider)|false|none|OIDC Auth Provider|

<h2 id="tocS_GitHubAuthProviderListResponse">GitHubAuthProviderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagithubauthproviderlistresponse"></a>
<a id="schema_GitHubAuthProviderListResponse"></a>
<a id="tocSgithubauthproviderlistresponse"></a>
<a id="tocsgithubauthproviderlistresponse"></a>

```json
{
  "data": [
    {
      "account_id": "5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
      "client_session_lifetime_secs": 604800,
      "context": "clients_and_portal",
      "email_verification_method": "proof",
      "id": "42a7f82f-831a-4a9d-8f17-c66c2bb6e205",
      "inserted_at": "2025-01-01T00:00:00Z",
      "is_default": true,
      "is_disabled": false,
      "issuer": "https://github.com/login/oauth",
      "name": "GitHub",
      "portal_session_lifetime_secs": 28800,
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "count": 1,
    "limit": 10,
    "next_page": "string",
    "prev_page": "string"
  }
}
```

Response schema for multiple GitHub Auth Providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GitHubAuthProvider](#schemagithubauthprovider)]|false|none|GitHub Auth Provider details|
|metadata|[PaginationMetadata](#schemapaginationmetadata)|false|none|Pagination metadata for paginated responses.|
