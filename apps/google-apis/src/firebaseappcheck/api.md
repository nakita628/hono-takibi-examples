<h1 id="firebase-app-check-api">Firebase App Check API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Firebase App Check works alongside other Firebase services to help protect your backend resources from abuse, such as billing fraud or phishing.

Base URLs:

* <a href="https://firebaseappcheck.googleapis.com/">https://firebaseappcheck.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/app-check">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|

<h1 id="firebase-app-check-api-projects">projects</h1>

## firebaseappcheck.projects.apps.exchangeAppAttestAssertion

<a id="opIdfirebaseappcheck.projects.apps.exchangeAppAttestAssertion"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeAppAttestAssertion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "artifact": "string",
    "assertion": "string",
    "challenge": "string"
  }'
```

`POST /v1/{app}:exchangeAppAttestAssertion`

Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

> Body parameter

```json
{
  "artifact": "string",
  "assertion": "string",
  "challenge": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangeappattestassertion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest](#schemagooglefirebaseappcheckv1exchangeappattestassertionrequest)|false|none|
|» artifact|body|string(byte)|false|Required. The artifact returned by a previous call to ExchangeAppAttestAttestation.|
|» assertion|body|string(byte)|false|Required. The CBOR-encoded assertion returned by the client-side App Attest API.|
|» challenge|body|string(byte)|false|Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangeappattestassertion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangeAppAttestAttestation

<a id="opIdfirebaseappcheck.projects.apps.exchangeAppAttestAttestation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeAppAttestAttestation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attestationStatement": "string",
    "challenge": "string",
    "keyId": "string"
  }'
```

`POST /v1/{app}:exchangeAppAttestAttestation`

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

> Body parameter

```json
{
  "attestationStatement": "string",
  "challenge": "string",
  "keyId": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangeappattestattestation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest](#schemagooglefirebaseappcheckv1exchangeappattestattestationrequest)|false|none|
|» attestationStatement|body|string(byte)|false|Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response.|
|» challenge|body|string(byte)|false|Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.|
|» keyId|body|string(byte)|false|Required. The key ID generated by App Attest for the client app.|

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
  "appCheckToken": {
    "token": "string",
    "ttl": "string"
  },
  "artifact": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangeappattestattestation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse](#schemagooglefirebaseappcheckv1exchangeappattestattestationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangeCustomToken

<a id="opIdfirebaseappcheck.projects.apps.exchangeCustomToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeCustomToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customToken": "string"
  }'
```

`POST /v1/{app}:exchangeCustomToken`

Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

> Body parameter

```json
{
  "customToken": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangecustomtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest](#schemagooglefirebaseappcheckv1exchangecustomtokenrequest)|false|none|
|» customToken|body|string|false|Required. A custom token signed using your project's Admin SDK service account credentials.|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangecustomtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangeDebugToken

<a id="opIdfirebaseappcheck.projects.apps.exchangeDebugToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeDebugToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "debugToken": "string"
  }'
```

`POST /v1/{app}:exchangeDebugToken`

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

> Body parameter

```json
{
  "debugToken": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangedebugtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest](#schemagooglefirebaseappcheckv1exchangedebugtokenrequest)|false|none|
|» debugToken|body|string|false|Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken.|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangedebugtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangeDeviceCheckToken

<a id="opIdfirebaseappcheck.projects.apps.exchangeDeviceCheckToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeDeviceCheckToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deviceToken": "string"
  }'
```

`POST /v1/{app}:exchangeDeviceCheckToken`

Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

> Body parameter

```json
{
  "deviceToken": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangedevicechecktoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest](#schemagooglefirebaseappcheckv1exchangedevicechecktokenrequest)|false|none|
|» deviceToken|body|string|false|Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object.|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangedevicechecktoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangePlayIntegrityToken

<a id="opIdfirebaseappcheck.projects.apps.exchangePlayIntegrityToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangePlayIntegrityToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "playIntegrityToken": "string"
  }'
```

`POST /v1/{app}:exchangePlayIntegrityToken`

Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

> Body parameter

```json
{
  "playIntegrityToken": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangeplayintegritytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest](#schemagooglefirebaseappcheckv1exchangeplayintegritytokenrequest)|false|none|
|» playIntegrityToken|body|string|false|Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app.|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangeplayintegritytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangeRecaptchaEnterpriseToken

<a id="opIdfirebaseappcheck.projects.apps.exchangeRecaptchaEnterpriseToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeRecaptchaEnterpriseToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recaptchaEnterpriseToken": "string"
  }'
