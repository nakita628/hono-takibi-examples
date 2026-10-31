<h1 id="aws-sso-oidc">AWS SSO OIDC v2019-06-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI or a native application) to register with IAM Identity Center. The service also enables the client to fetch the user’s access token upon successful authentication and authorization with IAM Identity Center.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p> <b>Considerations for Using This Guide</b> </p> <p>Before you begin using this guide, we recommend that you first review the following important information about how the IAM Identity Center OIDC service works.</p> <ul> <li> <p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single sign-on authentication with the AWS CLI. Support for other OIDC flows frequently needed for native applications, such as Authorization Code Flow (+ PKCE), will be addressed in future releases.</p> </li> <li> <p>The service emits only OIDC access tokens, such that obtaining a new token (For example, token refresh) requires explicit user re-authentication.</p> </li> <li> <p>The access tokens provided by this service grant access to all AWS account entitlements assigned to an IAM Identity Center user, not just a particular application.</p> </li> <li> <p>The documentation in this guide does not describe the mechanism to convert the access token into AWS Auth (“sigv4”) credentials for use with IAM-protected AWS service endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference Guide</i>.</p> </li> </ul> <p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>

Base URLs:

* <a href="http://oidc.us-east-1.amazonaws.com">http://oidc.us-east-1.amazonaws.com</a> - The SSO OIDC multi-region endpoint

* <a href="https://oidc.us-east-1.amazonaws.com">https://oidc.us-east-1.amazonaws.com</a> - The SSO OIDC multi-region endpoint

* <a href="http://oidc.cn-north-1.amazonaws.com.cn">http://oidc.cn-north-1.amazonaws.com.cn</a> - The SSO OIDC endpoint for China (Beijing) and China (Ningxia)

* <a href="https://oidc.cn-north-1.amazonaws.com.cn">https://oidc.cn-north-1.amazonaws.com.cn</a> - The SSO OIDC endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/oidc/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-sso-oidc-default">Default</h1>

## CreateToken

<a id="opIdCreateToken"></a>

> Code samples

```bash
curl https://sso-oidc.us-east-1.amazonaws.com/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientId": "string",
    "clientSecret": "string",
    "grantType": "string",
    "deviceCode": "string",
    "code": "string",
    "refreshToken": "string",
    "scope": [
      "string"
    ],
    "redirectUri": "string"
  }'
```

`POST /token`

Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.

> Body parameter

```json
{
  "clientId": "string",
  "clientSecret": "string",
  "grantType": "string",
  "deviceCode": "string",
  "code": "string",
  "refreshToken": "string",
  "scope": [
    "string"
  ],
  "redirectUri": "string"
}
```

