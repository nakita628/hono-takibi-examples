<h1 id="chatwoot">Chatwoot v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API documentation for Chatwoot server.

Base URLs:

* <a href="https://app.chatwoot.com/">https://app.chatwoot.com/</a>

<a href="https://www.chatwoot.com/terms-of-service/">Terms of service</a>
Email: <a href="mailto:hello@chatwoot.com">hello@chatwoot.com</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT License</a>

# Authentication

- HTTP Authentication, scheme: bearer Authenticate with `Authorization: Bearer <token>` using a user API token from **Profile Settings**. Available in Chatwoot `v4.19.0` and later.

- HTTP Authentication, scheme: bearer Authenticate with `Authorization: Bearer <token>` using an agent bot token from **Settings → Agent Bots**. Available in Chatwoot `v4.19.0` and later.

- HTTP Authentication, scheme: bearer Authenticate with `Authorization: Bearer <token>` using a platform app token from **Super Admin**. Available in Chatwoot `v4.19.0` and later.

* API Key (userApiKey)
    - Parameter Name: **api_access_token**, in: header. Find your API token in **Profile Settings**. The `api_access_token` header remains supported, but will be deprecated in a future release. For new integrations, use Bearer authentication.

* API Key (agentBotApiKey)
    - Parameter Name: **api_access_token**, in: header. Find your agent bot token in **Settings → Agent Bots**. For new integrations, use Bearer authentication in Chatwoot `v4.19.0` and later. Agent bot tokens can access only bot-permitted APIs.

* API Key (platformAppApiKey)
    - Parameter Name: **api_access_token**, in: header. Create a platform app in **Super Admin** to get its token. For new integrations, use Bearer authentication in Chatwoot `v4.19.0` and later. Platform app tokens can provision agent bots, accounts, users, and roles.

<h1 id="chatwoot-accounts">Accounts</h1>

Account management APIs

## Create an Account

<a id="opIdcreate-an-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Account",
    "locale": "en",
    "domain": "example.com",
    "support_email": "support@example.com",
    "status": "active",
    "limits": {},
    "custom_attributes": {}
  }'
```

`POST /platform/api/v1/accounts`

Create an Account

> Body parameter

```json
{
  "name": "My Account",
  "locale": "en",
  "domain": "example.com",
  "support_email": "support@example.com",
  "status": "active",
  "limits": {},
  "custom_attributes": {}
}
```

<h3 id="create-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[account_create_update_payload](#schemaaccount_create_update_payload)|true|none|
|» name|body|string|false|Name of the account|
|» locale|body|string|false|The locale of the account|
|» domain|body|string|false|The domain of the account|
|» support_email|body|string|false|The support email of the account|
|» status|body|string|false|The status of the account|
|» limits|body|object|false|The limits of the account|
|» custom_attributes|body|object|false|The custom attributes of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|suspended|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[platform_account](#schemaplatform_account)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Get an account details

<a id="opIdget-details-of-an-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/accounts/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /platform/api/v1/accounts/{account_id}`

Get the details of an account

<h3 id="get-an-account-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-an-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[platform_account](#schemaplatform_account)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given account does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Delete an Account

<a id="opIddelete-an-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/accounts/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /platform/api/v1/accounts/{account_id}`

Delete an Account

<h3 id="delete-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The account does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Update an account

<a id="opIdupdate-an-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/accounts/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Account",
    "locale": "en",
    "domain": "example.com",
    "support_email": "support@example.com",
    "status": "active",
    "limits": {},
    "custom_attributes": {}
  }'
```

`PATCH /platform/api/v1/accounts/{account_id}`

Update an account's attributes

> Body parameter

```json
{
  "name": "My Account",
  "locale": "en",
  "domain": "example.com",
  "support_email": "support@example.com",
  "status": "active",
  "limits": {},
  "custom_attributes": {}
}
```

<h3 id="update-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[account_create_update_payload](#schemaaccount_create_update_payload)|true|none|
|» name|body|string|false|Name of the account|
|» locale|body|string|false|The locale of the account|
|» domain|body|string|false|The domain of the account|
|» support_email|body|string|false|The support email of the account|
|» status|body|string|false|The status of the account|
|» limits|body|object|false|The limits of the account|
|» custom_attributes|body|object|false|The custom attributes of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|suspended|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[platform_account](#schemaplatform_account)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

<h1 id="chatwoot-account-users">Account Users</h1>

Account user management APIs

## List all Account Users

<a id="opIdlist-all-account-users"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/accounts/0/account_users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /platform/api/v1/accounts/{account_id}/account_users`

List all account users

<h3 id="list-all-account-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "user_id": 0,
    "role": "string"
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-account-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account_user](#schemaaccount_user)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Create an Account User

<a id="opIdcreate-an-account-user"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/accounts/0/account_users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": 1,
    "role": "administrator"
  }'
```

`POST /platform/api/v1/accounts/{account_id}/account_users`

Create an Account User

> Body parameter

```json
{
  "user_id": 1,
  "role": "administrator"
}
```

<h3 id="create-an-account-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[account_user_create_update_payload](#schemaaccount_user_create_update_payload)|true|none|
|» user_id|body|integer|true|The ID of the user|
|» role|body|string|true|whether user is an administrator or agent|

> Example responses

> 200 Response

```json
{
  "account_id": 0,
  "user_id": 0,
  "role": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-an-account-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="create-an-account-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer|false|none|The ID of the account|
|user_id|integer|false|none|The ID of the user|
|role|string|false|none|whether user is an administrator or agent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Delete an Account User

<a id="opIddelete-an-account-user"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/accounts/0/account_users \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /platform/api/v1/accounts/{account_id}/account_users`

Delete an Account User

<h3 id="delete-an-account-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-an-account-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The account does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

<h1 id="chatwoot-agentbots">AgentBots</h1>

Bot integrations

## List all AgentBots

<a id="opIdlist-all-agent-bots"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/agent_bots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /platform/api/v1/agent_bots`

List all agent bots available

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "description": "string",
    "thumbnail": "string",
    "outgoing_url": "string",
    "bot_type": "string",
    "bot_config": {},
    "account_id": 0,
    "access_token": "string",
    "system_bot": true
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-agentbots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-agentbots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agent_bot](#schemaagent_bot)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Create an Agent Bot

<a id="opIdcreate-an-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/agent_bots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Agent Bot",
    "description": "This is a sample agent bot",
    "outgoing_url": "https://example.com/webhook",
    "account_id": 1,
    "avatar": "string",
    "avatar_url": "https://example.com/avatar.png"
  }'
```

`POST /platform/api/v1/agent_bots`

Create an agent bot

> Body parameter

```json
{
  "name": "My Agent Bot",
  "description": "This is a sample agent bot",
  "outgoing_url": "https://example.com/webhook",
  "account_id": 1,
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png"
}
```

<h3 id="create-an-agent-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[platform_agent_bot_create_update_payload](#schemaplatform_agent_bot_create_update_payload)|true|none|
|» name|body|string|false|The name of the agent bot|
|» description|body|string|false|The description of the agent bot|
|» outgoing_url|body|string|false|The webhook URL for the bot|
|» account_id|body|integer|false|The account ID to associate the agent bot with|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» avatar_url|body|string|false|The url to a jpeg, png file for the agent bot avatar|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-an-agent-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent_bot](#schemaagent_bot)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Get an agent bot details

<a id="opIdget-details-of-a-single-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/agent_bots/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /platform/api/v1/agent_bots/{id}`

Get the details of an agent bot

<h3 id="get-an-agent-bot-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the agentbot to be updated|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-an-agent-bot-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent_bot](#schemaagent_bot)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given agent bot ID does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Delete an AgentBot

<a id="opIddelete-an-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/agent_bots/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /platform/api/v1/agent_bots/{id}`

Delete an AgentBot

<h3 id="delete-an-agentbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the agentbot to be updated|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-an-agentbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The agent bot does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Update an agent bot

<a id="opIdupdate-an-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/agent_bots/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Agent Bot",
    "description": "This is a sample agent bot",
    "outgoing_url": "https://example.com/webhook",
    "account_id": 1,
    "avatar": "string",
    "avatar_url": "https://example.com/avatar.png"
  }'
```

`PATCH /platform/api/v1/agent_bots/{id}`

Update an agent bot's attributes

> Body parameter

```json
{
  "name": "My Agent Bot",
  "description": "This is a sample agent bot",
  "outgoing_url": "https://example.com/webhook",
  "account_id": 1,
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png"
}
```

<h3 id="update-an-agent-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the agentbot to be updated|
|body|body|[platform_agent_bot_create_update_payload](#schemaplatform_agent_bot_create_update_payload)|true|none|
|» name|body|string|false|The name of the agent bot|
|» description|body|string|false|The description of the agent bot|
|» outgoing_url|body|string|false|The webhook URL for the bot|
|» account_id|body|integer|false|The account ID to associate the agent bot with|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» avatar_url|body|string|false|The url to a jpeg, png file for the agent bot avatar|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-an-agent-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent_bot](#schemaagent_bot)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

<h1 id="chatwoot-users">Users</h1>

User management APIs

## Create a User

<a id="opIdcreate-a-user"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Daniel",
    "display_name": "Dan",
    "email": "daniel@acme.inc",
    "password": "Password2!",
    "custom_attributes": {}
  }'
```

`POST /platform/api/v1/users`

Create a User

> Body parameter

```json
{
  "name": "Daniel",
  "display_name": "Dan",
  "email": "daniel@acme.inc",
  "password": "Password2!",
  "custom_attributes": {}
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[user_create_update_payload](#schemauser_create_update_payload)|true|none|
|» name|body|string|false|Name of the user|
|» display_name|body|string|false|Display name of the user|
|» email|body|string|false|Email of the user|
|» password|body|string|false|Password must contain uppercase, lowercase letters, number and a special character|
|» custom_attributes|body|object|false|Custom attributes you want to associate with the user|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "access_token": "string",
  "account_id": 0,
  "available_name": "string",
  "avatar_url": "string",
  "confirmed": true,
  "display_name": "string",
  "message_signature": "string",
  "email": "string",
  "hmac_identifier": "string",
  "inviter_id": 0,
  "name": "string",
  "provider": "string",
  "pubsub_token": "string",
  "role": "agent",
  "ui_settings": {},
  "uid": "string",
  "type": "string",
  "custom_attributes": {},
  "accounts": [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "role": "administrator",
      "permissions": [
        "string"
      ],
      "availability": "string",
      "availability_status": "string",
      "auto_offline": true,
      "custom_role_id": 0,
      "custom_role": {}
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[user](#schemauser)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Get an user details

<a id="opIdget-details-of-a-user"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/users/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /platform/api/v1/users/{id}`

Get the details of an user

<h3 id="get-an-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The numeric ID of the user on the platform|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "access_token": "string",
  "account_id": 0,
  "available_name": "string",
  "avatar_url": "string",
  "confirmed": true,
  "display_name": "string",
  "message_signature": "string",
  "email": "string",
  "hmac_identifier": "string",
  "inviter_id": 0,
  "name": "string",
  "provider": "string",
  "pubsub_token": "string",
  "role": "agent",
  "ui_settings": {},
  "uid": "string",
  "type": "string",
  "custom_attributes": {},
  "accounts": [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "role": "administrator",
      "permissions": [
        "string"
      ],
      "availability": "string",
      "availability_status": "string",
      "auto_offline": true,
      "custom_role_id": 0,
      "custom_role": {}
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-an-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[user](#schemauser)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given user does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Delete a User

<a id="opIddelete-a-user"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/users/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /platform/api/v1/users/{id}`

Delete a User

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The numeric ID of the user on the platform|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The user does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Update a user

<a id="opIdupdate-a-user"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/users/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Daniel",
    "display_name": "Dan",
    "email": "daniel@acme.inc",
    "password": "Password2!",
    "custom_attributes": {}
  }'
```

`PATCH /platform/api/v1/users/{id}`

Update a user's attributes

> Body parameter

```json
{
  "name": "Daniel",
  "display_name": "Dan",
  "email": "daniel@acme.inc",
  "password": "Password2!",
  "custom_attributes": {}
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The numeric ID of the user on the platform|
|body|body|[user_create_update_payload](#schemauser_create_update_payload)|true|none|
|» name|body|string|false|Name of the user|
|» display_name|body|string|false|Display name of the user|
|» email|body|string|false|Email of the user|
|» password|body|string|false|Password must contain uppercase, lowercase letters, number and a special character|
|» custom_attributes|body|object|false|Custom attributes you want to associate with the user|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "access_token": "string",
  "account_id": 0,
  "available_name": "string",
  "avatar_url": "string",
  "confirmed": true,
  "display_name": "string",
  "message_signature": "string",
  "email": "string",
  "hmac_identifier": "string",
  "inviter_id": 0,
  "name": "string",
  "provider": "string",
  "pubsub_token": "string",
  "role": "agent",
  "ui_settings": {},
  "uid": "string",
  "type": "string",
  "custom_attributes": {},
  "accounts": [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "role": "administrator",
      "permissions": [
        "string"
      ],
      "availability": "string",
      "availability_status": "string",
      "auto_offline": true,
      "custom_role_id": 0,
      "custom_role": {}
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[user](#schemauser)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Get User SSO Link

<a id="opIdget-sso-url-of-a-user"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/users/0/login \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /platform/api/v1/users/{id}/login`

Get the sso link of a user

<h3 id="get-user-sso-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The numeric ID of the user on the platform|

> Example responses

> 200 Response

```json
{
  "url": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-user-sso-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given user does not exist|[bad_request_error](#schemabad_request_error)|

<h3 id="get-user-sso-link-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|SSO url to autenticate the user|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

## Get User Access Token

<a id="opIdpost-user-token"></a>

> Code samples

```bash
curl https://app.chatwoot.com/platform/api/v1/users/0/token \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /platform/api/v1/users/{id}/token`

Get the access token of a user

<h3 id="get-user-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The numeric ID of the user on the platform|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "expiry": 0,
  "user": {
    "id": 0,
    "name": "string",
    "display_name": "string",
    "email": "string",
    "pubsub_token": "string"
  }
}
```

<h3 id="get-user-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|The given user does not exist|None|

<h3 id="get-user-access-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|Access token of the user|
|expiry|integer \| null|false|none|Expiry timestamp|
|user|object|false|none|none|
|» id|integer|false|none|User ID|
|» name|string|false|none|User's full name|
|» display_name|string|false|none|User's display name|
|» email|string|false|none|User's email address|
|» pubsub_token|string|false|none|User's pubsub token|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
platformAppBearerAuth, platformAppApiKey
</aside>

<h1 id="chatwoot-account-agentbots">Account AgentBots</h1>

Account-specific Agent Bots

## List all AgentBots

<a id="opIdlist-all-account-agent-bots"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agent_bots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/agent_bots`

List all agent bots available for the current account

<h3 id="list-all-agentbots-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "description": "string",
    "thumbnail": "string",
    "outgoing_url": "string",
    "bot_type": "string",
    "bot_config": {},
    "account_id": 0,
    "access_token": "string",
    "system_bot": true
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-agentbots-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-agentbots-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agent_bot](#schemaagent_bot)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create an Agent Bot

<a id="opIdcreate-an-account-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agent_bots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Agent Bot",
    "description": "This is a sample agent bot",
    "outgoing_url": "https://example.com/webhook",
    "avatar": "string",
    "avatar_url": "https://example.com/avatar.png",
    "bot_type": 0,
    "bot_config": {}
  }'
```

`POST /api/v1/accounts/{account_id}/agent_bots`

Create an agent bot in the account

> Body parameter

```json
{
  "name": "My Agent Bot",
  "description": "This is a sample agent bot",
  "outgoing_url": "https://example.com/webhook",
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png",
  "bot_type": 0,
  "bot_config": {}
}
```

<h3 id="create-an-agent-bot-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[agent_bot_create_update_payload](#schemaagent_bot_create_update_payload)|true|none|
|» name|body|string|false|The name of the agent bot|
|» description|body|string|false|The description of the agent bot|
|» outgoing_url|body|string|false|The webhook URL for the bot|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» avatar_url|body|string|false|The url to a jpeg, png file for the agent bot avatar|
|» bot_type|body|integer|false|The type of the bot (0 for webhook)|
|» bot_config|body|object|false|The configuration for the bot|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-an-agent-bot-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent_bot](#schemaagent_bot)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get an agent bot details

<a id="opIdget-details-of-a-single-account-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agent_bots/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/agent_bots/{id}`

Get the details of an agent bot in the account

<h3 id="get-an-agent-bot-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|The ID of the agentbot to be updated|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-an-agent-bot-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent_bot](#schemaagent_bot)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given agent bot ID does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete an AgentBot

<a id="opIddelete-an-account-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agent_bots/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/agent_bots/{id}`

Delete an AgentBot from the account

<h3 id="delete-an-agentbot-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|The ID of the agentbot to be updated|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-an-agentbot-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The agent bot does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update an agent bot

<a id="opIdupdate-an-account-agent-bot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agent_bots/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Agent Bot",
    "description": "This is a sample agent bot",
    "outgoing_url": "https://example.com/webhook",
    "avatar": "string",
    "avatar_url": "https://example.com/avatar.png",
    "bot_type": 0,
    "bot_config": {}
  }'
```

`PATCH /api/v1/accounts/{account_id}/agent_bots/{id}`

Update an agent bot's attributes

> Body parameter

```json
{
  "name": "My Agent Bot",
  "description": "This is a sample agent bot",
  "outgoing_url": "https://example.com/webhook",
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png",
  "bot_type": 0,
  "bot_config": {}
}
```

<h3 id="update-an-agent-bot-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|The ID of the agentbot to be updated|
|body|body|[agent_bot_create_update_payload](#schemaagent_bot_create_update_payload)|true|none|
|» name|body|string|false|The name of the agent bot|
|» description|body|string|false|The description of the agent bot|
|» outgoing_url|body|string|false|The webhook URL for the bot|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» avatar_url|body|string|false|The url to a jpeg, png file for the agent bot avatar|
|» bot_type|body|integer|false|The type of the bot (0 for webhook)|
|» bot_config|body|object|false|The configuration for the bot|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-an-agent-bot-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent_bot](#schemaagent_bot)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-agents">Agents</h1>

Agent management APIs

## List Agents in Account

<a id="opIdget-account-agents"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/agents`

Get Details of Agents in an Account

<h3 id="list-agents-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "account_id": 0,
    "availability_status": "online",
    "auto_offline": true,
    "confirmed": true,
    "email": "string",
    "available_name": "string",
    "name": "string",
    "role": "agent",
    "thumbnail": "string",
    "custom_role_id": 0
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-agents-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<h3 id="list-agents-in-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a New Agent

<a id="opIdadd-new-agent-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@acme.inc",
    "role": "agent",
    "availability": "online",
    "auto_offline": true
  }'
```

`POST /api/v1/accounts/{account_id}/agents`

Add a new Agent to Account

> Body parameter

```json
{
  "name": "John Doe",
  "email": "john.doe@acme.inc",
  "role": "agent",
  "availability": "online",
  "auto_offline": true
}
```

<h3 id="add-a-new-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[agent_create_payload](#schemaagent_create_payload)|true|none|
|» name|body|string|true|Full Name of the agent|
|» email|body|string|true|Email of the Agent|
|» role|body|string|true|Whether its administrator or agent|
|» availability|body|string|false|The configured availability of the agent.|
|» auto_offline|body|boolean|false|Whether the agent is automatically marked offline when they are away.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|agent|
|» role|administrator|
|» availability|online|
|» availability|busy|
|» availability|offline|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "account_id": 0,
  "availability_status": "online",
  "auto_offline": true,
  "confirmed": true,
  "email": "string",
  "available_name": "string",
  "name": "string",
  "role": "agent",
  "thumbnail": "string",
  "custom_role_id": 0
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent](#schemaagent)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Remove an Agent from Account

<a id="opIddelete-agent-from-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agents/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/agents/{id}`

Remove an Agent from Account

<h3 id="remove-an-agent-from-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the agent to be deleted.|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="remove-an-agent-from-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Agent not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update Agent in Account

<a id="opIdupdate-agent-in-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/agents/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "agent",
    "availability": "online",
    "auto_offline": true
  }'
```

`PATCH /api/v1/accounts/{account_id}/agents/{id}`

Update an Agent in Account

> Body parameter

```json
{
  "role": "agent",
  "availability": "online",
  "auto_offline": true
}
```

<h3 id="update-agent-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the agent to be updated.|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[agent_update_payload](#schemaagent_update_payload)|true|none|
|» role|body|string|true|Whether its administrator or agent|
|» availability|body|string|false|The configured availability of the agent.|
|» auto_offline|body|boolean|false|Whether the agent is automatically marked offline when they are away.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|agent|
|» role|administrator|
|» availability|online|
|» availability|busy|
|» availability|offline|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "account_id": 0,
  "availability_status": "online",
  "auto_offline": true,
  "confirmed": true,
  "email": "string",
  "available_name": "string",
  "name": "string",
  "role": "agent",
  "thumbnail": "string",
  "custom_role_id": 0
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-agent-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent](#schemaagent)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Agent not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-campaigns">Campaigns</h1>

Create, schedule, and manage campaigns. Requires an account administrator and API access enabled for the account.

## List campaigns

<a id="opIdlist-campaigns"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/campaigns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/campaigns`

List all campaigns in the account. The response is an unpaginated array. Requires an account administrator and API access enabled for the account.

<h3 id="list-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "description": "string",
    "account_id": 0,
    "inbox": {
      "id": 0,
      "name": "string",
      "website_url": "string",
      "page_id": "string",
      "instagram_id": "string",
      "business_id": "string",
      "provider_name": "string",
      "profile_id": "string",
      "line_channel_id": "string",
      "email": "string",
      "bot_name": "string",
      "inbox_identifier": "string",
      "channel_type": "string",
      "avatar_url": "string",
      "widget_color": "string",
      "website_token": "string",
      "enable_auto_assignment": true,
      "web_widget_script": "string",
      "welcome_title": "string",
      "welcome_tagline": "string",
      "greeting_enabled": true,
      "greeting_message": "string",
      "channel_id": 0,
      "working_hours_enabled": true,
      "enable_email_collect": true,
      "csat_survey_enabled": true,
      "auto_assignment_config": {},
      "out_of_office_message": "string",
      "working_hours": [
        {
          "day_of_week": 0,
          "closed_all_day": true,
          "open_hour": 0,
          "open_minutes": 0,
          "close_hour": 0,
          "close_minutes": 0,
          "open_all_day": true
        }
      ],
      "timezone": "string",
      "callback_webhook_url": "string",
      "allow_messages_after_resolved": true,
      "lock_to_single_conversation": true,
      "sender_name_type": "string",
      "business_name": "string",
      "branded_email_layout": "string",
      "hmac_mandatory": true,
      "selected_feature_flags": [
        "string"
      ],
      "reply_time": "string",
      "messaging_service_sid": "string",
      "phone_number": "string",
      "medium": "string",
      "provider": "string"
    },
    "sender": {},
    "message": "string",
    "template_params": {},
    "campaign_status": "active",
    "campaign_type": "ongoing",
    "enabled": true,
    "scheduled_at": 0,
    "started_at": 0,
    "completed_at": 0,
    "audience": [
      {
        "type": "string",
        "id": 0
      }
    ],
    "trigger_rules": {},
    "trigger_only_during_business_hours": true,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Authentication failed or the user is not an account administrator|None|
|403|Forbidden|API access is disabled for the account|None|

<h3 id="list-campaigns-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[campaign](#schemacampaign)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create a campaign

<a id="opIdcreate-campaign"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/campaigns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "campaign": {
      "title": "January announcement",
      "inbox_id": 12,
      "message": "Our January offers are here!",
      "scheduled_at": "2027-01-15T10:00:00Z",
      "audience": [
        {
          "type": "Label",
          "id": 5
        }
      ]
    }
  }'
```

`POST /api/v1/accounts/{account_id}/campaigns`

Create a campaign. For a supported messaging inbox, provide scheduled_at to schedule a one-off campaign; omitting it makes the campaign eligible for the next scheduler run. Website campaigns use trigger_rules instead. Channel-specific campaign availability and requirements still apply. One-off campaigns require at least one audience label for delivery. WhatsApp campaigns also require template_params with the selected template name, language, and any variable values. A successful creation response does not confirm delivery. Requires an account administrator and API access enabled for the account.

> Body parameter

```json
{
  "campaign": {
    "title": "January announcement",
    "inbox_id": 12,
    "message": "Our January offers are here!",
    "scheduled_at": "2027-01-15T10:00:00Z",
    "audience": [
      {
        "type": "Label",
        "id": 5
      }
    ]
  }
}
```

<h3 id="create-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[campaign_create_payload](#schemacampaign_create_payload)|true|none|
|» campaign|body|object|true|Choose the variant matching the inbox referenced by inbox_id. The channel type is stored on the inbox and cannot be inferred from this request by a schema validator. These variants describe the inputs needed for delivery; creation can accept incomplete inputs without guaranteeing that the campaign will send.|
|» » title|body|string|true|Campaign title.|
|» » description|body|string \| null|false|Internal description of the campaign.|
|» » inbox_id|body|integer|true|ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.|
|» » sender_id|body|integer \| null|false|ID of a user in this account to use as the campaign sender.|
|» » message|body|string|true|Campaign message content.|
|» » enabled|body|boolean|false|Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.|
|» » scheduled_at|body|string(date-time)|false|Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.|
|» » audience|body|[object]|false|Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.|
|» » » type|body|string|true|none|
|» » » id|body|integer|true|ID of a label in this account.|
|» » trigger_rules|body|object|false|Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.|
|» » trigger_only_during_business_hours|body|boolean|false|Restrict an ongoing website campaign to inbox business hours.|
|» » template_params|body|[campaign_whatsapp_template_params](#schemacampaign_whatsapp_template_params)|false|none|
|» » *anyOf*|body|object|false|For a Website inbox, supply URL trigger rules. An audience is not required.|
|» » trigger_rules|body|object|true|none|
|» » » url|body|string(uri)|true|none|
|» » *anyOf*|body|object|false|For an SMS or Twilio SMS inbox, supply at least one audience label.|
|» » *anyOf*|body|object|false|For a WhatsApp Cloud inbox with campaigns enabled, supply audience labels and template parameters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|Label|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "account_id": 0,
  "inbox": {
    "id": 0,
    "name": "string",
    "website_url": "string",
    "page_id": "string",
    "instagram_id": "string",
    "business_id": "string",
    "provider_name": "string",
    "profile_id": "string",
    "line_channel_id": "string",
    "email": "string",
    "bot_name": "string",
    "inbox_identifier": "string",
    "channel_type": "string",
    "avatar_url": "string",
    "widget_color": "string",
    "website_token": "string",
    "enable_auto_assignment": true,
    "web_widget_script": "string",
    "welcome_title": "string",
    "welcome_tagline": "string",
    "greeting_enabled": true,
    "greeting_message": "string",
    "channel_id": 0,
    "working_hours_enabled": true,
    "enable_email_collect": true,
    "csat_survey_enabled": true,
    "auto_assignment_config": {},
    "out_of_office_message": "string",
    "working_hours": [
      {
        "day_of_week": 0,
        "closed_all_day": true,
        "open_hour": 0,
        "open_minutes": 0,
        "close_hour": 0,
        "close_minutes": 0,
        "open_all_day": true
      }
    ],
    "timezone": "string",
    "callback_webhook_url": "string",
    "allow_messages_after_resolved": true,
    "lock_to_single_conversation": true,
    "sender_name_type": "string",
    "business_name": "string",
    "branded_email_layout": "string",
    "hmac_mandatory": true,
    "selected_feature_flags": [
      "string"
    ],
    "reply_time": "string",
    "messaging_service_sid": "string",
    "phone_number": "string",
    "medium": "string",
    "provider": "string"
  },
  "sender": {},
  "message": "string",
  "template_params": {},
  "campaign_status": "active",
  "campaign_type": "ongoing",
  "enabled": true,
  "scheduled_at": 0,
  "started_at": 0,
  "completed_at": 0,
  "audience": [
    {
      "type": "string",
      "id": 0
    }
  ],
  "trigger_rules": {},
  "trigger_only_during_business_hours": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[campaign](#schemacampaign)|
|401|Unauthorized|Authentication failed or the user is not an account administrator|None|
|403|Forbidden|API access is disabled for the account|None|
|422|Unprocessable Entity|Campaign validation failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get a campaign

<a id="opIdget-campaign"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/campaigns/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/campaigns/{id}`

Retrieve a campaign using its account-scoped ID. Requires an account administrator and API access enabled for the account.

<h3 id="get-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|Account-scoped campaign ID returned by the campaign API.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "account_id": 0,
  "inbox": {
    "id": 0,
    "name": "string",
    "website_url": "string",
    "page_id": "string",
    "instagram_id": "string",
    "business_id": "string",
    "provider_name": "string",
    "profile_id": "string",
    "line_channel_id": "string",
    "email": "string",
    "bot_name": "string",
    "inbox_identifier": "string",
    "channel_type": "string",
    "avatar_url": "string",
    "widget_color": "string",
    "website_token": "string",
    "enable_auto_assignment": true,
    "web_widget_script": "string",
    "welcome_title": "string",
    "welcome_tagline": "string",
    "greeting_enabled": true,
    "greeting_message": "string",
    "channel_id": 0,
    "working_hours_enabled": true,
    "enable_email_collect": true,
    "csat_survey_enabled": true,
    "auto_assignment_config": {},
    "out_of_office_message": "string",
    "working_hours": [
      {
        "day_of_week": 0,
        "closed_all_day": true,
        "open_hour": 0,
        "open_minutes": 0,
        "close_hour": 0,
        "close_minutes": 0,
        "open_all_day": true
      }
    ],
    "timezone": "string",
    "callback_webhook_url": "string",
    "allow_messages_after_resolved": true,
    "lock_to_single_conversation": true,
    "sender_name_type": "string",
    "business_name": "string",
    "branded_email_layout": "string",
    "hmac_mandatory": true,
    "selected_feature_flags": [
      "string"
    ],
    "reply_time": "string",
    "messaging_service_sid": "string",
    "phone_number": "string",
    "medium": "string",
    "provider": "string"
  },
  "sender": {},
  "message": "string",
  "template_params": {},
  "campaign_status": "active",
  "campaign_type": "ongoing",
  "enabled": true,
  "scheduled_at": 0,
  "started_at": 0,
  "completed_at": 0,
  "audience": [
    {
      "type": "string",
      "id": 0
    }
  ],
  "trigger_rules": {},
  "trigger_only_during_business_hours": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[campaign](#schemacampaign)|
|401|Unauthorized|Authentication failed or the user is not an account administrator|None|
|403|Forbidden|API access is disabled for the account|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete a campaign

<a id="opIddelete-campaign"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/campaigns/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/campaigns/{id}`

Delete a campaign from the account. Requires an account administrator and API access enabled for the account.

<h3 id="delete-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|Account-scoped campaign ID returned by the campaign API.|

<h3 id="delete-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Authentication failed or the user is not an account administrator|None|
|403|Forbidden|API access is disabled for the account|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update a campaign

<a id="opIdupdate-campaign"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/campaigns/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "campaign": {
      "title": "string",
      "description": "string",
      "inbox_id": 0,
      "sender_id": 0,
      "message": "string",
      "enabled": true,
      "scheduled_at": "2027-01-15T10:00:00Z",
      "audience": [
        {
          "type": "Label",
          "id": 0
        }
      ],
      "trigger_rules": {
        "url": "https://example.com/pricing",
        "time_on_page": 10
      },
      "trigger_only_during_business_hours": true,
      "template_params": {
        "name": "string",
        "language": "en",
        "namespace": "string",
        "category": "string",
        "processed_params": {
          "body": {
            "1": "{{ contact.name }}"
          }
        }
      }
    }
  }'
```

`PATCH /api/v1/accounts/{account_id}/campaigns/{id}`

Update campaign fields, including scheduled_at to reschedule an active one-off campaign. Completed campaigns cannot be updated. Requires an account administrator and API access enabled for the account.

> Body parameter

```json
{
  "campaign": {
    "title": "string",
    "description": "string",
    "inbox_id": 0,
    "sender_id": 0,
    "message": "string",
    "enabled": true,
    "scheduled_at": "2027-01-15T10:00:00Z",
    "audience": [
      {
        "type": "Label",
        "id": 0
      }
    ],
    "trigger_rules": {
      "url": "https://example.com/pricing",
      "time_on_page": 10
    },
    "trigger_only_during_business_hours": true,
    "template_params": {
      "name": "string",
      "language": "en",
      "namespace": "string",
      "category": "string",
      "processed_params": {
        "body": {
          "1": "{{ contact.name }}"
        }
      }
    }
  }
}
```

<h3 id="update-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|Account-scoped campaign ID returned by the campaign API.|
|body|body|[campaign_update_payload](#schemacampaign_update_payload)|true|none|
|» campaign|body|object|true|none|
|» » title|body|string|false|Campaign title.|
|» » description|body|string \| null|false|Internal description of the campaign.|
|» » inbox_id|body|integer|false|ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.|
|» » sender_id|body|integer \| null|false|ID of a user in this account to use as the campaign sender.|
|» » message|body|string|false|Campaign message content.|
|» » enabled|body|boolean|false|Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.|
|» » scheduled_at|body|string(date-time)|false|Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.|
|» » audience|body|[object]|false|Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.|
|» » » type|body|string|true|none|
|» » » id|body|integer|true|ID of a label in this account.|
|» » trigger_rules|body|object|false|Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.|
|» » trigger_only_during_business_hours|body|boolean|false|Restrict an ongoing website campaign to inbox business hours.|
|» » template_params|body|[campaign_whatsapp_template_params](#schemacampaign_whatsapp_template_params)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|Label|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "account_id": 0,
  "inbox": {
    "id": 0,
    "name": "string",
    "website_url": "string",
    "page_id": "string",
    "instagram_id": "string",
    "business_id": "string",
    "provider_name": "string",
    "profile_id": "string",
    "line_channel_id": "string",
    "email": "string",
    "bot_name": "string",
    "inbox_identifier": "string",
    "channel_type": "string",
    "avatar_url": "string",
    "widget_color": "string",
    "website_token": "string",
    "enable_auto_assignment": true,
    "web_widget_script": "string",
    "welcome_title": "string",
    "welcome_tagline": "string",
    "greeting_enabled": true,
    "greeting_message": "string",
    "channel_id": 0,
    "working_hours_enabled": true,
    "enable_email_collect": true,
    "csat_survey_enabled": true,
    "auto_assignment_config": {},
    "out_of_office_message": "string",
    "working_hours": [
      {
        "day_of_week": 0,
        "closed_all_day": true,
        "open_hour": 0,
        "open_minutes": 0,
        "close_hour": 0,
        "close_minutes": 0,
        "open_all_day": true
      }
    ],
    "timezone": "string",
    "callback_webhook_url": "string",
    "allow_messages_after_resolved": true,
    "lock_to_single_conversation": true,
    "sender_name_type": "string",
    "business_name": "string",
    "branded_email_layout": "string",
    "hmac_mandatory": true,
    "selected_feature_flags": [
      "string"
    ],
    "reply_time": "string",
    "messaging_service_sid": "string",
    "phone_number": "string",
    "medium": "string",
    "provider": "string"
  },
  "sender": {},
  "message": "string",
  "template_params": {},
  "campaign_status": "active",
  "campaign_type": "ongoing",
  "enabled": true,
  "scheduled_at": 0,
  "started_at": 0,
  "completed_at": 0,
  "audience": [
    {
      "type": "string",
      "id": 0
    }
  ],
  "trigger_rules": {},
  "trigger_only_during_business_hours": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[campaign](#schemacampaign)|
|401|Unauthorized|Authentication failed or the user is not an account administrator|None|
|403|Forbidden|API access is disabled for the account|None|
|422|Unprocessable Entity|Campaign validation failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-canned-responses">Canned Responses</h1>

Pre-defined responses for common queries

## List all Canned Responses in an Account

<a id="opIdget-account-canned-response"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/canned_responses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/canned_responses`

Get Details of Canned Responses in an Account

<h3 id="list-all-canned-responses-in-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "account_id": 0,
    "short_code": "string",
    "content": "string",
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-canned-responses-in-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-canned-responses-in-an-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[canned_response](#schemacanned_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a New Canned Response

<a id="opIdadd-new-canned-response-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/canned_responses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "Hello, {{contact.name}}! Welcome to our service.",
    "short_code": "welcome"
  }'
```

`POST /api/v1/accounts/{account_id}/canned_responses`

Add a new Canned Response to Account

> Body parameter

```json
{
  "content": "Hello, {{contact.name}}! Welcome to our service.",
  "short_code": "welcome"
}
```

<h3 id="add-a-new-canned-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[canned_response_create_update_payload](#schemacanned_response_create_update_payload)|true|none|
|» content|body|string|false|Message content for canned response|
|» short_code|body|string|false|Short Code for quick access of the canned response|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "account_id": 0,
  "short_code": "string",
  "content": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-canned-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[canned_response](#schemacanned_response)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Remove a Canned Response from Account

<a id="opIddelete-canned-response-from-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/canned_responses/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/canned_responses/{id}`

Remove a Canned Response from Account

<h3 id="remove-a-canned-response-from-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the canned response to be deleted|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="remove-a-canned-response-from-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Canned Response not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update Canned Response in Account

<a id="opIdupdate-canned-response-in-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/canned_responses/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "Hello, {{contact.name}}! Welcome to our service.",
    "short_code": "welcome"
  }'
```

`PATCH /api/v1/accounts/{account_id}/canned_responses/{id}`

Update a Canned Response in Account

> Body parameter

```json
{
  "content": "Hello, {{contact.name}}! Welcome to our service.",
  "short_code": "welcome"
}
```

<h3 id="update-canned-response-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the canned response to be updated.|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[canned_response_create_update_payload](#schemacanned_response_create_update_payload)|true|none|
|» content|body|string|false|Message content for canned response|
|» short_code|body|string|false|Short Code for quick access of the canned response|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "account_id": 0,
  "short_code": "string",
  "content": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-canned-response-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[canned_response](#schemacanned_response)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Agent not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-contacts">Contacts</h1>

Contact management APIs

## List Contacts

<a id="opIdcontactList"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/contacts`

Listing all the resolved contacts with pagination (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number

<h3 id="list-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|sort|query|string|false|The attribute by which list should be sorted|
|page|query|integer|false|The page parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|name|
|sort|email|
|sort|phone_number|
|sort|last_activity_at|
|sort|-name|
|sort|-email|
|sort|-phone_number|
|sort|-last_activity_at|

> Example responses

> 200 Response

```json
{
  "meta": {
    "count": 0,
    "current_page": "string"
  },
  "payload": [
    {
      "additional_attributes": {
        "city": "string",
        "country": "string",
        "country_code": "string",
        "created_at_ip": "string"
      },
      "availability_status": "online",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {},
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contacts_list_response](#schemacontacts_list_response)|
|400|Bad Request|Bad Request Error|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create Contact

<a id="opIdcontactCreate"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inbox_id": 1,
    "name": "Alice",
    "email": "alice@acme.inc",
    "blocked": false,
    "phone_number": "+123456789",
    "avatar": "string",
    "avatar_url": "https://example.com/avatar.png",
    "identifier": "1234567890",
    "additional_attributes": {
      "type": "customer",
      "age": 30
    },
    "custom_attributes": {}
  }'
```

`POST /api/v1/accounts/{account_id}/contacts`

Create a new Contact

> Body parameter

```json
{
  "inbox_id": 1,
  "name": "Alice",
  "email": "alice@acme.inc",
  "blocked": false,
  "phone_number": "+123456789",
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png",
  "identifier": "1234567890",
  "additional_attributes": {
    "type": "customer",
    "age": 30
  },
  "custom_attributes": {}
}
```

<h3 id="create-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[contact_create_payload](#schemacontact_create_payload)|true|none|
|» inbox_id|body|number|true|ID of the inbox to which the contact belongs|
|» name|body|string|false|name of the contact|
|» email|body|string|false|email of the contact|
|» blocked|body|boolean|false|whether the contact is blocked or not|
|» phone_number|body|string|false|phone number of the contact|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» avatar_url|body|string|false|The url to a jpeg, png file for the contact avatar|
|» identifier|body|string|false|A unique identifier for the contact in external system|
|» additional_attributes|body|object|false|An object where you can store additional attributes for contact. example {"type":"customer", "age":30}|
|» custom_attributes|body|object|false|An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {
        "attribute_key": "attribute_value",
        "signed_up_at": "dd/mm/yyyy"
      },
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ],
  "id": 0,
  "availability_status": "online"
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[extended_contact](#schemaextended_contact)|
|400|Bad Request|Bad Request Error|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Show Contact

<a id="opIdcontactDetails"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/contacts/{id}`

Get a contact belonging to the account using ID

<h3 id="show-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the contact|

> Example responses

> 200 Response

```json
{
  "payload": {
    "additional_attributes": {
      "city": "string",
      "country": "string",
      "country_code": "string",
      "created_at_ip": "string"
    },
    "availability_status": "online",
    "email": "string",
    "id": 0,
    "name": "string",
    "phone_number": "string",
    "blocked": true,
    "identifier": "string",
    "thumbnail": "string",
    "custom_attributes": {},
    "last_activity_at": 0,
    "created_at": 0,
    "contact_inboxes": [
      {
        "source_id": "string",
        "inbox": {
          "id": 0,
          "avatar_url": "string",
          "channel_id": 0,
          "name": "string",
          "channel_type": "string",
          "provider": "string"
        }
      }
    ]
  }
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="show-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contact_show_response](#schemacontact_show_response)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Contact not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update Contact

<a id="opIdcontactUpdate"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Alice",
    "email": "alice@acme.inc",
    "blocked": false,
    "phone_number": "+123456789",
    "avatar": "string",
    "avatar_url": "https://example.com/avatar.png",
    "identifier": "1234567890",
    "additional_attributes": {
      "type": "customer",
      "age": 30
    },
    "custom_attributes": {}
  }'
```

`PUT /api/v1/accounts/{account_id}/contacts/{id}`

Update a contact belonging to the account using ID

> Body parameter

```json
{
  "name": "Alice",
  "email": "alice@acme.inc",
  "blocked": false,
  "phone_number": "+123456789",
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png",
  "identifier": "1234567890",
  "additional_attributes": {
    "type": "customer",
    "age": 30
  },
  "custom_attributes": {}
}
```

<h3 id="update-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the contact|
|body|body|[contact_update_payload](#schemacontact_update_payload)|true|none|
|» name|body|string|false|name of the contact|
|» email|body|string|false|email of the contact|
|» blocked|body|boolean|false|whether the contact is blocked or not|
|» phone_number|body|string|false|phone number of the contact|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» avatar_url|body|string|false|The url to a jpeg, png file for the contact avatar|
|» identifier|body|string|false|A unique identifier for the contact in external system|
|» additional_attributes|body|object|false|An object where you can store additional attributes for contact. example {"type":"customer", "age":30}|
|» custom_attributes|body|object|false|An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.|

> Example responses

> 204 Response

```json
{
  "id": 0,
  "payload": [
    {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {
        "attribute_key": "attribute_value",
        "signed_up_at": "dd/mm/yyyy"
      },
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[contact_base](#schemacontact_base)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Contact not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete Contact

<a id="opIdcontactDelete"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/contacts/{id}`

Delete a contact belonging to the account using ID

<h3 id="delete-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the contact|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Contact not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Contact Conversations

<a id="opIdcontactConversations"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/contacts/{id}/conversations`

Get conversations associated with that contact

<h3 id="contact-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|ID of the contact|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "messages": [
        {
          "id": 0,
          "content": "string",
          "account_id": 0,
          "inbox_id": 0,
          "conversation_id": 0,
          "message_type": 0,
          "created_at": 0,
          "updated_at": 0,
          "private": true,
          "status": "sent",
          "source_id": "string",
          "content_type": "text",
          "content_attributes": {},
          "sender_type": "Contact",
          "sender_id": 0,
          "external_source_ids": {},
          "additional_attributes": {},
          "processed_message_content": "string",
          "sentiment": {},
          "conversation": {},
          "attachment": {},
          "sender": {}
        }
      ],
      "account_id": 0,
      "uuid": "string",
      "additional_attributes": {},
      "agent_last_seen_at": 0,
      "assignee_last_seen_at": 0,
      "can_reply": true,
      "contact_last_seen_at": 0,
      "custom_attributes": {},
      "inbox_id": 0,
      "labels": [
        "string"
      ],
      "muted": true,
      "snoozed_until": 0,
      "status": "open",
      "created_at": 0,
      "updated_at": 0,
      "timestamp": 0,
      "first_reply_created_at": 0,
      "unread_count": 0,
      "last_non_activity_message": {
        "id": 0,
        "content": "string",
        "account_id": 0,
        "inbox_id": 0,
        "conversation_id": 0,
        "message_type": 0,
        "created_at": 0,
        "updated_at": 0,
        "private": true,
        "status": "sent",
        "source_id": "string",
        "content_type": "text",
        "content_attributes": {},
        "sender_type": "Contact",
        "sender_id": 0,
        "external_source_ids": {},
        "additional_attributes": {},
        "processed_message_content": "string",
        "sentiment": {},
        "conversation": {},
        "attachment": {},
        "sender": {}
      },
      "last_activity_at": 0,
      "priority": "string",
      "waiting_since": 0,
      "sla_policy_id": 0,
      "applied_sla": {},
      "sla_events": [
        {}
      ],
      "meta": {
        "sender": {
          "additional_attributes": {},
          "availability_status": "string",
          "email": "string",
          "id": 0,
          "name": "string",
          "phone_number": "string",
          "blocked": true,
          "identifier": "string",
          "thumbnail": "string",
          "custom_attributes": {},
          "last_activity_at": 0,
          "created_at": 0
        },
        "channel": "string",
        "assignee": {
          "id": 0,
          "access_token": "string",
          "account_id": 0,
          "available_name": "string",
          "avatar_url": "string",
          "confirmed": true,
          "display_name": "string",
          "message_signature": "string",
          "email": "string",
          "hmac_identifier": "string",
          "inviter_id": 0,
          "name": "string",
          "provider": "string",
          "pubsub_token": "string",
          "role": "agent",
          "ui_settings": {},
          "uid": "string",
          "type": "string",
          "custom_attributes": {},
          "accounts": [
            {
              "id": 0,
              "name": "string",
              "status": "string",
              "active_at": "1970-01-01T00:00:00Z",
              "role": "administrator",
              "permissions": [
                "string"
              ],
              "availability": "string",
              "availability_status": "string",
              "auto_offline": true,
              "custom_role_id": 0,
              "custom_role": {}
            }
          ]
        },
        "hmac_verified": true
      }
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="contact-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contact_conversations_response](#schemacontact_conversations_response)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Contact not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Search Contacts

<a id="opIdcontactSearch"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/contacts/search`

Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number

<h3 id="search-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|q|query|string|false|Search using contact `name`, `identifier`, `email` or `phone number`|
|sort|query|string|false|The attribute by which list should be sorted|
|page|query|integer|false|The page parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|name|
|sort|email|
|sort|phone_number|
|sort|last_activity_at|
|sort|-name|
|sort|-email|
|sort|-phone_number|
|sort|-last_activity_at|

> Example responses

> 200 Response

```json
{
  "meta": {
    "count": 0,
    "current_page": "string"
  },
  "payload": [
    {
      "additional_attributes": {
        "city": "string",
        "country": "string",
        "country_code": "string",
        "created_at_ip": "string"
      },
      "availability_status": "online",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {},
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="search-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contacts_list_response](#schemacontacts_list_response)|
|401|Unauthorized|Authentication error|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Contact Filter

<a id="opIdcontactFilter"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/filter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": [
      {
        "attribute_key": "name",
        "filter_operator": "equal_to",
        "values": [
          "en"
        ],
        "query_operator": "AND"
      },
      {
        "attribute_key": "country_code",
        "filter_operator": "equal_to",
        "values": [
          "us"
        ],
        "query_operator": null
      }
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/contacts/filter`

Filter contacts with custom filter options and pagination

> Body parameter

```json
{
  "payload": [
    {
      "attribute_key": "name",
      "filter_operator": "equal_to",
      "values": [
        "en"
      ],
      "query_operator": "AND"
    },
    {
      "attribute_key": "country_code",
      "filter_operator": "equal_to",
      "values": [
        "us"
      ],
      "query_operator": null
    }
  ]
}
```

<h3 id="contact-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|page|query|number|false|none|
|body|body|object|true|none|
|» payload|body|[object]|false|none|
|» » attribute_key|body|string|false|filter attribute name|
|» » filter_operator|body|string|false|filter operator name|
|» » values|body|[string]|false|array of the attribute values to filter|
|» » timezone|body|string|false|IANA timezone for created_at and last_activity_at date comparisons, including days_before. Omit to retain UTC behavior. Date-only custom attributes are not converted.|
|» » query_operator|body|string|false|query operator name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » filter_operator|equal_to|
|» » filter_operator|not_equal_to|
|» » filter_operator|contains|
|» » filter_operator|does_not_contain|
|» » query_operator|AND|
|» » query_operator|OR|

> Example responses

> 200 Response

```json
{
  "meta": {
    "count": 0,
    "current_page": "string"
  },
  "payload": [
    {
      "additional_attributes": {
        "city": "string",
        "country": "string",
        "country_code": "string",
        "created_at_ip": "string"
      },
      "availability_status": "online",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {},
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="contact-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contacts_list_response](#schemacontacts_list_response)|
|400|Bad Request|Bad Request Error|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create contact inbox

<a id="opIdcontactInboxCreation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0/contact_inboxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inbox_id": 1,
    "source_id": "string"
  }'
```

`POST /api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes`

Create a contact inbox record for an inbox

> Body parameter

```json
{
  "inbox_id": 1,
  "source_id": "string"
}
```

<h3 id="create-contact-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the contact|
|body|body|object|true|none|
|» inbox_id|body|number|true|The ID of the inbox|
|» source_id|body|string|false|Contact Inbox Source Id|

> Example responses

> 200 Response

```json
{
  "source_id": "string",
  "inbox": {
    "id": 0,
    "avatar_url": "string",
    "channel_id": 0,
    "name": "string",
    "channel_type": "string",
    "provider": "string"
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-contact-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contact_inboxes](#schemacontact_inboxes)|
|401|Unauthorized|Authentication error|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|Incorrect payload|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get Contactable Inboxes

<a id="opIdcontactableInboxesGet"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0/contactable_inboxes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes`

Get List of contactable Inboxes

<h3 id="get-contactable-inboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the contact|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "source_id": "string",
      "inbox": {
        "id": 0,
        "avatar_url": "string",
        "channel_id": 0,
        "name": "string",
        "channel_type": "string",
        "provider": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-contactable-inboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contactable_inboxes_response](#schemacontactable_inboxes_response)|
|401|Unauthorized|Authentication error|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|Incorrect payload|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Merge Contacts

<a id="opIdcontactMerge"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/actions/contact_merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "base_contact_id": 1,
    "mergee_contact_id": 2
  }'
```

`POST /api/v1/accounts/{account_id}/actions/contact_merge`

Merge two contacts into a single contact. The base contact remains and receives all
data from the mergee contact. After the merge, the mergee contact is permanently deleted.

This action is irreversible. All conversations, labels, and custom attributes from the
mergee contact will be moved to the base contact.


> Body parameter

```json
{
  "base_contact_id": 1,
  "mergee_contact_id": 2
}
```

<h3 id="merge-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|object|true|none|
|» base_contact_id|body|integer|true|ID of the contact that will remain after the merge and receive all data|
|» mergee_contact_id|body|integer|true|ID of the contact that will be merged into the base contact and deleted|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "payload": [
    {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {
        "attribute_key": "attribute_value",
        "signed_up_at": "dd/mm/yyyy"
      },
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="merge-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contacts merged successfully|[contact_base](#schemacontact_base)|
|400|Bad Request|Bad request - invalid contact IDs or contacts cannot be merged|[bad_request_error](#schemabad_request_error)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|One or both contacts not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-contact-labels">Contact Labels</h1>

Manage contact labels

## List Labels

<a id="opIdlist-all-labels-of-a-contact"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/contacts/{id}/labels`

Lists all the labels of a contact

<h3 id="list-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the contact|

> Example responses

> 200 Response

```json
{
  "payload": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contact_labels](#schemacontact_labels)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Contact not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add Labels

<a id="opIdcontact-add-labels"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/contacts/0/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": [
      "support",
      "billing"
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/contacts/{id}/labels`

Add labels to a contact. Note that this API would overwrite the existing list of labels associated to the conversation.

> Body parameter

```json
{
  "labels": [
    "support",
    "billing"
  ]
}
```

<h3 id="add-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the contact|
|body|body|object|true|none|
|» labels|body|[string]|true|Array of labels (comma-separated strings)|

> Example responses

> 200 Response

```json
{
  "payload": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[contact_labels](#schemacontact_labels)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Contact not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-conversation-assignments">Conversation Assignments</h1>

Manage conversation assignments

## Assign Conversation

<a id="opIdassign-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/assignments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assignee_id": 1,
    "team_id": 1
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments`

Assign a conversation to an agent or a team

> Body parameter

```json
{
  "assignee_id": 1,
  "team_id": 1
}
```

<h3 id="assign-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» assignee_id|body|number|false|Id of the assignee user|
|» team_id|body|number|false|Id of the team. If the assignee_id is present, this param would be ignored|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "access_token": "string",
  "account_id": 0,
  "available_name": "string",
  "avatar_url": "string",
  "confirmed": true,
  "display_name": "string",
  "message_signature": "string",
  "email": "string",
  "hmac_identifier": "string",
  "inviter_id": 0,
  "name": "string",
  "provider": "string",
  "pubsub_token": "string",
  "role": "agent",
  "ui_settings": {},
  "uid": "string",
  "type": "string",
  "custom_attributes": {},
  "accounts": [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "role": "administrator",
      "permissions": [
        "string"
      ],
      "availability": "string",
      "availability_status": "string",
      "auto_offline": true,
      "custom_role_id": 0,
      "custom_role": {}
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="assign-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[user](#schemauser)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey, agentBotApiKey
</aside>

<h1 id="chatwoot-conversations">Conversations</h1>

Conversation management APIs

## Get Conversation Counts

<a id="opIdconversationListMeta"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/meta \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/conversations/meta`

Get open, unassigned and all Conversation counts

<h3 id="get-conversation-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Filter by conversation status.|
|q|query|string|false|Filters conversations with messages containing the search term|
|inbox_id|query|integer|false|none|
|team_id|query|integer|false|none|
|labels|query|[string]|false|none|
|account_id|path|integer|true|The numeric ID of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|all|
|status|open|
|status|resolved|
|status|pending|
|status|snoozed|

> Example responses

> 200 Response

```json
{
  "meta": {
    "mine_count": 0,
    "unassigned_count": 0,
    "assigned_count": 0,
    "all_count": 0
  }
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-conversation-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request Error|[bad_request_error](#schemabad_request_error)|

<h3 id="get-conversation-counts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» mine_count|number|false|none|none|
|» unassigned_count|number|false|none|none|
|» assigned_count|number|false|none|none|
|» all_count|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Conversations List

<a id="opIdconversationList"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/conversations`

List all the conversations with pagination

<h3 id="conversations-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assignee_type|query|string|false|Filter conversations by assignee type.|
|status|query|string|false|Filter by conversation status.|
|q|query|string|false|Filters conversations with messages containing the search term|
|inbox_id|query|integer|false|none|
|team_id|query|integer|false|none|
|labels|query|[string]|false|none|
|page|query|integer|false|paginate through conversations|
|account_id|path|integer|true|The numeric ID of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|assignee_type|me|
|assignee_type|unassigned|
|assignee_type|all|
|assignee_type|assigned|
|status|all|
|status|open|
|status|resolved|
|status|pending|
|status|snoozed|

> Example responses

> 200 Response

```json
{
  "data": {
    "meta": {
      "mine_count": 0,
      "unassigned_count": 0,
      "assigned_count": 0,
      "all_count": 0
    },
    "payload": [
      {
        "id": 0,
        "messages": [
          {
            "id": 0,
            "content": "string",
            "account_id": 0,
            "inbox_id": 0,
            "conversation_id": 0,
            "message_type": 0,
            "created_at": 0,
            "updated_at": 0,
            "private": true,
            "status": "sent",
            "source_id": "string",
            "content_type": "text",
            "content_attributes": {},
            "sender_type": "Contact",
            "sender_id": 0,
            "external_source_ids": {},
            "additional_attributes": {},
            "processed_message_content": "string",
            "sentiment": {},
            "conversation": {},
            "attachment": {},
            "sender": {}
          }
        ],
        "account_id": 0,
        "uuid": "string",
        "additional_attributes": {},
        "agent_last_seen_at": 0,
        "assignee_last_seen_at": 0,
        "can_reply": true,
        "contact_last_seen_at": 0,
        "custom_attributes": {},
        "inbox_id": 0,
        "labels": [
          "string"
        ],
        "muted": true,
        "snoozed_until": 0,
        "status": "open",
        "created_at": 0,
        "updated_at": 0,
        "timestamp": 0,
        "first_reply_created_at": 0,
        "unread_count": 0,
        "last_non_activity_message": {
          "id": 0,
          "content": "string",
          "account_id": 0,
          "inbox_id": 0,
          "conversation_id": 0,
          "message_type": 0,
          "created_at": 0,
          "updated_at": 0,
          "private": true,
          "status": "sent",
          "source_id": "string",
          "content_type": "text",
          "content_attributes": {},
          "sender_type": "Contact",
          "sender_id": 0,
          "external_source_ids": {},
          "additional_attributes": {},
          "processed_message_content": "string",
          "sentiment": {},
          "conversation": {},
          "attachment": {},
          "sender": {}
        },
        "last_activity_at": 0,
        "priority": "string",
        "waiting_since": 0,
        "sla_policy_id": 0,
        "applied_sla": {},
        "sla_events": [
          {}
        ],
        "meta": {
          "sender": {
            "additional_attributes": {},
            "availability_status": "string",
            "email": "string",
            "id": 0,
            "name": "string",
            "phone_number": "string",
            "blocked": true,
            "identifier": "string",
            "thumbnail": "string",
            "custom_attributes": {},
            "last_activity_at": 0,
            "created_at": 0
          },
          "channel": "string",
          "assignee": {
            "id": 0,
            "access_token": "string",
            "account_id": 0,
            "available_name": "string",
            "avatar_url": "string",
            "confirmed": true,
            "display_name": "string",
            "message_signature": "string",
            "email": "string",
            "hmac_identifier": "string",
            "inviter_id": 0,
            "name": "string",
            "provider": "string",
            "pubsub_token": "string",
            "role": "agent",
            "ui_settings": {},
            "uid": "string",
            "type": "string",
            "custom_attributes": {},
            "accounts": [
              {
                "id": 0,
                "name": "string",
                "status": "string",
                "active_at": "1970-01-01T00:00:00Z",
                "role": "administrator",
                "permissions": [
                  "string"
                ],
                "availability": "string",
                "availability_status": "string",
                "auto_offline": true,
                "custom_role_id": 0,
                "custom_role": {}
              }
            ]
          },
          "hmac_verified": true
        }
      }
    ]
  }
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="conversations-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation_list](#schemaconversation_list)|
|400|Bad Request|Bad Request Error|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create New Conversation

<a id="opIdnewConversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "source_id": "1234567890",
    "inbox_id": 1,
    "contact_id": 1,
    "additional_attributes": {
      "browser": "Chrome",
      "browser_version": "89.0.4389.82",
      "os": "Windows",
      "os_version": "10"
    },
    "custom_attributes": {
      "attribute_key": "attribute_value",
      "priority_conversation_number": 3
    },
    "status": "open",
    "assignee_id": 1,
    "team_id": 1,
    "snoozed_until": "2030-07-21T17:32:28Z",
    "message": {
      "content": "Hello, how can I help you?",
      "template_params": {
        "name": "sample_issue_resolution",
        "category": "UTILITY",
        "language": "en_US",
        "processed_params": {
          "1": "Chatwoot"
        }
      }
    }
  }'
```

`POST /api/v1/accounts/{account_id}/conversations`

Creating a conversation in chatwoot requires a source id. 

 Learn more about source_id: https://www.chatwoot.com/hc/user-guide/articles/1677839703-how-to-create-an-api-channel-inbox#send-messages-to-the-api-channel

> Body parameter

```json
{
  "source_id": "1234567890",
  "inbox_id": 1,
  "contact_id": 1,
  "additional_attributes": {
    "browser": "Chrome",
    "browser_version": "89.0.4389.82",
    "os": "Windows",
    "os_version": "10"
  },
  "custom_attributes": {
    "attribute_key": "attribute_value",
    "priority_conversation_number": 3
  },
  "status": "open",
  "assignee_id": 1,
  "team_id": 1,
  "snoozed_until": "2030-07-21T17:32:28Z",
  "message": {
    "content": "Hello, how can I help you?",
    "template_params": {
      "name": "sample_issue_resolution",
      "category": "UTILITY",
      "language": "en_US",
      "processed_params": {
        "1": "Chatwoot"
      }
    }
  }
}
```

<h3 id="create-new-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[conversation_create_payload](#schemaconversation_create_payload)|true|none|
|» source_id|body|string|true|Conversation source id|
|» inbox_id|body|integer|false|Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email|
|» contact_id|body|integer|false|Contact Id for which conversation is created|
|» additional_attributes|body|object|false|Lets you specify attributes like browser information|
|» custom_attributes|body|object|false|The object to save custom attributes for conversation, accepts custom attributes key and value|
|» status|body|string|false|Specify the conversation whether it's pending, open, closed|
|» assignee_id|body|integer|false|Agent Id for assigning a conversation to an agent|
|» team_id|body|integer|false|Team Id for assigning a conversation to a team\|
|» snoozed_until|body|string(date-time)|false|Snoozed until date time|
|» message|body|object|false|The initial message to be sent to the conversation|
|» » content|body|string|true|The content of the message|
|» » template_params|body|object|false|The template params for the message in case of whatsapp Channel|
|» » » name|body|string|false|Name of the template|
|» » » category|body|string|false|Category of the template|
|» » » language|body|string|false|Language of the template|
|» » » processed_params|body|object|false|The processed param values for template variables in template|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|open|
|» status|resolved|
|» status|pending|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "account_id": 0,
  "inbox_id": 0
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-new-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<h3 id="create-new-conversation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|ID of the conversation|
|account_id|number|false|none|Account Id|
|inbox_id|number|false|none|ID of the inbox|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey, agentBotApiKey
</aside>

## Conversations Filter

<a id="opIdconversationFilter"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/filter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": [
      {
        "attribute_key": "browser_language",
        "filter_operator": "not_equal_to",
        "values": [
          "en"
        ],
        "query_operator": "AND"
      },
      {
        "attribute_key": "status",
        "filter_operator": "equal_to",
        "values": [
          "pending"
        ],
        "query_operator": null
      }
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/filter`

Filter conversations with custom filter options and pagination

> Body parameter

```json
{
  "payload": [
    {
      "attribute_key": "browser_language",
      "filter_operator": "not_equal_to",
      "values": [
        "en"
      ],
      "query_operator": "AND"
    },
    {
      "attribute_key": "status",
      "filter_operator": "equal_to",
      "values": [
        "pending"
      ],
      "query_operator": null
    }
  ]
}
```

<h3 id="conversations-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|none|
|sort_by|query|string|false|Sort filtered conversations using the same options as the conversation list.|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|object|true|none|
|» payload|body|[object]|false|none|
|» » attribute_key|body|string|false|filter attribute name|
|» » filter_operator|body|string|false|filter operator name|
|» » values|body|[string]|false|array of the attribute values to filter|
|» » timezone|body|string|false|IANA timezone for created_at and last_activity_at date comparisons, including days_before. Omit to retain UTC behavior. Date-only custom attributes are not converted.|
|» » query_operator|body|string|false|query operator name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by|last_activity_at_asc|
|sort_by|last_activity_at_desc|
|sort_by|created_at_asc|
|sort_by|created_at_desc|
|sort_by|priority_asc|
|sort_by|priority_desc|
|sort_by|waiting_since_asc|
|sort_by|waiting_since_desc|
|sort_by|priority_desc_created_at_asc|
|sort_by|unread|
|» » filter_operator|equal_to|
|» » filter_operator|not_equal_to|
|» » filter_operator|contains|
|» » filter_operator|does_not_contain|
|» » query_operator|AND|
|» » query_operator|OR|

> Example responses

> 200 Response

```json
{
  "data": {
    "meta": {
      "mine_count": 0,
      "unassigned_count": 0,
      "assigned_count": 0,
      "all_count": 0
    },
    "payload": [
      {
        "id": 0,
        "messages": [
          {
            "id": 0,
            "content": "string",
            "account_id": 0,
            "inbox_id": 0,
            "conversation_id": 0,
            "message_type": 0,
            "created_at": 0,
            "updated_at": 0,
            "private": true,
            "status": "sent",
            "source_id": "string",
            "content_type": "text",
            "content_attributes": {},
            "sender_type": "Contact",
            "sender_id": 0,
            "external_source_ids": {},
            "additional_attributes": {},
            "processed_message_content": "string",
            "sentiment": {},
            "conversation": {},
            "attachment": {},
            "sender": {}
          }
        ],
        "account_id": 0,
        "uuid": "string",
        "additional_attributes": {},
        "agent_last_seen_at": 0,
        "assignee_last_seen_at": 0,
        "can_reply": true,
        "contact_last_seen_at": 0,
        "custom_attributes": {},
        "inbox_id": 0,
        "labels": [
          "string"
        ],
        "muted": true,
        "snoozed_until": 0,
        "status": "open",
        "created_at": 0,
        "updated_at": 0,
        "timestamp": 0,
        "first_reply_created_at": 0,
        "unread_count": 0,
        "last_non_activity_message": {
          "id": 0,
          "content": "string",
          "account_id": 0,
          "inbox_id": 0,
          "conversation_id": 0,
          "message_type": 0,
          "created_at": 0,
          "updated_at": 0,
          "private": true,
          "status": "sent",
          "source_id": "string",
          "content_type": "text",
          "content_attributes": {},
          "sender_type": "Contact",
          "sender_id": 0,
          "external_source_ids": {},
          "additional_attributes": {},
          "processed_message_content": "string",
          "sentiment": {},
          "conversation": {},
          "attachment": {},
          "sender": {}
        },
        "last_activity_at": 0,
        "priority": "string",
        "waiting_since": 0,
        "sla_policy_id": 0,
        "applied_sla": {},
        "sla_events": [
          {}
        ],
        "meta": {
          "sender": {
            "additional_attributes": {},
            "availability_status": "string",
            "email": "string",
            "id": 0,
            "name": "string",
            "phone_number": "string",
            "blocked": true,
            "identifier": "string",
            "thumbnail": "string",
            "custom_attributes": {},
            "last_activity_at": 0,
            "created_at": 0
          },
          "channel": "string",
          "assignee": {
            "id": 0,
            "access_token": "string",
            "account_id": 0,
            "available_name": "string",
            "avatar_url": "string",
            "confirmed": true,
            "display_name": "string",
            "message_signature": "string",
            "email": "string",
            "hmac_identifier": "string",
            "inviter_id": 0,
            "name": "string",
            "provider": "string",
            "pubsub_token": "string",
            "role": "agent",
            "ui_settings": {},
            "uid": "string",
            "type": "string",
            "custom_attributes": {},
            "accounts": [
              {
                "id": 0,
                "name": "string",
                "status": "string",
                "active_at": "1970-01-01T00:00:00Z",
                "role": "administrator",
                "permissions": [
                  "string"
                ],
                "availability": "string",
                "availability_status": "string",
                "auto_offline": true,
                "custom_role_id": 0,
                "custom_role": {}
              }
            ]
          },
          "hmac_verified": true
        }
      }
    ]
  }
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="conversations-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation_list](#schemaconversation_list)|
|400|Bad Request|Bad Request Error|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Conversation Details

<a id="opIdget-details-of-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/conversations/{conversation_id}`

Get all details regarding a conversation with all messages in the conversation

<h3 id="conversation-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "account_id": 0,
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "created_at": 0,
      "updated_at": 0,
      "private": true,
      "status": "sent",
      "source_id": "string",
      "content_type": "text",
      "content_attributes": {},
      "sender_type": "Contact",
      "sender_id": 0,
      "external_source_ids": {},
      "additional_attributes": {},
      "processed_message_content": "string",
      "sentiment": {},
      "conversation": {},
      "attachment": {},
      "sender": {}
    }
  ],
  "account_id": 0,
  "uuid": "string",
  "additional_attributes": {},
  "agent_last_seen_at": 0,
  "assignee_last_seen_at": 0,
  "can_reply": true,
  "contact_last_seen_at": 0,
  "custom_attributes": {},
  "inbox_id": 0,
  "labels": [
    "string"
  ],
  "muted": true,
  "snoozed_until": 0,
  "status": "open",
  "created_at": 0,
  "updated_at": 0,
  "timestamp": 0,
  "first_reply_created_at": 0,
  "unread_count": 0,
  "last_non_activity_message": {
    "id": 0,
    "content": "string",
    "account_id": 0,
    "inbox_id": 0,
    "conversation_id": 0,
    "message_type": 0,
    "created_at": 0,
    "updated_at": 0,
    "private": true,
    "status": "sent",
    "source_id": "string",
    "content_type": "text",
    "content_attributes": {},
    "sender_type": "Contact",
    "sender_id": 0,
    "external_source_ids": {},
    "additional_attributes": {},
    "processed_message_content": "string",
    "sentiment": {},
    "conversation": {},
    "attachment": {},
    "sender": {}
  },
  "last_activity_at": 0,
  "priority": "string",
  "waiting_since": 0,
  "sla_policy_id": 0,
  "applied_sla": {},
  "sla_events": [
    {}
  ],
  "meta": {
    "sender": {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {},
      "last_activity_at": 0,
      "created_at": 0
    },
    "channel": "string",
    "assignee": {
      "id": 0,
      "access_token": "string",
      "account_id": 0,
      "available_name": "string",
      "avatar_url": "string",
      "confirmed": true,
      "display_name": "string",
      "message_signature": "string",
      "email": "string",
      "hmac_identifier": "string",
      "inviter_id": 0,
      "name": "string",
      "provider": "string",
      "pubsub_token": "string",
      "role": "agent",
      "ui_settings": {},
      "uid": "string",
      "type": "string",
      "custom_attributes": {},
      "accounts": [
        {
          "id": 0,
          "name": "string",
          "status": "string",
          "active_at": "1970-01-01T00:00:00Z",
          "role": "administrator",
          "permissions": [
            "string"
          ],
          "availability": "string",
          "availability_status": "string",
          "auto_offline": true,
          "custom_role_id": 0,
          "custom_role": {}
        }
      ]
    },
    "hmac_verified": true
  }
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="conversation-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation_show](#schemaconversation_show)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey
</aside>

## Update Conversation

<a id="opIdupdate-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "priority": "high",
    "sla_policy_id": 1
  }'
```

`PATCH /api/v1/accounts/{account_id}/conversations/{conversation_id}`

Update Conversation Attributes

> Body parameter

```json
{
  "priority": "high",
  "sla_policy_id": 1
}
```

<h3 id="update-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» priority|body|string \| null|false|The priority of the conversation. Set to null to clear the priority.|
|» sla_policy_id|body|number|false|The ID of the SLA policy (Available only in Enterprise edition)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» priority|urgent|
|» priority|high|
|» priority|medium|
|» priority|low|
|» priority|null|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "account_id": 0,
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "created_at": 0,
      "updated_at": 0,
      "private": true,
      "status": "sent",
      "source_id": "string",
      "content_type": "text",
      "content_attributes": {},
      "sender_type": "Contact",
      "sender_id": 0,
      "external_source_ids": {},
      "additional_attributes": {},
      "processed_message_content": "string",
      "sentiment": {},
      "conversation": {},
      "attachment": {},
      "sender": {}
    }
  ],
  "account_id": 0,
  "uuid": "string",
  "additional_attributes": {},
  "agent_last_seen_at": 0,
  "assignee_last_seen_at": 0,
  "can_reply": true,
  "contact_last_seen_at": 0,
  "custom_attributes": {},
  "inbox_id": 0,
  "labels": [
    "string"
  ],
  "muted": true,
  "snoozed_until": 0,
  "status": "open",
  "created_at": 0,
  "updated_at": 0,
  "timestamp": 0,
  "first_reply_created_at": 0,
  "unread_count": 0,
  "last_non_activity_message": {
    "id": 0,
    "content": "string",
    "account_id": 0,
    "inbox_id": 0,
    "conversation_id": 0,
    "message_type": 0,
    "created_at": 0,
    "updated_at": 0,
    "private": true,
    "status": "sent",
    "source_id": "string",
    "content_type": "text",
    "content_attributes": {},
    "sender_type": "Contact",
    "sender_id": 0,
    "external_source_ids": {},
    "additional_attributes": {},
    "processed_message_content": "string",
    "sentiment": {},
    "conversation": {},
    "attachment": {},
    "sender": {}
  },
  "last_activity_at": 0,
  "priority": "string",
  "waiting_since": 0,
  "sla_policy_id": 0,
  "applied_sla": {},
  "sla_events": [
    {}
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "error": "string"
}
```

<h3 id="update-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation](#schemaconversation)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|Validation error|Inline|

<h3 id="update-conversation-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey, agentBotApiKey
</aside>

## Toggle Status

<a id="opIdtoggle-status-of-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/toggle_status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "open",
    "snoozed_until": 1757506877
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status`

Toggle the status of a conversation. Pass `status` to explicitly set the
conversation state. Use `snoozed` along with `snoozed_until` to snooze a
conversation until a specific time. If `snoozed_until` is omitted, the
conversation is snoozed until the next reply from the contact. Regardless
of the value provided, snoozed conversations always reopen on the next
reply from the contact.

> Body parameter

```json
{
  "status": "open",
  "snoozed_until": 1757506877
}
```

<h3 id="toggle-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» status|body|string|true|The status of the conversation|
|» snoozed_until|body|number|false|When status is `snoozed`, schedule the reopen time as a Unix timestamp in seconds. If not provided, the conversation is snoozed until the next customer reply. The conversation always reopens when the customer replies.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|open|
|» status|resolved|
|» status|pending|
|» status|snoozed|

> Example responses

> 200 Response

```json
{
  "meta": {},
  "payload": {
    "success": true,
    "current_status": "open",
    "conversation_id": 0
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="toggle-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<h3 id="toggle-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|payload|object|false|none|none|
|» success|boolean|false|none|none|
|» current_status|string|false|none|none|
|» conversation_id|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» current_status|open|
|» current_status|resolved|
|» current_status|pending|
|» current_status|snoozed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey, agentBotApiKey
</aside>

## Toggle Priority

<a id="opIdtoggle-priority-of-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/toggle_priority \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "priority": "high"
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority`

Toggles the priority of conversation

> Body parameter

```json
{
  "priority": "high"
}
```

<h3 id="toggle-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|false|none|
|» priority|body|string \| null|false|The priority of the conversation. Omit or set to null to clear the priority.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» priority|urgent|
|» priority|high|
|» priority|medium|
|» priority|low|
|» priority|null|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "error": "string"
}
```

<h3 id="toggle-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|Validation error|Inline|

<h3 id="toggle-priority-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey, agentBotApiKey
</aside>

## Toggle Typing Status

<a id="opIdtoggle-typing-status-of-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/toggle_typing_status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "typing_status": "on",
    "is_private": false
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_typing_status`

Toggles the typing status for a conversation.

> Body parameter

```json
{
  "typing_status": "on",
  "is_private": false
}
```

<h3 id="toggle-typing-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» typing_status|body|string|true|Typing status to set.|
|» is_private|body|boolean|false|Whether the typing event is for private notes.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» typing_status|on|
|» typing_status|off|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="toggle-typing-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey, agentBotApiKey
</aside>

## Update Last Seen

<a id="opIdconversationUpdateLastSeen"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/update_last_seen \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/update_last_seen`

Updates the last seen of the conversation so that conversations will have the bubbles in the agents screen

<h3 id="update-last-seen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "account_id": 0,
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "created_at": 0,
      "updated_at": 0,
      "private": true,
      "status": "sent",
      "source_id": "string",
      "content_type": "text",
      "content_attributes": {},
      "sender_type": "Contact",
      "sender_id": 0,
      "external_source_ids": {},
      "additional_attributes": {},
      "processed_message_content": "string",
      "sentiment": {},
      "conversation": {},
      "attachment": {},
      "sender": {}
    }
  ],
  "account_id": 0,
  "uuid": "string",
  "additional_attributes": {},
  "agent_last_seen_at": 0,
  "assignee_last_seen_at": 0,
  "can_reply": true,
  "contact_last_seen_at": 0,
  "custom_attributes": {},
  "inbox_id": 0,
  "labels": [
    "string"
  ],
  "muted": true,
  "snoozed_until": 0,
  "status": "open",
  "created_at": 0,
  "updated_at": 0,
  "timestamp": 0,
  "first_reply_created_at": 0,
  "unread_count": 0,
  "last_non_activity_message": {
    "id": 0,
    "content": "string",
    "account_id": 0,
    "inbox_id": 0,
    "conversation_id": 0,
    "message_type": 0,
    "created_at": 0,
    "updated_at": 0,
    "private": true,
    "status": "sent",
    "source_id": "string",
    "content_type": "text",
    "content_attributes": {},
    "sender_type": "Contact",
    "sender_id": 0,
    "external_source_ids": {},
    "additional_attributes": {},
    "processed_message_content": "string",
    "sentiment": {},
    "conversation": {},
    "attachment": {},
    "sender": {}
  },
  "last_activity_at": 0,
  "priority": "string",
  "waiting_since": 0,
  "sla_policy_id": 0,
  "applied_sla": {},
  "sla_events": [
    {}
  ],
  "meta": {
    "sender": {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {},
      "last_activity_at": 0,
      "created_at": 0
    },
    "channel": "string",
    "assignee": {
      "id": 0,
      "access_token": "string",
      "account_id": 0,
      "available_name": "string",
      "avatar_url": "string",
      "confirmed": true,
      "display_name": "string",
      "message_signature": "string",
      "email": "string",
      "hmac_identifier": "string",
      "inviter_id": 0,
      "name": "string",
      "provider": "string",
      "pubsub_token": "string",
      "role": "agent",
      "ui_settings": {},
      "uid": "string",
      "type": "string",
      "custom_attributes": {},
      "accounts": [
        {
          "id": 0,
          "name": "string",
          "status": "string",
          "active_at": "1970-01-01T00:00:00Z",
          "role": "administrator",
          "permissions": [
            "string"
          ],
          "availability": "string",
          "availability_status": "string",
          "auto_offline": true,
          "custom_role_id": 0,
          "custom_role": {}
        }
      ]
    },
    "hmac_verified": true
  }
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-last-seen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation_show](#schemaconversation_show)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Contact not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update Custom Attributes

<a id="opIdupdate-custom-attributes-of-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/custom_attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "custom_attributes": {
      "order_id": "12345",
      "previous_conversation": "67890"
    },
    "merge": false
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/custom_attributes`

Updates the custom attributes of a conversation

> Body parameter

```json
{
  "custom_attributes": {
    "order_id": "12345",
    "previous_conversation": "67890"
  },
  "merge": false
}
```

<h3 id="update-custom-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» custom_attributes|body|object|true|The custom attributes to be set for the conversation|
|» merge|body|boolean|false|When true, only the keys sent in `custom_attributes` are updated and the remaining keys are kept intact. When false (default), the whole custom attributes hash is replaced. Use the destroy_custom_attributes endpoint to remove keys.|

> Example responses

> 200 Response

```json
{
  "custom_attributes": {}
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-custom-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<h3 id="update-custom-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_attributes|object|false|none|The custom attributes of the conversation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey
</aside>

## Destroy Custom Attributes

<a id="opIddestroy-custom-attributes-of-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/destroy_custom_attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "custom_attributes": [
      "order_id",
      "previous_conversation"
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/destroy_custom_attributes`

Removes the given custom attribute keys from a conversation

> Body parameter

```json
{
  "custom_attributes": [
    "order_id",
    "previous_conversation"
  ]
}
```

<h3 id="destroy-custom-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» custom_attributes|body|[string]|true|The list of custom attribute keys to remove from the conversation|

> Example responses

> 200 Response

```json
{
  "custom_attributes": {}
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="destroy-custom-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<h3 id="destroy-custom-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_attributes|object|false|none|The remaining custom attributes of the conversation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## List Labels

<a id="opIdlist-all-labels-of-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels`

Lists all the labels of a conversation

<h3 id="list-labels-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
{
  "payload": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-labels-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation_labels](#schemaconversation_labels)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey
</aside>

## Add Labels

<a id="opIdconversation-add-labels"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": [
      "support",
      "billing"
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels`

Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.

> Body parameter

```json
{
  "labels": [
    "support",
    "billing"
  ]
}
```

<h3 id="add-labels-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» labels|body|[string]|true|Array of labels (comma-separated strings)|

> Example responses

> 200 Response

```json
{
  "payload": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-labels-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation_labels](#schemaconversation_labels)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey
</aside>

## Conversation Reporting Events

<a id="opIdget-conversation-reporting-events"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/reporting_events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events`

Get reporting events for a specific conversation. This endpoint returns events such as first response time, resolution time, and other metrics for the conversation, sorted by creation time in ascending order.

<h3 id="conversation-reporting-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "value": 0,
    "value_in_business_hours": 0,
    "event_start_time": "1970-01-01T00:00:00Z",
    "event_end_time": "1970-01-01T00:00:00Z",
    "account_id": 0,
    "conversation_id": 0,
    "inbox_id": 0,
    "user_id": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="conversation-reporting-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<h3 id="conversation-reporting-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reporting_event](#schemareporting_event)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-custom-attributes">Custom Attributes</h1>

Custom fields for contacts and conversations

## List all custom attributes in an account

<a id="opIdget-account-custom-attribute"></a>

> Code samples

```bash
curl 'https://app.chatwoot.com/api/v1/accounts/0/custom_attribute_definitions?attribute_model=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/custom_attribute_definitions`

Get details of custom attributes in an Account

<h3 id="list-all-custom-attributes-in-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attribute_model|query|string|true|conversation_attribute(0)/contact_attribute(1)|
|account_id|path|integer|true|The numeric ID of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|attribute_model|0|
|attribute_model|1|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "attribute_display_name": "string",
    "attribute_display_type": "string",
    "attribute_description": "string",
    "attribute_key": "string",
    "regex_pattern": "string",
    "regex_cue": "string",
    "attribute_values": "string",
    "attribute_model": "string",
    "default_value": "string",
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-custom-attributes-in-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-custom-attributes-in-an-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[custom_attribute](#schemacustom_attribute)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a new custom attribute

<a id="opIdadd-new-custom-attribute-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_attribute_definitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attribute_display_name": "Custom Attribute",
    "attribute_display_type": 0,
    "attribute_description": "This is a custom attribute",
    "attribute_key": "custom_attribute",
    "attribute_values": [
      "value1",
      "value2"
    ],
    "attribute_model": 0,
    "regex_pattern": "^[a-zA-Z0-9]+$",
    "regex_cue": "Please enter a valid value"
  }'
```

`POST /api/v1/accounts/{account_id}/custom_attribute_definitions`

Add a new custom attribute to account

> Body parameter

```json
{
  "attribute_display_name": "Custom Attribute",
  "attribute_display_type": 0,
  "attribute_description": "This is a custom attribute",
  "attribute_key": "custom_attribute",
  "attribute_values": [
    "value1",
    "value2"
  ],
  "attribute_model": 0,
  "regex_pattern": "^[a-zA-Z0-9]+$",
  "regex_cue": "Please enter a valid value"
}
```

<h3 id="add-a-new-custom-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[custom_attribute_create_update_payload](#schemacustom_attribute_create_update_payload)|true|none|
|» attribute_display_name|body|string|false|Attribute display name|
|» attribute_display_type|body|integer|false|Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)|
|» attribute_description|body|string|false|Attribute description|
|» attribute_key|body|string|false|Attribute unique key value|
|» attribute_values|body|[string]|false|Attribute values|
|» attribute_model|body|integer|false|Attribute type(conversation_attribute- 0, contact_attribute- 1)|
|» regex_pattern|body|string|false|Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).|
|» regex_cue|body|string|false|Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "attribute_display_name": "string",
  "attribute_display_type": "string",
  "attribute_description": "string",
  "attribute_key": "string",
  "regex_pattern": "string",
  "regex_cue": "string",
  "attribute_values": "string",
  "attribute_model": "string",
  "default_value": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-custom-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[custom_attribute](#schemacustom_attribute)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get a custom attribute details

<a id="opIdget-details-of-a-single-custom-attribute"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_attribute_definitions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}`

Get the details of a custom attribute in the account

<h3 id="get-a-custom-attribute-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|The ID of the custom attribute to be updated.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "attribute_display_name": "string",
  "attribute_display_type": "string",
  "attribute_description": "string",
  "attribute_key": "string",
  "regex_pattern": "string",
  "regex_cue": "string",
  "attribute_values": "string",
  "attribute_model": "string",
  "default_value": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-custom-attribute-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[custom_attribute](#schemacustom_attribute)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given attribute ID does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Remove a custom attribute from account

<a id="opIddelete-custom-attribute-from-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_attribute_definitions/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}`

Remove a custom attribute from account

<h3 id="remove-a-custom-attribute-from-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|integer|true|The ID of the custom attribute to be deleted|

> Example responses

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="remove-a-custom-attribute-from-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Custom attribute not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update custom attribute in Account

<a id="opIdupdate-custom-attribute-in-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_attribute_definitions/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attribute_display_name": "Custom Attribute",
    "attribute_display_type": 0,
    "attribute_description": "This is a custom attribute",
    "attribute_key": "custom_attribute",
    "attribute_values": [
      "value1",
      "value2"
    ],
    "attribute_model": 0,
    "regex_pattern": "^[a-zA-Z0-9]+$",
    "regex_cue": "Please enter a valid value"
  }'
```

`PATCH /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}`

Update a custom attribute in account

> Body parameter

```json
{
  "attribute_display_name": "Custom Attribute",
  "attribute_display_type": 0,
  "attribute_description": "This is a custom attribute",
  "attribute_key": "custom_attribute",
  "attribute_values": [
    "value1",
    "value2"
  ],
  "attribute_model": 0,
  "regex_pattern": "^[a-zA-Z0-9]+$",
  "regex_cue": "Please enter a valid value"
}
```

<h3 id="update-custom-attribute-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the custom attribute to be updated.|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[custom_attribute_create_update_payload](#schemacustom_attribute_create_update_payload)|true|none|
|» attribute_display_name|body|string|false|Attribute display name|
|» attribute_display_type|body|integer|false|Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)|
|» attribute_description|body|string|false|Attribute description|
|» attribute_key|body|string|false|Attribute unique key value|
|» attribute_values|body|[string]|false|Attribute values|
|» attribute_model|body|integer|false|Attribute type(conversation_attribute- 0, contact_attribute- 1)|
|» regex_pattern|body|string|false|Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).|
|» regex_cue|body|string|false|Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "attribute_display_name": "string",
  "attribute_display_type": "string",
  "attribute_description": "string",
  "attribute_key": "string",
  "regex_pattern": "string",
  "regex_cue": "string",
  "attribute_values": "string",
  "attribute_model": "string",
  "default_value": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-custom-attribute-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[custom_attribute](#schemacustom_attribute)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Agent not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-custom-filters">Custom Filters</h1>

Saved filters for conversations

## List all custom filters

<a id="opIdlist-all-filters"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_filters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/custom_filters`

List all custom filters in a category of a user

<h3 id="list-all-custom-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|filter_type|query|string|false|The type of custom filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter_type|conversation|
|filter_type|contact|
|filter_type|report|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "type": "conversation",
    "query": {},
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-custom-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-custom-filters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[custom_filter](#schemacustom_filter)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create a custom filter

<a id="opIdcreate-a-custom-filter"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_filters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Custom Filter",
    "type": "conversation",
    "query": {}
  }'
```

`POST /api/v1/accounts/{account_id}/custom_filters`

Create a custom filter in the account

> Body parameter

```json
{
  "name": "My Custom Filter",
  "type": "conversation",
  "query": {}
}
```

<h3 id="create-a-custom-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|filter_type|query|string|false|The type of custom filter|
|body|body|[custom_filter_create_update_payload](#schemacustom_filter_create_update_payload)|true|none|
|» name|body|string|false|The name of the custom filter|
|» type|body|string|false|The description about the custom filter|
|» query|body|object|false|A query that needs to be saved as a custom filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter_type|conversation|
|filter_type|contact|
|filter_type|report|
|» type|conversation|
|» type|contact|
|» type|report|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "type": "conversation",
  "query": {},
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-a-custom-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[custom_filter](#schemacustom_filter)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get a custom filter details

<a id="opIdget-details-of-a-single-custom-filter"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_filters/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}`

Get the details of a custom filter in the account

<h3 id="get-a-custom-filter-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|custom_filter_id|path|integer|true|The numeric ID of the custom filter|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "type": "conversation",
  "query": {},
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-custom-filter-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[custom_filter](#schemacustom_filter)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given team ID does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete a custom filter

<a id="opIddelete-a-custom-filter"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_filters/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}`

Delete a custom filter from the account

<h3 id="delete-a-custom-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|custom_filter_id|path|integer|true|The numeric ID of the custom filter|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-a-custom-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The custom filter does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update a custom filter

<a id="opIdupdate-a-custom-filter"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/custom_filters/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Custom Filter",
    "type": "conversation",
    "query": {}
  }'
```

`PATCH /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}`

Update a custom filter's attributes

> Body parameter

```json
{
  "name": "My Custom Filter",
  "type": "conversation",
  "query": {}
}
```

<h3 id="update-a-custom-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|custom_filter_id|path|integer|true|The numeric ID of the custom filter|
|body|body|[custom_filter_create_update_payload](#schemacustom_filter_create_update_payload)|true|none|
|» name|body|string|false|The name of the custom filter|
|» type|body|string|false|The description about the custom filter|
|» query|body|object|false|A query that needs to be saved as a custom filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|conversation|
|» type|contact|
|» type|report|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "type": "conversation",
  "query": {},
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-custom-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[custom_filter](#schemacustom_filter)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-inboxes">Inboxes</h1>

Communication channels setup

## Get account branded email layout

<a id="opIdgetAccountBrandedEmailLayout"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/branded_email_layout \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/branded_email_layout`

Get the account-scoped Liquid HTML layout used as the fallback for branded email replies.

<h3 id="get-account-branded-email-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "branded_email_layout": "<html><body>{{ content_for_layout }}</body></html>"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-account-branded-email-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[branded_email_layout](#schemabranded_email_layout)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update account branded email layout

<a id="opIdupdateAccountBrandedEmailLayout"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/branded_email_layout \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branded_email_layout": "<html><body>{{ content_for_layout }}</body></html>"
  }'
```

`PATCH /api/v1/accounts/{account_id}/branded_email_layout`

Update or clear the account-scoped Liquid HTML layout used as the fallback for branded email replies.

> Body parameter

```json
{
  "branded_email_layout": "<html><body>{{ content_for_layout }}</body></html>"
}
```

<h3 id="update-account-branded-email-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[account_branded_email_layout_payload](#schemaaccount_branded_email_layout_payload)|true|none|
|» branded_email_layout|body|string \| null|false|Account-scoped Liquid HTML layout for branded email replies. Maximum length is 262,144 characters. Blank or null removes the account override.|

> Example responses

> 200 Response

```json
{
  "branded_email_layout": "<html><body>{{ content_for_layout }}</body></html>"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-account-branded-email-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[branded_email_layout](#schemabranded_email_layout)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|Validation failed|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## List all inboxes

<a id="opIdlistAllInboxes"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inboxes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/inboxes`

List all inboxes available in the current account

<h3 id="list-all-inboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "name": "string",
      "website_url": "string",
      "page_id": "string",
      "instagram_id": "string",
      "business_id": "string",
      "provider_name": "string",
      "profile_id": "string",
      "line_channel_id": "string",
      "email": "string",
      "bot_name": "string",
      "inbox_identifier": "string",
      "channel_type": "string",
      "avatar_url": "string",
      "widget_color": "string",
      "website_token": "string",
      "enable_auto_assignment": true,
      "web_widget_script": "string",
      "welcome_title": "string",
      "welcome_tagline": "string",
      "greeting_enabled": true,
      "greeting_message": "string",
      "channel_id": 0,
      "working_hours_enabled": true,
      "enable_email_collect": true,
      "csat_survey_enabled": true,
      "auto_assignment_config": {},
      "out_of_office_message": "string",
      "working_hours": [
        {
          "day_of_week": 0,
          "closed_all_day": true,
          "open_hour": 0,
          "open_minutes": 0,
          "close_hour": 0,
          "close_minutes": 0,
          "open_all_day": true
        }
      ],
      "timezone": "string",
      "callback_webhook_url": "string",
      "allow_messages_after_resolved": true,
      "lock_to_single_conversation": true,
      "sender_name_type": "string",
      "business_name": "string",
      "branded_email_layout": "string",
      "hmac_mandatory": true,
      "selected_feature_flags": [
        "string"
      ],
      "reply_time": "string",
      "messaging_service_sid": "string",
      "phone_number": "string",
      "medium": "string",
      "provider": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-inboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-inboxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[inbox](#schemainbox)]|false|none|Array of inboxes|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create an inbox

<a id="opIdinboxCreation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inboxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Support",
    "greeting_enabled": true,
    "greeting_message": "Hello, how can I help you?",
    "enable_email_collect": true,
    "enable_auto_assignment": true,
    "working_hours_enabled": true,
    "timezone": "America/New_York",
    "allow_messages_after_resolved": true,
    "channel": {
      "type": "web_widget",
      "website_url": "https://example.com",
      "welcome_title": "Welcome to our support",
      "welcome_tagline": "We are here to help you",
      "widget_color": "#FF5733",
      "reply_time": "in_a_few_minutes",
      "pre_chat_form_enabled": false,
      "continuity_via_email": true,
      "hmac_mandatory": false,
      "selected_feature_flags": [
        "attachments",
        "emoji_picker",
        "end_conversation"
      ]
    }
  }'
```

`POST /api/v1/accounts/{account_id}/inboxes`

You can create more than one website inbox in each account

> Body parameter

```json
{
  "name": "Support",
  "greeting_enabled": true,
  "greeting_message": "Hello, how can I help you?",
  "enable_email_collect": true,
  "enable_auto_assignment": true,
  "working_hours_enabled": true,
  "timezone": "America/New_York",
  "allow_messages_after_resolved": true,
  "channel": {
    "type": "web_widget",
    "website_url": "https://example.com",
    "welcome_title": "Welcome to our support",
    "welcome_tagline": "We are here to help you",
    "widget_color": "#FF5733",
    "reply_time": "in_a_few_minutes",
    "pre_chat_form_enabled": false,
    "continuity_via_email": true,
    "hmac_mandatory": false,
    "selected_feature_flags": [
      "attachments",
      "emoji_picker",
      "end_conversation"
    ]
  }
}
```

<h3 id="create-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[inbox_create_payload](#schemainbox_create_payload)|true|none|
|» name|body|string|false|The name of the inbox.|
|» avatar|body|string(binary)|false|Image file for avatar.|
|» greeting_enabled|body|boolean|false|Enable greeting message.|
|» greeting_message|body|string|false|Greeting message to send when greeting messages are enabled.|
|» enable_email_collect|body|boolean|false|Enable email collection.<br><br>Available for: `Website`<br>|
|» csat_survey_enabled|body|boolean|false|Enable CSAT survey.|
|» csat_config|body|object|false|CSAT survey configuration.|
|» » display_type|body|string|false|Display style for the CSAT survey.|
|» » message|body|string|false|Message shown with the CSAT survey.|
|» » button_text|body|string|false|Text shown on the CSAT survey button.|
|» » language|body|string|false|Language code for the CSAT survey.|
|» » survey_rules|body|object|false|Rules that decide when to show the CSAT survey.|
|» » » operator|body|string|false|none|
|» » » values|body|[string]|false|none|
|» enable_auto_assignment|body|boolean|false|Enable Auto Assignment.|
|» working_hours_enabled|body|boolean|false|Enable working hours.|
|» out_of_office_message|body|string|false|Out of office message to send outside working hours.|
|» timezone|body|string|false|Timezone of the inbox.|
|» allow_messages_after_resolved|body|boolean|false|Allow messages after conversation is resolved.<br><br>Available for: `Website`<br>|
|» lock_to_single_conversation|body|boolean|false|Lock contact messages to a single active conversation.<br><br>Available for: `API` `LINE` `Telegram` `WhatsApp` `SMS`<br>|
|» portal_id|body|integer|false|Id of the help center portal to attach to the inbox.|
|» sender_name_type|body|string|false|Sender name type for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|» business_name|body|string|false|Business name for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|» channel|body|[inbox_create_web_widget_channel_payload](#schemainbox_create_web_widget_channel_payload) \| [inbox_create_api_channel_payload](#schemainbox_create_api_channel_payload) \| [inbox_create_email_channel_payload](#schemainbox_create_email_channel_payload) \| [inbox_create_line_channel_payload](#schemainbox_create_line_channel_payload) \| [inbox_create_telegram_channel_payload](#schemainbox_create_telegram_channel_payload) \| [inbox_create_whatsapp_channel_payload](#schemainbox_create_whatsapp_channel_payload) \| [inbox_create_sms_channel_payload](#schemainbox_create_sms_channel_payload)|false|none|
|» » *oneOf*|body|[inbox_create_web_widget_channel_payload](#schemainbox_create_web_widget_channel_payload)|false|none|
|» » *oneOf*|body|[inbox_create_api_channel_payload](#schemainbox_create_api_channel_payload)|false|none|
|» » *oneOf*|body|[inbox_create_email_channel_payload](#schemainbox_create_email_channel_payload)|false|none|
|» » *oneOf*|body|[inbox_create_line_channel_payload](#schemainbox_create_line_channel_payload)|false|none|
|» » *oneOf*|body|[inbox_create_telegram_channel_payload](#schemainbox_create_telegram_channel_payload)|false|none|
|» » *oneOf*|body|[inbox_create_whatsapp_channel_payload](#schemainbox_create_whatsapp_channel_payload)|false|none|
|» » *oneOf*|body|[inbox_create_sms_channel_payload](#schemainbox_create_sms_channel_payload)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_type|emoji|
|» » display_type|star|
|» sender_name_type|friendly|
|» sender_name_type|professional|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "website_url": "string",
  "page_id": "string",
  "instagram_id": "string",
  "business_id": "string",
  "provider_name": "string",
  "profile_id": "string",
  "line_channel_id": "string",
  "email": "string",
  "bot_name": "string",
  "inbox_identifier": "string",
  "channel_type": "string",
  "avatar_url": "string",
  "widget_color": "string",
  "website_token": "string",
  "enable_auto_assignment": true,
  "web_widget_script": "string",
  "welcome_title": "string",
  "welcome_tagline": "string",
  "greeting_enabled": true,
  "greeting_message": "string",
  "channel_id": 0,
  "working_hours_enabled": true,
  "enable_email_collect": true,
  "csat_survey_enabled": true,
  "auto_assignment_config": {},
  "out_of_office_message": "string",
  "working_hours": [
    {
      "day_of_week": 0,
      "closed_all_day": true,
      "open_hour": 0,
      "open_minutes": 0,
      "close_hour": 0,
      "close_minutes": 0,
      "open_all_day": true
    }
  ],
  "timezone": "string",
  "callback_webhook_url": "string",
  "allow_messages_after_resolved": true,
  "lock_to_single_conversation": true,
  "sender_name_type": "string",
  "business_name": "string",
  "branded_email_layout": "string",
  "hmac_mandatory": true,
  "selected_feature_flags": [
    "string"
  ],
  "reply_time": "string",
  "messaging_service_sid": "string",
  "phone_number": "string",
  "medium": "string",
  "provider": "string"
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[inbox](#schemainbox)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get an inbox

<a id="opIdGetInbox"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inboxes/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/inboxes/{id}`

Get an inbox available in the current account

<h3 id="get-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the inbox|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "website_url": "string",
  "page_id": "string",
  "instagram_id": "string",
  "business_id": "string",
  "provider_name": "string",
  "profile_id": "string",
  "line_channel_id": "string",
  "email": "string",
  "bot_name": "string",
  "inbox_identifier": "string",
  "channel_type": "string",
  "avatar_url": "string",
  "widget_color": "string",
  "website_token": "string",
  "enable_auto_assignment": true,
  "web_widget_script": "string",
  "welcome_title": "string",
  "welcome_tagline": "string",
  "greeting_enabled": true,
  "greeting_message": "string",
  "channel_id": 0,
  "working_hours_enabled": true,
  "enable_email_collect": true,
  "csat_survey_enabled": true,
  "auto_assignment_config": {},
  "out_of_office_message": "string",
  "working_hours": [
    {
      "day_of_week": 0,
      "closed_all_day": true,
      "open_hour": 0,
      "open_minutes": 0,
      "close_hour": 0,
      "close_minutes": 0,
      "open_all_day": true
    }
  ],
  "timezone": "string",
  "callback_webhook_url": "string",
  "allow_messages_after_resolved": true,
  "lock_to_single_conversation": true,
  "sender_name_type": "string",
  "business_name": "string",
  "branded_email_layout": "string",
  "hmac_mandatory": true,
  "selected_feature_flags": [
    "string"
  ],
  "reply_time": "string",
  "messaging_service_sid": "string",
  "phone_number": "string",
  "medium": "string",
  "provider": "string"
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[inbox](#schemainbox)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update Inbox

<a id="opIdupdateInbox"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inboxes/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Support",
    "greeting_enabled": true,
    "greeting_message": "Hello, how can I help you?",
    "enable_email_collect": true,
    "enable_auto_assignment": true,
    "working_hours_enabled": true,
    "timezone": "America/New_York",
    "allow_messages_after_resolved": true,
    "channel": {
      "website_url": "https://example.com",
      "welcome_title": "Welcome to our support",
      "welcome_tagline": "We are here to help you",
      "widget_color": "#FF5733",
      "reply_time": "in_a_few_minutes",
      "pre_chat_form_enabled": false,
      "continuity_via_email": true,
      "hmac_mandatory": false,
      "selected_feature_flags": [
        "attachments",
        "emoji_picker",
        "end_conversation"
      ]
    }
  }'
```

`PATCH /api/v1/accounts/{account_id}/inboxes/{id}`

Update an existing inbox

> Body parameter

```json
{
  "name": "Support",
  "greeting_enabled": true,
  "greeting_message": "Hello, how can I help you?",
  "enable_email_collect": true,
  "enable_auto_assignment": true,
  "working_hours_enabled": true,
  "timezone": "America/New_York",
  "allow_messages_after_resolved": true,
  "channel": {
    "website_url": "https://example.com",
    "welcome_title": "Welcome to our support",
    "welcome_tagline": "We are here to help you",
    "widget_color": "#FF5733",
    "reply_time": "in_a_few_minutes",
    "pre_chat_form_enabled": false,
    "continuity_via_email": true,
    "hmac_mandatory": false,
    "selected_feature_flags": [
      "attachments",
      "emoji_picker",
      "end_conversation"
    ]
  }
}
```

<h3 id="update-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the inbox|
|body|body|[inbox_update_payload](#schemainbox_update_payload)|true|none|
|» name|body|string|false|The name of the inbox.|
|» avatar|body|string(binary)|false|Image file for avatar.|
|» greeting_enabled|body|boolean|false|Enable greeting message.|
|» greeting_message|body|string|false|Greeting message to send when greeting messages are enabled.|
|» enable_email_collect|body|boolean|false|Enable email collection.<br><br>Available for: `Website`<br>|
|» csat_survey_enabled|body|boolean|false|Enable CSAT survey.|
|» csat_config|body|object|false|CSAT survey configuration.|
|» » display_type|body|string|false|Display style for the CSAT survey.|
|» » message|body|string|false|Message shown with the CSAT survey.|
|» » button_text|body|string|false|Text shown on the CSAT survey button.|
|» » language|body|string|false|Language code for the CSAT survey.|
|» » survey_rules|body|object|false|Rules that decide when to show the CSAT survey.|
|» » » operator|body|string|false|none|
|» » » values|body|[string]|false|none|
|» enable_auto_assignment|body|boolean|false|Enable Auto Assignment.|
|» working_hours_enabled|body|boolean|false|Enable working hours.|
|» out_of_office_message|body|string|false|Out of office message to send outside working hours.|
|» timezone|body|string|false|Timezone of the inbox.|
|» allow_messages_after_resolved|body|boolean|false|Allow messages after conversation is resolved.<br><br>Available for: `Website`<br>|
|» lock_to_single_conversation|body|boolean|false|Lock contact messages to a single active conversation.<br><br>Available for: `API` `LINE` `Telegram` `WhatsApp` `SMS`<br>|
|» portal_id|body|integer|false|Id of the help center portal to attach to the inbox.|
|» sender_name_type|body|string|false|Sender name type for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|» business_name|body|string|false|Business name for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|» branded_email_layout|body|string \| null|false|Liquid HTML layout for outbound email replies. Must include `{{ content_for_layout }}` and be 262,144 characters or shorter.<br><br>Available for: `Email`<br>|
|» channel|body|[inbox_update_web_widget_channel_payload](#schemainbox_update_web_widget_channel_payload) \| [inbox_update_api_channel_payload](#schemainbox_update_api_channel_payload) \| [inbox_update_email_channel_payload](#schemainbox_update_email_channel_payload) \| [inbox_update_line_channel_payload](#schemainbox_update_line_channel_payload) \| [inbox_update_telegram_channel_payload](#schemainbox_update_telegram_channel_payload) \| [inbox_update_whatsapp_channel_payload](#schemainbox_update_whatsapp_channel_payload) \| [inbox_update_sms_channel_payload](#schemainbox_update_sms_channel_payload)|false|none|
|» » *anyOf*|body|[inbox_update_web_widget_channel_payload](#schemainbox_update_web_widget_channel_payload)|false|none|
|» » *anyOf*|body|[inbox_update_api_channel_payload](#schemainbox_update_api_channel_payload)|false|none|
|» » *anyOf*|body|[inbox_update_email_channel_payload](#schemainbox_update_email_channel_payload)|false|none|
|» » *anyOf*|body|[inbox_update_line_channel_payload](#schemainbox_update_line_channel_payload)|false|none|
|» » *anyOf*|body|[inbox_update_telegram_channel_payload](#schemainbox_update_telegram_channel_payload)|false|none|
|» » *anyOf*|body|[inbox_update_whatsapp_channel_payload](#schemainbox_update_whatsapp_channel_payload)|false|none|
|» » *anyOf*|body|[inbox_update_sms_channel_payload](#schemainbox_update_sms_channel_payload)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_type|emoji|
|» » display_type|star|
|» sender_name_type|friendly|
|» sender_name_type|professional|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "website_url": "string",
  "page_id": "string",
  "instagram_id": "string",
  "business_id": "string",
  "provider_name": "string",
  "profile_id": "string",
  "line_channel_id": "string",
  "email": "string",
  "bot_name": "string",
  "inbox_identifier": "string",
  "channel_type": "string",
  "avatar_url": "string",
  "widget_color": "string",
  "website_token": "string",
  "enable_auto_assignment": true,
  "web_widget_script": "string",
  "welcome_title": "string",
  "welcome_tagline": "string",
  "greeting_enabled": true,
  "greeting_message": "string",
  "channel_id": 0,
  "working_hours_enabled": true,
  "enable_email_collect": true,
  "csat_survey_enabled": true,
  "auto_assignment_config": {},
  "out_of_office_message": "string",
  "working_hours": [
    {
      "day_of_week": 0,
      "closed_all_day": true,
      "open_hour": 0,
      "open_minutes": 0,
      "close_hour": 0,
      "close_minutes": 0,
      "open_all_day": true
    }
  ],
  "timezone": "string",
  "callback_webhook_url": "string",
  "allow_messages_after_resolved": true,
  "lock_to_single_conversation": true,
  "sender_name_type": "string",
  "business_name": "string",
  "branded_email_layout": "string",
  "hmac_mandatory": true,
  "selected_feature_flags": [
    "string"
  ],
  "reply_time": "string",
  "messaging_service_sid": "string",
  "phone_number": "string",
  "medium": "string",
  "provider": "string"
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[inbox](#schemainbox)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## List WhatsApp message templates

<a id="opIdlistWhatsappMessageTemplates"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inboxes/0/message_templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/inboxes/{id}/message_templates`

List the cached message templates available for a native or Twilio WhatsApp inbox

<h3 id="list-whatsapp-message-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the native or Twilio WhatsApp inbox|
|name|query|string|false|Exact template name to filter by|

> Example responses

> 200 Response

```json
{
  "payload": [
    {}
  ],
  "meta": {
    "last_sync_attempt_at": "1970-01-01T00:00:00Z"
  }
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-whatsapp-message-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|The inbox is not a WhatsApp inbox|[bad_request_error](#schemabad_request_error)|

<h3 id="list-whatsapp-message-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[object]|false|none|Native or Twilio WhatsApp message templates available for the inbox|
|meta|object|false|none|none|
|» last_sync_attempt_at|string \| null(date-time)|false|none|Time when template synchronization was last attempted|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Show Inbox Agent Bot

<a id="opIdgetInboxAgentBot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inboxes/0/agent_bot \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/inboxes/{id}/agent_bot`

See if an agent bot is associated to the Inbox

<h3 id="show-inbox-agent-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the inbox|

> Example responses

> 204 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="show-inbox-agent-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[agent_bot](#schemaagent_bot)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found, Agent bot not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add or remove agent bot

<a id="opIdupdateAgentBot"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inboxes/0/set_agent_bot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agent_bot": 1
  }'
```

`POST /api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot`

To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null

> Body parameter

```json
{
  "agent_bot": 1
}
```

<h3 id="add-or-remove-agent-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the inbox|
|body|body|object|true|none|
|» agent_bot|body|number|true|Agent bot ID|

> Example responses

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-or-remove-agent-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found, Agent bot not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## List Agents in Inbox

<a id="opIdget-inbox-members"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inbox_members/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/inbox_members/{inbox_id}`

Get Details of Agents in an Inbox

<h3 id="list-agents-in-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|integer|true|The ID of the Inbox|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "account_id": 0,
      "availability_status": "online",
      "auto_offline": true,
      "confirmed": true,
      "email": "string",
      "available_name": "string",
      "name": "string",
      "role": "agent",
      "thumbnail": "string",
      "custom_role_id": 0
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-agents-in-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|

<h3 id="list-agents-in-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[agent](#schemaagent)]|false|none|Array of all active agents|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a New Agent

<a id="opIdadd-new-agent-to-inbox"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inbox_members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inbox_id": 1,
    "user_ids": [
      1
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/inbox_members`

Add a new Agent to Inbox

> Body parameter

```json
{
  "inbox_id": 1,
  "user_ids": [
    1
  ]
}
```

<h3 id="add-a-new-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|object|true|none|
|» inbox_id|body|integer|true|The ID of the inbox|
|» user_ids|body|[integer]|true|IDs of users to be added to the inbox|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "account_id": 0,
      "availability_status": "online",
      "auto_offline": true,
      "confirmed": true,
      "email": "string",
      "available_name": "string",
      "name": "string",
      "role": "agent",
      "thumbnail": "string",
      "custom_role_id": 0
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|User must exist|[bad_request_error](#schemabad_request_error)|

<h3 id="add-a-new-agent-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[agent](#schemaagent)]|false|none|Array of all active agents|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Remove an Agent from Inbox

<a id="opIddelete-agent-in-inbox"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inbox_members \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inbox_id": "string",
    "user_ids": [
      0
    ]
  }'
```

`DELETE /api/v1/accounts/{account_id}/inbox_members`

Remove an Agent from Inbox

> Body parameter

```json
{
  "inbox_id": "string",
  "user_ids": [
    0
  ]
}
```

<h3 id="remove-an-agent-from-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|object|true|none|
|» inbox_id|body|string|true|The ID of the inbox|
|» user_ids|body|[integer]|true|IDs of users to be deleted from the inbox|

> Example responses

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="remove-an-agent-from-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|User must exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update Agents in Inbox

<a id="opIdupdate-agents-in-inbox"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/inbox_members \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inbox_id": 1,
    "user_ids": [
      1
    ]
  }'
```

`PATCH /api/v1/accounts/{account_id}/inbox_members`

All agents except the one passed in params will be removed

> Body parameter

```json
{
  "inbox_id": 1,
  "user_ids": [
    1
  ]
}
```

<h3 id="update-agents-in-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|object|true|none|
|» inbox_id|body|string|true|The ID of the inbox|
|» user_ids|body|[integer]|true|IDs of users to be added to the inbox|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "account_id": 0,
      "availability_status": "online",
      "auto_offline": true,
      "confirmed": true,
      "email": "string",
      "available_name": "string",
      "name": "string",
      "role": "agent",
      "thumbnail": "string",
      "custom_role_id": 0
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-agents-in-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Inbox not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|User must exist|[bad_request_error](#schemabad_request_error)|

<h3 id="update-agents-in-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[agent](#schemaagent)]|false|none|Array of all active agents|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-integrations">Integrations</h1>

Third-party integrations

## List all the Integrations

<a id="opIdget-details-of-all-integrations"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/integrations/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/integrations/apps`

Get the details of all Integrations available for the account

<h3 id="list-all-the-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "hook_type": "string",
      "enabled": true,
      "allow_multiple_hooks": true,
      "hooks": [
        {}
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-the-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Url not found|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-the-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[integrations_app](#schemaintegrations_app)]|false|none|Array of Integration apps|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create an integration hook

<a id="opIdcreate-an-integration-hook"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/integrations/hooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "app_id": 1,
    "inbox_id": 1,
    "status": 1,
    "settings": {}
  }'
```

`POST /api/v1/accounts/{account_id}/integrations/hooks`

Create an integration hook

> Body parameter

```json
{
  "app_id": 1,
  "inbox_id": 1,
  "status": 1,
  "settings": {}
}
```

<h3 id="create-an-integration-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[integrations_hook_create_payload](#schemaintegrations_hook_create_payload)|true|none|
|» app_id|body|integer|false|The ID of app for which integration hook is being created|
|» inbox_id|body|integer|false|The inbox ID, if the hook is an inbox hook|
|» status|body|integer|false|The status of the integration (0 for inactive, 1 for active)|
|» settings|body|object|false|The settings required by the integration|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "app_id": "string",
  "inbox_id": "string",
  "account_id": "string",
  "status": true,
  "hook_type": true,
  "settings": {}
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-an-integration-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[integrations_hook](#schemaintegrations_hook)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete an Integration Hook

<a id="opIddelete-an-integration-hook"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/integrations/hooks/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}`

Delete an Integration Hook

<h3 id="delete-an-integration-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|hook_id|path|integer|true|The numeric ID of the integration hook|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-an-integration-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The hook does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update an Integration Hook

<a id="opIdupdate-an-integrations-hook"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/integrations/hooks/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": 1,
    "settings": {}
  }'
```

`PATCH /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}`

Update an Integration Hook

> Body parameter

```json
{
  "status": 1,
  "settings": {}
}
```

<h3 id="update-an-integration-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|hook_id|path|integer|true|The numeric ID of the integration hook|
|body|body|[integrations_hook_update_payload](#schemaintegrations_hook_update_payload)|true|none|
|» status|body|integer|false|The status of the integration (0 for inactive, 1 for active)|
|» settings|body|object|false|The settings required by the integration|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "app_id": "string",
  "inbox_id": "string",
  "account_id": "string",
  "status": true,
  "hook_type": true,
  "settings": {}
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-an-integration-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[integrations_hook](#schemaintegrations_hook)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-labels">Labels</h1>

Account label management APIs

## List all labels

<a id="opIdlist-all-labels"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/labels`

List all labels available in the current account

<h3 id="list-all-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "title": "string",
      "description": "string",
      "color": "string",
      "show_on_sidebar": true
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-labels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[label](#schemalabel)]|false|none|Array of labels|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create a label

<a id="opIdcreate-a-label"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "support",
    "description": "Conversations that need support follow-up",
    "color": "#1f93ff",
    "show_on_sidebar": true
  }'
```

`POST /api/v1/accounts/{account_id}/labels`

Create a label in the account

> Body parameter

```json
{
  "title": "support",
  "description": "Conversations that need support follow-up",
  "color": "#1f93ff",
  "show_on_sidebar": true
}
```

<h3 id="create-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[label_create_update_payload](#schemalabel_create_update_payload)|true|none|
|» title|body|string|false|The label title|
|» description|body|string|false|A short description for the label|
|» color|body|string|false|Hex color code for the label|
|» show_on_sidebar|body|boolean|false|Whether the label should appear in the sidebar|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "color": "string",
  "show_on_sidebar": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[label](#schemalabel)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get a label

<a id="opIdget-details-of-a-single-label"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/labels/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/labels/{id}`

Get the details of a label in the account

<h3 id="get-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the label|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "color": "string",
  "show_on_sidebar": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[label](#schemalabel)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given label ID does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete a label

<a id="opIddelete-a-label"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/labels/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/labels/{id}`

Delete a label from the account

<h3 id="delete-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the label|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The label does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update a label

<a id="opIdupdate-a-label"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/labels/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "support",
    "description": "Conversations that need support follow-up",
    "color": "#1f93ff",
    "show_on_sidebar": true
  }'
```

`PATCH /api/v1/accounts/{account_id}/labels/{id}`

Update a label's attributes

> Body parameter

```json
{
  "title": "support",
  "description": "Conversations that need support follow-up",
  "color": "#1f93ff",
  "show_on_sidebar": true
}
```

<h3 id="update-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|id|path|number|true|ID of the label|
|body|body|[label_create_update_payload](#schemalabel_create_update_payload)|true|none|
|» title|body|string|false|The label title|
|» description|body|string|false|A short description for the label|
|» color|body|string|false|Hex color code for the label|
|» show_on_sidebar|body|boolean|false|Whether the label should appear in the sidebar|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "color": "string",
  "show_on_sidebar": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[label](#schemalabel)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-messages">Messages</h1>

Message management APIs

## Get messages

<a id="opIdlist-all-messages"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages`

List all messages of a conversation

<h3 id="get-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|integer|false|Fetch messages after the message with this ID. Returns up to 100 messages in ascending order.|
|before|query|integer|false|Fetch messages before the message with this ID. Returns up to 20 messages in ascending order.|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
{
  "meta": {
    "labels": [
      "string"
    ],
    "additional_attributes": {},
    "contact": {
      "payload": [
        {
          "additional_attributes": {},
          "availability_status": "string",
          "email": "string",
          "id": 0,
          "name": "string",
          "phone_number": "string",
          "blocked": true,
          "identifier": "string",
          "thumbnail": "string",
          "custom_attributes": {
            "attribute_key": "attribute_value",
            "signed_up_at": "dd/mm/yyyy"
          },
          "last_activity_at": 0,
          "created_at": 0,
          "contact_inboxes": [
            {
              "source_id": "string",
              "inbox": {
                "id": 0,
                "avatar_url": "string",
                "channel_id": 0,
                "name": "string",
                "channel_type": "string",
                "provider": "string"
              }
            }
          ]
        }
      ]
    },
    "assignee": {
      "id": 0,
      "account_id": 0,
      "availability_status": "online",
      "auto_offline": true,
      "confirmed": true,
      "email": "string",
      "available_name": "string",
      "name": "string",
      "role": "agent",
      "thumbnail": "string",
      "custom_role_id": 0
    },
    "agent_last_seen_at": "1970-01-01T00:00:00Z",
    "assignee_last_seen_at": "1970-01-01T00:00:00Z"
  },
  "payload": [
    {
      "id": 0,
      "content": "string",
      "account_id": 0,
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "created_at": 0,
      "updated_at": 0,
      "private": true,
      "status": "sent",
      "source_id": "string",
      "content_type": "text",
      "content_attributes": {},
      "sender_type": "Contact",
      "sender_id": 0,
      "external_source_ids": {},
      "additional_attributes": {},
      "processed_message_content": "string",
      "sentiment": {},
      "conversation": {},
      "attachment": {},
      "sender": {}
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<h3 id="get-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» labels|[string]|false|none|none|
|» additional_attributes|object|false|none|none|
|» contact|[contact](#schemacontact)|false|none|none|
|» assignee|[agent](#schemaagent)|false|none|none|
|» agent_last_seen_at|string \| null(date-time)|false|none|none|
|» assignee_last_seen_at|string \| null(date-time)|false|none|none|
|payload|[[message](#schemamessage)]|false|none|Array of messages|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create New Message

<a id="opIdcreate-a-new-message-in-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "Hello, how can I help you?",
    "message_type": "outgoing",
    "private": false,
    "content_type": "text",
    "content_attributes": {
      "items": [
        {
          "title": "Option 1",
          "value": "option_1",
          "description": "Optional WhatsApp list row subtitle"
        }
      ]
    },
    "campaign_id": 1,
    "template_params": {
      "name": "purchase_receipt",
      "category": "UTILITY",
      "language": "en_US",
      "content_mode": "rendered",
      "processed_params": {
        "body": {
          "1": "Visa",
          "2": "Nike",
          "3": "Bill"
        },
        "header": {
          "media_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "media_type": "document"
        },
        "buttons": [
          {
            "type": "url",
            "parameter": "SSFSDFSD"
          }
        ]
      }
    }
  }'
```

`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages`

Create a new message in the conversation.

Use `application/json` for text messages and `multipart/form-data` when the
message includes file attachments.

### Multipart attachment request

Send files with the `attachments[]` form field. `curl -F` sets the
`multipart/form-data` content type and boundary automatically.

```bash
curl -X POST "https://app.chatwoot.com/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages" \
  -H "Authorization: Bearer <your-api-token>" \
  -F "content=Here is the screenshot" \
  -F "message_type=outgoing" \
  -F "private=false" \
  -F "attachments[]=@/path/to/screenshot.png"
```

## WhatsApp Template Messages

For WhatsApp channels, you can send structured template messages using the `template_params` field. 
Templates must be pre-approved in WhatsApp Business Manager.

By default, `content` is treated as the already-rendered transcript text for
compatibility with existing API and mobile clients. To submit the original
template body instead, set `template_params.content_mode` to `raw_template`;
Chatwoot will substitute `processed_params.body` before saving the transcript.

### Example Templates

**Text with Image Header:**
```json
{
  "content": "Hi your order 121212 is confirmed. Please wait for further updates",
  "template_params": {
    "name": "order_confirmation",
    "category": "MARKETING",
    "language": "en",
    "processed_params": {
      "body": {
        "1": "121212"
      },
      "header": {
        "media_url": "https://picsum.photos/200/300",
        "media_type": "image"
      }
    }
  }
}
```

**Text with Copy Code Button:**
```json
{
  "content": "Special offer! Get 30% off your next purchase. Use the code below",
  "template_params": {
    "name": "discount_coupon",
    "category": "MARKETING",
    "language": "en",
    "processed_params": {
      "body": {
        "discount_percentage": "30"
      },
      "buttons": [{
        "type": "copy_code",
        "parameter": "SAVE20"
      }]
    }
  }
}
```


> Body parameter

```json
{
  "content": "Hello, how can I help you?",
  "message_type": "outgoing",
  "private": false,
  "content_type": "text",
  "content_attributes": {
    "items": [
      {
        "title": "Option 1",
        "value": "option_1",
        "description": "Optional WhatsApp list row subtitle"
      }
    ]
  },
  "campaign_id": 1,
  "template_params": {
    "name": "purchase_receipt",
    "category": "UTILITY",
    "language": "en_US",
    "content_mode": "rendered",
    "processed_params": {
      "body": {
        "1": "Visa",
        "2": "Nike",
        "3": "Bill"
      },
      "header": {
        "media_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "media_type": "document"
      },
      "buttons": [
        {
          "type": "url",
          "parameter": "SSFSDFSD"
        }
      ]
    }
  }
}
```

<h3 id="create-new-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|[conversation_message_create_payload](#schemaconversation_message_create_payload)|true|none|
|» content|body|string|true|The content of the message|
|» message_type|body|string|false|The type of the message|
|» private|body|boolean|false|Flag to identify if it is a private note|
|» content_type|body|string|false|Content type of the message|
|» content_attributes|body|object|false|Attributes based on the content type. For `input_select`, provide an `items` array with<br>`title`, `value`, and optional `description`. WhatsApp list messages use `description`<br>as the row subtitle when present.<br>|
|» campaign_id|body|integer|false|The campaign id to which the message belongs|
|» template_params|body|object|false|WhatsApp template parameters for sending structured messages|
|» » name|body|string|true|Name of the WhatsApp template (must be approved in WhatsApp Business Manager)|
|» » category|body|string|true|Category of the template|
|» » language|body|string|true|Language code of the template (BCP 47 format)|
|» » content_mode|body|string|false|Format of the top-level `content` field. Existing clients may send rendered<br>content or omit this field. Set this to `raw_template` only when `content`<br>contains the original template body placeholders.<br>|
|» » processed_params|body|object|true|Processed template parameters organized by component type|
|» » » body|body|object|false|Body component parameters with variable placeholders|
|» » » » **additionalProperties**|body|string|false|none|
|» » » header|body|object|false|Header component parameters for media templates|
|» » » » media_url|body|string(uri)|false|Publicly accessible URL for IMAGE, VIDEO, or DOCUMENT headers|
|» » » » media_type|body|string|false|Type of media for the header|
|» » » buttons|body|[object]|false|Button component parameters for interactive templates|
|» » » » type|body|string|false|Type of button parameter|
|» » » » parameter|body|string|false|Dynamic parameter value for the button|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» message_type|outgoing|
|» message_type|incoming|
|» content_type|text|
|» content_type|input_email|
|» content_type|cards|
|» content_type|input_select|
|» content_type|form|
|» content_type|article|
|» » category|UTILITY|
|» » category|MARKETING|
|» » category|SHIPPING_UPDATE|
|» » category|TICKET_UPDATE|
|» » category|ISSUE_RESOLUTION|
|» » content_mode|raw_template|
|» » content_mode|rendered|
|» » » » media_type|image|
|» » » » media_type|video|
|» » » » media_type|document|
|» » » » type|url|
|» » » » type|copy_code|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "content": "string",
  "account_id": 0,
  "inbox_id": 0,
  "conversation_id": 0,
  "message_type": 0,
  "created_at": 0,
  "updated_at": 0,
  "private": true,
  "status": "sent",
  "source_id": "string",
  "content_type": "text",
  "content_attributes": {},
  "sender_type": "Contact",
  "sender_id": 0,
  "external_source_ids": {},
  "additional_attributes": {},
  "processed_message_content": "string",
  "sentiment": {},
  "conversation": {},
  "attachment": {},
  "sender": {}
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-new-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<h3 id="create-new-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|id|number|false|none|The ID of the message|
|content|string|false|none|The text content of the message|
|account_id|number|false|none|The ID of the account|
|inbox_id|number|false|none|The ID of the inbox|
|conversation_id|number|false|none|The ID of the conversation|
|message_type|integer|false|none|The type of the message|
|created_at|integer|false|none|The time at which message was created|
|updated_at|integer \| string|false|none|The time at which message was updated|
|private|boolean|false|none|The flags which shows whether the message is private or not|
|status|string \| null|false|none|The status of the message|
|source_id|string \| null|false|none|The source ID of the message|
|content_type|string \| null|false|none|The type of the template message|
|content_attributes|object|false|none|The content attributes for each content_type|
|sender_type|string \| null|false|none|The type of the sender|
|sender_id|number \| null|false|none|The ID of the sender|
|external_source_ids|object|false|none|The external source IDs of the message|
|additional_attributes|object|false|none|The additional attributes of the message|
|processed_message_content|string \| null|false|none|The processed message content|
|sentiment|object \| null|false|none|The sentiment of the message|
|conversation|object \| null|false|none|The conversation object|
|attachment|object \| null|false|none|The file object attached to the image|
|sender|object|false|none|User/Agent/AgentBot object|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|0|
|message_type|1|
|message_type|2|
|message_type|3|
|status|sent|
|status|delivered|
|status|read|
|status|failed|
|status|null|
|content_type|text|
|content_type|input_text|
|content_type|input_textarea|
|content_type|input_email|
|content_type|input_select|
|content_type|cards|
|content_type|form|
|content_type|article|
|content_type|incoming_email|
|content_type|input_csat|
|content_type|integrations|
|content_type|sticker|
|content_type|voice_call|
|content_type|null|
|sender_type|Contact|
|sender_type|User|
|sender_type|AgentBot|
|sender_type|Captain::Assistant|
|sender_type|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, agentBotBearerAuth, userApiKey, agentBotApiKey
</aside>

## Delete a message

<a id="opIddelete-a-message"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/messages/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}`

Delete a message and it's attachments from the conversation.

<h3 id="delete-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|message_id|path|integer|true|The numeric ID of the message|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The message or conversation does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update message status

<a id="opIdupdate-message-status"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/conversations/0/messages/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "sent",
    "external_error": "string"
  }'
```

`PATCH /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}`

Updates the delivery status of a single message. Available only for messages in
API channel inboxes, where your own system is responsible for delivering messages
and reporting what happened. Use this to push `sent`, `delivered`, and `read`
receipts into Chatwoot, for example, to mark an agent's message as read when the
end user views it in your client, so the agent sees the read indicator on the
message.

A message already marked `read` cannot be moved back to `delivered`. When
reporting a failure, include `external_error` with the reason, which is shown to
the agent along with the failed indicator.


> Body parameter

```json
{
  "status": "sent",
  "external_error": "string"
}
```

<h3 id="update-message-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|message_id|path|integer|true|The numeric ID of the message|
|body|body|object|true|none|
|» status|body|string|true|The new status of the message|
|» external_error|body|string|false|Error description, stored only when status is failed|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|sent|
|» status|delivered|
|» status|read|
|» status|failed|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "content": "string",
  "account_id": 0,
  "inbox_id": 0,
  "conversation_id": 0,
  "message_type": 0,
  "created_at": 0,
  "updated_at": 0,
  "private": true,
  "status": "sent",
  "source_id": "string",
  "content_type": "text",
  "content_attributes": {},
  "sender_type": "Contact",
  "sender_id": 0,
  "external_source_ids": {},
  "additional_attributes": {},
  "processed_message_content": "string",
  "sentiment": {},
  "conversation": {},
  "attachment": {},
  "sender": {}
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-message-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|403|Forbidden|The message does not belong to an API channel inbox|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The message or conversation does not exist in the account|[bad_request_error](#schemabad_request_error)|

<h3 id="update-message-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|id|number|false|none|The ID of the message|
|content|string|false|none|The text content of the message|
|account_id|number|false|none|The ID of the account|
|inbox_id|number|false|none|The ID of the inbox|
|conversation_id|number|false|none|The ID of the conversation|
|message_type|integer|false|none|The type of the message|
|created_at|integer|false|none|The time at which message was created|
|updated_at|integer \| string|false|none|The time at which message was updated|
|private|boolean|false|none|The flags which shows whether the message is private or not|
|status|string \| null|false|none|The status of the message|
|source_id|string \| null|false|none|The source ID of the message|
|content_type|string \| null|false|none|The type of the template message|
|content_attributes|object|false|none|The content attributes for each content_type|
|sender_type|string \| null|false|none|The type of the sender|
|sender_id|number \| null|false|none|The ID of the sender|
|external_source_ids|object|false|none|The external source IDs of the message|
|additional_attributes|object|false|none|The additional attributes of the message|
|processed_message_content|string \| null|false|none|The processed message content|
|sentiment|object \| null|false|none|The sentiment of the message|
|conversation|object \| null|false|none|The conversation object|
|attachment|object \| null|false|none|The file object attached to the image|
|sender|object|false|none|User/Agent/AgentBot object|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|0|
|message_type|1|
|message_type|2|
|message_type|3|
|status|sent|
|status|delivered|
|status|read|
|status|failed|
|status|null|
|content_type|text|
|content_type|input_text|
|content_type|input_textarea|
|content_type|input_email|
|content_type|input_select|
|content_type|cards|
|content_type|form|
|content_type|article|
|content_type|incoming_email|
|content_type|input_csat|
|content_type|integrations|
|content_type|sticker|
|content_type|voice_call|
|content_type|null|
|sender_type|Contact|
|sender_type|User|
|sender_type|AgentBot|
|sender_type|Captain::Assistant|
|sender_type|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-profile">Profile</h1>

User profile APIs

## Fetch user profile

<a id="opIdfetchProfile"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/profile`

Get the user profile details

> Example responses

> 200 Response

```json
{
  "id": 0,
  "access_token": "string",
  "account_id": 0,
  "available_name": "string",
  "avatar_url": "string",
  "confirmed": true,
  "display_name": "string",
  "message_signature": "string",
  "email": "string",
  "hmac_identifier": "string",
  "inviter_id": 0,
  "name": "string",
  "provider": "string",
  "pubsub_token": "string",
  "role": "agent",
  "ui_settings": {},
  "uid": "string",
  "type": "string",
  "custom_attributes": {},
  "accounts": [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "role": "administrator",
      "permissions": [
        "string"
      ],
      "availability": "string",
      "availability_status": "string",
      "auto_offline": true,
      "custom_role_id": 0,
      "custom_role": {}
    }
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="fetch-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[user](#schemauser)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update user profile

<a id="opIdupdateProfile"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/profile \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "profile": {
      "name": "string",
      "email": "string",
      "display_name": "string",
      "message_signature": "string",
      "phone_number": "string",
      "current_password": "string",
      "password": "string",
      "password_confirmation": "string",
      "ui_settings": {}
    }
  }'
```

`PUT /api/v1/profile`

Update the user profile details

> Body parameter

```json
{
  "profile": {
    "name": "string",
    "email": "string",
    "display_name": "string",
    "message_signature": "string",
    "phone_number": "string",
    "current_password": "string",
    "password": "string",
    "password_confirmation": "string",
    "ui_settings": {}
  }
}
```

<h3 id="update-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» profile|body|object|true|none|
|» » name|body|string|false|none|
|» » email|body|string|false|none|
|» » display_name|body|string|false|none|
|» » message_signature|body|string|false|none|
|» » phone_number|body|string|false|none|
|» » current_password|body|string|false|none|
|» » password|body|string|false|none|
|» » password_confirmation|body|string|false|none|
|» » ui_settings|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "access_token": "string",
  "account_id": 0,
  "available_name": "string",
  "avatar_url": "string",
  "confirmed": true,
  "display_name": "string",
  "message_signature": "string",
  "email": "string",
  "hmac_identifier": "string",
  "inviter_id": 0,
  "name": "string",
  "provider": "string",
  "pubsub_token": "string",
  "role": "agent",
  "ui_settings": {},
  "uid": "string",
  "type": "string",
  "custom_attributes": {},
  "accounts": [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "role": "administrator",
      "permissions": [
        "string"
      ],
      "availability": "string",
      "availability_status": "string",
      "auto_offline": true,
      "custom_role_id": 0,
      "custom_role": {}
    }
  ]
}
```

<h3 id="update-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[user](#schemauser)|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-reports">Reports</h1>

Analytics and reporting APIs

## Account Reporting Events

<a id="opIdget-account-reporting-events"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/reporting_events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/reporting_events`

Get paginated reporting events for the account. This endpoint returns reporting events such as first response time, resolution time, and other metrics. Only administrators can access this endpoint. Results are paginated with 25 items per page.

<h3 id="account-reporting-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The page parameter|
|since|query|string|false|The timestamp from where events should start (Unix timestamp in seconds)|
|until|query|string|false|The timestamp from where events should stop (Unix timestamp in seconds)|
|inbox_id|query|number|false|Filter events by inbox ID|
|user_id|query|number|false|Filter events by user/agent ID|
|name|query|string|false|Filter events by event name (e.g., first_response, resolution, reply_time)|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "meta": {
    "count": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "payload": [
    {
      "id": 0,
      "name": "string",
      "value": 0,
      "value_in_business_hours": 0,
      "event_start_time": "1970-01-01T00:00:00Z",
      "event_end_time": "1970-01-01T00:00:00Z",
      "account_id": 0,
      "conversation_id": 0,
      "inbox_id": 0,
      "user_id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="account-reporting-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[reporting_events_list_response](#schemareporting_events_list_response)|
|403|Forbidden|Access denied - Only administrators can access this endpoint|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get Account reports

<a id="opIdlist-all-conversation-statistics"></a>

> Code samples

```bash
curl 'https://app.chatwoot.com/api/v2/accounts/0/reports?metric=conversations_count&type=account' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/reports`

Get Account reports for a specific type, metric and date range

<h3 id="get-account-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|metric|query|string|true|The type of metric|
|type|query|string|true|Type of report|
|id|query|string|false|The Id of specific object in case of agent/inbox/label|
|since|query|string|false|The timestamp from where report should start.|
|until|query|string|false|The timestamp from where report should stop.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metric|conversations_count|
|metric|incoming_messages_count|
|metric|outgoing_messages_count|
|metric|avg_first_response_time|
|metric|avg_resolution_time|
|metric|resolutions_count|
|type|account|
|type|agent|
|type|inbox|
|type|label|
|type|team|

> Example responses

> 200 Response

```json
[
  {
    "value": "string",
    "timestamp": 0
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-account-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|reports not found|[bad_request_error](#schemabad_request_error)|

<h3 id="get-account-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» value|string|false|none|none|
|» timestamp|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get Account reports summary

<a id="opIdlist-all-conversation-statistics-summary"></a>

> Code samples

```bash
curl 'https://app.chatwoot.com/api/v2/accounts/0/reports/summary?type=account' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/reports/summary`

Get Account reports summary for a specific type and date range

<h3 id="get-account-reports-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|type|query|string|true|Type of report|
|id|query|string|false|The Id of specific object in case of agent/inbox/label|
|since|query|string|false|The timestamp from where report should start.|
|until|query|string|false|The timestamp from where report should stop.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|account|
|type|agent|
|type|inbox|
|type|label|
|type|team|

> Example responses

> 200 Response

```json
{
  "avg_first_response_time": "string",
  "avg_resolution_time": "string",
  "conversations_count": 0,
  "incoming_messages_count": 0,
  "outgoing_messages_count": 0,
  "resolutions_count": 0,
  "previous": {
    "avg_first_response_time": "string",
    "avg_resolution_time": "string",
    "conversations_count": 0,
    "incoming_messages_count": 0,
    "outgoing_messages_count": 0,
    "resolutions_count": 0
  }
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-account-reports-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account_summary](#schemaaccount_summary)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|reports not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Account Conversation Metrics

<a id="opIdget-account-conversation-metrics"></a>

> Code samples

```bash
curl 'https://app.chatwoot.com/api/v2/accounts/0/reports/conversations?type=account' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/reports/conversations`

Get conversation metrics for Account

<h3 id="account-conversation-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|type|query|string|true|Type of report|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|account|

> Example responses

> 200 Response

```json
{
  "open": 0,
  "unattended": 0,
  "unassigned": 0
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="account-conversation-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|reports not found|[bad_request_error](#schemabad_request_error)|

<h3 id="account-conversation-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|open|number|false|none|none|
|unattended|number|false|none|none|
|unassigned|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Agent Conversation Metrics

<a id="opIdget-agent-conversation-metrics"></a>

> Code samples

```bash
curl 'https://app.chatwoot.com/api/v2/accounts/0/reports/conversations/?type=agent' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/reports/conversations/`

Get conversation metrics for Agent

<h3 id="agent-conversation-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|type|query|string|true|Type of report|
|user_id|query|string|false|The numeric ID of the user|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|agent|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "email": "string",
    "thumbnail": "string",
    "availability": "string",
    "metric": {
      "open": 0,
      "unattended": 0
    }
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="agent-conversation-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|reports not found|[bad_request_error](#schemabad_request_error)|

<h3 id="agent-conversation-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agent_conversation_metrics](#schemaagent_conversation_metrics)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get conversation statistics grouped by channel type

<a id="opIdget-channel-summary-report"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v2/accounts/0/summary_reports/channel \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/summary_reports/channel`

Get conversation counts grouped by channel type and status for a given date range.
Returns statistics for each channel type including open, resolved, pending, snoozed, and total conversation counts.

**Note:** This API endpoint is available only in Chatwoot version 4.10.0 and above. The date range is limited to a maximum of 6 months.


<h3 id="get-conversation-statistics-grouped-by-channel-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|since|query|string|false|The timestamp from where report should start (Unix timestamp).|
|until|query|string|false|The timestamp from where report should stop (Unix timestamp).|

> Example responses

> 200 Response

```json
{
  "Channel::WebWidget": {
    "open": 10,
    "resolved": 20,
    "pending": 5,
    "snoozed": 2,
    "total": 37
  },
  "Channel::Api": {
    "open": 5,
    "resolved": 15,
    "pending": 3,
    "snoozed": 1,
    "total": 24
  }
}
```

> 400 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-conversation-statistics-grouped-by-channel-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[channel_summary](#schemachannel_summary)|
|400|Bad Request|Date range exceeds 6 months limit|[bad_request_error](#schemabad_request_error)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get conversation statistics grouped by inbox

<a id="opIdget-inbox-summary-report"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v2/accounts/0/summary_reports/inbox \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/summary_reports/inbox`

Get conversation statistics grouped by inbox for a given date range.
Returns metrics for each inbox including conversation counts, resolution counts,
average first response time, average resolution time, and average reply time.


<h3 id="get-conversation-statistics-grouped-by-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|since|query|string|false|The timestamp from where report should start (Unix timestamp).|
|until|query|string|false|The timestamp from where report should stop (Unix timestamp).|
|business_hours|query|boolean|false|Whether to calculate metrics using business hours only.|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "conversations_count": 150,
    "resolved_conversations_count": 120,
    "avg_resolution_time": 3600,
    "avg_first_response_time": 300,
    "avg_reply_time": 600
  },
  {
    "id": 2,
    "conversations_count": 75,
    "resolved_conversations_count": 60,
    "avg_resolution_time": 1800,
    "avg_first_response_time": 180,
    "avg_reply_time": 420
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-conversation-statistics-grouped-by-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[inbox_summary](#schemainbox_summary)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get conversation statistics grouped by agent

<a id="opIdget-agent-summary-report"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v2/accounts/0/summary_reports/agent \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/summary_reports/agent`

Get conversation statistics grouped by agent for a given date range.
Returns metrics for each agent including conversation counts, resolution counts,
average first response time, average resolution time, and average reply time.


<h3 id="get-conversation-statistics-grouped-by-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|since|query|string|false|The timestamp from where report should start (Unix timestamp).|
|until|query|string|false|The timestamp from where report should stop (Unix timestamp).|
|business_hours|query|boolean|false|Whether to calculate metrics using business hours only.|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "conversations_count": 150,
    "resolved_conversations_count": 120,
    "avg_resolution_time": 3600,
    "avg_first_response_time": 300,
    "avg_reply_time": 600
  },
  {
    "id": 2,
    "conversations_count": 75,
    "resolved_conversations_count": 60,
    "avg_resolution_time": 1800,
    "avg_first_response_time": 180,
    "avg_reply_time": 420
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-conversation-statistics-grouped-by-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[agent_summary](#schemaagent_summary)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get conversation statistics grouped by team

<a id="opIdget-team-summary-report"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v2/accounts/0/summary_reports/team \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/summary_reports/team`

Get conversation statistics grouped by team for a given date range.
Returns metrics for each team including conversation counts, resolution counts,
average first response time, average resolution time, and average reply time.


<h3 id="get-conversation-statistics-grouped-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|since|query|string|false|The timestamp from where report should start (Unix timestamp).|
|until|query|string|false|The timestamp from where report should stop (Unix timestamp).|
|business_hours|query|boolean|false|Whether to calculate metrics using business hours only.|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "conversations_count": 250,
    "resolved_conversations_count": 200,
    "avg_resolution_time": 2800,
    "avg_first_response_time": 240,
    "avg_reply_time": 500
  },
  {
    "id": 2,
    "conversations_count": 180,
    "resolved_conversations_count": 150,
    "avg_resolution_time": 2400,
    "avg_first_response_time": 200,
    "avg_reply_time": 450
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-conversation-statistics-grouped-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[team_summary](#schemateam_summary)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get first response time distribution by channel

<a id="opIdget-first-response-time-distribution"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v2/accounts/0/reports/first_response_time_distribution \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/reports/first_response_time_distribution`

Get the distribution of first response times grouped by channel type.
Returns conversation counts in different time buckets (0-1h, 1-4h, 4-8h, 8-24h, 24h+) for each channel type.

**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.


<h3 id="get-first-response-time-distribution-by-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|since|query|string|false|The timestamp from where report should start (Unix timestamp).|
|until|query|string|false|The timestamp from where report should stop (Unix timestamp).|

> Example responses

> 200 Response

```json
{
  "Channel::WebWidget": {
    "0-1h": 150,
    "1-4h": 80,
    "4-8h": 45,
    "8-24h": 30,
    "24h+": 15
  },
  "Channel::Api": {
    "0-1h": 75,
    "1-4h": 40,
    "4-8h": 20,
    "8-24h": 10,
    "24h+": 5
  }
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-first-response-time-distribution-by-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[first_response_time_distribution](#schemafirst_response_time_distribution)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get inbox-label matrix report

<a id="opIdget-inbox-label-matrix"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v2/accounts/0/reports/inbox_label_matrix \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/reports/inbox_label_matrix`

Get a matrix showing the count of conversations for each inbox-label combination.
Returns a list of inboxes, labels, and a 2D matrix where each cell contains the count of conversations
in a specific inbox that have a specific label applied.

**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.


<h3 id="get-inbox-label-matrix-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|since|query|string|false|The timestamp from where report should start (Unix timestamp).|
|until|query|string|false|The timestamp from where report should stop (Unix timestamp).|
|inbox_ids|query|[integer]|false|Filter by specific inbox IDs.|
|label_ids|query|[integer]|false|Filter by specific label IDs.|

> Example responses

> 200 Response

```json
{
  "inboxes": [
    {
      "id": 1,
      "name": "Website Chat"
    },
    {
      "id": 2,
      "name": "Email Support"
    }
  ],
  "labels": [
    {
      "id": 1,
      "title": "bug"
    },
    {
      "id": 2,
      "title": "feature-request"
    },
    {
      "id": 3,
      "title": "urgent"
    }
  ],
  "matrix": [
    [
      10,
      5,
      3
    ],
    [
      8,
      12,
      2
    ]
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-inbox-label-matrix-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[inbox_label_matrix](#schemainbox_label_matrix)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get outgoing messages count grouped by entity

<a id="opIdget-outgoing-messages-count"></a>

> Code samples

```bash
curl 'https://app.chatwoot.com/api/v2/accounts/0/reports/outgoing_messages_count?group_by=agent' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{account_id}/reports/outgoing_messages_count`

Get the count of outgoing messages grouped by a specified entity (agent, team, inbox, or label).
When grouped by agent, messages sent by bots (AgentBot, Captain::Assistant) are excluded.

**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.


<h3 id="get-outgoing-messages-count-grouped-by-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_by|query|string|true|The entity to group outgoing message counts by.|
|account_id|path|integer|true|The numeric ID of the account|
|since|query|string|false|The timestamp from where report should start (Unix timestamp).|
|until|query|string|false|The timestamp from where report should stop (Unix timestamp).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|group_by|agent|
|group_by|team|
|group_by|inbox|
|group_by|label|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "name": "Agent One",
    "outgoing_messages_count": 42
  },
  {
    "id": 2,
    "name": "Agent Two",
    "outgoing_messages_count": 18
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-outgoing-messages-count-grouped-by-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[outgoing_messages_count](#schemaoutgoing_messages_count)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-teams">Teams</h1>

Team management APIs

## List all teams

<a id="opIdlist-all-teams"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/teams`

List all teams available in the current account

<h3 id="list-all-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "description": "string",
    "allow_auto_assign": true,
    "icon": "string",
    "icon_color": "string",
    "account_id": 0,
    "is_member": true
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[team](#schemateam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Create a team

<a id="opIdcreate-a-team"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Support Team",
    "description": "This is a team of support agents",
    "allow_auto_assign": true,
    "icon": "🚀",
    "icon_color": "#6C5CE7"
  }'
```

`POST /api/v1/accounts/{account_id}/teams`

Create a team in the account

> Body parameter

```json
{
  "name": "Support Team",
  "description": "This is a team of support agents",
  "allow_auto_assign": true,
  "icon": "🚀",
  "icon_color": "#6C5CE7"
}
```

<h3 id="create-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[team_create_update_payload](#schemateam_create_update_payload)|true|none|
|» name|body|string|false|The name of the team|
|» description|body|string|false|The description of the team|
|» allow_auto_assign|body|boolean|false|If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team|
|» icon|body|string|false|An emoji or icon shown next to the team|
|» icon_color|body|string|false|The color used for the team icon|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "allow_auto_assign": true,
  "icon": "string",
  "icon_color": "string",
  "account_id": 0,
  "is_member": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[team](#schemateam)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get a team details

<a id="opIdget-details-of-a-single-team"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/teams/{team_id}`

Get the details of a team in the account

<h3 id="get-a-team-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|team_id|path|integer|true|The ID of the team to be updated|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "allow_auto_assign": true,
  "icon": "string",
  "icon_color": "string",
  "account_id": 0,
  "is_member": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-team-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[team](#schemateam)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given team ID does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete a team

<a id="opIddelete-a-team"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/teams/{team_id}`

Delete a team from the account

<h3 id="delete-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|team_id|path|integer|true|The ID of the team to be updated|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The team does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update a team

<a id="opIdupdate-a-team"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Support Team",
    "description": "This is a team of support agents",
    "allow_auto_assign": true,
    "icon": "🚀",
    "icon_color": "#6C5CE7"
  }'
```

`PATCH /api/v1/accounts/{account_id}/teams/{team_id}`

Update a team's attributes

> Body parameter

```json
{
  "name": "Support Team",
  "description": "This is a team of support agents",
  "allow_auto_assign": true,
  "icon": "🚀",
  "icon_color": "#6C5CE7"
}
```

<h3 id="update-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|team_id|path|integer|true|The ID of the team to be updated|
|body|body|[team_create_update_payload](#schemateam_create_update_payload)|true|none|
|» name|body|string|false|The name of the team|
|» description|body|string|false|The description of the team|
|» allow_auto_assign|body|boolean|false|If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team|
|» icon|body|string|false|An emoji or icon shown next to the team|
|» icon_color|body|string|false|The color used for the team icon|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "allow_auto_assign": true,
  "icon": "string",
  "icon_color": "string",
  "account_id": 0,
  "is_member": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[team](#schemateam)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## List Agents in Team

<a id="opIdget-team-members"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams/0/team_members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/teams/{team_id}/team_members`

Get Details of Agents in an Team

<h3 id="list-agents-in-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|team_id|path|integer|true|The ID of the team to be updated|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "account_id": 0,
    "availability_status": "online",
    "auto_offline": true,
    "confirmed": true,
    "email": "string",
    "available_name": "string",
    "name": "string",
    "role": "agent",
    "thumbnail": "string",
    "custom_role_id": 0
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-agents-in-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Team not found|[bad_request_error](#schemabad_request_error)|

<h3 id="list-agents-in-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a New Agent

<a id="opIdadd-new-agent-to-team"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams/0/team_members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_ids": [
      1
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/teams/{team_id}/team_members`

Add a new Agent to Team

> Body parameter

```json
{
  "user_ids": [
    1
  ]
}
```

<h3 id="add-a-new-agent-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|team_id|path|integer|true|The ID of the team to be updated|
|body|body|object|true|none|
|» user_ids|body|[integer]|true|IDs of users to be added to the team|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "account_id": 0,
    "availability_status": "online",
    "auto_offline": true,
    "confirmed": true,
    "email": "string",
    "available_name": "string",
    "name": "string",
    "role": "agent",
    "thumbnail": "string",
    "custom_role_id": 0
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-agent-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Team not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|User must exist|[bad_request_error](#schemabad_request_error)|

<h3 id="add-a-new-agent-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Remove an Agent from Team

<a id="opIddelete-agent-in-team"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams/0/team_members \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_ids": [
      0
    ]
  }'
```

`DELETE /api/v1/accounts/{account_id}/teams/{team_id}/team_members`

Remove an Agent from Team

> Body parameter

```json
{
  "user_ids": [
    0
  ]
}
```

<h3 id="remove-an-agent-from-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|team_id|path|integer|true|The ID of the team to be updated|
|body|body|object|true|none|
|» user_ids|body|[integer]|true|IDs of users to be deleted from the team|

> Example responses

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="remove-an-agent-from-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Team not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|User must exist|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update Agents in Team

<a id="opIdupdate-agents-in-team"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/teams/0/team_members \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_ids": [
      1
    ]
  }'
```

`PATCH /api/v1/accounts/{account_id}/teams/{team_id}/team_members`

All agents except the one passed in params will be removed

> Body parameter

```json
{
  "user_ids": [
    1
  ]
}
```

<h3 id="update-agents-in-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|team_id|path|integer|true|The ID of the team to be updated|
|body|body|object|true|none|
|» user_ids|body|[integer]|true|IDs of users to be added to the team|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "account_id": 0,
    "availability_status": "online",
    "auto_offline": true,
    "confirmed": true,
    "email": "string",
    "available_name": "string",
    "name": "string",
    "role": "agent",
    "thumbnail": "string",
    "custom_role_id": 0
  }
]
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-agents-in-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Team not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|User must exist|[bad_request_error](#schemabad_request_error)|

<h3 id="update-agents-in-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-webhooks">Webhooks</h1>

Event notification webhooks

## List all webhooks

<a id="opIdlist-all-webhooks"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/webhooks`

List all webhooks in the account

<h3 id="list-all-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "url": "string",
    "name": "string",
    "subscriptions": [
      "conversation_created"
    ],
    "secret": "string",
    "account_id": 0
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[webhook](#schemawebhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a webhook

<a id="opIdcreate-a-webhook"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://example.com/webhook",
    "name": "string",
    "subscriptions": [
      "conversation_created",
      "conversation_status_changed"
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/webhooks`

Add a webhook subscription to the account

> Body parameter

```json
{
  "url": "https://example.com/webhook",
  "name": "string",
  "subscriptions": [
    "conversation_created",
    "conversation_status_changed"
  ]
}
```

<h3 id="add-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[webhook_create_update_payload](#schemawebhook_create_update_payload)|true|none|
|» url|body|string|false|The url where the events should be sent|
|» name|body|string|false|The name of the webhook|
|» subscriptions|body|[string]|false|The events you want to subscribe to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subscriptions|conversation_created|
|» subscriptions|conversation_status_changed|
|» subscriptions|conversation_updated|
|» subscriptions|message_created|
|» subscriptions|message_updated|
|» subscriptions|contact_created|
|» subscriptions|contact_updated|
|» subscriptions|webwidget_triggered|
|» subscriptions|conversation_typing_on|
|» subscriptions|conversation_typing_off|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "string",
  "name": "string",
  "subscriptions": [
    "conversation_created"
  ],
  "secret": "string",
  "account_id": 0
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[webhook](#schemawebhook)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Delete a webhook

<a id="opIddelete-a-webhook"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/webhooks/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/webhooks/{webhook_id}`

Delete a webhook from the account

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|webhook_id|path|integer|true|The numeric ID of the webhook|

> Example responses

> 401 Response

```json
{}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|The webhook does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update a webhook object

<a id="opIdupdate-a-webhook"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/webhooks/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://example.com/webhook",
    "name": "string",
    "subscriptions": [
      "conversation_created",
      "conversation_status_changed"
    ]
  }'
```

`PATCH /api/v1/accounts/{account_id}/webhooks/{webhook_id}`

Update a webhook object in the account

> Body parameter

```json
{
  "url": "https://example.com/webhook",
  "name": "string",
  "subscriptions": [
    "conversation_created",
    "conversation_status_changed"
  ]
}
```

<h3 id="update-a-webhook-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|webhook_id|path|integer|true|The numeric ID of the webhook|
|body|body|[webhook_create_update_payload](#schemawebhook_create_update_payload)|true|none|
|» url|body|string|false|The url where the events should be sent|
|» name|body|string|false|The name of the webhook|
|» subscriptions|body|[string]|false|The events you want to subscribe to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subscriptions|conversation_created|
|» subscriptions|conversation_status_changed|
|» subscriptions|conversation_updated|
|» subscriptions|message_created|
|» subscriptions|message_updated|
|» subscriptions|contact_created|
|» subscriptions|contact_updated|
|» subscriptions|webwidget_triggered|
|» subscriptions|conversation_typing_on|
|» subscriptions|conversation_typing_off|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "string",
  "name": "string",
  "subscriptions": [
    "conversation_created"
  ],
  "secret": "string",
  "account_id": 0
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-webhook-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[webhook](#schemawebhook)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-automation-rule">Automation Rule</h1>

Workflow automation rules

## List all automation rules in an account

<a id="opIdget-account-automation-rule"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/automation_rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/automation_rules`

Get details of automation rules in an Account

<h3 id="list-all-automation-rules-in-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|page|query|integer|false|The page parameter|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "account_id": 0,
      "name": "Add label on message create event",
      "description": "Add label support and sales on message create event if incoming message content contains text help",
      "event_name": "message_created",
      "conditions": [
        {
          "attribute_key": "content",
          "filter_operator": "contains",
          "values": [
            "help"
          ],
          "query_operator": "and"
        }
      ],
      "actions": [
        {
          "action_name": "add_label",
          "action_params": [
            "support",
            "sales"
          ]
        }
      ],
      "created_on": 0,
      "active": true
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-automation-rules-in-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[automation_rule](#schemaautomation_rule)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a new automation rule

<a id="opIdadd-new-automation-rule-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/automation_rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Add label on message create event",
    "description": "Add label support and sales on message create event if incoming message content contains text help",
    "event_name": "message_created",
    "active": true,
    "actions": [
      {
        "action_name": "add_label",
        "action_params": [
          "support"
        ]
      }
    ],
    "conditions": [
      {
        "attribute_key": "content",
        "filter_operator": "contains",
        "query_operator": "OR",
        "values": [
          "help"
        ]
      }
    ]
  }'
```

`POST /api/v1/accounts/{account_id}/automation_rules`

Add a new automation rule to account

> Body parameter

```json
{
  "name": "Add label on message create event",
  "description": "Add label support and sales on message create event if incoming message content contains text help",
  "event_name": "message_created",
  "active": true,
  "actions": [
    {
      "action_name": "add_label",
      "action_params": [
        "support"
      ]
    }
  ],
  "conditions": [
    {
      "attribute_key": "content",
      "filter_operator": "contains",
      "query_operator": "OR",
      "values": [
        "help"
      ]
    }
  ]
}
```

<h3 id="add-a-new-automation-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[automation_rule_create_update_payload](#schemaautomation_rule_create_update_payload)|true|none|
|» name|body|string|false|Rule name|
|» description|body|string|false|The description about the automation and actions|
|» event_name|body|string|false|The event when you want to execute the automation actions|
|» active|body|boolean|false|Enable/disable automation rule|
|» actions|body|[object]|false|Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.|
|» conditions|body|[object]|false|Array of conditions on which conversation filter would work, e.g message content contains text help.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event_name|conversation_created|
|» event_name|conversation_updated|
|» event_name|conversation_resolved|
|» event_name|message_created|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "account_id": 0,
      "name": "Add label on message create event",
      "description": "Add label support and sales on message create event if incoming message content contains text help",
      "event_name": "message_created",
      "conditions": [
        {
          "attribute_key": "content",
          "filter_operator": "contains",
          "values": [
            "help"
          ],
          "query_operator": "and"
        }
      ],
      "actions": [
        {
          "action_name": "add_label",
          "action_params": [
            "support",
            "sales"
          ]
        }
      ],
      "created_on": 0,
      "active": true
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-automation-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[automation_rule](#schemaautomation_rule)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get a automation rule details

<a id="opIdget-details-of-a-single-automation-rule"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/automation_rules/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/automation_rules/{id}`

Get the details of a automation rule in the account

<h3 id="get-a-automation-rule-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the automation rule to be updated.|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "payload": {
    "id": 90,
    "account_id": 1,
    "name": "add-label-bug-if-message-contains-bug",
    "description": "add-label-bug-if-message-contains-bug",
    "event_name": "message_created",
    "conditions": [
      {
        "values": [
          "incoming"
        ],
        "attribute_key": "message_type",
        "query_operator": "and",
        "filter_operator": "equal_to"
      },
      {
        "values": [
          "bug"
        ],
        "attribute_key": "content",
        "filter_operator": "contains"
      }
    ],
    "actions": [
      {
        "action_name": "add_label",
        "action_params": [
          "bugs",
          "support-query"
        ]
      }
    ],
    "created_on": 1650555440,
    "active": true
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-automation-rule-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[automation_rule](#schemaautomation_rule)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given rule ID does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Remove a automation rule from account

<a id="opIddelete-automation-rule-from-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/automation_rules/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/accounts/{account_id}/automation_rules/{id}`

Remove a automation rule from account

<h3 id="remove-a-automation-rule-from-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the automation rule to be deleted|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="remove-a-automation-rule-from-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|automation rule not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update automation rule in Account

<a id="opIdupdate-automation-rule-in-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/automation_rules/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Add label on message create event",
    "description": "Add label support and sales on message create event if incoming message content contains text help",
    "event_name": "message_created",
    "active": true,
    "actions": [
      {
        "action_name": "add_label",
        "action_params": [
          "support"
        ]
      }
    ],
    "conditions": [
      {
        "attribute_key": "content",
        "filter_operator": "contains",
        "query_operator": "OR",
        "values": [
          "help"
        ]
      }
    ]
  }'
```

`PATCH /api/v1/accounts/{account_id}/automation_rules/{id}`

Update a automation rule in account

> Body parameter

```json
{
  "name": "Add label on message create event",
  "description": "Add label support and sales on message create event if incoming message content contains text help",
  "event_name": "message_created",
  "active": true,
  "actions": [
    {
      "action_name": "add_label",
      "action_params": [
        "support"
      ]
    }
  ],
  "conditions": [
    {
      "attribute_key": "content",
      "filter_operator": "contains",
      "query_operator": "OR",
      "values": [
        "help"
      ]
    }
  ]
}
```

<h3 id="update-automation-rule-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The ID of the automation rule to be updated.|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[automation_rule_create_update_payload](#schemaautomation_rule_create_update_payload)|true|none|
|» name|body|string|false|Rule name|
|» description|body|string|false|The description about the automation and actions|
|» event_name|body|string|false|The event when you want to execute the automation actions|
|» active|body|boolean|false|Enable/disable automation rule|
|» actions|body|[object]|false|Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.|
|» conditions|body|[object]|false|Array of conditions on which conversation filter would work, e.g message content contains text help.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event_name|conversation_created|
|» event_name|conversation_updated|
|» event_name|conversation_resolved|
|» event_name|message_created|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "account_id": 0,
      "name": "Add label on message create event",
      "description": "Add label support and sales on message create event if incoming message content contains text help",
      "event_name": "message_created",
      "conditions": [
        {
          "attribute_key": "content",
          "filter_operator": "contains",
          "values": [
            "help"
          ],
          "query_operator": "and"
        }
      ],
      "actions": [
        {
          "action_name": "add_label",
          "action_params": [
            "support",
            "sales"
          ]
        }
      ],
      "created_on": 0,
      "active": true
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-automation-rule-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[automation_rule](#schemaautomation_rule)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Rule not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-help-center">Help Center</h1>

Knowledge base management

## List all portals in an account

<a id="opIdget-portal"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/portals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/portals`

Get details of portals in an Account

<h3 id="list-all-portals-in-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 4,
      "color": "#1F93FF",
      "custom_domain": "chatwoot.help",
      "header_text": "Handbook",
      "homepage_link": "https://www.chatwoot.com",
      "name": "Handbook",
      "page_title": "Handbook",
      "slug": "handbook",
      "archived": false,
      "account_id": 1,
      "config": {
        "allowed_locales": [
          {
            "code": "en",
            "articles_count": 32,
            "categories_count": 9
          }
        ]
      },
      "inbox": {
        "id": 37,
        "avatar_url": "https://example.com/avatar.png",
        "channel_id": 1,
        "name": "Chatwoot",
        "channel_type": "Channel::WebWidget",
        "greeting_enabled": true,
        "widget_color": "#1F93FF",
        "website_url": "chatwoot.com"
      },
      "logo": {
        "id": 19399916,
        "portal_id": 4,
        "file_type": "image/png",
        "account_id": 1,
        "file_url": "https://example.com/logo.png",
        "blob_id": 21239614,
        "filename": "square.png"
      },
      "meta": {
        "all_articles_count": 0,
        "categories_count": 9,
        "default_locale": "en"
      }
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-portals-in-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[portal](#schemaportal)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a new portal

<a id="opIdadd-new-portal-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/portals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "color": "#FFFFFF",
    "custom_domain": "chatwoot.help",
    "header_text": "Handbook",
    "homepage_link": "https://www.chatwoot.com/",
    "name": "Handbook",
    "page_title": "Handbook",
    "slug": "handbook",
    "archived": false,
    "config": {
      "allowed_locales": [
        "en",
        "es"
      ],
      "default_locale": "en"
    }
  }'
```

`POST /api/v1/accounts/{account_id}/portals`

Add a new portal to account

> Body parameter

```json
{
  "color": "#FFFFFF",
  "custom_domain": "chatwoot.help",
  "header_text": "Handbook",
  "homepage_link": "https://www.chatwoot.com/",
  "name": "Handbook",
  "page_title": "Handbook",
  "slug": "handbook",
  "archived": false,
  "config": {
    "allowed_locales": [
      "en",
      "es"
    ],
    "default_locale": "en"
  }
}
```

<h3 id="add-a-new-portal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[portal_create_update_payload](#schemaportal_create_update_payload)|true|none|
|» color|body|string|false|Header color for help-center in hex format|
|» custom_domain|body|string|false|Custom domain to display help center.|
|» header_text|body|string|false|Help center header|
|» homepage_link|body|string|false|link to main dashboard|
|» name|body|string|false|Name for the portal|
|» page_title|body|string|false|Page title for the portal|
|» slug|body|string|false|Slug for the portal to display in link|
|» archived|body|boolean|false|Status to check if portal is live|
|» config|body|object|false|Configuration about supporting locales|

> Example responses

> 200 Response

```json
{
  "payload": [
    {
      "id": 0,
      "archived": true,
      "color": "string",
      "config": {
        "allowed_locales": [
          {
            "code": "string",
            "articles_count": 0,
            "categories_count": 0
          }
        ]
      },
      "custom_domain": "string",
      "header_text": "string",
      "homepage_link": "string",
      "name": "string",
      "slug": "string",
      "page_title": "string",
      "account_id": 0,
      "inbox": {
        "id": 0,
        "name": "string",
        "website_url": "string",
        "page_id": "string",
        "instagram_id": "string",
        "business_id": "string",
        "provider_name": "string",
        "profile_id": "string",
        "line_channel_id": "string",
        "email": "string",
        "bot_name": "string",
        "inbox_identifier": "string",
        "channel_type": "string",
        "avatar_url": "string",
        "widget_color": "string",
        "website_token": "string",
        "enable_auto_assignment": true,
        "web_widget_script": "string",
        "welcome_title": "string",
        "welcome_tagline": "string",
        "greeting_enabled": true,
        "greeting_message": "string",
        "channel_id": 0,
        "working_hours_enabled": true,
        "enable_email_collect": true,
        "csat_survey_enabled": true,
        "auto_assignment_config": {},
        "out_of_office_message": "string",
        "working_hours": [
          {
            "day_of_week": 0,
            "closed_all_day": true,
            "open_hour": 0,
            "open_minutes": 0,
            "close_hour": 0,
            "close_minutes": 0,
            "open_all_day": true
          }
        ],
        "timezone": "string",
        "callback_webhook_url": "string",
        "allow_messages_after_resolved": true,
        "lock_to_single_conversation": true,
        "sender_name_type": "string",
        "business_name": "string",
        "branded_email_layout": "string",
        "hmac_mandatory": true,
        "selected_feature_flags": [
          "string"
        ],
        "reply_time": "string",
        "messaging_service_sid": "string",
        "phone_number": "string",
        "medium": "string",
        "provider": "string"
      },
      "logo": {
        "id": 0,
        "portal_id": 0,
        "file_type": "string",
        "account_id": 0,
        "file_url": "string",
        "blob_id": 0,
        "filename": "string"
      },
      "meta": {
        "all_articles_count": 0,
        "archived_articles_count": 0,
        "published_count": 0,
        "draft_articles_count": 0,
        "categories_count": 0,
        "default_locale": "string"
      }
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-portal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[portal](#schemaportal)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Get a portal details

<a id="opIdget-details-of-a-single-portal"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/portals/handbook \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/portals/{portal_slug}`

Get the details of a portal in the account

<h3 id="get-a-portal-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|portal_slug|path|string|true|The slug of the portal. The numeric portal ID is not accepted.|

> Example responses

> 200 Response

```json
{
  "id": 123,
  "archived": false,
  "color": "#1F93FF",
  "config": {
    "allowed_locales": [
      {
        "code": "en",
        "articles_count": 32,
        "categories_count": 9
      }
    ]
  },
  "custom_domain": "chatwoot.help",
  "header_text": "Handbook",
  "homepage_link": "https://www.chatwoot.com",
  "name": "Handbook",
  "slug": "handbook",
  "page_title": "Handbook",
  "account_id": 123,
  "inbox": {
    "id": 123,
    "name": "Chatwoot",
    "website_url": "chatwoot.com",
    "channel_type": "Channel::WebWidget",
    "avatar_url": "https://example.com/avatar.png",
    "widget_color": "#1F93FF",
    "website_token": "4cWzuf9i9jxN9tbnv8K9STKU",
    "enable_auto_assignment": true,
    "web_widget_script": "<script>...</script>",
    "welcome_title": "Hi there ! 🙌🏼",
    "welcome_tagline": "We make it simple to connect with us.",
    "greeting_enabled": true,
    "greeting_message": "Hey there 👋, Thank you for reaching out to us.",
    "channel_id": 123,
    "working_hours_enabled": true,
    "enable_email_collect": true,
    "csat_survey_enabled": true,
    "timezone": "America/Los_Angeles",
    "business_name": "Chatwoot",
    "hmac_mandatory": true
  },
  "logo": {
    "id": 123,
    "portal_id": 123,
    "file_type": "image/png",
    "account_id": 123,
    "file_url": "https://example.com/logo.png",
    "blob_id": 123,
    "filename": "square.png"
  },
  "meta": {
    "all_articles_count": 32,
    "categories_count": 9,
    "default_locale": "en"
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-portal-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[portal_item](#schemaportal_item)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given portal slug does not exist in the account|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update a portal

<a id="opIdupdate-portal-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/portals/handbook \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "color": "#FFFFFF",
    "custom_domain": "chatwoot.help",
    "header_text": "Handbook",
    "homepage_link": "https://www.chatwoot.com/",
    "name": "Handbook",
    "page_title": "Handbook",
    "slug": "handbook",
    "archived": false,
    "config": {
      "allowed_locales": [
        "en",
        "es"
      ],
      "default_locale": "en"
    }
  }'
```

`PATCH /api/v1/accounts/{account_id}/portals/{portal_slug}`

Update a portal to account

> Body parameter

```json
{
  "color": "#FFFFFF",
  "custom_domain": "chatwoot.help",
  "header_text": "Handbook",
  "homepage_link": "https://www.chatwoot.com/",
  "name": "Handbook",
  "page_title": "Handbook",
  "slug": "handbook",
  "archived": false,
  "config": {
    "allowed_locales": [
      "en",
      "es"
    ],
    "default_locale": "en"
  }
}
```

<h3 id="update-a-portal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|portal_slug|path|string|true|The slug of the portal. The numeric portal ID is not accepted.|
|body|body|[portal_create_update_payload](#schemaportal_create_update_payload)|true|none|
|» color|body|string|false|Header color for help-center in hex format|
|» custom_domain|body|string|false|Custom domain to display help center.|
|» header_text|body|string|false|Help center header|
|» homepage_link|body|string|false|link to main dashboard|
|» name|body|string|false|Name for the portal|
|» page_title|body|string|false|Page title for the portal|
|» slug|body|string|false|Slug for the portal to display in link|
|» archived|body|boolean|false|Status to check if portal is live|
|» config|body|object|false|Configuration about supporting locales|

> Example responses

> 200 Response

```json
{
  "payload": {
    "id": 123,
    "archived": false,
    "color": "#1F93FF",
    "config": {
      "allowed_locales": [
        {
          "code": "en",
          "articles_count": 32,
          "categories_count": 9
        }
      ]
    },
    "custom_domain": "chatwoot.help",
    "header_text": "Handbook",
    "homepage_link": "https://www.chatwoot.com",
    "name": "Handbook",
    "slug": "handbook",
    "page_title": "Handbook",
    "account_id": 123,
    "inbox": {
      "id": 123,
      "name": "Chatwoot",
      "website_url": "chatwoot.com",
      "channel_type": "Channel::WebWidget",
      "avatar_url": "https://example.com/avatar.png",
      "widget_color": "#1F93FF",
      "website_token": "4cWzuf9i9jxN9tbnv8K9STKU",
      "enable_auto_assignment": true,
      "web_widget_script": "<script>...</script>",
      "welcome_title": "Hi there ! 🙌🏼",
      "welcome_tagline": "We make it simple to connect with us.",
      "greeting_enabled": true,
      "greeting_message": "Hey there 👋, Thank you for reaching out to us.",
      "channel_id": 123,
      "working_hours_enabled": true,
      "enable_email_collect": true,
      "csat_survey_enabled": true,
      "timezone": "America/Los_Angeles",
      "business_name": "Chatwoot",
      "hmac_mandatory": true
    },
    "logo": {
      "id": 123,
      "portal_id": 123,
      "file_type": "image/png",
      "account_id": 123,
      "file_url": "https://example.com/logo.png",
      "blob_id": 123,
      "filename": "square.png"
    },
    "meta": {
      "all_articles_count": 32,
      "categories_count": 9,
      "default_locale": "en"
    }
  }
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-portal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[portal_single](#schemaportal_single)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Portal not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a new category

<a id="opIdadd-new-category-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/portals/handbook/categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Category Name",
    "description": "Category description",
    "position": 1,
    "slug": "category-name",
    "locale": "en",
    "icon": "📚",
    "parent_category_id": 1,
    "associated_category_id": 2
  }'
```

`POST /api/v1/accounts/{account_id}/portals/{portal_slug}/categories`

Add a new category to portal

> Body parameter

```json
{
  "name": "Category Name",
  "description": "Category description",
  "position": 1,
  "slug": "category-name",
  "locale": "en",
  "icon": "📚",
  "parent_category_id": 1,
  "associated_category_id": 2
}
```

<h3 id="add-a-new-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|portal_slug|path|string|true|The slug of the portal. The numeric portal ID is not accepted.|
|body|body|[category_create_update_payload](#schemacategory_create_update_payload)|true|none|
|» name|body|string|false|The name of the category|
|» description|body|string|false|A description for the category|
|» position|body|integer|false|Category position in the portal list to sort|
|» slug|body|string|false|The category slug used in the URL|
|» locale|body|string|false|The locale of the category|
|» icon|body|string|false|The icon of the category as a string (emoji)|
|» parent_category_id|body|integer|false|To define parent category, e.g product documentation has multiple level features in sales category or in engineering category.|
|» associated_category_id|body|integer|false|To associate similar categories to each other, e.g same category of product documentation in different languages|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "description": "string",
  "locale": "string",
  "name": "string",
  "slug": "string",
  "position": 0,
  "portal_id": 0,
  "account_id": 0,
  "associated_category_id": 0,
  "parent_category_id": 0
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[category](#schemacategory)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Add a new article

<a id="opIdadd-new-article-to-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/portals/handbook/articles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "Article Title",
    "slug": "article-title",
    "position": 1,
    "content": "This is the content of the article",
    "description": "This is the description of the article",
    "category_id": 1,
    "author_id": 1,
    "associated_article_id": 2,
    "status": 1,
    "locale": "en",
    "meta": {
      "tags": [
        "article_name"
      ],
      "title": "article title",
      "description": "article description"
    }
  }'
```

`POST /api/v1/accounts/{account_id}/portals/{portal_slug}/articles`

Add a new article to portal

> Body parameter

```json
{
  "title": "Article Title",
  "slug": "article-title",
  "position": 1,
  "content": "This is the content of the article",
  "description": "This is the description of the article",
  "category_id": 1,
  "author_id": 1,
  "associated_article_id": 2,
  "status": 1,
  "locale": "en",
  "meta": {
    "tags": [
      "article_name"
    ],
    "title": "article title",
    "description": "article description"
  }
}
```

<h3 id="add-a-new-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|portal_slug|path|string|true|The slug of the portal. The numeric portal ID is not accepted.|
|body|body|[article_create_update_payload](#schemaarticle_create_update_payload)|true|none|
|» title|body|string|false|The title of the article|
|» slug|body|string|false|The slug of the article|
|» position|body|integer|false|article position in category|
|» content|body|string|false|The text content.|
|» description|body|string|false|The description of the article|
|» category_id|body|integer|false|The category id of the article|
|» author_id|body|integer|false|The author agent id of the article|
|» associated_article_id|body|integer|false|To associate similar articles to each other, e.g to provide the link for the reference.|
|» status|body|integer|false|The status of the article. 0 for draft, 1 for published, 2 for archived|
|» locale|body|string|false|The locale of the article|
|» meta|body|object|false|Use for search|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "content": "string",
  "meta": {},
  "position": 0,
  "status": "draft",
  "title": "string",
  "slug": "string",
  "views": 0,
  "portal_id": 0,
  "account_id": 0,
  "author_id": 0,
  "category_id": 0,
  "folder_id": 0,
  "associated_article_id": 0
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="add-a-new-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[article](#schemaarticle)|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-contacts-api">Contacts API</h1>

Public contact APIs

## Create a contact

<a id="opIdcreate-a-contact"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identifier": "1234567890",
    "identifier_hash": "e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9",
    "email": "alice@acme.inc",
    "name": "Alice",
    "phone_number": "+123456789",
    "avatar": "string",
    "custom_attributes": {}
  }'
```

`POST /public/api/v1/inboxes/{inbox_identifier}/contacts`

Create a contact

> Body parameter

```json
{
  "identifier": "1234567890",
  "identifier_hash": "e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9",
  "email": "alice@acme.inc",
  "name": "Alice",
  "phone_number": "+123456789",
  "avatar": "string",
  "custom_attributes": {}
}
```

<h3 id="create-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|body|body|[public_contact_create_update_payload](#schemapublic_contact_create_update_payload)|true|none|
|» identifier|body|string|false|External identifier of the contact|
|» identifier_hash|body|string|false|Identifier hash prepared for HMAC authentication|
|» email|body|string|false|Email of the contact|
|» name|body|string|false|Name of the contact|
|» phone_number|body|string|false|Phone number of the contact|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» custom_attributes|body|object|false|Custom attributes of the customer|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "source_id": "string",
  "name": "string",
  "email": "string",
  "phone_number": "string",
  "pubsub_token": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_contact](#schemapublic_contact)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a contact

<a id="opIdget-details-of-a-contact"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string \
  -H 'Accept: application/json'
```

`GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}`

Get the details of a contact

<h3 id="get-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "source_id": "string",
  "name": "string",
  "email": "string",
  "phone_number": "string",
  "pubsub_token": "string"
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_contact](#schemapublic_contact)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given contact does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a contact

<a id="opIdupdate-a-contact"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identifier": "1234567890",
    "identifier_hash": "e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9",
    "email": "alice@acme.inc",
    "name": "Alice",
    "phone_number": "+123456789",
    "avatar": "string",
    "custom_attributes": {}
  }'
```

`PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}`

Update a contact's attributes

> Body parameter

```json
{
  "identifier": "1234567890",
  "identifier_hash": "e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9",
  "email": "alice@acme.inc",
  "name": "Alice",
  "phone_number": "+123456789",
  "avatar": "string",
  "custom_attributes": {}
}
```

<h3 id="update-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|body|body|[public_contact_create_update_payload](#schemapublic_contact_create_update_payload)|true|none|
|» identifier|body|string|false|External identifier of the contact|
|» identifier_hash|body|string|false|Identifier hash prepared for HMAC authentication|
|» email|body|string|false|Email of the contact|
|» name|body|string|false|Name of the contact|
|» phone_number|body|string|false|Phone number of the contact|
|» avatar|body|string(binary)|false|Send the form data with the avatar image binary or use the avatar_url|
|» custom_attributes|body|object|false|Custom attributes of the customer|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "email": "string",
  "phone_number": "string",
  "identifier": "string",
  "blocked": true,
  "additional_attributes": {},
  "custom_attributes": {},
  "contact_type": "string",
  "country_code": "string",
  "last_activity_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "last_name": "string",
  "middle_name": "string",
  "location": "string",
  "account_id": 0,
  "company_id": 0,
  "label_list": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_contact_record](#schemapublic_contact_record)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chatwoot-conversations-api">Conversations API</h1>

Public conversation APIs

## List all conversations

<a id="opIdlist-all-contact-conversations"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations \
  -H 'Accept: application/json'
```

`GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations`

List all conversations for the contact

<h3 id="list-all-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "uuid": "string",
    "inbox_id": 0,
    "contact_last_seen_at": 0,
    "status": "open",
    "agent_last_seen_at": 0,
    "messages": [
      {
        "id": 0,
        "content": "string",
        "message_type": 0,
        "content_type": "string",
        "content_attributes": {},
        "created_at": 0,
        "conversation_id": 0,
        "attachments": [
          {
            "id": 0,
            "message_id": 0,
            "file_type": "image",
            "account_id": 0,
            "extension": "string",
            "data_url": "string",
            "thumb_url": "string",
            "file_size": 0,
            "width": 0,
            "height": 0,
            "coordinates_lat": 0,
            "coordinates_long": 0,
            "fallback_title": "string",
            "meta": {},
            "transcribed_text": "string"
          }
        ],
        "sender": {
          "id": 0,
          "name": "string",
          "avatar_url": "string",
          "thumbnail": "string",
          "type": "contact",
          "available_name": "string",
          "availability_status": "string",
          "email": "string",
          "phone_number": "string",
          "identifier": "string",
          "blocked": true,
          "additional_attributes": {},
          "custom_attributes": {},
          "description": "string",
          "created_at": "string"
        }
      }
    ],
    "contact": {
      "id": 0,
      "name": "string",
      "email": "string",
      "phone_number": "string",
      "identifier": "string",
      "blocked": true,
      "additional_attributes": {},
      "custom_attributes": {},
      "contact_type": "string",
      "country_code": "string",
      "last_activity_at": "string",
      "created_at": "string",
      "updated_at": "string",
      "last_name": "string",
      "middle_name": "string",
      "location": "string",
      "account_id": 0,
      "company_id": 0,
      "label_list": [
        "string"
      ]
    }
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[public_conversation](#schemapublic_conversation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a conversation

<a id="opIdcreate-a-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "custom_attributes": {}
  }'
```

`POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations`

Create a conversation

> Body parameter

```json
{
  "custom_attributes": {}
}
```

<h3 id="create-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|body|body|[public_conversation_create_payload](#schemapublic_conversation_create_payload)|true|none|
|» custom_attributes|body|object|false|Custom attributes of the conversation|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uuid": "string",
  "inbox_id": 0,
  "contact_last_seen_at": 0,
  "status": "open",
  "agent_last_seen_at": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "message_type": 0,
      "content_type": "string",
      "content_attributes": {},
      "created_at": 0,
      "conversation_id": 0,
      "attachments": [
        {
          "id": 0,
          "message_id": 0,
          "file_type": "image",
          "account_id": 0,
          "extension": "string",
          "data_url": "string",
          "thumb_url": "string",
          "file_size": 0,
          "width": 0,
          "height": 0,
          "coordinates_lat": 0,
          "coordinates_long": 0,
          "fallback_title": "string",
          "meta": {},
          "transcribed_text": "string"
        }
      ],
      "sender": {
        "id": 0,
        "name": "string",
        "avatar_url": "string",
        "thumbnail": "string",
        "type": "contact",
        "available_name": "string",
        "availability_status": "string",
        "email": "string",
        "phone_number": "string",
        "identifier": "string",
        "blocked": true,
        "additional_attributes": {},
        "custom_attributes": {},
        "description": "string",
        "created_at": "string"
      }
    }
  ],
  "contact": {
    "id": 0,
    "name": "string",
    "email": "string",
    "phone_number": "string",
    "identifier": "string",
    "blocked": true,
    "additional_attributes": {},
    "custom_attributes": {},
    "contact_type": "string",
    "country_code": "string",
    "last_activity_at": "string",
    "created_at": "string",
    "updated_at": "string",
    "last_name": "string",
    "middle_name": "string",
    "location": "string",
    "account_id": 0,
    "company_id": 0,
    "label_list": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_conversation](#schemapublic_conversation)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single conversation

<a id="opIdget-single-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations/0 \
  -H 'Accept: application/json'
```

`GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}`

Retrieves the details of a specific conversation

<h3 id="get-a-single-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uuid": "string",
  "inbox_id": 0,
  "contact_last_seen_at": 0,
  "status": "open",
  "agent_last_seen_at": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "message_type": 0,
      "content_type": "string",
      "content_attributes": {},
      "created_at": 0,
      "conversation_id": 0,
      "attachments": [
        {
          "id": 0,
          "message_id": 0,
          "file_type": "image",
          "account_id": 0,
          "extension": "string",
          "data_url": "string",
          "thumb_url": "string",
          "file_size": 0,
          "width": 0,
          "height": 0,
          "coordinates_lat": 0,
          "coordinates_long": 0,
          "fallback_title": "string",
          "meta": {},
          "transcribed_text": "string"
        }
      ],
      "sender": {
        "id": 0,
        "name": "string",
        "avatar_url": "string",
        "thumbnail": "string",
        "type": "contact",
        "available_name": "string",
        "availability_status": "string",
        "email": "string",
        "phone_number": "string",
        "identifier": "string",
        "blocked": true,
        "additional_attributes": {},
        "custom_attributes": {},
        "description": "string",
        "created_at": "string"
      }
    }
  ],
  "contact": {
    "id": 0,
    "name": "string",
    "email": "string",
    "phone_number": "string",
    "identifier": "string",
    "blocked": true,
    "additional_attributes": {},
    "custom_attributes": {},
    "contact_type": "string",
    "country_code": "string",
    "last_activity_at": "string",
    "created_at": "string",
    "updated_at": "string",
    "last_name": "string",
    "middle_name": "string",
    "location": "string",
    "account_id": 0,
    "company_id": 0,
    "label_list": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-a-single-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_conversation](#schemapublic_conversation)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

## Resolve a conversation

<a id="opIdresolve-conversation"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations/0/toggle_status \
  -X POST \
  -H 'Accept: application/json'
```

`POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_status`

Marks a conversation as resolved

<h3 id="resolve-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uuid": "string",
  "inbox_id": 0,
  "contact_last_seen_at": 0,
  "status": "open",
  "agent_last_seen_at": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "message_type": 0,
      "content_type": "string",
      "content_attributes": {},
      "created_at": 0,
      "conversation_id": 0,
      "attachments": [
        {
          "id": 0,
          "message_id": 0,
          "file_type": "image",
          "account_id": 0,
          "extension": "string",
          "data_url": "string",
          "thumb_url": "string",
          "file_size": 0,
          "width": 0,
          "height": 0,
          "coordinates_lat": 0,
          "coordinates_long": 0,
          "fallback_title": "string",
          "meta": {},
          "transcribed_text": "string"
        }
      ],
      "sender": {
        "id": 0,
        "name": "string",
        "avatar_url": "string",
        "thumbnail": "string",
        "type": "contact",
        "available_name": "string",
        "availability_status": "string",
        "email": "string",
        "phone_number": "string",
        "identifier": "string",
        "blocked": true,
        "additional_attributes": {},
        "custom_attributes": {},
        "description": "string",
        "created_at": "string"
      }
    }
  ],
  "contact": {
    "id": 0,
    "name": "string",
    "email": "string",
    "phone_number": "string",
    "identifier": "string",
    "blocked": true,
    "additional_attributes": {},
    "custom_attributes": {},
    "contact_type": "string",
    "country_code": "string",
    "last_activity_at": "string",
    "created_at": "string",
    "updated_at": "string",
    "last_name": "string",
    "middle_name": "string",
    "location": "string",
    "account_id": 0,
    "company_id": 0,
    "label_list": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="resolve-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation resolved successfully|[public_conversation](#schemapublic_conversation)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

## Toggle typing status

<a id="opIdtoggle-typing-status"></a>

> Code samples

```bash
curl 'https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations/0/toggle_typing?typing_status=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "typing_status": "on"
  }'
```

`POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_typing`

Toggles the typing status in a conversation

> Body parameter

```json
{
  "typing_status": "on"
}
```

<h3 id="toggle-typing-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|typing_status|query|string|true|Typing status, either 'on' or 'off'|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|object|true|none|
|» typing_status|body|string|false|The typing status to set|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» typing_status|on|
|» typing_status|off|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="toggle-typing-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typing status toggled successfully|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

## Update last seen and mark messages read

<a id="opIdupdate-last-seen"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations/0/update_last_seen \
  -X POST \
  -H 'Accept: application/json'
```

`POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/update_last_seen`

Updates the contact's last seen time for the conversation and marks agent messages
sent before that time as read. Use this to send read receipts from a custom client
built on the API channel, so agents can see when the contact has read their messages.


<h3 id="update-last-seen-and-mark-messages-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-last-seen-and-mark-messages-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Last seen updated successfully|None|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Conversation not found|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chatwoot-messages-api">Messages API</h1>

Public message APIs

## List all messages

<a id="opIdlist-all-conversation-messages"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations/0/messages \
  -H 'Accept: application/json'
```

`GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages`

List all messages in the conversation

<h3 id="list-all-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|conversation_id|path|integer|true|The numeric ID of the conversation|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "content": "string",
    "message_type": 0,
    "content_type": "string",
    "content_attributes": {},
    "created_at": 0,
    "conversation_id": 0,
    "attachments": [
      {
        "id": 0,
        "message_id": 0,
        "file_type": "image",
        "account_id": 0,
        "extension": "string",
        "data_url": "string",
        "thumb_url": "string",
        "file_size": 0,
        "width": 0,
        "height": 0,
        "coordinates_lat": 0,
        "coordinates_long": 0,
        "fallback_title": "string",
        "meta": {},
        "transcribed_text": "string"
      }
    ],
    "sender": {
      "id": 0,
      "name": "string",
      "avatar_url": "string",
      "thumbnail": "string",
      "type": "contact",
      "available_name": "string",
      "availability_status": "string",
      "email": "string",
      "phone_number": "string",
      "identifier": "string",
      "blocked": true,
      "additional_attributes": {},
      "custom_attributes": {},
      "description": "string",
      "created_at": "string"
    }
  }
]
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-all-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<h3 id="list-all-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[public_message](#schemapublic_message)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a message

<a id="opIdcreate-a-message"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations/0/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "Hello, how can I help you?",
    "echo_id": "1234567890"
  }'
```

`POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages`

Create a message

> Body parameter

```json
{
  "content": "Hello, how can I help you?",
  "echo_id": "1234567890"
}
```

<h3 id="create-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|body|body|[public_message_create_payload](#schemapublic_message_create_payload)|true|none|
|» content|body|string|false|Content for the message|
|» echo_id|body|string|false|Temporary identifier which will be passed back via websockets|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "content": "string",
  "message_type": 0,
  "content_type": "string",
  "content_attributes": {},
  "created_at": 0,
  "conversation_id": 0,
  "attachments": [
    {
      "id": 0,
      "message_id": 0,
      "file_type": "image",
      "account_id": 0,
      "extension": "string",
      "data_url": "string",
      "thumb_url": "string",
      "file_size": 0,
      "width": 0,
      "height": 0,
      "coordinates_lat": 0,
      "coordinates_long": 0,
      "fallback_title": "string",
      "meta": {},
      "transcribed_text": "string"
    }
  ],
  "sender": {
    "id": 0,
    "name": "string",
    "avatar_url": "string",
    "thumbnail": "string",
    "type": "contact",
    "available_name": "string",
    "availability_status": "string",
    "email": "string",
    "phone_number": "string",
    "identifier": "string",
    "blocked": true,
    "additional_attributes": {},
    "custom_attributes": {},
    "description": "string",
    "created_at": "string"
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="create-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_message](#schemapublic_message)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a message

<a id="opIdupdate-a-message"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string/contacts/string/conversations/0/messages/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "submitted_values": {
      "name": "My Name",
      "title": "My Title",
      "value": "value",
      "csat_survey_response": {
        "feedback_message": "Great service!",
        "rating": 5
      }
    }
  }'
```

`PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}`

Update a message

> Body parameter

```json
{
  "submitted_values": {
    "name": "My Name",
    "title": "My Title",
    "value": "value",
    "csat_survey_response": {
      "feedback_message": "Great service!",
      "rating": 5
    }
  }
}
```

<h3 id="update-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|
|contact_identifier|path|string|true|The source id of contact obtained on contact create|
|conversation_id|path|integer|true|The numeric ID of the conversation|
|message_id|path|integer|true|The numeric ID of the message|
|body|body|[public_message_update_payload](#schemapublic_message_update_payload)|true|none|
|» submitted_values|body|object|false|Replies to the Bot Message Types|
|» » name|body|string|false|The name of the submiitted value|
|» » title|body|string|false|The title of the submitted value|
|» » value|body|string|false|The value of the submitted value|
|» » csat_survey_response|body|object|false|The CSAT survey response|
|» » » feedback_message|body|string|false|The feedback message of the CSAT survey response|
|» » » rating|body|integer|false|The rating of the CSAT survey response|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "content": "string",
  "message_type": 0,
  "content_type": "string",
  "content_attributes": {},
  "created_at": 0,
  "conversation_id": 0,
  "attachments": [
    {
      "id": 0,
      "message_id": 0,
      "file_type": "image",
      "account_id": 0,
      "extension": "string",
      "data_url": "string",
      "thumb_url": "string",
      "file_size": 0,
      "width": 0,
      "height": 0,
      "coordinates_lat": 0,
      "coordinates_long": 0,
      "fallback_title": "string",
      "meta": {},
      "transcribed_text": "string"
    }
  ],
  "sender": {
    "id": 0,
    "name": "string",
    "avatar_url": "string",
    "thumbnail": "string",
    "type": "contact",
    "available_name": "string",
    "availability_status": "string",
    "email": "string",
    "phone_number": "string",
    "identifier": "string",
    "blocked": true,
    "additional_attributes": {},
    "custom_attributes": {},
    "description": "string",
    "created_at": "string"
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_message](#schemapublic_message)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chatwoot-csat-survey-page">CSAT Survey Page</h1>

Customer satisfaction survey

## Get CSAT survey page

<a id="opIdget-csat-survey-page"></a>

> Code samples

```bash
curl https://app.chatwoot.com/survey/responses/0
```

`GET /survey/responses/{conversation_uuid}`

You can redirect the client to this URL, instead of implementing the CSAT survey component yourself.

<h3 id="get-csat-survey-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_uuid|path|integer|true|The uuid of the conversation|

<h3 id="get-csat-survey-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chatwoot-inbox-api">Inbox API</h1>

## Inbox details

<a id="opIdget-details-of-a-inbox"></a>

> Code samples

```bash
curl https://app.chatwoot.com/public/api/v1/inboxes/string \
  -H 'Accept: application/json'
```

`GET /public/api/v1/inboxes/{inbox_identifier}`

Get the details of an inbox

<h3 id="inbox-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_identifier|path|string|true|The identifier obtained from API inbox channel|

> Example responses

> 200 Response

```json
{
  "identifier": "string",
  "name": "string",
  "timezone": "string",
  "working_hours": [
    {
      "day_of_week": 0,
      "open_all_day": true,
      "closed_all_day": true,
      "open_hour": 0,
      "open_minutes": 0,
      "close_hour": 0,
      "close_minutes": 0
    }
  ],
  "working_hours_enabled": true,
  "csat_survey_enabled": true,
  "greeting_enabled": true,
  "identity_validation_enabled": true
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="inbox-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[public_inbox](#schemapublic_inbox)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|The given inbox does not exist|[bad_request_error](#schemabad_request_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chatwoot-account">Account</h1>

## Get account details

<a id="opIdget-account-details"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}`

Get the details of the current account

<h3 id="get-account-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "locale": "string",
  "domain": "string",
  "support_email": "string",
  "status": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "cache_keys": {},
  "features": {},
  "settings": {
    "auto_resolve_after": 0,
    "auto_resolve_message": "string",
    "auto_resolve_ignore_waiting": true
  },
  "custom_attributes": {
    "plan_name": "string",
    "subscribed_quantity": 0,
    "subscription_status": "string",
    "subscription_ends_on": "1970-01-01",
    "industry": "string",
    "company_size": "string",
    "timezone": "string",
    "logo": "string",
    "onboarding_step": "string",
    "marked_for_deletion_at": "1970-01-01T00:00:00Z",
    "marked_for_deletion_reason": "string"
  },
  "latest_chatwoot_version": "3.0.0",
  "subscribed_features": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="get-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account_show_response](#schemaaccount_show_response)|
|401|Unauthorized|Unauthorized|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Account not found|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

## Update account

<a id="opIdupdate-account"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Account",
    "locale": "en",
    "domain": "example.com",
    "support_email": "support@example.com",
    "auto_resolve_after": 1440,
    "auto_resolve_message": "This conversation has been automatically resolved due to inactivity",
    "auto_resolve_ignore_waiting": false,
    "industry": "Technology",
    "company_size": "50-100",
    "timezone": "UTC"
  }'
```

`PATCH /api/v1/accounts/{account_id}`

Update account details, settings, and custom attributes

> Body parameter

```json
{
  "name": "My Account",
  "locale": "en",
  "domain": "example.com",
  "support_email": "support@example.com",
  "auto_resolve_after": 1440,
  "auto_resolve_message": "This conversation has been automatically resolved due to inactivity",
  "auto_resolve_ignore_waiting": false,
  "industry": "Technology",
  "company_size": "50-100",
  "timezone": "UTC"
}
```

<h3 id="update-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|body|body|[account_update_payload](#schemaaccount_update_payload)|true|none|
|» name|body|string|false|Name of the account|
|» locale|body|string|false|The locale of the account|
|» domain|body|string|false|The domain of the account|
|» support_email|body|string|false|The support email of the account|
|» auto_resolve_after|body|integer \| null|false|Auto resolve conversations after specified minutes|
|» auto_resolve_message|body|string \| null|false|Message to send when auto resolving|
|» auto_resolve_ignore_waiting|body|boolean \| null|false|Whether to ignore waiting conversations for auto resolve|
|» industry|body|string|false|Industry type|
|» company_size|body|string|false|Company size|
|» timezone|body|string|false|Account timezone|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "locale": "string",
  "domain": "string",
  "support_email": "string",
  "status": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "cache_keys": {},
  "features": {},
  "settings": {
    "auto_resolve_after": 0,
    "auto_resolve_message": "string",
    "auto_resolve_ignore_waiting": true
  },
  "custom_attributes": {
    "plan_name": "string",
    "subscribed_quantity": 0,
    "subscription_status": "string",
    "subscription_ends_on": "1970-01-01",
    "industry": "string",
    "company_size": "string",
    "timezone": "string",
    "logo": "string",
    "onboarding_step": "string",
    "marked_for_deletion_at": "1970-01-01T00:00:00Z",
    "marked_for_deletion_reason": "string"
  }
}
```

> 401 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="update-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account_detail](#schemaaccount_detail)|
|401|Unauthorized|Unauthorized (requires administrator role)|[bad_request_error](#schemabad_request_error)|
|404|Not Found|Account not found|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|Validation error|[bad_request_error](#schemabad_request_error)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-audit-logs">Audit Logs</h1>

## List Audit Logs in Account

<a id="opIdget-account-audit-logs"></a>

> Code samples

```bash
curl https://app.chatwoot.com/api/v1/accounts/0/audit_logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{account_id}/audit_logs`

Get Details of Audit Log entries for an Account. This endpoint is only available in Enterprise editions and requires the audit_logs feature to be enabled.

<h3 id="list-audit-logs-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number for pagination|
|q|query|string|false|Filter entries by the name or email of the user who performed the action|
|types|query|[string]|false|Filter entries by the type of the audited record|
|since|query|integer|false|Only return entries created at or after this unix timestamp|
|until|query|integer|false|Only return entries created at or before this unix timestamp|
|sort|query|string|false|Order of the entries by creation time|
|account_id|path|integer|true|The numeric ID of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "per_page": 25,
  "total_entries": 150,
  "current_page": 1,
  "audit_logs": [
    {
      "id": 0,
      "auditable_id": 0,
      "auditable_type": "string",
      "auditable": {},
      "associated_id": 0,
      "associated_type": "string",
      "user_id": 0,
      "user_type": "string",
      "username": "string",
      "action": "create",
      "audited_changes": {},
      "version": 0,
      "comment": "string",
      "request_uuid": "string",
      "created_at": 0,
      "remote_address": "string",
      "location": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

<h3 id="list-audit-logs-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Access denied|[bad_request_error](#schemabad_request_error)|
|422|Unprocessable Entity|Feature not enabled or not available in current plan|[bad_request_error](#schemabad_request_error)|

<h3 id="list-audit-logs-in-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|per_page|integer|false|none|Number of items per page|
|total_entries|integer|false|none|Total number of audit log entries|
|current_page|integer|false|none|Current page number|
|audit_logs|[[audit_log](#schemaaudit_log)]|false|none|Array of audit log entries|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userBearerAuth, userApiKey
</aside>

<h1 id="chatwoot-conversation">Conversation</h1>

## Get messages from a conversation

<a id="opIdgetConversationMessages"></a>

> Code samples

```bash
curl https://app.chatwoot.com/accounts/0/conversations/0/messages \
  -H 'Accept: application/json'
```

`GET /accounts/{account_id}/conversations/{conversation_id}/messages`

Returns all messages from a specific conversation

<h3 id="get-messages-from-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|The numeric ID of the account|
|conversation_id|path|number|true|ID of the conversation|

> Example responses

> 200 Response

```json
{
  "meta": {
    "labels": [
      "string"
    ],
    "additional_attributes": {
      "browser": {
        "device_name": "string",
        "browser_name": "string",
        "platform_name": "string",
        "browser_version": "string",
        "platform_version": "string"
      },
      "referer": "string",
      "initiated_at": {
        "timestamp": "string"
      },
      "browser_language": "string",
      "conversation_language": "string"
    },
    "contact": {
      "additional_attributes": {
        "city": "string",
        "country": "string",
        "country_code": "string",
        "created_at_ip": "string"
      },
      "custom_attributes": {},
      "email": "string",
      "id": 0,
      "identifier": "string",
      "name": "string",
      "phone_number": "string",
      "thumbnail": "string",
      "blocked": true,
      "type": "contact"
    },
    "assignee": {
      "id": 0,
      "account_id": 0,
      "availability_status": "online",
      "auto_offline": true,
      "confirmed": true,
      "email": "string",
      "available_name": "string",
      "name": "string",
      "role": "agent",
      "thumbnail": "string",
      "custom_role_id": 0
    },
    "agent_last_seen_at": "string",
    "assignee_last_seen_at": "string"
  },
  "payload": [
    {
      "id": 0,
      "content": "string",
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "content_type": "text",
      "status": "sent",
      "content_attributes": {
        "in_reply_to": "string"
      },
      "echo_id": "string",
      "created_at": 0,
      "private": true,
      "source_id": "string",
      "sender": {
        "additional_attributes": {
          "city": "string",
          "country": "string",
          "country_code": "string",
          "created_at_ip": "string"
        },
        "custom_attributes": {},
        "email": "string",
        "id": 0,
        "identifier": "string",
        "name": "string",
        "phone_number": "string",
        "thumbnail": "string",
        "blocked": true,
        "type": "contact"
      },
      "attachments": [
        {
          "id": 0,
          "message_id": 0,
          "file_type": "image",
          "account_id": 0,
          "data_url": "string",
          "thumb_url": "string",
          "file_size": 0
        }
      ]
    }
  ]
}
```

<h3 id="get-messages-from-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[conversation_messages](#schemaconversation_messages)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_bad_request_error">bad_request_error</h2>
<!-- backwards compatibility -->
<a id="schemabad_request_error"></a>
<a id="schema_bad_request_error"></a>
<a id="tocSbad_request_error"></a>
<a id="tocsbad_request_error"></a>

```json
{
  "description": "string",
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|errors|[[request_error](#schemarequest_error)]|false|none|none|

<h2 id="tocS_request_error">request_error</h2>
<!-- backwards compatibility -->
<a id="schemarequest_error"></a>
<a id="schema_request_error"></a>
<a id="tocSrequest_error"></a>
<a id="tocsrequest_error"></a>

```json
{
  "field": "string",
  "message": "string",
  "code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|message|string|false|none|none|
|code|string|false|none|none|

<h2 id="tocS_generic_id">generic_id</h2>
<!-- backwards compatibility -->
<a id="schemageneric_id"></a>
<a id="schema_generic_id"></a>
<a id="tocSgeneric_id"></a>
<a id="tocsgeneric_id"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|

<h2 id="tocS_canned_response">canned_response</h2>
<!-- backwards compatibility -->
<a id="schemacanned_response"></a>
<a id="schema_canned_response"></a>
<a id="tocScanned_response"></a>
<a id="tocscanned_response"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "short_code": "string",
  "content": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|ID of the canned response|
|account_id|integer|false|none|Account Id|
|short_code|string|false|none|Short Code for quick access of the canned response|
|content|string|false|none|Message content for canned response|
|created_at|string|false|none|The date and time when the canned response was created|
|updated_at|string|false|none|The date and time when the canned response was updated|

<h2 id="tocS_custom_attribute">custom_attribute</h2>
<!-- backwards compatibility -->
<a id="schemacustom_attribute"></a>
<a id="schema_custom_attribute"></a>
<a id="tocScustom_attribute"></a>
<a id="tocscustom_attribute"></a>

```json
{
  "id": 0,
  "attribute_display_name": "string",
  "attribute_display_type": "string",
  "attribute_description": "string",
  "attribute_key": "string",
  "regex_pattern": "string",
  "regex_cue": "string",
  "attribute_values": "string",
  "attribute_model": "string",
  "default_value": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Identifier|
|attribute_display_name|string|false|none|Attribute display name|
|attribute_display_type|string|false|none|Attribute display type (text, number, currency, percent, link, date, list, checkbox)|
|attribute_description|string|false|none|Attribute description|
|attribute_key|string|false|none|Attribute unique key value|
|regex_pattern|string|false|none|Regex pattern|
|regex_cue|string|false|none|Regex cue|
|attribute_values|string|false|none|Attribute values|
|attribute_model|string|false|none|Attribute type(conversation_attribute/contact_attribute)|
|default_value|string|false|none|Attribute default value|
|created_at|string|false|none|The date and time when the custom attribute was created|
|updated_at|string|false|none|The date and time when the custom attribute was updated|

<h2 id="tocS_automation_rule">automation_rule</h2>
<!-- backwards compatibility -->
<a id="schemaautomation_rule"></a>
<a id="schema_automation_rule"></a>
<a id="tocSautomation_rule"></a>
<a id="tocsautomation_rule"></a>

```json
{
  "payload": [
    {
      "id": 0,
      "account_id": 0,
      "name": "Add label on message create event",
      "description": "Add label support and sales on message create event if incoming message content contains text help",
      "event_name": "message_created",
      "conditions": [
        {
          "attribute_key": "content",
          "filter_operator": "contains",
          "values": [
            "help"
          ],
          "query_operator": "and"
        }
      ],
      "actions": [
        {
          "action_name": "add_label",
          "action_params": [
            "support",
            "sales"
          ]
        }
      ],
      "created_on": 0,
      "active": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[automation_rule_item](#schemaautomation_rule_item)] \| object|false|none|Response payload that contains automation rule(s)|

<h2 id="tocS_automation_rule_item">automation_rule_item</h2>
<!-- backwards compatibility -->
<a id="schemaautomation_rule_item"></a>
<a id="schema_automation_rule_item"></a>
<a id="tocSautomation_rule_item"></a>
<a id="tocsautomation_rule_item"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "name": "Add label on message create event",
  "description": "Add label support and sales on message create event if incoming message content contains text help",
  "event_name": "message_created",
  "conditions": [
    {
      "attribute_key": "content",
      "filter_operator": "contains",
      "values": [
        "help"
      ],
      "query_operator": "and"
    }
  ],
  "actions": [
    {
      "action_name": "add_label",
      "action_params": [
        "support",
        "sales"
      ]
    }
  ],
  "created_on": 0,
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|The ID of the automation rule|
|account_id|integer|false|none|Account Id|
|name|string|false|none|The name of the rule|
|description|string|false|none|Description to give more context about the rule|
|event_name|string|false|none|Automation Rule event, on which we call the actions(conversation_created, conversation_updated, message_created)|
|conditions|[object]|false|none|Array of conditions on which conversation/message filter would work|
|actions|[object]|false|none|Array of actions which we perform when condition matches|
|created_on|integer|false|none|The timestamp when the rule was created|
|active|boolean|false|none|Enable/disable automation rule|

#### Enumerated Values

|Property|Value|
|---|---|
|event_name|conversation_created|
|event_name|conversation_updated|
|event_name|message_created|

<h2 id="tocS_portal">portal</h2>
<!-- backwards compatibility -->
<a id="schemaportal"></a>
<a id="schema_portal"></a>
<a id="tocSportal"></a>
<a id="tocsportal"></a>

```json
{
  "payload": [
    {
      "id": 0,
      "archived": true,
      "color": "string",
      "config": {
        "allowed_locales": [
          {
            "code": "string",
            "articles_count": 0,
            "categories_count": 0
          }
        ]
      },
      "custom_domain": "string",
      "header_text": "string",
      "homepage_link": "string",
      "name": "string",
      "slug": "string",
      "page_title": "string",
      "account_id": 0,
      "inbox": {
        "id": 0,
        "name": "string",
        "website_url": "string",
        "page_id": "string",
        "instagram_id": "string",
        "business_id": "string",
        "provider_name": "string",
        "profile_id": "string",
        "line_channel_id": "string",
        "email": "string",
        "bot_name": "string",
        "inbox_identifier": "string",
        "channel_type": "string",
        "avatar_url": "string",
        "widget_color": "string",
        "website_token": "string",
        "enable_auto_assignment": true,
        "web_widget_script": "string",
        "welcome_title": "string",
        "welcome_tagline": "string",
        "greeting_enabled": true,
        "greeting_message": "string",
        "channel_id": 0,
        "working_hours_enabled": true,
        "enable_email_collect": true,
        "csat_survey_enabled": true,
        "auto_assignment_config": {},
        "out_of_office_message": "string",
        "working_hours": [
          {
            "day_of_week": 0,
            "closed_all_day": true,
            "open_hour": 0,
            "open_minutes": 0,
            "close_hour": 0,
            "close_minutes": 0,
            "open_all_day": true
          }
        ],
        "timezone": "string",
        "callback_webhook_url": "string",
        "allow_messages_after_resolved": true,
        "lock_to_single_conversation": true,
        "sender_name_type": "string",
        "business_name": "string",
        "branded_email_layout": "string",
        "hmac_mandatory": true,
        "selected_feature_flags": [
          "string"
        ],
        "reply_time": "string",
        "messaging_service_sid": "string",
        "phone_number": "string",
        "medium": "string",
        "provider": "string"
      },
      "logo": {
        "id": 0,
        "portal_id": 0,
        "file_type": "string",
        "account_id": 0,
        "file_url": "string",
        "blob_id": 0,
        "filename": "string"
      },
      "meta": {
        "all_articles_count": 0,
        "archived_articles_count": 0,
        "published_count": 0,
        "draft_articles_count": 0,
        "categories_count": 0,
        "default_locale": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[portal_item](#schemaportal_item)]|false|none|none|

<h2 id="tocS_portal_single">portal_single</h2>
<!-- backwards compatibility -->
<a id="schemaportal_single"></a>
<a id="schema_portal_single"></a>
<a id="tocSportal_single"></a>
<a id="tocsportal_single"></a>

```json
{
  "payload": {
    "id": 0,
    "archived": true,
    "color": "string",
    "config": {
      "allowed_locales": [
        {
          "code": "string",
          "articles_count": 0,
          "categories_count": 0
        }
      ]
    },
    "custom_domain": "string",
    "header_text": "string",
    "homepage_link": "string",
    "name": "string",
    "slug": "string",
    "page_title": "string",
    "account_id": 0,
    "inbox": {
      "id": 0,
      "name": "string",
      "website_url": "string",
      "page_id": "string",
      "instagram_id": "string",
      "business_id": "string",
      "provider_name": "string",
      "profile_id": "string",
      "line_channel_id": "string",
      "email": "string",
      "bot_name": "string",
      "inbox_identifier": "string",
      "channel_type": "string",
      "avatar_url": "string",
      "widget_color": "string",
      "website_token": "string",
      "enable_auto_assignment": true,
      "web_widget_script": "string",
      "welcome_title": "string",
      "welcome_tagline": "string",
      "greeting_enabled": true,
      "greeting_message": "string",
      "channel_id": 0,
      "working_hours_enabled": true,
      "enable_email_collect": true,
      "csat_survey_enabled": true,
      "auto_assignment_config": {},
      "out_of_office_message": "string",
      "working_hours": [
        {
          "day_of_week": 0,
          "closed_all_day": true,
          "open_hour": 0,
          "open_minutes": 0,
          "close_hour": 0,
          "close_minutes": 0,
          "open_all_day": true
        }
      ],
      "timezone": "string",
      "callback_webhook_url": "string",
      "allow_messages_after_resolved": true,
      "lock_to_single_conversation": true,
      "sender_name_type": "string",
      "business_name": "string",
      "branded_email_layout": "string",
      "hmac_mandatory": true,
      "selected_feature_flags": [
        "string"
      ],
      "reply_time": "string",
      "messaging_service_sid": "string",
      "phone_number": "string",
      "medium": "string",
      "provider": "string"
    },
    "logo": {
      "id": 0,
      "portal_id": 0,
      "file_type": "string",
      "account_id": 0,
      "file_url": "string",
      "blob_id": 0,
      "filename": "string"
    },
    "meta": {
      "all_articles_count": 0,
      "archived_articles_count": 0,
      "published_count": 0,
      "draft_articles_count": 0,
      "categories_count": 0,
      "default_locale": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[portal_item](#schemaportal_item)|false|none|none|

<h2 id="tocS_portal_config">portal_config</h2>
<!-- backwards compatibility -->
<a id="schemaportal_config"></a>
<a id="schema_portal_config"></a>
<a id="tocSportal_config"></a>
<a id="tocsportal_config"></a>

```json
{
  "allowed_locales": [
    {
      "code": "string",
      "articles_count": 0,
      "categories_count": 0
    }
  ]
}
```

Configuration settings for the portal

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_locales|[object]|false|none|List of allowed locales for the portal|

<h2 id="tocS_portal_logo">portal_logo</h2>
<!-- backwards compatibility -->
<a id="schemaportal_logo"></a>
<a id="schema_portal_logo"></a>
<a id="tocSportal_logo"></a>
<a id="tocsportal_logo"></a>

```json
{
  "id": 0,
  "portal_id": 0,
  "file_type": "string",
  "account_id": 0,
  "file_url": "string",
  "blob_id": 0,
  "filename": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|ID of the logo file|
|portal_id|integer|false|none|ID of the portal this logo belongs to|
|file_type|string|false|none|MIME type of the file|
|account_id|integer|false|none|ID of the account|
|file_url|string|false|none|URL to access the logo file|
|blob_id|integer|false|none|ID of the blob|
|filename|string|false|none|Name of the file|

<h2 id="tocS_portal_meta">portal_meta</h2>
<!-- backwards compatibility -->
<a id="schemaportal_meta"></a>
<a id="schema_portal_meta"></a>
<a id="tocSportal_meta"></a>
<a id="tocsportal_meta"></a>

```json
{
  "all_articles_count": 0,
  "archived_articles_count": 0,
  "published_count": 0,
  "draft_articles_count": 0,
  "categories_count": 0,
  "default_locale": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all_articles_count|integer|false|none|Total number of articles|
|archived_articles_count|integer \| null|false|none|Number of archived articles|
|published_count|integer \| null|false|none|Number of published articles|
|draft_articles_count|integer \| null|false|none|Number of draft articles|
|categories_count|integer|false|none|Number of categories|
|default_locale|string|false|none|Default locale for the portal|

<h2 id="tocS_portal_item">portal_item</h2>
<!-- backwards compatibility -->
<a id="schemaportal_item"></a>
<a id="schema_portal_item"></a>
<a id="tocSportal_item"></a>
<a id="tocsportal_item"></a>

```json
{
  "id": 0,
  "archived": true,
  "color": "string",
  "config": {
    "allowed_locales": [
      {
        "code": "string",
        "articles_count": 0,
        "categories_count": 0
      }
    ]
  },
  "custom_domain": "string",
  "header_text": "string",
  "homepage_link": "string",
  "name": "string",
  "slug": "string",
  "page_title": "string",
  "account_id": 0,
  "inbox": {
    "id": 0,
    "name": "string",
    "website_url": "string",
    "page_id": "string",
    "instagram_id": "string",
    "business_id": "string",
    "provider_name": "string",
    "profile_id": "string",
    "line_channel_id": "string",
    "email": "string",
    "bot_name": "string",
    "inbox_identifier": "string",
    "channel_type": "string",
    "avatar_url": "string",
    "widget_color": "string",
    "website_token": "string",
    "enable_auto_assignment": true,
    "web_widget_script": "string",
    "welcome_title": "string",
    "welcome_tagline": "string",
    "greeting_enabled": true,
    "greeting_message": "string",
    "channel_id": 0,
    "working_hours_enabled": true,
    "enable_email_collect": true,
    "csat_survey_enabled": true,
    "auto_assignment_config": {},
    "out_of_office_message": "string",
    "working_hours": [
      {
        "day_of_week": 0,
        "closed_all_day": true,
        "open_hour": 0,
        "open_minutes": 0,
        "close_hour": 0,
        "close_minutes": 0,
        "open_all_day": true
      }
    ],
    "timezone": "string",
    "callback_webhook_url": "string",
    "allow_messages_after_resolved": true,
    "lock_to_single_conversation": true,
    "sender_name_type": "string",
    "business_name": "string",
    "branded_email_layout": "string",
    "hmac_mandatory": true,
    "selected_feature_flags": [
      "string"
    ],
    "reply_time": "string",
    "messaging_service_sid": "string",
    "phone_number": "string",
    "medium": "string",
    "provider": "string"
  },
  "logo": {
    "id": 0,
    "portal_id": 0,
    "file_type": "string",
    "account_id": 0,
    "file_url": "string",
    "blob_id": 0,
    "filename": "string"
  },
  "meta": {
    "all_articles_count": 0,
    "archived_articles_count": 0,
    "published_count": 0,
    "draft_articles_count": 0,
    "categories_count": 0,
    "default_locale": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|The ID of the portal|
|archived|boolean|false|none|Whether the portal is archived|
|color|string|false|none|The color code for the portal|
|config|[portal_config](#schemaportal_config)|false|none|Configuration settings for the portal|
|custom_domain|string|false|none|Custom domain for the portal|
|header_text|string|false|none|The header text for the portal|
|homepage_link|string|false|none|Homepage link for the portal|
|name|string|false|none|Name of the portal|
|slug|string|false|none|URL slug for the portal|
|page_title|string|false|none|Page title for the portal|
|account_id|integer|false|none|ID of the account the portal belongs to|
|inbox|[inbox](#schemainbox)|false|none|none|
|logo|[portal_logo](#schemaportal_logo)|false|none|none|
|meta|[portal_meta](#schemaportal_meta)|false|none|none|

<h2 id="tocS_category">category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 0,
  "description": "string",
  "locale": "string",
  "name": "string",
  "slug": "string",
  "position": 0,
  "portal_id": 0,
  "account_id": 0,
  "associated_category_id": 0,
  "parent_category_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|description|string|false|none|The text content.|
|locale|string|false|none|none|
|name|string|false|none|none|
|slug|string|false|none|none|
|position|integer|false|none|none|
|portal_id|integer|false|none|none|
|account_id|integer|false|none|none|
|associated_category_id|integer|false|none|To associate similar categories to each other, e.g same category of product documentation in different languages|
|parent_category_id|integer|false|none|To define parent category, e.g product documentation has multiple level features in sales category or in engineering category.|

<h2 id="tocS_article">article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "id": 0,
  "content": "string",
  "meta": {},
  "position": 0,
  "status": "draft",
  "title": "string",
  "slug": "string",
  "views": 0,
  "portal_id": 0,
  "account_id": 0,
  "author_id": 0,
  "category_id": 0,
  "folder_id": 0,
  "associated_article_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|content|string|false|none|The text content.|
|meta|object|false|none|none|
|position|integer|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|slug|string|false|none|none|
|views|integer|false|none|none|
|portal_id|integer|false|none|none|
|account_id|integer|false|none|none|
|author_id|integer|false|none|none|
|category_id|integer|false|none|none|
|folder_id|integer|false|none|none|
|associated_article_id|integer|false|none|To associate similar articles to each other, e.g to provide the link for the reference.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|published|
|status|archived|

<h2 id="tocS_contact">contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "payload": [
    {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {
        "attribute_key": "attribute_value",
        "signed_up_at": "dd/mm/yyyy"
      },
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[object]|false|none|none|

<h2 id="tocS_conversation">conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "id": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "account_id": 0,
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "created_at": 0,
      "updated_at": 0,
      "private": true,
      "status": "sent",
      "source_id": "string",
      "content_type": "text",
      "content_attributes": {},
      "sender_type": "Contact",
      "sender_id": 0,
      "external_source_ids": {},
      "additional_attributes": {},
      "processed_message_content": "string",
      "sentiment": {},
      "conversation": {},
      "attachment": {},
      "sender": {}
    }
  ],
  "account_id": 0,
  "uuid": "string",
  "additional_attributes": {},
  "agent_last_seen_at": 0,
  "assignee_last_seen_at": 0,
  "can_reply": true,
  "contact_last_seen_at": 0,
  "custom_attributes": {},
  "inbox_id": 0,
  "labels": [
    "string"
  ],
  "muted": true,
  "snoozed_until": 0,
  "status": "open",
  "created_at": 0,
  "updated_at": 0,
  "timestamp": 0,
  "first_reply_created_at": 0,
  "unread_count": 0,
  "last_non_activity_message": {
    "id": 0,
    "content": "string",
    "account_id": 0,
    "inbox_id": 0,
    "conversation_id": 0,
    "message_type": 0,
    "created_at": 0,
    "updated_at": 0,
    "private": true,
    "status": "sent",
    "source_id": "string",
    "content_type": "text",
    "content_attributes": {},
    "sender_type": "Contact",
    "sender_id": 0,
    "external_source_ids": {},
    "additional_attributes": {},
    "processed_message_content": "string",
    "sentiment": {},
    "conversation": {},
    "attachment": {},
    "sender": {}
  },
  "last_activity_at": 0,
  "priority": "string",
  "waiting_since": 0,
  "sla_policy_id": 0,
  "applied_sla": {},
  "sla_events": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|ID of the conversation|
|messages|[[message](#schemamessage)]|false|none|none|
|account_id|number|false|none|Account Id|
|uuid|string|false|none|UUID of the conversation|
|additional_attributes|object|false|none|The object containing additional attributes related to the conversation|
|agent_last_seen_at|number|false|none|The last activity at of the agent|
|assignee_last_seen_at|number|false|none|The last activity at of the assignee|
|can_reply|boolean|false|none|Whether the conversation can be replied to|
|contact_last_seen_at|number|false|none|The last activity at of the contact|
|custom_attributes|object|false|none|The object to save custom attributes for conversation, accepts custom attributes key and value|
|inbox_id|number|false|none|ID of the inbox|
|labels|[string]|false|none|The labels of the conversation|
|muted|boolean|false|none|Whether the conversation is muted|
|snoozed_until|number \| null|false|none|The time at which the conversation will be unmuted|
|status|string|false|none|The status of the conversation|
|created_at|number|false|none|The time at which conversation was created|
|updated_at|number|false|none|The time at which conversation was updated|
|timestamp|number|false|none|The time at which conversation was created|
|first_reply_created_at|number \| null|false|none|The time at which the first reply was created|
|unread_count|number|false|none|The number of unread messages|
|last_non_activity_message|[message](#schemamessage) \| null|false|none|The last non activity message|
|last_activity_at|number|false|none|The last activity at of the conversation|
|priority|string \| null|false|none|The priority of the conversation|
|waiting_since|number \| null|false|none|The time at which the conversation was waiting|
|sla_policy_id|number \| null|false|none|The ID of the SLA policy|
|applied_sla|object|false|none|The applied SLA|
|sla_events|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|open|
|status|resolved|
|status|pending|

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "id": 0,
  "content": "string",
  "account_id": 0,
  "inbox_id": 0,
  "conversation_id": 0,
  "message_type": 0,
  "created_at": 0,
  "updated_at": 0,
  "private": true,
  "status": "sent",
  "source_id": "string",
  "content_type": "text",
  "content_attributes": {},
  "sender_type": "Contact",
  "sender_id": 0,
  "external_source_ids": {},
  "additional_attributes": {},
  "processed_message_content": "string",
  "sentiment": {},
  "conversation": {},
  "attachment": {},
  "sender": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The ID of the message|
|content|string|false|none|The text content of the message|
|account_id|number|false|none|The ID of the account|
|inbox_id|number|false|none|The ID of the inbox|
|conversation_id|number|false|none|The ID of the conversation|
|message_type|integer|false|none|The type of the message|
|created_at|integer|false|none|The time at which message was created|
|updated_at|integer \| string|false|none|The time at which message was updated|
|private|boolean|false|none|The flags which shows whether the message is private or not|
|status|string \| null|false|none|The status of the message|
|source_id|string \| null|false|none|The source ID of the message|
|content_type|string \| null|false|none|The type of the template message|
|content_attributes|object|false|none|The content attributes for each content_type|
|sender_type|string \| null|false|none|The type of the sender|
|sender_id|number \| null|false|none|The ID of the sender|
|external_source_ids|object|false|none|The external source IDs of the message|
|additional_attributes|object|false|none|The additional attributes of the message|
|processed_message_content|string \| null|false|none|The processed message content|
|sentiment|object \| null|false|none|The sentiment of the message|
|conversation|object \| null|false|none|The conversation object|
|attachment|object \| null|false|none|The file object attached to the image|
|sender|object|false|none|User/Agent/AgentBot object|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|0|
|message_type|1|
|message_type|2|
|message_type|3|
|status|sent|
|status|delivered|
|status|read|
|status|failed|
|status|null|
|content_type|text|
|content_type|input_text|
|content_type|input_textarea|
|content_type|input_email|
|content_type|input_select|
|content_type|cards|
|content_type|form|
|content_type|article|
|content_type|incoming_email|
|content_type|input_csat|
|content_type|integrations|
|content_type|sticker|
|content_type|voice_call|
|content_type|null|
|sender_type|Contact|
|sender_type|User|
|sender_type|AgentBot|
|sender_type|Captain::Assistant|
|sender_type|null|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 0,
  "access_token": "string",
  "account_id": 0,
  "available_name": "string",
  "avatar_url": "string",
  "confirmed": true,
  "display_name": "string",
  "message_signature": "string",
  "email": "string",
  "hmac_identifier": "string",
  "inviter_id": 0,
  "name": "string",
  "provider": "string",
  "pubsub_token": "string",
  "role": "agent",
  "ui_settings": {},
  "uid": "string",
  "type": "string",
  "custom_attributes": {},
  "accounts": [
    {
      "id": 0,
      "name": "string",
      "status": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "role": "administrator",
      "permissions": [
        "string"
      ],
      "availability": "string",
      "availability_status": "string",
      "auto_offline": true,
      "custom_role_id": 0,
      "custom_role": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|access_token|string|false|none|none|
|account_id|number|false|none|none|
|available_name|string|false|none|none|
|avatar_url|string|false|none|none|
|confirmed|boolean|false|none|none|
|display_name|string \| null|false|none|none|
|message_signature|string \| null|false|none|none|
|email|string|false|none|none|
|hmac_identifier|string|false|none|none|
|inviter_id|number \| null|false|none|none|
|name|string|false|none|none|
|provider|string|false|none|none|
|pubsub_token|string|false|none|none|
|role|string|false|none|none|
|ui_settings|object|false|none|none|
|uid|string|false|none|none|
|type|string \| null|false|none|none|
|custom_attributes|object|false|none|Available for users who are created through platform APIs and has custom attributes associated.|
|accounts|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|agent|
|role|administrator|

<h2 id="tocS_agent">agent</h2>
<!-- backwards compatibility -->
<a id="schemaagent"></a>
<a id="schema_agent"></a>
<a id="tocSagent"></a>
<a id="tocsagent"></a>

```json
{
  "id": 0,
  "account_id": 0,
  "availability_status": "online",
  "auto_offline": true,
  "confirmed": true,
  "email": "string",
  "available_name": "string",
  "name": "string",
  "role": "agent",
  "thumbnail": "string",
  "custom_role_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|account_id|integer|false|none|none|
|availability_status|string|false|read-only|The effective availability status of the agent, derived from the configured availability, auto-offline setting, and current presence. To update an agent's configured availability, use the availability field in create or update requests.|
|auto_offline|boolean|false|none|Whether the agent is automatically marked offline when they are away.|
|confirmed|boolean|false|none|Whether the agent has confirmed their email address.|
|email|string|false|none|The email of the agent|
|available_name|string|false|none|The available name of the agent|
|name|string|false|none|The name of the agent|
|role|string|false|none|The role of the agent|
|thumbnail|string|false|none|The thumbnail of the agent|
|custom_role_id|integer \| null|false|none|The custom role id of the agent|

#### Enumerated Values

|Property|Value|
|---|---|
|availability_status|online|
|availability_status|busy|
|availability_status|offline|
|role|agent|
|role|administrator|

<h2 id="tocS_inbox">inbox</h2>
<!-- backwards compatibility -->
<a id="schemainbox"></a>
<a id="schema_inbox"></a>
<a id="tocSinbox"></a>
<a id="tocsinbox"></a>

```json
{
  "id": 0,
  "name": "string",
  "website_url": "string",
  "page_id": "string",
  "instagram_id": "string",
  "business_id": "string",
  "provider_name": "string",
  "profile_id": "string",
  "line_channel_id": "string",
  "email": "string",
  "bot_name": "string",
  "inbox_identifier": "string",
  "channel_type": "string",
  "avatar_url": "string",
  "widget_color": "string",
  "website_token": "string",
  "enable_auto_assignment": true,
  "web_widget_script": "string",
  "welcome_title": "string",
  "welcome_tagline": "string",
  "greeting_enabled": true,
  "greeting_message": "string",
  "channel_id": 0,
  "working_hours_enabled": true,
  "enable_email_collect": true,
  "csat_survey_enabled": true,
  "auto_assignment_config": {},
  "out_of_office_message": "string",
  "working_hours": [
    {
      "day_of_week": 0,
      "closed_all_day": true,
      "open_hour": 0,
      "open_minutes": 0,
      "close_hour": 0,
      "close_minutes": 0,
      "open_all_day": true
    }
  ],
  "timezone": "string",
  "callback_webhook_url": "string",
  "allow_messages_after_resolved": true,
  "lock_to_single_conversation": true,
  "sender_name_type": "string",
  "business_name": "string",
  "branded_email_layout": "string",
  "hmac_mandatory": true,
  "selected_feature_flags": [
    "string"
  ],
  "reply_time": "string",
  "messaging_service_sid": "string",
  "phone_number": "string",
  "medium": "string",
  "provider": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|ID of the inbox|
|name|string|false|none|The name of the inbox|
|website_url|string \| null|false|none|Website URL|
|page_id|string \| null|false|none|Facebook Page ID associated with the inbox|
|instagram_id|string \| null|false|none|Instagram account ID associated with the inbox|
|business_id|string \| null|false|none|TikTok business ID associated with the inbox|
|provider_name|string \| null|false|none|Provider username or page name associated with the social inbox|
|profile_id|string \| null|false|none|X profile ID associated with the inbox|
|line_channel_id|string \| null|false|none|LINE channel ID associated with the inbox|
|email|string \| null|false|none|Email address associated with the inbox|
|bot_name|string \| null|false|none|Telegram bot name associated with the inbox|
|inbox_identifier|string \| null|false|none|Public identifier associated with an API inbox|
|channel_type|string|false|none|The type of the inbox|
|avatar_url|string|false|none|The avatar image of the inbox|
|widget_color|string \| null|false|none|Widget Color used for customization of the widget|
|website_token|string \| null|false|none|Website Token|
|enable_auto_assignment|boolean|false|none|The flag which shows whether Auto Assignment is enabled or not|
|web_widget_script|string \| null|false|none|Script used to load the website widget|
|welcome_title|string \| null|false|none|Welcome title to be displayed on the widget|
|welcome_tagline|string \| null|false|none|Welcome tagline to be displayed on the widget|
|greeting_enabled|boolean|false|none|The flag which shows whether greeting is enabled|
|greeting_message|string \| null|false|none|A greeting message when the user starts the conversation|
|channel_id|number|false|none|ID of the channel this inbox belongs to|
|working_hours_enabled|boolean|false|none|The flag which shows whether working hours feature is enabled|
|enable_email_collect|boolean|false|none|The flag to enable collecting email from contacts|
|csat_survey_enabled|boolean|false|none|The flag to enable CSAT survey|
|auto_assignment_config|object|false|none|Configuration settings for auto assignment|
|out_of_office_message|string \| null|false|none|Message to show when agents are out of office|
|working_hours|[object]|false|none|Configuration for working hours of the inbox|
|timezone|string|false|none|Timezone configuration for the inbox|
|callback_webhook_url|string \| null|false|none|Webhook URL for callbacks|
|allow_messages_after_resolved|boolean|false|none|Whether to allow messages after a conversation is resolved|
|lock_to_single_conversation|boolean|false|none|Whether to lock a contact to a single conversation|
|sender_name_type|string|false|none|Type of sender name to display (e.g., friendly)|
|business_name|string \| null|false|none|Business name associated with the inbox|
|branded_email_layout|string \| null|false|none|Liquid HTML layout for branded email replies. Available to administrators for Email inbox show/update responses.|
|hmac_mandatory|boolean \| null|false|none|Whether HMAC verification is mandatory|
|selected_feature_flags|[string]|false|none|Selected feature flags for the inbox|
|reply_time|string \| null|false|none|Expected reply time|
|messaging_service_sid|string \| null|false|none|Messaging service SID for SMS providers|
|phone_number|string \| null|false|none|Phone number associated with the inbox|
|medium|string|false|none|Medium of communication (e.g., sms, email)|
|provider|string \| null|false|none|Provider of the channel|

<h2 id="tocS_branded_email_layout">branded_email_layout</h2>
<!-- backwards compatibility -->
<a id="schemabranded_email_layout"></a>
<a id="schema_branded_email_layout"></a>
<a id="tocSbranded_email_layout"></a>
<a id="tocsbranded_email_layout"></a>

```json
{
  "branded_email_layout": "<html><body>{{ content_for_layout }}</body></html>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branded_email_layout|string \| null|false|none|Account-scoped Liquid HTML layout for branded email replies.|

<h2 id="tocS_inbox_contact">inbox_contact</h2>
<!-- backwards compatibility -->
<a id="schemainbox_contact"></a>
<a id="schema_inbox_contact"></a>
<a id="tocSinbox_contact"></a>
<a id="tocsinbox_contact"></a>

```json
{
  "id": 0,
  "avatar_url": "string",
  "channel_id": 0,
  "name": "string",
  "channel_type": "string",
  "provider": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|ID of the inbox|
|avatar_url|string|false|none|The avatar image of the inbox|
|channel_id|number|false|none|The ID of the channel|
|name|string|false|none|The name of the inbox|
|channel_type|string|false|none|The type of the inbox|
|provider|string|false|none|The provider of the inbox|

<h2 id="tocS_agent_bot">agent_bot</h2>
<!-- backwards compatibility -->
<a id="schemaagent_bot"></a>
<a id="schema_agent_bot"></a>
<a id="tocSagent_bot"></a>
<a id="tocsagent_bot"></a>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "thumbnail": "string",
  "outgoing_url": "string",
  "bot_type": "string",
  "bot_config": {},
  "account_id": 0,
  "access_token": "string",
  "system_bot": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|ID of the agent bot|
|name|string|false|none|The name of the agent bot|
|description|string|false|none|The description about the agent bot|
|thumbnail|string|false|none|The thumbnail of the agent bot|
|outgoing_url|string|false|none|The webhook URL for the bot|
|bot_type|string|false|none|The type of the bot|
|bot_config|object|false|none|The configuration of the bot|
|account_id|number|false|none|Account ID if it's an account specific bot|
|access_token|string|false|none|The access token for the bot|
|system_bot|boolean|false|none|Whether the bot is a system bot|

<h2 id="tocS_contact_inboxes">contact_inboxes</h2>
<!-- backwards compatibility -->
<a id="schemacontact_inboxes"></a>
<a id="schema_contact_inboxes"></a>
<a id="tocScontact_inboxes"></a>
<a id="tocscontact_inboxes"></a>

```json
{
  "source_id": "string",
  "inbox": {
    "id": 0,
    "avatar_url": "string",
    "channel_id": 0,
    "name": "string",
    "channel_type": "string",
    "provider": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_id|string|false|none|Contact Inbox Source Id|
|inbox|[inbox_contact](#schemainbox_contact)|false|none|none|

<h2 id="tocS_contactable_inboxes">contactable_inboxes</h2>
<!-- backwards compatibility -->
<a id="schemacontactable_inboxes"></a>
<a id="schema_contactable_inboxes"></a>
<a id="tocScontactable_inboxes"></a>
<a id="tocscontactable_inboxes"></a>

```json
{
  "source_id": "string",
  "inbox": {
    "id": 0,
    "name": "string",
    "website_url": "string",
    "page_id": "string",
    "instagram_id": "string",
    "business_id": "string",
    "provider_name": "string",
    "profile_id": "string",
    "line_channel_id": "string",
    "email": "string",
    "bot_name": "string",
    "inbox_identifier": "string",
    "channel_type": "string",
    "avatar_url": "string",
    "widget_color": "string",
    "website_token": "string",
    "enable_auto_assignment": true,
    "web_widget_script": "string",
    "welcome_title": "string",
    "welcome_tagline": "string",
    "greeting_enabled": true,
    "greeting_message": "string",
    "channel_id": 0,
    "working_hours_enabled": true,
    "enable_email_collect": true,
    "csat_survey_enabled": true,
    "auto_assignment_config": {},
    "out_of_office_message": "string",
    "working_hours": [
      {
        "day_of_week": 0,
        "closed_all_day": true,
        "open_hour": 0,
        "open_minutes": 0,
        "close_hour": 0,
        "close_minutes": 0,
        "open_all_day": true
      }
    ],
    "timezone": "string",
    "callback_webhook_url": "string",
    "allow_messages_after_resolved": true,
    "lock_to_single_conversation": true,
    "sender_name_type": "string",
    "business_name": "string",
    "branded_email_layout": "string",
    "hmac_mandatory": true,
    "selected_feature_flags": [
      "string"
    ],
    "reply_time": "string",
    "messaging_service_sid": "string",
    "phone_number": "string",
    "medium": "string",
    "provider": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_id|string|false|none|Contact Inbox Source Id|
|inbox|[inbox](#schemainbox)|false|none|none|

<h2 id="tocS_custom_filter">custom_filter</h2>
<!-- backwards compatibility -->
<a id="schemacustom_filter"></a>
<a id="schema_custom_filter"></a>
<a id="tocScustom_filter"></a>
<a id="tocscustom_filter"></a>

```json
{
  "id": 0,
  "name": "string",
  "type": "conversation",
  "query": {},
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The ID of the custom filter|
|name|string|false|none|The name of the custom filter|
|type|string|false|none|The description about the custom filter|
|query|object|false|none|A query that needs to be saved as a custom filter|
|created_at|string(date-time)|false|none|The time at which the custom filter was created|
|updated_at|string(date-time)|false|none|The time at which the custom filter was updated|

#### Enumerated Values

|Property|Value|
|---|---|
|type|conversation|
|type|contact|
|type|report|

<h2 id="tocS_webhook">webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "id": 0,
  "url": "string",
  "name": "string",
  "subscriptions": [
    "conversation_created"
  ],
  "secret": "string",
  "account_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The ID of the webhook|
|url|string|false|none|The url to which the events will be send|
|name|string|false|none|The name of the webhook|
|subscriptions|[string]|false|none|The list of subscribed events|
|secret|string \| null|false|none|Secret used to sign webhook requests. Signed webhook deliveries include `X-Chatwoot-Timestamp` and `X-Chatwoot-Signature`; the signature is `sha256=` followed by the HMAC-SHA256 of `{timestamp}.{raw_request_body}` using this secret. Deliveries also include `X-Chatwoot-Delivery` when a delivery id is available.|
|account_id|number|false|none|The id of the account which the webhook object belongs to|

#### Enumerated Values

|Property|Value|
|---|---|
|subscriptions|conversation_created|
|subscriptions|conversation_status_changed|
|subscriptions|conversation_updated|
|subscriptions|contact_created|
|subscriptions|contact_updated|
|subscriptions|message_created|
|subscriptions|message_updated|
|subscriptions|webwidget_triggered|
|subscriptions|conversation_typing_on|
|subscriptions|conversation_typing_off|

<h2 id="tocS_account">account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "id": 0,
  "name": "string",
  "role": "administrator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|Account ID|
|name|string|false|none|Name of the account|
|role|string|false|none|The user role in the account|

#### Enumerated Values

|Property|Value|
|---|---|
|role|administrator|
|role|agent|

<h2 id="tocS_account_detail">account_detail</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_detail"></a>
<a id="schema_account_detail"></a>
<a id="tocSaccount_detail"></a>
<a id="tocsaccount_detail"></a>

```json
{
  "id": 0,
  "name": "string",
  "locale": "string",
  "domain": "string",
  "support_email": "string",
  "status": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "cache_keys": {},
  "features": {},
  "settings": {
    "auto_resolve_after": 0,
    "auto_resolve_message": "string",
    "auto_resolve_ignore_waiting": true
  },
  "custom_attributes": {
    "plan_name": "string",
    "subscribed_quantity": 0,
    "subscription_status": "string",
    "subscription_ends_on": "1970-01-01",
    "industry": "string",
    "company_size": "string",
    "timezone": "string",
    "logo": "string",
    "onboarding_step": "string",
    "marked_for_deletion_at": "1970-01-01T00:00:00Z",
    "marked_for_deletion_reason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|Account ID|
|name|string|false|none|Name of the account|
|locale|string|false|none|The locale of the account|
|domain|string|false|none|The domain of the account|
|support_email|string|false|none|The support email of the account|
|status|string|false|none|The status of the account|
|created_at|string(date-time)|false|none|The creation date of the account|
|cache_keys|object|false|none|Cache keys for the account|
|features|object|false|none|Enabled features for the account|
|settings|object|false|none|Account settings|
|custom_attributes|object|false|none|Custom attributes of the account|

<h2 id="tocS_account_show_response">account_show_response</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_show_response"></a>
<a id="schema_account_show_response"></a>
<a id="tocSaccount_show_response"></a>
<a id="tocsaccount_show_response"></a>

```json
{
  "id": 0,
  "name": "string",
  "locale": "string",
  "domain": "string",
  "support_email": "string",
  "status": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "cache_keys": {},
  "features": {},
  "settings": {
    "auto_resolve_after": 0,
    "auto_resolve_message": "string",
    "auto_resolve_ignore_waiting": true
  },
  "custom_attributes": {
    "plan_name": "string",
    "subscribed_quantity": 0,
    "subscription_status": "string",
    "subscription_ends_on": "1970-01-01",
    "industry": "string",
    "company_size": "string",
    "timezone": "string",
    "logo": "string",
    "onboarding_step": "string",
    "marked_for_deletion_at": "1970-01-01T00:00:00Z",
    "marked_for_deletion_reason": "string"
  },
  "latest_chatwoot_version": "3.0.0",
  "subscribed_features": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|Account ID|
|name|string|false|none|Name of the account|
|locale|string|false|none|The locale of the account|
|domain|string|false|none|The domain of the account|
|support_email|string|false|none|The support email of the account|
|status|string|false|none|The status of the account|
|created_at|string(date-time)|false|none|The creation date of the account|
|cache_keys|object|false|none|Cache keys for the account|
|features|object|false|none|Enabled features for the account|
|settings|object|false|none|Account settings|
|custom_attributes|object|false|none|Custom attributes of the account|
|latest_chatwoot_version|string \| null|false|none|Latest version of Chatwoot available|
|subscribed_features|[string]|false|none|List of subscribed enterprise features (if enterprise edition is enabled)|

<h2 id="tocS_account_user">account_user</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_user"></a>
<a id="schema_account_user"></a>
<a id="tocSaccount_user"></a>
<a id="tocsaccount_user"></a>

```json
[
  {
    "account_id": 0,
    "user_id": 0,
    "role": "string"
  }
]
```

Array of account users

<h2 id="tocS_platform_account">platform_account</h2>
<!-- backwards compatibility -->
<a id="schemaplatform_account"></a>
<a id="schema_platform_account"></a>
<a id="tocSplatform_account"></a>
<a id="tocsplatform_account"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|Account ID|
|name|string|false|none|Name of the account|

<h2 id="tocS_team">team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "allow_auto_assign": true,
  "icon": "string",
  "icon_color": "string",
  "account_id": 0,
  "is_member": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The ID of the team|
|name|string|false|none|The name of the team|
|description|string \| null|false|none|The description about the team|
|allow_auto_assign|boolean|false|none|If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team|
|icon|string|false|none|An emoji or icon shown next to the team|
|icon_color|string|false|none|The color used for the team icon|
|account_id|number|false|none|The ID of the account with the team is a part of|
|is_member|boolean|false|none|This field shows whether the current user is a part of the team|

<h2 id="tocS_label">label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "color": "string",
  "show_on_sidebar": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The ID of the label|
|title|string|false|none|The title of the label|
|description|string|false|none|The description of the label|
|color|string|false|none|Hex color code for the label|
|show_on_sidebar|boolean|false|none|Whether the label should appear in the sidebar|

<h2 id="tocS_integrations_app">integrations_app</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations_app"></a>
<a id="schema_integrations_app"></a>
<a id="tocSintegrations_app"></a>
<a id="tocsintegrations_app"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "hook_type": "string",
  "enabled": true,
  "allow_multiple_hooks": true,
  "hooks": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the integration|
|name|string|false|none|The name of the integration|
|description|string|false|none|The description about the team|
|hook_type|string|false|none|Whether the integration is an account or inbox integration|
|enabled|boolean|false|none|Whether the integration is enabled for the account|
|allow_multiple_hooks|boolean|false|none|Whether multiple hooks can be created for the integration|
|hooks|[object]|false|none|If there are any hooks created for this integration|

<h2 id="tocS_integrations_hook">integrations_hook</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations_hook"></a>
<a id="schema_integrations_hook"></a>
<a id="tocSintegrations_hook"></a>
<a id="tocsintegrations_hook"></a>

```json
{
  "id": "string",
  "app_id": "string",
  "inbox_id": "string",
  "account_id": "string",
  "status": true,
  "hook_type": true,
  "settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the integration hook|
|app_id|string|false|none|The ID of the integration app|
|inbox_id|string|false|none|Inbox ID if its an Inbox integration|
|account_id|string|false|none|Account ID of the integration|
|status|boolean|false|none|Whether the integration hook is enabled for the account|
|hook_type|boolean|false|none|Whether its an account or inbox integration hook|
|settings|object|false|none|The associated settings for the integration|

<h2 id="tocS_audit_log">audit_log</h2>
<!-- backwards compatibility -->
<a id="schemaaudit_log"></a>
<a id="schema_audit_log"></a>
<a id="tocSaudit_log"></a>
<a id="tocsaudit_log"></a>

```json
{
  "id": 0,
  "auditable_id": 0,
  "auditable_type": "string",
  "auditable": {},
  "associated_id": 0,
  "associated_type": "string",
  "user_id": 0,
  "user_type": "string",
  "username": "string",
  "action": "create",
  "audited_changes": {},
  "version": 0,
  "comment": "string",
  "request_uuid": "string",
  "created_at": 0,
  "remote_address": "string",
  "location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for the audit log entry|
|auditable_id|integer|false|none|The ID of the audited object|
|auditable_type|string|false|none|The type of the audited object (e.g., Conversation, Contact, User)|
|auditable|object \| null|false|none|The audited object data. Null for message deletion entries, which are served without the message payload.|
|associated_id|integer|false|none|The ID of the associated object (typically the account ID)|
|associated_type|string|false|none|The type of the associated object|
|user_id|integer|false|none|The ID of the user who performed the action|
|user_type|string|false|none|The type of user who performed the action|
|username|string|false|none|The email/username of the user who performed the action|
|action|string|false|none|The action performed on the object|
|audited_changes|object|false|none|JSON object containing the changes made to the audited object|
|version|integer|false|none|Version number of the audit log entry|
|comment|string \| null|false|none|Optional comment associated with the audit log entry|
|request_uuid|string|false|none|UUID to identify the request that generated this audit log|
|created_at|integer|false|none|Unix timestamp when the audit log entry was created|
|remote_address|string \| null|false|none|IP address from which the action was performed. Masked to the network portion (for example 203.0.113.x) unless the account has the audit_log_ip_address feature enabled, in which case the full address is returned.|
|location|string \| null|false|none|City and country resolved from remote_address, present only when the account has the ip_lookup feature enabled and the address has been resolved. Omitted when the account returns full IP addresses.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create|
|action|update|
|action|destroy|

<h2 id="tocS_public_contact">public_contact</h2>
<!-- backwards compatibility -->
<a id="schemapublic_contact"></a>
<a id="schema_public_contact"></a>
<a id="tocSpublic_contact"></a>
<a id="tocspublic_contact"></a>

```json
{
  "id": 0,
  "source_id": "string",
  "name": "string",
  "email": "string",
  "phone_number": "string",
  "pubsub_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Id of the contact|
|source_id|string|false|none|The session identifier of the contact|
|name|string \| null|false|none|Name of the contact when available|
|email|string \| null|false|none|Email of the contact|
|phone_number|string \| null|false|none|Phone number of the contact|
|pubsub_token|string|false|none|The token to be used to connect to chatwoot websocket|

<h2 id="tocS_public_contact_record">public_contact_record</h2>
<!-- backwards compatibility -->
<a id="schemapublic_contact_record"></a>
<a id="schema_public_contact_record"></a>
<a id="tocSpublic_contact_record"></a>
<a id="tocspublic_contact_record"></a>

```json
{
  "id": 0,
  "name": "string",
  "email": "string",
  "phone_number": "string",
  "identifier": "string",
  "blocked": true,
  "additional_attributes": {},
  "custom_attributes": {},
  "contact_type": "string",
  "country_code": "string",
  "last_activity_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "last_name": "string",
  "middle_name": "string",
  "location": "string",
  "account_id": 0,
  "company_id": 0,
  "label_list": [
    "string"
  ]
}
```

Full serialized contact record returned when the public API renders a Contact model directly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Id of the contact|
|name|string \| null|false|none|Name of the contact when available|
|email|string \| null|false|none|Email of the contact|
|phone_number|string \| null|false|none|Phone number of the contact|
|identifier|string \| null|false|none|Identifier of the contact|
|blocked|boolean|false|none|Whether the contact is blocked|
|additional_attributes|object \| null|false|none|Additional attributes of the contact when present|
|custom_attributes|object \| null|false|none|Custom attributes of the contact when present|
|contact_type|string \| null|false|none|Contact type of the contact when available|
|country_code|string \| null|false|none|Country code of the contact|
|last_activity_at|string \| null|false|none|Last activity timestamp of the contact in ISO 8601 format|
|created_at|string \| null|false|none|Created timestamp of the contact in ISO 8601 format|
|updated_at|string \| null|false|none|Updated timestamp of the contact in ISO 8601 format|
|last_name|string \| null|false|none|Last name of the contact|
|middle_name|string \| null|false|none|Middle name of the contact|
|location|string \| null|false|none|Location of the contact|
|account_id|integer|false|none|Account id of the contact|
|company_id|integer \| null|false|none|Company id of the contact|
|label_list|[string]|false|none|Labels applied to the contact|

<h2 id="tocS_public_conversation">public_conversation</h2>
<!-- backwards compatibility -->
<a id="schemapublic_conversation"></a>
<a id="schema_public_conversation"></a>
<a id="tocSpublic_conversation"></a>
<a id="tocspublic_conversation"></a>

```json
{
  "id": 0,
  "uuid": "string",
  "inbox_id": 0,
  "contact_last_seen_at": 0,
  "status": "open",
  "agent_last_seen_at": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "message_type": 0,
      "content_type": "string",
      "content_attributes": {},
      "created_at": 0,
      "conversation_id": 0,
      "attachments": [
        {
          "id": 0,
          "message_id": 0,
          "file_type": "image",
          "account_id": 0,
          "extension": "string",
          "data_url": "string",
          "thumb_url": "string",
          "file_size": 0,
          "width": 0,
          "height": 0,
          "coordinates_lat": 0,
          "coordinates_long": 0,
          "fallback_title": "string",
          "meta": {},
          "transcribed_text": "string"
        }
      ],
      "sender": {
        "id": 0,
        "name": "string",
        "avatar_url": "string",
        "thumbnail": "string",
        "type": "contact",
        "available_name": "string",
        "availability_status": "string",
        "email": "string",
        "phone_number": "string",
        "identifier": "string",
        "blocked": true,
        "additional_attributes": {},
        "custom_attributes": {},
        "description": "string",
        "created_at": "string"
      }
    }
  ],
  "contact": {
    "id": 0,
    "name": "string",
    "email": "string",
    "phone_number": "string",
    "identifier": "string",
    "blocked": true,
    "additional_attributes": {},
    "custom_attributes": {},
    "contact_type": "string",
    "country_code": "string",
    "last_activity_at": "string",
    "created_at": "string",
    "updated_at": "string",
    "last_name": "string",
    "middle_name": "string",
    "location": "string",
    "account_id": 0,
    "company_id": 0,
    "label_list": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Id of the conversation|
|uuid|string|false|none|UUID of the conversation|
|inbox_id|integer|false|none|The inbox id of the conversation|
|contact_last_seen_at|integer|false|none|Timestamp of when the contact last seen the conversation (Unix timestamp)|
|status|string|false|none|The status of the conversation|
|agent_last_seen_at|integer|false|none|Timestamp of when the agent last seen the conversation (Unix timestamp)|
|messages|[[public_message](#schemapublic_message)]|false|none|Messages in the conversation|
|contact|[public_contact_record](#schemapublic_contact_record)|false|none|Full serialized contact record returned when the public API renders a Contact model directly.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|open|
|status|resolved|
|status|pending|
|status|snoozed|

<h2 id="tocS_public_message">public_message</h2>
<!-- backwards compatibility -->
<a id="schemapublic_message"></a>
<a id="schema_public_message"></a>
<a id="tocSpublic_message"></a>
<a id="tocspublic_message"></a>

```json
{
  "id": 0,
  "content": "string",
  "message_type": 0,
  "content_type": "string",
  "content_attributes": {},
  "created_at": 0,
  "conversation_id": 0,
  "attachments": [
    {
      "id": 0,
      "message_id": 0,
      "file_type": "image",
      "account_id": 0,
      "extension": "string",
      "data_url": "string",
      "thumb_url": "string",
      "file_size": 0,
      "width": 0,
      "height": 0,
      "coordinates_lat": 0,
      "coordinates_long": 0,
      "fallback_title": "string",
      "meta": {},
      "transcribed_text": "string"
    }
  ],
  "sender": {
    "id": 0,
    "name": "string",
    "avatar_url": "string",
    "thumbnail": "string",
    "type": "contact",
    "available_name": "string",
    "availability_status": "string",
    "email": "string",
    "phone_number": "string",
    "identifier": "string",
    "blocked": true,
    "additional_attributes": {},
    "custom_attributes": {},
    "description": "string",
    "created_at": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Id of the message|
|content|string \| null|false|none|Text content of the message. Can be null for attachment-only messages.|
|message_type|integer|false|none|Denotes the message type. Possible values: 0 (incoming), 1 (outgoing), 2 (activity), 3 (template)|
|content_type|string|false|none|Content type of the message|
|content_attributes|object|false|none|Additional content attributes of the message|
|created_at|integer|false|none|Created at Unix timestamp of the message|
|conversation_id|integer|false|none|Display Id of the conversation the message belongs to|
|attachments|[[public_message_attachment](#schemapublic_message_attachment)]|false|none|Attachments if any|
|sender|[public_message_sender](#schemapublic_message_sender)|false|none|Polymorphic sender payload returned by push_event_data. Available fields vary by sender type.|

<h2 id="tocS_public_message_attachment">public_message_attachment</h2>
<!-- backwards compatibility -->
<a id="schemapublic_message_attachment"></a>
<a id="schema_public_message_attachment"></a>
<a id="tocSpublic_message_attachment"></a>
<a id="tocspublic_message_attachment"></a>

```json
{
  "id": 0,
  "message_id": 0,
  "file_type": "image",
  "account_id": 0,
  "extension": "string",
  "data_url": "string",
  "thumb_url": "string",
  "file_size": 0,
  "width": 0,
  "height": 0,
  "coordinates_lat": 0,
  "coordinates_long": 0,
  "fallback_title": "string",
  "meta": {},
  "transcribed_text": "string"
}
```

Attachment payload. Available fields vary by attachment file_type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Id of the attachment|
|message_id|integer|false|none|Id of the parent message|
|file_type|string|false|none|Type of the attached file|
|account_id|integer|false|none|Id of the account|
|extension|string \| null|false|none|File extension|
|data_url|string \| null|false|none|URL of the file. Can be null when an attachment variant has no external URL.|
|thumb_url|string|false|none|URL of the file thumbnail|
|file_size|integer|false|none|File size in bytes|
|width|integer \| null|false|none|Width of the attachment when available|
|height|integer \| null|false|none|Height of the attachment when available|
|coordinates_lat|number|false|none|Latitude for location attachments|
|coordinates_long|number|false|none|Longitude for location attachments|
|fallback_title|string \| null|false|none|Fallback title for location, fallback, and contact attachments when available|
|meta|object|false|none|Metadata for contact attachments|
|transcribed_text|string|false|none|Transcribed text for audio attachments|

#### Enumerated Values

|Property|Value|
|---|---|
|file_type|image|
|file_type|audio|
|file_type|video|
|file_type|file|
|file_type|location|
|file_type|fallback|
|file_type|share|
|file_type|story_mention|
|file_type|contact|
|file_type|ig_reel|
|file_type|ig_post|
|file_type|ig_story|
|file_type|embed|

<h2 id="tocS_public_message_sender">public_message_sender</h2>
<!-- backwards compatibility -->
<a id="schemapublic_message_sender"></a>
<a id="schema_public_message_sender"></a>
<a id="tocSpublic_message_sender"></a>
<a id="tocspublic_message_sender"></a>

```json
{
  "id": 0,
  "name": "string",
  "avatar_url": "string",
  "thumbnail": "string",
  "type": "contact",
  "available_name": "string",
  "availability_status": "string",
  "email": "string",
  "phone_number": "string",
  "identifier": "string",
  "blocked": true,
  "additional_attributes": {},
  "custom_attributes": {},
  "description": "string",
  "created_at": "string"
}
```

Polymorphic sender payload returned by push_event_data. Available fields vary by sender type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Id of the sender|
|name|string \| null|false|none|Name of the sender when available|
|avatar_url|string|false|none|Avatar URL of the sender. Present for senders of type user, agent_bot, and captain_assistant. Not present for contact senders (use thumbnail instead).|
|thumbnail|string|false|none|Avatar/thumbnail URL of the sender. Contact senders use this field; user senders may also include it.|
|type|string|false|none|Type of the sender|
|available_name|string \| null|false|none|Display name for user senders|
|availability_status|string \| null|false|none|Availability status for user senders|
|email|string \| null|false|none|Email of the sender when the sender is a contact|
|phone_number|string \| null|false|none|Phone number of the sender when the sender is a contact|
|identifier|string \| null|false|none|Identifier of the sender when the sender is a contact|
|blocked|boolean|false|none|Whether the sender is blocked when the sender is a contact|
|additional_attributes|object \| null|false|none|Additional attributes when the sender is a contact and available|
|custom_attributes|object \| null|false|none|Custom attributes when the sender is a contact and available|
|description|string \| null|false|none|Description when the sender is a captain assistant|
|created_at|string \| null|false|none|Created timestamp in ISO 8601 format when the sender is a captain assistant|

#### Enumerated Values

|Property|Value|
|---|---|
|type|contact|
|type|user|
|type|agent_bot|
|type|captain_assistant|

<h2 id="tocS_public_inbox">public_inbox</h2>
<!-- backwards compatibility -->
<a id="schemapublic_inbox"></a>
<a id="schema_public_inbox"></a>
<a id="tocSpublic_inbox"></a>
<a id="tocspublic_inbox"></a>

```json
{
  "identifier": "string",
  "name": "string",
  "timezone": "string",
  "working_hours": [
    {
      "day_of_week": 0,
      "open_all_day": true,
      "closed_all_day": true,
      "open_hour": 0,
      "open_minutes": 0,
      "close_hour": 0,
      "close_minutes": 0
    }
  ],
  "working_hours_enabled": true,
  "csat_survey_enabled": true,
  "greeting_enabled": true,
  "identity_validation_enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|false|none|Inbox identifier|
|name|string|false|none|Name of the inbox|
|timezone|string|false|none|The timezone defined on the inbox|
|working_hours|[object]|false|none|The working hours defined on the inbox|
|working_hours_enabled|boolean|false|none|Whether of not the working hours are enabled on the inbox|
|csat_survey_enabled|boolean|false|none|Whether of not the Customer Satisfaction survey is enabled on the inbox|
|greeting_enabled|boolean|false|none|Whether of not the Greeting Message is enabled on the inbox|
|identity_validation_enabled|boolean|false|none|Whether of not the User Identity Validation is enforced on the inbox|

<h2 id="tocS_account_create_update_payload">account_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_create_update_payload"></a>
<a id="schema_account_create_update_payload"></a>
<a id="tocSaccount_create_update_payload"></a>
<a id="tocsaccount_create_update_payload"></a>

```json
{
  "name": "My Account",
  "locale": "en",
  "domain": "example.com",
  "support_email": "support@example.com",
  "status": "active",
  "limits": {},
  "custom_attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the account|
|locale|string|false|none|The locale of the account|
|domain|string|false|none|The domain of the account|
|support_email|string|false|none|The support email of the account|
|status|string|false|none|The status of the account|
|limits|object|false|none|The limits of the account|
|custom_attributes|object|false|none|The custom attributes of the account|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|suspended|

<h2 id="tocS_account_update_payload">account_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_update_payload"></a>
<a id="schema_account_update_payload"></a>
<a id="tocSaccount_update_payload"></a>
<a id="tocsaccount_update_payload"></a>

```json
{
  "name": "My Account",
  "locale": "en",
  "domain": "example.com",
  "support_email": "support@example.com",
  "auto_resolve_after": 1440,
  "auto_resolve_message": "This conversation has been automatically resolved due to inactivity",
  "auto_resolve_ignore_waiting": false,
  "industry": "Technology",
  "company_size": "50-100",
  "timezone": "UTC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the account|
|locale|string|false|none|The locale of the account|
|domain|string|false|none|The domain of the account|
|support_email|string|false|none|The support email of the account|
|auto_resolve_after|integer \| null|false|none|Auto resolve conversations after specified minutes|
|auto_resolve_message|string \| null|false|none|Message to send when auto resolving|
|auto_resolve_ignore_waiting|boolean \| null|false|none|Whether to ignore waiting conversations for auto resolve|
|industry|string|false|none|Industry type|
|company_size|string|false|none|Company size|
|timezone|string|false|none|Account timezone|

<h2 id="tocS_account_user_create_update_payload">account_user_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_user_create_update_payload"></a>
<a id="schema_account_user_create_update_payload"></a>
<a id="tocSaccount_user_create_update_payload"></a>
<a id="tocsaccount_user_create_update_payload"></a>

```json
{
  "user_id": 1,
  "role": "administrator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|integer|true|none|The ID of the user|
|role|string|true|none|whether user is an administrator or agent|

<h2 id="tocS_platform_agent_bot_create_update_payload">platform_agent_bot_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaplatform_agent_bot_create_update_payload"></a>
<a id="schema_platform_agent_bot_create_update_payload"></a>
<a id="tocSplatform_agent_bot_create_update_payload"></a>
<a id="tocsplatform_agent_bot_create_update_payload"></a>

```json
{
  "name": "My Agent Bot",
  "description": "This is a sample agent bot",
  "outgoing_url": "https://example.com/webhook",
  "account_id": 1,
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the agent bot|
|description|string|false|none|The description of the agent bot|
|outgoing_url|string|false|none|The webhook URL for the bot|
|account_id|integer|false|none|The account ID to associate the agent bot with|
|avatar|string(binary)|false|none|Send the form data with the avatar image binary or use the avatar_url|
|avatar_url|string|false|none|The url to a jpeg, png file for the agent bot avatar|

<h2 id="tocS_agent_bot_create_update_payload">agent_bot_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaagent_bot_create_update_payload"></a>
<a id="schema_agent_bot_create_update_payload"></a>
<a id="tocSagent_bot_create_update_payload"></a>
<a id="tocsagent_bot_create_update_payload"></a>

```json
{
  "name": "My Agent Bot",
  "description": "This is a sample agent bot",
  "outgoing_url": "https://example.com/webhook",
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png",
  "bot_type": 0,
  "bot_config": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the agent bot|
|description|string|false|none|The description of the agent bot|
|outgoing_url|string|false|none|The webhook URL for the bot|
|avatar|string(binary)|false|none|Send the form data with the avatar image binary or use the avatar_url|
|avatar_url|string|false|none|The url to a jpeg, png file for the agent bot avatar|
|bot_type|integer|false|none|The type of the bot (0 for webhook)|
|bot_config|object|false|none|The configuration for the bot|

<h2 id="tocS_user_create_update_payload">user_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemauser_create_update_payload"></a>
<a id="schema_user_create_update_payload"></a>
<a id="tocSuser_create_update_payload"></a>
<a id="tocsuser_create_update_payload"></a>

```json
{
  "name": "Daniel",
  "display_name": "Dan",
  "email": "daniel@acme.inc",
  "password": "Password2!",
  "custom_attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the user|
|display_name|string|false|none|Display name of the user|
|email|string|false|none|Email of the user|
|password|string|false|none|Password must contain uppercase, lowercase letters, number and a special character|
|custom_attributes|object|false|none|Custom attributes you want to associate with the user|

<h2 id="tocS_canned_response_create_update_payload">canned_response_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemacanned_response_create_update_payload"></a>
<a id="schema_canned_response_create_update_payload"></a>
<a id="tocScanned_response_create_update_payload"></a>
<a id="tocscanned_response_create_update_payload"></a>

```json
{
  "content": "Hello, {{contact.name}}! Welcome to our service.",
  "short_code": "welcome"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Message content for canned response|
|short_code|string|false|none|Short Code for quick access of the canned response|

<h2 id="tocS_custom_attribute_create_update_payload">custom_attribute_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemacustom_attribute_create_update_payload"></a>
<a id="schema_custom_attribute_create_update_payload"></a>
<a id="tocScustom_attribute_create_update_payload"></a>
<a id="tocscustom_attribute_create_update_payload"></a>

```json
{
  "attribute_display_name": "Custom Attribute",
  "attribute_display_type": 0,
  "attribute_description": "This is a custom attribute",
  "attribute_key": "custom_attribute",
  "attribute_values": [
    "value1",
    "value2"
  ],
  "attribute_model": 0,
  "regex_pattern": "^[a-zA-Z0-9]+$",
  "regex_cue": "Please enter a valid value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_display_name|string|false|none|Attribute display name|
|attribute_display_type|integer|false|none|Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)|
|attribute_description|string|false|none|Attribute description|
|attribute_key|string|false|none|Attribute unique key value|
|attribute_values|[string]|false|none|Attribute values|
|attribute_model|integer|false|none|Attribute type(conversation_attribute- 0, contact_attribute- 1)|
|regex_pattern|string|false|none|Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).|
|regex_cue|string|false|none|Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.|

<h2 id="tocS_agent_create_payload">agent_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemaagent_create_payload"></a>
<a id="schema_agent_create_payload"></a>
<a id="tocSagent_create_payload"></a>
<a id="tocsagent_create_payload"></a>

```json
{
  "name": "John Doe",
  "email": "john.doe@acme.inc",
  "role": "agent",
  "availability": "online",
  "auto_offline": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Full Name of the agent|
|email|string|true|none|Email of the Agent|
|role|string|true|none|Whether its administrator or agent|
|availability|string|false|none|The configured availability of the agent.|
|auto_offline|boolean|false|none|Whether the agent is automatically marked offline when they are away.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|agent|
|role|administrator|
|availability|online|
|availability|busy|
|availability|offline|

<h2 id="tocS_agent_update_payload">agent_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaagent_update_payload"></a>
<a id="schema_agent_update_payload"></a>
<a id="tocSagent_update_payload"></a>
<a id="tocsagent_update_payload"></a>

```json
{
  "role": "agent",
  "availability": "online",
  "auto_offline": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Whether its administrator or agent|
|availability|string|false|none|The configured availability of the agent.|
|auto_offline|boolean|false|none|Whether the agent is automatically marked offline when they are away.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|agent|
|role|administrator|
|availability|online|
|availability|busy|
|availability|offline|

<h2 id="tocS_contact_create_payload">contact_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemacontact_create_payload"></a>
<a id="schema_contact_create_payload"></a>
<a id="tocScontact_create_payload"></a>
<a id="tocscontact_create_payload"></a>

```json
{
  "inbox_id": 1,
  "name": "Alice",
  "email": "alice@acme.inc",
  "blocked": false,
  "phone_number": "+123456789",
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png",
  "identifier": "1234567890",
  "additional_attributes": {
    "type": "customer",
    "age": 30
  },
  "custom_attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inbox_id|number|true|none|ID of the inbox to which the contact belongs|
|name|string|false|none|name of the contact|
|email|string|false|none|email of the contact|
|blocked|boolean|false|none|whether the contact is blocked or not|
|phone_number|string|false|none|phone number of the contact|
|avatar|string(binary)|false|none|Send the form data with the avatar image binary or use the avatar_url|
|avatar_url|string|false|none|The url to a jpeg, png file for the contact avatar|
|identifier|string|false|none|A unique identifier for the contact in external system|
|additional_attributes|object|false|none|An object where you can store additional attributes for contact. example {"type":"customer", "age":30}|
|custom_attributes|object|false|none|An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.|

<h2 id="tocS_contact_update_payload">contact_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemacontact_update_payload"></a>
<a id="schema_contact_update_payload"></a>
<a id="tocScontact_update_payload"></a>
<a id="tocscontact_update_payload"></a>

```json
{
  "name": "Alice",
  "email": "alice@acme.inc",
  "blocked": false,
  "phone_number": "+123456789",
  "avatar": "string",
  "avatar_url": "https://example.com/avatar.png",
  "identifier": "1234567890",
  "additional_attributes": {
    "type": "customer",
    "age": 30
  },
  "custom_attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|name of the contact|
|email|string|false|none|email of the contact|
|blocked|boolean|false|none|whether the contact is blocked or not|
|phone_number|string|false|none|phone number of the contact|
|avatar|string(binary)|false|none|Send the form data with the avatar image binary or use the avatar_url|
|avatar_url|string|false|none|The url to a jpeg, png file for the contact avatar|
|identifier|string|false|none|A unique identifier for the contact in external system|
|additional_attributes|object|false|none|An object where you can store additional attributes for contact. example {"type":"customer", "age":30}|
|custom_attributes|object|false|none|An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.|

<h2 id="tocS_conversation_create_payload">conversation_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_create_payload"></a>
<a id="schema_conversation_create_payload"></a>
<a id="tocSconversation_create_payload"></a>
<a id="tocsconversation_create_payload"></a>

```json
{
  "source_id": "1234567890",
  "inbox_id": 1,
  "contact_id": 1,
  "additional_attributes": {
    "browser": "Chrome",
    "browser_version": "89.0.4389.82",
    "os": "Windows",
    "os_version": "10"
  },
  "custom_attributes": {
    "attribute_key": "attribute_value",
    "priority_conversation_number": 3
  },
  "status": "open",
  "assignee_id": 1,
  "team_id": 1,
  "snoozed_until": "2030-07-21T17:32:28Z",
  "message": {
    "content": "Hello, how can I help you?",
    "template_params": {
      "name": "sample_issue_resolution",
      "category": "UTILITY",
      "language": "en_US",
      "processed_params": {
        "1": "Chatwoot"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_id|string|true|none|Conversation source id|
|inbox_id|integer|false|none|Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email|
|contact_id|integer|false|none|Contact Id for which conversation is created|
|additional_attributes|object|false|none|Lets you specify attributes like browser information|
|custom_attributes|object|false|none|The object to save custom attributes for conversation, accepts custom attributes key and value|
|status|string|false|none|Specify the conversation whether it's pending, open, closed|
|assignee_id|integer|false|none|Agent Id for assigning a conversation to an agent|
|team_id|integer|false|none|Team Id for assigning a conversation to a team\|
|snoozed_until|string(date-time)|false|none|Snoozed until date time|
|message|object|false|none|The initial message to be sent to the conversation|

#### Enumerated Values

|Property|Value|
|---|---|
|status|open|
|status|resolved|
|status|pending|

<h2 id="tocS_conversation_message_create_payload">conversation_message_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_message_create_payload"></a>
<a id="schema_conversation_message_create_payload"></a>
<a id="tocSconversation_message_create_payload"></a>
<a id="tocsconversation_message_create_payload"></a>

```json
{
  "content": "Hello, how can I help you?",
  "message_type": "outgoing",
  "private": false,
  "content_type": "text",
  "content_attributes": {
    "items": [
      {
        "title": "Option 1",
        "value": "option_1",
        "description": "Optional WhatsApp list row subtitle"
      }
    ]
  },
  "campaign_id": 1,
  "template_params": {
    "name": "purchase_receipt",
    "category": "UTILITY",
    "language": "en_US",
    "content_mode": "rendered",
    "processed_params": {
      "body": {
        "1": "Visa",
        "2": "Nike",
        "3": "Bill"
      },
      "header": {
        "media_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "media_type": "document"
      },
      "buttons": [
        {
          "type": "url",
          "parameter": "SSFSDFSD"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The content of the message|
|message_type|string|false|none|The type of the message|
|private|boolean|false|none|Flag to identify if it is a private note|
|content_type|string|false|none|Content type of the message|
|content_attributes|object|false|none|Attributes based on the content type. For `input_select`, provide an `items` array with<br>`title`, `value`, and optional `description`. WhatsApp list messages use `description`<br>as the row subtitle when present.<br>|
|campaign_id|integer|false|none|The campaign id to which the message belongs|
|template_params|object|false|none|WhatsApp template parameters for sending structured messages|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|outgoing|
|message_type|incoming|
|content_type|text|
|content_type|input_email|
|content_type|cards|
|content_type|input_select|
|content_type|form|
|content_type|article|

<h2 id="tocS_inbox_create_payload">inbox_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_payload"></a>
<a id="schema_inbox_create_payload"></a>
<a id="tocSinbox_create_payload"></a>
<a id="tocsinbox_create_payload"></a>

```json
{
  "name": "Support",
  "avatar": "string",
  "greeting_enabled": true,
  "greeting_message": "Hello, how can I help you?",
  "enable_email_collect": true,
  "csat_survey_enabled": true,
  "csat_config": {
    "display_type": "emoji",
    "message": "Please rate your conversation",
    "button_text": "Please rate us",
    "language": "en",
    "survey_rules": {
      "operator": "contains",
      "values": [
        "billing"
      ]
    }
  },
  "enable_auto_assignment": true,
  "working_hours_enabled": true,
  "out_of_office_message": "We are currently out of office. Please leave a message and we will get back to you.",
  "timezone": "America/New_York",
  "allow_messages_after_resolved": true,
  "lock_to_single_conversation": true,
  "portal_id": 1,
  "sender_name_type": "friendly",
  "business_name": "My Business",
  "channel": {
    "type": "web_widget",
    "website_url": "https://example.com",
    "welcome_title": "Welcome to our support",
    "welcome_tagline": "We are here to help you",
    "widget_color": "#FF5733",
    "reply_time": "in_a_few_minutes",
    "pre_chat_form_enabled": false,
    "pre_chat_form_options": {
      "pre_chat_message": "Share your queries or comments here.",
      "pre_chat_fields": [
        {
          "field_type": "standard",
          "label": "Email Id",
          "name": "emailAddress",
          "type": "email",
          "required": true,
          "enabled": true
        }
      ]
    },
    "continuity_via_email": true,
    "hmac_mandatory": false,
    "allowed_domains": "example.com",
    "selected_feature_flags": [
      "attachments",
      "emoji_picker",
      "end_conversation"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the inbox.|
|avatar|string(binary)|false|none|Image file for avatar.|
|greeting_enabled|boolean|false|none|Enable greeting message.|
|greeting_message|string|false|none|Greeting message to send when greeting messages are enabled.|
|enable_email_collect|boolean|false|none|Enable email collection.<br><br>Available for: `Website`<br>|
|csat_survey_enabled|boolean|false|none|Enable CSAT survey.|
|csat_config|object|false|none|CSAT survey configuration.|
|enable_auto_assignment|boolean|false|none|Enable Auto Assignment.|
|working_hours_enabled|boolean|false|none|Enable working hours.|
|out_of_office_message|string|false|none|Out of office message to send outside working hours.|
|timezone|string|false|none|Timezone of the inbox.|
|allow_messages_after_resolved|boolean|false|none|Allow messages after conversation is resolved.<br><br>Available for: `Website`<br>|
|lock_to_single_conversation|boolean|false|none|Lock contact messages to a single active conversation.<br><br>Available for: `API` `LINE` `Telegram` `WhatsApp` `SMS`<br>|
|portal_id|integer|false|none|Id of the help center portal to attach to the inbox.|
|sender_name_type|string|false|none|Sender name type for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|business_name|string|false|none|Business name for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|channel|[inbox_create_web_widget_channel_payload](#schemainbox_create_web_widget_channel_payload) \| [inbox_create_api_channel_payload](#schemainbox_create_api_channel_payload) \| [inbox_create_email_channel_payload](#schemainbox_create_email_channel_payload) \| [inbox_create_line_channel_payload](#schemainbox_create_line_channel_payload) \| [inbox_create_telegram_channel_payload](#schemainbox_create_telegram_channel_payload) \| [inbox_create_whatsapp_channel_payload](#schemainbox_create_whatsapp_channel_payload) \| [inbox_create_sms_channel_payload](#schemainbox_create_sms_channel_payload)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sender_name_type|friendly|
|sender_name_type|professional|

<h2 id="tocS_inbox_update_payload">inbox_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_payload"></a>
<a id="schema_inbox_update_payload"></a>
<a id="tocSinbox_update_payload"></a>
<a id="tocsinbox_update_payload"></a>

```json
{
  "name": "Support",
  "avatar": "string",
  "greeting_enabled": true,
  "greeting_message": "Hello, how can I help you?",
  "enable_email_collect": true,
  "csat_survey_enabled": true,
  "csat_config": {
    "display_type": "emoji",
    "message": "Please rate your conversation",
    "button_text": "Please rate us",
    "language": "en",
    "survey_rules": {
      "operator": "contains",
      "values": [
        "billing"
      ]
    }
  },
  "enable_auto_assignment": true,
  "working_hours_enabled": true,
  "out_of_office_message": "We are currently out of office. Please leave a message and we will get back to you.",
  "timezone": "America/New_York",
  "allow_messages_after_resolved": true,
  "lock_to_single_conversation": true,
  "portal_id": 1,
  "sender_name_type": "friendly",
  "business_name": "My Business",
  "branded_email_layout": "<html><body>{{ content_for_layout }}</body></html>",
  "channel": {
    "website_url": "https://example.com",
    "welcome_title": "Welcome to our support",
    "welcome_tagline": "We are here to help you",
    "widget_color": "#FF5733",
    "reply_time": "in_a_few_minutes",
    "pre_chat_form_enabled": false,
    "pre_chat_form_options": {
      "pre_chat_message": "Share your queries or comments here.",
      "pre_chat_fields": [
        {
          "field_type": "standard",
          "label": "Email Id",
          "name": "emailAddress",
          "type": "email",
          "required": true,
          "enabled": true
        }
      ]
    },
    "continuity_via_email": true,
    "hmac_mandatory": false,
    "allowed_domains": "example.com",
    "selected_feature_flags": [
      "attachments",
      "emoji_picker",
      "end_conversation"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the inbox.|
|avatar|string(binary)|false|none|Image file for avatar.|
|greeting_enabled|boolean|false|none|Enable greeting message.|
|greeting_message|string|false|none|Greeting message to send when greeting messages are enabled.|
|enable_email_collect|boolean|false|none|Enable email collection.<br><br>Available for: `Website`<br>|
|csat_survey_enabled|boolean|false|none|Enable CSAT survey.|
|csat_config|object|false|none|CSAT survey configuration.|
|enable_auto_assignment|boolean|false|none|Enable Auto Assignment.|
|working_hours_enabled|boolean|false|none|Enable working hours.|
|out_of_office_message|string|false|none|Out of office message to send outside working hours.|
|timezone|string|false|none|Timezone of the inbox.|
|allow_messages_after_resolved|boolean|false|none|Allow messages after conversation is resolved.<br><br>Available for: `Website`<br>|
|lock_to_single_conversation|boolean|false|none|Lock contact messages to a single active conversation.<br><br>Available for: `API` `LINE` `Telegram` `WhatsApp` `SMS`<br>|
|portal_id|integer|false|none|Id of the help center portal to attach to the inbox.|
|sender_name_type|string|false|none|Sender name type for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|business_name|string|false|none|Business name for outbound email replies.<br><br>Available for: `Website` `Email`<br>|
|branded_email_layout|string \| null|false|none|Liquid HTML layout for outbound email replies. Must include `{{ content_for_layout }}` and be 262,144 characters or shorter.<br><br>Available for: `Email`<br>|
|channel|[inbox_update_web_widget_channel_payload](#schemainbox_update_web_widget_channel_payload) \| [inbox_update_api_channel_payload](#schemainbox_update_api_channel_payload) \| [inbox_update_email_channel_payload](#schemainbox_update_email_channel_payload) \| [inbox_update_line_channel_payload](#schemainbox_update_line_channel_payload) \| [inbox_update_telegram_channel_payload](#schemainbox_update_telegram_channel_payload) \| [inbox_update_whatsapp_channel_payload](#schemainbox_update_whatsapp_channel_payload) \| [inbox_update_sms_channel_payload](#schemainbox_update_sms_channel_payload)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sender_name_type|friendly|
|sender_name_type|professional|

<h2 id="tocS_account_branded_email_layout_payload">account_branded_email_layout_payload</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_branded_email_layout_payload"></a>
<a id="schema_account_branded_email_layout_payload"></a>
<a id="tocSaccount_branded_email_layout_payload"></a>
<a id="tocsaccount_branded_email_layout_payload"></a>

```json
{
  "branded_email_layout": "<html><body>{{ content_for_layout }}</body></html>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branded_email_layout|string \| null|false|none|Account-scoped Liquid HTML layout for branded email replies. Maximum length is 262,144 characters. Blank or null removes the account override.|

<h2 id="tocS_inbox_create_web_widget_channel_payload">inbox_create_web_widget_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_web_widget_channel_payload"></a>
<a id="schema_inbox_create_web_widget_channel_payload"></a>
<a id="tocSinbox_create_web_widget_channel_payload"></a>
<a id="tocsinbox_create_web_widget_channel_payload"></a>

```json
{
  "type": "web_widget",
  "website_url": "https://example.com",
  "welcome_title": "Welcome to our support",
  "welcome_tagline": "We are here to help you",
  "widget_color": "#FF5733",
  "reply_time": "in_a_few_minutes",
  "pre_chat_form_enabled": false,
  "pre_chat_form_options": {
    "pre_chat_message": "Share your queries or comments here.",
    "pre_chat_fields": [
      {
        "field_type": "standard",
        "label": "Email Id",
        "name": "emailAddress",
        "type": "email",
        "required": true,
        "enabled": true
      }
    ]
  },
  "continuity_via_email": true,
  "hmac_mandatory": false,
  "allowed_domains": "example.com",
  "selected_feature_flags": [
    "attachments",
    "emoji_picker",
    "end_conversation"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|website_url|string|true|none|URL at which the widget will be loaded|
|welcome_title|string|false|none|Welcome title to be displayed on the widget|
|welcome_tagline|string|false|none|Welcome tagline to be displayed on the widget|
|widget_color|string|false|none|A Hex-color string used to customize the widget|
|reply_time|string|false|none|Expected reply time shown on the widget|
|pre_chat_form_enabled|boolean|false|none|Enable the pre-chat form before starting a conversation|
|pre_chat_form_options|object|false|none|Pre-chat form configuration|
|continuity_via_email|boolean|false|none|Continue conversations over email when the contact leaves the website|
|hmac_mandatory|boolean|false|none|Require HMAC verification for contacts using the widget|
|allowed_domains|string|false|none|Comma-separated list of domains where the widget is allowed to load|
|selected_feature_flags|[string]|false|none|Enabled widget feature flags|

#### Enumerated Values

|Property|Value|
|---|---|
|type|web_widget|
|reply_time|in_a_few_minutes|
|reply_time|in_a_few_hours|
|reply_time|in_a_day|
|selected_feature_flags|attachments|
|selected_feature_flags|emoji_picker|
|selected_feature_flags|end_conversation|
|selected_feature_flags|use_inbox_avatar_for_bot|
|selected_feature_flags|allow_mobile_webview|

<h2 id="tocS_inbox_create_api_channel_payload">inbox_create_api_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_api_channel_payload"></a>
<a id="schema_inbox_create_api_channel_payload"></a>
<a id="tocSinbox_create_api_channel_payload"></a>
<a id="tocsinbox_create_api_channel_payload"></a>

```json
{
  "type": "api",
  "webhook_url": "https://example.com/webhook",
  "hmac_mandatory": false,
  "additional_attributes": {
    "source": "mobile_app"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|webhook_url|string|false|none|Webhook URL for API channel inbox callbacks|
|hmac_mandatory|boolean|false|none|Require HMAC verification for incoming API channel messages|
|additional_attributes|object|false|none|Additional attributes stored on contacts created through the API channel|

#### Enumerated Values

|Property|Value|
|---|---|
|type|api|

<h2 id="tocS_inbox_create_email_channel_payload">inbox_create_email_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_email_channel_payload"></a>
<a id="schema_inbox_create_email_channel_payload"></a>
<a id="tocSinbox_create_email_channel_payload"></a>
<a id="tocsinbox_create_email_channel_payload"></a>

```json
{
  "type": "email",
  "email": "support@example.com",
  "imap_enabled": true,
  "imap_login": "support@example.com",
  "imap_password": "your-imap-password",
  "imap_address": "imap.example.com",
  "imap_port": 993,
  "imap_enable_ssl": true,
  "imap_authentication": "plain",
  "smtp_enabled": true,
  "smtp_login": "support@example.com",
  "smtp_password": "your-smtp-password",
  "smtp_address": "smtp.example.com",
  "smtp_port": 587,
  "smtp_domain": "example.com",
  "smtp_enable_starttls_auto": true,
  "smtp_enable_ssl_tls": false,
  "smtp_openssl_verify_mode": "none",
  "smtp_authentication": "login",
  "provider": "google",
  "verified_for_sending": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|email|string|true|none|Email address for the inbox|
|imap_enabled|boolean|false|none|Enable IMAP for inbound emails|
|imap_login|string|false|none|IMAP login username|
|imap_password|string|false|none|IMAP login password|
|imap_address|string|false|none|IMAP server address|
|imap_port|integer|false|none|IMAP server port|
|imap_enable_ssl|boolean|false|none|Enable SSL for IMAP|
|imap_authentication|string|false|none|IMAP authentication method|
|smtp_enabled|boolean|false|none|Enable SMTP for outbound emails|
|smtp_login|string|false|none|SMTP login username|
|smtp_password|string|false|none|SMTP login password|
|smtp_address|string|false|none|SMTP server address|
|smtp_port|integer|false|none|SMTP server port|
|smtp_domain|string|false|none|SMTP HELO domain|
|smtp_enable_starttls_auto|boolean|false|none|Automatically enable STARTTLS for SMTP|
|smtp_enable_ssl_tls|boolean|false|none|Enable SSL/TLS for SMTP|
|smtp_openssl_verify_mode|string|false|none|OpenSSL certificate verification mode for SMTP|
|smtp_authentication|string|false|none|SMTP authentication method|
|provider|string|false|none|Email provider|
|verified_for_sending|boolean|false|none|Whether the inbox is verified for sending emails|

#### Enumerated Values

|Property|Value|
|---|---|
|type|email|

<h2 id="tocS_inbox_create_line_channel_payload">inbox_create_line_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_line_channel_payload"></a>
<a id="schema_inbox_create_line_channel_payload"></a>
<a id="tocSinbox_create_line_channel_payload"></a>
<a id="tocsinbox_create_line_channel_payload"></a>

```json
{
  "type": "line",
  "line_channel_id": "1234567890",
  "line_channel_secret": "line-channel-secret",
  "line_channel_token": "line-channel-token"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|line_channel_id|string|true|none|LINE channel ID|
|line_channel_secret|string|true|none|LINE channel secret|
|line_channel_token|string|true|none|LINE channel access token|

#### Enumerated Values

|Property|Value|
|---|---|
|type|line|

<h2 id="tocS_inbox_create_telegram_channel_payload">inbox_create_telegram_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_telegram_channel_payload"></a>
<a id="schema_inbox_create_telegram_channel_payload"></a>
<a id="tocSinbox_create_telegram_channel_payload"></a>
<a id="tocsinbox_create_telegram_channel_payload"></a>

```json
{
  "type": "telegram",
  "bot_token": "123456789:telegram-bot-token"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|bot_token|string|true|none|Telegram bot token|

#### Enumerated Values

|Property|Value|
|---|---|
|type|telegram|

<h2 id="tocS_inbox_create_whatsapp_channel_payload">inbox_create_whatsapp_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_whatsapp_channel_payload"></a>
<a id="schema_inbox_create_whatsapp_channel_payload"></a>
<a id="tocSinbox_create_whatsapp_channel_payload"></a>
<a id="tocsinbox_create_whatsapp_channel_payload"></a>

```json
{
  "type": "whatsapp",
  "phone_number": "+15551234567",
  "provider": "whatsapp_cloud",
  "provider_config": {
    "api_key": "your-api-key",
    "phone_number_id": "your-phone-number-id",
    "business_account_id": "your-business-account-id"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|phone_number|string|true|none|WhatsApp phone number|
|provider|string|true|none|WhatsApp provider|
|provider_config|object|true|none|WhatsApp Cloud provider configuration|
|*oneOf*|object|false|none|**Deprecated.**|
|type|string|true|none|none|
|phone_number|string|true|none|WhatsApp phone number|
|provider|string|false|none|**Deprecated.** Legacy 360dialog provider. Omit this field or use `default` only for existing deprecated 360dialog setups.|
|provider_config|object|true|none|Legacy 360dialog provider configuration|

#### Enumerated Values

|Property|Value|
|---|---|
|type|whatsapp|
|provider|whatsapp_cloud|
|type|whatsapp|
|provider|default|

<h2 id="tocS_inbox_create_sms_channel_payload">inbox_create_sms_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_create_sms_channel_payload"></a>
<a id="schema_inbox_create_sms_channel_payload"></a>
<a id="tocSinbox_create_sms_channel_payload"></a>
<a id="tocsinbox_create_sms_channel_payload"></a>

```json
{
  "type": "sms",
  "phone_number": "+15551234567",
  "provider_config": {
    "account_id": "your-account-id",
    "application_id": "your-application-id"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|phone_number|string|true|none|SMS phone number|
|provider_config|object|false|none|Provider-specific SMS configuration|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sms|

<h2 id="tocS_inbox_update_web_widget_channel_payload">inbox_update_web_widget_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_web_widget_channel_payload"></a>
<a id="schema_inbox_update_web_widget_channel_payload"></a>
<a id="tocSinbox_update_web_widget_channel_payload"></a>
<a id="tocsinbox_update_web_widget_channel_payload"></a>

```json
{
  "website_url": "https://example.com",
  "welcome_title": "Welcome to our support",
  "welcome_tagline": "We are here to help you",
  "widget_color": "#FF5733",
  "reply_time": "in_a_few_minutes",
  "pre_chat_form_enabled": false,
  "pre_chat_form_options": {
    "pre_chat_message": "Share your queries or comments here.",
    "pre_chat_fields": [
      {
        "field_type": "standard",
        "label": "Email Id",
        "name": "emailAddress",
        "type": "email",
        "required": true,
        "enabled": true
      }
    ]
  },
  "continuity_via_email": true,
  "hmac_mandatory": false,
  "allowed_domains": "example.com",
  "selected_feature_flags": [
    "attachments",
    "emoji_picker",
    "end_conversation"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|website_url|string|false|none|URL at which the widget will be loaded|
|welcome_title|string|false|none|Welcome title to be displayed on the widget|
|welcome_tagline|string|false|none|Welcome tagline to be displayed on the widget|
|widget_color|string|false|none|A Hex-color string used to customize the widget|
|reply_time|string|false|none|Expected reply time shown on the widget|
|pre_chat_form_enabled|boolean|false|none|Enable the pre-chat form before starting a conversation|
|pre_chat_form_options|object|false|none|Pre-chat form configuration|
|continuity_via_email|boolean|false|none|Continue conversations over email when the contact leaves the website|
|hmac_mandatory|boolean|false|none|Require HMAC verification for contacts using the widget|
|allowed_domains|string|false|none|Comma-separated list of domains where the widget is allowed to load|
|selected_feature_flags|[string]|false|none|Enabled widget feature flags|

#### Enumerated Values

|Property|Value|
|---|---|
|reply_time|in_a_few_minutes|
|reply_time|in_a_few_hours|
|reply_time|in_a_day|
|selected_feature_flags|attachments|
|selected_feature_flags|emoji_picker|
|selected_feature_flags|end_conversation|
|selected_feature_flags|use_inbox_avatar_for_bot|
|selected_feature_flags|allow_mobile_webview|

<h2 id="tocS_inbox_update_api_channel_payload">inbox_update_api_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_api_channel_payload"></a>
<a id="schema_inbox_update_api_channel_payload"></a>
<a id="tocSinbox_update_api_channel_payload"></a>
<a id="tocsinbox_update_api_channel_payload"></a>

```json
{
  "webhook_url": "https://example.com/webhook",
  "hmac_mandatory": false,
  "additional_attributes": {
    "source": "mobile_app"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_url|string|false|none|Webhook URL for API channel inbox callbacks|
|hmac_mandatory|boolean|false|none|Require HMAC verification for incoming API channel messages|
|additional_attributes|object|false|none|Additional attributes stored on contacts created through the API channel|

<h2 id="tocS_inbox_update_email_channel_payload">inbox_update_email_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_email_channel_payload"></a>
<a id="schema_inbox_update_email_channel_payload"></a>
<a id="tocSinbox_update_email_channel_payload"></a>
<a id="tocsinbox_update_email_channel_payload"></a>

```json
{
  "email": "support@example.com",
  "imap_enabled": true,
  "imap_login": "support@example.com",
  "imap_password": "your-imap-password",
  "imap_address": "imap.example.com",
  "imap_port": 993,
  "imap_enable_ssl": true,
  "imap_authentication": "plain",
  "smtp_enabled": true,
  "smtp_login": "support@example.com",
  "smtp_password": "your-smtp-password",
  "smtp_address": "smtp.example.com",
  "smtp_port": 587,
  "smtp_domain": "example.com",
  "smtp_enable_starttls_auto": true,
  "smtp_enable_ssl_tls": false,
  "smtp_openssl_verify_mode": "none",
  "smtp_authentication": "login",
  "provider": "google",
  "verified_for_sending": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address for the inbox|
|imap_enabled|boolean|false|none|Enable IMAP for inbound emails|
|imap_login|string|false|none|IMAP login username|
|imap_password|string|false|none|IMAP login password|
|imap_address|string|false|none|IMAP server address|
|imap_port|integer|false|none|IMAP server port|
|imap_enable_ssl|boolean|false|none|Enable SSL for IMAP|
|imap_authentication|string|false|none|IMAP authentication method|
|smtp_enabled|boolean|false|none|Enable SMTP for outbound emails|
|smtp_login|string|false|none|SMTP login username|
|smtp_password|string|false|none|SMTP login password|
|smtp_address|string|false|none|SMTP server address|
|smtp_port|integer|false|none|SMTP server port|
|smtp_domain|string|false|none|SMTP HELO domain|
|smtp_enable_starttls_auto|boolean|false|none|Automatically enable STARTTLS for SMTP|
|smtp_enable_ssl_tls|boolean|false|none|Enable SSL/TLS for SMTP|
|smtp_openssl_verify_mode|string|false|none|OpenSSL certificate verification mode for SMTP|
|smtp_authentication|string|false|none|SMTP authentication method|
|provider|string|false|none|Email provider|
|verified_for_sending|boolean|false|none|Whether the inbox is verified for sending emails|

<h2 id="tocS_inbox_update_line_channel_payload">inbox_update_line_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_line_channel_payload"></a>
<a id="schema_inbox_update_line_channel_payload"></a>
<a id="tocSinbox_update_line_channel_payload"></a>
<a id="tocsinbox_update_line_channel_payload"></a>

```json
{
  "line_channel_id": "1234567890",
  "line_channel_secret": "line-channel-secret",
  "line_channel_token": "line-channel-token"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_channel_id|string|false|none|LINE channel ID|
|line_channel_secret|string|false|none|LINE channel secret|
|line_channel_token|string|false|none|LINE channel access token|

<h2 id="tocS_inbox_update_telegram_channel_payload">inbox_update_telegram_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_telegram_channel_payload"></a>
<a id="schema_inbox_update_telegram_channel_payload"></a>
<a id="tocSinbox_update_telegram_channel_payload"></a>
<a id="tocsinbox_update_telegram_channel_payload"></a>

```json
{
  "bot_token": "123456789:telegram-bot-token"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bot_token|string|false|none|Telegram bot token|

<h2 id="tocS_inbox_update_whatsapp_channel_payload">inbox_update_whatsapp_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_whatsapp_channel_payload"></a>
<a id="schema_inbox_update_whatsapp_channel_payload"></a>
<a id="tocSinbox_update_whatsapp_channel_payload"></a>
<a id="tocsinbox_update_whatsapp_channel_payload"></a>

```json
{
  "phone_number": "+15551234567",
  "provider": "whatsapp_cloud",
  "provider_config": {
    "api_key": "your-api-key",
    "phone_number_id": "your-phone-number-id",
    "business_account_id": "your-business-account-id"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone_number|string|false|none|WhatsApp phone number|
|provider|string|false|none|WhatsApp provider. `default` is supported only for existing deprecated 360dialog setups.|
|provider_config|object|false|none|WhatsApp provider configuration. Cloud channels use `api_key`, `phone_number_id`, and `business_account_id`; legacy 360dialog channels use `api_key`.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|whatsapp_cloud|
|provider|default|

<h2 id="tocS_inbox_update_sms_channel_payload">inbox_update_sms_channel_payload</h2>
<!-- backwards compatibility -->
<a id="schemainbox_update_sms_channel_payload"></a>
<a id="schema_inbox_update_sms_channel_payload"></a>
<a id="tocSinbox_update_sms_channel_payload"></a>
<a id="tocsinbox_update_sms_channel_payload"></a>

```json
{
  "phone_number": "+15551234567",
  "provider_config": {
    "api_key": "your-api-key",
    "api_secret": "your-api-secret",
    "application_id": "your-application-id",
    "account_id": "your-account-id"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone_number|string|false|none|SMS phone number|
|provider_config|object|false|none|Provider-specific SMS configuration|

<h2 id="tocS_team_create_update_payload">team_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemateam_create_update_payload"></a>
<a id="schema_team_create_update_payload"></a>
<a id="tocSteam_create_update_payload"></a>
<a id="tocsteam_create_update_payload"></a>

```json
{
  "name": "Support Team",
  "description": "This is a team of support agents",
  "allow_auto_assign": true,
  "icon": "🚀",
  "icon_color": "#6C5CE7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the team|
|description|string|false|none|The description of the team|
|allow_auto_assign|boolean|false|none|If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team|
|icon|string|false|none|An emoji or icon shown next to the team|
|icon_color|string|false|none|The color used for the team icon|

<h2 id="tocS_label_create_update_payload">label_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemalabel_create_update_payload"></a>
<a id="schema_label_create_update_payload"></a>
<a id="tocSlabel_create_update_payload"></a>
<a id="tocslabel_create_update_payload"></a>

```json
{
  "title": "support",
  "description": "Conversations that need support follow-up",
  "color": "#1f93ff",
  "show_on_sidebar": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The label title|
|description|string|false|none|A short description for the label|
|color|string|false|none|Hex color code for the label|
|show_on_sidebar|boolean|false|none|Whether the label should appear in the sidebar|

<h2 id="tocS_custom_filter_create_update_payload">custom_filter_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemacustom_filter_create_update_payload"></a>
<a id="schema_custom_filter_create_update_payload"></a>
<a id="tocScustom_filter_create_update_payload"></a>
<a id="tocscustom_filter_create_update_payload"></a>

```json
{
  "name": "My Custom Filter",
  "type": "conversation",
  "query": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the custom filter|
|type|string|false|none|The description about the custom filter|
|query|object|false|none|A query that needs to be saved as a custom filter|

#### Enumerated Values

|Property|Value|
|---|---|
|type|conversation|
|type|contact|
|type|report|

<h2 id="tocS_webhook_create_update_payload">webhook_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemawebhook_create_update_payload"></a>
<a id="schema_webhook_create_update_payload"></a>
<a id="tocSwebhook_create_update_payload"></a>
<a id="tocswebhook_create_update_payload"></a>

```json
{
  "url": "https://example.com/webhook",
  "name": "string",
  "subscriptions": [
    "conversation_created",
    "conversation_status_changed"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The url where the events should be sent|
|name|string|false|none|The name of the webhook|
|subscriptions|[string]|false|none|The events you want to subscribe to.|

#### Enumerated Values

|Property|Value|
|---|---|
|subscriptions|conversation_created|
|subscriptions|conversation_status_changed|
|subscriptions|conversation_updated|
|subscriptions|message_created|
|subscriptions|message_updated|
|subscriptions|contact_created|
|subscriptions|contact_updated|
|subscriptions|webwidget_triggered|
|subscriptions|conversation_typing_on|
|subscriptions|conversation_typing_off|

<h2 id="tocS_integrations_hook_create_payload">integrations_hook_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations_hook_create_payload"></a>
<a id="schema_integrations_hook_create_payload"></a>
<a id="tocSintegrations_hook_create_payload"></a>
<a id="tocsintegrations_hook_create_payload"></a>

```json
{
  "app_id": 1,
  "inbox_id": 1,
  "status": 1,
  "settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_id|integer|false|none|The ID of app for which integration hook is being created|
|inbox_id|integer|false|none|The inbox ID, if the hook is an inbox hook|
|status|integer|false|none|The status of the integration (0 for inactive, 1 for active)|
|settings|object|false|none|The settings required by the integration|

<h2 id="tocS_integrations_hook_update_payload">integrations_hook_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations_hook_update_payload"></a>
<a id="schema_integrations_hook_update_payload"></a>
<a id="tocSintegrations_hook_update_payload"></a>
<a id="tocsintegrations_hook_update_payload"></a>

```json
{
  "status": 1,
  "settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|The status of the integration (0 for inactive, 1 for active)|
|settings|object|false|none|The settings required by the integration|

<h2 id="tocS_automation_rule_create_update_payload">automation_rule_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaautomation_rule_create_update_payload"></a>
<a id="schema_automation_rule_create_update_payload"></a>
<a id="tocSautomation_rule_create_update_payload"></a>
<a id="tocsautomation_rule_create_update_payload"></a>

```json
{
  "name": "Add label on message create event",
  "description": "Add label support and sales on message create event if incoming message content contains text help",
  "event_name": "message_created",
  "active": true,
  "actions": [
    {
      "action_name": "add_label",
      "action_params": [
        "support"
      ]
    }
  ],
  "conditions": [
    {
      "attribute_key": "content",
      "filter_operator": "contains",
      "query_operator": "OR",
      "values": [
        "help"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Rule name|
|description|string|false|none|The description about the automation and actions|
|event_name|string|false|none|The event when you want to execute the automation actions|
|active|boolean|false|none|Enable/disable automation rule|
|actions|[object]|false|none|Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.|
|conditions|[object]|false|none|Array of conditions on which conversation filter would work, e.g message content contains text help.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_name|conversation_created|
|event_name|conversation_updated|
|event_name|conversation_resolved|
|event_name|message_created|

<h2 id="tocS_portal_create_update_payload">portal_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaportal_create_update_payload"></a>
<a id="schema_portal_create_update_payload"></a>
<a id="tocSportal_create_update_payload"></a>
<a id="tocsportal_create_update_payload"></a>

```json
{
  "color": "#FFFFFF",
  "custom_domain": "chatwoot.help",
  "header_text": "Handbook",
  "homepage_link": "https://www.chatwoot.com/",
  "name": "Handbook",
  "page_title": "Handbook",
  "slug": "handbook",
  "archived": false,
  "config": {
    "allowed_locales": [
      "en",
      "es"
    ],
    "default_locale": "en"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|Header color for help-center in hex format|
|custom_domain|string|false|none|Custom domain to display help center.|
|header_text|string|false|none|Help center header|
|homepage_link|string|false|none|link to main dashboard|
|name|string|false|none|Name for the portal|
|page_title|string|false|none|Page title for the portal|
|slug|string|false|none|Slug for the portal to display in link|
|archived|boolean|false|none|Status to check if portal is live|
|config|object|false|none|Configuration about supporting locales|

<h2 id="tocS_category_create_update_payload">category_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemacategory_create_update_payload"></a>
<a id="schema_category_create_update_payload"></a>
<a id="tocScategory_create_update_payload"></a>
<a id="tocscategory_create_update_payload"></a>

```json
{
  "name": "Category Name",
  "description": "Category description",
  "position": 1,
  "slug": "category-name",
  "locale": "en",
  "icon": "📚",
  "parent_category_id": 1,
  "associated_category_id": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the category|
|description|string|false|none|A description for the category|
|position|integer|false|none|Category position in the portal list to sort|
|slug|string|false|none|The category slug used in the URL|
|locale|string|false|none|The locale of the category|
|icon|string|false|none|The icon of the category as a string (emoji)|
|parent_category_id|integer|false|none|To define parent category, e.g product documentation has multiple level features in sales category or in engineering category.|
|associated_category_id|integer|false|none|To associate similar categories to each other, e.g same category of product documentation in different languages|

<h2 id="tocS_article_create_update_payload">article_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemaarticle_create_update_payload"></a>
<a id="schema_article_create_update_payload"></a>
<a id="tocSarticle_create_update_payload"></a>
<a id="tocsarticle_create_update_payload"></a>

```json
{
  "title": "Article Title",
  "slug": "article-title",
  "position": 1,
  "content": "This is the content of the article",
  "description": "This is the description of the article",
  "category_id": 1,
  "author_id": 1,
  "associated_article_id": 2,
  "status": 1,
  "locale": "en",
  "meta": {
    "tags": [
      "article_name"
    ],
    "title": "article title",
    "description": "article description"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The title of the article|
|slug|string|false|none|The slug of the article|
|position|integer|false|none|article position in category|
|content|string|false|none|The text content.|
|description|string|false|none|The description of the article|
|category_id|integer|false|none|The category id of the article|
|author_id|integer|false|none|The author agent id of the article|
|associated_article_id|integer|false|none|To associate similar articles to each other, e.g to provide the link for the reference.|
|status|integer|false|none|The status of the article. 0 for draft, 1 for published, 2 for archived|
|locale|string|false|none|The locale of the article|
|meta|object|false|none|Use for search|

<h2 id="tocS_public_contact_create_update_payload">public_contact_create_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemapublic_contact_create_update_payload"></a>
<a id="schema_public_contact_create_update_payload"></a>
<a id="tocSpublic_contact_create_update_payload"></a>
<a id="tocspublic_contact_create_update_payload"></a>

```json
{
  "identifier": "1234567890",
  "identifier_hash": "e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9",
  "email": "alice@acme.inc",
  "name": "Alice",
  "phone_number": "+123456789",
  "avatar": "string",
  "custom_attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|false|none|External identifier of the contact|
|identifier_hash|string|false|none|Identifier hash prepared for HMAC authentication|
|email|string|false|none|Email of the contact|
|name|string|false|none|Name of the contact|
|phone_number|string|false|none|Phone number of the contact|
|avatar|string(binary)|false|none|Send the form data with the avatar image binary or use the avatar_url|
|custom_attributes|object|false|none|Custom attributes of the customer|

<h2 id="tocS_public_message_create_payload">public_message_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemapublic_message_create_payload"></a>
<a id="schema_public_message_create_payload"></a>
<a id="tocSpublic_message_create_payload"></a>
<a id="tocspublic_message_create_payload"></a>

```json
{
  "content": "Hello, how can I help you?",
  "echo_id": "1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Content for the message|
|echo_id|string|false|none|Temporary identifier which will be passed back via websockets|

<h2 id="tocS_public_message_update_payload">public_message_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemapublic_message_update_payload"></a>
<a id="schema_public_message_update_payload"></a>
<a id="tocSpublic_message_update_payload"></a>
<a id="tocspublic_message_update_payload"></a>

```json
{
  "submitted_values": {
    "name": "My Name",
    "title": "My Title",
    "value": "value",
    "csat_survey_response": {
      "feedback_message": "Great service!",
      "rating": 5
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|submitted_values|object|false|none|Replies to the Bot Message Types|

<h2 id="tocS_public_conversation_create_payload">public_conversation_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemapublic_conversation_create_payload"></a>
<a id="schema_public_conversation_create_payload"></a>
<a id="tocSpublic_conversation_create_payload"></a>
<a id="tocspublic_conversation_create_payload"></a>

```json
{
  "custom_attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_attributes|object|false|none|Custom attributes of the conversation|

<h2 id="tocS_extended_contact">extended_contact</h2>
<!-- backwards compatibility -->
<a id="schemaextended_contact"></a>
<a id="schema_extended_contact"></a>
<a id="tocSextended_contact"></a>
<a id="tocsextended_contact"></a>

```json
{
  "payload": [
    {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {
        "attribute_key": "attribute_value",
        "signed_up_at": "dd/mm/yyyy"
      },
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ],
  "id": 0,
  "availability_status": "online"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[object]|false|none|none|
|id|number|false|none|Id of the user|
|availability_status|string|false|none|Availability status of the user|

#### Enumerated Values

|Property|Value|
|---|---|
|availability_status|online|
|availability_status|offline|

<h2 id="tocS_contact_base">contact_base</h2>
<!-- backwards compatibility -->
<a id="schemacontact_base"></a>
<a id="schema_contact_base"></a>
<a id="tocScontact_base"></a>
<a id="tocscontact_base"></a>

```json
{
  "id": 0,
  "payload": [
    {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {
        "attribute_key": "attribute_value",
        "signed_up_at": "dd/mm/yyyy"
      },
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|payload|[object]|false|none|none|

<h2 id="tocS_contact_list">contact_list</h2>
<!-- backwards compatibility -->
<a id="schemacontact_list"></a>
<a id="schema_contact_list"></a>
<a id="tocScontact_list"></a>
<a id="tocscontact_list"></a>

```json
[
  {
    "payload": [
      {
        "additional_attributes": {},
        "availability_status": "string",
        "email": "string",
        "id": 0,
        "name": "string",
        "phone_number": "string",
        "blocked": true,
        "identifier": "string",
        "thumbnail": "string",
        "custom_attributes": {
          "attribute_key": "attribute_value",
          "signed_up_at": "dd/mm/yyyy"
        },
        "last_activity_at": 0,
        "created_at": 0,
        "contact_inboxes": [
          {
            "source_id": "string",
            "inbox": {
              "id": 0,
              "avatar_url": "string",
              "channel_id": 0,
              "name": "string",
              "channel_type": "string",
              "provider": "string"
            }
          }
        ]
      }
    ]
  }
]
```

array of contacts

<h2 id="tocS_contact_conversations">contact_conversations</h2>
<!-- backwards compatibility -->
<a id="schemacontact_conversations"></a>
<a id="schema_contact_conversations"></a>
<a id="tocScontact_conversations"></a>
<a id="tocscontact_conversations"></a>

```json
[
  {
    "id": 0,
    "messages": [
      {
        "id": 0,
        "content": "string",
        "account_id": 0,
        "inbox_id": 0,
        "conversation_id": 0,
        "message_type": 0,
        "created_at": 0,
        "updated_at": 0,
        "private": true,
        "status": "sent",
        "source_id": "string",
        "content_type": "text",
        "content_attributes": {},
        "sender_type": "Contact",
        "sender_id": 0,
        "external_source_ids": {},
        "additional_attributes": {},
        "processed_message_content": "string",
        "sentiment": {},
        "conversation": {},
        "attachment": {},
        "sender": {}
      }
    ],
    "account_id": 0,
    "uuid": "string",
    "additional_attributes": {},
    "agent_last_seen_at": 0,
    "assignee_last_seen_at": 0,
    "can_reply": true,
    "contact_last_seen_at": 0,
    "custom_attributes": {},
    "inbox_id": 0,
    "labels": [
      "string"
    ],
    "muted": true,
    "snoozed_until": 0,
    "status": "open",
    "created_at": 0,
    "updated_at": 0,
    "timestamp": 0,
    "first_reply_created_at": 0,
    "unread_count": 0,
    "last_non_activity_message": {
      "id": 0,
      "content": "string",
      "account_id": 0,
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "created_at": 0,
      "updated_at": 0,
      "private": true,
      "status": "sent",
      "source_id": "string",
      "content_type": "text",
      "content_attributes": {},
      "sender_type": "Contact",
      "sender_id": 0,
      "external_source_ids": {},
      "additional_attributes": {},
      "processed_message_content": "string",
      "sentiment": {},
      "conversation": {},
      "attachment": {},
      "sender": {}
    },
    "last_activity_at": 0,
    "priority": "string",
    "waiting_since": 0,
    "sla_policy_id": 0,
    "applied_sla": {},
    "sla_events": [
      {}
    ],
    "meta": {
      "sender": {
        "additional_attributes": {},
        "availability_status": "string",
        "email": "string",
        "id": 0,
        "name": "string",
        "phone_number": "string",
        "blocked": true,
        "identifier": "string",
        "thumbnail": "string",
        "custom_attributes": {},
        "last_activity_at": 0,
        "created_at": 0
      },
      "channel": "string",
      "assignee": {
        "id": 0,
        "access_token": "string",
        "account_id": 0,
        "available_name": "string",
        "avatar_url": "string",
        "confirmed": true,
        "display_name": "string",
        "message_signature": "string",
        "email": "string",
        "hmac_identifier": "string",
        "inviter_id": 0,
        "name": "string",
        "provider": "string",
        "pubsub_token": "string",
        "role": "agent",
        "ui_settings": {},
        "uid": "string",
        "type": "string",
        "custom_attributes": {},
        "accounts": [
          {
            "id": 0,
            "name": "string",
            "status": "string",
            "active_at": "1970-01-01T00:00:00Z",
            "role": "administrator",
            "permissions": [
              "string"
            ],
            "availability": "string",
            "availability_status": "string",
            "auto_offline": true,
            "custom_role_id": 0,
            "custom_role": {}
          }
        ]
      },
      "hmac_verified": true
    },
    "display_id": 0
  }
]
```

array of conversations

<h2 id="tocS_contact_labels">contact_labels</h2>
<!-- backwards compatibility -->
<a id="schemacontact_labels"></a>
<a id="schema_contact_labels"></a>
<a id="tocScontact_labels"></a>
<a id="tocscontact_labels"></a>

```json
{
  "payload": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[string]|false|none|Array of labels|

<h2 id="tocS_conversation_list">conversation_list</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_list"></a>
<a id="schema_conversation_list"></a>
<a id="tocSconversation_list"></a>
<a id="tocsconversation_list"></a>

```json
{
  "data": {
    "meta": {
      "mine_count": 0,
      "unassigned_count": 0,
      "assigned_count": 0,
      "all_count": 0
    },
    "payload": [
      {
        "id": 0,
        "messages": [
          {
            "id": 0,
            "content": "string",
            "account_id": 0,
            "inbox_id": 0,
            "conversation_id": 0,
            "message_type": 0,
            "created_at": 0,
            "updated_at": 0,
            "private": true,
            "status": "sent",
            "source_id": "string",
            "content_type": "text",
            "content_attributes": {},
            "sender_type": "Contact",
            "sender_id": 0,
            "external_source_ids": {},
            "additional_attributes": {},
            "processed_message_content": "string",
            "sentiment": {},
            "conversation": {},
            "attachment": {},
            "sender": {}
          }
        ],
        "account_id": 0,
        "uuid": "string",
        "additional_attributes": {},
        "agent_last_seen_at": 0,
        "assignee_last_seen_at": 0,
        "can_reply": true,
        "contact_last_seen_at": 0,
        "custom_attributes": {},
        "inbox_id": 0,
        "labels": [
          "string"
        ],
        "muted": true,
        "snoozed_until": 0,
        "status": "open",
        "created_at": 0,
        "updated_at": 0,
        "timestamp": 0,
        "first_reply_created_at": 0,
        "unread_count": 0,
        "last_non_activity_message": {
          "id": 0,
          "content": "string",
          "account_id": 0,
          "inbox_id": 0,
          "conversation_id": 0,
          "message_type": 0,
          "created_at": 0,
          "updated_at": 0,
          "private": true,
          "status": "sent",
          "source_id": "string",
          "content_type": "text",
          "content_attributes": {},
          "sender_type": "Contact",
          "sender_id": 0,
          "external_source_ids": {},
          "additional_attributes": {},
          "processed_message_content": "string",
          "sentiment": {},
          "conversation": {},
          "attachment": {},
          "sender": {}
        },
        "last_activity_at": 0,
        "priority": "string",
        "waiting_since": 0,
        "sla_policy_id": 0,
        "applied_sla": {},
        "sla_events": [
          {}
        ],
        "meta": {
          "sender": {
            "additional_attributes": {},
            "availability_status": "string",
            "email": "string",
            "id": 0,
            "name": "string",
            "phone_number": "string",
            "blocked": true,
            "identifier": "string",
            "thumbnail": "string",
            "custom_attributes": {},
            "last_activity_at": 0,
            "created_at": 0
          },
          "channel": "string",
          "assignee": {
            "id": 0,
            "access_token": "string",
            "account_id": 0,
            "available_name": "string",
            "avatar_url": "string",
            "confirmed": true,
            "display_name": "string",
            "message_signature": "string",
            "email": "string",
            "hmac_identifier": "string",
            "inviter_id": 0,
            "name": "string",
            "provider": "string",
            "pubsub_token": "string",
            "role": "agent",
            "ui_settings": {},
            "uid": "string",
            "type": "string",
            "custom_attributes": {},
            "accounts": [
              {
                "id": 0,
                "name": "string",
                "status": "string",
                "active_at": "1970-01-01T00:00:00Z",
                "role": "administrator",
                "permissions": [
                  "string"
                ],
                "availability": "string",
                "availability_status": "string",
                "auto_offline": true,
                "custom_role_id": 0,
                "custom_role": {}
              }
            ]
          },
          "hmac_verified": true
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_conversation_show">conversation_show</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_show"></a>
<a id="schema_conversation_show"></a>
<a id="tocSconversation_show"></a>
<a id="tocsconversation_show"></a>

```json
{
  "id": 0,
  "messages": [
    {
      "id": 0,
      "content": "string",
      "account_id": 0,
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "created_at": 0,
      "updated_at": 0,
      "private": true,
      "status": "sent",
      "source_id": "string",
      "content_type": "text",
      "content_attributes": {},
      "sender_type": "Contact",
      "sender_id": 0,
      "external_source_ids": {},
      "additional_attributes": {},
      "processed_message_content": "string",
      "sentiment": {},
      "conversation": {},
      "attachment": {},
      "sender": {}
    }
  ],
  "account_id": 0,
  "uuid": "string",
  "additional_attributes": {},
  "agent_last_seen_at": 0,
  "assignee_last_seen_at": 0,
  "can_reply": true,
  "contact_last_seen_at": 0,
  "custom_attributes": {},
  "inbox_id": 0,
  "labels": [
    "string"
  ],
  "muted": true,
  "snoozed_until": 0,
  "status": "open",
  "created_at": 0,
  "updated_at": 0,
  "timestamp": 0,
  "first_reply_created_at": 0,
  "unread_count": 0,
  "last_non_activity_message": {
    "id": 0,
    "content": "string",
    "account_id": 0,
    "inbox_id": 0,
    "conversation_id": 0,
    "message_type": 0,
    "created_at": 0,
    "updated_at": 0,
    "private": true,
    "status": "sent",
    "source_id": "string",
    "content_type": "text",
    "content_attributes": {},
    "sender_type": "Contact",
    "sender_id": 0,
    "external_source_ids": {},
    "additional_attributes": {},
    "processed_message_content": "string",
    "sentiment": {},
    "conversation": {},
    "attachment": {},
    "sender": {}
  },
  "last_activity_at": 0,
  "priority": "string",
  "waiting_since": 0,
  "sla_policy_id": 0,
  "applied_sla": {},
  "sla_events": [
    {}
  ],
  "meta": {
    "sender": {
      "additional_attributes": {},
      "availability_status": "string",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {},
      "last_activity_at": 0,
      "created_at": 0
    },
    "channel": "string",
    "assignee": {
      "id": 0,
      "access_token": "string",
      "account_id": 0,
      "available_name": "string",
      "avatar_url": "string",
      "confirmed": true,
      "display_name": "string",
      "message_signature": "string",
      "email": "string",
      "hmac_identifier": "string",
      "inviter_id": 0,
      "name": "string",
      "provider": "string",
      "pubsub_token": "string",
      "role": "agent",
      "ui_settings": {},
      "uid": "string",
      "type": "string",
      "custom_attributes": {},
      "accounts": [
        {
          "id": 0,
          "name": "string",
          "status": "string",
          "active_at": "1970-01-01T00:00:00Z",
          "role": "administrator",
          "permissions": [
            "string"
          ],
          "availability": "string",
          "availability_status": "string",
          "auto_offline": true,
          "custom_role_id": 0,
          "custom_role": {}
        }
      ]
    },
    "hmac_verified": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|ID of the conversation|
|messages|[[message](#schemamessage)]|false|none|none|
|account_id|number|false|none|Account Id|
|uuid|string|false|none|UUID of the conversation|
|additional_attributes|object|false|none|The object containing additional attributes related to the conversation|
|agent_last_seen_at|number|false|none|The last activity at of the agent|
|assignee_last_seen_at|number|false|none|The last activity at of the assignee|
|can_reply|boolean|false|none|Whether the conversation can be replied to|
|contact_last_seen_at|number|false|none|The last activity at of the contact|
|custom_attributes|object|false|none|The object to save custom attributes for conversation, accepts custom attributes key and value|
|inbox_id|number|false|none|ID of the inbox|
|labels|[string]|false|none|The labels of the conversation|
|muted|boolean|false|none|Whether the conversation is muted|
|snoozed_until|number \| null|false|none|The time at which the conversation will be unmuted|
|status|string|false|none|The status of the conversation|
|created_at|number|false|none|The time at which conversation was created|
|updated_at|number|false|none|The time at which conversation was updated|
|timestamp|number|false|none|The time at which conversation was created|
|first_reply_created_at|number \| null|false|none|The time at which the first reply was created|
|unread_count|number|false|none|The number of unread messages|
|last_non_activity_message|[message](#schemamessage) \| null|false|none|The last non activity message|
|last_activity_at|number|false|none|The last activity at of the conversation|
|priority|string \| null|false|none|The priority of the conversation|
|waiting_since|number \| null|false|none|The time at which the conversation was waiting|
|sla_policy_id|number \| null|false|none|The ID of the SLA policy|
|applied_sla|object|false|none|The applied SLA|
|sla_events|[object]|false|none|none|
|meta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|open|
|status|resolved|
|status|pending|

<h2 id="tocS_conversation_status_toggle">conversation_status_toggle</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_status_toggle"></a>
<a id="schema_conversation_status_toggle"></a>
<a id="tocSconversation_status_toggle"></a>
<a id="tocsconversation_status_toggle"></a>

```json
{
  "meta": {},
  "payload": {
    "success": true,
    "current_status": "open",
    "conversation_id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|payload|object|false|none|none|

<h2 id="tocS_conversation_labels">conversation_labels</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_labels"></a>
<a id="schema_conversation_labels"></a>
<a id="tocSconversation_labels"></a>
<a id="tocsconversation_labels"></a>

```json
{
  "payload": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[string]|false|none|Array of labels|

<h2 id="tocS_account_summary">account_summary</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_summary"></a>
<a id="schema_account_summary"></a>
<a id="tocSaccount_summary"></a>
<a id="tocsaccount_summary"></a>

```json
{
  "avg_first_response_time": "string",
  "avg_resolution_time": "string",
  "conversations_count": 0,
  "incoming_messages_count": 0,
  "outgoing_messages_count": 0,
  "resolutions_count": 0,
  "previous": {
    "avg_first_response_time": "string",
    "avg_resolution_time": "string",
    "conversations_count": 0,
    "incoming_messages_count": 0,
    "outgoing_messages_count": 0,
    "resolutions_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_first_response_time|string|false|none|none|
|avg_resolution_time|string|false|none|none|
|conversations_count|number|false|none|none|
|incoming_messages_count|number|false|none|none|
|outgoing_messages_count|number|false|none|none|
|resolutions_count|number|false|none|none|
|previous|object|false|none|none|

<h2 id="tocS_agent_conversation_metrics">agent_conversation_metrics</h2>
<!-- backwards compatibility -->
<a id="schemaagent_conversation_metrics"></a>
<a id="schema_agent_conversation_metrics"></a>
<a id="tocSagent_conversation_metrics"></a>
<a id="tocsagent_conversation_metrics"></a>

```json
{
  "id": 0,
  "name": "string",
  "email": "string",
  "thumbnail": "string",
  "availability": "string",
  "metric": {
    "open": 0,
    "unattended": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|name|string|false|none|none|
|email|string|false|none|none|
|thumbnail|string|false|none|none|
|availability|string|false|none|none|
|metric|object|false|none|none|

<h2 id="tocS_channel_summary">channel_summary</h2>
<!-- backwards compatibility -->
<a id="schemachannel_summary"></a>
<a id="schema_channel_summary"></a>
<a id="tocSchannel_summary"></a>
<a id="tocschannel_summary"></a>

```json
{
  "Channel::WebWidget": {
    "open": 10,
    "resolved": 20,
    "pending": 5,
    "snoozed": 2,
    "total": 37
  },
  "Channel::Api": {
    "open": 5,
    "resolved": 15,
    "pending": 3,
    "snoozed": 1,
    "total": 24
  }
}
```

Channel summary report containing conversation counts grouped by channel type and status. Available in version 4.10.0+.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|Conversation statistics for a specific channel type (e.g., Channel::WebWidget, Channel::Api)|

<h2 id="tocS_first_response_time_distribution">first_response_time_distribution</h2>
<!-- backwards compatibility -->
<a id="schemafirst_response_time_distribution"></a>
<a id="schema_first_response_time_distribution"></a>
<a id="tocSfirst_response_time_distribution"></a>
<a id="tocsfirst_response_time_distribution"></a>

```json
{
  "Channel::WebWidget": {
    "0-1h": 150,
    "1-4h": 80,
    "4-8h": 45,
    "8-24h": 30,
    "24h+": 15
  },
  "Channel::Api": {
    "0-1h": 75,
    "1-4h": 40,
    "4-8h": 20,
    "8-24h": 10,
    "24h+": 5
  }
}
```

First response time distribution report grouped by channel type. Shows the count of conversations with first response times in different time buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|First response time distribution for a specific channel type (e.g., Channel::WebWidget, Channel::Api)|

<h2 id="tocS_inbox_label_matrix">inbox_label_matrix</h2>
<!-- backwards compatibility -->
<a id="schemainbox_label_matrix"></a>
<a id="schema_inbox_label_matrix"></a>
<a id="tocSinbox_label_matrix"></a>
<a id="tocsinbox_label_matrix"></a>

```json
{
  "inboxes": [
    {
      "id": 1,
      "name": "Website Chat"
    },
    {
      "id": 2,
      "name": "Email Support"
    }
  ],
  "labels": [
    {
      "id": 1,
      "title": "bug"
    },
    {
      "id": 2,
      "title": "feature-request"
    },
    {
      "id": 3,
      "title": "urgent"
    }
  ],
  "matrix": [
    [
      10,
      5,
      3
    ],
    [
      8,
      12,
      2
    ]
  ]
}
```

Inbox-label matrix report showing the count of conversations for each inbox-label combination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboxes|[object]|false|none|List of inboxes included in the report|
|labels|[object]|false|none|List of labels included in the report|
|matrix|[[number]]|false|none|2D array where matrix[i][j] represents the count of conversations in inboxes[i] with labels[j]|

<h2 id="tocS_outgoing_messages_count">outgoing_messages_count</h2>
<!-- backwards compatibility -->
<a id="schemaoutgoing_messages_count"></a>
<a id="schema_outgoing_messages_count"></a>
<a id="tocSoutgoing_messages_count"></a>
<a id="tocsoutgoing_messages_count"></a>

```json
[
  {
    "id": 1,
    "name": "Agent One",
    "outgoing_messages_count": 42
  },
  {
    "id": 2,
    "name": "Agent Two",
    "outgoing_messages_count": 18
  }
]
```

Outgoing messages count report grouped by entity (agent, team, inbox, or label).

<h2 id="tocS_inbox_summary">inbox_summary</h2>
<!-- backwards compatibility -->
<a id="schemainbox_summary"></a>
<a id="schema_inbox_summary"></a>
<a id="tocSinbox_summary"></a>
<a id="tocsinbox_summary"></a>

```json
[
  {
    "id": 1,
    "conversations_count": 150,
    "resolved_conversations_count": 120,
    "avg_resolution_time": 3600,
    "avg_first_response_time": 300,
    "avg_reply_time": 600
  },
  {
    "id": 2,
    "conversations_count": 75,
    "resolved_conversations_count": 60,
    "avg_resolution_time": 1800,
    "avg_first_response_time": 180,
    "avg_reply_time": 420
  }
]
```

Inbox summary report containing conversation statistics grouped by inbox.

<h2 id="tocS_agent_summary">agent_summary</h2>
<!-- backwards compatibility -->
<a id="schemaagent_summary"></a>
<a id="schema_agent_summary"></a>
<a id="tocSagent_summary"></a>
<a id="tocsagent_summary"></a>

```json
[
  {
    "id": 1,
    "conversations_count": 150,
    "resolved_conversations_count": 120,
    "avg_resolution_time": 3600,
    "avg_first_response_time": 300,
    "avg_reply_time": 600
  },
  {
    "id": 2,
    "conversations_count": 75,
    "resolved_conversations_count": 60,
    "avg_resolution_time": 1800,
    "avg_first_response_time": 180,
    "avg_reply_time": 420
  }
]
```

Agent summary report containing conversation statistics grouped by agent.

<h2 id="tocS_team_summary">team_summary</h2>
<!-- backwards compatibility -->
<a id="schemateam_summary"></a>
<a id="schema_team_summary"></a>
<a id="tocSteam_summary"></a>
<a id="tocsteam_summary"></a>

```json
[
  {
    "id": 1,
    "conversations_count": 250,
    "resolved_conversations_count": 200,
    "avg_resolution_time": 2800,
    "avg_first_response_time": 240,
    "avg_reply_time": 500
  },
  {
    "id": 2,
    "conversations_count": 180,
    "resolved_conversations_count": 150,
    "avg_resolution_time": 2400,
    "avg_first_response_time": 200,
    "avg_reply_time": 450
  }
]
```

Team summary report containing conversation statistics grouped by team.

<h2 id="tocS_contact_detail">contact_detail</h2>
<!-- backwards compatibility -->
<a id="schemacontact_detail"></a>
<a id="schema_contact_detail"></a>
<a id="tocScontact_detail"></a>
<a id="tocscontact_detail"></a>

```json
{
  "additional_attributes": {
    "city": "string",
    "country": "string",
    "country_code": "string",
    "created_at_ip": "string"
  },
  "custom_attributes": {},
  "email": "string",
  "id": 0,
  "identifier": "string",
  "name": "string",
  "phone_number": "string",
  "thumbnail": "string",
  "blocked": true,
  "type": "contact"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_attributes|object|false|none|The object containing additional attributes related to the contact|
|custom_attributes|object|false|none|The custom attributes of the contact|
|email|string|false|none|The email address of the contact|
|id|integer|false|none|The ID of the contact|
|identifier|string \| null|false|none|The identifier of the contact|
|name|string|false|none|The name of the contact|
|phone_number|string \| null|false|none|The phone number of the contact|
|thumbnail|string|false|none|The thumbnail of the contact|
|blocked|boolean|false|none|Whether the contact is blocked|
|type|string|false|none|The type of entity|

#### Enumerated Values

|Property|Value|
|---|---|
|type|contact|

<h2 id="tocS_message_detailed">message_detailed</h2>
<!-- backwards compatibility -->
<a id="schemamessage_detailed"></a>
<a id="schema_message_detailed"></a>
<a id="tocSmessage_detailed"></a>
<a id="tocsmessage_detailed"></a>

```json
{
  "id": 0,
  "content": "string",
  "inbox_id": 0,
  "conversation_id": 0,
  "message_type": 0,
  "content_type": "text",
  "status": "sent",
  "content_attributes": {
    "in_reply_to": "string"
  },
  "echo_id": "string",
  "created_at": 0,
  "private": true,
  "source_id": "string",
  "sender": {
    "additional_attributes": {
      "city": "string",
      "country": "string",
      "country_code": "string",
      "created_at_ip": "string"
    },
    "custom_attributes": {},
    "email": "string",
    "id": 0,
    "identifier": "string",
    "name": "string",
    "phone_number": "string",
    "thumbnail": "string",
    "blocked": true,
    "type": "contact"
  },
  "attachments": [
    {
      "id": 0,
      "message_id": 0,
      "file_type": "image",
      "account_id": 0,
      "data_url": "string",
      "thumb_url": "string",
      "file_size": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The ID of the message|
|content|string|false|none|The text content of the message|
|inbox_id|number|false|none|The ID of the inbox|
|conversation_id|number|false|none|The ID of the conversation|
|message_type|integer|false|none|The type of the message (0: incoming, 1: outgoing, 2: activity, 3: template)|
|content_type|string|false|none|The type of the message content|
|status|string|false|none|The status of the message|
|content_attributes|object|false|none|The content attributes for each content_type|
|echo_id|string \| null|false|none|The echo ID of the message, used for deduplication|
|created_at|integer|false|none|The timestamp when message was created|
|private|boolean|false|none|The flag which shows whether the message is private or not|
|source_id|string \| null|false|none|The source ID of the message|
|sender|[contact_detail](#schemacontact_detail)|false|none|none|
|attachments|[object]|false|none|The list of attachments associated with the message|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|0|
|message_type|1|
|message_type|2|
|message_type|3|
|content_type|text|
|content_type|input_text|
|content_type|input_textarea|
|content_type|input_email|
|content_type|input_select|
|content_type|cards|
|content_type|form|
|content_type|article|
|content_type|incoming_email|
|content_type|input_csat|
|content_type|integrations|
|content_type|sticker|
|content_type|voice_call|
|status|sent|
|status|delivered|
|status|read|
|status|failed|

<h2 id="tocS_conversation_meta">conversation_meta</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_meta"></a>
<a id="schema_conversation_meta"></a>
<a id="tocSconversation_meta"></a>
<a id="tocsconversation_meta"></a>

```json
{
  "labels": [
    "string"
  ],
  "additional_attributes": {
    "browser": {
      "device_name": "string",
      "browser_name": "string",
      "platform_name": "string",
      "browser_version": "string",
      "platform_version": "string"
    },
    "referer": "string",
    "initiated_at": {
      "timestamp": "string"
    },
    "browser_language": "string",
    "conversation_language": "string"
  },
  "contact": {
    "additional_attributes": {
      "city": "string",
      "country": "string",
      "country_code": "string",
      "created_at_ip": "string"
    },
    "custom_attributes": {},
    "email": "string",
    "id": 0,
    "identifier": "string",
    "name": "string",
    "phone_number": "string",
    "thumbnail": "string",
    "blocked": true,
    "type": "contact"
  },
  "assignee": {
    "id": 0,
    "account_id": 0,
    "availability_status": "online",
    "auto_offline": true,
    "confirmed": true,
    "email": "string",
    "available_name": "string",
    "name": "string",
    "role": "agent",
    "thumbnail": "string",
    "custom_role_id": 0
  },
  "agent_last_seen_at": "string",
  "assignee_last_seen_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|false|none|Labels associated with the conversation|
|additional_attributes|object|false|none|Additional attributes of the conversation|
|contact|[contact_detail](#schemacontact_detail)|false|none|none|
|assignee|object \| null|false|none|The agent assigned to the conversation|
|agent_last_seen_at|string \| null|false|none|Timestamp when the agent last saw the conversation|
|assignee_last_seen_at|string \| null|false|none|Timestamp when the assignee last saw the conversation|

<h2 id="tocS_conversation_messages">conversation_messages</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_messages"></a>
<a id="schema_conversation_messages"></a>
<a id="tocSconversation_messages"></a>
<a id="tocsconversation_messages"></a>

```json
{
  "meta": {
    "labels": [
      "string"
    ],
    "additional_attributes": {
      "browser": {
        "device_name": "string",
        "browser_name": "string",
        "platform_name": "string",
        "browser_version": "string",
        "platform_version": "string"
      },
      "referer": "string",
      "initiated_at": {
        "timestamp": "string"
      },
      "browser_language": "string",
      "conversation_language": "string"
    },
    "contact": {
      "additional_attributes": {
        "city": "string",
        "country": "string",
        "country_code": "string",
        "created_at_ip": "string"
      },
      "custom_attributes": {},
      "email": "string",
      "id": 0,
      "identifier": "string",
      "name": "string",
      "phone_number": "string",
      "thumbnail": "string",
      "blocked": true,
      "type": "contact"
    },
    "assignee": {
      "id": 0,
      "account_id": 0,
      "availability_status": "online",
      "auto_offline": true,
      "confirmed": true,
      "email": "string",
      "available_name": "string",
      "name": "string",
      "role": "agent",
      "thumbnail": "string",
      "custom_role_id": 0
    },
    "agent_last_seen_at": "string",
    "assignee_last_seen_at": "string"
  },
  "payload": [
    {
      "id": 0,
      "content": "string",
      "inbox_id": 0,
      "conversation_id": 0,
      "message_type": 0,
      "content_type": "text",
      "status": "sent",
      "content_attributes": {
        "in_reply_to": "string"
      },
      "echo_id": "string",
      "created_at": 0,
      "private": true,
      "source_id": "string",
      "sender": {
        "additional_attributes": {
          "city": "string",
          "country": "string",
          "country_code": "string",
          "created_at_ip": "string"
        },
        "custom_attributes": {},
        "email": "string",
        "id": 0,
        "identifier": "string",
        "name": "string",
        "phone_number": "string",
        "thumbnail": "string",
        "blocked": true,
        "type": "contact"
      },
      "attachments": [
        {
          "id": 0,
          "message_id": 0,
          "file_type": "image",
          "account_id": 0,
          "data_url": "string",
          "thumb_url": "string",
          "file_size": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[conversation_meta](#schemaconversation_meta)|false|none|none|
|payload|[[message_detailed](#schemamessage_detailed)]|false|none|List of messages in the conversation|

<h2 id="tocS_contact_meta">contact_meta</h2>
<!-- backwards compatibility -->
<a id="schemacontact_meta"></a>
<a id="schema_contact_meta"></a>
<a id="tocScontact_meta"></a>
<a id="tocscontact_meta"></a>

```json
{
  "count": 0,
  "current_page": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|Total number of contacts|
|current_page|string \| integer|false|none|Current page number|

<h2 id="tocS_contact_inbox">contact_inbox</h2>
<!-- backwards compatibility -->
<a id="schemacontact_inbox"></a>
<a id="schema_contact_inbox"></a>
<a id="tocScontact_inbox"></a>
<a id="tocscontact_inbox"></a>

```json
{
  "source_id": "string",
  "inbox": {
    "id": 0,
    "avatar_url": "string",
    "channel_id": 0,
    "name": "string",
    "channel_type": "string",
    "provider": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_id|string|false|none|Source identifier for the contact inbox|
|inbox|object|false|none|none|

<h2 id="tocS_contact_list_item">contact_list_item</h2>
<!-- backwards compatibility -->
<a id="schemacontact_list_item"></a>
<a id="schema_contact_list_item"></a>
<a id="tocScontact_list_item"></a>
<a id="tocscontact_list_item"></a>

```json
{
  "additional_attributes": {
    "city": "string",
    "country": "string",
    "country_code": "string",
    "created_at_ip": "string"
  },
  "availability_status": "online",
  "email": "string",
  "id": 0,
  "name": "string",
  "phone_number": "string",
  "blocked": true,
  "identifier": "string",
  "thumbnail": "string",
  "custom_attributes": {},
  "last_activity_at": 0,
  "created_at": 0,
  "contact_inboxes": [
    {
      "source_id": "string",
      "inbox": {
        "id": 0,
        "avatar_url": "string",
        "channel_id": 0,
        "name": "string",
        "channel_type": "string",
        "provider": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_attributes|object|false|none|The object containing additional attributes related to the contact|
|availability_status|string|false|none|Availability status of the contact|
|email|string \| null|false|none|The email address of the contact|
|id|integer|false|none|The ID of the contact|
|name|string|false|none|The name of the contact|
|phone_number|string \| null|false|none|The phone number of the contact|
|blocked|boolean|false|none|Whether the contact is blocked|
|identifier|string \| null|false|none|The identifier of the contact|
|thumbnail|string|false|none|The thumbnail of the contact|
|custom_attributes|object|false|none|The custom attributes of the contact|
|last_activity_at|integer \| null|false|none|Timestamp of last activity|
|created_at|integer|false|none|Timestamp when contact was created|
|contact_inboxes|[[contact_inbox](#schemacontact_inbox)]|false|none|List of inboxes associated with this contact|

#### Enumerated Values

|Property|Value|
|---|---|
|availability_status|online|
|availability_status|offline|

<h2 id="tocS_contacts_list_response">contacts_list_response</h2>
<!-- backwards compatibility -->
<a id="schemacontacts_list_response"></a>
<a id="schema_contacts_list_response"></a>
<a id="tocScontacts_list_response"></a>
<a id="tocscontacts_list_response"></a>

```json
{
  "meta": {
    "count": 0,
    "current_page": "string"
  },
  "payload": [
    {
      "additional_attributes": {
        "city": "string",
        "country": "string",
        "country_code": "string",
        "created_at_ip": "string"
      },
      "availability_status": "online",
      "email": "string",
      "id": 0,
      "name": "string",
      "phone_number": "string",
      "blocked": true,
      "identifier": "string",
      "thumbnail": "string",
      "custom_attributes": {},
      "last_activity_at": 0,
      "created_at": 0,
      "contact_inboxes": [
        {
          "source_id": "string",
          "inbox": {
            "id": 0,
            "avatar_url": "string",
            "channel_id": 0,
            "name": "string",
            "channel_type": "string",
            "provider": "string"
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[contact_meta](#schemacontact_meta)|false|none|none|
|payload|[[contact_list_item](#schemacontact_list_item)]|false|none|List of contacts|

<h2 id="tocS_contact_show_response">contact_show_response</h2>
<!-- backwards compatibility -->
<a id="schemacontact_show_response"></a>
<a id="schema_contact_show_response"></a>
<a id="tocScontact_show_response"></a>
<a id="tocscontact_show_response"></a>

```json
{
  "payload": {
    "additional_attributes": {
      "city": "string",
      "country": "string",
      "country_code": "string",
      "created_at_ip": "string"
    },
    "availability_status": "online",
    "email": "string",
    "id": 0,
    "name": "string",
    "phone_number": "string",
    "blocked": true,
    "identifier": "string",
    "thumbnail": "string",
    "custom_attributes": {},
    "last_activity_at": 0,
    "created_at": 0,
    "contact_inboxes": [
      {
        "source_id": "string",
        "inbox": {
          "id": 0,
          "avatar_url": "string",
          "channel_id": 0,
          "name": "string",
          "channel_type": "string",
          "provider": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[contact_list_item](#schemacontact_list_item)|false|none|none|

<h2 id="tocS_contact_conversation_message">contact_conversation_message</h2>
<!-- backwards compatibility -->
<a id="schemacontact_conversation_message"></a>
<a id="schema_contact_conversation_message"></a>
<a id="tocScontact_conversation_message"></a>
<a id="tocscontact_conversation_message"></a>

```json
{
  "id": 0,
  "content": "string",
  "account_id": 0,
  "inbox_id": 0,
  "conversation_id": 0,
  "message_type": 0,
  "created_at": 0,
  "updated_at": "string",
  "private": true,
  "status": "string",
  "source_id": "string",
  "content_type": "string",
  "content_attributes": {},
  "sender_type": "string",
  "sender_id": 0,
  "external_source_ids": {},
  "additional_attributes": {},
  "processed_message_content": "string",
  "sentiment": {},
  "conversation": {
    "assignee_id": 0,
    "unread_count": 0,
    "last_activity_at": 0,
    "contact_inbox": {
      "source_id": "string"
    }
  },
  "sender": {
    "id": 0,
    "name": "string",
    "available_name": "string",
    "avatar_url": "string",
    "type": "string",
    "availability_status": "string",
    "thumbnail": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|ID of the message|
|content|string|false|none|Content of the message|
|account_id|integer|false|none|ID of the account|
|inbox_id|integer|false|none|ID of the inbox|
|conversation_id|integer|false|none|ID of the conversation|
|message_type|integer|false|none|Type of the message|
|created_at|integer|false|none|Timestamp when message was created|
|updated_at|string|false|none|Formatted datetime when message was updated|
|private|boolean|false|none|Whether the message is private|
|status|string|false|none|Status of the message|
|source_id|string \| null|false|none|Source ID of the message|
|content_type|string|false|none|Type of the content|
|content_attributes|object|false|none|Attributes of the content|
|sender_type|string \| null|false|none|Type of the sender|
|sender_id|integer \| null|false|none|ID of the sender|
|external_source_ids|object|false|none|External source IDs|
|additional_attributes|object|false|none|Additional attributes of the message|
|processed_message_content|string \| null|false|none|Processed message content|
|sentiment|object|false|none|Sentiment analysis of the message|
|conversation|object|false|none|Conversation details|
|sender|object|false|none|Details of the sender|

<h2 id="tocS_contact_conversations_response">contact_conversations_response</h2>
<!-- backwards compatibility -->
<a id="schemacontact_conversations_response"></a>
<a id="schema_contact_conversations_response"></a>
<a id="tocScontact_conversations_response"></a>
<a id="tocscontact_conversations_response"></a>

```json
{
  "payload": [
    {
      "id": 0,
      "messages": [
        {
          "id": 0,
          "content": "string",
          "account_id": 0,
          "inbox_id": 0,
          "conversation_id": 0,
          "message_type": 0,
          "created_at": 0,
          "updated_at": 0,
          "private": true,
          "status": "sent",
          "source_id": "string",
          "content_type": "text",
          "content_attributes": {},
          "sender_type": "Contact",
          "sender_id": 0,
          "external_source_ids": {},
          "additional_attributes": {},
          "processed_message_content": "string",
          "sentiment": {},
          "conversation": {},
          "attachment": {},
          "sender": {}
        }
      ],
      "account_id": 0,
      "uuid": "string",
      "additional_attributes": {},
      "agent_last_seen_at": 0,
      "assignee_last_seen_at": 0,
      "can_reply": true,
      "contact_last_seen_at": 0,
      "custom_attributes": {},
      "inbox_id": 0,
      "labels": [
        "string"
      ],
      "muted": true,
      "snoozed_until": 0,
      "status": "open",
      "created_at": 0,
      "updated_at": 0,
      "timestamp": 0,
      "first_reply_created_at": 0,
      "unread_count": 0,
      "last_non_activity_message": {
        "id": 0,
        "content": "string",
        "account_id": 0,
        "inbox_id": 0,
        "conversation_id": 0,
        "message_type": 0,
        "created_at": 0,
        "updated_at": 0,
        "private": true,
        "status": "sent",
        "source_id": "string",
        "content_type": "text",
        "content_attributes": {},
        "sender_type": "Contact",
        "sender_id": 0,
        "external_source_ids": {},
        "additional_attributes": {},
        "processed_message_content": "string",
        "sentiment": {},
        "conversation": {},
        "attachment": {},
        "sender": {}
      },
      "last_activity_at": 0,
      "priority": "string",
      "waiting_since": 0,
      "sla_policy_id": 0,
      "applied_sla": {},
      "sla_events": [
        {}
      ],
      "meta": {
        "sender": {
          "additional_attributes": {},
          "availability_status": "string",
          "email": "string",
          "id": 0,
          "name": "string",
          "phone_number": "string",
          "blocked": true,
          "identifier": "string",
          "thumbnail": "string",
          "custom_attributes": {},
          "last_activity_at": 0,
          "created_at": 0
        },
        "channel": "string",
        "assignee": {
          "id": 0,
          "access_token": "string",
          "account_id": 0,
          "available_name": "string",
          "avatar_url": "string",
          "confirmed": true,
          "display_name": "string",
          "message_signature": "string",
          "email": "string",
          "hmac_identifier": "string",
          "inviter_id": 0,
          "name": "string",
          "provider": "string",
          "pubsub_token": "string",
          "role": "agent",
          "ui_settings": {},
          "uid": "string",
          "type": "string",
          "custom_attributes": {},
          "accounts": [
            {
              "id": 0,
              "name": "string",
              "status": "string",
              "active_at": "1970-01-01T00:00:00Z",
              "role": "administrator",
              "permissions": [
                "string"
              ],
              "availability": "string",
              "availability_status": "string",
              "auto_offline": true,
              "custom_role_id": 0,
              "custom_role": {}
            }
          ]
        },
        "hmac_verified": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[object]|false|none|List of conversations for the contact|

<h2 id="tocS_contactable_inboxes_response">contactable_inboxes_response</h2>
<!-- backwards compatibility -->
<a id="schemacontactable_inboxes_response"></a>
<a id="schema_contactable_inboxes_response"></a>
<a id="tocScontactable_inboxes_response"></a>
<a id="tocscontactable_inboxes_response"></a>

```json
{
  "payload": [
    {
      "source_id": "string",
      "inbox": {
        "id": 0,
        "avatar_url": "string",
        "channel_id": 0,
        "name": "string",
        "channel_type": "string",
        "provider": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[[contact_inbox](#schemacontact_inbox)]|false|none|List of contactable inboxes for the contact|

<h2 id="tocS_reporting_event">reporting_event</h2>
<!-- backwards compatibility -->
<a id="schemareporting_event"></a>
<a id="schema_reporting_event"></a>
<a id="tocSreporting_event"></a>
<a id="tocsreporting_event"></a>

```json
{
  "id": 0,
  "name": "string",
  "value": 0,
  "value_in_business_hours": 0,
  "event_start_time": "1970-01-01T00:00:00Z",
  "event_end_time": "1970-01-01T00:00:00Z",
  "account_id": 0,
  "conversation_id": 0,
  "inbox_id": 0,
  "user_id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|ID of the reporting event|
|name|string|false|none|Name of the event (e.g., first_response, resolution, reply_time)|
|value|number(double)|false|none|Value of the metric in seconds|
|value_in_business_hours|number(double)|false|none|Value of the metric in seconds, calculated only for business hours|
|event_start_time|string(date-time)|false|none|The timestamp when the event started|
|event_end_time|string(date-time)|false|none|The timestamp when the event ended|
|account_id|number|false|none|ID of the account|
|conversation_id|number \| null|false|none|ID of the conversation|
|inbox_id|number \| null|false|none|ID of the inbox|
|user_id|number \| null|false|none|ID of the user/agent|
|created_at|string(date-time)|false|none|The timestamp when the reporting event was created|
|updated_at|string(date-time)|false|none|The timestamp when the reporting event was last updated|

<h2 id="tocS_reporting_event_meta">reporting_event_meta</h2>
<!-- backwards compatibility -->
<a id="schemareporting_event_meta"></a>
<a id="schema_reporting_event_meta"></a>
<a id="tocSreporting_event_meta"></a>
<a id="tocsreporting_event_meta"></a>

```json
{
  "count": 0,
  "current_page": 0,
  "total_pages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|Total number of reporting events|
|current_page|integer|false|none|Current page number|
|total_pages|integer|false|none|Total number of pages|

<h2 id="tocS_reporting_events_list_response">reporting_events_list_response</h2>
<!-- backwards compatibility -->
<a id="schemareporting_events_list_response"></a>
<a id="schema_reporting_events_list_response"></a>
<a id="tocSreporting_events_list_response"></a>
<a id="tocsreporting_events_list_response"></a>

```json
{
  "meta": {
    "count": 0,
    "current_page": 0,
    "total_pages": 0
  },
  "payload": [
    {
      "id": 0,
      "name": "string",
      "value": 0,
      "value_in_business_hours": 0,
      "event_start_time": "1970-01-01T00:00:00Z",
      "event_end_time": "1970-01-01T00:00:00Z",
      "account_id": 0,
      "conversation_id": 0,
      "inbox_id": 0,
      "user_id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[reporting_event_meta](#schemareporting_event_meta)|false|none|none|
|payload|[[reporting_event](#schemareporting_event)]|false|none|List of reporting events|

<h2 id="tocS_campaign">campaign</h2>
<!-- backwards compatibility -->
<a id="schemacampaign"></a>
<a id="schema_campaign"></a>
<a id="tocScampaign"></a>
<a id="tocscampaign"></a>

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "account_id": 0,
  "inbox": {
    "id": 0,
    "name": "string",
    "website_url": "string",
    "page_id": "string",
    "instagram_id": "string",
    "business_id": "string",
    "provider_name": "string",
    "profile_id": "string",
    "line_channel_id": "string",
    "email": "string",
    "bot_name": "string",
    "inbox_identifier": "string",
    "channel_type": "string",
    "avatar_url": "string",
    "widget_color": "string",
    "website_token": "string",
    "enable_auto_assignment": true,
    "web_widget_script": "string",
    "welcome_title": "string",
    "welcome_tagline": "string",
    "greeting_enabled": true,
    "greeting_message": "string",
    "channel_id": 0,
    "working_hours_enabled": true,
    "enable_email_collect": true,
    "csat_survey_enabled": true,
    "auto_assignment_config": {},
    "out_of_office_message": "string",
    "working_hours": [
      {
        "day_of_week": 0,
        "closed_all_day": true,
        "open_hour": 0,
        "open_minutes": 0,
        "close_hour": 0,
        "close_minutes": 0,
        "open_all_day": true
      }
    ],
    "timezone": "string",
    "callback_webhook_url": "string",
    "allow_messages_after_resolved": true,
    "lock_to_single_conversation": true,
    "sender_name_type": "string",
    "business_name": "string",
    "branded_email_layout": "string",
    "hmac_mandatory": true,
    "selected_feature_flags": [
      "string"
    ],
    "reply_time": "string",
    "messaging_service_sid": "string",
    "phone_number": "string",
    "medium": "string",
    "provider": "string"
  },
  "sender": {},
  "message": "string",
  "template_params": {},
  "campaign_status": "active",
  "campaign_type": "ongoing",
  "enabled": true,
  "scheduled_at": 0,
  "started_at": 0,
  "completed_at": 0,
  "audience": [
    {
      "type": "string",
      "id": 0
    }
  ],
  "trigger_rules": {},
  "trigger_only_during_business_hours": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Account-scoped campaign ID. Use this value in campaign API paths.|
|title|string|false|none|none|
|description|string \| null|false|none|none|
|account_id|integer|false|none|none|
|inbox|[inbox](#schemainbox)|false|none|none|
|sender|object|false|none|Sender details, or an empty object when no sender is assigned.|
|message|string|false|none|none|
|template_params|object \| null|false|none|none|
|campaign_status|string|false|none|none|
|campaign_type|string|false|none|Derived from the inbox type; website campaigns are ongoing and supported messaging campaigns are one-off.|
|enabled|boolean|false|none|none|
|scheduled_at|integer|false|none|Scheduled time in Unix seconds. Only present for one-off campaigns.|
|started_at|integer \| null|false|none|Start time in Unix seconds. Only present for one-off campaigns.|
|completed_at|integer \| null|false|none|Completion time in Unix seconds. Only present for one-off campaigns.|
|audience|[object]|false|none|Audience for a one-off campaign. Only present for one-off campaigns.|
|trigger_rules|object|false|none|none|
|trigger_only_during_business_hours|boolean|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|campaign_status|active|
|campaign_status|processing|
|campaign_status|completed|
|campaign_type|ongoing|
|campaign_type|one_off|

<h2 id="tocS_campaign_fields">campaign_fields</h2>
<!-- backwards compatibility -->
<a id="schemacampaign_fields"></a>
<a id="schema_campaign_fields"></a>
<a id="tocScampaign_fields"></a>
<a id="tocscampaign_fields"></a>

```json
{
  "title": "string",
  "description": "string",
  "inbox_id": 0,
  "sender_id": 0,
  "message": "string",
  "enabled": true,
  "scheduled_at": "2027-01-15T10:00:00Z",
  "audience": [
    {
      "type": "Label",
      "id": 0
    }
  ],
  "trigger_rules": {
    "url": "https://example.com/pricing",
    "time_on_page": 10
  },
  "trigger_only_during_business_hours": true,
  "template_params": {
    "name": "string",
    "language": "en",
    "namespace": "string",
    "category": "string",
    "processed_params": {
      "body": {
        "1": "{{ contact.name }}"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Campaign title.|
|description|string \| null|false|none|Internal description of the campaign.|
|inbox_id|integer|false|none|ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.|
|sender_id|integer \| null|false|none|ID of a user in this account to use as the campaign sender.|
|message|string|false|none|Campaign message content.|
|enabled|boolean|false|none|Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.|
|scheduled_at|string(date-time)|false|none|Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.|
|audience|[object]|false|none|Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.|
|trigger_rules|object|false|none|Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.|
|trigger_only_during_business_hours|boolean|false|none|Restrict an ongoing website campaign to inbox business hours.|
|template_params|[campaign_whatsapp_template_params](#schemacampaign_whatsapp_template_params)|false|none|none|

<h2 id="tocS_campaign_create_payload">campaign_create_payload</h2>
<!-- backwards compatibility -->
<a id="schemacampaign_create_payload"></a>
<a id="schema_campaign_create_payload"></a>
<a id="tocScampaign_create_payload"></a>
<a id="tocscampaign_create_payload"></a>

```json
{
  "campaign": {
    "title": "string",
    "description": "string",
    "inbox_id": 0,
    "sender_id": 0,
    "message": "string",
    "enabled": true,
    "scheduled_at": "2027-01-15T10:00:00Z",
    "audience": [
      {
        "type": "Label",
        "id": 0
      }
    ],
    "trigger_rules": {
      "url": "http://example.com"
    },
    "trigger_only_during_business_hours": true,
    "template_params": {
      "name": "string",
      "language": "en",
      "namespace": "string",
      "category": "string",
      "processed_params": {
        "body": {
          "1": "{{ contact.name }}"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaign|object|true|none|Choose the variant matching the inbox referenced by inbox_id. The channel type is stored on the inbox and cannot be inferred from this request by a schema validator. These variants describe the inputs needed for delivery; creation can accept incomplete inputs without guaranteeing that the campaign will send.|

<h2 id="tocS_campaign_update_payload">campaign_update_payload</h2>
<!-- backwards compatibility -->
<a id="schemacampaign_update_payload"></a>
<a id="schema_campaign_update_payload"></a>
<a id="tocScampaign_update_payload"></a>
<a id="tocscampaign_update_payload"></a>

```json
{
  "campaign": {
    "title": "string",
    "description": "string",
    "inbox_id": 0,
    "sender_id": 0,
    "message": "string",
    "enabled": true,
    "scheduled_at": "2027-01-15T10:00:00Z",
    "audience": [
      {
        "type": "Label",
        "id": 0
      }
    ],
    "trigger_rules": {
      "url": "https://example.com/pricing",
      "time_on_page": 10
    },
    "trigger_only_during_business_hours": true,
    "template_params": {
      "name": "string",
      "language": "en",
      "namespace": "string",
      "category": "string",
      "processed_params": {
        "body": {
          "1": "{{ contact.name }}"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaign|object|true|none|none|

<h2 id="tocS_campaign_whatsapp_template_params">campaign_whatsapp_template_params</h2>
<!-- backwards compatibility -->
<a id="schemacampaign_whatsapp_template_params"></a>
<a id="schema_campaign_whatsapp_template_params"></a>
<a id="tocScampaign_whatsapp_template_params"></a>
<a id="tocscampaign_whatsapp_template_params"></a>

```json
{
  "name": "string",
  "language": "en",
  "namespace": "string",
  "category": "string",
  "processed_params": {
    "body": {
      "1": "{{ contact.name }}"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the approved template in the selected inbox's message_templates.|
|language|string|true|none|Language code matching that template in the selected inbox.|
|namespace|string|false|none|Template namespace, when present in the selected template.|
|category|string|false|none|Category of the selected template.|
|processed_params|object|false|none|Values for the selected template's variables, grouped by component. Supply all parameters needed by that template. May be omitted for a template without variables. Body keys use positional numbers or the template's named parameters. Liquid expressions such as {{ contact.name }} are rendered separately for each recipient.|
