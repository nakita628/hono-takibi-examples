<h1 id="circleci-api">CircleCI API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This describes the resources that make up the CircleCI API v2.

---

New to the CircleCI API? Start with the [V3 API](https://circleci.com/docs/api/v3/index.html) - it's where new capabilities are landing, with clearer conventions than v2. This document covers v2, which remains supported.

Base URLs:

* <a href="https://circleci.com/api/v2">https://circleci.com/api/v2</a>

License: <a href="https://opensource.org/license/MIT">MIT</a>

# Authentication

* API Key (api_key_header)
    - Parameter Name: **Circle-Token**, in: header. Project API tokens are not supported for API v2. Use a personal API token.

- HTTP Authentication, scheme: bearer (Recommended) Bearer token authentication as defined in RFC 6750. Project API tokens are not supported for API v2. Use a personal API token.

- HTTP Authentication, scheme: basic HTTP basic authentication. The username should be set as the circle-token value, and the password should be left blank. Note that project tokens are currently not supported on API v2.

* API Key (api_key_query)
    - Parameter Name: **circle-token**, in: query. DEPRECATED - we will remove this option in the future. Project API tokens are not supported for API v2. Use a personal API token.

<h1 id="circleci-api-context">Context</h1>

Endpoints relating to [contexts](https://circleci.com/docs/contexts/). Use contexts to secure and share environment variables.

## List contexts

<a id="opIdlistContexts"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /context`

List all contexts for an owner.

<h3 id="list-contexts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|owner-id|query|string(uuid)|false|The unique ID of the owner of the context. This is the organization ID. Specify either owner/organization ID or the owner/organization slug. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.|
|owner-slug|query|string|false|A string that represents an organization. This is the organization slug. Specify either this or organization/owner ID. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.|
|owner-type|query|string|false|The type of the owner. Defaults to "organization". Use "account" if you are using CircleCI server.|
|page-token|query|string|false|A token to specify which page of results to fetch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|owner-type|account|
|owner-type|organization|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "created_at": "2015-09-21T17:29:21.042Z"
    }
  ],
  "next_page_token": "string"
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-contexts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of contexts|[context_list](#schemacontext_list)|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-contexts-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create a new context

<a id="opIdcreateContext"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "string",
    "owner": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "organization"
    }
  }'
```

`POST /context`

Creates a new context in the specified organization.

> Body parameter

```json
{
  "name": "string",
  "owner": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "organization"
  }
}
```

<h3 id="create-a-new-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[context_created](#schemacontext_created)|false|none|
|» name|body|string|true|The user defined name of the context.|
|» owner|body|object|true|none|
|» » *oneOf*|body|object|false|none|
|» » id|body|string(uuid)|true|The unique ID of the owner of the context. This is the organization ID. Specify either owner/organization ID or the owner/organization slug. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.|
|» » type|body|string|false|The type of the owner. Defaults to "organization". Use "account" if you are using CircleCI server.|
|» » *oneOf*|body|object|false|none|
|» » slug|body|string|true|A string that represents an organization. This is the organization slug. Specify either this or organization/owner ID. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.|
|» » type|body|string|false|The type of owner. Defaults to "organization". Accounts are only used as context owners in server and must be specified by an id instead of a slug.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|account|
|» » type|organization|
|» » type|organization|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "2015-09-21T17:29:21.042Z"
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="create-a-new-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new context|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="create-a-new-context-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the context.|
|name|string|true|none|The user-defined name of the context.|
|created_at|string(date-time)|true|none|The date and time the context was created.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a context

<a id="opIdgetContext"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /context/{context_id}`

Returns basic information about a context.

<h3 id="get-a-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "2015-09-21T17:29:21.042Z"
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-a-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The context|[context](#schemacontext)|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-a-context-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete a context

<a id="opIddeleteContext"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /context/{context_id}`

Delete a context by its ID. Will also delete all environment variables inside the context.

<h3 id="delete-a-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="delete-a-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message|[delete_context_response](#schemadelete_context_response)|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="delete-a-context-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## List environment variables

<a id="opIdlistEnvironmentVariablesFromContext"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a/environment-variable \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /context/{context_id}/environment-variable`

List information about environment variables in a context, not including their values.

<h3 id="list-environment-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|
|page-token|query|string|false|A token to specify which page of results to fetch.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "variable": "POSTGRES_USER",
      "created_at": "2015-09-21T17:29:21.042Z",
      "updated_at": "2015-09-21T17:29:21.042Z",
      "context_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "next_page_token": "string"
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-environment-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of environment variables|[env_var_list](#schemaenv_var_list)|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-environment-variables-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Add or update an environment variable

<a id="opIdaddEnvironmentVariableToContext"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a/environment-variable/POSTGRES_USER \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "value": "some-secret-value"
  }'
```

`PUT /context/{context_id}/environment-variable/{env_var_name}`

Create or update an environment variable within a context. Returns information about the environment variable, not including its value.

> Body parameter

```json
{
  "value": "some-secret-value"
}
```

<h3 id="add-or-update-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|
|env_var_name|path|string|true|The name of the environment variable.|
|body|body|object|false|none|
|» value|body|string|true|The value of the environment variable|

> Example responses

> 200 Response

```json
{
  "variable": "POSTGRES_USER",
  "created_at": "2015-09-21T17:29:21.042Z",
  "updated_at": "2015-09-21T17:29:21.042Z",
  "context_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="add-or-update-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new environment variable|[update_env_var](#schemaupdate_env_var)|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="add-or-update-an-environment-variable-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Remove an environment variable

<a id="opIddeleteEnvironmentVariableFromContext"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a/environment-variable/POSTGRES_USER \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /context/{context_id}/environment-variable/{env_var_name}`

Delete an environment variable from a context.

<h3 id="remove-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|
|env_var_name|path|string|true|The name of the environment variable.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="remove-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message|[delete_env_var](#schemadelete_env_var)|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="remove-an-environment-variable-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get context restrictions

<a id="opIdgetContextRestrictions"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a/restrictions \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /context/{context_id}/restrictions`

Gets a list of project and expression restrictions associated with a context.

<h3 id="get-context-restrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "context_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "restriction_type": "project",
      "restriction_value": "string"
    }
  ],
  "next_page_token": "string"
}
```

> 400 Response

```json
{
  "message": "context_id is invalid."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-context-restrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[context_project_restrictions_list](#schemacontext_project_restrictions_list)|
|400|Bad Request|Context ID provided is invalid.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-context-restrictions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create context restriction

<a id="opIdcreateContextRestriction"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a/restrictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "restriction_type": "project",
    "restriction_value": "405d8375-3514-403b-8c43-83ae74cfe0e9"
  }'
```

`POST /context/{context_id}/restrictions`

Creates project or expression restriction on a context.

> Body parameter

```json
{
  "restriction_type": "project",
  "restriction_value": "405d8375-3514-403b-8c43-83ae74cfe0e9"
}
```

<h3 id="create-context-restriction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|
|body|body|object|true|none|
|» restriction_type|body|string|false|Type of the restriction.|
|» restriction_value|body|string|false|Value used to evaluate the restriction. If the `restriction_type`<br>is `project`, this will be the project UUID. If the `restriction_type`<br>is `expression`, this will be the expression rule.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» restriction_type|project|
|» restriction_type|expression|
|» restriction_type|group|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "405d8375-3514-403b-8c43-83ae74cfe0e9",
  "name": "project-name",
  "restriction_type": "project",
  "restriction_value": "405d8375-3514-403b-8c43-83ae74cfe0e9"
}
```

> 400 Response

```json
{
  "message": "This restriction cannot be applied to this context."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 409 Response

```json
{
  "message": "The restriction you're trying to add already exists."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="create-context-restriction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response.|[restriction_created](#schemarestriction_created)|
|400|Bad Request|Bad request.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|409|Conflict|Request conflict.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="create-context-restriction-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete context restriction

<a id="opIddeleteContextRestriction"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/context/be8bb2e3-c3d6-4098-89f4-572ff976ba9a/restrictions/1c23d2cb-07b1-4a28-8af3-e369732050ed \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /context/{context_id}/restrictions/{restriction_id}`

Deletes a project, expression or group restriction from a context.

<h3 id="delete-context-restriction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string(uuid)|true|An opaque identifier of a context.|
|restriction_id|path|string|true|An opaque identifier of a context restriction.|

> Example responses

> 200 Response

```json
{
  "message": "Context restriction deleted."
}
```

> 400 Response

```json
{
  "message": "restriction_id is invalid."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="delete-context-restriction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[restriction_deleted](#schemarestriction_deleted)|
|400|Bad Request|Context restriction ID provided is invalid.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="delete-context-restriction-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-insights">Insights</h1>

Endpoints relating to [Insights](https://circleci.com/docs/insights/). Use Insights to monitor credit and compute usage for your projects.

## Get summary metrics and trends for a project across it's workflows and branches

<a id="opIdgetProjectWorkflowsPageData"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/pages/gh%2FCircleCI-Public%2Fapi-preview-docs/summary \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/pages/{project-slug}/summary`

Get summary metrics and trends for a project at workflow and branch level.
             Workflow runs going back at most 90 days are included in the aggregation window.
             Trends are only supported upto last 30 days.
             Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

<h3 id="get-summary-metrics-and-trends-for-a-project-across-its-workflows-and-branches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|reporting-window|query|string|false|The time window used to calculate summary metrics. If not provided, defaults to last-90-days|
|branches|query|object|false|The names of VCS branches to include in branch-level workflow metrics.|
|workflow-names|query|object|false|The names of workflows to include in workflow-level metrics.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reporting-window|last-7-days|
|reporting-window|last-90-days|
|reporting-window|last-24-hours|
|reporting-window|last-30-days|
|reporting-window|last-60-days|

> Example responses

> 200 Response

```json
{
  "org_id": null,
  "project_id": null,
  "project_data": {
    "metrics": {
      "total_runs": 0,
      "total_duration_secs": 0,
      "total_credits_used": 0,
      "success_rate": 0,
      "throughput": 0
    },
    "trends": {
      "total_runs": 0,
      "total_duration_secs": 0,
      "total_credits_used": 0,
      "success_rate": 0,
      "throughput": 0
    }
  },
  "project_workflow_data": [
    {
      "workflow_name": "build-and-test",
      "metrics": {
        "total_credits_used": 0,
        "p95_duration_secs": 0,
        "total_runs": 0,
        "success_rate": 0
      },
      "trends": {
        "total_credits_used": 0,
        "p95_duration_secs": 0,
        "total_runs": 0,
        "success_rate": 0
      }
    }
  ],
  "project_workflow_branch_data": [
    {
      "workflow_name": "build-and-test",
      "branch": "main",
      "metrics": {
        "total_credits_used": 0,
        "p95_duration_secs": 0,
        "total_runs": 0,
        "success_rate": 0
      },
      "trends": {
        "total_credits_used": 0,
        "p95_duration_secs": 0,
        "total_runs": 0,
        "success_rate": 0
      }
    }
  ],
  "all_branches": [
    "main"
  ],
  "all_workflows": [
    "build-and-test"
  ]
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-summary-metrics-and-trends-for-a-project-across-its-workflows-and-branches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Aggregated summary metrics and trends by workflow and branches|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-summary-metrics-and-trends-for-a-project-across-its-workflows-and-branches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_id|object|false|none|The unique ID of the organization|
|project_id|object|false|none|The unique ID of the project|
|project_data|object|false|none|Metrics and trends data aggregated for a given project.|
|» metrics|object|true|none|Metrics aggregated across all workflows and branches for a project.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » total_duration_secs|integer(int64)|true|none|Total duration, in seconds.|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed over the current timeseries interval.|
|» » success_rate|number(float)|true|none|none|
|» » throughput|number(float)|true|none|The average number of runs per day.|
|» trends|object|true|none|Metric trends aggregated across all workflows and branches for a project.|
|» » total_runs|number(float)|true|none|The trend value for total number of runs.|
|» » total_duration_secs|number(float)|true|none|Trend value for total duration.|
|» » total_credits_used|number(float)|true|none|The trend value for total credits consumed.|
|» » success_rate|number(float)|true|none|The trend value for the success rate.|
|» » throughput|number(float)|true|none|Trend value for the average number of runs per day.|
|project_workflow_data|[object]|false|none|A list of metrics and trends data for workflows for a given project.|
|» workflow_name|string|true|none|The name of the workflow.|
|» metrics|object|true|none|Metrics aggregated across a workflow or branchfor a project.|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed over the current timeseries interval.|
|» » p95_duration_secs|number(float)|true|none|The 95th percentile duration among a group of workflow runs.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » success_rate|number(float)|true|none|none|
|» trends|object|true|none|Trends aggregated across a workflow or branch for a project.|
|» » total_credits_used|number(float)|true|none|The trend value for total credits consumed.|
|» » p95_duration_secs|number(float)|true|none|The 95th percentile duration among a group of workflow runs.|
|» » total_runs|number(float)|true|none|The trend value for total number of runs.|
|» » success_rate|number(float)|true|none|The trend value for the success rate.|
|project_workflow_branch_data|[object]|false|none|A list of metrics and trends data for branches for a given project.|
|» workflow_name|string|true|none|The name of the workflow.|
|» branch|string|true|none|The VCS branch of a workflow's trigger.|
|» metrics|object|true|none|Metrics aggregated across a workflow or branchfor a project.|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed over the current timeseries interval.|
|» » p95_duration_secs|number(float)|true|none|The 95th percentile duration among a group of workflow runs.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » success_rate|number(float)|true|none|none|
|» trends|object|true|none|Trends aggregated across a workflow or branch for a project.|
|» » total_credits_used|number(float)|true|none|The trend value for total credits consumed.|
|» » p95_duration_secs|number(float)|true|none|The 95th percentile duration among a group of workflow runs.|
|» » total_runs|number(float)|true|none|The trend value for total number of runs.|
|» » success_rate|number(float)|true|none|The trend value for the success rate.|
|all_branches|[string]|false|none|A list of all the branches for a given project.|
|all_workflows|[string]|false|none|A list of all the workflows for a given project.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Job timeseries data

<a id="opIdgetJobTimeseries"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/time-series/gh%2FCircleCI-Public%2Fapi-preview-docs/workflows/build-and-test/jobs \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/time-series/{project-slug}/workflows/{workflow-name}/jobs`

Get timeseries data for all jobs within a workflow. Hourly granularity data is only retained for 48 hours while daily granularity data is retained for 90 days.

<h3 id="job-timeseries-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|workflow-name|path|string|true|The name of the workflow.|
|branch|query|string|false|The name of a vcs branch. If not passed we will scope the API call to the default branch.|
|granularity|query|string|false|The granularity for which to query timeseries data.|
|start-date|query|string(date-time)|false|Include only executions that started at or after this date. This must be specified if an end-date is provided.|
|end-date|query|string(date-time)|false|Include only executions that started before this date. This date can be at most 90 days after the start-date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|granularity|daily|
|granularity|hourly|

> Example responses

> 200 Response

```json
{
  "next_page_token": "string",
  "items": [
    {
      "name": "build-and-test",
      "min_started_at": "1970-01-01T00:00:00Z",
      "max_ended_at": "1970-01-01T00:00:00Z",
      "timestamp": "1970-01-01T00:00:00Z",
      "metrics": {
        "total_runs": 0,
        "failed_runs": 0,
        "successful_runs": 0,
        "throughput": 0,
        "median_credits_used": 0,
        "total_credits_used": 0,
        "duration_metrics": {
          "min": 0,
          "median": 0,
          "max": 0,
          "p95": 0,
          "total": 0
        }
      }
    }
  ]
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="job-timeseries-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of timeseries data, one entry per job.|Inline|
|default|Default|Error response.|Inline|

<h3 id="job-timeseries-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|
|items|[object]|true|none|Aggregate metrics for a workflow at a time granularity|
|» name|string|true|none|The name of the workflow.|
|» min_started_at|string(date-time)|true|none|The start time for the earliest execution included in the metrics.|
|» max_ended_at|string(date-time)|true|none|The end time of the last execution included in the metrics.|
|» timestamp|string(date-time)|true|none|The start of the interval for timeseries metrics.|
|» metrics|object|true|none|Metrics relating to a workflow's runs.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » failed_runs|integer(int64)|true|none|The number of failed runs.|
|» » successful_runs|integer(int64)|true|none|The number of successful runs.|
|» » throughput|number(float)|true|none|The average number of runs per day.|
|» » median_credits_used|integer(int64)|true|none|The median credits consumed over the current timeseries interval.|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed over the current timeseries interval.|
|» » duration_metrics|object|true|none|Metrics relating to the duration of runs for a workflow.|
|» » » min|integer(int64)|true|none|The minimum duration, in seconds, among a group of runs.|
|» » » median|integer(int64)|true|none|The median duration, in seconds, among a group of runs.|
|» » » max|integer(int64)|true|none|The max duration, in seconds, among a group of runs.|
|» » » p95|integer(int64)|true|none|The 95th percentile duration, in seconds, among a group of runs.|
|» » » total|integer(int64)|true|none|The total duration, in seconds, added across a group of runs.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get summary metrics with trends for the entire org, and for each project.

<a id="opIdgetOrgSummaryData"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public/summary \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{org-slug}/summary`

Gets aggregated summary metrics with trends for the entire org.
              Also gets aggregated metrics and trends for each project belonging to the org.

<h3 id="get-summary-metrics-with-trends-for-the-entire-org-and-for-each-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug|path|string|true|Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped.|
|reporting-window|query|string|false|The time window used to calculate summary metrics. If not provided, defaults to last-90-days|
|project-names|query|object|false|List of project names.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reporting-window|last-7-days|
|reporting-window|last-90-days|
|reporting-window|last-24-hours|
|reporting-window|last-30-days|
|reporting-window|last-60-days|

> Example responses

> 200 Response

```json
{
  "org_data": {
    "metrics": {
      "total_runs": 0,
      "total_duration_secs": 0,
      "total_credits_used": 0,
      "success_rate": 0,
      "throughput": 0
    },
    "trends": {
      "total_runs": 0,
      "total_duration_secs": 0,
      "total_credits_used": 0,
      "success_rate": 0,
      "throughput": 0
    }
  },
  "org_project_data": [
    {
      "project_name": "api-preview-docs",
      "metrics": {
        "total_credits_used": 0,
        "total_duration_secs": 0,
        "total_runs": 0,
        "success_rate": 0
      },
      "trends": {
        "total_credits_used": 0,
        "total_duration_secs": 0,
        "total_runs": 0,
        "success_rate": 0
      }
    }
  ],
  "all_projects": [
    "string"
  ]
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-summary-metrics-with-trends-for-the-entire-org-and-for-each-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|summary metrics with trends for an entire org and it's projects.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-summary-metrics-with-trends-for-the-entire-org-and-for-each-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_data|object|true|none|Aggregated metrics for an org, with trends.|
|» metrics|object|true|none|Metrics for a single org metrics.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » total_duration_secs|integer(int64)|true|none|Total duration, in seconds.|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed over the current timeseries interval.|
|» » success_rate|number(float)|true|none|none|
|» » throughput|number(float)|true|none|The average number of runs per day.|
|» trends|object|true|none|Trends for a single org.|
|» » total_runs|number(float)|true|none|The trend value for total number of runs.|
|» » total_duration_secs|number(float)|true|none|Trend value for total duration.|
|» » total_credits_used|number(float)|true|none|The trend value for total credits consumed.|
|» » success_rate|number(float)|true|none|The trend value for the success rate.|
|» » throughput|number(float)|true|none|Trend value for the average number of runs per day.|
|org_project_data|[object]|true|none|Metrics for a single project, across all branches|
|» project_name|string|true|none|The name of the project.|
|» metrics|object|true|none|Metrics for a single project, across all branches.|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed over the current timeseries interval.|
|» » total_duration_secs|integer(int64)|true|none|Total duration, in seconds.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » success_rate|number(float)|true|none|none|
|» trends|object|true|none|Trends for a single project, across all branches.|
|» » total_credits_used|number(float)|true|none|The trend value for total credits consumed.|
|» » total_duration_secs|number(float)|true|none|Trend value for total duration.|
|» » total_runs|number(float)|true|none|The trend value for total number of runs.|
|» » success_rate|number(float)|true|none|The trend value for the success rate.|
|all_projects|[string]|true|none|A list of all the project names in the organization.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get all branches for a project

<a id="opIdgetAllInsightsBranches"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public%2Fapi-preview-docs/branches \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{project-slug}/branches`

Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.

<h3 id="get-all-branches-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|workflow-name|query|string|false|The name of a workflow. If not passed we will scope the API call to the project.|

> Example responses

> 200 Response

```json
{
  "org_id": null,
  "project_id": null,
  "branches": [
    "main"
  ]
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-all-branches-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of branches for a project|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-all-branches-for-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_id|object|true|none|The unique ID of the organization|
|project_id|object|true|none|The unique ID of the project|
|branches|[string]|true|none|A list of all the branches for a given project.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get flaky tests for a project

<a id="opIdgetFlakyTests"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public%2Fapi-preview-docs/flaky-tests \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{project-slug}/flaky-tests`

Get a list of flaky tests for a given project. Flaky tests are branch agnostic.
             A flaky test is a test that passed and failed in the same commit.

<h3 id="get-flaky-tests-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|

> Example responses

> 200 Response

```json
{
  "flaky-tests": [
    {
      "time-wasted": {},
      "workflow-created-at": "string",
      "workflow-id": null,
      "classname": "string",
      "pipeline-number": {},
      "workflow-name": "string",
      "test-name": "string",
      "job-name": "string",
      "job-number": {},
      "times-flaked": 0,
      "source": "string",
      "file": "string"
    }
  ],
  "total-flaky-tests": 5
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-flaky-tests-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of flaky tests for a project|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-flaky-tests-for-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flaky-tests|[object]|true|none|A list of all instances of flakes. Note that a test is no longer considered flaky after 2 weeks have passed without a flake. Each flake resets this timer.|
|» time-wasted|object|false|none|none|
|» workflow-created-at|string|true|none|The date and time when workflow was created.|
|» workflow-id|object|true|none|The ID of the workflow associated with the provided test counts|
|» classname|string|true|none|The class the test belongs to.|
|» pipeline-number|object|true|none|The number of the pipeline.|
|» workflow-name|string|true|none|The name of the workflow.|
|» test-name|string|true|none|The name of the test.|
|» job-name|string|true|none|The name of the job.|
|» job-number|object|true|none|The number of the job.|
|» times-flaked|integer(int64)|true|none|The number of times the test flaked.|
|» source|string|true|none|The source of the test.|
|» file|string|true|none|The file the test belongs to.|
|total-flaky-tests|number(double)|true|none|A count of unique tests that have failed. If your project has N tests that have flaked multiple times each, this will be equal to N.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get summary metrics for a project's workflows

<a id="opIdgetProjectWorkflowMetrics"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public%2Fapi-preview-docs/workflows \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{project-slug}/workflows`

Get summary metrics for a project's workflows.  Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours.  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

<h3 id="get-summary-metrics-for-a-projects-workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|page-token|query|string|false|A token to retrieve the next page of results.|
|all-branches|query|boolean|false|Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.|
|branch|query|string|false|The name of a vcs branch. If not passed we will scope the API call to the default branch.|
|reporting-window|query|string|false|The time window used to calculate summary metrics. If not provided, defaults to last-90-days|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reporting-window|last-7-days|
|reporting-window|last-90-days|
|reporting-window|last-24-hours|
|reporting-window|last-30-days|
|reporting-window|last-60-days|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "build-and-test",
      "metrics": {
        "total_runs": 0,
        "successful_runs": 0,
        "mttr": 0,
        "total_credits_used": 0,
        "failed_runs": 0,
        "success_rate": 0,
        "duration_metrics": {
          "min": 0,
          "mean": 0,
          "median": 0,
          "p95": 0,
          "max": 0,
          "standard_deviation": 0
        },
        "total_recoveries": 0,
        "throughput": 0
      },
      "window_start": "1970-01-01T00:00:00Z",
      "window_end": "1970-01-01T00:00:00Z",
      "project_id": null
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-summary-metrics-for-a-projects-workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of summary metrics by workflow|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-summary-metrics-for-a-projects-workflows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|Workflow summary metrics.|
|» name|string|true|none|The name of the workflow.|
|» metrics|object|true|none|Metrics relating to a workflow's runs.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » successful_runs|integer(int64)|true|none|The number of successful runs.|
|» » mttr|integer(int64)|true|none|The mean time to recovery (mean time between failures and their next success) in seconds.|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.|
|» » failed_runs|integer(int64)|true|none|The number of failed runs.|
|» » success_rate|number(float)|true|none|none|
|» » duration_metrics|object|true|none|Metrics relating to the duration of runs for a workflow.|
|» » » min|integer(int64)|true|none|The minimum duration, in seconds, among a group of runs.|
|» » » mean|integer(int64)|true|none|The mean duration, in seconds, among a group of runs.|
|» » » median|integer(int64)|true|none|The median duration, in seconds, among a group of runs.|
|» » » p95|integer(int64)|true|none|The 95th percentile duration, in seconds, among a group of runs.|
|» » » max|integer(int64)|true|none|The max duration, in seconds, among a group of runs.|
|» » » standard_deviation|number(float)|true|none|The standard deviation, in seconds, among a group of runs.|
|» » total_recoveries|integer(int64)|true|none|The number of recovered workflow executions per day.|
|» » throughput|number(float)|true|none|The average number of runs per day.|
|» window_start|string(date-time)|true|none|The timestamp of the first build within the requested reporting window.|
|» window_end|string(date-time)|true|none|The timestamp of the last build within the requested reporting window.|
|» project_id|object|true|none|The unique ID of the project|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get recent runs of a workflow

<a id="opIdgetProjectWorkflowRuns"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public%2Fapi-preview-docs/workflows/build-and-test \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{project-slug}/workflows/{workflow-name}`

Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

<h3 id="get-recent-runs-of-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|workflow-name|path|string|true|The name of the workflow.|
|all-branches|query|boolean|false|Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.|
|branch|query|string|false|The name of a vcs branch. If not passed we will scope the API call to the default branch.|
|page-token|query|string|false|A token to retrieve the next page of results.|
|start-date|query|string(date-time)|false|Include only executions that started at or after this date. This must be specified if an end-date is provided.|
|end-date|query|string(date-time)|false|Include only executions that started before this date. This date can be at most 90 days after the start-date.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "branch": "main",
      "duration": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "stopped_at": "1970-01-01T00:00:00Z",
      "credits_used": 0,
      "status": "success",
      "is_approval": false
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-recent-runs-of-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of recent workflow runs|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-recent-runs-of-a-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|Recent workflow runs.|
|» id|string(uuid)|true|none|The unique ID of the workflow.|
|» branch|string|true|none|The VCS branch of a Workflow's trigger.|
|» duration|integer(int64)|true|none|The duration in seconds of a run.|
|» created_at|string(date-time)|true|none|The date and time the workflow was created.|
|» stopped_at|string(date-time)|true|none|The date and time the workflow stopped.|
|» credits_used|integer(int64)|true|none|The number of credits used during execution. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.|
|» status|string|true|none|Workflow status.|
|» is_approval|boolean|true|none|Describes if the job is an approval job or not. Approval jobs are intermediary jobs that are created to pause the workflow until approved.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|failed|
|» status|error|
|» status|canceled|
|» status|unauthorized|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get summary metrics for a project workflow's jobs.

<a id="opIdgetProjectWorkflowJobMetrics"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public%2Fapi-preview-docs/workflows/build-and-test/jobs \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{project-slug}/workflows/{workflow-name}/jobs`

Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

<h3 id="get-summary-metrics-for-a-project-workflows-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|workflow-name|path|string|true|The name of the workflow.|
|page-token|query|string|false|A token to retrieve the next page of results.|
|all-branches|query|boolean|false|Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.|
|branch|query|string|false|The name of a vcs branch. If not passed we will scope the API call to the default branch.|
|reporting-window|query|string|false|The time window used to calculate summary metrics. If not provided, defaults to last-90-days|
|job-name|query|string|false|The name of the jobs you would like to filter from your workflow. If not specified, all workflow jobs will be returned. The job name can either be the full job name or just a substring of the job name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reporting-window|last-7-days|
|reporting-window|last-90-days|
|reporting-window|last-24-hours|
|reporting-window|last-30-days|
|reporting-window|last-60-days|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "string",
      "metrics": {
        "total_runs": 0,
        "failed_runs": 0,
        "successful_runs": 0,
        "duration_metrics": {
          "min": 0,
          "mean": 0,
          "median": 0,
          "p95": 0,
          "max": 0,
          "standard_deviation": 0
        },
        "success_rate": 0,
        "total_credits_used": 0,
        "throughput": 0
      },
      "window_start": "1970-01-01T00:00:00Z",
      "window_end": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-summary-metrics-for-a-project-workflows-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of summary metrics by workflow job.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-summary-metrics-for-a-project-workflows-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|Job summary metrics.|
|» name|string|true|none|The name of the job.|
|» metrics|object|true|none|Metrics relating to a workflow job's runs.|
|» » total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» » failed_runs|integer(int64)|true|none|The number of failed runs.|
|» » successful_runs|integer(int64)|true|none|The number of successful runs.|
|» » duration_metrics|object|true|none|Metrics relating to the duration of runs for a workflow job.|
|» » » min|integer(int64)|true|none|The minimum duration, in seconds, among a group of runs.|
|» » » mean|integer(int64)|true|none|The mean duration, in seconds, among a group of runs.|
|» » » median|integer(int64)|true|none|The median duration, in seconds, among a group of runs.|
|» » » p95|integer(int64)|true|none|The 95th percentile duration, in seconds, among a group of runs.|
|» » » max|integer(int64)|true|none|The max duration, in seconds, among a group of runs.|
|» » » standard_deviation|number(float)|true|none|The standard deviation, in seconds, among a group of runs.|
|» » success_rate|number(float)|true|none|none|
|» » total_credits_used|integer(int64)|true|none|The total credits consumed by the job in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.|
|» » throughput|number(float)|true|none|The average number of runs per day.|
|» window_start|string(date-time)|true|none|The timestamp of the first build within the requested reporting window.|
|» window_end|string(date-time)|true|none|The timestamp of the last build within the requested reporting window.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get metrics and trends for workflows

<a id="opIdgetWorkflowSummary"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public%2Fapi-preview-docs/workflows/build-and-test/summary \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{project-slug}/workflows/{workflow-name}/summary`

Get the metrics and trends for a particular workflow on a single branch or all branches

<h3 id="get-metrics-and-trends-for-workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|workflow-name|path|string|true|The name of the workflow.|
|all-branches|query|boolean|false|Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.|
|branch|query|string|false|The name of a vcs branch. If not passed we will scope the API call to the default branch.|

> Example responses

> 200 Response

```json
{
  "metrics": {
    "total_runs": 0,
    "successful_runs": 0,
    "mttr": 0,
    "total_credits_used": 0,
    "failed_runs": 0,
    "success_rate": 0,
    "completed_runs": 0,
    "window_start": "1970-01-01T00:00:00Z",
    "duration_metrics": {
      "min": 0,
      "mean": 0,
      "median": 0,
      "p95": 0,
      "max": 0,
      "standard_deviation": 0
    },
    "window_end": "1970-01-01T00:00:00Z",
    "throughput": 0
  },
  "trends": {
    "total_runs": 0,
    "failed_runs": 0,
    "success_rate": 0,
    "p95_duration_secs": 0,
    "median_duration_secs": 0,
    "total_credits_used": 0,
    "mttr": 0,
    "throughput": 0
  },
  "workflow_names": [
    "string"
  ]
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-metrics-and-trends-for-workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics and trends for a workflow|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-metrics-and-trends-for-workflows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|object|true|none|Metrics aggregated across a workflow for a given time window.|
|» total_runs|integer(int64)|true|none|The total number of runs, including runs that are still on-hold or running.|
|» successful_runs|integer(int64)|true|none|The number of successful runs.|
|» mttr|integer(int64)|true|none|The mean time to recovery (mean time between failures and their next success) in seconds.|
|» total_credits_used|integer(int64)|true|none|The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.|
|» failed_runs|integer(int64)|true|none|The number of failed runs.|
|» success_rate|number(float)|true|none|none|
|» completed_runs|integer(int64)|true|none|The number of runs that ran to completion within the aggregation window|
|» window_start|string(date-time)|true|none|The timestamp of the first build within the requested reporting window.|
|» duration_metrics|object|true|none|Metrics relating to the duration of runs for a workflow.|
|» » min|integer(int64)|true|none|The minimum duration, in seconds, among a group of runs.|
|» » mean|integer(int64)|true|none|The mean duration, in seconds, among a group of runs.|
|» » median|integer(int64)|true|none|The median duration, in seconds, among a group of runs.|
|» » p95|integer(int64)|true|none|The 95th percentile duration, in seconds, among a group of runs.|
|» » max|integer(int64)|true|none|The max duration, in seconds, among a group of runs.|
|» » standard_deviation|number(float)|true|none|The standard deviation, in seconds, among a group of runs.|
|» window_end|string(date-time)|true|none|The timestamp of the last build within the requested reporting window.|
|» throughput|number(float)|true|none|The average number of runs per day.|
|trends|object|true|none|Trends for aggregated metrics across a workflow for a given time window.|
|» total_runs|number(float)|true|none|The trend value for total number of runs.|
|» failed_runs|number(float)|true|none|The trend value for number of failed runs.|
|» success_rate|number(float)|true|none|The trend value for the success rate.|
|» p95_duration_secs|number(float)|true|none|Trend value for the 95th percentile duration for a workflow for a given time window.|
|» median_duration_secs|number(float)|true|none|Trend value for the 50th percentile duration for a workflow for a given time window.|
|» total_credits_used|number(float)|true|none|The trend value for total credits consumed.|
|» mttr|number(float)|true|none|trend for mean time to recovery (mean time between failures and their next success).|
|» throughput|number(float)|true|none|Trend value for the average number of runs per day.|
|workflow_names|[string]|true|none|A list of all the workflow names for a given project.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get test metrics for a project's workflows

<a id="opIdgetProjectWorkflowTestMetrics"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/insights/gh%2FCircleCI-Public%2Fapi-preview-docs/workflows/build-and-test/test-metrics \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /insights/{project-slug}/workflows/{workflow-name}/test-metrics`

Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.

<h3 id="get-test-metrics-for-a-projects-workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|workflow-name|path|string|true|The name of the workflow.|
|branch|query|string|false|The name of a vcs branch. If not passed we will scope the API call to the default branch.|
|all-branches|query|boolean|false|Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.|

> Example responses

> 200 Response

```json
{
  "average_test_count": 0,
  "most_failed_tests": [
    {
      "p95_duration": 0,
      "total_runs": 0,
      "classname": "string",
      "failed_runs": 0,
      "flaky": true,
      "source": "string",
      "file": "string",
      "job_name": "string",
      "test_name": "string"
    }
  ],
  "most_failed_tests_extra": 0,
  "slowest_tests": [
    {
      "p95_duration": 0,
      "total_runs": 0,
      "classname": "string",
      "failed_runs": 0,
      "flaky": true,
      "source": "string",
      "file": "string",
      "job_name": "string",
      "test_name": "string"
    }
  ],
  "slowest_tests_extra": 0,
  "total_test_runs": 0,
  "test_runs": [
    {
      "pipeline_number": 0,
      "workflow_id": null,
      "success_rate": 0,
      "test_counts": {
        "error": 0,
        "failure": 0,
        "skipped": 0,
        "success": 0,
        "total": 0
      }
    }
  ]
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-test-metrics-for-a-projects-workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of test metrics by workflow|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-test-metrics-for-a-projects-workflows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average_test_count|integer(int64)|true|none|The average number of tests executed per run|
|most_failed_tests|[object]|true|none|Metrics for the most frequently failing tests|
|» p95_duration|number(double)|true|none|The 95th percentile duration, in seconds, among a group of test runs.|
|» total_runs|integer(int64)|true|none|The total number of times the test was run.|
|» classname|string|true|none|The class the test belongs to.|
|» failed_runs|integer(int64)|true|none|The number of times the test failed|
|» flaky|boolean|true|none|Whether the test is flaky.|
|» source|string|true|none|The source of the test.|
|» file|string|true|none|The file the test belongs to.|
|» job_name|string|true|none|The name of the job.|
|» test_name|string|true|none|The name of the test.|
|most_failed_tests_extra|integer(int64)|true|none|The number of tests with the same success rate being omitted from most_failed_tests|
|slowest_tests|[object]|true|none|Metrics for the slowest running tests|
|» p95_duration|number(double)|true|none|The 95th percentile duration, in seconds, among a group of test runs.|
|» total_runs|integer(int64)|true|none|The total number of times the test was run.|
|» classname|string|true|none|The class the test belongs to.|
|» failed_runs|integer(int64)|true|none|The number of times the test failed|
|» flaky|boolean|true|none|Whether the test is flaky.|
|» source|string|true|none|The source of the test.|
|» file|string|true|none|The file the test belongs to.|
|» job_name|string|true|none|The name of the job.|
|» test_name|string|true|none|The name of the test.|
|slowest_tests_extra|integer(int64)|true|none|The number of tests with the same duration rate being omitted from slowest_tests|
|total_test_runs|integer(int64)|true|none|The total number of test runs|
|test_runs|[object]|true|none|Test counts grouped by pipeline number and workflow id|
|» pipeline_number|integer(int64)|true|none|The number of the pipeline associated with the provided test counts|
|» workflow_id|object|true|none|The ID of the workflow associated with the provided test counts|
|» success_rate|number(float)|true|none|The success rate calculated from test counts|
|» test_counts|object|true|none|Test counts for a given pipeline number|
|» » error|integer(int64)|true|none|The number of tests with the error status|
|» » failure|integer(int64)|true|none|The number of tests with the failure status|
|» » skipped|integer(int64)|true|none|The number of tests with the skipped status|
|» » success|integer(int64)|true|none|The number of tests with the success status|
|» » total|integer(int64)|true|none|The total number of tests|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-user">User</h1>

A set of endpoints you can use to get information about a specific user.

## User Information

<a id="opIdgetCurrentUser"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/me \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /me`

Provides information about the user that is currently signed in.

> Example responses

> 200 Response

```json
{
  "avatar_url": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "login": "string",
  "name": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="user-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User login information.|Inline|
|default|Default|Error response.|Inline|

<h3 id="user-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string|true|none|URL to the user's avatar on the VCS|
|id|string(uuid)|true|none|The unique ID of the user.|
|login|string|true|none|The login information for the user on the VCS.|
|name|string|true|none|The name of the user.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Collaborations

<a id="opIdgetCollaborations"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/me/collaborations \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /me/collaborations`

Provides the set of organizations of which a user is a member or a collaborator.

The set of organizations that a user can collaborate on is composed of:

* Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)
* The parent organization of repository that the user can collaborate on, but is not necessarily a member of
* The organization of the current user's account

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "vcs-type": "string",
    "name": "string",
    "avatar_url": "string",
    "slug": "string"
  }
]
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="collaborations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collaborations|Inline|
|default|Default|Error response.|Inline|

<h3 id="collaborations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string(uuid)|true|none|The UUID of the organization|
|» vcs-type|string|true|none|The VCS provider|
|» name|string|true|none|The name of the organization|
|» avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» slug|string|true|none|The slug of the organization|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## User Information

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/user/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /user/{id}`

Provides information about the user with the given ID.

<h3 id="user-information-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The unique ID of the user.|

> Example responses

> 200 Response

```json
{
  "avatar_url": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "login": "string",
  "name": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="user-information-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User login information.|Inline|
|default|Default|Error response.|Inline|

<h3 id="user-information-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string|true|none|URL to the user's avatar on the VCS|
|id|string(uuid)|true|none|The unique ID of the user.|
|login|string|true|none|The login information for the user on the VCS.|
|name|string|true|none|The name of the user.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-pipeline">Pipeline</h1>

Endpoints relating to [pipelines](https://circleci.com/docs/pipelines/). Get information about your pipelines. Trigger or continue a pipeline.

## Get a list of pipelines

<a id="opIdlistPipelines"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/pipeline \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /pipeline`

Returns all pipelines for the most recently built projects (max 250) you follow in an organization.

<h3 id="get-a-list-of-pipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug|query|string|false|Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|
|page-token|query|string|false|A token to retrieve the next page of results.|
|mine|query|boolean|false|Only include entries created by your user.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
      "errors": [
        {
          "type": "config",
          "message": "string"
        }
      ],
      "project_slug": "gh/CircleCI-Public/api-preview-docs",
      "updated_at": "1970-01-01T00:00:00Z",
      "number": 25,
      "trigger_parameters": {
        "property1": "string",
        "property2": "string"
      },
      "state": "created",
      "created_at": "1970-01-01T00:00:00Z",
      "warnings": [
        {
          "type": "string",
          "message": "string",
          "description": "string",
          "url": "string"
        }
      ],
      "trigger": {
        "type": "scheduled_pipeline",
        "received_at": "1970-01-01T00:00:00Z",
        "actor": {
          "login": "string",
          "avatar_url": "string"
        }
      },
      "vcs": {
        "provider_name": "GitHub",
        "target_repository_url": "https://github.com/CircleCI-Public/api-preview-docs",
        "branch": "feature/design-new-api",
        "review_id": "123",
        "review_url": "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
        "revision": "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
        "tag": "v3.1.4159",
        "commit": {
          "subject": "string",
          "body": "string"
        },
        "origin_repository_url": "https://github.com/CircleCI-Public/api-preview-docs"
      }
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-list-of-pipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A sequence of pipelines.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-list-of-pipelines-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» id|string(uuid)|true|none|The unique ID of the pipeline.|
|» errors|[object]|true|none|A sequence of errors that have occurred within the pipeline.|
|» » type|string|true|none|The type of error.|
|» » message|string|true|none|A human-readable error message.|
|» project_slug|string|true|none|The project-slug for the pipeline.|
|» updated_at|string(date-time)|false|none|The date and time the pipeline was last updated.|
|» number|integer(int64)|true|none|The number of the pipeline.|
|» trigger_parameters|object|false|none|none|
|» » **additionalProperties**|string \| integer(int64) \| boolean \| object|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|integer(int64)|false|none|none|
|» » » *anyOf*|boolean|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» state|string|true|none|The current state of the pipeline.|
|» created_at|string(date-time)|true|none|The date and time the pipeline was created.|
|» warnings|[object]|true|none|A sequence of warnings that have occurred within the pipeline.|
|» » type|string|true|none|The type of warning.|
|» » message|string|true|none|A human-readable warning message.|
|» » description|string|true|none|A short description of the warning type.|
|» » url|string|false|none|A URL with more information about the warning.|
|» trigger|object|true|none|A summary of the trigger.|
|» » type|string|true|none|The type of trigger.|
|» » received_at|string(date-time)|true|none|The date and time the trigger was received.|
|» » actor|object|true|none|The user who triggered the Pipeline.|
|» » » login|string|true|none|The login information for the user on the VCS.|
|» » » avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» vcs|object|false|none|VCS information for the pipeline.|
|» » provider_name|string|true|none|Name of the VCS provider (e.g. GitHub, Bitbucket).|
|» » target_repository_url|string|true|none|URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.|
|» » branch|string|false|none|The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).|
|» » review_id|string|false|none|The code review id.|
|» » review_url|string|false|none|The code review URL.|
|» » revision|string|true|none|The code revision the pipeline ran.|
|» » tag|string|false|none|The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.|
|» » commit|object|false|none|The latest commit in the pipeline.|
|» » » subject|string|true|none|The subject of the commit message.|
|» » » body|string|true|none|The body of the commit message.|
|» » origin_repository_url|string|true|none|URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|config|
|» » type|invalid-trigger-setup|
|» » type|config-fetch|
|» » type|timeout|
|» » type|permission|
|» » type|other|
|» » type|trigger-rule|
|» » type|plan|
|» state|created|
|» state|errored|
|» state|setup-pending|
|» state|setup|
|» state|pending|
|» » type|scheduled_pipeline|
|» » type|explicit|
|» » type|api|
|» » type|webhook|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Continue a pipeline

<a id="opIdcontinuePipeline"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/pipeline/continue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "continuation-key": "string",
    "configuration": "string",
    "parameters": {
      "deploy_prod": true
    }
  }'
```

`POST /pipeline/continue`

Continue a pipeline from the setup phase. For information on using pipeline parameters with dynamic configuration, see the [Pipeline values and parameters](https://circleci.com/docs/pipeline-variables/#pipeline-parameters-and-dynamic-configuration) docs.

> Body parameter

```json
{
  "continuation-key": "string",
  "configuration": "string",
  "parameters": {
    "deploy_prod": true
  }
}
```

<h3 id="continue-a-pipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» continuation-key|body|string|true|A pipeline continuation key.|
|» configuration|body|string|true|A configuration string for the pipeline.|
|» parameters|body|object|false|An object containing pipeline parameters and their values. Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.|
|» » **additionalProperties**|body|integer \| string \| boolean|false|none|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="continue-a-pipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="continue-a-pipeline-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a pipeline by ID

<a id="opIdgetPipelineById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/pipeline/5034460f-c7c4-4c43-9457-de07e2029e7b \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /pipeline/{pipeline-id}`

Returns a pipeline by the pipeline ID.

<h3 id="get-a-pipeline-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipeline-id|path|string(uuid)|true|The unique ID of the pipeline.|

> Example responses

> 200 Response

```json
{
  "id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
  "errors": [
    {
      "type": "config",
      "message": "string"
    }
  ],
  "project_slug": "gh/CircleCI-Public/api-preview-docs",
  "updated_at": "1970-01-01T00:00:00Z",
  "number": 25,
  "trigger_parameters": {
    "property1": "string",
    "property2": "string"
  },
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "warnings": [
    {
      "type": "string",
      "message": "string",
      "description": "string",
      "url": "string"
    }
  ],
  "trigger": {
    "type": "scheduled_pipeline",
    "received_at": "1970-01-01T00:00:00Z",
    "actor": {
      "login": "string",
      "avatar_url": "string"
    }
  },
  "vcs": {
    "provider_name": "GitHub",
    "target_repository_url": "https://github.com/CircleCI-Public/api-preview-docs",
    "branch": "feature/design-new-api",
    "review_id": "123",
    "review_url": "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
    "revision": "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
    "tag": "v3.1.4159",
    "commit": {
      "subject": "string",
      "body": "string"
    },
    "origin_repository_url": "https://github.com/CircleCI-Public/api-preview-docs"
  }
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-pipeline-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A pipeline object.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-pipeline-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the pipeline.|
|errors|[object]|true|none|A sequence of errors that have occurred within the pipeline.|
|» type|string|true|none|The type of error.|
|» message|string|true|none|A human-readable error message.|
|project_slug|string|true|none|The project-slug for the pipeline.|
|updated_at|string(date-time)|false|none|The date and time the pipeline was last updated.|
|number|integer(int64)|true|none|The number of the pipeline.|
|trigger_parameters|object|false|none|none|
|» **additionalProperties**|string \| integer(int64) \| boolean \| object|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|integer(int64)|false|none|none|
|» » *anyOf*|boolean|false|none|none|
|» » *anyOf*|object|false|none|none|
|state|string|true|none|The current state of the pipeline.|
|created_at|string(date-time)|true|none|The date and time the pipeline was created.|
|warnings|[object]|true|none|A sequence of warnings that have occurred within the pipeline.|
|» type|string|true|none|The type of warning.|
|» message|string|true|none|A human-readable warning message.|
|» description|string|true|none|A short description of the warning type.|
|» url|string|false|none|A URL with more information about the warning.|
|trigger|object|true|none|A summary of the trigger.|
|» type|string|true|none|The type of trigger.|
|» received_at|string(date-time)|true|none|The date and time the trigger was received.|
|» actor|object|true|none|The user who triggered the Pipeline.|
|» » login|string|true|none|The login information for the user on the VCS.|
|» » avatar_url|string|true|none|URL to the user's avatar on the VCS|
|vcs|object|false|none|VCS information for the pipeline.|
|» provider_name|string|true|none|Name of the VCS provider (e.g. GitHub, Bitbucket).|
|» target_repository_url|string|true|none|URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.|
|» branch|string|false|none|The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).|
|» review_id|string|false|none|The code review id.|
|» review_url|string|false|none|The code review URL.|
|» revision|string|true|none|The code revision the pipeline ran.|
|» tag|string|false|none|The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.|
|» commit|object|false|none|The latest commit in the pipeline.|
|» » subject|string|true|none|The subject of the commit message.|
|» » body|string|true|none|The body of the commit message.|
|» origin_repository_url|string|true|none|URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|config|
|» type|invalid-trigger-setup|
|» type|config-fetch|
|» type|timeout|
|» type|permission|
|» type|other|
|» type|trigger-rule|
|» type|plan|
|state|created|
|state|errored|
|state|setup-pending|
|state|setup|
|state|pending|
|» type|scheduled_pipeline|
|» type|explicit|
|» type|api|
|» type|webhook|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a pipeline's configuration

<a id="opIdgetPipelineConfigById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/pipeline/5034460f-c7c4-4c43-9457-de07e2029e7b/config \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /pipeline/{pipeline-id}/config`

Returns a pipeline's configuration by ID.

<h3 id="get-a-pipelines-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipeline-id|path|string(uuid)|true|The unique ID of the pipeline.|

> Example responses

> 200 Response

```json
{
  "source": "string",
  "compiled": "string",
  "setup-config": "string",
  "compiled-setup-config": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-pipelines-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The configuration strings for the pipeline.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-pipelines-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|The source configuration for the pipeline, before any config compilation has been performed. If there is no config, then this field will be empty.|
|compiled|string|true|none|The compiled configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's configuration, then this field may be empty.|
|setup-config|string|false|none|The setup configuration for the pipeline used for Setup Workflows. If there were errors processing the pipeline's configuration or if setup workflows are not enabled, then this field should not exist|
|compiled-setup-config|string|false|none|The compiled setup configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's setup workflows, then this field may be empty.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a pipeline's workflows

<a id="opIdlistWorkflowsByPipelineId"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/pipeline/5034460f-c7c4-4c43-9457-de07e2029e7b/workflow \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /pipeline/{pipeline-id}/workflow`

Returns a paginated list of workflows by pipeline ID.

<h3 id="get-a-pipelines-workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipeline-id|path|string(uuid)|true|The unique ID of the pipeline.|
|page-token|query|string|false|A token to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "pipeline_id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
      "canceled_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "auto_rerun_number": 1,
      "name": "build-and-test",
      "project_slug": "gh/CircleCI-Public/api-preview-docs",
      "errored_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tag": "setup",
      "status": "success",
      "started_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "max_auto_reruns": 5,
      "pipeline_number": 25,
      "created_at": "1970-01-01T00:00:00Z",
      "stopped_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-pipelines-workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of workflow objects.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-pipelines-workflows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|A list of workflows.|
|» pipeline_id|string(uuid)|true|none|The ID of the pipeline this workflow belongs to.|
|» canceled_by|string(uuid)|false|none|none|
|» id|string(uuid)|true|none|The unique ID of the workflow.|
|» auto_rerun_number|integer(int64)|false|none|Present if this workflow was auto-rerun from a previous workflow. The Nth auto-rerun workflow will have auto_rerun_number N|
|» name|string|true|none|The name of the workflow.|
|» project_slug|string|true|none|The project-slug for the pipeline this workflow belongs to.|
|» errored_by|string(uuid)|false|none|none|
|» tag|string|false|none|Tag used for the workflow|
|» status|string|true|none|The current status of the workflow.|
|» started_by|string(uuid)|true|none|none|
|» max_auto_reruns|integer(int64)|false|none|The maximum number of auto reruns specified for the workflow.|
|» pipeline_number|integer(int64)|true|none|The number of the pipeline this workflow belongs to.|
|» created_at|string(date-time)|true|none|The date and time the workflow was created.|
|» stopped_at|string(date-time)|true|none|The date and time the workflow stopped.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» tag|setup|
|» status|success|
|» status|running|
|» status|not_run|
|» status|failed|
|» status|error|
|» status|failing|
|» status|on_hold|
|» status|canceled|
|» status|unauthorized|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get all pipelines

<a id="opIdlistPipelinesForProject"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/pipeline \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/pipeline`

Returns all pipelines for this project.

<h3 id="get-all-pipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|branch|query|string|false|The name of a vcs branch.|
|page-token|query|string|false|A token to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
      "errors": [
        {
          "type": "config",
          "message": "string"
        }
      ],
      "project_slug": "gh/CircleCI-Public/api-preview-docs",
      "updated_at": "1970-01-01T00:00:00Z",
      "number": 25,
      "trigger_parameters": {
        "property1": "string",
        "property2": "string"
      },
      "state": "created",
      "created_at": "1970-01-01T00:00:00Z",
      "warnings": [
        {
          "type": "string",
          "message": "string",
          "description": "string",
          "url": "string"
        }
      ],
      "trigger": {
        "type": "scheduled_pipeline",
        "received_at": "1970-01-01T00:00:00Z",
        "actor": {
          "login": "string",
          "avatar_url": "string"
        }
      },
      "vcs": {
        "provider_name": "GitHub",
        "target_repository_url": "https://github.com/CircleCI-Public/api-preview-docs",
        "branch": "feature/design-new-api",
        "review_id": "123",
        "review_url": "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
        "revision": "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
        "tag": "v3.1.4159",
        "commit": {
          "subject": "string",
          "body": "string"
        },
        "origin_repository_url": "https://github.com/CircleCI-Public/api-preview-docs"
      }
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-all-pipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A sequence of pipelines.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-all-pipelines-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» id|string(uuid)|true|none|The unique ID of the pipeline.|
|» errors|[object]|true|none|A sequence of errors that have occurred within the pipeline.|
|» » type|string|true|none|The type of error.|
|» » message|string|true|none|A human-readable error message.|
|» project_slug|string|true|none|The project-slug for the pipeline.|
|» updated_at|string(date-time)|false|none|The date and time the pipeline was last updated.|
|» number|integer(int64)|true|none|The number of the pipeline.|
|» trigger_parameters|object|false|none|none|
|» » **additionalProperties**|string \| integer(int64) \| boolean \| object|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|integer(int64)|false|none|none|
|» » » *anyOf*|boolean|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» state|string|true|none|The current state of the pipeline.|
|» created_at|string(date-time)|true|none|The date and time the pipeline was created.|
|» warnings|[object]|true|none|A sequence of warnings that have occurred within the pipeline.|
|» » type|string|true|none|The type of warning.|
|» » message|string|true|none|A human-readable warning message.|
|» » description|string|true|none|A short description of the warning type.|
|» » url|string|false|none|A URL with more information about the warning.|
|» trigger|object|true|none|A summary of the trigger.|
|» » type|string|true|none|The type of trigger.|
|» » received_at|string(date-time)|true|none|The date and time the trigger was received.|
|» » actor|object|true|none|The user who triggered the Pipeline.|
|» » » login|string|true|none|The login information for the user on the VCS.|
|» » » avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» vcs|object|false|none|VCS information for the pipeline.|
|» » provider_name|string|true|none|Name of the VCS provider (e.g. GitHub, Bitbucket).|
|» » target_repository_url|string|true|none|URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.|
|» » branch|string|false|none|The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).|
|» » review_id|string|false|none|The code review id.|
|» » review_url|string|false|none|The code review URL.|
|» » revision|string|true|none|The code revision the pipeline ran.|
|» » tag|string|false|none|The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.|
|» » commit|object|false|none|The latest commit in the pipeline.|
|» » » subject|string|true|none|The subject of the commit message.|
|» » » body|string|true|none|The body of the commit message.|
|» » origin_repository_url|string|true|none|URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|config|
|» » type|invalid-trigger-setup|
|» » type|config-fetch|
|» » type|timeout|
|» » type|permission|
|» » type|other|
|» » type|trigger-rule|
|» » type|plan|
|» state|created|
|» state|errored|
|» state|setup-pending|
|» state|setup|
|» state|pending|
|» » type|scheduled_pipeline|
|» » type|explicit|
|» » type|api|
|» » type|webhook|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Trigger a new pipeline

<a id="opIdtriggerPipeline"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/pipeline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "branch": "feature/design-new-api",
    "tag": "v3.1.4159",
    "parameters": {
      "deploy_prod": true
    }
  }'
```

`POST /project/{project-slug}/pipeline`

**[This endpoint is superseded by the [new Trigger Pipeline API](#tag/Pipeline/operation/triggerPipelineRun), which supports all organization and pipeline types except GitLab.]** Triggers a new pipeline on the project. Does not support triggering pipelines integrated with GitLab or GitHub App.

> Body parameter

```json
{
  "branch": "feature/design-new-api",
  "tag": "v3.1.4159",
  "parameters": {
    "deploy_prod": true
  }
}
```

<h3 id="trigger-a-new-pipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|body|body|object|false|none|
|» branch|body|string|false|The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).|
|» tag|body|string|false|The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.|
|» parameters|body|object|false|An object containing pipeline parameters and their values. Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.|
|» » **additionalProperties**|body|integer \| string \| boolean|false|none|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
  "state": "created",
  "number": 25,
  "created_at": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="trigger-a-new-pipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created pipeline.|Inline|
|default|Default|Error response.|Inline|

<h3 id="trigger-a-new-pipeline-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the pipeline.|
|state|string|true|none|The current state of the pipeline.|
|number|integer(int64)|true|none|The number of the pipeline.|
|created_at|string(date-time)|true|none|The date and time the pipeline was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|errored|
|state|setup-pending|
|state|setup|
|state|pending|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get your pipelines

<a id="opIdlistMyPipelines"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/pipeline/mine \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/pipeline/mine`

Returns a sequence of all pipelines for this project triggered by the user.

<h3 id="get-your-pipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|page-token|query|string|false|A token to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
      "errors": [
        {
          "type": "config",
          "message": "string"
        }
      ],
      "project_slug": "gh/CircleCI-Public/api-preview-docs",
      "updated_at": "1970-01-01T00:00:00Z",
      "number": 25,
      "trigger_parameters": {
        "property1": "string",
        "property2": "string"
      },
      "state": "created",
      "created_at": "1970-01-01T00:00:00Z",
      "warnings": [
        {
          "type": "string",
          "message": "string",
          "description": "string",
          "url": "string"
        }
      ],
      "trigger": {
        "type": "scheduled_pipeline",
        "received_at": "1970-01-01T00:00:00Z",
        "actor": {
          "login": "string",
          "avatar_url": "string"
        }
      },
      "vcs": {
        "provider_name": "GitHub",
        "target_repository_url": "https://github.com/CircleCI-Public/api-preview-docs",
        "branch": "feature/design-new-api",
        "review_id": "123",
        "review_url": "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
        "revision": "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
        "tag": "v3.1.4159",
        "commit": {
          "subject": "string",
          "body": "string"
        },
        "origin_repository_url": "https://github.com/CircleCI-Public/api-preview-docs"
      }
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-your-pipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A sequence of pipelines.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-your-pipelines-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» id|string(uuid)|true|none|The unique ID of the pipeline.|
|» errors|[object]|true|none|A sequence of errors that have occurred within the pipeline.|
|» » type|string|true|none|The type of error.|
|» » message|string|true|none|A human-readable error message.|
|» project_slug|string|true|none|The project-slug for the pipeline.|
|» updated_at|string(date-time)|false|none|The date and time the pipeline was last updated.|
|» number|integer(int64)|true|none|The number of the pipeline.|
|» trigger_parameters|object|false|none|none|
|» » **additionalProperties**|string \| integer(int64) \| boolean \| object|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|integer(int64)|false|none|none|
|» » » *anyOf*|boolean|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» state|string|true|none|The current state of the pipeline.|
|» created_at|string(date-time)|true|none|The date and time the pipeline was created.|
|» warnings|[object]|true|none|A sequence of warnings that have occurred within the pipeline.|
|» » type|string|true|none|The type of warning.|
|» » message|string|true|none|A human-readable warning message.|
|» » description|string|true|none|A short description of the warning type.|
|» » url|string|false|none|A URL with more information about the warning.|
|» trigger|object|true|none|A summary of the trigger.|
|» » type|string|true|none|The type of trigger.|
|» » received_at|string(date-time)|true|none|The date and time the trigger was received.|
|» » actor|object|true|none|The user who triggered the Pipeline.|
|» » » login|string|true|none|The login information for the user on the VCS.|
|» » » avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» vcs|object|false|none|VCS information for the pipeline.|
|» » provider_name|string|true|none|Name of the VCS provider (e.g. GitHub, Bitbucket).|
|» » target_repository_url|string|true|none|URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.|
|» » branch|string|false|none|The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).|
|» » review_id|string|false|none|The code review id.|
|» » review_url|string|false|none|The code review URL.|
|» » revision|string|true|none|The code revision the pipeline ran.|
|» » tag|string|false|none|The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.|
|» » commit|object|false|none|The latest commit in the pipeline.|
|» » » subject|string|true|none|The subject of the commit message.|
|» » » body|string|true|none|The body of the commit message.|
|» » origin_repository_url|string|true|none|URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|config|
|» » type|invalid-trigger-setup|
|» » type|config-fetch|
|» » type|timeout|
|» » type|permission|
|» » type|other|
|» » type|trigger-rule|
|» » type|plan|
|» state|created|
|» state|errored|
|» state|setup-pending|
|» state|setup|
|» state|pending|
|» » type|scheduled_pipeline|
|» » type|explicit|
|» » type|api|
|» » type|webhook|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a pipeline by pipeline number

<a id="opIdgetPipelineByNumber"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/pipeline/123 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/pipeline/{pipeline-number}`

Returns a pipeline by the pipeline number.

<h3 id="get-a-pipeline-by-pipeline-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|pipeline-number|path|object|true|The number of the pipeline.|

> Example responses

> 200 Response

```json
{
  "id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
  "errors": [
    {
      "type": "config",
      "message": "string"
    }
  ],
  "project_slug": "gh/CircleCI-Public/api-preview-docs",
  "updated_at": "1970-01-01T00:00:00Z",
  "number": 25,
  "trigger_parameters": {
    "property1": "string",
    "property2": "string"
  },
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "warnings": [
    {
      "type": "string",
      "message": "string",
      "description": "string",
      "url": "string"
    }
  ],
  "trigger": {
    "type": "scheduled_pipeline",
    "received_at": "1970-01-01T00:00:00Z",
    "actor": {
      "login": "string",
      "avatar_url": "string"
    }
  },
  "vcs": {
    "provider_name": "GitHub",
    "target_repository_url": "https://github.com/CircleCI-Public/api-preview-docs",
    "branch": "feature/design-new-api",
    "review_id": "123",
    "review_url": "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
    "revision": "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
    "tag": "v3.1.4159",
    "commit": {
      "subject": "string",
      "body": "string"
    },
    "origin_repository_url": "https://github.com/CircleCI-Public/api-preview-docs"
  }
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-pipeline-by-pipeline-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A pipeline object.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-pipeline-by-pipeline-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the pipeline.|
|errors|[object]|true|none|A sequence of errors that have occurred within the pipeline.|
|» type|string|true|none|The type of error.|
|» message|string|true|none|A human-readable error message.|
|project_slug|string|true|none|The project-slug for the pipeline.|
|updated_at|string(date-time)|false|none|The date and time the pipeline was last updated.|
|number|integer(int64)|true|none|The number of the pipeline.|
|trigger_parameters|object|false|none|none|
|» **additionalProperties**|string \| integer(int64) \| boolean \| object|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|integer(int64)|false|none|none|
|» » *anyOf*|boolean|false|none|none|
|» » *anyOf*|object|false|none|none|
|state|string|true|none|The current state of the pipeline.|
|created_at|string(date-time)|true|none|The date and time the pipeline was created.|
|warnings|[object]|true|none|A sequence of warnings that have occurred within the pipeline.|
|» type|string|true|none|The type of warning.|
|» message|string|true|none|A human-readable warning message.|
|» description|string|true|none|A short description of the warning type.|
|» url|string|false|none|A URL with more information about the warning.|
|trigger|object|true|none|A summary of the trigger.|
|» type|string|true|none|The type of trigger.|
|» received_at|string(date-time)|true|none|The date and time the trigger was received.|
|» actor|object|true|none|The user who triggered the Pipeline.|
|» » login|string|true|none|The login information for the user on the VCS.|
|» » avatar_url|string|true|none|URL to the user's avatar on the VCS|
|vcs|object|false|none|VCS information for the pipeline.|
|» provider_name|string|true|none|Name of the VCS provider (e.g. GitHub, Bitbucket).|
|» target_repository_url|string|true|none|URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.|
|» branch|string|false|none|The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).|
|» review_id|string|false|none|The code review id.|
|» review_url|string|false|none|The code review URL.|
|» revision|string|true|none|The code revision the pipeline ran.|
|» tag|string|false|none|The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.|
|» commit|object|false|none|The latest commit in the pipeline.|
|» » subject|string|true|none|The subject of the commit message.|
|» » body|string|true|none|The body of the commit message.|
|» origin_repository_url|string|true|none|URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|config|
|» type|invalid-trigger-setup|
|» type|config-fetch|
|» type|timeout|
|» type|permission|
|» type|other|
|» type|trigger-rule|
|» type|plan|
|state|created|
|state|errored|
|state|setup-pending|
|state|setup|
|state|pending|
|» type|scheduled_pipeline|
|» type|explicit|
|» type|api|
|» type|webhook|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## [Recommended] Trigger a new pipeline

<a id="opIdtriggerPipelineRun"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh/CircleCI-Public/api-preview-docs/pipeline/run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "definition_id": "2338d0ae-5541-4bbf-88a2-55e9f7281f80",
    "config": {
      "branch": "main"
    },
    "checkout": {
      "tag": "v2"
    },
    "parameters": {
      "example_param": "my value",
      "example_param2": true,
      "example_param3": 3
    }
  }'
```

`POST /project/{provider}/{organization}/{project}/pipeline/run`

Trigger a pipeline given a pipeline definition ID. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, `github_oauth`, `bitbucket_dc`, or `bitbucket_oauth`.

The slash-separated project slug is shown in Project Settings > Overview.

Depending on the organization type, the project slug may have a human-readable format (`vcs_type/org_name/project_name`)
or be an opaque string (e.g. `circleci/43G3lM5RtfFE7v5sa4nWAU/44n9wujWcTnVZ2b5S8Fnat`).

> Body parameter

```json
{
  "definition_id": "2338d0ae-5541-4bbf-88a2-55e9f7281f80",
  "config": {
    "branch": "main"
  },
  "checkout": {
    "tag": "v2"
  },
  "parameters": {
    "example_param": "my value",
    "example_param2": true,
    "example_param3": 3
  }
}
```

<h3 id="recommended-trigger-a-new-pipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|The first segment of the slash-separated project slug, as shown in Project Settings > Overview.|
|organization|path|string|true|The second segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the org name (e.g. `my-org`) or an ID (e.g. `43G3lM5RtfFE7v5sa4nWAU`).|
|project|path|string|true|The third segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the project name (e.g. `my-project`) or an ID (e.g. `44n9wujWcTnVZ2b5S8Fnat`).|
|body|body|[triggerPipelineRequest](#schematriggerpipelinerequest)|false|none|
|» definition_id|body|string(uuid)|false|The unique id for the pipeline definition. This can be found in the page Project Settings > Pipelines.|
|» config|body|object|false|none|
|» » branch|body|string|false|The branch that should be used to fetch the config file.<br>Note that branch and tag are mutually exclusive.<br>To trigger a pipeline for a PR by number use pull/<number>/head for the PR ref or pull/<number>/merge for the merge ref (GitHub only)<br>|
|» » tag|body|string|false|The tag that should be used to fetch the config file.<br>The commit that this tag points to is used for the pipeline.<br>Note that branch and tag are mutually exclusive.<br>|
|» checkout|body|object|false|none|
|» » branch|body|string|false|The branch that should be used to check out code on a checkout step.<br>Note that branch and tag are mutually exclusive.<br>To trigger a pipeline for a PR by number use pull/<number>/head for the PR ref or pull/<number>/merge for the merge ref (GitHub only)<br>|
|» » tag|body|string|false|The tag that should be used to check out code on a checkout step.<br>The commit that this tag points to is used for the pipeline. Note that branch and tag are mutually exclusive.<br>|
|» parameters|body|object|false|An object containing pipeline parameters and their values.<br>Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|github|
|provider|gh|
|provider|bitbucket|
|provider|bb|
|provider|circleci|

> Example responses

> 200 Response

```json
{
  "message": "Ignoring pipeline due to CI skip in the commit"
}
```

> 201 Response

```json
{
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "number": 25,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

<h3 id="recommended-trigger-a-new-pipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with no created pipeline.|[pipelineNotTriggeredResponse](#schemapipelinenottriggeredresponse)|
|201|Created|Successful response.|[pipelineTriggeredResponse](#schemapipelinetriggeredresponse)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|

<h3 id="recommended-trigger-a-new-pipeline-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get pipeline values for a pipeline

<a id="opIdgetPipelineValuesById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/pipeline/5034460f-c7c4-4c43-9457-de07e2029e7b/values \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /pipeline/{pipeline_id}/values`

Returns a map of pipeline values by pipeline ID. For more information see the [pipeline values reference page](https://circleci.com/docs/variables/#pipeline-values).

<h3 id="get-pipeline-values-for-a-pipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipeline_id|path|string(uuid)|true|An opaque identifier of a pipeline.|

> Example responses

> 200 Response

```json
{
  "some.key": "some-value",
  "different.key": true,
  "another.field": 1
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-pipeline-values-for-a-pipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object of pipeline values.|[pipelineValues](#schemapipelinevalues)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-pipeline-values-for-a-pipeline-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-job">Job</h1>

Endpoints relating to [jobs](https://circleci.com/docs/jobs-steps/). Get information about your jobs, retrieve job assets, cancel a job.

## Cancel job by job ID

<a id="opIdcancelJobByJobID"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`POST /jobs/{job-id}/cancel`

Cancel job with a given job ID.

<h3 id="cancel-job-by-job-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job-id|path|string(uuid)|true|The unique ID of the job.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="cancel-job-by-job-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job cancelled successfully.|Inline|
|400|Bad Request|Bad request error.|Inline|
|401|Unauthorized|Unauthorized error.|Inline|
|403|Forbidden|Forbidden error.|Inline|
|404|Not Found|Job not found error.|Inline|
|default|Default|Error response.|Inline|

<h3 id="cancel-job-by-job-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Cancel job by job number

<a id="opIdcancelJobByJobNumber"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/job/123/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`POST /project/{project-slug}/job/{job-number}/cancel`

Cancel job with a given job number.

<h3 id="cancel-job-by-job-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job-number|path|object|true|The number of the job.|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="cancel-job-by-job-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|Error response.|Inline|

<h3 id="cancel-job-by-job-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a job

<a id="opIdgetJob"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/jobs/fbb79891-2e30-4f51-b447-ce3a32f349fc \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /jobs/{job_id}`

Gets a job's metadata by its unique ID, including its name, job number, type, status, and associated resource IDs.

<h3 id="get-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|An opaque identifier of a job.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "job_number": 0,
  "type": "string",
  "status": "string",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "pipeline_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "started_at": "1970-01-01T00:00:00Z",
  "stopped_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job fetched successfully|[getJobResponse](#schemagetjobresponse)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-a-job-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-workflow">Workflow</h1>

Endpoints relating to [workflows](https://circleci.com/docs/workflows/). Get information about your workflows, or interact with them to rerun, cancel or approve a job.

## Approve a job

<a id="opIdapprovePendingApprovalJobById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/workflow/5034460f-c7c4-4c43-9457-de07e2029e7b/approve/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`POST /workflow/{id}/approve/{approval_request_id}`

Approves a pending approval job in a workflow.

<h3 id="approve-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|approval_request_id|path|string(uuid)|true|The ID of the job being approved.|
|id|path|string(uuid)|true|The unique ID of the workflow.|

> Example responses

> 202 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="approve-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="approve-a-job-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Cancel a workflow

<a id="opIdcancelWorkflow"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/workflow/5034460f-c7c4-4c43-9457-de07e2029e7b/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`POST /workflow/{id}/cancel`

Cancels a running workflow.

<h3 id="cancel-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The unique ID of the workflow.|

> Example responses

> 202 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="cancel-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="cancel-a-workflow-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a workflow's jobs

<a id="opIdlistWorkflowJobs"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/workflow/5034460f-c7c4-4c43-9457-de07e2029e7b/job \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /workflow/{id}/job`

Returns a sequence of jobs for a workflow.

<h3 id="get-a-workflows-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The unique ID of the workflow.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "canceled_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dependencies": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "job_number": 1,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "started_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "approved_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "project_slug": "gh/CircleCI-Public/api-preview-docs",
      "status": "success",
      "type": "build",
      "requires": {
        "d212e286-9962-4ed7-92e2-8699622ed720": [
          "success"
        ],
        "74be7583-44de-42a6-be75-8344de52a6f2": [
          "failed",
          "canceled"
        ],
        "a3349b77-90f7-4a39-b49b-7790f7da3943": [
          "success",
          "failed",
          "canceled"
        ]
      },
      "stopped_at": "1970-01-01T00:00:00Z",
      "approval_request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-workflows-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated sequence of jobs.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-workflows-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» canceled_by|string(uuid)|false|none|The unique ID of the user.|
|» dependencies|[string(uuid)]|true|none|A sequence of the unique job IDs for the jobs that this job depends upon in the workflow.|
|» job_number|integer(int64)|false|none|The number of the job.|
|» id|string(uuid)|true|none|The unique ID of the job.|
|» started_at|string(date-time)|true|none|The date and time the job started.|
|» name|string|true|none|The name of the job.|
|» approved_by|string(uuid)|false|none|The unique ID of the user.|
|» project_slug|string|true|none|The project-slug for the job.|
|» status|string|true|none|The current status of the job.|
|» type|string|true|none|The type of job.|
|» requires|object|false|none|A sequence of the unique jobs and required statuses that this job depends upon in the workflow.|
|» » **additionalProperties**|[string]|false|none|A sequence of statuses that the job must have one of to satisfy a dependency.|
|» stopped_at|string(date-time)|false|none|The time when the job stopped.|
|» approval_request_id|string(uuid)|false|none|The unique ID of the job.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|not_run|
|» status|failed|
|» status|retried|
|» status|queued|
|» status|not_running|
|» status|infrastructure_fail|
|» status|timedout|
|» status|on_hold|
|» status|terminated-unknown|
|» status|blocked|
|» status|canceled|
|» status|unauthorized|
|» type|build|
|» type|approval|
|» » **additionalProperties**|success|
|» » **additionalProperties**|not_run|
|» » **additionalProperties**|failed|
|» » **additionalProperties**|canceled|
|» » **additionalProperties**|unauthorized|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Rerun a workflow

<a id="opIdrerunWorkflow"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/workflow/5034460f-c7c4-4c43-9457-de07e2029e7b/rerun \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "enable_ssh": false,
    "from_failed": false,
    "jobs": [
      "c65b68ef-e73b-4bf2-be9a-7a322a9df150",
      "5e957edd-5e8c-4985-9178-5d0d69561822"
    ],
    "sparse_tree": false
  }'
```

`POST /workflow/{id}/rerun`

Reruns a workflow.

> Body parameter

```json
{
  "enable_ssh": false,
  "from_failed": false,
  "jobs": [
    "c65b68ef-e73b-4bf2-be9a-7a322a9df150",
    "5e957edd-5e8c-4985-9178-5d0d69561822"
  ],
  "sparse_tree": false
}
```

<h3 id="rerun-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The unique ID of the workflow.|
|body|body|object|false|none|
|» enable_ssh|body|boolean|false|Whether to enable SSH access for the triggering user on the newly-rerun job. Requires the jobs parameter to be used and so is mutually exclusive with the from_failed parameter.|
|» from_failed|body|boolean|false|Whether to rerun the workflow from the failed job. Mutually exclusive with the jobs parameter.|
|» jobs|body|[string(uuid)]|false|A list of job IDs to rerun.|
|» sparse_tree|body|boolean|false|Completes rerun using sparse trees logic, an optimization for workflows that have disconnected subgraphs. Requires jobs parameter and so is mutually exclusive with the from_failed parameter.|

> Example responses

> 202 Response

```json
{
  "workflow_id": "0e53027b-521a-4c40-9042-47e72b3c63a3"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="rerun-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="rerun-a-workflow-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_id|string(uuid)|true|none|The ID of the newly-created workflow.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a workflow

<a id="opIdgetWorkflowById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/workflow/5034460f-c7c4-4c43-9457-de07e2029e7b \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /workflow/{id}`

Returns summary fields of a workflow by ID.

<h3 id="get-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The unique ID of the workflow.|

> Example responses

> 200 Response

```json
{
  "pipeline_id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
  "canceled_by": "026a6d28-c22e-4aab-a8b4-bd7131a8ea35",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_rerun_number": 1,
  "name": "build-and-test",
  "project_slug": "gh/CircleCI-Public/api-preview-docs",
  "errored_by": "c6e40f70-a80a-4ccc-af88-8d985a7bc622",
  "tag": "setup",
  "status": "success",
  "started_by": "03987f6a-4c27-4dc1-b6ab-c7e83bb3e713",
  "max_auto_reruns": 5,
  "pipeline_number": 25,
  "created_at": "1970-01-01T00:00:00Z",
  "stopped_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "message": "Workflow ID provided is invalid."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A workflow object.|[workflow](#schemaworkflow)|
|400|Bad Request|Workflow ID provided is invalid.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-a-workflow-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-oidc-token-management">OIDC Token Management</h1>

Endpoints related to manage oidc identity tokens

## Get org-level claims

<a id="opIdGetOrgClaims"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/org/497f6eca-6276-4993-bfeb-53cbbbba6f08/oidc-custom-claims \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /org/{orgID}/oidc-custom-claims`

Fetches org-level custom claims of OIDC identity tokens

<h3 id="get-org-level-claims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "audience": [
    "string"
  ],
  "audience_updated_at": "1970-01-01T00:00:00Z",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ttl": "string",
  "ttl_updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "internal server error"
}
```

<h3 id="get-org-level-claims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claims successfully fetched.|[ClaimResponse](#schemaclaimresponse)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="get-org-level-claims-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete org-level claims

<a id="opIdDeleteOrgClaims"></a>

> Code samples

```bash
curl 'https://circleci.com/api/v2/org/497f6eca-6276-4993-bfeb-53cbbbba6f08/oidc-custom-claims?claims=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /org/{orgID}/oidc-custom-claims`

Deletes org-level custom claims of OIDC identity tokens

<h3 id="delete-org-level-claims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|path|string(uuid)|true|none|
|claims|query|string|true|comma separated list of claims to delete. Valid values are "audience" and "ttl".|

> Example responses

> 200 Response

```json
{
  "audience": [
    "string"
  ],
  "audience_updated_at": "1970-01-01T00:00:00Z",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ttl": "string",
  "ttl_updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "internal server error"
}
```

<h3 id="delete-org-level-claims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claims successfully deleted.|[ClaimResponse](#schemaclaimresponse)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="delete-org-level-claims-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Patch org-level claims

<a id="opIdPatchOrgClaims"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/org/497f6eca-6276-4993-bfeb-53cbbbba6f08/oidc-custom-claims \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "audience": [
      "string"
    ],
    "ttl": "string"
  }'
```

`PATCH /org/{orgID}/oidc-custom-claims`

Creates/Updates org-level custom claims of OIDC identity tokens

> Body parameter

```json
{
  "audience": [
    "string"
  ],
  "ttl": "string"
}
```

<h3 id="patch-org-level-claims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|path|string(uuid)|true|none|
|body|body|[PatchClaimsRequest](#schemapatchclaimsrequest)|false|none|
|» audience|body|[string]|false|none|
|» ttl|body|[JSONDuration](#schemajsonduration)|false|none|

> Example responses

> 200 Response

```json
{
  "audience": [
    "string"
  ],
  "audience_updated_at": "1970-01-01T00:00:00Z",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ttl": "string",
  "ttl_updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "internal server error"
}
```

<h3 id="patch-org-level-claims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claims successfully patched.|[ClaimResponse](#schemaclaimresponse)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="patch-org-level-claims-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get project-level claims

<a id="opIdGetProjectClaims"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/org/497f6eca-6276-4993-bfeb-53cbbbba6f08/project/497f6eca-6276-4993-bfeb-53cbbbba6f08/oidc-custom-claims \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /org/{orgID}/project/{projectID}/oidc-custom-claims`

Fetches project-level custom claims of OIDC identity tokens

<h3 id="get-project-level-claims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|path|string(uuid)|true|none|
|projectID|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "audience": [
    "string"
  ],
  "audience_updated_at": "1970-01-01T00:00:00Z",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ttl": "string",
  "ttl_updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "internal server error"
}
```

<h3 id="get-project-level-claims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claims successfully fetched.|[ClaimResponse](#schemaclaimresponse)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="get-project-level-claims-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete project-level claims

<a id="opIdDeleteProjectClaims"></a>

> Code samples

```bash
curl 'https://circleci.com/api/v2/org/497f6eca-6276-4993-bfeb-53cbbbba6f08/project/497f6eca-6276-4993-bfeb-53cbbbba6f08/oidc-custom-claims?claims=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /org/{orgID}/project/{projectID}/oidc-custom-claims`

Deletes project-level custom claims of OIDC identity tokens

<h3 id="delete-project-level-claims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|path|string(uuid)|true|none|
|projectID|path|string(uuid)|true|none|
|claims|query|string|true|comma separated list of claims to delete. Valid values are "audience" and "ttl".|

> Example responses

> 200 Response

```json
{
  "audience": [
    "string"
  ],
  "audience_updated_at": "1970-01-01T00:00:00Z",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ttl": "string",
  "ttl_updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "internal server error"
}
```

<h3 id="delete-project-level-claims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claims successfully deleted.|[ClaimResponse](#schemaclaimresponse)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="delete-project-level-claims-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Patch project-level claims

<a id="opIdPatchProjectClaims"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/org/497f6eca-6276-4993-bfeb-53cbbbba6f08/project/497f6eca-6276-4993-bfeb-53cbbbba6f08/oidc-custom-claims \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "audience": [
      "string"
    ],
    "ttl": "string"
  }'
```

`PATCH /org/{orgID}/project/{projectID}/oidc-custom-claims`

Creates/Updates project-level custom claims of OIDC identity tokens

> Body parameter

```json
{
  "audience": [
    "string"
  ],
  "ttl": "string"
}
```

<h3 id="patch-project-level-claims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|path|string(uuid)|true|none|
|projectID|path|string(uuid)|true|none|
|body|body|[PatchClaimsRequest](#schemapatchclaimsrequest)|false|none|
|» audience|body|[string]|false|none|
|» ttl|body|[JSONDuration](#schemajsonduration)|false|none|

> Example responses

> 200 Response

```json
{
  "audience": [
    "string"
  ],
  "audience_updated_at": "1970-01-01T00:00:00Z",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ttl": "string",
  "ttl_updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "internal server error"
}
```

<h3 id="patch-project-level-claims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claims successfully patched.|[ClaimResponse](#schemaclaimresponse)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="patch-project-level-claims-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-policy-management">Policy Management</h1>

Endpoints related to managing policies and making policy decisions

## Retrieves the owner's decision audit logs.

<a id="opIdGetDecisionLogs"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/decision \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /owner/{ownerID}/context/{context}/decision`

This endpoint will return a list of decision audit logs that were made using this owner's policies.

<h3 id="retrieves-the-owners-decision-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|
|status|query|string|false|Return decisions matching this decision status.|
|after|query|string(date-time)|false|Return decisions made after this date.|
|before|query|string(date-time)|false|Return decisions made before this date.|
|branch|query|string|false|Return decisions made on this branch.|
|project_id|query|string|false|Return decisions made for this project.|
|build_number|query|string|false|Return decisions made for this build number.|
|offset|query|integer|false|Sets the offset when retrieving the decisions, for paging.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "decision": {
      "enabled_rules": [
        "string"
      ],
      "hard_failures": [
        {
          "reason": "string",
          "rule": "string"
        }
      ],
      "reason": "string",
      "soft_failures": [
        {
          "reason": "string",
          "rule": "string"
        }
      ],
      "status": "string"
    },
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata": {
      "build_number": 0,
      "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ssh_rerun": true,
      "vcs": {
        "branch": "string",
        "origin_repository_url": "string",
        "release_tag": "string",
        "target_repository_url": "string"
      }
    },
    "policies": {
      "policy_name1": "1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75",
      "policy_name2": "5267768822ee624d48fce15ec5ca79cbd602cb7f4c2157a516556991f22ef8c7b5ef7b18d1ff41c59370efb0858651d44a936c11b7b144c48fe04df3c6a3e8da"
    },
    "time_taken_ms": 0
  }
]
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="retrieves-the-owners-decision-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decision logs successfully retrieved.|Inline|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="retrieves-the-owners-decision-audit-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DecisionLog](#schemadecisionlog)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Makes a decision

<a id="opIdMakeDecision"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/decision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "input": "string",
    "metadata": {}
  }'