<h3 id="createtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientId|body|string|true|The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.|
|» clientSecret|body|string|true|A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.|
|» grantType|body|string|true|<p>Supports grant types for the authorization code, refresh token, and device code request. For device code requests, specify the following value:</p> <p> <code>urn:ietf:params:oauth:grant-type:<i>device_code</i> </code> </p> <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>|
|» deviceCode|body|string|false|Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API.|
|» code|body|string|false|The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token.|
|» refreshToken|body|string|false|<p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>The token used to obtain an access token in the event that the access token is invalid or expired.</p>|
|» scope|body|[[Scope](#schemascope)]|false|The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.|
|» redirectUri|body|string|false|The location of the application that will receive the authorization code. Users authorize the service to send the request to this location.|

> Example responses

> 200 Response

```json
{
  "accessToken": {},
  "tokenType": {},
  "expiresIn": {},
  "refreshToken": {},
  "idToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="createtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTokenResponse](#schemacreatetokenresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidClientException|[InvalidClientException](#schemainvalidclientexception)|
|482|482|InvalidGrantException|[InvalidGrantException](#schemainvalidgrantexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|UnsupportedGrantTypeException|[UnsupportedGrantTypeException](#schemaunsupportedgranttypeexception)|
|485|485|InvalidScopeException|[InvalidScopeException](#schemainvalidscopeexception)|
|486|486|AuthorizationPendingException|[AuthorizationPendingException](#schemaauthorizationpendingexception)|
|487|487|SlowDownException|[SlowDownException](#schemaslowdownexception)|
|488|488|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|489|489|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|
|490|490|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterClient

<a id="opIdRegisterClient"></a>

> Code samples

```bash
curl https://sso-oidc.us-east-1.amazonaws.com/client/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientName": "string",
    "clientType": "string",
    "scopes": [
      "string"
    ]
  }'
```

`POST /client/register`

Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.

> Body parameter

```json
{
  "clientName": "string",
  "clientType": "string",
  "scopes": [
    "string"
  ]
}
```

<h3 id="registerclient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientName|body|string|true|The friendly name of the client.|
|» clientType|body|string|true|The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.|
|» scopes|body|[[Scope](#schemascope)]|false|The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.|

> Example responses

> 200 Response

```json
{
  "clientId": {},
  "clientSecret": {},
  "clientIdIssuedAt": {},
  "clientSecretExpiresAt": {},
  "authorizationEndpoint": {},
  "tokenEndpoint": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="registerclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterClientResponse](#schemaregisterclientresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidScopeException|[InvalidScopeException](#schemainvalidscopeexception)|
|482|482|InvalidClientMetadataException|[InvalidClientMetadataException](#schemainvalidclientmetadataexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDeviceAuthorization

<a id="opIdStartDeviceAuthorization"></a>

> Code samples

```bash
curl https://sso-oidc.us-east-1.amazonaws.com/device_authorization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientId": "string",
    "clientSecret": "string",
    "startUrl": "string"
  }'
```

`POST /device_authorization`

Initiates device authorization by requesting a pair of verification codes from the authorization service.

> Body parameter

```json
{
  "clientId": "string",
  "clientSecret": "string",
  "startUrl": "string"
}
```

<h3 id="startdeviceauthorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientId|body|string|true|The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the <a>RegisterClient</a> API operation.|
|» clientSecret|body|string|true|A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation.|
|» startUrl|body|string|true|The URL for the AWS access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the AWS access portal</a> in the <i>IAM Identity Center User Guide</i>.|

> Example responses

> 200 Response

```json
{
  "deviceCode": {},
  "userCode": {},
  "verificationUri": {},
  "verificationUriComplete": {},
  "expiresIn": {},
  "interval": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="startdeviceauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDeviceAuthorizationResponse](#schemastartdeviceauthorizationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidClientException|[InvalidClientException](#schemainvalidclientexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|SlowDownException|[SlowDownException](#schemaslowdownexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateTokenResponse">CreateTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetokenresponse"></a>
<a id="schema_CreateTokenResponse"></a>
<a id="tocScreatetokenresponse"></a>
<a id="tocscreatetokenresponse"></a>

```json
{
  "accessToken": {},
  "tokenType": {},
  "expiresIn": {},
  "refreshToken": {},
  "idToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|object|false|none|none|
|tokenType|object|false|none|none|
|expiresIn|object|false|none|none|
|refreshToken|object|false|none|none|
|idToken|object|false|none|none|

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
"string"
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_InvalidClientException">InvalidClientException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclientexception"></a>
<a id="schema_InvalidClientException"></a>
<a id="tocSinvalidclientexception"></a>
<a id="tocsinvalidclientexception"></a>

```json
null
```

<h2 id="tocS_InvalidGrantException">InvalidGrantException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgrantexception"></a>
<a id="schema_InvalidGrantException"></a>
<a id="tocSinvalidgrantexception"></a>
<a id="tocsinvalidgrantexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedClientException">UnauthorizedClientException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedclientexception"></a>
<a id="schema_UnauthorizedClientException"></a>
<a id="tocSunauthorizedclientexception"></a>
<a id="tocsunauthorizedclientexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedGrantTypeException">UnsupportedGrantTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedgranttypeexception"></a>
<a id="schema_UnsupportedGrantTypeException"></a>
<a id="tocSunsupportedgranttypeexception"></a>
<a id="tocsunsupportedgranttypeexception"></a>

```json
null
```

<h2 id="tocS_InvalidScopeException">InvalidScopeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidscopeexception"></a>
<a id="schema_InvalidScopeException"></a>
<a id="tocSinvalidscopeexception"></a>
<a id="tocsinvalidscopeexception"></a>

```json
null
```

<h2 id="tocS_AuthorizationPendingException">AuthorizationPendingException</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationpendingexception"></a>
<a id="schema_AuthorizationPendingException"></a>
<a id="tocSauthorizationpendingexception"></a>
<a id="tocsauthorizationpendingexception"></a>

```json
null
```

<h2 id="tocS_SlowDownException">SlowDownException</h2>
<!-- backwards compatibility -->
<a id="schemaslowdownexception"></a>
<a id="schema_SlowDownException"></a>
<a id="tocSslowdownexception"></a>
<a id="tocsslowdownexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ExpiredTokenException">ExpiredTokenException</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredtokenexception"></a>
<a id="schema_ExpiredTokenException"></a>
<a id="tocSexpiredtokenexception"></a>
<a id="tocsexpiredtokenexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_RegisterClientResponse">RegisterClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterclientresponse"></a>
<a id="schema_RegisterClientResponse"></a>
<a id="tocSregisterclientresponse"></a>
<a id="tocsregisterclientresponse"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "clientIdIssuedAt": {},
  "clientSecretExpiresAt": {},
  "authorizationEndpoint": {},
  "tokenEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|false|none|none|
|clientSecret|object|false|none|none|
|clientIdIssuedAt|object|false|none|none|
|clientSecretExpiresAt|object|false|none|none|
|authorizationEndpoint|object|false|none|none|
|tokenEndpoint|object|false|none|none|

<h2 id="tocS_InvalidClientMetadataException">InvalidClientMetadataException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclientmetadataexception"></a>
<a id="schema_InvalidClientMetadataException"></a>
<a id="tocSinvalidclientmetadataexception"></a>
<a id="tocsinvalidclientmetadataexception"></a>

```json
null
```

<h2 id="tocS_StartDeviceAuthorizationResponse">StartDeviceAuthorizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdeviceauthorizationresponse"></a>
<a id="schema_StartDeviceAuthorizationResponse"></a>
<a id="tocSstartdeviceauthorizationresponse"></a>
<a id="tocsstartdeviceauthorizationresponse"></a>

```json
{
  "deviceCode": {},
  "userCode": {},
  "verificationUri": {},
  "verificationUriComplete": {},
  "expiresIn": {},
  "interval": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceCode|object|false|none|none|
|userCode|object|false|none|none|
|verificationUri|object|false|none|none|
|verificationUriComplete|object|false|none|none|
|expiresIn|object|false|none|none|
|interval|object|false|none|none|

<h2 id="tocS_AccessToken">AccessToken</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken"></a>
<a id="schema_AccessToken"></a>
<a id="tocSaccesstoken"></a>
<a id="tocsaccesstoken"></a>

```json
"string"
```

<h2 id="tocS_AuthCode">AuthCode</h2>
<!-- backwards compatibility -->
<a id="schemaauthcode"></a>
<a id="schema_AuthCode"></a>
<a id="tocSauthcode"></a>
<a id="tocsauthcode"></a>

```json
"string"
```

<h2 id="tocS_ClientId">ClientId</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientId"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

```json
"string"
```

<h2 id="tocS_ClientName">ClientName</h2>
<!-- backwards compatibility -->
<a id="schemaclientname"></a>
<a id="schema_ClientName"></a>
<a id="tocSclientname"></a>
<a id="tocsclientname"></a>

```json
"string"
```

<h2 id="tocS_ClientSecret">ClientSecret</h2>
<!-- backwards compatibility -->
<a id="schemaclientsecret"></a>
<a id="schema_ClientSecret"></a>
<a id="tocSclientsecret"></a>
<a id="tocsclientsecret"></a>

```json
"string"
```

<h2 id="tocS_ClientType">ClientType</h2>
<!-- backwards compatibility -->
<a id="schemaclienttype"></a>
<a id="schema_ClientType"></a>
<a id="tocSclienttype"></a>
<a id="tocsclienttype"></a>

```json
"string"
```

<h2 id="tocS_GrantType">GrantType</h2>
<!-- backwards compatibility -->
<a id="schemagranttype"></a>
<a id="schema_GrantType"></a>
<a id="tocSgranttype"></a>
<a id="tocsgranttype"></a>

```json
"string"
```

<h2 id="tocS_DeviceCode">DeviceCode</h2>
<!-- backwards compatibility -->
<a id="schemadevicecode"></a>
<a id="schema_DeviceCode"></a>
<a id="tocSdevicecode"></a>
<a id="tocsdevicecode"></a>

```json
"string"
```

<h2 id="tocS_RefreshToken">RefreshToken</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtoken"></a>
<a id="schema_RefreshToken"></a>
<a id="tocSrefreshtoken"></a>
<a id="tocsrefreshtoken"></a>

```json
"string"
```

<h2 id="tocS_Scopes">Scopes</h2>
<!-- backwards compatibility -->
<a id="schemascopes"></a>
<a id="schema_Scopes"></a>
<a id="tocSscopes"></a>
<a id="tocsscopes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_URI">URI</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_CreateTokenRequest">CreateTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetokenrequest"></a>
<a id="schema_CreateTokenRequest"></a>
<a id="tocScreatetokenrequest"></a>
<a id="tocscreatetokenrequest"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "grantType": {},
  "deviceCode": {},
  "code": {},
  "refreshToken": {},
  "scope": {},
  "redirectUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|true|none|none|
|clientSecret|object|true|none|none|
|grantType|object|true|none|none|
|deviceCode|object|false|none|none|
|code|object|false|none|none|
|refreshToken|object|false|none|none|
|scope|object|false|none|none|
|redirectUri|object|false|none|none|

<h2 id="tocS_TokenType">TokenType</h2>
<!-- backwards compatibility -->
<a id="schematokentype"></a>
<a id="schema_TokenType"></a>
<a id="tocStokentype"></a>
<a id="tocstokentype"></a>

```json
"string"
```

<h2 id="tocS_ExpirationInSeconds">ExpirationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationinseconds"></a>
<a id="schema_ExpirationInSeconds"></a>
<a id="tocSexpirationinseconds"></a>
<a id="tocsexpirationinseconds"></a>

```json
0
```

<h2 id="tocS_IdToken">IdToken</h2>
<!-- backwards compatibility -->
<a id="schemaidtoken"></a>
<a id="schema_IdToken"></a>
<a id="tocSidtoken"></a>
<a id="tocsidtoken"></a>

```json
"string"
```

<h2 id="tocS_IntervalInSeconds">IntervalInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaintervalinseconds"></a>
<a id="schema_IntervalInSeconds"></a>
<a id="tocSintervalinseconds"></a>
<a id="tocsintervalinseconds"></a>

```json
0
```

<h2 id="tocS_LongTimeStampType">LongTimeStampType</h2>
<!-- backwards compatibility -->
<a id="schemalongtimestamptype"></a>
<a id="schema_LongTimeStampType"></a>
<a id="tocSlongtimestamptype"></a>
<a id="tocslongtimestamptype"></a>

```json
0
```

<h2 id="tocS_RegisterClientRequest">RegisterClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterclientrequest"></a>
<a id="schema_RegisterClientRequest"></a>
<a id="tocSregisterclientrequest"></a>
<a id="tocsregisterclientrequest"></a>

```json
{
  "clientName": {},
  "clientType": {},
  "scopes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientName|object|true|none|none|
|clientType|object|true|none|none|
|scopes|object|false|none|none|

<h2 id="tocS_StartDeviceAuthorizationRequest">StartDeviceAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdeviceauthorizationrequest"></a>
<a id="schema_StartDeviceAuthorizationRequest"></a>
<a id="tocSstartdeviceauthorizationrequest"></a>
<a id="tocsstartdeviceauthorizationrequest"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "startUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|true|none|none|
|clientSecret|object|true|none|none|
|startUrl|object|true|none|none|

<h2 id="tocS_UserCode">UserCode</h2>
<!-- backwards compatibility -->
<a id="schemausercode"></a>
<a id="schema_UserCode"></a>
<a id="tocSusercode"></a>
<a id="tocsusercode"></a>

```json
"string"
```
