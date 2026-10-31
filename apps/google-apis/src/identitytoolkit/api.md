<h1 id="identity-toolkit-api">Identity Toolkit API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Identity Toolkit API lets you use open standards to verify a user's identity.

Base URLs:

* <a href="https://identitytoolkit.googleapis.com/">https://identitytoolkit.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/identity-platform">External documentation</a>

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

<h1 id="identity-toolkit-api-accounts">accounts</h1>

## identitytoolkit.accounts.mfaEnrollment.finalize

<a id="opIdidentitytoolkit.accounts.mfaEnrollment.finalize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/mfaEnrollment:finalize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "idToken": "string",
    "phoneVerificationInfo": {
      "androidVerificationProof": "string",
      "code": "string",
      "phoneNumber": "string",
      "sessionInfo": "string"
    },
    "tenantId": "string",
    "totpVerificationInfo": {
      "sessionInfo": "string",
      "verificationCode": "string"
    }
  }'
```

`POST /v2/accounts/mfaEnrollment:finalize`

Finishes enrolling a second factor for the user.

> Body parameter

```json
{
  "displayName": "string",
  "idToken": "string",
  "phoneVerificationInfo": {
    "androidVerificationProof": "string",
    "code": "string",
    "phoneNumber": "string",
    "sessionInfo": "string"
  },
  "tenantId": "string",
  "totpVerificationInfo": {
    "sessionInfo": "string",
    "verificationCode": "string"
  }
}
```

<h3 id="identitytoolkitaccountsmfaenrollmentfinalize-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest](#schemagooglecloudidentitytoolkitv2finalizemfaenrollmentrequest)|false|none|
|» displayName|body|string|false|Display name which is entered by users to distinguish between different second factors with same type or different type.|
|» idToken|body|string|false|Required. ID token.|
|» phoneVerificationInfo|body|[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2finalizemfaphonerequestinfo)|false|Verification info to authorize sending an SMS for phone verification.|
|» tenantId|body|string|false|The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.|
|» totpVerificationInfo|body|[GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo](#schemagooglecloudidentitytoolkitv2finalizemfatotpenrollmentrequestinfo)|false|Verification information for TOTP.|

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
  "idToken": "string",
  "phoneAuthInfo": {
    "androidVerificationProof": "string",
    "androidVerificationProofExpireTime": "string",
    "phoneNumber": "string"
  },
  "refreshToken": "string",
  "totpAuthInfo": {}
}
```

<h3 id="identitytoolkitaccountsmfaenrollmentfinalize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse](#schemagooglecloudidentitytoolkitv2finalizemfaenrollmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.mfaEnrollment.start

<a id="opIdidentitytoolkit.accounts.mfaEnrollment.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/mfaEnrollment:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "idToken": "string",
    "phoneEnrollmentInfo": {
      "autoRetrievalInfo": {
        "appSignatureHash": "string"
      },
      "iosReceipt": "string",
      "iosSecret": "string",
      "phoneNumber": "string",
      "playIntegrityToken": "string",
      "recaptchaToken": "string",
      "safetyNetToken": "string"
    },
    "tenantId": "string",
    "totpEnrollmentInfo": {}
  }'
```

`POST /v2/accounts/mfaEnrollment:start`

Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.

> Body parameter

```json
{
  "idToken": "string",
  "phoneEnrollmentInfo": {
    "autoRetrievalInfo": {
      "appSignatureHash": "string"
    },
    "iosReceipt": "string",
    "iosSecret": "string",
    "phoneNumber": "string",
    "playIntegrityToken": "string",
    "recaptchaToken": "string",
    "safetyNetToken": "string"
  },
  "tenantId": "string",
  "totpEnrollmentInfo": {}
}
```

<h3 id="identitytoolkitaccountsmfaenrollmentstart-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest](#schemagooglecloudidentitytoolkitv2startmfaenrollmentrequest)|false|none|
|» idToken|body|string|false|Required. User's ID token.|
|» phoneEnrollmentInfo|body|[GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2startmfaphonerequestinfo)|false|Verification info to authorize sending an SMS for phone verification.|
|» tenantId|body|string|false|The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.|
|» totpEnrollmentInfo|body|[GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo](#schemagooglecloudidentitytoolkitv2startmfatotpenrollmentrequestinfo)|false|Sign-in info specific to TOTP auth.|

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
  "phoneSessionInfo": {
    "sessionInfo": "string"
  },
  "totpSessionInfo": {
    "finalizeEnrollmentTime": "string",
    "hashingAlgorithm": "string",
    "periodSec": 0,
    "sessionInfo": "string",
    "sharedSecretKey": "string",
    "verificationCodeLength": 0
  }
}
```

<h3 id="identitytoolkitaccountsmfaenrollmentstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse](#schemagooglecloudidentitytoolkitv2startmfaenrollmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.mfaEnrollment.withdraw

<a id="opIdidentitytoolkit.accounts.mfaEnrollment.withdraw"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/mfaEnrollment:withdraw \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "idToken": "string",
    "mfaEnrollmentId": "string",
    "tenantId": "string"
  }'
```

`POST /v2/accounts/mfaEnrollment:withdraw`

Revokes one second factor from the enrolled second factors for an account.

> Body parameter

```json
{
  "idToken": "string",
  "mfaEnrollmentId": "string",
  "tenantId": "string"
}
```

<h3 id="identitytoolkitaccountsmfaenrollmentwithdraw-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2WithdrawMfaRequest](#schemagooglecloudidentitytoolkitv2withdrawmfarequest)|false|none|
|» idToken|body|string|false|Required. User's ID token.|
|» mfaEnrollmentId|body|string|false|Required. MFA enrollment id from a current MFA enrollment.|
|» tenantId|body|string|false|The ID of the Identity Platform tenant that the user unenrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.|

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
  "idToken": "string",
  "refreshToken": "string"
}
```

<h3 id="identitytoolkitaccountsmfaenrollmentwithdraw-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2WithdrawMfaResponse](#schemagooglecloudidentitytoolkitv2withdrawmfaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.mfaSignIn.finalize

<a id="opIdidentitytoolkit.accounts.mfaSignIn.finalize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/mfaSignIn:finalize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mfaEnrollmentId": "string",
    "mfaPendingCredential": "string",
    "phoneVerificationInfo": {
      "androidVerificationProof": "string",
      "code": "string",
      "phoneNumber": "string",
      "sessionInfo": "string"
    },
    "tenantId": "string",
    "totpVerificationInfo": {
      "verificationCode": "string"
    }
  }'
```

`POST /v2/accounts/mfaSignIn:finalize`

Verifies the MFA challenge and performs sign-in

> Body parameter

```json
{
  "mfaEnrollmentId": "string",
  "mfaPendingCredential": "string",
  "phoneVerificationInfo": {
    "androidVerificationProof": "string",
    "code": "string",
    "phoneNumber": "string",
    "sessionInfo": "string"
  },
  "tenantId": "string",
  "totpVerificationInfo": {
    "verificationCode": "string"
  }
}
```

<h3 id="identitytoolkitaccountsmfasigninfinalize-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest](#schemagooglecloudidentitytoolkitv2finalizemfasigninrequest)|false|none|
|» mfaEnrollmentId|body|string|false|The MFA enrollment ID from the user's list of current MFA enrollments.|
|» mfaPendingCredential|body|string|false|Required. Pending credential from first factor sign-in.|
|» phoneVerificationInfo|body|[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2finalizemfaphonerequestinfo)|false|Proof of completion of the SMS based MFA challenge.|
|» tenantId|body|string|false|The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|
|» totpVerificationInfo|body|[GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo](#schemagooglecloudidentitytoolkitv2mfatotpsigninrequestinfo)|false|Proof of completion of the TOTP based MFA challenge.|

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
  "idToken": "string",
  "phoneAuthInfo": {
    "androidVerificationProof": "string",
    "androidVerificationProofExpireTime": "string",
    "phoneNumber": "string"
  },
  "refreshToken": "string"
}
```

<h3 id="identitytoolkitaccountsmfasigninfinalize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse](#schemagooglecloudidentitytoolkitv2finalizemfasigninresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.mfaSignIn.start

<a id="opIdidentitytoolkit.accounts.mfaSignIn.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/mfaSignIn:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mfaEnrollmentId": "string",
    "mfaPendingCredential": "string",
    "phoneSignInInfo": {
      "autoRetrievalInfo": {
        "appSignatureHash": "string"
      },
      "iosReceipt": "string",
      "iosSecret": "string",
      "phoneNumber": "string",
      "playIntegrityToken": "string",
      "recaptchaToken": "string",
      "safetyNetToken": "string"
    },
    "tenantId": "string"
  }'
```

`POST /v2/accounts/mfaSignIn:start`

Sends the MFA challenge

> Body parameter

```json
{
  "mfaEnrollmentId": "string",
  "mfaPendingCredential": "string",
  "phoneSignInInfo": {
    "autoRetrievalInfo": {
      "appSignatureHash": "string"
    },
    "iosReceipt": "string",
    "iosSecret": "string",
    "phoneNumber": "string",
    "playIntegrityToken": "string",
    "recaptchaToken": "string",
    "safetyNetToken": "string"
  },
  "tenantId": "string"
}
```

<h3 id="identitytoolkitaccountsmfasigninstart-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2StartMfaSignInRequest](#schemagooglecloudidentitytoolkitv2startmfasigninrequest)|false|none|
|» mfaEnrollmentId|body|string|false|Required. MFA enrollment id from the user's list of current MFA enrollments.|
|» mfaPendingCredential|body|string|false|Required. Pending credential from first factor sign-in.|
|» phoneSignInInfo|body|[GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2startmfaphonerequestinfo)|false|Verification info to authorize sending an SMS for phone verification.|
|» tenantId|body|string|false|The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

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
  "phoneResponseInfo": {
    "sessionInfo": "string"
  }
}
```

<h3 id="identitytoolkitaccountsmfasigninstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2StartMfaSignInResponse](#schemagooglecloudidentitytoolkitv2startmfasigninresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.passkeyEnrollment.finalize

<a id="opIdidentitytoolkit.accounts.passkeyEnrollment.finalize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/passkeyEnrollment:finalize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authenticatorRegistrationResponse": {
      "authenticatorAttestationResponse": {
        "attestationObject": "string",
        "clientDataJson": "string",
        "transports": [
          "string"
        ]
      },
      "credentialId": "string",
      "credentialType": "string"
    },
    "idToken": "string",
    "tenantId": "string"
  }'
```

`POST /v2/accounts/passkeyEnrollment:finalize`

Finishes enrolling a passkey credential for the user.

> Body parameter

```json
{
  "authenticatorRegistrationResponse": {
    "authenticatorAttestationResponse": {
      "attestationObject": "string",
      "clientDataJson": "string",
      "transports": [
        "string"
      ]
    },
    "credentialId": "string",
    "credentialType": "string"
  },
  "idToken": "string",
  "tenantId": "string"
}
```

<h3 id="identitytoolkitaccountspasskeyenrollmentfinalize-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest](#schemagooglecloudidentitytoolkitv2finalizepasskeyenrollmentrequest)|false|none|
|» authenticatorRegistrationResponse|body|[GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse](#schemagooglecloudidentitytoolkitv2authenticatorregistrationresponse)|false|Optional. The registration object from the authenticator.|
|» idToken|body|string|false|Required. The GCIP ID token of the signed-in user|
|» tenantId|body|string|false|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

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
  "idToken": "string",
  "refreshToken": "string"
}
```

<h3 id="identitytoolkitaccountspasskeyenrollmentfinalize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse](#schemagooglecloudidentitytoolkitv2finalizepasskeyenrollmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.passkeyEnrollment.start

<a id="opIdidentitytoolkit.accounts.passkeyEnrollment.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/passkeyEnrollment:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "idToken": "string",
    "tenantId": "string"
  }'
```

`POST /v2/accounts/passkeyEnrollment:start`

Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.

> Body parameter

```json
{
  "idToken": "string",
  "tenantId": "string"
}
```

<h3 id="identitytoolkitaccountspasskeyenrollmentstart-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest](#schemagooglecloudidentitytoolkitv2startpasskeyenrollmentrequest)|false|none|
|» idToken|body|string|false|Required. The GCIP ID token of the signed-in user|
|» tenantId|body|string|false|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

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
  "credentialCreationOptions": {
    "authenticatorSelection": {
      "authenticatorAttachment": "string",
      "requireResidentKey": true,
      "userVerification": "string"
    },
    "challenge": "string",
    "excludeCredentials": [
      {
        "credentialId": "string",
        "credentialType": "string",
        "transports": [
          "string"
        ]
      }
    ],
    "pubKeyCredParams": [
      {
        "alg": "string",
        "credentialType": "string"
      }
    ],
    "rp": {
      "id": "string"
    },
    "user": {
      "id": "string"
    }
  }
}
```

<h3 id="identitytoolkitaccountspasskeyenrollmentstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse](#schemagooglecloudidentitytoolkitv2startpasskeyenrollmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.passkeySignIn.finalize

<a id="opIdidentitytoolkit.accounts.passkeySignIn.finalize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/passkeySignIn:finalize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authenticatorAuthenticationResponse": {
      "authenticatorAssertionResponse": {
        "authenticatorData": "string",
        "clientDataJson": "string",
        "signature": "string",
        "userHandle": "string"
      },
      "credentialId": "string",
      "credentialType": "string"
    },
    "sessionId": "string",
    "tenantId": "string"
  }'
```

`POST /v2/accounts/passkeySignIn:finalize`

Verifies the passkey assertion and signs the user in.

> Body parameter

```json
{
  "authenticatorAuthenticationResponse": {
    "authenticatorAssertionResponse": {
      "authenticatorData": "string",
      "clientDataJson": "string",
      "signature": "string",
      "userHandle": "string"
    },
    "credentialId": "string",
    "credentialType": "string"
  },
  "sessionId": "string",
  "tenantId": "string"
}
```

<h3 id="identitytoolkitaccountspasskeysigninfinalize-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest](#schemagooglecloudidentitytoolkitv2finalizepasskeysigninrequest)|false|none|
|» authenticatorAuthenticationResponse|body|[GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse](#schemagooglecloudidentitytoolkitv2authenticatorauthenticationresponse)|false|Required. The authentication response object from the authenticator.|
|» sessionId|body|string(byte)|false|Optional. The session ID that was passed into StartPasskeySignIn, if any.|
|» tenantId|body|string|false|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

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
  "idToken": "string",
  "refreshToken": "string"
}
```

<h3 id="identitytoolkitaccountspasskeysigninfinalize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2FinalizePasskeySignInResponse](#schemagooglecloudidentitytoolkitv2finalizepasskeysigninresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.passkeySignIn.start

<a id="opIdidentitytoolkit.accounts.passkeySignIn.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts/passkeySignIn:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sessionId": "string",
    "tenantId": "string"
  }'
```

`POST /v2/accounts/passkeySignIn:start`

Creates and returns the passkey challenge

> Body parameter

```json
{
  "sessionId": "string",
  "tenantId": "string"
}
```

<h3 id="identitytoolkitaccountspasskeysigninstart-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest](#schemagooglecloudidentitytoolkitv2startpasskeysigninrequest)|false|none|
|» sessionId|body|string(byte)|false|Optional. The developer can bind their own concept of a user session to this flow.|
|» tenantId|body|string|false|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

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
  "credentialRequestOptions": {
    "challenge": "string",
    "rpId": "string",
    "userVerification": "string"
  }
}
```

<h3 id="identitytoolkitaccountspasskeysigninstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2StartPasskeySignInResponse](#schemagooglecloudidentitytoolkitv2startpasskeysigninresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.accounts.revokeToken

<a id="opIdidentitytoolkit.accounts.revokeToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/accounts:revokeToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "idToken": "string",
    "providerId": "string",
    "redirectUri": "string",
    "tenantId": "string",
    "token": "string",
    "tokenType": "TOKEN_TYPE_UNSPECIFIED"
  }'
