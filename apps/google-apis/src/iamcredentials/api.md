<h1 id="iam-service-account-credentials-api">IAM Service Account Credentials API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Creates short-lived credentials for impersonating IAM service accounts. To enable this API, you must enable the IAM API (iam.googleapis.com).

Base URLs:

* <a href="https://iamcredentials.googleapis.com/">https://iamcredentials.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="iam-service-account-credentials-api-projects">projects</h1>

## iamcredentials.projects.serviceAccounts.generateAccessToken

<a id="opIdiamcredentials.projects.serviceAccounts.generateAccessToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:generateAccessToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delegates": [
      "string"
    ],
    "lifetime": "string",
    "scope": [
      "string"
    ]
  }'
```

`POST /v1/{name}:generateAccessToken`

Generates an OAuth 2.0 access token for a service account.

> Body parameter

```json
{
  "delegates": [
    "string"
  ],
  "lifetime": "string",
  "scope": [
    "string"
  ]
}
```

<h3 id="iamcredentialsprojectsserviceaccountsgenerateaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GenerateAccessTokenRequest](#schemagenerateaccesstokenrequest)|false|none|
|» delegates|body|[string]|false|The sequence of service accounts in a delegation chain. This field is required for [delegated requests](https://cloud.google.com/iam/help/credentials/delegated-request). For [direct requests](https://cloud.google.com/iam/help/credentials/direct-request), which are more common, do not specify this field. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|» lifetime|body|string(google-duration)|false|The desired lifetime duration of the access token in seconds. By default, the maximum allowed value is 1 hour. To set a lifetime of up to 12 hours, you can add the service account as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint. See detailed instructions at https://cloud.google.com/iam/help/credentials/lifetime If a value is not specified, the token's lifetime will be set to a default value of 1 hour.|
|» scope|body|[string]|false|Required. Code to identify the scopes to be included in the OAuth 2.0 access token. See https://developers.google.com/identity/protocols/googlescopes for more information. At least one value required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "expireTime": "string"
}
```

<h3 id="iamcredentialsprojectsserviceaccountsgenerateaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateAccessTokenResponse](#schemagenerateaccesstokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## iamcredentials.projects.serviceAccounts.generateIdToken

<a id="opIdiamcredentials.projects.serviceAccounts.generateIdToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:generateIdToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "audience": "string",
    "delegates": [
      "string"
    ],
    "includeEmail": true
  }'
```

`POST /v1/{name}:generateIdToken`

Generates an OpenID Connect ID token for a service account.

> Body parameter

```json
{
  "audience": "string",
  "delegates": [
    "string"
  ],
  "includeEmail": true
}
```

<h3 id="iamcredentialsprojectsserviceaccountsgenerateidtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GenerateIdTokenRequest](#schemagenerateidtokenrequest)|false|none|
|» audience|body|string|false|Required. The audience for the token, such as the API or account that this token grants access to.|
|» delegates|body|[string]|false|The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|» includeEmail|body|boolean|false|Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

<h3 id="iamcredentialsprojectsserviceaccountsgenerateidtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateIdTokenResponse](#schemagenerateidtokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## iamcredentials.projects.serviceAccounts.signBlob

<a id="opIdiamcredentials.projects.serviceAccounts.signBlob"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:signBlob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delegates": [
      "string"
    ],
    "payload": "string"
  }'
```

`POST /v1/{name}:signBlob`

Signs a blob using a service account's system-managed private key.

> Body parameter

```json
{
  "delegates": [
    "string"
  ],
  "payload": "string"
}
```

<h3 id="iamcredentialsprojectsserviceaccountssignblob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SignBlobRequest](#schemasignblobrequest)|false|none|
|» delegates|body|[string]|false|The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|» payload|body|string(byte)|false|Required. The bytes to sign.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "keyId": "string",
  "signedBlob": "string"
}
```

<h3 id="iamcredentialsprojectsserviceaccountssignblob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SignBlobResponse](#schemasignblobresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## iamcredentials.projects.serviceAccounts.signJwt

<a id="opIdiamcredentials.projects.serviceAccounts.signJwt"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:signJwt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delegates": [
      "string"
    ],
    "payload": "string"
  }'
```

`POST /v1/{name}:signJwt`

Signs a JWT using a service account's system-managed private key.

> Body parameter

```json
{
  "delegates": [
    "string"
  ],
  "payload": "string"
}
```

