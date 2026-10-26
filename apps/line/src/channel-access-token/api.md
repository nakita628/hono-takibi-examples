<h1 id="channel-access-token-api">Channel Access Token API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes Channel Access Token API.

Base URLs:

* <a href="https://api.line.me">https://api.line.me</a>

<h1 id="channel-access-token-api-channel-access-token">channel-access-token</h1>

## issueStatelessChannelToken

<a id="opIdissueStatelessChannelToken"></a>

> Code samples

```bash
curl https://api.line.me/oauth2/v3/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'grant_type=client_credentials&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=string'
```

`POST /oauth2/v3/token`

Issues a new stateless channel access token, which doesn't have max active token limit
unlike the other token types.
The newly issued token is only valid for 15 minutes but can not be revoked until it naturally expires.


<a href="https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token">External documentation</a>

> Body parameter

```yaml
grant_type: client_credentials
client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
client_assertion: string
```

<h3 id="issuestatelesschanneltoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IssueStatelessChannelTokenByJWTAssertionRequest](#schemaissuestatelesschanneltokenbyjwtassertionrequest) \| [IssueStatelessChannelTokenByClientSecretRequest](#schemaissuestatelesschanneltokenbyclientsecretrequest)|true|none|
|» *oneOf*|body|[IssueStatelessChannelTokenByJWTAssertionRequest](#schemaissuestatelesschanneltokenbyjwtassertionrequest)|false|Request body to issue a new token with JWT assertion|
|» *oneOf*|body|[IssueStatelessChannelTokenByClientSecretRequest](#schemaissuestatelesschanneltokenbyclientsecretrequest)|false|Request body to issue a new token with `client_id` and `client_secret`|

> Example responses

> 200 Response

```json
{
  "token_type": "Bearer",
  "access_token": "eyJhbGciOiJIUz.....",
  "expires_in": 899
}
```

<h3 id="issuestatelesschanneltoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IssueStatelessChannelAccessTokenResponse](#schemaissuestatelesschannelaccesstokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## getsAllValidChannelAccessTokenKeyIds

<a id="opIdgetsAllValidChannelAccessTokenKeyIds"></a>

> Code samples

```bash
curl 'https://api.line.me/oauth2/v2.1/tokens/kid?client_assertion_type=string&client_assertion=string' \
  -H 'Accept: application/json'
```

`GET /oauth2/v2.1/tokens/kid`

Gets all valid channel access token key IDs.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1">External documentation</a>

<h3 id="getsallvalidchannelaccesstokenkeyids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_assertion_type|query|string|true|`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`|
|client_assertion|query|string|true|A JSON Web Token (JWT) (opens new window)the client needs to create and sign with the private key.|

> Example responses

> 200 Response

```json
{
  "kids": [
    "U_gdnFYKTWRxxxxDVZexGg",
    "sDTOzw5wIfWxxxxzcmeQA",
    "73hDyp3PxGfxxxxD6U5qYA",
    "FHGanaP79smDxxxxyPrVw",
    "CguB-0kxxxxdSM3A5Q_UtQ",
    "G82YP96jhHwyKSxxxx7IFA"
  ]
}
```

<h3 id="getsallvalidchannelaccesstokenkeyids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelAccessTokenKeyIdsResponse](#schemachannelaccesstokenkeyidsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## issueChannelTokenByJWT

<a id="opIdissueChannelTokenByJWT"></a>

> Code samples

```bash
curl https://api.line.me/oauth2/v2.1/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'grant_type=string&client_assertion_type=string&client_assertion=string'
```

`POST /oauth2/v2.1/token`

Issues a channel access token that allows you to specify a desired expiration date. This method lets you use JWT assertion for authentication.

<a href="https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1">External documentation</a>

> Body parameter

```yaml
grant_type: string
client_assertion_type: string
client_assertion: string
```

<h3 id="issuechanneltokenbyjwt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» grant_type|body|string|true|client_credentials|
|» client_assertion_type|body|string|true|urn:ietf:params:oauth:client-assertion-type:jwt-bearer|
|» client_assertion|body|string|true|A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.|

> Example responses

> 200 Response

```json
{
  "access_token": "eyJhbGciOiJIUz.....",
  "token_type": "Bearer",
  "expires_in": 2592000,
  "key_id": "sDTOzw5wIfxxxxPEzcmeQA"
}
```

<h3 id="issuechanneltokenbyjwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IssueChannelAccessTokenResponse](#schemaissuechannelaccesstokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## verifyChannelTokenByJWT

<a id="opIdverifyChannelTokenByJWT"></a>

> Code samples

```bash
curl 'https://api.line.me/oauth2/v2.1/verify?access_token=string' \
  -H 'Accept: application/json'
```

`GET /oauth2/v2.1/verify`

You can verify whether a Channel access token with a user-specified expiration (Channel Access Token v2.1) is valid.

<a href="https://developers.line.biz/en/reference/messaging-api/#verify-channel-access-token-v2-1">External documentation</a>

<h3 id="verifychanneltokenbyjwt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access_token|query|string|true|Channel access token with a user-specified expiration (Channel Access Token v2.1).|

> Example responses

> 200 Response

```json
{
  "client_id": "1573163733",
  "expires_in": 2591659,
  "scope": "profile chat_message.write"
}
```

<h3 id="verifychanneltokenbyjwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VerifyChannelAccessTokenResponse](#schemaverifychannelaccesstokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## revokeChannelTokenByJWT

<a id="opIdrevokeChannelTokenByJWT"></a>

> Code samples

```bash
curl https://api.line.me/oauth2/v2.1/revoke \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'client_id=string&client_secret=string&access_token=string'
```

`POST /oauth2/v2.1/revoke`

Revoke channel access token v2.1

<a href="https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1">External documentation</a>

> Body parameter

```yaml
client_id: string
client_secret: string
access_token: string
```

<h3 id="revokechanneltokenbyjwt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» client_id|body|string|true|Channel ID|
|» client_secret|body|string|true|Channel Secret|
|» access_token|body|string|true|Channel access token|

<h3 id="revokechanneltokenbyjwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## issueChannelToken

<a id="opIdissueChannelToken"></a>

> Code samples

```bash
curl https://api.line.me/v2/oauth/accessToken \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'grant_type=client_credentials&client_id=string&client_secret=string'
```

`POST /v2/oauth/accessToken`

Issue short-lived channel access token

<a href="https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token">External documentation</a>

> Body parameter

```yaml
grant_type: client_credentials
client_id: string
client_secret: string
```

<h3 id="issuechanneltoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» grant_type|body|string|true|`client_credentials`|
|» client_id|body|string|true|Channel ID.|
|» client_secret|body|string|true|Channel secret.|

> Example responses

> 200 Response

```json
{
  "access_token": "W1TeHCgfH2Liwa.....",
  "expires_in": 2592000,
  "token_type": "Bearer"
}
```

> 400 Response

```json
{
  "error": "invalid_request",
  "error_description": "some parameters missed or invalid"
}
```

<h3 id="issuechanneltoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IssueShortLivedChannelAccessTokenResponse](#schemaissueshortlivedchannelaccesstokenresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## verifyChannelToken

<a id="opIdverifyChannelToken"></a>

> Code samples

```bash
curl https://api.line.me/v2/oauth/verify \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'access_token=string'
```

`POST /v2/oauth/verify`

Verify the validity of short-lived and long-lived channel access tokens

<a href="https://developers.line.biz/en/reference/messaging-api/#verify-channel-access-token">External documentation</a>

> Body parameter

```yaml
access_token: string
```

<h3 id="verifychanneltoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» access_token|body|string|true|A short-lived or long-lived channel access token.|

> Example responses

> 200 Response

```json
{
  "client_id": "1350031035",
  "expires_in": 3138007490,
  "scope": "P CM"
}
```

<h3 id="verifychanneltoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VerifyChannelAccessTokenResponse](#schemaverifychannelaccesstokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## revokeChannelToken

<a id="opIdrevokeChannelToken"></a>

> Code samples

```bash
curl https://api.line.me/v2/oauth/revoke \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'access_token=string'
```

`POST /v2/oauth/revoke`

Revoke short-lived or long-lived channel access token

<a href="https://developers.line.biz/en/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token">External documentation</a>

> Body parameter

```yaml
access_token: string
```

<h3 id="revokechanneltoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» access_token|body|string|true|A short-lived or long-lived channel access token.|

<h3 id="revokechanneltoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_IssueStatelessChannelTokenByJWTAssertionRequest">IssueStatelessChannelTokenByJWTAssertionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuestatelesschanneltokenbyjwtassertionrequest"></a>
<a id="schema_IssueStatelessChannelTokenByJWTAssertionRequest"></a>
<a id="tocSissuestatelesschanneltokenbyjwtassertionrequest"></a>
<a id="tocsissuestatelesschanneltokenbyjwtassertionrequest"></a>

```json
{
  "grant_type": "client_credentials",
  "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  "client_assertion": "string"
}
```

Request body to issue a new token with JWT assertion

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|client_credentials|
|client_assertion_type|string|true|none|URL-encoded value of `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`|
|client_assertion|string|true|none|A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|client_credentials|
|client_assertion_type|urn:ietf:params:oauth:client-assertion-type:jwt-bearer|

<h2 id="tocS_IssueStatelessChannelTokenByClientSecretRequest">IssueStatelessChannelTokenByClientSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuestatelesschanneltokenbyclientsecretrequest"></a>
<a id="schema_IssueStatelessChannelTokenByClientSecretRequest"></a>
<a id="tocSissuestatelesschanneltokenbyclientsecretrequest"></a>
<a id="tocsissuestatelesschanneltokenbyclientsecretrequest"></a>

```json
{
  "grant_type": "client_credentials",
  "client_id": "string",
  "client_secret": "string"
}
```

Request body to issue a new token with `client_id` and `client_secret`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|`client_credentials`|
|client_id|string|true|none|Channel ID.|
|client_secret|string|true|none|Channel secret.|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|client_credentials|

<h2 id="tocS_IssueStatelessChannelAccessTokenResponse">IssueStatelessChannelAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuestatelesschannelaccesstokenresponse"></a>
<a id="schema_IssueStatelessChannelAccessTokenResponse"></a>
<a id="tocSissuestatelesschannelaccesstokenresponse"></a>
<a id="tocsissuestatelesschannelaccesstokenresponse"></a>

```json
{
  "access_token": "string",
  "expires_in": 0,
  "token_type": "Bearer"
}
```

Issued stateless channel access token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|A stateless channel access token.<br>The token is an opaque string which means its format is an implementation detail<br>and the consumer of this token should never try to use the data parsed from the token.<br>|
|expires_in|integer(int32)|true|none|Duration in seconds after which the issued access token expires|
|token_type|string|true|none|Token type. The value is always `Bearer`.|

<h2 id="tocS_ChannelAccessTokenKeyIdsResponse">ChannelAccessTokenKeyIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelaccesstokenkeyidsresponse"></a>
<a id="schema_ChannelAccessTokenKeyIdsResponse"></a>
<a id="tocSchannelaccesstokenkeyidsresponse"></a>
<a id="tocschannelaccesstokenkeyidsresponse"></a>

```json
{
  "kids": [
    "string"
  ]
}
```

Channel access token key IDs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kids|[string]|true|none|Array of channel access token key IDs.|

<h2 id="tocS_IssueShortLivedChannelAccessTokenResponse">IssueShortLivedChannelAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissueshortlivedchannelaccesstokenresponse"></a>
<a id="schema_IssueShortLivedChannelAccessTokenResponse"></a>
<a id="tocSissueshortlivedchannelaccesstokenresponse"></a>
<a id="tocsissueshortlivedchannelaccesstokenresponse"></a>

```json
{
  "access_token": "string",
  "expires_in": 0,
  "token_type": "Bearer"
}
```

Issued short-lived channel access token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|A short-lived channel access token. Valid for 30 days.<br>Note: Channel access tokens cannot be refreshed.<br>|
|expires_in|integer(int32)|true|none|Time until channel access token expires in seconds from time the token is issued.|
|token_type|string|true|none|Token type. The value is always `Bearer`.|

<h2 id="tocS_IssueChannelAccessTokenResponse">IssueChannelAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuechannelaccesstokenresponse"></a>
<a id="schema_IssueChannelAccessTokenResponse"></a>
<a id="tocSissuechannelaccesstokenresponse"></a>
<a id="tocsissuechannelaccesstokenresponse"></a>

```json
{
  "access_token": "string",
  "expires_in": 0,
  "token_type": "Bearer",
  "key_id": "string"
}
```

Issued channel access token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|Channel access token.<br>|
|expires_in|integer(int32)|true|none|Amount of time in seconds from issue to expiration of the channel access token|
|token_type|string|true|none|A token type.|
|key_id|string|true|none|Unique key ID for identifying the channel access token.|

<h2 id="tocS_VerifyChannelAccessTokenResponse">VerifyChannelAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifychannelaccesstokenresponse"></a>
<a id="schema_VerifyChannelAccessTokenResponse"></a>
<a id="tocSverifychannelaccesstokenresponse"></a>
<a id="tocsverifychannelaccesstokenresponse"></a>

```json
{
  "client_id": "string",
  "expires_in": 0,
  "scope": "string"
}
```

Verification result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|The channel ID for which the channel access token was issued.|
|expires_in|integer(int64)|true|none|Number of seconds before the channel access token expires.|
|scope|string|false|none|Permissions granted to the channel access token.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

Error response of the Channel access token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error summary|
|error_description|string|false|none|Details of the error. Not returned in certain situations.|