```

`POST /v2/accounts:revokeToken`

Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

> Body parameter

```json
{
  "idToken": "string",
  "providerId": "string",
  "redirectUri": "string",
  "tenantId": "string",
  "token": "string",
  "tokenType": "TOKEN_TYPE_UNSPECIFIED"
}
```

<h3 id="identitytoolkitaccountsrevoketoken-parameters">Parameters</h3>

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
|body|body|[GoogleCloudIdentitytoolkitV2RevokeTokenRequest](#schemagooglecloudidentitytoolkitv2revoketokenrequest)|false|none|
|» idToken|body|string|false|Required. A valid Identity Platform ID token to link the account. If there was a successful token revocation request on the account and no tokens are generated after the revocation, the duplicate requests will be ignored and returned immediately.|
|» providerId|body|string|false|Required. The idp provider for the token. Currently only supports Apple Idp. The format should be "apple.com".|
|» redirectUri|body|string|false|The redirect URI provided in the initial authorization request made by the client to the IDP. The URI must use the HTTPS protocol, include a domain name, and can’t contain an IP address or localhost. Required if token_type is CODE.|
|» tenantId|body|string|false|The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|
|» token|body|string|false|Required. The token to be revoked. If an authorization_code is passed in, the API will first exchange the code for access token and then revoke the token exchanged.|
|» tokenType|body|string|false|Required. The type of the token to be revoked.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» tokenType|TOKEN_TYPE_UNSPECIFIED|
|» tokenType|REFRESH_TOKEN|
|» tokenType|ACCESS_TOKEN|
|» tokenType|CODE|

> Example responses

> 200 Response

```json
{}
```

<h3 id="identitytoolkitaccountsrevoketoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2RevokeTokenResponse](#schemagooglecloudidentitytoolkitv2revoketokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="identity-toolkit-api-defaultsupportedidps">defaultSupportedIdps</h1>

## identitytoolkit.defaultSupportedIdps.list

<a id="opIdidentitytoolkit.defaultSupportedIdps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/defaultSupportedIdps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/defaultSupportedIdps`

List all default supported Idps.

<h3 id="identitytoolkitdefaultsupportedidpslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "defaultSupportedIdps": [
    {
      "description": "string",
      "idpId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="identitytoolkitdefaultsupportedidpslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse](#schemagooglecloudidentitytoolkitadminv2listdefaultsupportedidpsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

<h1 id="identity-toolkit-api-projects">projects</h1>

## identitytoolkit.projects.tenants.oauthIdpConfigs.get

<a id="opIdidentitytoolkit.projects.tenants.oauthIdpConfigs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Retrieve an Oidc Idp configuration for an Identity Toolkit project.

<h3 id="identitytoolkitprojectstenantsoauthidpconfigsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.|
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
  "clientId": "string",
  "clientSecret": "string",
  "displayName": "string",
  "enabled": true,
  "issuer": "string",
  "name": "string",
  "responseType": {
    "code": true,
    "idToken": true,
    "token": true
  }
}
```

<h3 id="identitytoolkitprojectstenantsoauthidpconfigsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig](#schemagooglecloudidentitytoolkitadminv2oauthidpconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.oauthIdpConfigs.delete

<a id="opIdidentitytoolkit.projects.tenants.oauthIdpConfigs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Delete an Oidc Idp configuration for an Identity Toolkit project.

<h3 id="identitytoolkitprojectstenantsoauthidpconfigsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.|
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

<h3 id="identitytoolkitprojectstenantsoauthidpconfigsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.oauthIdpConfigs.patch

<a id="opIdidentitytoolkit.projects.tenants.oauthIdpConfigs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientId": "string",
    "clientSecret": "string",
    "displayName": "string",
    "enabled": true,
    "issuer": "string",
    "name": "string",
    "responseType": {
      "code": true,
      "idToken": true,
      "token": true
    }
  }'
```

`PATCH /v2/{name}`

Update an Oidc Idp configuration for an Identity Toolkit project.

> Body parameter

```json
{
  "clientId": "string",
  "clientSecret": "string",
  "displayName": "string",
  "enabled": true,
  "issuer": "string",
  "name": "string",
  "responseType": {
    "code": true,
    "idToken": true,
    "token": true
  }
}
```

<h3 id="identitytoolkitprojectstenantsoauthidpconfigspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.|
|updateMask|query|string|false|The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask|
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
|body|body|[GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig](#schemagooglecloudidentitytoolkitadminv2oauthidpconfig)|false|none|
|» clientId|body|string|false|The client id of an OAuth client.|
|» clientSecret|body|string|false|The client secret of the OAuth client, to enable OIDC code flow.|
|» displayName|body|string|false|The config's display name set by developers.|
|» enabled|body|boolean|false|True if allows the user to sign in with the provider.|
|» issuer|body|string|false|For OIDC Idps, the issuer identifier.|
|» name|body|string|false|The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.|
|» responseType|body|[GoogleCloudIdentitytoolkitAdminV2OAuthResponseType](#schemagooglecloudidentitytoolkitadminv2oauthresponsetype)|false|The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported.|

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
  "clientId": "string",
  "clientSecret": "string",
  "displayName": "string",
  "enabled": true,
  "issuer": "string",
  "name": "string",
  "responseType": {
    "code": true,
    "idToken": true,
    "token": true
  }
}
```

<h3 id="identitytoolkitprojectstenantsoauthidpconfigspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig](#schemagooglecloudidentitytoolkitadminv2oauthidpconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.defaultSupportedIdpConfigs.list

<a id="opIdidentitytoolkit.projects.tenants.defaultSupportedIdpConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/defaultSupportedIdpConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/defaultSupportedIdpConfigs`

List all default supported Idp configurations for an Identity Toolkit project.

<h3 id="identitytoolkitprojectstenantsdefaultsupportedidpconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name, for example, "projects/my-awesome-project".|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "defaultSupportedIdpConfigs": [
    {
      "appleSignInConfig": {
        "bundleIds": [
          "string"
        ],
        "codeFlowConfig": {
          "keyId": "string",
          "privateKey": "string",
          "teamId": "string"
        }
      },
      "clientId": "string",
      "clientSecret": "string",
      "enabled": true,
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="identitytoolkitprojectstenantsdefaultsupportedidpconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse](#schemagooglecloudidentitytoolkitadminv2listdefaultsupportedidpconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.defaultSupportedIdpConfigs.create

<a id="opIdidentitytoolkit.projects.tenants.defaultSupportedIdpConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/defaultSupportedIdpConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appleSignInConfig": {
      "bundleIds": [
        "string"
      ],
      "codeFlowConfig": {
        "keyId": "string",
        "privateKey": "string",
        "teamId": "string"
      }
    },
    "clientId": "string",
    "clientSecret": "string",
    "enabled": true,
    "name": "string"
  }'
```

`POST /v2/{parent}/defaultSupportedIdpConfigs`

Create a default supported Idp configuration for an Identity Toolkit project.

> Body parameter

```json
{
  "appleSignInConfig": {
    "bundleIds": [
      "string"
    ],
    "codeFlowConfig": {
      "keyId": "string",
      "privateKey": "string",
      "teamId": "string"
    }
  },
  "clientId": "string",
  "clientSecret": "string",
  "enabled": true,
  "name": "string"
}
```

<h3 id="identitytoolkitprojectstenantsdefaultsupportedidpconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name where the config to be created, for example: "projects/my-awesome-project"|
|idpId|query|string|false|The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.|
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
|body|body|[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig](#schemagooglecloudidentitytoolkitadminv2defaultsupportedidpconfig)|false|none|
|» appleSignInConfig|body|[GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig](#schemagooglecloudidentitytoolkitadminv2applesigninconfig)|false|Additional config for Apple-based projects.|
|» clientId|body|string|false|OAuth client ID.|
|» clientSecret|body|string|false|OAuth client secret.|
|» enabled|body|boolean|false|True if allows the user to sign in with the provider.|
|» name|body|string|false|The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"|

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
  "appleSignInConfig": {
    "bundleIds": [
      "string"
    ],
    "codeFlowConfig": {
      "keyId": "string",
      "privateKey": "string",
      "teamId": "string"
    }
  },
  "clientId": "string",
  "clientSecret": "string",
  "enabled": true,
  "name": "string"
}
```

<h3 id="identitytoolkitprojectstenantsdefaultsupportedidpconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig](#schemagooglecloudidentitytoolkitadminv2defaultsupportedidpconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.inboundSamlConfigs.list

<a id="opIdidentitytoolkit.projects.tenants.inboundSamlConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/inboundSamlConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/inboundSamlConfigs`

List all inbound SAML configurations for an Identity Toolkit project.

<h3 id="identitytoolkitprojectstenantsinboundsamlconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name, for example, "projects/my-awesome-project".|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "inboundSamlConfigs": [
    {
      "displayName": "string",
      "enabled": true,
      "idpConfig": {
        "idpCertificates": [
          {
            "x509Certificate": "string"
          }
        ],
        "idpEntityId": "string",
        "signRequest": true,
        "ssoUrl": "string"
      },
      "name": "string",
      "spConfig": {
        "callbackUri": "string",
        "spCertificates": [
          {
            "expiresAt": "string",
            "x509Certificate": "string"
          }
        ],
        "spEntityId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="identitytoolkitprojectstenantsinboundsamlconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse](#schemagooglecloudidentitytoolkitadminv2listinboundsamlconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.inboundSamlConfigs.create

<a id="opIdidentitytoolkit.projects.tenants.inboundSamlConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/inboundSamlConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "enabled": true,
    "idpConfig": {
      "idpCertificates": [
        {
          "x509Certificate": "string"
        }
      ],
      "idpEntityId": "string",
      "signRequest": true,
      "ssoUrl": "string"
    },
    "name": "string",
    "spConfig": {
      "callbackUri": "string",
      "spEntityId": "string"
    }
  }'
```

`POST /v2/{parent}/inboundSamlConfigs`

Create an inbound SAML configuration for an Identity Toolkit project.

> Body parameter

```json
{
  "displayName": "string",
  "enabled": true,
  "idpConfig": {
    "idpCertificates": [
      {
        "x509Certificate": "string"
      }
    ],
    "idpEntityId": "string",
    "signRequest": true,
    "ssoUrl": "string"
  },
  "name": "string",
  "spConfig": {
    "callbackUri": "string",
    "spEntityId": "string"
  }
}
```

<h3 id="identitytoolkitprojectstenantsinboundsamlconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name where the config to be created, for example: "projects/my-awesome-project"|
|inboundSamlConfigId|query|string|false|The id to use for this config.|
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
|body|body|[GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig](#schemagooglecloudidentitytoolkitadminv2inboundsamlconfig)|false|none|
|» displayName|body|string|false|The config's display name set by developers.|
|» enabled|body|boolean|false|True if allows the user to sign in with the provider.|
|» idpConfig|body|[GoogleCloudIdentitytoolkitAdminV2IdpConfig](#schemagooglecloudidentitytoolkitadminv2idpconfig)|false|The SAML IdP (Identity Provider) configuration when the project acts as the relying party.|
|» name|body|string|false|The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.|
|» spConfig|body|[GoogleCloudIdentitytoolkitAdminV2SpConfig](#schemagooglecloudidentitytoolkitadminv2spconfig)|false|The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.|

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
  "enabled": true,
  "idpConfig": {
    "idpCertificates": [
      {
        "x509Certificate": "string"
      }
    ],
    "idpEntityId": "string",
    "signRequest": true,
    "ssoUrl": "string"
  },
  "name": "string",
  "spConfig": {
    "callbackUri": "string",
    "spCertificates": [
      {
        "expiresAt": "string",
        "x509Certificate": "string"
      }
    ],
    "spEntityId": "string"
  }
}
```

<h3 id="identitytoolkitprojectstenantsinboundsamlconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig](#schemagooglecloudidentitytoolkitadminv2inboundsamlconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.oauthIdpConfigs.list

<a id="opIdidentitytoolkit.projects.tenants.oauthIdpConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/oauthIdpConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/oauthIdpConfigs`

List all Oidc Idp configurations for an Identity Toolkit project.

<h3 id="identitytoolkitprojectstenantsoauthidpconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name, for example, "projects/my-awesome-project".|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "oauthIdpConfigs": [
    {
      "clientId": "string",
      "clientSecret": "string",
      "displayName": "string",
      "enabled": true,
      "issuer": "string",
      "name": "string",
      "responseType": {
        "code": true,
        "idToken": true,
        "token": true
      }
    }
  ]
}
```

<h3 id="identitytoolkitprojectstenantsoauthidpconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse](#schemagooglecloudidentitytoolkitadminv2listoauthidpconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.oauthIdpConfigs.create

<a id="opIdidentitytoolkit.projects.tenants.oauthIdpConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/oauthIdpConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientId": "string",
    "clientSecret": "string",
    "displayName": "string",
    "enabled": true,
    "issuer": "string",
    "name": "string",
    "responseType": {
      "code": true,
      "idToken": true,
      "token": true
    }
  }'
```

`POST /v2/{parent}/oauthIdpConfigs`

Create an Oidc Idp configuration for an Identity Toolkit project.

> Body parameter

```json
{
  "clientId": "string",
  "clientSecret": "string",
  "displayName": "string",
  "enabled": true,
  "issuer": "string",
  "name": "string",
  "responseType": {
    "code": true,
    "idToken": true,
    "token": true
  }
}
```

