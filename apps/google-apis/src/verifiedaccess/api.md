<h1 id="chrome-verified-access-api">Chrome Verified Access API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for Verified Access chrome extension to provide credential verification for chrome devices connecting to an enterprise network

Base URLs:

* <a href="https://verifiedaccess.googleapis.com/">https://verifiedaccess.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/chrome/verified-access">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/verifiedaccess|Verify your enterprise credentials|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/verifiedaccess|Verify your enterprise credentials|

<h1 id="chrome-verified-access-api-challenge">challenge</h1>

## verifiedaccess.challenge.generate

<a id="opIdverifiedaccess.challenge.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/challenge:generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/challenge:generate`

Generates a new challenge.

> Body parameter

```json
{}
```

<h3 id="verifiedaccesschallengegenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[Empty](#schemaempty)|false|none|

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
  "alternativeChallenge": "string",
  "challenge": "string"
}
```

<h3 id="verifiedaccesschallengegenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Challenge](#schemachallenge)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/verifiedaccess ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/verifiedaccess )
</aside>

## verifiedaccess.challenge.verify

<a id="opIdverifiedaccess.challenge.verify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/challenge:verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "challengeResponse": "string",
    "expectedIdentity": "string"
  }'
```

`POST /v2/challenge:verify`

Verifies the challenge response.

> Body parameter

```json
{
  "challengeResponse": "string",
  "expectedIdentity": "string"
}
```

<h3 id="verifiedaccesschallengeverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[VerifyChallengeResponseRequest](#schemaverifychallengeresponserequest)|false|none|
|» challengeResponse|body|string(byte)|false|Required. The generated response to the challenge, the bytes representation of SignedData.|
|» expectedIdentity|body|string|false|Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.|

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
  "customerId": "string",
  "devicePermanentId": "string",
  "deviceSignal": "string",
  "keyTrustLevel": "KEY_TRUST_LEVEL_UNSPECIFIED",
  "signedPublicKeyAndChallenge": "string",
  "virtualDeviceId": "string"
}
```

<h3 id="verifiedaccesschallengeverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VerifyChallengeResponseResult](#schemaverifychallengeresponseresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/verifiedaccess ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/verifiedaccess )
</aside>

# Schemas

<h2 id="tocS_Challenge">Challenge</h2>
<!-- backwards compatibility -->
<a id="schemachallenge"></a>
<a id="schema_Challenge"></a>
<a id="tocSchallenge"></a>
<a id="tocschallenge"></a>

```json
{
  "alternativeChallenge": "string",
  "challenge": "string"
}
```

Result message for VerifiedAccess.GenerateChallenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternativeChallenge|string(byte)|false|none|Challenge generated with the old signing key, the bytes representation of SignedData (this will only be present during key rotation).|
|challenge|string(byte)|false|none|Generated challenge, the bytes representation of SignedData.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_VerifyChallengeResponseRequest">VerifyChallengeResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifychallengeresponserequest"></a>
<a id="schema_VerifyChallengeResponseRequest"></a>
<a id="tocSverifychallengeresponserequest"></a>
<a id="tocsverifychallengeresponserequest"></a>

```json
{
  "challengeResponse": "string",
  "expectedIdentity": "string"
}
```

Signed ChallengeResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challengeResponse|string(byte)|false|none|Required. The generated response to the challenge, the bytes representation of SignedData.|
|expectedIdentity|string|false|none|Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.|

<h2 id="tocS_VerifyChallengeResponseResult">VerifyChallengeResponseResult</h2>
<!-- backwards compatibility -->
<a id="schemaverifychallengeresponseresult"></a>
<a id="schema_VerifyChallengeResponseResult"></a>
<a id="tocSverifychallengeresponseresult"></a>
<a id="tocsverifychallengeresponseresult"></a>

```json
{
  "customerId": "string",
  "devicePermanentId": "string",
  "deviceSignal": "string",
  "keyTrustLevel": "KEY_TRUST_LEVEL_UNSPECIFIED",
  "signedPublicKeyAndChallenge": "string",
  "virtualDeviceId": "string"
}
```

Result message for VerifiedAccess.VerifyChallengeResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|string|false|none|Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers|
|devicePermanentId|string|false|none|Device permanent id is returned in this field (for the machine response only).|
|deviceSignal|string|false|none|Device signal in json string representation.|
|keyTrustLevel|string|false|none|Device attested key trust level.|
|signedPublicKeyAndChallenge|string|false|none|Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)|
|virtualDeviceId|string|false|none|Virtual device id of the device. The definition of virtual device id is platform-specific.|

#### Enumerated Values

|Property|Value|
|---|---|
|keyTrustLevel|KEY_TRUST_LEVEL_UNSPECIFIED|
|keyTrustLevel|CHROME_OS_VERIFIED_MODE|
|keyTrustLevel|CHROME_OS_DEVELOPER_MODE|
|keyTrustLevel|CHROME_BROWSER_HW_KEY|
|keyTrustLevel|CHROME_BROWSER_OS_KEY|