```

`POST /owner/{ownerID}/context/{context}/decision`

This endpoint will evaluate input data (config+metadata) against owner's stored policies and return a decision.

> Body parameter

```json
{
  "input": "string",
  "metadata": {}
}
```

<h3 id="makes-a-decision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|
|body|body|object|false|none|
|» input|body|string|true|none|
|» metadata|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "enabled_rules": [
    "string"
  ],
  "hard_failures": [
    {
      "reason": "string",
      "rule": "string"
    }
  ],
  "reason": "string",
  "soft_failures": [
    {
      "reason": "string",
      "rule": "string"
    }
  ],
  "status": "string"
}
```

> 400 Response

```json
{
  "error": "context: must be a valid value."
}
```

> 401 Response

```json
{
  "error": "Unauthorized."
}
```

> 500 Response

```json
{
  "error": "There was an error processing your request."
}
```

<h3 id="makes-a-decision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decision rendered by applying the policy against the provided data. Response will be modeled by the data and rego processed.|[Decision](#schemadecision)|
|400|Bad Request|The request is malformed<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="makes-a-decision-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get the decision settings

<a id="opIdGetDecisionSettings"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/decision/settings \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /owner/{ownerID}/context/{context}/decision/settings`

This endpoint retrieves the current decision settings (eg enable/disable policy evaluation)

<h3 id="get-the-decision-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "enabled": true
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="get-the-decision-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decision settings successfully retrieved.|[DecisionSettings](#schemadecisionsettings)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="get-the-decision-settings-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Set the decision settings

<a id="opIdSetDecisionSettings"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/decision/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "enabled": true
  }'
```