<h3 id="iamcredentialsprojectsserviceaccountssignjwt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SignJwtRequest](#schemasignjwtrequest)|false|none|
|» delegates|body|[string]|false|The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|» payload|body|string|false|Required. The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "keyId": "string",
  "signedJwt": "string"
}
```

<h3 id="iamcredentialsprojectsserviceaccountssignjwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SignJwtResponse](#schemasignjwtresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GenerateAccessTokenRequest">GenerateAccessTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccesstokenrequest"></a>
<a id="schema_GenerateAccessTokenRequest"></a>
<a id="tocSgenerateaccesstokenrequest"></a>
<a id="tocsgenerateaccesstokenrequest"></a>

```json
{
  "delegates": [
    "string"
  ],
  "lifetime": "string",
  "scope": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegates|[string]|false|none|The sequence of service accounts in a delegation chain. This field is required for [delegated requests](https://cloud.google.com/iam/help/credentials/delegated-request). For [direct requests](https://cloud.google.com/iam/help/credentials/direct-request), which are more common, do not specify this field. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|lifetime|string(google-duration)|false|none|The desired lifetime duration of the access token in seconds. By default, the maximum allowed value is 1 hour. To set a lifetime of up to 12 hours, you can add the service account as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint. See detailed instructions at https://cloud.google.com/iam/help/credentials/lifetime If a value is not specified, the token's lifetime will be set to a default value of 1 hour.|
|scope|[string]|false|none|Required. Code to identify the scopes to be included in the OAuth 2.0 access token. See https://developers.google.com/identity/protocols/googlescopes for more information. At least one value required.|

<h2 id="tocS_GenerateAccessTokenResponse">GenerateAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccesstokenresponse"></a>
<a id="schema_GenerateAccessTokenResponse"></a>
<a id="tocSgenerateaccesstokenresponse"></a>
<a id="tocsgenerateaccesstokenresponse"></a>

```json
{
  "accessToken": "string",
  "expireTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|The OAuth 2.0 access token.|
|expireTime|string(google-datetime)|false|none|Token expiration time. The expiration time is always set.|

<h2 id="tocS_GenerateIdTokenRequest">GenerateIdTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateidtokenrequest"></a>
<a id="schema_GenerateIdTokenRequest"></a>
<a id="tocSgenerateidtokenrequest"></a>
<a id="tocsgenerateidtokenrequest"></a>

```json
{
  "audience": "string",
  "delegates": [
    "string"
  ],
  "includeEmail": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|false|none|Required. The audience for the token, such as the API or account that this token grants access to.|
|delegates|[string]|false|none|The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|includeEmail|boolean|false|none|Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims.|

<h2 id="tocS_GenerateIdTokenResponse">GenerateIdTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateidtokenresponse"></a>
<a id="schema_GenerateIdTokenResponse"></a>
<a id="tocSgenerateidtokenresponse"></a>
<a id="tocsgenerateidtokenresponse"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|The OpenId Connect ID token.|

<h2 id="tocS_SignBlobRequest">SignBlobRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignblobrequest"></a>
<a id="schema_SignBlobRequest"></a>
<a id="tocSsignblobrequest"></a>
<a id="tocssignblobrequest"></a>

```json
{
  "delegates": [
    "string"
  ],
  "payload": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegates|[string]|false|none|The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|payload|string(byte)|false|none|Required. The bytes to sign.|

<h2 id="tocS_SignBlobResponse">SignBlobResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignblobresponse"></a>
<a id="schema_SignBlobResponse"></a>
<a id="tocSsignblobresponse"></a>
<a id="tocssignblobresponse"></a>

```json
{
  "keyId": "string",
  "signedBlob": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|string|false|none|The ID of the key used to sign the blob. The key used for signing will remain valid for at least 12 hours after the blob is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL}`|
|signedBlob|string(byte)|false|none|The signature for the blob. Does not include the original blob. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the blob. As a result, the receiver can no longer verify the signature.|

<h2 id="tocS_SignJwtRequest">SignJwtRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignjwtrequest"></a>
<a id="schema_SignJwtRequest"></a>
<a id="tocSsignjwtrequest"></a>
<a id="tocssignjwtrequest"></a>

```json
{
  "delegates": [
    "string"
  ],
  "payload": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegates|[string]|false|none|The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.|
|payload|string|false|none|Required. The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future.|

<h2 id="tocS_SignJwtResponse">SignJwtResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignjwtresponse"></a>
<a id="schema_SignJwtResponse"></a>
<a id="tocSsignjwtresponse"></a>
<a id="tocssignjwtresponse"></a>

```json
{
  "keyId": "string",
  "signedJwt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|string|false|none|The ID of the key used to sign the JWT. The key used for signing will remain valid for at least 12 hours after the JWT is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL}`|
|signedJwt|string|false|none|The signed JWT. Contains the automatically generated header; the client-supplied payload; and the signature, which is generated using the key referenced by the `kid` field in the header. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the JWT. As a result, the receiver can no longer verify the signature.|
