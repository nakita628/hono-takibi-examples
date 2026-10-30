<h1 id="auth-oauth">Auth Oauth v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="auth-oauth-advanced">Advanced</h1>

## OAuth token endpoint

<a id="opIdpost-/oauth/2026-09/token_/oauth/v3/token"></a>

> Code samples

```bash
curl https://api.hubapi.com/oauth/2026-09/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
```

`POST /oauth/2026-09/token`

Authenticates a client and returns access and refresh tokens.

> Body parameter

```yaml
null
```

<h3 id="oauth-token-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» assertion|body|string|false|none|
|» client_assertion|body|string|false|none|
|» client_assertion_type|body|string|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» code|body|string|false|none|
|» code_verifier|body|string|false|none|
|» grant_type|body|string|false|none|
|» redirect_uri|body|string|false|none|
|» refresh_token|body|string|false|none|
|» scope|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grant_type|authorization_code|
|» grant_type|client_credentials|
|» grant_type|refresh_token|
|» grant_type|urn:ietf:params:oauth:grant-type:jwt-bearer|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="oauth-token-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TokenResponseIF](#schematokenresponseif)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Token introspection endpoint

<a id="opIdpost-/oauth/2026-09/token/introspect_/oauth/v3/token/introspect"></a>

> Code samples

```bash
curl https://api.hubapi.com/oauth/2026-09/token/introspect \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
```

`POST /oauth/2026-09/token/introspect`

Returns validity and metadata for access and refresh tokens.

> Body parameter

```yaml
null
```

<h3 id="token-introspection-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» token|body|string|false|none|
|» token_type_hint|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="token-introspection-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TokenInfoResponseBaseIF](#schematokeninforesponsebaseif)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Token Revocation endpoint

<a id="opIdpost-/oauth/2026-09/token/revoke_/oauth/v3/token/revoke"></a>

> Code samples

```bash
curl https://api.hubapi.com/oauth/2026-09/token/revoke \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded'
```

`POST /oauth/2026-09/token/revoke`

Deletes/Revokes provided Refresh Token

> Body parameter

```yaml
null
```

<h3 id="token-revocation-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» token|body|string|false|none|
|» token_type_hint|body|string|false|none|

> Example responses

> default Response

```json
null
```

<h3 id="token-revocation-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessTokenResponse">AccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenresponse"></a>
<a id="schema_AccessTokenResponse"></a>
<a id="tocSaccesstokenresponse"></a>
<a id="tocsaccesstokenresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|A string representing the access token that allows access to the API.|
|expires_in|integer(int64)|true|none|An integer in int64 format indicating the duration in seconds until the access token expires.|
|hub_id|integer(int32)|false|none|An integer representing the unique identifier of the HubSpot account (hub) associated with the token.|
|id_token|string|false|none|A string representing the ID token, which is an optional part of the response.|
|refresh_token|string|true|none|A string representing the refresh token, which can be used to obtain a new access token.|
|scopes|[string]|false|none|An array of strings specifying the scopes that are granted with the access token.|
|token_type|string|true|none|A string indicating the type of token issued.|
|token_use|string|true|none|Indicates the usage of the token, which is 'access_token' by default. It is a string with a fixed value of 'access_token'.|
|user_id|integer(int32)|false|none|An integer representing the unique identifier of the user associated with the token.|

#### Enumerated Values

|Property|Value|
|---|---|
|token_use|access_token|

<h2 id="tocS_ClientCredentialsTokenResponse">ClientCredentialsTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclientcredentialstokenresponse"></a>
<a id="schema_ClientCredentialsTokenResponse"></a>
<a id="tocSclientcredentialstokenresponse"></a>
<a id="tocsclientcredentialstokenresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|A string representing the access token issued.|
|expires_in|integer(int64)|true|none|An integer indicating the number of seconds until the token expires, in int64 format.|
|hub_id|integer(int32)|false|none|An integer representing the HubSpot account ID associated with the token.|
|id_token|string|false|none|A string representing the ID token, if applicable.|
|scopes|[string]|false|none|An array of strings representing the scopes granted by the token.|
|token_type|string|true|none|A string indicating the type of the token.|
|token_use|string|true|none|Indicates the usage of the token, which is 'client_credentials' by default.|
|user_id|integer(int32)|false|none|An integer representing the user ID associated with the token.|

#### Enumerated Values