```

`POST /v1/{app}:exchangeRecaptchaEnterpriseToken`

Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.

> Body parameter

```json
{
  "recaptchaEnterpriseToken": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangerecaptchaenterprisetoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest](#schemagooglefirebaseappcheckv1exchangerecaptchaenterprisetokenrequest)|false|none|
|» recaptchaEnterpriseToken|body|string|false|Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages).|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangerecaptchaenterprisetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangeRecaptchaV3Token

<a id="opIdfirebaseappcheck.projects.apps.exchangeRecaptchaV3Token"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeRecaptchaV3Token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recaptchaV3Token": "string"
  }'
```

`POST /v1/{app}:exchangeRecaptchaV3Token`

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

> Body parameter

```json
{
  "recaptchaV3Token": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangerecaptchav3token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest](#schemagooglefirebaseappcheckv1exchangerecaptchav3tokenrequest)|false|none|
|» recaptchaV3Token|body|string|false|Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3).|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangerecaptchav3token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.exchangeSafetyNetToken

<a id="opIdfirebaseappcheck.projects.apps.exchangeSafetyNetToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:exchangeSafetyNetToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "safetyNetToken": "string"
  }'
```

`POST /v1/{app}:exchangeSafetyNetToken`

Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

> Body parameter

```json
{
  "safetyNetToken": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangesafetynettoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest](#schemagooglefirebaseappcheckv1exchangesafetynettokenrequest)|false|none|
|» safetyNetToken|body|string|false|Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app.|

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
  "token": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsexchangesafetynettoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.generateAppAttestChallenge

<a id="opIdfirebaseappcheck.projects.apps.generateAppAttestChallenge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:generateAppAttestChallenge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{app}:generateAppAttestChallenge`

Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

> Body parameter

```json
{}
```

<h3 id="firebaseappcheckprojectsappsgenerateappattestchallenge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest](#schemagooglefirebaseappcheckv1generateappattestchallengerequest)|false|none|

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
  "challenge": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsgenerateappattestchallenge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse](#schemagooglefirebaseappcheckv1generateappattestchallengeresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.generatePlayIntegrityChallenge

<a id="opIdfirebaseappcheck.projects.apps.generatePlayIntegrityChallenge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:generatePlayIntegrityChallenge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{app}:generatePlayIntegrityChallenge`

Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

> Body parameter

```json
{}
```

<h3 id="firebaseappcheckprojectsappsgenerateplayintegritychallenge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.|
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
|body|body|[GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest](#schemagooglefirebaseappcheckv1generateplayintegritychallengerequest)|false|none|

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
  "challenge": "string",
  "ttl": "string"
}
```

<h3 id="firebaseappcheckprojectsappsgenerateplayintegritychallenge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse](#schemagooglefirebaseappcheckv1generateplayintegritychallengeresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.services.get

<a id="opIdfirebaseappcheck.projects.services.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the Service configuration for the specified service name.

<h3 id="firebaseappcheckprojectsservicesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)|
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
  "enforcementMode": "OFF",
  "name": "string"
}
```

<h3 id="firebaseappcheckprojectsservicesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1Service](#schemagooglefirebaseappcheckv1service)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.debugTokens.delete

<a id="opIdfirebaseappcheck.projects.apps.debugTokens.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.

<h3 id="firebaseappcheckprojectsappsdebugtokensdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```|
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
{}
```

<h3 id="firebaseappcheckprojectsappsdebugtokensdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.services.patch

<a id="opIdfirebaseappcheck.projects.services.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enforcementMode": "OFF",
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Updates the specified Service configuration.

> Body parameter

```json
{
  "enforcementMode": "OFF",
  "name": "string"
}
```

<h3 id="firebaseappcheckprojectsservicespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)|
|updateMask|query|string|false|Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.|
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
|body|body|[GoogleFirebaseAppcheckV1Service](#schemagooglefirebaseappcheckv1service)|false|none|
|» enforcementMode|body|string|false|Required. The App Check enforcement mode for this service.|
|» name|body|string|false|Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» enforcementMode|OFF|
|» enforcementMode|UNENFORCED|
|» enforcementMode|ENFORCED|

> Example responses

> 200 Response

```json
{
  "enforcementMode": "OFF",
  "name": "string"
}
```

<h3 id="firebaseappcheckprojectsservicespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1Service](#schemagooglefirebaseappcheckv1service)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.appAttestConfig.batchGet

<a id="opIdfirebaseappcheck.projects.apps.appAttestConfig.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps/-/appAttestConfig:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apps/-/appAttestConfig:batchGet`

Atomically gets the AppAttestConfigs for the specified list of apps.

<h3 id="firebaseappcheckprojectsappsappattestconfigbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.|
|names|query|[string]|false|Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.|
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
  "configs": [
    {
      "name": "string",
      "tokenTtl": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsappsappattestconfigbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse](#schemagooglefirebaseappcheckv1batchgetappattestconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.deviceCheckConfig.batchGet

<a id="opIdfirebaseappcheck.projects.apps.deviceCheckConfig.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps/-/deviceCheckConfig:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apps/-/deviceCheckConfig:batchGet`

Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

<h3 id="firebaseappcheckprojectsappsdevicecheckconfigbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.|
|names|query|[string]|false|Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.|
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
  "configs": [
    {
      "keyId": "string",
      "name": "string",
      "privateKey": "string",
      "privateKeySet": true,
      "tokenTtl": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsappsdevicecheckconfigbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse](#schemagooglefirebaseappcheckv1batchgetdevicecheckconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.playIntegrityConfig.batchGet

<a id="opIdfirebaseappcheck.projects.apps.playIntegrityConfig.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps/-/playIntegrityConfig:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apps/-/playIntegrityConfig:batchGet`

Atomically gets the PlayIntegrityConfigs for the specified list of apps.

<h3 id="firebaseappcheckprojectsappsplayintegrityconfigbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.|
|names|query|[string]|false|Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.|
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
  "configs": [
    {
      "name": "string",
      "tokenTtl": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsappsplayintegrityconfigbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse](#schemagooglefirebaseappcheckv1batchgetplayintegrityconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.recaptchaEnterpriseConfig.batchGet

<a id="opIdfirebaseappcheck.projects.apps.recaptchaEnterpriseConfig.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps/-/recaptchaEnterpriseConfig:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet`

Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.

<h3 id="firebaseappcheckprojectsappsrecaptchaenterpriseconfigbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.|
|names|query|[string]|false|Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.|
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
  "configs": [
    {
      "name": "string",
      "siteKey": "string",
      "tokenTtl": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsappsrecaptchaenterpriseconfigbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse](#schemagooglefirebaseappcheckv1batchgetrecaptchaenterpriseconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.recaptchaV3Config.batchGet

<a id="opIdfirebaseappcheck.projects.apps.recaptchaV3Config.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps/-/recaptchaV3Config:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apps/-/recaptchaV3Config:batchGet`

Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

<h3 id="firebaseappcheckprojectsappsrecaptchav3configbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.|
|names|query|[string]|false|Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.|
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
  "configs": [
    {
      "name": "string",
      "siteSecret": "string",
      "siteSecretSet": true,
      "tokenTtl": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsappsrecaptchav3configbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse](#schemagooglefirebaseappcheckv1batchgetrecaptchav3configsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.safetyNetConfig.batchGet

<a id="opIdfirebaseappcheck.projects.apps.safetyNetConfig.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps/-/safetyNetConfig:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apps/-/safetyNetConfig:batchGet`

Atomically gets the SafetyNetConfigs for the specified list of apps.

<h3 id="firebaseappcheckprojectsappssafetynetconfigbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.|
|names|query|[string]|false|Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.|
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
  "configs": [
    {
      "name": "string",
      "tokenTtl": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsappssafetynetconfigbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse](#schemagooglefirebaseappcheckv1batchgetsafetynetconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.debugTokens.list

<a id="opIdfirebaseappcheck.projects.apps.debugTokens.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/debugTokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/debugTokens`

Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.

<h3 id="firebaseappcheckprojectsappsdebugtokenslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ```|
|pageSize|query|integer|false|The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.|
|pageToken|query|string|false|Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.|
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
  "debugTokens": [
    {
      "displayName": "string",
      "name": "string",
      "token": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseappcheckprojectsappsdebugtokenslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1ListDebugTokensResponse](#schemagooglefirebaseappcheckv1listdebugtokensresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.apps.debugTokens.create

<a id="opIdfirebaseappcheck.projects.apps.debugTokens.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/debugTokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "token": "string"
  }'
```

`POST /v1/{parent}/debugTokens`

Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "token": "string"
}
```

<h3 id="firebaseappcheckprojectsappsdebugtokenscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ```|
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
|body|body|[GoogleFirebaseAppcheckV1DebugToken](#schemagooglefirebaseappcheckv1debugtoken)|false|none|
|» displayName|body|string|false|Required. A human readable display name used to identify this debug token.|
|» name|body|string|false|Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```|
|» token|body|string|false|Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response.|

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
  "displayName": "string",
  "name": "string",
  "token": "string"
}
```

<h3 id="firebaseappcheckprojectsappsdebugtokenscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1DebugToken](#schemagooglefirebaseappcheckv1debugtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.services.list

<a id="opIdfirebaseappcheck.projects.services.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/services`

Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

<h3 id="firebaseappcheckprojectsserviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ```|
|pageSize|query|integer|false|The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.|
|pageToken|query|string|false|Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.|
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
  "nextPageToken": "string",
  "services": [
    {
      "enforcementMode": "OFF",
      "name": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsserviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1ListServicesResponse](#schemagooglefirebaseappcheckv1listservicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaseappcheck.projects.services.batchUpdate

<a id="opIdfirebaseappcheck.projects.services.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/services:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "service": {
          "enforcementMode": "OFF",
          "name": "string"
        },
        "updateMask": "string"
      }
    ],
    "updateMask": "string"
  }'
```

`POST /v1/{parent}/services:batchUpdate`

Atomically updates the specified Service configurations.

> Body parameter

```json
{
  "requests": [
    {
      "service": {
        "enforcementMode": "OFF",
        "name": "string"
      },
      "updateMask": "string"
    }
  ],
  "updateMask": "string"
}
```

<h3 id="firebaseappcheckprojectsservicesbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.|
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
|body|body|[GoogleFirebaseAppcheckV1BatchUpdateServicesRequest](#schemagooglefirebaseappcheckv1batchupdateservicesrequest)|false|none|
|» requests|body|[[GoogleFirebaseAppcheckV1UpdateServiceRequest](#schemagooglefirebaseappcheckv1updateservicerequest)]|false|Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch.|
|» updateMask|body|string(google-fieldmask)|false|Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed.|

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
  "services": [
    {
      "enforcementMode": "OFF",
      "name": "string"
    }
  ]
}
```

<h3 id="firebaseappcheckprojectsservicesbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppcheckV1BatchUpdateServicesResponse](#schemagooglefirebaseappcheckv1batchupdateservicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

# Schemas

<h2 id="tocS_GoogleFirebaseAppcheckV1AppAttestConfig">GoogleFirebaseAppcheckV1AppAttestConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1appattestconfig"></a>
<a id="schema_GoogleFirebaseAppcheckV1AppAttestConfig"></a>
<a id="tocSgooglefirebaseappcheckv1appattestconfig"></a>
<a id="tocsgooglefirebaseappcheckv1appattestconfig"></a>

```json
{
  "name": "string",
  "tokenTtl": "string"
}
```

An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ```|
|tokenTtl|string(google-duration)|false|none|Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.|

<h2 id="tocS_GoogleFirebaseAppcheckV1AppCheckToken">GoogleFirebaseAppcheckV1AppCheckToken</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1appchecktoken"></a>
<a id="schema_GoogleFirebaseAppcheckV1AppCheckToken"></a>
<a id="tocSgooglefirebaseappcheckv1appchecktoken"></a>
<a id="tocsgooglefirebaseappcheckv1appchecktoken"></a>

```json
{
  "token": "string",
  "ttl": "string"
}
```

Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|The App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. These tokens can also be [verified by your own custom backends](https://firebase.google.com/docs/app-check/custom-resource-backend) using the Firebase Admin SDK.|
|ttl|string(google-duration)|false|none|The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse">GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchgetappattestconfigsresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse"></a>
<a id="tocSgooglefirebaseappcheckv1batchgetappattestconfigsresponse"></a>
<a id="tocsgooglefirebaseappcheckv1batchgetappattestconfigsresponse"></a>

```json
{
  "configs": [
    {
      "name": "string",
      "tokenTtl": "string"
    }
  ]
}
```

Response message for the BatchGetAppAttestConfigs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configs|[[GoogleFirebaseAppcheckV1AppAttestConfig](#schemagooglefirebaseappcheckv1appattestconfig)]|false|none|AppAttestConfigs retrieved.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse">GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchgetdevicecheckconfigsresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse"></a>
<a id="tocSgooglefirebaseappcheckv1batchgetdevicecheckconfigsresponse"></a>
<a id="tocsgooglefirebaseappcheckv1batchgetdevicecheckconfigsresponse"></a>

```json
{
  "configs": [
    {
      "keyId": "string",
      "name": "string",
      "privateKey": "string",
      "privateKeySet": true,
      "tokenTtl": "string"
    }
  ]
}
```

Response message for the BatchGetDeviceCheckConfigs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configs|[[GoogleFirebaseAppcheckV1DeviceCheckConfig](#schemagooglefirebaseappcheckv1devicecheckconfig)]|false|none|DeviceCheckConfigs retrieved.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse">GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchgetplayintegrityconfigsresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse"></a>
<a id="tocSgooglefirebaseappcheckv1batchgetplayintegrityconfigsresponse"></a>
<a id="tocsgooglefirebaseappcheckv1batchgetplayintegrityconfigsresponse"></a>

```json
{
  "configs": [
    {
      "name": "string",
      "tokenTtl": "string"
    }
  ]
}
```

Response message for the BatchGetPlayIntegrityConfigs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configs|[[GoogleFirebaseAppcheckV1PlayIntegrityConfig](#schemagooglefirebaseappcheckv1playintegrityconfig)]|false|none|PlayIntegrityConfigs retrieved.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse">GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchgetrecaptchaenterpriseconfigsresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse"></a>
<a id="tocSgooglefirebaseappcheckv1batchgetrecaptchaenterpriseconfigsresponse"></a>
<a id="tocsgooglefirebaseappcheckv1batchgetrecaptchaenterpriseconfigsresponse"></a>

```json
{
  "configs": [
    {
      "name": "string",
      "siteKey": "string",
      "tokenTtl": "string"
    }
  ]
}
```

Response message for the BatchGetRecaptchaEnterpriseConfigs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configs|[[GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig](#schemagooglefirebaseappcheckv1recaptchaenterpriseconfig)]|false|none|RecaptchaEnterpriseConfigs retrieved.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse">GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchgetrecaptchav3configsresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse"></a>
<a id="tocSgooglefirebaseappcheckv1batchgetrecaptchav3configsresponse"></a>
<a id="tocsgooglefirebaseappcheckv1batchgetrecaptchav3configsresponse"></a>

```json
{
  "configs": [
    {
      "name": "string",
      "siteSecret": "string",
      "siteSecretSet": true,
      "tokenTtl": "string"
    }
  ]
}
```

Response message for the BatchGetRecaptchaV3Configs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configs|[[GoogleFirebaseAppcheckV1RecaptchaV3Config](#schemagooglefirebaseappcheckv1recaptchav3config)]|false|none|RecaptchaV3Configs retrieved.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse">GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchgetsafetynetconfigsresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse"></a>
<a id="tocSgooglefirebaseappcheckv1batchgetsafetynetconfigsresponse"></a>
<a id="tocsgooglefirebaseappcheckv1batchgetsafetynetconfigsresponse"></a>

```json
{
  "configs": [
    {
      "name": "string",
      "tokenTtl": "string"
    }
  ]
}
```

Response message for the BatchGetSafetyNetConfigs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configs|[[GoogleFirebaseAppcheckV1SafetyNetConfig](#schemagooglefirebaseappcheckv1safetynetconfig)]|false|none|SafetyNetConfigs retrieved.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchUpdateServicesRequest">GoogleFirebaseAppcheckV1BatchUpdateServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchupdateservicesrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchUpdateServicesRequest"></a>
<a id="tocSgooglefirebaseappcheckv1batchupdateservicesrequest"></a>
<a id="tocsgooglefirebaseappcheckv1batchupdateservicesrequest"></a>

```json
{
  "requests": [
    {
      "service": {
        "enforcementMode": "OFF",
        "name": "string"
      },
      "updateMask": "string"
    }
  ],
  "updateMask": "string"
}
```

Request message for the BatchUpdateServices method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[GoogleFirebaseAppcheckV1UpdateServiceRequest](#schemagooglefirebaseappcheckv1updateservicerequest)]|false|none|Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch.|
|updateMask|string(google-fieldmask)|false|none|Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed.|

<h2 id="tocS_GoogleFirebaseAppcheckV1BatchUpdateServicesResponse">GoogleFirebaseAppcheckV1BatchUpdateServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1batchupdateservicesresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1BatchUpdateServicesResponse"></a>
<a id="tocSgooglefirebaseappcheckv1batchupdateservicesresponse"></a>
<a id="tocsgooglefirebaseappcheckv1batchupdateservicesresponse"></a>

```json
{
  "services": [
    {
      "enforcementMode": "OFF",
      "name": "string"
    }
  ]
}
```

Response message for the BatchUpdateServices method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|[[GoogleFirebaseAppcheckV1Service](#schemagooglefirebaseappcheckv1service)]|false|none|Service objects after the updates have been applied.|

<h2 id="tocS_GoogleFirebaseAppcheckV1DebugToken">GoogleFirebaseAppcheckV1DebugToken</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1debugtoken"></a>
<a id="schema_GoogleFirebaseAppcheckV1DebugToken"></a>
<a id="tocSgooglefirebaseappcheckv1debugtoken"></a>
<a id="tocsgooglefirebaseappcheckv1debugtoken"></a>

```json
{
  "displayName": "string",
  "name": "string",
  "token": "string"
}
```

A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. A human readable display name used to identify this debug token.|
|name|string|false|none|Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```|
|token|string|false|none|Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response.|

<h2 id="tocS_GoogleFirebaseAppcheckV1DeviceCheckConfig">GoogleFirebaseAppcheckV1DeviceCheckConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1devicecheckconfig"></a>
<a id="schema_GoogleFirebaseAppcheckV1DeviceCheckConfig"></a>
<a id="tocSgooglefirebaseappcheckv1devicecheckconfig"></a>
<a id="tocsgooglefirebaseappcheckv1devicecheckconfig"></a>

```json
{
  "keyId": "string",
  "name": "string",
  "privateKey": "string",
  "privateKeySet": true,
  "tokenTtl": "string"
}
```

An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|string|false|none|Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.|
|name|string|false|none|Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ```|
|privateKey|string|false|none|Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response.|
|privateKeySet|boolean|false|read-only|Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set.|
|tokenTtl|string(google-duration)|false|none|Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest">GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangeappattestassertionrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangeappattestassertionrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangeappattestassertionrequest"></a>

```json
{
  "artifact": "string",
  "assertion": "string",
  "challenge": "string"
}
```

Request message for the ExchangeAppAttestAssertion method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifact|string(byte)|false|none|Required. The artifact returned by a previous call to ExchangeAppAttestAttestation.|
|assertion|string(byte)|false|none|Required. The CBOR-encoded assertion returned by the client-side App Attest API.|
|challenge|string(byte)|false|none|Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest">GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangeappattestattestationrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangeappattestattestationrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangeappattestattestationrequest"></a>

```json
{
  "attestationStatement": "string",
  "challenge": "string",
  "keyId": "string"
}
```

Request message for the ExchangeAppAttestAttestation method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestationStatement|string(byte)|false|none|Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response.|
|challenge|string(byte)|false|none|Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.|
|keyId|string(byte)|false|none|Required. The key ID generated by App Attest for the client app.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse">GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangeappattestattestationresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse"></a>
<a id="tocSgooglefirebaseappcheckv1exchangeappattestattestationresponse"></a>
<a id="tocsgooglefirebaseappcheckv1exchangeappattestattestationresponse"></a>

```json
{
  "appCheckToken": {
    "token": "string",
    "ttl": "string"
  },
  "artifact": "string"
}
```

Response message for the ExchangeAppAttestAttestation method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appCheckToken|[GoogleFirebaseAppcheckV1AppCheckToken](#schemagooglefirebaseappcheckv1appchecktoken)|false|none|Encapsulates an App Check token.|
|artifact|string(byte)|false|none|An artifact that can be used in future calls to ExchangeAppAttestAssertion.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest">GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangecustomtokenrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangecustomtokenrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangecustomtokenrequest"></a>

```json
{
  "customToken": "string"
}
```

Request message for the ExchangeCustomToken method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customToken|string|false|none|Required. A custom token signed using your project's Admin SDK service account credentials.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest">GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangedebugtokenrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangedebugtokenrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangedebugtokenrequest"></a>

```json
{
  "debugToken": "string"
}
```

Request message for the ExchangeDebugToken method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debugToken|string|false|none|Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest">GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangedevicechecktokenrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangedevicechecktokenrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangedevicechecktokenrequest"></a>

```json
{
  "deviceToken": "string"
}
```

Request message for the ExchangeDeviceCheckToken method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceToken|string|false|none|Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest">GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangeplayintegritytokenrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangeplayintegritytokenrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangeplayintegritytokenrequest"></a>

```json
{
  "playIntegrityToken": "string"
}
```

Request message for the ExchangePlayIntegrityToken method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playIntegrityToken|string|false|none|Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest">GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangerecaptchaenterprisetokenrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangerecaptchaenterprisetokenrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangerecaptchaenterprisetokenrequest"></a>

```json
{
  "recaptchaEnterpriseToken": "string"
}
```

Request message for the ExchangeRecaptchaEnterpriseToken method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recaptchaEnterpriseToken|string|false|none|Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages).|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest">GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangerecaptchav3tokenrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangerecaptchav3tokenrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangerecaptchav3tokenrequest"></a>

```json
{
  "recaptchaV3Token": "string"
}
```

Request message for the ExchangeRecaptchaV3Token method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recaptchaV3Token|string|false|none|Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3).|

<h2 id="tocS_GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest">GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1exchangesafetynettokenrequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest"></a>
<a id="tocSgooglefirebaseappcheckv1exchangesafetynettokenrequest"></a>
<a id="tocsgooglefirebaseappcheckv1exchangesafetynettokenrequest"></a>

```json
{
  "safetyNetToken": "string"
}
```

Request message for the ExchangeSafetyNetToken method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|safetyNetToken|string|false|none|Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app.|

<h2 id="tocS_GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest">GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1generateappattestchallengerequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest"></a>
<a id="tocSgooglefirebaseappcheckv1generateappattestchallengerequest"></a>
<a id="tocsgooglefirebaseappcheckv1generateappattestchallengerequest"></a>

```json
{}
```

Request message for the GenerateAppAttestChallenge method.

<h2 id="tocS_GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse">GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1generateappattestchallengeresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse"></a>
<a id="tocSgooglefirebaseappcheckv1generateappattestchallengeresponse"></a>
<a id="tocsgooglefirebaseappcheckv1generateappattestchallengeresponse"></a>

```json
{
  "challenge": "string",
  "ttl": "string"
}
```

Response message for the GenerateAppAttestChallenge method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string(byte)|false|none|A one-time use challenge for the client to pass to the App Attest API.|
|ttl|string(google-duration)|false|none|The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.|

<h2 id="tocS_GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest">GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1generateplayintegritychallengerequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest"></a>
<a id="tocSgooglefirebaseappcheckv1generateplayintegritychallengerequest"></a>
<a id="tocsgooglefirebaseappcheckv1generateplayintegritychallengerequest"></a>

```json
{}
```

Request message for the GeneratePlayIntegrityChallenge method.

<h2 id="tocS_GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse">GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1generateplayintegritychallengeresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse"></a>
<a id="tocSgooglefirebaseappcheckv1generateplayintegritychallengeresponse"></a>
<a id="tocsgooglefirebaseappcheckv1generateplayintegritychallengeresponse"></a>

```json
{
  "challenge": "string",
  "ttl": "string"
}
```

Response message for the GeneratePlayIntegrityChallenge method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string|false|none|A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API.|
|ttl|string(google-duration)|false|none|The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ListDebugTokensResponse">GoogleFirebaseAppcheckV1ListDebugTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1listdebugtokensresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1ListDebugTokensResponse"></a>
<a id="tocSgooglefirebaseappcheckv1listdebugtokensresponse"></a>
<a id="tocsgooglefirebaseappcheckv1listdebugtokensresponse"></a>

```json
{
  "debugTokens": [
    {
      "displayName": "string",
      "name": "string",
      "token": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for the ListDebugTokens method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debugTokens|[[GoogleFirebaseAppcheckV1DebugToken](#schemagooglefirebaseappcheckv1debugtoken)]|false|none|The DebugTokens retrieved.|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted.|

<h2 id="tocS_GoogleFirebaseAppcheckV1ListServicesResponse">GoogleFirebaseAppcheckV1ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1listservicesresponse"></a>
<a id="schema_GoogleFirebaseAppcheckV1ListServicesResponse"></a>
<a id="tocSgooglefirebaseappcheckv1listservicesresponse"></a>
<a id="tocsgooglefirebaseappcheckv1listservicesresponse"></a>

```json
{
  "nextPageToken": "string",
  "services": [
    {
      "enforcementMode": "OFF",
      "name": "string"
    }
  ]
}
```

Response message for the ListServices method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted.|
|services|[[GoogleFirebaseAppcheckV1Service](#schemagooglefirebaseappcheckv1service)]|false|none|The Services retrieved.|

<h2 id="tocS_GoogleFirebaseAppcheckV1PlayIntegrityConfig">GoogleFirebaseAppcheckV1PlayIntegrityConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1playintegrityconfig"></a>
<a id="schema_GoogleFirebaseAppcheckV1PlayIntegrityConfig"></a>
<a id="tocSgooglefirebaseappcheckv1playintegrityconfig"></a>
<a id="tocsgooglefirebaseappcheckv1playintegrityconfig"></a>

```json
{
  "name": "string",
  "tokenTtl": "string"
}
```

An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ```|
|tokenTtl|string(google-duration)|false|none|Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.|

<h2 id="tocS_GoogleFirebaseAppcheckV1PublicJwk">GoogleFirebaseAppcheckV1PublicJwk</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1publicjwk"></a>
<a id="schema_GoogleFirebaseAppcheckV1PublicJwk"></a>
<a id="tocSgooglefirebaseappcheckv1publicjwk"></a>
<a id="tocsgooglefirebaseappcheckv1publicjwk"></a>

```json
{
  "alg": "string",
  "e": "string",
  "kid": "string",
  "kty": "string",
  "n": "string",
  "use": "string"
}
```

A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|false|none|See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4).|
|e|string|false|none|See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2).|
|kid|string|false|none|See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5).|
|kty|string|false|none|See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1).|
|n|string|false|none|See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1).|
|use|string|false|none|See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2).|

<h2 id="tocS_GoogleFirebaseAppcheckV1PublicJwkSet">GoogleFirebaseAppcheckV1PublicJwkSet</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1publicjwkset"></a>
<a id="schema_GoogleFirebaseAppcheckV1PublicJwkSet"></a>
<a id="tocSgooglefirebaseappcheckv1publicjwkset"></a>
<a id="tocsgooglefirebaseappcheckv1publicjwkset"></a>

```json
{
  "keys": [
    {
      "alg": "string",
      "e": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "use": "string"
    }
  ]
}
```

The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[GoogleFirebaseAppcheckV1PublicJwk](#schemagooglefirebaseappcheckv1publicjwk)]|false|none|The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5).|

<h2 id="tocS_GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig">GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1recaptchaenterpriseconfig"></a>
<a id="schema_GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig"></a>
<a id="tocSgooglefirebaseappcheckv1recaptchaenterpriseconfig"></a>
<a id="tocsgooglefirebaseappcheckv1recaptchaenterpriseconfig"></a>

```json
{
  "name": "string",
  "siteKey": "string",
  "tokenTtl": "string"
}
```

An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ```|
|siteKey|string|false|none|The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.|
|tokenTtl|string(google-duration)|false|none|Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.|

<h2 id="tocS_GoogleFirebaseAppcheckV1RecaptchaV3Config">GoogleFirebaseAppcheckV1RecaptchaV3Config</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1recaptchav3config"></a>
<a id="schema_GoogleFirebaseAppcheckV1RecaptchaV3Config"></a>
<a id="tocSgooglefirebaseappcheckv1recaptchav3config"></a>
<a id="tocsgooglefirebaseappcheckv1recaptchav3config"></a>

```json
{
  "name": "string",
  "siteSecret": "string",
  "siteSecretSet": true,
  "tokenTtl": "string"
}
```

An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ```|
|siteSecret|string|false|none|Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response.|
|siteSecretSet|boolean|false|read-only|Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set.|
|tokenTtl|string(google-duration)|false|none|Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive.|

<h2 id="tocS_GoogleFirebaseAppcheckV1SafetyNetConfig">GoogleFirebaseAppcheckV1SafetyNetConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1safetynetconfig"></a>
<a id="schema_GoogleFirebaseAppcheckV1SafetyNetConfig"></a>
<a id="tocSgooglefirebaseappcheckv1safetynetconfig"></a>
<a id="tocsgooglefirebaseappcheckv1safetynetconfig"></a>

```json
{
  "name": "string",
  "tokenTtl": "string"
}
```

An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.androidApps.sha/create).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ```|
|tokenTtl|string(google-duration)|false|none|Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.|

<h2 id="tocS_GoogleFirebaseAppcheckV1Service">GoogleFirebaseAppcheckV1Service</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1service"></a>
<a id="schema_GoogleFirebaseAppcheckV1Service"></a>
<a id="tocSgooglefirebaseappcheckv1service"></a>
<a id="tocsgooglefirebaseappcheckv1service"></a>

```json
{
  "enforcementMode": "OFF",
  "name": "string"
}
```

The enforcement configuration for a Firebase service supported by App Check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enforcementMode|string|false|none|Required. The App Check enforcement mode for this service.|
|name|string|false|none|Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)|

#### Enumerated Values

|Property|Value|
|---|---|
|enforcementMode|OFF|
|enforcementMode|UNENFORCED|
|enforcementMode|ENFORCED|

<h2 id="tocS_GoogleFirebaseAppcheckV1UpdateServiceRequest">GoogleFirebaseAppcheckV1UpdateServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappcheckv1updateservicerequest"></a>
<a id="schema_GoogleFirebaseAppcheckV1UpdateServiceRequest"></a>
<a id="tocSgooglefirebaseappcheckv1updateservicerequest"></a>
<a id="tocsgooglefirebaseappcheckv1updateservicerequest"></a>

```json
{
  "service": {
    "enforcementMode": "OFF",
    "name": "string"
  },
  "updateMask": "string"
}
```

Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|[GoogleFirebaseAppcheckV1Service](#schemagooglefirebaseappcheckv1service)|false|none|Required. The Service to update. The Service's `name` field is used to identify the Service to be updated, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)|
|updateMask|string(google-fieldmask)|false|none|Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
