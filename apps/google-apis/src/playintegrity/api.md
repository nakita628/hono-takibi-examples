<h1 id="google-play-integrity-api">Google Play Integrity API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Play Integrity API helps you check that you're interacting with your genuine app on a genuine Android device powered by Google Play services. The Play Integrity API has replaced SafetyNet Attestation and Android Device Verification.

Base URLs:

* <a href="https://playintegrity.googleapis.com/">https://playintegrity.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developer.android.com/google/play/integrity">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/playintegrity|Private Service: https://www.googleapis.com/auth/playintegrity|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/playintegrity|Private Service: https://www.googleapis.com/auth/playintegrity|

<h1 id="google-play-integrity-api-v1">v1</h1>

## playintegrity.decodeIntegrityToken

<a id="opIdplayintegrity.decodeIntegrityToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:decodeIntegrityToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "integrityToken": "string"
  }'
```

`POST /v1/{packageName}:decodeIntegrityToken`

Decodes the integrity token and returns the token payload.

> Body parameter

```json
{
  "integrityToken": "string"
}
```

<h3 id="playintegritydecodeintegritytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true| Package name of the app the attached integrity token belongs to.|
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
|body|body|[DecodeIntegrityTokenRequest](#schemadecodeintegritytokenrequest)|false|none|
|» integrityToken|body|string|false|Encoded integrity token.|

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
  "tokenPayloadExternal": {
    "accountDetails": {
      "accountActivity": {
        "activityLevel": "ACTIVITY_LEVEL_UNSPECIFIED"
      },
      "appLicensingVerdict": "UNKNOWN"
    },
    "appIntegrity": {
      "appRecognitionVerdict": "UNKNOWN",
      "certificateSha256Digest": [
        "string"
      ],
      "packageName": "string",
      "versionCode": "string"
    },
    "deviceIntegrity": {
      "deviceRecognitionVerdict": [
        "UNKNOWN"
      ]
    },
    "requestDetails": {
      "nonce": "string",
      "requestHash": "string",
      "requestPackageName": "string",
      "timestampMillis": "string"
    },
    "testingDetails": {
      "isTestingResponse": true
    }
  }
}
```

<h3 id="playintegritydecodeintegritytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DecodeIntegrityTokenResponse](#schemadecodeintegritytokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/playintegrity ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/playintegrity )
</aside>

# Schemas

<h2 id="tocS_AccountActivity">AccountActivity</h2>
<!-- backwards compatibility -->
<a id="schemaaccountactivity"></a>
<a id="schema_AccountActivity"></a>
<a id="tocSaccountactivity"></a>
<a id="tocsaccountactivity"></a>

```json
{
  "activityLevel": "ACTIVITY_LEVEL_UNSPECIFIED"
}
```

Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityLevel|string|false|none|Required. Indicates the activity level of the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|activityLevel|ACTIVITY_LEVEL_UNSPECIFIED|
|activityLevel|UNEVALUATED|
|activityLevel|UNUSUAL|
|activityLevel|UNKNOWN|
|activityLevel|TYPICAL_BASIC|
|activityLevel|TYPICAL_STRONG|

<h2 id="tocS_AccountDetails">AccountDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdetails"></a>
<a id="schema_AccountDetails"></a>
<a id="tocSaccountdetails"></a>
<a id="tocsaccountdetails"></a>

```json
{
  "accountActivity": {
    "activityLevel": "ACTIVITY_LEVEL_UNSPECIFIED"
  },
  "appLicensingVerdict": "UNKNOWN"
}
```