`PATCH /owner/{ownerID}/context/{context}/decision/settings`

This endpoint allows modifying decision settings (eg enable/disable policy evaluation)

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="set-the-decision-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|
|body|body|[DecisionSettings](#schemadecisionsettings)|false|none|
|» enabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "enabled": true
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="set-the-decision-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decision settings successfully set.|[DecisionSettings](#schemadecisionsettings)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="set-the-decision-settings-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Retrieves the owner's decision audit log by given decisionID

<a id="opIdGetDecisionLog"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/decision/string \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /owner/{ownerID}/context/{context}/decision/{decisionID}`

This endpoint will retrieve a decision for a given decision log ID

<h3 id="retrieves-the-owners-decision-audit-log-by-given-decisionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|
|decisionID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "decision": {
    "enabled_rules": [
      "string"
    ],
    "hard_failures": [
      {
        "reason": "string",
        "rule": "string"
      }
    ],
    "reason": "string",
    "soft_failures": [
      {
        "reason": "string",
        "rule": "string"
      }
    ],
    "status": "string"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata": {
    "build_number": 0,
    "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ssh_rerun": true,
    "vcs": {
      "branch": "string",
      "origin_repository_url": "string",
      "release_tag": "string",
      "target_repository_url": "string"
    }
  },
  "policies": {
    "policy_name1": "1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75",
    "policy_name2": "5267768822ee624d48fce15ec5ca79cbd602cb7f4c2157a516556991f22ef8c7b5ef7b18d1ff41c59370efb0858651d44a936c11b7b144c48fe04df3c6a3e8da"
  },
  "time_taken_ms": 0
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 404 Response

```json
{
  "error": "decision log not found"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="retrieves-the-owners-decision-audit-log-by-given-decisionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decision log successfully retrieved.|[DecisionLog](#schemadecisionlog)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|404|Not Found|There was no decision log found for given decision_id, and owner_id.<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="retrieves-the-owners-decision-audit-log-by-given-decisionid-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Retrieves Policy Bundle for a given decision log ID

<a id="opIdGetDecisionLogPolicyBundle"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/decision/string/policy-bundle \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /owner/{ownerID}/context/{context}/decision/{decisionID}/policy-bundle`

This endpoint will retrieve a policy bundle for a given decision log ID

<h3 id="retrieves-policy-bundle-for-a-given-decision-log-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|
|decisionID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "property1": [
    {
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "name": "string"
    }
  ],
  "property2": [
    {
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 404 Response

```json
{
  "error": "decision log not found"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="retrieves-policy-bundle-for-a-given-decision-log-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy-Bundle retrieved successfully for given decision log ID|[PolicyBundle](#schemapolicybundle)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|404|Not Found|There was no decision log found for given decision_id, and owner_id.<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="retrieves-policy-bundle-for-a-given-decision-log-id-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Retrieves Policy Bundle

<a id="opIdGetPolicyBundle"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/policy-bundle \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /owner/{ownerID}/context/{context}/policy-bundle`

This endpoint will retrieve a policy bundle

<h3 id="retrieves-policy-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "property1": [
    {
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "name": "string"
    }
  ],
  "property2": [
    {
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="retrieves-policy-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy-Bundle retrieved successfully.|[PolicyBundle](#schemapolicybundle)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="retrieves-policy-bundle-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Creates policy bundle for the context

<a id="opIdCreatePolicyBundle"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/policy-bundle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "policies": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /owner/{ownerID}/context/{context}/policy-bundle`

This endpoint replaces the current policy bundle with the provided policy bundle

> Body parameter

```json
{
  "policies": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="creates-policy-bundle-for-the-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|
|dry|query|boolean|false|none|
|body|body|[BundlePayload](#schemabundlepayload)|false|none|
|» policies|body|object|false|none|
|» » **additionalProperties**|body|string|false|policy content|

> Example responses

> 200 Response

```json
{
  "created": [
    "string"
  ],
  "deleted": [
    "string"
  ],
  "modified": [
    "string"
  ]
}
```

> 201 Response

```json
{
  "created": [
    "string"
  ],
  "deleted": [
    "string"
  ],
  "modified": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 413 Response

```json
{
  "error": "http: request payload too large"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="creates-policy-bundle-for-the-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy-Bundle diff successfully returned.|[BundleDiff](#schemabundlediff)|
|201|Created|Policy-Bundle successfully created.|[BundleDiff](#schemabundlediff)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|413|Payload Too Large|The request exceeds the maximum payload size for policy bundles ~2.5Mib<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="creates-policy-bundle-for-the-context-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Retrieves a policy document

<a id="opIdGetPolicyDocument"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/owner/string/context/string/policy-bundle/string \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /owner/{ownerID}/context/{context}/policy-bundle/{policyName}`

This endpoint will retrieve a policy document.

<h3 id="retrieves-a-policy-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerID|path|string|true|none|
|context|path|string|true|none|
|policyName|path|string|true|the policy name set by the rego policy_name rule|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "name": "string"
}
```

> 400 Response

```json
{
  "error": "OwnerID: must be a valid UUID."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Forbidden"
}
```

> 404 Response

```json
{
  "error": "policy not found"
}
```

> 500 Response

```json
{
  "error": "unexpected server error"
}
```

<h3 id="retrieves-a-policy-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy retrieved successfully.|[Policy](#schemapolicy)|
|400|Bad Request|The request is malformed (e.g, a given path parameter is invalid)<br>|Inline|
|401|Unauthorized|The request is unauthorized<br>|Inline|
|403|Forbidden|The user is forbidden from making this request<br>|Inline|
|404|Not Found|There was no policy that was found with the given owner_id and policy name.<br>|Inline|
|500|Internal Server Error|Something unexpected happened on the server.|Inline|

<h3 id="retrieves-a-policy-document-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-deploy">Deploy</h1>

Endpoints related to deploy management.

## List Environments

<a id="opIdlistEnvironments"></a>

> Code samples

```bash
curl 'https://circleci.com/api/v2/deploy/environments?org-id=b9291e0d-a11e-41fb-8517-c545388b5953&page-size=0' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /deploy/environments`

Allows listing environments for a given organization ID.

<h3 id="list-environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-id|query|string(uuid)|true|An opaque identifier of an organization used in query parameters.|
|page-size|query|integer|true|The number of results per page.|
|page-token|query|string|false|A token to specify which page of results to fetch.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "some description",
      "id": "123e4127-e89b-12d3-a456-426123417400",
      "labels": [
        {
          "key": "env",
          "value": "prod"
        }
      ],
      "name": "prod-app",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated environments list|[paginatedEnvironmentList](#schemapaginatedenvironmentlist)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-environments-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get Environment

<a id="opIdgetEnvironment"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/deploy/environments/1c23d2cb-07b1-4a28-8af3-e369732050ed \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /deploy/environments/{environment_id}`

Allows getting an environment for a given environment ID.

<h3 id="get-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment_id|path|string(uuid)|true|An opaque identifier of an environment.|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "description": "some description",
  "id": "123e4127-e89b-12d3-a456-426123417400",
  "labels": [
    {
      "key": "env",
      "value": "prod"
    }
  ],
  "name": "prod-app",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Environment|[environment](#schemaenvironment)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-environment-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## List Components

<a id="opIdlistComponents"></a>

> Code samples

```bash
curl 'https://circleci.com/api/v2/deploy/components?org-id=b9291e0d-a11e-41fb-8517-c545388b5953&page-size=0' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /deploy/components`

Allows for listing of components for a given organization ID.

<h3 id="list-components-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-id|query|string(uuid)|true|An opaque identifier of an organization used in query parameters.|
|project-id|query|string(uuid)|false|An opaque identifier of an project used in query parameters.|
|page-size|query|integer|true|The number of results per page.|
|page-token|query|string|false|A token to specify which page of results to fetch.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "123e4127-e89b-12d3-a456-426123417400",
      "name": "service-a",
      "project_id": "123e4127-e89b-12d3-a456-426123417400",
      "labels": [
        {
          "key": "env",
          "value": "prod"
        }
      ],
      "release_count": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-components-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated components list|[paginatedComponentList](#schemapaginatedcomponentlist)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-components-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get Component

<a id="opIdgetComponent"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/deploy/components/b9291e0d-a11e-41fb-8517-c545388b5953 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /deploy/components/{component_id}`

Get the details of a component by ID.

<h3 id="get-component-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|component_id|path|string|true|An opaque identifier of a component.|

> Example responses

> 200 Response

```json
{
  "id": "123e4127-e89b-12d3-a456-426123417400",
  "name": "service-a",
  "project_id": "123e4127-e89b-12d3-a456-426123417400",
  "labels": [
    {
      "key": "env",
      "value": "prod"
    }
  ],
  "release_count": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-component-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[component](#schemacomponent)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-component-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## List Component Versions

<a id="opIdlistComponentVersions"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/deploy/components/b9291e0d-a11e-41fb-8517-c545388b5953/versions \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /deploy/components/{component_id}/versions`

List the versions for a component.

<h3 id="list-component-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|component_id|path|string|true|An opaque identifier of a component.|
|environment-id|query|string(uuid)|false|An opaque identifier of an environment used in query parameters.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "1.0.0",
      "environment_id": "123e4127-e89b-12d3-a456-426123417400",
      "namespace": "default",
      "is_live": true,
      "pipeline_id": "cc54a110-d03f-4916-96fc-ff36a1221ed7",
      "workflow_id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
      "job_id": "f7e18b53-db27-4706-ad77-b16dc1e6fc53",
      "job_number": 123,
      "last_deployed_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-component-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated component versions list|[paginatedComponentVersionList](#schemapaginatedcomponentversionlist)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-component-versions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-otel">OTel</h1>

[__EXPERIMENTAL__] Endpoints related to managing OpenTelemetry exporter configurations.

## 🧪 List OTLP exporters

<a id="opIdlistOtelExporters"></a>

> Code samples

```bash
curl 'https://circleci.com/api/v2/otel/exporters?org-id=b9291e0d-a11e-41fb-8517-c545388b5953' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /otel/exporters`

[__EXPERIMENTAL__] Returns a list of OTLP exporter configurations for the given organization.

<h3 id="-list-otlp-exporters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-id|query|string(uuid)|true|An opaque identifier of an organization used in query parameters.|

> Example responses

> 200 Response

```json
[
  {
    "id": "123e4127-e89b-12d3-a456-426123417400",
    "org_id": "b9291e0d-a11e-41fb-8517-c545388b5953",
    "endpoint": "otel.example.com:4317",
    "protocol": "grpc",
    "insecure": false,
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "issues": [
      "string"
    ]
  }
]
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="-list-otlp-exporters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of OTLP exporters.|[exporterList](#schemaexporterlist)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="-list-otlp-exporters-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## 🧪 Create an OTLP exporter

<a id="opIdcreateOtelExporter"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/otel/exporters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "org_id": "b9291e0d-a11e-41fb-8517-c545388b5953",
    "endpoint": "otel.example.com:4317",
    "protocol": "grpc",
    "insecure": false,
    "headers": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /otel/exporters`

[__EXPERIMENTAL__] Creates a new OTLP exporter configuration for the given organization. A maximum of 5 exporter configurations are allowed per organization.

> Body parameter

```json
{
  "org_id": "b9291e0d-a11e-41fb-8517-c545388b5953",
  "endpoint": "otel.example.com:4317",
  "protocol": "grpc",
  "insecure": false,
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="-create-an-otlp-exporter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createExporterRequest](#schemacreateexporterrequest)|true|none|
|» org_id|body|string(uuid)|true|The organization ID to create the exporter for.|
|» endpoint|body|string|true|The OTLP endpoint to send spans to. Don't include https:// or grpc://. Just the hostname and port are required.|
|» protocol|body|string|true|The OTLP transport to use when exporting data.|
|» insecure|body|boolean|false|Whether to use an insecure connection to the endpoint.|
|» headers|body|object|false|Additional headers to include in export requests.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|grpc|
|» protocol|http|

> Example responses

> 201 Response

```json
{
  "id": "123e4127-e89b-12d3-a456-426123417400",
  "org_id": "b9291e0d-a11e-41fb-8517-c545388b5953",
  "endpoint": "otel.example.com:4317",
  "protocol": "grpc",
  "insecure": false,
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "issues": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "message": "JSON field 'field_name' is of incorrect type."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="-create-an-otlp-exporter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OTLP exporter created.|[exporter](#schemaexporter)|
|400|Bad Request|JSON passed in the request does not adhere to the expected schema.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="-create-an-otlp-exporter-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## 🧪 Delete an OTLP exporter

<a id="opIddeleteOtelExporter"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/otel/exporters/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /otel/exporters/{otel_exporter_id}`

[__EXPERIMENTAL__] Deletes an OTLP exporter configuration by ID.

<h3 id="-delete-an-otlp-exporter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|otel_exporter_id|path|string(uuid)|true|The ID of an OTLP exporter configuration.|

> Example responses

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="-delete-an-otlp-exporter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OTLP exporter deleted.|None|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="-delete-an-otlp-exporter-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-pipeline-definition">Pipeline Definition</h1>

Endpoints related to creating and managing pipeline definitions.

## List pipeline definitions

<a id="opIdlistPipelineDefinitions"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/pipeline-definitions \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /projects/{project_id}/pipeline-definitions`

List all pipeline definitions for a given project. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

<h3 id="list-pipeline-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "some pipeline",
      "description": "some pipeline description",
      "created_at": "1970-01-01T00:00:00Z",
      "config_source": {
        "provider": "github_app",
        "repo": {
          "full_name": "some-org/some-repo-name",
          "external_id": "some-repo-id"
        },
        "file_path": ".circleci/some-pipeline.yml"
      },
      "checkout_source": {
        "provider": "github_app",
        "repo": {
          "full_name": "some-org/some-repo-name",
          "external_id": "some-repo-id"
        }
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-pipeline-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[pipelineDefinitionList](#schemapipelinedefinitionlist)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-pipeline-definitions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create pipeline definition

<a id="opIdcreatePipelineDefinition"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/pipeline-definitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "Some pipeline name",
    "description": "Some pipeline description",
    "config_source": {
      "provider": "github_app",
      "repo": {
        "external_id": "some-repo-id"
      },
      "file_path": ".circleci/some-pipeline.yml"
    },
    "checkout_source": {
      "provider": "github_app",
      "repo": {
        "external_id": "some-repo-id"
      }
    }
  }'
```

`POST /projects/{project_id}/pipeline-definitions`

Create a pipeline definition for a given project. Currently only supported for pipeline definitions where `config_source.provider` is `github_app` or `github_server`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

> Body parameter

```json
{
  "name": "Some pipeline name",
  "description": "Some pipeline description",
  "config_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "some-repo-id"
    },
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "some-repo-id"
    }
  }
}
```

<h3 id="create-pipeline-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|body|body|[createPipelineDefinitionRequest](#schemacreatepipelinedefinitionrequest)|false|none|
|» name|body|string|true|The name of the pipeline definition.|
|» description|body|string|false|The description of the pipeline definition.|
|» config_source|body|object|true|none|
|» » *oneOf*|body|object|false|Config source for external providers (repo required)|
|» » provider|body|string|true|The integration provider for this resource. Supported external providers are `github_app` and `github_server`.|
|» » repo|body|object|true|none|
|» » » external_id|body|string|true|External identifier for the repository, as defined by the respective version control provider.|
|» » file_path|body|string|true|Path to CircleCI config YAML file to use for this pipeline definition.|
|» » *oneOf*|body|object|false|Config source for CircleCI provider (no repo required)|
|» » provider|body|string|true|The integration provider for this resource.|
|» » file_path|body|string|true|Path to CircleCI config YAML file to use for this pipeline definition.|
|» checkout_source|body|object|true|The resource to be used when running the `checkout` command.|
|» » provider|body|string|true|The integration provider for this resource. Supported values are `github_app` and `github_server`.|
|» » repo|body|object|true|none|
|» » » external_id|body|string|true|External identifier for the repository, as defined by the respective version control provider.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » provider|github_app|
|» » provider|github_server|
|» » provider|circleci|
|» » provider|github_app|
|» » provider|github_server|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "some pipeline",
  "description": "some pipeline description",
  "created_at": "1970-01-01T00:00:00Z",
  "config_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    },
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    }
  }
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="create-pipeline-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[pipelineDefinition](#schemapipelinedefinition)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="create-pipeline-definition-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get pipeline definition

<a id="opIdgetPipelineDefinition"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/pipeline-definitions/6cb29b00-8e02-4357-8bc0-313983bf1f46 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /projects/{project_id}/pipeline-definitions/{pipeline_definition_id}`

Get details for a pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, `github_oauth`, `bitbucket_dc`, `bitbucket_oauth` or `gitlab`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

<h3 id="get-pipeline-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|pipeline_definition_id|path|string|true|An opaque identifier of a pipeline definition.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "some pipeline",
  "description": "some pipeline description",
  "created_at": "1970-01-01T00:00:00Z",
  "config_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    },
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    }
  }
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-pipeline-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[pipelineDefinition](#schemapipelinedefinition)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-pipeline-definition-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete pipeline definition

<a id="opIddeletePipelineDefinition"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/pipeline-definitions/6cb29b00-8e02-4357-8bc0-313983bf1f46 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /projects/{project_id}/pipeline-definitions/{pipeline_definition_id}`

Delete pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, or `bitbucket_dc`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

<h3 id="delete-pipeline-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|pipeline_definition_id|path|string|true|An opaque identifier of a pipeline definition.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="delete-pipeline-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[pipelineDefinitionDeleted](#schemapipelinedefinitiondeleted)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="delete-pipeline-definition-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Update pipeline definition

<a id="opIdupdatePipelineDefinition"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/pipeline-definitions/6cb29b00-8e02-4357-8bc0-313983bf1f46 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "Some pipeline name",
    "description": "Some pipeline description",
    "config_source": {
      "file_path": ".circleci/some-pipeline.yml"
    },
    "checkout_source": {
      "provider": "github_app",
      "repo": {
        "external_id": "some-repo-id"
      }
    }
  }'
```

`PATCH /projects/{project_id}/pipeline-definitions/{pipeline_definition_id}`

Update pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, or `bitbucket_dc`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

> Body parameter

```json
{
  "name": "Some pipeline name",
  "description": "Some pipeline description",
  "config_source": {
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "some-repo-id"
    }
  }
}
```

<h3 id="update-pipeline-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|pipeline_definition_id|path|string|true|An opaque identifier of a pipeline definition.|
|body|body|[updatePipelineDefinitionRequest](#schemaupdatepipelinedefinitionrequest)|false|none|
|» name|body|string|false|The name of the pipeline definition.|
|» description|body|string|false|The description of the pipeline definition.|
|» config_source|body|object|false|The resource that stores the CircleCI config YAML used for this pipeline definition.|
|» » file_path|body|string|false|Path to CircleCI config YAML file to use for this pipeline definition.|
|» checkout_source|body|object|false|The resource to be used when running the `checkout` command.|
|» » provider|body|string|false|The integration provider for this resource. Supported values include `github_app` and `github_server`.|
|» » repo|body|object|false|none|
|» » » external_id|body|string|false|External identifier for the repository, as defined by the respective version control provider.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "some pipeline",
  "description": "some pipeline description",
  "created_at": "1970-01-01T00:00:00Z",
  "config_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    },
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    }
  }
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="update-pipeline-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[pipelineDefinition](#schemapipelinedefinition)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="update-pipeline-definition-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-project">Project</h1>

Endpoints related to creating and managing a project.

## Create a new project

<a id="opIdcreateProject"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organization/gh%2FCircleCI-Public/project \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "api-preview-docs"
  }'
```

`POST /organization/{org-slug-or-id}/project`

Create a new project. Works for all organization types.

> Body parameter

```json
{
  "name": "api-preview-docs"
}
```

<h3 id="create-a-new-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug-or-id|path|string|true|Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|
|body|body|object|false|none|
|» name|body|string|true|The name of the project|

> Example responses

> 200 Response

```json
{
  "slug": "gh/CircleCI-Public/api-preview-docs",
  "name": "api-preview-docs",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "organization_name": "CircleCI-Public",
  "organization_slug": "gh/CircleCI-Public",
  "organization_id": "ec6887ec-7d44-4b31-b468-7e552408ee32",
  "vcs_info": {
    "vcs_url": "https://github.com/CircleCI-Public/api-preview-docs",
    "provider": "Bitbucket",
    "default_branch": "main"
  }
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-new-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new project|Inline|
|default|Default|Error response.|Inline|

<h3 id="create-a-new-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|name|string|true|none|The name of the project|
|id|string(uuid)|true|none|none|
|organization_name|string|true|none|The name of the organization the project belongs to|
|organization_slug|string|true|none|The slug of the organization the project belongs to|
|organization_id|string(uuid)|true|none|The id of the organization the project belongs to|
|vcs_info|object|true|none|Information about the VCS that hosts the project source code.|
|» vcs_url|string|true|none|URL to the repository hosting the project's code|
|» provider|string|true|none|The VCS provider|
|» default_branch|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» provider|Bitbucket|
|» provider|CircleCI|
|» provider|GitHub|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a project

<a id="opIdgetProjectBySlug"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}`

Retrieves a project by project slug.

<h3 id="get-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|

> Example responses

> 200 Response

```json
{
  "slug": "gh/CircleCI-Public/api-preview-docs",
  "name": "api-preview-docs",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "organization_name": "CircleCI-Public",
  "organization_slug": "gh/CircleCI-Public",
  "organization_id": "ec6887ec-7d44-4b31-b468-7e552408ee32",
  "vcs_info": {
    "vcs_url": "https://github.com/CircleCI-Public/api-preview-docs",
    "provider": "Bitbucket",
    "default_branch": "main"
  }
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A project object|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|name|string|true|none|The name of the project|
|id|string(uuid)|true|none|none|
|organization_name|string|true|none|The name of the organization the project belongs to|
|organization_slug|string|true|none|The slug of the organization the project belongs to|
|organization_id|string(uuid)|true|none|The id of the organization the project belongs to|
|vcs_info|object|true|none|Information about the VCS that hosts the project source code.|
|» vcs_url|string|true|none|URL to the repository hosting the project's code|
|» provider|string|true|none|The VCS provider|
|» default_branch|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» provider|Bitbucket|
|» provider|CircleCI|
|» provider|GitHub|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete a project

<a id="opIddeleteProjectBySlug"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /project/{project-slug}`

Deletes a project by project slug

<h3 id="delete-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="delete-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get all checkout keys

<a id="opIdlistCheckoutKeys"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/checkout-key \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/checkout-key`

Returns a sequence of checkout keys for `:project`.

<h3 id="get-all-checkout-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|digest|query|string|false|The fingerprint digest type to return. This may be either `md5` or `sha256`. If not passed, defaults to `md5`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|digest|sha256|
|digest|md5|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "public-key": "ssh-rsa ...",
      "type": "deploy-key",
      "fingerprint": "c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f",
      "preferred": true,
      "created-at": "2015-09-21T17:29:21.042Z"
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-all-checkout-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A sequence of checkout keys.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-all-checkout-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» public-key|string|true|none|A public SSH key.|
|» type|string|true|none|The type of checkout key. This may be either `deploy-key` or `github-user-key`.|
|» fingerprint|string|true|none|An SSH key fingerprint.|
|» preferred|boolean|true|none|A boolean value that indicates if this key is preferred.|
|» created-at|string(date-time)|true|none|The date and time the checkout key was created.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|deploy-key|
|» type|github-user-key|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create a new checkout key

<a id="opIdcreateCheckoutKey"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/checkout-key \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "type": "deploy-key"
  }'
```

`POST /project/{project-slug}/checkout-key`

Not available to projects that use GitLab or GitHub App. Creates a new checkout key. This API request is only usable with a user API token.
                           Please ensure that you have authorized your account with GitHub before creating user keys.
                           This is necessary to give CircleCI the permission to create a user key associated with
                           your GitHub user account. You can find this page by visiting Project Settings > Checkout SSH Keys

> Body parameter

```json
{
  "type": "deploy-key"
}
```

<h3 id="create-a-new-checkout-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|body|body|object|false|none|
|» type|body|string|true|The type of checkout key to create. This may be either `deploy-key` or `user-key`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|user-key|
|» type|deploy-key|

> Example responses

> 201 Response

```json
{
  "public-key": "ssh-rsa ...",
  "type": "deploy-key",
  "fingerprint": "c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f",
  "preferred": true,
  "created-at": "2015-09-21T17:29:21.042Z"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-new-checkout-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The checkout key.|Inline|
|default|Default|Error response.|Inline|

<h3 id="create-a-new-checkout-key-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public-key|string|true|none|A public SSH key.|
|type|string|true|none|The type of checkout key. This may be either `deploy-key` or `github-user-key`.|
|fingerprint|string|true|none|An SSH key fingerprint.|
|preferred|boolean|true|none|A boolean value that indicates if this key is preferred.|
|created-at|string(date-time)|true|none|The date and time the checkout key was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|deploy-key|
|type|github-user-key|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a checkout key

<a id="opIdgetCheckoutKey"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/checkout-key/c9%3A0b%3A1c%3A4f%3Ad5%3A65%3A56%3Ab9%3Aad%3A88%3Af9%3A81%3A2b%3A37%3A74%3A2f \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/checkout-key/{fingerprint}`

Returns an individual checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.

<h3 id="get-a-checkout-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|fingerprint|path|string|true|An SSH key fingerprint.|

> Example responses

> 200 Response

```json
{
  "public-key": "ssh-rsa ...",
  "type": "deploy-key",
  "fingerprint": "c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f",
  "preferred": true,
  "created-at": "2015-09-21T17:29:21.042Z"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-checkout-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The checkout key.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-checkout-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public-key|string|true|none|A public SSH key.|
|type|string|true|none|The type of checkout key. This may be either `deploy-key` or `github-user-key`.|
|fingerprint|string|true|none|An SSH key fingerprint.|
|preferred|boolean|true|none|A boolean value that indicates if this key is preferred.|
|created-at|string(date-time)|true|none|The date and time the checkout key was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|deploy-key|
|type|github-user-key|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete a checkout key

<a id="opIddeleteCheckoutKey"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/checkout-key/c9%3A0b%3A1c%3A4f%3Ad5%3A65%3A56%3Ab9%3Aad%3A88%3Af9%3A81%3A2b%3A37%3A74%3A2f \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /project/{project-slug}/checkout-key/{fingerprint}`

Deletes the checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.

<h3 id="delete-a-checkout-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|fingerprint|path|string|true|An SSH key fingerprint.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-checkout-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="delete-a-checkout-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## List all environment variables

<a id="opIdlistEnvVars"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/envvar \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/envvar`

Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.

<h3 id="list-all-environment-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "foo",
      "value": "xxxx1234",
      "created-at": "#joda/inst 2023-04-14T21:20:14+0000"
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="list-all-environment-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A sequence of environment variables.|Inline|
|default|Default|Error response.|Inline|

<h3 id="list-all-environment-variables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» name|string|true|none|The name of the environment variable.|
|» value|string|true|none|The value of the environment variable.|
|» created-at|object|false|none|The creation timestamp of the environment variable.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create an environment variable

<a id="opIdcreateEnvVar"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/envvar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "foo",
    "value": "xxxx1234"
  }'
```

`POST /project/{project-slug}/envvar`

Creates a new environment variable.

> Body parameter

```json
{
  "name": "foo",
  "value": "xxxx1234"
}
```

<h3 id="create-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|body|body|object|false|none|
|» name|body|string|true|The name of the environment variable.|
|» value|body|string|true|The value of the environment variable.|

> Example responses

> 201 Response

```json
{
  "name": "foo",
  "value": "xxxx1234",
  "created-at": "#joda/inst 2023-04-14T21:20:14+0000"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="create-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The environment variable.|Inline|
|default|Default|Error response.|Inline|

<h3 id="create-an-environment-variable-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the environment variable.|
|value|string|true|none|The value of the environment variable.|
|created-at|object|false|none|The creation timestamp of the environment variable.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a masked environment variable

<a id="opIdgetEnvVar"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/envvar/foo \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/envvar/{name}`

Returns the masked value of environment variable :name.

<h3 id="get-a-masked-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|name|path|string|true|The name of the environment variable.|

> Example responses

> 200 Response

```json
{
  "name": "foo",
  "value": "xxxx1234",
  "created-at": "#joda/inst 2023-04-14T21:20:14+0000"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-masked-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The environment variable.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-masked-environment-variable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the environment variable.|
|value|string|true|none|The value of the environment variable.|
|created-at|object|false|none|The creation timestamp of the environment variable.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete an environment variable

<a id="opIddeleteEnvVar"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/envvar/foo \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /project/{project-slug}/envvar/{name}`

Deletes the environment variable named :name.

<h3 id="delete-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|name|path|string|true|The name of the environment variable.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="delete-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="delete-an-environment-variable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get project settings

<a id="opIdgetProjectSettings"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh/CircleCI-Public/api-preview-docs/settings \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{provider}/{organization}/{project}/settings`

Returns a list of the advanced settings for a CircleCI project, whether enabled (true) or not (false).

<h3 id="get-project-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|The first segment of the slash-separated project slug, as shown in Project Settings > Overview.|
|organization|path|string|true|The second segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the org name (e.g. `my-org`) or an ID (e.g. `43G3lM5RtfFE7v5sa4nWAU`).|
|project|path|string|true|The third segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the project name (e.g. `my-project`) or an ID (e.g. `44n9wujWcTnVZ2b5S8Fnat`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|github|
|provider|gh|
|provider|bitbucket|
|provider|bb|
|provider|circleci|

> Example responses

> 200 Response

```json
{
  "advanced": {
    "autocancel_builds": true,
    "build_fork_prs": true,
    "build_prs_only": true,
    "disable_ssh": true,
    "forks_receive_secret_env_vars": true,
    "oss": true,
    "set_github_status": true,
    "setup_workflows": true,
    "write_settings_requires_admin": true,
    "pr_only_branch_overrides": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 403 Response

```json
{
  "message": "Permission denied."
}
```

> 404 Response

```json
{
  "message": "Project not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-project-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[project_settings](#schemaproject_settings)|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|403|Forbidden|None or insufficient credentials provided.|Inline|
|404|Not Found|Insufficient credentials for a private project, OR the organization, project, or repository does not exist.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-project-settings-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Update project settings

<a id="opIdpatchProjectSettings"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh/CircleCI-Public/api-preview-docs/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "advanced": {
      "autocancel_builds": false,
      "build_prs_only": true,
      "pr_only_branch_overrides": [
        "main"
      ]
    }
  }'
```

`PATCH /project/{provider}/{organization}/{project}/settings`

Updates one or more of the advanced settings for a CircleCI project.

> Body parameter

```json
{
  "advanced": {
    "autocancel_builds": false,
    "build_prs_only": true,
    "pr_only_branch_overrides": [
      "main"
    ]
  }
}
```

<h3 id="update-project-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|The first segment of the slash-separated project slug, as shown in Project Settings > Overview.|
|organization|path|string|true|The second segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the org name (e.g. `my-org`) or an ID (e.g. `43G3lM5RtfFE7v5sa4nWAU`).|
|project|path|string|true|The third segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the project name (e.g. `my-project`) or an ID (e.g. `44n9wujWcTnVZ2b5S8Fnat`).|
|body|body|[project_settings](#schemaproject_settings)|true|The setting(s) to update, including one or more fields in the JSON object. Note that `oss: true` will only be set on projects whose underlying repositories are actually open source.|
|» advanced|body|object|false|none|
|» » autocancel_builds|body|boolean|false|Except for the default branch, cancel running pipelines on a branch when a new pipeline starts on that branch.|
|» » build_fork_prs|body|boolean|false|Run builds for pull requests from forks.|
|» » build_prs_only|body|boolean|false|Once enabled, we will only build branches that have associated pull requests open.|
|» » disable_ssh|body|boolean|false|When set to true, job re-runs with SSH debugging access will be disabled for the project.|
|» » forks_receive_secret_env_vars|body|boolean|false|Run builds for forked pull requests with this project's configuration, environment variables, and secrets.|
|» » oss|body|boolean|false|Free and Open Source. Enabling this grants additional credits, and lets others see your builds, both through the web UI and the API.|
|» » set_github_status|body|boolean|false|Report the status of every pushed commit to GitHub's status API. Updates reported per job.|
|» » setup_workflows|body|boolean|false|Enabling allows you to conditionally trigger configurations outside of the primary `.circleci` parent directory.|
|» » write_settings_requires_admin|body|boolean|false|Whether updating these settings requires a user to be an organization administrator. When disabled, updating settings can be done by any member.|
|» » pr_only_branch_overrides|body|[string]|false|This field is used in conjunction with the `build_prs_only`, it allows you to specify a list of branches that will always triger a build. The value passed will overwrite the existing value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|github|
|provider|gh|
|provider|bitbucket|
|provider|bb|
|provider|circleci|

> Example responses

> 200 Response

```json
{
  "advanced": {
    "autocancel_builds": true,
    "build_fork_prs": true,
    "build_prs_only": true,
    "disable_ssh": true,
    "forks_receive_secret_env_vars": true,
    "oss": true,
    "set_github_status": true,
    "setup_workflows": true,
    "write_settings_requires_admin": true,
    "pr_only_branch_overrides": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Invalid JSON body."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 403 Response

```json
{
  "message": "Permission denied."
}
```

> 404 Response

```json
{
  "message": "Project not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="update-project-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response. Always includes the full advanced settings object. Returned even when the provided updates match the existing settings, but can also be returned when `oss: true` fails to set.|[project_settings](#schemaproject_settings)|
|400|Bad Request|Request is malformed, e.g. with improperly encoded JSON|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|403|Forbidden|None or insufficient credentials provided.|Inline|
|404|Not Found|Insufficient credentials for a private project, OR the organization, project, or repository does not exist.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="update-project-settings-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-rollback">Rollback</h1>

Endpoints related to creating and managing a rollback.

## Rollback a project

<a id="opIdrollbackProject"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/rollback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "component_name": "frontend",
    "current_version": "1.0.0",
    "environment_name": "production",
    "namespace": "default",
    "parameters": {
      "param1": "value1",
      "param2": "value2"
    },
    "reason": "The component is down",
    "target_version": "1.0.1"
  }'
```

`POST /projects/{project_id}/rollback`

Performs a rollback operation by triggering a rollback pipeline.

> Body parameter

```json
{
  "component_name": "frontend",
  "current_version": "1.0.0",
  "environment_name": "production",
  "namespace": "default",
  "parameters": {
    "param1": "value1",
    "param2": "value2"
  },
  "reason": "The component is down",
  "target_version": "1.0.1"
}
```

<h3 id="rollback-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|body|body|[rollbackProjectRequest](#schemarollbackprojectrequest)|true|none|
|» component_name|body|string|true|The component name|
|» current_version|body|string|true|The current version|
|» environment_name|body|string|true|The environment name|
|» namespace|body|string|false|The namespace|
|» parameters|body|object|false|The extra parameters for the rollback pipeline|
|» » **additionalProperties**|body|object|false|none|
|» reason|body|string|false|The reason for the rollback|
|» target_version|body|string|true|The target version|

> Example responses

> 202 Response

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "rollback_type": "PIPELINE"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 409 Response

```json
{
  "message": "Conflict creating entity."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="rollback-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Rollback request accepted.|[rollbackProjectResponse](#schemarollbackprojectresponse)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|409|Conflict|A conflict has occurred while attempting to create the resource.<br>|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="rollback-a-project-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-trigger">Trigger</h1>

Endpoints related to creating and managing triggers.

## List pipeline definition triggers

<a id="opIdlistPipelineDefinitionTriggers"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/pipeline-definitions/6cb29b00-8e02-4357-8bc0-313983bf1f46/triggers \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /projects/{project_id}/pipeline-definitions/{pipeline_definition_id}/triggers`

List all triggers for a given pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

<h3 id="list-pipeline-definition-triggers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|pipeline_definition_id|path|string|true|An opaque identifier of a pipeline definition.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "event_name": "some event name",
      "event_source": {
        "provider": "github_app",
        "repo": {
          "full_name": "some-org/some-repo-name",
          "external_id": "some-repo-id"
        },
        "webhook": {
          "url": "https://some-webhook.invalid/some-endpoint?secret=some-secret",
          "sender": "datadog"
        },
        "schedule": {
          "cron_expression": "*/5 * * * *",
          "attribution_actor": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          }
        }
      },
      "event_preset": "all-pushes",
      "checkout_ref": "some-checkout-ref",
      "config_ref": "some-config-ref",
      "disabled": false,
      "parameters": {
        "deploy_env": "staging"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-pipeline-definition-triggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[triggerList](#schematriggerlist)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-pipeline-definition-triggers-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create trigger

<a id="opIdcreateTrigger"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/pipeline-definitions/6cb29b00-8e02-4357-8bc0-313983bf1f46/triggers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "event_source": {
      "provider": "github_app",
      "repo": {
        "external_id": "123456789"
      }
    },
    "event_preset": "all-pushes"
  }'
```

`POST /projects/{project_id}/pipeline-definitions/{pipeline_definition_id}/triggers`

Create a trigger for a given pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_oauth`, `github_app`, `github_server`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

> Body parameter

```json
{
  "event_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "123456789"
    }
  },
  "event_preset": "all-pushes"
}
```

<h3 id="create-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|pipeline_definition_id|path|string|true|An opaque identifier of a pipeline definition.|
|body|body|[createTriggerRequest](#schemacreatetriggerrequest)|false|none|
|» event_source|body|object|true|The source of events to use for this trigger. The `repo` object must be specified when `provider` is `github_app`, `github_server`, or `github_oauth`, the `webhook` object may only be specified when `provider` is `webhook`, and the `schedule` object must be specified when `provider` is `schedule`.|
|» » provider|body|string|true|The integration provider for this resource. Currently `github_app`, `github_server`, `github_oauth`, `webhook`, and `schedule` are the only supported values.|
|» » repo|body|object|false|Information pertaining to the repository used as a source of events for this trigger, if applicable.|
|» » » external_id|body|string|true|External identifier for the repository, as defined by the respective version control provider.|
|» » webhook|body|object|false|Information pertaining to the custom webhook being used as a source of events for this trigger, if applicable.|
|» » » sender|body|string|false|The sender of the webhook.|
|» » schedule|body|object|false|Schedule configuration for this trigger. Only applicable when `provider` is `schedule`.|
|» » » cron_expression|body|string|false|A cron expression defining when the trigger fires (e.g. `*/5 * * * *` for every 5 minutes).|
|» » » attribution_actor|body|string|false|The actor to attribute pipeline runs to. Use `current` to attribute runs to the user who created the trigger, or `system` to attribute runs to the CircleCI system actor.|
|» event_preset|body|object|false|The event preset to use for this trigger.<br><br>- **`github_app` / `github_server`**: Optional. All preset values are supported.<br>- **`github_oauth`**: **Required.** Only `all-pushes` and `only-build-prs` are accepted.<br>- **`webhook` / `schedule`**: Not applicable. Must be omitted.|
|» checkout_ref|body|string|false|The ref to use when checking out code for pipeline runs created from this trigger. Always required when `event_source.provider` is `webhook` or `schedule`. When `event_source.provider` is `github_app` or `github_server`, only expected if the event source repository (identified by `event_source.repo.external_id`) is different to the checkout source repository of the associated Pipeline Definition. Otherwise, must be omitted.|
|» config_ref|body|string|false|The ref to use when fetching config for pipeline runs created from this trigger. Always required when `event_source.provider` is `webhook` or `schedule`. When `event_source.provider` is `github_app` or `github_server`, only expected if the event source repository (identified by `event_source.repo.external_id`) is different to the config source repository of the associated Pipeline Definition. Otherwise, must be omitted.|
|» event_name|body|string|false|The name of the triggering event. Required when `provider` is `webhook` or `schedule`. Should not be set for other providers.|
|» disabled|body|boolean|false|Whether the trigger should be disabled upon creation. Not supported for triggers where `event_source.provider` is `github_oauth`.|
|» parameters|body|object|false|Pipeline parameters to pass when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » attribution_actor|current|
|» » » attribution_actor|system|

> Example responses

> 200 Response

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "event_name": "",
  "event_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "my-org/my-repo",
      "external_id": "123456789"
    }
  },
  "event_preset": "all-pushes",
  "checkout_ref": "",
  "config_ref": "",
  "disabled": false
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="create-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[trigger](#schematrigger)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="create-trigger-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get trigger

<a id="opIdgetTrigger"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/triggers/bbea3a3d-4686-48b6-8d2d-2a14ace3913c \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /projects/{project_id}/triggers/{trigger_id}`

Get details for a trigger. Currently only supported for triggers where `event_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, `webhook`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

<h3 id="get-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|trigger_id|path|string|true|An opaque identifier of a trigger.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "event_name": "some event name",
  "event_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    },
    "webhook": {
      "url": "https://some-webhook.invalid/some-endpoint?secret=some-secret",
      "sender": "datadog"
    },
    "schedule": {
      "cron_expression": "*/5 * * * *",
      "attribution_actor": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    }
  },
  "event_preset": "all-pushes",
  "checkout_ref": "some-checkout-ref",
  "config_ref": "some-config-ref",
  "disabled": false,
  "parameters": {
    "deploy_env": "staging"
  }
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[trigger](#schematrigger)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-trigger-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete trigger

<a id="opIddeleteTrigger"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/triggers/bbea3a3d-4686-48b6-8d2d-2a14ace3913c \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /projects/{project_id}/triggers/{trigger_id}`

Delete a trigger. Currently only supported for triggers where `event_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, `webhook`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

<h3 id="delete-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|trigger_id|path|string|true|An opaque identifier of a trigger.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="delete-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[triggerDeleted](#schematriggerdeleted)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="delete-trigger-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Update trigger

<a id="opIdupdateTrigger"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/projects/39723015-b399-4601-9ff6-bd1bfbed8fa8/triggers/bbea3a3d-4686-48b6-8d2d-2a14ace3913c \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "event_preset": "all-pushes",
    "checkout_ref": "some-checkout-ref",
    "config_ref": "some-config-ref",
    "event_name": "some event name",
    "disabled": false,
    "event_source": {
      "webhook": {
        "sender": "some sender"
      },
      "schedule": {
        "cron_expression": "*/5 * * * *",
        "attribution_actor": "current"
      }
    },
    "parameters": {
      "deploy_env": "staging"
    }
  }'
```

`PATCH /projects/{project_id}/triggers/{trigger_id}`

Update a trigger. Currently only supported for triggers where `event_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, `webhook`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.

> Body parameter

```json
{
  "event_preset": "all-pushes",
  "checkout_ref": "some-checkout-ref",
  "config_ref": "some-config-ref",
  "event_name": "some event name",
  "disabled": false,
  "event_source": {
    "webhook": {
      "sender": "some sender"
    },
    "schedule": {
      "cron_expression": "*/5 * * * *",
      "attribution_actor": "current"
    }
  },
  "parameters": {
    "deploy_env": "staging"
  }
}
```

<h3 id="update-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|An opaque identifier of a project.|
|trigger_id|path|string|true|An opaque identifier of a trigger.|
|body|body|[updateTriggerRequest](#schemaupdatetriggerrequest)|false|none|
|» event_preset|body|[trigger_event_preset](#schematrigger_event_preset)|false|The name of the event preset to use when filtering events for this trigger.<br><br>When `event_source.provider` is `github_app` or `github_server`, all preset values are supported.<br><br>When `event_source.provider` is `github_oauth`, this field is **required** and only the following values are accepted: `all-pushes`, `only-build-prs`.<br><br>Not applicable when `event_source.provider` is `webhook` or `schedule`.|
|» checkout_ref|body|string|false|The ref to use when checking out code for pipeline runs created from this trigger.|
|» config_ref|body|string|false|The ref to use when fetching config for pipeline runs created from this trigger.|
|» event_name|body|string|false|The name of the triggering event. Required when `provider` is `webhook` or `schedule`. Should not be set for other providers.|
|» disabled|body|boolean|false|A flag indicating whether the trigger is disabled or not. Not supported for triggers where `event_source.provider` is `github_oauth`.|
|» event_source|body|object|false|none|
|» » webhook|body|object|false|none|
|» » » sender|body|string|false|The sender of the webhook. This can only be set for triggers where `provider` is `webhook`.|
|» » schedule|body|object|false|Schedule configuration to update for this trigger. Only applicable when `provider` is `schedule`.|
|» » » cron_expression|body|string|false|A cron expression defining when the trigger fires (e.g. `*/5 * * * *` for every 5 minutes).|
|» » » attribution_actor|body|string|false|The actor to attribute pipeline runs to. Use `current` to attribute runs to the user who sends this update request, or `system` to attribute runs to the CircleCI system actor.|
|» parameters|body|object|false|Pipeline parameters to pass when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event_preset|all-pushes|
|» event_preset|only-tags|
|» event_preset|default-branch-pushes|
|» event_preset|only-build-prs|
|» event_preset|only-open-prs|
|» event_preset|only-labeled-prs|
|» event_preset|only-merged-prs|
|» event_preset|only-ready-for-review-prs|
|» event_preset|only-build-pushes-to-non-draft-prs|
|» event_preset|only-merged-or-closed-prs|
|» event_preset|pr-comment-equals-run-ci|
|» event_preset|non-draft-pr-opened|
|» event_preset|pushes-to-merge-queues|
|» » » attribution_actor|current|
|» » » attribution_actor|system|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "event_name": "some event name",
  "event_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    },
    "webhook": {
      "url": "https://some-webhook.invalid/some-endpoint?secret=some-secret",
      "sender": "datadog"
    },
    "schedule": {
      "cron_expression": "*/5 * * * *",
      "attribution_actor": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    }
  },
  "event_preset": "all-pushes",
  "checkout_ref": "some-checkout-ref",
  "config_ref": "some-config-ref",
  "disabled": false,
  "parameters": {
    "deploy_env": "staging"
  }
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="update-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[trigger](#schematrigger)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="update-trigger-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-usage">Usage</h1>

Endpoints related to organization usage exports.

The Usage API is an API provided by CircleCI to customers to access all of their usage data on CircleCI. It contains all the metadata (org, project, pipeline, workflow, and job dimensions) as well as credit consumption data. It is provided at the near lowest level of granularity (at the job run level).

__Restrictions__

* Max result set size of 100MB
* Query timeout of 4 hours.
* Max date window of 32 days
* 13 months of historical data is available
* No PII is surfaced in the Usage API (e.g. email address, Github login name)
* The POST endpoint can only be queried up to (i.e. is rate limited to) 10 times per day per org
* The GET endpoint can only be queried up to (i.e. is rate limited to) 10 times per minute per org
* To increase performance the API can generate multiple CSV files that need to be merged after download

__Requirements__

* organization ID - To get your organization ID go to to Organization Settings tab in the CircleCI app. ie https://app.circleci.com/settings/organization/<vcs>/<org name>/overview
* API Personal Access Token - https://circleci.com/docs/managing-api-tokens/

__Report Fields__

|                                       | Field                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------------------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                       | organization_id               | The org ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | organization_name             | The org name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                       | organization_created_date     | The date (UTC) that the org was created                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Project-level attributes              | project_id                    | The project ID / token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                       | project_name                  | The project name. For classic orgs, the project name is inherited from Github. For standalone, the org is set by the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                       | project_created_date          | The date (UTC) that the project was created. For classic orgs, this is the date that the repo was authorized on CircleCI. For standalone orgs, this is the date that the project was created on CircleCI                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | last_build_finished_at        | The date (UTC) of the last pipeline run on this project                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Pipeline-level attributes             | vcs_name                      | The name of the VCS connected to the project on which the pipeline was run                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                       | vcs_url                       | The URL of the VCS on which the pipeline was run                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                       | vcs_branch                    | The branch on which the pipeline was run                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                       | pipeline_id                   | The ID of the pipeline instance that was triggered. If a pipeline is re-run, it will share the same pipeline ID as the original pipeline instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                       | pipeline_created_at           | The date (UTC) the pipeline instance was first triggered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | pipeline_number               | The pipeline number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                       | is_unregistered_user          | Y/N flag of whether the pipeline was triggered by a CircleCI user or a user not registered on CircleCI. Examples of the latter include users who commit on a connected VCS and consume credits on CircleCI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                       | pipeline_trigger_source       | The source of the pipeline instance trigger (API, webhook, etc.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                       | pipeline_trigger_user_id      | The user ID / token of the user who triggered the pipeline                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Workflow-level attributes             | workflow_id                   | The ID of the workflow instance that was triggered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | workflow_name                 | The name of the workflow                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                       | workflow_first_job_queued_at  | The timestamp (UTC) of when the workflow instance started to queue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                       | workflow_first_job_started_at | The timestamp (UTC) of when the workflow instance started to run                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                       | workflow_stopped_at           | The timestamp (UTC) of when the workflow instance stopped                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                       | is_workflow_successful        | Y/N flag of whether all jobs in the workflow were successfully ran                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Job-level attributes                  | job_name                      | The name of the job (the name the customer sees in the UI)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                       | job_id                        | The ID of the job run instance that was triggered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                       | job_run_number                | The number of the job run instance that was triggered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                       | job_run_date                  | The date (UTC) of the job run instance began                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                       | job_run_queued_at             | The timestamp (UTC) of when the job started to queue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                       | job_run_started_at            | The timestamp (UTC) of when the job started to run                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                       | job_run_stopped_at            | The timestamp (UTC) of when the job stopped                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | job_build_status              | The status of the job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | resource_class                | The resource class of the job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                       | operating_system              | The operating system of the job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                       | executor                      | The executor of the job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                       | parallelism                   | The parallelism of the job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                       | job_run_seconds               | The duration in seconds of the job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                       | median_cpu_utilization_pct    | The median CPU utilization calculated over the course of the entire job run instance. CPU utilization is logged every 15 seconds. It will not be available for any jobs under 15 seconds and occasionally will not be available for jobs greater than 15 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                       | max_cpu_utilization_pct       | The max CPU utilization logged over the course of the entire job run instance. CPU utilization is logged every 15 seconds. It will not be available for any jobs under 15 seconds and occasionally will not be available for jobs greater than 15 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                       | median_ram_utilization_pct    | The median RAM utilization calculated over the course of the entire job run instance. RAM utilization is logged every 15 seconds. It will not be available for any jobs under 15 seconds and occasionally will not be available for jobs greater than 15 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                       | max_ram_utilization_pct       | The max RAM utilization logged over the course of the entire job run instance. RAM utilization is logged every 15 seconds. It will not be available for any jobs under 15 seconds and occasionally will not be available for jobs greater than 15 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Credit consumption metrics            | compute_credits               | The compute credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                       | dlc_credits                   | The docker-layer caching credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | user_credits                  | The user credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                       | storage_credits               | The storage credits consumed by this job run instance. Note: When an organization is below its allocated storage threshold, a job that uses storage will have 0 storage credits applied. The organization's included storage threshold can be found on the [CircleCI web app](https://app.circleci.com/home) by navigating to **Plan > Plan Usage**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                       | network_credits               | The network credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                       | lease_credits                 | The lease credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                       | lease_overage_credits         | The lease overage credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                       | ipranges_credits              | The IP ranges credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                       | total_credits                 | The total credits consumed by this job run instance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |


## Create a usage export

<a id="opIdcreateUsageExport"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organizations/b9291e0d-a11e-41fb-8517-c545388b5953/usage_export_job \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "shared_org_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /organizations/{org_id}/usage_export_job`

Submits a request to create a usage export for an organization.

> Body parameter

```json
{
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "shared_org_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="create-a-usage-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|An opaque identifier of an organization.|
|body|body|object|true|none|
|» start|body|string(date-time)|true|The start date & time (inclusive) of the range from which data will be pulled. Must be no more than one year ago.|
|» end|body|string(date-time)|true|The end date & time (inclusive) of the range from which data will be pulled. Must be no more than 31 days after `start`.|
|» shared_org_ids|body|[string(uuid)]|false|none|

> Example responses

> 201 Response

```json
{
  "usage_export_job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "download_urls": [
    "http://example.com"
  ]
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="create-a-usage-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Usage export created successfully|[usage_export_job](#schemausage_export_job)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="create-a-usage-export-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a usage export

<a id="opIdgetUsageExport"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organizations/b9291e0d-a11e-41fb-8517-c545388b5953/usage_export_job/e8235eed-f121-4ae3-9c72-2719d6572818 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /organizations/{org_id}/usage_export_job/{usage_export_job_id}`

Gets a usage export for an organization.

<h3 id="get-a-usage-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|An opaque identifier of an organization.|
|usage_export_job_id|path|string(uuid)|true|An opaque identifier of a usage export job.|

> Example responses

> 200 Response

```json
{
  "usage_export_job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "download_urls": [
    "http://example.com"
  ],
  "error_reason": "string"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-a-usage-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Usage export fetched successfully|[get_usage_export_job_status](#schemaget_usage_export_job_status)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|429|Too Many Requests|API rate limits exceeded.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-a-usage-export-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-webhook">Webhook</h1>

Endpoints related to creating and managing outbound webhooks.

## List webhooks

<a id="opIdgetWebhooks"></a>

> Code samples

```bash
curl 'https://circleci.com/api/v2/webhook?scope-id=39723015-b399-4601-9ff6-bd1bfbed8fa8&scope-type=project' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /webhook`

Get a list of outbound webhooks that match the given scope-type and scope-id.

<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope-id|query|string(uuid)|true|ID of the scope being used (at the moment, only project ID is supported).|
|scope-type|query|string|true|Type of the scope being used (at the moment, only project is supported).|
|is-enabled|query|boolean|false|Return only enabled (`true`) or only disabled (`false`) webhooks. Omit it to return every webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope-type|project|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90",
      "name": "my-webhook",
      "url": "https://example.com/hooks/circleci",
      "verify_tls": true,
      "signing_secret": "********",
      "events": [
        "workflow-completed",
        "job-completed"
      ],
      "scope": {
        "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
        "type": "project"
      },
      "is_enabled": true,
      "auto_disabled_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of webhooks.|[webhookList](#schemawebhooklist)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="list-webhooks-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create an outbound webhook

<a id="opIdcreateWebhook"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/webhook \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "my-webhook",
    "events": [
      "workflow-completed",
      "job-completed"
    ],
    "url": "https://example.com/hooks/circleci",
    "verify-tls": true,
    "signing-secret": "super-secret-value",
    "is-enabled": true,
    "scope": {
      "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
      "type": "project"
    }
  }'
```

`POST /webhook`

Creates an outbound webhook for the given scope.

> Body parameter

```json
{
  "name": "my-webhook",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "url": "https://example.com/hooks/circleci",
  "verify-tls": true,
  "signing-secret": "super-secret-value",
  "is-enabled": true,
  "scope": {
    "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
    "type": "project"
  }
}
```

<h3 id="create-an-outbound-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createWebhookRequest](#schemacreatewebhookrequest)|true|none|
|» name|body|string|true|Name of the webhook.|
|» events|body|[string]|true|Events that will trigger the webhook.|
|» url|body|string|true|URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).|
|» verify-tls|body|boolean|true|Whether to enforce TLS certificate verification when delivering the webhook.|
|» signing-secret|body|string|true|Secret used to build an HMAC hash of the payload and passed as a header in the webhook request.|
|» is-enabled|body|boolean|false|Whether the webhook is enabled. Defaults to true.|
|» scope|body|[createWebhookScope](#schemacreatewebhookscope)|true|The scope in which the relevant events that will trigger webhooks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|workflow-completed|
|» events|job-completed|

> Example responses

> 201 Response

```json
{
  "id": "8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90",
  "name": "my-webhook",
  "url": "https://example.com/hooks/circleci",
  "verify_tls": true,
  "signing_secret": "********",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "scope": {
    "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
    "type": "project"
  },
  "is_enabled": true,
  "auto_disabled_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="create-an-outbound-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A webhook.|[webhook](#schemawebhook)|
|400|Bad Request|Unexpected request body provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="create-an-outbound-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a webhook

<a id="opIdgetWebhookById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/webhook/8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /webhook/{webhook_id}`

Get an outbound webhook by id.

<h3 id="get-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|An opaque identifier of a webhook.|

> Example responses

> 200 Response

```json
{
  "id": "8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90",
  "name": "my-webhook",
  "url": "https://example.com/hooks/circleci",
  "verify_tls": true,
  "signing_secret": "********",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "scope": {
    "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
    "type": "project"
  },
  "is_enabled": true,
  "auto_disabled_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="get-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A webhook.|[webhook](#schemawebhook)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="get-a-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Update an outbound webhook

<a id="opIdupdateWebhook"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/webhook/8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "my-webhook",
    "events": [
      "workflow-completed",
      "job-completed"
    ],
    "url": "https://example.com/hooks/circleci",
    "signing-secret": "super-secret-value",
    "verify-tls": true,
    "is-enabled": false
  }'
```

`PUT /webhook/{webhook_id}`

Updates an existing outbound webhook by its unique ID.

> Body parameter

```json
{
  "name": "my-webhook",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "url": "https://example.com/hooks/circleci",
  "signing-secret": "super-secret-value",
  "verify-tls": true,
  "is-enabled": false
}
```

<h3 id="update-an-outbound-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|An opaque identifier of a webhook.|
|body|body|[updateWebhookRequest](#schemaupdatewebhookrequest)|true|none|
|» name|body|string|false|Name of the webhook.|
|» events|body|[string]|false|Events that will trigger the webhook.|
|» url|body|string|false|URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).|
|» signing-secret|body|string|false|Secret used to build an HMAC hash of the payload and passed as a header in the webhook request.|
|» verify-tls|body|boolean|false|Whether to enforce TLS certificate verification when delivering the webhook.|
|» is-enabled|body|boolean|false|Whether the webhook is enabled. Omit it to keep the current value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|workflow-completed|
|» events|job-completed|

> Example responses

> 200 Response

```json
{
  "id": "8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90",
  "name": "my-webhook",
  "url": "https://example.com/hooks/circleci",
  "verify_tls": true,
  "signing_secret": "********",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "scope": {
    "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
    "type": "project"
  },
  "is_enabled": true,
  "auto_disabled_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="update-an-outbound-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A webhook.|[webhook](#schemawebhook)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="update-an-outbound-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete an outbound webhook

<a id="opIddeleteWebhook"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/webhook/8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /webhook/{webhook_id}`

Deletes an existing outbound webhook by its unique ID.

<h3 id="delete-an-outbound-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|An opaque identifier of a webhook.|

> Example responses

> 200 Response

```json
{
  "message": "Webhook deleted."
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="delete-an-outbound-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message.|[webhookDeleted](#schemawebhookdeleted)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="delete-an-outbound-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-organization">Organization</h1>

## Create a new organization

<a id="opIdcreateOrganization"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "string",
    "vcs_type": "github"
  }'
```

`POST /organization`

Create a new organization. For VCS providers (GitHub/Bitbucket), this validates access and syncs org data. For standalone orgs, this creates a new CircleCI organization.

> Body parameter

```json
{
  "name": "string",
  "vcs_type": "github"
}
```

<h3 id="create-a-new-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|The name of the organization.|
|» vcs_type|body|string|true|The version control system type for the organization.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» vcs_type|github|
|» vcs_type|bitbucket|
|» vcs_type|circleci|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "vcs_type": "github",
  "avatar_url": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-new-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The newly created organization|Inline|
|default|Default|Error response.|Inline|

<h3 id="create-a-new-organization-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique ID of the organization.|
|name|string|true|none|The name of the organization.|
|slug|string|true|none|Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|
|vcs_type|string|true|none|The version control system type for the organization.|
|avatar_url|string|false|none|The URL for the avatar for the organization.|

#### Enumerated Values

|Property|Value|
|---|---|
|vcs_type|github|
|vcs_type|bitbucket|
|vcs_type|circleci|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get an organization

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organization/gh%2FCircleCI-Public \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /organization/{org-slug-or-id}`

Retrieve an organization by slug or ID

<h3 id="get-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug-or-id|path|string|true|Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "vcs_type": "github",
  "avatar_url": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An organization object|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique ID of the organization.|
|name|string|true|none|The name of the organization.|
|slug|string|true|none|Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|
|vcs_type|string|true|none|The version control system type for the organization.|
|avatar_url|string|false|none|The URL for the avatar for the organization.|

#### Enumerated Values

|Property|Value|
|---|---|
|vcs_type|github|
|vcs_type|bitbucket|
|vcs_type|circleci|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete an organization

<a id="opIddeleteOrganization"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organization/gh%2FCircleCI-Public \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /organization/{org-slug-or-id}`

Delete an organization. This action will delete all projects including all build data for the organization.

<h3 id="delete-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug-or-id|path|string|true|Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|

> Example responses

> 202 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="delete-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="delete-an-organization-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## List the entries in the org's URL Orb allow-list

<a id="opIdlistURLOrbAllowListEntries"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organization/gh%2FCircleCI-Public/url-orb-allow-list \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /organization/{org-slug-or-id}/url-orb-allow-list`

List the entries in the org's URL Orb allow-list

<h3 id="list-the-entries-in-the-orgs-url-orb-allow-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug-or-id|path|string|true|Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "ba98990a-5a00-4cad-b55e-b44117b92e0c",
      "name": "Allow URL orbs from raw.githubusercontent.com/CircleCI-Public",
      "prefix": "https://raw.githubusercontent.com/CircleCI-Public/orbs/refs/heads/main/",
      "auth": "github-app"
    }
  ]
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="list-the-entries-in-the-orgs-url-orb-allow-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|URL Orb allow-list entries|Inline|
|default|Default|Error response.|Inline|

<h3 id="list-the-entries-in-the-orgs-url-orb-allow-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» id|string|true|none|URL orb allow-list entry UUID.|
|» name|string|true|none|Name of the URL orb allow-list entry.|
|» prefix|object|true|none|URL prefix. URL orb references that start with this prefix will be allowed by this allow-list entry.|
|» auth|string|true|none|An authentication method to use for fetching URL orb references that match this allow-list entry's prefix. Allowed values are "bitbucket-oauth", "github-oauth", "github-app", or "none".|

#### Enumerated Values

|Property|Value|
|---|---|
|» auth|github-oauth|
|» auth|none|
|» auth|bitbucket-oauth|
|» auth|github-app|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create a new URL Orb allow-list entry

<a id="opIdcreateURLOrbAllowListEntry"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organization/gh%2FCircleCI-Public/url-orb-allow-list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "Allow URL orbs from raw.githubusercontent.com/CircleCI-Public",
    "prefix": "https://raw.githubusercontent.com/CircleCI-Public/orbs/refs/heads/main/",
    "auth": "github-app"
  }'
```

`POST /organization/{org-slug-or-id}/url-orb-allow-list`

Create a new URL Orb allow-list entry

> Body parameter

```json
{
  "name": "Allow URL orbs from raw.githubusercontent.com/CircleCI-Public",
  "prefix": "https://raw.githubusercontent.com/CircleCI-Public/orbs/refs/heads/main/",
  "auth": "github-app"
}
```

<h3 id="create-a-new-url-orb-allow-list-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug-or-id|path|string|true|Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|
|body|body|object|false|none|
|» name|body|string|true|Name of the URL orb allow-list entry.|
|» prefix|body|object|true|URL prefix. URL orb references that start with this prefix will be allowed by this allow-list entry.|
|» auth|body|string|true|An authentication method to use for fetching URL orb references that match this allow-list entry's prefix. Allowed values are "bitbucket-oauth", "github-oauth", "github-app", or "none".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» auth|github-oauth|
|» auth|none|
|» auth|bitbucket-oauth|
|» auth|github-app|

> Example responses

> 200 Response

```json
{
  "id": "ba98990a-5a00-4cad-b55e-b44117b92e0c",
  "message": "Created."
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-new-url-orb-allow-list-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ID of the new URL Orb allow-list entry|Inline|
|default|Default|Error response.|Inline|

<h3 id="create-a-new-url-orb-allow-list-entry-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|URL orb allow-list entry UUID.|
|message|string|true|none|Message describing the outcome of an operation|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Remove an entry from the org's URL orb allow-list

<a id="opIdremoveURLOrbAllowListEntry"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organization/gh%2FCircleCI-Public/url-orb-allow-list/ba98990a-5a00-4cad-b55e-b44117b92e0c \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /organization/{org-slug-or-id}/url-orb-allow-list/{allow-list-entry-id}`

Remove an entry from the org's URL orb allow-list

<h3 id="remove-an-entry-from-the-orgs-url-orb-allow-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org-slug-or-id|path|string|true|Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).|
|allow-list-entry-id|path|string|true|URL orb allow-list entry UUID.|

> Example responses

> 200 Response

```json
{
  "id": "ba98990a-5a00-4cad-b55e-b44117b92e0c",
  "message": "Created."
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="remove-an-entry-from-the-orgs-url-orb-allow-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ID of the removed URL Orb allow-list entry|Inline|
|default|Default|Error response.|Inline|

<h3 id="remove-an-entry-from-the-orgs-url-orb-allow-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|URL orb allow-list entry UUID.|
|message|string|true|none|Message describing the outcome of an operation|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-schedule">Schedule</h1>

## List schedule triggers

<a id="opIdlistSchedulesForProject"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/schedule \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /project/{project-slug}/schedule`

For a given project, returns all schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions. Does not return schedule triggers associated with GitHub App pipelines. To fetch schedule triggers associated with GitHub App pipelines, use the [List pipeline definition triggers](https://circleci.com/docs/api/v2/index.html#tag/Trigger/operation/listPipelineDefinitionTriggers] endpoint.

<h3 id="list-schedule-triggers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|page-token|query|string|false|A token to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "timetable": {
        "per-hour": 0,
        "hours-of-day": [
          0
        ],
        "days-of-week": [
          "TUE"
        ],
        "days-of-month": [
          0
        ],
        "months": [
          "MAR"
        ]
      },
      "updated-at": "1970-01-01T00:00:00Z",
      "name": "string",
      "created-at": "1970-01-01T00:00:00Z",
      "project-slug": "gh/CircleCI-Public/api-preview-docs",
      "parameters": {
        "deploy_prod": true,
        "branch": "feature/design-new-api"
      },
      "actor": {
        "avatar_url": "string",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "login": "string",
        "name": "string"
      },
      "description": "string"
    }
  ],
  "next_page_token": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="list-schedule-triggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A sequence of schedules.|Inline|
|default|Default|Error response.|Inline|

<h3 id="list-schedule-triggers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» id|string(uuid)|true|none|The unique ID of the schedule.|
|» timetable|object|true|none|Timetable that specifies when a schedule triggers.|
|» » *anyOf*|object|false|none|none|
|» » per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» » hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» » days-of-week|[string]|true|none|Days in a week in which the schedule triggers.|
|» » days-of-month|[integer(integer)]|false|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» » months|[string]|false|none|Months in which the schedule triggers.|
|» » *anyOf*|object|false|none|none|
|» » per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» » hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» » days-of-month|[integer(integer)]|true|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» » days-of-week|[string]|false|none|Days in a week in which the schedule triggers.|
|» » months|[string]|false|none|Months in which the schedule triggers.|
|» updated-at|string(date-time)|true|none|The date and time the pipeline was last updated.|
|» name|string|true|none|Name of the schedule.|
|» created-at|string(date-time)|true|none|The date and time the pipeline was created.|
|» project-slug|string|true|none|The project-slug for the schedule|
|» parameters|object|true|none|Pipeline parameters represented as key-value pairs. Must contain branch or tag.|
|» » **additionalProperties**|integer \| string \| boolean|false|none|none|
|» » » *anyOf*|integer|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|boolean|false|none|none|
|» actor|object|true|none|The attribution actor who will run the scheduled pipeline.|
|» » avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» » id|string(uuid)|true|none|The unique ID of the user.|
|» » login|string|true|none|The login information for the user on the VCS.|
|» » name|string|true|none|The name of the user.|
|» description|string|true|none|Description of the schedule.|
|next_page_token|string|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » days-of-week|TUE|
|» » days-of-week|SAT|
|» » days-of-week|SUN|
|» » days-of-week|MON|
|» » days-of-week|THU|
|» » days-of-week|WED|
|» » days-of-week|FRI|
|» » months|MAR|
|» » months|NOV|
|» » months|DEC|
|» » months|JUN|
|» » months|MAY|
|» » months|OCT|
|» » months|FEB|
|» » months|APR|
|» » months|SEP|
|» » months|AUG|
|» » months|JAN|
|» » months|JUL|
|» » days-of-week|TUE|
|» » days-of-week|SAT|
|» » days-of-week|SUN|
|» » days-of-week|MON|
|» » days-of-week|THU|
|» » days-of-week|WED|
|» » days-of-week|FRI|
|» » months|MAR|
|» » months|NOV|
|» » months|DEC|
|» » months|JUN|
|» » months|MAY|
|» » months|OCT|
|» » months|FEB|
|» » months|APR|
|» » months|SEP|
|» » months|AUG|
|» » months|JAN|
|» » months|JUL|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create a schedule

<a id="opIdcreateSchedule"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/project/gh%2FCircleCI-Public%2Fapi-preview-docs/schedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "string",
    "timetable": {
      "per-hour": 0,
      "hours-of-day": [
        0
      ],
      "days-of-week": [
        "TUE"
      ],
      "days-of-month": [
        0
      ],
      "months": [
        "MAR"
      ]
    },
    "attribution-actor": "current",
    "parameters": {
      "deploy_prod": true,
      "branch": "feature/design-new-api"
    },
    "description": "string"
  }'
```

`POST /project/{project-slug}/schedule`

Creates a schedule and returns the created schedule. Available only on organizations of type `bitbucket` and `github`, and for the latter will exclusively create schedule triggers associated with the GitHub OAuth pipeline definition. For projects of type `circleci`, or to create schedule triggers for GitHub App pipeline definitions, use the [Create trigger](https://circleci.com/docs/api/v2/index.html#tag/Trigger/operation/createTrigger) endpoint.

> Body parameter

```json
{
  "name": "string",
  "timetable": {
    "per-hour": 0,
    "hours-of-day": [
      0
    ],
    "days-of-week": [
      "TUE"
    ],
    "days-of-month": [
      0
    ],
    "months": [
      "MAR"
    ]
  },
  "attribution-actor": "current",
  "parameters": {
    "deploy_prod": true,
    "branch": "feature/design-new-api"
  },
  "description": "string"
}
```

<h3 id="create-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project-slug|path|string|true|Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).|
|body|body|object|false|none|
|» name|body|string|true|Name of the schedule.|
|» timetable|body|object|true|Timetable that specifies when a schedule triggers.|
|» » *anyOf*|body|object|false|none|
|» » per-hour|body|integer(integer)|true|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» » hours-of-day|body|[integer(integer)]|true|Hours in a day in which the schedule triggers.|
|» » days-of-week|body|[string]|true|Days in a week in which the schedule triggers.|
|» » days-of-month|body|[integer(integer)]|false|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» » months|body|[string]|false|Months in which the schedule triggers.|
|» » *anyOf*|body|object|false|none|
|» » per-hour|body|integer(integer)|true|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» » hours-of-day|body|[integer(integer)]|true|Hours in a day in which the schedule triggers.|
|» » days-of-month|body|[integer(integer)]|true|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» » days-of-week|body|[string]|false|Days in a week in which the schedule triggers.|
|» » months|body|[string]|false|Months in which the schedule triggers.|
|» attribution-actor|body|string|true|The attribution-actor of the scheduled pipeline.|
|» parameters|body|object|true|Pipeline parameters represented as key-value pairs. Must contain branch or tag.|
|» » **additionalProperties**|body|integer \| string \| boolean|false|none|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|boolean|false|none|
|» description|body|string|false|Description of the schedule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » days-of-week|TUE|
|» » days-of-week|SAT|
|» » days-of-week|SUN|
|» » days-of-week|MON|
|» » days-of-week|THU|
|» » days-of-week|WED|
|» » days-of-week|FRI|
|» » months|MAR|
|» » months|NOV|
|» » months|DEC|
|» » months|JUN|
|» » months|MAY|
|» » months|OCT|
|» » months|FEB|
|» » months|APR|
|» » months|SEP|
|» » months|AUG|
|» » months|JAN|
|» » months|JUL|
|» » days-of-week|TUE|
|» » days-of-week|SAT|
|» » days-of-week|SUN|
|» » days-of-week|MON|
|» » days-of-week|THU|
|» » days-of-week|WED|
|» » days-of-week|FRI|
|» » months|MAR|
|» » months|NOV|
|» » months|DEC|
|» » months|JUN|
|» » months|MAY|
|» » months|OCT|
|» » months|FEB|
|» » months|APR|
|» » months|SEP|
|» » months|AUG|
|» » months|JAN|
|» » months|JUL|
|» attribution-actor|current|
|» attribution-actor|system|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timetable": {
    "per-hour": 0,
    "hours-of-day": [
      0
    ],
    "days-of-week": [
      "TUE"
    ],
    "days-of-month": [
      0
    ],
    "months": [
      "MAR"
    ]
  },
  "updated-at": "1970-01-01T00:00:00Z",
  "name": "string",
  "created-at": "1970-01-01T00:00:00Z",
  "project-slug": "gh/CircleCI-Public/api-preview-docs",
  "parameters": {
    "deploy_prod": true,
    "branch": "feature/design-new-api"
  },
  "actor": {
    "avatar_url": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "login": "string",
    "name": "string"
  },
  "description": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A schedule object.|Inline|
|default|Default|Error response.|Inline|

<h3 id="create-a-schedule-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the schedule.|
|timetable|object|true|none|Timetable that specifies when a schedule triggers.|
|» *anyOf*|object|false|none|none|
|» per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» days-of-week|[string]|true|none|Days in a week in which the schedule triggers.|
|» days-of-month|[integer(integer)]|false|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» months|[string]|false|none|Months in which the schedule triggers.|
|» *anyOf*|object|false|none|none|
|» per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» days-of-month|[integer(integer)]|true|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» days-of-week|[string]|false|none|Days in a week in which the schedule triggers.|
|» months|[string]|false|none|Months in which the schedule triggers.|
|updated-at|string(date-time)|true|none|The date and time the pipeline was last updated.|
|name|string|true|none|Name of the schedule.|
|created-at|string(date-time)|true|none|The date and time the pipeline was created.|
|project-slug|string|true|none|The project-slug for the schedule|
|parameters|object|true|none|Pipeline parameters represented as key-value pairs. Must contain branch or tag.|
|» **additionalProperties**|integer \| string \| boolean|false|none|none|
|» » *anyOf*|integer|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|boolean|false|none|none|
|actor|object|true|none|The attribution actor who will run the scheduled pipeline.|
|» avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» id|string(uuid)|true|none|The unique ID of the user.|
|» login|string|true|none|The login information for the user on the VCS.|
|» name|string|true|none|The name of the user.|
|description|string|true|none|Description of the schedule.|

#### Enumerated Values

|Property|Value|
|---|---|
|» days-of-week|TUE|
|» days-of-week|SAT|
|» days-of-week|SUN|
|» days-of-week|MON|
|» days-of-week|THU|
|» days-of-week|WED|
|» days-of-week|FRI|
|» months|MAR|
|» months|NOV|
|» months|DEC|
|» months|JUN|
|» months|MAY|
|» months|OCT|
|» months|FEB|
|» months|APR|
|» months|SEP|
|» months|AUG|
|» months|JAN|
|» months|JUL|
|» days-of-week|TUE|
|» days-of-week|SAT|
|» days-of-week|SUN|
|» days-of-week|MON|
|» days-of-week|THU|
|» days-of-week|WED|
|» days-of-week|FRI|
|» months|MAR|
|» months|NOV|
|» months|DEC|
|» months|JUN|
|» months|MAY|
|» months|OCT|
|» months|FEB|
|» months|APR|
|» months|SEP|
|» months|AUG|
|» months|JAN|
|» months|JUL|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Get a schedule by ID. Available only on schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions.

<a id="opIdgetScheduleById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/schedule/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /schedule/{schedule-id}`

Get a schedule by id.

<h3 id="get-a-schedule-by-id-available-only-on-schedules-associated-with-github-oauth-or-bitbucket-cloud-pipeline-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schedule-id|path|string(uuid)|true|The unique ID of the schedule.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timetable": {
    "per-hour": 0,
    "hours-of-day": [
      0
    ],
    "days-of-week": [
      "TUE"
    ],
    "days-of-month": [
      0
    ],
    "months": [
      "MAR"
    ]
  },
  "updated-at": "1970-01-01T00:00:00Z",
  "name": "string",
  "created-at": "1970-01-01T00:00:00Z",
  "project-slug": "gh/CircleCI-Public/api-preview-docs",
  "parameters": {
    "deploy_prod": true,
    "branch": "feature/design-new-api"
  },
  "actor": {
    "avatar_url": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "login": "string",
    "name": "string"
  },
  "description": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="get-a-schedule-by-id-available-only-on-schedules-associated-with-github-oauth-or-bitbucket-cloud-pipeline-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A schedule object.|Inline|
|default|Default|Error response.|Inline|

<h3 id="get-a-schedule-by-id-available-only-on-schedules-associated-with-github-oauth-or-bitbucket-cloud-pipeline-definitions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the schedule.|
|timetable|object|true|none|Timetable that specifies when a schedule triggers.|
|» *anyOf*|object|false|none|none|
|» per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» days-of-week|[string]|true|none|Days in a week in which the schedule triggers.|
|» days-of-month|[integer(integer)]|false|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» months|[string]|false|none|Months in which the schedule triggers.|
|» *anyOf*|object|false|none|none|
|» per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» days-of-month|[integer(integer)]|true|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» days-of-week|[string]|false|none|Days in a week in which the schedule triggers.|
|» months|[string]|false|none|Months in which the schedule triggers.|
|updated-at|string(date-time)|true|none|The date and time the pipeline was last updated.|
|name|string|true|none|Name of the schedule.|
|created-at|string(date-time)|true|none|The date and time the pipeline was created.|
|project-slug|string|true|none|The project-slug for the schedule|
|parameters|object|true|none|Pipeline parameters represented as key-value pairs. Must contain branch or tag.|
|» **additionalProperties**|integer \| string \| boolean|false|none|none|
|» » *anyOf*|integer|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|boolean|false|none|none|
|actor|object|true|none|The attribution actor who will run the scheduled pipeline.|
|» avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» id|string(uuid)|true|none|The unique ID of the user.|
|» login|string|true|none|The login information for the user on the VCS.|
|» name|string|true|none|The name of the user.|
|description|string|true|none|Description of the schedule.|

#### Enumerated Values

|Property|Value|
|---|---|
|» days-of-week|TUE|
|» days-of-week|SAT|
|» days-of-week|SUN|
|» days-of-week|MON|
|» days-of-week|THU|
|» days-of-week|WED|
|» days-of-week|FRI|
|» months|MAR|
|» months|NOV|
|» months|DEC|
|» months|JUN|
|» months|MAY|
|» months|OCT|
|» months|FEB|
|» months|APR|
|» months|SEP|
|» months|AUG|
|» months|JAN|
|» months|JUL|
|» days-of-week|TUE|
|» days-of-week|SAT|
|» days-of-week|SUN|
|» days-of-week|MON|
|» days-of-week|THU|
|» days-of-week|WED|
|» days-of-week|FRI|
|» months|MAR|
|» months|NOV|
|» months|DEC|
|» months|JUN|
|» months|MAY|
|» months|OCT|
|» months|FEB|
|» months|APR|
|» months|SEP|
|» months|AUG|
|» months|JAN|
|» months|JUL|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete a schedule

<a id="opIddeleteScheduleById"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/schedule/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /schedule/{schedule-id}`

Deletes a schedule by ID. Available only on schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions.

<h3 id="delete-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schedule-id|path|string(uuid)|true|The unique ID of the schedule.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A confirmation message.|Inline|
|default|Default|Error response.|Inline|

<h3 id="delete-a-schedule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Update a schedule

<a id="opIdupdateSchedule"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/schedule/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "timetable": {
      "per-hour": 0,
      "hours-of-day": [
        0
      ],
      "days-of-week": [
        "TUE"
      ],
      "days-of-month": [
        0
      ],
      "months": [
        "MAR"
      ]
    },
    "attribution-actor": "current",
    "parameters": {
      "deploy_prod": true,
      "branch": "feature/design-new-api"
    }
  }'
```

`PATCH /schedule/{schedule-id}`

Updates a schedule and returns the updated schedule. Available only on schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions. To update schedule triggers for GitHub App pipeline definitions, use the [Update trigger](https://circleci.com/docs/api/v2/index.html#tag/Trigger/operation/updateTrigger) endpoint.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "timetable": {
    "per-hour": 0,
    "hours-of-day": [
      0
    ],
    "days-of-week": [
      "TUE"
    ],
    "days-of-month": [
      0
    ],
    "months": [
      "MAR"
    ]
  },
  "attribution-actor": "current",
  "parameters": {
    "deploy_prod": true,
    "branch": "feature/design-new-api"
  }
}
```

<h3 id="update-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schedule-id|path|string(uuid)|true|The unique ID of the schedule.|
|body|body|object|false|none|
|» description|body|string|false|Description of the schedule.|
|» name|body|string|false|Name of the schedule.|
|» timetable|body|object|false|Timetable that specifies when a schedule triggers.|
|» » per-hour|body|integer(integer)|false|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» » hours-of-day|body|[integer(integer)]|false|Hours in a day in which the schedule triggers.|
|» » days-of-week|body|[string]|false|Days in a week in which the schedule triggers.|
|» » days-of-month|body|[integer(integer)]|false|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» » months|body|[string]|false|Months in which the schedule triggers.|
|» attribution-actor|body|string|false|The attribution-actor of the scheduled pipeline.|
|» parameters|body|object|false|Pipeline parameters represented as key-value pairs. Must contain branch or tag.|
|» » **additionalProperties**|body|integer \| string \| boolean|false|none|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » days-of-week|TUE|
|» » days-of-week|SAT|
|» » days-of-week|SUN|
|» » days-of-week|MON|
|» » days-of-week|THU|
|» » days-of-week|WED|
|» » days-of-week|FRI|
|» » months|MAR|
|» » months|NOV|
|» » months|DEC|
|» » months|JUN|
|» » months|MAY|
|» » months|OCT|
|» » months|FEB|
|» » months|APR|
|» » months|SEP|
|» » months|AUG|
|» » months|JAN|
|» » months|JUL|
|» attribution-actor|current|
|» attribution-actor|system|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timetable": {
    "per-hour": 0,
    "hours-of-day": [
      0
    ],
    "days-of-week": [
      "TUE"
    ],
    "days-of-month": [
      0
    ],
    "months": [
      "MAR"
    ]
  },
  "updated-at": "1970-01-01T00:00:00Z",
  "name": "string",
  "created-at": "1970-01-01T00:00:00Z",
  "project-slug": "gh/CircleCI-Public/api-preview-docs",
  "parameters": {
    "deploy_prod": true,
    "branch": "feature/design-new-api"
  },
  "actor": {
    "avatar_url": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "login": "string",
    "name": "string"
  },
  "description": "string"
}
```

> default Response

```json
{
  "message": "string"
}
```

<h3 id="update-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A schedule object.|Inline|
|default|Default|Error response.|Inline|

<h3 id="update-a-schedule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the schedule.|
|timetable|object|true|none|Timetable that specifies when a schedule triggers.|
|» *anyOf*|object|false|none|none|
|» per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» days-of-week|[string]|true|none|Days in a week in which the schedule triggers.|
|» days-of-month|[integer(integer)]|false|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» months|[string]|false|none|Months in which the schedule triggers.|
|» *anyOf*|object|false|none|none|
|» per-hour|integer(integer)|true|none|Number of times a schedule triggers per hour, value must be between 1 and 60|
|» hours-of-day|[integer(integer)]|true|none|Hours in a day in which the schedule triggers.|
|» days-of-month|[integer(integer)]|true|none|Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.|
|» days-of-week|[string]|false|none|Days in a week in which the schedule triggers.|
|» months|[string]|false|none|Months in which the schedule triggers.|
|updated-at|string(date-time)|true|none|The date and time the pipeline was last updated.|
|name|string|true|none|Name of the schedule.|
|created-at|string(date-time)|true|none|The date and time the pipeline was created.|
|project-slug|string|true|none|The project-slug for the schedule|
|parameters|object|true|none|Pipeline parameters represented as key-value pairs. Must contain branch or tag.|
|» **additionalProperties**|integer \| string \| boolean|false|none|none|
|» » *anyOf*|integer|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|boolean|false|none|none|
|actor|object|true|none|The attribution actor who will run the scheduled pipeline.|
|» avatar_url|string|true|none|URL to the user's avatar on the VCS|
|» id|string(uuid)|true|none|The unique ID of the user.|
|» login|string|true|none|The login information for the user on the VCS.|
|» name|string|true|none|The name of the user.|
|description|string|true|none|Description of the schedule.|

#### Enumerated Values

|Property|Value|
|---|---|
|» days-of-week|TUE|
|» days-of-week|SAT|
|» days-of-week|SUN|
|» days-of-week|MON|
|» days-of-week|THU|
|» days-of-week|WED|
|» days-of-week|FRI|
|» months|MAR|
|» months|NOV|
|» months|DEC|
|» months|JUN|
|» months|MAY|
|» months|OCT|
|» months|FEB|
|» months|APR|
|» months|SEP|
|» months|AUG|
|» months|JAN|
|» months|JUL|
|» days-of-week|TUE|
|» days-of-week|SAT|
|» days-of-week|SUN|
|» days-of-week|MON|
|» days-of-week|THU|
|» days-of-week|WED|
|» days-of-week|FRI|
|» months|MAR|
|» months|NOV|
|» months|DEC|
|» months|JUN|
|» months|MAY|
|» months|OCT|
|» months|FEB|
|» months|APR|
|» months|SEP|
|» months|AUG|
|» months|JAN|
|» months|JUL|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

<h1 id="circleci-api-groups">Groups</h1>

## Groups in an organization

<a id="opIdgetOrganizationGroups"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organizations/b9291e0d-a11e-41fb-8517-c545388b5953/groups \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /organizations/{org_id}/groups`

Get all the groups in an organization.

<h3 id="groups-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The number of results per page.|
|page-token|query|string|false|A token to specify which page of results to fetch.|
|org_id|path|string|true|An opaque identifier of an organization.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "bdbe5e8d-50a5-4f73-a917-074592949844",
      "name": "Project B Editors",
      "description": "This group has the ability to edit settings on Project B."
    },
    {
      "id": "70dbc16f-a6b9-4c32-b258-4a61a861c24f",
      "name": "Project MLOps Editors",
      "description": "This group has the ability to edit settings on ML Ops Projects."
    }
  ],
  "next_page_token": "CiRkNjVjY2ZiMy04OGFlLTQ3YjUtYWFjNi0wZDRkNDYwNmQ5ZjYQChoDbmls"
}
```

> 403 Response

```json
{
  "message": "Permission denied."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="groups-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully get all the groups in an organization. Results are paginated.|[groups](#schemagroups)|
|403|Forbidden|None or insufficient credentials provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="groups-in-an-organization-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Create Groups

<a id="opIdcreateOrganizationGroup"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organizations/b9291e0d-a11e-41fb-8517-c545388b5953/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}" \
  -d '{
    "name": "Project A Editors",
    "description": "Users in this group have edit access to Project A"
  }'
```

`POST /organizations/{org_id}/groups`

Create a new group under the organization. Currently only supported for standalone organizations.

> Body parameter

```json
{
  "name": "Project A Editors",
  "description": "Users in this group have edit access to Project A"
}
```

<h3 id="create-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|An opaque identifier of an organization.|
|body|body|object|true|none|
|» name|body|string|true|Name of the group|
|» description|body|string|false|Description to describe the group|

> Example responses

> 201 Response

```json
{
  "id": "9e5e5f87-3e87-47ea-be0f-37265b965d6e",
  "name": "Project A Editors",
  "description": "Users in this group have edit access to Project A"
}
```

> 400 Response

```json
{
  "message": "Unexpected request body provided."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 403 Response

```json
{
  "message": "Permission denied."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 409 Response

```json
{
  "message": "Failed to create group, reached max number of groups for this organization."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="create-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful creation of a group.|[group](#schemagroup)|
|400|Bad Request|Unexpected request body provided.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|403|Forbidden|None or insufficient credentials provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|409|Conflict|A conflict has occurred while attempting to create the resource.<br>|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="create-groups-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## A group in an organization

<a id="opIdgetGroup"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organizations/b9291e0d-a11e-41fb-8517-c545388b5953/groups/39f660db-f49b-417e-ad79-2769ba29faf7 \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`GET /organizations/{org_id}/groups/{group_id}`

Get details for a group in an organization. Currently only supported for standalone organizations.

<h3 id="a-group-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|An opaque identifier of an organization.|
|group_id|path|string(uuid)|true|An opaque identifier of a group.|

> Example responses

> 200 Response

```json
{
  "id": "bdbe5e8d-50a5-4f73-a917-074592949844",
  "name": "Project A Editors",
  "description": "Users can edit Project A settings."
}
```

> 403 Response

```json
{
  "message": "Permission denied."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="a-group-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully gets a group. Members not included.|[group](#schemagroup)|
|403|Forbidden|None or insufficient credentials provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="a-group-in-an-organization-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

## Delete a group

<a id="opIddeleteGroup"></a>

> Code samples

```bash
curl https://circleci.com/api/v2/organizations/b9291e0d-a11e-41fb-8517-c545388b5953/groups/39f660db-f49b-417e-ad79-2769ba29faf7 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Circle-Token: ${API_KEY}"
```

`DELETE /organizations/{org_id}/groups/{group_id}`

Delete a group in an organization. This will remove all members from the group as well, and the subsequent role grants tied to the group. Currently only supported for standalone organizations.

<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|An opaque identifier of an organization.|
|group_id|path|string(uuid)|true|An opaque identifier of a group.|

> Example responses

> 200 Response

```json
{
  "message": "Group deleted."
}
```

> 401 Response

```json
{
  "message": "Invalid token provided."
}
```

> 403 Response

```json
{
  "message": "Permission denied."
}
```

> 404 Response

```json
{
  "message": "Context not found."
}
```

> 500 Response

```json
{
  "message": "Internal server error."
}
```

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful deletion of a group.|Inline|
|401|Unauthorized|Credentials provided are invalid.|Inline|
|403|Forbidden|None or insufficient credentials provided.|Inline|
|404|Not Found|Entity not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="delete-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header, bearer_auth, basic_auth, api_key_query
</aside>

# Schemas

<h2 id="tocS_ClaimResponse">ClaimResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclaimresponse"></a>
<a id="schema_ClaimResponse"></a>
<a id="tocSclaimresponse"></a>
<a id="tocsclaimresponse"></a>

```json
{
  "audience": [
    "string"
  ],
  "audience_updated_at": "1970-01-01T00:00:00Z",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ttl": "string",
  "ttl_updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|[string]|false|none|none|
|audience_updated_at|string(date-time)|false|none|none|
|org_id|string(uuid)|true|none|none|
|project_id|string(uuid)|false|none|none|
|ttl|[JSONDuration](#schemajsonduration)|false|none|none|
|ttl_updated_at|string(date-time)|false|none|none|

<h2 id="tocS_JSONDuration">JSONDuration</h2>
<!-- backwards compatibility -->
<a id="schemajsonduration"></a>
<a id="schema_JSONDuration"></a>
<a id="tocSjsonduration"></a>
<a id="tocsjsonduration"></a>

```json
"string"
```

<h2 id="tocS_PatchClaimsRequest">PatchClaimsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchclaimsrequest"></a>
<a id="schema_PatchClaimsRequest"></a>
<a id="tocSpatchclaimsrequest"></a>
<a id="tocspatchclaimsrequest"></a>

```json
{
  "audience": [
    "string"
  ],
  "ttl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|[string]|false|none|none|
|ttl|[JSONDuration](#schemajsonduration)|false|none|none|

<h2 id="tocS_BundleDiff">BundleDiff</h2>
<!-- backwards compatibility -->
<a id="schemabundlediff"></a>
<a id="schema_BundleDiff"></a>
<a id="tocSbundlediff"></a>
<a id="tocsbundlediff"></a>

```json
{
  "created": [
    "string"
  ],
  "deleted": [
    "string"
  ],
  "modified": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|[string]|false|none|none|
|deleted|[string]|false|none|none|
|modified|[string]|false|none|none|

<h2 id="tocS_BundlePayload">BundlePayload</h2>
<!-- backwards compatibility -->
<a id="schemabundlepayload"></a>
<a id="schema_BundlePayload"></a>
<a id="tocSbundlepayload"></a>
<a id="tocsbundlepayload"></a>

```json
{
  "policies": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policies|object|false|none|none|

<h2 id="tocS_Decision">Decision</h2>
<!-- backwards compatibility -->
<a id="schemadecision"></a>
<a id="schema_Decision"></a>
<a id="tocSdecision"></a>
<a id="tocsdecision"></a>

```json
{
  "enabled_rules": [
    "string"
  ],
  "hard_failures": [
    {
      "reason": "string",
      "rule": "string"
    }
  ],
  "reason": "string",
  "soft_failures": [
    {
      "reason": "string",
      "rule": "string"
    }
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled_rules|[string]|false|none|none|
|hard_failures|[[Violation](#schemaviolation)]|false|none|none|
|reason|string|false|none|none|
|soft_failures|[[Violation](#schemaviolation)]|false|none|none|
|status|string|true|none|none|

<h2 id="tocS_DecisionLog">DecisionLog</h2>
<!-- backwards compatibility -->
<a id="schemadecisionlog"></a>
<a id="schema_DecisionLog"></a>
<a id="tocSdecisionlog"></a>
<a id="tocsdecisionlog"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "decision": {
    "enabled_rules": [
      "string"
    ],
    "hard_failures": [
      {
        "reason": "string",
        "rule": "string"
      }
    ],
    "reason": "string",
    "soft_failures": [
      {
        "reason": "string",
        "rule": "string"
      }
    ],
    "status": "string"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata": {
    "build_number": 0,
    "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ssh_rerun": true,
    "vcs": {
      "branch": "string",
      "origin_repository_url": "string",
      "release_tag": "string",
      "target_repository_url": "string"
    }
  },
  "policies": {
    "policy_name1": "1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75",
    "policy_name2": "5267768822ee624d48fce15ec5ca79cbd602cb7f4c2157a516556991f22ef8c7b5ef7b18d1ff41c59370efb0858651d44a936c11b7b144c48fe04df3c6a3e8da"
  },
  "time_taken_ms": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|decision|[Decision](#schemadecision)|false|none|none|
|id|string(uuid)|false|none|none|
|metadata|object|false|none|none|
|policies|object|false|none|policy-name-to-hash-map|
|time_taken_ms|integer|false|none|none|

<h2 id="tocS_DecisionSettings">DecisionSettings</h2>
<!-- backwards compatibility -->
<a id="schemadecisionsettings"></a>
<a id="schema_DecisionSettings"></a>
<a id="tocSdecisionsettings"></a>
<a id="tocsdecisionsettings"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|created_by|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PolicyBundle">PolicyBundle</h2>
<!-- backwards compatibility -->
<a id="schemapolicybundle"></a>
<a id="schema_PolicyBundle"></a>
<a id="tocSpolicybundle"></a>
<a id="tocspolicybundle"></a>

```json
{
  "property1": [
    {
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "name": "string"
    }
  ],
  "property2": [
    {
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[[Policy](#schemapolicy)]|false|none|none|

<h2 id="tocS_Violation">Violation</h2>
<!-- backwards compatibility -->
<a id="schemaviolation"></a>
<a id="schema_Violation"></a>
<a id="tocSviolation"></a>
<a id="tocsviolation"></a>

```json
{
  "reason": "string",
  "rule": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|none|
|rule|string|true|none|none|

<h2 id="tocS_group">group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Unique identifier for group|
|name|string|false|none|Name of group|
|description|string|false|none|Description field on group|

<h2 id="tocS_groups">groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "description": "string"
    }
  ],
  "next_page_token": "string",
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[group](#schemagroup)]|false|none|none|
|next_page_token|string \| null|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_context_list">context_list</h2>
<!-- backwards compatibility -->
<a id="schemacontext_list"></a>
<a id="schema_context_list"></a>
<a id="tocScontext_list"></a>
<a id="tocscontext_list"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "created_at": "2015-09-21T17:29:21.042Z"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|next_page_token|string \| null|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

<h2 id="tocS_context_created">context_created</h2>
<!-- backwards compatibility -->
<a id="schemacontext_created"></a>
<a id="schema_context_created"></a>
<a id="tocScontext_created"></a>
<a id="tocscontext_created"></a>

```json
{
  "name": "string",
  "owner": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "organization"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The user defined name of the context.|
|owner|object|true|none|none|

<h2 id="tocS_delete_context_response">delete_context_response</h2>
<!-- backwards compatibility -->
<a id="schemadelete_context_response"></a>
<a id="schema_delete_context_response"></a>
<a id="tocSdelete_context_response"></a>
<a id="tocsdelete_context_response"></a>

```json
{
  "message": "string"
}
```

message response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

<h2 id="tocS_context">context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "2015-09-21T17:29:21.042Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the context.|
|name|string|true|none|The user defined name of the context.|
|created_at|string(date-time)|true|none|The date and time the context was created.|

<h2 id="tocS_context_project_restrictions_list">context_project_restrictions_list</h2>
<!-- backwards compatibility -->
<a id="schemacontext_project_restrictions_list"></a>
<a id="schema_context_project_restrictions_list"></a>
<a id="tocScontext_project_restrictions_list"></a>
<a id="tocscontext_project_restrictions_list"></a>

```json
{
  "items": [
    {
      "context_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "restriction_type": "project",
      "restriction_value": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|next_page_token|string \| null|false|none|Token that can be used to retrieve next page of results|

<h2 id="tocS_env_var_list">env_var_list</h2>
<!-- backwards compatibility -->
<a id="schemaenv_var_list"></a>
<a id="schema_env_var_list"></a>
<a id="tocSenv_var_list"></a>
<a id="tocsenv_var_list"></a>

```json
{
  "items": [
    {
      "variable": "POSTGRES_USER",
      "created_at": "2015-09-21T17:29:21.042Z",
      "updated_at": "2015-09-21T17:29:21.042Z",
      "context_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|next_page_token|string \| null|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

<h2 id="tocS_delete_env_var">delete_env_var</h2>
<!-- backwards compatibility -->
<a id="schemadelete_env_var"></a>
<a id="schema_delete_env_var"></a>
<a id="tocSdelete_env_var"></a>
<a id="tocsdelete_env_var"></a>

```json
{
  "message": "string"
}
```

message response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message|

<h2 id="tocS_update_env_var">update_env_var</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_env_var"></a>
<a id="schema_update_env_var"></a>
<a id="tocSupdate_env_var"></a>
<a id="tocsupdate_env_var"></a>

```json
{
  "variable": "POSTGRES_USER",
  "created_at": "2015-09-21T17:29:21.042Z",
  "updated_at": "2015-09-21T17:29:21.042Z",
  "context_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|variable|string|true|none|The name of the environment variable|
|created_at|string(date-time)|true|none|The date and time the environment variable was created.|
|updated_at|string(date-time)|true|none|The date and time the environment variable was updated|
|context_id|string(uuid)|true|none|ID of the context (UUID)|
|*anyOf*|object|false|none|message response|
|message|string|true|none|A human-readable message|

<h2 id="tocS_project_settings">project_settings</h2>
<!-- backwards compatibility -->
<a id="schemaproject_settings"></a>
<a id="schema_project_settings"></a>
<a id="tocSproject_settings"></a>
<a id="tocsproject_settings"></a>

```json
{
  "advanced": {
    "autocancel_builds": true,
    "build_fork_prs": true,
    "build_prs_only": true,
    "disable_ssh": true,
    "forks_receive_secret_env_vars": true,
    "oss": true,
    "set_github_status": true,
    "setup_workflows": true,
    "write_settings_requires_admin": true,
    "pr_only_branch_overrides": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced|object|false|none|none|

<h2 id="tocS_restriction_created">restriction_created</h2>
<!-- backwards compatibility -->
<a id="schemarestriction_created"></a>
<a id="schema_restriction_created"></a>
<a id="tocSrestriction_created"></a>
<a id="tocsrestriction_created"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "restriction_type": "project",
  "restriction_value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|UUID of the project restriction|
|project_id|string(uuid)|false|none|Deprecated - For "project" restrictions read the project ID from<br>"restriction_value" instead.<br><br>UUID of the project used in a project restriction.<br>|
|name|string|false|none|Contains a human-readable reference for the restriction. For<br>"project" restrictions this is the name of the project.<br><br>May be null.<br>|
|restriction_type|string|false|none|Type of the restriction|
|restriction_value|string|false|none|Value used to evaluate the restriction|

#### Enumerated Values

|Property|Value|
|---|---|
|restriction_type|project|
|restriction_type|expression|
|restriction_type|group|

<h2 id="tocS_restriction_deleted">restriction_deleted</h2>
<!-- backwards compatibility -->
<a id="schemarestriction_deleted"></a>
<a id="schema_restriction_deleted"></a>
<a id="tocSrestriction_deleted"></a>
<a id="tocsrestriction_deleted"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Response message|

<h2 id="tocS_usage_export_job">usage_export_job</h2>
<!-- backwards compatibility -->
<a id="schemausage_export_job"></a>
<a id="schema_usage_export_job"></a>
<a id="tocSusage_export_job"></a>
<a id="tocsusage_export_job"></a>

```json
{
  "usage_export_job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "download_urls": [
    "http://example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage_export_job_id|string(uuid)|true|none|none|
|state|string|true|none|none|
|start|string(date-time)|true|none|none|
|end|string(date-time)|true|none|none|
|download_urls|[string(uri)]|true|none|A list of pre signed urls that the client can use to download the results of a Usage Export.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|processing|
|state|failed|
|state|completed|

<h2 id="tocS_get_usage_export_job_status">get_usage_export_job_status</h2>
<!-- backwards compatibility -->
<a id="schemaget_usage_export_job_status"></a>
<a id="schema_get_usage_export_job_status"></a>
<a id="tocSget_usage_export_job_status"></a>
<a id="tocsget_usage_export_job_status"></a>

```json
{
  "usage_export_job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "download_urls": [
    "http://example.com"
  ],
  "error_reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage_export_job_id|string(uuid)|true|none|none|
|state|string|true|none|none|
|download_urls|[string(uri)]|true|none|A list of pre signed urls that the client can use to download the results of a Usage Export.|
|error_reason|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|processing|
|state|failed|
|state|completed|

<h2 id="tocS_triggerPipelineRequest">triggerPipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schematriggerpipelinerequest"></a>
<a id="schema_triggerPipelineRequest"></a>
<a id="tocStriggerpipelinerequest"></a>
<a id="tocstriggerpipelinerequest"></a>

```json
{
  "definition_id": "2338d0ae-5541-4bbf-88a2-55e9f7281f80",
  "config": {
    "branch": "main"
  },
  "checkout": {
    "tag": "v2"
  },
  "parameters": {
    "example_param": "my value",
    "example_param2": true,
    "example_param3": 3
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definition_id|string(uuid)|false|none|The unique id for the pipeline definition. This can be found in the page Project Settings > Pipelines.|
|config|object|false|none|none|
|checkout|object|false|none|none|
|parameters|object|false|none|An object containing pipeline parameters and their values.<br>Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.<br>|

<h2 id="tocS_pipelineNotTriggeredResponse">pipelineNotTriggeredResponse</h2>
<!-- backwards compatibility -->
<a id="schemapipelinenottriggeredresponse"></a>
<a id="schema_pipelineNotTriggeredResponse"></a>
<a id="tocSpipelinenottriggeredresponse"></a>
<a id="tocspipelinenottriggeredresponse"></a>

```json
{
  "message": "Ignoring pipeline due to CI skip in the commit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message indicating the reason why a pipeline was not triggered|

<h2 id="tocS_pipelineTriggeredResponse">pipelineTriggeredResponse</h2>
<!-- backwards compatibility -->
<a id="schemapipelinetriggeredresponse"></a>
<a id="schema_pipelineTriggeredResponse"></a>
<a id="tocSpipelinetriggeredresponse"></a>
<a id="tocspipelinetriggeredresponse"></a>

```json
{
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "number": 25,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|number|integer|false|none|none|
|id|string(uuid)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|errored|
|state|setup-pending|
|state|setup|
|state|pending|

<h2 id="tocS_pipelineDefinition">pipelineDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedefinition"></a>
<a id="schema_pipelineDefinition"></a>
<a id="tocSpipelinedefinition"></a>
<a id="tocspipelinedefinition"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "some pipeline",
  "description": "some pipeline description",
  "created_at": "1970-01-01T00:00:00Z",
  "config_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    },
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The unique ID of the pipeline definition.|
|name|string|false|none|The name of the pipeline definition.|
|description|string|false|none|The description of the pipeline definition.|
|created_at|string(date-time)|false|none|The date and time the pipeline definition was created.|
|config_source|object|false|none|The resource that stores the CircleCI config YAML used for this pipeline definition.|
|checkout_source|object|false|none|The resource to be used when running the `checkout` command.|

<h2 id="tocS_pipelineDefinitionRepo">pipelineDefinitionRepo</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedefinitionrepo"></a>
<a id="schema_pipelineDefinitionRepo"></a>
<a id="tocSpipelinedefinitionrepo"></a>
<a id="tocspipelinedefinitionrepo"></a>

```json
{
  "full_name": "some-org/some-repo-name",
  "external_id": "some-repo-id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_name|string|false|none|The fully-qualified name of the repository.|
|external_id|string|false|none|External identifier for the repository, as defined by the respective version control provider.|

<h2 id="tocS_pipelineDefinitionList">pipelineDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedefinitionlist"></a>
<a id="schema_pipelineDefinitionList"></a>
<a id="tocSpipelinedefinitionlist"></a>
<a id="tocspipelinedefinitionlist"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "some pipeline",
      "description": "some pipeline description",
      "created_at": "1970-01-01T00:00:00Z",
      "config_source": {
        "provider": "github_app",
        "repo": {
          "full_name": "some-org/some-repo-name",
          "external_id": "some-repo-id"
        },
        "file_path": ".circleci/some-pipeline.yml"
      },
      "checkout_source": {
        "provider": "github_app",
        "repo": {
          "full_name": "some-org/some-repo-name",
          "external_id": "some-repo-id"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[pipelineDefinition](#schemapipelinedefinition)]|false|none|none|

<h2 id="tocS_createPipelineDefinitionRequest">createPipelineDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelinedefinitionrequest"></a>
<a id="schema_createPipelineDefinitionRequest"></a>
<a id="tocScreatepipelinedefinitionrequest"></a>
<a id="tocscreatepipelinedefinitionrequest"></a>

```json
{
  "name": "Some pipeline name",
  "description": "Some pipeline description",
  "config_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "some-repo-id"
    },
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "some-repo-id"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the pipeline definition.|
|description|string|false|none|The description of the pipeline definition.|
|config_source|object|true|none|none|
|checkout_source|object|true|none|The resource to be used when running the `checkout` command.|

<h2 id="tocS_updatePipelineDefinitionRequest">updatePipelineDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelinedefinitionrequest"></a>
<a id="schema_updatePipelineDefinitionRequest"></a>
<a id="tocSupdatepipelinedefinitionrequest"></a>
<a id="tocsupdatepipelinedefinitionrequest"></a>

```json
{
  "name": "Some pipeline name",
  "description": "Some pipeline description",
  "config_source": {
    "file_path": ".circleci/some-pipeline.yml"
  },
  "checkout_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "some-repo-id"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the pipeline definition.|
|description|string|false|none|The description of the pipeline definition.|
|config_source|object|false|none|The resource that stores the CircleCI config YAML used for this pipeline definition.|
|checkout_source|object|false|none|The resource to be used when running the `checkout` command.|

<h2 id="tocS_pipelineDefinitionDeleted">pipelineDefinitionDeleted</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedefinitiondeleted"></a>
<a id="schema_pipelineDefinitionDeleted"></a>
<a id="tocSpipelinedefinitiondeleted"></a>
<a id="tocspipelinedefinitiondeleted"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Response message|

<h2 id="tocS_trigger">trigger</h2>
<!-- backwards compatibility -->
<a id="schematrigger"></a>
<a id="schema_trigger"></a>
<a id="tocStrigger"></a>
<a id="tocstrigger"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "event_name": "some event name",
  "event_source": {
    "provider": "github_app",
    "repo": {
      "full_name": "some-org/some-repo-name",
      "external_id": "some-repo-id"
    },
    "webhook": {
      "url": "https://some-webhook.invalid/some-endpoint?secret=some-secret",
      "sender": "datadog"
    },
    "schedule": {
      "cron_expression": "*/5 * * * *",
      "attribution_actor": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    }
  },
  "event_preset": "all-pushes",
  "checkout_ref": "some-checkout-ref",
  "config_ref": "some-config-ref",
  "disabled": false,
  "parameters": {
    "deploy_env": "staging"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The unique ID of the trigger.|
|event_name|string|false|none|The name of the event that will trigger the pipeline.|
|event_source|object|false|none|The source of events to use for this trigger. Will contain either a `repo`, `webhook`, or `schedule` object depending on the `provider`. (The `github_app`, `github_server`, and `github_oauth` providers imply a `repo`, `webhook` implies a `webhook`, and `schedule` implies a `schedule`.)|
|event_preset|[trigger_event_preset](#schematrigger_event_preset)|false|none|The name of the event preset to use when filtering events for this trigger.<br><br>When `event_source.provider` is `github_app` or `github_server`, all preset values are supported.<br><br>When `event_source.provider` is `github_oauth`, this field is **required** and only the following values are accepted: `all-pushes`, `only-build-prs`.<br><br>Not applicable when `event_source.provider` is `webhook` or `schedule`.|
|checkout_ref|string|false|none|The ref to use when checking out code for pipeline runs created from this trigger. If empty, the ref provided in the trigger event is used.|
|config_ref|string|false|none|The ref to use when fetching config for pipeline runs created from this trigger. If empty, the ref provided in the trigger event is used.|
|disabled|boolean|false|none|Whether the trigger is disabled. Not supported for triggers where `event_source.provider` is `github_oauth`.|
|parameters|object|false|none|Pipeline parameters passed when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_preset|all-pushes|
|event_preset|only-tags|
|event_preset|default-branch-pushes|
|event_preset|only-build-prs|
|event_preset|only-open-prs|
|event_preset|only-labeled-prs|
|event_preset|only-merged-prs|
|event_preset|only-ready-for-review-prs|
|event_preset|only-build-pushes-to-non-draft-prs|
|event_preset|only-merged-or-closed-prs|
|event_preset|pr-comment-equals-run-ci|
|event_preset|non-draft-pr-opened|
|event_preset|pushes-to-merge-queues|

<h2 id="tocS_trigger_event_preset">trigger_event_preset</h2>
<!-- backwards compatibility -->
<a id="schematrigger_event_preset"></a>
<a id="schema_trigger_event_preset"></a>
<a id="tocStrigger_event_preset"></a>
<a id="tocstrigger_event_preset"></a>

```json
"all-pushes"
```

The name of the event preset to use when filtering events for this trigger.

When `event_source.provider` is `github_app` or `github_server`, all preset values are supported.

When `event_source.provider` is `github_oauth`, this field is **required** and only the following values are accepted: `all-pushes`, `only-build-prs`.

Not applicable when `event_source.provider` is `webhook` or `schedule`.

<h2 id="tocS_triggerList">triggerList</h2>
<!-- backwards compatibility -->
<a id="schematriggerlist"></a>
<a id="schema_triggerList"></a>
<a id="tocStriggerlist"></a>
<a id="tocstriggerlist"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "event_name": "some event name",
      "event_source": {
        "provider": "github_app",
        "repo": {
          "full_name": "some-org/some-repo-name",
          "external_id": "some-repo-id"
        },
        "webhook": {
          "url": "https://some-webhook.invalid/some-endpoint?secret=some-secret",
          "sender": "datadog"
        },
        "schedule": {
          "cron_expression": "*/5 * * * *",
          "attribution_actor": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          }
        }
      },
      "event_preset": "all-pushes",
      "checkout_ref": "some-checkout-ref",
      "config_ref": "some-config-ref",
      "disabled": false,
      "parameters": {
        "deploy_env": "staging"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[trigger](#schematrigger)]|false|none|none|

<h2 id="tocS_createTriggerRequest">createTriggerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetriggerrequest"></a>
<a id="schema_createTriggerRequest"></a>
<a id="tocScreatetriggerrequest"></a>
<a id="tocscreatetriggerrequest"></a>

```json
{
  "event_source": {
    "provider": "github_app",
    "repo": {
      "external_id": "some-repo-id"
    },
    "webhook": {
      "sender": "some-webhook-sender"
    },
    "schedule": {
      "cron_expression": "*/5 * * * *",
      "attribution_actor": "current"
    }
  },
  "event_preset": {},
  "checkout_ref": "some-checkout-ref",
  "config_ref": "some-config-ref",
  "event_name": "some-event-name",
  "disabled": false,
  "parameters": {
    "deploy_env": "staging"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_source|object|true|none|The source of events to use for this trigger. The `repo` object must be specified when `provider` is `github_app`, `github_server`, or `github_oauth`, the `webhook` object may only be specified when `provider` is `webhook`, and the `schedule` object must be specified when `provider` is `schedule`.|
|event_preset|object|false|none|The event preset to use for this trigger.<br><br>- **`github_app` / `github_server`**: Optional. All preset values are supported.<br>- **`github_oauth`**: **Required.** Only `all-pushes` and `only-build-prs` are accepted.<br>- **`webhook` / `schedule`**: Not applicable. Must be omitted.|
|checkout_ref|string|false|none|The ref to use when checking out code for pipeline runs created from this trigger. Always required when `event_source.provider` is `webhook` or `schedule`. When `event_source.provider` is `github_app` or `github_server`, only expected if the event source repository (identified by `event_source.repo.external_id`) is different to the checkout source repository of the associated Pipeline Definition. Otherwise, must be omitted.|
|config_ref|string|false|none|The ref to use when fetching config for pipeline runs created from this trigger. Always required when `event_source.provider` is `webhook` or `schedule`. When `event_source.provider` is `github_app` or `github_server`, only expected if the event source repository (identified by `event_source.repo.external_id`) is different to the config source repository of the associated Pipeline Definition. Otherwise, must be omitted.|
|event_name|string|false|none|The name of the triggering event. Required when `provider` is `webhook` or `schedule`. Should not be set for other providers.|
|disabled|boolean|false|none|Whether the trigger should be disabled upon creation. Not supported for triggers where `event_source.provider` is `github_oauth`.|
|parameters|object|false|none|Pipeline parameters to pass when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.|

<h2 id="tocS_updateTriggerRequest">updateTriggerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetriggerrequest"></a>
<a id="schema_updateTriggerRequest"></a>
<a id="tocSupdatetriggerrequest"></a>
<a id="tocsupdatetriggerrequest"></a>

```json
{
  "event_preset": "all-pushes",
  "checkout_ref": "some-checkout-ref",
  "config_ref": "some-config-ref",
  "event_name": "some event name",
  "disabled": false,
  "event_source": {
    "webhook": {
      "sender": "some sender"
    },
    "schedule": {
      "cron_expression": "*/5 * * * *",
      "attribution_actor": "current"
    }
  },
  "parameters": {
    "deploy_env": "staging"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_preset|[trigger_event_preset](#schematrigger_event_preset)|false|none|The name of the event preset to use when filtering events for this trigger.<br><br>When `event_source.provider` is `github_app` or `github_server`, all preset values are supported.<br><br>When `event_source.provider` is `github_oauth`, this field is **required** and only the following values are accepted: `all-pushes`, `only-build-prs`.<br><br>Not applicable when `event_source.provider` is `webhook` or `schedule`.|
|checkout_ref|string|false|none|The ref to use when checking out code for pipeline runs created from this trigger.|
|config_ref|string|false|none|The ref to use when fetching config for pipeline runs created from this trigger.|
|event_name|string|false|none|The name of the triggering event. Required when `provider` is `webhook` or `schedule`. Should not be set for other providers.|
|disabled|boolean|false|none|A flag indicating whether the trigger is disabled or not. Not supported for triggers where `event_source.provider` is `github_oauth`.|
|event_source|object|false|none|none|
|parameters|object|false|none|Pipeline parameters to pass when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_preset|all-pushes|
|event_preset|only-tags|
|event_preset|default-branch-pushes|
|event_preset|only-build-prs|
|event_preset|only-open-prs|
|event_preset|only-labeled-prs|
|event_preset|only-merged-prs|
|event_preset|only-ready-for-review-prs|
|event_preset|only-build-pushes-to-non-draft-prs|
|event_preset|only-merged-or-closed-prs|
|event_preset|pr-comment-equals-run-ci|
|event_preset|non-draft-pr-opened|
|event_preset|pushes-to-merge-queues|

<h2 id="tocS_triggerDeleted">triggerDeleted</h2>
<!-- backwards compatibility -->
<a id="schematriggerdeleted"></a>
<a id="schema_triggerDeleted"></a>
<a id="tocStriggerdeleted"></a>
<a id="tocstriggerdeleted"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Response message|

<h2 id="tocS_rollbackProjectRequest">rollbackProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackprojectrequest"></a>
<a id="schema_rollbackProjectRequest"></a>
<a id="tocSrollbackprojectrequest"></a>
<a id="tocsrollbackprojectrequest"></a>

```json
{
  "component_name": "frontend",
  "current_version": "1.0.0",
  "environment_name": "production",
  "namespace": "default",
  "parameters": {
    "param1": "value1",
    "param2": "value2"
  },
  "reason": "The component is down",
  "target_version": "1.0.1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component_name|string|true|none|The component name|
|current_version|string|true|none|The current version|
|environment_name|string|true|none|The environment name|
|namespace|string|false|none|The namespace|
|parameters|object|false|none|The extra parameters for the rollback pipeline|
|reason|string|false|none|The reason for the rollback|
|target_version|string|true|none|The target version|

<h2 id="tocS_rollbackProjectResponse">rollbackProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemarollbackprojectresponse"></a>
<a id="schema_rollbackProjectResponse"></a>
<a id="tocSrollbackprojectresponse"></a>
<a id="tocsrollbackprojectresponse"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "rollback_type": "PIPELINE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The ID of the rollback pipeline or the command created to handle the rollback|
|rollback_type|string|false|none|The type of the rollback|

<h2 id="tocS_label">label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "key": "env",
  "value": "prod"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the label|
|value|string|false|none|The value of the label|

<h2 id="tocS_component">component</h2>
<!-- backwards compatibility -->
<a id="schemacomponent"></a>
<a id="schema_component"></a>
<a id="tocScomponent"></a>
<a id="tocscomponent"></a>

```json
{
  "id": "123e4127-e89b-12d3-a456-426123417400",
  "name": "service-a",
  "project_id": "123e4127-e89b-12d3-a456-426123417400",
  "labels": [
    {
      "key": "env",
      "value": "prod"
    }
  ],
  "release_count": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The component ID|
|name|string|false|none|The component name|
|project_id|string(uuid)|false|none|The project ID of the component|
|labels|[[label](#schemalabel)]|false|none|The labels associated with the component|
|release_count|integer|false|none|The number of releases for this component|
|created_at|string(date-time)|false|none|The time when the component was created|
|updated_at|string(date-time)|false|none|The time when the component was updated|

<h2 id="tocS_paginatedComponentList">paginatedComponentList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcomponentlist"></a>
<a id="schema_paginatedComponentList"></a>
<a id="tocSpaginatedcomponentlist"></a>
<a id="tocspaginatedcomponentlist"></a>

```json
{
  "items": [
    {
      "id": "123e4127-e89b-12d3-a456-426123417400",
      "name": "service-a",
      "project_id": "123e4127-e89b-12d3-a456-426123417400",
      "labels": [
        {
          "key": "env",
          "value": "prod"
        }
      ],
      "release_count": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[component](#schemacomponent)]|false|none|none|
|next_page_token|string \| null|false|none|The pagination token to use when fetching the next page in this result set.|

<h2 id="tocS_version">version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "name": "1.0.0",
  "environment_id": "123e4127-e89b-12d3-a456-426123417400",
  "namespace": "default",
  "is_live": true,
  "pipeline_id": "cc54a110-d03f-4916-96fc-ff36a1221ed7",
  "workflow_id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
  "job_id": "f7e18b53-db27-4706-ad77-b16dc1e6fc53",
  "job_number": 123,
  "last_deployed_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The version name|
|environment_id|string(uuid)|false|none|The ID of the environment in which the version has been deployed|
|namespace|string|false|none|The namespace in which the version was deployed|
|is_live|boolean|false|none|Whether the version is live or not|
|pipeline_id|string(uuid)|false|none|The ID of the pipeline that deployed the version|
|workflow_id|string(uuid)|false|none|The ID of the CircleCI workflow that deployed the version|
|job_id|string(uuid)|false|none|The ID of the CircleCI job that deployed the version|
|job_number|integer|false|none|The number of the CircleCI job that deployed the version|
|last_deployed_at|string(date-time)|false|none|The time at which the version was last deployed|

<h2 id="tocS_paginatedComponentVersionList">paginatedComponentVersionList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcomponentversionlist"></a>
<a id="schema_paginatedComponentVersionList"></a>
<a id="tocSpaginatedcomponentversionlist"></a>
<a id="tocspaginatedcomponentversionlist"></a>

```json
{
  "items": [
    {
      "name": "1.0.0",
      "environment_id": "123e4127-e89b-12d3-a456-426123417400",
      "namespace": "default",
      "is_live": true,
      "pipeline_id": "cc54a110-d03f-4916-96fc-ff36a1221ed7",
      "workflow_id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
      "job_id": "f7e18b53-db27-4706-ad77-b16dc1e6fc53",
      "job_number": 123,
      "last_deployed_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[version](#schemaversion)]|false|none|none|
|next_page_token|string \| null|false|none|The pagination token to use when fetching the next page in this result set.|

<h2 id="tocS_environment">environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "description": "some description",
  "id": "123e4127-e89b-12d3-a456-426123417400",
  "labels": [
    {
      "key": "env",
      "value": "prod"
    }
  ],
  "name": "prod-app",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|The time when the environment was created|
|description|string|false|none|Short description given to the environment|
|id|string(uuid)|false|none|The environment ID|
|labels|[[label](#schemalabel)]|false|none|The labels associated to the environment|
|name|string|false|none|The environment name|
|updated_at|string(date-time)|false|none|The time when the environment was updated|

<h2 id="tocS_paginatedEnvironmentList">paginatedEnvironmentList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedenvironmentlist"></a>
<a id="schema_paginatedEnvironmentList"></a>
<a id="tocSpaginatedenvironmentlist"></a>
<a id="tocspaginatedenvironmentlist"></a>

```json
{
  "items": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "some description",
      "id": "123e4127-e89b-12d3-a456-426123417400",
      "labels": [
        {
          "key": "env",
          "value": "prod"
        }
      ],
      "name": "prod-app",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[environment](#schemaenvironment)]|false|none|none|
|next_page_token|string \| null|false|none|The pagination token to use when fetching the next page in this result set.|

<h2 id="tocS_exporter">exporter</h2>
<!-- backwards compatibility -->
<a id="schemaexporter"></a>
<a id="schema_exporter"></a>
<a id="tocSexporter"></a>
<a id="tocsexporter"></a>

```json
{
  "id": "123e4127-e89b-12d3-a456-426123417400",
  "org_id": "b9291e0d-a11e-41fb-8517-c545388b5953",
  "endpoint": "otel.example.com:4317",
  "protocol": "grpc",
  "insecure": false,
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "issues": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The exporter ID.|
|org_id|string(uuid)|false|none|The organization ID that owns this exporter.|
|endpoint|string|false|none|The OTLP endpoint to send spans to.|
|protocol|string|false|none|The OTLP transport to use when exporting data.|
|insecure|boolean|false|none|Whether to use an insecure connection to the endpoint.|
|headers|object|false|none|Additional headers to include in export requests. Header values are encrypted at rest and will appear redacted as "xxxx" in responses.|
|issues|[string]|false|none|A list of validation issues detected with this exporter configuration, such as an endpoint that no longer resolves. Only present when issues are detected.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|grpc|
|protocol|http|

<h2 id="tocS_exporterList">exporterList</h2>
<!-- backwards compatibility -->
<a id="schemaexporterlist"></a>
<a id="schema_exporterList"></a>
<a id="tocSexporterlist"></a>
<a id="tocsexporterlist"></a>

```json
[
  {
    "id": "123e4127-e89b-12d3-a456-426123417400",
    "org_id": "b9291e0d-a11e-41fb-8517-c545388b5953",
    "endpoint": "otel.example.com:4317",
    "protocol": "grpc",
    "insecure": false,
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "issues": [
      "string"
    ]
  }
]
```

<h2 id="tocS_createExporterRequest">createExporterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateexporterrequest"></a>
<a id="schema_createExporterRequest"></a>
<a id="tocScreateexporterrequest"></a>
<a id="tocscreateexporterrequest"></a>

```json
{
  "org_id": "b9291e0d-a11e-41fb-8517-c545388b5953",
  "endpoint": "otel.example.com:4317",
  "protocol": "grpc",
  "insecure": false,
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_id|string(uuid)|true|none|The organization ID to create the exporter for.|
|endpoint|string|true|none|The OTLP endpoint to send spans to. Don't include https:// or grpc://. Just the hostname and port are required.|
|protocol|string|true|none|The OTLP transport to use when exporting data.|
|insecure|boolean|false|none|Whether to use an insecure connection to the endpoint.|
|headers|object|false|none|Additional headers to include in export requests.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|grpc|
|protocol|http|

<h2 id="tocS_webhook">webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "id": "8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90",
  "name": "my-webhook",
  "url": "https://example.com/hooks/circleci",
  "verify_tls": true,
  "signing_secret": "********",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "scope": {
    "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
    "type": "project"
  },
  "is_enabled": true,
  "auto_disabled_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the webhook.|
|name|string|true|none|Name of the webhook.|
|url|string|true|none|URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).|
|verify_tls|boolean|true|none|Whether to enforce TLS certificate verification when delivering the webhook.|
|signing_secret|string|true|none|Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request.|
|events|[string]|true|none|Events that will trigger the webhook.|
|scope|[webhookScope](#schemawebhookscope)|true|none|The scope in which the relevant events that will trigger webhooks.|
|is_enabled|boolean|true|none|Whether the webhook is enabled.|
|auto_disabled_at|string(date-time) \| null|true|none|The date and time CircleCI automatically disabled the webhook, or null if it has not. It can't be set through the API.|
|created_at|string(date-time)|true|none|The date and time the webhook was created.|
|updated_at|string(date-time)|true|none|The date and time the webhook was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|workflow-completed|
|events|job-completed|

<h2 id="tocS_webhookList">webhookList</h2>
<!-- backwards compatibility -->
<a id="schemawebhooklist"></a>
<a id="schema_webhookList"></a>
<a id="tocSwebhooklist"></a>
<a id="tocswebhooklist"></a>

```json
{
  "items": [
    {
      "id": "8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90",
      "name": "my-webhook",
      "url": "https://example.com/hooks/circleci",
      "verify_tls": true,
      "signing_secret": "********",
      "events": [
        "workflow-completed",
        "job-completed"
      ],
      "scope": {
        "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
        "type": "project"
      },
      "is_enabled": true,
      "auto_disabled_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[webhook](#schemawebhook)]|true|none|none|
|next_page_token|string \| null|true|none|A token to pass as a `page-token` query parameter to return the next page of results.|

<h2 id="tocS_webhookScope">webhookScope</h2>
<!-- backwards compatibility -->
<a id="schemawebhookscope"></a>
<a id="schema_webhookScope"></a>
<a id="tocSwebhookscope"></a>
<a id="tocswebhookscope"></a>

```json
{
  "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
  "type": "project"
}
```

The scope in which the relevant events that will trigger webhooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|ID of the scope being used (at the moment, only project ID is supported).|
|type|string|true|none|Type of the scope being used.|

<h2 id="tocS_createWebhookScope">createWebhookScope</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookscope"></a>
<a id="schema_createWebhookScope"></a>
<a id="tocScreatewebhookscope"></a>
<a id="tocscreatewebhookscope"></a>

```json
{
  "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
  "type": "project"
}
```

The scope in which the relevant events that will trigger webhooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the scope being used (at the moment, only project ID is supported).|
|type|string|true|none|Type of the scope being used.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|project|

<h2 id="tocS_createWebhookRequest">createWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookrequest"></a>
<a id="schema_createWebhookRequest"></a>
<a id="tocScreatewebhookrequest"></a>
<a id="tocscreatewebhookrequest"></a>

```json
{
  "name": "my-webhook",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "url": "https://example.com/hooks/circleci",
  "verify-tls": true,
  "signing-secret": "super-secret-value",
  "is-enabled": true,
  "scope": {
    "id": "39723015-b399-4601-9ff6-bd1bfbed8fa8",
    "type": "project"
  }
}
```

The parameters for a create webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the webhook.|
|events|[string]|true|none|Events that will trigger the webhook.|
|url|string|true|none|URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).|
|verify-tls|boolean|true|none|Whether to enforce TLS certificate verification when delivering the webhook.|
|signing-secret|string|true|none|Secret used to build an HMAC hash of the payload and passed as a header in the webhook request.|
|is-enabled|boolean|false|none|Whether the webhook is enabled. Defaults to true.|
|scope|[createWebhookScope](#schemacreatewebhookscope)|true|none|The scope in which the relevant events that will trigger webhooks.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|workflow-completed|
|events|job-completed|

<h2 id="tocS_updateWebhookRequest">updateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookrequest"></a>
<a id="schema_updateWebhookRequest"></a>
<a id="tocSupdatewebhookrequest"></a>
<a id="tocsupdatewebhookrequest"></a>

```json
{
  "name": "my-webhook",
  "events": [
    "workflow-completed",
    "job-completed"
  ],
  "url": "https://example.com/hooks/circleci",
  "signing-secret": "super-secret-value",
  "verify-tls": true,
  "is-enabled": false
}
```

The parameters for an update webhook request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the webhook.|
|events|[string]|false|none|Events that will trigger the webhook.|
|url|string|false|none|URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).|
|signing-secret|string|false|none|Secret used to build an HMAC hash of the payload and passed as a header in the webhook request.|
|verify-tls|boolean|false|none|Whether to enforce TLS certificate verification when delivering the webhook.|
|is-enabled|boolean|false|none|Whether the webhook is enabled. Omit it to keep the current value.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|workflow-completed|
|events|job-completed|

<h2 id="tocS_webhookDeleted">webhookDeleted</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeleted"></a>
<a id="schema_webhookDeleted"></a>
<a id="tocSwebhookdeleted"></a>
<a id="tocswebhookdeleted"></a>

```json
{
  "message": "Webhook deleted."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Response message.|

<h2 id="tocS_pipelineValues">pipelineValues</h2>
<!-- backwards compatibility -->
<a id="schemapipelinevalues"></a>
<a id="schema_pipelineValues"></a>
<a id="tocSpipelinevalues"></a>
<a id="tocspipelinevalues"></a>

```json
{
  "some.key": "some-value",
  "different.key": true,
  "another.field": 1
}
```

<h2 id="tocS_workflow">workflow</h2>
<!-- backwards compatibility -->
<a id="schemaworkflow"></a>
<a id="schema_workflow"></a>
<a id="tocSworkflow"></a>
<a id="tocsworkflow"></a>

```json
{
  "pipeline_id": "5034460f-c7c4-4c43-9457-de07e2029e7b",
  "canceled_by": "026a6d28-c22e-4aab-a8b4-bd7131a8ea35",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_rerun_number": 1,
  "name": "build-and-test",
  "project_slug": "gh/CircleCI-Public/api-preview-docs",
  "errored_by": "c6e40f70-a80a-4ccc-af88-8d985a7bc622",
  "tag": "setup",
  "status": "success",
  "started_by": "03987f6a-4c27-4dc1-b6ab-c7e83bb3e713",
  "max_auto_reruns": 5,
  "pipeline_number": 25,
  "created_at": "1970-01-01T00:00:00Z",
  "stopped_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline_id|string(uuid)|true|none|The ID of the pipeline this workflow belongs to.|
|canceled_by|string(uuid)|false|none|The ID of the user who canceled the workflow.|
|id|string(uuid)|true|none|The unique ID of the workflow.|
|auto_rerun_number|integer|false|none|Present if this workflow was auto-rerun from a previous workflow. The Nth auto-rerun workflow will have auto_rerun_number N.|
|name|string|true|none|The name of the workflow.|
|project_slug|string|true|none|The project-slug for the pipeline this workflow belongs to.|
|errored_by|string(uuid)|false|none|The ID of the user associated with the error on the workflow.|
|tag|string \| null|false|none|Tag used for the workflow.|
|status|string|true|none|The current status of the workflow.|
|started_by|string(uuid)|true|none|The ID of the user who started the workflow.|
|max_auto_reruns|integer|false|none|The maximum number of auto reruns specified for the workflow.|
|pipeline_number|integer(int64)|true|none|The number of the pipeline this workflow belongs to.|
|created_at|string(date-time)|true|none|The date and time the workflow was created.|
|stopped_at|string(date-time) \| null|true|none|The date and time the workflow stopped.|

#### Enumerated Values

|Property|Value|
|---|---|
|tag|setup|
|status|success|
|status|canceled|
|status|error|
|status|failed|
|status|failing|
|status|not_run|
|status|on_hold|
|status|running|
|status|unauthorized|

<h2 id="tocS_getJobResponse">getJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjobresponse"></a>
<a id="schema_getJobResponse"></a>
<a id="tocSgetjobresponse"></a>
<a id="tocsgetjobresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "job_number": 0,
  "type": "string",
  "status": "string",
  "project_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "pipeline_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "started_at": "1970-01-01T00:00:00Z",
  "stopped_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|job_number|integer(int64)|false|none|The number of the job.|
|type|string|false|none|The type of the job.|
|status|string|true|none|none|
|project_id|string(uuid)|true|none|none|
|pipeline_id|string(uuid)|true|none|none|
|workflow_id|string(uuid)|true|none|none|
|started_at|string(date-time)|false|none|none|
|stopped_at|string(date-time)|false|none|none|