<h3 id="identitytoolkitprojectstenantsoauthidpconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name where the config to be created, for example: "projects/my-awesome-project"|
|oauthIdpConfigId|query|string|false|The id to use for this config.|
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
|body|body|[GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig](#schemagooglecloudidentitytoolkitadminv2oauthidpconfig)|false|none|
|» clientId|body|string|false|The client id of an OAuth client.|
|» clientSecret|body|string|false|The client secret of the OAuth client, to enable OIDC code flow.|
|» displayName|body|string|false|The config's display name set by developers.|
|» enabled|body|boolean|false|True if allows the user to sign in with the provider.|
|» issuer|body|string|false|For OIDC Idps, the issuer identifier.|
|» name|body|string|false|The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.|
|» responseType|body|[GoogleCloudIdentitytoolkitAdminV2OAuthResponseType](#schemagooglecloudidentitytoolkitadminv2oauthresponsetype)|false|The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported.|

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
  "clientId": "string",
  "clientSecret": "string",
  "displayName": "string",
  "enabled": true,
  "issuer": "string",
  "name": "string",
  "responseType": {
    "code": true,
    "idToken": true,
    "token": true
  }
}
```

<h3 id="identitytoolkitprojectstenantsoauthidpconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig](#schemagooglecloudidentitytoolkitadminv2oauthidpconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.list

<a id="opIdidentitytoolkit.projects.tenants.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/tenants \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/tenants`

List tenants under the given agent project. Requires read permission on the Agent project.

<h3 id="identitytoolkitprojectstenantslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name to list tenants for.|
|pageSize|query|integer|false|The maximum number of results to return, capped at 1000. If not specified, the default value is 20.|
|pageToken|query|string|false|The pagination token from the response of a previous request.|
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
  "tenants": [
    {
      "allowPasswordSignup": true,
      "autodeleteAnonymousUsers": true,
      "client": {
        "permissions": {
          "disabledUserDeletion": true,
          "disabledUserSignup": true
        }
      },
      "disableAuth": true,
      "displayName": "string",
      "emailPrivacyConfig": {
        "enableImprovedEmailPrivacy": true
      },
      "enableAnonymousUser": true,
      "enableEmailLinkSignin": true,
      "hashConfig": {
        "algorithm": "HASH_ALGORITHM_UNSPECIFIED",
        "memoryCost": 0,
        "rounds": 0,
        "saltSeparator": "string",
        "signerKey": "string"
      },
      "inheritance": {
        "emailSendingConfig": true
      },
      "mfaConfig": {
        "enabledProviders": [
          "PROVIDER_UNSPECIFIED"
        ],
        "providerConfigs": [
          {
            "state": "MFA_STATE_UNSPECIFIED",
            "totpProviderConfig": {
              "adjacentIntervals": 0
            }
          }
        ],
        "state": "STATE_UNSPECIFIED"
      },
      "monitoring": {
        "requestLogging": {
          "enabled": true
        }
      },
      "name": "string",
      "recaptchaConfig": {
        "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
        "managedRules": [
          {
            "action": "RECAPTCHA_ACTION_UNSPECIFIED",
            "endScore": 0
          }
        ],
        "recaptchaKeys": [
          {
            "key": "string",
            "type": "CLIENT_TYPE_UNSPECIFIED"
          }
        ],
        "useAccountDefender": true
      },
      "smsRegionConfig": {
        "allowByDefault": {
          "disallowedRegions": [
            "string"
          ]
        },
        "allowlistOnly": {
          "allowedRegions": [
            "string"
          ]
        }
      },
      "testPhoneNumbers": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

<h3 id="identitytoolkitprojectstenantslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse](#schemagooglecloudidentitytoolkitadminv2listtenantsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.create

<a id="opIdidentitytoolkit.projects.tenants.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/tenants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowPasswordSignup": true,
    "autodeleteAnonymousUsers": true,
    "client": {
      "permissions": {
        "disabledUserDeletion": true,
        "disabledUserSignup": true
      }
    },
    "disableAuth": true,
    "displayName": "string",
    "emailPrivacyConfig": {
      "enableImprovedEmailPrivacy": true
    },
    "enableAnonymousUser": true,
    "enableEmailLinkSignin": true,
    "inheritance": {
      "emailSendingConfig": true
    },
    "mfaConfig": {
      "enabledProviders": [
        "PROVIDER_UNSPECIFIED"
      ],
      "providerConfigs": [
        {
          "state": "MFA_STATE_UNSPECIFIED",
          "totpProviderConfig": {
            "adjacentIntervals": 0
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    },
    "monitoring": {
      "requestLogging": {
        "enabled": true
      }
    },
    "recaptchaConfig": {
      "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
      "managedRules": [
        {
          "action": "RECAPTCHA_ACTION_UNSPECIFIED",
          "endScore": 0
        }
      ],
      "useAccountDefender": true
    },
    "smsRegionConfig": {
      "allowByDefault": {
        "disallowedRegions": [
          "string"
        ]
      },
      "allowlistOnly": {
        "allowedRegions": [
          "string"
        ]
      }
    },
    "testPhoneNumbers": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v2/{parent}/tenants`

Create a tenant. Requires write permission on the Agent project.

> Body parameter

```json
{
  "allowPasswordSignup": true,
  "autodeleteAnonymousUsers": true,
  "client": {
    "permissions": {
      "disabledUserDeletion": true,
      "disabledUserSignup": true
    }
  },
  "disableAuth": true,
  "displayName": "string",
  "emailPrivacyConfig": {
    "enableImprovedEmailPrivacy": true
  },
  "enableAnonymousUser": true,
  "enableEmailLinkSignin": true,
  "inheritance": {
    "emailSendingConfig": true
  },
  "mfaConfig": {
    "enabledProviders": [
      "PROVIDER_UNSPECIFIED"
    ],
    "providerConfigs": [
      {
        "state": "MFA_STATE_UNSPECIFIED",
        "totpProviderConfig": {
          "adjacentIntervals": 0
        }
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "monitoring": {
    "requestLogging": {
      "enabled": true
    }
  },
  "recaptchaConfig": {
    "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
    "managedRules": [
      {
        "action": "RECAPTCHA_ACTION_UNSPECIFIED",
        "endScore": 0
      }
    ],
    "useAccountDefender": true
  },
  "smsRegionConfig": {
    "allowByDefault": {
      "disallowedRegions": [
        "string"
      ]
    },
    "allowlistOnly": {
      "allowedRegions": [
        "string"
      ]
    }
  },
  "testPhoneNumbers": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="identitytoolkitprojectstenantscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name where the tenant will be created. For example, "projects/project1".|
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
|body|body|[GoogleCloudIdentitytoolkitAdminV2Tenant](#schemagooglecloudidentitytoolkitadminv2tenant)|false|none|
|» allowPasswordSignup|body|boolean|false|Whether to allow email/password user authentication.|
|» autodeleteAnonymousUsers|body|boolean|false|Whether anonymous users will be auto-deleted after a period of 30 days.|
|» client|body|[GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig](#schemagooglecloudidentitytoolkitadminv2clientpermissionconfig)|false|Options related to how clients making requests on behalf of a project should be configured.|
|» disableAuth|body|boolean|false|Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users.|
|» displayName|body|string|false|Display name of the tenant.|
|» emailPrivacyConfig|body|[GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig](#schemagooglecloudidentitytoolkitadminv2emailprivacyconfig)|false|Configuration for settings related to email privacy and public visibility.|
|» enableAnonymousUser|body|boolean|false|Whether to enable anonymous user authentication.|
|» enableEmailLinkSignin|body|boolean|false|Whether to enable email link user authentication.|
|» inheritance|body|[GoogleCloudIdentitytoolkitAdminV2Inheritance](#schemagooglecloudidentitytoolkitadminv2inheritance)|false|Specify the settings that the tenant could inherit.|
|» mfaConfig|body|[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig](#schemagooglecloudidentitytoolkitadminv2multifactorauthconfig)|false|The tenant-level configuration of MFA options.|
|» monitoring|body|[GoogleCloudIdentitytoolkitAdminV2MonitoringConfig](#schemagooglecloudidentitytoolkitadminv2monitoringconfig)|false|Configuration related to monitoring project activity.|
|» recaptchaConfig|body|[GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig](#schemagooglecloudidentitytoolkitadminv2recaptchaconfig)|false|The tenant-level reCAPTCHA config.|
|» smsRegionConfig|body|[GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig](#schemagooglecloudidentitytoolkitadminv2smsregionconfig)|false|Configures which regions are enabled for SMS verification code sending.|
|» testPhoneNumbers|body|object|false|A map of pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded).|
|» » **additionalProperties**|body|string|false|none|

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
  "allowPasswordSignup": true,
  "autodeleteAnonymousUsers": true,
  "client": {
    "permissions": {
      "disabledUserDeletion": true,
      "disabledUserSignup": true
    }
  },
  "disableAuth": true,
  "displayName": "string",
  "emailPrivacyConfig": {
    "enableImprovedEmailPrivacy": true
  },
  "enableAnonymousUser": true,
  "enableEmailLinkSignin": true,
  "hashConfig": {
    "algorithm": "HASH_ALGORITHM_UNSPECIFIED",
    "memoryCost": 0,
    "rounds": 0,
    "saltSeparator": "string",
    "signerKey": "string"
  },
  "inheritance": {
    "emailSendingConfig": true
  },
  "mfaConfig": {
    "enabledProviders": [
      "PROVIDER_UNSPECIFIED"
    ],
    "providerConfigs": [
      {
        "state": "MFA_STATE_UNSPECIFIED",
        "totpProviderConfig": {
          "adjacentIntervals": 0
        }
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "monitoring": {
    "requestLogging": {
      "enabled": true
    }
  },
  "name": "string",
  "recaptchaConfig": {
    "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
    "managedRules": [
      {
        "action": "RECAPTCHA_ACTION_UNSPECIFIED",
        "endScore": 0
      }
    ],
    "recaptchaKeys": [
      {
        "key": "string",
        "type": "CLIENT_TYPE_UNSPECIFIED"
      }
    ],
    "useAccountDefender": true
  },
  "smsRegionConfig": {
    "allowByDefault": {
      "disallowedRegions": [
        "string"
      ]
    },
    "allowlistOnly": {
      "allowedRegions": [
        "string"
      ]
    }
  },
  "testPhoneNumbers": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="identitytoolkitprojectstenantscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2Tenant](#schemagooglecloudidentitytoolkitadminv2tenant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.identityPlatform.initializeAuth

<a id="opIdidentitytoolkit.projects.identityPlatform.initializeAuth"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/identityPlatform:initializeAuth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{project}/identityPlatform:initializeAuth`

Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.

> Body parameter

```json
{}
```

<h3 id="identitytoolkitprojectsidentityplatforminitializeauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The resource name of the target project the developer wants to enable Identity Platform for.|
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
|body|body|[GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest](#schemagooglecloudidentitytoolkitadminv2initializeidentityplatformrequest)|false|none|

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

<h3 id="identitytoolkitprojectsidentityplatforminitializeauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse](#schemagooglecloudidentitytoolkitadminv2initializeidentityplatformresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## identitytoolkit.projects.tenants.getIamPolicy

<a id="opIdidentitytoolkit.projects.tenants.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /v2/{resource}:getIamPolicy`

Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="identitytoolkitprojectstenantsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1GetIamPolicyRequest](#schemagoogleiamv1getiampolicyrequest)|false|none|
|» options|body|[GoogleIamV1GetPolicyOptions](#schemagoogleiamv1getpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="identitytoolkitprojectstenantsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.setIamPolicy

<a id="opIdidentitytoolkit.projects.tenants.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    },
    "updateMask": "string"
  }'
```

`POST /v2/{resource}:setIamPolicy`

Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

<h3 id="identitytoolkitprojectstenantssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1SetIamPolicyRequest](#schemagoogleiamv1setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="identitytoolkitprojectstenantssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## identitytoolkit.projects.tenants.testIamPermissions

<a id="opIdidentitytoolkit.projects.tenants.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v2/{resource}:testIamPermissions`

Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="identitytoolkitprojectstenantstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1TestIamPermissionsRequest](#schemagoogleiamv1testiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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
  "permissions": [
    "string"
  ]
}
```

<h3 id="identitytoolkitprojectstenantstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1TestIamPermissionsResponse](#schemagoogleiamv1testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

<h1 id="identity-toolkit-api-v2">v2</h1>

## identitytoolkit.getRecaptchaConfig

<a id="opIdidentitytoolkit.getRecaptchaConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/recaptchaConfig \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/recaptchaConfig`

Gets parameters needed for reCAPTCHA analysis.

<h3 id="identitytoolkitgetrecaptchaconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientType|query|string|false|reCAPTCHA Enterprise uses separate site keys for different client types. Specify the client type to get the corresponding key.|
|tenantId|query|string|false|The id of a tenant.|
|version|query|string|false|The reCAPTCHA version.|
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
|clientType|CLIENT_TYPE_UNSPECIFIED|
|clientType|CLIENT_TYPE_WEB|
|clientType|CLIENT_TYPE_ANDROID|
|clientType|CLIENT_TYPE_IOS|
|version|RECAPTCHA_VERSION_UNSPECIFIED|
|version|RECAPTCHA_ENTERPRISE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "recaptchaEnforcementState": [
    {
      "enforcementState": "ENFORCEMENT_STATE_UNSPECIFIED",
      "provider": "RECAPTCHA_PROVIDER_UNSPECIFIED"
    }
  ],
  "recaptchaKey": "string"
}
```

<h3 id="identitytoolkitgetrecaptchaconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudIdentitytoolkitV2RecaptchaConfig](#schemagooglecloudidentitytoolkitv2recaptchaconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2AllowByDefault">GoogleCloudIdentitytoolkitAdminV2AllowByDefault</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2allowbydefault"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2AllowByDefault"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2allowbydefault"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2allowbydefault"></a>

```json
{
  "disallowedRegions": [
    "string"
  ]
}
```

Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disallowedRegions|[string]|false|none|Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2AllowlistOnly">GoogleCloudIdentitytoolkitAdminV2AllowlistOnly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2allowlistonly"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2AllowlistOnly"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2allowlistonly"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2allowlistonly"></a>

```json
{
  "allowedRegions": [
    "string"
  ]
}
```

Defines a policy of only allowing regions by explicitly adding them to an allowlist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedRegions|[string]|false|none|Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Anonymous">GoogleCloudIdentitytoolkitAdminV2Anonymous</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2anonymous"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Anonymous"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2anonymous"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2anonymous"></a>

```json
{
  "enabled": true
}
```

Configuration options related to authenticating an anonymous user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether anonymous user auth is enabled for the project or not.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig">GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2applesigninconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2applesigninconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2applesigninconfig"></a>

```json
{
  "bundleIds": [
    "string"
  ],
  "codeFlowConfig": {
    "keyId": "string",
    "privateKey": "string",
    "teamId": "string"
  }
}
```

Additional config for SignInWithApple.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleIds|[string]|false|none|A list of Bundle ID's usable by this project|
|codeFlowConfig|[GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig](#schemagooglecloudidentitytoolkitadminv2codeflowconfig)|false|none|Additional config for Apple for code flow.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig">GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2blockingfunctionsconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2blockingfunctionsconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2blockingfunctionsconfig"></a>

```json
{
  "forwardInboundCredentials": {
    "accessToken": true,
    "idToken": true,
    "refreshToken": true
  },
  "triggers": {
    "property1": {
      "functionUri": "string",
      "updateTime": "string"
    },
    "property2": {
      "functionUri": "string",
      "updateTime": "string"
    }
  }
}
```

Configuration related to Blocking Functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forwardInboundCredentials|[GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials](#schemagooglecloudidentitytoolkitadminv2forwardinboundcredentials)|false|none|The user credentials to include in the JWT payload that is sent to the registered Blocking Functions.|
|triggers|object|false|none|Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn"|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ClientConfig">GoogleCloudIdentitytoolkitAdminV2ClientConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2clientconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ClientConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2clientconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2clientconfig"></a>

```json
{
  "apiKey": "string",
  "firebaseSubdomain": "string",
  "permissions": {
    "disabledUserDeletion": true,
    "disabledUserSignup": true
  }
}
```

Options related to how clients making requests on behalf of a project should be configured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|read-only|Output only. API key that can be used when making requests for this project.|
|firebaseSubdomain|string|false|read-only|Output only. Firebase subdomain.|
|permissions|[GoogleCloudIdentitytoolkitAdminV2Permissions](#schemagooglecloudidentitytoolkitadminv2permissions)|false|none|Configuration related to restricting a user's ability to affect their account.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig">GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2clientpermissionconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2clientpermissionconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2clientpermissionconfig"></a>

```json
{
  "permissions": {
    "disabledUserDeletion": true,
    "disabledUserSignup": true
  }
}
```

Options related to how clients making requests on behalf of a tenant should be configured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[GoogleCloudIdentitytoolkitAdminV2ClientPermissions](#schemagooglecloudidentitytoolkitadminv2clientpermissions)|false|none|Configuration related to restricting a user's ability to affect their account.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ClientPermissions">GoogleCloudIdentitytoolkitAdminV2ClientPermissions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2clientpermissions"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ClientPermissions"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2clientpermissions"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2clientpermissions"></a>

```json
{
  "disabledUserDeletion": true,
  "disabledUserSignup": true
}
```

Configuration related to restricting a user's ability to affect their account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledUserDeletion|boolean|false|none|When true, end users cannot delete their account on the associated project through any of our API methods|
|disabledUserSignup|boolean|false|none|When true, end users cannot sign up for a new account on the associated project through any of our API methods|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig">GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2codeflowconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2codeflowconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2codeflowconfig"></a>

```json
{
  "keyId": "string",
  "privateKey": "string",
  "teamId": "string"
}
```

Additional config for Apple for code flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|string|false|none|Key ID for the private key.|
|privateKey|string|false|none|Private key used for signing the client secret JWT.|
|teamId|string|false|none|Apple Developer Team ID.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Config">GoogleCloudIdentitytoolkitAdminV2Config</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2config"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Config"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2config"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2config"></a>

```json
{
  "authorizedDomains": [
    "string"
  ],
  "autodeleteAnonymousUsers": true,
  "blockingFunctions": {
    "forwardInboundCredentials": {
      "accessToken": true,
      "idToken": true,
      "refreshToken": true
    },
    "triggers": {
      "property1": {
        "functionUri": "string",
        "updateTime": "string"
      },
      "property2": {
        "functionUri": "string",
        "updateTime": "string"
      }
    }
  },
  "client": {
    "apiKey": "string",
    "firebaseSubdomain": "string",
    "permissions": {
      "disabledUserDeletion": true,
      "disabledUserSignup": true
    }
  },
  "emailPrivacyConfig": {
    "enableImprovedEmailPrivacy": true
  },
  "mfa": {
    "enabledProviders": [
      "PROVIDER_UNSPECIFIED"
    ],
    "providerConfigs": [
      {
        "state": "MFA_STATE_UNSPECIFIED",
        "totpProviderConfig": {
          "adjacentIntervals": 0
        }
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "monitoring": {
    "requestLogging": {
      "enabled": true
    }
  },
  "multiTenant": {
    "allowTenants": true,
    "defaultTenantLocation": "string"
  },
  "name": "string",
  "notification": {
    "defaultLocale": "string",
    "sendEmail": {
      "callbackUri": "string",
      "changeEmailTemplate": {
        "body": "string",
        "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
        "customized": true,
        "replyTo": "string",
        "senderDisplayName": "string",
        "senderLocalPart": "string",
        "subject": "string"
      },
      "dnsInfo": {
        "customDomain": "string",
        "customDomainState": "VERIFICATION_STATE_UNSPECIFIED",
        "domainVerificationRequestTime": "string",
        "pendingCustomDomain": "string",
        "useCustomDomain": true
      },
      "legacyResetPasswordTemplate": {
        "body": "string",
        "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
        "customized": true,
        "replyTo": "string",
        "senderDisplayName": "string",
        "senderLocalPart": "string",
        "subject": "string"
      },
      "method": "METHOD_UNSPECIFIED",
      "resetPasswordTemplate": {
        "body": "string",
        "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
        "customized": true,
        "replyTo": "string",
        "senderDisplayName": "string",
        "senderLocalPart": "string",
        "subject": "string"
      },
      "revertSecondFactorAdditionTemplate": {
        "body": "string",
        "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
        "customized": true,
        "replyTo": "string",
        "senderDisplayName": "string",
        "senderLocalPart": "string",
        "subject": "string"
      },
      "smtp": {
        "host": "string",
        "password": "string",
        "port": 0,
        "securityMode": "SECURITY_MODE_UNSPECIFIED",
        "senderEmail": "string",
        "username": "string"
      },
      "verifyEmailTemplate": {
        "body": "string",
        "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
        "customized": true,
        "replyTo": "string",
        "senderDisplayName": "string",
        "senderLocalPart": "string",
        "subject": "string"
      }
    },
    "sendSms": {
      "smsTemplate": {
        "content": "string"
      },
      "useDeviceLocale": true
    }
  },
  "quota": {
    "signUpQuotaConfig": {
      "quota": "string",
      "quotaDuration": "string",
      "startTime": "string"
    }
  },
  "recaptchaConfig": {
    "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
    "managedRules": [
      {
        "action": "RECAPTCHA_ACTION_UNSPECIFIED",
        "endScore": 0
      }
    ],
    "recaptchaKeys": [
      {
        "key": "string",
        "type": "CLIENT_TYPE_UNSPECIFIED"
      }
    ],
    "useAccountDefender": true
  },
  "signIn": {
    "allowDuplicateEmails": true,
    "anonymous": {
      "enabled": true
    },
    "email": {
      "enabled": true,
      "passwordRequired": true
    },
    "hashConfig": {
      "algorithm": "HASH_ALGORITHM_UNSPECIFIED",
      "memoryCost": 0,
      "rounds": 0,
      "saltSeparator": "string",
      "signerKey": "string"
    },
    "phoneNumber": {
      "enabled": true,
      "testPhoneNumbers": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "smsRegionConfig": {
    "allowByDefault": {
      "disallowedRegions": [
        "string"
      ]
    },
    "allowlistOnly": {
      "allowedRegions": [
        "string"
      ]
    }
  },
  "subtype": "SUBTYPE_UNSPECIFIED"
}
```

Represents an Identity Toolkit project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizedDomains|[string]|false|none|List of domains authorized for OAuth redirects|
|autodeleteAnonymousUsers|boolean|false|none|Whether anonymous users will be auto-deleted after a period of 30 days.|
|blockingFunctions|[GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig](#schemagooglecloudidentitytoolkitadminv2blockingfunctionsconfig)|false|none|Configuration related to blocking functions.|
|client|[GoogleCloudIdentitytoolkitAdminV2ClientConfig](#schemagooglecloudidentitytoolkitadminv2clientconfig)|false|none|Options related to how clients making requests on behalf of a project should be configured.|
|emailPrivacyConfig|[GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig](#schemagooglecloudidentitytoolkitadminv2emailprivacyconfig)|false|none|Configuration for settings related to email privacy and public visibility.|
|mfa|[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig](#schemagooglecloudidentitytoolkitadminv2multifactorauthconfig)|false|none|Configuration for this project's multi-factor authentication, including whether it is active and what factors can be used for the second factor|
|monitoring|[GoogleCloudIdentitytoolkitAdminV2MonitoringConfig](#schemagooglecloudidentitytoolkitadminv2monitoringconfig)|false|none|Configuration related to monitoring project activity.|
|multiTenant|[GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig](#schemagooglecloudidentitytoolkitadminv2multitenantconfig)|false|none|Configuration related to multi-tenant functionality.|
|name|string|false|read-only|Output only. The name of the Config resource. Example: "projects/my-awesome-project/config"|
|notification|[GoogleCloudIdentitytoolkitAdminV2NotificationConfig](#schemagooglecloudidentitytoolkitadminv2notificationconfig)|false|none|Configuration related to sending notifications to users.|
|quota|[GoogleCloudIdentitytoolkitAdminV2QuotaConfig](#schemagooglecloudidentitytoolkitadminv2quotaconfig)|false|none|Configuration related to quotas.|
|recaptchaConfig|[GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig](#schemagooglecloudidentitytoolkitadminv2recaptchaconfig)|false|none|The project-level reCAPTCHA config.|
|signIn|[GoogleCloudIdentitytoolkitAdminV2SignInConfig](#schemagooglecloudidentitytoolkitadminv2signinconfig)|false|none|Configuration related to local sign in methods.|
|smsRegionConfig|[GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig](#schemagooglecloudidentitytoolkitadminv2smsregionconfig)|false|none|Configures which regions are enabled for SMS verification code sending.|
|subtype|string|false|read-only|Output only. The subtype of this config.|

#### Enumerated Values

|Property|Value|
|---|---|
|subtype|SUBTYPE_UNSPECIFIED|
|subtype|IDENTITY_PLATFORM|
|subtype|FIREBASE_AUTH|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp">GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2defaultsupportedidp"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2defaultsupportedidp"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2defaultsupportedidp"></a>

```json
{
  "description": "string",
  "idpId": "string"
}
```

Standard Identity Toolkit-trusted IDPs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the Idp|
|idpId|string|false|none|Id the of Idp|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig">GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2defaultsupportedidpconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2defaultsupportedidpconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2defaultsupportedidpconfig"></a>

```json
{
  "appleSignInConfig": {
    "bundleIds": [
      "string"
    ],
    "codeFlowConfig": {
      "keyId": "string",
      "privateKey": "string",
      "teamId": "string"
    }
  },
  "clientId": "string",
  "clientSecret": "string",
  "enabled": true,
  "name": "string"
}
```

Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appleSignInConfig|[GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig](#schemagooglecloudidentitytoolkitadminv2applesigninconfig)|false|none|Additional config for Apple-based projects.|
|clientId|string|false|none|OAuth client ID.|
|clientSecret|string|false|none|OAuth client secret.|
|enabled|boolean|false|none|True if allows the user to sign in with the provider.|
|name|string|false|none|The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2DnsInfo">GoogleCloudIdentitytoolkitAdminV2DnsInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2dnsinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2DnsInfo"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2dnsinfo"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2dnsinfo"></a>

```json
{
  "customDomain": "string",
  "customDomainState": "VERIFICATION_STATE_UNSPECIFIED",
  "domainVerificationRequestTime": "string",
  "pendingCustomDomain": "string",
  "useCustomDomain": true
}
```

Information of custom domain DNS verification. By default, default_domain will be used. A custom domain can be configured using VerifyCustomDomain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDomain|string|false|read-only|Output only. The applied verified custom domain.|
|customDomainState|string|false|read-only|Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful.|
|domainVerificationRequestTime|string(google-datetime)|false|read-only|Output only. The timestamp of initial request for the current domain verification.|
|pendingCustomDomain|string|false|read-only|Output only. The custom domain that's to be verified.|
|useCustomDomain|boolean|false|none|Whether to use custom domain.|

#### Enumerated Values

|Property|Value|
|---|---|
|customDomainState|VERIFICATION_STATE_UNSPECIFIED|
|customDomainState|NOT_STARTED|
|customDomainState|IN_PROGRESS|
|customDomainState|FAILED|
|customDomainState|SUCCEEDED|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Email">GoogleCloudIdentitytoolkitAdminV2Email</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2email"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Email"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2email"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2email"></a>

```json
{
  "enabled": true,
  "passwordRequired": true
}
```

Configuration options related to authenticating a user by their email address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether email auth is enabled for the project or not.|
|passwordRequired|boolean|false|none|Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig">GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2emailprivacyconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2emailprivacyconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2emailprivacyconfig"></a>

```json
{
  "enableImprovedEmailPrivacy": true
}
```

Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableImprovedEmailPrivacy|boolean|false|none|Migrates the project to a state of improved email privacy. For example certain error codes are more generic to avoid giving away information on whether the account exists. In addition, this disables certain features that as a side-effect allow user enumeration. Enabling this toggle disables the fetchSignInMethodsForEmail functionality and changing the user's email to an unverified email. It is recommended to remove dependence on this functionality and enable this toggle to improve user privacy.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2EmailTemplate">GoogleCloudIdentitytoolkitAdminV2EmailTemplate</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2emailtemplate"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2EmailTemplate"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2emailtemplate"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2emailtemplate"></a>

```json
{
  "body": "string",
  "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
  "customized": true,
  "replyTo": "string",
  "senderDisplayName": "string",
  "senderLocalPart": "string",
  "subject": "string"
}
```

Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Email body|
|bodyFormat|string|false|none|Email body format|
|customized|boolean|false|read-only|Output only. Whether the body or subject of the email is customized.|
|replyTo|string|false|none|Reply-to address|
|senderDisplayName|string|false|none|Sender display name|
|senderLocalPart|string|false|none|Local part of From address|
|subject|string|false|none|Subject of the email|

#### Enumerated Values

|Property|Value|
|---|---|
|bodyFormat|BODY_FORMAT_UNSPECIFIED|
|bodyFormat|PLAIN_TEXT|
|bodyFormat|HTML|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials">GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2forwardinboundcredentials"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2forwardinboundcredentials"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2forwardinboundcredentials"></a>

```json
{
  "accessToken": true,
  "idToken": true,
  "refreshToken": true
}
```

Indicates which credentials to pass to the registered Blocking Functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|boolean|false|none|Whether to pass the user's OAuth identity provider's access token.|
|idToken|boolean|false|none|Whether to pass the user's OIDC identity provider's ID token.|
|refreshToken|boolean|false|none|Whether to pass the user's OAuth identity provider's refresh token.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2HashConfig">GoogleCloudIdentitytoolkitAdminV2HashConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2hashconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2HashConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2hashconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2hashconfig"></a>

```json
{
  "algorithm": "HASH_ALGORITHM_UNSPECIFIED",
  "memoryCost": 0,
  "rounds": 0,
  "saltSeparator": "string",
  "signerKey": "string"
}
```

History information of the hash algorithm and key. Different accounts' passwords may be generated by different version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|read-only|Output only. Different password hash algorithms used in Identity Toolkit.|
|memoryCost|integer(int32)|false|read-only|Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.|
|rounds|integer(int32)|false|read-only|Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.|
|saltSeparator|string|false|read-only|Output only. Non-printable character to be inserted between the salt and plain text password in base64.|
|signerKey|string|false|read-only|Output only. Signer key in base64.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|HASH_ALGORITHM_UNSPECIFIED|
|algorithm|HMAC_SHA256|
|algorithm|HMAC_SHA1|
|algorithm|HMAC_MD5|
|algorithm|SCRYPT|
|algorithm|PBKDF_SHA1|
|algorithm|MD5|
|algorithm|HMAC_SHA512|
|algorithm|SHA1|
|algorithm|BCRYPT|
|algorithm|PBKDF2_SHA256|
|algorithm|SHA256|
|algorithm|SHA512|
|algorithm|STANDARD_SCRYPT|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2IdpCertificate">GoogleCloudIdentitytoolkitAdminV2IdpCertificate</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2idpcertificate"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2IdpCertificate"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2idpcertificate"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2idpcertificate"></a>

```json
{
  "x509Certificate": "string"
}
```

The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x509Certificate|string|false|none|The x509 certificate|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2IdpConfig">GoogleCloudIdentitytoolkitAdminV2IdpConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2idpconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2IdpConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2idpconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2idpconfig"></a>

```json
{
  "idpCertificates": [
    {
      "x509Certificate": "string"
    }
  ],
  "idpEntityId": "string",
  "signRequest": true,
  "ssoUrl": "string"
}
```

The SAML IdP (Identity Provider) configuration when the project acts as the relying party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idpCertificates|[[GoogleCloudIdentitytoolkitAdminV2IdpCertificate](#schemagooglecloudidentitytoolkitadminv2idpcertificate)]|false|none|IDP's public keys for verifying signature in the assertions.|
|idpEntityId|string|false|none|Unique identifier for all SAML entities.|
|signRequest|boolean|false|none|Indicates if outbounding SAMLRequest should be signed.|
|ssoUrl|string|false|none|URL to send Authentication request to.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig">GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2inboundsamlconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2inboundsamlconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2inboundsamlconfig"></a>

```json
{
  "displayName": "string",
  "enabled": true,
  "idpConfig": {
    "idpCertificates": [
      {
        "x509Certificate": "string"
      }
    ],
    "idpEntityId": "string",
    "signRequest": true,
    "ssoUrl": "string"
  },
  "name": "string",
  "spConfig": {
    "callbackUri": "string",
    "spCertificates": [
      {
        "expiresAt": "string",
        "x509Certificate": "string"
      }
    ],
    "spEntityId": "string"
  }
}
```

A pair of SAML RP-IDP configurations when the project acts as the relying party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The config's display name set by developers.|
|enabled|boolean|false|none|True if allows the user to sign in with the provider.|
|idpConfig|[GoogleCloudIdentitytoolkitAdminV2IdpConfig](#schemagooglecloudidentitytoolkitadminv2idpconfig)|false|none|The SAML IdP (Identity Provider) configuration when the project acts as the relying party.|
|name|string|false|none|The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.|
|spConfig|[GoogleCloudIdentitytoolkitAdminV2SpConfig](#schemagooglecloudidentitytoolkitadminv2spconfig)|false|none|The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Inheritance">GoogleCloudIdentitytoolkitAdminV2Inheritance</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2inheritance"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Inheritance"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2inheritance"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2inheritance"></a>

```json
{
  "emailSendingConfig": true
}
```

Settings that the tenants will inherit from project level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailSendingConfig|boolean|false|none|Whether to allow the tenant to inherit custom domains, email templates, and custom SMTP settings. If true, email sent from tenant will follow the project level email sending configurations. If false (by default), emails will go with the default settings with no customizations.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest">GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2initializeidentityplatformrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2initializeidentityplatformrequest"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2initializeidentityplatformrequest"></a>

```json
{}
```

Request for InitializeIdentityPlatform.

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse">GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2initializeidentityplatformresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2initializeidentityplatformresponse"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2initializeidentityplatformresponse"></a>

```json
{}
```

Response for InitializeIdentityPlatform. Empty for now.

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse">GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2listdefaultsupportedidpconfigsresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2listdefaultsupportedidpconfigsresponse"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2listdefaultsupportedidpconfigsresponse"></a>

```json
{
  "defaultSupportedIdpConfigs": [
    {
      "appleSignInConfig": {
        "bundleIds": [
          "string"
        ],
        "codeFlowConfig": {
          "keyId": "string",
          "privateKey": "string",
          "teamId": "string"
        }
      },
      "clientId": "string",
      "clientSecret": "string",
      "enabled": true,
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for DefaultSupportedIdpConfigs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultSupportedIdpConfigs|[[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig](#schemagooglecloudidentitytoolkitadminv2defaultsupportedidpconfig)]|false|none|The set of configs.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse">GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2listdefaultsupportedidpsresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2listdefaultsupportedidpsresponse"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2listdefaultsupportedidpsresponse"></a>

```json
{
  "defaultSupportedIdps": [
    {
      "description": "string",
      "idpId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListDefaultSupportedIdps

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultSupportedIdps|[[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp](#schemagooglecloudidentitytoolkitadminv2defaultsupportedidp)]|false|none|The set of configs.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse">GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2listinboundsamlconfigsresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2listinboundsamlconfigsresponse"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2listinboundsamlconfigsresponse"></a>

```json
{
  "inboundSamlConfigs": [
    {
      "displayName": "string",
      "enabled": true,
      "idpConfig": {
        "idpCertificates": [
          {
            "x509Certificate": "string"
          }
        ],
        "idpEntityId": "string",
        "signRequest": true,
        "ssoUrl": "string"
      },
      "name": "string",
      "spConfig": {
        "callbackUri": "string",
        "spCertificates": [
          {
            "expiresAt": "string",
            "x509Certificate": "string"
          }
        ],
        "spEntityId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListInboundSamlConfigs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboundSamlConfigs|[[GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig](#schemagooglecloudidentitytoolkitadminv2inboundsamlconfig)]|false|none|The set of configs.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse">GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2listoauthidpconfigsresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2listoauthidpconfigsresponse"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2listoauthidpconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "oauthIdpConfigs": [
    {
      "clientId": "string",
      "clientSecret": "string",
      "displayName": "string",
      "enabled": true,
      "issuer": "string",
      "name": "string",
      "responseType": {
        "code": true,
        "idToken": true,
        "token": true
      }
    }
  ]
}
```

Response for ListOAuthIdpConfigs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|oauthIdpConfigs|[[GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig](#schemagooglecloudidentitytoolkitadminv2oauthidpconfig)]|false|none|The set of configs.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse">GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2listtenantsresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2listtenantsresponse"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2listtenantsresponse"></a>

```json
{
  "nextPageToken": "string",
  "tenants": [
    {
      "allowPasswordSignup": true,
      "autodeleteAnonymousUsers": true,
      "client": {
        "permissions": {
          "disabledUserDeletion": true,
          "disabledUserSignup": true
        }
      },
      "disableAuth": true,
      "displayName": "string",
      "emailPrivacyConfig": {
        "enableImprovedEmailPrivacy": true
      },
      "enableAnonymousUser": true,
      "enableEmailLinkSignin": true,
      "hashConfig": {
        "algorithm": "HASH_ALGORITHM_UNSPECIFIED",
        "memoryCost": 0,
        "rounds": 0,
        "saltSeparator": "string",
        "signerKey": "string"
      },
      "inheritance": {
        "emailSendingConfig": true
      },
      "mfaConfig": {
        "enabledProviders": [
          "PROVIDER_UNSPECIFIED"
        ],
        "providerConfigs": [
          {
            "state": "MFA_STATE_UNSPECIFIED",
            "totpProviderConfig": {
              "adjacentIntervals": 0
            }
          }
        ],
        "state": "STATE_UNSPECIFIED"
      },
      "monitoring": {
        "requestLogging": {
          "enabled": true
        }
      },
      "name": "string",
      "recaptchaConfig": {
        "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
        "managedRules": [
          {
            "action": "RECAPTCHA_ACTION_UNSPECIFIED",
            "endScore": 0
          }
        ],
        "recaptchaKeys": [
          {
            "key": "string",
            "type": "CLIENT_TYPE_UNSPECIFIED"
          }
        ],
        "useAccountDefender": true
      },
      "smsRegionConfig": {
        "allowByDefault": {
          "disallowedRegions": [
            "string"
          ]
        },
        "allowlistOnly": {
          "allowedRegions": [
            "string"
          ]
        }
      },
      "testPhoneNumbers": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

Response message for ListTenants.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to get the next page of results.|
|tenants|[[GoogleCloudIdentitytoolkitAdminV2Tenant](#schemagooglecloudidentitytoolkitadminv2tenant)]|false|none|A list of tenants under the given agent project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2MonitoringConfig">GoogleCloudIdentitytoolkitAdminV2MonitoringConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2monitoringconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2MonitoringConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2monitoringconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2monitoringconfig"></a>

```json
{
  "requestLogging": {
    "enabled": true
  }
}
```

Configuration related to monitoring project activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestLogging|[GoogleCloudIdentitytoolkitAdminV2RequestLogging](#schemagooglecloudidentitytoolkitadminv2requestlogging)|false|none|Configuration for logging requests made to this project to Stackdriver Logging|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig">GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2multifactorauthconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2multifactorauthconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2multifactorauthconfig"></a>

```json
{
  "enabledProviders": [
    "PROVIDER_UNSPECIFIED"
  ],
  "providerConfigs": [
    {
      "state": "MFA_STATE_UNSPECIFIED",
      "totpProviderConfig": {
        "adjacentIntervals": 0
      }
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

Options related to MultiFactor Authentication for the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledProviders|[string]|false|none|A list of usable second factors for this project.|
|providerConfigs|[[GoogleCloudIdentitytoolkitAdminV2ProviderConfig](#schemagooglecloudidentitytoolkitadminv2providerconfig)]|false|none|A list of usable second factors for this project along with their configurations. This field does not support phone based MFA, for that use the 'enabled_providers' field.|
|state|string|false|none|Whether MultiFactor Authentication has been enabled for this project.|

#### Enumerated Values

|Property|Value|
|---|---|
|enabledProviders|PROVIDER_UNSPECIFIED|
|enabledProviders|PHONE_SMS|
|state|STATE_UNSPECIFIED|
|state|DISABLED|
|state|ENABLED|
|state|MANDATORY|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig">GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2multitenantconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2multitenantconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2multitenantconfig"></a>

```json
{
  "allowTenants": true,
  "defaultTenantLocation": "string"
}
```

Configuration related to multi-tenant functionality.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowTenants|boolean|false|none|Whether this project can have tenants or not.|
|defaultTenantLocation|string|false|none|The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2NotificationConfig">GoogleCloudIdentitytoolkitAdminV2NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2notificationconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2NotificationConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2notificationconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2notificationconfig"></a>

```json
{
  "defaultLocale": "string",
  "sendEmail": {
    "callbackUri": "string",
    "changeEmailTemplate": {
      "body": "string",
      "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
      "customized": true,
      "replyTo": "string",
      "senderDisplayName": "string",
      "senderLocalPart": "string",
      "subject": "string"
    },
    "dnsInfo": {
      "customDomain": "string",
      "customDomainState": "VERIFICATION_STATE_UNSPECIFIED",
      "domainVerificationRequestTime": "string",
      "pendingCustomDomain": "string",
      "useCustomDomain": true
    },
    "legacyResetPasswordTemplate": {
      "body": "string",
      "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
      "customized": true,
      "replyTo": "string",
      "senderDisplayName": "string",
      "senderLocalPart": "string",
      "subject": "string"
    },
    "method": "METHOD_UNSPECIFIED",
    "resetPasswordTemplate": {
      "body": "string",
      "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
      "customized": true,
      "replyTo": "string",
      "senderDisplayName": "string",
      "senderLocalPart": "string",
      "subject": "string"
    },
    "revertSecondFactorAdditionTemplate": {
      "body": "string",
      "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
      "customized": true,
      "replyTo": "string",
      "senderDisplayName": "string",
      "senderLocalPart": "string",
      "subject": "string"
    },
    "smtp": {
      "host": "string",
      "password": "string",
      "port": 0,
      "securityMode": "SECURITY_MODE_UNSPECIFIED",
      "senderEmail": "string",
      "username": "string"
    },
    "verifyEmailTemplate": {
      "body": "string",
      "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
      "customized": true,
      "replyTo": "string",
      "senderDisplayName": "string",
      "senderLocalPart": "string",
      "subject": "string"
    }
  },
  "sendSms": {
    "smsTemplate": {
      "content": "string"
    },
    "useDeviceLocale": true
  }
}
```

Configuration related to sending notifications to users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLocale|string|false|none|Default locale used for email and SMS in IETF BCP 47 format.|
|sendEmail|[GoogleCloudIdentitytoolkitAdminV2SendEmail](#schemagooglecloudidentitytoolkitadminv2sendemail)|false|none|Options for email sending.|
|sendSms|[GoogleCloudIdentitytoolkitAdminV2SendSms](#schemagooglecloudidentitytoolkitadminv2sendsms)|false|none|Options for SMS sending.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig">GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2oauthidpconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2oauthidpconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2oauthidpconfig"></a>

```json
{
  "clientId": "string",
  "clientSecret": "string",
  "displayName": "string",
  "enabled": true,
  "issuer": "string",
  "name": "string",
  "responseType": {
    "code": true,
    "idToken": true,
    "token": true
  }
}
```

Configuration options for authenticating with an OAuth IDP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|The client id of an OAuth client.|
|clientSecret|string|false|none|The client secret of the OAuth client, to enable OIDC code flow.|
|displayName|string|false|none|The config's display name set by developers.|
|enabled|boolean|false|none|True if allows the user to sign in with the provider.|
|issuer|string|false|none|For OIDC Idps, the issuer identifier.|
|name|string|false|none|The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.|
|responseType|[GoogleCloudIdentitytoolkitAdminV2OAuthResponseType](#schemagooglecloudidentitytoolkitadminv2oauthresponsetype)|false|none|The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2OAuthResponseType">GoogleCloudIdentitytoolkitAdminV2OAuthResponseType</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2oauthresponsetype"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2OAuthResponseType"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2oauthresponsetype"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2oauthresponsetype"></a>

```json
{
  "code": true,
  "idToken": true,
  "token": true
}
```

The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|boolean|false|none|If true, authorization code is returned from IdP's authorization endpoint.|
|idToken|boolean|false|none|If true, ID token is returned from IdP's authorization endpoint.|
|token|boolean|false|none|Do not use. The `token` response type is not supported at the moment.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Permissions">GoogleCloudIdentitytoolkitAdminV2Permissions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2permissions"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Permissions"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2permissions"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2permissions"></a>

```json
{
  "disabledUserDeletion": true,
  "disabledUserSignup": true
}
```

Configuration related to restricting a user's ability to affect their account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledUserDeletion|boolean|false|none|When true, end users cannot delete their account on the associated project through any of our API methods|
|disabledUserSignup|boolean|false|none|When true, end users cannot sign up for a new account on the associated project through any of our API methods|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2PhoneNumber">GoogleCloudIdentitytoolkitAdminV2PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2phonenumber"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2PhoneNumber"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2phonenumber"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2phonenumber"></a>

```json
{
  "enabled": true,
  "testPhoneNumbers": {
    "property1": "string",
    "property2": "string"
  }
}
```

Configuration options related to authenticated a user by their phone number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether phone number auth is enabled for the project or not.|
|testPhoneNumbers|object|false|none|A map of that can be used for phone auth testing.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2ProviderConfig">GoogleCloudIdentitytoolkitAdminV2ProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2providerconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2ProviderConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2providerconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2providerconfig"></a>

```json
{
  "state": "MFA_STATE_UNSPECIFIED",
  "totpProviderConfig": {
    "adjacentIntervals": 0
  }
}
```

ProviderConfig describes the supported MFA providers along with their configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Describes the state of the MultiFactor Authentication type.|
|totpProviderConfig|[GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig](#schemagooglecloudidentitytoolkitadminv2totpmfaproviderconfig)|false|none|TOTP MFA provider config for this project.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|MFA_STATE_UNSPECIFIED|
|state|DISABLED|
|state|ENABLED|
|state|MANDATORY|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2QuotaConfig">GoogleCloudIdentitytoolkitAdminV2QuotaConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2quotaconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2QuotaConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2quotaconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2quotaconfig"></a>

```json
{
  "signUpQuotaConfig": {
    "quota": "string",
    "quotaDuration": "string",
    "startTime": "string"
  }
}
```

Configuration related to quotas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signUpQuotaConfig|[GoogleCloudIdentitytoolkitAdminV2TemporaryQuota](#schemagooglecloudidentitytoolkitadminv2temporaryquota)|false|none|Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig">GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2recaptchaconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2recaptchaconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2recaptchaconfig"></a>

```json
{
  "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
  "managedRules": [
    {
      "action": "RECAPTCHA_ACTION_UNSPECIFIED",
      "endScore": 0
    }
  ],
  "recaptchaKeys": [
    {
      "key": "string",
      "type": "CLIENT_TYPE_UNSPECIFIED"
    }
  ],
  "useAccountDefender": true
}
```

The reCAPTCHA Enterprise integration config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailPasswordEnforcementState|string|false|none|The reCAPTCHA config for email/password provider, containing the enforcement status. The email/password provider contains all related user flows protected by reCAPTCHA.|
|managedRules|[[GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule](#schemagooglecloudidentitytoolkitadminv2recaptchamanagedrule)]|false|none|The managed rules for authentication action based on reCAPTCHA scores. The rules are shared across providers for a given tenant project.|
|recaptchaKeys|[[GoogleCloudIdentitytoolkitAdminV2RecaptchaKey](#schemagooglecloudidentitytoolkitadminv2recaptchakey)]|false|read-only|Output only. The reCAPTCHA keys.|
|useAccountDefender|boolean|false|none|Whether to use the account defender for reCAPTCHA assessment. Defaults to `false`.|

#### Enumerated Values

|Property|Value|
|---|---|
|emailPasswordEnforcementState|RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED|
|emailPasswordEnforcementState|OFF|
|emailPasswordEnforcementState|AUDIT|
|emailPasswordEnforcementState|ENFORCE|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2RecaptchaKey">GoogleCloudIdentitytoolkitAdminV2RecaptchaKey</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2recaptchakey"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2RecaptchaKey"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2recaptchakey"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2recaptchakey"></a>

```json
{
  "key": "string",
  "type": "CLIENT_TYPE_UNSPECIFIED"
}
```

The reCAPTCHA key config. reCAPTCHA Enterprise offers different keys for different client platforms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}"|
|type|string|false|none|The client's platform type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CLIENT_TYPE_UNSPECIFIED|
|type|WEB|
|type|IOS|
|type|ANDROID|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule">GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2recaptchamanagedrule"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2recaptchamanagedrule"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2recaptchamanagedrule"></a>

```json
{
  "action": "RECAPTCHA_ACTION_UNSPECIFIED",
  "endScore": 0
}
```

The config for a reCAPTCHA managed rule. Models a single interval [start_score, end_score]. The start_score is implicit. It is either the closest smaller end_score (if one is available) or 0. Intervals in aggregate span [0, 1] without overlapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action taken if the reCAPTCHA score of a request is within the interval [start_score, end_score].|
|endScore|number(float)|false|none|The end score (inclusive) of the score range for an action. Must be a value between 0.0 and 1.0, at 11 discrete values; e.g. 0, 0.1, 0.2, 0.3, ... 0.9, 1.0. A score of 0.0 indicates the riskiest request (likely a bot), whereas 1.0 indicates the safest request (likely a human). See https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|RECAPTCHA_ACTION_UNSPECIFIED|
|action|BLOCK|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2RequestLogging">GoogleCloudIdentitytoolkitAdminV2RequestLogging</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2requestlogging"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2RequestLogging"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2requestlogging"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2requestlogging"></a>

```json
{
  "enabled": true
}
```

Configuration for logging requests made to this project to Stackdriver Logging

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether logging is enabled for this project or not.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2SendEmail">GoogleCloudIdentitytoolkitAdminV2SendEmail</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2sendemail"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2SendEmail"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2sendemail"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2sendemail"></a>

```json
{
  "callbackUri": "string",
  "changeEmailTemplate": {
    "body": "string",
    "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
    "customized": true,
    "replyTo": "string",
    "senderDisplayName": "string",
    "senderLocalPart": "string",
    "subject": "string"
  },
  "dnsInfo": {
    "customDomain": "string",
    "customDomainState": "VERIFICATION_STATE_UNSPECIFIED",
    "domainVerificationRequestTime": "string",
    "pendingCustomDomain": "string",
    "useCustomDomain": true
  },
  "legacyResetPasswordTemplate": {
    "body": "string",
    "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
    "customized": true,
    "replyTo": "string",
    "senderDisplayName": "string",
    "senderLocalPart": "string",
    "subject": "string"
  },
  "method": "METHOD_UNSPECIFIED",
  "resetPasswordTemplate": {
    "body": "string",
    "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
    "customized": true,
    "replyTo": "string",
    "senderDisplayName": "string",
    "senderLocalPart": "string",
    "subject": "string"
  },
  "revertSecondFactorAdditionTemplate": {
    "body": "string",
    "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
    "customized": true,
    "replyTo": "string",
    "senderDisplayName": "string",
    "senderLocalPart": "string",
    "subject": "string"
  },
  "smtp": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "SECURITY_MODE_UNSPECIFIED",
    "senderEmail": "string",
    "username": "string"
  },
  "verifyEmailTemplate": {
    "body": "string",
    "bodyFormat": "BODY_FORMAT_UNSPECIFIED",
    "customized": true,
    "replyTo": "string",
    "senderDisplayName": "string",
    "senderLocalPart": "string",
    "subject": "string"
  }
}
```

Options for email sending.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUri|string|false|none|action url in email template.|
|changeEmailTemplate|[GoogleCloudIdentitytoolkitAdminV2EmailTemplate](#schemagooglecloudidentitytoolkitadminv2emailtemplate)|false|none|Email template for change email|
|dnsInfo|[GoogleCloudIdentitytoolkitAdminV2DnsInfo](#schemagooglecloudidentitytoolkitadminv2dnsinfo)|false|none|Information of custom domain DNS verification.|
|legacyResetPasswordTemplate|[GoogleCloudIdentitytoolkitAdminV2EmailTemplate](#schemagooglecloudidentitytoolkitadminv2emailtemplate)|false|none|Reset password email template for legacy Firebase V1 app.|
|method|string|false|none|The method used for sending an email.|
|resetPasswordTemplate|[GoogleCloudIdentitytoolkitAdminV2EmailTemplate](#schemagooglecloudidentitytoolkitadminv2emailtemplate)|false|none|Email template for reset password|
|revertSecondFactorAdditionTemplate|[GoogleCloudIdentitytoolkitAdminV2EmailTemplate](#schemagooglecloudidentitytoolkitadminv2emailtemplate)|false|none|Email template for reverting second factor addition emails|
|smtp|[GoogleCloudIdentitytoolkitAdminV2Smtp](#schemagooglecloudidentitytoolkitadminv2smtp)|false|none|Use a custom SMTP relay|
|verifyEmailTemplate|[GoogleCloudIdentitytoolkitAdminV2EmailTemplate](#schemagooglecloudidentitytoolkitadminv2emailtemplate)|false|none|Email template for verify email|

#### Enumerated Values

|Property|Value|
|---|---|
|method|METHOD_UNSPECIFIED|
|method|DEFAULT|
|method|CUSTOM_SMTP|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2SendSms">GoogleCloudIdentitytoolkitAdminV2SendSms</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2sendsms"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2SendSms"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2sendsms"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2sendsms"></a>

```json
{
  "smsTemplate": {
    "content": "string"
  },
  "useDeviceLocale": true
}
```

Options for SMS sending.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|smsTemplate|[GoogleCloudIdentitytoolkitAdminV2SmsTemplate](#schemagooglecloudidentitytoolkitadminv2smstemplate)|false|none|Output only. The template to use when sending an SMS.|
|useDeviceLocale|boolean|false|none|Whether to use the accept_language header for SMS.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2SignInConfig">GoogleCloudIdentitytoolkitAdminV2SignInConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2signinconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2SignInConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2signinconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2signinconfig"></a>

```json
{
  "allowDuplicateEmails": true,
  "anonymous": {
    "enabled": true
  },
  "email": {
    "enabled": true,
    "passwordRequired": true
  },
  "hashConfig": {
    "algorithm": "HASH_ALGORITHM_UNSPECIFIED",
    "memoryCost": 0,
    "rounds": 0,
    "saltSeparator": "string",
    "signerKey": "string"
  },
  "phoneNumber": {
    "enabled": true,
    "testPhoneNumbers": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Configuration related to local sign in methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowDuplicateEmails|boolean|false|none|Whether to allow more than one account to have the same email.|
|anonymous|[GoogleCloudIdentitytoolkitAdminV2Anonymous](#schemagooglecloudidentitytoolkitadminv2anonymous)|false|none|Configuration options related to authenticating an anonymous user.|
|email|[GoogleCloudIdentitytoolkitAdminV2Email](#schemagooglecloudidentitytoolkitadminv2email)|false|none|Configuration options related to authenticating a user by their email address.|
|hashConfig|[GoogleCloudIdentitytoolkitAdminV2HashConfig](#schemagooglecloudidentitytoolkitadminv2hashconfig)|false|none|Output only. Hash config information.|
|phoneNumber|[GoogleCloudIdentitytoolkitAdminV2PhoneNumber](#schemagooglecloudidentitytoolkitadminv2phonenumber)|false|none|Configuration options related to authenticated a user by their phone number.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig">GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2smsregionconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2smsregionconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2smsregionconfig"></a>

```json
{
  "allowByDefault": {
    "disallowedRegions": [
      "string"
    ]
  },
  "allowlistOnly": {
    "allowedRegions": [
      "string"
    ]
  }
}
```

Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowByDefault|[GoogleCloudIdentitytoolkitAdminV2AllowByDefault](#schemagooglecloudidentitytoolkitadminv2allowbydefault)|false|none|A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list.|
|allowlistOnly|[GoogleCloudIdentitytoolkitAdminV2AllowlistOnly](#schemagooglecloudidentitytoolkitadminv2allowlistonly)|false|none|A policy of only allowing regions by explicitly adding them to an allowlist.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2SmsTemplate">GoogleCloudIdentitytoolkitAdminV2SmsTemplate</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2smstemplate"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2SmsTemplate"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2smstemplate"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2smstemplate"></a>

```json
{
  "content": "string"
}
```

The template to use when sending an SMS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|read-only|Output only. The SMS's content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app's display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Smtp">GoogleCloudIdentitytoolkitAdminV2Smtp</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2smtp"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Smtp"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2smtp"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2smtp"></a>

```json
{
  "host": "string",
  "password": "string",
  "port": 0,
  "securityMode": "SECURITY_MODE_UNSPECIFIED",
  "senderEmail": "string",
  "username": "string"
}
```

Configuration for SMTP relay

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|SMTP relay host|
|password|string|false|none|SMTP relay password|
|port|integer(int32)|false|none|SMTP relay port|
|securityMode|string|false|none|SMTP security mode.|
|senderEmail|string|false|none|Sender email for the SMTP relay|
|username|string|false|none|SMTP relay username|

#### Enumerated Values

|Property|Value|
|---|---|
|securityMode|SECURITY_MODE_UNSPECIFIED|
|securityMode|SSL|
|securityMode|START_TLS|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2SpCertificate">GoogleCloudIdentitytoolkitAdminV2SpCertificate</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2spcertificate"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2SpCertificate"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2spcertificate"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2spcertificate"></a>

```json
{
  "expiresAt": "string",
  "x509Certificate": "string"
}
```

The SP's certificate data for IDP to verify the SAMLRequest generated by the SP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiresAt|string(google-datetime)|false|none|Timestamp of the cert expiration instance.|
|x509Certificate|string|false|none|Self-signed public certificate.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2SpConfig">GoogleCloudIdentitytoolkitAdminV2SpConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2spconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2SpConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2spconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2spconfig"></a>

```json
{
  "callbackUri": "string",
  "spCertificates": [
    {
      "expiresAt": "string",
      "x509Certificate": "string"
    }
  ],
  "spEntityId": "string"
}
```

The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUri|string|false|none|Callback URI where responses from IDP are handled.|
|spCertificates|[[GoogleCloudIdentitytoolkitAdminV2SpCertificate](#schemagooglecloudidentitytoolkitadminv2spcertificate)]|false|read-only|Output only. Public certificates generated by the server to verify the signature in SAMLRequest in the SP-initiated flow.|
|spEntityId|string|false|none|Unique identifier for all SAML entities.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2TemporaryQuota">GoogleCloudIdentitytoolkitAdminV2TemporaryQuota</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2temporaryquota"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2TemporaryQuota"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2temporaryquota"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2temporaryquota"></a>

```json
{
  "quota": "string",
  "quotaDuration": "string",
  "startTime": "string"
}
```

Temporary quota increase / decrease

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quota|string(int64)|false|none|Corresponds to the 'refill_token_count' field in QuotaServer config|
|quotaDuration|string(google-duration)|false|none|How long this quota will be active for|
|startTime|string(google-datetime)|false|none|When this quota will take affect|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Tenant">GoogleCloudIdentitytoolkitAdminV2Tenant</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2tenant"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Tenant"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2tenant"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2tenant"></a>

```json
{
  "allowPasswordSignup": true,
  "autodeleteAnonymousUsers": true,
  "client": {
    "permissions": {
      "disabledUserDeletion": true,
      "disabledUserSignup": true
    }
  },
  "disableAuth": true,
  "displayName": "string",
  "emailPrivacyConfig": {
    "enableImprovedEmailPrivacy": true
  },
  "enableAnonymousUser": true,
  "enableEmailLinkSignin": true,
  "hashConfig": {
    "algorithm": "HASH_ALGORITHM_UNSPECIFIED",
    "memoryCost": 0,
    "rounds": 0,
    "saltSeparator": "string",
    "signerKey": "string"
  },
  "inheritance": {
    "emailSendingConfig": true
  },
  "mfaConfig": {
    "enabledProviders": [
      "PROVIDER_UNSPECIFIED"
    ],
    "providerConfigs": [
      {
        "state": "MFA_STATE_UNSPECIFIED",
        "totpProviderConfig": {
          "adjacentIntervals": 0
        }
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "monitoring": {
    "requestLogging": {
      "enabled": true
    }
  },
  "name": "string",
  "recaptchaConfig": {
    "emailPasswordEnforcementState": "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED",
    "managedRules": [
      {
        "action": "RECAPTCHA_ACTION_UNSPECIFIED",
        "endScore": 0
      }
    ],
    "recaptchaKeys": [
      {
        "key": "string",
        "type": "CLIENT_TYPE_UNSPECIFIED"
      }
    ],
    "useAccountDefender": true
  },
  "smsRegionConfig": {
    "allowByDefault": {
      "disallowedRegions": [
        "string"
      ]
    },
    "allowlistOnly": {
      "allowedRegions": [
        "string"
      ]
    }
  },
  "testPhoneNumbers": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Tenant contains configuration for the tenant in a multi-tenant project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowPasswordSignup|boolean|false|none|Whether to allow email/password user authentication.|
|autodeleteAnonymousUsers|boolean|false|none|Whether anonymous users will be auto-deleted after a period of 30 days.|
|client|[GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig](#schemagooglecloudidentitytoolkitadminv2clientpermissionconfig)|false|none|Options related to how clients making requests on behalf of a project should be configured.|
|disableAuth|boolean|false|none|Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users.|
|displayName|string|false|none|Display name of the tenant.|
|emailPrivacyConfig|[GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig](#schemagooglecloudidentitytoolkitadminv2emailprivacyconfig)|false|none|Configuration for settings related to email privacy and public visibility.|
|enableAnonymousUser|boolean|false|none|Whether to enable anonymous user authentication.|
|enableEmailLinkSignin|boolean|false|none|Whether to enable email link user authentication.|
|hashConfig|[GoogleCloudIdentitytoolkitAdminV2HashConfig](#schemagooglecloudidentitytoolkitadminv2hashconfig)|false|none|Output only. Hash config information of a tenant for display on Pantheon. This can only be displayed on Pantheon to avoid the sensitive information to get accidentally leaked. Only returned in GetTenant response to restrict reading of this information. Requires firebaseauth.configs.getHashConfig permission on the agent project for returning this field.|
|inheritance|[GoogleCloudIdentitytoolkitAdminV2Inheritance](#schemagooglecloudidentitytoolkitadminv2inheritance)|false|none|Specify the settings that the tenant could inherit.|
|mfaConfig|[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig](#schemagooglecloudidentitytoolkitadminv2multifactorauthconfig)|false|none|The tenant-level configuration of MFA options.|
|monitoring|[GoogleCloudIdentitytoolkitAdminV2MonitoringConfig](#schemagooglecloudidentitytoolkitadminv2monitoringconfig)|false|none|Configuration related to monitoring project activity.|
|name|string|false|read-only|Output only. Resource name of a tenant. For example: "projects/{project-id}/tenants/{tenant-id}"|
|recaptchaConfig|[GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig](#schemagooglecloudidentitytoolkitadminv2recaptchaconfig)|false|none|The tenant-level reCAPTCHA config.|
|smsRegionConfig|[GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig](#schemagooglecloudidentitytoolkitadminv2smsregionconfig)|false|none|Configures which regions are enabled for SMS verification code sending.|
|testPhoneNumbers|object|false|none|A map of pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded).|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig">GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2totpmfaproviderconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2totpmfaproviderconfig"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2totpmfaproviderconfig"></a>

```json
{
  "adjacentIntervals": 0
}
```

TotpMFAProviderConfig represents the TOTP based MFA provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjacentIntervals|integer(int32)|false|none|The allowed number of adjacent intervals that will be used for verification to avoid clock skew.|

<h2 id="tocS_GoogleCloudIdentitytoolkitAdminV2Trigger">GoogleCloudIdentitytoolkitAdminV2Trigger</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitadminv2trigger"></a>
<a id="schema_GoogleCloudIdentitytoolkitAdminV2Trigger"></a>
<a id="tocSgooglecloudidentitytoolkitadminv2trigger"></a>
<a id="tocsgooglecloudidentitytoolkitadminv2trigger"></a>

```json
{
  "functionUri": "string",
  "updateTime": "string"
}
```

Synchronous Cloud Function with HTTP Trigger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionUri|string|false|none|HTTP URI trigger for the Cloud Function.|
|updateTime|string(google-datetime)|false|none|When the trigger was changed.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse">GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2authenticatorassertionresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2authenticatorassertionresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2authenticatorassertionresponse"></a>

```json
{
  "authenticatorData": "string",
  "clientDataJson": "string",
  "signature": "string",
  "userHandle": "string"
}
```

Authentication response from a FIDO authenticator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticatorData|string(byte)|false|none|The AuthenticatorData from the authenticator.|
|clientDataJson|string(byte)|false|none|The CollectedClientData object from the authenticator.|
|signature|string(byte)|false|none|The signature from the authenticator.|
|userHandle|string(byte)|false|none|The user handle.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse">GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2authenticatorattestationresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2authenticatorattestationresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2authenticatorattestationresponse"></a>

```json
{
  "attestationObject": "string",
  "clientDataJson": "string",
  "transports": [
    "string"
  ]
}
```

Attestation response from a FIDO authenticator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestationObject|string(byte)|false|none|The attestation object from the authenticator.|
|clientDataJson|string(byte)|false|none|The CollectedClientData object from the authenticator.|
|transports|[string]|false|none|Authenticator transports that are supported by the authenticator.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse">GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2authenticatorauthenticationresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2authenticatorauthenticationresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2authenticatorauthenticationresponse"></a>

```json
{
  "authenticatorAssertionResponse": {
    "authenticatorData": "string",
    "clientDataJson": "string",
    "signature": "string",
    "userHandle": "string"
  },
  "credentialId": "string",
  "credentialType": "string"
}
```

Authenticator response to authenticate the user with an existing FIDO key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticatorAssertionResponse|[GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse](#schemagooglecloudidentitytoolkitv2authenticatorassertionresponse)|false|none|Authentication assertion from the authenticator.|
|credentialId|string(byte)|false|none|Identifier for the authentication credential.|
|credentialType|string|false|none|The type of public key.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse">GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2authenticatorregistrationresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2authenticatorregistrationresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2authenticatorregistrationresponse"></a>

```json
{
  "authenticatorAttestationResponse": {
    "attestationObject": "string",
    "clientDataJson": "string",
    "transports": [
      "string"
    ]
  },
  "credentialId": "string",
  "credentialType": "string"
}
```

Authenticator response to register a new FIDO key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticatorAttestationResponse|[GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse](#schemagooglecloudidentitytoolkitv2authenticatorattestationresponse)|false|none|The attestation response object as described in the spec.|
|credentialId|string(byte)|false|none|Identifier for the registered credential.|
|credentialType|string|false|none|The type of credential.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2AuthenticatorSelectionCriteria">GoogleCloudIdentitytoolkitV2AuthenticatorSelectionCriteria</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2authenticatorselectioncriteria"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2AuthenticatorSelectionCriteria"></a>
<a id="tocSgooglecloudidentitytoolkitv2authenticatorselectioncriteria"></a>
<a id="tocsgooglecloudidentitytoolkitv2authenticatorselectioncriteria"></a>

```json
{
  "authenticatorAttachment": "string",
  "requireResidentKey": true,
  "userVerification": "string"
}
```

Criteria for the authenticator to create a registered FIDO key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticatorAttachment|string|false|none|The preferred authenticator attachment modality.|
|requireResidentKey|boolean|false|none|Whether resident key is required.|
|userVerification|string|false|none|The Relying Party's user verification requirements.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2AutoRetrievalInfo">GoogleCloudIdentitytoolkitV2AutoRetrievalInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2autoretrievalinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2AutoRetrievalInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2autoretrievalinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2autoretrievalinfo"></a>

```json
{
  "appSignatureHash": "string"
}
```

The information required to auto-retrieve an SMS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appSignatureHash|string|false|none|The Android app's signature hash for Google Play Service's SMS Retriever API.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest">GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfaenrollmentrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfaenrollmentrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfaenrollmentrequest"></a>

```json
{
  "displayName": "string",
  "idToken": "string",
  "phoneVerificationInfo": {
    "androidVerificationProof": "string",
    "code": "string",
    "phoneNumber": "string",
    "sessionInfo": "string"
  },
  "tenantId": "string",
  "totpVerificationInfo": {
    "sessionInfo": "string",
    "verificationCode": "string"
  }
}
```

Finishes enrolling a second factor for the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name which is entered by users to distinguish between different second factors with same type or different type.|
|idToken|string|false|none|Required. ID token.|
|phoneVerificationInfo|[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2finalizemfaphonerequestinfo)|false|none|Verification info to authorize sending an SMS for phone verification.|
|tenantId|string|false|none|The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.|
|totpVerificationInfo|[GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo](#schemagooglecloudidentitytoolkitv2finalizemfatotpenrollmentrequestinfo)|false|none|Verification information for TOTP.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse">GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfaenrollmentresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfaenrollmentresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfaenrollmentresponse"></a>

```json
{
  "idToken": "string",
  "phoneAuthInfo": {
    "androidVerificationProof": "string",
    "androidVerificationProofExpireTime": "string",
    "phoneNumber": "string"
  },
  "refreshToken": "string",
  "totpAuthInfo": {}
}
```

FinalizeMfaEnrollment response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|ID token updated to reflect MFA enrollment.|
|phoneAuthInfo|[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo](#schemagooglecloudidentitytoolkitv2finalizemfaphoneresponseinfo)|false|none|Auxiliary auth info specific to phone auth.|
|refreshToken|string|false|none|Refresh token updated to reflect MFA enrollment.|
|totpAuthInfo|[GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo](#schemagooglecloudidentitytoolkitv2finalizemfatotpenrollmentresponseinfo)|false|none|Auxiliary auth info specific to TOTP auth.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo">GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfaphonerequestinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfaphonerequestinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfaphonerequestinfo"></a>

```json
{
  "androidVerificationProof": "string",
  "code": "string",
  "phoneNumber": "string",
  "sessionInfo": "string"
}
```

Phone Verification info for a FinalizeMfa request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidVerificationProof|string|false|none|Android only. Uses for "instant" phone number verification though GmsCore.|
|code|string|false|none|User-entered verification code.|
|phoneNumber|string|false|none|Required if Android verification proof is presented.|
|sessionInfo|string|false|none|An opaque string that represents the enrollment session.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo">GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfaphoneresponseinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfaphoneresponseinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfaphoneresponseinfo"></a>

```json
{
  "androidVerificationProof": "string",
  "androidVerificationProofExpireTime": "string",
  "phoneNumber": "string"
}
```

Phone Verification info for a FinalizeMfa response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidVerificationProof|string|false|none|Android only. Long-lived replacement for valid code tied to android device.|
|androidVerificationProofExpireTime|string(google-datetime)|false|none|Android only. Expiration time of verification proof in seconds.|
|phoneNumber|string|false|none|For Android verification proof.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest">GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfasigninrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfasigninrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfasigninrequest"></a>

```json
{
  "mfaEnrollmentId": "string",
  "mfaPendingCredential": "string",
  "phoneVerificationInfo": {
    "androidVerificationProof": "string",
    "code": "string",
    "phoneNumber": "string",
    "sessionInfo": "string"
  },
  "tenantId": "string",
  "totpVerificationInfo": {
    "verificationCode": "string"
  }
}
```

Finalizes sign-in by verifying MFA challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mfaEnrollmentId|string|false|none|The MFA enrollment ID from the user's list of current MFA enrollments.|
|mfaPendingCredential|string|false|none|Required. Pending credential from first factor sign-in.|
|phoneVerificationInfo|[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2finalizemfaphonerequestinfo)|false|none|Proof of completion of the SMS based MFA challenge.|
|tenantId|string|false|none|The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|
|totpVerificationInfo|[GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo](#schemagooglecloudidentitytoolkitv2mfatotpsigninrequestinfo)|false|none|Proof of completion of the TOTP based MFA challenge.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse">GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfasigninresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfasigninresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfasigninresponse"></a>

```json
{
  "idToken": "string",
  "phoneAuthInfo": {
    "androidVerificationProof": "string",
    "androidVerificationProofExpireTime": "string",
    "phoneNumber": "string"
  },
  "refreshToken": "string"
}
```

FinalizeMfaSignIn response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|ID token for the authenticated user.|
|phoneAuthInfo|[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo](#schemagooglecloudidentitytoolkitv2finalizemfaphoneresponseinfo)|false|none|Extra phone auth info, including android verification proof.|
|refreshToken|string|false|none|Refresh token for the authenticated user.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo">GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfatotpenrollmentrequestinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfatotpenrollmentrequestinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfatotpenrollmentrequestinfo"></a>

```json
{
  "sessionInfo": "string",
  "verificationCode": "string"
}
```

Mfa request info specific to TOTP auth for FinalizeMfa.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionInfo|string|false|none|An opaque string that represents the enrollment session.|
|verificationCode|string|false|none|User-entered verification code.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo">GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizemfatotpenrollmentresponseinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizemfatotpenrollmentresponseinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizemfatotpenrollmentresponseinfo"></a>

```json
{}
```

Mfa response info specific to TOTP auth for FinalizeMfa.

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest">GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizepasskeyenrollmentrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizepasskeyenrollmentrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizepasskeyenrollmentrequest"></a>

```json
{
  "authenticatorRegistrationResponse": {
    "authenticatorAttestationResponse": {
      "attestationObject": "string",
      "clientDataJson": "string",
      "transports": [
        "string"
      ]
    },
    "credentialId": "string",
    "credentialType": "string"
  },
  "idToken": "string",
  "tenantId": "string"
}
```

FinalizePasskeyEnrollment request. Registers passkey as a first factor for the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticatorRegistrationResponse|[GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse](#schemagooglecloudidentitytoolkitv2authenticatorregistrationresponse)|false|none|Optional. The registration object from the authenticator.|
|idToken|string|false|none|Required. The GCIP ID token of the signed-in user|
|tenantId|string|false|none|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse">GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizepasskeyenrollmentresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizepasskeyenrollmentresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizepasskeyenrollmentresponse"></a>

```json
{
  "idToken": "string",
  "refreshToken": "string"
}
```

FinalizePasskeyEnrollment response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|ID token for the authenticated user.|
|refreshToken|string|false|none|Refresh token for the authenticated user.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest">GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizepasskeysigninrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizepasskeysigninrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizepasskeysigninrequest"></a>

```json
{
  "authenticatorAuthenticationResponse": {
    "authenticatorAssertionResponse": {
      "authenticatorData": "string",
      "clientDataJson": "string",
      "signature": "string",
      "userHandle": "string"
    },
    "credentialId": "string",
    "credentialType": "string"
  },
  "sessionId": "string",
  "tenantId": "string"
}
```

Request to finalize a passkey sign-in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticatorAuthenticationResponse|[GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse](#schemagooglecloudidentitytoolkitv2authenticatorauthenticationresponse)|false|none|Required. The authentication response object from the authenticator.|
|sessionId|string(byte)|false|none|Optional. The session ID that was passed into StartPasskeySignIn, if any.|
|tenantId|string|false|none|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2FinalizePasskeySignInResponse">GoogleCloudIdentitytoolkitV2FinalizePasskeySignInResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2finalizepasskeysigninresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2FinalizePasskeySignInResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2finalizepasskeysigninresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2finalizepasskeysigninresponse"></a>

```json
{
  "idToken": "string",
  "refreshToken": "string"
}
```

Response for FinalizePasskeySignIn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|ID token for the authenticated user.|
|refreshToken|string|false|none|Refresh token for the authenticated user.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo">GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2mfatotpsigninrequestinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2mfatotpsigninrequestinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2mfatotpsigninrequestinfo"></a>

```json
{
  "verificationCode": "string"
}
```

TOTP verification info for FinalizeMfaSignInRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verificationCode|string|false|none|User-entered verification code.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2PublicKeyCredentialCreationOptions">GoogleCloudIdentitytoolkitV2PublicKeyCredentialCreationOptions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2publickeycredentialcreationoptions"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2PublicKeyCredentialCreationOptions"></a>
<a id="tocSgooglecloudidentitytoolkitv2publickeycredentialcreationoptions"></a>
<a id="tocsgooglecloudidentitytoolkitv2publickeycredentialcreationoptions"></a>

```json
{
  "authenticatorSelection": {
    "authenticatorAttachment": "string",
    "requireResidentKey": true,
    "userVerification": "string"
  },
  "challenge": "string",
  "excludeCredentials": [
    {
      "credentialId": "string",
      "credentialType": "string",
      "transports": [
        "string"
      ]
    }
  ],
  "pubKeyCredParams": [
    {
      "alg": "string",
      "credentialType": "string"
    }
  ],
  "rp": {
    "id": "string"
  },
  "user": {
    "id": "string"
  }
}
```

Parameters for creating a FIDO key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticatorSelection|[GoogleCloudIdentitytoolkitV2AuthenticatorSelectionCriteria](#schemagooglecloudidentitytoolkitv2authenticatorselectioncriteria)|false|none|Criteria for the authenticator to create a credential.|
|challenge|string(byte)|false|none|The FIDO challenge.|
|excludeCredentials|[[GoogleCloudIdentitytoolkitV2PublicKeyCredentialDescriptor](#schemagooglecloudidentitytoolkitv2publickeycredentialdescriptor)]|false|none|Credentials already mapped to this user.|
|pubKeyCredParams|[[GoogleCloudIdentitytoolkitV2PublicKeyCredentialParameters](#schemagooglecloudidentitytoolkitv2publickeycredentialparameters)]|false|none|Lists the supported key types and signature algorithms.|
|rp|[GoogleCloudIdentitytoolkitV2RpEntity](#schemagooglecloudidentitytoolkitv2rpentity)|false|none|The relying party attributes for creating a new credential.|
|user|[GoogleCloudIdentitytoolkitV2UserEntity](#schemagooglecloudidentitytoolkitv2userentity)|false|none|The user attributes for creating a new credential.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2PublicKeyCredentialDescriptor">GoogleCloudIdentitytoolkitV2PublicKeyCredentialDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2publickeycredentialdescriptor"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2PublicKeyCredentialDescriptor"></a>
<a id="tocSgooglecloudidentitytoolkitv2publickeycredentialdescriptor"></a>
<a id="tocsgooglecloudidentitytoolkitv2publickeycredentialdescriptor"></a>

```json
{
  "credentialId": "string",
  "credentialType": "string",
  "transports": [
    "string"
  ]
}
```

Descriptor for a public key credential.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentialId|string(byte)|false|none|The identifier for the credential.|
|credentialType|string|false|none|The type of public key.|
|transports|[string]|false|none|Authenticator transports that are supported by the authenticator.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2PublicKeyCredentialParameters">GoogleCloudIdentitytoolkitV2PublicKeyCredentialParameters</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2publickeycredentialparameters"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2PublicKeyCredentialParameters"></a>
<a id="tocSgooglecloudidentitytoolkitv2publickeycredentialparameters"></a>
<a id="tocsgooglecloudidentitytoolkitv2publickeycredentialparameters"></a>

```json
{
  "alg": "string",
  "credentialType": "string"
}
```

Parameters to create a public credential.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string(int64)|false|none|The COSE registry number of the cryptographic signature algorithm.|
|credentialType|string|false|none|The type of public key to be created.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2PublicKeyCredentialRequestOptions">GoogleCloudIdentitytoolkitV2PublicKeyCredentialRequestOptions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2publickeycredentialrequestoptions"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2PublicKeyCredentialRequestOptions"></a>
<a id="tocSgooglecloudidentitytoolkitv2publickeycredentialrequestoptions"></a>
<a id="tocsgooglecloudidentitytoolkitv2publickeycredentialrequestoptions"></a>

```json
{
  "challenge": "string",
  "rpId": "string",
  "userVerification": "string"
}
```

Parameters for signing a challenge with a FIDO key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string(byte)|false|none|The FIDO challenge.|
|rpId|string|false|none|The relying party identifier.|
|userVerification|string|false|none|The requirements regarding user verification.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2RecaptchaConfig">GoogleCloudIdentitytoolkitV2RecaptchaConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2recaptchaconfig"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2RecaptchaConfig"></a>
<a id="tocSgooglecloudidentitytoolkitv2recaptchaconfig"></a>
<a id="tocsgooglecloudidentitytoolkitv2recaptchaconfig"></a>

```json
{
  "recaptchaEnforcementState": [
    {
      "enforcementState": "ENFORCEMENT_STATE_UNSPECIFIED",
      "provider": "RECAPTCHA_PROVIDER_UNSPECIFIED"
    }
  ],
  "recaptchaKey": "string"
}
```

Configuration for reCAPTCHA

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recaptchaEnforcementState|[[GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState](#schemagooglecloudidentitytoolkitv2recaptchaenforcementstate)]|false|none|The reCAPTCHA enforcement state for the providers that GCIP supports reCAPTCHA protection.|
|recaptchaKey|string|false|none|The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}".|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState">GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2recaptchaenforcementstate"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState"></a>
<a id="tocSgooglecloudidentitytoolkitv2recaptchaenforcementstate"></a>
<a id="tocsgooglecloudidentitytoolkitv2recaptchaenforcementstate"></a>

```json
{
  "enforcementState": "ENFORCEMENT_STATE_UNSPECIFIED",
  "provider": "RECAPTCHA_PROVIDER_UNSPECIFIED"
}
```

Enforcement states for reCAPTCHA protection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enforcementState|string|false|none|The reCAPTCHA enforcement state for the provider.|
|provider|string|false|none|The provider that has reCAPTCHA protection.|

#### Enumerated Values

|Property|Value|
|---|---|
|enforcementState|ENFORCEMENT_STATE_UNSPECIFIED|
|enforcementState|OFF|
|enforcementState|AUDIT|
|enforcementState|ENFORCE|
|provider|RECAPTCHA_PROVIDER_UNSPECIFIED|
|provider|EMAIL_PASSWORD_PROVIDER|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2RevokeTokenRequest">GoogleCloudIdentitytoolkitV2RevokeTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2revoketokenrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2RevokeTokenRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2revoketokenrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2revoketokenrequest"></a>

```json
{
  "idToken": "string",
  "providerId": "string",
  "redirectUri": "string",
  "tenantId": "string",
  "token": "string",
  "tokenType": "TOKEN_TYPE_UNSPECIFIED"
}
```

Request message for RevokeToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|Required. A valid Identity Platform ID token to link the account. If there was a successful token revocation request on the account and no tokens are generated after the revocation, the duplicate requests will be ignored and returned immediately.|
|providerId|string|false|none|Required. The idp provider for the token. Currently only supports Apple Idp. The format should be "apple.com".|
|redirectUri|string|false|none|The redirect URI provided in the initial authorization request made by the client to the IDP. The URI must use the HTTPS protocol, include a domain name, and can’t contain an IP address or localhost. Required if token_type is CODE.|
|tenantId|string|false|none|The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|
|token|string|false|none|Required. The token to be revoked. If an authorization_code is passed in, the API will first exchange the code for access token and then revoke the token exchanged.|
|tokenType|string|false|none|Required. The type of the token to be revoked.|

#### Enumerated Values

|Property|Value|
|---|---|
|tokenType|TOKEN_TYPE_UNSPECIFIED|
|tokenType|REFRESH_TOKEN|
|tokenType|ACCESS_TOKEN|
|tokenType|CODE|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2RevokeTokenResponse">GoogleCloudIdentitytoolkitV2RevokeTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2revoketokenresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2RevokeTokenResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2revoketokenresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2revoketokenresponse"></a>

```json
{}
```

Response message for RevokeToken. Empty for now.

<h2 id="tocS_GoogleCloudIdentitytoolkitV2RpEntity">GoogleCloudIdentitytoolkitV2RpEntity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2rpentity"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2RpEntity"></a>
<a id="tocSgooglecloudidentitytoolkitv2rpentity"></a>
<a id="tocsgooglecloudidentitytoolkitv2rpentity"></a>

```json
{
  "id": "string"
}
```

The entity object for the Relying Party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The RP ID of the FIDO Relying Party.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest">GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfaenrollmentrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfaenrollmentrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfaenrollmentrequest"></a>

```json
{
  "idToken": "string",
  "phoneEnrollmentInfo": {
    "autoRetrievalInfo": {
      "appSignatureHash": "string"
    },
    "iosReceipt": "string",
    "iosSecret": "string",
    "phoneNumber": "string",
    "playIntegrityToken": "string",
    "recaptchaToken": "string",
    "safetyNetToken": "string"
  },
  "tenantId": "string",
  "totpEnrollmentInfo": {}
}
```

Sends MFA enrollment verification SMS for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|Required. User's ID token.|
|phoneEnrollmentInfo|[GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2startmfaphonerequestinfo)|false|none|Verification info to authorize sending an SMS for phone verification.|
|tenantId|string|false|none|The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.|
|totpEnrollmentInfo|[GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo](#schemagooglecloudidentitytoolkitv2startmfatotpenrollmentrequestinfo)|false|none|Sign-in info specific to TOTP auth.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse">GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfaenrollmentresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfaenrollmentresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfaenrollmentresponse"></a>

```json
{
  "phoneSessionInfo": {
    "sessionInfo": "string"
  },
  "totpSessionInfo": {
    "finalizeEnrollmentTime": "string",
    "hashingAlgorithm": "string",
    "periodSec": 0,
    "sessionInfo": "string",
    "sharedSecretKey": "string",
    "verificationCodeLength": 0
  }
}
```

StartMfaEnrollment response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneSessionInfo|[GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo](#schemagooglecloudidentitytoolkitv2startmfaphoneresponseinfo)|false|none|Verification info to authorize sending an SMS for phone verification.|
|totpSessionInfo|[GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo](#schemagooglecloudidentitytoolkitv2startmfatotpenrollmentresponseinfo)|false|none|Enrollment response info specific to TOTP auth.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo">GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfaphonerequestinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfaphonerequestinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfaphonerequestinfo"></a>

```json
{
  "autoRetrievalInfo": {
    "appSignatureHash": "string"
  },
  "iosReceipt": "string",
  "iosSecret": "string",
  "phoneNumber": "string",
  "playIntegrityToken": "string",
  "recaptchaToken": "string",
  "safetyNetToken": "string"
}
```

App Verification info for a StartMfa request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRetrievalInfo|[GoogleCloudIdentitytoolkitV2AutoRetrievalInfo](#schemagooglecloudidentitytoolkitv2autoretrievalinfo)|false|none|Android only. Used by Google Play Services to identify the app for auto-retrieval.|
|iosReceipt|string|false|none|iOS only. Receipt of successful app token validation with APNS.|
|iosSecret|string|false|none|iOS only. Secret delivered to iOS app via APNS.|
|phoneNumber|string|false|none|Required for enrollment. Phone number to be enrolled as MFA.|
|playIntegrityToken|string|false|none|Android only. Used to assert application identity in place of a recaptcha token (or safety net token). A Play Integrity Token can be generated via the [PlayIntegrity API] (https://developer.android.com/google/play/integrity) with applying SHA256 to the `phone_number` field as the nonce.|
|recaptchaToken|string|false|none|Web only. Recaptcha solution.|
|safetyNetToken|string|false|none|Android only. Used to assert application identity in place of a recaptcha token. A SafetyNet Token can be generated via the [SafetyNet Android Attestation API](https://developer.android.com/training/safetynet/attestation.html), with the Base64 encoding of the `phone_number` field as the nonce.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo">GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfaphoneresponseinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfaphoneresponseinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfaphoneresponseinfo"></a>

```json
{
  "sessionInfo": "string"
}
```

Phone Verification info for a StartMfa response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionInfo|string|false|none|An opaque string that represents the enrollment session.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaSignInRequest">GoogleCloudIdentitytoolkitV2StartMfaSignInRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfasigninrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaSignInRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfasigninrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfasigninrequest"></a>

```json
{
  "mfaEnrollmentId": "string",
  "mfaPendingCredential": "string",
  "phoneSignInInfo": {
    "autoRetrievalInfo": {
      "appSignatureHash": "string"
    },
    "iosReceipt": "string",
    "iosSecret": "string",
    "phoneNumber": "string",
    "playIntegrityToken": "string",
    "recaptchaToken": "string",
    "safetyNetToken": "string"
  },
  "tenantId": "string"
}
```

Starts multi-factor sign-in by sending the multi-factor auth challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mfaEnrollmentId|string|false|none|Required. MFA enrollment id from the user's list of current MFA enrollments.|
|mfaPendingCredential|string|false|none|Required. Pending credential from first factor sign-in.|
|phoneSignInInfo|[GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo](#schemagooglecloudidentitytoolkitv2startmfaphonerequestinfo)|false|none|Verification info to authorize sending an SMS for phone verification.|
|tenantId|string|false|none|The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaSignInResponse">GoogleCloudIdentitytoolkitV2StartMfaSignInResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfasigninresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaSignInResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfasigninresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfasigninresponse"></a>

```json
{
  "phoneResponseInfo": {
    "sessionInfo": "string"
  }
}
```

StartMfaSignIn response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneResponseInfo|[GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo](#schemagooglecloudidentitytoolkitv2startmfaphoneresponseinfo)|false|none|MultiFactor sign-in session information specific to SMS-type second factors. Along with the one-time code retrieved from the sent SMS, the contents of this session information should be passed to FinalizeMfaSignIn to complete the sign in.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo">GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfatotpenrollmentrequestinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfatotpenrollmentrequestinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfatotpenrollmentrequestinfo"></a>

```json
{}
```

Mfa request info specific to TOTP auth for StartMfa.

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo">GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startmfatotpenrollmentresponseinfo"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo"></a>
<a id="tocSgooglecloudidentitytoolkitv2startmfatotpenrollmentresponseinfo"></a>
<a id="tocsgooglecloudidentitytoolkitv2startmfatotpenrollmentresponseinfo"></a>

```json
{
  "finalizeEnrollmentTime": "string",
  "hashingAlgorithm": "string",
  "periodSec": 0,
  "sessionInfo": "string",
  "sharedSecretKey": "string",
  "verificationCodeLength": 0
}
```

Mfa response info specific to TOTP auth for StartMfa.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finalizeEnrollmentTime|string(google-datetime)|false|none|The time by which the enrollment must finish.|
|hashingAlgorithm|string|false|none|The hashing algorithm used to generate the verification code.|
|periodSec|integer(int32)|false|none|Duration in seconds at which the verification code will change.|
|sessionInfo|string|false|none|An encoded string that represents the enrollment session.|
|sharedSecretKey|string|false|none|A base 32 encoded string that represents the shared TOTP secret. The base 32 encoding is the one specified by [RFC4648#section-6](https://datatracker.ietf.org/doc/html/rfc4648#section-6). (This is the same as the base 32 encoding from [RFC3548#section-5](https://datatracker.ietf.org/doc/html/rfc3548#section-5).)|
|verificationCodeLength|integer(int32)|false|none|The length of the verification code that needs to be generated.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest">GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startpasskeyenrollmentrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2startpasskeyenrollmentrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2startpasskeyenrollmentrequest"></a>

```json
{
  "idToken": "string",
  "tenantId": "string"
}
```

Starts passkey enrollment for passkey as a first factor by returning the FIDO challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|Required. The GCIP ID token of the signed-in user|
|tenantId|string|false|none|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse">GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startpasskeyenrollmentresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2startpasskeyenrollmentresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2startpasskeyenrollmentresponse"></a>

```json
{
  "credentialCreationOptions": {
    "authenticatorSelection": {
      "authenticatorAttachment": "string",
      "requireResidentKey": true,
      "userVerification": "string"
    },
    "challenge": "string",
    "excludeCredentials": [
      {
        "credentialId": "string",
        "credentialType": "string",
        "transports": [
          "string"
        ]
      }
    ],
    "pubKeyCredParams": [
      {
        "alg": "string",
        "credentialType": "string"
      }
    ],
    "rp": {
      "id": "string"
    },
    "user": {
      "id": "string"
    }
  }
}
```

StartPasskeyEnrollment response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentialCreationOptions|[GoogleCloudIdentitytoolkitV2PublicKeyCredentialCreationOptions](#schemagooglecloudidentitytoolkitv2publickeycredentialcreationoptions)|false|none|Parameters specified for the authenticator to create a public key.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest">GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startpasskeysigninrequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2startpasskeysigninrequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2startpasskeysigninrequest"></a>

```json
{
  "sessionId": "string",
  "tenantId": "string"
}
```

Starts passkey sign-in by returning the FIDO challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string(byte)|false|none|Optional. The developer can bind their own concept of a user session to this flow.|
|tenantId|string|false|none|Optional. The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2StartPasskeySignInResponse">GoogleCloudIdentitytoolkitV2StartPasskeySignInResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2startpasskeysigninresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2StartPasskeySignInResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2startpasskeysigninresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2startpasskeysigninresponse"></a>

```json
{
  "credentialRequestOptions": {
    "challenge": "string",
    "rpId": "string",
    "userVerification": "string"
  }
}
```

Response for StartPasskeySignIn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentialRequestOptions|[GoogleCloudIdentitytoolkitV2PublicKeyCredentialRequestOptions](#schemagooglecloudidentitytoolkitv2publickeycredentialrequestoptions)|false|none|Parameters specified for the authenticator to sign a challenge.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2UserEntity">GoogleCloudIdentitytoolkitV2UserEntity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2userentity"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2UserEntity"></a>
<a id="tocSgooglecloudidentitytoolkitv2userentity"></a>
<a id="tocsgooglecloudidentitytoolkitv2userentity"></a>

```json
{
  "id": "string"
}
```

The entity object for the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(byte)|false|none|The user ID.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2WithdrawMfaRequest">GoogleCloudIdentitytoolkitV2WithdrawMfaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2withdrawmfarequest"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2WithdrawMfaRequest"></a>
<a id="tocSgooglecloudidentitytoolkitv2withdrawmfarequest"></a>
<a id="tocsgooglecloudidentitytoolkitv2withdrawmfarequest"></a>

```json
{
  "idToken": "string",
  "mfaEnrollmentId": "string",
  "tenantId": "string"
}
```

Withdraws MFA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|Required. User's ID token.|
|mfaEnrollmentId|string|false|none|Required. MFA enrollment id from a current MFA enrollment.|
|tenantId|string|false|none|The ID of the Identity Platform tenant that the user unenrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.|

<h2 id="tocS_GoogleCloudIdentitytoolkitV2WithdrawMfaResponse">GoogleCloudIdentitytoolkitV2WithdrawMfaResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudidentitytoolkitv2withdrawmfaresponse"></a>
<a id="schema_GoogleCloudIdentitytoolkitV2WithdrawMfaResponse"></a>
<a id="tocSgooglecloudidentitytoolkitv2withdrawmfaresponse"></a>
<a id="tocsgooglecloudidentitytoolkitv2withdrawmfaresponse"></a>

```json
{
  "idToken": "string",
  "refreshToken": "string"
}
```

Withdraws MultiFactorAuth response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idToken|string|false|none|ID token updated to reflect removal of the second factor.|
|refreshToken|string|false|none|Refresh token updated to reflect removal of the second factor.|

<h2 id="tocS_GoogleIamV1AuditConfig">GoogleIamV1AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditconfig"></a>
<a id="schema_GoogleIamV1AuditConfig"></a>
<a id="tocSgoogleiamv1auditconfig"></a>
<a id="tocsgoogleiamv1auditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[GoogleIamV1AuditLogConfig](#schemagoogleiamv1auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1AuditLogConfig">GoogleIamV1AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditlogconfig"></a>
<a id="schema_GoogleIamV1AuditLogConfig"></a>
<a id="tocSgoogleiamv1auditlogconfig"></a>
<a id="tocsgoogleiamv1auditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_GoogleIamV1Binding">GoogleIamV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1binding"></a>
<a id="schema_GoogleIamV1Binding"></a>
<a id="tocSgoogleiamv1binding"></a>
<a id="tocsgoogleiamv1binding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIamV1GetIamPolicyRequest">GoogleIamV1GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1getiampolicyrequest"></a>
<a id="schema_GoogleIamV1GetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1getiampolicyrequest"></a>
<a id="tocsgoogleiamv1getiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GoogleIamV1GetPolicyOptions](#schemagoogleiamv1getpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GoogleIamV1GetPolicyOptions">GoogleIamV1GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1getpolicyoptions"></a>
<a id="schema_GoogleIamV1GetPolicyOptions"></a>
<a id="tocSgoogleiamv1getpolicyoptions"></a>
<a id="tocsgoogleiamv1getpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1Policy">GoogleIamV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policy"></a>
<a id="schema_GoogleIamV1Policy"></a>
<a id="tocSgoogleiamv1policy"></a>
<a id="tocsgoogleiamv1policy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[GoogleIamV1AuditConfig](#schemagoogleiamv1auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1Binding](#schemagoogleiamv1binding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1SetIamPolicyRequest">GoogleIamV1SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1setiampolicyrequest"></a>
<a id="schema_GoogleIamV1SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1setiampolicyrequest"></a>
<a id="tocsgoogleiamv1setiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_GoogleIamV1TestIamPermissionsRequest">GoogleIamV1TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1testiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_GoogleIamV1TestIamPermissionsResponse">GoogleIamV1TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1testiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

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

<h2 id="tocS_GoogleTypeExpr">GoogleTypeExpr</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypeexpr"></a>
<a id="schema_GoogleTypeExpr"></a>
<a id="tocSgoogletypeexpr"></a>
<a id="tocsgoogletypeexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|
