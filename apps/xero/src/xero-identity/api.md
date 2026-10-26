<h1 id="xero-oauth-2-identity-service-api">Xero OAuth 2 Identity Service API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

These endpoints are related to managing authentication tokens and identity for Xero API

Base URLs:

* <a href="https://api.xero.com">https://api.xero.com</a> - Xero Identity service API

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 
License: <a href="https://github.com/XeroAPI/Xero-OpenAPI/blob/master/LICENSE">MIT</a>

# Authentication

- HTTP Authentication, scheme: basic

- oAuth2 authentication. For more information

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|email|Grant read-only access to your email|
|openid|Grant read-only access to your open id|
|profile|your profile information|

<h1 id="xero-oauth-2-identity-service-api-identity">identity</h1>

## Retrieves the connections for this user

<a id="opIdgetConnections"></a>

> Code samples

```bash
curl https://api.xero.com/Connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /Connections`

Override the base server url that include version

<h3 id="retrieves-the-connections-for-this-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authEventId|query|string(uuid)|false|Filter by authEventId|

> Example responses

> 200 Response

```json
"[ { \"id\": \"7cb59f93-2964-421d-bb5e-a0f7a4572a44\", \"tenantId\": \"fe79f7dd-b6d4-4a92-ba7b-538af6289c58\", \"tenantName\": \"Demo Company (NZ)\", \"tenantType\": \"ORGANISATION\", \"createdDateUtc\": \"2019-12-07T18:46:19.5165400\", \"updatedDateUtc\": \"2019-12-07T18:46:19.5187840\" } ]"
```

<h3 id="retrieves-the-connections-for-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - return response of type Connections array with 0 to n Connection|Inline|

<h3 id="retrieves-the-connections-for-this-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Connection](#schemaconnection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Deletes a connection for this user (i.e. disconnect a tenant)

<a id="opIddeleteConnection"></a>

> Code samples

```bash
curl https://api.xero.com/Connections/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /Connections/{id}`

Override the base server url that include version

<h3 id="deletes-a-connection-for-this-user-ie-disconnect-a-tenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Unique identifier for retrieving single object|

<h3 id="deletes-a-connection-for-this-user-ie-disconnect-a-tenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - connection has been deleted no content returned|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "authEventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tenantType": "string",
  "tenantName": "string",
  "createdDateUtc": "1970-01-01T00:00:00Z",
  "updatedDateUtc": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Xero identifier|
|tenantId|string(uuid)|false|none|Xero identifier of organisation|
|authEventId|string(uuid)|false|none|Identifier shared across connections authorised at the same time|
|tenantType|string|false|none|Xero tenant type (i.e. ORGANISATION, PRACTICE)|
|tenantName|string|false|none|Xero tenant name|
|createdDateUtc|string(date-time)|false|none|The date when the user connected this tenant to your app|
|updatedDateUtc|string(date-time)|false|none|The date when the user most recently connected this tenant to your app. May differ to the created date if the user has disconnected and subsequently reconnected this tenant to your app.|

<h2 id="tocS_RefreshToken">RefreshToken</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtoken"></a>
<a id="schema_RefreshToken"></a>
<a id="tocSrefreshtoken"></a>
<a id="tocsrefreshtoken"></a>

```json
{
  "grant_type": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|false|none|Xero grant type|
|refresh_token|string|false|none|refresh token provided during authentication flow|
|client_id|string|false|none|client id for Xero app|
|client_secret|string|false|none|client secret for Xero app 2|

<h2 id="tocS_AccessToken">AccessToken</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken"></a>
<a id="schema_AccessToken"></a>
<a id="tocSaccesstoken"></a>
<a id="tocsaccesstoken"></a>

```json
{
  "id_token": "string",
  "access_token": "string",
  "expires_in": 0,
  "token_type": "string",
  "refresh_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id_token|string|false|none|Xero unique identifier|
|access_token|string|false|none|access token provided during authentication flow|
|expires_in|integer(int64)|false|none|time in seconds until access token expires.|
|token_type|string|false|none|type of token i.e. Bearer|
|refresh_token|string|false|none|token used to refresh an expired access token|