|Property|Value|
|---|---|
|token_use|client_credentials|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_PublicAccessTokenInfoResponse">PublicAccessTokenInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicaccesstokeninforesponse"></a>
<a id="schema_PublicAccessTokenInfoResponse"></a>
<a id="tocSpublicaccesstokeninforesponse"></a>
<a id="tocspublicaccesstokeninforesponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A boolean indicating whether the token is currently active.|
|app_id|integer(int32)|true|none|An integer representing the unique identifier of the application associated with the token.|
|client_id|string|true|none|A string representing the client ID associated with the token.|
|expires_in|integer(int64)|true|none|An integer in int64 format representing the time in seconds until the token expires.|
|hub_domain|string|false|none|A string representing the domain of the HubSpot account associated with the token.|
|hub_id|integer(int32)|true|none|An integer representing the unique identifier of the HubSpot account (hub) associated with the token.|
|is_private_distribution|boolean|true|none|A boolean indicating whether the token is for private distribution.|
|scopes|[string]|true|none|An array of strings representing the scopes (permissions) granted to the token.|
|signed_access_token|[SignedAccessToken](#schemasignedaccesstoken)|true|none|none|
|token|string|true|none|A string representing the token itself.|
|token_type|string|true|none|A string representing the type of the token.|
|token_use|string|true|none|A string indicating the use of the token, which defaults to 'access_token'.|
|user|string|false|none|A string representing the username associated with the token.|
|user_id|integer(int32)|true|none|An integer representing the unique identifier of the user associated with the token.|

#### Enumerated Values

|Property|Value|
|---|---|
|token_use|access_token|

<h2 id="tocS_PublicRefreshTokenInfoResponse">PublicRefreshTokenInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicrefreshtokeninforesponse"></a>
<a id="schema_PublicRefreshTokenInfoResponse"></a>
<a id="tocSpublicrefreshtokeninforesponse"></a>
<a id="tocspublicrefreshtokeninforesponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A boolean indicating whether the token is currently active.|
|app_id|integer(int32)|true|none|An integer representing the unique identifier of the application associated with the token.|
|client_id|string|true|none|A string representing the unique identifier of the client that requested the token.|
|hub_domain|string|false|none|A string representing the domain of the HubSpot account associated with the token.|
|hub_id|integer(int32)|true|none|An integer representing the unique identifier of the HubSpot account associated with the token.|
|scopes|[string]|true|none|An array of strings representing the scopes associated with the token.|
|token|string|true|none|The string representation of the refresh token.|
|token_type|string|true|none|A string indicating the type of the token.|
|token_use|string|true|none|Indicates the use of the token, which is 'refresh_token' by default.|
|user|string|false|none|A string representing the user associated with the token.|
|user_id|integer(int32)|true|none|An integer representing the unique identifier of the user associated with the token.|

#### Enumerated Values

|Property|Value|
|---|---|
|token_use|refresh_token|

<h2 id="tocS_SignedAccessToken">SignedAccessToken</h2>
<!-- backwards compatibility -->
<a id="schemasignedaccesstoken"></a>
<a id="schema_SignedAccessToken"></a>
<a id="tocSsignedaccesstoken"></a>
<a id="tocssignedaccesstoken"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|An integer identifying the application that issued the token.|
|appInstallId|string|true|none|A string identifying the installation instance of the application associated with the token.|
|audience|string|true|none|A string representing the intended audience for the token.|
|expiresAt|integer(int64)|true|none|An integer representing the expiration time of the token, in Unix timestamp format.|
|hubId|integer(int32)|true|none|An integer identifying the HubSpot account associated with the token.|
|hublet|string|true|none|A string indicating the specific HubSpot region or cluster.|
|installingUserId|integer(int32)|true|none|An integer identifying the user who installed the application associated with the token.|
|isPrivateDistribution|boolean|true|none|A boolean indicating whether the token is for a private distribution of the application.|
|isServiceAccount|boolean|true|none|A boolean indicating whether the token is for a service account.|
|isUserLevel|boolean|true|none|A boolean indicating whether the token is associated with a user-level scope.|
|newSignature|string|true|none|A string representing a new cryptographic signature for the token.|
|scopeToScopeGroupPks|string|true|none|A string mapping scopes to their respective scope group primary keys.|
|scopes|string|true|none|A string detailing the permissions granted by the token.|
|signature|string|true|none|A string representing the cryptographic signature of the token.|
|trialScopeToScopeGroupPks|string|true|none|A string mapping trial scopes to their respective scope group primary keys.|
|trialScopes|string|true|none|A string detailing the trial permissions granted by the token.|
|userId|integer(int32)|true|none|An integer identifying the user associated with the token.|

<h2 id="tocS_TokenInfoResponseBaseIF">TokenInfoResponseBaseIF</h2>
<!-- backwards compatibility -->
<a id="schematokeninforesponsebaseif"></a>
<a id="schema_TokenInfoResponseBaseIF"></a>
<a id="tocStokeninforesponsebaseif"></a>
<a id="tocstokeninforesponsebaseif"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PublicAccessTokenInfoResponse](#schemapublicaccesstokeninforesponse)|false|none|none|
|*oneOf*|[PublicRefreshTokenInfoResponse](#schemapublicrefreshtokeninforesponse)|false|none|none|

<h2 id="tocS_TokenResponseIF">TokenResponseIF</h2>
<!-- backwards compatibility -->
<a id="schematokenresponseif"></a>
<a id="schema_TokenResponseIF"></a>
<a id="tocStokenresponseif"></a>
<a id="tocstokenresponseif"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AccessTokenResponse](#schemaaccesstokenresponse)|false|none|none|
|*oneOf*|[ClientCredentialsTokenResponse](#schemaclientcredentialstokenresponse)|false|none|none|