Contains the account information such as the licensing status for the user in the scope.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountActivity|[AccountActivity](#schemaaccountactivity)|false|none|Details about the account activity for the user in the scope.|
|appLicensingVerdict|string|false|none|Required. Details about the licensing status of the user for the app in the scope.|

#### Enumerated Values

|Property|Value|
|---|---|
|appLicensingVerdict|UNKNOWN|
|appLicensingVerdict|LICENSED|
|appLicensingVerdict|UNLICENSED|
|appLicensingVerdict|UNEVALUATED|

<h2 id="tocS_AppIntegrity">AppIntegrity</h2>
<!-- backwards compatibility -->
<a id="schemaappintegrity"></a>
<a id="schema_AppIntegrity"></a>
<a id="tocSappintegrity"></a>
<a id="tocsappintegrity"></a>

```json
{
  "appRecognitionVerdict": "UNKNOWN",
  "certificateSha256Digest": [
    "string"
  ],
  "packageName": "string",
  "versionCode": "string"
}
```

Contains the application integrity information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appRecognitionVerdict|string|false|none|Required. Details about the app recognition verdict|
|certificateSha256Digest|[string]|false|none|The SHA256 hash of the requesting app's signing certificates (base64 web-safe encoded). Set iff app_recognition_verdict != UNEVALUATED.|
|packageName|string|false|none|Package name of the application under attestation. Set iff app_recognition_verdict != UNEVALUATED.|
|versionCode|string(int64)|false|none|Version code of the application. Set iff app_recognition_verdict != UNEVALUATED.|

#### Enumerated Values

|Property|Value|
|---|---|
|appRecognitionVerdict|UNKNOWN|
|appRecognitionVerdict|PLAY_RECOGNIZED|
|appRecognitionVerdict|UNRECOGNIZED_VERSION|
|appRecognitionVerdict|UNEVALUATED|

<h2 id="tocS_DecodeIntegrityTokenRequest">DecodeIntegrityTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemadecodeintegritytokenrequest"></a>
<a id="schema_DecodeIntegrityTokenRequest"></a>
<a id="tocSdecodeintegritytokenrequest"></a>
<a id="tocsdecodeintegritytokenrequest"></a>

```json
{
  "integrityToken": "string"
}
```

Request to decode the integrity token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrityToken|string|false|none|Encoded integrity token.|

<h2 id="tocS_DecodeIntegrityTokenResponse">DecodeIntegrityTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadecodeintegritytokenresponse"></a>
<a id="schema_DecodeIntegrityTokenResponse"></a>
<a id="tocSdecodeintegritytokenresponse"></a>
<a id="tocsdecodeintegritytokenresponse"></a>

```json
{
  "tokenPayloadExternal": {
    "accountDetails": {
      "accountActivity": {
        "activityLevel": "ACTIVITY_LEVEL_UNSPECIFIED"
      },
      "appLicensingVerdict": "UNKNOWN"
    },
    "appIntegrity": {
      "appRecognitionVerdict": "UNKNOWN",
      "certificateSha256Digest": [
        "string"
      ],
      "packageName": "string",
      "versionCode": "string"
    },
    "deviceIntegrity": {
      "deviceRecognitionVerdict": [
        "UNKNOWN"
      ]
    },
    "requestDetails": {
      "nonce": "string",
      "requestHash": "string",
      "requestPackageName": "string",
      "timestampMillis": "string"
    },
    "testingDetails": {
      "isTestingResponse": true
    }
  }
}
```

Response containing the decoded integrity payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenPayloadExternal|[TokenPayloadExternal](#schematokenpayloadexternal)|false|none|Plain token payload generated from the decoded integrity token.|

<h2 id="tocS_DeviceIntegrity">DeviceIntegrity</h2>
<!-- backwards compatibility -->
<a id="schemadeviceintegrity"></a>
<a id="schema_DeviceIntegrity"></a>
<a id="tocSdeviceintegrity"></a>
<a id="tocsdeviceintegrity"></a>

```json
{
  "deviceRecognitionVerdict": [
    "UNKNOWN"
  ]
}
```

Contains the device attestation information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceRecognitionVerdict|[string]|false|none|Details about the integrity of the device the app is running on|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceRecognitionVerdict|UNKNOWN|
|deviceRecognitionVerdict|MEETS_BASIC_INTEGRITY|
|deviceRecognitionVerdict|MEETS_DEVICE_INTEGRITY|
|deviceRecognitionVerdict|MEETS_STRONG_INTEGRITY|
|deviceRecognitionVerdict|MEETS_VIRTUAL_INTEGRITY|

<h2 id="tocS_RequestDetails">RequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemarequestdetails"></a>
<a id="schema_RequestDetails"></a>
<a id="tocSrequestdetails"></a>
<a id="tocsrequestdetails"></a>

```json
{
  "nonce": "string",
  "requestHash": "string",
  "requestPackageName": "string",
  "timestampMillis": "string"
}
```

Contains the integrity request information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonce|string|false|none|Nonce that was provided in the request (which is base64 web-safe no-wrap).|
|requestHash|string|false|none|Request hash that was provided in the request.|
|requestPackageName|string|false|none|Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity.|
|timestampMillis|string(int64)|false|none|Required. Timestamp, in milliseconds, of the integrity application request.|

<h2 id="tocS_TestingDetails">TestingDetails</h2>
<!-- backwards compatibility -->
<a id="schematestingdetails"></a>
<a id="schema_TestingDetails"></a>
<a id="tocStestingdetails"></a>
<a id="tocstestingdetails"></a>

```json
{
  "isTestingResponse": true
}
```

Contains additional information generated for testing responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isTestingResponse|boolean|false|none|Required. Indicates that the information contained in this payload is a testing response that is statically overridden for a tester.|

<h2 id="tocS_TokenPayloadExternal">TokenPayloadExternal</h2>
<!-- backwards compatibility -->
<a id="schematokenpayloadexternal"></a>
<a id="schema_TokenPayloadExternal"></a>
<a id="tocStokenpayloadexternal"></a>
<a id="tocstokenpayloadexternal"></a>

```json
{
  "accountDetails": {
    "accountActivity": {
      "activityLevel": "ACTIVITY_LEVEL_UNSPECIFIED"
    },
    "appLicensingVerdict": "UNKNOWN"
  },
  "appIntegrity": {
    "appRecognitionVerdict": "UNKNOWN",
    "certificateSha256Digest": [
      "string"
    ],
    "packageName": "string",
    "versionCode": "string"
  },
  "deviceIntegrity": {
    "deviceRecognitionVerdict": [
      "UNKNOWN"
    ]
  },
  "requestDetails": {
    "nonce": "string",
    "requestHash": "string",
    "requestPackageName": "string",
    "timestampMillis": "string"
  },
  "testingDetails": {
    "isTestingResponse": true
  }
}
```

Contains basic app information and integrity signals like device attestation and licensing details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountDetails|[AccountDetails](#schemaaccountdetails)|false|none|Required. Details about the Play Store account.|
|appIntegrity|[AppIntegrity](#schemaappintegrity)|false|none|Required. Details about the application integrity.|
|deviceIntegrity|[DeviceIntegrity](#schemadeviceintegrity)|false|none|Required. Details about the device integrity.|
|requestDetails|[RequestDetails](#schemarequestdetails)|false|none|Required. Details about the integrity request.|
|testingDetails|[TestingDetails](#schematestingdetails)|false|none|Indicates that this payload is generated for testing purposes and contains any additional data that is linked with testing status.|
